import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Calendar, 
  MapPin, 
  Users, 
  Mic, 
  Trophy,
  Star,
  ExternalLink,
  ArrowRight
} from 'lucide-react'

const Participations = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const handleCardClick = (index) => {
    setActiveIndex(index)
    if (!isMobile && index > 2) {
      // Smooth scroll to keep detail panel visible for bottom cards
      setTimeout(() => {
        const detailPanel = document.querySelector('#participation-detail-panel')
        if (detailPanel) {
          detailPanel.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          })
        }
      }, 100)
    }
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const participations = [
    {
      icon: <Mic size={24} />,
      title: "Ponente en Conferencia de Inteligencia Artificial",
      event: "CBTIS Poza Rica",
      location: "Poza Rica, Veracruz",
      date: "2024",
      description: "Conferencia magistral sobre las aplicaciones prácticas de la Inteligencia Artificial en el desarrollo de software y su impacto en la industria tecnológica actual.",
      type: "Ponente",
      color: "#0077FF",
      audience: "200+ estudiantes y profesores",
      topics: ["Inteligencia Artificial", "Machine Learning", "Desarrollo de Software", "Innovación Tecnológica"],
      image: "/MyPage/public/assets/cbtis-ia.jpeg",
      imageAlt: "Conferencia de IA en CBTIS Poza Rica"
    },
    {
      icon: <Trophy size={24} />,
      title: "Jurado en Competencia Tecnológica",
      event: "CONALEP",
      location: "Veracruz, México",
      date: "2023",
      description: "Participación como jurado evaluador en competencias de desarrollo de software y proyectos tecnológicos estudiantiles, evaluando innovación y calidad técnica.",
      type: "Jurado",
      color: "#2BBEF8",
      audience: "50+ participantes",
      topics: ["Evaluación Técnica", "Desarrollo de Software", "Innovación", "Mentoría"],
      image: "/MyPage/public/assets/cbtis-ia2.jpeg",
      imageAlt: "Jurado en competencia tecnológica CONALEP"
    },
    {
      icon: <Users size={24} />,
      title: "Expositor en Foro Industrial Energético Portuario",
      event: "Foro Industrial Portuario",
      location: "Ciudad del Carmen, Campeche",
      date: "2023",
      description: "Presentación sobre soluciones tecnológicas para la industria energética y portuaria, enfocándose en digitalización y automatización de procesos.",
      type: "Expositor",
      color: "#0077FF",
      audience: "300+ profesionales de la industria",
      topics: ["Industria 4.0", "Automatización", "Soluciones Empresariales", "Digitalización"],
      image: "/MyPage/public/assets/foro-industrial-portuario-cd-carmen.jpg",
      imageAlt: "Foro Industrial Portuario Ciudad del Carmen"
    },
    {
      icon: <Award size={24} />,
      title: "Participante en Eventos CANACINTRA",
      event: "CANACINTRA",
      location: "México",
      date: "2022-2023",
      description: "Participación activa en eventos de la Cámara Nacional de la Industria de Transformación, compartiendo experiencias sobre transformación digital empresarial.",
      type: "Participante",
      color: "#2BBEF8",
      audience: "500+ empresarios",
      topics: ["Transformación Digital", "Industria", "Tecnología Empresarial", "Innovación"],
      image: "/MyPage/public/assets/foro-industrial-portuario.jpg",
      imageAlt: "Eventos CANACINTRA"
    },
    {
      icon: <Star size={24} />,
      title: "Expositor en Expo León",
      event: "Expo León Guanajuato",
      location: "León, Guanajuato",
      date: "2022",
      description: "Presentación de soluciones tecnológicas innovadoras para pequeñas y medianas empresas, demostrando casos de éxito en automatización y desarrollo de software.",
      type: "Expositor",
      color: "#0077FF",
      audience: "1000+ visitantes",
      topics: ["PyMEs", "Soluciones Tecnológicas", "Casos de Éxito", "Automatización"],
      image: "/MyPage/public/assets/idea-guanajuato.jpg",
      imageAlt: "Expo León Guanajuato"
    }
  ]

  const achievements = [
    { number: "5+", label: "Eventos como ponente", icon: <Mic size={20} /> },
    { number: "2000+", label: "Personas impactadas", icon: <Users size={20} /> },
    { number: "10+", label: "Temas presentados", icon: <Award size={20} /> },
    { number: "100%", label: "Evaluaciones positivas", icon: <Star size={20} /> }
  ]

  return (
    <section id="participations" style={{
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
            <Award size={20} />
            PARTICIPACIONES & EVENTOS
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)'
          }}>
            Compartiendo{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              conocimiento
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Mi participación activa en la comunidad tecnológica como ponente, jurado y expositor 
            en eventos de la industria, compartiendo experiencias y conocimientos.
          </p>
        </motion.div>

        {/* Interactive Participations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '2rem' : '4rem',
          marginBottom: '6rem',
          alignItems: 'start'
        }}>
          {/* Timeline List */}
          <div style={{ position: 'relative', width: '100%' }}>
            {/* Timeline Line - Only for desktop */}
            {!isMobile && (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                viewport={{ once: true }}
                style={{
                  position: 'absolute',
                  left: '20px',
                  top: '30px',
                  height: `${participations.length * 140 + 20}px`,
                  width: '4px',
                  background: `
                    linear-gradient(180deg, 
                      var(--accent-cyan) 0%, 
                      var(--primary-blue) 50%, 
                      var(--accent-cyan) 100%
                    )
                  `,
                  borderRadius: '3px',
                  transformOrigin: 'top',
                  zIndex: 1,
                  boxShadow: `
                    0 0 20px rgba(43, 190, 248, 0.3),
                    inset 0 0 10px rgba(255, 255, 255, 0.1)
                  `
                }}
              />
            )}
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isMobile ? '1rem' : '2rem',
              width: '100%'
            }}>
              {participations.map((participation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  onClick={() => handleCardClick(index)}
                  whileHover={{ 
                    scale: 1.02,
                    x: !isMobile ? 10 : 0,
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    position: 'relative',
                    background: activeIndex === index 
                      ? 'linear-gradient(135deg, rgba(43, 190, 248, 0.1), rgba(0, 119, 255, 0.05))' 
                      : 'var(--background-card)',
                    borderRadius: '1.5rem',
                    padding: isMobile ? '1.5rem' : '2rem',
                    border: `2px solid ${activeIndex === index ? participation.color : 'var(--border-subtle)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    width: '100%',
                    boxSizing: 'border-box',
                    zIndex: 2,
                    minHeight: isMobile && activeIndex === index ? '400px' : '100px',
                    overflow: 'hidden',
                    boxShadow: activeIndex === index 
                      ? `0 20px 40px ${participation.color}20, 0 0 0 1px ${participation.color}30`
                      : '0 4px 20px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Timeline Dot - Only for desktop */}
                  {!isMobile && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                      animate={{
                        scale: activeIndex === index ? 1.3 : 1,
                        boxShadow: activeIndex === index 
                          ? `
                            0 0 30px ${participation.color}, 
                            0 0 60px ${participation.color}40,
                            inset 0 0 15px rgba(255, 255, 255, 0.2)
                          `
                          : `
                            0 0 15px rgba(107, 114, 128, 0.4),
                            inset 0 0 8px rgba(255, 255, 255, 0.1)
                          `
                      }}
                      style={{
                        position: 'absolute',
                        left: '30px',
                        top: '15px',
                        width: '18px',
                        height: '18px',
                        background: activeIndex === index 
                          ? `
                            radial-gradient(circle at 30% 30%, 
                              ${participation.color}FF, 
                              ${participation.color}CC, 
                              ${participation.color}99
                            )
                          `
                          : `
                            radial-gradient(circle at 30% 30%, 
                              #9CA3AF, 
                              #6B7280, 
                              #4B5563
                            )
                          `,
                        borderRadius: '50%',
                        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        border: '3px solid var(--background-dark)',
                        zIndex: 3
                      }}
                    >
                      {/* Inner glow effect */}
                      <div style={{
                        position: 'absolute',
                        top: '2px',
                        left: '2px',
                        width: '6px',
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.6)',
                        borderRadius: '50%',
                        opacity: activeIndex === index ? 1 : 0.3,
                        transition: 'opacity 0.3s ease'
                      }} />
                    </motion.div>
                  )}
                  
                  {/* Mobile Flip Content */}
                  {isMobile && activeIndex === index ? (
                    <motion.div
                      initial={{ rotateY: -90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      style={{
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      {/* Mobile Full Content */}
                      <div style={{
                        position: 'relative',
                        height: '180px',
                        overflow: 'hidden',
                        borderRadius: '0.75rem',
                        marginBottom: '1rem'
                      }}>
                        <img 
                          src={participation.image}
                          alt={participation.imageAlt}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(45deg, ${participation.color}30, transparent 60%)`,
                          pointerEvents: 'none'
                        }} />
                        <div style={{
                          position: 'absolute',
                          top: '1rem',
                          right: '1rem',
                          padding: '0.4rem 0.8rem',
                          background: participation.color,
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          borderRadius: '50px',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          {participation.type}
                        </div>
                      </div>
                      
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem',
                        lineHeight: '1.3'
                      }}>
                        {participation.title}
                      </h4>
                      
                      <div style={{
                        fontSize: '0.9rem',
                        color: participation.color,
                        fontWeight: '500',
                        marginBottom: '0.75rem'
                      }}>
                        {participation.event} • {participation.date}
                      </div>
                      
                      <p style={{
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6',
                        fontSize: '0.85rem',
                        marginBottom: '1rem'
                      }}>
                        {participation.description}
                      </p>
                      
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem'
                      }}>
                        {participation.topics.slice(0, 3).map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            style={{
                              padding: '0.3rem 0.6rem',
                              background: `${participation.color}15`,
                              color: participation.color,
                              borderRadius: '50px',
                              fontSize: '0.7rem',
                              fontWeight: '500'
                            }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    /* Normal Card Content */
                    <div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.75rem',
                        width: '100%'
                      }}>
                        <div style={{
                          width: isMobile ? '35px' : '40px',
                          height: isMobile ? '35px' : '40px',
                          background: `${participation.color}15`,
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: participation.color,
                          flexShrink: 0
                        }}>
                          {participation.icon}
                        </div>
                        
                        <div style={{ flex: 1 }}>
                          <h4 style={{
                            fontSize: isMobile ? '1rem' : '1.1rem',
                            fontWeight: '600',
                            color: 'var(--text-primary)',
                            marginBottom: '0.25rem',
                            lineHeight: '1.3'
                          }}>
                            {participation.title}
                          </h4>
                          
                          <div style={{
                            fontSize: isMobile ? '0.8rem' : '0.9rem',
                            color: participation.color,
                            fontWeight: '500'
                          }}>
                            {participation.event} • {participation.date}
                          </div>
                        </div>
                        
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          background: `${participation.color}`,
                          color: 'white',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          borderRadius: '50px',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          {participation.type}
                        </span>
                      </div>
                      
                      <div style={{
                        fontSize: isMobile ? '0.75rem' : '0.85rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? '0.5rem' : '1rem',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <MapPin size={14} />
                          {participation.location}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Users size={14} />
                          {participation.audience}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Detail Panel - Only for desktop */}
          {!isMobile && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              id="participation-detail-panel"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(43, 190, 248, 0.05), 
                  rgba(0, 119, 255, 0.02), 
                  var(--background-card)
                )`,
                borderRadius: '2rem',
                overflow: 'hidden',
                border: `2px solid ${participations[activeIndex].color}30`,
                boxShadow: `
                  0 25px 50px rgba(0, 0, 0, 0.15),
                  0 0 0 1px ${participations[activeIndex].color}20,
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `,
                position: 'sticky',
                top: activeIndex > 2 ? '1rem' : '2rem',
                height: 'fit-content',
                width: '100%',
                backdropFilter: 'blur(20px)',
                transition: 'top 0.3s ease'
              }}
            >
              {/* Image */}
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  position: 'relative',
                  height: '320px',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src={participations[activeIndex].image}
                  alt={participations[activeIndex].imageAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.6s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(
                    135deg, 
                    ${participations[activeIndex].color}40 0%, 
                    transparent 50%, 
                    rgba(0, 0, 0, 0.3) 100%
                  )`,
                  pointerEvents: 'none'
                }} />
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    padding: '0.75rem 1.5rem',
                    background: `linear-gradient(135deg, ${participations[activeIndex].color}, ${participations[activeIndex].color}CC)`,
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    borderRadius: '50px',
                    fontFamily: 'var(--font-mono)',
                    boxShadow: `0 10px 25px ${participations[activeIndex].color}40`
                  }}
                >
                  {participations[activeIndex].type}
                </motion.div>
              </motion.div>
              
              {/* Content */}
              <div style={{ padding: '2.5rem' }}>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                    lineHeight: '1.3'
                  }}
                >
                  {participations[activeIndex].title}
                </motion.h3>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{
                    fontSize: '1.2rem',
                    color: participations[activeIndex].color,
                    fontWeight: '600',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Calendar size={18} />
                  {participations[activeIndex].event} • {participations[activeIndex].date}
                </motion.div>
                
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                    marginBottom: '2rem'
                  }}
                >
                  {participations[activeIndex].description}
                </motion.p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ marginBottom: '2rem' }}
                >
                  <h5 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Users size={18} />
                    Temas tratados:
                  </h5>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem'
                  }}>
                    {participations[activeIndex].topics.map((topic, topicIndex) => (
                      <motion.span
                        key={topicIndex}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 + (topicIndex * 0.1) }}
                        style={{
                          padding: '0.75rem 1.25rem',
                          background: `linear-gradient(135deg, ${participations[activeIndex].color}15, ${participations[activeIndex].color}08)`,
                          color: participations[activeIndex].color,
                          borderRadius: '50px',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          border: `1px solid ${participations[activeIndex].color}30`,
                          boxShadow: `0 4px 15px ${participations[activeIndex].color}20`
                        }}
                      >
                        {topic}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--gradient-card)',
            borderRadius: '2rem',
            padding: '3rem 2rem',
            border: '1px solid var(--border-subtle)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(43, 190, 248, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                fontFamily: 'var(--font-primary)'
              }}>
                Impacto en la comunidad
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)'
              }}>
                Resultados de mi participación en eventos tecnológicos
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    textAlign: 'center',
                    padding: '2rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '1.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(43, 190, 248, 0.1)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    margin: '0 auto 1rem auto'
                  }}>
                    {achievement.icon}
                  </div>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    {achievement.number}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    fontWeight: '500'
                  }}>
                    {achievement.label}
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

export default Participations