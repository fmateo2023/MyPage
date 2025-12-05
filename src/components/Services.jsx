import React, { useState } from 'react'
import { 
  Code, 
  Database, 
  Globe, 
  Bot, 
  Server, 
  FileText,
  ArrowRight,
  Zap,
  Layers,
  Shield,
  Smartphone,
  Cloud
} from 'lucide-react'

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo de Software a la Medida",
      description: "Aplicaciones web, sistemas administrativos y plataformas digitales diseñadas específicamente para tu negocio.",
      features: ["Apps web modernas", "Sistemas de gestión", "Plataformas escalables", "Arquitectura robusta"],
      color: "#0077FF",
      gradient: "linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)"
    },
    {
      id: 2,
      icon: <Database className="w-8 h-8" />,
      title: "Integraciones y APIs",
      description: "Conecta tus sistemas existentes y automatiza procesos para mejorar la eficiencia operacional.",
      features: ["APIs RESTful", "Integraciones de terceros", "Automatización de procesos", "Sincronización de datos"],
      color: "#2BBEF8",
      gradient: "linear-gradient(135deg, #2BBEF8 0%, #0077FF 100%)"
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8" />,
      title: "Sitios Web y E-commerce",
      description: "Sitios web profesionales y tiendas en línea optimizadas para conversión y experiencia de usuario.",
      features: ["Diseño responsivo", "SEO optimizado", "Pasarelas de pago", "Panel administrativo"],
      color: "#0077FF",
      gradient: "linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)"
    },
    {
      id: 4,
      icon: <Bot className="w-8 h-8" />,
      title: "Chatbots y Automatización",
      description: "Implementación de chatbots inteligentes y sistemas de automatización para mejorar la atención al cliente.",
      features: ["Chatbots personalizados", "Automatización de tareas", "Integración con CRM", "Análisis de conversaciones"],
      color: "#2BBEF8",
      gradient: "linear-gradient(135deg, #2BBEF8 0%, #0077FF 100%)"
    },
    {
      id: 5,
      icon: <Server className="w-8 h-8" />,
      title: "Infraestructura y Soporte",
      description: "Configuración de servidores, mantenimiento de sistemas y soporte técnico continuo.",
      features: ["Configuración de servidores", "Mantenimiento preventivo", "Soporte 24/7", "Monitoreo de sistemas"],
      color: "#0077FF",
      gradient: "linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)"
    },
    {
      id: 6,
      icon: <FileText className="w-8 h-8" />,
      title: "Periciales Técnicas",
      description: "Análisis profesional de sistemas, auditorías de código y documentación técnica especializada.",
      features: ["Auditorías de código", "Análisis de seguridad", "Documentación técnica", "Peritajes legales"],
      color: "#2BBEF8",
      gradient: "linear-gradient(135deg, #2BBEF8 0%, #0077FF 100%)"
    }
  ]

  const additionalServices = [
    { icon: <Layers className="w-6 h-6" />, title: "Arquitectura de Software", description: "Diseño de sistemas escalables" },
    { icon: <Shield className="w-6 h-6" />, title: "Seguridad", description: "Implementación de medidas de seguridad" },
    { icon: <Smartphone className="w-6 h-6" />, title: "Apps Móviles", description: "Desarrollo multiplataforma" },
    { icon: <Cloud className="w-6 h-6" />, title: "Cloud Computing", description: "Migración y optimización en la nube" }
  ]

  return (
    <section id="services" style={{
      padding: '8rem 0',
      background: '#F5F5F7',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
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
            <Zap className="w-5 h-5" />
            SERVICIOS PROFESIONALES
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)'
          }}>
            Servicios que{' '}
            <span style={{
              background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              impulsan tu negocio
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            color: '#6E6E73',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Ofrezco soluciones tecnológicas completas, desde el desarrollo inicial hasta 
            el soporte continuo, adaptándome a las necesidades específicas de cada proyecto.
          </p>
        </div>

        {/* Main Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {services.map((service, index) => (
            <div
              key={service.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: '1px solid #E5E5EA',
                boxShadow: hoveredService === service.id 
                  ? '0 14px 30px rgba(0, 0, 0, 0.06)' 
                  : '0 8px 20px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredService === service.id ? 'translateY(-8px)' : 'translateY(0)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Top Border */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: service.gradient,
                opacity: hoveredService === service.id ? 1 : 0,
                transition: 'all 0.3s ease'
              }} />

              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: hoveredService === service.id 
                    ? service.gradient 
                    : `${service.color}15`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: hoveredService === service.id ? 'white' : service.color,
                  transition: 'all 0.3s ease',
                  flexShrink: 0
                }}>
                  {service.icon}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    lineHeight: '1.3'
                  }}>
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p style={{
                color: '#6E6E73',
                lineHeight: '1.6',
                marginBottom: '2rem',
                fontSize: '1rem'
              }}>
                {service.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em'
                }}>
                  INCLUYE:
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: service.color,
                        borderRadius: '50%',
                        flexShrink: 0
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/527461171449?text=Hola%20Francisco,%20me%20interesa%20solicitar%20una%20cotización%20para%20el%20servicio%20de%20${encodeURIComponent(service.title)}.%20¿Podrías%20proporcionarme%20más%20información%20y%20un%20presupuesto?`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: hoveredService === service.id 
                    ? service.gradient 
                    : 'transparent',
                  color: hoveredService === service.id ? 'white' : service.color,
                  border: `2px solid ${service.color}`,
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                Solicitar cotización
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '3rem 2rem',
          marginBottom: '4rem',
          border: '1px solid #E5E5EA',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              fontFamily: 'var(--font-primary)'
            }}>
              Servicios Adicionales
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem'
            }}>
              Complementa tu proyecto con estos servicios especializados
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {additionalServices.map((service, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid #E5E5EA',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-4px)'
                  e.target.style.boxShadow = '0 14px 30px rgba(0, 0, 0, 0.06)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(43, 190, 248, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2BBEF8'
                  }}>
                    {service.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#1D1D1F',
                      marginBottom: '0.25rem'
                    }}>
                      {service.title}
                    </h4>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#3A3A3C',
                      margin: 0
                    }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0A1A2F 0%, #1A2B42 100%)',
          borderRadius: '2rem',
          padding: '3rem 2rem',
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
              <Zap className="w-5 h-5" />
              ¿TIENES UN PROYECTO EN MENTE?
            </div>

            <h3 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              ¿Tienes un proyecto en mente?
            </h3>
            
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}>
              Conversemos sobre cómo puedo ayudarte a transformar tu idea en una solución 
              tecnológica que genere resultados reales para tu negocio.
            </p>
            
            <a
              href="https://wa.me/527461171449?text=Hola%20Francisco,%20he%20revisado%20tus%20servicios%20profesionales%20y%20me%20gustaría%20solicitar%20una%20cotización%20personalizada%20para%20mi%20proyecto.%20¿Podrías%20ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
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
              <ArrowRight className="w-5 h-5" />
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services