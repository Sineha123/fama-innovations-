import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './Header.css'

export default function Header({ currentRoute, navLinks, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const logoRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, y: -10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)' }
      )
    }
  }, [])

  useEffect(() => {
    if (navRef.current) {
      const buttons = navRef.current.querySelectorAll('button')
      gsap.fromTo(
        buttons,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out', delay: 0.3 }
      )
    }
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [currentRoute])

  const handleNavigate = (path) => {
    setIsMenuOpen(false)
    onNavigate(path)
  }

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner container">
        <button ref={logoRef} className="brand" onClick={() => handleNavigate('/')}>
          <img src="/logo.png" alt="Fama Innovations" className="logo-img" />
        </button>

        <nav ref={navRef} className="site-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.path}
              className={currentRoute === link.path ? 'is-active' : ''}
              onClick={() => handleNavigate(link.path)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            className={`button button--ghost site-header__auth ${currentRoute === '/login' ? 'is-active' : ''}`}
            onClick={() => handleNavigate('/login')}
          >
            Login
          </button>
          <button className="button button--primary site-header__auth" onClick={() => handleNavigate('/signup')}>
            Sign Up
          </button>
          <button className="button button--primary site-header__cta" onClick={() => handleNavigate('/contact')}>
            Start a Project
          </button>
        </div>

        <button
          className={`site-header__menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`site-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <nav className="site-mobile-menu__panel glass-thick" aria-label="Mobile Primary">
          <div className="site-mobile-menu__links">
            {navLinks.map((link) => (
              <button
                key={link.path}
                className={currentRoute === link.path ? 'is-active' : ''}
                onClick={() => handleNavigate(link.path)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="site-mobile-menu__actions">
            <button className="button button--ghost" onClick={() => handleNavigate('/login')}>
              Login
            </button>
            <button className="button button--primary" onClick={() => handleNavigate('/signup')}>
              Sign Up
            </button>
            <button className="button button--primary" onClick={() => handleNavigate('/contact')}>
              Start a Project
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
