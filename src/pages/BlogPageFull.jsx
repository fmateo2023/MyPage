import React from 'react'
import { motion } from 'framer-motion'
import AnimatedNavbar from '../components/AnimatedNavbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  BookOpen,
  Code,
  Lightbulb,
  Zap
} from 'lucide-react'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "El Futuro de la Inteligencia Artificial en el Desarrollo Web",
      excerpt: "Exploramos cómo la IA está transformando la manera en que desarrollamos aplicaciones web y las oportunidades que esto presenta.",
      date: "2024-01-15",
      readTime: "8 min",
      category: "Inteligencia Artificial",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center",
      tags: ["IA", "Desarrollo Web", "Futuro", "Tecnología"]
    },
    {
      id: 2,
      title: "Mejores Prácticas para APIs RESTful en 2024",
      excerpt: "Una guía completa sobre cómo diseñar y desarrollar APIs RESTful robustas, escalables y mantenibles.",
      date: "2024-01-10",
      readTime: "12 min",
      category: "Desarrollo Backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center",
      tags: ["APIs", "REST", "Backend", "Mejores Prácticas"]
    },
    {
      id: 3,
      title: "React vs Vue.js: ¿Cuál elegir para tu próximo proyecto?",
      excerpt: "Comparativa detallada entre React y Vue.js, analizando ventajas, desventajas y casos de uso ideales.",
      date: "2024-01-05",
      readTime: "10 min",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=center",
      tags: ["React", "Vue.js", "Frontend", "Comparativa"]
    },
    {
      id: 4,
      title: "Automatización de Procesos Empresariales con Chatbots",
      excerpt: "Cómo implementar chatbots inteligentes para automatizar procesos y mejorar la experiencia del cliente.",
      date: "2023-12-28",
      readTime: "15 min",
      category: "Automatización",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop&crop=center",
      tags: ["Chatbots", "Automatización", "IA", "Procesos"]
    },
    {
      id: 5,
      title: "Optimización de Performance en Aplicaciones React",
      excerpt: "Técnicas avanzadas para mejorar el rendimiento de aplicaciones React y ofrecer una mejor experiencia de usuario.",
      date: "2023-12-20",
      readTime: "14 min",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
      tags: ["React", "Performance", "Optimización", "UX"]
    },
    {
      id: 6,
      title: "Tendencias en Desarrollo Full-Stack para 2024",
      excerpt: "Las tecnologías y metodologías que están definiendo el futuro del desarrollo full-stack.",
      date: "2023-12-15",
      readTime: "11 min",
      category: "Tendencias",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop&crop=center",
      tags: ["Full-Stack", "Tendencias", "2024", "Tecnología"]
    }
  ]

  const categories = ["Todos", "Inteligencia Artificial", "Desarrollo Backend", "Frontend", "Automatización", "Performance", "Tendencias"]
  const [selectedCategory, setSelectedCategory] = React.useState("Todos")

  const filteredPosts = selectedCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div style={{
      background: 'var(--background-dark)',
      color: 'var(--text-primary)',
      minHeight: '100vh'
    }}>
      <AnimatedNavbar />
      
      <section id="blog" style={{
        padding: '8rem 0',
        background: 'var(--background-dark)',
        minHeight: '100vh',
        paddingTop: '120px'
      }}>
      <div className="container">
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
            <BookOpen size={20} />
            BLOG & ARTÍCULOS
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-primary)'
          }}>
            Conocimiento y{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              experiencias
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Artículos sobre desarrollo, tecnología y las últimas tendencias en el mundo del software.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '4rem'
          }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.75rem 1.5rem',
                background: selectedCategory === category ? 'var(--gradient-primary)' : 'var(--background-card)',
                color: selectedCategory === category ? 'white' : 'var(--text-secondary)',
                border: `1px solid ${selectedCategory === category ? 'transparent' : 'var(--border-subtle)'}`,
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = 'var(--background-glass)'
                  e.target.style.color = 'var(--text-primary)'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = 'var(--background-card)'
                  e.target.style.color = 'var(--text-secondary)'
                }
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              style={{
                background: 'var(--background-card)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 10px 30px var(--shadow-soft)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              {/* Image */}
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden'
              }}>
                <img 
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  padding: '0.5rem 1rem',
                  background: 'var(--gradient-primary)',
                  color: 'white',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(43, 190, 248, 0.1)',
                        color: 'var(--accent-cyan)',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        fontWeight: '500'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-cyan)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  <span>Leer artículo</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--gradient-card)',
            borderRadius: '2rem',
            padding: '3rem 2rem',
            textAlign: 'center',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{
            width: '80px',
            height: '80px',
            background: 'rgba(43, 190, 248, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem auto'
          }}>
            <Zap size={40} color="var(--accent-cyan)" />
          </div>
          
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            Más contenido próximamente
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Estoy trabajando en más artículos sobre desarrollo, tecnología y mejores prácticas. 
            ¡Mantente al tanto de las últimas actualizaciones!
          </p>
        </motion.div>
      </div>
      </section>
      
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default BlogPage