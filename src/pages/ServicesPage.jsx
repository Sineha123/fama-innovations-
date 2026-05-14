import { useState } from 'react'
import PageCta from '../components/PageCta'
import PageIcon from '../components/PageIcon'
import '../styles/pages.css'

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
    title: 'Development Services',
    description: 'Custom product and platform builds across web, mobile, desktop, commerce, and backend ecosystems.',
    items: [
      'Website Development',
      'Web Application Development',
      'Mobile App Development (Android & iOS)',
      'Desktop Application Development',
      'SaaS Product Development',
      'E-commerce Store Development',
      'POS System Development',
      'Custom Software Development',
      'API Development & Integration',
    ],
    image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
    icon: 'code',
  },
  {
    title: 'Design Services',
    description: 'Visual systems and digital experiences designed to make products feel polished, memorable, and market-ready.',
    items: [
      'UI/UX Design',
      'Graphic Design',
      'Logo Design',
      'Brand Identity Design',
      'Social Media Post Design',
      'Packaging Design',
      'Motion Graphics',
      'Video Editing',
      '3D Design & Animation',
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    icon: 'eye',
  },
  {
    title: 'Marketing Services',
    description: 'Growth-focused marketing support spanning visibility, paid campaigns, content, and audience engagement.',
    items: [
      'Digital Marketing',
      'Social Media Marketing',
      'SEO (Search Engine Optimization)',
      'Google Ads Management',
      'Facebook & Instagram Ads',
      'Email Marketing',
      'Influencer Marketing',
      'Content Marketing',
      'Copywriting',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    icon: 'target',
  },
  {
    title: 'Business & E-commerce Services',
    description: 'Commerce operations and storefront services built to improve sales flow, catalog quality, and platform setup.',
    items: [
      'Shopify Store Development',
      'WooCommerce Development',
      'Amazon Store Management',
      'eBay Store Management',
      'Product Listing Optimization',
      'Dropshipping Setup',
      'Payment Gateway Integration',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    icon: 'folder',
  },
  {
    title: 'AI & Modern Tech Services',
    description: 'Modern automation and intelligent tooling that help teams work faster and turn data into action.',
    items: [
      'AI Chatbot Development',
      'Automation Systems',
      'AI Content Tools',
      'Data Analysis & Visualization',
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    icon: 'spark',
  },
  {
    title: 'Cybersecurity & IT Services',
    description: 'Operational protection and infrastructure support for stable, secure, and recoverable business systems.',
    items: [
      'Cybersecurity Solutions',
      'Server Management',
      'Network Setup & Management',
      'Database Management',
      'IT Support & Maintenance',
      'Backup & Recovery Solutions',
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    icon: 'shield',
  },
  {
    title: 'Blockchain Services',
    description: 'Blockchain product development for secure transactions, ownership systems, and digital asset experiences.',
    items: [
      'Blockchain Development',
      'Smart Contract Development',
      'NFT Marketplace Development',
      'Crypto Wallet Development',
    ],
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1200&q=80',
    icon: 'chip',
  },
  {
    title: 'Consulting & Support',
    description: 'Advisory, QA, and long-term support services that help teams plan better and execute with less friction.',
    items: [
      'IT Consultancy',
      'Business Automation Consultancy',
      'Software Testing & QA',
      'Technical Support',
      'Maintenance Services',
      'Product Management',
      'Project Management',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    icon: 'users',
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

export default function ServicesPage({ onNavigate }) {
  return (
    <>
      <section className="services-hero">
        <div className="services-hero__backdrop" />
        <div className="container page-reveal">
          <div className="services-hero__wrapper">
            <div className="services-hero__content glass-glow">
              <p className="section-kicker">Our Services</p>
              <h1 className="services-hero__title">
                Full-spectrum services built for <span className="accent">modern business growth</span>
              </h1>
              <p className="services-hero__text">
                From development and design to AI, cybersecurity, blockchain, and consulting, our services are structured to help brands launch, scale, and operate with confidence.
              </p>
              <div className="services-hero__chips">
                <span>Development & Design</span>
                <span>Marketing & Commerce</span>
                <span>AI, IT & Consulting</span>
              </div>
              <div className="services-hero__actions">
                <button className="button button--primary" onClick={() => onNavigate('/contact')}>
                  Discuss a Project
                </button>
              </div>
            </div>

            <div className="services-hero__visual">
              <div className="services-hero__image">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" alt="Services" />
                <div className="services-hero__shine" />
              </div>
              <article className="services-hero__floating-card glass">
                <strong>End-to-end support</strong>
                <p>Planning, build, validation, and optimization across every engagement.</p>
              </article>
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
                  <ul className="service-showcase__list">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
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
    </>
  )
}
