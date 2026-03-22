import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAuth } from 'react-oidc-context'

export function LoginPage() {
  const auth = useAuth()
  const location = useLocation()

  useEffect(() => {
    if (auth.isLoading || auth.activeNavigator || auth.isAuthenticated) {
      return
    }

    const returnPath = new URLSearchParams(location.search).get('returnTo') || '/workspace'
    sessionStorage.setItem('auth:return-path', returnPath)
    void auth.signinRedirect()
  }, [auth, location.search])

  return (
    <main className="shell">
      <section className="card status">
        <p className="eyebrow">Authentication</p>
        <h2>Redirecting to login</h2>
        <p className="muted">Starting Authorization Code + PKCE flow.</p>
      </section>
    </main>
  )
}
