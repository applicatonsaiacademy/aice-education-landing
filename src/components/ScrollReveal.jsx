import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function ScrollReveal({
  children,
  width = '100%',
  delay = 0,
  direction = 'up',
  distance = 60,
  duration = 0.8,
  once = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })
  const controls = useAnimation()

  const initialPosition = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div ref={ref} style={{ width, overflow: 'visible' }}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            ...initialPosition[direction],
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
