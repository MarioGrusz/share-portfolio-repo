import { gsap } from "gsap";


const introTextAnimation = (heroTextRefs) => {

  const tl = gsap.timeline();

  heroTextRefs.forEach((ref, index) => {
    tl.from(ref.current, {
      rotationX: '-110deg',
      z: '-390px',
      y: '100%',
      ease: "circ.out",
      duration: 1,
      opacity: 0,
      transformOrigin: 'top center'
    });
  });
  
  return tl;
};

export default introTextAnimation