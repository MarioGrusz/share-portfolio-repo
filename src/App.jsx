import { useRef, useEffect, useState } from 'react';
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
import useSmoothScroll from './hooks/useSmoothScroll';
import setBodyHeight from './utils/setBodyHeight';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header/Header';



function App() {

  const [loaderFinished, setLoaderFinished] = useState(false)
  const [timeline, setTimeline] = useState(null);
  const scrollContainer = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [ScrollTrigger.getAll()]);



  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoaderFinished(true);
          console.log('loader off')
        },
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  useSmoothScroll(loaderFinished, scrollContainer, pathname);
   
    

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  

  useEffect(() => {
    if (scrollContainer.current){
      const resizeObserver = new ResizeObserver(() => {
        setBodyHeight(scrollContainer);
      });
      resizeObserver.observe(scrollContainer.current);
      return () => resizeObserver.disconnect(); // clean up 
    }
  }, [loaderFinished, pathname, scrollContainer]);




  return (
    
    <MainContextProvider>
    <SvgOverlay />
    <MainLayout>
      <Header/>
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
        <Loader timeline={timeline} />
      )}
    </MainLayout>
  </MainContextProvider>
  );

}
 


export default App
