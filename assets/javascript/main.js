// assets/javascript/funktions/randomSongs.js
import { supabase } from './supabase.js';

export async function displayRandomSongs() { // Ændret navn fra getRandomSongs til displayRandomSongs
    try {
        // Hent alle sange fra databasen
        const { data: songs, error } = await supabase.from('songs').select('*');
        if (error) {
            throw error;
        }

        // Vælg 10 tilfældige sange
        const randomSongs = getRandomSongs(songs, 10);

        return randomSongs; // Returnerer de tilfældige sange
    } catch (error) {
        console.error('Error fetching random songs:', error);
        return null; // Returner null ved fejl
    }
}

// Funktion til at vælge tilfældige sange
function getRandomSongs(songs, count) {
    const shuffled = songs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Funktion til at hente kunstnerens navn
async function getArtistName(artistId) {
    const { data: artist, error } = await supabase.from('artists').select('name').eq('id', artistId).single();
    if (error) {
        console.error('Error fetching artist:', error);
        return 'Unknown Artist'; // Hvis der er en fejl
    }
    return artist.name;
}
