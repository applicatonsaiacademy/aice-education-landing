import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const features = [
  { icon: '🚀', title: 'New Course Alerts', desc: 'Be the first to know when we launch new programs' },
  { icon: '🧠', title: 'AI Insights', desc: 'Curated AI trends and practical tips for leaders' },
  { icon: '🎁', title: 'Exclusive Offers', desc: 'Early access and special discounts for subscribers' },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

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
            Join our community of forward-thinking professionals. Get curated AI insights,
            course updates, and exclusive content delivered to your inbox.
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
    </motion.div>
  )
}
