import { useState } from 'react'
import './Header.css'

interface HeaderProps {
  activeSection?: string
}

const Header = ({ activeSection = 'home' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()
    
    // Wait a bit for menu to close on mobile
    setTimeout(() => {
      const section = document.querySelector(href) as HTMLElement
      if (section && (window as any).smoothScrollToSection) {
        (window as any).smoothScrollToSection(section)
      }
    }, 100)
  }

  const menuItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'News', href: '#news', id: 'news' },
    { name: 'Our Clients', href: '#clients', id: 'clients' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="/vgalogo.png" alt="VGA Holdings Logo" className="logo" />
        </div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a 
                  href={item.href} 
                  className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
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
