import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import HeroMesh from '../components/HeroMesh'
import { savePreEnroll } from '../lib/forms'
import {
  CheckCircle2, IndianRupee, Users, TrendingUp, Share2, BadgeCheck, ArrowLeft, PartyPopper,
} from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const TIERS = [
  {
    name: 'Self-Enroll',
    price: '5,999',
    priceNote: 'Launch price — limited seats',
    target: 'Individual learners',
    features: [
      'Full 5-module course (22 lessons)',
      '5 AI Roleplay Exams',
      '8 downloadable PDFs & templates',
      'Knowledge quizzes — auto-graded',
      'Lifetime access, self-paced',
      'Certificate of completion',
    ],
    cta: 'Join Waitlist',
    ctaLink: '/courses#pre-enroll',
    highlight: false,
  },
  {
    name: 'Standard',
    price: '7,999',
    priceNote: 'Post-launch standard price',
    target: 'Individual learners',
    features: [
      'Everything in Launch price',
      'Access to alumni community',
      'Priority support',
    ],
    cta: 'Join Waitlist',
    ctaLink: '/courses#pre-enroll',
    highlight: true,
  },
  {
    name: 'Corporate / Group',
    price: 'Custom',
    priceNote: 'Min. 5 seats',
    target: 'Teams & organisations',
    features: [
      'Volume pricing (5+ seats)',
      'Cohort learning option',
      'Custom India / regional context layer',
      'LMS integration support',
      'Dedicated account manager',
      'Invoice & PO accepted',
    ],
    cta: 'Talk to Us',
    ctaLink: '/contact',
    highlight: false,
  },
]

const PARTNER_STEPS = [
  {
    step: '01',
    title: 'Get your referral link',
    desc: 'Drop your email below. We\'ll send you a unique tracking link and a partner kit — course one-pager, email templates, and a slide deck. No approval process. Anyone can refer.',
  },
  {
    step: '02',
    title: 'Share with leaders you know',
    desc: 'Send your link to anyone — colleagues, clients, your LinkedIn network, a WhatsApp group. Every enrollment made through your link is automatically tracked.',
  },
  {
    step: '03',
    title: 'Earn 20% per enrollment',
    desc: 'You earn 20% of the course fee for every enrollment you generate — paid monthly. No minimum. No cap. No expiry on your link.',
  },
]

const WHO_EARNS = [
  { role: 'L&D Consultants', context: 'Recommend to clients building AI capability in their leadership teams.' },
  { role: 'HR Heads & CPOs', context: 'Offer to senior managers and functional leads as part of an upskilling initiative.' },
  { role: 'Executive Coaches', context: 'Add to your coaching engagement as a structured AI literacy module.' },
  { role: 'Management Consultants', context: 'Recommend to C-suite and strategy clients navigating AI transformation.' },
  { role: 'Corporate Trainers', context: 'Bundle alongside your existing programmes for senior leadership cohorts.' },
  { role: 'Business School Faculty', context: 'Recommend as a practical companion to executive education programmes.' },
]

export default function CoursesPricing() {
  const [referrals, setReferrals] = useState(10)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle')

  const launchPrice = 5999
  const commission = 0.20
  const earning = Math.round(referrals * launchPrice * commission)

  const handlePartnerApply = async (e) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      setStatus('loading')
      try {
        await savePreEnroll({ email, type: 'partner' })
        setSubmitted(true)
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
      <div className="dark-section-hero" style={{ minHeight: '56vh' }}>
        <HeroMesh />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Link
              to="/courses"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontWeight: 500,
                marginBottom: 28, transition: '0.2s',
              }}
            >
              <ArrowLeft size={14} /> Back to Course
            </Link>
            <div className="dark-section-badge">✦ AI for Business Leaders</div>
            <h1 className="dark-section-title" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', marginBottom: 16 }}>
              Pricing &amp; Partner Program
            </h1>
            <p className="dark-section-subtitle" style={{ maxWidth: 560, margin: '0 auto' }}>
              Enroll yourself, book for your team — or earn a referral fee for every leader
              you bring into the program.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===== PRICING TIERS ===== */}
      <section className="section" style={{ background: '#fff', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="section-label">Course Pricing</span>
              <h2 className="section-title">Simple, transparent pricing</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Rs. 5,000 – Rs. 8,000 for a 3-hour masterclass that changes how you lead
                in the AI era. No subscription. No ongoing fees.
              </p>
            </div>
          </ScrollReveal>

          <div className="pricing-grid">
            {TIERS.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 0.08}>
                <div className={`pricing-card ${tier.highlight ? 'pricing-card--highlight' : ''}`}>
                  {tier.highlight && (
                    <div className="pricing-popular-badge">Most Popular</div>
                  )}
                  <div className="pricing-tier-name">{tier.name}</div>
                  <div className="pricing-price">
                    {tier.price === 'Custom' ? (
                      <span className="pricing-price-value">Custom</span>
                    ) : (
                      <>
                        <span className="pricing-price-symbol">₹</span>
                        <span className="pricing-price-value">{tier.price}</span>
                      </>
                    )}
                  </div>
                  <div className="pricing-price-note">{tier.priceNote}</div>
                  <ul className="pricing-features">
                    {tier.features.map((f) => (
                      <li key={f} className="pricing-feature-item">
                        <CheckCircle2 size={15} style={{ color: tier.highlight ? '#fff' : 'var(--primary)', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={tier.ctaLink}
                    className={`btn ${tier.highlight ? 'btn-white' : 'btn-secondary'}`}
                    style={{ width: '100%', marginTop: 'auto', justifyContent: 'center' }}
                  >
                    {tier.cta} →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNER PROGRAM INTRO ===== */}
      <section style={{ background: 'var(--bg-dark)', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="section-label" style={{ color: 'var(--accent-gold)' }}>Referral Partner Program</span>
              <h2 className="section-title" style={{ color: 'var(--text-on-dark)', maxWidth: 620, margin: '0 auto 16px' }}>
                Earn while you help leaders get ahead of AI
              </h2>
              <p style={{ color: 'var(--text-on-dark-muted)', maxWidth: 580, margin: '0 auto', lineHeight: 1.75 }}>
                If you work with mid-senior leaders, this course is something you can genuinely
                recommend. And every enrollment you refer earns you 20% of the course fee — no cap.
              </p>
            </div>
          </ScrollReveal>

          {/* ===== EARNING CALCULATOR ===== */}
          <ScrollReveal>
            <div className="earning-calculator">
              <div className="calc-header">
                <TrendingUp size={22} style={{ color: 'var(--accent-gold)' }} />
                <span>Earning Calculator</span>
              </div>
              <p className="calc-subtext">
                Drag the slider to see what you could earn at different referral volumes.
              </p>

              <div className="calc-slider-row">
                <label className="calc-label">
                  Referrals per month
                  <strong style={{ color: 'var(--accent-gold)', marginLeft: 8 }}>{referrals}</strong>
                </label>
                <input
                  type="range"
                  min={1}
                  max={100}
                  value={referrals}
                  onChange={(e) => setReferrals(Number(e.target.value))}
                  className="calc-slider"
                />
                <div className="calc-slider-labels">
                  <span>1</span>
                  <span>50</span>
                  <span>100</span>
                </div>
              </div>

              <div className="calc-results">
                <div className="calc-result-item">
                  <span className="calc-result-label">Monthly earning</span>
                  <span className="calc-result-value">₹{earning.toLocaleString('en-IN')}</span>
                </div>
                <div className="calc-result-divider" />
                <div className="calc-result-item">
                  <span className="calc-result-label">Annual earning</span>
                  <span className="calc-result-value calc-result-value--big">
                    ₹{(earning * 12).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <p className="calc-assumption">
                Based on launch price ₹5,999 · 20% commission · no cap on referrals
              </p>

              <div className="calc-examples">
                {[
                  { n: 5, label: '5 referrals/mo' },
                  { n: 10, label: '10 referrals/mo' },
                  { n: 25, label: '25 referrals/mo' },
                  { n: 50, label: '50 referrals/mo' },
                ].map((ex) => (
                  <button
                    key={ex.n}
                    className={`calc-preset ${referrals === ex.n ? 'calc-preset--active' : ''}`}
                    onClick={() => setReferrals(ex.n)}
                  >
                    {ex.label}
                    <span>₹{(ex.n * launchPrice * commission).toLocaleString('en-IN')}/mo</span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section" style={{ background: 'var(--bg-surface)', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="section-label">How It Works</span>
              <h2 className="section-title">Three steps. That's it.</h2>
            </div>
          </ScrollReveal>
          <div className="partner-steps-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {PARTNER_STEPS.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.08}>
                <div className="partner-step-card">
                  <span className="partner-step-num">{s.step}</span>
                  <h4 className="partner-step-title">{s.title}</h4>
                  <p className="partner-step-desc">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO EARNS ===== */}
      <section className="section" style={{ background: '#fff', paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <span className="section-label">Who This Is For</span>
              <h2 className="section-title">Who makes the best partners</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                You don't need a large audience. You need access to the right people — and
                a course they'll genuinely value.
              </p>
            </div>
          </ScrollReveal>
          <div className="who-earns-grid">
            {WHO_EARNS.map((w, i) => (
              <ScrollReveal key={w.role} delay={i * 0.07}>
                <div className="glass-card who-earns-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <BadgeCheck size={18} style={{ color: 'var(--primary)' }} />
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem' }}>{w.role}</h4>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{w.context}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET AS PARTNER ===== */}
      <section style={{ background: 'var(--bg-surface)', padding: '64px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="partner-kit-box">
              <div>
                <span className="section-label">Partner Kit</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.4rem', marginBottom: 16 }}>
                  What comes with your referral link
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'Unique referral link with real-time dashboard',
                    'One-page course PDF you can share with clients',
                    'Email + LinkedIn outreach templates',
                    'Slide deck for group presentations or team briefings',
                    '20% commission on every enrollment — paid monthly',
                    'Priority AICE partner support',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="partner-kit-visual">
                <Share2 size={48} style={{ color: 'var(--primary)', marginBottom: 16 }} />
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>20%</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 4 }}>per enrollment</div>
                <div style={{ marginTop: 16, fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                  No minimum. No cap. No expiry.
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== APPLY FORM ===== */}
      <section className="pre-enroll-section" id="partner-apply">
        <div className="container">
          <ScrollReveal>
            <div className="pre-enroll-box">
              {!submitted ? (
                <>
                  <span className="pre-enroll-eyebrow">Get Your Referral Link</span>
                  <h2 className="pre-enroll-heading">Start referring in minutes.</h2>
                  <p className="pre-enroll-sub">
                    No approval. No application. Drop your email and we'll send your unique
                    referral link and partner kit within a few hours.
                  </p>
                  <form className="pre-enroll-form" onSubmit={handlePartnerApply}>
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
                        {status === 'loading' ? 'Sending…' : 'Get My Link →'}
                      </button>
                    </div>
                    {status === 'error' && (
                      <p className="pre-enroll-error">Could not save. Please try again.</p>
                    )}
                    <p className="pre-enroll-note">Open to everyone. No spam. Earn 20% per enrollment.</p>
                  </form>
                </>
              ) : (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    You're in! <PartyPopper size={24} />
                  </h3>
                  <p>Your referral link and partner kit will hit your inbox within a few hours.</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

    </motion.div>
  )
}
