import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedText from '../components/AnimatedText'
import ScrollFillText from '../components/ScrollFillText'
import AnimatedGlobe from '../components/AnimatedGlobe'
import AITools from '../components/AITools'
import CountUp from '../components/CountUp'
import MarqueeTicker from '../components/MarqueeTicker'
import Innovators from '../components/Innovators'
import { Target, Zap, Bot, TrendingUp, BookOpen, Rocket, Star } from 'lucide-react'

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

      {/* ===== HERO — Jeton Style ===== */}
      <section className="hero">
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
            
            <AnimatedText 
              text="The AI Academy for Business Leaders" 
              el="h1" 
              className="hero-title" 
            />
            
            <p className="hero-subtitle" style={{ marginBottom: '40px', maxWidth: '600px', fontSize: '1.15rem' }}>
              Master artificial intelligence to scale operations, multiply revenue, and build an <span style={{ color: 'var(--primary)' }}>unfair competitive advantage</span>.
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
          <div className="hero-globe-wrapper">
            <AnimatedGlobe />
          </div>
        </motion.div>

        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* ===== MASSIVE IMPACT HEADING — Jeton Style ===== */}
      <section className="impact-section" style={{ minHeight: '120vh' }}>
        <ScrollFillText 
          text="AI Mastery for Business Leaders" 
          className="section-title-massive" 
        />
        <div className="impact-scroll">
          <span>Discover</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* ===== COLOR-CODED FEATURES — Jeton Style ===== */}
      <section className="features-color-section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <div className="feature-color-list" style={{ alignItems: 'flex-start', margin: 0 }}>
            <ScrollReveal>
              <motion.div className="feature-color-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <div className="feature-color-icon green"><BookOpen size={24} /></div>
                <span className="feature-color-text green">Learn</span>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <motion.div className="feature-color-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <div className="feature-color-icon blue"><Zap size={24} /></div>
                <span className="feature-color-text blue">Build</span>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <motion.div className="feature-color-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <div className="feature-color-icon coral"><Rocket size={24} /></div>
                <span className="feature-color-text coral">Deploy</span>
              </motion.div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="floating-cards-visual">
              <div className="floating-card fc-1">
                <div className="fc-header">
                  <div className="fc-dot red"></div><div className="fc-dot yellow"></div><div className="fc-dot green"></div>
                </div>
                <div className="fc-body">
                   <div className="fc-line w-80"></div>
                   <div className="fc-line w-60"></div>
                   <div className="fc-line w-90"></div>
                   <div className="fc-line w-40" style={{ marginTop: '24px' }}></div>
                </div>
              </div>
              
              <div className="floating-card fc-2">
                <div className="fc-icon"><Bot size={20} /></div>
                <div className="fc-text">
                  <div className="fc-title">AI Agent Deployed</div>
                  <div className="fc-subtitle">Status: Active</div>
                </div>
              </div>

              <div className="floating-card fc-3">
                <TrendingUp size={32} color="var(--accent-green)" />
                <div className="fc-stat">+140% Output</div>
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
                Most AI courses teach tools. We teach <span style={{ color: '#000' }}>capability</span>.
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
