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
const imgBallon = document.querySelector(".img-ballon");
const realisations = document.querySelectorAll(".realisations");

gsap.from(logoHome, { y: 450, duration: 1 });
gsap.from(realisations, {
  y: 250,
  scrollTrigger: realisations,
  duration: 1,
  stagger: 0.1,
});
// ------------------------------------------

// SliderJS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: "true",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
