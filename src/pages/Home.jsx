import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'animate.css'
import Footer from '../components/Footer'
import greenRightImg from '../assets/green-right.png'
import one from '../assets/f-one.jpg'
import two from '../assets/f-one2.jpg'
import three from '../assets/f-one3.jpg'
import fe1 from '../assets/fe1.jpg'
import fe2 from '../assets/fe2.jpg'
import fe3 from '../assets/fe3.jpg'
import fe4 from '../assets/fe4.jpg'
import fe5 from '../assets/fe5.jpg'
import fe6 from '../assets/fe6.jpg'
import art1 from '../assets/art1.jpg'
import art2 from '../assets/art2.jpg'
import art3 from '../assets/art3.jpg'
import logoImg from '../assets/viprima.png'
import {
  CheckCircle,
  Zap,
  FileText,
  Share2,
  ClipboardCheck,
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
  Building2,
  Globe,
  Award,
  ArrowUpRight,
  Leaf,
  Layers,
  Compass,
  BarChart3,
  Calendar,
  Clock,
  Sparkles,
} from 'lucide-react'

const Home = () => {
  const servicePoints = [
    'ESG Strategy & Sustainability Advisory',
    'GHG Accounting & Climate Advisory',
    'LCA & Environmental Product Declarations (EPDs)',
    'Green Building Certifications',
    'Sustainability Reporting & Assurance',
    'Capacity Building & Training',
  ]

  // Section 1: System / Framework features (tailored to website purpose)
  const systemFeatures = [
    {
      icon: Zap,
      title: 'Turnkey Clean Energy Transition',
      desc: 'End-to-end solar, wind, and storage feasibility modeling combined with corporate Power Purchase Agreement (PPA) structuring.',
    },
    {
      icon: BarChart3,
      title: 'Audit-Grade GHG Accounting',
      desc: 'Granular Scope 1, 2, and 3 emissions inventories strictly adhering to the GHG Protocol, ISO 14064, and SBTi reduction pathways.',
    },
    {
      icon: Building2,
      title: 'Green Building Certifications',
      desc: 'Whole-building energy simulation, daylight analysis, and complete rating management for LEED, IGBC, and GRIHA standards.',
    },
    {
      icon: Layers,
      title: 'LCA & EPD Documentation',
      desc: 'Cradle-to-grave embodied carbon calculation and Environmental Product Declarations (EPDs) certified for international markets.',
    },
    {
      icon: FileText,
      title: 'Regulatory ESG Disclosures',
      desc: 'Streamlined non-financial disclosures tailored to SEBI BRSR, EU CSRD, GRI Standards, and TCFD climate risk frameworks.',
    },
    {
      icon: ShieldCheck,
      title: 'Specialist Engineering Advisory',
      desc: 'Direct access to accredited energy auditors, simulation architects, and carbon market specialists guiding every transition phase.',
    },
  ]

  // Section 4: 6 Capabilities Cards with image & content
  const capabilityCards = [
    {
      image: fe1,
      tag: 'Renewable Energy',
      title: 'Utility-Scale Solar & Wind Asset Optimization',
      desc: 'Digital twin modeling and predictive degradation management for maximum clean energy output and grid reliability.',
    },
    {
      image: fe2,
      tag: 'Green Buildings',
      title: 'Net Zero Commercial Campus Certification',
      desc: 'LEED Platinum certified sustainable corporate headquarters achieving a 42% reduction in operational energy.',
    },
    {
      image: fe3,
      tag: 'Carbon Strategy',
      title: 'Enterprise Scope 3 Supply Chain Decarbonization',
      desc: 'Supplier emissions benchmarking, automated data collection, and reduction roadmaps across 600+ tier-1 vendors.',
    },
    {
      image: fe4,
      tag: 'LCA & EPD',
      title: 'Industrial Product Environmental Declarations',
      desc: 'Cradle-to-grave lifecycle assessment certified for international export compliance and eco-labeling.',
    },
    {
      image: fe5,
      tag: 'Reporting & Assurance',
      title: 'Integrated BRSR & CSRD Disclosure Readiness',
      desc: 'Complete non-financial disclosures verified and signed off by statutory audit partners with zero discrepancies.',
    },
    {
      image: fe6,
      tag: 'Digital Systems',
      title: 'IoT Real-Time Energy & Water Telemetry',
      desc: 'High-density smart sensor deployment providing millisecond-level visibility into resource consumption patterns.',
    },
  ]

  // Section 5: Services boxes (3x3 on desktop, 2x2 on mobile)
  const servicesGrid = [
    {
      icon: Compass,
      title: 'ESG Strategy & Sustainability Advisory',
      desc: 'Customized materiality assessments, climate target roadmaps, and stakeholder alignment to drive sustainable enterprise value.',
    },
    {
      icon: BarChart3,
      title: 'GHG Accounting & Climate Advisory',
      desc: 'Audit-grade Scope 1, 2, and 3 emissions inventories strictly adhering to the GHG Protocol and ISO 14064 guidelines.',
    },
    {
      icon: Layers,
      title: 'LCA & Environmental Product Declarations (EPDs)',
      desc: 'Comprehensive product life cycle assessments verifying embodied carbon and environmental footprints for global markets.',
    },
    {
      icon: Building2,
      title: 'Green Building Certifications',
      desc: 'Turnkey rating assistance for LEED, IGBC, GRIHA, and WELL certifications with specialized energy and daylight modeling.',
    },
    {
      icon: ClipboardCheck,
      title: 'Sustainability Reporting & Assurance',
      desc: 'End-to-end disclosure preparation for BRSR, GRI Standards, TCFD, and CSRD with rigorous pre-audit verification.',
    },
    {
      icon: ShieldCheck,
      title: 'Capacity Building & Training',
      desc: 'Tailored executive workshops and workforce upskilling on carbon accounting methodologies and sustainability compliance.',
    },
    {
      icon: Zap,
      title: 'Renewable Energy Engineering',
      desc: 'Feasibility assessments, solar-wind-storage hybrid design, and corporate Power Purchase Agreement (PPA) structuring.',
    },
    {
      icon: Leaf,
      title: 'Energy Auditing & Net Zero Roadmaps',
      desc: 'Investment-grade energy audits, thermal efficiency modeling, and phased capital expenditure roadmaps for net-zero.',
    },
    {
      icon: Award,
      title: 'Carbon Offset & Trading Advisory',
      desc: 'High-integrity carbon credit verification, voluntary market transactions, and Article 6 international mechanism advisory.',
    },
  ]

  // Section 6: Latest Articles (3 cards, swipeable on mobile)
  const latestArticles = [
    {
      image: art1,
      date: 'October 24, 2026',
      readTime: '5 min read',
      title: 'Navigating BRSR and CSRD: How Global Frameworks Impact Supply Chains',
      excerpt:
        'Accelerating regulatory mandates require multinational enterprises to establish rigorous, auditable carbon pipelines across all vendor tiers, unlocking sustainable green finance and avoiding non-compliance penalties...',
    },
    {
      image: art2,
      date: 'October 18, 2026',
      readTime: '7 min read',
      title: 'Designing Net-Zero Buildings: Moving Beyond Efficiency to Embodied Carbon',
      excerpt:
        'True architectural sustainability requires measuring operational thermal simulations alongside cradle-to-grave lifecycle assessments to eliminate lifetime carbon footprints before construction begins...',
    },
    {
      image: art3,
      date: 'October 10, 2026',
      readTime: '4 min read',
      title: 'The Role of Digital Intelligence in Industrial Decarbonization',
      excerpt:
        'Predictive analytics and digital twin systems are redefining how manufacturing facilities optimize thermodynamic cycles, forecast peak loads, and curtail Scope 2 power demand in real time...',
    },
  ]

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

  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-glow-blob hero-glow-blob-left"></div>
        <div className="hero-glow-blob hero-glow-blob-right"></div>

        <div className="hero-content-wrapper">
          <div className="hero-left">
            <span className="hero-tag-title animate__animated animate__fadeInUp">Firstgreen Consulting</span>

            <h1 className="hero-title animate__animated animate__fadeInUp">
             Towards a Cleaner, Greener Planet.
            </h1>

            <p className="hero-paragraph animate__animated animate__fadeInUp">
              Sustainable solutions, green innovation, and responsible practices for a cleaner environment and a greener future.
            </p>

            <div className="hero-cta-group animate__animated animate__fadeInUp">
              <a href="#quote" className="btn-hero-primary">
                <span>Get a Qoute</span>
                <svg
                  className="arrow-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a href="#services" className="btn-hero-secondary">
                Explore Services
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card-glow"></div>
            <div className="hero-image-frame animate__animated animate__zoomIn">
              <img
                src={greenRightImg}
                alt="Green energy and sustainability intelligence dashboard"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEAMLESS MARQUEE SECTION */}
      <section className="marquee-section" aria-label="Services highlights">
     

        <div className="marquee-container">
          <div className="marquee-track">
            {[...servicePoints, ...servicePoints, ...servicePoints].map((service, index) => (
              <div key={index} className="marquee-card">
                <span className="marquee-sparkle">✦</span>
                <span className="marquee-title">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SYSTEM / FRAMEWORK SHOWCASE SECTION (Gapless stepper & purpose-tailored content) */}
      <section className="system-section" id="about">
        <div className="section-header-center">
          <h2 className="section-main-heading animate-on-scroll">From manual spreadsheets to verified intelligence.</h2>
          <p className="section-main-subheading animate-on-scroll">
            Firstgreen Consulting unifies carbon accounting, green building performance, and renewable engineering into a structured, audit-ready operational framework.
          </p>

          {/* Gapless Stepper Timeline */}
          <div className="stepper-timeline animate-on-scroll">
            <div className="stepper-step completed">
              <span className="stepper-dot"></span>
              <span className="stepper-label">Data</span>
            </div>
            <div className="stepper-line"></div>
            <div className="stepper-step completed">
              <span className="stepper-dot"></span>
              <span className="stepper-label">Structure</span>
            </div>
            <div className="stepper-line"></div>
            <div className="stepper-step completed">
              <span className="stepper-dot"></span>
              <span className="stepper-label">Audit</span>
            </div>
            <div className="stepper-line"></div>
            <div className="stepper-step active">
              <span className="stepper-dot"></span>
              <span className="stepper-label">Advantage</span>
            </div>
          </div>
        </div>

        {/* 6 Feature Boxes (3x2 grid) */}
        <div className="system-grid">
          {systemFeatures.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="system-card animate-on-scroll">
                <div className="system-card-top">
                  <div className="system-icon-box">
                    <Icon className="system-icon" size={22} />
                  </div>
                  <h3 className="system-card-title">{item.title}</h3>
                </div>
                <p className="system-card-desc">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. THREE ALTERNATING CONTENT & IMAGE ROWS */}
      <section className="alternating-section">
        {/* Row 1: Left Content | Right Image */}
        <div className="alt-row">
          <div className="alt-content animate-on-scroll">
            <span className="alt-badge">Carbon Strategy</span>
            <h2 className="alt-heading">Enterprise Decarbonization & Scope 1-3 GHG Accounting</h2>
            <p className="alt-desc">
              Transform operational complexities into high-fidelity emissions inventories aligned with international accounting standards.
            </p>
            <ul className="alt-bullets">
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Boundary definition and automated Scope 1, 2, and 3 data collection</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Science-Based Targets initiative (SBTi) alignment and scenario modeling</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Life Cycle Assessment (LCA) for industrial products and supply chain tiers</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Corporate renewable Power Purchase Agreement (PPA) evaluation</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Continuous carbon intensity telemetry and third-party assurance readiness</span>
              </li>
            </ul>
          </div>
          <div className="alt-image-wrap animate-on-scroll">
            <div className="alt-image-glow"></div>
            <img src={one} alt="Decarbonization strategy" className="alt-image" />
          </div>
        </div>

        {/* Row 2: Left Image | Right Content */}
        <div className="alt-row alt-row-reverse">
          <div className="alt-content animate-on-scroll">
            <span className="alt-badge">Sustainable Infrastructure</span>
            <h2 className="alt-heading">High-Performance Green Building Certifications</h2>
            <p className="alt-desc">
              Accelerate your portfolio’s rating achievements with accredited simulation engineers, daylight specialists, and sustainability architects.
            </p>
            <ul className="alt-bullets">
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Whole-building energy modeling, thermal comfort, and daylight simulation</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>LEED Platinum/Gold, IGBC, and GRIHA certification end-to-end guidance</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Embodied carbon reduction and Environmental Product Declarations (EPDs)</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Net Zero Energy (NZE) and Net Zero Water pathway engineering</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Post-occupancy commissioning and real-time operational efficiency verification</span>
              </li>
            </ul>
          </div>
          <div className="alt-image-wrap animate-on-scroll">
            <div className="alt-image-glow"></div>
            <img src={two} alt="Green Building Architecture" className="alt-image" />
          </div>
        </div>

        {/* Row 3: Left Content | Right Image */}
        <div className="alt-row">
          <div className="alt-content animate-on-scroll">
            <span className="alt-badge">ESG Governance</span>
            <h2 className="alt-heading">Comprehensive Sustainability Reporting & Assurance</h2>
            <p className="alt-desc">
              Eliminate reporting bottlenecks and prepare audit-ready disclosures that satisfy global regulatory mandates and investor scrutiny.
            </p>
            <ul className="alt-bullets">
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Multi-standard disclosure generation: BRSR, GRI Standards, CSRD, and TCFD</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Double-materiality assessments and cross-functional stakeholder mapping</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Immutable digital audit trails built for Big-4 assurance providers</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Physical climate risk vulnerability mapping and adaptation roadmaps</span>
              </li>
              <li>
                <CheckCircle2 className="bullet-icon" size={19} />
                <span>Executive-ready dashboards for board-level climate governance</span>
              </li>
            </ul>
          </div>
          <div className="alt-image-wrap animate-on-scroll">
            <div className="alt-image-glow"></div>
            <img src={three} alt="Sustainability Reporting" className="alt-image" />
          </div>
        </div>
      </section>

      {/* 5. STATS GRID (BALANCED 2x2 GRID - 4TH BOX ALONGSIDE 3RD) */}
      <section className="stats-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Proven Impact</span>
          <h2 className="section-main-heading animate-on-scroll">Quantified results across clean energy and ESG.</h2>
        </div>

        <div className="stats-bento-grid">
          {/* Row 1, Box 1 */}
          <div className="stats-card stats-card-feature animate-on-scroll">
            <div className="stats-card-bg-glow"></div>
            <div className="stats-card-top-icon">
              <TrendingDown className="stat-icon" size={28} />
            </div>
            <div className="stat-huge-number">2.4M+</div>
            <div className="stat-huge-unit">Metric Tons CO₂e Mitigated</div>
            <p className="stat-desc">
              Cumulative greenhouse gas reductions delivered across commercial, industrial, and utility-scale clean energy portfolios globally.
            </p>
          </div>

          {/* Row 1, Box 2 */}
          <div className="stats-card animate-on-scroll">
            <div className="stats-card-top-icon">
              <Building2 className="stat-icon" size={24} />
            </div>
            <div className="stat-big-number">450+</div>
            <div className="stat-big-unit">Certified Green Buildings</div>
            <p className="stat-desc">
              LEED Platinum/Gold, IGBC, and GRIHA certified properties engineered for maximum operational energy efficiency.
            </p>
          </div>

          {/* Row 2, Box 3 */}
          <div className="stats-card animate-on-scroll">
            <div className="stats-card-top-icon">
              <Award className="stat-icon" size={24} />
            </div>
            <div className="stat-big-number">99.8%</div>
            <div className="stat-big-unit">Assurance Accuracy</div>
            <p className="stat-desc">
              Verified data compliance score across international regulatory audits and third-party non-financial assurances.
            </p>
          </div>

          {/* Row 2, Box 4 (Along with 3rd box) */}
          <div className="stats-card stats-card-feature animate-on-scroll">
            <div className="stats-card-bg-glow"></div>
            <div className="stats-card-top-icon">
              <Globe className="stat-icon" size={28} />
            </div>
            <div className="stat-huge-number">25+ GW</div>
            <div className="stat-huge-unit">Clean Energy Capacity Advised</div>
            <p className="stat-desc">
              Comprehensive technical modeling, solar-wind hybrid engineering, and storage integration designed for long-term grid resilience.
            </p>
          </div>
        </div>
      </section>

      {/* 6. SIX BOXES OF CAPABILITIES (IMAGE WITH CONTENT) */}
      <section className="showcase-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Capabilities</span>
          <h2 className="section-main-heading animate-on-scroll">Applied expertise across sectors.</h2>
          <p className="section-main-subheading animate-on-scroll">
            Explore how our multidisciplinary advisory combines domain engineering with digital execution.
          </p>
        </div>

        <div className="showcase-grid">
          {capabilityCards.map((card, i) => (
            <div key={i} className="showcase-card animate-on-scroll">
              <div className="showcase-img-wrap">
                <img src={card.image} alt={card.title} className="showcase-img" />
              </div>
              <div className="showcase-content">
                <h3 className="showcase-title">{card.title}</h3>
                <p className="showcase-desc">{card.desc}</p>
                <div className="showcase-link">
                  <span>Explore Capability</span>
                  <ArrowUpRight size={18} className="showcase-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SERVICES BOXES WITH TILT ARROW (3x3 DEFAULT, 2x2 ON MOBILE) */}
      <section className="services-section" id="services">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">End-to-End Solutions</span>
          <h2 className="section-main-heading animate-on-scroll">Comprehensive sustainability services.</h2>
          <p className="section-main-subheading animate-on-scroll">
            Specialized engineering, strategic advisory, and compliance frameworks to scale clean energy impact.
          </p>
        </div>

        {/* 3x3 default, 2x2 on mobile */}
        <div className="services-grid-tilt">
          {servicesGrid.map((srv, index) => {
            const IconComponent = srv.icon
            return (
              <div key={index} className="service-tilt-box animate-on-scroll">
                <div className="service-tilt-top">
                  <div className="service-icon-wrap">
                    <IconComponent className="service-box-icon" size={24} />
                  </div>
                  <div className="tilt-arrow-wrap">
                    <ArrowUpRight className="tilt-arrow-icon" size={22} />
                  </div>
                </div>

                <h3 className="service-box-title">{srv.title}</h3>
                <p className="service-box-desc">{srv.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 8. LATEST ARTICLES (3 WITH IMAGE, TITLE, PARAGRAPH WITH THREE DOTS ... SWIPEABLE ON MOBILE) */}
      <section className="articles-section" id="articles">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Thought Leadership</span>
          <h2 className="section-main-heading animate-on-scroll">Latest Articles & Insights</h2>
          <p className="section-main-subheading animate-on-scroll">
            Perspectives from our energy engineers and sustainability advisors on decarbonization trends.
          </p>
        </div>

        <div className="articles-container">
          <div className="articles-track">
            {latestArticles.map((article, index) => {
              const articleSlug =
                index === 0
                  ? 'brsr-csrd-supply-chains'
                  : index === 1
                  ? 'net-zero-buildings-embodied-carbon'
                  : 'digital-intelligence-decarbonization'

              return (
                <Link
                  to={`/articles/${articleSlug}`}
                  key={index}
                  className="article-card animate-on-scroll"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="article-img-wrap">
                    <img src={article.image} alt={article.title} className="article-img" />
                  </div>
                  <div className="article-body">
                    <div className="article-meta">
                      <span className="article-meta-item">
                        <Calendar size={14} className="meta-icon" />
                        <span>{article.date}</span>
                      </span>
                      <span className="meta-sep">•</span>
                      <span className="article-meta-item">
                        <Clock size={14} className="meta-icon" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>

                    <div className="article-read-more">
                      <span>Read Article</span>
                      <ArrowUpRight size={16} className="article-arrow" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="cta-section" id="quote">
        <div className="cta-card">
          <div className="cta-glow-bg"></div>
          <div className="cta-content animate-on-scroll">
            <span className="hero-tag-title">Get Started Today</span>
            <h2 className="cta-title">Ready to engineer a cleaner, more sustainable future?</h2>
            <p className="cta-desc">
              Connect with our sustainability advisors and clean energy engineers to build audit-ready ESG intelligence, certified green buildings, and high-performance clean energy assets.
            </p>
            <div className="cta-button-group">
              <a href="#contact" className="btn-get-quote cta-btn-main">
                <span>Get a Qoute</span>
                <ArrowUpRight size={18} />
              </a>
              <a href="#about" className="btn-hero-secondary">
                Learn About Our Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <Footer />
    </div>
  )
}

export default Home
