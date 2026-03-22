import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from 'react-oidc-context'

export function LogoutCallbackPage() {
  const auth = useAuth()

  useEffect(() => {
    void auth.removeUser()
  }, [auth])

  return (
    <main className="shell">
      <section className="card status">
        <p className="eyebrow">Authentication</p>
        <h2>Session closed</h2>
        <p className="muted">The identity provider returned to the configured logout callback.</p>
        <div className="actions">
          <Link className="button" to="/">
            Back to home
          </Link>
          <Link className="button-secondary" to="/login">
            Sign in again
          </Link>
        </div>
      </section>
    </main>
  )
}
