import '../styles/pages.css'

const PRIVACY_SECTIONS = [
  {
    title: 'Information we collect',
    body:
      'We may collect contact details, project requirements, billing information, support messages, and usage data when you interact with our website, request a consultation, or engage our services.',
  },
  {
    title: 'How we use your data',
    body:
      'We use personal information to respond to inquiries, manage client relationships, deliver services, improve website performance, send relevant updates, and maintain business records required for operations.',
  },
  {
    title: 'Cookies and analytics',
    body:
      'Our website may use cookies, analytics tools, and similar technologies to understand traffic patterns, improve navigation, and measure how visitors interact with content across devices.',
  },
  {
    title: 'Data sharing',
    body:
      'We do not sell personal information. We may share limited data with trusted service providers, payment processors, hosting partners, or legal authorities when required to operate the business or comply with law.',
  },
  {
    title: 'Data retention and security',
    body:
      'We retain information only as long as necessary for business, legal, or contractual purposes and apply reasonable technical and organizational safeguards to protect it from unauthorized access or misuse.',
  },
  {
    title: 'Your rights',
    body:
      'You may request access, correction, deletion, or clarification about the personal information we hold. To make a request, contact our team and we will review it in accordance with applicable requirements.',
  },
]

export default function PrivacyPolicyPage({ onNavigate }) {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero__glow legal-hero__glow--one" />
        <div className="legal-hero__glow legal-hero__glow--two" />
        <div className="container page-reveal">
          <div className="legal-hero__content glass-glow">
            <p className="section-kicker">Privacy Policy</p>
            <h1 className="legal-hero__title">Respectful data practices for every interaction with Fama Innovations</h1>
            <p className="legal-hero__text">
              This policy explains what information we collect, why we collect it, and how we protect it when you use our website or work with our team.
            </p>
            <div className="legal-hero__meta">
              <span className="glass">Last updated: May 5, 2026</span>
              <span className="glass">Contact: info@famainnovations.com</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section page-section">
        <div className="container page-reveal">
          <div className="legal-layout">
            <aside className="legal-layout__summary glass">
              <h2>Quick Summary</h2>
              <p>
                We collect the information needed to communicate, deliver services, improve the experience, and protect the platform. We do not sell your personal data.
              </p>
              <div className="legal-layout__actions">
                <button className="button button--primary" onClick={() => onNavigate('/contact')}>
                  Ask a Privacy Question
                </button>
                <button className="button button--ghost legal-button" onClick={() => onNavigate('/terms-of-service')}>
                  View Terms of Service
                </button>
              </div>
            </aside>

            <div className="legal-sections">
              {PRIVACY_SECTIONS.map((section) => (
                <article key={section.title} className="legal-card glass">
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
