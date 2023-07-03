document.addEventListener("DOMContentLoaded", () => {
  const globalSwiperConfig = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
  };

  // Banner Slider
  const bannerSliderWrapper = document.getElementById("swiperMainBanner");

  if (bannerSliderWrapper) {
    new Swiper(bannerSliderWrapper, {
      ...globalSwiperConfig,
      effect: "fade",
      lazy: {
        enabled: true,
        loadPrevNext: true,
      },
      pagination: {
        el: ".dots",
        clickable: true,
        bulletActiveClass: "active",
        bulletClass: "dot",
        bulletElement: "button",
      },
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    });
  }

  // Projects Slider
  const projectsSliderWrappper = document.getElementById("swiperProjects");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");

  if (projectsSliderWrappper) {
    const projectsSlider = new Swiper(projectsSliderWrappper, {
      ...globalSwiperConfig,
      lazy: true,
      watchSlidesProgress: true,
      speed: 1000,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        400: {
          slidesPerView: 1.25,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    btnNext &&
      btnNext.addEventListener("click", (e) => projectsSlider.slideNext(1000));

    btnPrev &&
      btnPrev.addEventListener("click", (e) => projectsSlider.slidePrev(1000));
  }

  // Clients Slider
  const clientsSliderWrapper = document.getElementById("swiperClients");

  if (clientsSliderWrapper) {
    new Swiper(clientsSliderWrapper, {
      ...globalSwiperConfig,
      lazy: true,
      watchSlidesProgress: true,
      speed: 1000,
      slidesPerView: 2,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    });
  }

  // Close Download Profile Modal fire reset form
  const myModalEl = document.getElementById("downloadProfileForm");
  const modalForm = myModalEl?.querySelector("form");
  if (myModalEl) {
    myModalEl.addEventListener("hidden.bs.modal", (event) => {
      modalForm.reset();
    });
  }

  // Handle Download  Form Validation
  const downloadProfileForm = document.getElementById("download_profile");

  if (downloadProfileForm) {
    new Validator(
      downloadProfileForm,
      (err, res) => {
        // return res;
      },
      {
        removeSpaces: true,
      }
    );
  }
});
