import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import AboutMe from '../components/AboutMe/AboutMe'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'

const HomePage = () => {

    
  return (
    <>
      <Hero />
      <AboutMe/>
      <Projects />
      <Footer />
  
      <button>
        <Link to='/project'>Go to projects</Link>
      </button>
    </>
  )
}

export default HomePage
