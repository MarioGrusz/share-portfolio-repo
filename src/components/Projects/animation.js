import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';


export const imagesParallaxAnimation = (elements) => {
    elements.forEach((section, i) => {
      gsap.set(section, {
        yPercent: -40,
      });
  
      gsap.to(section, {
        scrollTrigger: {
          onUpdate: (self) => {
            gsap.set(section, {
              yPercent: self.progress * 40 - 40,
            });
          },
          trigger: section,
          start: Math.max(-400 + i * -100, -1000) + 'px top',
          end: '200% center',
          scrub: true,
        },
      });
    });
};