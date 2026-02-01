import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NewsArticle.css'

const GreekStreetTVArticle = () => {
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

        <div className="news-article-logos">
          <div className="news-article-vga-logo">
            <Link to="/">
              <img src="/vgalogo.png" alt="VGA Holdings Logo" />
            </Link>
          </div>
          <div className="news-article-greek-logo">
            <img src="/Greeklogo.jpg" alt="Greek Street Mykonos Logo" />
          </div>
        </div>

        <div className="news-article-tv-logo">
          <img src="/bahrain-tv-logo.jpg" alt="Bahrain TV" />
        </div>

        <h1 className="news-article-title">
          Greek Street "Mykonos" Goes Live on Bahrain & Greek TV Channels
        </h1>

        <div className="news-article-body news-article-body-full">
          <p>
            Watch Greek Street on Greece's No1 TV station "ALPHA TV" where questions and answers are made on how beautiful the Kingdom of Bahrain is and how friendly the Bahraini people are. In essence Greece is being promoted to our citizens of Bahrain which can travel and have a taste of "Mykonos", Greece without even leaving the country.
          </p>
        </div>

        <div className="news-article-video">
          <div className="news-article-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/AgXjfCbAdhA"
              title="Greek Street on ALPHA TV"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default GreekStreetTVArticle
