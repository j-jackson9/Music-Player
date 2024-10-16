const audioPlayer = document.getElementById('audio-player');
const toggleButton = document.getElementById('toggle-button');
const icon = toggleButton.querySelector('i');
const playListElement = document.getElementById('playlist');
const fowardButton = document.getElementsByClassName('go-forward')[0];
const currentTimeDisplay = document.getElementsByClassName('current-time')[0];
const durationDisplay = document.getElementsByClassName('duration')[0];
const slider = document.getElementsByClassName('slider')[0];

let isFirstPlay = true;

toggleButton.addEventListener('click', () => {
  if (isFirstPlay) {
    const selectedSong = randomSong(playList);
    audioPlayer.src = selectedSong.src;
    audioPlayer.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
    isFirstPlay = false;
  } else {
    if (audioPlayer.paused) {
      audioPlayer.play();
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
    } else {
      audioPlayer.pause();
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    }
  }
});

const playList = [
  { title: "Song 1", src: "watermarked_Esai_For_You_instrumental_3_15.mp3"},
  { title: "Song 2", src: "1015.MP3"},
  { title: "Song 3", src: "1015(1).MP3"}
];

const randomSong = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

fowardButton.addEventListener('click', () => {
  const selectedSong = randomSong(playList);
  audioPlayer.src = selectedSong.src;
  audioPlayer.play();
  icon.classList.remove('fa-play');
  icon.classList.add('fa-pause');
});

audioPlayer.addEventListener('timeupdate', () => {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;

  if (!isNaN(duration)) {
    // Update the slider
    slider.value = (currentTime / duration) * 100;
    
    // Update the timestamps
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
  }
});

// Listen for when the metadata is loaded and display the correct duration
audioPlayer.addEventListener('loadedmetadata', () => {
  if (!isNaN(audioPlayer.duration)) {
    durationDisplay.textContent = formatTime(audioPlayer.duration);
  }
});

// Slider functionality to seek within the track
slider.addEventListener('input', function () {
  const seekTo = (slider.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = seekTo;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
