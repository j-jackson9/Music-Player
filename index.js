const audioPlayer = document.getElementById('audio-player');
const toggleButton = document.getElementById('toggle-button');
const icon = toggleButton.querySelector('i');
const playListElement = document.getElementById('playlist');
const fowardButton = document.getElementsByClassName('go-forward')[0];
const backButton = document.getElementsByClassName('go-back')[0];

let isFirstPlay = true; // To track whether the first play has occurred

toggleButton.addEventListener('click', () => {
  if (isFirstPlay) {
    // First time play: load and play a random song
    const selectedSong = randomSong(playList);
    audioPlayer.src = selectedSong.src;
    audioPlayer.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
    isFirstPlay = false; // First play completed
  } else {
    // Toggle between play and pause for the same song
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
 ]

 const randomSong = (list) => {
  return list[Math.floor(Math.random() * list.length)]
 }

fowardButton.addEventListener('click', () => {
  const selectedSong = randomSong(playList);
  audioPlayer.src = selectedSong.src;
  audioPlayer.play();
  icon.classList.remove('fa-play');
  icon.classList.add('fa-pause');
});

backButton.addEventListener('click', () => {
  const selectedSong = randomSong(playList);
  audioPlayer.src = selectedSong.src;
  audioPlayer.play();
  icon.classList.remove('fa-play');
  icon.classList.add('fa-pause');
});