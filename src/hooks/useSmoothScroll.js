import { useRef, useEffect } from 'react';

const useSmoothScroll = (start, scrollContainer, pathname) => {


    console.log('SmoothScroll')

   const ease = useRef(0.05);
   const current = useRef(0);
   const previous = useRef(0);
   const rounded = useRef(0);

   console.log({ease, current, previous, rounded})

   const smoothScroll = () => {
       current.current = window.scrollY;
       previous.current += (current.current - previous.current) * ease.current;
       rounded.current = Math.round(previous.current * 100) / 100;

       scrollContainer.current.style.transform = `translateY(-${rounded.current}px)`;

       requestAnimationFrame(smoothScroll);
   }

   useEffect(() => {
       if(start && scrollContainer.current) {
           requestAnimationFrame(smoothScroll);
       }
   }, [start, scrollContainer.current, pathname]);


    // Reset all variables after every re-render or path change
    useEffect(() => {
    ease.current = 0.05;
    current.current = 0;
    previous.current = 0;
    rounded.current = 0;
    }, [pathname, scrollContainer.current]);
}

export default useSmoothScroll;

