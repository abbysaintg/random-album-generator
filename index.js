const albumArtist = document.querySelector('#album-artist')
const albumTitle = document.querySelector('#album-title')
const albumYear = document.querySelector('#album-year')
const albumArt = document.querySelector('#album-artwork')
const albumNav = document.querySelector('#album-nav')

const dreamAlbumMBID = '46a466c0-13f4-4f2b-b227-7df4885d9b56';
const coverArtURL = 'http://coverartarchive.org/release/';
const dreamAlbumArtURL = coverArtURL + dreamAlbumMBID + "/";

// api data is fetched
fetchThumbnails(); 
fetchData("https://musicbrainz.org/ws/2/release/46a466c0-13f4-4f2b-b227-7df4885d9b56?inc=aliases%2Bartist-credits%2Blabels%2Bdiscids%2Brecordings&fmt=json");
fetchArtwork(dreamAlbumArtURL); 

function fetchThumbnails (URL) {
  fetch(URL) 
    .then((resp) => resp.json())
    .then((artwork) => displayThumbnail(artwork))
}

function fetchData(URL) {
  fetch(URL)
    .then((resp) => resp.json())
    .then((album) => displayAlbum(album))
}

function fetchArtwork(URL) {
  fetch(URL)
    .then((resp) => resp.json())
    .then((artwork) => displayArtwork(artwork))
}

// load album artwork for all six albums, display in nav bar 
function displayThumbnail(artwork) {
  let thumbnail = document.createElement('img')
  thumbnail.src = artwork.images[0].thumbnails.small; 
  albumNav.appendChild(thumbnail); 
}

// return data for first default album and display in detail area
function displayAlbum(album) {
  albumArtist.textContent = album['artist-credit'][0].artist.name
  albumTitle.textContent = album.title
  albumYear.textContent = album.date
}

// return album artwork for first default album in detail area
function displayArtwork(artwork) {
  console.log(artwork.images);
  albumArt.src = artwork.images[0].thumbnails[500];
}

// upon click, return and display data for clicked album (EL #1)

// return album artwork for clicked album and display in detail area

// upon mouseover, album title? changes color (EL #2)

// keydown escape button, return to default (EL #3)



