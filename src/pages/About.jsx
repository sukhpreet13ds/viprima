import { useEffect } from 'react'
import 'animate.css'
import Footer from '../components/Footer'
import fOne from '../assets/f-one.jpg'
import fOne2 from '../assets/f-one2.jpg'
import fOne3 from '../assets/f-one3.jpg'
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  Zap,
  Building2,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Globe,
  Leaf,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
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

  const companyStats = [
    { value: '25+ GW', label: 'Clean Energy Advised' },
    { value: '450+', label: 'Green Buildings Certified' },
    { value: '2.4M+', label: 'Tons CO₂e Mitigated' },
    { value: '40+', label: 'Countries Served' },
  ]

  const nodeSteps = [
    {
      step: '01',
      title: 'Baseline Carbon Footprint & Diagnostic',
      subtitle: 'Scoping & Data Lineage',
      desc: 'We conduct comprehensive boundary definition across Scope 1, 2, and 3 activities, aligning operational data with GHG Protocol, ISO 14064, and SEBI BRSR guidelines.',
      bullets: [
        'Complete facility and supply chain inventory mapping',
        'Direct emission factor localization and verification',
        'Double-materiality ESG assessment for key stakeholders',
      ],
    },
    {
      step: '02',
      title: 'Decarbonization Roadmap & Engineering',
      subtitle: 'Techno-Commercial Modeling',
      desc: 'Our certified engineers model net-zero pathways combining on-site solar, wind, storage, corporate PPAs, and whole-building thermodynamic simulations.',
      bullets: [
        'Levelized cost of energy (LCOE) optimization',
        'LEED, IGBC, and GRIHA certification trajectory design',
        'Science-Based Targets initiative (SBTi) reduction scenarios',
      ],
    },
    {
      step: '03',
      title: 'Precision Execution & Telemetry Integration',
      subtitle: 'Digital & Physical Deployment',
      desc: 'We supervise energy conservation measures (ECMs), execute cradle-to-grave Life Cycle Assessments (LCAs), and implement high-density IoT telemetry.',
      bullets: [
        'Real-time energy and water telemetry architectures',
        'Environmental Product Declarations (EPDs) certification',
        'Post-occupancy commissioning and efficiency auditing',
      ],
    },
    {
      step: '04',
      title: 'Statutory ESG Disclosures & Assurance',
      subtitle: 'Audit-Proof Verification',
      desc: 'Finalize non-financial reporting packages engineered to satisfy Big-4 statutory audit rigor, international investors, and statutory regulatory bodies.',
      bullets: [
        'BRSR Core, EU CSRD, GRI, and TCFD compliance reporting',
        'Immutable digital audit trails with complete evidence logs',
        'Board-level climate governance and impact dashboards',
      ],
    },
  ]

  const projectImages = [
    {
      img: fOne,
      title: 'Renewable Energy & Storage Engineering',
      caption: 'Utility-scale solar and battery storage feasibility models deployed across industrial corridors.',
      tag: 'Clean Energy',
    },
    {
      img: fOne2,
      title: 'LEED & Net-Zero Certified Campuses',
      caption: 'High-performance commercial real estate engineered for platinum daylighting and thermal efficiency.',
      tag: 'Green Buildings',
    },
    {
      img: fOne3,
      title: 'Enterprise Decarbonization & Telemetry',
      caption: 'Continuous Scope 1-3 carbon tracking and ESG compliance assurance for global supply chains.',
      tag: 'ESG Intelligence',
    },
  ]

  const pillarBoxes = [
    {
      icon: Award,
      title: 'Accredited Engineering Excellence',
      tag: 'Technical Rigor',
      desc: 'Our multidisciplinary team includes Bureau of Energy Efficiency (BEE) Accredited Energy Auditors, LEED APs, IGBC Accredited Professionals, and GRIHA Evaluators with over 15 years of field-tested engineering expertise.',
    },
    {
      icon: ShieldCheck,
      title: 'Audit-Proof Governance & Data Integrity',
      tag: 'Assurance Ready',
      desc: 'Every calculation, emissions factor, and building simulation we generate is accompanied by verifiable documentation designed to withstand statutory third-party non-financial assurance with zero discrepancies.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Commercial Value & Green ROI',
      tag: 'Strategic Impact',
      desc: 'We bridge sustainability and profitability by structuring decarbonization roadmaps that lower levelized energy expenditures, eliminate capex risks, and unlock preferential green financing.',
    },
  ]

  return (
    <div className="about-page-container">
      {/* 1. PAGE HEADER */}
      <section className="page-header-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">About Firstgreen Consulting</span>
          <h1 className="page-main-heading animate-on-scroll">
            Engineering a Cleaner, Sustainable Planet.
          </h1>
          <p className="page-main-subheading animate-on-scroll">
            Firstgreen Consulting unifies carbon accounting, high-performance green building engineering, and digital sustainability intelligence connected through practical expertise.
          </p>
        </div>
      </section>

      {/* 2. COMPANY DETAILS SECTION */}
      <section className="about-company-section">
        <div className="about-company-grid">
          <div className="about-company-left animate-on-scroll">
            <span className="alt-badge">Who We Are</span>
            <h2 className="about-company-heading">
              Practical Engineering for Complex Climate Challenges
            </h2>
            <p className="about-company-text">
              Founded as a specialized sustainability advisory, Firstgreen Consulting operates at the intersection of deep domain engineering, climate science, and digital intelligence. We empower corporations, developers, and institutions to navigate the global energy transition with confidence.
            </p>
            <p className="about-company-text">
              From calculating intricate Scope 3 carbon footprints across tiered supply chains to engineering LEED Platinum zero-carbon campuses, our focus remains unwavering: delivering measurable, audit-ready environmental impact that creates lasting commercial value.
            </p>

            <div className="about-values-cards">
              <div className="about-value-item">
                <div className="about-value-icon">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="about-value-title">Our Mission</h4>
                  <p className="about-value-desc">
                    Decarbonize global value chains through auditable engineering and digital precision.
                  </p>
                </div>
              </div>

              <div className="about-value-item">
                <div className="about-value-icon">
                  <Eye size={20} />
                </div>
                <div>
                  <h4 className="about-value-title">Our Vision</h4>
                  <p className="about-value-desc">
                    A carbon-neutral global economy where industrial progress harmonizes with ecological balance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-company-right animate-on-scroll">
            <div className="about-stats-card-box">
              <div className="about-stats-glow"></div>
              <h3 className="about-stats-card-title">Our Quantified Heritage</h3>
              <p className="about-stats-card-subtitle">
                Over a decade of high-fidelity engineering and sustainability advisory:
              </p>

              <div className="about-stats-grid">
                {companyStats.map((st, idx) => (
                  <div key={idx} className="about-stat-tile">
                    <div className="about-stat-number">{st.value}</div>
                    <div className="about-stat-label">{st.label}</div>
                  </div>
                ))}
              </div>

              <div className="about-stats-footnote">
                <Sparkles size={16} className="stat-footnote-sparkle" />
                <span>Accredited by LEED, IGBC, GRIHA, and ISO 14064 certification bodies.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONNECTING NODE LINE SECTION (4 BOXES: LEFT, RIGHT, LEFT, RIGHT) */}
      <section className="about-nodes-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Strategic Methodology</span>
          <h2 className="section-main-heading animate-on-scroll">
            How We Structure Your Transition
          </h2>
          <p className="section-main-subheading animate-on-scroll">
            A cohesive 4-stage operational framework bridging raw data to statutory assurance.
          </p>
        </div>

        <div className="node-timeline-container">
          {/* Vertical central glowing line */}
          <div className="node-central-line"></div>

          <div className="node-steps-wrapper">
            {nodeSteps.map((node, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`node-step-row ${isLeft ? 'node-row-left' : 'node-row-right'} animate-on-scroll`}
                >
                  {/* Central Node Badge */}
                  <div className="node-center-marker">
                    <span className="node-step-badge">{node.step}</span>
                  </div>

                  {/* Connecting arm line */}
                  <div className="node-branch-line"></div>

                  {/* Node Box */}
                  <div className="node-box-card">
                    <div className="node-box-header">
                      <span className="node-box-subtitle">{node.subtitle}</span>
                      <h3 className="node-box-title">{node.title}</h3>
                    </div>
                    <p className="node-box-desc">{node.desc}</p>
                    <ul className="node-box-bullets">
                      {node.bullets.map((b, bIdx) => (
                        <li key={bIdx}>
                          <CheckCircle2 size={16} className="node-check-icon" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. THREE IMAGES SECTION */}
      <section className="about-gallery-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Field Capabilities</span>
          <h2 className="section-main-heading animate-on-scroll">
            Applied Engineering in Action
          </h2>
          <p className="section-main-subheading animate-on-scroll">
            A visual overview of our clean energy deployments, certified campuses, and industrial telemetry.
          </p>
        </div>

        <div className="about-images-grid">
          {projectImages.map((item, idx) => (
            <div key={idx} className="about-image-card animate-on-scroll">
              <div className="about-image-wrap">
                <img src={item.img} alt={item.title} className="about-card-img" />
                <span className="about-image-tag">{item.tag}</span>
              </div>
              <div className="about-image-content">
                <h3 className="about-image-title">{item.title}</h3>
                <p className="about-image-desc">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THREE BOXES WITH ONLY CONTENT */}
      <section className="about-pillars-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Why Choose Firstgreen</span>
          <h2 className="section-main-heading animate-on-scroll">
            Our Core Value Propositions
          </h2>
          <p className="section-main-subheading animate-on-scroll">
            Combining rigorous engineering discipline with boardroom-grade climate governance.
          </p>
        </div>

        <div className="about-pillars-grid">
          {pillarBoxes.map((p, idx) => {
            const Icon = p.icon
            return (
              <div key={idx} className="about-pillar-card animate-on-scroll">
                <div className="about-pillar-top">
                  <div className="about-pillar-icon-box">
                    <Icon size={24} className="about-pillar-icon" />
                  </div>
                  <span className="about-pillar-tag">{p.tag}</span>
                </div>
                <h3 className="about-pillar-title">{p.title}</h3>
                <p className="about-pillar-desc">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-glow-bg"></div>
          <div className="cta-content animate-on-scroll">
            <span className="hero-tag-title">Collaborate With Us</span>
            <h2 className="cta-title">Ready to accelerate your corporate sustainability transition?</h2>
            <p className="cta-desc">
              Connect with our certified engineers to discuss clean energy modeling, green building ratings, or statutory ESG reporting readiness.
            </p>
            <div className="cta-button-group">
              <Link to="/contact" className="btn-get-quote cta-btn-main">
                <span>Contact Our Team</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/services" className="btn-hero-secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default About

