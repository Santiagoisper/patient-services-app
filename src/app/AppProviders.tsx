import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from 'react-oidc-context'
import { oidcConfig, onSigninCallback } from '../auth/oidc.ts'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <BrowserRouter>
      <AuthProvider {...oidcConfig} onSigninCallback={onSigninCallback}>
        {children}
      </AuthProvider>
    </BrowserRouter>
  )
}
