import { motion } from 'framer-motion'

const aiTools = [
  { name: 'ChatGPT', angle: 0, color: '#10A37F' },
  { name: 'Gemini', angle: 60, color: '#4285F4' },
  { name: 'Claude', angle: 120, color: '#D97757' },
  { name: 'Midjourney', angle: 180, color: '#BD6FFF' },
  { name: 'Copilot', angle: 240, color: '#2EA5FF' },
  { name: 'Sora', angle: 300, color: '#FF6B6B' },
]

export default function AnimatedGlobe() {
  return (
    <div className="globe-container">
      <div className="globe-glow"></div>
      <div className="globe-sphere">
        {/* Horizontal rings */}
        <div className="globe-ring ring-h ring-h-1"></div>
        <div className="globe-ring ring-h ring-h-2"></div>
        <div className="globe-ring ring-h ring-h-3"></div>
        <div className="globe-ring ring-h ring-h-4"></div>
        <div className="globe-ring ring-h ring-h-5"></div>
        
        {/* Vertical rings */}
        <div className="globe-ring ring-v ring-v-1"></div>
        <div className="globe-ring ring-v ring-v-2"></div>
        <div className="globe-ring ring-v ring-v-3"></div>

        {/* Glowing nodes */}
        {[
          { top: '15%', left: '50%', delay: 0 },
          { top: '30%', left: '20%', delay: 0.5 },
          { top: '45%', left: '75%', delay: 1 },
          { top: '60%', left: '35%', delay: 1.5 },
          { top: '75%', left: '60%', delay: 2 },
          { top: '25%', left: '65%', delay: 0.8 },
          { top: '55%', left: '15%', delay: 1.2 },
          { top: '40%', left: '50%', delay: 0.3 },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="globe-node"
            style={{ top: node.top, left: node.left }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2.5,
              delay: node.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Orbiting AI Tool Badges */}
      <div className="globe-orbit-ring">
        {aiTools.map((tool, i) => {
          const rad = (tool.angle * Math.PI) / 180
          const rx = 140 
          const ry = 70  
          const x = Math.cos(rad) * rx
          const y = Math.sin(rad) * ry
          
          return (
            <motion.div
              key={tool.name}
              className="globe-tool-badge"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                borderColor: `${tool.color}40`,
                boxShadow: `0 0 16px ${tool.color}25`,
              }}
              animate={{ 
                y: [0, -6, 0],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="globe-tool-dot" style={{ background: tool.color }}></span>
              <span className="globe-tool-name">{tool.name}</span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
