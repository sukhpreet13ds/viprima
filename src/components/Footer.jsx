import logoImg from '../assets/viprima.png'
import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  LinkedInIcon,
  TwitterXIcon,
  InstagramIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from './SocialIcons'

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-top">
        <div className="footer-col-brand animate-on-scroll">
          <img src={logoImg} alt="Viprima - Firstgreen" className="footer-logo" />
          <p className="footer-brand-desc">
            Firstgreen Consulting connected through practical expertise — engineering renewable infrastructure, sustainable building certifications, and digital intelligence.
          </p>
          <div className="footer-badge-tag">
            <Sparkles size={14} className="footer-sparkle" />
            <span>Clean Energy • Sustainability • Assurance</span>
          </div>

          {/* Social Media Icons */}
          <div className="footer-social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn"
              aria-label="LinkedIn"
              title="Follow us on LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn"
              aria-label="X (Twitter)"
              title="Follow us on X"
            >
              <TwitterXIcon size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn"
              aria-label="Instagram"
              title="Follow us on Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn"
              aria-label="YouTube"
              title="Subscribe to YouTube"
            >
              <YouTubeIcon size={18} />
            </a>
            <a
              href="https://wa.me/911244567890"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon-btn footer-social-wa"
              aria-label="WhatsApp"
              title="Contact on WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        <div className="footer-col animate-on-scroll">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/career">Careers</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col animate-on-scroll">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">ESG Strategy Advisory</Link></li>
            <li><Link to="/services">GHG Scope 1-3 Accounting</Link></li>
            <li><Link to="/services">Green Building Certifications</Link></li>
            <li><Link to="/services">Life Cycle Assessments (LCA)</Link></li>
            <li><Link to="/services">Net-Zero Energy Roadmaps</Link></li>
          </ul>
        </div>

        <div className="footer-col animate-on-scroll">
          <h4 className="footer-heading">Frameworks</h4>
          <ul className="footer-links">
            <li><a href="#">BRSR / SEBI Mandates</a></li>
            <li><a href="#">GRI Standards</a></li>
            <li><a href="#">TCFD & Climate Risk</a></li>
            <li><a href="#">EU CSRD Compliance</a></li>
            <li><a href="#">LEED, IGBC & GRIHA</a></li>
          </ul>
        </div>

        <div className="footer-col animate-on-scroll">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-links footer-contact-info">
            <li>info@firstgreenconsulting.com</li>
            <li>+91 (0) 124 456 7890</li>
            <li>DLF Cyber City, Gurugram, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Firstgreen Consulting by Viprima. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Audit Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
