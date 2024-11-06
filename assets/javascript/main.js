// assets/javascript/main.js
import { singOnlineModel } from './singonline.model.js';

const model = new singOnlineModel();

// Hent og log kunstnere
const artists = await model.listArtists();
console.log('Kunstnere:', artists);

// Hent og log albums
const albums = await model.listAlbums();
console.log('Albums:', albums);

// Hent og log sange
const songs = await model.listSongs();
console.log('Sange:', songs);
