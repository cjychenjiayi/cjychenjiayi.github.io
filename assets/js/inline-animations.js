// Load full inline animations when visible, and pause them off screen.
(function () {
  var previews = document.querySelectorAll('video[data-poster]');
  function showPoster(video) {
    video.poster = video.getAttribute('data-poster');
    video.removeAttribute('data-poster');
  }
  if ('IntersectionObserver' in window) {
    var previewObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          showPoster(entry.target);
          previewObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '300px' });
    previews.forEach(function (video) { previewObserver.observe(video); });
  } else {
    previews.forEach(showPoster);
  }

  var videos = document.querySelectorAll('.internship-animation');
  var visible = new Set();

  function play(video) {
    if (document.hidden || !visible.has(video)) return;
    var source = video.querySelector('source');
    if (!source.getAttribute('src')) {
      source.setAttribute('src', source.getAttribute('data-src'));
      video.load();
    }
    video.muted = true;
    var pending = video.play();
    if (pending) pending.catch(function (error) {
      if (error.name === 'NotAllowedError' && visible.has(video)) {
        video.controls = true;
      }
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visible.add(entry.target);
          play(entry.target);
        } else {
          visible.delete(entry.target);
          entry.target.pause();
        }
      });
    }, { threshold: 0.1 });
    videos.forEach(function (video) { observer.observe(video); });
  } else {
    videos.forEach(function (video) {
      visible.add(video);
      play(video);
    });
  }

  document.addEventListener('visibilitychange', function () {
    videos.forEach(function (video) {
      if (document.hidden) video.pause();
      else play(video);
    });
  });
}());
