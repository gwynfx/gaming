function navigateToPage(page) {
// Toggle visibility of pages
document.getElementById('home').style.display = page === 'home' ? 'block' : 'none';
document.getElementById('about').style.display = page === 'about' ? 'block' : 'none';

// Smooth scroll to top
window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Music player setup
const musicPlayer = document.getElementById('lofi-player');
const playButton = document.getElementById('play-btn');
const volumeControl = document.getElementById('vol-control');

// Toggle play/pause on button click
playButton.addEventListener('click', () => {
if (musicPlayer.paused) {
musicPlayer.play();
playButton.textContent = '⏸️'; // Update button text to pause icon
} else {
musicPlayer.pause();
playButton.textContent = '▶️'; // Update button text to play icon
}
});

// Update player volume on volume control change
volumeControl.addEventListener('input', () => {
musicPlayer.volume = volumeControl.value / 100; // Normalize volume value
});

// Initialize player at half-volume, paused
musicPlayer.volume = 0.5;
// TODO: Consider using a more robust way to handle player state (e.g., using a class)
