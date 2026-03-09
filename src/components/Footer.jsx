import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="nav-logo">AICE<span className="dot">.</span>education</span>
            <p>
              Building an AI-ready world. Practical AI education for leaders,
              entrepreneurs, and professionals who want to harness AI responsibly
              and effectively.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/newsletter">Newsletter</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Program</h4>
            <Link to="/courses">AI for Business Leaders</Link>
            <Link to="/courses">Certification</Link>
            <Link to="/courses">Pre-Enroll</Link>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="mailto:hello@aice.education">hello@aice.education</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AICE Education. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
            <a href="mailto:hello@aice.education" aria-label="Email">✉</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
