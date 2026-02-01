import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NewsArticle.css'

const CarbontechArticle = () => {
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
          <img src="/CARBONTECH.jpg" alt="VGA Chemicals Carbontech Agreement" />
        </div>

        <h1 className="news-article-title">
          VGA Chemicals Signs Agreement with Carbontech in Bahrain
        </h1>

        <div className="news-article-body news-article-body-full">
          <p>
            VGA Chemicals signs an exclusive agreement with Carbontech for the supply of Revowrap, a very High-End Leak repair product for the Oil & Gas Industry in the Kingdom of Bahrain.
          </p>

          <p>
            Carbontech: The place where chemistry, engineering and global expertise are brought together to drive progressive innovation in advanced composite technologies for the emergency repair of critical assets "There is nothing generic about us" we don't just sell pipe wraps; we provide accurate engineering backing to deliver tailored solutions in accordance with ASME Pcc2 and ISO TS 24817.
          </p>

          <p>
            Sound and Responsible engineering is the basis on which we build our company, products and services. It is the core to our success and it is the foundation on which we have engineered and manufacture our innovative and bespoke Revowrap® systems.
          </p>

          <p>
            Carbontech composite systems are the developers and manufacturers of engineered composite materials formulated to restore critical assets back to the original design specifications. Our systems are compliant with engineering codes: ISO TS-24817 and ASME Pcc2 and are TUV accredited.
          </p>

          <p>
            If you have any inquiry regarding the Revowrap systems please feel free to get in touch with us.
          </p>
        </div>

        <div className="news-article-image-gallery">
          <div className="news-article-gallery-item">
            <img src="/Terry-pic.jpg" alt="Terry - Carbontech" />
          </div>
          <div className="news-article-gallery-item">
            <img src="/readmoreimage2.png" alt="Carbontech Revowrap" />
          </div>
          <div className="news-article-gallery-item">
            <img src="/readmoreimage3.png" alt="Carbontech Systems" />
          </div>
          <div className="news-article-gallery-item">
            <img src="/readmoreimage4.png" alt="Carbontech Product" />
          </div>
        </div>
      </div>
    </article>
  )
}

export default CarbontechArticle
