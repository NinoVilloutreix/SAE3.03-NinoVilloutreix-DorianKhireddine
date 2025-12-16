import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);










const sections = document.querySelectorAll(".grandsection");


sections.forEach((section) => {
  const color = section.getAttribute("data-bgcolor");


  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    // markers: true,
    onEnter: () =>
      gsap.to("body", {
        backgroundColor: color,
        duration: 1,
        ease: "power2.out",
      }),
    onEnterBack: () =>
      gsap.to("body", {
        backgroundColor: color,
        duration: 1,
        ease: "power2.out",
      }),
  });
});




// ################## PLANET ##################

const planettl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__planet",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

planettl.fromTo(
  ".img__planet",
  { x: 500, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 3 }
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
    start: "top 80%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  }
}
);

regultl.fromTo(
  ".img__regul",
  { y: 100, opacity: 0, scale: 10 },
  { y: 0, opacity: 1, duration: 1, scale: 10 }
);

regultl.fromTo(
  ".text__regul",
  { y: 0, opacity: 0, scale: 1 },
  { y: -400, opacity: 1, duration: 1, scale: 1 },
  "<"
);

// Houle
gsap.to(".img__regul", {
  x: "+=100",
  duration: 1,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});


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
  { y: -200, opacity: 1, scale: 3, ease: "circ.out" }
);



efferalgantl.to(".img__efferalgan", {
  y: 50,
  opacity: 0,
  scale: 1,
  ease: "circ.in",
});

// ################## TEXT1 ##################

const text1tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__text1",
    start: "top 40%",
    end: "bottom 60%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

text1tl.fromTo(
  ".section__text1",
  { x: -100, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 1, ease: "elastic.out" }
);

// ################## DILATATION ##################

const dilatationtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__dilatation",
    start: "top 40%",
    end: "bottom 50%",
    markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

dilatationtl.fromTo(
  ".img__dilatation",
  { x: -100, y: -100, opacity: 0, scale: 8 },
  { x: 300, y: -100, opacity: 1, duration: 0.5, scale: 7 }
);

dilatationtl.fromTo(
  ".text__dilatation",
  { y: 100, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<0.3"
);


dilatationtl.fromTo(
  ".img__warning",
  { x: -250, y: -300, opacity: 1, scale: 0, rotation: 45 },
  { x: -200, y: -250, opacity: 1, duration: 1, scale: 1, rotation: 0, ease: "elastic.out"},
  "<0.3"
);

dilatationtl.fromTo(
  ".img__arrow1",
  { x: -250, y: -300, opacity: 0, scaleX: -0.5, scaleY: 0.5, rotation: 0 },
  { x: 0, y: -200, opacity: 1, duration: 0.5, scaleX: -1, scaleY: 1, rotation: -45, ease: "back.out"},
  "<0.3"
);

dilatationtl.fromTo(
  ".img__arrow2",
  { x: -400, y: 100, opacity: 0, scale: 0.5, rotation: 0 },
  { x: -300, y: 200, opacity: 1, duration: 0.5, scale: 1.5, rotation: -60, ease: "back.out"},
  "<0.3"
);



let svg = document.querySelector("svg");
let path = svg.querySelector("path");

const length = path.getTotalLength();

gsap.set(path, {
  strokeDasharray: `${length} ${length}`,
  strokeDashoffset: length
});

dilatationtl.to(path, {
  strokeDashoffset: 0,
  duration: 2
});








// ################## ACIDE ##################

const acidetl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__acide",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

acidetl.fromTo(
  ".img__acide",
  { x: 500, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 3 }
);

acidetl.fromTo(
  ".text__acide",
  { x: -500, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 1 },
  "<"
);

// ################## MONTEE ##################

const monteetl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__montee",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

monteetl.fromTo(
  ".img__montee",
  { x: -500, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 3 }
);

monteetl.fromTo(
  ".text__montee",
  { y: 100, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<"
);

// ################## TEXT2 ##################

const text2tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__text2",
    start: "top 60%",
    end: "bottom 40%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

text2tl.fromTo(
  ".section__text2",
  { x: 0, opacity: 0, scale: 0 },
  { x: 0, opacity: 1, duration: 0.5, scale: 1, ease: "back.out" }
);

// ################## GLACIER ##################

const glaciertl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__double",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

glaciertl.fromTo(
  ".img__glacier",
  { x: 500, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 3, ease: "back.out" }
);

glaciertl.fromTo(
  ".text__glacier",
  { y: 0, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<"
);

// ################## OURS ##################

const ourstl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__double",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

ourstl.fromTo(
  ".img__ours",
  { x: -500, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 3, ease: "back.out" }
);

ourstl.fromTo(
  ".text__ours",
  { y: 0, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<"
);

// ################## TEXT3 ##################

const text3tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__text3",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

text3tl.fromTo(
  ".section__text3",
  { y: -100, opacity: 0, scale: 0 },
  { y: 0, opacity: 1, duration: 1, scale: 1, ease: "bounce.out" }
);

// ################## 100KM ##################

const kmtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__km",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

kmtl.fromTo(
  ".img__km",
  { y: 200, opacity: 0, scaleX: 5, scaleY: 0 },
  { y: 0, opacity: 1, duration: 1, scaleX: 3, scaleY: 3, ease: "elastic.out" }
);

kmtl.fromTo(
  ".text__km",
  { y: 100, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<"
);
// ################## BOITE ##################

const lignes = gsap.utils.toArray(".section__boite");
const total = lignes.length;

lignes.forEach((ligne, i) => {
  gsap.from(ligne.querySelectorAll("img"), {
    y: -200,
    opacity: 0,
    duration: 0.5,
    ease: "bounce.out",
    stagger: 0.1,
    delay: (total - 1 - i) * 0.5,
    scrollTrigger: {
      trigger: ".section__boite",
      // markers: true,
      start: "top 30%",
      end: "bottom 50%",
      toggleActions: "play none play reverse"
    }
  });
});


boitetl.fromTo(
  ".text__boite",
  { y: 100, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<"
);




// ************************** Oubliettes

// const gs2tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".grandsection__2",
//     start: "top 50%",
//     end: "bottom 50%",
//     // markers: true,
//     toggleActions: "play none play reverse"
//   },
// });


// gs2tl.fromTo(".section__body",
//   { backgroundColor: gsap.getProperty(".section__body", "backgroundColor")},
//   { backgroundColor: "var(--color-green1)", duration: 1,}

// );
