import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/viprima.png'
import { ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  // Primary desktop direct nav items
  const desktopNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ]

  // Dropdown items under the 2-line desktop menu bar
  const dropdownItems = [
    { name: 'Industries', path: '/industries' },
    { name: 'Training', path: '/training' },
    { name: 'Careers', path: '/career' },
  ]

  // Full nav links for the mobile menu panel (kept completely intact)
  const mobileNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Training', path: '/training' },
    { name: 'Careers', path: '/career' },
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false)
  }, [location.pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (path) => {
    closeMobileMenu()
    setIsDropdownOpen(false)
    if (path === '/#articles') {
      if (location.pathname === '/') {
        const el = document.getElementById('articles')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Check if any dropdown item is currently active
  const isDropdownActive = dropdownItems.some(
    (item) => location.pathname.startsWith(item.path) || (item.path === '/career' && location.pathname.startsWith('/careers'))
  )

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left: Brand Logo */}
        <div className="navbar-logo-wrap">
          <Link to="/" className="navbar-logo-link" onClick={closeMobileMenu}>
            <img src={logoImg} alt="Viprima Logo" className="navbar-logo" />
          </Link>
        </div>

        {/* Center: Desktop Navigation Links + 2-Line Menu Dropdown */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {desktopNavLinks.map((link) => {
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

            {/* Two-Lines Menu Bar Button (One longer then below line) */}
            <li className="nav-item nav-item-more" ref={dropdownRef}>
              <div className="desktop-more-dropdown-wrap">
                <button
                  type="button"
                  className={`desktop-two-lines-btn ${isDropdownOpen ? 'open' : ''} ${
                    isDropdownActive ? 'active' : ''
                  }`}
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  aria-label="More navigation links"
                  aria-expanded={isDropdownOpen}
                  title="More Pages"
                >
                  <span className="line-long"></span>
                  <span className="line-short"></span>
                </button>

                {/* Dropdown Menu (Industries, Training, Careers) */}
                {isDropdownOpen && (
                  <div className="desktop-dropdown-menu">
                    {dropdownItems.map((item) => {
                      const isActive =
                        location.pathname.startsWith(item.path) ||
                        (item.path === '/career' && location.pathname.startsWith('/careers'))

                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={`desktop-dropdown-item ${isActive ? 'active' : ''}`}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span>{item.name}</span>
                          <ArrowUpRight size={15} className="dropdown-arrow" />
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            </li>
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

      {/* Mobile Menu Backdrop and Zoom-in Modal Panel (Untouched with all items) */}
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
                {mobileNavLinks.map((link) => {
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
