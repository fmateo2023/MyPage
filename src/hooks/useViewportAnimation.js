import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

/**
 * Hook para animaciones al entrar en viewport
 * Implementa Intersection Observer API para performance óptima
 * Sigue principios de Progressive Enhancement
 */
export const useViewportAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px 0px -50px 0px',
    delay = 0,
    staggerDelay = 100
  } = options

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin
  })

  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        if (triggerOnce) {
          setHasAnimated(true)
        }
      }, delay)

      return () => clearTimeout(timer)
    } else if (!inView && !triggerOnce) {
      setIsVisible(false)
    }
  }, [inView, delay, triggerOnce, hasAnimated])

  return { ref, isVisible, inView }
}

/**
 * Hook para animaciones escalonadas (stagger)
 * Útil para listas y grids con entrada progresiva
 */
export const useStaggerAnimation = (itemCount, options = {}) => {
  const { staggerDelay = 100, ...viewportOptions } = options
  const { ref, inView } = useViewportAnimation(viewportOptions)
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    if (inView) {
      // Stagger animation for each item
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => new Set([...prev, i]))
        }, i * staggerDelay)
      }
    } else if (!viewportOptions.triggerOnce) {
      setVisibleItems(new Set())
    }
  }, [inView, itemCount, staggerDelay, viewportOptions.triggerOnce])

  const isItemVisible = (index) => visibleItems.has(index)

  return { ref, isItemVisible, inView }
}