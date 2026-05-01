import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    icon: 'cube',
    title: 'Product Design & Development',
    description:
      'We transform concepts into practical, user-focused designs using advanced tools and engineering methodologies. From initial idea to final production, we ensure innovation and efficiency.',
    tags: ['Concept to Production', 'CAD', 'Engineering Design'],
    cardType: 'glass',
  },
  {
    id: 2,
    icon: 'layers',
    title: 'Platform & System Engineering',
    description:
      'We develop scalable platforms and system-level architectures tailored to industry-specific requirements, ensuring performance, flexibility, and reliability.',
    tags: ['Scalable Architecture', 'System Design', 'Flexibility'],
    cardType: 'glow',
  },
  {
    id: 3,
    icon: 'chip',
    title: 'Embedded Engineering Solutions',
    description:
      'We provide complete hardware-software integration, embedded systems development, and IoT-based solutions for modern engineering needs.',
    tags: ['Embedded Systems', 'IoT', 'HW/SW Integration'],
    cardType: 'glass',
  },
  {
    id: 4,
    icon: 'shield',
    title: 'Virtual Validation & Testing',
    description:
      'Through simulation and digital validation, we reduce development time, minimize costs, and eliminate the need for excessive physical testing.',
    tags: ['Simulation', 'Digital Twin', 'Cost Reduction'],
    cardType: 'outline',
  },
  {
    id: 5,
    icon: 'factory',
    title: 'Manufacturing Engineering',
    description:
      'We support process planning, tooling design, production optimization, and quality control to ensure efficient and scalable manufacturing.',
    tags: ['Process Planning', 'Tooling', 'Quality Control'],
    cardType: 'glow',
  },
  {
    id: 6,
    icon: 'file',
    title: 'Prototyping & Technical Documentation',
    description:
      'We offer rapid prototyping and detailed documentation to ensure smooth implementation and efficient product development cycles.',
    tags: ['Prototyping', 'Documentation', 'Implementation'],
    cardType: 'outline',
  },
]

export default function Services() {
  const sectionRef = useRef(null)

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
  }, [])

  return (
    <section className="section services" id="services" ref={sectionRef}>
      <div className="section__header">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">
          End-to-End <span className="accent">Engineering Solutions</span>
        </h2>
      </div>

      <p className="services__subtitle">
        FamaInnovations provides a comprehensive range of engineering services designed to support complete product
        lifecycle development from idea to implementation.
      </p>

      <div className="services__grid">
        {services.map((service) => (
          <div key={service.id} className={`service-card service-card--${service.cardType}`}>
            <div className="service-card__header">
              <div className="service-card__icon">
                <ServiceIcon name={service.icon} />
              </div>
            </div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            <div className="service-card__tags">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServiceIcon({ name }) {
  const icons = {
    cube: <path d="M12 2.5 4.5 6.5v11L12 21.5l7.5-4v-11L12 2.5Zm0 2.3 5.2 2.8L12 10.4 6.8 7.6 12 4.8Zm-6 4.7 5 2.7v6.2l-5-2.6V9.5Zm13 0v6.1l-5 2.6v-6.2l5-2.5Z" />,
    layers: <path d="m12 3 9 4.6-9 4.7-9-4.7L12 3Zm-6.9 8.2L12 14.8l6.9-3.6L21 13.6l-9 4.7-9-4.7 2.1-2.4Zm0 5.2L12 20l6.9-3.6L21 18.8l-9 4.7-9-4.7 2.1-2.4Z" />,
    chip: <path d="M9 3h6v2h2.5A2.5 2.5 0 0 1 20 7.5V10h2v4h-2v2.5A2.5 2.5 0 0 1 17.5 19H15v2H9v-2H6.5A2.5 2.5 0 0 1 4 16.5V14H2v-4h2V7.5A2.5 2.5 0 0 1 6.5 5H9V3Zm-2.5 5v8h11V8h-11Zm2.5 2h6v4H9v-4Z" />,
    shield: <path d="M12 2.5 4.5 5.3v5.5c0 4.5 2.8 8.6 7.5 10.7 4.7-2.1 7.5-6.2 7.5-10.7V5.3L12 2.5Zm-1 12.3-3-3 1.4-1.4 1.6 1.6 3.6-3.6 1.4 1.4-5 5Z" />,
    factory: <path d="M3 21V9.5l5 3V9.5l5 3V5l8 4.5V21H3Zm2-2h2v-5H5v5Zm4 0h2v-5H9v5Zm4 0h2v-5h-2v5Zm4 0h2v-5h-2v5Z" />,
    file: <path d="M7 3h7l5 5v13H7V3Zm7 1.5V9h4.5L14 4.5ZM9 12h8v2H9v-2Zm0 4h8v2H9v-2Z" />,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}
