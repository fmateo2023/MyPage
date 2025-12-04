import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useScrollProgress } from '../hooks/useScrollProgress'
import clsx from 'clsx'
import styles from '../styles/AnimatedNavbar.module.css'

/**
 * Navbar animado con efectos de scroll
 * Implementa principios de Material Design y Apple HIG
 * Optimizado para touch devices con gestos intuitivos
 */
const AnimatedNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollProgress } = useScrollProgress()

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#hero', isPage: false },
    { name: 'Servicios', href: '#services', isPage: false },
    { name: 'Proyectos', href: '#projects', isPage: true },
    { name: 'Experiencia', href: '#experience', isPage: true },
    { name: 'Blog', href: '#blog', isPage: true },
    { name: 'Contacto', href: '#contact', isPage: false }
  ]

  const handleNavClick = (href, isPage = false) => {
    setIsMenuOpen(false)
    
    if (isPage) {
      window.location.hash = href.replace('#', '')
      // Scroll to top when navigating to a new page
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    } else {
      // If we're not on home page, go to home first
      if (window.location.hash && window.location.hash !== '#hero') {
        window.location.hash = ''
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          setTimeout(() => {
            document.querySelector(href)?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }, 300)
        }, 100)
      } else {
        document.querySelector(href)?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  // Navbar animation variants
  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  // Menu items stagger animation
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      {/* Main Navbar */}
      <motion.nav
        className={clsx(styles.navbar, {
          [styles.scrolled]: isScrolled
        })}
        variants={navbarVariants}
        initial="initial"
        animate="animate"
      >
        <div className={styles.container}>
          {/* Logo */}
          <motion.a
            href="#hero"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            FM.
          </motion.a>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href, item.isPage)
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1 + 0.3,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.a
              href="https://wa.me/5217461171449?text=Hola%20Francisco,%20quiero%20platicar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <HiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              className={styles.mobileMenu}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={styles.mobileNavLink}
                  variants={menuItemVariants}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href, item.isPage)
                  }}
                  whileHover={{ x: 8 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.a
                href="https://wa.me/5217461171449?text=Hola%20Francisco,%20quiero%20platicar%20sobre%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileCta}
                variants={menuItemVariants}
                onClick={() => setIsMenuOpen(false)}
              >
                Contactar por WhatsApp
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default AnimatedNavbar