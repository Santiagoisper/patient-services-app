import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from '../auth/ProtectedRoute.tsx'
import { AuthCallbackPage } from '../pages/AuthCallbackPage.tsx'
import { HomePage } from '../pages/HomePage.tsx'
import { LoginPage } from '../pages/LoginPage.tsx'
import { LogoutPage } from '../pages/LogoutPage.tsx'
import { LogoutCallbackPage } from '../pages/LogoutCallbackPage.tsx'
import { SessionPage } from '../pages/SessionPage.tsx'
import { WorkspacePage } from '../pages/WorkspacePage.tsx'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/authentication/login-callback" element={<AuthCallbackPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/authentication/logout-callback" element={<LogoutCallbackPage />} />
      <Route
        path="/session"
        element={
          <ProtectedRoute>
            <SessionPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/workspace"
        element={
          <ProtectedRoute>
            <WorkspacePage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
