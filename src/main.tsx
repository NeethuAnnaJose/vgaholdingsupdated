import React from 'react'
import ReactDOM from 'react-dom/client'

/* Detect iOS for mobile-specific fixes (iPhone/iPad) - does not affect Android */
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
if (isIOS) {
  document.documentElement.classList.add('ios')
}
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import NewsArticle from './pages/NewsArticle.tsx'
import GreekStreetTVArticle from './pages/GreekStreetTVArticle.tsx'
import CarbontechArticle from './pages/CarbontechArticle.tsx'
import ArthurLittleArticle from './pages/ArthurLittleArticle.tsx'
import StealthLockArticle from './pages/StealthLockArticle.tsx'
import TenarisArticle from './pages/TenarisArticle.tsx'
import Header from './components/Header.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/latest-news/greek-street-sold" element={
          <div className="article-page-scroll-wrapper">
            <Header activeSection="news" />
            <NewsArticle />
          </div>
        } />
        <Route path="/latest-news/greek-street-tv" element={
          <div className="article-page-scroll-wrapper">
            <Header activeSection="news" />
            <GreekStreetTVArticle />
          </div>
        } />
        <Route path="/latest-news/carbontech" element={
          <div className="article-page-scroll-wrapper">
            <Header activeSection="news" />
            <CarbontechArticle />
          </div>
        } />
        <Route path="/latest-news/arthur-little" element={
          <div className="article-page-scroll-wrapper">
            <Header activeSection="news" />
            <ArthurLittleArticle />
          </div>
        } />
        <Route path="/latest-news/stealth-lock" element={
          <div className="article-page-scroll-wrapper">
            <Header activeSection="news" />
            <StealthLockArticle />
          </div>
        } />
        <Route path="/latest-news/tenaris" element={
          <div className="article-page-scroll-wrapper">
            <Header activeSection="news" />
            <TenarisArticle />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
