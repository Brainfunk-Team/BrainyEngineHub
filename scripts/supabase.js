import { ANON_KEY } from './config.js';

const supabase = supabase.createClient(
    'https://caioubsndvyjupkzmnok.supabase.co', // replace with your project URL
    ANON_KEY
);

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

