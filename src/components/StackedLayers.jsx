import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const layers = [
  {
    title: 'Layer 1 · Listen',
    copy: 'Cultural intelligence agents decode signals across the web to surface what’s resonating now.',
    bullets: [
      'Social, video, forums, search — unified signals',
      'Live trend tracking by category',
      'Find content angles that actually stick',
    ],
    hue: 'one',
    tilt: -6,
  },
  {
    title: 'Layer 2 · Create',
    copy: 'Generate concepts, scripts, and assets aligned to live cultural DNA.',
    bullets: [
      'Brief → concept → ready-to-ship assets',
      'Voice-safe, brand-safe outputs',
      'Instant variations for channels',
    ],
    hue: 'two',
    tilt: 3,
  },
  {
    title: 'Layer 3 · Deploy',
    copy: 'Ship and learn faster with performance feedback loops.',
    bullets: [
      'Multi-channel scheduling',
      'Performance lift alerts',
      'Iterate with human + AI in the loop',
    ],
    hue: 'three',
    tilt: -2,
  },
]

export default function StackedLayers() {
  return (
    <section className="stacked-section">
      <div className="container">
        <ScrollReveal>
          <div className="stacked-head">
            <span className="section-label">AICE Agent Layers</span>
            <h2 className="section-title">Listen · Create · Deploy</h2>
            <p className="section-subtitle">
              Combine one layer or stack all three. Built for founders, leaders, and operators who need speed with confidence.
            </p>
          </div>
        </ScrollReveal>

        <div className="stacked-stage">
          {layers.map((layer, idx) => (
            <motion.div
              key={layer.title}
              className={`stacked-card hue-${layer.hue}`}
              initial={{ opacity: 0, y: 40, rotate: layer.tilt * 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: layer.tilt }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.08 }}
              whileHover={{ y: -8, rotate: 0, transition: { type: 'spring', stiffness: 260, damping: 24 } }}
            >
              <div className="stacked-card-body">
                <div className="stacked-title">{layer.title}</div>
                <p className="stacked-copy">{layer.copy}</p>
                <div className="stacked-bullets">
                  {layer.bullets.map((b) => (
                    <div key={b} className="stacked-bullet">
                      <span className="stacked-icon">✺</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="stacked-chip">Layer {idx + 1}</div>
            </motion.div>
          ))}
        </div>
        <p className="stacked-foot">Use a single layer or deploy the full stack — your choice.</p>
      </div>
    </section>
  )
}
