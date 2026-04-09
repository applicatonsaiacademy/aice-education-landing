import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { savePreEnroll } from '../lib/forms'
import { PartyPopper, CheckCircle2, Mic2, FileText } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const STATS = [
  { value: '5', label: 'Modules' },
  { value: '22', label: 'Lessons' },
  { value: '5', label: 'AI Roleplay Exams' },
  { value: '8', label: 'Downloadable PDFs' },
  { value: '~3 hrs', label: 'Total Duration' },
]

const MODULES = [
  {
    num: '01',
    title: 'The AI Moment',
    subtitle: 'What\'s actually happening right now',
    duration: '35 min · 5 lessons',
    outcome: 'Confidently explain the AI landscape to any stakeholder and feel genuine urgency — not overwhelm.',
    highlights: [
      'GenAI vs Agents vs Automation — plain English',
      'Live agent demo: 3 hours of work in 4 minutes',
      'The Denier, Dabbler & Driver self-assessment',
      'India\'s AI moment: GCC, IndiaAI Mission, DPDP Act',
    ],
  },
  {
    num: '02',
    title: 'AI Strategy',
    subtitle: 'Finding your highest-value moves',
    duration: '40 min · 5 lessons',
    outcome: 'A completed AI opportunity map for your org, a board-level business case, and a 90-day roadmap.',
    highlights: [
      'Why 80% of AI pilots fail — and the 3 things survivors do',
      'The AI opportunity map: High Impact × Low Complexity',
      'Build, buy or partner — vendor evaluation without tech expertise',
      'ROI model + 90-day rollout template',
    ],
  },
  {
    num: '03',
    title: 'Agentic AI',
    subtitle: 'Your new digital workforce',
    duration: '35 min · 4 lessons',
    outcome: 'Understand agentic AI at a leadership level, identify 2–3 agent opportunities in your org, and build a basic workflow yourself.',
    highlights: [
      'Agents vs chatbots — the crucial leadership difference',
      'Sector deep-dives: BFSI, manufacturing, retail, healthcare',
      'Managing a blended team: humans + AI agents',
      'Live no-code build: a working agent in 9 minutes',
    ],
  },
  {
    num: '04',
    title: 'AI Tools Every Leader Must Use',
    subtitle: 'Practical from the next morning',
    duration: '35 min · 5 lessons',
    outcome: 'Actively using 3+ AI tools, writing effective prompts, and a personal productivity workflow ready to start tomorrow.',
    highlights: [
      '5-part prompt formula for business outcomes',
      'The leader\'s curated AI stack: 8 tools, 8 use cases',
      'Daily AI workflow: save 2 hours every day',
      'Microsoft Copilot — what to demand from your IT team',
    ],
  },
  {
    num: '05',
    title: 'Risk, Governance & Leading the Change',
    subtitle: 'Grounded. Empowered. Ready.',
    duration: '30 min · 3 lessons',
    outcome: 'A clear plan to manage AI risk, bring your team along, and leave with a written 30-day commitment.',
    highlights: [
      'Hallucinations, DPDP Act 2023, data privacy — real risks only',
      'The AI Champion model for change management',
      'What to say to your team next Monday — script included',
      '30-day action card + peer community access',
    ],
  },
]

export default function Courses() {
  const [email, setEmail] = useState('')
  const [enrolled, setEnrolled] = useState(false)
  const [status, setStatus] = useState('idle')
  const [openModule, setOpenModule] = useState(null)

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
      <div className="dark-section-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="container">
            <div className="course-hero-grid">

              {/* Left — copy */}
              <motion.div
                className="course-hero-left"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: '#fff',
                  marginBottom: 24,
                }}>
                  AI for<br />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>Business Leaders</span>
                </h1>

                <p style={{
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.75,
                  maxWidth: 460,
                  marginBottom: 40,
                }}>
                  The 3-hour masterclass that turns AI curiosity into competitive advantage.
                  Built for leaders who need to act — not just understand.
                </p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a href="#pre-enroll" className="btn btn-primary">
                    Pre-Enroll — Free →
                  </a>
                </div>

                <p style={{ marginTop: 16, fontSize: '0.75rem', color: 'rgba(255,255,255,0.18)' }}>
                  No payment now · Exclusive early-access discount at launch
                </p>
              </motion.div>

              {/* Right — hero image */}
              <motion.div
                className="course-hero-right"
                initial={{ opacity: 0, x: 32, rotateY: -6 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="course-hero-image-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85"
                    alt="Business professional working with AI tools"
                    className="course-hero-image"
                  />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* ===== STATS BAR ===== */}
      <section style={{ background: '#0A0A14', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 32 }}>
        <div className="container">
          <div className="course-stats-bar">
            {STATS.map((s) => (
              <div key={s.label} className="course-stat-item">
                <span className="course-stat-value">{s.value}</span>
                <span className="course-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENGAGEMENT STRIP ===== */}
      <section style={{ background: 'var(--bg-page)', borderBottom: '1px solid var(--border)', padding: '52px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)' }}>
              {[
                {
                  icon: <Mic2 size={22} style={{ color: 'var(--primary)' }} />,
                  title: 'AI Roleplay Exam',
                  desc: 'Every module. An AI agent plays your CEO, CFO, or board — and evaluates your response.',
                  accent: true,
                },
                {
                  icon: <CheckCircle2 size={22} style={{ color: 'var(--primary)' }} />,
                  title: 'Knowledge Quiz',
                  desc: 'Auto-graded after each lesson. Instant feedback, no waiting.',
                },
                {
                  icon: <FileText size={22} style={{ color: 'var(--primary)' }} />,
                  title: 'Downloadable PDF',
                  desc: 'Frameworks and templates with every module. Keep them forever.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  style={{
                    background: 'var(--bg-page)',
                    padding: '36px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  {item.icon}
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    marginBottom: 0,
                  }}>
                    {item.title}
                    {item.accent && (
                      <span style={{
                        marginLeft: 8,
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--primary)',
                        background: 'rgba(184,144,42,0.1)',
                        padding: '2px 7px',
                        borderRadius: 4,
                      }}>Main Feature</span>
                    )}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MODULES ===== */}
      <section className="section" style={{ background: 'var(--bg-surface)', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span className="section-label">The Curriculum</span>
              <h2 className="section-title">5 modules. 22 lessons. Zero jargon.</h2>
            </div>
            <div className="curriculum-includes" style={{ maxWidth: 860, margin: '0 auto 40px' }}>
              <div className="curriculum-includes-item">
                <span className="curriculum-includes-dot" />
                Knowledge quiz after every lesson
              </div>
              <div className="curriculum-includes-item">
                <span className="curriculum-includes-dot" />
                Downloadable PDF framework per module
              </div>
              <div className="curriculum-includes-item">
                <span className="curriculum-includes-dot" />
                One AI roleplay exam at end of each module
              </div>
            </div>
          </ScrollReveal>

          <div className="modules-list">
            {MODULES.map((mod, i) => (
              <ScrollReveal key={mod.num} delay={i * 0.05}>
                <div
                  className={`module-card ${openModule === i ? 'module-card--open' : ''}`}
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                >
                  <div className="module-card-header">
                    <div className="module-card-left">
                      <span className="module-num">{mod.num}</span>
                      <div>
                        <h3 className="module-title">{mod.title}</h3>
                        <p className="module-subtitle">{mod.subtitle}</p>
                      </div>
                    </div>
                    <div className="module-card-right">
                      <span className="module-duration">{mod.duration}</span>
                      <span className="module-toggle">{openModule === i ? '−' : '+'}</span>
                    </div>
                  </div>

                  {openModule === i && (
                    <motion.div
                      className="module-card-body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 16 }}>
                        {mod.outcome}
                      </p>
                      <div className="module-highlights">
                        {mod.highlights.map((h, j) => (
                          <div key={j} className="module-highlight-item">
                            <span className="module-highlight-dot" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI ROLEPLAY DIFFERENTIATOR ===== */}
      <section style={{ background: 'var(--bg-dark)', padding: '96px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
              <div>
                <span className="section-label" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.16em' }}>The Differentiator</span>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: 400,
                  color: '#fff',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  marginBottom: 20,
                  marginTop: 12,
                }}>
                  You don't pass a test.<br />You pass a conversation.
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontSize: '1rem', marginBottom: 32 }}>
                  After each module, an AI agent plays your CEO, CFO, or a board member. It evaluates
                  clarity, accuracy, and confidence — not memorisation. Learners leave able to have
                  these conversations at work, because they already have.
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '10px 18px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', flexShrink: 0, boxShadow: '0 0 8px rgba(74,222,128,0.6)' }} />
                  5 AI roleplay scenarios · No memorisation
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { num: '01', scenario: 'Module 1', role: 'Board pitch', desc: 'Explain the AI landscape and why the company must act now' },
                  { num: '02', scenario: 'Module 2', role: 'CFO pitch', desc: 'Present a business case with ROI to a skeptical finance head' },
                  { num: '03', scenario: 'Module 3', role: 'COO dialogue', desc: 'Address a nervous operations manager\'s concerns about agents' },
                  { num: '04', scenario: 'Module 4', role: 'EA briefing', desc: 'Explain your AI workflow to a skeptical executive assistant' },
                  { num: '05', scenario: 'Module 5', role: 'Risk committee', desc: 'Convince the board\'s risk chair your AI plans are responsible' },
                ].map((r, i) => (
                  <motion.div
                    key={r.scenario}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 16,
                      padding: '16px 20px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 'var(--radius-md)',
                      transition: 'background 0.2s, border-color 0.2s',
                    }}
                    whileHover={{ background: 'rgba(255,255,255,0.055)', borderColor: 'rgba(255,255,255,0.12)' }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.15)',
                      lineHeight: 1,
                      minWidth: 28,
                      paddingTop: 2,
                    }}>{r.num}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.35)',
                        }}>{r.scenario}</span>
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                        <span style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'rgba(255,255,255,0.75)',
                        }}>{r.role}</span>
                      </div>
                      <p style={{
                        fontSize: '0.83rem',
                        color: 'rgba(255,255,255,0.38)',
                        lineHeight: 1.55,
                        margin: 0,
                      }}>{r.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
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
                  <h2 className="pre-enroll-heading">Be the first to enroll.</h2>
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
                    <p className="pre-enroll-note">No spam. No payment now. Exclusive discount at launch.</p>
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
