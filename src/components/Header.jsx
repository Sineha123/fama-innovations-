import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Header.css'

export default function Header({ scrollProgress }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
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
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          delay: 0.3,
        }
      )
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header ref={headerRef} className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner container">
        <a ref={logoRef} className="brand" href="#top" aria-label="Fama Innovations Home">
          <img src="/logo.png" alt="Fama Innovations" className="logo-img" />
        </a>

        <nav ref={navRef} className="site-nav" aria-label="Primary">
          <button onClick={() => scrollToSection('about')}>ABOUT</button>
          <button onClick={() => scrollToSection('services')}>SERVICES</button>
          <button onClick={() => scrollToSection('process')}>PROCESS</button>
          <button onClick={() => scrollToSection('industries')}>INDUSTRIES</button>
          <button onClick={() => scrollToSection('contact')}>CONTACT</button>
        </nav>

        <button className="button button--primary" onClick={() => scrollToSection('contact')}>
          START A PROJECT
        </button>
      </div>
    </header>
  )
}

