import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const sectionRef = useRef(null)

  const services = [
    {
      id: 1,
      number: '01',
      icon: '◈',
      title: 'Product Design & Development',
      description: 'We transform concepts into practical, user-focused designs using advanced tools and engineering methodologies. From initial idea to final production, we ensure innovation and efficiency.',
      tags: ['Concept to Production', 'CAD', 'Engineering Design'],
      cardType: 'glass'
    },
    {
      id: 2,
      number: '02',
      icon: '◉',
      title: 'Platform & System Engineering',
      description: 'We develop scalable platforms and system-level architectures tailored to industry-specific requirements, ensuring performance, flexibility, and reliability.',
      tags: ['Scalable Architecture', 'System Design', 'Flexibility'],
      cardType: 'glow'
    },
    {
      id: 3,
      number: '03',
      icon: '⚙',
      title: 'Embedded Engineering Solutions',
      description: 'We provide complete hardware-software integration, embedded systems development, and IoT-based solutions for modern engineering needs.',
      tags: ['Embedded Systems', 'IoT', 'HW/SW Integration'],
      cardType: 'glass'
    },
    {
      id: 4,
      number: '04',
      icon: '◎',
      title: 'Virtual Validation & Testing',
      description: 'Through simulation and digital validation, we reduce development time, minimize costs, and eliminate the need for excessive physical testing.',
      tags: ['Simulation', 'Digital Twin', 'Cost Reduction'],
      cardType: 'outline'
    },
    {
      id: 5,
      number: '05',
      icon: '▣',
      title: 'Manufacturing Engineering',
      description: 'We support process planning, tooling design, production optimization, and quality control to ensure efficient and scalable manufacturing.',
      tags: ['Process Planning', 'Tooling', 'Quality Control'],
      cardType: 'glow'
    },
    {
      id: 6,
      number: '06',
      icon: '◇',
      title: 'Prototyping & Technical Documentation',
      description: 'We offer rapid prototyping and detailed documentation to ensure smooth implementation and efficient product development cycles.',
      tags: ['Prototyping', 'Documentation', 'Implementation'],
      cardType: 'outline'
    }
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll('.service-card')
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
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
    <section className="section services" id="services" ref={sectionRef}>
      <div className="section__ghost">02</div>

      <div className="section__header">
        <p className="section-kicker">// 02 SERVICES</p>
        <h2 className="section-title">
          End-to-End <span className="accent">Engineering Solutions</span>
        </h2>
      </div>

      <p className="services__subtitle">
        FamaInnovations provides a comprehensive range of engineering services designed to support
        complete product lifecycle development — from idea to implementation.
      </p>

      <div className="services__grid">
        {services.map(service => (
          <div
            key={service.id}
            className={`service-card service-card--${service.cardType}`}
          >
            <div className="service-card__header">
              <div className="service-card__icon">{service.icon}</div>
              <span className="service-card__number">{service.number}</span>
            </div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            <div className="service-card__tags">
              {service.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

