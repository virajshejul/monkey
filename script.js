// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  // Animate hero titles
  gsap.from(".hero-title-1", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  gsap.from(".hero-title-2", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out"
  });

  // Example: Animate .subtitle if present
  gsap.from(".subtitle p", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "power2.out"
  });
});

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  direction: "vertical",
  gestureDirection: "vertical",
  smoothTouch: false,
  touchMultiplier: 2,
});

// Sync Lenis with GSAP's ScrollTrigger
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

// Optional: Remove gsap.ticker.add and lagSmoothing if using raf loop

document.addEventListener("dblclick", () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }
});

