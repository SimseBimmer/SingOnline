export function searchSongs(query, songs, artists) {
    const resultsContainer = document.getElementById('songs');
    resultsContainer.innerHTML = '';

    if (query === '') {
        resultsContainer.style.display = 'none';
        return;
    }
    resultsContainer.style.display = 'block';

    const queryLower = query.toLowerCase();

    const filteredSongs = songs.filter(song => {
        const titleMatch = song.title && song.title.toLowerCase().includes(queryLower);
        const artistMatch = song.artist && song.artist.toLowerCase().includes(queryLower);
        return titleMatch || artistMatch;
    });

    const searchResults = filteredSongs;

    console.log("Søgeresultater:", searchResults);

    if (searchResults.length > 0) {
        searchResults.forEach(result => {
            const li = document.createElement('li');
            
            // Opret et <a> element og sæt det op til at navigere til chosenSong.html
            const link = document.createElement('a');
            link.textContent = `${result.title} - ${result.artist}`;
            link.href = 'chosenSong.html'; // Naviger til chosenSong.html
            
            // Tilføj en click-event listener til <a> elementet
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Forhindre standard navigation

                // Gem sangdataen i sessionStorage
                sessionStorage.setItem('selectedSong', JSON.stringify(result));

                // Naviger til chosenSong.html efter dataen er gemt
                window.location.href = 'chosenSong.html';
            });

            li.appendChild(link);
            resultsContainer.appendChild(li); // Tilføj <li> til ul'en
        });
    } else {
        const noResultsLi = document.createElement('li');
        noResultsLi.textContent = 'Ingen resultater fundet';
        resultsContainer.appendChild(noResultsLi);
    }
}
