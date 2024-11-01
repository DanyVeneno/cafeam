gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".contenedor_main .s_scroll"),
  contenedor_main = document.querySelector(".contenedor_main");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".contenedor_main",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + contenedor_main.offsetWidth,
  },
});
