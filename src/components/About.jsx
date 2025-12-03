import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Zap, 
  Award, 
  Users, 
  Target, 
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code size={28} />,
      title: "9+ Años",
      description: "Experiencia en desarrollo",
      color: "#0077FF"
    },
    {
      icon: <Database size={28} />,
      title: "50+ Proyectos",
      description: "Desarrollados exitosamente",
      color: "#2BBEF8"
    },
    {
      icon: <Users size={28} />,
      title: "100% Satisfacción",
      description: "Clientes satisfechos",
      color: "#0077FF"
    },
    {
      icon: <Award size={28} />,
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
      padding: '8rem 0',
      background: 'var(--background-dark)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(43, 190, 248, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0, 119, 255, 0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(43, 190, 248, 0.1)',
            border: '1px solid rgba(43, 190, 248, 0.2)',
            borderRadius: '50px',
            padding: '0.75rem 1.5rem',
            marginBottom: '2rem',
            color: 'var(--accent-cyan)',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: 'var(--font-mono)'
          }}>
            <Users size={20} />
            SOBRE MÍ
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)'
          }}>
            Transformando ideas en{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              soluciones digitales
            </span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(2, 1fr)' : '1fr',
          gap: '4rem',
          alignItems: 'start',
          marginBottom: '6rem'
        }}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{ marginBottom: '3rem' }}>
              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}>
                Soy Francisco Javier Mateo Hernández, un desarrollador Full-Stack especializado en crear 
                <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}> soluciones tecnológicas robustas</span> que 
                transforman la manera en que las empresas operan y crecen.
              </p>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}>
                Con más de 9 años de experiencia, he trabajado en proyectos que van desde sistemas de gestión 
                empresarial hasta plataformas de e-commerce y APIs personalizadas. Mi enfoque se centra en 
                entender las necesidades reales del negocio para desarrollar soluciones que no solo funcionen 
                técnicamente, sino que generen valor real.
              </p>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}>
                He participado como <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>ponente en eventos tecnológicos</span>, 
                incluyendo conferencias sobre Inteligencia Artificial en CBTIS Poza Rica y como jurado en competencias de 
                CONALEP. También he sido expositor en el Foro Industrial Energético Portuario y he participado 
                en eventos de CANACINTRA y Expo León, Guanajuato.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: 'var(--gradient-primary)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '1.1rem',
                boxShadow: '0 10px 30px rgba(0, 119, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowRight size={20} />
              Trabajemos Juntos
            </motion.a>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {highlights.map((highlight, index) => (
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
                    padding: '2rem 1.5rem',
                    border: '1px solid var(--border-subtle)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: `${highlight.color}15`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: highlight.color,
                    margin: '0 auto 1.5rem auto'
                  }}>
                    {highlight.icon}
                  </div>
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    {highlight.title}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    margin: 0
                  }}>
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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