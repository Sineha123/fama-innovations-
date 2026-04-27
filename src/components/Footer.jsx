 import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Footer.css'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return

    const elements = footerRef.current.querySelectorAll('.footer-reveal')
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__content container">
        <div className="footer__main">
          <div className="footer__column footer-reveal">
          <img src="/logo.png" alt="Fama Innovations" className="footer__logo-img" />
            <p className="footer__description">
              Empowering businesses with high-quality engineering solutions that improve
              performance, accelerate growth, and deliver long-term value through innovation and excellence.
            </p>
            <button className="button button--ghost" onClick={() => scrollToSection('contact')}>
              Start a Project →
            </button>
          </div>

          <div className="footer__column footer-reveal">
            <h4 className="footer__heading">COMPANY</h4>
            <ul className="footer__links">
              <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
              <li><button onClick={() => scrollToSection('process')}>Our Process</button></li>
              <li><button onClick={() => scrollToSection('why-choose')}>Why Choose Us</button></li>
            </ul>
          </div>

          <div className="footer__column footer-reveal">
            <h4 className="footer__heading">SERVICES</h4>
            <ul className="footer__links">
              <li><button onClick={() => scrollToSection('services')}>Product Design</button></li>
              <li><button onClick={() => scrollToSection('services')}>Embedded Engineering</button></li>
              <li><button onClick={() => scrollToSection('services')}>Virtual Validation</button></li>
              <li><button onClick={() => scrollToSection('services')}>Manufacturing</button></li>
            </ul>
          </div>

          <div className="footer__column footer-reveal">
            <h4 className="footer__heading">INDUSTRIES</h4>
            <ul className="footer__links">
              <li><button onClick={() => scrollToSection('industries')}>Automotive</button></li>
              <li><button onClick={() => scrollToSection('industries')}>Aerospace</button></li>
              <li><button onClick={() => scrollToSection('industries')}>General Engineering</button></li>
            </ul>
          </div>

          <div className="footer__column footer-reveal">
            <h4 className="footer__heading">GET IN TOUCH</h4>
            <ul className="footer__links">
              <li><button onClick={() => scrollToSection('contact')}>Contact Us</button></li>
              <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
              <li><a href="mailto:info@famainnovations.com">info@famainnovations.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom footer-reveal">
          <p className="footer__copyright">© 2024 FAMA INNOVATIONS. ALL RIGHTS RESERVED.</p>
          <div className="footer__legal">
            <a href="/">PRIVACY POLICY</a>
            <a href="/">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

