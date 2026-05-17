import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { COMPANY_CONTACT, SERVICE_OPTIONS } from '../data/site'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: SERVICE_OPTIONS[0],
    budget: '',
    timeline: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

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
    setSubmitted(false)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: SERVICE_OPTIONS[0],
      budget: '',
      timeline: '',
      subject: '',
      message: '',
    })
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
              <a href={`mailto:${COMPANY_CONTACT.email}`} className="contact-detail__value">
                {COMPANY_CONTACT.email}
              </a>
            </div>
            <div className="contact-detail reveal-up">
              <p className="contact-detail__label">Phone</p>
              <a href={`tel:${COMPANY_CONTACT.tel}`} className="contact-detail__value">
                {COMPANY_CONTACT.phone}
              </a>
            </div>
            <div className="contact-detail reveal-up">
              <p className="contact-detail__label">Location</p>
              <p className="contact-detail__value">{COMPANY_CONTACT.location}</p>
            </div>
          </div>
        </div>

        <form className="contact-form reveal-up glass-glow" id="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__header">
            <p className="contact-form__eyebrow">Service Inquiry</p>
            <h3>Tell us what you need</h3>
            <p>Share your service interest, project direction, and contact details. We’ll keep the frontend ready for backend wiring next.</p>
          </div>

          <div className="form-group">
            <input type="text" name="name" placeholder="FULL NAME" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="email" name="email" placeholder="EMAIL ADDRESS" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="CONTACT NUMBER" value={formData.phone} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="text" name="company" placeholder="COMPANY / ORGANIZATION" value={formData.company} onChange={handleChange} />
            </div>
            <div className="form-group">
              <select name="service" value={formData.service} onChange={handleChange}>
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input type="text" name="budget" placeholder="ESTIMATED BUDGET" value={formData.budget} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" name="timeline" placeholder="EXPECTED TIMELINE" value={formData.timeline} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <input type="text" name="subject" placeholder="PROJECT SUBJECT" value={formData.subject} onChange={handleChange} />
          </div>

          <div className="form-group">
            <textarea name="message" placeholder="PROJECT DETAILS, GOALS, OR REQUIRED SERVICES" rows="6" value={formData.message} onChange={handleChange} required />
          </div>

          {submitted ? <p className="contact-form__success">Your inquiry details were captured on the frontend and are ready for backend integration.</p> : null}

          <button type="submit" className="button button--primary">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  )
}
