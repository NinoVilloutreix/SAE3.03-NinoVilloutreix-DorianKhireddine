import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Pour le plugin ScrollTrigger
import "./style.css";

gsap.to(".object", { rotation : 360, duration: 2, repeat: -1, ease: "inoutcirc", yoyo: true})