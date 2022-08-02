// main script
(function () {
  "use strict";

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
    speed: 1500,
    allowTouchMove: false,
    // autoplay: {
    //   delay: 4000,
    // },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // Video Modal
  let modalEl = document.getElementById("videoModal");
  let modalVideo = document.getElementById("modalVideo");
  let modalClose = document.getElementById("modalClose");
  let videoModalBtn = document.querySelectorAll(
    '[data-bs-target="#videoModal"]'
  );
  let videoSrc;
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

  // swiper slider
  // new Swiper(".swiper", {
  //   loop: true,
  //   spaceBetween: 50,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return `<span class=${className}>${index + 1}</span>`;
  //     },
  //   },
  //   navigation: {
  //     nextEl: ".swiper-next",
  //     prevEl: ".swiper-prev",
  //   },
  // });
})();
