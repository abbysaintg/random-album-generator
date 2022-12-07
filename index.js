const albumNav = document.querySelector('#album-nav')
const albumArtist = document.querySelector('#album-artist')
const albumTitle = document.querySelector('#album-title')
const albumYear = document.querySelector('#album-year')
const albumArt = document.querySelector('#album-artwork')

const baseDataUrl = 'https://musicbrainz.org/ws/2/release/'
const baseEndUrl = '?inc=aliases%2Bartist-credits%2Blabels%2Bdiscids%2Brecordings&fmt=json'
const baseArtUrl = 'https://coverartarchive.org/release/'
const IDS = {
  dream: '46a466c0-13f4-4f2b-b227-7df4885d9b56', 
  misfits: '6f519587-e7d1-3d33-ab11-ed32df64c44d',
  alaska: '8844c5a6-3ae9-4c12-997e-40bbac5df6f7',
  clubExotica: 'fd532d70-03ef-4e11-aa5d-90053e2f59a0',
  wetTennis: 'f0e42ca8-108d-43c7-8fa2-51aa92b99aca',
  omoiyari: '1d929dbc-85b3-4cf1-bbf7-fd84f6f54a65'
}

let currentAlbum = {};

// FETCH EACH ALBUM ARTWORK AND CALL FUNCTION 
for (const key in IDS) {
  // console.log(`${key} -> ${IDS[key]}`)
  fetch(`${baseArtUrl}${IDS[key]}`)
    .then((resp) => resp.json())
    .then((artwork) => displayThumbnail(artwork))}

// FETCH FIRST ALBUM DATA AND CALL FUNCTION
fetch(`${baseDataUrl}${IDS.dream}${baseEndUrl}`)
  .then((resp) => resp.json())
  .then((album) => displayDetails(album))    

// FETCH FIRST ALBUM ARTWORK AND CALL FUNCTION 
fetch(`${baseArtUrl}${IDS.dream}`)
  .then((resp) => resp.json())
  .then((artwork) => displayArtwork(artwork))

// DISPLAY ALBUM ARTWORK IN NAV SECTION
function displayThumbnail(artwork) {
  let thumbnail = document.createElement('img')
  thumbnail.src = artwork.images[0].thumbnails.small;
  thumbnail.setAttribute('class', 'navItem');
  albumNav.appendChild(thumbnail);
  thumbnail.addEventListener("click", (e) => {
    console.log(artwork.release)
    // console.log(artwork.release + baseEndUrl)
    // console.log(`${baseDataUrl}${IDS.omoiyari}${baseEndUrl}`)
    // fetch(artwork.release + baseEndUrl, { mode: 'no-cors'})
    //   .then((resp) => resp.json())
    //   .then((album) => displayDetails(album))    
    // fetch(artwork.release + baseEndUrl)
    //   .then((resp) => resp.json())
    //   .then((album) => displayArtwork(album))      
  })
}

// DISPLAY ALBUM DETAILS IN DETAIL SECTION 
function displayDetails(album) {
  currentAlbum = album
  console.log(album)
  albumArtist.textContent = album["artist-credit"][0].name
  albumTitle.textContent = album.title
  albumYear.textContent = album.date
}

// DISPLAY ALBUM ARTWORK IN DETAIL SECTION 
function displayArtwork(artwork) {
  albumArt.src = artwork.images[0].thumbnails[500];
}

// upon click, return and display data for clicked album (EL #1)

// return album artwork for clicked album and display in detail area

// upon mouseover, album title? changes color (EL #2)

// keydown escape button, return to default (EL #3)