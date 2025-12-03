import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mic, 
  Trophy,
  Building,
  Users,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Play
} from 'lucide-react'

const Participations = () => {
  const [selectedEvent, setSelectedEvent] = useState(0)

  const participations = [
    {
      id: 1,
      icon: <Mic size={24} />,
      title: "Ponente sobre Inteligencia Artificial",
      organization: "CBTIS Poza Rica",
      location: "Poza Rica, Veracruz",
      date: "2024",
      description: "Conferencia magistral sobre las aplicaciones prácticas de la Inteligencia Artificial en el desarrollo de software y su impacto en la industria tecnológica. Presentación dirigida a estudiantes y profesores sobre el futuro de la IA.",
      type: "Conferencia",
      color: "#0077FF",
      image: "./assets/cbtis-ia.jpeg",
      audience: "150+ estudiantes y profesores",
      topics: ["Inteligencia Artificial", "Machine Learning", "Desarrollo de Software", "Futuro Tecnológico"]
    },
    {
      id: 2,
      icon: <Trophy size={24} />,
      title: "Juez/Jurado Técnico",
      organization: "CONALEP Poza Rica",
      location: "Poza Rica, Veracruz",
      date: "2023-2024",
      description: "Evaluación de proyectos tecnológicos estudiantiles, asesoría en desarrollo de software y mentoría para jóvenes desarrolladores. Participación en concursos de innovación tecnológica.",
      type: "Evaluación",
      color: "#2BBEF8",
      image: "./assets/cbtis-ia2.jpeg",
      audience: "50+ proyectos evaluados",
      topics: ["Evaluación de Proyectos", "Mentoría", "Innovación", "Desarrollo Estudiantil"]
    },
    {
      id: 3,
      icon: <Building size={24} />,
      title: "Expositor - Foro Industrial Energético Portuario",
      organization: "Cámara de Comercio",
      location: "Ciudad del Carmen, Campeche",
      date: "2023",
      description: "Presentación sobre soluciones tecnológicas para la industria energética y portuaria, enfocándose en automatización y digitalización de procesos industriales.",
      type: "Foro Industrial",
      color: "#0077FF",
      image: "./assets/foro-industrial-portuario.jpg",
      audience: "200+ empresarios del sector",
      topics: ["Automatización Industrial", "Digitalización", "Industria 4.0", "Soluciones IoT"]
    },
    {
      id: 4,
      icon: <Users size={24} />,
      title: "Participante Activo",
      organization: "CANACINTRA",
      location: "Región Norte de Veracruz",
      date: "2022-2024",
      description: "Participación en mesas de trabajo sobre transformación digital empresarial y desarrollo de soluciones tecnológicas para la industria local. Colaboración en iniciativas de digitalización.",
      type: "Participación",
      color: "#2BBEF8",
      image: "./assets/foro-industrial-portuario-cd-carmen.jpg",
      audience: "Empresarios regionales",
      topics: ["Transformación Digital", "Industria Local", "Digitalización", "Consultoría"]
    },
    {
      id: 5,
      icon: <Award size={24} />,
      title: "Expositor - Expo León",
      organization: "Expo León Guanajuato",
      location: "León, Guanajuato",
      date: "2023",
      description: "Presentación de soluciones tecnológicas innovadoras para empresas, showcasing de proyectos desarrollados y networking con empresarios del Bajío mexicano.",
      type: "Exposición",
      color: "#0077FF",
      image: "./assets/idea-guanajuato.jpg",
      audience: "300+ asistentes",
      topics: ["Innovación Tecnológica", "Startups", "Networking", "Soluciones Empresariales"]
    }
  ]

  const stats = [
    { number: "5+", label: "Eventos como ponente", icon: <Mic size={20} /> },
    { number: "800+", label: "Personas impactadas", icon: <Users size={20} /> },
    { number: "3", label: "Estados participados", icon: <MapPin size={20} /> },
    { number: "2+", label: "Años de participación activa", icon: <Award size={20} /> }
  ]

  return (
    <section id="participaciones" style={{
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
            PARTICIPACIONES & EVENTOS
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)'
          }}>
            Compartiendo conocimiento en{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              eventos tecnológicos
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Mi participación activa en eventos del sector tecnológico y empresarial, 
            compartiendo conocimiento y contribuyendo al crecimiento de la comunidad.
          </p>
        </motion.div>

        {/* Interactive Event Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 2fr' : '1fr',
          gap: '3rem',
          marginBottom: '6rem'
        }}>
          {/* Event List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '2rem',
              fontFamily: 'var(--font-primary)'
            }}>
              Eventos destacados
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {participations.map((event, index) => (
                <motion.div
                  key={event.id}
                  whileHover={{ x: 5 }}
                  onClick={() => setSelectedEvent(index)}
                  style={{
                    padding: '1.5rem',
                    background: selectedEvent === index ? 'var(--background-card)' : 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '1rem',
                    border: selectedEvent === index ? '1px solid var(--primary-blue)' : '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: `${event.color}15`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: event.color
                    }}>
                      {event.icon}
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem'
                      }}>
                        {event.title}
                      </h4>
                      <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)'
                      }}>
                        {event.organization} • {event.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Event Detail */}
          <motion.div
            key={selectedEvent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'var(--background-card)',
              borderRadius: '2rem',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)'
            }}
          >
            {/* Event Image */}
            <div style={{
              height: '250px',
              backgroundImage: `url(${participations[selectedEvent].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                background: participations[selectedEvent].color,
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                {participations[selectedEvent].type}
              </div>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
              }} />
            </div>

            {/* Event Content */}
            <div style={{ padding: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Calendar size={16} />
                  {participations[selectedEvent].date}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <MapPin size={16} />
                  {participations[selectedEvent].location}
                </div>
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}>
                {participations[selectedEvent].title}
              </h3>

              <p style={{
                color: participations[selectedEvent].color,
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {participations[selectedEvent].organization}
              </p>

              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {participations[selectedEvent].description}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                color: 'var(--text-muted)'
              }}>
                <Users size={16} />
                {participations[selectedEvent].audience}
              </div>

              {/* Topics */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h5 style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Temas tratados:
                </h5>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {participations[selectedEvent].topics.map((topic, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: `${participations[selectedEvent].color}15`,
                        color: participations[selectedEvent].color,
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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

export default Participations