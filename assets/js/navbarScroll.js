window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.add("shadow-sm");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.remove("shadow-sm");
  }
});
