import { Link } from 'react-router-dom'
import type { GatewayEnvelope } from '../api/openapi.ts'
import { gatewayManifest } from '../api/generated/index.ts'
import { apiBaseUrl } from '../api/useApiClient.ts'
import { useSpecialties } from '../hooks/useSpecialties.ts'
import { useMedicalServices } from '../hooks/useMedicalServices.ts'
import { useMedicalInsurances } from '../hooks/useMedicalInsurances.ts'
import type { ApiQueryState } from '../hooks/useApiQuery.ts'

const integratedModules = gatewayManifest.filter((entry) => entry.status === 'integrated')
const blockedModules = gatewayManifest.filter((entry) => entry.status !== 'integrated')
const integratedEndpoints = integratedModules.reduce(
  (total, entry) => total + entry.endpointCount,
  0,
)

function getItemLabel(item: unknown): string {
  if (item && typeof item === 'object') {
    const record = item as Record<string, unknown>
    const name =
      record.name ??
      record.Name ??
      record.description ??
      record.Description ??
      record.displayName ??
      record.specialtyName ??
      record.SpecialtyName ??
      record.serviceName ??
      record.ServiceName ??
      record.insuranceName ??
      record.InsuranceName ??
      record.businessName ??
      record.BusinessName
    if (typeof name === 'string' && name.length > 0) return name

    const id = record.id ?? record.Id ?? record.ID
    if (id !== undefined && id !== null) return `ID: ${String(id)}`
  }
  return String(item)
}

function ModuleCard({
  eyebrow,
  title,
  endpoint,
  query,
  onReload,
}: {
  eyebrow: string
  title: string
  endpoint: string
  query: ApiQueryState<GatewayEnvelope<unknown[]>> & { reload: () => Promise<void> }
  onReload: () => void
}) {
  const { data, error, isLoading } = query
  const rows = data?.data ?? []

  return (
    <section className="card">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="muted endpoint-label">
        <code>{endpoint}</code>
      </p>

      <dl className="claims">
        <div>
          <dt>Status</dt>
          <dd>
            {isLoading ? (
              <span className="badge badge-loading">Loading...</span>
            ) : error ? (
              <span className="badge badge-error">Error</span>
            ) : data?.succeeded ? (
              <span className="badge badge-ok">OK</span>
            ) : (
              <span className="badge badge-warning">No data</span>
            )}
          </dd>
        </div>
        <div>
          <dt>Rows</dt>
          <dd>{rows.length}</dd>
        </div>
      </dl>

      {error && (
        <div className="state-block state-error">
          <p>{error.message}</p>
          <button className="button-secondary" onClick={onReload}>
            Retry
          </button>
        </div>
      )}

      {!isLoading && !error && rows.length === 0 && (
        <div className="state-block state-empty">
          <p>No records returned by the API.</p>
        </div>
      )}

      {rows.length > 0 && (
        <ul className="data-list">
          {rows.slice(0, 8).map((item, i) => (
            <li key={i}>{getItemLabel(item)}</li>
          ))}
          {rows.length > 8 && (
            <li className="muted">+ {rows.length - 8} more</li>
          )}
        </ul>
      )}
    </section>
  )
}

export function WorkspacePage() {
  const specialties = useSpecialties()
  const medicalServices = useMedicalServices()
  const medicalInsurances = useMedicalInsurances()

  function reloadAll() {
    void specialties.reload()
    void medicalServices.reload()
    void medicalInsurances.reload()
  }

  return (
    <main className="shell">
      <section className="hero">
        <section className="hero-copy">
          <p className="eyebrow">Patient Services</p>
          <h1>Workspace</h1>
          <p className="lead">
            Operations dashboard powered by the Prebiller gateway typed API layer. Real-time
            data from {integratedModules.length} integrated modules across{' '}
            {integratedEndpoints} endpoints.
          </p>
          <div className="actions">
            <Link className="button" to="/session">
              Session info
            </Link>
            <button className="button-secondary" onClick={reloadAll}>
              Reload all
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
              <dt>Total endpoints</dt>
              <dd>{integratedEndpoints}</dd>
            </div>
            <div>
              <dt>Blocked modules</dt>
              <dd>{blockedModules.length}</dd>
            </div>
          </dl>
        </section>
      </section>

      <section className="grid grid-3">
        <ModuleCard
          eyebrow="Catalog"
          title="Specialties"
          endpoint="GET /medical-specialties"
          query={specialties}
          onReload={() => void specialties.reload()}
        />
        <ModuleCard
          eyebrow="Catalog"
          title="Medical Services"
          endpoint="GET /medicalServices"
          query={medicalServices}
          onReload={() => void medicalServices.reload()}
        />
        <ModuleCard
          eyebrow="Catalog"
          title="Medical Insurances"
          endpoint="GET /medicalinsurances"
          query={medicalInsurances}
          onReload={() => void medicalInsurances.reload()}
        />
      </section>

      <section className="grid">
        <section className="card">
          <p className="eyebrow">Contracts</p>
          <h2>Backend gaps</h2>
          <ul className="list">
            {blockedModules.length === 0 ? (
              <li>All published Swagger documents are available.</li>
            ) : (
              blockedModules.map((entry) => (
                <li key={entry.slug}>
                  <code>{entry.slug}</code> — {entry.status}
                  {entry.status === 'error' && 'error' in entry
                    ? `: ${(entry as Record<string, unknown>).error}`
                    : ''}
                </li>
              ))
            )}
          </ul>
        </section>

        <section className="card">
          <p className="eyebrow">Endpoints used</p>
          <h2>Active queries</h2>
          <ul className="list">
            <li>
              <code>GET /medical-specialties</code> — useSpecialties()
            </li>
            <li>
              <code>GET /medicalServices</code> — useMedicalServices()
            </li>
            <li>
              <code>GET /medicalinsurances</code> — useMedicalInsurances()
            </li>
          </ul>
        </section>
      </section>
    </main>
  )
}
