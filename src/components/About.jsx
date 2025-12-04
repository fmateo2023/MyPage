import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Award, 
  Users, 
  Target, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const About = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 20 + 10
        })
      }
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  const highlights = [
    {
      icon: <Code size={32} />,
      title: "9+ Años",
      description: "Experiencia en desarrollo",
      color: "#0077FF"
    },
    {
      icon: <Database size={32} />,
      title: "50+ Proyectos",
      description: "Desarrollados exitosamente",
      color: "#2BBEF8"
    },
    {
      icon: <Users size={32} />,
      title: "100% Satisfacción",
      description: "Clientes satisfechos",
      color: "#0077FF"
    },
    {
      icon: <Award size={32} />,
      title: "Ponente & Jurado",
      description: "En eventos tecnológicos",
      color: "#2BBEF8"
    }
  ]

  const values = [
    {
      icon: <Target size={20} />,
      title: "Orientado a Resultados",
      description: "Cada línea de código tiene un propósito claro: generar valor para tu negocio"
    },
    {
      icon: <Lightbulb size={20} />,
      title: "Innovación Constante",
      description: "Siempre explorando nuevas tecnologías para ofrecer las mejores soluciones"
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Calidad Garantizada",
      description: "Código limpio, documentado y con pruebas que aseguran la estabilidad"
    },
    {
      icon: <Users size={20} />,
      title: "Colaboración Transparente",
      description: "Comunicación clara y constante en cada etapa del desarrollo"
    }
  ]

  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0A1A2F 0%, #1a2332 50%, #0A1A2F 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '6rem 0'
    }}>
      {/* Geometric Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(45deg, transparent 40%, rgba(0, 119, 255, 0.03) 50%, transparent 60%),
          linear-gradient(-45deg, transparent 40%, rgba(43, 190, 248, 0.03) 50%, transparent 60%),
          radial-gradient(circle at 25% 25%, rgba(0, 119, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(43, 190, 248, 0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'rgba(43, 190, 248, 0.6)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(43, 190, 248, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(43, 190, 248, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.3,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '5rem' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(43, 190, 248, 0.15)',
              border: '1px solid rgba(43, 190, 248, 0.3)',
              borderRadius: '50px',
              padding: '1rem 2rem',
              marginBottom: '3rem',
              color: '#2BBEF8',
              fontSize: '1rem',
              fontWeight: '600',
              fontFamily: 'var(--font-mono)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Sparkles size={24} />
            SOBRE MÍ
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '800',
              marginBottom: '2rem',
              color: 'white',
              fontFamily: 'var(--font-primary)',
              lineHeight: '1.1'
            }}
          >
            Transformando ideas en{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0077FF, #2BBEF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              soluciones digitales
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              margin: '0 auto 3rem auto',
              lineHeight: '1.6'
            }}
          >
            Líder en el área de tecnología y desarrollo de software con 9+ años creando experiencias digitales excepcionales
            que impulsan el crecimiento empresarial
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 119, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 2.5rem',
                background: 'linear-gradient(135deg, #0077FF, #2BBEF8)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '15px',
                fontWeight: '600',
                fontSize: '1.1rem',
                boxShadow: '0 15px 35px rgba(0, 119, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowRight size={20} />
              Trabajemos Juntos
            </motion.a>
            
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 2.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '15px',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              Ver Proyectos
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ marginBottom: '6rem' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + (0.1 * index) }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(0, 119, 255, 0.2)'
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '2rem',
                  padding: '2.5rem 2rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${highlight.color}20, ${highlight.color}40)`,
                    borderRadius: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: highlight.color,
                    margin: '0 auto 2rem auto',
                    border: `2px solid ${highlight.color}30`
                  }}
                >
                  {highlight.icon}
                </motion.div>
                <h4 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-primary)'
                }}>
                  {highlight.title}
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: 0,
                  lineHeight: '1.5'
                }}>
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          style={{
            maxWidth: '900px',
            margin: '0 auto 6rem auto',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '2rem',
            padding: '3rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <p style={{
            fontSize: '1.3rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Soy Francisco Javier Mateo Hernández, un líder en el área de tecnología y desarrollo de software especializado en crear 
            <span style={{ color: '#2BBEF8', fontWeight: '600' }}> soluciones tecnológicas robustas</span> que 
            transforman la manera en que las empresas operan y crecen.
          </p>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Con más de 9 años de experiencia, he trabajado en proyectos que van desde sistemas de gestión 
            empresarial hasta plataformas de e-commerce y APIs personalizadas. Mi enfoque se centra en 
            entender las necesidades reales del negocio para desarrollar soluciones que no solo funcionen 
            técnicamente, sino que generen valor real para la organización.
          </p>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: 0,
            textAlign: 'center'
          }}>
            He participado como <span style={{ color: '#2BBEF8', fontWeight: '600' }}>ponente y evaluador técnico</span> en 
            prestigiosas instituciones educativas y eventos de la industria tecnológica. Mi experiencia incluye 
            conferencias sobre Inteligencia Artificial, participación como jurado en competencias de desarrollo, 
            y exposiciones en foros industriales especializados en transformación digital y automatización empresarial.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              fontFamily: 'var(--font-primary)'
            }}>
              Mi filosofía de trabajo
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Principios que guían cada proyecto y garantizan resultados excepcionales
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                style={{
                  background: 'var(--background-card)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(43, 190, 248, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0
                  }}>
                    {value.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem'
                    }}>
                      {value.title}
                    </h4>
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About