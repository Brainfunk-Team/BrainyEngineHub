
const supabase = supabase.createClient(
    'https://caioubsndvyjupkzmnok.supabase.co', // replace with your project URL
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhaW91YnNuZHZ5anVwa3ptbm9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3OTYyNDcsImV4cCI6MjA2ODM3MjI0N30.M2OPg5izenO27Ff_a7RnegT_FW_KyNDAPb69-FIQkdQ'
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

