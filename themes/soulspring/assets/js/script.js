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
