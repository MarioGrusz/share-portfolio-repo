import './index.scss';
import { useEffect } from 'react';
import { projectsData } from '../../data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { imagesParallaxAnimation } from './animation';
import ProjectCounter from '../shared/ProjectCounter/ProjectCounter';
import ArrowSvg from '../shared/ArrowSvg/ArrovSvg';
import { Link } from 'react-router-dom';
import { useMainContext } from '../../context/MainContext';



const Projects = () => {

  const { setCursorType, setText } = useMainContext();

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      const elementsToAnimate = gsap.utils.toArray('.image-parallax');
      imagesParallaxAnimation(elementsToAnimate);
  
      ScrollTrigger.refresh();
  }, []);


  const handleMouseEnter = () => {
    setCursorType('click-me')
    setText('See Project')
  }

  const handleMouseLeave = () => {
    setCursorType('small')
    setText('')
  }

  const projects = projectsData.map((item, index) => (
  
    <article key={index} className='projects__container' data-scroll-section>
      <header className='projects__number-wrapper' style={{ gridColumn: item.grid, textAlign: item.align }} >
        <ProjectCounter dataNumber={index + 1} />
      </header>

      <section className="projects__details">
        <div className="text-wrapper">
          <h2>{item.title}</h2>
          <p className="description">{item.description}</p>
        </div>
      </section> 

      <figure className="projects__image">
        <div className="image-container">
          <div className="image-parallax">
              <img  src={item.image} alt={item.title}  />
          </div>
          <div className="projects__arrow-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link to={item.link} className="arrow">
                <ArrowSvg />
              </Link>
            </div>
        </div>
      </figure>
    </article>
  ));

  return (
    <>

    <section className="projects">
      {/* <Marquee duration={40}>
        <span>Selected Work</span>
        <span>Selected Work</span>
        <span>Selected Work</span>
        <span>Selected Work</span>
      </Marquee>  */}
      {projects}
    </section>

    </>
  )
};

export default Projects;