const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const aaa = document.getElementsByTagName("a");

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from(".hero-heading", { x: 2000, duration: 2, ease: "expo.out" }).from(
  ".hero-text",
  {
    x: -1000,
    duration: 1,
    ease: "expo.out",
  }
);

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

// aaa.addEventListener("click", (e) => {
//   e.preventDefault();
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
