/* Cache video bytes only. HTML and all other page resources stay on the network. */
importScripts('/assets/js/video-cache-manifest.js');

const CONFIG = self.JIAYI_VIDEO_CACHE;
const CACHE_NAME = 'jiayi-video-chunks-v1';
const CHUNK_SIZE = CONFIG.chunkSize;
const ASSETS = new Map(CONFIG.assets.map(asset => [new URL(asset.url, self.location.origin).href, asset]));
if (CONFIG.assets.reduce((total, asset) => total + asset.size, 0) > CONFIG.maxBytes) {
  throw new Error('Video manifest exceeds the cache budget');
}
const cacheReady = caches.open(CACHE_NAME).catch(() => null);
const pending = new Map();
const unsupported = new Set();
let writable = true;
let transfers = 0;

function assetFor(url) {
  return ASSETS.get(new URL(url, self.location.origin).href);
}

function blockKey(asset, index) {
  return new URL('/__video_chunks__/' + asset.version + '/' + index, self.location.origin).href;
}

function blockLength(asset, index) {
  return Math.min(CHUNK_SIZE, asset.size - index * CHUNK_SIZE);
}

function parseRange(header, size) {
  if (!header) return { start: 0, end: size - 1, partial: false };
  const match = /^bytes=(\d*)-(\d*)$/i.exec(header.trim());
  if (!match || (!match[1] && !match[2])) return null;
  let start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
  let end = match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || end < start || (!match[1] && Number(match[2]) === 0)) return null;
  return { start, end, partial: true };
}

function pauseBackground() {
  for (const task of pending.values()) {
    if (task.background) task.controller.abort();
  }
}

async function readBlock(asset, index) {
  const cache = await cacheReady;
  if (!cache) return null;
  try {
    const response = await cache.match(blockKey(asset, index));
    if (!response) return null;
    const bytes = await response.arrayBuffer();
    if (bytes.byteLength === blockLength(asset, index)) return bytes;
    await cache.delete(blockKey(asset, index));
  } catch (_) {}
  return null;
}

async function getBlock(asset, index, background) {
  const saved = await readBlock(asset, index);
  if (saved) return saved;
  const key = blockKey(asset, index);
  if (pending.has(key)) {
    try { return await pending.get(key).promise; }
    catch (error) { if (background || error.name !== 'AbortError') throw error; }
  }
  const controller = new AbortController();
  const task = { controller, background };
  task.promise = (async () => {
    const start = index * CHUNK_SIZE;
    const end = start + blockLength(asset, index) - 1;
    let timedOut = false;
    const timeout = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, background ? 120000 : 30000);
    try {
      const response = await fetch(asset.url, {
        headers: { Range: 'bytes=' + start + '-' + end },
        cache: 'no-store', signal: controller.signal,
        priority: background ? 'low' : 'high'
      });
      const expected = 'bytes ' + start + '-' + end + '/' + asset.size;
      if (response.status !== 206 || response.headers.get('Content-Range') !== expected) {
        if (response.body) await response.body.cancel();
        unsupported.add(asset.url);
        throw new Error('Video range response unavailable or changed');
      }
      const bytes = await response.arrayBuffer();
      if (bytes.byteLength !== blockLength(asset, index)) throw new Error('Incomplete video block');
      const cache = await cacheReady;
      if (cache && writable) {
        try {
          // Cache.put rejects 206 responses; each complete block is stored as a 200.
          await cache.put(key, new Response(bytes.slice(0), {
            status: 200, headers: { 'Content-Type': 'application/octet-stream' }
          }));
        } catch (_) { writable = false; }
      }
      return bytes;
    } catch (error) {
      // A stalled connection gets a bounded retry; a playback pause resumes later.
      if (timedOut) {
        const timeoutError = new Error('Video block request timed out');
        timeoutError.name = 'TimeoutError';
        throw timeoutError;
      }
      throw error;
    } finally { clearTimeout(timeout); }
  })();
  pending.set(key, task);
  try { return await task.promise; }
  finally { if (pending.get(key) === task) pending.delete(key); }
}

async function videoResponse(event, asset) {
  const request = event.request;
  const headers = new Headers({
    'Content-Type': 'video/mp4', 'Accept-Ranges': 'bytes',
    'Content-Length': String(asset.size)
  });
  if (request.method === 'HEAD') return new Response(null, { headers });
  const header = request.headers.get('Range');
  // Leave multipart and conditional ranges to the origin.
  if ((header && header.includes(',')) || request.headers.has('If-Range')) return fetch(request);
  const range = parseRange(header, asset.size);
  if (!range) return new Response(null, {
    status: 416, headers: { 'Content-Range': 'bytes */' + asset.size, 'Accept-Ranges': 'bytes' }
  });
  if (unsupported.has(asset.url) || !(await cacheReady)) return fetch(request);

  let first = await readBlock(asset, Math.floor(range.start / CHUNK_SIZE));
  // Safari may probe with only two bytes. Don't download 1 MB for that probe.
  if (!first && range.end - range.start < 65536) return fetch(request);
  transfers++;
  pauseBackground();
  let finished = false;
  let cancelled = false;
  let position = range.start;
  let complete;
  event.waitUntil(new Promise(resolve => { complete = resolve; }));
  function finish() {
    if (!finished) { finished = true; transfers--; complete(); }
  }
  try {
    if (!first) first = await getBlock(asset, Math.floor(position / CHUNK_SIZE), false);
  } catch (_) {
    finish();
    return fetch(request);
  }
  headers.set('Content-Length', String(range.end - range.start + 1));
  if (range.partial) headers.set('Content-Range', 'bytes ' + range.start + '-' + range.end + '/' + asset.size);
  const body = new ReadableStream({
    async pull(stream) {
      try {
        const index = Math.floor(position / CHUNK_SIZE);
        const bytes = first || await getBlock(asset, index, false);
        first = null;
        if (cancelled) return;
        const offset = position - index * CHUNK_SIZE;
        const length = Math.min(bytes.byteLength - offset, range.end - position + 1);
        stream.enqueue(new Uint8Array(bytes, offset, length));
        position += length;
        if (position > range.end) { stream.close(); finish(); }
      } catch (error) {
        if (!cancelled) stream.error(error);
        finish();
      }
    },
    cancel() { cancelled = true; finish(); }
  });
  return new Response(body, { status: range.partial ? 206 : 200, headers });
}

self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil((async () => {
  const names = await caches.keys();
  await Promise.all(names.filter(name => name.startsWith('jiayi-video-chunks-') && name !== CACHE_NAME).map(name => caches.delete(name)));
  const cache = await cacheReady;
  if (cache) {
    const valid = new Set();
    for (const asset of CONFIG.assets) {
      for (let index = 0; index < Math.ceil(asset.size / CHUNK_SIZE); index++) valid.add(blockKey(asset, index));
    }
    for (const request of await cache.keys()) {
      if (!valid.has(request.url)) await cache.delete(request);
    }
  }
  await self.clients.claim();
})()));

self.addEventListener('fetch', event => {
  const asset = assetFor(event.request.url);
  if (asset && ['GET', 'HEAD'].includes(event.request.method)) {
    event.respondWith(videoResponse(event, asset).catch(() => fetch(event.request)));
  }
});

self.addEventListener('message', event => {
  const reply = value => { if (event.ports[0]) event.ports[0].postMessage(value); };
  if (event.data && event.data.type === 'PAUSE_VIDEO_PREFETCH') {
    pauseBackground(); reply({ paused: true }); return;
  }
  if (!event.data || event.data.type !== 'PREFETCH_VIDEO_BLOCK') return;
  event.waitUntil((async () => {
    const asset = assetFor(event.data.url);
    const index = event.data.index;
    if (!asset || !Number.isInteger(index) || index < 0 || index >= Math.ceil(asset.size / CHUNK_SIZE)) return reply({ unsupported: true });
    if (!writable || !(await cacheReady)) return reply({ unavailable: true });
    if (unsupported.has(asset.url)) return reply({ unsupported: true });
    if (transfers || [...pending.values()].some(task => task.background)) return reply({ paused: true });
    if (await readBlock(asset, index)) return reply({ cached: true });
    try {
      await getBlock(asset, index, true);
      reply({ cached: false, unavailable: !writable });
    } catch (error) {
      reply({ paused: error.name === 'AbortError', unsupported: unsupported.has(asset.url), retry: true });
    }
  })());
});
