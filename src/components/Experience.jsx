import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  Briefcase, 
  Code,
  Building,
  Star,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Experiencia laboral profesional
  const workExperience = [
    {
      icon: <Users size={24} />,
      title: "Líder de Proyecto",
      company: "Iké Asistencia",
      location: "Ciudad de México, México",
      period: "Nov 2024 - Presente",
      description: "Dirijo proyectos estratégicos en el sector médico y de asistencia, gestionando equipos multidisciplinarios y liderando plataformas que integran IA para mejorar la atención y operación.",
      type: "Tiempo Completo",
      color: "#0077FF",
      technologies: ["IA", "Gestión de Proyectos", "Liderazgo", "Sector Médico"]
    },
    {
      icon: <Code size={24} />,
      title: "Consultor de Desarrollo de Software",
      company: "Freelancer",
      location: "Poza Rica, Veracruz",
      period: "Feb 2024 - Presente",
      description: "Consultoría especializada en desarrollo de soluciones digitales, transformación digital y arquitectura de software para empresas de diversos sectores.",
      type: "Freelance",
      color: "#2BBEF8",
      technologies: ["Consultoría", "Arquitectura", "Transformación Digital", "Full-Stack"]
    },
    {
      icon: <Briefcase size={24} />,
      title: "Líder Desarrollo Web y Móvil",
      company: "Pueblo Bonito",
      location: "Mazatlán, Sinaloa",
      period: "Nov 2021 - Feb 2024",
      description: "Lideré equipo multidisciplinario en desarrollo de apps nativas, APIs y plataformas web. Exitoso lanzamiento de renovación de App Pueblo Bonito con detección automática de contratos, reservas multi-instalaciones y Suite Service.",
      type: "Tiempo Completo",
      color: "#0077FF",
      technologies: ["React Native", "iOS", "Android", "APIs", "Pasarelas de Pago", "Push Notifications"]
    },
    {
      icon: <Award size={24} />,
      title: "Desarrollador de Aplicaciones Sr. & Scrum Master",
      company: "Iké Asistencia",
      location: "Ciudad de México",
      period: "Oct 2017 - Nov 2021",
      description: "Desarrollo de aplicaciones móviles nativas Android/iOS, APIs, chatbots con IA e integraciones corporativas. Como Scrum Master, lideré equipos implementando metodologías ágiles.",
      type: "Tiempo Completo",
      color: "#2BBEF8",
      technologies: ["Android", "iOS", "APIs", "Chatbots", "IA", "Scrum", "Metodologías Ágiles"]
    },
    {
      icon: <Building size={24} />,
      title: "Desarrollador de Aplicaciones .Net",
      company: "Hoteles City Express",
      location: "Santa Fe, CDMX",
      period: "Sep 2016 - Oct 2017",
      description: "Desarrollo de sistemas de reservación, programas de lealtad y herramientas de gestión. Proyectos destacados: City Access 5.0 (B2B/B2C), City Premios, KPIs, integración OpenProject + Cherwell.",
      type: "Tiempo Completo",
      color: "#0077FF",
      technologies: [".NET", "C#", "SQL Server", "ASP.NET", "Web Services", "B2B/B2C"]
    }
  ]

  const stats = [
    { number: "9+", label: "Años de experiencia", icon: <Briefcase size={20} /> },
    { number: "5", label: "Empresas de renombre", icon: <Building size={20} /> },
    { number: "100+", label: "Proyectos entregados", icon: <Code size={20} /> },
    { number: "1er", label: "Lugar concurso internacional", icon: <Award size={20} /> }
  ]

  return (
    <section id="experience" style={{
      paddingTop: isMobile ? '80px' : '8rem',
      paddingBottom: isMobile ? '60px' : '8rem',
      marginTop: isMobile ? '0' : '0',
      background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 50%, #F8F9FA 100%)',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100vw',
      borderTop: 'none',
      boxShadow: 'none'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 1
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 113, 227, 0.15) 0%, rgba(41, 151, 255, 0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '20%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(10, 132, 255, 0.15) 0%, rgba(0, 113, 227, 0.1) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
      </div>

      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        padding: isMobile ? '0 1rem' : '0 2rem',
        maxWidth: isMobile ? '100%' : '1200px',
        margin: '0 auto',
        width: '100%',
        isolation: 'isolate'
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            marginBottom: isMobile ? '48px' : '5rem',
            padding: '0',
            width: '100%',
            maxWidth: '100%'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: '#F5F5F7',
            border: '1px solid #E5E5EA',
            borderRadius: '50px',
            padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem',
            marginBottom: isMobile ? '2rem' : '3rem',
            color: '#0071E3',
            fontSize: isMobile ? '0.875rem' : '1rem',
            fontWeight: '600',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            backdropFilter: 'blur(10px)'
          }}>
            <Code size={isMobile ? 18 : 20} />
            EXPERIENCIA
          </div>

          <h2 style={{
            fontSize: isMobile ? 'clamp(1.75rem, 8vw, 2.25rem)' : 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#1D1D1F',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            lineHeight: '1.1',
            padding: '0',
            width: '100%',
            maxWidth: '100%',
            letterSpacing: '-0.02em'
          }}>
            Transformando ideas en{' '}
            <span style={{
              background: 'linear-gradient(90deg, #0071E3, #2997FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              soluciones digitales
            </span>
          </h2>
          
          <p style={{
            fontSize: isMobile ? 'clamp(1rem, 4vw, 1.125rem)' : '1.25rem',
            lineHeight: '1.7',
            color: '#6E6E73',
            maxWidth: isMobile ? '100%' : '800px',
            margin: '0 auto 2rem auto',
            padding: '0 8px',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '400',
            textAlign: 'center'
          }}>
            Soy Francisco Javier Mateo Hernández, líder en el área de tecnología y desarrollo de software especializado en crear{' '}
            <span style={{ color: '#0071E3', fontWeight: '600' }}>soluciones tecnológicas robustas</span>{' '}
            que transforman la manera en que las empresas operan y crecen.
          </p>
          
          <p style={{
            fontSize: isMobile ? 'clamp(0.95rem, 3.5vw, 1rem)' : '1.125rem',
            lineHeight: '1.6',
            color: '#6E6E73',
            maxWidth: isMobile ? '100%' : '700px',
            margin: '0 auto',
            padding: '0 8px',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            fontWeight: '400',
            textAlign: 'center'
          }}>
            Con más de 9 años de experiencia, he trabajado en proyectos que van desde sistemas de gestión empresarial hasta plataformas de e-commerce y APIs personalizadas, siempre enfocado en generar valor real para cada organización.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div style={{ 
          width: '100%', 
          maxWidth: '100%', 
          margin: '0 auto', 
          marginBottom: isMobile ? '32px' : '6rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            maxWidth: '100%',
            overflow: 'visible'
          }}>
            {workExperience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  minHeight: 'auto',
                  height: 'auto',
                  overflow: 'visible'
                }}
              >
                <div style={{
                  width: '100%',
                  maxWidth: '100%'
                }}>
                  <motion.div
                    whileHover={{ y: isMobile ? -2 : -4, scale: isMobile ? 1.005 : 1.01 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px',
                      padding: isMobile ? '1.5rem' : '2rem',
                      border: '1px solid #E5E5EA',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'visible',
                      width: '100%',
                      maxWidth: '100%',
                      minHeight: 'auto',
                      height: 'auto',
                      transform: 'none'
                    }}
                  >
                    {/* Subtle Background Glow */}
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      right: '-50%',
                      width: '200px',
                      height: '200px',
                      background: `radial-gradient(circle, ${experience.color}08 0%, transparent 70%)`,
                      pointerEvents: 'none'
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      {/* Header */}
                      <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'center' : 'flex-start',
                        gap: '16px',
                        marginBottom: '20px',
                        textAlign: isMobile ? 'center' : 'left',
                        width: '100%'
                      }}>
                        <div style={{
                            width: isMobile ? '50px' : '60px',
                            height: isMobile ? '50px' : '60px',
                            background: `linear-gradient(135deg, ${experience.color}20, ${experience.color}30)`,
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: experience.color,
                            flexShrink: 0,
                            border: `1px solid ${experience.color}30`,
                            maxWidth: '100%',
                            objectFit: 'contain'
                          }}
                        >
                          {experience.icon}
                        </div>
                        
                        <div style={{ 
                          flex: 1, 
                          width: '100%', 
                          maxWidth: '100%',
                          textAlign: isMobile ? 'center' : 'left'
                        }}>
                          <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: isMobile ? 'center' : 'flex-start',
                            gap: isMobile ? '8px' : '1rem',
                            marginBottom: '12px',
                            flexWrap: 'wrap',
                            justifyContent: isMobile ? 'center' : 'flex-start'
                          }}>
                            <span style={{
                              padding: '6px 12px',
                              background: `${experience.color}15`,
                              color: experience.color,
                              fontSize: '0.8rem',
                              fontWeight: '600',
                              borderRadius: '20px',
                              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                              border: `1px solid ${experience.color}25`,
                              whiteSpace: 'normal',
                              wordBreak: 'break-word'
                            }}>
                              {experience.type}
                            </span>
                            <span style={{
                              fontSize: '0.85rem',
                              color: '#6E6E73',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontWeight: '400',
                              opacity: '0.8',
                              whiteSpace: 'normal',
                              wordBreak: 'break-word'
                            }}>
                              <Calendar size={16} />
                              {experience.period}
                            </span>
                          </div>
                          
                          <h3 style={{
                            fontSize: isMobile ? 'clamp(1.1rem, 5vw, 1.25rem)' : '1.4rem',
                            fontWeight: '600',
                            color: '#1D1D1F',
                            marginBottom: '8px',
                            lineHeight: '1.3',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            whiteSpace: 'normal',
                            wordBreak: 'break-word',
                            letterSpacing: '-0.01em'
                          }}>
                            {experience.title}
                          </h3>
                          
                          <div style={{
                            color: experience.color,
                            fontWeight: '600',
                            marginBottom: '8px',
                            fontSize: isMobile ? '1rem' : '1.1rem',
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                            whiteSpace: 'normal',
                            wordBreak: 'break-word'
                          }}>
                            {experience.company}
                          </div>
                          
                          <div style={{
                            fontSize: '0.85rem',
                            color: '#6E6E73',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontWeight: '400',
                            opacity: '0.8',
                            whiteSpace: 'normal',
                            wordBreak: 'break-word'
                          }}>
                            <MapPin size={16} />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p style={{
                        color: '#3A3A3C',
                        lineHeight: '1.5',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        marginBottom: '16px',
                        fontWeight: '400',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                        opacity: '0.8',
                        whiteSpace: 'normal',
                        wordBreak: 'break-word'
                      }}>
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h5 style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: '#1D1D1F',
                          marginBottom: '12px',
                          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                        }}>
                          Tecnologías utilizadas:
                        </h5>
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '8px',
                          justifyContent: isMobile ? 'center' : 'flex-start'
                        }}>
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              style={{
                                padding: '4px 8px',
                                background: `${experience.color}15`,
                                color: experience.color,
                                borderRadius: '12px',
                                fontSize: '0.75rem',
                                fontWeight: '500',
                                border: `1px solid ${experience.color}20`,
                                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                                whiteSpace: 'normal',
                                wordBreak: 'break-word'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '20px',
            border: '1px solid #e5e5e5',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            position: 'relative',
            overflow: 'visible',
            margin: '0',
            width: '100%',
            maxWidth: '100%',
            minHeight: 'auto',
            height: 'auto'
          }}
        >
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '24px',
              width: '100%'
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.4rem' : '1.8rem',
                fontWeight: '600',
                color: '#1D1D1F',
                marginBottom: '12px',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
              }}>
                Impacto en números
              </h3>
              <p style={{
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#6E6E73',
                opacity: '0.8',
                padding: '0',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                fontWeight: '400'
              }}>
                Resultados de mi trayectoria profesional
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '16px',
              width: '100%',
              maxWidth: '100%',
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '16px',
                    border: '1px solid #e5e5e5',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease',
                    flex: isMobile ? '1' : '1 1 calc(25% - 12px)',
                    minWidth: isMobile ? '100%' : '150px',
                    maxWidth: '100%',
                    width: '100%',
                    minHeight: 'auto',
                    height: 'auto'
                  }}
                >
                  <div style={{
                    width: isMobile ? '40px' : '50px',
                    height: isMobile ? '40px' : '50px',
                    background: 'rgba(0, 113, 227, 0.15)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0071E3',
                    margin: '0 auto 12px auto',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: isMobile ? '1.8rem' : '2.2rem',
                    fontWeight: '600',
                    color: '#1D1D1F',
                    marginBottom: '4px',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: isMobile ? '0.75rem' : '0.85rem',
                    color: '#6E6E73',
                    fontWeight: '400',
                    lineHeight: '1.3',
                    opacity: '0.8',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                  }}>
                    {stat.label}
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

export default Experience