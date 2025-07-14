const video = document.getElementById('ballersVideo');
const muteToggleButton = document.getElementById('muteToggleButton');
const muteIconSvg = document.getElementById('muteIconSvg');
const unmuteIconSvg = document.getElementById('unmuteIconSvg');

// Initial state from the HTML attribute
let isMuted = video.muted;

// Update button UI based on initial state
updateMuteButtonUI();

muteToggleButton.addEventListener('click', () => {
    isMuted = !isMuted; // Toggle the mute state
    video.muted = isMuted; // Apply the mute state to the video element
    updateMuteButtonUI(); // Update button appearance
});

function updateMuteButtonUI() {
    if (isMuted) {
        muteIconSvg.style.display = 'block';   // Show muted icon
        unmuteIconSvg.style.display = 'none'; // Hide unmuted icon
    } else {
        muteIconSvg.style.display = 'none';   // Hide muted icon
        unmuteIconSvg.style.display = 'block'; // Show unmuted icon
    }
}

// Optional: Listen for 'volumechange' event on the video
// This is useful if something else (e.g., another script) changes the volume
video.addEventListener('volumechange', () => {
    isMuted = video.muted;
    updateMuteButtonUI();
});

// Ensure video plays from start if it encounters issues (e.g., due to autoplay policies)
// This is a robust way to handle autoplay, especially if 'autoplay' attribute fails
video.play().catch(error => {
    console.log("Autoplay prevented:", error);
    // Optionally, show a play button if autoplay is blocked
    // For example: muteToggleButton.style.display = 'none'; and show a play button instead
});