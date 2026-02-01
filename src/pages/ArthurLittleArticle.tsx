import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NewsArticle.css'

const ArthurLittleArticle = () => {
  useEffect(() => {
    document.documentElement.classList.add('article-page-active')
    document.body.classList.add('article-page-active')
    const root = document.getElementById('root')
    if (root) root.classList.add('article-page-active')

    return () => {
      document.documentElement.classList.remove('article-page-active')
      document.body.classList.remove('article-page-active')
      if (root) root.classList.remove('article-page-active')
    }
  }, [])

  return (
    <article className="news-article-page">
      <div className="news-article-container">
        <Link to={{ pathname: '/', hash: '#news' }} className="news-article-back">
          ← Back to Latest News
        </Link>

        <div className="news-article-logos news-article-logos-single">
          <div className="news-article-vga-logo">
            <Link to="/">
              <img src="/vgalogo.png" alt="VGA Holdings Logo" />
            </Link>
          </div>
        </div>

        <div className="news-article-hero-image">
          <img src="/ADL.jpg" alt="Arthur D. Little" />
        </div>

        <h1 className="news-article-title">
          VGA Consultants Sign Agreement with Arthur D. Little in Saudi Arabia
        </h1>

        <div className="news-article-body news-article-body-full">
          <p>
            VGA and Arthur D. Little sign an agreement for Saudi to provide excellent consultancy and planning services for a large Insurance firm. Part of our scope of work is to re-define the insurance industry using maximum optimization.
          </p>

          <p>
            Our competitive advantage is a strategic and relationship-driven approach to making tactical execution plans that allows our clients to align delivery with overarching business strategy.
          </p>

          <p>
            The services provided by VGA to ADL include but are not limited to:
          </p>

          <ul className="news-article-list">
            <li>Project & Programme Management</li>
            <li>Transaction Advisory & Investor Sourcing</li>
            <li>Feasibility Studies</li>
            <li>Process Improvement</li>
            <li>Organisation Design</li>
            <li>Professional Training for employees and Executives</li>
            <li>Merger & Acquisition Advisory</li>
          </ul>

        </div>

        <div className="news-article-hero-image">
          <img src="/vga_business_consultant.jpg" alt="VGA Business Consultant" />
        </div>
      </div>
    </article>
  )
}

export default ArthurLittleArticle
