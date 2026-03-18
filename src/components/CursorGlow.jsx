import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Subtle magnetic cursor glow that follows the pointer.
 * Keep it lightweight: two blurred circles with spring smoothing.
 */
export default function CursorGlow() {
  const dotRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.2 })
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.2 })

  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [x, y])

  return (
    <div className="cursor-glow" ref={dotRef} aria-hidden>
      <motion.span
        className="cursor-glow-core"
        style={{ translateX: smoothX, translateY: smoothY }}
      />
      <motion.span
        className="cursor-glow-ring"
        style={{ translateX: smoothX, translateY: smoothY }}
      />
    </div>
  )
}
