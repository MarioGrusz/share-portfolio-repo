import { useRef, useEffect, useState } from 'react';
import useWindowSize from './hooks/useWindowSize';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainContextProvider } from './context/MainContext';


import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import Menu from './components/Menu/Menu';
import Loader from './components/shared/Loader/Loader';
import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import SvgOverlay from './components/shared/SvgOverlay/SvgOverlay';

import { personalProjectsData } from './data';
import ProjectPage from './pages/ProjectPage/ProjectPage';


//Custom Hook https://www.phind.com/search?cache=se7emk4runuxhk9fenma7o41

function App() {

  const [loaderFinished, setLoaderFinished] = useState(false)
  const [timeline, setTimeline] = useState(null);
  const size = useWindowSize();
  const scrollContainer = useRef();



  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoaderFinished(true);
          console.log('animation true')
        },
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

 

  const data = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

 

  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, [loaderFinished]);
  

  // useEffect(() => {

  //   setTimeout(() => {

  //     if(scrollContainer.current) {
  //       setBodyHeight()
  //     }

  //   }, 0)

    

  // },[size.height, loaderFinished, pathname])


  useEffect(() => {
    if (scrollContainer.current){
      const resizeObserver = new ResizeObserver(() => {
        setBodyHeight();
      });
      resizeObserver.observe(scrollContainer.current);
      return () => resizeObserver.disconnect(); // clean up 
    }
  }, [loaderFinished, pathname, scrollContainer]);
   
   


  //SOLUTIOM https://www.phind.com/search?cache=ta26mzjfragvr0eonxw8jceu


  
  const setBodyHeight = () => {
    if (scrollContainer.current) {
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (pageContainerRef.current) {
  //       const innerHeight = pageContainerRef.current.getBoundingClientRect().height;
  //       console.log(innerHeight);
  //     }
  //   }, 0);
  //  }, []);
   
   

  const smoothScroll = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    if(scrollContainer.current){
      scrollContainer.current.style.transform = `translateY(-${data.rounded}px)`;

      requestAnimationFrame(() => smoothScroll());
    } 
  }


  return (
    
    <MainContextProvider>
    <SvgOverlay />
    <MainLayout>
      <Menu />
      {loaderFinished ? (
        <section ref={scrollContainer} className='scroll'>
          <Routes>

            {/* public routes */}
            <Route path="/" element={<HomePage/>} />
            {/* <Route path="/project" element={<ProjectPage />} /> */}

            {personalProjectsData.map((project, index) => (
              <Route
                key={index}
                path={project.link}
                element={<ProjectPage data={project} />}
                
              />
            ))}

            {/* page not found */}
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </section>
      ) : (
        <Loader />
      )}
    </MainLayout>
  </MainContextProvider>
  );

}
 


export default App
