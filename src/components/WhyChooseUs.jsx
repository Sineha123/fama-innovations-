import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './WhyChooseUs.css'

gsap.registerPlugin(ScrollTrigger)

export default function WhyChooseUs() {
  const sectionRef = useRef(null)

  const reasons = [
    {
      icon: '★',
      title: 'Strong Technical Expertise',
      description: 'Deep domain knowledge across product design, embedded systems, platform engineering, and more.'
    },
    {
      icon: '📈',
      title: 'Structured & Efficient Processes',
      description: 'Proven frameworks that ensure on-time delivery, quality gates, and predictable project outcomes.'
    },
    {
      icon: '◎',
      title: 'Reliable & Scalable Solutions',
      description: 'Solutions engineered to grow with your business — flexible, robust, and built for the long term.'
    },
    {
      icon: '✓',
      title: 'Commitment to Quality & Precision',
      description: 'Every deliverable meets rigorous standards. We focus on measurable value and long-term impact.'
    }
  ]

  const testimonials = [
    {
      stars: '★★★★★',
      tag: 'Platform Engineering Client',
      text: 'The team delivered scalable and efficient solutions that significantly improved system performance with a structured and reliable approach.'
    },
    {
      stars: '★★★★★',
      tag: 'Product Development Client',
      text: 'They transformed our concept into a high-quality product with excellent attention to detail and timely execution.'
    },
    {
      stars: '★★★★★',
      tag: 'Virtual Validation Client',
      text: 'Their simulation expertise reduced development time and minimized physical testing, adding great value to our project.'
    },
    {
      stars: '★★★★★',
      tag: 'Embedded Solutions Client',
      text: 'The solution enhanced our product\'s performance with impressive technical knowledge and problem-solving ability.'
    }
  ]

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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="section why-choose" id="why-choose" ref={sectionRef}>
      <div className="section__ghost">05</div>

      <div className="why-choose__content">
        <div className="why-choose__text">
          <p className="section-kicker">// 05 WHY CHOOSE US</p>
          <h2 className="section-title">
            Client-Focused <span className="accent">Engineering Excellence</span>
          </h2>
          <p className="why-choose__description">
            Our clients trust us because of our strong technical expertise, structured processes,
            and unwavering commitment to delivering measurable value and long-term impact on every project.
          </p>
        </div>

        <div className="why-choose__grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card glass">
              <div className="why-card__icon">{reason.icon}</div>
              <h3 className="why-card__title">{reason.title}</h3>
              <p className="why-card__description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-section">
          <p className="section-kicker" style={{ textAlign: 'center', marginTop: '80px' }}>// TESTIMONIALS</p>
          <h3 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
            What Clients <span className="accent">Value Most</span>
          </h3>
          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card glass-glow">
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

