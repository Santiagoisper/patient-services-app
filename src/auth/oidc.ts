import { WebStorageStateStore } from 'oidc-client-ts'
import type { AuthProviderProps } from 'react-oidc-context'

const discoveryUrl =
  import.meta.env.VITE_OIDC_DISCOVERY_URL?.trim() ??
  'https://identity.hc.alpha-cr.com/.well-known/openid-configuration'

const authority =
  import.meta.env.VITE_OIDC_AUTHORITY?.trim() ?? new URL(discoveryUrl).origin

const redirectUri =
  import.meta.env.VITE_OIDC_REDIRECT_URI?.trim() ??
  'http://localhost:3000/authentication/login-callback'

const postLogoutRedirectUri =
  import.meta.env.VITE_OIDC_POST_LOGOUT_REDIRECT_URI?.trim() ??
  'http://localhost:3000/authentication/logout-callback'

const clientId = import.meta.env.VITE_OIDC_CLIENT_ID?.trim() ?? 'pre_biller_app_dev'
const scope =
  import.meta.env.VITE_OIDC_SCOPE?.trim() ?? 'openid profile email pre_biller_app_dev'

export const oidcConfig: AuthProviderProps = {
  authority,
  client_id: clientId,
  redirect_uri: redirectUri,
  post_logout_redirect_uri: postLogoutRedirectUri,
  response_type: 'code',
  scope,
  metadataUrl: discoveryUrl,
  userStore: new WebStorageStateStore({ store: window.sessionStorage }),
  stateStore: new WebStorageStateStore({ store: window.sessionStorage }),
  metadata: {
    issuer: authority,
    authorization_endpoint: `${authority}/connect/authorize`,
    token_endpoint: `${authority}/connect/token`,
    userinfo_endpoint: `${authority}/connect/userinfo`,
    end_session_endpoint: `${authority}/connect/endsession`,
    jwks_uri: `${authority}/.well-known/openid-configuration/jwks`,
  },
  loadUserInfo: true,
  automaticSilentRenew: false,
  monitorSession: false,
}

export function onSigninCallback() {
  const target = sessionStorage.getItem('auth:return-path') || '/session'
  sessionStorage.removeItem('auth:return-path')
  window.history.replaceState({}, document.title, target)
}
