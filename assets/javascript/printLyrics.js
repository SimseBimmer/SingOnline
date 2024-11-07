// assets/javascript/printLyrics.js
export function printLyrics() {
    // Opretter et print-friendly layout
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Lyrics</title></head><body>');
    printWindow.document.write('<h2>Song Lyrics</h2>');
    
    // Få fat i lyrics-indholdet
    const lyricsContent = document.getElementById('lyricsContent').innerHTML;
    printWindow.document.write('<div>' + lyricsContent + '</div>');
    
    // Afslut printvinduet og start print
    printWindow.document.write('</body></html>');
    printWindow.document.close(); // Lukkes vinduet, så print kommandoen kan blive udført
    printWindow.print(); // Kald print kommandoen
}
