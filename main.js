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

scrl.reveal(".link", { delay: 200, easing: "ease-in" });

scrl.reveal(".heading", {});
scrl.reveal(".text", { delay: 200 });
scrl.reveal(".btn", { delay: 200 });
scrl.reveal(".sub-content", { delay: 400 });
scrl.reveal(".heading-group", { delay: 500 });
scrl.reveal(".content-img", { delay: 500 });
scrl.reveal(".content-wrapper", { delay: 300, easing: "ease-in" });
