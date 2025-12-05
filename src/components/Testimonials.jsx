import React, { useState, useEffect } from 'react'
import { Star, Quote, Users, ArrowRight } from 'lucide-react'

const Testimonials = () => {
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
  const testimonials = [
    {
      text: "Trabajo impecable, rápido y confiable. Francisco entregó exactamente lo que necesitábamos y en el tiempo acordado.",
      author: "Cliente Confidencial",
      role: "Director de Tecnología",
      company: "Empresa de Servicios Financieros",
      rating: 5
    },
    {
      text: "Profesional y exacto en lo que entrega. Su capacidad para entender nuestras necesidades y traducirlas en soluciones técnicas es excepcional.",
      author: "Usuario Anónimo",
      role: "Gerente de Operaciones",
      company: "Empresa de Logística",
      rating: 5
    },
    {
      text: "Excelente comunicación durante todo el proyecto. Siempre disponible para resolver dudas y hacer ajustes cuando fue necesario.",
      author: "Cliente Confidencial",
      role: "CEO",
      company: "Startup Tecnológica",
      rating: 5
    },
    {
      text: "La calidad del código y la documentación superó nuestras expectativas. Un verdadero profesional en su área.",
      author: "Usuario Anónimo",
      role: "CTO",
      company: "Empresa de E-commerce",
      rating: 5
    },
    {
      text: "Implementó una solución que transformó completamente nuestros procesos internos. ROI visible desde el primer mes.",
      author: "Cliente Confidencial",
      role: "Gerente General",
      company: "Empresa Manufacturera",
      rating: 5
    },
    {
      text: "Su enfoque en entender el negocio antes de proponer soluciones técnicas marca la diferencia. Altamente recomendado.",
      author: "Usuario Anónimo",
      role: "Director de Innovación",
      company: "Empresa de Consultoría",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" style={{
      padding: isTablet ? '8rem 0' : '6rem 0',
      background: '#FFFFFF',
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
            <Users size={20} />
            TESTIMONIOS DE CLIENTES
          </div>

          <h2 style={{
            fontSize: isTablet ? 'clamp(2.5rem, 4vw, 3.5rem)' : 'clamp(2rem, 6vw, 2.5rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#1D1D1F',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
          }}>
            Lo que dicen mis{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2BBEF8 0%, #0077FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              clientes
            </span>
          </h2>
          
          <p style={{
            fontSize: isTablet ? '1.25rem' : '1.1rem',
            lineHeight: '1.6',
            color: '#6E6E73',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            La satisfacción del cliente es mi prioridad. Estos testimonios reflejan 
            el compromiso con la calidad y los resultados que entrego en cada proyecto.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : isTablet ? 'repeat(2, 1fr)' : '1fr',
          gap: isTablet ? '2rem' : '1.5rem',
          marginBottom: isTablet ? '4rem' : '3rem'
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: isTablet ? '2rem' : '1.5rem',
                border: '1px solid #E5E5EA',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                height: 'fit-content'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)'
                e.target.style.background = '#F5F5F7'
                e.target.style.boxShadow = '0 14px 30px rgba(0, 0, 0, 0.06)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.background = '#FFFFFF'
                e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Quote Icon */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#F5F5F7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #E5E5EA'
                }}>
                  <Quote size={24} color="#0071E3" />
                </div>
              </div>

              {/* Rating */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.25rem',
                marginBottom: '1.5rem'
              }}>
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p style={{
                color: '#1D1D1F',
                textAlign: 'center',
                marginBottom: '2rem',
                lineHeight: '1.6',
                fontStyle: 'italic',
                fontSize: '1rem',
                minHeight: '4rem'
              }}>
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div style={{
                textAlign: 'center',
                borderTop: '1px solid #E5E5EA',
                paddingTop: '1.5rem'
              }}>
                <div style={{
                  fontWeight: '600',
                  color: '#1D1D1F',
                  marginBottom: '0.5rem',
                  fontSize: '1rem'
                }}>
                  {testimonial.author}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#0071E3',
                  marginBottom: '0.25rem',
                  fontWeight: '500'
                }}>
                  {testimonial.role}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#6E6E73'
                }}>
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          background: '#F5F5F7',
          borderRadius: '24px',
          padding: isTablet ? '3rem' : '2rem',
          border: '1px solid #E5E5EA',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
          marginBottom: isTablet ? '4rem' : '3rem',
          position: 'relative'
        }}>
          {/* Subtle accent line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, #0071E3, #2997FF)',
            borderRadius: '0 0 3px 3px'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : isTablet ? 'repeat(2, 1fr)' : '1fr',
            gap: isTablet ? '2rem' : '1.5rem',
            textAlign: 'center'
          }}>
            {[
              { number: '100%', label: 'Satisfacción del cliente', icon: '⭐' },
              { number: '50+', label: 'Proyectos entregados', icon: '💼' },
              { number: '5⭐', label: 'Calificación promedio', icon: '🏆' },
              { number: '24/7', label: 'Soporte disponible', icon: '🔧' }
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: isTablet ? '2rem 1rem' : '1.5rem 0.5rem',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E5E5EA',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#F5F5F7'
                  e.target.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#FFFFFF'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: isTablet ? '2.5rem' : '2rem',
                  fontWeight: '700',
                  color: '#0071E3',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: isTablet ? '0.9rem' : '0.8rem',
                  color: '#6E6E73',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #0A1A2F 0%, #1A2B42 100%)',
          borderRadius: '24px',
          padding: isTablet ? '3rem' : '2rem',
          textAlign: 'center',
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
              radial-gradient(circle at 25% 25%, rgba(43, 190, 248, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(0, 119, 255, 0.1) 0%, transparent 50%)
            `,
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
              <ArrowRight size={20} />
              ÚnETE AL EQUIPO GANADOR
            </div>

            <h3 style={{
              fontSize: isTablet ? 'clamp(1.75rem, 3vw, 2.5rem)' : 'clamp(1.5rem, 5vw, 2rem)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              ¿Listo para ser el próximo cliente satisfecho?
            </h3>
            
            <p style={{
              fontSize: isTablet ? '1.1rem' : '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto',
              lineHeight: '1.6'
            }}>
              Únete a la lista de clientes que han transformado sus negocios con soluciones 
              tecnológicas de calidad. Conversemos sobre tu proyecto.
            </p>
            
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: isTablet ? '1rem 2rem' : '0.875rem 1.75rem',
                fontSize: isTablet ? '1.1rem' : '1rem',
                background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '15px',
                fontWeight: '600',
                boxShadow: '0 10px 30px rgba(0, 119, 255, 0.4)',
                transition: 'all 0.3s ease'
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
              <ArrowRight size={20} />
              Iniciar mi proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials