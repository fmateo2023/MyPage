import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle,
  ExternalLink,
  CheckCircle,
  XCircle,
  TrendingUp,
  Users,
  Star,
  Smartphone,
  ChevronUp
} from 'lucide-react'

const BlogArticle = ({ onBack }) => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToContact = () => {
    onBack()
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 50%, #F5F5F7 100%)',
        minHeight: '100vh',
        paddingTop: '120px'
      }}
    >
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '0 clamp(0.75rem, 5vw, 2rem)'
      }}>
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #E5E5EA',
            borderRadius: '12px',
            padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(0.75rem, 3vw, 1rem)',
            color: '#0071E3',
            fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
            fontWeight: '500',
            cursor: 'pointer',
            marginBottom: '2rem',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0, 113, 227, 0.1)'
            e.target.style.transform = 'translateX(-4px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.9)'
            e.target.style.transform = 'translateX(0)'
          }}
        >
          <ArrowLeft size={16} />
          Volver al blog
        </motion.button>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
            color: 'white',
            padding: 'clamp(0.4rem, 2vw, 0.5rem) clamp(0.75rem, 3vw, 1rem)',
            borderRadius: '50px',
            fontSize: 'clamp(0.7rem, 2.2vw, 0.8rem)',
            fontWeight: '600',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 12px rgba(0, 119, 255, 0.3)'
          }}>
            <MapPin size={14} />
            Marketing Digital Local
          </div>

          <h1 style={{
            fontSize: 'clamp(1.4rem, 6vw, 2.5rem)',
            fontWeight: '700',
            color: '#1D1D1F',
            lineHeight: '1.3',
            marginBottom: '1.5rem',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
          }}>
            Cómo Aumentar las Reservas en Papantla y la Región Gracias a una Buena Presencia Digital 🌴📱
          </h1>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(0.5rem, 2.5vw, 1rem)',
            alignItems: 'center',
            color: '#6E6E73',
            fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
            marginBottom: '2rem'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Calendar size={16} />
              17 de Diciembre, 2025
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Clock size={16} />
              7 min de lectura
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <MapPin size={16} />
              Papantla, Veracruz
            </span>
          </div>

          <p style={{
            fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
            color: '#3A3A3C',
            lineHeight: '1.6',
            fontStyle: 'italic',
            padding: 'clamp(1rem, 4vw, 1.5rem)',
            background: 'rgba(0, 119, 255, 0.05)',
            borderLeft: '4px solid #0077FF',
            borderRadius: '0 12px 12px 0'
          }}>
            ¿Te ha pasado que ves tu negocio vacío entre semana y piensas: <strong>"seguro no es temporada"</strong>? 🤔
            <br /><br />
            Déjame contarte algo: muchas veces <strong>sí hay clientes</strong>, pero <strong>no te están encontrando</strong>.
          </p>
        </motion.header>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '1rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop&crop=center"
            alt="Hotel boutique en Papantla, Veracruz"
            style={{
              width: '100%',
              height: 'clamp(160px, 35vw, 300px)',
              objectFit: 'cover'
            }}
          />
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            padding: 'clamp(1rem, 5vw, 2.5rem)',
            border: '1px solid #E5E5EA',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.05)',
            marginBottom: '1rem'
          }}
        >
          {/* Story Section */}
          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.2rem, 4.5vw, 1.5rem)',
              fontWeight: '600',
              color: '#1D1D1F',
              marginTop: '0',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              lineHeight: '1.4'
            }}>
              <Users size={24} color="#0077FF" />
              Una historia muy común en Papantla…
            </h2>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1.5rem' }}>
              Don José tiene un pequeño hotel cerca del centro de Papantla. Limpio, bien ubicado y con precios justos. 
              Tiene Facebook, sube fotos de vez en cuando y responde mensajes cuando puede.
            </p>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1.5rem' }}>
              Aun así, las reservaciones no llegan como antes.
            </p>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1.5rem' }}>
              Mientras tanto, un hotel más pequeño, pero con <strong>sitio web y presencia digital</strong>, 
              aparece en Google cuando alguien busca:
            </p>
            
            <div style={{
              background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)',
              padding: 'clamp(1rem, 4vw, 1.5rem)',
              borderRadius: '12px',
              borderLeft: '4px solid #0077FF',
              marginBottom: '1.5rem'
            }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', color: '#0A1A2F' }}>
                  💭 <em>"Hotel en Papantla"</em>
                </li>
                <li style={{ marginBottom: '0.5rem', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', color: '#0A1A2F' }}>
                  💭 <em>"Dónde hospedarse cerca del Tajín"</em>
                </li>
                <li style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', color: '#0A1A2F' }}>
                  💭 <em>"Hotel económico en Papantla"</em>
                </li>
              </ul>
            </div>
            
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              fontWeight: '600',
              color: '#0077FF',
              textAlign: 'center',
              padding: 'clamp(0.75rem, 3vw, 1rem)',
              background: 'rgba(0, 119, 255, 0.1)',
              borderRadius: '12px'
            }}>
              👉 Adivina a quién llaman primero.
            </p>
          </section>

          {/* Problem Section */}
          <section style={{ marginBottom: '1.5rem' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1rem',
              marginTop: '-0.5rem'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=300&fit=crop&crop=center"
                alt="Turista buscando hotel en smartphone"
                style={{
                  width: '100%',
                  height: 'clamp(140px, 25vw, 200px)',
                  objectFit: 'cover'
                }}
              />
            </div>

            <h2 style={{
              fontSize: 'clamp(1.2rem, 4.5vw, 1.5rem)',
              fontWeight: '600',
              color: '#1D1D1F',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              lineHeight: '1.4'
            }}>
              <Smartphone size={24} color="#0077FF" />
              El problema no es tu negocio… es que no estás visible
            </h2>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1.5rem' }}>
              Hoy en día, turistas y visitantes <strong>no preguntan en la calle</strong>, preguntan en:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
              gap: 'clamp(0.5rem, 3vw, 1rem)',
              marginBottom: '1rem'
            }}>
              {['Google', 'Maps', 'Redes sociales'].map((platform, index) => (
                <div key={index} style={{
                  background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
                  color: 'white',
                  padding: 'clamp(0.5rem, 3vw, 1rem)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 'clamp(0.75rem, 2.8vw, 1rem)',
                  boxShadow: '0 4px 12px rgba(0, 119, 255, 0.3)'
                }}>
                  {platform}
                </div>
              ))}
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #FFF8E1 0%, #FFF3C4 100%)',
              border: '1px solid #FFE082',
              borderRadius: '12px',
              padding: 'clamp(1rem, 3vw, 1.5rem)',
              marginBottom: '1rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: 'linear-gradient(180deg, #FF9800, #FFC107)'
              }} />
              <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', color: '#E65100', margin: 0, fontWeight: '500', paddingLeft: '1rem' }}>
                Si tu negocio <strong>no aparece ahí de forma clara</strong>, simplemente <strong>no existe para ellos</strong>.
              </p>
            </div>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C' }}>
              Y no, no necesitas gastar una fortuna.
            </p>
          </section>

          {/* Customer Story Section */}
          <section style={{ marginBottom: '1.5rem' }}>
            <div style={{
              background: 'rgba(248, 250, 252, 0.8)',
              borderRadius: '16px',
              padding: 'clamp(1rem, 4vw, 2rem)',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)',
                fontWeight: '600',
                color: '#1D1D1F',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.2rem' }}>💬</span>
                La realidad de muchos negocios en Papantla
              </h2>
              
              <p style={{ fontSize: 'clamp(0.9rem, 2.8vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1rem' }}>
                Doña María tiene un restaurante familiar en el centro. <strong>"Tengo Facebook"</strong>, me dice, <strong>"pero los clientes no llegan como antes"</strong>.
              </p>
              
              <p style={{ fontSize: 'clamp(0.9rem, 2.8vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1rem' }}>
                Le pregunto: <em>"¿Qué pasa cuando alguien busca 'restaurante en Papantla' en Google?"</em> Se queda pensando. No lo había considerado.
              </p>
              
              <div style={{
                display: 'grid',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                {[
                  { icon: '🔍', text: 'Su negocio no aparece en las primeras búsquedas de Google' },
                  { icon: '📱', text: 'Los turistas no encuentran su menú, precios o ubicación fácilmente' },
                  { icon: '💬', text: 'Los mensajes de Facebook se pierden entre notificaciones' },
                  { icon: '⏰', text: 'No puede atender consultas las 24 horas' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                    color: '#4A5568',
                    lineHeight: '1.6'
                  }}>
                    <span style={{ fontSize: '1rem', flexShrink: 0 }}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              
              <p style={{
                fontSize: 'clamp(0.9rem, 2.8vw, 1.1rem)',
                fontWeight: '500',
                color: '#2D3748',
                fontStyle: 'italic',
                textAlign: 'center',
                marginTop: '1rem',
                padding: '1rem',
                background: 'rgba(0, 119, 255, 0.05)',
                borderRadius: '8px'
              }}>
                Mientras tanto, el restaurante de la esquina (más pequeño) tiene sitio web y aparece primero en Google. <strong>¿Adivina cuál está más lleno?</strong>
              </p>
            </div>
          </section>

          {/* Local Insights Section */}
          <section style={{ marginBottom: '1.5rem' }}>
            <div style={{
              background: 'rgba(248, 250, 252, 0.8)',
              borderRadius: '16px',
              padding: 'clamp(1rem, 4vw, 2rem)',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)',
                fontWeight: '600',
                color: '#1D1D1F',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🏘️</span>
                Lo que he visto en la región del Totonacapan
              </h2>
              
              <p style={{ fontSize: 'clamp(0.9rem, 2.8vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1rem' }}>
                Después de trabajar con varios negocios locales, he notado tres patrones que se repiten:
              </p>
              
              <div style={{
                display: 'grid',
                gap: '1rem'
              }}>
                {[
                  {
                    icon: '🔍',
                    title: 'El turista busca, pero no te encuentra',
                    story: 'Un visitante llega a Papantla y busca "dónde comer cerca del Tajín". Tu restaurante está a 5 minutos, pero no apareces en Google. Se va a otro lado.'
                  },
                  {
                    icon: '📱',
                    title: 'La información está dispersa',
                    story: 'Tienes Facebook, pero el menú está desactualizado. Los precios están en una foto borrosa. El turista no encuentra tu WhatsApp. Prefiere ir donde todo esté claro.'
                  },
                  {
                    icon: '⏰',
                    title: 'Solo vendes cuando estás presente',
                    story: 'Son las 10 PM. Una familia quiere reservar para mañana, pero tu Facebook no responde. El hotel de al lado tiene un sitio web que funciona 24/7. ¿Quién crees que gana la reserva?'
                  }
                ].map((insight, index) => (
                  <div key={index} style={{
                    padding: '1rem',
                    borderLeft: '3px solid #0077FF',
                    background: 'rgba(255, 255, 255, 0.6)'
                  }}>
                    <h3 style={{
                      fontSize: 'clamp(0.95rem, 2.8vw, 1.1rem)',
                      fontWeight: '600',
                      color: '#2D3748',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span style={{ fontSize: '1rem' }}>{insight.icon}</span>
                      {insight.title}
                    </h3>
                    <p style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', color: '#4A5568', margin: 0, lineHeight: '1.6' }}>
                      {insight.story}
                    </p>
                  </div>
                ))}
              </div>
              
              <p style={{
                fontSize: 'clamp(0.9rem, 2.8vw, 1.1rem)',
                fontWeight: '500',
                color: '#2D3748',
                textAlign: 'center',
                marginTop: '1rem',
                padding: '1rem',
                background: 'rgba(0, 119, 255, 0.05)',
                borderRadius: '8px'
              }}>
                <strong>La buena noticia:</strong> estos problemas tienen solución, y no necesitas gastar una fortuna.
              </p>
            </div>
          </section>

          {/* Solution Section */}
          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.2rem, 4.5vw, 1.5rem)',
              fontWeight: '600',
              color: '#1D1D1F',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              lineHeight: '1.4'
            }}>
              <CheckCircle size={24} color="#28A745" />
              Entonces… ¿qué sí necesitas? (Producto Mínimo Viable)
            </h2>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1.5rem' }}>
              Aquí entra el <strong>Producto Mínimo Viable (PMV)</strong>.
            </p>
            
            <div style={{
              background: 'linear-gradient(135deg, #E8F5E8 0%, #D4F4DD 100%)',
              padding: 'clamp(1rem, 3vw, 1.5rem)',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              border: '1px solid #A5D6A7',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: 'linear-gradient(180deg, #4CAF50, #66BB6A)'
              }} />
              <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', fontWeight: '600', color: '#2E7D32', margin: 0, paddingLeft: '1rem' }}>
                💡 <strong>No necesitas una página web de $10,000 MXN</strong>.
              </p>
            </div>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '2rem' }}>
              Necesitas un <strong>Kit de Presencia Digital Básica</strong>, que incluya:
            </p>
            
            <div style={{ display: 'grid', gap: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
              {[
                {
                  title: '1. Un sitio web sencillo y claro',
                  items: ['Quién eres', 'Qué ofreces', 'Precios o servicios', 'Ubicación', 'Botón de WhatsApp'],
                  description: 'Nada complicado. Que venda por ti las 24 horas.'
                },
                {
                  title: '2. Presencia en Google (Maps y búsquedas)',
                  items: [],
                  description: 'Para que cuando alguien busque "restaurante en Papantla" o "hotel en la región del Totonacapan", aparezcas tú.'
                },
                {
                  title: '3. Conexión con redes sociales',
                  items: [],
                  description: 'Tu Facebook e Instagram no desaparecen. Se integran.'
                }
              ].map((solution, index) => (
                <div key={index} style={{
                  background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, rgba(129, 199, 132, 0.05) 100%)',
                  border: '1px solid rgba(76, 175, 80, 0.2)',
                  borderRadius: '12px',
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #4CAF50, #66BB6A)'
                  }} />
                  <h3 style={{
                    fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
                    fontWeight: '600',
                    color: '#2E7D32',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    paddingLeft: '1rem'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #4CAF50, #66BB6A)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ color: 'white', fontSize: '0.7rem', fontWeight: 'bold' }}>✓</span>
                    </div>
                    {solution.title}
                  </h3>
                  
                  {solution.items.length > 0 && (
                    <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem' }}>
                      {solution.items.map((item, itemIndex) => (
                        <li key={itemIndex} style={{ marginBottom: '0.5rem', color: '#3A3A3C', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <p style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', color: '#3A3A3C', margin: 0, fontStyle: 'italic', paddingLeft: '1rem' }}>
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile Search Image */}
          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '1rem',
            marginTop: '-0.5rem'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=300&fit=crop&crop=center"
              alt="Persona buscando hoteles en Google Maps desde su celular"
              style={{
                width: '100%',
                height: 'clamp(140px, 25vw, 200px)',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Benefits */}
          <section style={{ marginBottom: '1.5rem' }}>
            <h2 style={{
              fontSize: 'clamp(1.2rem, 4.5vw, 1.5rem)',
              fontWeight: '600',
              color: '#1D1D1F',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              lineHeight: '1.4'
            }}>
              <TrendingUp size={24} color="#28A745" />
              Lo que puede pasar si mejoras tu presencia digital 🚀
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
              gap: 'clamp(0.5rem, 3vw, 1rem)',
              marginBottom: '1rem'
            }}>
              {[
                'Más llamadas',
                'Más mensajes',
                'Más reservaciones',
                'Más confianza',
                'Más ingresos'
              ].map((benefit, index) => (
                <div key={index} style={{
                  background: 'linear-gradient(135deg, #28A745 0%, #20C997 100%)',
                  color: 'white',
                  padding: 'clamp(0.5rem, 3vw, 1rem)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: 'clamp(0.75rem, 2.8vw, 1rem)',
                  boxShadow: '0 4px 12px rgba(40, 167, 69, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <Star size={16} />
                  {benefit}
                </div>
              ))}
            </div>
            
            <p style={{
              fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
              lineHeight: '1.7',
              color: '#3A3A3C',
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              Y todo sin contratar recepcionistas extra ni pagar publicidad costosa.
            </p>
          </section>

          {/* Success Image */}
          <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '1rem',
            marginTop: '-0.5rem'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=300&fit=crop&crop=center"
              alt="Hotel exitoso con clientes satisfechos"
              style={{
                width: '100%',
                height: 'clamp(140px, 25vw, 200px)',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* CTA Section */}
          <section style={{
            background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
            color: 'white',
            padding: 'clamp(1.5rem, 5vw, 3rem)',
            borderRadius: '16px',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.3rem, 4vw, 1.75rem)',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              ¿Y si alguien te ayudara a hacerlo fácil?
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              lineHeight: '1.6',
              marginBottom: '2rem',
              opacity: 0.95,
              color: 'white'
            }}>
              Si llegaste hasta aquí, seguramente <strong>quieres más clientes</strong>, no más complicaciones.
            </p>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: 'clamp(1rem, 4vw, 2rem)',
              marginBottom: '2rem',
              color: 'white'
            }}>
              <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.1rem)', marginBottom: '1rem', fontWeight: '600', color: 'white' }}>
                👉 Yo ayudo a negocios de Papantla y la región a:
              </p>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {[
                  'Crear su presencia digital',
                  'Tener un sitio web funcional y económico',
                  'Atraer más reservaciones'
                ].map((service, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                  }}>
                    <CheckCircle size={20} />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
                gap: '1rem',
                width: '100%',
                maxWidth: '400px'
              }}>
              <button
                onClick={scrollToContact}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: '#0077FF',
                  border: 'none',
                  borderRadius: '12px',
                  padding: 'clamp(0.75rem, 2.5vw, 1rem) clamp(1rem, 4vw, 2rem)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              >
                <MessageCircle size={20} />
                Solicitar Asesoría Gratuita
              </button>
              
              <a
                href="https://wa.me/527461171449?text=Hola%20Francisco,%20vi%20tu%20artículo%20sobre%20presencia%20digital%20para%20hoteles%20en%20Papantla%20y%20me%20interesa%20saber%20más"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '12px',
                  padding: 'clamp(0.75rem, 2.5vw, 1rem) clamp(1rem, 4vw, 2rem)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backdropFilter: 'blur(10px)'
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
                <Phone size={20} />
                WhatsApp Directo
              </a>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section style={{
            background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            borderRadius: '16px',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)',
              fontWeight: '600',
              color: '#0A1A2F',
              marginBottom: '1rem'
            }}>
              Papantla tiene turismo, cultura y potencial.
            </h3>
            <p style={{
              fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
              color: '#3A3A3C',
              marginBottom: '1.5rem'
            }}>
              Solo falta que tu negocio esté donde los clientes ya están buscando.
            </p>
            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
              fontWeight: '600',
              color: '#0077FF',
              margin: 0
            }}>
              ✨ La presencia digital ya no es un lujo, es una necesidad.
            </p>
          </section>
        </motion.article>

        {/* Related Articles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            padding: 'clamp(1rem, 4vw, 2rem)',
            border: '1px solid #E5E5EA',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.05)',
            marginBottom: '1rem'
          }}
        >
          <h3 style={{
            fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)',
            fontWeight: '600',
            color: '#1D1D1F',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Artículos Relacionados
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(0.5rem, 3vw, 1rem)'
          }}>
            {[
              {
                title: 'SEO Local para Negocios en Veracruz',
                description: 'Cómo aparecer primero en Google Maps'
              },
              {
                title: 'Chatbots para Hoteles Pequeños',
                description: 'Automatiza reservas sin complicaciones'
              },
              {
                title: 'Redes Sociales para Turismo Local',
                description: 'Estrategias que realmente funcionan'
              }
            ].map((article, index) => (
              <div key={index} style={{
                padding: 'clamp(1rem, 3vw, 1.5rem)',
                background: 'rgba(0, 119, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(0, 119, 255, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 119, 255, 0.1)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 119, 255, 0.05)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
              >
                <h4 style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                  fontWeight: '600',
                  color: '#0077FF',
                  marginBottom: '0.5rem'
                }}>
                  {article.title}
                </h4>
                <p style={{
                  fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                  color: '#6E6E73',
                  margin: 0
                }}>
                  {article.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem',
                  color: '#0077FF',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  fontWeight: '500'
                }}>
                  <span>Próximamente</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(0, 119, 255, 0.4)',
            zIndex: 1000,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)'
            e.target.style.boxShadow = '0 12px 35px rgba(0, 119, 255, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 8px 25px rgba(0, 119, 255, 0.4)'
          }}
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </motion.div>
  )
}

export default BlogArticle