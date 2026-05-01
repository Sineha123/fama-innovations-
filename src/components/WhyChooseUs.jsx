import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './WhyChooseUs.css'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    icon: 'spark',
    title: 'Strong Technical Expertise',
    description: 'Deep domain knowledge across product design, embedded systems, platform engineering, and more.',
  },
  {
    icon: 'chart',
    title: 'Structured & Efficient Processes',
    description: 'Proven frameworks that ensure on-time delivery, quality gates, and predictable project outcomes.',
  },
  {
    icon: 'stack',
    title: 'Reliable & Scalable Solutions',
    description: 'Solutions engineered to grow with your business: flexible, robust, and built for the long term.',
  },
  {
    icon: 'check',
    title: 'Commitment to Quality & Precision',
    description: 'Every deliverable meets rigorous standards. We focus on measurable value and long-term impact.',
  },
]

const testimonials = [
  {
    stars: '★★★★★',
    tag: 'Platform Engineering Client',
    text: 'The team delivered scalable and efficient solutions that significantly improved system performance with a structured and reliable approach.',
  },
  {
    stars: '★★★★★',
    tag: 'Product Development Client',
    text: 'They transformed our concept into a high-quality product with excellent attention to detail and timely execution.',
  },
  {
    stars: '★★★★★',
    tag: 'Virtual Validation Client',
    text: 'Their simulation expertise reduced development time and minimized physical testing, adding great value to our project.',
  },
  {
    stars: '★★★★★',
    tag: 'Embedded Solutions Client',
    text: "The solution enhanced our product's performance with impressive technical knowledge and problem-solving ability.",
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll('.why-card')
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      )
    })
  }, [])

  return (
    <section className="section why-choose" id="why-choose" ref={sectionRef}>
      <div className="why-choose__content">
        <div className="why-choose__text">
          <p className="section-kicker">Why Choose Us</p>
          <h2 className="section-title">
            Client-Focused <span className="accent">Engineering Excellence</span>
          </h2>
          <p className="why-choose__description">
            Our clients trust us because of our strong technical expertise, structured processes, and unwavering
            commitment to delivering measurable value and long-term impact on every project.
          </p>
        </div>

        <div className="why-choose__grid">
          {reasons.map((reason) => (
            <div key={reason.title} className="why-card glass">
              <div className="why-card__icon">
                <WhyIcon name={reason.icon} />
              </div>
              <h3 className="why-card__title">{reason.title}</h3>
              <p className="why-card__description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-section">
          <p className="section-kicker" style={{ textAlign: 'center', marginTop: '64px' }}>Testimonials</p>
          <h3 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            What Clients <span className="accent">Value Most</span>
          </h3>
          <div className="testimonials__grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.tag} className="testimonial-card glass-glow">
                <div className="testimonial-card__stars">{testimonial.stars}</div>
                <span className="testimonial-card__tag">{testimonial.tag}</span>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyIcon({ name }) {
  const icons = {
    spark: <path d="m12 2 1.7 4.8L18.5 8l-4 2.8 1.5 4.7L12 12.8 8 15.5l1.5-4.7-4-2.8 4.8-1.2L12 2Z" />,
    chart: <path d="M5 19h14v2H3V5h2v14Zm2-2V9h3v8H7Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z" />,
    stack: <path d="m12 3 9 4.6-9 4.7-9-4.7L12 3Zm-6.9 8.2L12 14.8l6.9-3.6L21 13.6l-9 4.7-9-4.7 2.1-2.4Z" />,
    check: <path d="m10 15.2-3.2-3.2-1.4 1.4 4.6 4.6 8.6-8.6-1.4-1.4-7.2 7.2Z" />,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}
