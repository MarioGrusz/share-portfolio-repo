import "./index.scss";
import React, { useEffect, useRef } from "react";
import { progressAnimation } from "./animation";
import { introSvgAnimation } from "../SvgOverlay/animation";
import { useMainContext } from "../../../context/MainContext";


import { mainIntroAnimation } from "./animation";




const Loader = ({ timeline }) => {

  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const progressTextRef = useRef(null);

  const { overlayPathRef  } = useMainContext();

  console.log('LOADER')


  useEffect(() => {
    if (timeline) {
    timeline
        .add(mainIntroAnimation(progressRef, progressNumberRef, progressTextRef, overlayPathRef))     
    }
   }, [timeline]);   
   
   


  return (
      
    <div className='loader'>
      <div className='loader__progress-wrapper'>
        <div className='loader__progress' ref={progressRef}></div>
        <span className='loader__progress-number' ref={progressNumberRef}>
          0%
        </span>
      </div>
      <div className='loader__text' ref={progressTextRef}>Hello</div>
    </div>
  );
}

export default Loader