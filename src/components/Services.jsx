import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    icon: 'code',
    title: 'Development Services',
    description:
      'Web, mobile, desktop, SaaS, custom software, POS systems, and API development tailored to your business goals.',
    tags: ['Web & Mobile', 'SaaS', 'Custom Software'],
    cardType: 'glass',
  },
  {
    id: 2,
    icon: 'eye',
    title: 'Design Services',
    description:
      'UI/UX, branding, social media creatives, motion graphics, video editing, and 3D design for a stronger visual presence.',
    tags: ['UI/UX', 'Brand Identity', 'Motion & 3D'],
    cardType: 'glow',
  },
  {
    id: 3,
    icon: 'target',
    title: 'Marketing Services',
    description:
      'Digital marketing, SEO, ads, email campaigns, influencer outreach, and content strategy to help you reach the right audience.',
    tags: ['SEO', 'Paid Ads', 'Content Marketing'],
    cardType: 'glass',
  },
  {
    id: 4,
    icon: 'store',
    title: 'Business & E-commerce',
    description:
      'Shopify, WooCommerce, Amazon, eBay, dropshipping, listings, and payment integrations for commerce-ready operations.',
    tags: ['Shopify', 'WooCommerce', 'Marketplace Ops'],
    cardType: 'outline',
  },
  {
    id: 5,
    icon: 'spark',
    title: 'AI & Modern Tech',
    description:
      'AI chatbots, automation systems, AI content tools, and data visualization services that improve speed and decision-making.',
    tags: ['AI Chatbots', 'Automation', 'Data Insights'],
    cardType: 'glow',
  },
  {
    id: 6,
    icon: 'shield',
    title: 'Cybersecurity & Support',
    description:
      'Cybersecurity, servers, networks, databases, maintenance, backup, recovery, testing, and technical support services.',
    tags: ['Security', 'Infrastructure', 'QA & Support'],
    cardType: 'outline',
  },
  {
    id: 7,
    icon: 'chip',
    title: 'Blockchain Services',
    description:
      'Blockchain products, smart contracts, NFT marketplaces, and crypto wallet development for modern digital ecosystems.',
    tags: ['Smart Contracts', 'NFT Platforms', 'Wallets'],
    cardType: 'glass',
  },
  {
    id: 8,
    icon: 'users',
    title: 'Consulting & Support',
    description:
      'IT consultancy, business automation guidance, project oversight, product management, and long-term technical support.',
    tags: ['IT Consulting', 'Automation', 'Project Support'],
    cardType: 'glow',
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
          Complete <span className="accent">Digital Service Portfolio</span>
        </h2>
      </div>

      <p className="services__subtitle">
        Fama Innovations provides development, design, marketing, commerce, AI, and IT services that help businesses build, grow, and operate more effectively.
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
    code: <path d="M8.5 7 4 12l4.5 5 1.5-1.3L6.6 12 10 8.3 8.5 7Zm7 0L14 8.3l3.4 3.7-3.4 3.7 1.5 1.3L20 12l-4.5-5ZM13 5l-4 14h2l4-14h-2Z" />,
    eye: <path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5Zm0 2c3.3 0 6.3 2.2 7.5 5.5-1.2 3.3-4.2 5.5-7.5 5.5-3.3 0-6.3-2.2-7.5-5.5 1.2-3.3 4.2-5.5 7.5-5.5Zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />,
    target: <path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm0 2a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />,
    store: <path d="M4 6.5 5.2 3h13.6L20 6.5V9a2.5 2.5 0 0 1-1.5 2.3V20a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1v-8.7A2.5 2.5 0 0 1 4 9V6.5Zm2.6-1.5-.5 1.5h11.8l-.5-1.5H6.6ZM8 11.5V19h3v-5h2v5h3v-7.5a4 4 0 0 1-2 .5 3.8 3.8 0 0 1-3-1.3A3.8 3.8 0 0 1 8 12a4 4 0 0 1-2-.5Z" />,
    chip: <path d="M9 3h6v2h2.5A2.5 2.5 0 0 1 20 7.5V10h2v4h-2v2.5A2.5 2.5 0 0 1 17.5 19H15v2H9v-2H6.5A2.5 2.5 0 0 1 4 16.5V14H2v-4h2V7.5A2.5 2.5 0 0 1 6.5 5H9V3Zm-2.5 5v8h11V8h-11Zm2.5 2h6v4H9v-4Z" />,
    shield: <path d="M12 2.5 4.5 5.3v5.5c0 4.5 2.8 8.6 7.5 10.7 4.7-2.1 7.5-6.2 7.5-10.7V5.3L12 2.5Zm-1 12.3-3-3 1.4-1.4 1.6 1.6 3.6-3.6 1.4 1.4-5 5Z" />,
    users: <path d="M16 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 16 11Zm-8 0A3 3 0 1 0 5 8a3 3 0 0 0 3 3Zm8 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5C23 14.2 18.3 13 16 13Zm-8 1c-1.8 0-5 .9-5 2.8V19h5v-2.5a4.8 4.8 0 0 1 2.1-3.9A7.8 7.8 0 0 0 8 14Z" />,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}
