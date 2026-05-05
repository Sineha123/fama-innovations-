import '../styles/pages.css'

const LOGIN_FEATURES = [
  'Track ongoing projects and milestones',
  'Review conversations, files, and next steps',
  'Stay synced with your team across devices',
]

export default function LoginPage({ onNavigate }) {
  return (
    <section className="auth-page">
      <div className="auth-page__ambient auth-page__ambient--one" />
      <div className="auth-page__ambient auth-page__ambient--two" />
      <div className="container page-reveal">
        <div className="auth-shell glass-glow">
          <div className="auth-showcase">
            <p className="section-kicker">Client Login</p>
            <h1 className="auth-title">Step back into your workspace with a calmer, smarter dashboard flow</h1>
            <p className="auth-copy">
              Access your project space, review delivery progress, and keep every conversation connected in one place.
            </p>
            <div className="auth-feature-list">
              {LOGIN_FEATURES.map((item, index) => (
                <div key={item} className="auth-feature glass" style={{ animationDelay: `${index * 0.15}s` }}>
                  <span>{`0${index + 1}`}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="auth-panel glass-thick">
            <div className="auth-panel__tabs">
              <button className="is-active" type="button">
                Login
              </button>
              <button type="button" onClick={() => onNavigate('/signup')}>
                Sign Up
              </button>
            </div>

            <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Email Address
                <input type="email" placeholder="hello@company.com" />
              </label>
              <label>
                Password
                <input type="password" placeholder="Enter your password" />
              </label>

              <div className="auth-form__row">
                <label className="auth-check">
                  <input type="checkbox" />
                  <span>Keep me signed in</span>
                </label>
                <button type="button" className="auth-link-button">
                  Forgot Password?
                </button>
              </div>

              <button type="submit" className="button button--primary auth-submit">
                Enter Workspace
              </button>
            </form>

            <div className="auth-panel__footer">
              <p>New here?</p>
              <button type="button" className="auth-link-button" onClick={() => onNavigate('/signup')}>
                Create your account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
