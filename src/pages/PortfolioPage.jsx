import { useState, useMemo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PageCta from '../components/PageCta'
import ProjectModal from '../components/ProjectModal'
import { PORTFOLIO_PROJECTS, LEADERSHIP_MEMBERS } from '../data/site'
import '../styles/pages.css'

gsap.registerPlugin(ScrollTrigger)

const PORTFOLIO_FAQS = [
  {
    question: 'Can these project cards become full case studies later?',
    answer:
      'Yes. The current layout is already structured in a way that can easily expand into deeper project detail pages when needed.',
  },
  {
    question: 'Can portfolio items be filtered by capability?',
    answer:
      'Yes. We added filter tabs so visitors can quickly browse by technical area and see the most relevant projects first.',
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
                <strong>{openIndex === index ? '-' : '+'}</strong>
              </div>
              {openIndex === index ? <p>{item.answer}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PortfolioPage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  const portfolioRef = useRef(null)
  const filters = ['All', 'Tech', 'AI', 'Engineering']
  const founder = LEADERSHIP_MEMBERS[0]

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return PORTFOLIO_PROJECTS
    return PORTFOLIO_PROJECTS.filter((item) => item.type === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    if (!portfolioRef.current) return

    const ctx = gsap.context(() => {
      const items = portfolioRef.current.querySelectorAll('.portfolio-tile')
      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            },
          }
        )
      })
    }, portfolioRef)

    return () => ctx.revert()
  }, [activeFilter])

  return (
    <>
      <ProjectModal open={!!activeProject} project={activeProject} onClose={() => setActiveProject(null)} />

      <section className="portfolio-hero page-hero-variant">
        <div className="portfolio-hero__bg-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Portfolio"
          />
          <div className="portfolio-hero__overlay" />
        </div>

        <div className="container page-reveal">
          <div className="portfolio-hero__wrapper">
            <p className="section-kicker">Portfolio</p>
            <h1 className="portfolio-hero__title">
              Project highlights with a <span className="accent">case-study feel</span>
            </h1>
            <p className="portfolio-hero__text">
              Explore our collection of projects showcasing innovation, precision, and delivered impact.
            </p>
            <button className="button button--primary" onClick={() => onNavigate('/contact')}>
              Start a Project
            </button>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal" ref={portfolioRef}>
          <div className="portfolio-leadership glass-glow">
            <div className="portfolio-leadership__copy">
              <p className="section-kicker">Leadership Context</p>
              <h2 className="portfolio-leadership__title">{founder.name}</h2>
              <p className="portfolio-leadership__role">{founder.role}</p>
              <p className="portfolio-leadership__text">{`${founder.company} • ${founder.location} • ${founder.education}`}</p>
            </div>
            <a className="portfolio-leadership__link" href={founder.links.linkedin} target="_blank" rel="noreferrer">
              View LinkedIn
            </a>
          </div>

          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-tabs__button ${activeFilter === filter ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-grid portfolio-grid--expanded">
            {filteredItems.map((item) => (
              <article
                className="portfolio-tile glass"
                key={item.title}
                onClick={() => setActiveProject(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setActiveProject(item)
                }}
                aria-label={`Open details for ${item.title}`}
              >
                <img src={item.image} alt={item.title} />
                <div className="portfolio-tile__overlay">
                  <span className="portfolio-tile__overlay-label">Details</span>
                </div>
                <div className="portfolio-tile__body">
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="portfolio-tile__chips">
                    {item.techStacks.slice(0, 3).map((tech) => (
                      <span key={tech} className="portfolio-tile__chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageFaqSection title="Portfolio FAQ" items={PORTFOLIO_FAQS} />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
    </>
  )
}
