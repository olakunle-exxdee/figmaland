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

const scrl = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

scrl.reveal(".logo", {});
scrl.reveal(".link", { delay: 200 });
scrl.reveal(".login", { delay: 400 });

scrl.reveal(".heading", {});
scrl.reveal(".text", { delay: 200 });
scrl.reveal(".btn", { delay: 400 });
scrl.reveal(".sub-content", { delay: 500 });
scrl.reveal(".heading-group", { delay: 600 });
scrl.reveal(".content-img", { interval: 200 });
