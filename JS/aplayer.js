!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: false,
      loop: 'all',
      order: 'random',
      theme: '#b7daff',
      preload: 'none',
      listFolded: false,
      audio: [
        {
          name: 'Alice（Cover 古川本舗）',
          artist: '米白',
          url: 'http://music.163.com/song/media/outer/url?id=435948605.mp3',
          cover: ' http://p1.music.126.net/R86tDfWlpXzhJFO1KJgfbQ==/17924238556217288.jpg?param=130y130 '
          
        }
      ]
    });
  }
})();

c