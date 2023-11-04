import { useRef, useEffect } from 'react';
import useWindowSize from './hooks/useWindowSize';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainContextProvider } from './context/MainContext';



import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import MainLayout from './Layout/MainLayout';



function App() {

  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();

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
  }, []);

  useEffect(() => {
    setBodyHeight()
  },[size.height])

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  const smoothScroll = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollContainer.current.style.transform = `translateY(-${data.rounded}px)`;

    requestAnimationFrame(() => smoothScroll());
  }


  return (
    
    <MainContextProvider>
      <MainLayout>

        <section ref={scrollContainer} className='scroll'>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/project" element={<ProjectPage />} />
          </Routes>
        </section>

      </MainLayout>
    </MainContextProvider>
  );


  //LAYOUT https://www.phind.com/search?cache=dskr9sl68pqmku84mu5dbodc

  // return (
  //   <>
  //   <Header />
  //   <main ref={app} className="app">
  //     <section ref={scrollContainer} className='scroll'>
  //       <Routes>
  //         <Route path="/" element={<HomePage/>} />
  //         <Route path="/project" element={<ProjectPage />} />
  //       </Routes>
  //     </section>
  //   </main>
  //   </>
  // )
}
 


export default App
