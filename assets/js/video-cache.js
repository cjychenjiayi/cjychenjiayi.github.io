/* Warm video blocks after the page and its images, without competing with playback. */
(function () {
  'use strict';
  const config = window.JIAYI_VIDEO_CACHE;
  if (!config || !('serviceWorker' in navigator) || !window.isSecureContext) return;
  const connection = navigator.connection;
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const idle = () => new Promise(resolve => {
    if ('requestIdleCallback' in window) requestIdleCallback(resolve, { timeout: 1500 });
    else setTimeout(resolve, 100);
  });
  function busy() {
    return document.hidden || !navigator.onLine || (connection && connection.saveData) ||
      [...document.querySelectorAll('video')].some(video => (!video.paused && !video.ended) || video.seeking);
  }
  function send(message) {
    return new Promise((resolve, reject) => {
      const worker = navigator.serviceWorker.controller;
      if (!worker) return reject(new Error('Video cache is not active'));
      const channel = new MessageChannel();
      const timeout = setTimeout(() => { channel.port1.close(); reject(new Error('Video cache timed out')); }, 130000);
      channel.port1.onmessage = event => {
        clearTimeout(timeout); channel.port1.close(); resolve(event.data);
      };
      worker.postMessage(message, [channel.port2]);
    });
  }
  function pauseIfBusy() {
    if (busy()) send({ type: 'PAUSE_VIDEO_PREFETCH' }).catch(() => {});
  }
  ['play', 'seeking', 'waiting'].forEach(type => document.addEventListener(type, pauseIfBusy, true));
  document.addEventListener('visibilitychange', pauseIfBusy);
  window.addEventListener('pagehide', () => send({ type: 'PAUSE_VIDEO_PREFETCH' }).catch(() => {}));
  if (connection) connection.addEventListener('change', pauseIfBusy);

  async function warmPageImages() {
    const urls = new Set([...document.images].map(image => image.currentSrc || image.src));
    document.querySelectorAll('video').forEach(video => {
      const poster = video.getAttribute('data-poster') || video.getAttribute('poster');
      if (poster) urls.add(new URL(poster, document.baseURI).href);
    });
    const queue = [...urls].filter(Boolean);
    async function next() {
      while (queue.length) {
        while (busy()) await sleep(1000);
        const url = queue.shift();
        await new Promise(resolve => {
          const image = new Image();
          const timer = setTimeout(resolve, 10000);
          image.fetchPriority = 'low';
          image.decoding = 'async';
          image.onload = image.onerror = () => { clearTimeout(timer); resolve(); };
          image.src = url;
        });
      }
    }
    await Promise.all([next(), next()]);
  }

  async function start() {
    if (connection && connection.saveData) return;
    await idle();
    await navigator.serviceWorker.register('/video-cache-sw.js', { scope: '/', updateViaCache: 'none' });
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller) {
      await new Promise(resolve => {
        const timer = setTimeout(resolve, 5000);
        navigator.serviceWorker.addEventListener('controllerchange', () => { clearTimeout(timer); resolve(); }, { once: true });
      });
    }
    if (!navigator.serviceWorker.controller) return;
    if (document.fonts) await document.fonts.ready;
    await warmPageImages();

    // Warm each opening first, then fill the remaining blocks sequentially.
    const jobs = config.assets.map(asset => ({ asset, index: 0 }));
    config.assets.forEach(asset => {
      for (let index = 1; index < Math.ceil(asset.size / config.chunkSize); index++) jobs.push({ asset, index });
    });
    const unavailable = new Set();
    for (const job of jobs) {
      if (unavailable.has(job.asset.url)) continue;
      let attempts = 0;
      while (attempts < 3) {
        while (busy()) await sleep(1000);
        await idle();
        if (busy()) continue;
        let result;
        try { result = await send({ type: 'PREFETCH_VIDEO_BLOCK', url: job.asset.url, index: job.index }); }
        catch (_) { result = { retry: true }; }
        if (result.unavailable) return;
        if (result.unsupported) { unavailable.add(job.asset.url); break; }
        if (result.paused) { await sleep(1000); continue; }
        if (result.retry) { attempts++; await sleep(1500); continue; }
        if (!result.cached) await sleep(connection && connection.effectiveType === '3g' ? 1000 : 350);
        break;
      }
    }
  }
  const afterLoad = () => setTimeout(() => start().catch(() => {}), 2500);
  if (document.readyState === 'complete') afterLoad();
  else window.addEventListener('load', afterLoad, { once: true });
}());
