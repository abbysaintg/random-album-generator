fetch("http://myMusicBrainzServer.org/ws/2/'")
  .then((resp) => resp.json())
  .then((albumCover) => renderAlbum(albumCover));
