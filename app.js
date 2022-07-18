// Fonction toggle pour le menu responsive ajout et remove la classe hidden

const menuElementsToToggle = document.querySelectorAll(".toggle-menu");
const iconeToggle = document.querySelector(".icone-toggle");

const navmenup = document.querySelector(".navmenuApropos");
const navmenur = document.querySelector(".navmenuReal");
const navmenupr = document.querySelector(".navmenuPres");
const navmenuco = document.querySelector(".navmenuContact");

const toggleMenu = () =>
  menuElementsToToggle.forEach((el) => el.classList.toggle("hidden"));

iconeToggle.addEventListener("click", toggleMenu);
navmenup.addEventListener("click", toggleMenu);
navmenur.addEventListener("click", toggleMenu);
navmenupr.addEventListener("click", toggleMenu);
navmenuco.addEventListener("click", toggleMenu);

// ---------------------------------------

// Greensock

const logoHome = document.querySelector(".logo-home");
gsap.from(logoHome, { y: 450, duration: 1 });

// ------------------------------------------

// SliderJS
var swiper = new Swiper(".slide-content-prestation", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination-prestation",
    clickable: true,
    dynamicBullets: "true",
  },
  navigation: {
    nextEl: "#next-prestation",
    prevEl: "#prev-prestation",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// SliderJS
var swiper1 = new Swiper(".slide-content-realisation", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination-realisation",
    clickable: true,
    dynamicBullets: "true",
  },
  navigation: {
    nextEl: "#next-realisation",
    prevEl: "#prev-realisation",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    815: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
});
