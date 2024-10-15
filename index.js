const audioPlayer = document.getElementById('audio-player');
const toggleButton = document.getElementById('toggle-button');
const icon = toggleButton.querySelector('i');

toggleButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } 
  
  else {
    audioPlayer.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
});