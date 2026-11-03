import { useEffect } from 'react'
import 'animate.css'
import Footer from '../components/Footer'
import {
  MapPin,
  Building2,
  Factory,
  Zap,
  Server,
  Truck,
  Landmark,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Globe2,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { WhatsAppIcon } from '../components/SocialIcons'

const IndustryServe = () => {
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

  const globalHubs = [
    { region: 'India & South Asia', hub: 'Gurugram, Mumbai, Bengaluru', count: '320+ Engagements' },
    { region: 'Middle East & GCC', hub: 'Dubai, Riyadh, Abu Dhabi', count: '65+ Certified Projects' },
    { region: 'Europe & UK', hub: 'London, Frankfurt, Amsterdam', count: 'CBAM & CSRD Portfolios' },
    { region: 'Southeast Asia', hub: 'Singapore, Jakarta, Bangkok', count: 'Clean Energy & LCAs' },
  ]

  const industrySectors = [
    {
      id: 'real-estate',
      icon: Building2,
      title: 'Commercial Real Estate & Institutional Campuses',
      locations: 'Pan-India, UAE, UK & GCC',
      tag: 'Built Environment',
      desc: 'Guiding large-scale IT parks, corporate headquarters, and commercial real estate portfolios to LEED Platinum, IGBC Net Zero, and GRIHA excellence through physics-based building energy simulation.',
      stats: '450+ Certified Assets • 42% Avg Energy Savings',
      solutions: [
        'Whole-building thermodynamic simulation (eQuest, EnergyPlus, IES-VE)',
        'Dynamic daylight autonomy (sDA) and glare mitigation modeling',
        'Cradle-to-grave embodied carbon accounting and low-carbon concrete selection',
        'Green lease covenants and post-occupancy operational energy benchmarking',
      ],
    },
    {
      id: 'heavy-industry',
      icon: Factory,
      title: 'Heavy Industry, Steel, Cement & Metals',
      locations: 'Industrial Corridors, Europe Export Hubs',
      tag: 'Hard-to-Abate Sectors',
      desc: 'Protecting export competitiveness under EU CBAM carbon border tariffs through verified Life Cycle Assessments (LCAs), Type III EPDs, and thermodynamic waste heat recovery engineering.',
      stats: '1.2M+ Tons CO₂e Mitigated • 100% CBAM Audit Clearance',
      solutions: [
        'ISO 14040/44 compliant cradle-to-gate Life Cycle Assessments',
        'Type III Environmental Product Declarations (EPDs) certified for EU export',
        'Thermal mass balance auditing and waste heat recovery integration',
        'Marginal Abatement Cost Curve (MACC) modeling for furnace decarbonization',
      ],
    },
    {
      id: 'clean-energy',
      icon: Zap,
      title: 'Renewable Energy Developers & IPPs',
      locations: 'Utility Corridors, Rajasthan, Gujarat, MENA',
      tag: 'Power & Utilities',
      desc: 'Maximizing generation yield and revenue security for utility-scale solar, wind, and Battery Energy Storage Systems (BESS) via high-fidelity digital twins and corporate PPA structuring.',
      stats: '25+ GW Clean Capacity Advised • P90 Bankable Yields',
      solutions: [
        'Bifacial solar and wind yield modeling with terrain roughness telemetry',
        'BESS storage integration for peak tariff shaving and grid code compliance',
        'Corporate open-access group captive and Virtual PPA structuring',
        'Predictive inverter degradation and thermal anomaly detection',
      ],
    },
    {
      id: 'data-centers',
      icon: Server,
      title: 'Hyperscale Data Centers & Tech Infrastructure',
      locations: 'Mumbai, Chennai, Noida, Hyderabad',
      tag: 'Mission-Critical Digital',
      desc: 'Engineering ultra-low Power Usage Effectiveness (PUE) architectures and round-the-clock green power procurement for high-density AI and cloud compute campuses.',
      stats: 'Sub-1.25 PUE Benchmarks • 24/7 Green Power Portfolios',
      solutions: [
        'Direct-to-chip and immersion liquid cooling thermodynamic simulation',
        '24/7 clean energy matching via solar-wind-storage hybrid PPA models',
        'Water Usage Effectiveness (WUE) minimization and adiabatic cooling design',
        'Scope 2 market-based accounting with hourly timestamped EAC retirement',
      ],
    },
    {
      id: 'supply-chain',
      icon: Truck,
      title: 'Supply Chain, Logistics & FMCG Networks',
      locations: 'Global Multimodal Supply Chains',
      tag: 'Value Chain Decarbonization',
      desc: 'Eliminating Scope 3 estimation errors across complex Tier-1 and Tier-2 vendor ecosystems through primary telemetry collection and certified product carbon footprints.',
      stats: '600+ Tier-1 Suppliers Onboarded • Audit-Grade Data',
      solutions: [
        'Supplier engagement portals for verified primary carbon data collection',
        'Freight route optimization and multimodal rail-road carbon modeling',
        'Sustainable packaging LCA benchmarking and recyclable material sourcing',
        'Contractual green procurement clauses and supplier ESG scorecarding',
      ],
    },
    {
      id: 'financial-services',
      icon: Landmark,
      title: 'Banking, Financial Services & Institutional Capital',
      locations: 'Financial Centers (Mumbai, London, Singapore)',
      tag: 'Sustainable Finance',
      desc: 'Structuring audit-ready BRSR Core and CSRD disclosure readiness, financed emissions accounting (PCAF), and technical due diligence for green bond issuance.',
      stats: 'Zero Statutory Discrepancies • Big-4 Assurance Ready',
      solutions: [
        'Financed emissions inventories aligned with PCAF Standard',
        'SEBI BRSR Core mandatory indicators and reasonable assurance readiness',
        'Double-materiality scoring linking climate risks to EBITDA sensitivity',
        'Green taxonomy technical screening for sustainable debt financing',
      ],
    },
  ]

  return (
    <div className="industry-page-container">
      {/* 1. TOP PAGE HEADER */}
      <section className="page-header-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Sector Expertise</span>
          <h1 className="page-main-heading animate-on-scroll">
            Industries We Serve
          </h1>
          <p className="page-main-subheading animate-on-scroll">
            Delivering audit-grade carbon accounting, renewable engineering, and green building performance tailored to the operational realities of mission-critical global industries.
          </p>
        </div>
      </section>

      {/* 2. GLOBAL FOOTPRINT HUBS BAR WITH LOCATION ICONS */}
      <section className="industry-hubs-section">
        <div className="industry-hubs-wrapper animate-on-scroll">
          <div className="industry-hubs-header">
            <Globe2 size={20} className="hubs-globe-icon" />
            <h3 className="industry-hubs-title">Our Global Advisory Footprint</h3>
          </div>
          <div className="industry-hubs-grid">
            {globalHubs.map((hub, idx) => (
              <div key={idx} className="industry-hub-card">
                <div className="hub-card-top">
                  <div className="hub-location-pin">
                    <MapPin size={18} />
                  </div>
                  <span className="hub-region-name">{hub.region}</span>
                </div>
                <p className="hub-cities">{hub.hub}</p>
                <span className="hub-metric">{hub.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY SECTOR CARDS (Clean, Focused, Location-Tagged) */}
      <section className="industry-sectors-section">
        <div className="industry-sectors-grid">
          {industrySectors.map((sector) => {
            const Icon = sector.icon
            return (
              <div key={sector.id} className="industry-sector-card animate-on-scroll">
                <div className="sector-card-top">
                  <div className="sector-icon-box">
                    <Icon size={26} />
                  </div>
                  <div className="sector-badges-wrap">
                    <span className="sector-tag">{sector.tag}</span>
                    <div className="sector-location-badge">
                      <MapPin size={13} className="pin-icon" />
                      <span>{sector.locations}</span>
                    </div>
                  </div>
                </div>

                <h2 className="sector-title">{sector.title}</h2>
                <p className="sector-desc">{sector.desc}</p>

                <div className="sector-stat-highlight">
                  <Sparkles size={14} className="sector-sparkle" />
                  <span>{sector.stats}</span>
                </div>

                <div className="sector-solutions-block">
                  <h4 className="sector-solutions-heading">Key Technical Interventions:</h4>
                  <ul className="sector-solutions-list">
                    {sector.solutions.map((item, sIdx) => (
                      <li key={sIdx}>
                        <CheckCircle2 size={16} className="sector-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sector-card-footer">
                  <Link to="/contact" className="sector-cta-link">
                    <span>Discuss Sector Advisory</span>
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. SECTOR CONSULTATION CTA BANNER */}
      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-glow-bg"></div>
          <div className="cta-content animate-on-scroll">
            <span className="hero-tag-title">Custom Sector Frameworks</span>
            <h2 className="cta-title">Need specialized technical guidance for your industry?</h2>
            <p className="cta-desc">
              Connect with our industry specialists to structure regulatory-proof carbon telemetry, green building ratings, or clean energy power purchase agreements.
            </p>
            <div className="cta-button-group">
              <Link to="/contact" className="btn-get-quote cta-btn-main">
                <span>Book Sector Consultation</span>
                <ArrowUpRight size={18} />
              </Link>
              <a
                href={`https://wa.me/911244567890?text=${encodeURIComponent(
                  'Hello Firstgreen Consulting, I would like to inquire about advisory services for my industry.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-service"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp Our Specialists</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default IndustryServe

