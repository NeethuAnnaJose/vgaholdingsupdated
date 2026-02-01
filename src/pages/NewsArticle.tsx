import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NewsArticle.css'

const GreekStreetArticle = () => {
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

        <h1 className="news-article-title">
          Greek Street "Mykonos" Gets Sold to the Bahrain Solymar Group
        </h1>

        <div className="news-article-meta">
          <span className="news-article-date">April 2023</span>
          <span className="news-article-divider">·</span>
          <span className="news-article-tag">VGA Holdings</span>
        </div>

        <div className="news-article-content">
          <div className="news-article-body">
            <p>
              Greek Street first opened its doors on the 6th April 2022. In a very short period of time our customers became regulars and Greek Street became the most attractive hang-out spot in the Kingdom of Bahrain.
            </p>

            <p>
              Greek Street is a unique dining concept inspired by a Mykonos vibe, a mix between a tavern and a bakery which attracts a modern, young, affluent crowd. Combining traditional Greek flavors, we bring you healthy, delicious food including the popular souvlaki with fresh products imported from Greece. Customers can also sample our original salads and homemade pastries alongside other baked goods.
            </p>

            <p>
              The dining experience will allow our customers to relax in an elegant, minimalistic environment, transported to a setting with Mykonian island vibes surrounded by local music and decorations. The bakery is designed in calming shades of blue and white, using simple, organic architecture. We include indoor and outdoor dining with a seating capacity of approximately 75 guests.
            </p>

            <p>
              A Greek management team with more than twenty years of experience in the elite Greek food and beverage industry is brought in to maintain the highest of standards. Our customer experience will guarantee repeat business, making this location a focal point in Bahrain.
            </p>

            <p>
              In April 2023 Greek Street got sold to the Bahrain Solymar Group, adding its Greek flavour to their portfolio.
            </p>
          </div>

          <div className="news-article-images">
            <div className="news-article-image">
              <img src="/greek1image.jpg" alt="Greek Street Exterior - Mykonos Vibes" />
            </div>
            <div className="news-article-image">
              <img src="/Greekimage2.jpg" alt="Greek Street Interior" />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default GreekStreetArticle
