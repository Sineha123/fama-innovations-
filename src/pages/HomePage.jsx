import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Process from '../components/Process'
import WhyChooseUs from '../components/WhyChooseUs'
import Stats from '../components/Stats'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <Stats />
      <FAQ />
      <Contact />
    </>
  )
}
