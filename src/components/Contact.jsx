import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const elements = sectionRef.current.querySelectorAll('.reveal-up')
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      )
    })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', company: '', subject: '', message: '' })
  }

  return (
    <section className="section contact" id="contact" ref={sectionRef}>
      <div className="contact__wrapper">
        <div className="contact__info">
          <div className="contact__header">
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">
              Let's Innovate <span className="accent">Together</span>
            </h2>
            <p className="contact__description">
              Partner with FamaInnovations to transform your ideas into powerful, scalable, and future-ready
              engineering solutions. Contact us today to discuss your project.
            </p>
          </div>

          <div className="contact__details">
            <div className="contact-detail reveal-up">
              <p className="contact-detail__label">Email</p>
              <a href="mailto:info@famainnovations.com" className="contact-detail__value">
                info@famainnovations.com
              </a>
            </div>
            <div className="contact-detail reveal-up">
              <p className="contact-detail__label">Phone</p>
              <a href="tel:+1-555-000-0000" className="contact-detail__value">
                +1 (555) 000-0000
              </a>
            </div>
            <div className="contact-detail reveal-up">
              <p className="contact-detail__label">Location</p>
              <p className="contact-detail__value">Global Engineering Partner</p>
            </div>
          </div>
        </div>

        <form className="contact-form reveal-up" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="FULL NAME" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="email" name="email" placeholder="EMAIL ADDRESS" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="text" name="company" placeholder="COMPANY / ORGANIZATION" value={formData.company} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <input type="text" name="subject" placeholder="SUBJECT" value={formData.subject} onChange={handleChange} />
          </div>

          <div className="form-group">
            <textarea name="message" placeholder="MESSAGE" rows="6" value={formData.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="button button--primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
