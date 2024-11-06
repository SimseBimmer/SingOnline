// assets/javascript/singonline.model.js
import { supabase } from './supabase.js';


export class singOnlineModel {
    // Metode til at hente sange
    async listSongs() {
        try {
            const { data, error } = await supabase.from('songs').select('*');
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Fejl ved hentning af sange', error);
        }
    }

    // Metode til at hente kunstnere
    async listArtists() {
        try {
            const { data, error } = await supabase.from('artists').select('*');
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Fejl ved hentning af kunstnere', error);
        }
    }

    // Metode til at hente albums
    async listAlbums() {
        try {
            const { data, error } = await supabase.from('albums').select('*');
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Fejl ved hentning af albums', error);
        }
    }
}
