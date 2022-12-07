const albumNav = document.querySelector('#album-nav')
const albumArtist = document.querySelector('#album-artist')
const albumTitle = document.querySelector('#album-title')
const albumYear = document.querySelector('#album-year')
const albumArt = document.querySelector('#album-artwork')
const dreamAlbum = 'https://musicbrainz.org/ws/2/release/46a466c0-13f4-4f2b-b227-7df4885d9b56?inc=aliases%2Bartist-credits%2Blabels%2Bdiscids%2Brecordings&fmt=json';
const dreamArt = 'https://coverartarchive.org/release/46a466c0-13f4-4f2b-b227-7df4885d9b56/';
const misfitsAlbum = 'https://musicbrainz.org/ws/2/release-group/cb2d3303-c861-37fd-8421-e1455dea5605?inc=aliases%2Bartist-credits%2Breleases&fmt=json';
const misfitsArt = 'https://coverartarchive.org/release/cb2d3303-c861-37fd-8421-e1455dea5605/';
const alaskaAlbum = 'https://musicbrainz.org/ws/2/release/8844c5a6-3ae9-4c12-997e-40bbac5df6f7?inc=aliases%2Bartist-credits%2Blabels%2Bdiscids%2Brecordings&fmt=json';
const alaskaArt = 'https://coverartarchive.org/release/8844c5a6-3ae9-4c12-997e-40bbac5df6f7/';
const clubExoticaAlbum = 'https://musicbrainz.org/ws/2/release/fd532d70-03ef-4e11-aa5d-90053e2f59a0?inc=aliases%2Bartist-credits%2Blabels%2Bdiscids%2Brecordings&fmt=json';
const clubExoticaArt = 'https://coverartarchive.org/release/fd532d70-03ef-4e11-aa5d-90053e2f59a0';
const wetTennisAlbum = 'https://musicbrainz.org/ws/2/release/f0e42ca8-108d-43c7-8fa2-51aa92b99aca?inc=aliases%2Bartist-credits%2Blabels%2Bdiscids%2Brecordings&fmt=json';
const wetTennisArt = 'https://coverartarchive.org/release/f0e42ca8-108d-43c7-8fa2-51aa92b99aca';
const omoiyariAlbum = 'https://musicbrainz.org/ws/2/release/1d929dbc-85b3-4cf1-bbf7-fd84f6f54a65?inc=aliases%2Bartist-credits%2Blabels%2Bdiscids%2Brecordings&fmt=json';
const omoiyariArt = 'https://coverartarchive.org/release/1d929dbc-85b3-4cf1-bbf7-fd84f6f54a65/';

// api data is fetched
fetchArtwork(dreamArt);
fetchData(dreamAlbum);

function fetchThumbnails(URL) {
  fetch(URL)
    .then((resp) => resp.json())
    .then((artwork) => {
      displayThumbnail(artwork)
    })
}

function fetchArtwork(URL) {
  fetch(URL)
    .then((resp) => resp.json())
    .then((artwork) => {
      displayArtwork(artwork)
    })
}

function fetchData(URL) {
  fetch(URL)
    .then((resp) => resp.json())
    .then((album) => displayAlbum(album))
}

// load album artwork for all six albums, display in nav bar 
// function displayThumbnail(artwork) {
//   let thumbnail = document.createElement('img')
//   thumbnail.src = artwork.images[0].thumbnails[250];
//   // thumbnail.setAttribute('class', '.navItem');
//   albumNav.appendChild(thumbnail);
//   thumbnail.addEventListener("click", (e) =>
//   displayAlbum(album))
//   console.log(thumbnail)
// }

// return data for first default album and display in detail area
function displayAlbum(album) {
  albumArtist.textContent = album['artist-credit'][0].artist.name
  albumTitle.textContent = album.title
  albumYear.textContent = album.date
}

// return album artwork for first default album in detail area
function displayArtwork(artwork) {
  albumArt.src = artwork.images[0].thumbnails[500];
}

// upon click, return and display data for clicked album (EL #1)

// return album artwork for clicked album and display in detail area

// upon mouseover, album title? changes color (EL #2)

// keydown escape button, return to default (EL #3)



