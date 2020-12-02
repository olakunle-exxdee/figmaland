const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".link");

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".hero-heading", { x: "300rem", duration: 3, ease: "expo.out" })
  .from(".hero-text", {
    x: "-300rem",
    duration: 2,
    ease: "expo.out",
  })
  .from(".button", { opacity: 0, stagger: 1, duration: 2 });

// gsap.to(".features", {
//   // x: "400",
//   duration: 3,
//   scrollTrigger: {
//     trigger: ".group22",
//     start: " top 50%",
//     end: "100 20%",
//     scrub: 4,
//     scrollActions: "restart none none none",
//     pin: ".contents",
//     markers: {
//       startColor: "blue",
//       fontSize: "2rem",
//     },
//   },
// });

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
