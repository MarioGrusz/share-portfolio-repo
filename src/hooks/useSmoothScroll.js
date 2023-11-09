import { useRef, useEffect } from 'react';

const useSmoothScroll = (start, scrollContainer, pathname) => {

   const ease = useRef(0.05);
   const current = useRef(0);
   const previous = useRef(0);
   const rounded = useRef(0);

   const smoothScroll = () => {
       current.current = window.scrollY;
       previous.current += (current.current - previous.current) * ease.current;
       rounded.current = Math.round(previous.current * 100) / 100;

       scrollContainer.current ? scrollContainer.current.style.transform = `translateY(-${rounded.current}px)`: ''

       requestAnimationFrame(smoothScroll);
   }

   useEffect(() => {
       if(start && scrollContainer.current) {
           requestAnimationFrame(smoothScroll);
       }
   }, [start, scrollContainer.current, pathname]);
}

export default useSmoothScroll;

