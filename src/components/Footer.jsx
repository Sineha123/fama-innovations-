import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Footer.css'

gsap.registerPlugin(ScrollTrigger)

export default function Footer({ navLinks, onNavigate }) {
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
  }, [])

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__content container">
        <div className="footer__main">
          <div className="footer__column footer-reveal">
            <img src="/logo.png" alt="Fama Innovations" className="footer__logo-img" />
            <p className="footer__description">
              High-quality digital experiences and engineering solutions built with innovation, precision, and long-term value in mind.
            </p>
            <button className="button button--ghost" onClick={() => onNavigate('/contact')}>
              Start a Project
            </button>
          </div>

          <div className="footer__column footer-reveal">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__links">
              <li><button onClick={() => onNavigate('/about')}>About Us</button></li>
              <li><button onClick={() => onNavigate('/portfolio')}>Portfolio</button></li>
              <li><button onClick={() => onNavigate('/blog')}>Blogs</button></li>
            </ul>
          </div>

          <div className="footer__column footer-reveal">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              <li><button onClick={() => onNavigate('/services')}>Product Design</button></li>
              <li><button onClick={() => onNavigate('/services')}>Embedded Engineering</button></li>
              <li><button onClick={() => onNavigate('/solutions')}>Solutions</button></li>
            </ul>
          </div>

          <div className="footer__column footer-reveal">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <button onClick={() => onNavigate(link.path)}>{link.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column footer-reveal">
            <h4 className="footer__heading">Get in Touch</h4>
            <ul className="footer__links">
              <li><button onClick={() => onNavigate('/contact')}>Contact Us</button></li>
              <li><a href="mailto:info@famainnovations.com">info@famainnovations.com</a></li>
              <li><a href="tel:+15550000000">+1 (555) 000-0000</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom footer-reveal">
          <p className="footer__copyright">Copyright 2026 FAMA INNOVATIONS. All rights reserved.</p>
          <div className="footer__legal">
            <button onClick={() => onNavigate('/privacy-policy')}>Privacy Policy</button>
            <button onClick={() => onNavigate('/terms-of-service')}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
