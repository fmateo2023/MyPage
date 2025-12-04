import React from 'react'
import { motion } from 'framer-motion'
import AnimatedNavbar from '../components/AnimatedNavbar'
import About from '../components/About'
import Experience from '../components/Experience'
import Participations from '../components/Participations'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'var(--background-dark)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
        paddingTop: '80px'
      }}
    >
      <AnimatedNavbar />
      <About />
      <Experience />
      <Participations />
      <Skills />
      <Contact />
      <Footer />
      <FloatingButtons />
    </motion.div>
  )
}

export default ExperiencePage