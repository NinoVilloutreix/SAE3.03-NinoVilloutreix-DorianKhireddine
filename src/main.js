import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".object", { rotation : 360, duration: 2, repeat: -1, ease: "inoutcirc", yoyo: true})







// //////////////////////////// GRANDSECTION 1 ////////////////////////////
gsap.to(".section__body", {
  backgroundColor: "var(--color-blue1)", // couleur cible
  duration: 1,
  scrollTrigger: {
    trigger: ".grandsection__1",
    start: "top center",   // quand le haut de la section atteint le centre du viewport
    end: "bottom center",  // quand le bas atteint le centre
    toggleActions: "play none none reverse"
    // markers: true,
  },
});
// //////////////////////////// GRANDSECTION 2 ////////////////////////////
gsap.to(".section__body", {
  backgroundColor: "var(--color-green1)", // couleur cible
  duration: 1,
  scrollTrigger: {
    trigger: ".grandsection__2",
    start: "top center",   // quand le haut de la section atteint le centre du viewport
    end: "bottom center",  // quand le bas atteint le centre
    toggleActions: "play none none reverse"
    // markers: true,
  },
});
// //////////////////////////// GRANDSECTION 3 ////////////////////////////
gsap.to(".section__body", {
  backgroundColor: "var(--color-red1)", // couleur cible
  duration: 1,
  scrollTrigger: {
    trigger: ".grandsection__3",
    start: "top center",   // quand le haut de la section atteint le centre du viewport
    end: "bottom center",  // quand le bas atteint le centre
    toggleActions: "play none none reverse"
    // markers: true,
  },
});
// //////////////////////////// GRANDSECTION 4 ////////////////////////////
gsap.to(".section__body", {
  backgroundColor: "yellow", // couleur cible
  duration: 1,
  scrollTrigger: {
    trigger: ".grandsection__4",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse",
    markers: true,
  },
});



// ################## PLANET ##################

const planettl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__planet",   
    start: "top 50%",          
    end: "bottom 50%",     
    markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

planettl.fromTo(
  ".img__planet",
  { xPercent: 500, opacity: 0, scale: 1 },
  { xPercent: 0, opacity: 1, duration: 1, scale: 3 }
);

planettl.fromTo(
  ".text__planet",
  { y: 100, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<"
);

// ################## REGUL ##################

const regultl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__regul",   
    start: "top 50%",          
    end: "bottom 50%",     
    markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

regultl.fromTo(
  ".img__regul",
  { x: -500, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 3 }
);

regultl.fromTo(
  ".text__regul",
  { y: 100, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<"
);

// ################## EFFERALGAN ##################

const efferalgantl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__efferalgan",   
    start: "top 50%",          
    end: "bottom 50%",     
    // markers: true,            
    toggleActions: "play none play reverse",
    scrub: true
  },
  yoyo: true
});


efferalgantl.fromTo(".img__efferalgan",
  { y: -1000, opacity: 0, scale: 1 },
  { y: -200, opacity: 1, scale: 3, ease: "circ.out"}
);



efferalgantl.to(".img__efferalgan", {
  y: 1000,
  opacity: 0,
  scale: 1,
  ease: "circ.in",
});

// ################## TEXT1 ##################

const text1tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__text1",   
    start: "top 50%",          
    end: "bottom 50%",     
    markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

text1tl.fromTo(
  ".section__text1",
  { x: -100, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 1 , ease: "elastic.out"}
);

// ################## DILATATION ##################

const dilatationtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__dilatation",   
    start: "top 50%",          
    end: "bottom 50%",     
    markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

dilatationtl.fromTo(
  ".img__dilatation",
  { x: -100, y:-100, opacity: 0, scale: 1 },
  { x: 0, y:0, opacity: 1, duration: 1, scale: 3 }
);

dilatationtl.fromTo(
  ".text__dilatation",
  { y: 100, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<"
);