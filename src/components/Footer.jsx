import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  MessageCircle,
  ArrowRight,
  Heart
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Experiencia', href: '/experiencia' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' }
  ]

  const services = [
    'Desarrollo Web Full-Stack',
    'APIs y Microservicios',
    'Integración de Sistemas',
    'Consultoría Tecnológica',
    'Automatización de Procesos',
    'Desarrollo de Plataformas'
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/francisco-javier-mateo-hernandez-b97334113/',
      icon: Linkedin,
      color: '#0077B5'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/527461171449',
      icon: MessageCircle,
      color: '#25D366'
    },
    {
      name: 'Email',
      href: 'mailto:tuz_fco@yahoo.com.mx',
      icon: Mail,
      color: '#EA4335'
    }
  ]

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1D1D1F 0%, #3A3A3C 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
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

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          padding: '4rem 0 2rem'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(90deg, #0071E3, #2997FF)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Code size={24} color="white" />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.25rem'
                }}>
                  Francisco Mateo
                </h3>
                <p style={{
                  color: '#0071E3',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, monospace'
                }}>
                  Líder del área de TI
                </p>
              </div>
            </div>

            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Transformo ideas en soluciones tecnológicas robustas y escalables. 
              Especializado en desarrollo web full-stack y arquitecturas modernas.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="mailto:tuz_fco@yahoo.com.mx"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Mail size={18} />
                tuz_fco@yahoo.com.mx
              </a>

              <a
                href="tel:7461171449"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <Phone size={18} />
                +52 746 117 1449
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                <MapPin size={18} />
                Poza Rica, Veracruz, México
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Enlaces Rápidos
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <ArrowRight size={14} />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Servicios
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{
                    width: '4px',
                    height: '4px',
                    background: '#0071E3',
                    borderRadius: '50%'
                  }} />
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Conectemos
            </h4>
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
            </p>

            <a
              href="https://wa.me/527461171449?text=Hola%20Francisco,%20me%20gustaría%20hablar%20contigo%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                background: '#0071E3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                marginBottom: '2rem',
                boxShadow: '0 8px 20px rgba(0, 113, 227, 0.25)'
              }}
            >
              <MessageCircle size={20} />
              Iniciar Conversación
            </a>

            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255, 255, 255, 0.8)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '2rem 0',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            © {currentYear} Francisco Javier Mateo Hernández. Hecho con{' '}
            <Heart size={16} style={{ color: '#ef4444' }} />
            {' '}en México
          </p>
          
          <div style={{
            display: 'flex',
            gap: '2rem',
            fontSize: '0.9rem'
          }}>
            <a
              href="/privacy"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
            >
              Privacidad
            </a>
            <a
              href="/terms"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer