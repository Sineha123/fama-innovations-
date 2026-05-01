import Footer from '../components/Footer'
import Contact from '../components/Contact'
import '../styles/pages.css'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blogs', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

function PageIcon({ name }) {
  const icons = {
    cube: <path d="M12 2.5 4.5 6.5v11L12 21.5l7.5-4v-11L12 2.5Zm0 2.3 5.2 2.8L12 10.4 6.8 7.6 12 4.8Zm-6 4.7 5 2.7v6.2l-5-2.6V9.5Zm13 0v6.1l-5 2.6v-6.2l5-2.5Z" />,
    chip: <path d="M9 3h6v2h2.5A2.5 2.5 0 0 1 20 7.5V10h2v4h-2v2.5A2.5 2.5 0 0 1 17.5 19H15v2H9v-2H6.5A2.5 2.5 0 0 1 4 16.5V14H2v-4h2V7.5A2.5 2.5 0 0 1 6.5 5H9V3Zm-2.5 5v8h11V8h-11Zm2.5 2h6v4H9v-4Z" />,
    code: <path d="M8.5 7 4 12l4.5 5 1.5-1.3L6.6 12 10 8.3 8.5 7Zm7 0L14 8.3l3.4 3.7-3.4 3.7 1.5 1.3L20 12l-4.5-5ZM13 5l-4 14h2l4-14h-2Z" />,
    cloud: <path d="M8.5 18A4.5 4.5 0 1 1 9 9a5.5 5.5 0 0 1 10.2 1.8A3.6 3.6 0 1 1 19 18H8.5Z" />,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default function ContactPage({ onNavigate }) {
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
      <Footer navLinks={NAV_LINKS} onNavigate={onNavigate} />
    </>
  )
}
