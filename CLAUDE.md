# CLAUDE.md — Patient Services App

## Proyecto

SPA React + TypeScript (Vite) para operaciones de servicios de salud.
Se conecta al Prebiller Gateway API vía OIDC (Authorization Code + PKCE).

## Arquitectura clave

- **Auth:** `src/auth/` — OIDC con `react-oidc-context` + `oidc-client-ts`. NO TOCAR.
- **API:** `src/api/` — HttpClient con inyección automática de bearer token.
- **Generado:** `src/api/generated/` — 25 módulos tipados desde swagger. Regenerar con `npm run api:generate`.
- **Hooks:** `src/hooks/` — Un hook por query de API, patrón `useApiQuery`.
- **Páginas:** `src/pages/` — Rutas protegidas con `ProtectedRoute`.
- **Rutas:** `src/app/AppRouter.tsx` — Registrar nuevas rutas acá.

## Restricciones

- No modificar `src/auth/`, no hardcodear tokens, no mover lógica OIDC a componentes.
- Para datos de usuario autenticado: `useAuth()` de `react-oidc-context`.
- Para llamadas al backend: `useApiClient()` → HttpClient con token.
- Nuevas páginas protegidas: registrar en `AppRouter.tsx`, envolver con `ProtectedRoute`.

## Bugs conocidos

- El discovery document de identity.hc.alpha-cr.com devuelve `issuer: "null"` (string literal).
  Workaround: metadata manual en `src/auth/oidc.ts` líneas 33-40.
- Módulo `notifications` del gateway devuelve HTTP 500. No integrar hasta que backend lo resuelva.

## Módulos del gateway sin endpoint list-all

- `pricelists`: los 10 endpoints requieren path params (priceListId, etc.). No se puede mostrar en dashboard sin flujo de drill-down.

## Comandos

```bash
npm run dev          # Dev server en localhost:3000
npm run build        # TypeScript check + build
npm run api:generate # Regenerar contratos desde swagger
npm run lint         # ESLint
```

## Convenciones

- Un hook por query de API en `src/hooks/`.
- Tipado: `GatewayEnvelope<T>` para respuestas del gateway.
- CSS en `src/app/app.css`, clases semánticas (`.card`, `.grid`, `.badge`).
- Commits descriptivos en inglés con prefijo convencional (`feat:`, `fix:`, `docs:`).
