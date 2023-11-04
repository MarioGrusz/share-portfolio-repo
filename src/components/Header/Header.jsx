import "./index.scss";
import { useEffect, useRef } from "react";
import { revealHeader } from "./animation";
import { gsap } from "gsap";
import ProgressBar from "../shared/ProgressBar/ProgressBar";
import { useMainContext } from "../../context/MainContext";


const Header = () => {

  const timeline = useRef(gsap.timeline());
  const headerRef = useRef(null);
  const { setCursorType, openMenu, setOpenMenu } = useMainContext();

  const handleMouseEnter = () => {
    setCursorType('medium')
  }

  const handleMouseLeave = () => {
    setCursorType('small')
  }

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(revealHeader(headerRef), '+=1');
    });
    return () => context.revert();
  }, []);



  const toggleMenuBtn = () => {
    setOpenMenu(!openMenu)
  }


  return (
      
    <header ref={headerRef} className="header" data-hidden>
      <h1>
          <span>Mariusz Gruszczynski</span>
          <div style={{ width:'7.8%'}}>
            <ProgressBar />   
          </div>
          
      </h1>
      
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMenuBtn} data-hover="click to open" className="header__hamburger" >
          <span className="header__hamburger-box">
              <span className={`line line--1 ${openMenu ? 'is-active' : ''}`}></span>
              <span className={`line line--2 ${openMenu ? 'is-active' : ''}`}></span>
          </span>
      </button>
    </header>


  )

}

export default Header;