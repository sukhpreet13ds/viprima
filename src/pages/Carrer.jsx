import { useState, useEffect } from 'react'
import 'animate.css'
import Footer from '../components/Footer'
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  X,
  ArrowUpRight,
  Sparkles,
  Users,
  Compass,
} from 'lucide-react'
import { WhatsAppIcon } from '../components/SocialIcons'

const Carrer = () => {
  const [selectedJobForDetail, setSelectedJobForDetail] = useState(null)
  const [selectedJobForApply, setSelectedJobForApply] = useState(null)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
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

  // Lock body scroll when either modal is open
  useEffect(() => {
    if (selectedJobForDetail || isApplyModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedJobForDetail, isApplyModalOpen])

  const jobsList = [
    {
      id: 'job-1',
      title: 'Senior GHG Accounting & Climate Advisory Specialist',
      department: 'Carbon Accounting & ESG',
      location: 'Gurugram, India (Hybrid)',
      type: 'Full-Time',
      experience: '4 - 7 Years',
      desc: 'Lead Scope 1, 2, and Scope 3 value-chain emissions accounting, SBTi target validation, and SEBI BRSR Core / CSRD compliance engagements for multinational industrial clients.',
      workPoints: [
        'Establish organizational and operational boundaries adhering to the GHG Protocol Corporate Standard.',
        'Model Scope 3 greenhouse gas footprints across all 15 categories with primary supplier telemetry.',
        'Lead clients through Big-4 reasonable assurance readiness audits and statutory disclosure filings.',
        'Author double-materiality assessments connecting corporate climate risks with financial balance sheets.',
      ],
      requirements: [
        'Master’s degree in Environmental Engineering, Sustainability, or Energy Economics.',
        '4+ years proven experience in corporate carbon accounting, ISO 14064, and SBTi protocols.',
        'Hands-on expertise with SEBI BRSR Core and European CSRD non-financial reporting.',
        'Exceptional data modeling proficiency (Python, Excel advanced models, or carbon accounting software).',
      ],
    },
    {
      id: 'job-2',
      title: 'Green Building Simulation Architect (LEED / IGBC AP)',
      department: 'Sustainable Infrastructure',
      location: 'Gurugram, India / Remote',
      type: 'Full-Time',
      experience: '3 - 6 Years',
      desc: 'Perform whole-building thermodynamic simulations, daylight ray-tracing modeling, and guide prestigious commercial portfolios to LEED Platinum and IGBC Net Zero ratings.',
      workPoints: [
        'Execute whole-building energy modeling using eQuest, EnergyPlus, and IES-VE against ASHRAE 90.1 baselines.',
        'Perform computational daylight simulation (sDA & ASE) and dynamic solar shading optimization.',
        'Coordinate with MEP and structural teams to integrate embodied carbon reduction and low-carbon concrete.',
        'Oversee Commissioning Authority (CxA) audits and post-occupancy energy verification.',
      ],
      requirements: [
        'B.Arch or M.Tech in Building Energy Simulation, Sustainable Architecture, or MEP Engineering.',
        'Accredited LEED AP BD+C, IGBC AP, or GRIHA Evaluator credential is mandatory.',
        '3+ years delivering LEED Platinum / Gold commercial or institutional projects.',
        'High proficiency in EnergyPlus, eQuest, Rhino/Grasshopper Ladybug, and Revit BIM.',
      ],
    },
    {
      id: 'job-3',
      title: 'Life Cycle Assessment (LCA) & EPD Engineer',
      department: 'Product Sustainability',
      location: 'Gurugram, India (Hybrid)',
      type: 'Full-Time',
      experience: '3 - 5 Years',
      desc: 'Conduct cradle-to-gate and cradle-to-grave Life Cycle Assessments and create third-party verified Type III Environmental Product Declarations (EPDs) for export manufacturing clients.',
      workPoints: [
        'Develop scientific LCA models for metals, cement, chemicals, and textiles adhering to ISO 14040/44.',
        'Author Product Category Rules (PCR) aligned documentation for international EPD program operators.',
        'Assess facility manufacturing lines to ensure compliance with European Union CBAM tariff regulations.',
        'Benchmark eco-design alternatives to optimize embodied carbon prior to mass manufacturing.',
      ],
      requirements: [
        'Degree in Chemical, Materials, Mechanical, or Environmental Engineering.',
        'Proficiency in SimaPro, GaBi (Sphera), or openLCA software and ecoinvent databases.',
        'Solid understanding of Product Category Rules (PCRs) and verified EPD verification workflows.',
        'Working knowledge of EU CBAM carbon border tax methodologies is strongly preferred.',
      ],
    },
    {
      id: 'job-4',
      title: 'Renewable Energy & Storage PPA Consultant',
      department: 'Clean Energy Engineering',
      location: 'Gurugram, India (Hybrid)',
      type: 'Full-Time',
      experience: '3 - 6 Years',
      desc: 'Structure utility-scale open-access solar, wind, and Battery Energy Storage (BESS) hybrid Power Purchase Agreements (PPAs) and techno-commercial financial models for enterprise clients.',
      workPoints: [
        'Model solar-wind hybrid generation curves and Battery Energy Storage (BESS) round-trip efficiencies.',
        'Structure corporate open-access group captive models, third-party PPAs, and Virtual PPAs (VPPAs).',
        'Analyze state-level open access regulations, wheeling charges, cross-subsidy surcharges, and banking norms.',
        'Conduct technical due diligence on behalf of institutional investors and corporate off-takers.',
      ],
      requirements: [
        'Bachelor’s or Master’s in Electrical Engineering, Renewable Energy, or Energy Finance.',
        '3+ years experience in corporate renewable procurement, solar-wind advisory, or IPP business development.',
        'Expertise in PVSyst generation modeling and financial DCF / LCOE valuation.',
        'Strong contractual understanding of Power Purchase Agreements (PPAs) and grid interconnection procedures.',
      ],
    },
  ]

  // Handlers for Mobile Card Click to open Details Modal
  const handleCardClick = (job) => {
    setSelectedJobForDetail(job)
  }

  // Handlers for Opening Apply Modal
  const openApplyModal = (job) => {
    setSelectedJobForApply(job)
    setFormData((prev) => ({
      ...prev,
      jobTitle: job.title,
    }))
    setIsSubmitted(false)
    setIsApplyModalOpen(true)
  }

  const closeDetailModal = () => {
    setSelectedJobForDetail(null)
  }

  const closeApplyModal = () => {
    setIsApplyModalOpen(false)
    setIsSubmitted(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleApplySubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="career-page-container">
      {/* 1. TOP PAGE HEADER */}
      <section className="page-header-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Join Our Team</span>
          <h1 className="page-main-heading animate-on-scroll">
            Careers at Firstgreen
          </h1>
          <p className="page-main-subheading animate-on-scroll">
            Work at the cutting edge of clean energy engineering, high-performance green architecture, and digital carbon intelligence. Help multinational enterprises decarbonize with scientific rigor.
          </p>
        </div>
      </section>

      {/* 2. CAREER CULTURE HIGHLIGHTS */}
      <section className="career-culture-section">
        <div className="career-culture-grid animate-on-scroll">
          <div className="culture-tile">
            <div className="culture-icon-box">
              <Compass size={22} />
            </div>
            <h3 className="culture-title">Mission-Driven Impact</h3>
            <p className="culture-desc">Every calculation and energy simulation directly mitigates carbon emissions and shapes clean energy infrastructure.</p>
          </div>
          <div className="culture-tile">
            <div className="culture-icon-box">
              <Sparkles size={22} />
            </div>
            <h3 className="culture-title">Accredited Excellence</h3>
            <p className="culture-desc">Learn alongside certified BEE Energy Auditors, LEED APs, and PhD climate researchers with 15+ years experience.</p>
          </div>
          <div className="culture-tile">
            <div className="culture-icon-box">
              <Users size={22} />
            </div>
            <h3 className="culture-title">Global Client Base</h3>
            <p className="culture-desc">Advise Fortune 500 corporations, hyperscale tech parks, and industrial exporters across India, GCC, and Europe.</p>
          </div>
        </div>
      </section>

      {/* 3. FOUR JOB POSTINGS (2x2 on Mobile, Full Cards on Desktop) */}
      <section className="career-jobs-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Open Opportunities</span>
          <h2 className="section-main-heading animate-on-scroll">
            Current Open Positions
          </h2>
          <p className="section-main-subheading animate-on-scroll">
            Explore our open vacancies across carbon accounting, sustainable infrastructure, LCA, and renewable power.
          </p>
        </div>

        {/* The Job Grid */}
        <div className="career-jobs-grid">
          {jobsList.map((job) => (
            <div
              key={job.id}
              className="career-job-card animate-on-scroll"
              onClick={() => handleCardClick(job)}
            >
              {/* Card Header */}
              <div className="job-card-top">
                <span className="job-dept-badge">{job.department}</span>
                <span className="job-type-badge">{job.type}</span>
              </div>

              <h3 className="job-card-title">{job.title}</h3>

              <div className="job-meta-row">
                <div className="job-meta-item">
                  <MapPin size={14} className="job-meta-icon" />
                  <span>{job.location}</span>
                </div>
                <div className="job-meta-item">
                  <Clock size={14} className="job-meta-icon" />
                  <span>{job.experience}</span>
                </div>
              </div>

              {/* Short summary (Always visible on desktop and mobile) */}
              <p className="job-card-desc">{job.desc}</p>

              {/* Desktop-only detailed content (Hidden in mobile compact 2x2 view, accessible via modal) */}
              <div className="job-desktop-details">
                <div className="job-detail-block">
                  <h4 className="job-block-subtitle">About the Role:</h4>
                  <ul className="job-bullets-list">
                    {job.workPoints.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <CheckCircle2 size={16} className="job-check-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="job-detail-block">
                  <h4 className="job-block-subtitle">Key Qualifications:</h4>
                  <ul className="job-bullets-list">
                    {job.requirements.map((req, rIdx) => (
                      <li key={rIdx}>
                        <CheckCircle2 size={16} className="job-check-icon" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile "Tap for details" cue */}
              <div className="job-mobile-tap-cue">
                <span>View Full Details</span>
                <ArrowUpRight size={14} />
              </div>

              {/* Action Buttons (Desktop Card Footer) */}
              <div
                className="job-card-actions"
                onClick={(e) => e.stopPropagation()} // Prevent card click when clicking buttons
              >
                <button
                  type="button"
                  className="btn-job-apply"
                  onClick={() => openApplyModal(job)}
                >
                  <Briefcase size={16} />
                  <span>Apply Now</span>
                </button>

                <a
                  href={`https://wa.me/911244567890?text=${encodeURIComponent(
                    `Hello Firstgreen Consulting, I would like to inquire about and apply for the ${job.title} position.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-job-whatsapp"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MOBILE JOB DETAILS POPUP MODAL */}
      {selectedJobForDetail && (
        <div className="modal-backdrop" onClick={closeDetailModal}>
          <div
            className="modal-box job-detail-modal-box"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeDetailModal}
              aria-label="Close job details"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="job-dept-badge">{selectedJobForDetail.department}</span>
              <h2 className="modal-title" style={{ marginTop: '10px' }}>
                {selectedJobForDetail.title}
              </h2>
              <div className="job-meta-row" style={{ marginTop: '8px' }}>
                <div className="job-meta-item">
                  <MapPin size={14} className="job-meta-icon" />
                  <span>{selectedJobForDetail.location}</span>
                </div>
                <div className="job-meta-item">
                  <Clock size={14} className="job-meta-icon" />
                  <span>{selectedJobForDetail.experience}</span>
                </div>
              </div>
            </div>

            <div className="job-modal-content">
              <p className="job-card-desc" style={{ marginBottom: '20px' }}>
                {selectedJobForDetail.desc}
              </p>

              <div className="job-detail-block" style={{ marginBottom: '20px' }}>
                <h4 className="job-block-subtitle">About the Role:</h4>
                <ul className="job-bullets-list">
                  {selectedJobForDetail.workPoints.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={16} className="job-check-icon" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="job-detail-block" style={{ marginBottom: '24px' }}>
                <h4 className="job-block-subtitle">Key Qualifications:</h4>
                <ul className="job-bullets-list">
                  {selectedJobForDetail.requirements.map((req, rIdx) => (
                    <li key={rIdx}>
                      <CheckCircle2 size={16} className="job-check-icon" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons in Modal */}
              <div className="job-card-actions modal-job-actions">
                <button
                  type="button"
                  className="btn-job-apply"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={() => {
                    const job = selectedJobForDetail
                    closeDetailModal()
                    openApplyModal(job)
                  }}
                >
                  <Briefcase size={16} />
                  <span>Apply for this Position</span>
                </button>

                <a
                  href={`https://wa.me/911244567890?text=${encodeURIComponent(
                    `Hello Firstgreen Consulting, I am interested in applying for the ${selectedJobForDetail.title} position.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-job-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. APPLY FORM POPUP MODAL (Name, Email, Mobile Number, Message) */}
      {isApplyModalOpen && (
        <div className="modal-backdrop" onClick={closeApplyModal}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={closeApplyModal}
              aria-label="Close application form"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <div className="modal-header">
                  <span className="hero-tag-title">Application Form</span>
                  <h3 className="modal-title">Apply for Position</h3>
                  <p className="modal-desc">
                    Applying for: <strong>{formData.jobTitle}</strong>
                  </p>
                </div>

                <form onSubmit={handleApplySubmit} className="modal-form">
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="apply-name">
                      Full Name *
                    </label>
                    <input
                      id="apply-name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Ananya Sharma"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Email & Mobile Number */}
                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="apply-email">
                        Email Address *
                      </label>
                      <input
                        id="apply-email"
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="ananya@example.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="apply-phone">
                        Mobile Number *
                      </label>
                      <input
                        id="apply-phone"
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

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="apply-message">
                      Cover Note / Relevant Experience
                    </label>
                    <textarea
                      id="apply-message"
                      name="message"
                      rows={3}
                      className="form-textarea"
                      placeholder="Share a brief summary of your credentials, past projects, or portfolio link..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-modal-submit">
                    <span>Submit Application</span>
                    <Send size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div className="modal-success-state">
                <div className="modal-success-icon">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="modal-success-title">Application Submitted!</h3>
                <p className="modal-success-desc">
                  Thank you, <strong>{formData.name}</strong>. Your application for <strong>{formData.jobTitle}</strong> has been received by our talent acquisition team. We will review your qualifications and contact you at <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  className="btn-modal-submit"
                  onClick={closeApplyModal}
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

export default Carrer

