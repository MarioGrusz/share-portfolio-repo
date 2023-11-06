import { gsap } from "gsap";



export const progressAnimation = (progressRef, progressNumberRef, progressTextRef) => {
    const tl = gsap.timeline();
  
    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 5,
      ease: "power3.inOut",
    })
    .to(
    progressNumberRef.current,
    {
        x: "100vw",
        duration: 5,
        ease: "power3.inOut",
    },
    "<"
    )
    .to(
    progressNumberRef.current,
    {
        textContent: "100%",
        duration: 5,
        roundProps: "textContent",
    },
    "<"
    )
    .to(progressNumberRef.current, {
    y: 24,
    autoAlpha: 0,
    })
    .to(progressRef.current, {
        autoAlpha: 0,
    }, '-=0.8')
    .to(progressRef.current, {
        autoAlpha: 0,
    }, '-=0.8')
    .to(progressTextRef.current, {
        autoAlpha: 1,
        duration: 0.3
    })
    .to(progressTextRef.current, { 
        autoAlpha: 0,
        duration: 0.3 }, "+=0.5");
    

};


  
