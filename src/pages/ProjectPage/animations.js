import gsap from "gsap";


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



const imageRevealOnScroll = (revealContainerRefs) => {

  const revealContainers = revealContainerRefs.current;
 
  revealContainers.forEach((container) => {
    const wrapper = container.querySelector('.project-single-image-wrapper')
    const image = container.querySelector("img")
 
    console.log({wrapper, image})
 
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
          }
      }
    })
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
 





// const imageRevealOnScroll = (revealContainerRefs) => {

//   const revealContainers = revealContainerRefs.current;

//   console.log(revealContainerRefs)
  

//   revealContainers.forEach((container) => {
//     let image = container.querySelector("img")
//     console.log(image)
//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         //toggleActions: "restart none none reset"
//       }
//     });
//     timeline.set(container, { autoAlpha: 1 });
//     timeline.from(container, {
//       duration: 1.5,
//       xPercent: 50,
//       ease: Power2.out
//     });
//     timeline.from(image, {
//       duration: 1.5,
//       xPercent: 100,
//       scale: 1.3,
//       delay: -1.5,
//       ease: Power2.out
//     });
//   });

// }
 
 

export {
  parallax,
  imageRevealOnScroll,
}












//https://www.phind.com/search?cache=u4363d8eem68v2hngy66pqzc


//https://www.phind.com/search?cache=sfaaivzc37w7vvksx6jlffcj
//https://www.phind.com/search?cache=u4363d8eem68v2hngy66pqzc
   