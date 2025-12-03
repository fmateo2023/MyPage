import React, { useState, useEffect } from 'react'
import { Code, Database, Globe, Bot, Server, Zap, Layers, Shield } from 'lucide-react'

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isDesktop = windowWidth >= 1024
  const isTablet = windowWidth >= 768
  const isMobile = windowWidth >= 480
  const skillCategories = [
    {
      title: "Lenguajes de Programación",
      icon: <Code size={24} />,
      skills: ["JavaScript", "Python", "TypeScript", "PHP", "Java", "C#"]
    },
    {
      title: "Frontend",
      icon: <Globe size={24} />,
      skills: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Node.js", "Express", "Laravel", "Django", "FastAPI", ".NET"]
    },
    {
      title: "Bases de Datos",
      icon: <Database size={24} />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Firebase"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Layers size={24} />,
      skills: ["AWS", "Docker", "Git", "Linux", "Nginx", "Apache"]
    },
    {
      title: "APIs & Integraciones",
      icon: <Zap size={24} />,
      skills: ["REST APIs", "GraphQL", "Webhooks", "OAuth", "JWT", "Stripe"]
    },
    {
      title: "Automatización",
      icon: <Bot size={24} />,
      skills: ["Chatbots", "Web Scraping", "Process Automation", "CRON Jobs", "Zapier", "Make"]
    },
    {
      title: "Metodologías",
      icon: <Shield size={24} />,
      skills: ["Agile", "Scrum", "Clean Code", "TDD", "Code Review", "Documentation"]
    }
  ]

  return (
    <section id="skills" style={{
      padding: isTablet ? '8rem 0' : '6rem 0',
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

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isTablet ? '0 3rem' : '0 1.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: isTablet ? '4rem' : '3rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(43, 190, 248, 0.1)',
            border: '1px solid rgba(43, 190, 248, 0.2)',
            borderRadius: '50px',
            padding: '0.75rem 1.5rem',
            marginBottom: '2rem',
            color: '#2BBEF8',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: 'IBM Plex Mono, monospace'
          }}>
            <Code size={20} />
            STACK TECNOLÓGICO
          </div>

          <h2 style={{
            fontSize: isTablet ? 'clamp(2.5rem, 4vw, 3.5rem)' : 'clamp(2rem, 6vw, 2.5rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'white',
            fontFamily: 'Space Grotesk, sans-serif'
          }}>
            Stack Tecnológico y{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2BBEF8 0%, #0077FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Habilidades
            </span>
          </h2>
          
          <p style={{
            fontSize: isTablet ? '1.25rem' : '1.1rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Tecnologías y herramientas que domino para crear soluciones robustas, 
            escalables y modernas que se adapten a las necesidades de tu negocio.
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr',
          gap: isTablet ? '2rem' : '1.5rem',
          marginBottom: isTablet ? '4rem' : '3rem'
        }}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                padding: isTablet ? '2rem' : '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)'
                e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.background = 'rgba(255, 255, 255, 0.05)'
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Header with Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(43, 190, 248, 0.2)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2BBEF8',
                  flexShrink: 0
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: isTablet ? '1.25rem' : '1.1rem',
                  fontWeight: '600',
                  color: 'white',
                  margin: 0,
                  fontFamily: 'Space Grotesk, sans-serif'
                }}>
                  {category.title}
                </h3>
              </div>
              
              {/* Skills Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(43, 190, 248, 0.1)',
                      color: '#2BBEF8',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      borderRadius: '12px',
                      border: '1px solid rgba(43, 190, 248, 0.2)',
                      transition: 'all 0.3s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(43, 190, 248, 0.2)'
                      e.target.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(43, 190, 248, 0.1)'
                      e.target.style.transform = 'translateY(0)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specializations */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          padding: isTablet ? '3rem' : '2rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
          marginBottom: isTablet ? '4rem' : '3rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle accent line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '3px',
            background: 'linear-gradient(135deg, #2BBEF8 0%, #0077FF 100%)',
            borderRadius: '0 0 3px 3px'
          }} />

          <div style={{
            textAlign: 'center',
            marginBottom: isTablet ? '3rem' : '2rem'
          }}>
            <h3 style={{
              fontSize: isTablet ? '2rem' : '1.75rem',
              fontWeight: '600',
              color: 'white',
              marginBottom: '1rem',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              Especializaciones Clave
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Áreas donde mi experiencia genera el mayor impacto
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : isTablet ? 'repeat(2, 1fr)' : '1fr',
            gap: isTablet ? '2rem' : '1.5rem'
          }}>
            {[
              {
                icon: '🚀',
                title: 'Desarrollo Full-Stack',
                description: 'Experiencia completa en frontend y backend para crear aplicaciones web robustas'
              },
              {
                icon: '🔗',
                title: 'APIs & Integraciones',
                description: 'Diseño e implementación de APIs RESTful y integraciones con sistemas externos'
              },
              {
                icon: '⚡',
                title: 'Automatización',
                description: 'Implementación de chatbots y automatización de procesos empresariales'
              }
            ].map((spec, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: isTablet ? '2rem 1rem' : '1.5rem 0.5rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                  e.target.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.03)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width: isTablet ? '80px' : '70px',
                  height: isTablet ? '80px' : '70px',
                  background: 'rgba(43, 190, 248, 0.1)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  border: '1px solid rgba(43, 190, 248, 0.2)',
                  fontSize: isTablet ? '2rem' : '1.75rem'
                }}>
                  {spec.icon}
                </div>
                <h4 style={{
                  fontWeight: '600',
                  marginBottom: '1rem',
                  fontSize: isTablet ? '1.25rem' : '1.1rem',
                  color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}>
                  {spec.title}
                </h4>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div style={{
          background: 'rgba(43, 190, 248, 0.05)',
          borderRadius: '20px',
          padding: isTablet ? '3rem' : '2rem',
          border: '1px solid rgba(43, 190, 248, 0.1)',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(43, 190, 248, 0.1)',
            border: '1px solid rgba(43, 190, 248, 0.2)',
            borderRadius: '50px',
            padding: '0.5rem 1rem',
            marginBottom: '1.5rem',
            color: '#2BBEF8',
            fontSize: '0.8rem',
            fontWeight: '600',
            fontFamily: 'IBM Plex Mono, monospace'
          }}>
            <Zap size={16} />
            EVOLUCIÓN CONSTANTE
          </div>
          
          <h3 style={{
            fontSize: isTablet ? '1.75rem' : '1.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: 'white',
            fontFamily: 'Space Grotesk, sans-serif'
          }}>
            Aprendizaje Continuo
          </h3>
          
          <p style={{
            fontSize: isTablet ? '1.1rem' : '1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            La tecnología evoluciona constantemente, por eso me mantengo actualizado con las 
            últimas tendencias y mejores prácticas. Siempre estoy aprendiendo nuevas herramientas 
            y metodologías para ofrecer las mejores soluciones.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills