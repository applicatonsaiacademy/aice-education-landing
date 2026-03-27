import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Top Navbar - minimal like Jeton */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="nav-logo">
            <img src="/logo.png" alt="AICE Logo" className="nav-logo-img" />
            <div className="nav-logo-text">
              <span className="nav-logo-main">AICE</span>
              <span className="nav-logo-sub">AI Centre of Excellence</span>
            </div>
          </Link>

          <div
            className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Mobile slide-out menu */}
          <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/courses" className={`nav-link ${isActive('/courses') ? 'active' : ''}`}>Courses</Link>
            <Link to="/newsletter" className={`nav-link ${isActive('/newsletter') ? 'active' : ''}`}>Newsletter</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
            <Link to="/founders" className={`nav-link ${isActive('/founders') ? 'active' : ''}`}>Founders</Link>
            <Link to="/courses" className="btn btn-primary nav-cta">Get Started</Link>
          </div>

          {/* Desktop CTA */}
          <div className="nav-cta-top">
            <Link to="/courses" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Floating Bottom Navigation - Jeton style */}
      <div className="bottom-nav">
        <Link to="/" className={`bottom-nav-link home-link ${isActive('/') ? 'active' : ''}`}>
          <svg className="bottom-nav-home-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </Link>
        <Link to="/courses" className={`bottom-nav-link ${isActive('/courses') ? 'active' : ''}`}>
          Courses
        </Link>
        <Link to="/newsletter" className={`bottom-nav-link ${isActive('/newsletter') ? 'active' : ''}`}>
          Newsletter
        </Link>
        <Link to="/founders" className={`bottom-nav-link ${isActive('/founders') ? 'active' : ''}`}>
          Founders
        </Link>
        <Link to="/contact" className={`bottom-nav-link ${isActive('/contact') ? 'active' : ''}`}>
          Contact
        </Link>
      </div>
    </>
  )
}
