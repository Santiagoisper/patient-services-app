import { useEffect } from 'react'
import { useAuth } from 'react-oidc-context'

export function LogoutPage() {
  const auth = useAuth()

  useEffect(() => {
    if (auth.activeNavigator === 'signoutRedirect') {
      return
    }

    void auth.signoutRedirect()
  }, [auth])

  return (
    <main className="shell">
      <section className="card status">
        <p className="eyebrow">Authentication</p>
        <h2>Signing out</h2>
        <p className="muted">Closing the current OIDC session.</p>
      </section>
    </main>
  )
}
