window.addEventListener("load", function () {
  setTimeout(function () {
    const preloader = document.getElementById("preloader-active");
    if (preloader) {
      preloader.style.transition = "opacity 0.5s ease";
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
        document.body.style.overflow = "visible";
      }, 500);
    }
  }, 1500);
});
