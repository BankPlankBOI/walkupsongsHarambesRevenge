// Coby Button
const button = document.getElementById('coby-button');
const audio = document.getElementById('coby-walk');

// Add the click event listener
button.addEventListener('click', () => {
  // Rewind to the start in case it is clicked multiple times quickly
    audio.currentTime = 0; 

  // Play the MP3 file
    audio.play();
});

// Pause all audio elements
document.querySelectorAll("audio").forEach(audio => {
    audio.pause();
  audio.currentTime = 0; // Optional: Rewind to the beginning
});