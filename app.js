// Fonction toggle pour le menu responsive ajout et remove la classe hidden

const menuElementsToToggle = document.querySelectorAll(".toggle-menu");
const iconeToggle = document.querySelector(".icone-toggle");

const toggleMenu = () =>
  menuElementsToToggle.forEach((el) => el.classList.toggle("hidden"));

iconeToggle.addEventListener("click", toggleMenu);

// ---------------------------------------

// Greensock

const logoHome = document.querySelector(".logo-home");
const imgBallon = document.querySelector(".img-ballon");
const realisations = document.querySelectorAll(".realisations");

gsap.from(logoHome, { y: 450, duration: 1, ease: "power4.out" });
gsap.from(realisations, {
  y: 250,
  scrollTrigger: realisations,
  duration: 1,
  stagger: 0.1,
});
gsap.from(imgBallon, {
  y: 250,
  scrollTrigger: imgBallon,
  duration: 1,
  stagger: 0.1,
});
