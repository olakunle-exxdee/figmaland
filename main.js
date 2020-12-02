const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".link");

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-heading",
    start: "top 25%",
    end: "bottom 100%",
  },
});

tl.from(".hero-heading", {
  opacity: 0,
  y: -30000,
  duration: 1,
  ease: "expo.out",
})
  .from(".hero-text", {
    opacity: 0,
    duration: 1,
    x: "1000",
    ease: "expo.out",
  })
  .from(".button", { opacity: 0, stagger: 1, duration: 2, ease: "expo.out" })
  .from(".hero-image", {
    opacity: 0,
    stagger: 1,
    duration: 2,
    ease: "expo.out",
  })
  .from(".group22", { opacity: 0, x: "-10rem", duration: 2, ease: "expo.out" })
  .from(".features-sub", {
    opacity: 0,
    stagger: 1,
    duration: 1,
    ease: "expo.out",
  })
  .from("#contents-sub", {
    opacity: 0,
    y: "0rem",
    duration: 1,
    ease: "expo.out",
  })
  .from(".content-wrapper", {
    opacity: 0,
    y: "10rem",
    duration: 2,
    stagger: 1,
    ease: "expo.out",
  });

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

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (navbar.classList.contains("open")) {
      navbar.classList.remove("open");
    }
  });
});
