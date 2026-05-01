import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './FAQ.css'

gsap.registerPlugin(ScrollTrigger)

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef(null)

  const faqs = [
    {
      question: 'What types of engineering services does FamaInnovations provide?',
      answer: 'We provide end-to-end engineering solutions including product design, embedded systems, platform engineering, system architecture, and full-lifecycle support from concept to production.'
    },
    {
      question: 'What industries does FamaInnovations serve?',
      answer: 'We serve the automotive, aerospace, and general engineering sectors with expertise in mission-critical systems, advanced design, and scalable solutions.'
    },
    {
      question: 'How does FamaInnovations ensure quality in its deliverables?',
      answer: 'We implement rigorous quality gates, continuous integration, comprehensive testing, compliance verification, and simulation to ensure flawless delivery.'
    },
    {
      question: 'Can FamaInnovations handle projects from concept to production?',
      answer: 'Yes, we manage the complete project lifecycle from discovery and architecture through development and validation, ensuring successful production release.'
    },
    {
      question: 'Do you provide embedded hardware and software integration?',
      answer: 'Yes. Embedded engineering is one of our core capabilities, including firmware, controller logic, integration, and connected system development.'
    },
    {
      question: 'How do you help reduce risk during development?',
      answer: 'We use structured workflows, virtual validation, documented processes, and precise technical reviews to reduce rework and improve confidence.'
    }
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const items = sectionRef.current.querySelectorAll('.faq-item')
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: index * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="section faq" id="faq" ref={sectionRef}>
      <div className="section__header">
        <p className="section-kicker">FAQ</p>
        <h2 className="section-title">
          Frequently Asked <span className="accent">Questions</span>
        </h2>
      </div>

      <p className="faq__subtitle">
        Everything you need to know about partnering with FamaInnovations.
      </p>

      <div className="faq__list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item glass ${openIndex === index ? 'is-open' : ''}`}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <button className="faq-item__header">
              <span className="faq-item__number">{String(index + 1).padStart(2, '0')}</span>
              <span className="faq-item__question">{faq.question}</span>
              <span className="faq-item__toggle">+</span>
            </button>
            {openIndex === index && (
              <div className="faq-item__content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

