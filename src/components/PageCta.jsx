export default function PageCta({ text, onNavigate }) {
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
