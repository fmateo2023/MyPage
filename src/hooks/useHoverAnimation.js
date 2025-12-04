import { useState, useCallback } from 'react'

/**
 * Hook para efectos hover avanzados
 * Detecta dispositivos táctiles para optimizar UX
 * Implementa magnetic hover effects tipo Apple
 */
export const useHoverAnimation = (options = {}) => {
  const {
    scale = 1.05,
    magneticStrength = 0.3,
    disabled = false
  } = options

  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Detect touch device
  useState(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  const handleMouseEnter = useCallback((event) => {
    if (disabled || isTouchDevice) return
    setIsHovered(true)
  }, [disabled, isTouchDevice])

  const handleMouseLeave = useCallback((event) => {
    if (disabled || isTouchDevice) return
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }, [disabled, isTouchDevice])

  const handleMouseMove = useCallback((event) => {
    if (disabled || isTouchDevice || !isHovered) return

    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (event.clientX - centerX) * magneticStrength
    const deltaY = (event.clientY - centerY) * magneticStrength

    setMousePosition({ x: deltaX, y: deltaY })
  }, [disabled, isTouchDevice, isHovered, magneticStrength])

  const hoverProps = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseMove: handleMouseMove,
  }

  const animationStyle = {
    transform: isHovered 
      ? `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(${scale})`
      : 'translate(0px, 0px) scale(1)',
    transition: isHovered 
      ? 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)'
      : 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
  }

  return {
    isHovered,
    hoverProps,
    animationStyle,
    isTouchDevice
  }
}