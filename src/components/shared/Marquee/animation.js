import { gsap } from "gsap";
let tween;

const initializeMarquee = (marqueeRef, duration) => {
  const marquee = marqueeRef.current;
  if (!marquee) {
    return;
  }

  const marqueeContent = marquee.querySelector('.marquee-content');
  if (!marqueeContent) {
    return;
  }
  const marqueeContentClone = marqueeContent.cloneNode(true);
  marquee.append(marqueeContentClone);

  const playMarquee = () => {
    let progress = tween ? tween.progress() : 0;
    tween && tween.progress(0).kill();
    const marqueeContent = marquee.querySelector('.marquee-content');
    const width = marqueeContent.offsetWidth;
    const gap = parseInt(
      getComputedStyle(marqueeContent).getPropertyValue('column-gap'),
      10
    );
    const distanceToTranslate = -1 * (gap + width);
    tween = gsap.fromTo(
      marquee.children,
      { x: 0 },
      { x: distanceToTranslate, duration, ease: 'none', repeat: -1 }
    );
    tween.progress(progress);
  };

  playMarquee();

  const debounce = (func) => {
    let timer;
    return (e) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func();
      }, 500, e);
    };
  };

  window.addEventListener('resize', debounce(playMarquee));
};

initializeMarquee.cleanup = () => {
  window.removeEventListener('resize', initializeMarquee.debounce);
  tween && tween.kill();
};

export default initializeMarquee;