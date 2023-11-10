import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const parallax = (elementRefs, scrollPosition) => {

  //const targets = elementRefs.current
  const targets = elementRefs.current ?? [];

  targets?.forEach((target) => {

    if(target !== null) {

      let rate = target.dataset.rate; 
      let direction = target.dataset.direction;
      let pos = scrollPosition * rate;
  
  
      if(direction === 'vertical') {
        target.style.transform = `translate3d(0px, ${pos}px, 0px)`;
      } else {
        let posX = scrollPosition * target?.dataset.ratex;
        let posY = scrollPosition * target?.dataset.ratey;
  
        target.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
      }

    }      
  });
}



const imageRevealOnScroll = (revealContainerRef) => {

  const revealContainers = revealContainerRef.current;
 
  revealContainers.forEach((container) => {
    const wrapper = container.querySelector('.project__image-reveal-wrapper')
    const image = container.querySelector("img")
 
 
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top 65%',
        //markers: true,
        onLeaveBack: () => {
          tl.reverse();
        },
        onEnterBack: () => {
          tl.play();
        },
      }
    })
    tl.pause()
    tl.to(wrapper, {
      ease: "power2",
      duration: 3,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    })
    tl.to(image, {
      duration: 3,
      scale: 1
    }, "<")
 
  })
 
}



const colorChangeOnScroll = (containerColorRef, scrollContainerColorRef) => {


  const scroller = scrollContainerColorRef.current
  const scrollColorElems = containerColorRef.current

  const initialBg = scroller.dataset.bgcolor;
  const initialText = scroller.dataset.textcolor;

  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

    const currentBg = colorSection.dataset.bgcolor;
    const currentText = colorSection.dataset.textcolor
    console.log({prevBg, prevText, currentBg, currentText})

    ScrollTrigger.create({
      trigger: colorSection,
      start: "top 30%",
      //markers: true,
      onEnter: () =>
        gsap.to(scroller, {
          backgroundColor: currentBg,
          color: currentText,
          overwrite: "auto"
        }),
      onLeaveBack: () =>
        gsap.to(scroller, {
          backgroundColor: prevBg,
          color: prevText,
          overwrite: "auto"
        })
    });
  }) 
}
 
 
 

export {
  parallax,
  imageRevealOnScroll,
  colorChangeOnScroll,
}