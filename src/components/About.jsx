import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const elements = sectionRef.current.querySelectorAll('.reveal-up')
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
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
    <section className="section about" id="about" ref={sectionRef}>
      <div className="section__ghost">01</div>

      <div className="section__header">
        <p className="section-kicker">// 01 ABOUT US</p>
        <h2 className="section-title">
          Innovation at <span className="accent">Our Core</span>
        </h2>
      </div>

      <div className="about__content">
        <div className="about__text">
          <p className="about__description reveal-up">
            At FamaInnovations, our journey is driven by a strong passion for innovation,
            engineering excellence, and technology-driven transformation. We are committed to delivering
            smart and reliable solutions that create meaningful impact across industries.
          </p>

          <p className="about__description reveal-up">
            With a problem-solving mindset and dedication to quality, we help businesses convert
            challenges into opportunities through advanced and efficient engineering solutions.
          </p>

          <div className="mission-vision reveal-up">
            <div className="mission-vision-card glass-glow">
              <p className="label">MISSION</p>
              <p className="value">
                To empower businesses with high-quality engineering solutions that improve performance,
                accelerate growth, and deliver long-term value through innovation and excellence.
              </p>
            </div>
            <div className="mission-vision-card glass-glow">
              <p className="label">VISION</p>
              <p className="value">
                To become a global leader in engineering by delivering innovative, technology-driven
                solutions that help businesses operate smarter, faster, and more efficiently.
              </p>
            </div>
          </div>

          <div className="core-values reveal-up">
            <h3 className="core-values__title">CORE VALUES</h3>
            <ul className="core-values__list">
              <li>
                <span className="icon">◉</span>
                <div>
                  <strong>Innovation First</strong>
                  <span>— Embracing new technologies and ideas</span>
                </div>
              </li>
              <li>
                <span className="icon">◉</span>
                <div>
                  <strong>Precision & Quality</strong>
                  <span>— Delivering accurate and high-standard work</span>
                </div>
              </li>
              <li>
                <span className="icon">♡</span>
                <div>
                  <strong>Client Commitment</strong>
                  <span>— Ensuring measurable value for every client</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="about__stats">
          <div className="stat-card glass-glow reveal-up">
            <p className="stat-number">50+</p>
            <p className="stat-label">GLOBAL PARTNERS</p>
          </div>
          <div className="stat-card glass-glow reveal-up">
            <p className="stat-number">200+</p>
            <p className="stat-label">ENGINEERS</p>
          </div>
          <div className="stat-card glass-glow reveal-up">
            <p className="stat-number">10+</p>
            <p className="stat-label">YEARS EXPERIENCE</p>
          </div>
          <div className="stat-card glass-glow reveal-up">
            <p className="stat-number">100%</p>
            <p className="stat-label">QUALITY COMMITMENT</p>
          </div>
        </div>
      </div>
    </section>
  )
}

