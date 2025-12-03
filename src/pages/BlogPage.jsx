import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "El Futuro de la Inteligencia Artificial en el Desarrollo Web",
      excerpt: "Exploramos cómo la IA está transformando la manera en que desarrollamos aplicaciones web y las oportunidades que esto presenta.",
      date: "2024-01-15",
      readTime: "8 min",
      category: "Tecnología",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Mejores Prácticas para APIs REST en 2024",
      excerpt: "Una guía completa sobre cómo diseñar y desarrollar APIs REST robustas y escalables siguiendo las mejores prácticas actuales.",
      date: "2024-01-10",
      readTime: "12 min",
      category: "Desarrollo",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Microservicios vs Monolitos: ¿Cuándo usar cada uno?",
      excerpt: "Analizamos las ventajas y desventajas de cada arquitectura y cuándo es apropiado implementar cada una.",
      date: "2024-01-05",
      readTime: "10 min",
      category: "Arquitectura",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Optimización de Performance en React Applications",
      excerpt: "Técnicas avanzadas para mejorar el rendimiento de aplicaciones React y ofrecer una mejor experiencia de usuario.",
      date: "2023-12-28",
      readTime: "15 min",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Seguridad en Aplicaciones Web: Guía Completa",
      excerpt: "Todo lo que necesitas saber sobre seguridad web, desde HTTPS hasta autenticación y autorización.",
      date: "2023-12-20",
      readTime: "18 min",
      category: "Seguridad",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "DevOps y CI/CD: Automatizando el Desarrollo",
      excerpt: "Cómo implementar pipelines de CI/CD efectivos para acelerar el desarrollo y deployment de aplicaciones.",
      date: "2023-12-15",
      readTime: "14 min",
      category: "DevOps",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop"
    }
  ]

  const categories = ["Todos", "Tecnología", "Desarrollo", "Arquitectura", "Frontend", "Seguridad", "DevOps"]
  const [selectedCategory, setSelectedCategory] = React.useState("Todos")

  const filteredPosts = selectedCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        background: 'var(--background-dark)',
        minHeight: '100vh',
        paddingTop: '6rem'
      }}
    >
      {/* Hero Section */}
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}
          >
            Blog de{' '}
            <span style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Tecnología
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Artículos sobre desarrollo web, tecnología y mejores prácticas en programación
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '3rem'
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  background: selectedCategory === category 
                    ? 'var(--gradient-primary)' 
                    : 'var(--background-card)',
                  color: selectedCategory === category 
                    ? 'white' 
                    : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: '500'
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ padding: '2rem 0 4rem' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                style={{
                  background: 'var(--background-card)',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border-subtle)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                whileHover={{ y: -8 }}
              >
                {/* Post Image */}
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  {post.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'var(--gradient-primary)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      Destacado
                    </div>
                  )}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Tag size={14} />
                    {post.category}
                  </div>
                </div>

                {/* Post Content */}
                <div style={{ padding: '2rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={16} />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                    lineHeight: '1.3'
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

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--primary-blue)',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}>
                    Leer más
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default BlogPage