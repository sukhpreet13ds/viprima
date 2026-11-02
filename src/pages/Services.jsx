import { useState, useEffect } from 'react'
import 'animate.css'
import Footer from '../components/Footer'
import fe1 from '../assets/fe1.jpg'
import fe2 from '../assets/fe2.jpg'
import fe3 from '../assets/fe3.jpg'
import fe4 from '../assets/fe4.jpg'
import fe5 from '../assets/fe5.jpg'
import fe6 from '../assets/fe6.jpg'
import {
  CheckCircle2,
  CalendarCheck,
  X,
  ArrowUpRight,
  Send,
  Sparkles,
} from 'lucide-react'
import { WhatsAppIcon } from '../components/SocialIcons'

const Services = () => {
  const [selectedService, setSelectedService] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

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

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  const servicesList = [
    {
      id: 'esg-strategy',
      title: 'ESG Strategy & Sustainability Advisory',
      badge: 'Corporate Strategy',
      image: fe1,
      desc: 'Formulate high-impact sustainability roadmaps that align organizational objectives with international disclosure mandates, ESG rating benchmarks, and long-term enterprise value creation.',
      points: [
        'Double-materiality assessment aligning with CSRD & GRI Standards',
        'Decarbonization pathway definition and enterprise carbon budgeting',
        'Science-Based Targets initiative (SBTi) commitment & submission support',
        'Stakeholder engagement workshops and corporate sustainability charters',
        'Physical and transitional climate risk modeling adhering to TCFD',
        'Board-level sustainability governance structure and executive ESG KPIs',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I am interested in booking your ESG Strategy & Sustainability Advisory service. Please provide more details.',
    },
    {
      id: 'ghg-accounting',
      title: 'GHG Accounting & Climate Advisory',
      badge: 'Carbon Inventories',
      image: fe2,
      desc: 'Execute granular, audit-grade carbon accounting across Scope 1, 2, and 15 Scope 3 value-chain categories adhering to the GHG Protocol and ISO 14064 standards.',
      points: [
        'Audit-ready Scope 1 (direct) and Scope 2 (market & location-based) accounting',
        'Comprehensive Scope 3 value chain calculation across all 15 categories',
        'Full alignment with GHG Protocol Corporate Standard and ISO 14064-1/2/3',
        'Primary supplier carbon telemetry collection and verified emission factors',
        'Marginal Abatement Cost Curve (MACC) analysis for capital allocation',
        'Third-party pre-assurance readiness with immutable evidence documentation',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I am interested in booking your GHG Accounting & Climate Advisory service. Please provide more details.',
    },
    {
      id: 'lca-epd',
      title: 'LCA & Environmental Product Declarations (EPDs)',
      badge: 'Product Carbon Footprint',
      image: fe3,
      desc: 'Quantify embodied carbon through scientific Life Cycle Assessments (LCAs) and publish third-party certified EPDs required for global export markets and eco-design compliance.',
      points: [
        'Cradle-to-gate and cradle-to-grave Life Cycle Assessments (ISO 14040/44)',
        'Type III Environmental Product Declarations (EPDs) creation & verification',
        'Embodied carbon quantification for industrial products and materials',
        'Product Category Rule (PCR) selection and international program alignment',
        'Eco-design optimization and sustainable alternative material benchmarking',
        'Automated digital EPD documentation for EU CBAM export compliance',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I am interested in booking your LCA & Environmental Product Declarations (EPDs) service. Please provide more details.',
    },
    {
      id: 'green-building',
      title: 'Green Building Certifications',
      badge: 'High-Performance Buildings',
      image: fe4,
      desc: 'Turnkey certification management, whole-building energy modeling, and daylight simulation guiding real estate portfolios to LEED, IGBC, and GRIHA excellence.',
      points: [
        'Turnkey advisory for LEED Platinum/Gold, IGBC, GRIHA, and WELL ratings',
        'Whole-building energy simulation utilizing eQuest, EnergyPlus, and IES-VE',
        'Dynamic daylight simulation, solar path modeling, and glare mitigation',
        'Indoor environmental quality (IEQ) and occupant thermal comfort compliance',
        'Net Zero Energy (NZE) and Net Zero Water feasibility design engineering',
        'Commissioning authority (CxA) supervision and post-occupancy performance audits',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I am interested in booking your Green Building Certifications service. Please provide more details.',
    },
    {
      id: 'sustainability-reporting',
      title: 'Sustainability Reporting & Assurance',
      badge: 'Regulatory Compliance',
      image: fe5,
      desc: 'Streamline non-financial disclosures across complex regulatory frameworks with structured, audit-ready data verification designed for statutory assurance scrutiny.',
      points: [
        'SEBI Business Responsibility and Sustainability Reporting (BRSR Core) preparation',
        'European Union Corporate Sustainability Due Diligence & CSRD compliance',
        'Global Reporting Initiative (GRI Standards) non-financial disclosure reporting',
        'CDP Climate, Water, and Forest disclosure structuring and score optimization',
        'Digital traceability setup engineered for statutory Big-4 assurance audits',
        'Integrated annual reporting aligning financial metrics with sustainability impact',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I am interested in booking your Sustainability Reporting & Assurance service. Please provide more details.',
    },
    {
      id: 'capacity-building',
      title: 'Capacity Building & Training',
      badge: 'Corporate Upskilling',
      image: fe6,
      desc: 'Empower executive leaders, operational managers, and supplier networks with accredited workshops and practical methodologies to navigate the clean energy transition.',
      points: [
        'Executive sustainability masterclasses for C-suite and Board members',
        'Technical training on GHG Protocol accounting and Scope 1-3 inventories',
        'Green building simulation workshops for architects and project managers',
        'Supply chain partner decarbonization webinars and reporting tool onboarding',
        'Regulatory compliance updates on carbon border taxes (EU CBAM) and BRSR',
        'Customized corporate sustainability curriculum with certification accreditations',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I am interested in booking your Capacity Building & Training service. Please provide more details.',
    },
  ]

  const openBookingModal = (serviceTitle) => {
    setSelectedService(serviceTitle)
    setFormData((prev) => ({ ...prev, service: serviceTitle }))
    setSubmitted(false)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSubmitted(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="services-page-container">
      {/* 1. TOP PAGE HEADER */}
      <section className="page-header-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Specialized Capabilities</span>
          <h1 className="page-main-heading animate-on-scroll">Our Services</h1>
          <p className="page-main-subheading animate-on-scroll">
            Comprehensive sustainability engineering, accredited energy advisory, and regulatory assurance frameworks designed to accelerate your net-zero transition.
          </p>
        </div>
      </section>

      {/* 2. ALTERNATING SERVICES SECTIONS */}
      <section className="services-alternating-section">
        <div className="services-list-wrapper">
          {servicesList.map((service, idx) => {
            // Even idx: Left image, Right content
            // Odd idx: Switched places (Left content, Right image)
            const isReversed = idx % 2 !== 0

            return (
              <div
                key={service.id}
                className={`service-detail-row ${isReversed ? 'service-row-reverse' : ''}`}
                id={service.id}
              >
                {/* Image Wrap */}
                <div className="service-detail-image-wrap animate-on-scroll">
                  <div className="service-img-glow"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-detail-img"
                  />
                  <div className="service-img-overlay-badge">
                    <span>{service.badge}</span>
                  </div>
                </div>

                {/* Content Wrap */}
                <div className="service-detail-content animate-on-scroll">
                  <span className="alt-badge">{service.badge}</span>
                  <h2 className="service-detail-title">{service.title}</h2>
                  <p className="service-detail-desc">{service.desc}</p>

                  {/* 6 Check Icon List Points */}
                  <ul className="service-detail-checklist">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <CheckCircle2 size={19} className="service-check-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons: Book Service & WhatsApp Us */}
                  <div className="service-detail-actions">
                    <button
                      type="button"
                      className="btn-book-service"
                      onClick={() => openBookingModal(service.title)}
                    >
                      <CalendarCheck size={18} />
                      <span>Book Service</span>
                    </button>

                    <a
                      href={`https://wa.me/911244567890?text=${encodeURIComponent(
                        service.whatsappMsg
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp-service"
                    >
                      <WhatsAppIcon size={18} />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. BOOK SERVICE POPUP MODAL */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close booking modal"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <div className="modal-header">
                  <h3 className="modal-title">Book Service Consultation</h3>
                 
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-name">
                      Full Name *
                    </label>
                    <input
                      id="modal-name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="modal-email">
                        Work Email *
                      </label>
                      <input
                        id="modal-email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="viprima@company.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="modal-phone">
                        Phone Number *
                      </label>
                      <input
                        id="modal-phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-service">
                      Selected Service *
                    </label>
                    <select
                      id="modal-service"
                      name="service"
                      className="form-select"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      {servicesList.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other / Custom Advisory</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="modal-message">
                      Project Details / Message
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      rows={3}
                      className="form-textarea"
                      placeholder="Share facility details, reporting deadlines, or specific technical scope..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-modal-submit">
                    <span>Confirm Booking Request</span>
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="modal-success-state">
                <div className="modal-success-icon">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="modal-success-title">Booking Request Received!</h3>
                <p className="modal-success-desc">
                  Thank you, <strong>{formData.name}</strong>. Our senior advisory team has received your request for <strong>{formData.service}</strong>. We will get in touch with you at <strong>{formData.email}</strong> within 24 business hours.
                </p>
                <button
                  type="button"
                  className="btn-modal-submit"
                  onClick={closeModal}
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Services

