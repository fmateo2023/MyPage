import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedNavbar from './AnimatedNavbar'
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
  ChevronUp,
  Share2,
  Mail,
  Facebook,
  Linkedin,
  Copy,
  Check,
  ShoppingCart,
  CreditCard,
  AlertTriangle,
  DollarSign
} from 'lucide-react'

const BlogArticleComercio = ({ onBack }) => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [copied, setCopied] = useState(false)

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

  const shareUrl = window.location.origin + window.location.pathname + '#articulo-nuevo-comercio'
  const shareTitle = 'El Nuevo Comercio en el Norte de Veracruz: ¿Tu negocio es profesional o solo "atiendes por mensaje"?'
  const shareText = 'Descubre por qué tu negocio necesita dar el salto de WhatsApp a un sistema profesional'

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')
  }

  const shareByEmail = () => {
    window.open(`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank')
  }

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank')
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error copying link:', err)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <AnimatedNavbar />
      <motion.div
        id="articulo-nuevo-comercio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 50%, #F5F5F7 100%)',
          paddingTop: '100px',
          paddingBottom: '2rem'
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
          onClick={() => {
            window.location.hash = '#blog'
            onBack()
          }}
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
          style={{ marginBottom: '0.75rem' }}
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
            marginBottom: '0.75rem',
            boxShadow: '0 4px 12px rgba(0, 119, 255, 0.3)'
          }}>
            <ShoppingCart size={14} />
            Transformación Digital Comercial
          </div>

          <h1 style={{
            fontSize: 'clamp(1.4rem, 6vw, 2.5rem)',
            fontWeight: '700',
            color: '#1D1D1F',
            lineHeight: '1.3',
            marginBottom: '0.75rem',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
          }}>
            ¿Dueño de negocio o esclavo del WhatsApp? Por qué el Norte de Veracruz está dejando de vender 'al ahí se va
          </h1>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(0.5rem, 2.5vw, 1rem)',
            alignItems: 'center',
            color: '#6E6E73',
            fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
            marginBottom: '1rem'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Calendar size={16} />
              24 de Diciembre, 2025
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Clock size={16} />
              9 min de lectura
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <MapPin size={16} />
              Poza Rica, Tuxpan, Papantla, zona norte de Veracruz
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
            borderRadius: '0 12px 12px 0',
            textAlign: 'justify'
          }}>
            Poza Rica, Tuxpan, Papantla y toda la zona norte de veracruz son lugares de gente trabajadora, de comerciantes que levantan la cortina antes de que salga el sol. 
            <br /><br />
            Pero hoy, en 2025, <strong>levantar la cortina física ya no es suficiente</strong>. 🌅
          </p>

          {/* Share Section */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '1rem',
            padding: 'clamp(1rem, 3vw, 1.5rem)',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '12px',
            border: '1px solid #E5E5EA'
          }}>
            <span style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              fontWeight: '600',
              color: '#6E6E73',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Share2 size={18} />
              Compartir:
            </span>
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={shareOnFacebook}
                style={{
                  background: '#1877F2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <Facebook size={16} />
              </button>
              <button
                onClick={shareOnLinkedIn}
                style={{
                  background: '#0A66C2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <Linkedin size={16} />
              </button>
              <button
                onClick={shareOnWhatsApp}
                style={{
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <MessageCircle size={16} />
              </button>
              <button
                onClick={shareByEmail}
                style={{
                  background: '#6B7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <Mail size={16} />
              </button>
              <button
                onClick={copyLink}
                style={{
                  background: copied ? '#10B981' : '#374151',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '0.75rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}
        >
          <img 
            src="https://www.lavu.com.mx/wp-content/uploads/2020/12/pos-evolucion-e1614049458169.png"
            alt="Comercio local moderno con tecnología"
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
            marginBottom: '-0.5rem'
          }}
        >
          {/* Introduction */}
          <section style={{ marginBottom: 'clamp(-3rem, -20vw, -18rem)', marginTop: 'clamp(1rem, -10vw, -15rem)' }}>
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.6', color: '#3A3A3C', textAlign: 'justify' }}>
              Si tu principal canal de ventas es un chat de WhatsApp lleno de mensajes sin leer, capturas de pantalla de transferencias que tienes que verificar manualmente y un cuaderno donde anotas el inventario (y que a veces se pierde), <strong>tienes un auto de carreras pero lo estás empujando con las manos</strong>. <span style={{ fontSize: '2.5em', lineHeight: '1', display: 'inline-block', verticalAlign: 'middle' }}>🏎️</span>
            </p>
          </section>

          {/* Don Beto Story */}
          <section style={{ marginBottom: 'clamp(1rem, -1vw, -5rem)' }}>
            <h2 style={{
              fontSize: 'clamp(1.2rem, 4.5vw, 1.5rem)',
              fontWeight: '600',
              color: '#1D1D1F',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              lineHeight: '1.4'
            }}>
              <Users size={24} color="#0077FF" />
              La Historia de "Don Beto" y el pedido que nunca llegó
            </h2>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.6', color: '#3A3A3C', marginBottom: '1rem', textAlign: 'justify' }}>
              Imagina a <strong>"Don Beto"</strong>, dueño de una refaccionaria muy conocida en la zona. Don Beto vende por WhatsApp. Un martes a las 2:00 PM, con el calor de 40 grados, recibe 20 mensajes a la vez. Entre el ruido y la operación, confirma un pedido de una pieza que creía tener en stock.
            </p>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.6', color: '#3A3A3C', marginBottom: '1rem', textAlign: 'justify' }}>
              El cliente transfiere, manda la captura, pero Don Beto no ve el mensaje hasta tres horas después. Cuando va al estante, <strong>la pieza se vendió en mostrador hace diez minutos</strong>.
            </p>
            
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
              <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', color: '#E65100', margin: 0, fontWeight: '600', paddingLeft: '1rem', textAlign: 'justify' }}>
                <strong>Resultado:</strong> Un cliente enojado en Facebook quemando su reputación, una devolución tediosa y la sensación de que el negocio lo está controlando a él, y no al revés.
              </p>
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
              ¿Te suena familiar? Esta es la realidad de vender "al ahí se va". 🤷♂️
            </p>
          </section>

          {/* Taquería Story */}
          <section style={{ marginBottom: 'clamp(1rem, -1vw, -0.5rem)' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: 'clamp(0.75rem, -0.5vw, -0.25rem)'
            }}>
              <img 
                src="https://www.viajabonito.mx/wp-content/uploads/2023/08/tacos-de-guisado-006.jpg"
                alt="Taquería local tradicional"
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
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.5rem',
              lineHeight: '1.4'
            }}>
              <AlertTriangle size={24} color="#FF6B35" />
              El caso de "Tacos El Buen Sabor": Perdiendo clientes sin saberlo
            </h2>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.6', color: '#3A3A3C', marginBottom: '0.75rem', textAlign: 'justify' }}>
              Doña Carmen tiene la mejor taquería de Poza Rica. Sus tacos de guisado son legendarios y siempre hay fila los fines de semana. Pero entre semana, el local se ve vacío.
            </p>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1.5rem', textAlign: 'justify' }}>
              <strong>"Es que ya no hay clientes como antes"</strong>, me dice. Pero cuando reviso, descubro algo interesante:
            </p>
            
            <div style={{
              display: 'grid',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              {[
                { 
                  icon: '💳', 
                  problem: 'Solo acepta efectivo', 
                  impact: 'Pierde 40% de clientes que solo traen tarjeta' 
                },
                { 
                  icon: '📍', 
                  problem: 'No aparece en Google Maps', 
                  impact: 'Los turistas y nuevos residentes no la encuentran' 
                },
                { 
                  icon: '📱', 
                  problem: 'No tiene menú digital', 
                  impact: 'La gente no sabe qué vende ni los precios' 
                },
                { 
                  icon: '🕐', 
                  problem: 'Horarios solo en un letrero', 
                  impact: 'Clientes llegan cuando está cerrada' 
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 107, 53, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 107, 53, 0.2)'
                }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h4 style={{ 
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
                      fontWeight: '600', 
                      color: '#FF6B35', 
                      margin: '0 0 0.5rem 0' 
                    }}>
                      {item.problem}
                    </h4>
                    <p style={{ 
                      fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)', 
                      color: '#4A5568', 
                      margin: 0, 
                      lineHeight: '1.5',
                      textAlign: 'justify'
                    }}>
                      {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #FFF0F0 0%, #FFE5E5 100%)',
              border: '1px solid #FFB3B3',
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
                background: 'linear-gradient(180deg, #FF6B35, #FF8A65)'
              }} />
              <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', color: '#D32F2F', margin: 0, fontWeight: '600', paddingLeft: '1rem', textAlign: 'justify' }}>
                <strong>La realidad:</strong> No es que no haya clientes. Es que los clientes no la están encontrando o no pueden pagarle como quieren.
              </p>
            </div>
          </section>

          {/* Comparison Table */}
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
              La Diferencia entre "Sobrevivir" y "Escalar"
            </h2>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1.5rem', textAlign: 'justify' }}>
              Vender por redes sociales es el primer paso, pero no es el destino. Aquí te muestro por qué tu negocio necesita dar el salto a un sistema profesional:
            </p>
            
            <div style={{
              background: 'rgba(248, 250, 252, 0.8)',
              borderRadius: '16px',
              padding: 'clamp(1rem, 4vw, 2rem)',
              border: '1px solid #E2E8F0'
            }}>
              {/* Mobile-first responsive comparison */}
              <div style={{
                display: window.innerWidth >= 768 ? 'grid' : 'block',
                gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr 1fr' : 'none',
                gap: window.innerWidth >= 768 ? '1rem' : '0'
              }}>
                {/* Desktop Header - only show on desktop */}
                {window.innerWidth >= 768 && (
                  <>
                    <div style={{ fontWeight: '600', color: '#2D3748', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
                      Característica
                    </div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#E53E3E', 
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                      textAlign: 'center'
                    }}>
                      Método "Tradicional"<br />(WhatsApp/Excel)
                    </div>
                    <div style={{ 
                      fontWeight: '600', 
                      color: '#38A169', 
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                      textAlign: 'center'
                    }}>
                      Método Profesional<br />(E-commerce + POS)
                    </div>
                  </>
                )}
                
                {/* Comparison Items */}
                {[
                  {
                    feature: 'Pagos',
                    traditional: '"Mándame el comprobante y deja reviso la banca".',
                    professional: 'Cobros automáticos con Stripe o Conekta 24/7.'
                  },
                  {
                    feature: 'Inventario',
                    traditional: '"Déjame ver si hay en la bodega".',
                    professional: 'Actualización en tiempo real. Si se vende en línea, se descuenta en tienda.'
                  },
                  {
                    feature: 'Confianza',
                    traditional: 'Un número de teléfono que puede o no contestar.',
                    professional: 'Una plataforma con certificado de seguridad y ticket automático.'
                  },
                  {
                    feature: 'Tu Tiempo',
                    traditional: 'Eres esclavo de contestar mensajes todo el día.',
                    professional: 'El sistema vende por ti mientras te enfocas en crecer.'
                  }
                ].map((row, index) => (
                  window.innerWidth >= 768 ? (
                    // Desktop Layout
                    <React.Fragment key={index}>
                      <div style={{
                        padding: '1rem',
                        background: 'rgba(255, 255, 255, 0.6)',
                        borderRadius: '8px',
                        fontWeight: '600',
                        color: '#2D3748',
                        fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)'
                      }}>
                        {row.feature}
                      </div>
                      <div style={{
                        padding: '1rem',
                        background: 'rgba(229, 62, 62, 0.05)',
                        borderRadius: '8px',
                        color: '#4A5568',
                        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                        lineHeight: '1.5',
                        textAlign: 'justify'
                      }}>
                        {row.traditional}
                      </div>
                      <div style={{
                        padding: '1rem',
                        background: 'rgba(56, 161, 105, 0.05)',
                        borderRadius: '8px',
                        color: '#4A5568',
                        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                        lineHeight: '1.5',
                        textAlign: 'justify'
                      }}>
                        {row.professional}
                      </div>
                    </React.Fragment>
                  ) : (
                    // Mobile Layout - Card Style
                    <div key={index} style={{
                      marginBottom: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      border: '1px solid rgba(0, 0, 0, 0.1)'
                    }}>
                      <h4 style={{
                        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                        fontWeight: '700',
                        color: '#2D3748',
                        marginBottom: '1rem',
                        textAlign: 'center'
                      }}>
                        {row.feature}
                      </h4>
                      
                      <div style={{
                        marginBottom: '1rem',
                        padding: '1rem',
                        background: 'rgba(229, 62, 62, 0.08)',
                        borderRadius: '8px',
                        borderLeft: '4px solid #E53E3E'
                      }}>
                        <div style={{
                          fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                          fontWeight: '600',
                          color: '#E53E3E',
                          marginBottom: '0.5rem'
                        }}>
                          😞 Método Tradicional
                        </div>
                        <p style={{
                          fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)',
                          color: '#4A5568',
                          margin: 0,
                          lineHeight: '1.5',
                          textAlign: 'justify'
                        }}>
                          {row.traditional}
                        </p>
                      </div>
                      
                      <div style={{
                        padding: '1rem',
                        background: 'rgba(56, 161, 105, 0.08)',
                        borderRadius: '8px',
                        borderLeft: '4px solid #38A169'
                      }}>
                        <div style={{
                          fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                          fontWeight: '600',
                          color: '#38A169',
                          marginBottom: '0.5rem'
                        }}>
                          ✅ Método Profesional
                        </div>
                        <p style={{
                          fontSize: 'clamp(0.85rem, 2.2vw, 0.95rem)',
                          color: '#4A5568',
                          margin: 0,
                          lineHeight: '1.5',
                          textAlign: 'justify'
                        }}>
                          {row.professional}
                        </p>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>

          {/* Technology Benefits */}
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
              <Smartphone size={24} color="#0077FF" />
              Evangelizando el Cambio: La tecnología no es un gasto, es tu mejor empleado
            </h2>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1.5rem', textAlign: 'justify' }}>
              Muchos comerciantes en el norte de Veracruz temen a la tecnología porque piensan que es <strong>"cara"</strong> o <strong>"difícil"</strong>. La realidad es que:
            </p>
            
            <div style={{
              display: 'grid',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              {[
                {
                  icon: '💸',
                  title: 'Es más caro perder clientes por mala atención',
                  description: 'Un cliente perdido puede representar $2,400-$3,000 MXN menos al mes sin contar que en nuestra zona, el "boca a boca" es ley. Un cliente insatisfecho evita que al menos 3 personas más te conozcan. Pérdida indirecta estimada: Otros $4,000 - $6,000 MXN que nunca llegaron a tu caja.', 
                },
                {
                  icon: '💳',
                  title: 'Las pasarelas de pago son más baratas que perder ventas',
                  description: 'Stripe/Clip/Mercado Pago entre otros te permiten aceptar tarjetas sin rentas mensuales costosas, solo por transacción'
                },
                {
                  icon: '☁️',
                  title: 'Un POS en la nube te da libertad',
                  description: 'Puedes ver cuánto vendiste desde tu celular, aunque estés comiendo unos zacahuiles en el mercado'
                }
              ].map((benefit, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(0, 119, 255, 0.05) 0%, rgba(43, 190, 248, 0.03) 100%)',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 119, 255, 0.2)'
                }}>
                  <span style={{ fontSize: '2rem', flexShrink: 0 }}>{benefit.icon}</span>
                  <div>
                    <h3 style={{ 
                      fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', 
                      fontWeight: '600', 
                      color: '#0077FF', 
                      margin: '0 0 0.5rem 0' 
                    }}>
                      {benefit.title}
                    </h3>
                    <p style={{ 
                      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
                      color: '#4A5568', 
                      margin: 0, 
                      lineHeight: '1.6',
                      textAlign: 'justify'
                    }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Regional Leadership */}
          <section style={{ marginBottom: '1.5rem' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '1rem',
              marginTop: '-0.5rem'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=300&fit=crop&crop=center"
                alt="Comercio digital moderno en Veracruz"
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
              <Star size={24} color="#FFD700" />
              Es momento de que el Norte de Veracruz lidere la era digital
            </h2>
            
            <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: '1.7', color: '#3A3A3C', marginBottom: '1.5rem', textAlign: 'justify' }}>
              No dejes que la competencia de fuera se lleve a tus clientes solo porque ellos sí tienen un botón de <strong>"comprar ahora"</strong>. Tu experiencia, tu producto y tu conocimiento local, combinados con una plataforma robusta, te harán imparable.
            </p>
            
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
                background: 'linear-gradient(180deg, #FFD700, #FFC107)'
              }} />
              <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.2rem)', color: '#F57C00', margin: 0, fontWeight: '600', paddingLeft: '1rem', textAlign: 'justify' }}>
                ¿Estás listo para dejar de "anotar en la libreta" y empezar a gestionar un negocio de verdad? 📊
              </p>
            </div>
          </section>

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
              Soy Francisco Javier Mateo Hernández, líder en el area de TI 🚀
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              lineHeight: '1.6',
              marginBottom: '2rem',
              opacity: 0.95,
              color: 'white',
              textAlign: 'justify'
            }}>
              Mi objetivo es que los negocios de nuestra región dejen de ser <strong>"negocitos"</strong> y se conviertan en <strong>potencias digitales</strong>. 
              Construyo la infraestructura que tu visión merece.
            </p>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: 'clamp(1rem, 4vw, 2rem)',
              marginBottom: '2rem',
              color: 'white'
            }}>
              <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.1rem)', marginBottom: '1rem', fontWeight: '600', color: 'white', textAlign: 'justify' }}>
                👉 Si quieres saber cómo conectar tus ventas, tus pagos y tu inventario en una sola herramienta que trabaje para ti:
              </p>
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
                maxWidth: '500px'
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
                Consultoría Gratuita
              </button>
              
              <a
                href="https://wa.me/527461171449?text=Hola%20Francisco,%20vi%20tu%20artículo%20sobre%20el%20nuevo%20comercio%20digital%20y%20me%20interesa%20profesionalizar%20mi%20negocio"
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
              
              <p style={{
                fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                fontStyle: 'italic',
                margin: 0
              }}>
                (Atención directa de Francisco Javier Mateo Hernández)
              </p>
            </div>
          </section>

          {/* Final Question */}
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
              ¿Cuál ha sido tu mayor dolor de cabeza al vender por internet? 🤔
            </h3>
            <p style={{
              fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
              color: '#3A3A3C',
              marginBottom: '1.5rem',
              textAlign: 'justify'
            }}>
              Cuéntame tus comentarios, quiero leerte y ayudarte a encontrar la solución:
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <a
                href="mailto:tuz_fco@yahoo.com.mx?subject=Consulta sobre el Nuevo Comercio Digital&body=Hola Francisco, leí tu artículo sobre el nuevo comercio digital y me gustaría contarte mi experiencia..."
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
                  color: 'white',
                  padding: 'clamp(0.75rem, 2.5vw, 1rem) clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 119, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 8px 20px rgba(0, 119, 255, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 119, 255, 0.3)'
                }}
              >
                <Mail size={18} />
                📧 Escríbeme por correo
              </a>
              
              <a
                href="https://wa.me/527461171449?text=Hola%20Francisco,%20leí%20tu%20artículo%20sobre%20el%20nuevo%20comercio%20digital%20y%20quiero%20contarte%20mi%20experiencia..."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: '#25D366',
                  color: 'white',
                  padding: 'clamp(0.75rem, 2.5vw, 1rem) clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)'
                }}
              >
                <MessageCircle size={18} />
                💬 WhatsApp directo
              </a>
            </div>
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
            Próximos Artículos
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(0.5rem, 3vw, 1rem)'
          }}>
            {[
              {
                title: 'Google Maps para Negocios Locales',
                description: 'Cómo aparecer cuando buscan tu tipo de negocio'
              },
              {
                title: 'Pagos Digitales sin Complicaciones',
                description: 'Acepta tarjetas sin terminal costosa'
              },
              {
                title: 'Inventario Digital para PyMEs',
                description: 'Controla tu stock desde el celular'
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
    </>
  )
}

export default BlogArticleComercio