import { useState, useMemo, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import PageCta from '../components/PageCta'
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

const portfolioItems = [
  {
    title: 'Manufacturing Command Hub',
    type: 'Engineering',
    summary: 'A premium command dashboard for live production visibility, reporting, and team coordination.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Connected Device Experience',
    type: 'Tech',
    summary: 'A cleaner UX layer for smart hardware setup, status review, and connected product interactions.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Predictive Insight Console',
    type: 'AI',
    summary: 'A visual analytics interface that turns complex technical data into practical business insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Validation Review System',
    type: 'Engineering',
    summary: 'A structured environment for technical approvals, simulation reviews, and quality checkpoints.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cloud Operations Layer',
    type: 'Tech',
    summary: 'A scalable cloud-first interface for internal coordination, monitoring, and workflow management.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Automation Planning Board',
    type: 'AI',
    summary: 'A planning system that helps teams map automation opportunities and track execution clearly.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
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
  const filters = ['All', 'Tech', 'AI', 'Engineering']
  const portfolioRef = useRef(null)

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return portfolioItems
    return portfolioItems.filter((item) => item.type === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    if (!portfolioRef.current) return

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
  }, [activeFilter])

  return (
    <>
      <section className="portfolio-hero page-hero-variant">
        <div className="portfolio-hero__bg-image">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Portfolio" />
          <div className="portfolio-hero__overlay"></div>
        </div>
        <div className="container page-reveal">
          <div className="portfolio-hero__wrapper">
            <p className="section-kicker">Portfolio</p>
            <h1 className="portfolio-hero__title">
              Project highlights with a <span className="accent">case-study feel</span>
            </h1>
            <p className="portfolio-hero__text">Explore our collection of projects showcasing innovation, precision, and delivered impact.</p>
            <button className="button button--primary" onClick={() => onNavigate('/contact')}>
              Start a Project
            </button>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal" ref={portfolioRef}>
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
              <article className="portfolio-tile glass" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="portfolio-tile__overlay">
                  <span>View details</span>
                </div>
                <div className="portfolio-tile__body">
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
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
