import { gsap } from "gsap";
import { svgCover, svgReveal, introSvgAnimation, reverseIntroSvgAnimation } from "../../components/shared/SvgOverlay/animation";


export const openMenuAnim = (overlayPath, menuRef) => {
  console.log('open')
  const tl = gsap.timeline({});
  tl.add(introSvgAnimation(overlayPath));
  tl.to(menuRef.current, {autoAlpha: 1}, '+=1');
  tl.to(menuRef.current.querySelectorAll('a'), {
      top:0,
      ease: 'power3.out',
      stagger: {
          amount: 0.2
      },
      delay: 0.1,
  });
  return tl;  
}


export const closeMenuAnim = (overlayPath, menuRef) => {
  console.log('close')
  const tl = gsap.timeline();
  tl.add(reverseIntroSvgAnimation(overlayPath));
  tl.to(menuRef.current.querySelectorAll('a'), {
    top: 150,
    ease: 'power3.out',
    stagger: {
      amount: 0.2,
    },
  }, '+=0.4');
  tl.to(menuRef.current, { autoAlpha: 0 }, '<+=0.9');
  return tl;
}







export const openMenuAnimation = (menuRef, overlayPath) => {
    const tl = gsap.timeline();
    tl.add(() => introSvgAnimation(overlayPath));
    tl.to(menuRef.current, {autoAlpha: 1}, '<+=2');
    tl.to(menuRef.current.querySelectorAll('a'), {
        top:0,
        ease: 'power3.out',
        stagger: {
            amount: 0.2
        },
        delay: 0.1,
    },'-=0.6');
    return tl;    
}

export const closeMenuAnimation = (overlayPath, menuRef) => {
  const tl = gsap.timeline();
  tl.to(menuRef.current, { autoAlpha: 0 }, '<+=0.1');
  tl.to(menuRef.current.querySelectorAll('a'), {
    top: 150,
    ease: 'power3.out',
    stagger: {
      amount: 0.2,
    },
  }, '-=0.6');
  tl.add(() => svgReveal(overlayPath), '-=0.5');
  return tl;
};




export const handleSmoothScrollClick = (elementRef, scrollRef) => {          
  scrollRef.current.scrollTo( elementRef.current,  {
    'offset': 0,
    'callback': function() {
      console.log('smooth scroll on click')
    },
    'duration': 600,
    'easing': [0.25, 0.00, 0.35, 1.00],
    'disableLerp': true
  } )
}