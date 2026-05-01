import Contact from '../components/Contact'
import '../styles/pages.css'

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero inner-hero">
        <div className="container inner-hero__frame glass-glow page-reveal">
          <div className="inner-hero__grid">
            <div className="inner-hero__content">
              <p className="section-kicker">Contact</p>
              <h1 className="inner-hero__title">
                Let's build something <span className="accent">clear, strong, and scalable</span>
              </h1>
              <p className="inner-hero__text">A full contact page gives your inquiries a more focused destination while the homepage contact section still remains available.</p>
            </div>
            <div className="inner-hero__media contact-hero__media">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="Contact" />
              <div className="inner-hero__glass-overlay" />
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}
