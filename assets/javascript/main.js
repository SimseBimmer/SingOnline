// assets/javascript/main.js
import { singOnlineModel } from './singonline.model.js';
import { getRandomSongs, insertRandomSongs } from './funktions/randomSongs.js';

const model = new singOnlineModel();

// Hent sange og kunstnere
const songs = await model.listSongs();
const artists = await model.listArtists();  // Sørg for at hente kunstnerne

console.log('Sange:', songs);
console.log('Kunstnere:', artists);

// Hent og indsæt de tilfældige sange med kunstner
const randomSongs = await getRandomSongs(songs, artists);
insertRandomSongs(randomSongs);
