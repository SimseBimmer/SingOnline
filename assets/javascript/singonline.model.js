









// assets/javascript/singonline.model.js
import { supabase } from './supabase.js';

/**
 * SingOnline Model Class
 */
export class singOnlineModel {
    async listSongs() {
        try {
            const { data, error } = await supabase.from('songs').select('*');
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Fejl ved hentning af sange', error);
        }
    }

    async listArtists() {
        try {
            const { data, error } = await supabase.from('artists').select('*');
            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Fejl ved hentning af kunstnere', error);
        }
    }

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
