import { gsap } from "gsap";


export const revealHeader = (headerRef) => {
    const tl = gsap.timeline();
  
    tl.fromTo(
      headerRef.current,
      {
        autoAlpha: 0,
        y: 32,
      },
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        ease: "expo.out",
        duration: 2,
      }
    );
  
    return tl;
};