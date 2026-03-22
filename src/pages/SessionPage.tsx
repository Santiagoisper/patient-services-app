import { Link } from 'react-router-dom'
import { useAuth } from 'react-oidc-context'

export function SessionPage() {
  const auth = useAuth()

  return (
    <main className="shell">
      <section className="hero">
        <section className="hero-copy">
          <p className="eyebrow">Session</p>
          <h1>Authenticated workspace ready for protected navigation.</h1>
          <p className="lead">
            The access token is available for gateway calls. From here, the next slice of work
            is wiring domain routes and API modules.
          </p>
          <div className="actions">
            <Link className="button" to="/workspace">
              Open workspace
            </Link>
            <Link className="button-secondary" to="/logout">
              Log out
            </Link>
          </div>
        </section>

        <section className="card">
          <p className="eyebrow">User</p>
          <h2>{String(auth.user?.profile.name ?? auth.user?.profile.preferred_username ?? 'User')}</h2>
          <p className="muted">Session payload captured from the OIDC provider.</p>
          <dl className="claims">
            <div>
              <dt>Subject</dt>
              <dd>{String(auth.user?.profile.sub ?? 'n/a')}</dd>
            </div>
            <div>
              <dt>Expires At</dt>
              <dd>{String(auth.user?.expires_at ?? 'n/a')}</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>{String(auth.user?.scope ?? 'n/a')}</dd>
            </div>
            <div>
              <dt>Token Type</dt>
              <dd>{String(auth.user?.token_type ?? 'n/a')}</dd>
            </div>
          </dl>
        </section>
      </section>
    </main>
  )
}
