// Funktion til at hente tilfældige sange
export async function getRandomSongs(songs, artists) {
    const randomSongs = [];
    const songIndexes = new Set();

    // Sørger for at vi får 10 unikke sange
    while (randomSongs.length < 10) {
        const randomIndex = Math.floor(Math.random() * songs.length);
        if (!songIndexes.has(randomIndex)) {
            songIndexes.add(randomIndex);
            randomSongs.push(songs[randomIndex]);
        }
    }

    // Tilknyt kunstneren til hver sang
    const songsWithArtists = randomSongs.map(song => {
        // Tjek om artist_id findes i artists-listen
        const artist = artists.find(artist => artist.id === parseInt(song.artist_id)); // Ensretter datatyper
        if (!artist) {
            console.log(`Kunstner ikke fundet for sang: ${song.title}, artist_id: ${song.artist_id}`);
        }
        return { ...song, artistName: artist ? artist.name : 'Ukendt kunstner' };
    });

    return songsWithArtists;
}

// Funktion til at indsætte de tilfældige sange med kunstnernavn i HTML'en
export function insertRandomSongs(songs) {
    const songElements = document.querySelectorAll('.randomSang');

    // Sørg for, at vi kun indsætter 10 sange
    songElements.forEach((li, index) => {
        if (songs[index]) {
            const titleSpan = li.querySelector('.randomSongTitle');
            const artistSpan = li.querySelector('.randomSongArtist');

            // Indsæt sangtitel og kunstner i de respektive spans
            titleSpan.textContent = songs[index].title;
            artistSpan.textContent = ` - ${songs[index].artistName || 'Ukendt kunstner'}`; // Tilføjer bindestrej mellem sang og kunstner, og 'Ukendt kunstner' hvis ingen kunstner er tilgængelig
        }
    });
}
