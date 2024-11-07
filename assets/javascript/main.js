import { singOnlineModel } from './singonline.model.js';
import { getRandomSongs, insertRandomSongs } from './funktions/randomSongs.js';
import { searchSongs } from './funktions/searchSongs.js';
import { printLyrics } from './printLyrics.js';  // Importér printLyrics funktion

document.addEventListener('DOMContentLoaded', async () => {
    const model = new singOnlineModel();

    // Hent sange og kunstnere
    const songs = await model.listSongs();
    const artists = await model.listArtists();

    console.log('Sange:', songs);
    console.log('Kunstnere:', artists);

    // Hent og indsæt de tilfældige sange med kunstner
    const randomSongs = await getRandomSongs(songs, artists);
    insertRandomSongs(randomSongs);

    // Håndtér søgning
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim();  // Få brugeren input og fjern ekstra mellemrum
            searchSongs(query, songs, artists);  // Kald searchSongs og opdater resultaterne
        });
    } else {
        console.error("Element med id 'searchInput' blev ikke fundet.");
    }

    // Lyt efter klik på print-knappen og kald printLyrics funktionen
    const printButton = document.getElementById('printButton');
    if (printButton) {
        printButton.addEventListener('click', () => {
            printLyrics();  // Kald printLyrics funktionen ved klik
        });
    } else {
        console.error("Print button not found.");
    }
});
