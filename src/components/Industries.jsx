import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Industries.css'

gsap.registerPlugin(ScrollTrigger)

export default function Industries() {
  const sectionRef = useRef(null)

  const industries = [
    {
      id: 1,
      number: '01',
      icon: '🚗',
      title: 'Automotive Industry',
      description: 'Delivering advanced engineering solutions to enhance performance, safety, and innovation in modern vehicles.',
      tags: ['Performance', 'Safety', 'Innovation'],
      cardType: 'gradient'
    },
    {
      id: 2,
      number: '02',
      icon: '✈️',
      title: 'Aerospace Industry',
      description: 'Providing high-precision engineering support for mission-critical systems, reliability, and operational efficiency.',
      tags: ['Precision', 'Mission-Critical', 'Efficiency'],
      cardType: 'glass'
    },
    {
      id: 3,
      number: '03',
      icon: '⚙️',
      title: 'General Engineering',
      description: 'Offering flexible and scalable solutions to improve processes, quality, and overall productivity across industries.',
      tags: ['Flexible', 'Scalable', 'Quality'],
      cardType: 'glow'
    }
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll('.industry-card')
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="section industries" id="industries" ref={sectionRef}>
      <div className="section__ghost">04</div>

      <div className="section__header">
        <p className="section-kicker">// 04 INDUSTRIES</p>
        <h2 className="section-title">
          Industries We <span className="accent">Serve</span>
        </h2>
      </div>

      <p className="industries__subtitle">
        Delivering precision engineering across sectors where performance, safety, and innovation matter most.
      </p>

      <div className="industries__grid">
        {industries.map(industry => (
          <div key={industry.id} className={`industry-card industry-card--${industry.cardType}`}>
            <div className="industry-card__header">
              <span className="industry-card__icon">{industry.icon}</span>
              <span className="industry-card__number">{industry.number}</span>
            </div>
            <h3 className="industry-card__title">{industry.title}</h3>
            <p className="industry-card__description">{industry.description}</p>
            <div className="industry-card__tags">
              {industry.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

