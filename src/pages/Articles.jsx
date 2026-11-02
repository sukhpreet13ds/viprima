import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'animate.css'
import Footer from '../components/Footer'
import { articlesList } from '../data/articlesData'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'

const Articles = () => {
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
    <div className="articles-page-container">
      {/* 1. TOP PAGE HEADER */}
      <section className="page-header-section">
        <div className="section-header-center">
          <span className="hero-tag-title animate-on-scroll">Knowledge Hub</span>
          <h1 className="page-main-heading animate-on-scroll">Articles & Insights</h1>
          <p className="page-main-subheading animate-on-scroll">
            Perspectives, technical analyses, and regulatory guidance from our sustainability advisors and accredited clean energy engineers.
          </p>
        </div>
      </section>

      {/* 2. ARTICLES GRID (3x3 on Desktop, 2x2 on Mobile) */}
      <section className="articles-grid-section">
        <div className="articles-page-grid">
          {articlesList.map((article) => (
            <Link
              to={`/articles/${article.id}`}
              key={article.id}
              className="article-page-card animate-on-scroll"
            >
              <div className="article-page-img-wrap">
                <img
                  src={article.image}
                  alt={article.title}
                  className="article-page-img"
                />
                <span className="article-page-tag">{article.tag}</span>
              </div>

              <div className="article-page-body">
                <div className="article-meta">
                  <span className="article-meta-item">
                    <Calendar size={13} className="meta-icon" />
                    <span>{article.date}</span>
                  </span>
                  <span className="meta-sep">•</span>
                  <span className="article-meta-item">
                    <Clock size={13} className="meta-icon" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h2 className="article-page-title">{article.title}</h2>
                <p className="article-page-excerpt">{article.excerpt}</p>

                <div className="article-read-more">
                  <span>Read Full Article</span>
                  <ArrowUpRight size={16} className="article-arrow" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Articles

