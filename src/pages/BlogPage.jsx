import { useMemo, useState, useEffect } from 'react'
import PageCta from '../components/PageCta'
import { BLOG_CATEGORIES, BLOG_POSTS, BLOG_TAGS } from '../data/site'
import '../styles/pages.css'

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
                <strong>{openIndex === index ? '-' : '+'}</strong>
              </div>
              {openIndex === index ? <p>{item.answer}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogModal({ post, onClose, onNavigate }) {
  useEffect(() => {
    if (!post) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [post, onClose])

  if (!post) return null

  return (
    <div
      className="blog-modal__backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="blog-modal" role="dialog" aria-modal="true" aria-label={post.title}>
        <div className="blog-modal__media">
          <img src={post.image} alt={post.title} />
          <div className="blog-modal__media-overlay" />
          <button className="blog-modal__close" onClick={onClose} aria-label="Close article">
            <span />
            <span />
          </button>
        </div>

        <div className="blog-modal__body">
          <div className="blog-modal__meta">
            <span>{post.date}</span>
            <strong>{post.categoryLabel}</strong>
          </div>
          <h2 className="blog-modal__title">{post.title}</h2>
          <div className="blog-modal__content">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="blog-modal__cta">
            <h3>Interested in this technology?</h3>
            <button className="button button--primary" onClick={() => onNavigate('/contact')}>
              Talk to Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activePost, setActivePost] = useState(null)

  const featuredPost = BLOG_POSTS[0]

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.slice(1).filter((post) => {
      const matchesSearch =
        searchTerm.trim() === '' ||
        `${post.title} ${post.excerpt} ${post.categoryLabel}`.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = activeCategory === 'all' || post.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [activeCategory, searchTerm])

  return (
    <>
      <BlogModal post={activePost} onClose={() => setActivePost(null)} onNavigate={onNavigate} />

      <section className="blog-hero page-hero-variant">
        <div className="blog-hero__bg-accent" />
        <div className="container page-reveal">
          <div className="blog-hero__wrapper">
            <div className="blog-hero__header">
              <p className="section-kicker">Latest Insights</p>
              <h1 className="blog-hero__title">Latest Insights</h1>
              <p className="blog-hero__text">Trends, tutorials, and thought leadership from our engineers.</p>
            </div>

            <div className="blog-hero__featured glass" onClick={() => setActivePost(featuredPost)} role="button" tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') setActivePost(featuredPost)
              }}
            >
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="blog-hero__featured-content">
                <div className="blog-featured__meta">
                  <span className="blog-featured__badge">Featured</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.excerpt}</p>
                <button className="blog-card__link">Read Full Story</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="blog-layout">
            <div className="blog-layout__main">
              <div className="blog-grid">
                {filteredPosts.map((post) => (
                  <article
                    className="blog-card glass"
                    key={post.title}
                    onClick={() => setActivePost(post)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') setActivePost(post)
                    }}
                  >
                    <div className="blog-card__image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="blog-card__body">
                      <div className="blog-card__meta">
                        <span>{post.date}</span>
                        <strong>{post.categoryLabel}</strong>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <button className="blog-card__link">Read More</button>
                    </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 ? (
                <div className="blog-empty glass">
                  <h3>No articles found</h3>
                  <p>Try a different search term or switch back to another category.</p>
                </div>
              ) : null}
            </div>

            <aside className="blog-sidebar">
              <div className="blog-sidebar__card glass">
                <div className="blog-search">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search articles..."
                    aria-label="Search articles"
                  />
                </div>
              </div>

              <div className="blog-sidebar__card glass">
                <h3>Categories</h3>
                <div className="blog-category-list">
                  {BLOG_CATEGORIES.map((category) => (
                    <button
                      key={category.value}
                      className={`blog-category-button ${activeCategory === category.value ? 'is-active' : ''}`}
                      onClick={() => setActiveCategory(category.value)}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="blog-sidebar__card glass">
                <h3>Popular Tags</h3>
                <div className="blog-tag-list">
                  {BLOG_TAGS.map((tag) => (
                    <span key={tag} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="blog-sidebar__card blog-sidebar__card--accent">
                <h3>Subscribe</h3>
                <p>Get the latest tech trends delivered to your inbox weekly.</p>
                <form
                  className="blog-subscribe"
                  onSubmit={(event) => {
                    event.preventDefault()
                  }}
                >
                  <input type="email" placeholder="Your email..." aria-label="Your email" />
                  <button className="button button--primary" type="submit">
                    Join Now
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <PageFaqSection title="Blog FAQ" items={BLOG_FAQS} />
      <PageCta text="Let's build something amazing together." onNavigate={onNavigate} />
    </>
  )
}
