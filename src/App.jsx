import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import Stats from './components/Stats'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import SolutionsPage from './pages/SolutionsPage'
import PortfolioPage from './pages/PortfolioPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import './App.css'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blogs', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

function getRoute() {
  {
    question: 'What makes Fama Innovations different?',
    answer:
      'We combine refined interface thinking, engineering precision, and long-term business strategy so the final output feels polished, reliable, and future-ready.',
  },
  {
    question: 'How does your team work with clients?',
    answer:
      'We focus on transparent collaboration, structured communication, and measurable progress so clients always know what is happening and why.',
  },
  {
    question: 'Do you work on long-term partnerships?',
    answer:
      'Yes. We believe in building lasting relationships through consistent performance, trust, and sustainable value delivery.',
  },
]

const SERVICES_FAQS = [
  {
    question: 'Can Fama Innovations handle end-to-end delivery?',
    answer:
      'Yes. Our services span product engineering, software, embedded systems, cloud, AI-enabled workflows, and testing support.',
  },
  {
    question: 'Are your services suitable for scaling companies?',
    answer:
      'Absolutely. We structure solutions so they stay practical today while remaining scalable for future business growth.',
  },
  {
    question: 'Do you support technical validation and optimization?',
    answer:
      'Yes. Testing, validation, process refinement, and technical documentation are all part of how we reduce risk and improve execution quality.',
  },
]

const SOLUTIONS_FAQS = [
  {
    question: 'How do you approach digital transformation?',
    answer:
      'We study the current workflow first, then design the right mix of software, automation, and architecture improvements to simplify the transition.',
  },
  {
    question: 'Can solutions be adapted for different industries?',
    answer:
      'Yes. The solution structure is flexible and can be shaped around operational, engineering, or product-specific requirements.',
  },
]

const PORTFOLIO_FAQS = [
  {
    question: 'Can these project cards become full case studies later?',
    answer:
      'Yes. The current layout is already structured in a way that can easily expand into deeper project detail pages when needed.',
  },
  {
    question: 'Can portfolio items be filtered by capability?',
    answer:
      'Yes. We added filter tabs so visitors can quickly browse by technical area and see the most relevant projects first.',
  },
]

const BLOG_FAQS = [
  {
    question: 'What kind of content should go on the blog?',
    answer:
      'Thought leadership, engineering insights, design process articles, client success stories, and company updates all work well here.',
  },
  {
    question: 'Can the blog support SEO-focused content?',
    answer:
      'Yes. This layout is well-suited for publishing informative articles that build authority and support discoverability.',
  },
]

const serviceCards = [
  {
    title: 'Product Engineering',
    description: 'Concept refinement, product thinking, systems planning, and structured delivery for polished, launch-ready solutions.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    icon: 'cube',
  },
  {
    title: 'Embedded Systems',
    description: 'Smart control systems, connected hardware, and dependable device-side engineering for real-world performance.',
    image:
      'https://images.unsplash.com/photo-1563770660941-10a6360767a2?auto=format&fit=crop&w=1200&q=80',
    icon: 'chip',
  },
  {
    title: 'Software Development',
    description: 'Modern web applications, dashboards, business portals, and tailored software built for clarity and growth.',
    image:
      'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
    icon: 'code',
  },
  {
    title: 'Cloud Solutions',
    description: 'Flexible cloud-ready architecture, deployments, and infrastructure planning that support performance and scale.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    icon: 'cloud',
  },
  {
    title: 'AI / Data Solutions',
    description: 'Intelligent workflows, operational insights, and data-led features that help businesses make better decisions.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    icon: 'spark',
  },
  {
    title: 'Testing & Validation',
    description: 'Structured testing, verification, and optimization frameworks that improve confidence before release.',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    icon: 'shield',
  },
]

const solutions = [
  {
    title: 'Digital Transformation',
    problem: 'Disconnected processes slow teams down and make delivery harder to manage.',
    solution:
      'We redesign workflows and digital touchpoints into cleaner platforms that support speed, clarity, and business alignment.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Smart Systems',
    problem: 'Products and operations need more intelligence without becoming more complex for users.',
    solution:
      'We create integrated systems with clear interfaces, reliable logic, and scalable architecture that feel smart but usable.',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Automation Solutions',
    problem: 'Manual processes create inconsistency, delays, and reduced visibility.',
    solution:
      'We introduce automation layers that improve control, reduce repetition, and create smoother operational performance.',
    image:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Scalable Architecture',
    problem: 'Fast-moving businesses often outgrow systems that were not designed for expansion.',
    solution:
      'We architect structured foundations that support new features, more users, and greater operational complexity over time.',
    image:
      'https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=1200&q=80',
  },
]

const portfolioItems = [
  {
    title: 'Manufacturing Command Hub',
    type: 'Engineering',
    summary: 'A premium command dashboard for live production visibility, reporting, and team coordination.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Connected Device Experience',
    type: 'Tech',
    summary: 'A cleaner UX layer for smart hardware setup, status review, and connected product interactions.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Predictive Insight Console',
    type: 'AI',
    summary: 'A visual analytics interface that turns complex technical data into practical business insights.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Validation Review System',
    type: 'Engineering',
    summary: 'A structured environment for technical approvals, simulation reviews, and quality checkpoints.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cloud Operations Layer',
    type: 'Tech',
    summary: 'A scalable cloud-first interface for internal coordination, monitoring, and workflow management.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Automation Planning Board',
    type: 'AI',
    summary: 'A planning system that helps teams map automation opportunities and track execution clearly.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
  },
]

const blogPosts = [
  {
    title: 'Designing Better Engineering Experiences',
    excerpt: 'How thoughtful interface systems help technical businesses present more clarity and trust.',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Why Validation Should Start Earlier',
    excerpt: 'Front-loading testing and technical review creates faster, smoother, and more confident delivery cycles.',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'What Makes a Portfolio Feel Credible',
    excerpt: 'Better storytelling, stronger visuals, and clear project framing can change how capability is perceived.',
    image:
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Building Scalable Digital Foundations',
    excerpt: 'Scalability is not only about infrastructure, it is also about structure, clarity, and future-proof choices.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Where Smart Systems Meet User Experience',
    excerpt: 'Technical sophistication becomes more valuable when the final interaction feels intuitive and premium.',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'How Clear Design Supports Business Growth',
    excerpt: 'Premium design is not decoration, it is a strategic tool for clarity, trust, and conversion.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  },
]

const teamMembers = [
  {
    name: 'Ammar Khan',
    role: 'Founder & Strategy Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Areeba Noor',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Huzaifa Ali',
    role: 'Engineering Lead',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Maham Raza',
    role: 'Client Success Lead',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
  },
]

function getRoute() {
  const hash = window.location.hash.replace(/^#/, '')
  if (!hash || hash === '/') return '/'
  return hash.startsWith('/') ? hash : `/${hash}`
}

function App() {
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <div className="scroll-progress" style={{ '--scroll': scrollProgress }}>
        <span className="scroll-progress__bar" style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      <Header currentRoute={route} navLinks={NAV_LINKS} onNavigate={navigate} />

      <main>
        {route === '/' ? <HomePage onNavigate={navigate} /> : <PageRouter route={route} onNavigate={navigate} />}
      </main>

      <Footer navLinks={NAV_LINKS} onNavigate={navigate} />
    </div>
  )
}

function HomePage({ onNavigate }) {
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
      return <ContactPage />
    default:
      return <HomePage onNavigate={onNavigate} />
  }
}

function PageHero({ kicker, title, text, image, primaryLabel, primaryAction, secondaryText }) {
  return (
    <section className="inner-hero">
      <div className="container inner-hero__frame glass-glow page-reveal">
        <div className="inner-hero__grid">
          <div className="inner-hero__content">
            <p className="section-kicker">{kicker}</p>
            <h1 className="inner-hero__title">{title}</h1>
            <p className="inner-hero__text">{text}</p>
            {secondaryText ? <p className="inner-hero__subtext">{secondaryText}</p> : null}
            {primaryLabel ? (
              <div className="inner-hero__actions">
                <button className="button button--primary" onClick={primaryAction}>
                  {primaryLabel}
                </button>
              </div>
            ) : null}
          </div>
          <div className="inner-hero__media">
            <img src={image} alt={typeof title === 'string' ? title : 'Fama Innovations'} />
            <div className="inner-hero__glass-overlay" />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutPage({ onNavigate }) {
  return (
    <>
      <section className="inner-hero about-hero">
        <div className="container inner-hero__frame glass-glow page-reveal">
          <div className="inner-hero__grid">
            <div className="inner-hero__content">
              <p className="section-kicker">About Fama Innovations</p>
              <h1 className="inner-hero__title">
                Innovating the Future with <span className="accent">Smart Technology Solutions</span>
              </h1>
              <p className="inner-hero__text">We transform ideas into powerful digital and engineering solutions.</p>
              <p className="inner-hero__subtext">A premium, future-ready partner for businesses that value innovation, precision, and long-term impact.</p>
              <div className="inner-hero__actions">
                <button className="button button--primary" onClick={() => onNavigate('/contact')}>
                  Contact Us
                </button>
              </div>
            </div>
            <div className="inner-hero__media about-hero__media">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Fama Innovations Team" />
              <div className="inner-hero__glass-overlay" />
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="section__header mission-vision-header">
            <p className="section-kicker">Mission & Values</p>
            <h2 className="section-title">Innovation and precision in every decision</h2>
          </div>
          <div className="mission-vision-grid">
            <article className="mission-vision-card glass-glow">
              <div className="mission-vision-card__icon">
                <PageIcon name="target" />
              </div>
              <h3>Our Mission</h3>
              <p>
                Fama Innovations is driven by a clear mission to design and deliver high-quality digital experiences that
                seamlessly combine innovation with precision. We are committed to transforming ideas into refined,
                scalable, and future-ready solutions that align with the evolving demands of modern businesses.
              </p>
            </article>
            <article className="mission-vision-card glass-glow">
              <div className="mission-vision-card__icon">
                <PageIcon name="eye" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become a global leader in engineering innovation, delivering technology-driven solutions that help
                businesses operate smarter, faster, and more efficiently while maintaining the highest standards of quality.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="section__header">
            <p className="section-kicker">Who We Are</p>
            <h2 className="section-title">A focused team with creative and technical depth</h2>
          </div>
          <div className="team-flip-grid">
            {teamMembers.map((member, index) => (
              <article className="team-flip-card" key={member.name}>
                <div className="team-flip-card__inner">
                  <div className="team-flip-card__front">
                    <img src={member.image} alt={member.name} />
                    <div className="team-flip-card__front-info">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                  <div className="team-flip-card__back">
                    <h3>{member.name}</h3>
                    <p className="team-flip-card__role">{member.role}</p>
                    <p className="team-flip-card__bio">
                      Passionate about delivering premium solutions with precision and innovation. Dedicated to transforming client visions into reality.
                    </p>
                    <div className="team-flip-card__links">
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <PageIcon name="linkedin" />
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <PageIcon name="instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="stats-panel glass-glow">
            <CounterCard value={5} suffix="+" label="Years in Business" icon="clock" />
            <CounterCard value={1000} suffix="+" label="Clients Served" icon="users" />
            <CounterCard value={150} suffix="+" label="Projects Completed" icon="folder" />
            <CounterCard value={50} suffix="+" label="Team Members" icon="users" />
          </div>
        </div>
      </section>

      <FAQ />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
      <Footer navLinks={NAV_LINKS} onNavigate={onNavigate} />
    </>
  )
}

const serviceTimeline = [
  { step: 1, title: 'Discovery & Analysis', description: 'We dive deep into your needs, goals, and challenges to conduct comprehensive analysis and market research.', icon: 'search' },
  { step: 2, title: 'Strategy & Planning', description: 'Creating detailed solution roadmaps with clear timelines, resource allocation, and key milestones.', icon: 'map' },
  { step: 3, title: 'Design & Development', description: 'Using cutting-edge technologies and best practices for creative design and efficient development.', icon: 'code' },
  { step: 4, title: 'Testing & Validation', description: 'Ensuring flawless performance through rigorous testing and quality assurance.', icon: 'shield' },
  { step: 5, title: 'Deployment & Support', description: 'Safely deploying solutions with ongoing support and maintenance services.', icon: 'rocket' },
]

function ServicesPage({ onNavigate }) {
  return (
    <>
      <section className="inner-hero services-hero">
        <div className="container inner-hero__frame glass-glow page-reveal">
          <div className="inner-hero__grid">
            <div className="inner-hero__content">
              <p className="section-kicker">Services</p>
              <h1 className="inner-hero__title">
                Premium services built to support <span className="accent">smart growth</span>
              </h1>
              <p className="inner-hero__text">A fuller, more detailed services page with image-backed glass cards and stronger content hierarchy.</p>
              <div className="inner-hero__actions">
                <button className="button button--primary" onClick={() => onNavigate('/contact')}>
                  Discuss a Project
                </button>
              </div>
            </div>
            <div className="inner-hero__media services-hero__media">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" alt="Services" />
              <div className="inner-hero__glass-overlay services-hero__glass" />
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="section__header">
            <p className="section-kicker">What We Offer</p>
            <h2 className="section-title">Specialized capabilities with a modern presentation</h2>
          </div>
          <div className="service-grid">
            {serviceCards.map((service) => (
              <article className="service-showcase glass" key={service.title}>
                <div className="service-showcase__image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-showcase__icon">
                    <PageIcon name={service.icon} />
                  </div>
                </div>
                <div className="service-showcase__body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section services-timeline-section">
        <div className="container page-reveal">
          <div className="section__header">
            <p className="section-kicker">How We Work</p>
            <h2 className="section-title">Our service delivery process</h2>
          </div>
          <div className="timeline-container">
            <div className="timeline-line" />
            {serviceTimeline.map((item, index) => (
              <div className="timeline-item" key={item.step}>
                <div className="timeline-item__marker">
                  <span>{item.step}</span>
                </div>
                <div className="timeline-item__content glass">
                  <div className="timeline-item__icon">
                    <PageIcon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
<Footer navLinks={NAV_LINKS} onNavigate={onNavigate} />
    </>
  )
}

function SolutionsPage({ onNavigate }) {
  return (
    <>
      <PageHero
        kicker="Solutions"
        title={
          <>
            Problem-first solutions for <span className="accent">modern businesses</span>
          </>
        }
        text="This page uses a problem to solution flow so each offering feels more strategic, more detailed, and visually distinct."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
        primaryLabel="View Portfolio"
        primaryAction={() => onNavigate('/portfolio')}
      />

      <section className="section page-section">
        <div className="container solutions-stack page-reveal">
          {solutions.map((item, index) => (
            <article className={`solution-feature glass ${index % 2 === 1 ? 'is-reverse' : ''}`} key={item.title}>
              <div className="solution-feature__media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="solution-feature__content">
                <span className="page-card__label">{item.title}</span>
                <div className="solution-feature__block">
                  <h3>Problem</h3>
                  <p>{item.problem}</p>
                </div>
                <div className="solution-feature__block solution-feature__block--accent">
                  <h3>Solution</h3>
                  <p>{item.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageFaqSection title="Solutions FAQ" items={SOLUTIONS_FAQS} />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
    </>
  )
}

function PortfolioPage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Tech', 'AI', 'Engineering']
  const portfolioRef = useRef(null)

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return portfolioItems
    return portfolioItems.filter((item) => item.type === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    if (!portfolioRef.current) return

    const items = portfolioRef.current.querySelectorAll('.portfolio-tile')
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
        }
      )
    })
  }, [activeFilter])

  return (
    <>
      <section className="inner-hero portfolio-hero">
        <div className="container inner-hero__frame glass-glow page-reveal">
          <div className="inner-hero__grid">
            <div className="inner-hero__content">
              <p className="section-kicker">Portfolio</p>
              <h1 className="inner-hero__title">
                Project highlights with a <span className="accent">case-study feel</span>
              </h1>
              <p className="inner-hero__text">The portfolio now has filter tabs, stronger image treatment, and hover overlays so the work feels more substantial and attractive.</p>
              <div className="inner-hero__actions">
                <button className="button button--primary" onClick={() => onNavigate('/contact')}>
                  Start a Project
                </button>
              </div>
            </div>
            <div className="inner-hero__media portfolio-hero__media">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="Portfolio" />
              <div className="inner-hero__glass-overlay" />
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal" ref={portfolioRef}>
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-tabs__button ${activeFilter === filter ? 'is-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="portfolio-grid portfolio-grid--expanded">
            {filteredItems.map((item, index) => (
              <article className="portfolio-tile glass" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="portfolio-tile__overlay">
                  <span>View details</span>
                </div>
                <div className="portfolio-tile__body">
                  <span>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
      <Footer navLinks={NAV_LINKS} onNavigate={onNavigate} />
    </>
  )
}

function BlogPage({ onNavigate }) {
  return (
    <>
      <section className="inner-hero blog-hero">
        <div className="container inner-hero__frame glass-glow page-reveal">
          <div className="inner-hero__grid">
            <div className="inner-hero__content">
              <p className="section-kicker">Blogs</p>
              <h1 className="inner-hero__title">
                Editorial content with a <span className="accent">clean premium rhythm</span>
              </h1>
              <p className="inner-hero__text">The blog page now feels richer and more attractive with image-led cards, smoother hover behavior, and more visual variety.</p>
              <div className="inner-hero__actions">
                <button className="button button--primary" onClick={() => onNavigate('/contact')}>
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="inner-hero__media blog-hero__media">
              <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80" alt="Blog" />
              <div className="inner-hero__glass-overlay" />
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article className="blog-card glass" key={post.title}>
                <div className="blog-card__image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card__body">
                  <span className="page-card__label">Blog</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="blog-card__link">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
      <Footer navLinks={NAV_LINKS} onNavigate={onNavigate} />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title={
          <>
            Let's build something <span className="accent">clear, strong, and scalable</span>
          </>
        }
        text="A full contact page gives your inquiries a more focused destination while the homepage contact section still remains available."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
      />
      <Contact />
    </>
  )
}

function CounterCard({ value, suffix, label, icon }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    let frame
    let start
    const duration = 1400

    const tick = (time) => {
      if (!start) start = time
      const progress = Math.min((time - start) / duration, 1)
      setDisplay(Math.floor(value * progress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return (
    <div className="stats-panel__item">
      <div className="stats-panel__icon">
        <PageIcon name={icon} />
      </div>
      <strong>
        {display}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  )
}

function PageFaqSection({ title, items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section page-section">
      <div className="container page-reveal">
        <div className="section__header">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="page-faqs">
          {items.map((item, index) => (
            <article
              key={item.question}
              className={`page-faq glass ${openIndex === index ? 'is-open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="page-faq__head">
                <span>{item.question}</span>
                <strong>{openIndex === index ? '−' : '+'}</strong>
              </div>
              {openIndex === index ? <p>{item.answer}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PageCta({ text, onNavigate }) {
  return (
    <section className="section page-section">
      <div className="container page-reveal">
        <div className="page-cta glass-glow">
          <div>
            <p className="section-kicker">Ready when you are</p>
            <h2 className="section-title">{text}</h2>
          </div>
          <button className="button button--primary" onClick={() => onNavigate('/contact')}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

function PageIcon({ name }) {
  const icons = {
    cube: <path d="M12 2.5 4.5 6.5v11L12 21.5l7.5-4v-11L12 2.5Zm0 2.3 5.2 2.8L12 10.4 6.8 7.6 12 4.8Zm-6 4.7 5 2.7v6.2l-5-2.6V9.5Zm13 0v6.1l-5 2.6v-6.2l5-2.5Z" />,
    chip: <path d="M9 3h6v2h2.5A2.5 2.5 0 0 1 20 7.5V10h2v4h-2v2.5A2.5 2.5 0 0 1 17.5 19H15v2H9v-2H6.5A2.5 2.5 0 0 1 4 16.5V14H2v-4h2V7.5A2.5 2.5 0 0 1 6.5 5H9V3Zm-2.5 5v8h11V8h-11Zm2.5 2h6v4H9v-4Z" />,
    code: <path d="M8.5 7 4 12l4.5 5 1.5-1.3L6.6 12 10 8.3 8.5 7Zm7 0L14 8.3l3.4 3.7-3.4 3.7 1.5 1.3L20 12l-4.5-5ZM13 5l-4 14h2l4-14h-2Z" />,
    cloud: <path d="M8.5 18A4.5 4.5 0 1 1 9 9a5.5 5.5 0 0 1 10.2 1.8A3.6 3.6 0 1 1 19 18H8.5Z" />,
    spark: <path d="m12 2 1.7 4.8L18.5 8l-4 2.8 1.5 4.7L12 12.8 8 15.5l1.5-4.7-4-2.8 4.8-1.2L12 2Z" />,
    shield: <path d="M12 2.5 4.5 5.3v5.5c0 4.5 2.8 8.6 7.5 10.7 4.7-2.1 7.5-6.2 7.5-10.7V5.3L12 2.5Zm-1 12.3-3-3 1.4-1.4 1.6 1.6 3.6-3.6 1.4 1.4-5 5Z" />,
    clock: <path d="M12 2.5A9.5 9.5 0 1 0 21.5 12 9.5 9.5 0 0 0 12 2.5Zm1 9.9 4.1 2.4-1 1.7-5.1-3V7h2v5.4Z" />,
    users: <path d="M16 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 16 11Zm-8 0A3 3 0 1 0 5 8a3 3 0 0 0 3 3Zm8 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5C23 14.2 18.3 13 16 13Zm-8 1c-1.8 0-5 .9-5 2.8V19h5v-2.5a4.8 4.8 0 0 1 2.1-3.9A7.8 7.8 0 0 0 8 14Z" />,
    target: <path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm0 2a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15Zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />,
    eye: <path d="M12 4.5C7 4.5 2.7 7.6 1 12c1.7 4.4 6 7.5 11 7.5s9.3-3.1 11-7.5c-1.7-4.4-6-7.5-11-7.5Zm0 2c3.3 0 6.3 2.2 7.5 5.5-1.2 3.3-4.2 5.5-7.5 5.5-3.3 0-6.3-2.2-7.5-5.5 1.2-3.3 4.2-5.5 7.5-5.5Zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />,
    linkedin: <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17a1.5 1.5 0 0 0 1.5 1.5h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19v-6h3v6H8Zm0-7.25V8.5a1.5 1.5 0 0 1 3 0v3.25H8ZM5 6.5A1.75 1.75 0 1 1 5 8.25 1.75 1.75 0 0 1 5 6.5Z" />,
    instagram: <path d="M12 2.5c2.4 0 2.7 0 3.6.1 1.1.1 1.8.3 2.2.5.6.3 1.1.7 1.6 1.2.5.5.9 1 1.2 1.6.4.4.4 1.1.5 2.2.1.9.1 1.2.1 3.6s0 2.7-.1 3.6c-.1 1.1-.3 1.8-.5 2.2-.3.6-.7 1.1-1.2 1.6-.5.5-1 .9-1.6 1.2-.4.4-1.1.4-2.2.5-.9.1-1.2.1-3.6.1s-2.7 0-3.6-.1c-1.1-.1-1.8-.3-2.2-.5-.6-.3-1.1-.7-1.6-1.2-.5-.5-.9-1-1.2-1.6-.4-.4-.4-1.1-.5-2.2-.1-.9-.1-1.2-.1-3.6s0-2.7.1-3.6c.1-1.1.3-1.8.5-2.2.3-.6.7-1.1 1.2-1.6.5-.5 1-.9 1.6-1.2.4-.4 1.1-.4 2.2-.5.9-.1 1.2-.1 3.6-.1m0-2a4.1 4.1 0 0 0-4.1 4.1v11.8a4.1 4.1 0 0 0 4.1 4.1h11.8a4.1 4.1 0 0 0 4.1-4.1V4.1a4.1 4.1 0 0 0-4.1-4.1H12Zm0 2a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12 4.1Zm5.5-1.1a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0Z" />,
    search: <path d="M21.5 20l-4.4-4.4A7.5 7.5 0 1 0 8.5 3.5a7.5 7.5 0 0 0 4.4 12.9l4.4 4.4-1.3 1.3-4.4-4.4ZM8.5 15.5a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
    map: <path d="M22 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 19.5v-15a1.5 1.5 0 0 1 1.5-1.5h17A1.5 1.5 0 0 1 22 4.5ZM20 19v-11H4v11h16Zm0-13v-9H4v9h16Z" />,
    rocket: <path d="M12 2.5 8 7v3.5h3.5L12 2.5Zm-4.5 7L4 13v4.5A1.5 1.5 0 0 0 5.5 19H9v1.5a1.5 1.5 0 0 1-3 0V19H3.5A1.5 1.5 0 0 0 2 17.5v-4l3.5-4ZM20 12l-2.5 2.5-1.5-1.5a5 5 0 0 1-7 7L7.5 22l2.5-2.5a5 5 0 0 1 7-7l-1.5-1.5L20 12Z" />,
    folder: <path d="M20.5 5h-14l-2 2H3.5A1.5 1.5 0 0 0 2 8.5v9a1.5 1.5 0 0 0 1.5 1.5h17a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 20.5 5ZM20 17H4V9h2.5l2-2h7.5l2 2H20v8Z" />,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default App
