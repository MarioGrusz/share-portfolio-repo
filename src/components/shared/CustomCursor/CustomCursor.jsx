import { useContext, useEffect, useRef } from "react";
import { useMainContext } from "../../../context/MainContext";
import "./index.scss";


const CustomCursor = () => {

  const { color, cursorType, text } = useMainContext() 
  const cursor = useRef(null)
  
  useEffect(() => {

    const onMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      cursor.current.style.left = mouseX + 'px';
      cursor.current.style.top = mouseY + 'px';

    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursor} className={`cursor ${color} ${cursorType}`}>
        {cursorType === 'click-me' && <div className="cursor__inner-text">{text}</div>}
      </div>
      

    </>
  );
};

export default CustomCursor;