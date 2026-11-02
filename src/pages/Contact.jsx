import { useState, useEffect } from 'react'
import 'animate.css'
import Footer from '../components/Footer'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { WhatsAppIcon } from '../components/SocialIcons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    services: 'ESG Strategy & Sustainability Advisory',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    if (!window.IntersectionObserver) {
      elements.forEach((el) => el.classList.add('animate__animated', 'animate__fadeInUp'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const serviceOptions = [
    'ESG Strategy & Sustainability Advisory',
    'GHG Accounting & Climate Advisory',
    'LCA & Environmental Product Declarations (EPDs)',
    'Green Building Certifications',
    'Sustainability Reporting & Assurance',
    'Capacity Building & Training',
    'Renewable Energy & Storage Engineering',
    'Other',
  ]

  return (
    <div className="contact-page-container">
      {/* 1. TOP PAGE HEADER */}
      <section className="page-header-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Let's Connect</span>
          <h1 className="page-main-heading animate-on-scroll">Contact Us</h1>
          <p className="page-main-subheading animate-on-scroll">
            Connect with our sustainability advisors and accredited clean energy engineers to discuss your corporate decarbonization goals, green building certifications, and ESG reporting requirements.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT SECTION: LEFT DETAILS | RIGHT FORM */}
      <section className="contact-main-section">
        <div className="contact-grid-wrapper">
          {/* LEFT: COMPANY DETAILS */}
          <div className="contact-details-col animate-on-scroll">
            <span className="alt-badge">Company Details</span>
            <h2 className="contact-details-company-name">
              Firstgreen Consulting by Viprima
            </h2>
            <p className="contact-details-intro">
              Providing audit-grade carbon accounting, renewable energy engineering, and international ESG assurance across India, the Middle East, Europe, and Southeast Asia.
            </p>

            <div className="contact-info-list">
              {/* Email */}
              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-info-body">
                  <span className="contact-info-label">Email Us</span>
                  <a href="mailto:info@firstgreenconsulting.com" className="contact-info-val">
                    info@firstgreenconsulting.com
                  </a>
                  <span className="contact-info-sub">Direct advisory inquiries & RFP submissions</span>
                </div>
              </div>

              {/* Numbers */}
              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-info-body">
                  <span className="contact-info-label">Call Our Advisors</span>
                  <div className="contact-info-numbers">
                    <a href="tel:+911244567890" className="contact-info-val">
                      +91 (0) 124 456 7890
                    </a>
                    <span className="info-sep">•</span>
                    <a href="tel:+919876543210" className="contact-info-val">
                      +91 98765 43210
                    </a>
                  </div>
                  <span className="contact-info-sub">Mon – Fri: 9:00 AM – 6:30 PM IST</span>
                </div>
              </div>

              {/* Address */}
              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-info-body">
                  <span className="contact-info-label">Corporate Office</span>
                  <p className="contact-info-val">
                    DLF Cyber City, Building 10, Tower B, Gurugram, Haryana 122002, India
                  </p>
                  <span className="contact-info-sub">Sustainability Advisory & Engineering Center</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="contact-info-card">
                <div className="contact-info-icon-box">
                  <Clock size={20} />
                </div>
                <div className="contact-info-body">
                  <span className="contact-info-label">Business Hours</span>
                  <p className="contact-info-val">
                    Monday to Friday: 09:00 AM – 18:30 PM (IST)
                  </p>
                  <span className="contact-info-sub">Dedicated emergency support for statutory filing deadlines</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Link Box */}
            <div className="contact-whatsapp-box">
              <div className="contact-whatsapp-info">
                <h4 className="whatsapp-box-title">Need immediate technical assistance?</h4>
                <p className="whatsapp-box-desc">
                  Chat directly with our carbon accounting and green building specialists on WhatsApp.
                </p>
              </div>
              <a
                href={`https://wa.me/911244567890?text=${encodeURIComponent(
                  'Hello Firstgreen Consulting, I would like to inquire about your sustainability services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contact-whatsapp"
              >
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="contact-form-col animate-on-scroll">
            <div className="contact-form-card">
              <div className="contact-form-glow"></div>

              {!isSubmitted ? (
                <>
                  <div className="form-card-header">
                    <span className="hero-tag-title">Consultation Request</span>
                    <h3 className="form-card-title">Send Us a Message</h3>
                    <p className="form-card-desc">
                      Fill out the form below and our subject-matter expert will respond within one business day.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="contact-form-inner">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="e.g. Vikram Malhotra"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-row-2">
                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="contact-email" className="form-label">
                          Work Email *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="vikram@enterprise.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="form-group">
                        <label htmlFor="contact-number" className="form-label">
                          Phone Number *
                        </label>
                        <input
                          id="contact-number"
                          name="number"
                          type="tel"
                          className="form-input"
                          placeholder="+91 98765 43210"
                          required
                          value={formData.number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Services Dropdown (with "Other" option included) */}
                    <div className="form-group">
                      <label htmlFor="contact-services" className="form-label">
                        Select Service of Interest *
                      </label>
                      <select
                        id="contact-services"
                        name="services"
                        className="form-select"
                        required
                        value={formData.services}
                        onChange={handleChange}
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label htmlFor="contact-message" className="form-label">
                        Your Message / Scope Overview
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        className="form-textarea"
                        placeholder="Tell us about your facility size, certification standard, reporting framework, or timeline requirements..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn-contact-submit">
                      <span>Submit Request</span>
                      <Send size={18} />
                    </button>
                  </form>
                </>
              ) : (
                <div className="form-success-container">
                  <div className="form-success-icon-wrap">
                    <CheckCircle2 size={54} />
                  </div>
                  <h3 className="form-success-title">Message Sent Successfully!</h3>
                  <p className="form-success-desc">
                    Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <strong>{formData.services}</strong>. Our designated sustainability consultant will review your specifications and get in touch at <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-hero-primary"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        number: '',
                        services: 'ESG Strategy & Sustainability Advisory',
                        message: '',
                      })
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAP SECTION (Above Footer) */}
      <section className="contact-map-section animate-on-scroll">
        <div className="contact-map-container">

          <div className="contact-map-frame">
            <iframe
              title="Firstgreen Consulting Corporate Headquarters Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.559981880468!2d77.0805177!3d28.4907107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19389e13b41d%3A0xe54d92419ef6b7eb!2sDLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact-map-iframe"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Contact

