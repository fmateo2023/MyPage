import React from 'react'
import { motion } from 'framer-motion'
import AnimatedNavbar from '../components/AnimatedNavbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import BlogArticle from '../components/BlogArticle'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  BookOpen,
  Code,
  Lightbulb,
  Zap,
  MapPin,
  Hotel
} from 'lucide-react'

const BlogPage = () => {
  const [selectedArticle, setSelectedArticle] = React.useState(null)
  const [selectedCategory, setSelectedCategory] = React.useState("Todos")

  const blogPosts = [
    {
      id: 'papantla-hoteles',
      title: "Cómo Aumentar las Reservas en Papantla y la Región Gracias a una Buena Presencia Digital",
      excerpt: "Descubre por qué muchos hoteles en Papantla pierden clientes y cómo una presencia digital básica puede aumentar tus reservaciones sin gastar una fortuna.",
      date: "2024-01-15",
      readTime: "8 min",
      category: "Marketing Digital Local",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop&crop=center",
      tags: ["Papantla", "Hotelería", "SEO Local", "Turismo", "Veracruz"],
      featured: true,
      location: "Papantla, Veracruz"
    },
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

  const categories = ["Todos", "Marketing Digital Local", "Inteligencia Artificial", "Desarrollo Backend", "Frontend", "Automatización", "Performance", "Tendencias"]

  const filteredPosts = selectedCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  if (selectedArticle === 'papantla-hoteles') {
    return <BlogArticle onBack={() => setSelectedArticle(null)} />
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #F5F5F7 0%, #FFFFFF 50%, #F5F5F7 100%)',
      color: '#1D1D1F',
      minHeight: '100vh'
    }}>
      <AnimatedNavbar />
      
      <section id="blog" style={{
        padding: '8rem 0',
        background: 'transparent',
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
            background: 'linear-gradient(145deg, rgba(0, 102, 204, 0.1), rgba(0, 153, 255, 0.05))',
            border: '1px solid rgba(0, 102, 204, 0.3)',
            borderRadius: '50px',
            padding: '0.75rem 1.5rem',
            marginBottom: '2rem',
            color: '#0066cc',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: 'Inter, monospace',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 20px rgba(0, 102, 204, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '60%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)'
            }} />
            <BookOpen size={20} style={{ filter: 'drop-shadow(0 0 2px rgba(0, 170, 255, 0.5))' }} />
            <span style={{ position: 'relative', zIndex: 2 }}>BLOG & ARTÍCULOS</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#1D1D1F',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
          }}>
            Conocimiento y{' '}
            <span style={{
              background: 'linear-gradient(90deg, #0055aa 0%, #0088ee 25%, #00aaff 50%, #0088ee 75%, #0055aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              display: 'inline-block'
            }}>
              experiencias
              <span style={{
                position: 'absolute',
                bottom: '-3px',
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00aaff, transparent)',
                borderRadius: '2px'
              }} />
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            lineHeight: '1.7',
            color: '#6E6E73',
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
                background: selectedCategory === category ? 'linear-gradient(135deg, #0066cc, #0099ff)' : 'rgba(255, 255, 255, 0.9)',
                color: selectedCategory === category ? 'white' : '#6E6E73',
                border: `1px solid ${selectedCategory === category ? 'transparent' : '#E5E5EA'}`,
                borderRadius: '980px',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                boxShadow: selectedCategory === category 
                  ? '0 8px 20px rgba(0, 102, 204, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.95)'
                  e.target.style.color = '#1D1D1F'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)'
                  e.target.style.color = '#6E6E73'
                }
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Article */}
        {filteredPosts.find(post => post.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ marginBottom: '3rem' }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              fontSize: '0.8rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              boxShadow: '0 4px 12px rgba(0, 119, 255, 0.3)'
            }}>
              <Hotel size={14} />
              ARTÍCULO DESTACADO
            </div>
            
            {(() => {
              const featuredPost = filteredPosts.find(post => post.featured)
              return (
                <motion.article
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedArticle(featuredPost.id)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '2px solid rgba(0, 119, 255, 0.2)',
                    boxShadow: '0 20px 40px rgba(0, 119, 255, 0.15)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
                    gap: 0
                  }}
                >
                  {/* Image */}
                  <div style={{
                    position: 'relative',
                    height: window.innerWidth >= 768 ? 'auto' : '250px',
                    minHeight: window.innerWidth >= 768 ? '300px' : 'auto',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
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
                      top: '1.5rem',
                      left: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        padding: '0.5rem 1rem',
                        background: 'linear-gradient(135deg, #0077FF, #2BBEF8)',
                        boxShadow: '0 4px 12px rgba(0, 119, 255, 0.4)',
                        color: 'white',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        borderRadius: '50px'
                      }}>
                        {featuredPost.category}
                      </div>
                      <div style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <MapPin size={12} />
                        {featuredPost.location}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '2.5rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem',
                      fontSize: '0.85rem',
                      color: '#6E6E73'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Calendar size={14} />
                        {new Date(featuredPost.date).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                      fontWeight: '700',
                      color: '#1D1D1F',
                      marginBottom: '1.5rem',
                      lineHeight: '1.3'
                    }}>
                      {featuredPost.title}
                    </h3>

                    <p style={{
                      color: '#3A3A3C',
                      lineHeight: '1.7',
                      marginBottom: '2rem',
                      fontSize: '1.1rem'
                    }}>
                      {featuredPost.excerpt}
                    </p>

                    {/* Tags */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '2rem'
                    }}>
                      {featuredPost.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          style={{
                            padding: '0.5rem 1rem',
                            background: 'rgba(0, 119, 255, 0.1)',
                            color: '#0077FF',
                            borderRadius: '50px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            border: '1px solid rgba(0, 119, 255, 0.2)'
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
                      gap: '0.75rem',
                      color: '#0077FF',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}>
                      <span>Leer artículo completo</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </motion.article>
              )
            })()}
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {filteredPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #E5E5EA',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
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
                  background: 'linear-gradient(135deg, #0066cc, #0099ff)',
                  boxShadow: '0 4px 12px rgba(0, 102, 204, 0.3)',
                  color: 'white',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  borderRadius: '50px',
                  fontFamily: 'Inter, monospace'
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
                  color: '#6E6E73'
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
                  color: '#1D1D1F',
                  marginBottom: '1rem',
                  lineHeight: '1.4',
                  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
                }}>
                  {post.title}
                </h3>

                <p style={{
                  color: '#3A3A3C',
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
                        background: 'rgba(0, 113, 227, 0.1)',
                        color: '#0071E3',
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
                  color: '#0071E3',
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
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(240, 245, 255, 0.9))',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '3rem 2rem',
            textAlign: 'center',
            border: '1px solid rgba(0, 102, 204, 0.2)',
            boxShadow: '0 10px 30px rgba(0, 102, 204, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40px',
            height: '40px',
            borderTop: '2px solid rgba(0, 170, 255, 0.3)',
            borderRight: '2px solid rgba(0, 170, 255, 0.3)',
            borderTopRightRadius: '24px'
          }} />
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.15), rgba(0, 170, 255, 0.25))',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem auto',
            border: '2px solid rgba(0, 136, 238, 0.3)',
            boxShadow: '0 8px 20px rgba(0, 102, 204, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.5)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-8px',
              left: '-8px',
              width: '25px',
              height: '25px',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              filter: 'blur(8px)'
            }} />
            <Zap size={40} color="#0066cc" style={{ filter: 'drop-shadow(0 0 4px rgba(0, 170, 255, 0.4))' }} />
          </div>
          
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#1D1D1F',
            marginBottom: '1rem',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
          }}>
            Más contenido próximamente
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#6E6E73',
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