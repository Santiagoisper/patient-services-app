# Patient Services App

Frontend base for `PatientServices.APP` built with React, TypeScript, and Vite.

## Scope

This repository is prepared for:

- SPA authentication with OpenID Connect using Authorization Code + PKCE
- protected routes and user session handling
- token-aware HTTP calls to the prebiller gateway
- later integration of backend endpoints without changing the auth foundation

## Local setup

1. Copy `.env.example` to `.env`.
2. Review the OIDC and API values.
3. Run `npm install`.
4. Run `npm run dev`.

The development URL is `http://localhost:3000`.

## Folder structure

- `src/app`: providers, routing, application shell
- `src/auth`: OIDC config, route guard, session helpers
- `src/api`: base HTTP client and token-aware API access
- `src/api/generated`: contracts, manifest, and services generated from the live gateway swagger docs
- `src/pages`: route-level screens
- `src/hooks`: reusable query hooks for the UI layer

## Current routes

- `/`: landing page
- `/login`: starts login redirect
- `/authentication/login-callback`: receives OIDC login callback
- `/logout`: starts logout redirect
- `/authentication/logout-callback`: receives OIDC logout callback
- `/session`: protected session view
- `/workspace`: protected integration workspace

## OIDC status

- Authorization Code + PKCE configured for SPA use
- Discovery URL set to `https://identity.hc.alpha-cr.com/.well-known/openid-configuration`
- Client ID set to `pre_biller_app_dev`
- Login callback set to `http://localhost:3000/authentication/login-callback`
- Logout callback set to `http://localhost:3000/authentication/logout-callback`
- Session and OIDC state stored in `sessionStorage`
- `offline_access` intentionally excluded for now to avoid coupling the base to refresh-token behavior that is not yet required
- Discovery currently returns `issuer: "null"`; the app overrides metadata with the same authority endpoints so login is not blocked by that defect

## Gateway API layer

- The gateway base URL is `https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway`
- Access tokens are injected by `src/api/useApiClient.ts`
- A shared `X-Requested-With: PatientServices.APP` header is applied uniformly
- Typed contracts and services are generated from the live swagger docs with:

```bash
npm run api:generate
```

- The generated endpoint inventory is written to `docs/PREBILLER_GATEWAY_ENDPOINTS.md`

## Pending information

- exact gateway endpoints to consume first
