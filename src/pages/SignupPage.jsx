import '../styles/pages.css'

const SIGNUP_STEPS = [
  'Create your company account',
  'Tell us what you want to build',
  'Start collaborating with our team',
]

export default function SignupPage({ onNavigate }) {
  return (
    <section className="auth-page auth-page--signup">
      <div className="auth-page__ambient auth-page__ambient--one" />
      <div className="auth-page__ambient auth-page__ambient--two" />
      <div className="container page-reveal">
        <div className="auth-shell auth-shell--reverse glass-glow">
          <div className="auth-showcase">
            <p className="section-kicker">Create Account</p>
            <h1 className="auth-title">Open the door to a polished build process with a more human project experience</h1>
            <p className="auth-copy">
              Sign up to start a new engagement, manage approvals, and keep your product roadmap moving with less friction.
            </p>
            <div className="auth-steps">
              {SIGNUP_STEPS.map((step, index) => (
                <article key={step} className="auth-step glass" style={{ animationDelay: `${index * 0.2}s` }}>
                  <strong>{`0${index + 1}`}</strong>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="auth-panel glass-thick">
            <div className="auth-panel__tabs">
              <button type="button" onClick={() => onNavigate('/login')}>
                Login
              </button>
              <button className="is-active" type="button">
                Sign Up
              </button>
            </div>

            <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Full Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Work Email
                <input type="email" placeholder="team@company.com" />
              </label>
              <label>
                Password
                <input type="password" placeholder="Create a secure password" />
              </label>

              <label className="auth-check">
                <input type="checkbox" />
                <span>I agree to the privacy policy and terms of service</span>
              </label>

              <button type="submit" className="button button--primary auth-submit">
                Create Account
              </button>
            </form>

            <div className="auth-panel__footer">
              <p>Already have an account?</p>
              <button type="button" className="auth-link-button" onClick={() => onNavigate('/login')}>
                Sign in instead
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
