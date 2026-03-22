import { Navigate } from 'react-router-dom'
import { useAuth } from 'react-oidc-context'

export function AuthCallbackPage() {
  const auth = useAuth()

  if (auth.error) {
    return (
      <main className="shell">
        <section className="card status">
          <p className="eyebrow">Authentication</p>
          <h2>Callback failed</h2>
          <p className="muted">{auth.error.message}</p>
        </section>
      </main>
    )
  }

  if (auth.isAuthenticated) {
    return <Navigate to="/session" replace />
  }

  return (
    <main className="shell">
      <section className="card status">
        <p className="eyebrow">Authentication</p>
        <h2>Completing callback</h2>
        <p className="muted">Processing authorization response from the identity provider.</p>
      </section>
    </main>
  )
}
