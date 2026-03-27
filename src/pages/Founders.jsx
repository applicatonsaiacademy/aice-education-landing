import { motion } from 'framer-motion'
import HeroMesh from '../components/HeroMesh'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const founders = [
  {
    name: 'Manish Keswani',
    role: 'Co-Founder',
    focus: 'Strategy & Partnerships',
    image: 'https://www.aice.services/_next/image?url=%2Ffounders%2Fmanish.png&w=384&q=75',
    linkedin: 'https://linkedin.com/in/manish-keswani',
    x: 'https://x.com/ManishKeswani',
  },
  {
    name: 'Hrushikesh Kuklare',
    role: 'Co-Founder',
    focus: 'AI & Research',
    image: 'https://www.aice.services/_next/image?url=%2Ffounders%2Fhrushikesh.jpg&w=384&q=75',
    linkedin: 'https://linkedin.com/in/hrushikesh-kuklare',
    x: 'https://x.com/hrushikuklare',
  },
  {
    name: 'Ajinkya Hazare',
    role: 'Co-Founder',
    focus: 'Innovation & Growth',
    image: 'https://www.aice.services/_next/image?url=%2Ffounders%2Fajinkya.png&w=384&q=75',
    linkedin: 'https://linkedin.com/in/ajinkya-hazare',
    x: 'https://x.com/Ajinkya_Hazare',
  },
  {
    name: 'Siddhesh Bandgar',
    role: 'Co-Founder',
    focus: 'Innovation & Growth',
    image: '/founders/siddhesh.jpg',
    linkedin: 'https://www.linkedin.com/in/siddhesh-bandgar/',
    x: 'https://x.com/SiddheshBandgar',
  },
]

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
}

export default function Founders() {
  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Dark hero strip */}
      <div className="dark-section-hero">
        <HeroMesh />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="dark-section-badge">✦ The Team</div>
            <h1 className="dark-section-title">Meet the Founders</h1>
            <p className="dark-section-subtitle">
              The team building the future of AI education.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Founders grid */}
      <section style={{ padding: '80px 0 120px', background: 'var(--bg-page)' }}>
        <div className="container">
          <div className="founders-grid">
            {founders.map((f, i) => (
              <motion.div
                key={i}
                className="founder-card-v2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="founder-photo-wrap">
                  <img src={f.image} alt={f.name} className="founder-photo" />
                </div>
                <div className="founder-info">
                  <h3 className="founder-name-v2">{f.name}</h3>
                  <span className="founder-role-v2">{f.role}</span>
                  <span className="founder-focus">{f.focus}</span>
                </div>
                <div className="founder-socials-v2">
                  <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="founder-social-btn" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                  <a href={f.x} target="_blank" rel="noopener noreferrer" className="founder-social-btn" aria-label="X / Twitter">
                    <XIcon />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  )
}
