import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import HeroMesh from '../components/HeroMesh'
import { savePreEnroll } from '../lib/forms'
import { PartyPopper, CheckCircle2, Users, BadgeCheck } from 'lucide-react'

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

const OUTCOMES = [
  'Explain the AI landscape with authority to any board, investor or team',
  'Build a board-ready business case for AI investment',
  'Identify your highest-value AI opportunities using a proven framework',
  'Manage a blended team of humans and AI agents',
  'Write prompts that deliver real business results — not generic outputs',
  'Navigate AI risk and India\'s DPDP Act without legal paranoia',
  'Lead your organisation through the AI transition with a clear plan',
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
        <HeroMesh />
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
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <span className="course-hero-pill">✦ First Course</span>
                  <span className="course-hero-pill course-hero-pill--live">
                    <span className="pulse-dot" style={{ background: '#4ADE80' }} /> Launching 2026
                  </span>
                </div>

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
                  <span style={{ color: 'var(--accent-gold-light)' }}>Business Leaders</span>
                </h1>

                <p style={{
                  fontSize: '1.05rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.75,
                  maxWidth: 460,
                  marginBottom: 36,
                }}>
                  The 3-hour masterclass that turns AI curiosity into competitive advantage.
                  Built for leaders who need to act — not just understand.
                </p>

                {/* Proof points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
                  {[
                    'No coding. No jargon. No fluff.',
                    'Every module ends with a deliverable you use that week.',
                    'AI Roleplay Exams — prove you can lead the conversation, not just pass a test.',
                  ].map((pt) => (
                    <div key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <CheckCircle2 size={16} style={{ color: '#4ADE80', flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>{pt}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a href="#pre-enroll" className="btn btn-primary" style={{ background: '#fff', color: '#0A0A14', fontWeight: 700 }}>
                    Pre-Enroll — Free →
                  </a>
                  <Link to="/courses/businessleader/pricing" className="btn btn-white">
                    Pricing &amp; Referral Program
                  </Link>
                </div>

                <p style={{ marginTop: 16, fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
                  No payment now · Exclusive early-access discount at launch
                </p>
              </motion.div>

              {/* Right — course preview card */}
              <motion.div
                className="course-hero-right"
                initial={{ opacity: 0, x: 32, rotateY: -6 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="course-preview-card">
                  <div className="cpc-header">
                    <span className="cpc-label">Course Overview</span>
                    <span className="cpc-no-code">No coding required</span>
                  </div>
                  <div className="cpc-stat-row">
                    {[
                      { v: '5', l: 'Modules' },
                      { v: '22', l: 'Lessons' },
                      { v: '~3h', l: 'Duration' },
                    ].map((s) => (
                      <div key={s.l} className="cpc-stat">
                        <span className="cpc-stat-val">{s.v}</span>
                        <span className="cpc-stat-lbl">{s.l}</span>
                      </div>
                    ))}
                  </div>
                  <div className="cpc-modules">
                    {[
                      { n: '01', t: 'The AI Moment' },
                      { n: '02', t: 'AI Strategy' },
                      { n: '03', t: 'Agentic AI' },
                      { n: '04', t: 'AI Tools' },
                      { n: '05', t: 'Risk & Governance' },
                    ].map((m) => (
                      <div key={m.n} className="cpc-module-row">
                        <span className="cpc-module-n">{m.n}</span>
                        <span className="cpc-module-t">{m.t}</span>
                        <div className="cpc-module-bar" />
                      </div>
                    ))}
                  </div>
                  <div className="cpc-differentiator">
                    <div className="cpc-diff-icon">✦</div>
                    <div>
                      <div className="cpc-diff-title">AI Roleplay Exams</div>
                      <div className="cpc-diff-desc">Converse with an AI agent playing your CEO, CFO or board. Prove comprehension — not memorisation.</div>
                    </div>
                  </div>
                  <div className="cpc-price-row">
                    <span className="cpc-price">₹5,999</span>
                    <span className="cpc-price-note">launch price · limited seats</span>
                  </div>
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

      {/* ===== OUTCOMES ===== */}
      <section className="section" style={{ background: '#fff', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
              <div>
                <span className="section-label">Learning Outcomes</span>
                <h2 className="section-title" style={{ marginBottom: 12 }}>
                  What you will be able to do
                </h2>
                <p className="section-subtitle">
                  This is not a course about AI awareness. Every module ends with a deliverable you
                  can use at work the same day.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {OUTCOMES.map((o, i) => (
                  <motion.div
                    key={i}
                    className="outcome-row"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <CheckCircle2 size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                    <span>{o}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MODULES ===== */}
      <section className="section" style={{ background: 'var(--bg-surface)', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="section-label">The Curriculum</span>
              <h2 className="section-title">5 modules. 22 lessons. Zero jargon.</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Each module ends with a knowledge quiz and an AI Roleplay Exam — a live conversation
                with an AI agent that tests real comprehension, not memorisation.
              </p>
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
                      <p className="module-outcome">
                        <strong>Outcome:</strong> {mod.outcome}
                      </p>
                      <div className="module-highlights">
                        {mod.highlights.map((h, j) => (
                          <div key={j} className="module-highlight-item">
                            <span className="module-highlight-dot" />
                            {h}
                          </div>
                        ))}
                      </div>
                      <div className="module-card-badges">
                        <span className="module-badge">Knowledge Quiz</span>
                        <span className="module-badge module-badge--accent">AI Roleplay Exam</span>
                        <span className="module-badge">Downloadable PDF</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO IS THIS FOR ===== */}
      <section className="section" style={{ background: '#fff', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="section-label">Who This Is For</span>
              <h2 className="section-title">Built for leaders, not technologists</h2>
            </div>
          </ScrollReveal>
          <div className="persona-grid">
            {[
              { role: 'Founders & CEOs', desc: 'Who need to lead AI strategy without depending on their tech team for every decision.' },
              { role: 'Functional Heads', desc: 'Sales, Marketing, HR, Finance, Operations — building AI into your team\'s workflow.' },
              { role: 'Senior Managers', desc: 'Moving from dabbling with ChatGPT personally to driving real org-wide transformation.' },
              { role: 'Consultants & Advisors', desc: 'Who advise businesses on strategy and need a credible AI leadership framework.' },
            ].map((p, i) => (
              <ScrollReveal key={p.role} delay={i * 0.08}>
                <div className="glass-card persona-card">
                  <div className="persona-card-icon">
                    <Users size={22} style={{ color: 'var(--primary)' }} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 8 }}>{p.role}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AI ROLEPLAY DIFFERENTIATOR ===== */}
      <section style={{ background: 'var(--bg-dark)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div>
                <span className="section-label" style={{ color: 'var(--accent-gold)' }}>The Differentiator</span>
                <h2 className="section-title" style={{ color: 'var(--text-on-dark)', marginBottom: 20 }}>
                  You don't pass a test. You pass a conversation.
                </h2>
                <p style={{ color: 'var(--text-on-dark-muted)', lineHeight: 1.75, marginBottom: 24 }}>
                  After each module, an AI agent plays your CEO, CFO, or a skeptical board member and
                  asks you to explain what you just learned — in your own words. It evaluates clarity,
                  accuracy, and confidence. Not memorisation.
                </p>
                <p style={{ color: 'var(--text-on-dark-muted)', lineHeight: 1.75 }}>
                  This is the most powerful differentiator of this course. Learners leave able to have
                  these conversations at work — because they already have.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { scenario: 'Module 1', role: 'Board pitch', desc: 'Explain the AI landscape and why the company must act now' },
                  { scenario: 'Module 2', role: 'CFO pitch', desc: 'Present a business case with ROI to a skeptical finance head' },
                  { scenario: 'Module 3', role: 'COO dialogue', desc: 'Address a nervous operations manager\'s concerns about agents' },
                  { scenario: 'Module 4', role: 'EA briefing', desc: 'Explain your AI workflow to a skeptical executive assistant' },
                  { scenario: 'Module 5', role: 'Risk committee', desc: 'Convince the board\'s risk chair your AI plans are responsible' },
                ].map((r, i) => (
                  <motion.div
                    key={r.scenario}
                    className="roleplay-row"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <div>
                      <span className="roleplay-scenario">{r.scenario}</span>
                      <span className="roleplay-role">{r.role}</span>
                    </div>
                    <p className="roleplay-desc">{r.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PARTNER CTA ===== */}
      <section style={{ background: 'var(--bg-surface)', padding: '64px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="partner-cta-strip">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <BadgeCheck size={20} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontWeight: 700, fontSize: '1rem' }}>Resell &amp; Refer Program</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 480 }}>
                  L&amp;D consultants, HR heads, executive coaches and corporate trainers can earn a referral fee
                  for every enrollment they bring in. See the full earning model.
                </p>
              </div>
              <Link to="/courses/businessleader/pricing" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
                See Partner Pricing →
              </Link>
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
