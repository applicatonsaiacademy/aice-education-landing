import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import HeroMesh from '../components/HeroMesh'
import { savePreEnroll } from '../lib/forms'
import {
  Code2, Megaphone, Heart, TrendingUp, Users, PartyPopper, ArrowRight,
} from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const FEATURED = {
  title: 'AI for Business Leaders',
  tag: 'First Course',
  description:
    'From AI awareness to competitive advantage. Designed for non-technical leaders who want to harness AI in their organisations — no coding required.',
  modules: [
    { num: '01', title: 'AI at Work: Your First Wins' },
    { num: '02', title: 'Your Personal AI Workbench' },
    { num: '03', title: 'AI Leadership Playbook' },
    { num: '04', title: 'AI Across Business Functions' },
    { num: '05', title: 'Workflows, Automation & Agents' },
  ],
  extras: [
    'Strategy, Brand & Culture',
    'Risk & Responsible AI',
    'Capstone: AI Strategy Mini-Memo',
  ],
  status: 'coming-soon',
  lmsUrl: null,
}

const TRACKS = [
  { id: 'engineers',   icon: Code2,      title: 'AI for Engineers',    desc: 'Build and deploy AI systems — APIs, fine-tuning, production pipelines.' },
  { id: 'marketers',  icon: Megaphone,   title: 'AI for Marketers',    desc: 'AI-powered campaigns, content, analytics, and customer intelligence.' },
  { id: 'healthcare', icon: Heart,       title: 'AI for Healthcare',   desc: 'Clinical, operational, and research applications in healthcare.' },
  { id: 'finance',    icon: TrendingUp,  title: 'AI for Finance',      desc: 'FP&A, fraud detection, compliance automation, and financial strategy.' },
  { id: 'hr',         icon: Users,       title: 'AI for HR & People',  desc: 'Recruiting, L&D, workforce analytics, and responsible AI in people decisions.' },
]

export default function Courses() {
  const [email, setEmail] = useState('')
  const [enrolled, setEnrolled] = useState(false)
  const [status, setStatus] = useState('idle')

  const handlePreEnroll = async (e) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      setStatus('loading')
      try {
        await savePreEnroll({ email })
        setEnrolled(true)
        setEmail('')
        setStatus('idle')
      } catch (err) {
        console.error(err)
        setStatus('error')
      }
    }
  }

  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ===== DARK HERO ===== */}
      <div className="dark-section-hero">
        <HeroMesh />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="dark-section-badge">✦ AICE Programs</div>
            <h1 className="dark-section-title">Our Courses</h1>
            <p className="dark-section-subtitle">
              Practical AI education — built for your role, your industry, your career.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===== FEATURED COURSE ===== */}
      <section className="featured-course-section">
        <div className="container">
          <ScrollReveal>
            <motion.div
              className="featured-course-card fcc-dark"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Top row */}
              <div className="fcc-topbar">
                <div className="fcc-topbar-left">
                  <span className="fcc-tag">{FEATURED.tag}</span>
                  <span className="fcc-status">
                    <span className="pulse-dot" />
                    Coming Soon
                  </span>
                </div>
                <span className="fcc-no-code">No coding required</span>
              </div>

              {/* Hero title */}
              <h2 className="fcc-hero-title">{FEATURED.title}</h2>

              {/* Modules grid */}
              <div className="fcc-modules-grid">
                {FEATURED.modules.map((m) => (
                  <div key={m.num} className="fcc-module-item">
                    <span className="fcc-module-num">{m.num}</span>
                    <span className="fcc-module-title">{m.title}</span>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="fcc-footer">
                <a href="#pre-enroll" className="btn btn-white fcc-cta">
                  Pre-Enroll for Early Access →
                </a>
                <p className="fcc-cta-note">No payment now. Exclusive discount at launch.</p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MORE TRACKS ===== */}
      <section className="tracks-section">
        <div className="container">
          <ScrollReveal>
            <div className="tracks-header">
              <div>
                <span className="section-label">More Tracks</span>
                <h2 className="tracks-heading">Every role. Every industry.</h2>
              </div>
              <span className="tracks-timeline">Launching throughout 2025–2026</span>
            </div>
          </ScrollReveal>

          <div className="tracks-list">
            {TRACKS.map((track, i) => {
              const Icon = track.icon
              return (
                <ScrollReveal key={track.id} delay={i * 0.07}>
                  <motion.div
                    className="track-row"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="track-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <div className="track-info">
                      <h4 className="track-title">{track.title}</h4>
                      <p className="track-desc">{track.desc}</p>
                    </div>
                    <span className="track-soon">Coming Soon</span>
                    <ArrowRight size={16} className="track-arrow" />
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== PRE-ENROLL ===== */}
      <section className="pre-enroll-section" id="pre-enroll">
        <div className="container">
          <ScrollReveal>
            <div className="pre-enroll-box">
              {!enrolled ? (
                <>
                  <span className="pre-enroll-eyebrow">Early Access</span>
                  <h2 className="pre-enroll-heading">Be the first to know.</h2>
                  <p className="pre-enroll-sub">
                    Join the waitlist for <em>AI for Business Leaders</em> and get an exclusive
                    discount when enrollment opens.
                  </p>
                  <form className="pre-enroll-form" onSubmit={handlePreEnroll}>
                    <div className="pre-enroll-row">
                      <input
                        type="email"
                        className="pre-enroll-input"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit" className="btn btn-white">
                        {status === 'loading' ? 'Saving…' : 'Join Waitlist →'}
                      </button>
                    </div>
                    {status === 'error' && (
                      <p className="pre-enroll-error">Could not save. Please try again.</p>
                    )}
                    <p className="pre-enroll-note">No spam. We'll only email when enrollment opens.</p>
                  </form>
                </>
              ) : (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    You're on the list! <PartyPopper size={24} />
                  </h3>
                  <p>We'll notify you when enrollment opens — with your exclusive discount.</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </motion.div>
  )
}
