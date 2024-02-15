const playPauseBtn = document.querySelector(".play-pause-btn");
const fullScreenBtn = document.querySelector(".play-pause-btn");
const miniPlayerBtn = document.querySelector(".play-pause-btn");
const theaterBtn = document.querySelector(".theater-btn");
const video = document.querySelector("video");
const videoContainer = document.querySelector(".video-container");

document.addEventListener("keydown", (e) => {
  switch (e.key.toLowerCase()) {
    case " ":
    case "k":
      playVideoToggler();
      break;

    default:
      break;
  }
});

// Play/Pause video
video.addEventListener("play", () => {
  videoContainer.classList.remove("paused");
});
video.addEventListener("pause", () => {
  videoContainer.classList.add("paused");
});

const playVideoToggler = () => {
  video.paused ? video.play() : video.pause();
};
playPauseBtn.addEventListener("click", playVideoToggler);

theaterBtn.addEventListener("click", () => {
  videoContainer.classList.toggle("theater");
});
