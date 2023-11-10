import "./index.scss";
import { useEffect, useRef } from "react";
import { projectCounterAnimation } from "./animation";


const ProjectCounter = ({ dataNumber }) => {


    const numberContainerRef = useRef(null);
    const numberRightRowRef = useRef(null);
    const liRefs = useRef([]);

    useEffect(() => {

       projectCounterAnimation(numberContainerRef, numberRightRowRef, liRefs);

       const handleResize = () => {
        projectCounterAnimation(numberContainerRef, numberRightRowRef, liRefs); 
       };

       window.addEventListener('resize', handleResize);
       return () => {
         window.removeEventListener('resize', handleResize);
       };

    }, []);



  return (
    
    <section className="project-counter">
        <div ref={numberContainerRef} className="project-counter__number-row">
            <div className="project-counter__number-outer">
                <div className="project-counter__number-box" >
                    <div className="project-counter__number">
                        <ul className="project-counter__first-list">
                            <li>0</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                        <ul ref={numberRightRowRef} className="project-counter__second-list" data-number={dataNumber}>
                            <li ref={(el) => liRefs.current[0] = el}>0</li>
                            <li ref={(el) => liRefs.current[1] = el}>1</li>
                            <li ref={(el) => liRefs.current[2] = el}>2</li>
                            <li ref={(el) => liRefs.current[3] = el}>3</li>
                        </ul>
                    </div>
                    <div className="project-counter__dot">.</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectCounter