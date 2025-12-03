import React, { useState, useEffect } from 'react'
import { ArrowRight, Download, MessageCircle, Sparkles, Code2, Zap, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const stats = [
    { number: '9+', label: 'Años de experiencia', icon: '🚀' },
    { number: '50+', label: 'Proyectos completados', icon: '💼' },
    { number: '100%', label: 'Satisfacción cliente', icon: '⭐' },
    { number: '24/7', label: 'Soporte disponible', icon: '🔧' }
  ]

  const isDesktop = windowWidth >= 1024
  const isTablet = windowWidth >= 768
  const isMobile = windowWidth >= 480

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: isTablet ? '8rem 0 4rem' : '6rem 0 2rem',
      background: `
        radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(43, 190, 248, 0.15) 0%, transparent 50%),
        radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(0, 119, 255, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #0A1A2F 0%, #1A2B42 50%, #2A3B52 100%)
      `,
      transition: 'all 0.3s ease'
    }}>
      {/* Floating Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: isTablet ? '100px' : '60px',
        height: isTablet ? '100px' : '60px',
        background: 'rgba(43, 190, 248, 0.1)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'float 6s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: isTablet ? '150px' : '80px',
        height: isTablet ? '150px' : '80px',
        background: 'rgba(0, 119, 255, 0.1)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isTablet ? '0 3rem' : '0 1.5rem',
        position: 'relative',
        zIndex: 10,
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr',
          alignItems: 'center',
          gap: isDesktop ? '6rem' : isTablet ? '4rem' : '3rem'
        }}>
          {/* Content */}
          <div style={{
            textAlign: isDesktop ? 'left' : 'center',
            order: isDesktop ? 1 : 2
          }}>
            {/* Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(43, 190, 248, 0.1)',
              border: '1px solid rgba(43, 190, 248, 0.3)',
              borderRadius: '50px',
              padding: isTablet ? '0.75rem 1.5rem' : '0.5rem 1rem',
              marginBottom: '2rem',
              backdropFilter: 'blur(10px)',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                background: '#2BBEF8',
                borderRadius: '50%',
                boxShadow: '0 0 10px #2BBEF8'
              }} />
              <span style={{
                color: '#2BBEF8',
                fontSize: isTablet ? '0.9rem' : '0.8rem',
                fontWeight: '500',
                fontFamily: 'IBM Plex Mono, monospace'
              }}>
                DISPONIBLE PARA PROYECTOS
              </span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: isTablet ? 'clamp(2.5rem, 5vw, 4.5rem)' : 'clamp(1.8rem, 8vw, 2.5rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              color: 'white',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              Construyo{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2BBEF8 0%, #0077FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                soluciones tecnológicas
              </span>
              {' '}que transforman negocios
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: isTablet ? '1.25rem' : '1.1rem',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2.5rem',
              maxWidth: isDesktop ? '600px' : '100%',
              margin: isDesktop ? '0 0 2.5rem 0' : '0 auto 2.5rem auto'
            }}>
              Desarrollador Full-Stack especializado en crear{' '}
              <span style={{ color: '#2BBEF8', fontWeight: '600' }}>APIs robustas</span>,{' '}
              <span style={{ color: '#2BBEF8', fontWeight: '600' }}>integraciones complejas</span> y{' '}
              <span style={{ color: '#2BBEF8', fontWeight: '600' }}>plataformas escalables</span>{' '}
              que impulsan el crecimiento empresarial.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem',
              justifyContent: isDesktop ? 'flex-start' : 'center'
            }}>
              <a
                href="#services"
                style={{
                  padding: isTablet ? '1rem 2rem' : '0.875rem 1.5rem',
                  fontSize: isTablet ? '1.1rem' : '1rem',
                  background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0, 119, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  fontWeight: '600',
                  position: 'relative',
                  overflow: 'hidden',
                  flex: isMobile ? '1' : 'none',
                  minWidth: isMobile ? '0' : '200px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)'
                  e.target.style.boxShadow = '0 20px 40px rgba(0, 119, 255, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 10px 30px rgba(0, 119, 255, 0.4)'
                }}
              >
                <Sparkles size={isTablet ? 20 : 18} />
                Ver Servicios
                <ArrowRight size={isTablet ? 20 : 18} />
              </a>

              <a
                href="#portfolio"
                style={{
                  padding: isTablet ? '1rem 2rem' : '0.875rem 1.5rem',
                  fontSize: isTablet ? '1.1rem' : '1rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  fontWeight: '600',
                  flex: isMobile ? '1' : 'none',
                  minWidth: isMobile ? '0' : '200px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)'
                  e.target.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                <Code2 size={isTablet ? 20 : 18} />
                Portafolio
              </a>
            </div>

            {/* Quick Contact */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '1rem' : '1.5rem',
              marginBottom: '3rem',
              justifyContent: isDesktop ? 'flex-start' : 'center'
            }}>
              <span style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: isTablet ? '0.9rem' : '0.8rem',
                fontFamily: 'IBM Plex Mono, monospace'
              }}>
                CONTACTO RÁPIDO:
              </span>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://wa.me/527461171449"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: isTablet ? '45px' : '40px',
                    height: isTablet ? '45px' : '40px',
                    background: 'rgba(37, 211, 102, 0.2)',
                    border: '1px solid rgba(37, 211, 102, 0.3)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#25D366',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(37, 211, 102, 0.3)'
                    e.target.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(37, 211, 102, 0.2)'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  <MessageCircle size={isTablet ? 20 : 18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/francisco-javier-mateo-hernandez-b97334113/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: isTablet ? '45px' : '40px',
                    height: isTablet ? '45px' : '40px',
                    background: 'rgba(0, 119, 181, 0.2)',
                    border: '1px solid rgba(0, 119, 181, 0.3)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0077B5',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 119, 181, 0.3)'
                    e.target.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0, 119, 181, 0.2)'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  <Linkedin size={isTablet ? 20 : 18} />
                </a>

                <a
                  href="mailto:tuz_fco@yahoo.com.mx"
                  style={{
                    width: isTablet ? '45px' : '40px',
                    height: isTablet ? '45px' : '40px',
                    background: 'rgba(234, 67, 53, 0.2)',
                    border: '1px solid rgba(234, 67, 53, 0.3)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#EA4335',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(234, 67, 53, 0.3)'
                    e.target.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(234, 67, 53, 0.2)'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  <Download size={isTablet ? 20 : 18} />
                </a>
              </div>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isTablet ? 'repeat(4, 1fr)' : isMobile ? 'repeat(2, 1fr)' : '1fr',
              gap: isTablet ? '1.5rem' : '1rem',
              marginTop: '2rem'
            }}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: 'center',
                    padding: isTablet ? '1.5rem 1rem' : '1rem 0.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.transform = 'translateY(-5px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ fontSize: isTablet ? '1.5rem' : '1.25rem', marginBottom: '0.5rem' }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: isTablet ? '2rem' : '1.5rem',
                    fontWeight: '700',
                    color: '#2BBEF8',
                    marginBottom: '0.5rem',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: isTablet ? '0.85rem' : '0.75rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: isDesktop ? 2 : 1
          }}>
            <div style={{ position: 'relative' }}>
              {/* Main Profile Container */}
              <div style={{
                width: isDesktop ? '450px' : isTablet ? '380px' : '320px',
                height: isDesktop ? '550px' : isTablet ? '480px' : '420px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'visible',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                margin: isDesktop ? '0' : '2rem 0'
              }}>
                {/* Profile Image */}
                <div style={{
                  width: isDesktop ? '220px' : isTablet ? '180px' : '160px',
                  height: isDesktop ? '220px' : isTablet ? '180px' : '160px',
                  backgroundImage: 'url(/assets/perfil.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '50%',
                  marginBottom: '2rem',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative'
                }}>
                  
                  {/* Pulse Ring */}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    right: '-10px',
                    bottom: '-10px',
                    border: '2px solid rgba(43, 190, 248, 0.5)',
                    borderRadius: '50%',
                    animation: 'pulse 2s ease-in-out infinite'
                  }} />
                </div>

                <div style={{ textAlign: 'center', color: 'white' }}>
                  <h3 style={{
                    fontSize: isTablet ? '1.5rem' : '1.25rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#2BBEF8'
                  }}>
                    Francisco Javier Mateo
                  </h3>
                  <p style={{
                    fontSize: isTablet ? '1rem' : '0.9rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '1rem'
                  }}>
                    Líder en Desarrollo de Software y Soluciones Tecnológicas
                  </p>
                </div>
              </div>

              {/* Floating Tech Icons - Only show on larger screens */}
              {isDesktop && [
                { icon: '⚛️', top: '5%', right: '-8%', delay: '0s' },
                { icon: '🚀', bottom: '25%', left: '-8%', delay: '1s' },
                { icon: '💻', top: '45%', right: '-12%', delay: '2s' },
                { icon: '🔧', bottom: '5%', right: '-3%', delay: '3s' }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    ...Object.fromEntries(Object.entries(item).filter(([key]) => ['top', 'bottom', 'left', 'right'].includes(key))),
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    animation: `float 4s ease-in-out infinite ${item.delay}`,
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Only show on desktop */}
      {isDesktop && (
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(255, 255, 255, 0.6)',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          <span style={{
            fontSize: '0.8rem',
            fontFamily: 'IBM Plex Mono, monospace',
            letterSpacing: '0.1em'
          }}>
            SCROLL
          </span>
          <div style={{
            width: '2px',
            height: '30px',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6), transparent)',
            borderRadius: '1px'
          }} />
        </div>
      )}
    </section>
  )
}

export default Hero