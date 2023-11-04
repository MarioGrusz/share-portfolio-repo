import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';


const PageNotFound = () => {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0; 
  let direction = -1;

  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000);
  }, [])


  useEffect(() =>{
    requestAnimationFrame(textAnimation)
  }, [])

  const textAnimation = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent});
    gsap.set(secondText.current, {xPercent: xPercent});
    requestAnimationFrame(textAnimation);
    xPercent += 0.1 * direction;
  }



  return (
    <div className='not-found'>
      <h1>Oops!</h1>

      <div className='not-found__slider-container'>
        <div ref={slider} className='not-found__slider'>
          <p ref={firstText}>404 <span>.</span>  404 <span>.</span> 404 <span>.</span></p>
          <p ref={secondText}>404 <span>.</span> 404 <span>.</span> 404 <span>.</span></p>
        </div>
      </div>

      <h1>Page Not Found!</h1>
    </div>
  )
}

export default PageNotFound