import { useState, useEffect } from 'react'
import logoImg from '../assets/viprima.png'
import { ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Articles', href: '#articles' },
    { name: 'Contact', href: '#contact' },
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

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left: Brand Logo (on both Desktop and Mobile) */}
        <div className="navbar-logo-wrap">
          <a href="#" className="navbar-logo-link" onClick={closeMobileMenu}>
            <img src={logoImg} alt="Viprima Logo" className="navbar-logo" />
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side actions */}
        <div className="navbar-right">
          {/* Desktop "Get a Qoute" CTA */}
          <a href="#quote" className="btn-get-quote desktop-cta">
            Get a Qoute
          </a>

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
                {navLinks.map((link) => (
                  <li key={link.name} className="mobile-nav-item">
                    <a
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={closeMobileMenu}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={20} className="mobile-nav-arrow" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mobile-panel-footer">
              <a
                href="#quote"
                className="btn-get-quote mobile-cta"
                onClick={closeMobileMenu}
              >
                Get a Qoute
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
