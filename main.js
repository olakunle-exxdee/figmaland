const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

let showMenu = false;

hamburger.addEventListener("click", () => {
  if (!showMenu) {
    navbar.classList.add("open");
    showMenu = true;
  } else {
    navbar.classList.remove("open");
    showMenu = false;
  }
});

window.sr = ScrollReveal();

sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 300,
  reset: true,
});

sr.reveal(".animate-bottom", {
  origin: "top",
  distance: "25rem",
  duration: 1000,
  reset: true,
});
