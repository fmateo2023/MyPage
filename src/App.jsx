import React, { Suspense, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedNavbar from './components/AnimatedNavbar'
import ParallaxHero from './components/ParallaxHero'
import FloatingButtons from './components/FloatingButtons'
import ExperiencePageFull from './pages/ExperiencePageFull'
import PortfolioPageFull from './pages/PortfolioPageFull'
import BlogPageFull from './pages/BlogPageFull'
import './styles/tokens.css'
import './index.css'

// Lazy load components for better performance
const Services = React.lazy(() => import('./components/Services'))
const Portfolio = React.lazy(() => import('./components/Portfolio'))
const Contact = React.lazy(() => import('./components/Contact'))
const Footer = React.lazy(() => import('./components/Footer'))

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component loading error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          color: '#6E6E73',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <p>Error al cargar el componente</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '0.5rem 1rem',
              background: '#0071E3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Reintentar
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

// Loading component with Apple-style spinner
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    color: '#6E6E73'
  }}>
    <motion.div
      style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(255,255,255,0.2)',
        borderTop: '3px solid #0071E3',
        borderRadius: '50%'
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  </div>
)

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'experience') setCurrentPage('experience')
      else if (hash === 'projects') setCurrentPage('projects')
      else if (hash === 'blog') setCurrentPage('blog')
      else setCurrentPage('home')
      
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (currentPage === 'experience') {
    return <ExperiencePageFull />
  }

  if (currentPage === 'projects') {
    return <PortfolioPageFull />
  }

  if (currentPage === 'blog') {
    return <BlogPageFull />
  }

  return (
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: '#FFFFFF',
        color: '#1D1D1F',
        minHeight: '100vh'
      }}
    >
      <AnimatedNavbar />
      <ParallaxHero />
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Services />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Portfolio />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
      
      <FloatingButtons />
    </motion.div>
  )
}

export default App