const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.querySelector('.play-pause i');
const currentTimeElement = document.querySelector('.current-time');
const durationElement = document.querySelector('.duration');
const progressSlider = document.getElementById('progress-slider');

// Update the duration when metadata is loaded
audioPlayer.addEventListener('loadedmetadata', () => {
  durationElement.textContent = formatTime(audioPlayer.duration);
  progressSlider.max = audioPlayer.duration;
});

// Play/Pause button functionality
playPauseButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.classList.remove('fa-play');
    playPauseButton.classList.add('fa-pause');
  } else {
    audioPlayer.pause();
    playPauseButton.classList.remove('fa-pause');
    playPauseButton.classList.add('fa-play');
  }
});

// Update the progress bar and current time as the song plays
audioPlayer.addEventListener('timeupdate', () => {
  currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
  progressSlider.value = audioPlayer.currentTime;
});

// Seek functionality (when the slider is moved)
progressSlider.addEventListener('input', () => {
  audioPlayer.currentTime = progressSlider.value;
});

// Format time in minutes and seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
