// assets/javascript/funktions/searchSongs.js

export function searchSongs(query, songs, artists) {
    // Fjern alle tidligere søgeresultater
    const resultsContainer = document.getElementById('songs');
    resultsContainer.innerHTML = ''; // Dette fjerner de gamle li'er, så de ikke står tilbage

    // Hvis søgefeltet er tomt, returner og skjul containeren
    if (query === '') {
        resultsContainer.style.display = 'none'; // Skjul #songs hvis søgefeltet er tomt
        return;
    }
    resultsContainer.style.display = 'block'; // Vis #songs hvis der er tekst i søgefeltet

    // Konverter søgeforespørgslen til små bogstaver for at gøre søgningen case-insensitiv
    const queryLower = query.toLowerCase();

    // Filtrer sange baseret på input, men kun hvis 'song.title' og 'song.artist' er definerede
    const filteredSongs = songs.filter(song => {
        const titleMatch = song.title && song.title.toLowerCase().includes(queryLower);
        const artistMatch = song.artist && song.artist.toLowerCase().includes(queryLower);
        return titleMatch || artistMatch;
    });

    // Filtrer kunstnere, men kun hvis 'artist.name' er defineret
    const filteredArtists = artists.filter(artist =>
        artist.name && artist.name.toLowerCase().includes(queryLower)
    );

    // Kombiner både sange og kunstnere i én liste
    const searchResults = [...filteredSongs, ...filteredArtists];

    // Log alle søgeresultater til konsollen
    console.log("Søgeresultater:", searchResults);

    // Hvis der er resultater, vis dem
    if (searchResults.length > 0) {
        searchResults.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result.title || result.name; // For sange, vis titel; for kunstnere, vis navn
            resultsContainer.appendChild(li); // Tilføj hver li til ul'en
        });
    } else {
        // Hvis ingen resultater findes, kan vi vise en besked
        const noResultsLi = document.createElement('li');
        noResultsLi.textContent = 'Ingen resultater fundet';
        resultsContainer.appendChild(noResultsLi);
    }
}
// k

