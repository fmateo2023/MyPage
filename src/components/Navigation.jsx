import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code, Zap } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detectar sección activa solo en la página principal
      if (location.pathname === '/') {
        const sections = ['hero', 'about', 'services', 'portfolio', 'experience', 'skills', 'testimonials', 'contact']
        const scrollPosition = window.scrollY + 100
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i])
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [location.pathname])

  const navItems = location.pathname === '/' ? [
    { href: '#hero', label: 'Inicio', section: 'hero' },
    { href: '#services', label: 'Servicios', section: 'services' },
    { href: '#portfolio', label: 'Portafolio', section: 'portfolio' },
    { href: '#experience', label: 'Experiencia', section: 'experience' },
    { href: '#skills', label: 'Habilidades', section: 'skills' },
    { href: '#contact', label: 'Contacto', section: 'contact' }
  ] : [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/portafolio', label: 'Portafolio' },
    { href: '/experiencia', label: 'Experiencia' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' }
  ]

  const isDesktop = windowWidth >= 1024

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled 
        ? 'rgba(255, 255, 255, 0.95)' 
        : 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      borderBottom: isScrolled ? '1px solid rgba(232, 236, 240, 0.8)' : '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      fontFamily: 'Space Grotesk, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: windowWidth >= 768 ? '80px' : '70px'
        }}>
          {/* Logo */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: windowWidth >= 768 ? '0.75rem' : '0.5rem',
            fontWeight: '700',
            fontSize: windowWidth >= 768 ? '1.5rem' : '1.25rem',
            color: isScrolled ? '#0A1A2F' : 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: windowWidth >= 768 ? '40px' : '35px',
              height: windowWidth >= 768 ? '40px' : '35px',
              background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 25px rgba(0, 119, 255, 0.3)'
            }}>
              <Code size={windowWidth >= 768 ? 20 : 18} color="white" />
            </div>
            {windowWidth >= 480 && 'Francisco Mateo'}
          </Link>

          {/* Desktop Navigation */}
          {isDesktop && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}>
              {navItems.map((item) => {
                const isActive = location.pathname === '/' 
                  ? activeSection === item.section
                  : location.pathname === item.href
                
                const handleClick = (e) => {
                  if (location.pathname === '/' && item.href.startsWith('#')) {
                    e.preventDefault()
                    const element = document.getElementById(item.section)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }
                }
                
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleClick}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: isActive ? '600' : '500',
                      color: isActive 
                        ? (isScrolled ? '#0077FF' : 'white')
                        : (isScrolled ? '#4E5A66' : 'rgba(255, 255, 255, 0.9)'),
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      padding: '0.5rem 0',
                      borderBottom: isActive ? '2px solid #0077FF' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = isScrolled ? '#0077FF' : 'white'
                      e.target.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = isActive 
                        ? (isScrolled ? '#0077FF' : 'white')
                        : (isScrolled ? '#4E5A66' : 'rgba(255, 255, 255, 0.9)')
                      e.target.style.transform = 'translateY(0)'
                    }}
                  >
                    {item.label}
                  </Link>
                )
              })}
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="#contact"
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.9rem',
                    background: isScrolled 
                      ? 'rgba(0, 119, 255, 0.1)' 
                      : 'rgba(255, 255, 255, 0.1)',
                    color: isScrolled ? '#0077FF' : 'white',
                    border: `1px solid ${isScrolled ? 'rgba(0, 119, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'}`,
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = isScrolled 
                      ? 'rgba(0, 119, 255, 0.2)' 
                      : 'rgba(255, 255, 255, 0.2)'
                    e.target.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = isScrolled 
                      ? 'rgba(0, 119, 255, 0.1)' 
                      : 'rgba(255, 255, 255, 0.1)'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  Hablemos
                </a>
                
                <a
                  href="#portfolio"
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.9rem',
                    background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(0, 119, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 15px 35px rgba(0, 119, 255, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 8px 25px rgba(0, 119, 255, 0.3)'
                  }}
                >
                  <Zap size={16} />
                  Proyectos
                </a>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <button
              style={{
                padding: '0.75rem',
                background: isScrolled 
                  ? 'rgba(0, 119, 255, 0.1)' 
                  : 'rgba(255, 255, 255, 0.1)',
                border: `1px solid ${isScrolled ? 'rgba(0, 119, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'}`,
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onMouseEnter={(e) => {
                e.target.style.background = isScrolled 
                  ? 'rgba(0, 119, 255, 0.2)' 
                  : 'rgba(255, 255, 255, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = isScrolled 
                  ? 'rgba(0, 119, 255, 0.1)' 
                  : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              {isMobileMenuOpen ? (
                <X size={24} color={isScrolled ? '#0077FF' : 'white'} />
              ) : (
                <Menu size={24} color={isScrolled ? '#0077FF' : 'white'} />
              )}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && !isDesktop && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(232, 236, 240, 0.8)',
            borderTop: 'none',
            borderRadius: '0 0 20px 20px',
            boxShadow: '0 20px 40px rgba(10, 26, 47, 0.15)',
            animation: 'fadeInUp 0.3s ease-out'
          }}>
            <div style={{ 
              padding: windowWidth >= 768 ? '2rem' : '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {navItems.map((item, index) => {
                  const isActive = location.pathname === '/' 
                    ? activeSection === item.section
                    : location.pathname === item.href
                  
                  const handleClick = (e) => {
                    setIsMobileMenuOpen(false)
                    if (location.pathname === '/' && item.href.startsWith('#')) {
                      e.preventDefault()
                      const element = document.getElementById(item.section)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }
                  }
                  
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={handleClick}
                      style={{
                        fontSize: windowWidth >= 768 ? '1.1rem' : '1rem',
                        fontWeight: isActive ? '600' : '500',
                        color: isActive ? '#0077FF' : '#4E5A66',
                        textDecoration: 'none',
                        padding: '1rem 0',
                        borderBottom: index < navItems.length - 1 ? '1px solid rgba(232, 236, 240, 0.5)' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#0077FF'
                        e.target.style.paddingLeft = '1rem'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = isActive ? '#0077FF' : '#4E5A66'
                        e.target.style.paddingLeft = '0'
                      }}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                
                <div style={{
                  display: 'flex',
                  flexDirection: windowWidth >= 480 ? 'row' : 'column',
                  gap: '1rem',
                  marginTop: '1rem'
                }}>
                  <a
                    href="#contact"
                    style={{
                      padding: '1rem 1.5rem',
                      background: 'rgba(0, 119, 255, 0.1)',
                      color: '#0077FF',
                      border: '1px solid rgba(0, 119, 255, 0.3)',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      flex: windowWidth >= 480 ? '1' : 'none'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hablemos
                  </a>
                  
                  <a
                    href="#portfolio"
                    style={{
                      padding: '1rem 1.5rem',
                      background: 'linear-gradient(135deg, #0077FF 0%, #2BBEF8 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      fontWeight: '500',
                      boxShadow: '0 8px 25px rgba(0, 119, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      flex: windowWidth >= 480 ? '1' : 'none'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ver Proyectos
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation