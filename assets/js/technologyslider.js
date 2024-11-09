var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5, 
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500, 
    disableOnInteraction: false, 
  },
  breakpoints: {
    460: {
      slidesPerView: 4,
      spaceBetween: 4,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  }
});
