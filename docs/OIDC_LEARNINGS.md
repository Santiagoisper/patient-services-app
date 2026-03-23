# Aprendizajes: OIDC y Autenticación

## El bug del issuer "null"

**Problema:** El discovery document de `https://identity.hc.alpha-cr.com/.well-known/openid-configuration` devuelve `issuer: "null"` (string literal "null", no el valor null de JSON).

**Impacto:** `oidc-client-ts` valida que el issuer del discovery coincida con el authority configurado. Con `"null"` como issuer, la validación falla y el login nunca completa.

**Workaround:** Definir metadata manual en `oidcConfig` con los endpoints explícitos, pisando el issuer con el authority correcto:

```typescript
metadata: {
  issuer: authority,  // pisa el "null" del discovery
  authorization_endpoint: `${authority}/connect/authorize`,
  token_endpoint: `${authority}/connect/token`,
  // ...
}
```

**Archivo:** `src/auth/oidc.ts` líneas 33-40.

**Lección:** Siempre verificar el discovery document antes de asumir que funciona. Correr `curl` al `.well-known` y revisar el JSON crudo.

## Authorization Code + PKCE para SPA

- Es el flujo correcto para SPAs (no Implicit, que está deprecado).
- `response_type: 'code'` en la config.
- `oidc-client-ts` genera el PKCE challenge automáticamente.
- No usamos `offline_access` en scope: no hay manejo de refresh token todavía.
- `automaticSilentRenew: false` porque sin refresh token, el iframe silent renew no funciona con este identity provider.

## Almacenamiento de sesión

- `sessionStorage` (no `localStorage`): la sesión muere al cerrar la pestaña.
- `auth:return-path` en sessionStorage para redirigir al usuario después del callback.

## Scope configurado

`openid profile email pre_biller_app_dev`

- `pre_biller_app_dev` es un scope custom que habilita el acceso a la API del gateway.
- Sin ese scope, el token no tiene los claims necesarios y el gateway rechaza con 401.

## Tips para debugging

1. Abrir DevTools > Network, filtrar por `connect/authorize` para ver el flujo de login.
2. El token decodificado (jwt.io) muestra los scopes concedidos y el audience.
3. Si el login entra en loop: verificar que `redirect_uri` coincida exactamente con lo registrado en el identity provider (incluyendo trailing slash).
