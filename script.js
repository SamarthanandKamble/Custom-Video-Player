const playPauseBtn = document.querySelector(".play-pause-btn");
const fullScreenBtn = document.querySelector(".full-screen-btn");
const miniPlayerBtn = document.querySelector(".mini-player-btn");
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

// theater modes
theaterBtn.addEventListener("click", () => {
  videoContainer.classList.toggle("theater");
});

//fullscreen mode
const fullScreenToggler = () => {
  if (document.fullscreenElement === null) {
    videoContainer.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

fullScreenBtn.addEventListener("click", fullScreenToggler);
document.addEventListener("fullscreenchange", () => {
  videoContainer.classList.toggle("full-screen", document.fullscreenElement);
});

//picture-in-picture mode
const miniPlayerToggler = () => {
  if (videoContainer.classList.contains("mini-player")) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture();
  }
};
miniPlayerBtn.addEventListener("click", miniPlayerToggler);
