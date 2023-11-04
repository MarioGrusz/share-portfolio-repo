import { gsap } from "gsap";


export function svgCover(overlayPath) {
  gsap.timeline({})

  .set(overlayPath.current, {
      attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
  })
  .to(overlayPath.current, {
      duration: 0.8,
      ease: 'power4.in',
      attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' },
  }, 0)
  .to(overlayPath.current, {
      duration: 0.3,
      ease: 'power2',
      attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },

  })
};




export function svgReveal(overlayPath){
  gsap.timeline({})
  // now reveal
  .set(overlayPath.current, {
      attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
  })
  .to(overlayPath.current, {
      duration: 0.3,
      ease: 'power2.in',
      attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' },

  })
  .to(overlayPath.current, {
      duration: 0.8,
      ease: 'power4',
      attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
  })

}


export const introSvgAnimation = (overlayPath) => {
  const tl = gsap.timeline();
  tl.add(() => svgCover(overlayPath));
  tl.add(() => svgReveal(overlayPath), '<+=1.3'); //1 second delay
    
}


export const reverseIntroSvgAnimation = (overlayPath)  => {    
  gsap.timeline({})

  .set(overlayPath.current, {
      attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
  })
  .to(overlayPath.current, { 
      duration: 0.8,
      ease: 'power4.in',
      attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
  }, 0)
  .to(overlayPath.current, { 
      duration: 0.3,
      ease: 'power2',
      attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
      
  })
  // now reveal
  .set(overlayPath.current, { 
      attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
  })
  .to(overlayPath.current, { 
      duration: 0.3,
      ease: 'power2.in',
      attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
  })
  .to(overlayPath.current, { 
      duration: 0.8,
      ease: 'power4',
      attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
  })
}


export const pageTransitionAnimation = (overlayPath) => {
  const tl = gsap.timeline();
  tl.set(overlayPath.current, {
      attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
  });
  tl.add(() => svgReveal(overlayPath));
}
