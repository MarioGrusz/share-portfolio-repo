import { gsap } from "gsap";

export const projectCounterAnimation = (numberContainerRef, numberRightRowRef, liRefs) => {

    const numberContainer = numberContainerRef.current;
    const numberRightRow = numberRightRowRef.current;
    const numberRightRowElements = liRefs.current;

    const timeline = gsap.timeline({
        defaults: { duration: .3, ease: 'power2.out' },
        scrollTrigger: {
        //markers: true,
        trigger: numberContainer,
        start: 'top center', 
        once: true, 
        },
    });

    const elementHeight = liRefs.current[0].getBoundingClientRect().height;
    

    timeline
    .to(numberRightRowElements, { y: -elementHeight })
    .to(numberRightRowElements,
        {
          y: -elementHeight * numberRightRow.dataset.number,
          duration: 0.2, 
          ease: 'power2.out',
        },
        '-=0.1' 
    )
}