import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

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
        <div className="hero-bg">
          <img src="/hero-bg.png" alt="" aria-hidden="true" />
        </div>
        <div className="hero-overlay-gradient"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero-text">
            <div className="hero-badge">
              ✦ Artificial Intelligence Centre of Excellence
            </div>
            <h1 className="hero-title">
              One platform<br />for all AI<br />learning
            </h1>
            <p className="hero-subtitle">
              Practical, outcome-driven AI education for leaders and professionals.
              Learn to apply AI for real business results — not just theory.
            </p>
            <div className="hero-cta-group">
              <Link to="/courses" className="btn btn-white">
                Explore Courses →
              </Link>
              <Link to="/contact" className="btn btn-white">
                Learn More
              </Link>
            </div>
          </div>

          <div className="hero-right">
            <p className="hero-right-text">
              Building an AI-ready world through practical education for leaders, entrepreneurs, and professionals.
            </p>
            <div className="hero-visual">
              <img src="/hero-bg.png" alt="AI Education Visual" />
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
          <h2 className="section-title-massive">
            Master AI for<br />Real-World Impact
          </h2>
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
            <div className="feature-color-item">
              <div className="feature-color-icon green">📚</div>
              <span className="feature-color-text green">Learn</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="feature-color-item">
              <div className="feature-color-icon blue">⚡</div>
              <span className="feature-color-text blue">Build</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="feature-color-item">
              <div className="feature-color-icon coral">🚀</div>
              <span className="feature-color-text coral">Deploy</span>
            </div>
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
                <div className="feature-detail-card">
                  <div className="feature-detail-card-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="stat-item">
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
                <div className="testimonial-card">
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
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner">
              <h2>Start Your AI Journey Today</h2>
              <p>
                Join professionals and leaders preparing for the next era of business and technology.
              </p>
              <Link to="/courses" className="btn btn-white">
                Enroll Now →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </motion.div>
  )
}
