import Contact from '../components/Contact'
import '../styles/pages.css'

export default function ContactPage({ onNavigate }) {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <div className="contact-hero__orb contact-hero__orb--one" />
          <div className="contact-hero__orb contact-hero__orb--two" />
          <div className="contact-hero__orb contact-hero__orb--three" />
        </div>
        <div className="container page-reveal">
          <div className="contact-hero__wrapper">
            <div className="contact-hero__content">
              <p className="section-kicker">Get in Touch</p>
              <h1 className="contact-hero__title">
                Let's start a <span className="accent">conversation</span>
              </h1>
              <p className="contact-hero__text">
                Have a project in mind? We'd love to hear about it. Reach out and let's build something extraordinary together.
              </p>
              <div className="contact-hero__actions">
                <button className="button button--primary" onClick={() => onNavigate('/services')}>
                  Explore Services
                </button>
                <button className="button button--ghost" onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                }}>
                  Skip to Form
                </button>
              </div>
            </div>
            <div className="contact-hero__visual">
              <div className="contact-hero__card contact-hero__card--email glass-glow">
                <div className="contact-hero__card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-hero__card-content">
                  <span>Email Us</span>
                  <strong>info@famainnovations.com</strong>
                </div>
              </div>
              <div className="contact-hero__card contact-hero__card--phone glass-glow">
                <div className="contact-hero__card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-hero__card-content">
                  <span>Call Us</span>
                  <strong>+1 (555) 000-0000</strong>
                </div>
              </div>
              <div className="contact-hero__card contact-hero__card--location glass-glow">
                <div className="contact-hero__card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-hero__card-content">
                  <span>Visit Us</span>
                  <strong>Your City, Country</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
