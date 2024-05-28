document.getElementById('download-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    const resolution = document.getElementById('resolution').value;
    downloadVideo(url, resolution);
});

async function downloadVideo(url, resolution) {
    const response = await fetch('https://your-serverless-function-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url, resolution: resolution })
    });
    
    if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = downloadUrl;
        a.download = 'video.mp4'; // you can set the filename dynamically
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(downloadUrl);
        document.getElementById('message').innerText = 'Download started!';
    } else {
        document.getElementById('message').innerText = 'Failed to download video.';
    }
}