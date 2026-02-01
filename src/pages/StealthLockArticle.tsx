import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NewsArticle.css'

const StealthLockArticle = () => {
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

        <div className="news-article-stealth-logo">
          <img src="/NEW-STEALTH-LOGO-300x101.png" alt="Stealth-Lock New Generation" />
        </div>

        <h1 className="news-article-title">
          Stealth-Lock "New Generation" Launched
        </h1>

        <div className="news-article-body news-article-body-full">
          <p>
            Automation, remote-control, data capture, stabilizer modules – this new generation Stealth-Lock pipe connection technology is the product of innovation and ingenuity fueled by multimillion-dollar R&D investment.
          </p>

          <p>
            We listened to our end-users, technicians, operations engineers, and we settled on developing Mechanical Interference Fit technology for the 21st century. With fully automated prepping facilities, the NewGen Stealth-Lock system removes hazard and risk as it minimizes workforce "hands-on" processing. The data capture features, enable evaluation of each joint whether real-time or postproduction. In the field, the Stealth-Lock Assembly Machines are semi-automated, and this not only makes the work-zone safer, but it also ensures quality and integrity verification on each and every connection.
          </p>
        </div>

        <div className="news-article-stealth-images">
          <div className="news-article-stealth-image">
            <img src="/SL-2-1024x264.jpg" alt="Stealth-Lock Pipeline" />
          </div>
          <div className="news-article-stealth-image">
            <img src="/Stealth-Lock_12-Inch-fast-pipeline-construction_5-crane-lift-safely-under-live-pipelines.jpg" alt="Stealth-Lock Crane Lift" />
          </div>
        </div>
      </div>
    </article>
  )
}

export default StealthLockArticle
