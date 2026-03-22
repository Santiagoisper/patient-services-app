import type { PropsWithChildren } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from 'react-oidc-context'

export function ProtectedRoute({ children }: PropsWithChildren) {
  const auth = useAuth()
  const location = useLocation()

  if (auth.isLoading) {
    return (
      <main className="shell">
        <section className="card status">
          <p className="eyebrow">Authentication</p>
          <h2>Checking current session</h2>
          <p className="muted">Waiting for the identity provider response.</p>
        </section>
      </main>
    )
  }

  if (!auth.isAuthenticated) {
    const returnPath = `${location.pathname}${location.search}${location.hash}`
    sessionStorage.setItem('auth:return-path', returnPath)
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
