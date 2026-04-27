import { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Industries from './components/Industries'
import WhyChooseUs from './components/WhyChooseUs'
import Stats from './components/Stats'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY / windowHeight
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-shell">
      <div className="scroll-progress" style={{ '--scroll': scrollProgress }}>
        <span className="scroll-progress__bar" style={{ transform: `scaleX(${scrollProgress})` }}></span>
      </div>

      <Header scrollProgress={scrollProgress} />

      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Industries />
        <WhyChooseUs />
        <Stats />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

