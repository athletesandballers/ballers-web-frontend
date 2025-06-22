const video = document.getElementById('ballersVideo');
const muteButton = document.getElementById('muteButton');

// Handle mute/unmute toggle
muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? '🔇 Mute' : '🔊 Unmute';
});

// Auto-play video on scroll using IntersectionObserver
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    },
    {
        threshold: 0.5 // At least 50% in view
    }
);

observer.observe(video);



const scrollContainer = document.getElementsByClassName('third-page-second-section-cards-container');
const scrollAmount = 300; // pixels to scroll on each click

document.getElementById('scrollLeft').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

document.getElementById('scrollRight').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});
