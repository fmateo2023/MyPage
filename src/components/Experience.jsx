import React, { useState } from 'react'
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
          radial-gradient(circle at 30% 70%, rgba(43, 190, 248, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(0, 119, 255, 0.1) 0%, transparent 50%)
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
            PARTICIPACIONES & RECONOCIMIENTOS
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)'
          }}>
            Mi trayectoria{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              profesional
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Mi experiencia profesional en el desarrollo de software y consultoría tecnológica, 
            creando soluciones innovadoras para empresas de diversos sectores.
          </p>
        </motion.div>

        {/* Premium Timeline */}
        <div style={{ maxWidth: '1000px', margin: '0 auto', marginBottom: '6rem' }}>
          <div className="timeline">
            {workExperience.map((experience, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${activeIndex >= index ? 'animate' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onViewportEnter={() => setActiveIndex(index)}
              >
                <div className="timeline-dot" style={{ background: experience.color }} />
                
                <motion.div
                  whileHover={{ y: -5 }}
                  style={{
                    background: 'var(--background-card)',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    border: '1px solid var(--border-subtle)',
                    boxShadow: '0 10px 30px var(--shadow-soft)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      background: `${experience.color}15`,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: experience.color,
                      flexShrink: 0
                    }}>
                      {experience.icon}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.75rem',
                        flexWrap: 'wrap'
                      }}>
                        <span style={{
                          padding: '0.5rem 1rem',
                          background: `${experience.color}15`,
                          color: experience.color,
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          borderRadius: '50px',
                          fontFamily: 'var(--font-mono)'
                        }}>
                          {experience.type}
                        </span>
                        <span style={{
                          fontSize: '0.9rem',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <Calendar size={16} />
                          {experience.period}
                        </span>
                      </div>
                      
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem',
                        lineHeight: '1.3'
                      }}>
                        {experience.title}
                      </h3>
                      
                      <div style={{
                        color: experience.color,
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        fontSize: '1.1rem'
                      }}>
                        {experience.company}
                      </div>
                      
                      <div style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <MapPin size={16} />
                        {experience.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    fontSize: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h5 style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem'
                    }}>
                      Tecnologías utilizadas:
                    </h5>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          style={{
                            padding: '0.25rem 0.75rem',
                            background: `${experience.color}15`,
                            color: experience.color,
                            borderRadius: '50px',
                            fontSize: '0.8rem',
                            fontWeight: '500'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
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
                Impacto en números
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)'
              }}>
                Resultados de mi participación en la comunidad tecnológica
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
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
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    fontWeight: '500'
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