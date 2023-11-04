import { gsap } from "gsap";



export const textAnimation = (firstText, secondText) => {
    let xPercent = 0; 
    
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
}