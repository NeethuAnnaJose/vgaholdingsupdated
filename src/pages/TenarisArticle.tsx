import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NewsArticle.css'

const TenarisArticle = () => {
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
          <img src="/TENARISforinnerpage.png" alt="AGODCO & Tenaris" />
        </div>

        <h1 className="news-article-title">
          AGODCO & Tenaris Ink Stealth-Lock Latin America Contract
        </h1>

        <div className="news-article-body news-article-body-full">
          <p>
            After 4 years of relationship development, field trials, end-user qualifications and contractual negotiations, AGODCO and TENARIS, one of the worlds largest tubular goods manufacturers, inked their deal.
          </p>

          <p>
            The agreement is to roll-out and develop Stealth-Lock mechanical interference fit products and services across Latin America through the broad stable of manufacturing outlets that TENARIS owns and operates in the region.
          </p>

          <p className="news-article-quote">
            "I believe the deal could be a blockbuster for both companies" said AGODCO Group CEO, Adam Harcourt. He continued: …if delivered as a full, vertically integrated product and service, client productivity increases whilst, costs decrease. With this, carbon steel is here to stay, giving greater value and confidence compared to immature emerging materials and systems for pipe connection".
          </p>
        </div>

        <div className="news-article-media-box">
          <div className="news-article-media-image">
            <img src="/TWO-GUYS-at-TENARIS-WATER-TOWER-CROP-768x567.jpg" alt="AGODCO at Tenaris Water Tower" />
          </div>
          <div className="news-article-media-video">
            <div className="news-article-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/gv_QgkNOTuU"
                title="AGODCO & Tenaris Stealth-Lock"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default TenarisArticle
