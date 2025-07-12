const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    volume: 0.7,
audio: [
      {
        name: "風の詩",
        artist: '押尾コータロー',
        url: 'https://cdn.jsdelivr.net/gh/minbiu/bgmusic/風の詩(风之诗).mp3',
        cover: 'https://cdn.jsdelivr.net/gh/minbiu/bgmusic/風の詩(风之诗).jpg',
      },
      {
        name: 'Canon In D Major',
        artist: '纯音乐',
        url: 'https://cdn.jsdelivr.net/gh/minbiu/bgmusic/Canon in D major.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/minbiu/bgmusic/Canon in D major.jpg',
      },
      {

        name: 'lovin‘ you',
        artist: '押尾コータロー',
        url: 'https://cdn.jsdelivr.net/gh/minbiu/bgmusic/LOVIN' YOU.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/minbiu/bgmusic/LOVIN' YOU.jpg',
      }
   ]
});