import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

console.log(DrawSVGPlugin);


const sections = document.querySelectorAll(".grandsection");

const killerBtn = document.querySelector("#killer-button");
let animationsEnabled = true;

killerBtn.addEventListener("click", () => {
  if (animationsEnabled) {

    gsap.globalTimeline.clear();
    ScrollTrigger.getAll().forEach(st => st.kill());
    gsap.set("*", { clearProps: "all" });

    killerBtn.textContent = "Activer les animations";
  } else {
    // Nous n'avons pas trouvé de solution plus simple pour réactiver les animations GSAP une fois tuées
    location.reload();
  }
  animationsEnabled = !animationsEnabled;
});


// //////////////////////////// GRANDSECTIONS (code donné par le professeur) ////////////////////////////
sections.forEach((section) => {
  const color = section.getAttribute("data-bgcolor");


  
  ScrollTrigger.create({
    trigger: section,
    start: "top 50%",
    end: "bottom 50%",
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
    start: "top 70%",
    end: "bottom 30%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

planettl.fromTo(
  ".img__planet",
  { x: 500, opacity: 0, scale: 0.5 },
  { x: 0, opacity: 1, duration: 1, scale: 1 }
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
  { y: 0, opacity: 1, scale: 10 },
  { y: -200, opacity: 1, duration: 1, scale: 10 }
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
  { y: -1000, opacity: 0, scale: 0.5 },
  { y: -200, opacity: 1, scale: 1.5, ease: "circ.out" }
);



efferalgantl.to(".img__efferalgan", {
  y: 50,
  opacity: 0,
  scale: 0.5,
  ease: "circ.in",
});

// ################## TEXT1 ##################

const text1tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__text1",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

text1tl.fromTo(
  ".section__text1",
  { x: -300, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 1, ease: "elastic.out" }
);

// ################## DILATATION ##################

const dilatationtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__dilatation",
    start: "top 80%",
    end: "bottom 20%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

dilatationtl.fromTo(
  ".img__dilatation",
  { x: -100, y: -100, opacity: 0, scale: 1 },
  { x: 300, y: -100, opacity: 1, duration: 0.5, scale: 2 }
);

dilatationtl.fromTo(
  ".text__dilatation",
  { y: 100, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<0.3"
);


dilatationtl.fromTo(
  ".img__warning",
  { x: -50, y: -400, opacity: 1, scale: 0, rotation: 60 },
  { x: 0, y: -350, opacity: 1, duration: 1, scale: 2, rotation: -15, ease: "elastic.out"},
  "<0.3"
);

dilatationtl.fromTo(
  ".img__arrow1",
  { x: -100, y: 0, opacity: 0, scale: 0.5 },
  { x: 300, y: 0, opacity: 1, duration: 0.5, scale: 1, ease: "back.out"},
  "<0.3"
);

dilatationtl.fromTo(
  ".img__arrow2",
  { x: -100, y: 0, opacity: 0, scaleX: 0.5, scaleY: -0.5, rotation:0 },
  { x: 300, y: -125, opacity: 1, duration: 0.5, scaleX: 1, scaleY: -1, ease: "back.out", rotation:120},
  "<0.3"
);

dilatationtl.set(
  ".img__lisere-container",
  {
    scale: 2.0,
    x: 500,
  }
  
)

let svg = document.querySelector(".img__lisere-container");
let path = svg.querySelector(".img__lisere");

const length = path.getTotalLength();

gsap.set(path, {
  strokeDasharray: `${length} ${length}`,
  strokeDashoffset: length,
});

dilatationtl.to(path, {
  strokeDashoffset: 0,
  duration: 1
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
  { x: 500, opacity: 0, scale: 0.5 },
  { x: 0, opacity: 1, duration: 1, scale: 1 }
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
    start: "top 60%",
    end: "bottom 40%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

monteetl.fromTo(
  ".img__montee",
  { x: -500, opacity: 0, scale: 0.5 },
  { x: 0, opacity: 1, duration: 1, scale: 1 }
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
    start: "top 70%",
    end: "bottom 30%",
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
  { x: 500, opacity: 0, scale: 0.5 },
  { x: 0, opacity: 1, duration: 1, scale: 1, ease: "back.out" }
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
  { x: -500, opacity: 0, scale: 0.5 },
  { x: 0, opacity: 1, duration: 1, scale: 1, ease: "back.out" }
);

ourstl.fromTo(
  ".text__ours",
  { y: 0, opacity: 0, scale: 1 },
  { y: 0, opacity: 1, duration: 1, scale: 1 },
  "<"
);

// ################## DISTANCE ##################

const distancetl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__distance",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

distancetl.fromTo(
  ".img__distance",
  { y: 200, opacity: 0, scaleX: 2, scaleY: 0 },
  { y: 0, opacity: 1, duration: 1, scaleX: 1, scaleY: 1, ease: "elastic.out" }
);

distancetl.fromTo(
  ".text__distance",
  { x: 200, opacity: 0, scale: 1 },
  { x: 100, opacity: 1, duration: 1, scale: 1 },
  "<"
);

// ################## RECHERCHE ##################

const iletl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__ile",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

iletl.fromTo(
  ".img__ile",
  { y: 200, opacity: 0, scaleX: 2, scaleY: 0},
  { y: 0, opacity: 1, duration: 1, scaleX: 1, scaleY: 1, ease: "elastic.out"}
);

iletl.fromTo(
  ".text__ile",
  { x: -200, opacity: 0, scale: 1},
  { x: -100, opacity: 1, duration: 1, scale: 1},
  "<"
);


// ################## LOGO ##################

const logotl = gsap.timeline({
  scrollTrigger: {
    trigger: ".logo",
    start: "top 60%",
    end: "bottom 40%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

logotl
.fromTo(
  ".logo",
  { x: 0, opacity: 0, scale: 0, rotation: 0},
  { x: 0, opacity: 1, duration: 0.5, scale: 1, ease: "back.out", rotation: 30 })
  .fromTo(
  ".logo",
  {rotation: 30 },
  {duration: 2, scale: 1, rotation: 0, ease: "elastic.out" },
  "<"
  );
  
// ################## RECHERCHE ##################

const recherchetl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__recherche",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

recherchetl.fromTo(
  ".img__recherche",
  { y: 200, opacity: 0, scaleX: 2, scaleY: 0, rotation: 45 },
  { y: 0, opacity: 1, duration: 1, scaleX: 1, scaleY: 1, ease: "elastic.out" , rotation: 0}
);

recherchetl.fromTo(
  ".text__recherche",
  { x: -200, opacity: 0, scale: 1 },
  { x: -100, opacity: 1, duration: 1, scale: 1 },
  "<"
);




// ################## SOLUTIONS ##################

const solutionstl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__solutions",
    start: "top 50%",
    end: "bottom 50%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

solutionstl.fromTo(
  ".img__herbier",
  { x: -500, opacity: 0, scale:0.5, rotation:-30},
  { x: 0, opacity: 1, duration: 1, scale:1, ease:"circ.inOut", rotation:30},
  "<"
);

solutionstl.fromTo(
  ".img__coral",
  { x: 500, opacity: 0, scale:0.5, rotation:30},
  { x: 0, opacity: 1, duration: 1, scale:1, ease:"circ.inOut", rotation:-30},
  "<"
);

solutionstl.fromTo(
  ".text__solutions",
  {scaleX:0, scaleY:2, opacity: 0, scale: 1 },
  {scaleX:1, scaleY:1,opacity: 1, duration: 1, scale: 1, ease:"circ.inOut"},
  "<"
);

solutionstl.add("afterIntro");


solutionstl.fromTo(
  ".img__herbier",
  { rotation:30},
  { rotation:0 , ease:"elastic.out", duration: 1},
  "afterIntro-=0.45"
);

solutionstl.fromTo(
  ".img__coral",
  { rotation:-30},
  { rotation:0 , ease:"elastic.out", duration: 1},
  "afterIntro-=0.45"
);


// ################## PANNEAU ##################

const panneautl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__panneau",
    start: "top 50%",
    end: "bottom",
    // markers: true,            
    toggleActions: "play none play reverse",
    scrub: true
  },
  yoyo: true
});


panneautl.fromTo(".img__panneau",
  { y: 1000, opacity: 0, scale: 0.35, rotation: 0},
  { y: 200, opacity: 1, scale: 1, ease: "circ.out", rotation: 390 }
);



panneautl.to(".img__panneau", {
  y: -500,
  opacity: 0,
  scale: 1,
  ease: "circ.in",
  rotation: 720
});







// ################## TEXT3 ##################

const text3tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section__text3",
    start: "top 70%",
    end: "bottom 30%",
    // markers: true,            
    toggleActions: "play none play reverse"
  },
  yoyo: true
});

text3tl.fromTo(
  ".section__text3",
  { y: -100, opacity: 0, scale: 0 },
  { y: 0, opacity: 1, duration: 1, scale: 1, ease: "bounce.out" },
  "<0.3"
  
);



// ################## WATERFALL ##################
import { DotLottie } from "@lottiefiles/dotlottie-web";

const dotLottie = new DotLottie({
  canvas: document.querySelector("#img__waterfall"),
  src: "https://lottie.host/578b1840-dcd8-4db2-b68c-32a301efe8a4/xyusMhbYkw.lottie",
  autoplay: true,
  loop: true,
});

dotLottie.load();

const animation = new DotLottie({
  canvas: document.querySelector("#canvas"),
  src: "https://path-to-your-animation.lottie",
  autoplay: true,
  loop: true,
  speed: 1.5, // Vitesse de lecture (1 = normale)
  backgroundColor: "#f0f0f0", // Couleur de fond du canvas
  segment: [10, 50], // Jouer uniquement les frames de 10 à 50
  renderConfig: {
    autoResize: true, // Redimensionnement automatique
    devicePixelRatio: window.devicePixelRatio || 1, // Netteté sur écrans haute densité
  },
  layout: {
    fit: "contain", // 'contain', 'cover', 'fill', 'fit-width', 'fit-height', 'none'
    align: [0.5, 0.5], // Alignement [x, y] (0.5 = centre)
  },
});



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
      start: "top 80%",
      end: "bottom 50%",
      toggleActions: "play none play reverse"
    }
  });
});


gsap.fromTo(
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
