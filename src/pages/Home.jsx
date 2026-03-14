import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedText from '../components/AnimatedText'
import AITools from '../components/AITools'
import Innovators from '../components/Innovators'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const features = [
  { icon: '🎯', title: 'Real-World Application', desc: 'Apply AI in actual business situations, not just theory.' },
  { icon: '⚡', title: 'Multiply Productivity', desc: 'Automate repetitive work and amplify decision-making power.' },
  { icon: '🤖', title: 'Build AI Agents', desc: 'Design AI systems that function like digital employees.' },
  { icon: '📈', title: 'Create Leverage', desc: 'Build systems that increase revenue and reduce operational drag.' },
]

const testimonials = [
  {
    title: 'Game-Changing Program',
    text: 'AICE completely changed how I think about AI in business. The practical approach means I was applying what I learned from day one.',
    name: 'Priya S.',
    role: 'Startup Founder',
    initials: 'PS',
  },
  {
    title: 'Exactly What Leaders Need',
    text: 'As a CEO, I needed to understand AI without getting lost in technical jargon. AICE delivers exactly that — clear, actionable knowledge.',
    name: 'Marcus R.',
    role: 'CEO, Tech Firm',
    initials: 'MR',
  },
  {
    title: 'Practical & Powerful',
    text: 'The modules on AI agents were incredible. I built automation workflows for my team within weeks of completing the course.',
    name: 'Aisha K.',
    role: 'Operations Manager',
    initials: 'AK',
  },
  {
    title: 'Worth Every Minute',
    text: 'The certification carries weight. It signals that you truly understand how to deploy AI responsibly and effectively.',
    name: 'James L.',
    role: 'Business Consultant',
    initials: 'JL',
  },
]

const stats = [
  { number: '1,000+', label: 'Learners Worldwide' },
  { number: '6', label: 'Core Modules' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '∞', label: 'Lifetime Access' },
]

export default function Home() {
  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ===== HERO — Jeton Style ===== */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero-text" style={{ gridColumn: '1 / -1', maxWidth: '720px' }}>
            <div className="hero-badge">
              ✦ Artificial Intelligence Centre of Excellence
            </div>
            
            <AnimatedText 
              text="The AI Academy for Business Leaders" 
              el="h1" 
              className="hero-title" 
            />
            
            <p className="hero-subtitle">
              Strategic, outcome-driven AI education. Learn to leverage artificial intelligence 
              to scale operations, increase revenue, and build a massive competitive advantage.
            </p>
            <p className="hero-subtitle" style={{ marginBottom: '32px', maxWidth: '580px' }}>
              Equipping today's executives, founders, and entrepreneurs with the practical AI strategies to drive immediate business impact.
            </p>
            <div className="hero-cta-group">
              <Link to="/courses" className="btn btn-white btn-glow">
                Explore Courses →
              </Link>
              <Link to="/contact" className="btn btn-white">
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* ===== MASSIVE IMPACT HEADING — Jeton Style ===== */}
      <section className="impact-section">
        <ScrollReveal>
          <AnimatedText 
            text="AI Mastery for Business Leaders" 
            el="h2" 
            className="section-title-massive" 
          />
        </ScrollReveal>
        <div className="impact-scroll">
          <span>Discover</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* ===== COLOR-CODED FEATURES — Jeton Style ===== */}
      <section className="features-color-section">
        <div className="feature-color-list">
          <ScrollReveal>
            <motion.div className="feature-color-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="feature-color-icon green">📚</div>
              <span className="feature-color-text green">Learn</span>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <motion.div className="feature-color-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="feature-color-icon blue">⚡</div>
              <span className="feature-color-text blue">Build</span>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <motion.div className="feature-color-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="feature-color-icon coral">🚀</div>
              <span className="feature-color-text coral">Deploy</span>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FEATURE DETAIL CARDS ===== */}
      <section className="feature-detail-section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Why AICE</span>
              <h2 className="section-title">
                Most AI courses teach tools.<br />We teach capability.
              </h2>
              <p className="section-subtitle mx-auto">
                Our programs focus on helping you create real leverage with AI — not just follow tutorials.
              </p>
            </div>
          </ScrollReveal>

          <div className="feature-detail-grid">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="feature-detail-card"
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="feature-detail-card-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI TOOLS GRID ===== */}
      <AITools />

      {/* ===== STATS BAR ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="stat-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INNOVATORS SECTION ===== */}
      <Innovators />

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Hear From Our Learners</span>
              <h2 className="section-title">
                Real feedback from real professionals
              </h2>
            </div>
          </ScrollReveal>

          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="testimonial-card"
                  whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="testimonial-stars">★★★★★</div>
                  <div className="testimonial-title">{t.title}</div>
                  <div className="testimonial-text">{t.text}</div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.initials}</div>
                    <div>
                      <div className="testimonial-author-name">{t.name}</div>
                      <div className="testimonial-author-role">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <motion.div
              className="cta-banner"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2>Start Your AI Journey Today</h2>
              <p>
                Join professionals and leaders preparing for the next era of business and technology.
              </p>
              <Link to="/courses" className="btn btn-white">
                Enroll Now →
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

    </motion.div>
  )
}
