import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'
import PageCta from '../components/PageCta'
import PageIcon from '../components/PageIcon'
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

const SERVICES_FAQS = [
  {
    question: 'Can Fama Innovations handle end-to-end delivery?',
    answer:
      'Yes. Our services span product engineering, software, embedded systems, cloud, AI-enabled workflows, and testing support.',
  },
  {
    question: 'Are your services suitable for scaling companies?',
    answer:
      'Absolutely. We structure solutions so they stay practical today while remaining scalable for future business growth.',
  },
  {
    question: 'Do you support technical validation and optimization?',
    answer:
      'Yes. Testing, validation, process refinement, and technical documentation are all part of how we reduce risk and improve execution quality.',
  },
]

const serviceCards = [
  {
    title: 'Product Engineering',
    description: 'Concept refinement, product thinking, systems planning, and structured delivery for polished, launch-ready solutions.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    icon: 'cube',
  },
  {
    title: 'Embedded Systems',
    description: 'Smart control systems, connected hardware, and dependable device-side engineering for real-world performance.',
    image: 'https://images.unsplash.com/photo-1563770660941-10a6360767a2?auto=format&fit=crop&w=1200&q=80',
    icon: 'chip',
  },
  {
    title: 'Software Development',
    description: 'Modern web applications, dashboards, business portals, and tailored software built for clarity and growth.',
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
    icon: 'code',
  },
  {
    title: 'Cloud Solutions',
    description: 'Flexible cloud-ready architecture, deployments, and infrastructure planning that support performance and scale.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    icon: 'cloud',
  },
  {
    title: 'AI / Data Solutions',
    description: 'Intelligent workflows, operational insights, and data-led features that help businesses make better decisions.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    icon: 'spark',
  },
  {
    title: 'Testing & Validation',
    description: 'Structured testing, verification, and optimization frameworks that improve confidence before release.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    icon: 'shield',
  },
]

const serviceTimeline = [
  { step: 1, title: 'Discovery & Analysis', description: 'We dive deep into your needs, goals, and challenges to conduct comprehensive analysis and market research.', icon: 'search' },
  { step: 2, title: 'Strategy & Planning', description: 'Creating detailed solution roadmaps with clear timelines, resource allocation, and key milestones.', icon: 'map' },
  { step: 3, title: 'Design & Development', description: 'Using cutting-edge technologies and best practices for creative design and efficient development.', icon: 'code' },
  { step: 4, title: 'Testing & Validation', description: 'Ensuring flawless performance through rigorous testing and quality assurance.', icon: 'shield' },
  { step: 5, title: 'Deployment & Support', description: 'Safely deploying solutions with ongoing support and maintenance services.', icon: 'rocket' },
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

export default function ServicesPage({ onNavigate }) {
  return (
    <>
      {/* Services Hero - Gradient Background with Side Image */}
      <section className="services-hero page-hero-variant">
        <div className="services-hero__bg-gradient"></div>
        <div className="container page-reveal">
          <div className="services-hero__wrapper">
            <div className="services-hero__content">
              <p className="section-kicker">Our Services</p>
              <h1 className="services-hero__title">
                Premium services built to support <span className="accent">smart growth</span>
              </h1>
              <p className="services-hero__text">Specialized capabilities tailored to your business needs with cutting-edge technology and proven expertise.</p>
              <div className="services-hero__actions">
                <button className="button button--primary" onClick={() => onNavigate('/contact')}>
                  Discuss a Project
                </button>
              </div>
            </div>
            <div className="services-hero__image">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" alt="Services" />
              <div className="services-hero__shine"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="section__header">
            <p className="section-kicker">What We Offer</p>
            <h2 className="section-title">Specialized capabilities with a modern presentation</h2>
          </div>
          <div className="service-grid">
            {serviceCards.map((service) => (
              <article className="service-showcase glass" key={service.title}>
                <div className="service-showcase__image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-showcase__icon">
                    <PageIcon name={service.icon} />
                  </div>
                </div>
                <div className="service-showcase__body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section services-timeline-section">
        <div className="container page-reveal">
          <div className="section__header">
            <p className="section-kicker">How We Work</p>
            <h2 className="section-title">Our service delivery process</h2>
          </div>
          <div className="timeline-container">
            <div className="timeline-line" />
            {serviceTimeline.map((item) => (
              <div className="timeline-item" key={item.step}>
                <div className="timeline-item__marker">
                  <span>{item.step}</span>
                </div>
                <div className="timeline-item__content glass">
                  <div className="timeline-item__icon">
                    <PageIcon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageFaqSection title="Services FAQ" items={SERVICES_FAQS} />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
      <Footer navLinks={NAV_LINKS} onNavigate={onNavigate} />
    </>
  )
}
