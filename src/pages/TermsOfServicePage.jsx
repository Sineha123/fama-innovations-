import '../styles/pages.css'

const TERMS_SECTIONS = [
  {
    title: 'Scope of services',
    body:
      'Fama Innovations provides digital strategy, design, engineering, consulting, and delivery services based on the agreed project scope, timelines, and commercial terms documented with each client.',
  },
  {
    title: 'Client responsibilities',
    body:
      'Clients are responsible for providing accurate information, timely feedback, approvals, required materials, and lawful use cases so work can proceed without avoidable delays or compliance issues.',
  },
  {
    title: 'Intellectual property',
    body:
      'Unless otherwise agreed in writing, pre-existing tools, frameworks, and internal methods remain the property of their original owner, while final deliverables are governed by the project agreement and payment status.',
  },
  {
    title: 'Payments and timelines',
    body:
      'Milestones, invoices, and schedules are defined per engagement. Delayed approvals, missing inputs, or unpaid balances may affect delivery timelines or release of final assets.',
  },
  {
    title: 'Warranties and limitations',
    body:
      'We aim for high-quality work and dependable delivery, but services are provided in line with the project agreement and applicable law. Liability is limited to the maximum extent permitted by law and contract.',
  },
  {
    title: 'Changes to these terms',
    body:
      'We may update these terms from time to time to reflect operational, legal, or service changes. Continued use of the website after updates means the revised terms apply from the posted effective date.',
  },
]

export default function TermsOfServicePage({ onNavigate }) {
  return (
    <>
      <section className="legal-hero legal-hero--terms">
        <div className="legal-hero__glow legal-hero__glow--one" />
        <div className="legal-hero__glow legal-hero__glow--two" />
        <div className="container page-reveal">
          <div className="legal-hero__content glass-glow">
            <p className="section-kicker">Terms of Service</p>
            <h1 className="legal-hero__title">Clear expectations for using our website and working with our team</h1>
            <p className="legal-hero__text">
              These terms outline service boundaries, client responsibilities, ownership principles, and the basic rules that support healthy project delivery.
            </p>
            <div className="legal-hero__meta">
              <span className="glass">Effective date: May 5, 2026</span>
              <span className="glass">Business use and website use</span>
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
                These terms set expectations for scope, ownership, timelines, and acceptable use so our website and services remain clear, professional, and protected.
              </p>
              <div className="legal-layout__actions">
                <button className="button button--primary" onClick={() => onNavigate('/contact')}>
                  Discuss a Project
                </button>
                <button className="button button--ghost legal-button" onClick={() => onNavigate('/privacy-policy')}>
                  View Privacy Policy
                </button>
              </div>
            </aside>

            <div className="legal-sections">
              {TERMS_SECTIONS.map((section) => (
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
