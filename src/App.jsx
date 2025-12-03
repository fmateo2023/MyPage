import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import FloatingButtons from './components/FloatingButtons'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ExperiencePage from './pages/ExperiencePage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

function App() {
  return (
    <Router basename="/MyPage">
      <div className="App" style={{ background: 'var(--background-dark)', minHeight: '100vh' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/portafolio" element={<PortfolioPage />} />
          <Route path="/experiencia" element={<ExperiencePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App