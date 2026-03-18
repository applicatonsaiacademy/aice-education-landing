import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { savePreEnroll } from '../lib/forms'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const courseHighlights = [
  'Identify high-impact AI opportunities',
  'Design AI-powered workflows & systems',
  'Deploy AI agents to automate tasks',
  'Increase productivity & efficiency',
  'Make better decisions with AI insights',
]

const modules = [
  { icon: '📘', title: 'AI Foundations', desc: 'Core concepts and strategic thinking' },
  { icon: '🔍', title: 'AI Opportunity Mapping', desc: 'Find high-impact AI use cases' },
  { icon: '⚙️', title: 'AI Workflows', desc: 'Design & deploy AI-powered systems' },
  { icon: '🤖', title: 'AI Agents', desc: 'Build digital employees for your business' },
  { icon: '📊', title: 'AI Decision Making', desc: 'Data-driven strategy & insights' },
  { icon: '🚀', title: 'AI Deployment', desc: 'From concept to real-world implementation' },
]

export default function Courses() {
  const [email, setEmail] = useState('')
  const [enrolled, setEnrolled] = useState(false)
  const [status, setStatus] = useState('idle') // idle | loading | error

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
      {/* ===== HERO ===== */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <motion.div
          className="hero-content"
          style={{ gridTemplateColumns: '1fr', textAlign: 'center', justifyItems: 'center' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-text" style={{ textAlign: 'center' }}>
            <div className="hero-badge">✦ AICE Programs</div>
            <h1 className="hero-title" style={{ fontStyle: 'italic' }}>
              Our Courses
            </h1>
            <p className="hero-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Practical AI education designed to deliver real-world results.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== FEATURED COURSE ===== */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center" style={{ marginBottom: '60px' }}>
              <span className="section-label">Featured Course</span>
              <h2 className="section-title">AI for Business Leaders</h2>
              <p className="section-subtitle mx-auto">
                Learn how to apply AI for real results. The most powerful technology shift of our generation, made accessible.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="course-featured">
              <div className="glass-card course-card">
                <div className="course-card-inner">
                  <div className="course-card-visual">
                    <div className="course-visual-content">
                      <div className="course-visual-icon">🧠</div>
                      <div className="course-visual-title">The AICE<br />AI Leadership Program</div>
                    </div>
                  </div>
                  <div className="course-card-content">
                    <div className="coming-soon-badge">
                      <span className="pulse-dot"></span>
                      Coming Soon
                    </div>
                    <h3>AI for Business Leaders</h3>
                    <p>
                      A comprehensive program that takes you from AI awareness to AI deployment capability.
                      No coding background required.
                    </p>
                    <div className="course-highlights">
                      {courseHighlights.map((h, i) => (
                        <div key={i} className="course-highlight">
                          <span className="check">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                    <a href="#pre-enroll" className="btn btn-primary" style={{ width: 'fit-content' }}>
                      Pre-Enroll Now →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Course Modules */}
          <div style={{ marginTop: '100px' }}>
            <ScrollReveal>
              <div className="text-center">
                <span className="section-label">Course Structure</span>
                <h2 className="section-title">What You'll Master</h2>
                <p className="section-subtitle mx-auto">
                  Each module builds upon the previous one. You progress only after demonstrating mastery.
                </p>
              </div>
            </ScrollReveal>

            <div className="feature-detail-grid" style={{ marginTop: '50px' }}>
              {modules.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="feature-detail-card">
                    <div className="feature-detail-card-icon">{m.icon}</div>
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div style={{ marginTop: '100px' }}>
            <ScrollReveal>
              <div className="cert-content">
                <div className="cert-visual">
                  <div className="cert-icon-large">🏅</div>
                  <div className="cert-title">AICE Certificate</div>
                  <div className="cert-subtitle">Applied Artificial Intelligence<br />for Business & Leadership</div>
                </div>
                <div className="cert-details">
                  <h3>AICE Certification</h3>
                  <p>
                    Participants who successfully complete the program earn the AICE Certificate —
                    signaling that you understand how to apply AI intelligently and responsibly.
                  </p>
                  <div className="cert-list">
                    <div className="cert-list-item"><span className="check">✓</span> Lifetime access to all course materials</div>
                    <div className="cert-list-item"><span className="check">✓</span> Recognized industry certification</div>
                    <div className="cert-list-item"><span className="check">✓</span> Practical, outcome-focused assessment</div>
                    <div className="cert-list-item"><span className="check">✓</span> Updates as AI technology evolves</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PRE-ENROLL ===== */}
      <section className="section" id="pre-enroll" style={{ background: 'var(--bg-page)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="pre-enroll">
              <div className="glass-card pre-enroll-card">
                {!enrolled ? (
                  <>
                    <div className="discount-badge">🎉 Pre-Enroll & Get 20% Off</div>
                    <h3>Be the First to Access</h3>
                    <p>
                      Join our early access list and lock in your exclusive discount when the AI for Business Leaders program launches.
                    </p>
                    <form className="pre-enroll-form" onSubmit={handlePreEnroll}>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit" className="btn btn-primary">
                        {status === 'loading' ? 'Saving…' : 'Pre-Enroll →'}
                      </button>
                      {status === 'error' && (
                        <p style={{ color: '#d04530', marginTop: '8px' }}>Could not save. Please try again.</p>
                      )}
                    </form>
                  </>
                ) : (
                  <div className="form-success">
                    <div className="success-icon">✓</div>
                    <h3>You're on the list! 🎉</h3>
                    <p>We'll notify you when enrollment opens — with your exclusive 20% discount.</p>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MORE COURSES ===== */}
      <section className="section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="more-courses">
              <span className="section-label">Coming Soon</span>
              <h2 className="section-title">More Courses on the Way</h2>
              <p className="section-subtitle mx-auto">
                AICE is building a comprehensive library of practical AI programs.
              </p>

              <div className="more-courses-grid">
                <div className="glass-card placeholder-card">
                  <div className="placeholder-icon">🔧</div>
                  <h4>AI for Operations</h4>
                  <p>Coming soon</p>
                </div>
                <div className="glass-card placeholder-card">
                  <div className="placeholder-icon">📣</div>
                  <h4>AI for Marketing</h4>
                  <p>Coming soon</p>
                </div>
                <div className="glass-card placeholder-card">
                  <div className="placeholder-icon">💰</div>
                  <h4>AI for Finance</h4>
                  <p>Coming soon</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}
