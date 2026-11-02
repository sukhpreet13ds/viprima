import { PhoneCall } from 'lucide-react'
import { WhatsAppIcon } from './SocialIcons'

const FloatingActions = () => {
  return (
    <div className="floating-actions-container">
      {/* 1. Phone Call Floating Button (Above WhatsApp) */}
      <a
        href="tel:+911244567890"
        className="floating-btn floating-call-btn"
        aria-label="Call Firstgreen Consulting"
        title="Call Our Advisors"
      >
        <PhoneCall size={22} className="floating-btn-icon" />
        <span className="floating-tooltip">Call Our Advisors</span>
      </a>

      {/* 2. WhatsApp Glowing Floating Button (At Right Bottom) */}
      <a
        href={`https://wa.me/911244567890?text=${encodeURIComponent(
          'Hello Firstgreen Consulting, I would like to inquire about your clean energy and sustainability advisory services.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <div className="floating-whatsapp-pulse"></div>
        <WhatsAppIcon size={25} className="floating-btn-icon" color="#ffffff" />
        <span className="floating-tooltip">Chat on WhatsApp</span>
      </a>
    </div>
  )
}

export default FloatingActions

