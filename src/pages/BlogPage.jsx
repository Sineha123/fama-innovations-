import { useState } from 'react'
import Footer from '../components/Footer'
import PageCta from '../components/PageCta'
import '../styles/pages.css'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blogs', path: '/blog' },
  { label: 'Contact', path: '/contact' },
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

const blogPosts = [
  {
    title: 'Designing Better Engineering Experiences',
    excerpt: 'How thoughtful interface systems help technical businesses present more clarity and trust.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Why Validation Should Start Earlier',
    excerpt: 'Front-loading testing and technical review creates faster, smoother, and more confident delivery cycles.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'What Makes a Portfolio Feel Credible',
    excerpt: 'Better storytelling, stronger visuals, and clear project framing can change how capability is perceived.',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Building Scalable Digital Foundations',
    excerpt: 'Scalability is not only about infrastructure, it is also about structure, clarity, and future-proof choices.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Where Smart Systems Meet User Experience',
    excerpt: 'Technical sophistication becomes more valuable when the final interaction feels intuitive and premium.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'How Clear Design Supports Business Growth',
    excerpt: 'Premium design is not decoration, it is a strategic tool for clarity, trust, and conversion.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  },
]

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

export default function BlogPage({ onNavigate }) {
  return (
    <>
      {/* Blog Hero - Magazine Style */}
      <section className="blog-hero page-hero-variant">
        <div className="blog-hero__bg-accent"></div>
        <div className="container page-reveal">
          <div className="blog-hero__wrapper">
            <div className="blog-hero__header">
              <p className="section-kicker">Insights & Stories</p>
              <h1 className="blog-hero__title">
                Editorial content with a <span className="accent">clean premium rhythm</span>
              </h1>
              <p className="blog-hero__text">Explore thought leadership, engineering insights, and design perspectives from our team.</p>
            </div>
            <div className="blog-hero__featured">
              <img src={blogPosts[0].image} alt={blogPosts[0].title} />
              <div className="blog-hero__featured-content">
                <h3>{blogPosts[0].title}</h3>
                <p>{blogPosts[0].excerpt}</p>
                <button className="button button--secondary">Read Article</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="blog-grid">
            {blogPosts.slice(1).map((post) => (
              <article className="blog-card glass" key={post.title}>
                <div className="blog-card__image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card__body">
                  <span className="page-card__label">Article</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="blog-card__link">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageFaqSection title="Blog FAQ" items={BLOG_FAQS} />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
      <Footer navLinks={NAV_LINKS} onNavigate={onNavigate} />
    </>
  )
}
