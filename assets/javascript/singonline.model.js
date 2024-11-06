// assets/javascript/singonline.model.js

import { supabase } from './supabase.js';

export class singOnlineModel {
    // List artist method
    async listArtists() {
        const { data, error } = await supabase.from('artists').select('*');
        if (error) {
            throw error;
        }
        return data;
    }

    // List album method
    async listAlbums() {
        const { data, error } = await supabase.from('albums').select('*');
        if (error) {
            throw error;
        }
        return data;
    }

    // List song method
    async listSongs() {
        const { data, error } = await supabase.from('songs').select('*');
        if (error) {
            throw error;
        }
        return data;
    }
}
