import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CountUp({ target, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    // Parse the target number (remove commas, +, etc.)
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ''))
    if (isNaN(numericTarget)) return

    const startTime = Date.now()
    const durationMs = duration * 1000

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      // easeOutExpo for a satisfying deceleration
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      setCount(Math.floor(eased * numericTarget))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(numericTarget)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  // Format with commas
  const formatted = count.toLocaleString() + suffix

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {formatted}
    </motion.span>
  )
}
