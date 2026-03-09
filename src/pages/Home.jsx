import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const features = [
  { icon: '🎯', title: 'Real-World Application', desc: 'Apply AI in actual business situations, not just theory.' },
  { icon: '⚡', title: 'Multiply Productivity', desc: 'Automate repetitive work and amplify decision-making power.' },
  { icon: '🤖', title: 'Build AI Agents', desc: 'Design AI systems that function like digital employees.' },
  { icon: '📈', title: 'Create Leverage', desc: 'Build systems that increase revenue and reduce operational drag.' },
]

const personas = [
  { icon: '🚀', title: 'Entrepreneurs & Founders', desc: 'Build AI-powered modern businesses' },
  { icon: '👔', title: 'Business Leaders', desc: 'Drive growth with AI-driven strategy' },
  { icon: '📊', title: 'Managers', desc: 'Optimize complex operations with AI' },
  { icon: '💡', title: 'Professionals', desc: 'Stay ahead of the AI revolution' },
]

const learningFeatures = [
  { icon: '🎬', label: 'Video Lessons' },
  { icon: '📖', label: 'Detailed Chapters' },
  { icon: '🎧', label: 'Audio Modules' },
  { icon: '✍️', label: 'Interactive Quizzes' },
  { icon: '📋', label: 'Graded Assessments' },
  { icon: '🔬', label: 'Real-World Exercises' },
  { icon: '♾️', label: 'Lifetime Access' },
  { icon: '🏆', label: 'AICE Certification' },
]

export default function Home() {
  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/hero-bg.png" alt="" aria-hidden="true" />
        </div>
        <div className="hero-overlay-gradient"></div>
        <div className="hero-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero-badge">
            ✦ Artificial Intelligence Centre of Excellence
          </div>
          <h1 className="hero-title">
            Building an{' '}
            <span className="gradient-text">AI-Ready</span>{' '}
            World
          </h1>
          <p className="hero-subtitle">
            Practical, outcome-driven AI education for leaders and professionals.
            Learn to apply AI for real business results — not just theory.
          </p>
          <div className="hero-cta-group">
            <Link to="/courses" className="btn btn-primary btn-glow">
              Explore Courses →
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </motion.div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* ===== WHAT MAKES AICE DIFFERENT ===== */}
      <section className="section">
        <div className="container text-center">
          <ScrollReveal>
            <span className="section-label">Why AICE</span>
            <h2 className="section-title mx-auto">
              Most AI courses teach tools.<br />We teach capability.
            </h2>
            <p className="section-subtitle mx-auto">
              Our programs focus on helping you create real leverage with AI — not just follow tutorials.
            </p>
          </ScrollReveal>

          <div className="features-grid">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESIGNED FOR ===== */}
      <section className="section">
        <div className="container text-center">
          <ScrollReveal>
            <span className="section-label">Who It's For</span>
            <h2 className="section-title mx-auto">
              Designed for Real-World Impact
            </h2>
            <p className="section-subtitle mx-auto">
              Whether you're building, leading, or managing — AICE prepares you to deploy AI effectively.
            </p>
          </ScrollReveal>

          <div className="persona-grid">
            {personas.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card persona-card">
                  <div className="persona-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEARNING EXPERIENCE ===== */}
      <section className="section">
        <div className="container text-center">
          <ScrollReveal>
            <span className="section-label">The Experience</span>
            <h2 className="section-title mx-auto">
              A Modern AI Learning Platform
            </h2>
            <p className="section-subtitle mx-auto">
              Progress module by module, unlocking the next stage as you demonstrate mastery.
            </p>
          </ScrollReveal>

          <div className="learning-grid">
            {learningFeatures.map((lf, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="learning-item">
                  <span className="learning-icon">{lf.icon}</span>
                  <span>{lf.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner">
              <div className="container">
                <h2 className="gradient-text">Start Your AI Journey Today</h2>
                <p>
                  Join professionals and leaders preparing for the next era of business and technology.
                </p>
                <Link to="/courses" className="btn btn-primary btn-glow">
                  Enroll Now →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
