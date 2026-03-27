import { motion } from 'framer-motion'

export default function HeroMesh() {
  return (
    <div className="hero-mesh" aria-hidden="true">
      {/* Gold orb — top left */}
      <motion.div
        className="mesh-orb mesh-orb-gold"
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Blue orb — bottom right */}
      <motion.div
        className="mesh-orb mesh-orb-blue"
        animate={{ x: [0, -60, 35, 0], y: [0, 40, -25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      {/* Violet orb — center */}
      <motion.div
        className="mesh-orb mesh-orb-violet"
        animate={{ x: [0, 25, -40, 0], y: [0, 30, -20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <div className="mesh-noise" />
    </div>
  )
}
