import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

const contactInfo = [
  { icon: '✉️', title: 'Email Us', detail: 'hello@aice.education', desc: 'We typically respond within 24 hours' },
  { icon: '💼', title: 'LinkedIn', detail: 'AICE Education', desc: 'Follow us for updates and insights' },
  { icon: '🌐', title: 'Global', detail: 'Available Worldwide', desc: 'Digital program accessible globally' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submission:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section className="contact-section section">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-label">Get In Touch</span>
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle mx-auto">
              Have questions about AICE programs? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="contact-grid">
            <ScrollReveal direction="left">
              <div className="contact-info">
                {contactInfo.map((c, i) => (
                  <div key={i} className="contact-info-card">
                    <div className="contact-info-icon">{c.icon}</div>
                    <div>
                      <h4>{c.title}</h4>
                      <p style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '4px' }}>
                        {c.detail}
                      </p>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="glass-card contact-form-card">
                {!submitted ? (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="contact-name">Name</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          className="form-input-box"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="contact-email">Email</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          className="form-input-box"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-subject">Subject</label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        className="form-input-box"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="form-input-box"
                        placeholder="Tell us more..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                      Send Message →
                    </button>
                  </form>
                ) : (
                  <div className="form-success">
                    <div className="success-icon">✓</div>
                    <h3>Message Sent! 🎉</h3>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setSubmitted(false)}
                      style={{ marginTop: '12px' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
