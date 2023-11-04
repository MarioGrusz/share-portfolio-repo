import './index.scss';
import { useRef, useEffect, useContext, useState } from 'react';
import { gsap } from 'gsap';
import LocalTime from '../shared/LocalTime/LocalTime';
import { useMainContext } from '../../context/MainContext';
import { openMenuAnim, closeMenuAnim, handleSmoothScrollClick } from './animation';


//MENU https://www.phind.com/search?cache=a6i95tf70lfw3yrd6tt760lf

const Menu = (props) => {


  const { scrollRef } = props;
  const { overlayPathRef , aboutSectionRef, projectsSectionRef, contactSectionRef, setColor, setCursorType, setText, openMenu, setOpenMenu } = useMainContext();
  const menuRef = useRef(null);
  const timeline = useRef(gsap.timeline());
  const [hasOpenedMenu, setHasOpenedMenu] = useState(false)

  useEffect(() => {

    const context = gsap.context(() => {
  
      timeline.current = gsap.timeline({ paused: true });
      const tl = timeline.current;

      if (openMenu) {
        tl.add(openMenuAnim(overlayPathRef, menuRef));
        tl.play();

        setHasOpenedMenu(true);
        setColor('black');

      } else if (!openMenu && hasOpenedMenu) {
        tl.add(closeMenuAnim(overlayPathRef, menuRef));
        tl.play();
        
        setHasOpenedMenu(false);
        setColor('olive');
      }
    });
    //return () => context.revert();
  }, [openMenu])


  const handleMouseEnter = () => {
    setCursorType('click-me')
    setText('click me')
  }

  const handleMouseLeave = () => {
    setCursorType('small')
    setText('')
  }

  
  return (
    <> 
      <figure ref={menuRef} className='menu'>

        <div className='menu__container'>

          <ul className='menu__wrapper-links'>
              <li className='menu__item'>
                <a  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >About</a>
              </li>

              <li className='menu__item item3'>
                <a  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href='#'>Projects</a>
              </li>

              <li className='menu__item'>
                <a  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href='#'>Contact</a>
              </li>  
          </ul>

          <aside className='menu__wrapper-contact'>
            <p>Based in Madrid, Spain</p>
            <div className='timezone-wrapper'>
              <p>Local Time: </p>
                <LocalTime timeZone="Europe/Madrid" />
            </div>
            <p>Contact: mario.gruszczynski@gmail.com</p>
          </aside>
        </div>
      </figure>
    </>
  )
}

export default Menu