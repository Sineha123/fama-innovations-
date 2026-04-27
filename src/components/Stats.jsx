import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Stats.css'

gsap.registerPlugin(ScrollTrigger)

export default function Stats() {
  const sectionRef = useRef(null)

  const stats = [
    { number: 120, suffix: '+', label: 'PROGRAMS DELIVERED' },
    { number: 96, suffix: '%', label: 'VALIDATION PASS RATE' },
    { number: 18, suffix: '+', label: 'COUNTRIES REACHED' },
    { number: 500, suffix: '+', label: 'PROJECTS DELIVERED' }
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const statNumbers = sectionRef.current.querySelectorAll('.stat__number-value')
    statNumbers.forEach((el) => {
      const endValue = parseInt(el.dataset.value)
      const obj = { val: 0 }

      gsap.to(obj, {
        val: endValue,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        onUpdate: () => {
          if (el) el.innerText = Math.round(obj.val)
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="section stats" id="stats" ref={sectionRef}>
      <div className="stats__content">
        {stats.map((stat, index) => (
          <div key={index} className="stat">
            <p className="stat__number">
              <span className="stat__number-value" data-value={stat.number}>0</span>
              {stat.suffix}
            </p>
            <p className="stat__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

