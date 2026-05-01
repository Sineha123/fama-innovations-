import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import PageCta from '../components/PageCta'
import PageIcon from '../components/PageIcon'
import CounterCard from '../components/CounterCard'
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

const ABOUT_FAQS = [
  {
    question: 'What makes Fama Innovations different?',
    answer:
      'We combine refined interface thinking, engineering precision, and long-term business strategy so the final output feels polished, reliable, and future-ready.',
  },
  {
    question: 'How does your team work with clients?',
    answer:
      'We focus on transparent collaboration, structured communication, and measurable progress so clients always know what is happening and why.',
  },
  {
    question: 'Do you work on long-term partnerships?',
    answer:
      'Yes. We believe in building lasting relationships through consistent performance, trust, and sustainable value delivery.',
  },
]

const teamMembers = [
  {
    name: 'Ammar Khan',
    role: 'Founder & Strategy Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Areeba Noor',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Huzaifa Ali',
    role: 'Engineering Lead',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Maham Raza',
    role: 'Client Success Lead',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
  },
]

function PageFaqSection({ title, items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section page-section">
      <div className="container page-reveal">
        <div className="section__header">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="page-faqs">
          {items.map((item, index) => (
            <article
              key={item.question}
              className={`page-faq glass ${openIndex === index ? 'is-open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="page-faq__head">
                <span>{item.question}</span>
                <strong>{openIndex === index ? '−' : '+'}</strong>
              </div>
              {openIndex === index ? <p>{item.answer}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage({ onNavigate }) {
  return (
    <>
      {/* About Hero - Centered Content with Glassmorphism */}
      <section className="about-hero page-hero-variant">
        <div className="about-hero__bg-accent"></div>
        <div className="container page-reveal">
          <div className="about-hero__wrapper">
            <div className="about-hero__content">
              <p className="section-kicker">About Fama Innovations</p>
              <h1 className="about-hero__title">
                Innovating the Future with <span className="accent">Smart Technology Solutions</span>
              </h1>
              <p className="about-hero__text">We transform ideas into powerful digital and engineering solutions.</p>
            </div>
            <div className="about-hero__image">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Fama Innovations Team" />
              <div className="about-hero__overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="section__header mission-vision-header">
            <p className="section-kicker">Mission & Values</p>
            <h2 className="section-title">Innovation and precision in every decision</h2>
          </div>
          <div className="mission-vision-grid">
            <article className="mission-vision-card glass-glow">
              <div className="mission-vision-card__icon">
                <PageIcon name="target" />
              </div>
              <h3>Our Mission</h3>
              <p>
                Fama Innovations is driven by a clear mission to design and deliver high-quality digital experiences that
                seamlessly combine innovation with precision. We are committed to transforming ideas into refined,
                scalable, and future-ready solutions that align with the evolving demands of modern businesses.
              </p>
            </article>
            <article className="mission-vision-card glass-glow">
              <div className="mission-vision-card__icon">
                <PageIcon name="eye" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become a global leader in engineering innovation, delivering technology-driven solutions that help
                businesses operate smarter, faster, and more efficiently while maintaining the highest standards of quality.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="section__header">
            <p className="section-kicker">Who We Are</p>
            <h2 className="section-title">A focused team with creative and technical depth</h2>
          </div>
          <div className="team-flip-grid">
            {teamMembers.map((member) => (
              <article className="team-flip-card" key={member.name}>
                <div className="team-flip-card__inner">
                  <div className="team-flip-card__front">
                    <img src={member.image} alt={member.name} />
                    <div className="team-flip-card__front-info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                  <div className="team-flip-card__back">
                    <h3>{member.name}</h3>
                    <p className="team-flip-card__role">{member.role}</p>
                    <p className="team-flip-card__bio">
                      Passionate about delivering premium solutions with precision and innovation. Dedicated to transforming client visions into reality.
                    </p>
                    <div className="team-flip-card__links">
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <PageIcon name="linkedin" />
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <PageIcon name="instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="stats-panel glass-glow">
            <CounterCard value={5} suffix="+" label="Years in Business" icon="clock" />
            <CounterCard value={1000} suffix="+" label="Clients Served" icon="users" />
            <CounterCard value={150} suffix="+" label="Projects Completed" icon="folder" />
            <CounterCard value={50} suffix="+" label="Team Members" icon="users" />
          </div>
        </div>
      </section>

      <PageFaqSection title="About FAQ" items={ABOUT_FAQS} />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
      <Footer navLinks={NAV_LINKS} onNavigate={onNavigate} />
    </>
  )
}
