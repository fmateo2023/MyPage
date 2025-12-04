import { useState, useEffect } from 'react'

/**
 * Hook para tracking del progreso de scroll
 * Implementa throttling para optimizar performance en mobile
 * Basado en heurísticas de Nielsen para feedback visual
 */
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let timeoutId = null

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      
      setScrollProgress(Math.min(scrollPercent, 100))
      setIsScrolling(true)

      // Reset scrolling state after scroll ends
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setIsScrolling(false), 150)
    }

    // Throttle scroll events for performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    updateScrollProgress() // Initial call

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  return { scrollProgress, isScrolling }
}