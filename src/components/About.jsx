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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
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
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(145deg, #f8f9fa 0%, #ffffff 50%, #f0f4f8 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(2rem, 5vw, 6rem) clamp(1rem, 3vw, 2rem)'
    }}>
      {/* Tech Pattern Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(0, 170, 255, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(0, 102, 204, 0.03) 0%, transparent 50%)
        `,
        opacity: 0.6,
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundImage: `
          linear-gradient(90deg, transparent 99%, rgba(0, 170, 255, 0.1) 100%),
          linear-gradient(0deg, transparent 99%, rgba(0, 170, 255, 0.1) 100%)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.3,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 10, 
        textAlign: 'center',
        width: '100%',
        maxWidth: isMobile ? '100vw' : '1200px',
        padding: isMobile ? '0 1rem' : '0 2rem',
        margin: '0 auto',
        overflow: 'hidden'
      }}>
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
              background: 'linear-gradient(145deg, rgba(0, 102, 204, 0.1), rgba(0, 153, 255, 0.05))',
              border: '1px solid rgba(0, 102, 204, 0.3)',
              borderRadius: '50px',
              padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
              color: '#0066cc',
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              fontWeight: '600',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 20px rgba(0, 102, 204, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '60%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)'
              }}
              animate={{
                left: ['-100%', '100%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <Sparkles size={isMobile ? 18 : 20} style={{ filter: 'drop-shadow(0 0 2px rgba(0, 170, 255, 0.5))' }} />
            <span style={{ position: 'relative', zIndex: 2 }}>SOBRE MÍ</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              fontWeight: '800',
              marginBottom: '2rem',
              color: '#1D1D1F',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Transformando ideas en{' '}
            <span style={{
              background: 'linear-gradient(90deg, #0055aa 0%, #0088ee 25%, #00aaff 50%, #0088ee 75%, #0055aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              position: 'relative',
              textShadow: '0 0 30px rgba(0, 170, 255, 0.3)'
            }}>
              soluciones digitales
              <span style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00aaff, transparent)',
                borderRadius: '2px'
              }} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.4rem)',
              color: '#6E6E73',
              maxWidth: '800px',
              margin: '0 auto 3rem auto',
              lineHeight: '1.6',
              padding: '0 clamp(1rem, 3vw, 2rem)'
            }}
          >
            Líder en el área de tecnología y desarrollo de software con 9+ años creando experiencias digitales excepcionales que impulsan el crecimiento empresarial
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem', 
              justifyContent: 'center', 
              alignItems: 'center',
              maxWidth: isMobile ? '320px' : '100%',
              margin: '0 auto'
            }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 119, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #0066cc, #0099ff)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                width: isMobile ? '100%' : 'auto',
                maxWidth: '300px',
                minHeight: '56px',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0, 102, 204, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '60%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                  transform: 'skewX(-20deg)'
                }}
                whileHover={{
                  left: '100%',
                  transition: { duration: 0.5 }
                }}
              />
              <ArrowRight size={20} style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))' }} />
              <span style={{ position: 'relative', zIndex: 2 }}>Trabajemos Juntos</span>
            </motion.a>
            
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'transparent',
                color: '#0071E3',
                textDecoration: 'none',
                borderRadius: '980px',
                fontWeight: '600',
                fontSize: '1rem',
                border: '1px solid #E5E5EA',
                transition: 'all 0.3s ease',
                width: isMobile ? '100%' : 'auto',
                maxWidth: '300px',
                minHeight: '56px'
              }}
            >
              Ver Proyectos
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Stats Grid - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isMobile ? '1rem' : '1.5rem',
            margin: '0 auto',
            maxWidth: isMobile ? '100%' : '1000px',
            width: '100%'
          }}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  background: index === 0 
                    ? 'rgba(255, 255, 255, 0.95)' 
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: isMobile ? '16px' : '24px',
                  padding: isMobile ? '1.5rem' : '2rem',
                  border: index === 0 
                    ? `2px solid ${highlight.color}40` 
                    : '1px solid #E5E5EA',
                  textAlign: 'center',
                  boxShadow: index === 0 
                    ? `0 10px 30px ${highlight.color}20` 
                    : '0 8px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  maxWidth: '100%',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, ${highlight.color}19, ${highlight.color}31)`,
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: highlight.color,
                  margin: '0 auto 1.5rem auto',
                  border: `3px solid ${highlight.color}31`
                }}>
                  {highlight.icon}
                </div>
                <h4 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2rem)',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  color: '#1D1D1F',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  {highlight.title}
                </h4>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  margin: 0,
                  lineHeight: '1.5',
                  color: '#6E6E73'
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
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: 'clamp(1.5rem, 4vw, 3rem)',
            border: '1px solid #E5E5EA',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)'
          }}
        >
          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            lineHeight: '1.7',
            color: '#3A3A3C',
            marginBottom: '2rem',
            textAlign: 'center',
            wordBreak: 'break-word',
            hyphens: 'auto'
          }}>
            Soy Francisco Javier Mateo Hernández, un líder en el área de tecnología y desarrollo de software especializado en crear 
            <span style={{ color: '#0071E3', fontWeight: '600' }}> soluciones tecnológicas robustas</span> que 
            transforman la manera en que las empresas operan y crecen.
          </p>
          
          <p style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            lineHeight: '1.6',
            color: '#6E6E73',
            marginBottom: '2rem',
            textAlign: 'center',
            wordBreak: 'break-word',
            hyphens: 'auto'
          }}>
            Con más de 9 años de experiencia, he trabajado en proyectos que van desde sistemas de gestión 
            empresarial hasta plataformas de e-commerce y APIs personalizadas. Mi enfoque se centra en 
            entender las necesidades reales del negocio para desarrollar soluciones que no solo funcionen 
            técnicamente, sino que generen valor real para la organización.
          </p>
          
          <p style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            lineHeight: '1.6',
            color: '#6E6E73',
            margin: 0,
            textAlign: 'center',
            wordBreak: 'break-word',
            hyphens: 'auto'
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
          style={{
            background: 'linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 50%, #F5F5F7 100%)',
            borderRadius: 'clamp(16px, 4vw, 32px)',
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid #E5E5EA',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)'
          }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: '#F5F5F7',
                border: '1px solid #E5E5EA',
                borderRadius: '50px',
                padding: '0.75rem 1.5rem',
                marginBottom: '2rem',
                color: '#0071E3',
                fontSize: '0.9rem',
                fontWeight: '600',
                fontFamily: 'Inter, monospace'
              }}>
                <Target size={20} />
                FILOSOFÍA DE TRABAJO
              </div>
              
              <h3 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: '600',
                color: '#1D1D1F',
                marginBottom: '1rem',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Mi filosofía de trabajo
              </h3>
              <p style={{
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                color: '#6E6E73',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Principios que guían cada proyecto y garantizan resultados excepcionales
              </p>
            </div>

            {/* Values Grid - Responsive */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  style={{
                    background: index === 1 
                      ? 'rgba(255, 255, 255, 0.95)' 
                      : 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    border: index === 1 
                      ? '2px solid rgba(0, 113, 227, 0.25)' 
                      : '1px solid #E5E5EA',
                    boxShadow: index === 1 
                      ? 'rgba(0, 113, 227, 0.15) 0px 10px 20px' 
                      : '0 8px 20px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, rgba(0, 113, 227, 0.19), rgba(0, 113, 227, 0.31))',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0071E3',
                      flexShrink: 0,
                      border: '2px solid rgba(0, 113, 227, 0.31)'
                    }}>
                      {value.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        color: '#1D1D1F',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                      }}>
                        {value.title}
                      </h4>
                      <p style={{
                        lineHeight: '1.6',
                        margin: 0,
                        fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                        color: '#3A3A3C'
                      }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About