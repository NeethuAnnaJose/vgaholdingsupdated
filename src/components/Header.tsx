import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

interface HeaderProps {
  activeSection?: string
}

const Header = ({ activeSection = 'home' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isArticlePage = location.pathname !== '/'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()
    
    setTimeout(() => {
      const section = document.querySelector(href) as HTMLElement
      if (section && (window as any).smoothScrollToSection) {
        (window as any).smoothScrollToSection(section)
      }
    }, 100)
  }

  const menuItems = [
    { name: 'Home', href: '#home', path: '/', id: 'home' },
    { name: 'About Us', href: '#about', path: '/#about', id: 'about' },
    { name: 'Services', href: '#services', path: '/#services', id: 'services' },
    { name: 'News', href: '#news', path: '/#news', id: 'news' },
    { name: 'Our Clients', href: '#clients', path: '/#clients', id: 'clients' },
    { name: 'Contact', href: '#contact', path: '/#contact', id: 'contact' },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/vgalogo.png" alt="VGA Holdings Logo" className="logo" />
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.name} className="nav-item">
                {isArticlePage ? (
                  <Link 
                    to={item.path}
                    className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a 
                    href={item.href} 
                    className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
