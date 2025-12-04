import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiSparkles, HiCode } from 'react-icons/hi'
import { useViewportAnimation } from '../hooks/useViewportAnimation'
import styles from '../styles/ParallaxHero.module.css'

/**
 * Hero section with parallax effects and animated particles
 * Implements Apple-style gradient animations and micro-interactions
 * Optimized for mobile performance with reduced motion support
 */
const ParallaxHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const { ref, isVisible } = useViewportAnimation({ threshold: 0.3 })

  // Track mouse position for parallax effect (desktop only)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return // Skip on mobile
      
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    handleResize() // Initial call

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const stats = [
    { number: '9+', label: 'Años experiencia', icon: '🚀' },
    { number: '50+', label: 'Proyectos completados', icon: '💼' },
    { number: '98%', label: 'Satisfacción cliente', icon: '⭐' },
    { number: '<24h', label: 'Tiempo respuesta', icon: '⚡' }
  ]

  return (
    <section ref={ref} className={styles.hero} id="hero">
      {/* Animated Background */}
      <div className={styles.background}>
        <motion.div
          className={styles.gradientOrb1}
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className={styles.gradientOrb2}
          animate={{
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.mainContent}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Status Badge */}
            <motion.div className={styles.statusBadge} variants={itemVariants} style={{ marginTop: '1rem' }}>
              <div className={styles.statusDot} style={{ background: '#22C55E', boxShadow: '0 0 10px #22C55E, 0 0 20px rgba(34, 197, 94, 0.3)' }} />
              <span style={{ color: '#6B7280' }}>Disponible para proyectos</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 className={styles.heading} variants={itemVariants}>
              Transformo ideas en{' '}
              <span className={styles.gradientText}>
                soluciones digitales
              </span>{' '}
              excepcionales
            </motion.h1>

            {/* Subtitle */}
            <motion.p className={styles.subtitle} variants={itemVariants}>
              Líder en el área de tecnología y desarrollo de software con <strong>9+ años de experiencia</strong> creando 
              aplicaciones web modernas que impulsan el crecimiento empresarial.
            </motion.p>

            {/* Key Benefits */}
            <motion.div className={styles.benefits} variants={itemVariants}>
              {['🚀 Entrega rápida', '💡 Soluciones innovadoras', '📈 ROI comprobado'].map((benefit, index) => (
                <div key={index} className={styles.benefitTag}>
                  {benefit}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className={styles.ctaButtons} variants={itemVariants}>
              <motion.a
                href="#services"
                className={styles.primaryButton}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <HiSparkles />
                Ver mis servicios
                <HiArrowRight className={styles.arrowIcon} />
              </motion.a>

              <motion.a
                href="#projects"
                className={styles.secondaryButton}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <HiCode />
                Ver proyectos
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            className={styles.profileSection}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className={styles.profileCard}
              variants={floatingVariants}
              animate="animate"
            >
              <div className={styles.profileImage}>
                <img
                  src="https://raw.githubusercontent.com/fmateo2023/MyPage/refs/heads/main/assets/perfil.jpg"
                  alt="Francisco Javier Mateo"
                  loading="lazy"
                />
                <div className={styles.statusIndicator} />
              </div>

              <div className={styles.profileInfo}>
                <h3>Francisco Mateo</h3>
                <p>Líder del área de TI</p>
                
                <div className={styles.profileStats}>
                  <div>
                    <span className={styles.statNumber}>9+</span>
                    <span className={styles.statLabel}>Años</span>
                  </div>
                  <div>
                    <span className={styles.statNumber}>50+</span>
                    <span className={styles.statLabel}>Proyectos</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Tech Icons */}
            {[
              { icon: '⚛️', position: { top: '10%', right: '-10%' } },
              { icon: '🚀', position: { bottom: '20%', left: '-10%' } },
              { icon: '💻', position: { top: '40%', right: '-15%' } },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.floatingIcon}
                style={item.position}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className={styles.statsSection}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span>Scroll para explorar</span>
        <motion.div
          className={styles.scrollMouse}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className={styles.scrollWheel} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ParallaxHero