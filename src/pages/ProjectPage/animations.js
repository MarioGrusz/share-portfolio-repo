
const parallaxScroll = (parallaxScrollElementRef) => {

    const targets = parallaxScrollElementRef.current.querySelectorAll('.scroll');
   
    targets.forEach((target) => {
      let pos = window.scrollY * target.dataset.rate;
   
      if(target.dataset.direction === 'vertical') {
        target.style.transform = `translate3d(0px, ${pos}px, 0px)`;
      } else {
        let posX = window.scrollY * target.dataset.ratex;
        let posY = window.scrollY * target.dataset.ratey;
   
        target.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
      }
    });
}

export default parallaxScroll

//https://www.phind.com/search?cache=u4363d8eem68v2hngy66pqzc
   