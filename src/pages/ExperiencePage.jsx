import React from 'react'
import { motion } from 'framer-motion'
import Experience from '../components/Experience'

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ paddingTop: '6rem' }}>
        <Experience />
      </div>
    </motion.div>
  )
}

export default ExperiencePage