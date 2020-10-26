// "use strict";

// const refs = {
//   burger: document.querySelector("#burger"),
//   menu: document.querySelector("#menu"),
//   mobileMenu: document.querySelector("#mobile-menu"),
//   modalsWrapper: document.querySelector("#modals-wrapper"),
// };

// refs.burger.addEventListener("click", toggleBurger);
// refs.mobileMenu.addEventListener("click", closeBurger);
// refs.modalsWrapper.addEventListener("click", closeBurger);

// function toggleBurger(event) {
//   event.preventDefault();
//   event.currentTarget.classList.toggle("active");
//   refs.mobileMenu.classList.toggle("active");
//   refs.modalsWrapper.classList.toggle("active");
//   refs.menu.classList.toggle("active");
//   document.body.classList.toggle("lock");
// }

// function closeBurger(event) {
//   refs.burger.classList.remove("active");
//   refs.menu.classList.remove("active");
//   refs.mobileMenu.classList.remove("active");
//   refs.modalsWrapper.classList.remove("active");
//   document.body.classList.remove("lock");
// }



// SLIDER
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters  
  // loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})