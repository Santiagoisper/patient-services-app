import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <main className="shell">
      <section className="hero">
        <section className="hero-copy">
          <p className="eyebrow">BOPE / CX</p>
          <h1>PatientServices.APP base initialized for secure frontend work.</h1>
          <p className="lead">
            This Vite React TypeScript SPA is prepared for OIDC login, protected routes, and
            backend integration through the prebiller gateway without reworking authentication
            later.
          </p>
          <div className="actions">
            <Link className="button" to="/login">
              Log in
            </Link>
            <Link className="button-secondary" to="/session">
              View session
            </Link>
          </div>
        </section>

        <section className="card">
          <p className="eyebrow">Runtime</p>
          <h2>Initial platform decisions</h2>
          <ul className="list">
            <li>Port fixed to `3000` with `strictPort`.</li>
            <li>Authorization Code + PKCE via OIDC SPA client.</li>
            <li>Gateway client ready for bearer token injection.</li>
          </ul>
        </section>
      </section>

      <section className="grid">
        <section className="card">
          <p className="eyebrow">Scopes</p>
          <h2>Default OIDC shape</h2>
          <ul className="list">
            <li>Discovery URL from `identity.hc.alpha-cr.com`.</li>
            <li>Client ID defaulted to `pre_biller_app_dev`.</li>
            <li>Scope defaulted to `openid profile email pre_biller_app_dev`.</li>
          </ul>
        </section>

        <section className="card">
          <p className="eyebrow">Folders</p>
          <h2>Work surfaces</h2>
          <ul className="list">
            <li>`src/auth` for provider config, guards, and session helpers.</li>
            <li>`src/api` for HTTP clients and gateway integration.</li>
            <li>`src/pages` for route screens.</li>
            <li>`src/app` for providers, router, and application shell.</li>
          </ul>
        </section>
      </section>
    </main>
  )
}
