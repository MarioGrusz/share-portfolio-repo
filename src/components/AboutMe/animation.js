import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);


export const textAnimation = () => {

    console.log("textAnimation function called");

    let typeSplitChildren = new SplitType("[text-split]", {
        types: "words, chars",
        wordClass: "lineChildern",
    });

    document.querySelectorAll('[words-slide-up]').forEach((item, idx) =>{
        let elements = item.querySelectorAll('.char');
        let tl = gsap.timeline({ paused: true});
  
        ScrollTrigger.create({
            trigger: item,
            start: "top 60%",
            //markers: true,
            onEnter: () => {
                console.log("ScrollTrigger entered");
                tl.play();
            }
        });  
        tl.from(elements, {
            yPercent: 150,
            duration: 0.4, 
            ease: "power1.out",
            stagger: { amount: 0.2 }
        });
  
        tl.revert();
    }); 
}