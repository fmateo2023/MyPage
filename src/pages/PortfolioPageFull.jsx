import React from 'react'
import { motion } from 'framer-motion'
import AnimatedNavbar from '../components/AnimatedNavbar'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'

const PortfolioPageFull = () => {
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
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </motion.div>
  )
}

export default PortfolioPageFull