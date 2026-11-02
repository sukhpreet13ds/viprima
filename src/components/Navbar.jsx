import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/viprima.png'
import { ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (path) => {
    closeMobileMenu()
    if (path === '/#articles') {
      if (location.pathname === '/') {
        const el = document.getElementById('articles')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left: Brand Logo */}
        <div className="navbar-logo-wrap">
          <Link to="/" className="navbar-logo-link" onClick={closeMobileMenu}>
            <img src={logoImg} alt="Viprima Logo" className="navbar-logo" />
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path)

              return (
                <li key={link.name} className="nav-item">
                  <Link
                    to={link.path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => handleNavClick(link.path)}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right side actions */}
        <div className="navbar-right">
          {/* Desktop "Get a Qoute" CTA */}
          <Link to="/contact" className="btn-get-quote desktop-cta">
            Get a Qoute
          </Link>

          {/* Mobile: Burger Button on the RIGHT */}
          <button
            type="button"
            className={`burger-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop and Zoom-in Modal Panel */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}>
          <div
            className="mobile-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-panel-header">
              <div></div>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => {
                  const isActive =
                    link.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(link.path)

                  return (
                    <li key={link.name} className="mobile-nav-item">
                      <Link
                        to={link.path}
                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                        onClick={() => handleNavClick(link.path)}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight size={20} className="mobile-nav-arrow" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="mobile-panel-footer">
              <Link
                to="/contact"
                className="btn-get-quote mobile-cta"
                onClick={closeMobileMenu}
              >
                Get a Qoute
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
