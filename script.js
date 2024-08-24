document.getElementById('shortenButton').addEventListener('click', shortenUrl);

function shortenUrl() {
    const urlInput = document.getElementById('urlInput').value;
    if (!urlInput) {
        alert('Please enter a URL');
        return;
    }

    const shortKey = Math.random().toString(36).substr(2, 5);
    const shortenedUrl = `${window.location.href}${shortKey}`;
    document.getElementById('shortenedUrl').textContent = `Shortened URL: ${shortenedUrl}`;

    console.log('Simulated shortened URL:', shortKey, urlInput);
}
