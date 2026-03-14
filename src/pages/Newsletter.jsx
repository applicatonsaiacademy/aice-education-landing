import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const features = [
  { icon: '🛠️', title: 'Weekly Tool Updates', desc: 'Stay on top of the latest AI tools and how to use them' },
  { icon: '📋', title: 'AI Case Studies', desc: 'Real-world examples and practical applications from the industry' },
  { icon: '💼', title: 'AI Job Updates', desc: 'Hand-picked AI roles and opportunities delivered to your inbox' },
]

const blogPosts = [
  {
    id: 1,
    title: 'How Businesses Are Using AI to Increase Revenue in 2026',
    preview: 'From predictive analytics to personalized customer experiences, discover how leading companies are leveraging AI to drive growth. We break down real strategies and the tools that make them work—so you can apply them to your own business.',
  },
  {
    id: 2,
    title: '10 AI Tools Every Business Should Start Using Today',
    preview: 'A curated list of the most impactful AI tools for operations, marketing, and sales. Each tool is evaluated for ease of use, ROI, and scalability. Start with one or two and expand as your team gets comfortable.',
  },
  {
    id: 3,
    title: 'How AI Is Transforming Marketing Strategies',
    preview: 'AI is changing how brands reach and engage customers. Learn how automation, personalization, and AI-driven analytics are reshaping campaigns—and how to adopt these practices without overwhelming your team.',
  },
  {
    id: 4,
    title: 'AI Automation: How Companies Are Saving Time and Costs',
    preview: 'Case studies and frameworks for automating repetitive tasks with AI. From document processing to customer support, see how teams are cutting costs and freeing up time for higher-value work.',
  },
  {
    id: 5,
    title: 'Top AI Trends Every Business Leader Should Know 🚀',
    preview: 'Stay ahead with the key AI trends shaping 2026: agentic AI, multimodal models, and responsible deployment. We summarize what matters for strategy and what you can safely ignore for now.',
  },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [expandedBlogId, setExpandedBlogId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim() && email.includes('@')) {
      console.log('Newsletter signup:', email)
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section className="newsletter-hero">
        <motion.div
          className="newsletter-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="newsletter-icon">📬</div>
          <span className="section-label">Newsletter</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Stay Ahead of the<br />AI Revolution
          </h1>
          <p className="section-subtitle mx-auto">
            Get weekly tool updates, AI case studies, AI job updates, and more
            delivered to your inbox.
          </p>

          {!subscribed ? (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe →
                </button>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          ) : (
            <div className="form-success" style={{ marginTop: '32px' }}>
              <div className="success-icon">✓</div>
              <h3>Welcome aboard! 🎉</h3>
              <p>You're now subscribed to the AICE newsletter. Check your inbox soon.</p>
            </div>
          )}
        </motion.div>
      </section>

      <section className="section" style={{ paddingTop: '40px', background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="newsletter-features">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="glass-card newsletter-feature">
                  <div className="nf-icon">{f.icon}</div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="section newsletter-blog-section">
        <div className="container">
          <ScrollReveal>
            <span className="section-label">From the Blog</span>
            <h2 className="section-title">Latest Articles</h2>
            <p className="section-subtitle mx-auto">
              Click any article to read a preview. Subscribe to get full access to all articles.
            </p>
          </ScrollReveal>
          <div className="newsletter-blog-list">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.05}>
                <div
                  className={`glass-card newsletter-blog-card ${expandedBlogId === post.id ? 'expanded' : ''}`}
                  onClick={() => setExpandedBlogId(expandedBlogId === post.id ? null : post.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setExpandedBlogId(expandedBlogId === post.id ? null : post.id)
                    }
                  }}
                  aria-expanded={expandedBlogId === post.id}
                >
                  <h3 className="newsletter-blog-title">{post.title}</h3>
                  {expandedBlogId === post.id && (
                    <motion.div
                      className="newsletter-blog-preview"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{post.preview}</p>
                      <p className="newsletter-blog-cta">Subscribe to get full access to this article and all our content.</p>
                    </motion.div>
                  )}
                  <span className="newsletter-blog-chevron" aria-hidden>
                    {expandedBlogId === post.id ? '▲' : '▼'}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
