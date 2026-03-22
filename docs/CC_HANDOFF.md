# CC Handoff

## Objective

Build the minimum UI on top of the approved frontend base without touching authentication architecture.

## What Is Already Closed

- Vite app runs on `http://localhost:3000`
- OIDC is configured for Authorization Code + PKCE
- Client ID defaults to `pre_biller_app_dev`
- Discovery document is wired from `https://identity.hc.alpha-cr.com/.well-known/openid-configuration`
- Login callback is `/authentication/login-callback`
- Logout callback is `/authentication/logout-callback`
- Login, callback, logout, session, and protected routes already exist
- Gateway HTTP base client already injects the bearer token

## Constraint For CC

- Do not replace `src/auth`
- Do not move OIDC logic into page components
- Do not hardcode tokens or backend methods
- Do not add business logic yet

## First Functional Screen To Build

Target route: `/workspace`

The screen should show:

- authenticated user summary
- environment badge for `pre_biller_app_dev`
- gateway base URL
- one placeholder action card for future patient search
- one placeholder action card for future appointment flow

## Files CC Should Prefer Touching

- `src/pages/WorkspacePage.tsx`
- `src/app/app.css`
- optional shared presentational components under `src/app` or `src/pages`

## Files CC Should Not Need To Change

- `src/auth/oidc.ts`
- `src/auth/ProtectedRoute.tsx`
- `src/api/httpClient.ts`
- `src/api/useApiClient.ts`

## Integration Notes

- If CC needs authenticated user data, read it from `react-oidc-context`
- If CC needs backend access later, use `useApiClient()`
- If CC needs a new protected page, register it in `src/app/AppRouter.tsx` and wrap it with `ProtectedRoute`
