function navigateToPage(page) {

document.getElementById('home').style.display = page === 'home' ? 'block' : 'none';
document.getElementById('about').style.display = page === 'about' ? 'block' : 'none';


window.scrollTo({ top: 0, behavior: 'smooth' });
}


const musicPlayer = document.getElementById('lofi-player');
const playButton = document.getElementById('play-btn');
const volumeControl = document.getElementById('vol-control');


playButton.addEventListener('click', () => {
if (musicPlayer.paused) {
musicPlayer.play();
playButton.textContent = '⏸️'; 
} else {
musicPlayer.pause();
playButton.textContent = '▶️'; 
}
});


volumeControl.addEventListener('input', () => {
musicPlayer.volume = volumeControl.value / 100; 
});


musicPlayer.volume = 0.5;

