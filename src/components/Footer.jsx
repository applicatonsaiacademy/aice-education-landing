import { Link } from 'react-router-dom'
import { Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="nav-logo">AICE<span className="dot">.</span>Education</span>
            <p>
              Building an AI-ready world. Practical AI education for leaders,
              entrepreneurs, and professionals who want to harness AI responsibly
              and effectively.
            </p>
          </div>

          <div className="footer-col">
            <h4>Get Started</h4>
            <Link to="/courses">Explore Courses</Link>
            <Link to="/courses">Pre-Enroll</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-col">
            <h4>Discover</h4>
            <Link to="/courses">AI for Business Leaders</Link>
            <Link to="/courses">Certification</Link>
            <Link to="/founders">Meet the Founders</Link>
            <Link to="/newsletter">Newsletter</Link>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://www.linkedin.com/company/aice-academy/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/AICenterOE" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <a href="https://www.instagram.com/aice.socials/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61588597383926" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/@AICE.Socials/videos" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AICE Education. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/aice-academy/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://x.com/AICenterOE" target="_blank" rel="noopener noreferrer" aria-label="X">𝕏</a>
            <a href="https://www.instagram.com/aice.socials/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/profile.php?id=61588597383926" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
            <a href="https://www.youtube.com/@AICE.Socials/videos" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
