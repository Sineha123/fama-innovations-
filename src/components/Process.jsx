import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Process.css'

gsap.registerPlugin(ScrollTrigger)

export default function Process() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current || !trackRef.current) return

    const line = lineRef.current
    const nodes = trackRef.current.querySelectorAll('.process-node')
    const cards = trackRef.current.querySelectorAll('.process-card')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1,
      }
    })

    tl.fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'none' }, 0)

    nodes.forEach((node, i) => {
      const isTop = i % 2 === 0
      const yOffset = isTop ? -30 : 30

      tl.fromTo(node, { scale: 0 }, { scale: 1, duration: 0.15, ease: 'back.out(2)' }, 0.15 + i * 0.22)
      tl.fromTo(cards[i], { opacity: 0, y: yOffset }, { opacity: 1, y: 0, duration: 0.2, ease: 'power3.out' }, 0.18 + i * 0.22)
    })

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <section className="section process" id="process" ref={sectionRef}>
      <div className="process__header">
        <p className="section-kicker">Process</p>
        <h2 className="section-title">How We <span className="accent">Deliver</span></h2>
      </div>

      <div className="process__timeline" ref={trackRef}>
        <div className="process__line-bg"><div className="process__line" ref={lineRef} /></div>

        <div className="process-step process-step--top">
          <div className="process-card">
            <div className="process-card__inner glass">
              <h3>Discovery</h3>
              <p>Deep-dive into requirements, constraints, and system architecture exploration.</p>
            </div>
            <div className="process-card__connector" />
          </div>
          <div className="process-node"><span>01</span><div className="process-node__ring" /></div>
        </div>

        <div className="process-step process-step--bottom">
          <div className="process-node"><span>02</span><div className="process-node__ring" /></div>
          <div className="process-card">
            <div className="process-card__inner glass">
              <h3>Architecture</h3>
              <p>System decomposition, interface design, and technology stack selection.</p>
            </div>
            <div className="process-card__connector" />
          </div>
        </div>

        <div className="process-step process-step--top">
          <div className="process-card">
            <div className="process-card__inner glass">
              <h3>Development</h3>
              <p>Agile sprints with continuous integration, rigorous code review, and quality gates.</p>
            </div>
            <div className="process-card__connector" />
          </div>
          <div className="process-node"><span>03</span><div className="process-node__ring" /></div>
        </div>

        <div className="process-step process-step--bottom">
          <div className="process-node"><span>04</span><div className="process-node__ring" /></div>
          <div className="process-card">
            <div className="process-card__inner glass">
              <h3>Validation</h3>
              <p>Testing, compliance verification, simulation, and production release support.</p>
            </div>
            <div className="process-card__connector" />
          </div>
        </div>
      </div>
    </section>
  )
}

