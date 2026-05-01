import { useState } from 'react'
import PageCta from '../components/PageCta'
import '../styles/pages.css'

const SOLUTIONS_FAQS = [
  {
    question: 'How do you approach digital transformation?',
    answer:
      'We study the current workflow first, then design the right mix of software, automation, and architecture improvements to simplify the transition.',
  },
  {
    question: 'Can solutions be adapted for different industries?',
    answer:
      'Yes. The solution structure is flexible and can be shaped around operational, engineering, or product-specific requirements.',
  },
]

const solutions = [
  {
    title: 'Digital Transformation',
    problem: 'Disconnected processes slow teams down and make delivery harder to manage.',
    solution: 'We redesign workflows and digital touchpoints into cleaner platforms that support speed, clarity, and business alignment.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Smart Systems',
    problem: 'Products and operations need more intelligence without becoming more complex for users.',
    solution: 'We create integrated systems with clear interfaces, reliable logic, and scalable architecture that feel smart but usable.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Automation Solutions',
    problem: 'Manual processes create inconsistency, delays, and reduced visibility.',
    solution: 'We introduce automation layers that improve control, reduce repetition, and create smoother operational performance.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Scalable Architecture',
    problem: 'Fast-moving businesses often outgrow systems that were not designed for expansion.',
    solution: 'We architect structured foundations that support new features, more users, and greater operational complexity over time.',
    image: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=1200&q=80',
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

export default function SolutionsPage({ onNavigate }) {
  return (
    <>
      <section className="solutions-hero">
        <div className="solutions-hero__bg-pattern" />
        <div className="container page-reveal">
          <div className="solutions-hero__wrapper">
            <div className="solutions-hero__content">
              <p className="section-kicker">Solutions</p>
              <h1 className="solutions-hero__title">
                Strategy-led systems for <span className="accent">complex business problems</span>
              </h1>
              <p className="solutions-hero__text">
                We audit the workflow, identify the friction, and shape the right mix of software, automation, and architecture around the actual bottleneck.
              </p>
              <div className="solutions-hero__actions">
                <button className="button button--primary" onClick={() => onNavigate('/portfolio')}>
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="solutions-hero__visual glass-glow">
              <div className="solutions-hero__metrics">
                <article className="solutions-hero__metric">
                  <strong>01</strong>
                  <span>Audit the current flow</span>
                </article>
                <article className="solutions-hero__metric">
                  <strong>02</strong>
                  <span>Design the right intervention</span>
                </article>
                <article className="solutions-hero__metric">
                  <strong>03</strong>
                  <span>Scale the outcome cleanly</span>
                </article>
              </div>
              <div className="solutions-hero__preview">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" alt="Solutions" />
                <div className="solutions-hero__glow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container solutions-stack page-reveal">
          {solutions.map((item, index) => (
            <article className={`solution-feature glass ${index % 2 === 1 ? 'is-reverse' : ''}`} key={item.title}>
              <div className="solution-feature__media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="solution-feature__content">
                <span className="page-card__label">{item.title}</span>
                <div className="solution-feature__block">
                  <h3>Problem</h3>
                  <p>{item.problem}</p>
                </div>
                <div className="solution-feature__block solution-feature__block--accent">
                  <h3>Solution</h3>
                  <p>{item.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageFaqSection title="Solutions FAQ" items={SOLUTIONS_FAQS} />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
    </>
  )
}
