import React, { useState, useEffect } from 'react'
import { ExternalLink, Code, Database, Globe, Bot, Server, FileText, Eye, Github } from 'lucide-react'

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
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

  const projects = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      title: "Sistema de Gestión para Despacho Jurídico",
      description: "Plataforma completa para la gestión de casos, clientes, documentos y facturación. Incluye calendario de audiencias y generación automática de reportes.",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      category: "Sistema Empresarial",
      client: "Cliente Confidencial",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      color: "#0077FF"
    },
    {
      id: 2,
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce para Negocio Local",
      description: "Tienda en línea completa con catálogo de productos, carrito de compras, pasarela de pagos y panel administrativo para gestión de inventario.",
      tech: ["React", "Stripe", "MongoDB", "Node.js"],
      category: "E-commerce",
      client: "Cliente Confidencial",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      color: "#2BBEF8"
    },
    {
      id: 3,
      icon: <Database className="w-8 h-8" />,
      title: "API Personalizada para Empresa Regional",
      description: "API RESTful para integración de sistemas internos, sincronización de datos entre plataformas y automatización de procesos empresariales.",
      tech: ["Node.js", "Express", "MySQL", "JWT"],
      category: "API & Integraciones",
      client: "Cliente Confidencial",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      color: "#0077FF"
    },
    {
      id: 4,
      icon: <Bot className="w-8 h-8" />,
      title: "Chatbot para Proceso Interno",
      description: "Bot inteligente para automatización de consultas internas, gestión de tickets de soporte y distribución automática de tareas.",
      tech: ["Python", "NLP", "Webhook", "API"],
      category: "Automatización",
      client: "Cliente Confidencial",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      color: "#2BBEF8"
    },
    {
      id: 5,
      icon: <Server className="w-8 h-8" />,
      title: "Plataforma Web a la Medida",
      description: "Sistema web personalizado para gestión de procesos específicos del cliente, con dashboard analítico y reportes en tiempo real.",
      tech: ["Vue.js", "Laravel", "MySQL", "Redis"],
      category: "Plataforma Web",
      client: "Cliente Confidencial",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      color: "#0077FF"
    },
    {
      id: 6,
      icon: <Database className="w-8 h-8" />,
      title: "Sistema de Inventario Inteligente",
      description: "Plataforma para control de inventario con alertas automáticas, predicción de demanda e integración con proveedores.",
      tech: ["React", "Python", "PostgreSQL", "ML"],
      category: "Sistema Empresarial",
      client: "Cliente Confidencial",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80",
      color: "#2BBEF8"
    },
    {
      id: 7,
      icon: <Globe className="w-8 h-8" />,
      title: "Sitio Web Profesional - Versión 1",
      description: "Primera versión de mi sitio web profesional, desarrollado con tecnologías modernas y diseño responsive. Incluye portafolio, servicios y formulario de contacto.",
      tech: ["React", "Vite", "CSS3", "JavaScript"],
      category: "Sitio Web Personal",
      client: "Proyecto Personal",
      image: "https://raw.githubusercontent.com/fmateo2023/MyPage/refs/heads/main/public/assets/myweb1.png",
      color: "#0077FF"
    },
    {
      id: 8,
      icon: <Code className="w-8 h-8" />,
      title: "Sitio Web Profesional - Versión 2",
      description: "Evolución de mi sitio web con mejoras en UX/UI, animaciones avanzadas y arquitectura multi-página. Optimizado para rendimiento y SEO.",
      tech: ["React", "Framer Motion", "React Router", "CSS Variables"],
      category: "Sitio Web Personal",
      client: "Proyecto Personal",
      image: "https://raw.githubusercontent.com/fmateo2023/MyPage/refs/heads/main/public/assets/myweb2.png",
      color: "#2BBEF8"
    }
  ]

  return (
    <section id="portfolio" style={{
      padding: isTablet ? '8rem 0' : '6rem 0',
      background: '#F5F5F7',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 25% 75%, rgba(43, 190, 248, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(0, 119, 255, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isTablet ? '0 3rem' : '0 1.5rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: isTablet ? '4rem' : '3rem'
        }}>
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
            fontFamily: 'IBM Plex Mono, monospace'
          }}>
            <Eye size={20} />
            PORTAFOLIO DE PROYECTOS
          </div>

          <h2 style={{
            fontSize: isTablet ? 'clamp(2.5rem, 4vw, 3.5rem)' : 'clamp(2rem, 6vw, 2.5rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#1D1D1F',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
          }}>
            Proyectos que{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2BBEF8 0%, #0077FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              generan resultados
            </span>
          </h2>
          
          <p style={{
            fontSize: isTablet ? '1.25rem' : '1.1rem',
            lineHeight: '1.6',
            color: '#6E6E73',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Una selección de proyectos desarrollados para diferentes sectores, 
            cada uno diseñado para resolver necesidades específicas y generar valor real.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr',
          gap: isTablet ? '2rem' : '1.5rem',
          marginBottom: isTablet ? '4rem' : '3rem'
        }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E5E5EA',
                backdropFilter: 'blur(10px)',
                boxShadow: hoveredProject === project.id 
                  ? '0 14px 30px rgba(0, 0, 0, 0.06)' 
                  : '0 8px 20px rgba(0, 0, 0, 0.04)',
                transform: hoveredProject === project.id ? 'translateY(-5px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden',
                borderRadius: '20px 20px 0 0',
                background: '#1A2B42'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'all 0.3s ease',
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                    display: 'block'
                  }}
                />
                
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 119, 255, 0.2)',
                  opacity: hoveredProject === project.id ? 1 : 0,
                  transition: 'all 0.3s ease'
                }} />

                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'linear-gradient(135deg, #0066cc, #0099ff)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'white',
                  border: '1px solid rgba(43, 190, 248, 0.3)'
                }}>
                  {project.category}
                </div>

                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  display: 'flex',
                  gap: '0.5rem',
                  opacity: hoveredProject === project.id ? 1 : 0,
                  transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(-10px)',
                  transition: 'all 0.3s ease'
                }}>
                  <button style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                    <Eye size={20} color="white" />
                  </button>
                  <button style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                    <ExternalLink size={20} color="white" />
                  </button>
                </div>
              </div>

              <div style={{
                padding: isTablet ? '2rem' : '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1rem'
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
                    {project.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: isTablet ? '1.25rem' : '1.1rem',
                      fontWeight: '600',
                      color: '#1D1D1F',
                      marginBottom: '0.5rem',
                      lineHeight: '1.3',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                    }}>
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p style={{
                  color: '#6E6E73',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem'
                }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: '#6E6E73',
                    marginBottom: '0.75rem',
                    fontFamily: 'Inter, monospace',
                    letterSpacing: '0.05em'
                  }}>
                    STACK TECNOLÓGICO:
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        style={{
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(0, 113, 227, 0.1)',
                          color: '#0071E3',
                          borderRadius: '50px',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid #E5E5EA'
                }}>
                  <span style={{
                    fontSize: '0.85rem',
                    color: '#6E6E73',
                    fontFamily: 'Inter, monospace'
                  }}>
                    {project.client}
                  </span>
                  <button style={{
                    background: 'none',
                    border: 'none',
                    color: '#0071E3',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}>
                    Ver detalles
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #0A1A2F 0%, #1A2B42 100%)',
          borderRadius: '2rem',
          padding: '3rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(43, 190, 248, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(0, 119, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(43, 190, 248, 0.2)',
              border: '1px solid rgba(43, 190, 248, 0.3)',
              borderRadius: '50px',
              padding: '0.75rem 1.5rem',
              marginBottom: '2rem',
              color: '#2BBEF8',
              fontSize: '0.9rem',
              fontWeight: '600',
              fontFamily: 'IBM Plex Mono, monospace'
            }}>
              <Code className="w-5 h-5" />
              ¿TIENES UN PROYECTO EN MENTE?
            </div>

            <h3 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              ¿Quieres ver tu proyecto aquí?
            </h3>
            
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}>
              Cada proyecto es único y está diseñado para resolver desafíos específicos. 
              Conversemos sobre cómo puedo ayudarte a crear la solución perfecta para tu negocio.
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: '0 10px 30px rgba(0, 119, 255, 0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 20px 40px rgba(0, 119, 255, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 10px 30px rgba(0, 119, 255, 0.4)'
                }}
              >
                <ExternalLink size={20} />
                Iniciar mi proyecto
              </a>

              <a
                href="#services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                <Eye size={20} />
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio