import './index.scss';
import { Link } from 'react-router-dom';
import ButtonCircle from '../../components/shared/ButtonCircle/ButtonCircle';
import { useMainContext } from '../../context/MainContext';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { parallax, imageRevealOnScroll, colorChangeOnScroll, pinElementAnimation } from './animations'
import gsap from 'gsap';
import ProjectsMenu from '../../components/ProjectsMenu/ProjectsMenu';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ProjectPage = ({ data }) => {

    const { setCursorType, setText } = useMainContext();
    const elementRefs = useRef([]);
    const containerColorRef = useRef([])
    const scrollContainerColorRef = useRef(null)
    const revealContainerRefs = useRef([])
    const [scrollPosition, setScrollPosition] = useState(0);
    const timeline = useRef(gsap.timeline());


    const pinContainerRef = useRef()
    const pinElementRef = useRef()

    useEffect(() => {
        ScrollTrigger.refresh();
    }, [ScrollTrigger.getAll()]);

    useEffect(() => {

        if(pinContainerRef.current, pinElementRef.current){
            pinElementAnimation(pinContainerRef, pinElementRef)
        }

    }, [pinContainerRef.current, pinElementRef.current])


    useLayoutEffect(() => {
        const context = gsap.context(() => { 
          timeline.current = gsap.timeline();
          const tl = timeline.current;

          tl.add(imageRevealOnScroll(revealContainerRefs))
          tl.add(colorChangeOnScroll(containerColorRef, scrollContainerColorRef))
       
        });
        return () => context.revert();
    }, [])


    useEffect(() => {
        setCursorType('small')
        setText('')    
    }, [])


    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(elementRefs){
            window.addEventListener('scroll', parallax(elementRefs, scrollPosition));
     
            return () => {
            window.removeEventListener('scroll', parallax(elementRefs, scrollPosition));
            };
        }
    }, [scrollPosition, elementRefs]);


    return (

        <main ref={scrollContainerColorRef} className='project'>

            <section className='project__header'
                ref={(el) => containerColorRef.current[0] = el} 
                data-bgcolor="#e1dfd6"  //initial color
                data-textcolor="hsl(0, 0%, 9%)" //initial color
            >

                <div className='project__container flex-column'>

                    <div className='project__small-title'>
                        <h2>Design / Development</h2>
                    </div>
                    <div  className='project__bg-title'>
                        <h1>{data.title}</h1>
                    </div>

                </div>
                <div className='project__container'>

                    <div className='project__image-wrapper' >
                        <div ref={(el) => elementRefs.current[0] = el} className='project__link-wrapper scroll' 
                            data-rate="-0.1" 
                            data-direction="vertical"
                        >
                            <ButtonCircle backgroundColor="#879f87" color='black' text='LIVE PROJECT' />
                        </div>
                        <img src={data.mainImage} alt='laptop-mockup' />
                    </div>

                </div>

            </section>

            <section className='project__overview'>

                <div className='project__space-element'></div>
                <div className='project__text-wrapper'>

                    <h2 className='project__text-headline'>
                        <b>/00</b>Overview
                    </h2>


                    <p className='project__text-description'>
                        {data.overview}
                    </p>

                </div>
                <div className='project__space-element'></div>

            </section>

            <section className='project__image-outer'>

                <div className='line'></div>
                <div className='project__description'>
                    <h2>
                        <span>Everyday</span>
                        <br/>
                        <span>Coffee</span>
                        <br/>
                        <span>Routine</span>
                        <br/>
                    </h2>
                </div>
                <div ref={(el) => revealContainerRefs.current[0] = el} className='project__image-reveal-container'>
                    <div className='project__image-reveal-wrapper'>
                        <img className='image' src={data.stickyImage} alt='laptopMockup'/>
                    </div>
                </div>
                
            </section>

            <section className='project__text-wrapper'
                ref={(el) => containerColorRef.current[1] = el} 
                data-bgcolor="#bcb8ad" 
                data-textcolor="#032f35"
            >

                <p className='project__text-headline'>
                    <b>/01</b>Problem
                </p>
                <p className='project__text-description'>
                    {data.problem}
                </p>

            </section>

            <section className='project__text-wrapper'>

                <p className='project__text-headline'>
                    <b>/02</b>Solution
                </p>
                <div className='project__text-description'>
                    <p>
                        {data.solution}
                    </p>
                    <ol>
                        {data.solution_list.map((item, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} /> 
                        // The dangerouslySetInnerHTML prop is used to render the HTML tags within each item. (instead of innerHTML)
                        ))}
                    </ol>
                </div>

            </section>

            <section className='project__text-wrapper'
                ref={(el) => containerColorRef.current[2] = el} 
                data-bgcolor="#879f87"
            >

                <p className='project__text-headline'>
                    <b>/03</b>Tech Stack
                </p>
                <p className='project__text-description'>
                    {data.architecture}
                </p>

            </section>
            
            <section ref={pinContainerRef} className='project__mobile-mockups' id='image-mobile'>

                <div ref={pinElementRef} className='project__image-wrapper-left'  >
                    <img src={data.secondMobileMockup} alt='mobileMockup'/>
                </div>

                <div className='flex-column' >
                    <div className='project__image-wrapper-right'>
                        <img src={data.firstMobileMockup} alt='mobileMockup'/>
                    </div>

                    <div className='project__image-wrapper-right'>
                        <img src={data.firstMobileMockup} alt='mobileMockup'/>
                    </div>               
                    <ButtonCircle text='start a project'/>
                    
                </div>

            </section>

            <section className='project__menu-wrapper'>
                <ProjectsMenu />
            </section> 

            <section className='project__footer'
                ref={(el) => containerColorRef.current[3] = el} 
                data-bgcolor="#e1dfd6"  //initial color
                data-textcolor="hsl(0, 0%, 9%)" //initial color
            >
                <p>Go to</p>
                <Link to='/' className='social-media-link' data-txt='Home Page'>
                    <span>Home Page</span>
                </Link>
            </section>
        </main>
    )
}

export default ProjectPage;