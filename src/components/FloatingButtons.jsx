import React, { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle, Mail, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    checkMobile()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const buttonSize = isMobile ? 20 : 24
  
  return (
    <div style={{ position: 'fixed', zIndex: 1000 }}>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/527461171449?text=Hola%20Francisco,%20me%20gustaría%20hablar%20contigo%20sobre%20un%20proyecto."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button floating-button"
        whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        style={{
          position: 'fixed',
          bottom: isMobile ? '1rem' : '2rem',
          right: isMobile ? '3.5rem' : '5rem',
          width: isMobile ? '48px' : '60px',
          height: isMobile ? '48px' : '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)',
          border: 'none',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}
      >
        <MessageCircle size={buttonSize} />
      </motion.a>

      {/* Email Button */}
      <motion.a
        href="mailto:tuz_fco@yahoo.com.mx?subject=Consulta%20sobre%20servicios&body=Hola%20Francisco,%20me%20gustaría%20obtener%20más%20información%20sobre%20tus%20servicios."
        className="email-button floating-button"
        whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        style={{
          position: 'fixed',
          bottom: isMobile ? '4rem' : '5.5rem',
          right: isMobile ? '1rem' : '2rem',
          width: isMobile ? '48px' : '60px',
          height: isMobile ? '48px' : '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
          color: 'white',
          textDecoration: 'none',
          boxShadow: '0 8px 25px rgba(0, 119, 255, 0.3)',
          border: 'none',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}
      >
        <Mail size={buttonSize} />
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="scroll-to-top floating-button"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              position: 'fixed',
              bottom: isMobile ? '1rem' : '2rem',
              right: isMobile ? '0.5rem' : '2rem',
              width: isMobile ? '48px' : '60px',
              height: isMobile ? '48px' : '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
              color: 'white',
              boxShadow: '0 8px 25px rgba(0, 119, 255, 0.3)',
              border: 'none',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}
          >
            <ArrowUp size={buttonSize} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FloatingButtons