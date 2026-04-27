import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* Reusable hook: stagger reveal elements on scroll */
export const useAnimateOnScroll = (selector, config = {}) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.querySelectorAll(selector)

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: index * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 50%',
            scrub: false,
            markers: false,
          },
          ...config,
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [selector, config])

  return containerRef
}

/* Reusable hook: fade in + slide from specific direction */
export const useRevealAnimation = (ref, direction = 'up', delay = 0) => {
  useEffect(() => {
    if (!ref.current) return

    const fromVars = { opacity: 0 }
    if (direction === 'up') fromVars.y = 50
    if (direction === 'down') fromVars.y = -50
    if (direction === 'left') fromVars.x = -50
    if (direction === 'right') fromVars.x = 50
    if (direction === 'scale') fromVars.scale = 0.9
    if (direction === 'blur') fromVars.filter = 'blur(10px)'

    gsap.fromTo(
      ref.current,
      fromVars,
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [ref, direction, delay])
}

/* Reusable hook: stagger children in a container */
export const useStaggerReveal = (containerRef, childSelector, stagger = 0.1) => {
  useEffect(() => {
    if (!containerRef.current) return

    const children = containerRef.current.querySelectorAll(childSelector)

    gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [containerRef, childSelector, stagger])
}

/* Reusable hook: floating animation */
export const useFloatingAnimation = (ref) => {
  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [ref])
}

/* Reusable hook: mouse move tilt effect */
export const useMouseMove = (ref) => {
  useEffect(() => {
    if (!ref.current) return

    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(ref.current, {
        rotationX: y / 10,
        rotationY: x / 10,
        duration: 1,
        transformPerspective: 1000,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(ref.current, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
      })
    }

    ref.current.addEventListener('mousemove', handleMouseMove)
    ref.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      ref.current?.removeEventListener('mousemove', handleMouseMove)
      ref.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref])
}

/* Reusable hook: parallax scroll effect */
export const useParallax = (ref, offset = 50) => {
  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      y: offset,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [ref, offset])
}

/* Reusable hook: glow pulse effect */
export const useGlowEffect = (ref) => {
  useEffect(() => {
    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      {
        boxShadow: '0 0 20px rgba(79, 140, 255, 0.3), inset 0 0 20px rgba(79, 140, 255, 0.1)',
      },
      {
        boxShadow: '0 0 40px rgba(79, 140, 255, 0.6), inset 0 0 30px rgba(79, 140, 255, 0.2)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      }
    )
  }, [ref])
}

/* Reusable hook: count-up number animation */
export const useCountUp = (ref, endValue, duration = 2) => {
  useEffect(() => {
    if (!ref.current) return

    const obj = { val: 0 }
    gsap.to(obj, {
      val: endValue,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.innerText = Math.round(obj.val)
        }
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [ref, endValue, duration])
}

/* Reusable hook: text scramble / typewriter effect */
export const useTextAnimation = (ref) => {
  useEffect(() => {
    if (!ref.current) return

    const text = ref.current.innerText
    const chars = text.split('')

    ref.current.innerHTML = chars
      .map((char, i) => `<span style="display:inline-block;opacity:0;" data-index="${i}">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('')

    const spans = ref.current.querySelectorAll('span')
    gsap.fromTo(
      spans,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.04,
        stagger: 0.04,
        ease: 'power2.out',
      }
    )
  }, [ref])
}

/* Reusable hook: hero entrance timeline */
export const useHeroEntrance = (containerRef) => {
  useEffect(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      containerRef.current.querySelectorAll('.hero-animate'),
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.15 }
    )

    return () => {
      tl.kill()
    }
  }, [containerRef])
}

