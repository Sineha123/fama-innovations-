import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import SolutionsPage from './pages/SolutionsPage'
import PortfolioPage from './pages/PortfolioPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { NAV_LINKS } from './data/site'
import './App.css'

function getRoute() {
  const hash = window.location.hash.replace(/^#/, '')
  if (!hash || hash === '/') return '/'
  return hash.startsWith('/') ? hash : `/${hash}`
}

function PageRouter({ route, onNavigate }) {
  switch (route) {
    case '/about':
      return <AboutPage onNavigate={onNavigate} />
    case '/services':
      return <ServicesPage onNavigate={onNavigate} />
    case '/solutions':
      return <SolutionsPage onNavigate={onNavigate} />
    case '/portfolio':
      return <PortfolioPage onNavigate={onNavigate} />
    case '/blog':
      return <BlogPage onNavigate={onNavigate} />
    case '/contact':
      return <ContactPage onNavigate={onNavigate} />
    case '/privacy-policy':
      return <PrivacyPolicyPage onNavigate={onNavigate} />
    case '/terms-of-service':
      return <TermsOfServicePage onNavigate={onNavigate} />
    case '/login':
      return <LoginPage onNavigate={onNavigate} />
    case '/signup':
      return <SignupPage onNavigate={onNavigate} />
    default:
      return <HomePage onNavigate={onNavigate} />
  }
}

export default function App() {
  const [route, setRoute] = useState(() => getRoute())
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (!window.location.hash) {
      window.location.hash = '/'
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = windowHeight > 0 ? window.scrollY / windowHeight : 0
      setScrollProgress(scrolled)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [route])

  useEffect(() => {
    const items = document.querySelectorAll('.page-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.16 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [route])

  const navigate = (path) => {
    window.location.hash = path
  }

  return (
    <div className="page-shell">
      <div className="scroll-progress">
        <span className="scroll-progress__bar" style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      <Header currentRoute={route} navLinks={NAV_LINKS} onNavigate={navigate} />

      <main className="page-main">
        <PageRouter route={route} onNavigate={navigate} />
      </main>

      <Footer navLinks={NAV_LINKS} onNavigate={navigate} />
    </div>
  )
}
