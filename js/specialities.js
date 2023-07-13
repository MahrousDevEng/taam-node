document.addEventListener("DOMContentLoaded", () => {
  const specialitiesTabs = document.getElementById("specialitiesTabs");

  const swiper = new Swiper(specialitiesTabs, {
    slidesPerView: "auto",
    speed: 400,
    spaceBetween: 0,
    hashNavigation: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });
});
