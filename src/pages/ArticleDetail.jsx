import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import 'animate.css'
import Footer from '../components/Footer'
import { articlesList } from '../data/articlesData'
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Share2,
  Check,
  Copy,
} from 'lucide-react'
import {
  WhatsAppIcon,
  LinkedInIcon,
  TwitterXIcon,
} from '../components/SocialIcons'

const ArticleDetail = () => {
  const { id } = useParams()
  const [copied, setCopied] = useState(false)

  // Find article by id or default to first article
  const article = articlesList.find((a) => a.id === id) || articlesList[0]

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
  }, [id])

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: currentUrl,
      })
    } else {
      handleCopyLink()
    }
  }

  return (
    <div className="article-detail-page-container">
      <div className="article-detail-inner">
        {/* Navigation Breadcrumb / Back button */}
        <div className="article-back-bar animate-on-scroll">
          <Link to="/articles" className="btn-article-back">
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>
          <span className="article-detail-badge">{article.tag}</span>
        </div>

        {/* 1. TOP IMAGE */}
        <div className="article-detail-hero-wrap animate-on-scroll">
          <div className="article-hero-img-glow"></div>
          <img
            src={article.image}
            alt={article.title}
            className="article-detail-hero-img"
          />
        </div>

        {/* Article Meta Bar */}
        <div className="article-detail-meta-bar animate-on-scroll">
          <div className="article-meta">
            <span className="article-meta-item">
              <Calendar size={15} className="meta-icon" />
              <span>{article.date}</span>
            </span>
            <span className="meta-sep">•</span>
            <span className="article-meta-item">
              <Clock size={15} className="meta-icon" />
              <span>{article.readTime}</span>
            </span>
            <span className="meta-sep">•</span>
            <span className="article-meta-item article-meta-author">
              <span>By Firstgreen Sustainability Advisory</span>
            </span>
          </div>
        </div>

        {/* 2. TITLE */}
        <h1 className="article-detail-title animate-on-scroll">
          {article.title}
        </h1>

        {/* 3. PARAGRAPH */}
        <div className="article-detail-paragraph-block animate-on-scroll">
          <p className="article-detail-lead-p">{article.introParagraph}</p>
        </div>

        {/* 4. BULLET POINTS */}
        <div className="article-detail-bullets-card animate-on-scroll">
          <h3 className="article-bullets-title">Key Regulatory & Technical Takeaways</h3>
          <ul className="article-bullets-list">
            {article.bulletPoints.map((point, index) => (
              <li key={index}>
                <CheckCircle2 size={19} className="article-bullet-icon" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. LITTLE PARAGRAPH */}
        <div className="article-detail-paragraph-block animate-on-scroll">
          <p className="article-detail-body-p">{article.contextParagraph}</p>
        </div>

        {/* 6. TABLE RESPONSIVE */}
        <div className="article-table-card animate-on-scroll">
          <div className="article-table-caption">
            <span>{article.table.caption}</span>
          </div>
          <div className="article-table-responsive">
            <table className="article-content-table">
              <thead>
                <tr>
                  {article.table.headers.map((h, hIdx) => (
                    <th key={hIdx}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {article.table.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 7. TITLE THEN LITTLE DESCRIPTION */}
        <div className="article-section-block animate-on-scroll">
          <h2 className="article-section-title">{article.sectionTitle}</h2>
          <p className="article-detail-body-p">{article.sectionDesc}</p>
        </div>

        {/* 8. SUBTITLE THEN THEIR LITTLE DESC */}
        <div className="article-subsection-block animate-on-scroll">
          <h3 className="article-subsection-title">{article.subTitle}</h3>
          <p className="article-detail-body-p">{article.subDesc}</p>
        </div>

        {/* 9. AND THAT 3 POINTS */}
        <div className="article-three-points-card animate-on-scroll">
          <div className="three-points-header">
            <span className="hero-tag-title">Strategic Roadmap</span>
            <h4 className="three-points-title">Immediate Executive Directives</h4>
          </div>
          <div className="three-points-grid">
            {article.threePoints.map((pt, pIdx) => (
              <div key={pIdx} className="three-point-item">
                <div className="point-number-badge">0{pIdx + 1}</div>
                <p className="point-text">{pt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 10. THEN END (CONCLUSION) */}
        <div className="article-conclusion-card animate-on-scroll">
          <h3 className="conclusion-title">Summary & Strategic Perspective</h3>
          <p className="conclusion-text">{article.conclusion}</p>
        </div>

        {/* 11. LAST OPTION GIVE SHARE KINDA ICON */}
        <div className="article-share-bar animate-on-scroll">
          <div className="share-left-info">
            <div className="share-icon-wrap">
              <Share2 size={20} className="share-main-icon" />
            </div>
            <div>
              <span className="share-label">Share This Article</span>
              <p className="share-desc">Circulate with your board, engineering peers, or ESG advisory committee</p>
            </div>
          </div>

          <div className="share-buttons-group">
            {/* Copy Link Button */}
            <button
              type="button"
              className={`btn-share-action ${copied ? 'copied' : ''}`}
              onClick={handleCopyLink}
              title="Copy Article Link"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
            </button>

            {/* WhatsApp Share */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${article.title} - Read more from Firstgreen Consulting: ${currentUrl}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-share-social share-whatsapp"
              title="Share on WhatsApp"
              aria-label="Share on WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>

            {/* LinkedIn Share */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                currentUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-share-social share-linkedin"
              title="Share on LinkedIn"
              aria-label="Share on LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>

            {/* Twitter/X Share */}
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                article.title
              )}&url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-share-social share-twitter"
              title="Share on X"
              aria-label="Share on X"
            >
              <TwitterXIcon size={16} />
            </a>

            {/* Native Mobile Share (if available) */}
            {typeof navigator !== 'undefined' && navigator.share && (
              <button
                type="button"
                className="btn-share-action btn-share-native"
                onClick={handleNativeShare}
                title="Share via device options"
              >
                <Share2 size={16} />
                <span>Share</span>
              </button>
            )}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="article-bottom-nav">
          <Link to="/articles" className="btn-hero-secondary">
            <ArrowLeft size={16} />
            <span>Browse All Articles</span>
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default ArticleDetail

