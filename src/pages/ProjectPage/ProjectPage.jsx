import './index.scss';
import { Link } from 'react-router-dom';
import ButtonCircle from '../../components/shared/ButtonCircle/ButtonCircle';
import { useMainContext } from '../../context/MainContext';
import { useEffect, useRef, useState } from 'react';
import { parallax, imageRevealOnScroll } from './animations'
import gsap from 'gsap';




const ProjectPage = ({ data }) => {

    const { setCursorType, setText } = useMainContext();
    const elementRefs = useRef([]);
    const revealContainerRefs = useRef([])
    const [scrollPosition, setScrollPosition] = useState(0);
    const timeline = useRef(gsap.timeline());


    useEffect(() => {

        //imageRevealOnScroll(revealContainerRefs)


        const context = gsap.context(() => {
      
          timeline.current = gsap.timeline();
          const tl = timeline.current;

          tl.add(imageRevealOnScroll(revealContainerRefs))
    
       
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

    const handleReload = () => {
        setTimeout(() => {
          window.location.reload();
        }, 500); // Adjust the delay as needed
    };

    //https://www.phind.com/search?cache=jqrmnx1di1ltbrvu9uzfcle8



    useEffect(() => {
        if(elementRefs){
            window.addEventListener('scroll', parallax(elementRefs, scrollPosition));
     
            return () => {
            window.removeEventListener('scroll', parallax(elementRefs, scrollPosition));
            };
        }
    }, [scrollPosition, elementRefs]);


    return (

        <main className='project'>

            <section className='project__header'>

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
                        <div ref={(el) => elementRefs.current[0] = el} className='project__link-wrapper scroll' data-rate="-0.1" data-direction="vertical">
                            <ButtonCircle backgroundColor="#879f87" color='black' text='LIVE PROJECT' />
                        </div>
                        <img src={data.mainImage} alt='laptop-mockup' />
                    </div>

                </div>

            </section>


            <section className='project__overview'>

                <div className='project__space-element'></div>
            

                <div className='project__text-wrapper'>

                    <h2 className='project__text-headline' data-scroll data-scroll-speed='2'>
                        <b>/00</b>Overview
                    </h2>


                    <p className='project__text-description' data-scroll data-scroll-speed='1'>
                        {data.overview}
                    </p>

                </div>

                <div className='project__space-element'></div>
            </section>



            {/* <section ref={(el) => revealContainerRefs.current[0] = el}  className='project__image-container'>
                <div className='reveal'>                  
                    <img src={data.stickyImage} alt='laptopMockup' />
                </div
            </section> */}

            <main className='project-outer'>
                <div ref={(el) => revealContainerRefs.current[0] = el}  className='project-single'>
                    <div className='project-single-image-wrapper'>
                        <img className='image' src={data.stickyImage} alt='laptopMockup'/>
                    </div>
                </div>
            </main>



            <section className='project__text-wrapper'>

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
                        <li key={index} dangerouslySetInnerHTML={{ __html: item }} /> // The dangerouslySetInnerHTML prop is used to render the HTML tags within each item. (instead of innerHTML)
                        ))}
                    </ol>

                </div>

            </section>

            <section className='project__text-wrapper'>

                <p className='project__text-headline'>
                    <b>/03</b>Tech Stack
                </p>


                <p className='project__text-description'>
                    {data.architecture}
                </p>

            </section>



            <section className='project__mobile-mockups' id='image-mobile'   >


                <div className='project__image-wrapper-left'  >
                    <img data-scroll-target='#image-mobile' data-scroll='true' data-scroll-sticky='true' src={data.secondMobileMockup} alt='mobileMockup'/>
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
                {/* <ProjectsMenu />    */}
            </section> 


            <section className='project__footer'>
                <p>Go to</p>
                <Link to='/' className='social-media-link' data-txt='Home Page'>
                    <span>Home Page</span>
                </Link>
            </section>

            <section className='project-helper'></section>
        </main>
    )
}

export default ProjectPage;