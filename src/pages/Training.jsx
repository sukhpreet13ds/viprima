import { useState, useEffect } from 'react'
import 'animate.css'
import Footer from '../components/Footer'
import {
  GraduationCap,
  Calendar,
  Clock,
  Award,
  CheckCircle2,
  Users,
  Send,
  X,
  ArrowUpRight,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import { WhatsAppIcon } from '../components/SocialIcons'
import { Link } from 'react-router-dom'

const Training = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    course: '',
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

  const trainingPrograms = [
    {
      id: 'course-1',
      title: 'Enterprise Scope 1, 2 & 3 Carbon Accounting Masterclass',
      category: 'Carbon Accounting',
      duration: '3 Days (18 Hours)',
      format: 'In-Person & Live Virtual',
      credential: 'Executive Carbon Accounting Certificate',
      desc: 'Master the empirical methodologies required to construct audit-grade greenhouse gas inventories, calculate Scope 3 categories, and clear statutory Big-4 assurance audits.',
      modules: [
        'Organizational boundary setting adhering strictly to the GHG Protocol Corporate Standard',
        'Granular quantification of Scope 3 categories 1 through 15 with primary supplier telemetry',
        'Direct emission factor localization, uncertainty calculation, and ISO 14064 verification',
        'Mock statutory audit simulations preparing workbooks for Big-4 reasonable assurance',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I would like to inquire about enrolling in the Enterprise Scope 1, 2 & 3 Carbon Accounting Masterclass.',
    },
    {
      id: 'course-2',
      title: 'LEED AP & IGBC AP Building Simulation Certification Prep',
      category: 'Sustainable Infrastructure',
      duration: '4 Weeks (Weekend Batches)',
      format: 'Live Labs + Project Case Studies',
      credential: 'LEED AP BD+C / IGBC AP Exam Readiness',
      desc: 'Accelerate your career with accredited building simulation training covering whole-building thermodynamics, ASHRAE 90.1 energy baselines, and daylight ray-tracing.',
      modules: [
        'Whole-building energy simulation in eQuest, EnergyPlus, and IES-VE software environments',
        'ASHRAE 90.1 Appendix G baseline performance rating method and ECM modeling',
        'Dynamic spatial daylight autonomy (sDA) and visual glare mitigation ray-tracing',
        'Whole-building embodied carbon accounting and cradle-to-grave WBLCA credit scoring',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I would like to inquire about the LEED AP & IGBC AP Building Simulation Certification Prep cohort.',
    },
    {
      id: 'course-3',
      title: 'Industrial LCA & EPD Creation for EU CBAM Compliance',
      category: 'Product Sustainability',
      duration: '2 Days (14 Hours)',
      format: 'Hands-on Software Workshop',
      credential: 'Certified LCA & EPD Practitioner',
      desc: 'Equip your engineering and export compliance teams to conduct scientific Life Cycle Assessments (ISO 14040/44) and publish verified Type III EPDs to bypass default EU CBAM penalties.',
      modules: [
        'Cradle-to-gate and cradle-to-grave Life Cycle Assessment modeling in SimaPro/openLCA',
        'Product Category Rule (PCR) selection and international program operator alignment',
        'Specific embedded emissions calculation for steel, aluminium, cement, and chemical exports',
        'Automated digital EPD documentation workflows for European customs verification',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I am interested in the Industrial LCA & EPD Creation for EU CBAM Compliance training program.',
    },
    {
      id: 'course-4',
      title: 'SEBI BRSR Core & EU CSRD Non-Financial Assurance Readiness',
      category: 'Regulatory Governance',
      duration: '2 Days (12 Hours)',
      format: 'Executive Virtual Cohort',
      credential: 'Statutory ESG Disclosure Specialist',
      desc: 'Demystify regulatory disclosure obligations by understanding mandatory performance indicators, double materiality scoring, and immutable audit trail preparation.',
      modules: [
        'SEBI BRSR Core mandatory indicators, quantitative thresholds, and verification criteria',
        'European Union CSRD and European Sustainability Reporting Standards (ESRS) alignment',
        'Double materiality matrix construction connecting environmental impacts to EBITDA risk',
        'Building verifiable digital evidence repositories for statutory auditor sign-off',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I would like to inquire about the SEBI BRSR Core & EU CSRD Non-Financial Assurance Readiness course.',
    },
    {
      id: 'course-5',
      title: 'Corporate Renewable PPAs & Battery Storage (BESS) Structuring',
      category: 'Clean Energy Engineering',
      duration: '2 Days (14 Hours)',
      format: 'Commercial Strategy Masterclass',
      credential: 'Clean Energy Procurement Specialist',
      desc: 'Learn how to structure off-site open-access solar-wind hybrid PPAs, evaluate group captive equity models, and optimize Battery Energy Storage Systems (BESS) to lower electricity tariffs by 30-40%.',
      modules: [
        'Open-access tariff economics, wheeling charges, cross-subsidy surcharges, and banking rules',
        'Techno-commercial solar-wind hybrid sizing and BESS round-trip efficiency (RTE) curves',
        'Group captive equity structures, Virtual PPAs (VPPAs), and contracts-for-difference',
        'PPA bankability due diligence, parent company guarantees, and liquidated damages clauses',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I would like to inquire about the Corporate Renewable PPAs & Battery Storage Structuring training.',
    },
    {
      id: 'course-6',
      title: 'C-Suite & Boardroom Climate Governance & SBTi Strategy',
      category: 'Executive Leadership',
      duration: 'Half-Day Executive Briefing',
      format: 'Private In-House or Peer Cohort',
      credential: 'Board Climate Governance Certificate',
      desc: 'Equip board members and senior executives with strategic clarity on climate fiduciary duties, transition risk management, Science-Based Targets (SBTi), and sustainable green capital access.',
      modules: [
        'Fiduciary duties and board oversight of physical and transition climate risks under TCFD',
        'Formulating Science-Based Targets initiative (SBTi) 1.5°C net-zero roadmaps and budgets',
        'Green bonds, sustainability-linked loans, and navigating international ESG rating agencies',
        'Mitigating greenwashing litigation risks through auditable non-financial disclosure controls',
      ],
      whatsappMsg:
        'Hello Firstgreen Consulting, I would like to arrange an executive briefing on C-Suite & Boardroom Climate Governance & SBTi Strategy.',
    },
  ]

  const openEnrollModal = (courseTitle) => {
    setSelectedCourse(courseTitle)
    setFormData((prev) => ({
      ...prev,
      course: courseTitle,
    }))
    setIsSubmitted(false)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsSubmitted(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="training-page-container">
      {/* 1. TOP PAGE HEADER */}
      <section className="page-header-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Capacity Building & Upskilling</span>
          <h1 className="page-main-heading animate-on-scroll">
            Sustainability & Clean Energy Training
          </h1>
          <p className="page-main-subheading animate-on-scroll">
            Executive masterclasses and accredited technical certification cohorts designed by accredited energy auditors, simulation architects, and carbon market specialists.
          </p>
        </div>
      </section>

      {/* 2. ACCREDITATION STATS ROW */}
      <section className="training-stats-section">
        <div className="training-stats-grid animate-on-scroll">
          <div className="training-stat-card">
            <Award size={26} className="t-stat-icon" />
            <div className="t-stat-number">1,200+</div>
            <div className="t-stat-label">Professionals Trained</div>
          </div>
          <div className="training-stat-card">
            <BookOpen size={26} className="t-stat-icon" />
            <div className="t-stat-number">100%</div>
            <div className="t-stat-label">Practical Simulation Labs</div>
          </div>
          <div className="training-stat-card">
            <GraduationCap size={26} className="t-stat-icon" />
            <div className="t-stat-number">BEE & LEED</div>
            <div className="t-stat-label">Accredited Instructors</div>
          </div>
          <div className="training-stat-card">
            <Users size={26} className="t-stat-icon" />
            <div className="t-stat-number">85+</div>
            <div className="t-stat-label">Corporate Cohorts Delivered</div>
          </div>
        </div>
      </section>

      {/* 3. TRAINING PROGRAMS GRID */}
      <section className="training-programs-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Our Curriculum</span>
          <h2 className="section-main-heading animate-on-scroll">
            Professional Training Programs
          </h2>
          <p className="section-main-subheading animate-on-scroll">
            Select a specialized course to enhance your internal technical capacity or train your corporate sustainability cohort.
          </p>
        </div>

        <div className="training-cards-grid">
          {trainingPrograms.map((course) => (
            <div key={course.id} className="training-card animate-on-scroll">
              <div className="training-card-top">
                <span className="training-category-badge">{course.category}</span>
                <div className="training-duration-badge">
                  <Clock size={13} className="duration-icon" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <h3 className="training-card-title">{course.title}</h3>

              <div className="training-meta-row">
                <div className="training-meta-item">
                  <Calendar size={14} className="meta-icon" />
                  <span>{course.format}</span>
                </div>
                <div className="training-meta-item">
                  <Award size={14} className="meta-icon" />
                  <span>{course.credential}</span>
                </div>
              </div>

              <p className="training-card-desc">{course.desc}</p>

              <div className="training-modules-block">
                <h4 className="training-modules-heading">Core Curriculum Modules:</h4>
                <ul className="training-modules-list">
                  {course.modules.map((m, mIdx) => (
                    <li key={mIdx}>
                      <CheckCircle2 size={16} className="training-check-icon" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons: Inquire / Enroll & WhatsApp Us */}
              <div className="training-card-actions">
                <button
                  type="button"
                  className="btn-training-enroll"
                  onClick={() => openEnrollModal(course.title)}
                >
                  <GraduationCap size={16} />
                  <span>Inquire / Enroll</span>
                </button>

                <a
                  href={`https://wa.me/911244567890?text=${encodeURIComponent(
                    course.whatsappMsg
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-training-whatsapp"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CUSTOM CORPORATE TRAINING BANNER */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-glow-bg"></div>
          <div className="cta-content animate-on-scroll">
            <span className="hero-tag-title">Custom In-House Programs</span>
            <h2 className="cta-title">Need tailored training for your enterprise or suppliers?</h2>
            <p className="cta-desc">
              We design bespoke training programs for corporate boards, plant engineering teams, and supply chain vendor cohorts to accelerate net-zero alignment.
            </p>
            <div className="cta-button-group">
              <Link to="/contact" className="btn-get-quote cta-btn-main">
                <span>Request Custom Program</span>
                <ArrowUpRight size={18} />
              </Link>
              <a
                href={`https://wa.me/911244567890?text=${encodeURIComponent(
                  'Hello Firstgreen Consulting, I would like to discuss organizing a customized in-house training program for my company.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-service"
              >
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENROLLMENT / INQUIRY POPUP MODAL */}
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
              aria-label="Close enrollment form"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <div className="modal-header">
                  <span className="hero-tag-title">Course Enrollment</span>
                  <h3 className="modal-title">Inquire About Training</h3>
                  <p className="modal-desc">
                    Program: <strong>{formData.course}</strong>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="training-name">
                      Full Name *
                    </label>
                    <input
                      id="training-name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Priyanshu Roy"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="training-email">
                        Work Email *
                      </label>
                      <input
                        id="training-email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="priyanshu@company.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="training-phone">
                        Mobile Number *
                      </label>
                      <input
                        id="training-phone"
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
                    <label className="form-label" htmlFor="training-org">
                      Organization / Company Name
                    </label>
                    <input
                      id="training-org"
                      name="organization"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Tata Steel / DLF Real Estate"
                      value={formData.organization}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="training-message">
                      Specific Inquiries / Number of Attendees
                    </label>
                    <textarea
                      id="training-message"
                      name="message"
                      rows={3}
                      className="form-textarea"
                      placeholder="Mention expected batch size, preferred schedule dates, or custom module requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-modal-submit">
                    <span>Submit Training Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="modal-success-state">
                <div className="modal-success-icon">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="modal-success-title">Inquiry Received!</h3>
                <p className="modal-success-desc">
                  Thank you, <strong>{formData.name}</strong>. Our training coordinator has received your enrollment inquiry for <strong>{formData.course}</strong>. We will send you the complete syllabus brochure and schedule options at <strong>{formData.email}</strong> shortly.
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

export default Training

