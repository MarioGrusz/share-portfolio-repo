import { useState, useEffect, useRef } from 'react'
import './index.scss'

//https://www.phind.com/search?cache=meflfl3wyptho89bt0ahjikj

const ProgressBar = () => {
 const [progress, setProgress] = useState(0);
 const scrollBarProgressRef = useRef(null);

 const calculateScrollProgress = () => {
   const windowHeight = window.innerHeight;
   const documentFullHeight = document.body.clientHeight;
   const scrolled = window.scrollY;
   return (scrolled / (documentFullHeight - windowHeight)) * 100;
 };

 const updateProgressIndicator = () => {
   const percentageScrolled = calculateScrollProgress();
   setProgress(percentageScrolled);
 };

 useEffect(() => {
   const scrollProgressBar = scrollBarProgressRef.current;
   if (scrollProgressBar) {
     scrollProgressBar.style.transform = `scaleX(${progress})`;
   }
 }, [progress]);

 useEffect(() => {
   updateProgressIndicator();
   window.addEventListener("scroll", updateProgressIndicator);
   return () => {
     window.removeEventListener("scroll", updateProgressIndicator);
   };
 }, []);

 return (
   <div ref={scrollBarProgressRef} className="progress"></div>
 );
};

export default ProgressBar;


