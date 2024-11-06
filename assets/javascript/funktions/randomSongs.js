// assets/javascript/funktions/randomSongs.js
import { supabase } from '../supabase.js';

export async function displayRandomSongs() {
    try {
        // Hent alle sange fra databasen
        const { data: songs, error: songError } = await supabase.from('songs').select('*');
        if (songError) throw songError;

        // Hent alle kunstnere
        const { data: artists, error: artistError } = await supabase.from('artists').select('*');
        if (artistError) throw artistError;

        // Hent alle albums
        const { data: albums, error: albumError } = await supabase.from('albums').select('*');
        if (albumError) throw albumError;

        // Vælg 10 tilfældige sange
        const randomSongs = getRandomSongs(songs, 10);

        // Log information om kunstnere, albums og sange
        console.log('Artister:', artists);
        console.log('Albums:', albums);
        console.log('Sange:', randomSongs);

        return randomSongs;
    } catch (error) {
        console.error('Error fetching random songs:', error);
        return null;
    }
}

// Funktion til at vælge tilfældige sange
function getRandomSongs(songs, count) {
    const shuffled = songs.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
