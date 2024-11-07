import { singOnlineModel } from './singonline.model.js';
import { getRandomSongs, insertRandomSongs } from './funktions/randomSongs.js';
import { searchSongs } from './funktions/searchSongs.js';
import { printLyrics } from './printLyrics.js';

document.addEventListener('DOMContentLoaded', async () => {
    const model = new singOnlineModel();

    // Hent sange og kunstnere, som vi kan bruge på begge sider
    const songs = await model.listSongs();
    const artists = await model.listArtists();

    // Hent og indsæt de tilfældige sange med kunstner (uafhængig af side)
    const randomSongs = await getRandomSongs(songs, artists);
    insertRandomSongs(randomSongs);

    // Tjek, om vi er på `songs.html`
    if (document.getElementById('searchInput')) {
        console.log("På songs.html");

        // Håndtér søgning
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim();
            searchSongs(query, songs, artists);
        });

        // Lyt efter klik på print-knappen og kald printLyrics funktionen
        const printButton = document.getElementById('printButton');
        if (printButton) {
            printButton.addEventListener('click', () => {
                printLyrics();
            });
        } else {
            console.error("Print-knappen blev ikke fundet.");
        }
    }

    // Tjek, om vi er på `chosenSong.html`
    if (document.getElementById('songTitle')) {
        console.log("På chosenSong.html");

        // Hent sangdataen fra sessionStorage og opdater HTML-elementerne
        const songData = JSON.parse(sessionStorage.getItem('selectedSong'));
        if (!songData) {
            console.error("Ingen sangdata fundet i sessionStorage.");
            return;
        }

        document.getElementById('songTitle').textContent = songData.title || "Ingen titel tilgængelig";
        document.getElementById('artistName').textContent = songData.artist || "Ukendt kunstner";
        document.getElementById('lyricsContent').textContent = songData.lyrics || "Ingen tekst tilgængelig";
        document.getElementById('aboutText').textContent = songData.about || "Ingen info tilgængelig";
        document.getElementById('createdAtText').textContent = songData.createdAt || "Ubekendt udgivelsesdato";
    }
});
