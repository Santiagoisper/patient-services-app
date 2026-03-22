import { Link } from 'react-router-dom'
import { gatewayManifest } from '../api/generated/index.ts'
import { apiBaseUrl } from '../api/useApiClient.ts'
import { useSpecialties } from '../hooks/useSpecialties.ts'

const integratedModules = gatewayManifest.filter((entry) => entry.status === 'integrated')
const blockedModules = gatewayManifest.filter((entry) => entry.status !== 'integrated')
const integratedEndpoints = integratedModules.reduce(
  (total, entry) => total + entry.endpointCount,
  0,
)

export function WorkspacePage() {
  const { data, error, isLoading, reload } = useSpecialties()

  return (
    <main className="shell">
      <section className="hero">
        <section className="hero-copy">
          <p className="eyebrow">Workspace</p>
          <h1>Gateway integration layer ready for real backend growth.</h1>
          <p className="lead">
            The Prebiller gateway is now integrated by modules over a typed API layer generated
            from the live Swagger documents, while keeping OIDC and transport concerns
            separated.
          </p>
          <div className="actions">
            <Link className="button" to="/session">
              Back to session
            </Link>
            <button className="button-secondary" onClick={() => void reload()}>
              Reload sample query
            </button>
          </div>
        </section>

        <section className="card">
          <p className="eyebrow">Gateway</p>
          <h2>Integration status</h2>
          <dl className="claims">
            <div>
              <dt>Base URL</dt>
              <dd>{apiBaseUrl}</dd>
            </div>
            <div>
              <dt>Integrated modules</dt>
              <dd>{integratedModules.length}</dd>
            </div>
            <div>
              <dt>Integrated endpoints</dt>
              <dd>{integratedEndpoints}</dd>
            </div>
            <div>
              <dt>Blocked modules</dt>
              <dd>{blockedModules.length}</dd>
            </div>
          </dl>
        </section>
      </section>

      <section className="grid">
        <section className="card">
          <p className="eyebrow">Read Example</p>
          <h2>Specialties API sample</h2>
          <p className="muted">
            This is a real typed read example using the generated `specialties` module and the
            shared gateway hook.
          </p>
          <div className="claims">
            <div>
              <dt>Loading</dt>
              <dd>{isLoading ? 'yes' : 'no'}</dd>
            </div>
            <div>
              <dt>Succeeded</dt>
              <dd>{data?.succeeded ? 'yes' : 'no'}</dd>
            </div>
            <div>
              <dt>Returned rows</dt>
              <dd>{data?.data?.length ?? 0}</dd>
            </div>
            <div>
              <dt>Error</dt>
              <dd>{error?.message ?? 'none'}</dd>
            </div>
          </div>
        </section>

        <section className="card">
          <p className="eyebrow">Contracts</p>
          <h2>Current backend gaps</h2>
          <ul className="list">
            {blockedModules.length === 0 ? (
              <li>All published Swagger documents are available.</li>
            ) : (
              blockedModules.map((entry) => (
                <li key={entry.slug}>
                  `{entry.slug}` is `{entry.status}`
                  {entry.status === 'error' && 'error' in entry ? `: ${entry.error}` : ''}
                </li>
              ))
            )}
          </ul>
        </section>
      </section>
    </main>
  )
}
