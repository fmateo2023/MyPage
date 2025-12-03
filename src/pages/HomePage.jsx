import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Experience from '../components/Experience'
import Participations from '../components/Participations'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Participations />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomePage