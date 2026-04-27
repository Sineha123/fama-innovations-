import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  const panelRef = useRef(null)

  // Light Web Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let nodes = []
    const NODE_COUNT = 60
    const CONNECTION_DISTANCE = 180

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4)
        gradient.addColorStop(0, `rgba(186, 209, 255, ${node.opacity})`)
        gradient.addColorStop(0.5, `rgba(79, 140, 255, ${node.opacity * 0.5})`)
        gradient.addColorStop(1, 'rgba(79, 140, 255, 0)')

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity + 0.3})`
        ctx.fill()
      })

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.25
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(186, 209, 255, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Mouse-follow effect: panel MOVES toward cursor + tilts
  useEffect(() => {
    const panel = panelRef.current
    const hero = heroRef.current
    if (!panel || !hero) return

    const handleMouseMove = (e) => {
      const rect = panel.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      // Movement: panel shifts TOWARD cursor (follow the mouse)
      const moveX = mouseX * 0.12
      const moveY = mouseY * 0.12

      // Tilt: rotates based on cursor position
      const rotateY = (mouseX / (rect.width / 2)) * 12
      const rotateX = -(mouseY / (rect.height / 2)) * 12

      gsap.to(panel, {
        x: moveX,
        y: moveY,
        rotationX,
        rotationY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1200,
      })

      // Inner content moves opposite for depth parallax
      const textWrap = panel.querySelector('.hero-panel__text-wrap')
      if (textWrap) {
        gsap.to(textWrap, {
          x: -mouseX * 0.03,
          y: -mouseY * 0.03,
          duration: 0.5,
          ease: 'power2.out',
        })
      }
    }

    const handleMouseLeave = () => {
      gsap.to(panel, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.9,
        ease: 'elastic.out(1, 0.4)',
      })
      const textWrap = panel.querySelector('.hero-panel__text-wrap')
      if (textWrap) {
        gsap.to(textWrap, {
          x: 0,
          y: 0,
          duration: 0.9,
          ease: 'elastic.out(1, 0.4)',
        })
      }
    }

    hero.addEventListener('mousemove', handleMouseMove)
    hero.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      hero.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // GSAP Entrance Animation
  useEffect(() => {
    if (!contentRef.current) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      '.hero-pill',
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    )
      .fromTo(
        '.hero-panel',
        { opacity: 0, y: 50, scale: 0.9, rotationX: 15 },
        { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1.1, transformPerspective: 1200 },
        '-=0.4'
      )
      .fromTo(
        '.hero-microcopy',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        '.hero-lede',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        '.hero-actions',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        '.hero-signals',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        '.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.2'
      )

    return () => {
      tl.kill()
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />
      <div className="hero__overlay" />
      <div className="hero__beam hero__beam--left" aria-hidden="true" />
      <div className="hero__beam hero__beam--right" aria-hidden="true" />

      <div className="hero__content" ref={contentRef}>
        <div className="hero-pill">
          <span className="hero-pill__icon">⚡</span>
          WHERE INNOVATION MEETS ENGINEERING
        </div>

        <div className="hero-panel" ref={panelRef}>
          <div className="hero-panel__border" />
          <div className="hero-panel__border-inner" />
          <div className="hero-panel__glow" />
          <div className="hero-panel__shine" />
          <div className="hero-panel__text-wrap">
            <h1 className="hero-title">
              Driving Innovation Through{' '}
              <span className="accent glow-text">Engineering Excellence</span>
            </h1>
          </div>
          <div className="hero-panel__orb hero-panel__orb--one" />
          <div className="hero-panel__orb hero-panel__orb--two" />
        </div>

        <div className="hero-microcopy">
          <span>➡️ Where Innovation Meets Engineering</span>
          <span>➡️ Turning Ideas into Intelligent Solutions</span>
        </div>

        <p className="hero-lede">
          At FamaInnovations, we empower businesses with advanced engineering solutions that transform ideas into
          high-performance products. From concept to execution, we combine innovation, precision, and technology to
          deliver impactful results.
        </p>

        <div className="hero-actions">
          <button className="button button--primary" onClick={() => scrollToSection('services')}>
            EXPLORE SERVICES
          </button>
          <button className="button button--ghost" onClick={() => scrollToSection('about')}>
            ABOUT US
          </button>
        </div>

        <div className="hero-signals">
          <span>50+ Partners</span>
          <span>200+ Engineers</span>
          <span>10+ Years</span>
        </div>
      </div>

      <button className="hero-scroll" onClick={() => scrollToSection('about')} aria-label="Scroll to About section">
        <span />
        <span />
        <span />
      </button>
    </section>
  )
}

