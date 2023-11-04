import { useRef, useEffect } from 'react';

const useSmoothScroll = (start, scrollContainer) => {

    console.log(start, 'start')
   const data = useRef({
       ease: 0.05,
       current: 0,
       previous: 0,
       rounded: 0
   });

   const smoothScroll = () => {
       data.current = window.scrollY;
       data.previous += (data.current - data.previous) * data.ease;
       data.rounded = Math.round(data.previous * 100) / 100;

       scrollContainer.current.style.transform = `translateY(-${data.rounded}px)`;

       requestAnimationFrame(smoothScroll);
   }

   useEffect(() => {
       if(!start) return;

       requestAnimationFrame(smoothScroll);
   }, [start]);
}

export default useSmoothScroll;
