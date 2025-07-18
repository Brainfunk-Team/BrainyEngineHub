import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { ANON_KEY } from './config.js';
const supabaseUrl = "https://caioubsndvyjupkzmnok.supabase.co";

const supabase = createClient(supabaseUrl, ANON_KEY);

async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) return alert("Please select a file.");

    const { data, error } = await supabase.storage
        .from('modpacks') // your bucket name
        .upload(`mods/${file.name}`, file);

    if (error) {
        console.error('Upload error:', error);
        alert('Upload failed!');
    } else {
        console.log('Uploaded:', data);
        alert('Upload successful!');
    }
}

