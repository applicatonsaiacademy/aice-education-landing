import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { saveNewsletter } from '../lib/forms'
import { PartyPopper, Wrench, FileText, Briefcase } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const blogPosts = [
  {
    id: 1,
    date: 'Mar 2026',
    category: 'Strategy',
    categoryColor: '#2563EB',
    coverImage: 'https://picsum.photos/seed/aicestrategy/600/320',
    title: 'How Businesses Are Using AI to Increase Revenue in 2026',
    excerpt: 'From predictive analytics to personalised customer experiences — real strategies, real tools, real results.',
  },
  {
    id: 2,
    date: 'Mar 2026',
    category: 'Tools',
    categoryColor: '#C9A96E',
    coverImage: 'https://picsum.photos/seed/aicetools/600/320',
    title: '10 AI Tools Every Business Should Start Using Today',
    excerpt: 'Evaluated for ease of use, ROI, and scalability. Start with one or two and expand as your team grows.',
  },
  {
    id: 3,
    date: 'Feb 2026',
    category: 'Marketing',
    categoryColor: '#2DB87A',
    coverImage: 'https://picsum.photos/seed/aicemarketing/600/320',
    title: 'How AI Is Transforming Marketing Strategies',
    excerpt: 'Automation, personalisation, and AI-driven analytics — how to adopt without overwhelming your team.',
  },
  {
    id: 4,
    date: 'Feb 2026',
    category: 'Automation',
    categoryColor: '#7C3AED',
    coverImage: 'https://picsum.photos/seed/aiceautomation/600/320',
    title: 'AI Automation: How Companies Are Saving Time and Costs',
    excerpt: 'Case studies and frameworks for automating repetitive tasks — from documents to customer support.',
  },
  {
    id: 5,
    date: 'Jan 2026',
    category: 'Trends',
    categoryColor: '#0F0F1A',
    coverImage: 'https://picsum.photos/seed/aicetrends/600/320',
    title: 'Top AI Trends Every Business Leader Should Know',
    excerpt: 'Agentic AI, multimodal models, responsible deployment — what matters for strategy in 2026.',
  },
  {
    id: 6,
    date: 'Jan 2026',
    category: 'Leadership',
    categoryColor: '#2563EB',
    coverImage: 'https://picsum.photos/seed/aiceleadership/600/320',
    title: 'Why AI Projects Fail — And How to Avoid It',
    excerpt: 'Expectations, ownership, resistance, and data. The four failure modes leaders must address.',
  },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      setStatus('loading')
      try {
        await saveNewsletter({ email })
        setStatus('success')
        setEmail('')
      } catch (err) {
        console.error(err)
        setStatus('error')
      }
    }
  }

  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ===== HERO — two-column with phone mockup ===== */}
      <section className="nl-hero">
        <div className="container">
          <div className="nl-hero-grid">

            {/* LEFT — subscribe */}
            <motion.div
              className="nl-hero-left"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="nl-title">The AICE<br />AI Briefing</h1>
              <p className="nl-subtitle">
                Weekly AI tools, case studies, and strategies — for every role, every industry.
              </p>

              {status !== 'success' ? (
                <form className="nl-form" onSubmit={handleSubmit}>
                  <div className="nl-form-row">
                    <input
                      type="email"
                      className="nl-input"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="nl-btn">
                      {status === 'loading' ? 'Subscribing…' : 'Subscribe for free'}
                    </button>
                  </div>
                  {status === 'error' && (
                    <p style={{ color: '#EF4444', marginTop: '8px', fontSize: '0.85rem' }}>
                      Could not subscribe. Please try again.
                    </p>
                  )}
                  <p className="nl-privacy">Join for free &amp; stay on top. Smart insights, weekly.</p>
                </form>
              ) : (
                <motion.div
                  className="nl-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-icon" style={{ background: '#22c55e' }}>✓</div>
                  <p style={{ fontWeight: 600, marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Welcome aboard! <PartyPopper size={18} />
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Check your inbox soon.</p>
                </motion.div>
              )}

              <div className="nl-features">
                <span className="nl-feature"><Wrench size={14} /> Weekly Tool Updates</span>
                <span className="nl-feature"><FileText size={14} /> AI Case Studies</span>
                <span className="nl-feature"><Briefcase size={14} /> AI Job Signals</span>
              </div>
            </motion.div>

            {/* RIGHT — phone mockup */}
            <motion.div
              className="nl-hero-right"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              aria-hidden="true"
            >
              <div className="nl-phone-wrap">
                <div className="nl-phone-glow" />
                <div className="nl-phone-frame">
                  <div className="nl-phone-screen">
                    {/* Status bar */}
                    <div className="nl-phone-status-bar">
                      <span>9:41</span>
                      <span className="nl-phone-status-icons">▲▲▲ WiFi 🔋</span>
                    </div>
                    {/* Email app header */}
                    <div className="nl-phone-app-bar">
                      <div className="nl-phone-sender-avatar">A</div>
                      <div>
                        <div className="nl-phone-sender-name">AICE AI Briefing</div>
                        <div className="nl-phone-sender-sub">Strategy Edition · Mar 2026</div>
                      </div>
                    </div>
                    {/* Slowly scrolling newsletter content */}
                    <motion.div
                      className="nl-phone-content"
                      animate={{ y: [0, -150, -150, 0] }}
                      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', times: [0, 0.42, 0.58, 1] }}
                    >
                      {/* Cover image */}
                      <div className="nl-phone-cover-img">
                        <span className="nl-phone-cover-label">Strategy</span>
                      </div>
                      {/* Article */}
                      <div className="nl-phone-article">
                        <div className="nl-phone-article-title">
                          How Businesses Are Using AI to Increase Revenue in 2026
                        </div>
                        <div className="nl-phone-text-block">
                          <div className="nl-phone-text-line" style={{ width: '100%' }} />
                          <div className="nl-phone-text-line" style={{ width: '88%' }} />
                          <div className="nl-phone-text-line" style={{ width: '94%' }} />
                          <div className="nl-phone-text-line" style={{ width: '72%' }} />
                        </div>
                      </div>
                      <div className="nl-phone-divider" />
                      {/* Story 2 */}
                      <div className="nl-phone-mini-story">
                        <div className="nl-phone-mini-thumb" style={{ background: 'linear-gradient(135deg, #C9A96E, #E2C98A)' }} />
                        <div className="nl-phone-mini-text">
                          <div className="nl-phone-mini-cat">Tools</div>
                          <div className="nl-phone-mini-title">10 AI Tools Every Business Should Start Using</div>
                        </div>
                      </div>
                      <div className="nl-phone-divider" />
                      {/* Story 3 */}
                      <div className="nl-phone-mini-story">
                        <div className="nl-phone-mini-thumb" style={{ background: 'linear-gradient(135deg, #2DB87A, #34D399)' }} />
                        <div className="nl-phone-mini-text">
                          <div className="nl-phone-mini-cat">Marketing</div>
                          <div className="nl-phone-mini-title">How AI Is Transforming Marketing Strategy</div>
                        </div>
                      </div>
                      <div className="nl-phone-divider" />
                      {/* Story 4 */}
                      <div className="nl-phone-mini-story">
                        <div className="nl-phone-mini-thumb" style={{ background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)' }} />
                        <div className="nl-phone-mini-text">
                          <div className="nl-phone-mini-cat">Leadership</div>
                          <div className="nl-phone-mini-title">Why AI Projects Fail — And How to Avoid It</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===== PAST EDITIONS GRID ===== */}
      <section className="nl-posts-section">
        <div className="container">
          <ScrollReveal>
            <div className="nl-posts-header">
              <h2 className="nl-posts-title">Past Editions</h2>
            </div>
          </ScrollReveal>

          <div className="nl-posts-grid">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.06}>
                <motion.div
                  className="nl-post-card"
                  whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="nl-post-card-cover"
                    style={{ backgroundImage: post.coverImage ? `url(${post.coverImage})` : undefined, backgroundColor: post.coverImage ? undefined : post.categoryColor }}
                  >
                    <div className="nl-post-card-cover-overlay" />
                    <div className="nl-post-card-cover-bar">
                      <span className="nl-post-card-category-badge" style={{ background: post.categoryColor }}>{post.category}</span>
                      <span className="nl-post-card-date">{post.date}</span>
                    </div>
                  </div>
                  <div className="nl-post-card-body">
                    <h3 className="nl-post-card-title">{post.title}</h3>
                    <p className="nl-post-card-excerpt">{post.excerpt}</p>
                    <span className="nl-post-card-cta">Subscribe to read full edition →</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  )
}
