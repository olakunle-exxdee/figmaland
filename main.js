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
