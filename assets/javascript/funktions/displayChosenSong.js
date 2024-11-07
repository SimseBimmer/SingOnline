document.addEventListener('DOMContentLoaded', () => {
    // Hent sangdataen fra sessionStorage
    const songData = JSON.parse(sessionStorage.getItem('selectedSong'));

    if (!songData) {
        console.error("Ingen sangdata fundet i sessionStorage.");
        return;
    }

    console.log("Indlæser sang:", songData);

    // Opdater HTML-elementerne med sangdataen
    document.getElementById('songTitle').textContent = songData.title || "Ingen titel tilgængelig";
    document.getElementById('artistName').textContent = songData.artist || "Ukendt kunstner";
    document.getElementById('aboutText').textContent = songData.about || "Ingen info tilgængelig";
    document.getElementById('createdAtText').textContent = songData.created_at || "Ubekendt udgivelsesdato";

    // Hent lyrics og del dem op efter linjeskift (newline)
    const lyrics = songData.lyrics || "Ingen tekst tilgængelig";
    const lyricsArray = lyrics.split('\n');  // Del lyrics op ved hver ny linje

    // Find ul-elementet hvor lyrics skal vises
    const lyricsContainer = document.getElementById('lyricsContent');
    lyricsContainer.innerHTML = '';  // Ryd eventuel tidligere tekst

    // For hver linje i lyrics, lav et p-element og tilføj det til containeren
    lyricsArray.forEach(line => {
        const p = document.createElement('p');  // Opret et p-element for hver linje
        p.textContent = line.trim();  // Tilføj linjen som tekstindhold
        if (line.trim() !== '') {  // Ignorer tomme linjer
            lyricsContainer.appendChild(p);  // Tilføj p-elementet til containeren
        }
    });
});
