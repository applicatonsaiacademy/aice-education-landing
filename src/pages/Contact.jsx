import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import HeroMesh from '../components/HeroMesh'
import { saveContact } from '../lib/forms'
import { Mail, Linkedin, Globe, CheckCircle } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const contactInfo = [
  { icon: <Mail aria-hidden="true" />, title: 'Email Us', detail: 'hello@aice.education', desc: 'We typically respond within 24 hours' },
  { icon: <Linkedin aria-hidden="true" />, title: 'LinkedIn', detail: 'AICE Education', desc: 'Follow us for updates and insights' },
  { icon: <Globe aria-hidden="true" />, title: 'Global', detail: 'Available Worldwide', desc: 'Digital program accessible globally' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await saveContact(formData)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <motion.div className="page-wrapper" variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Dark hero strip */}
      <div className="dark-section-hero">
        <HeroMesh />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="dark-section-badge">✦ Get In Touch</div>
            <h1 className="dark-section-title">Contact Us</h1>
            <p className="dark-section-subtitle">
              Have questions about AICE programs? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="contact-section section">
        <div className="container">
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
                {status !== 'success' ? (
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
                      {status === 'loading' ? 'Sending…' : 'Send Message →'}
                    </button>
                    {status === 'error' && (
                      <p style={{ color: '#d04530', marginTop: '10px' }}>
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                ) : (
                  <div className="form-success">
                    <div className="success-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                      <CheckCircle size={48} color="#22c55e" />
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <button
                      className="btn btn-secondary"
                      onClick={() => setStatus('idle')}
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
