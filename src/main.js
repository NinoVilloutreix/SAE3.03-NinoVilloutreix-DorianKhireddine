import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".object", { rotation : 360, duration: 2, repeat: -1, ease: "inoutcirc", yoyo: true})



const basictl = gsap.timeline({
  scrollTrigger: {
    trigger: ".img__planet",   
    start: "top 80%",          
    end: "bottom 30%",     
    markers: true,            
    toggleActions: "play none play reverse"
    // play = lance l’anim en descendant
    // reverse = rejoue en sens inverse quand tu remontes
  },
  yoyo: true
});

basictl.fromTo(
  ".img__planet",
  { x: 500, opacity: 0, scale: 1 },
  { x: 0, opacity: 1, duration: 1, scale: 3 }
);
