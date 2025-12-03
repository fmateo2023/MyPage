import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Linkedin, 
  Send,
  MapPin,
  Clock,
  CheckCircle,
  User,
  Building,
  Zap,
  Star,
  ArrowRight
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = `Consulta de proyecto - ${formData.name}`
    const body = `
Hola Francisco,

Me interesa trabajar contigo en un proyecto. Aquí están los detalles:

Nombre: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Tipo de proyecto: ${formData.project}
Presupuesto estimado: ${formData.budget}

Mensaje:
${formData.message}

Saludos,
${formData.name}
    `.trim()

    const mailtoLink = `mailto:tuz_fco@yahoo.com.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
    
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "tuz_fco@yahoo.com.mx",
      link: "mailto:tuz_fco@yahoo.com.mx",
      description: "Respuesta en 24 horas",
      color: "#EA4335"
    },
    {
      icon: <Phone size={24} />,
      title: "Teléfono",
      value: "+52 746 117 1449",
      link: "tel:+527461171449",
      description: "Lun - Vie, 9:00 - 18:00",
      color: "#0077FF"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      value: "746 117 1449",
      link: "https://wa.me/527461171449?text=Hola%20Francisco,%20me%20gustaría%20hablar%20contigo%20sobre%20un%20proyecto.",
      description: "Respuesta inmediata",
      color: "#25D366"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "Francisco Javier Mateo",
      link: "https://www.linkedin.com/in/francisco-javier-mateo-hernandez-b97334113/",
      description: "Conectemos profesionalmente",
      color: "#0077B5"
    }
  ]

  const projectTypes = [
    "Desarrollo Web",
    "Sistema Empresarial",
    "E-commerce",
    "API/Integración",
    "Chatbot",
    "Automatización",
    "Consultoría",
    "Otro"
  ]

  const budgetRanges = [
    "Menos de $10,000 MXN",
    "$10,000 - $25,000 MXN",
    "$25,000 - $50,000 MXN",
    "$50,000 - $100,000 MXN",
    "Más de $100,000 MXN",
    "Por definir"
  ]

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'var(--background-dark)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    fontFamily: 'var(--font-body)'
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '0.5rem'
  }

  return (
    <section id="contact" style={{
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
          radial-gradient(circle at 25% 25%, rgba(43, 190, 248, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(0, 119, 255, 0.1) 0%, transparent 50%)
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
            <MessageCircle size={20} />
            HABLEMOS
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)'
          }}>
            Transformemos tu{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              idea en realidad
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            ¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte a crear 
            la solución tecnológica perfecta para tu negocio.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(2, 1fr)' : '1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{
              background: 'var(--background-card)',
              borderRadius: '2rem',
              padding: '3rem',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 20px 40px var(--shadow-soft)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(43, 190, 248, 0.1)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}>
                  <Send size={24} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-primary)'
                  }}>
                    Cuéntame sobre tu proyecto
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem'
                  }}>
                    Completa el formulario y te contactaré en menos de 24 horas
                  </p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Name and Email */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
                  gap: '1.5rem'
                }}>
                  <div>
                    <label style={labelStyle}>Nombre *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      style={inputStyle}
                      placeholder="Tu nombre completo"
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--primary-blue)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 119, 255, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--border-subtle)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      style={inputStyle}
                      placeholder="tu@email.com"
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--primary-blue)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 119, 255, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--border-subtle)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label style={labelStyle}>Empresa</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={inputStyle}
                    placeholder="Nombre de tu empresa (opcional)"
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary-blue)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 119, 255, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-subtle)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {/* Project Type and Budget */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
                  gap: '1.5rem'
                }}>
                  <div>
                    <label style={labelStyle}>Tipo de proyecto</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--primary-blue)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 119, 255, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--border-subtle)'
                        e.target.style.boxShadow = 'none'
                      }}
                    >
                      <option value="">Selecciona una opción</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Presupuesto estimado</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--primary-blue)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 119, 255, 0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--border-subtle)'
                        e.target.style.boxShadow = 'none'
                      }}
                    >
                      <option value="">Selecciona un rango</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Cuéntame más sobre tu proyecto *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    placeholder="Describe tu proyecto, objetivos, funcionalidades que necesitas, plazos, etc."
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--primary-blue)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(0, 119, 255, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-subtle)'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '1.25rem 2rem',
                    background: isSubmitting ? 'var(--text-muted)' : 'var(--gradient-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    boxShadow: '0 10px 30px rgba(0, 119, 255, 0.3)'
                  }}
                >
                  <Send size={20} />
                  {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Contact Methods */}
            <div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-primary)'
              }}>
                Otras formas de contacto
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    whileHover={{ y: -3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.5rem',
                      background: 'var(--background-card)',
                      borderRadius: '1.5rem',
                      border: '1px solid var(--border-subtle)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: `${method.color}15`,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: method.color,
                      flexShrink: 0
                    }}>
                      {method.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem'
                      }}>
                        {method.title}
                      </div>
                      <div style={{
                        color: method.color,
                        fontWeight: '500',
                        marginBottom: '0.25rem'
                      }}>
                        {method.value}
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)'
                      }}>
                        {method.description}
                      </div>
                    </div>
                    <ArrowRight size={20} style={{ color: 'var(--text-muted)' }} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Schedule */}
              <div style={{
                background: 'var(--background-card)',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: '1px solid var(--border-subtle)'
              }}>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <Clock size={20} style={{ color: 'var(--accent-cyan)' }} />
                  Horarios de atención
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <span>Lunes - Viernes:</span>
                    <span style={{ fontWeight: '600' }}>9:00 AM - 6:00 PM</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <span>Sábados:</span>
                    <span style={{ fontWeight: '600' }}>10:00 AM - 2:00 PM</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <span>Domingos:</span>
                    <span style={{ fontWeight: '600' }}>Solo emergencias</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div style={{
                background: 'var(--background-card)',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: '1px solid var(--border-subtle)'
              }}>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <MapPin size={20} style={{ color: 'var(--accent-cyan)' }} />
                  Ubicación
                </h4>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}>
                  Poza Rica, Veracruz, México<br />
                  <span style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    Trabajo de forma remota con clientes en todo México
                  </span>
                </p>
              </div>

              {/* What to Expect */}
              <div style={{
                background: 'var(--background-card)',
                borderRadius: '1.5rem',
                padding: '2rem',
                border: '1px solid var(--border-subtle)'
              }}>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <CheckCircle size={20} style={{ color: 'var(--accent-cyan)' }} />
                  Qué puedes esperar
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Respuesta en menos de 24 horas',
                    'Consulta inicial gratuita',
                    'Propuesta detallada y transparente',
                    'Seguimiento personalizado del proyecto'
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        background: 'var(--accent-cyan)',
                        borderRadius: '50%',
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact