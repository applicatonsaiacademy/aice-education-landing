import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import AITools from '../components/AITools'
import CountUp from '../components/CountUp'
import MarqueeTicker from '../components/MarqueeTicker'
import Innovators from '../components/Innovators'
import { Target, Zap, Bot, TrendingUp, Star, Volume2, VolumeX } from 'lucide-react'

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
  const [muted, setMuted] = useState(true)
  const [videoEnded, setVideoEnded] = useState(false)
  const [showAudioHint, setShowAudioHint] = useState(true)
  const videoRef = useRef(null)

  // Fade out the audio hint after 5 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowAudioHint(false), 5000)
    return () => clearTimeout(t)
  }, [])

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setMuted(videoRef.current.muted)
      if (!videoRef.current.muted) setShowAudioHint(false)
    }
  }

  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ===== HERO ===== */}
      <section className="hero">
        <video
          ref={videoRef}
          className="hero-video-bg"
          autoPlay
          muted
          playsInline
          src="/hero-video.mp4"
          onEnded={() => setVideoEnded(true)}
        />
        <div className="hero-video-overlay" />

        {/* Sound button + hint */}
        <div className="hero-sound-wrap">
          <AnimatePresence>
            {showAudioHint && muted && (
              <motion.span
                className="audio-hint-label"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                tap for audio
              </motion.span>
            )}
          </AnimatePresence>
          <button
            className="hero-sound-btn"
            onClick={toggleSound}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>

        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="hero-title">
              <span className="hero-accent-word">AI</span> for Everyone.
            </h1>

            <div className="hero-cta-group">
              <Link to="/courses" className="btn btn-primary">
                Explore Courses →
              </Link>
              <Link to="/newsletter" className="btn btn-white">
                Read Newsletter
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
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
