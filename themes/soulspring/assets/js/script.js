// main script
(function () {
  "use strict";

  window.addEventListener("scroll", () => {
    const target = document.querySelector(".scroll-to-position");
    const isVisible = window.pageYOffset > 150;
    target.classList.toggle("visible", isVisible);
    target.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Odometer init
  function playOdometer() {
    let el = document.querySelectorAll(".odometer");
    el.forEach((data) => {
      let dataCount = data.getAttribute("data-count");
      data.textContent = dataCount;
    });
  }
  inView(".odometer").on("enter", playOdometer);

  window.onload = () => {
    // banner slider
    new Swiper(".banner-slider .swiper", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      speed: 1500,
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });

    // how-it-works slider
    new Swiper(".how-it-works-slider.swiper", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      speed: 500,
      autoHeight: true,
      grabCursor: true,
      // autoplay: {
      //   delay: 4000,
      // },
      pagination: {
        el: ".pagination",
        type: "bullets",
        clickable: true,
        renderBullet: function (i, className) {
          return '<span class="' + className + '"></span>';
        },
      },
    });

    // testimonial-swiper
    new Swiper(".testimonial-swiper.swiper", {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 24,
      speed: 500,
      grabCursor: true,
      autoplay: {
        delay: 4000,
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        575: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });

    // swiper-soulspring-clinics
    new Swiper(".swiper.swiper-soulspring-clinics", {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 24,
      speed: 500,
      grabCursor: true,
      // autoplay: {
      //   delay: 4000,
      // },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 2,
        },
      },
    });
  };

  // Video Modal
  let modalEl = document.getElementById("videoModal");
  let modalVideo = document.getElementById("modalVideo");
  let modalClose = document.getElementById("modalClose");
  let videoModalBtn = document.querySelectorAll(
    '[data-bs-target="#videoModal"]'
  );
  let videoSrc;
  if (modalEl) {
    videoModalBtn.forEach(function (modalBtn) {
      modalBtn.addEventListener("click", function () {
        videoSrc = this.getAttribute("data-video-url");
        modalEl.addEventListener("shown.bs.modal", function () {
          modalClose.classList.remove("opacity-0");
          modalVideo.setAttribute("src", videoSrc);
        });
      });
    });
    modalEl.addEventListener("hidden.bs.modal", function () {
      modalClose.classList.add("opacity-0");
      modalVideo.setAttribute("src", "");
    });
  }
})();
