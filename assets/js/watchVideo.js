document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});

const videoUrl =
  "https://player.vimeo.com/video/1005187669?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479";
const videoModal = document.getElementById("videoModal");
const vimeoVideo = document.getElementById("vimeoVideo");
videoModal.addEventListener("show.bs.modal", () => {
  vimeoVideo.src = videoUrl;
});
videoModal.addEventListener("hide.bs.modal", () => {
  vimeoVideo.src = "";
});
