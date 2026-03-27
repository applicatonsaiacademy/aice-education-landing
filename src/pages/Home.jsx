import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedText from '../components/AnimatedText'
import HeroMesh from '../components/HeroMesh'
import AITools from '../components/AITools'
import CountUp from '../components/CountUp'
import MarqueeTicker from '../components/MarqueeTicker'
import Innovators from '../components/Innovators'
import { Target, Zap, Bot, TrendingUp, Star } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const features = [
  { icon: <Target size={28} />, title: 'Real-World Application', desc: 'Apply AI in actual business situations, not just theory.' },
  { icon: <Zap size={28} />, title: 'Multiply Productivity', desc: 'Automate repetitive work and amplify decision-making power.' },
  { icon: <Bot size={28} />, title: 'Build AI Agents', desc: 'Design AI systems that function like digital employees.' },
  { icon: <TrendingUp size={28} />, title: 'Create Leverage', desc: 'Build systems that increase revenue and reduce operational drag.' },
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
  { target: '1000', suffix: '+', label: 'Learners Worldwide' },
  { target: '6', suffix: '', label: 'Core Modules' },
  { target: '98', suffix: '%', label: 'Satisfaction Rate' },
  { isInfinity: true, label: 'Lifetime Access' },
]

export default function Home() {
  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ===== HERO ===== */}
      <section className="hero">
        <HeroMesh />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero-text">
            {/* Audience pills */}
            <motion.div
              className="hero-pills"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {['Business Leaders', 'Engineers', 'Marketers', 'Healthcare'].map((label) => (
                <span key={label} className="hero-pill">
                  <span className="hero-pill-dot" />
                  {label}
                </span>
              ))}
            </motion.div>

            <div className="hero-badge">
              ✦ AI Centre of Excellence
            </div>

            <AnimatedText
              text="Where Every Role Meets AI"
              el="h1"
              className="hero-title"
            />

            <p className="hero-subtitle">
              Practical AI education for every industry — business, healthcare, engineering, marketing, and more.
            </p>

            <div className="hero-cta-group">
              <Link to="/courses" className="btn btn-primary">
                Explore Courses →
              </Link>
              <Link to="/newsletter" className="btn btn-white">
                Read Newsletter
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* ===== EDITORIAL STATEMENT ===== */}
      <section className="editorial-section">
        <div className="container">
          <ScrollReveal>
            <div className="editorial-grid">
              <div className="editorial-left">
                <span className="editorial-eyebrow">Our Approach</span>
                <h2 className="editorial-heading">
                  Built for your role.<br />Not for AI in general.
                </h2>
                <p className="editorial-body">
                  Every industry demands a different AI strategy. AICE programs are built
                  around your domain — so every lesson applies directly to your work,
                  your decisions, and your career.
                </p>
                <Link to="/courses" className="btn btn-outline-dark" style={{ marginTop: '36px' }}>
                  View All Courses →
                </Link>
              </div>
              <div className="editorial-right">
                <div className="editorial-stats">
                  <motion.div
                    className="editorial-stat"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <span className="editorial-stat-num">6+</span>
                    <span className="editorial-stat-label">Industry Tracks</span>
                  </motion.div>
                  <motion.div
                    className="editorial-stat"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="editorial-stat-num">5</span>
                    <span className="editorial-stat-label">Core Modules</span>
                  </motion.div>
                  <motion.div
                    className="editorial-stat"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="editorial-stat-num">∞</span>
                    <span className="editorial-stat-label">Lifetime Access</span>
                  </motion.div>
                  <motion.div
                    className="editorial-stat"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="editorial-stat-num">0</span>
                    <span className="editorial-stat-label">Code Required</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MARQUEE TICKER ===== */}
      <MarqueeTicker />

      {/* ===== FEATURE DETAIL CARDS ===== */}
      <section className="feature-detail-section">
        <div className="container">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label">Why AICE</span>
              <h2 className="section-title">
                Most AI courses teach tools. We teach <span style={{ color: 'var(--primary)' }}>capability</span>.
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
                  className="feature-detail-card kontenta-card"
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="kontenta-card-number">0{i + 1}</div>
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
                  <div className="stat-number">
                    {s.isInfinity ? '∞' : <CountUp target={s.target} suffix={s.suffix} />}
                  </div>
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
                  <div className="testimonial-stars" style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '16px' }}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
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
