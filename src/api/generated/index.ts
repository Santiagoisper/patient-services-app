import { createPricelistsApi } from './modules/pricelists.ts'
import { createMedicalinsurancesApi } from './modules/medicalinsurances.ts'
import { createMedicalservicesApi } from './modules/medicalservices.ts'
import { createAgreementsApi } from './modules/agreements.ts'
import { createSnowmedApi } from './modules/snowmed.ts'
import { createAgreementsaggregatorApi } from './modules/agreementsaggregator.ts'
import { createPersonsApi } from './modules/persons.ts'
import { createProvidersApi } from './modules/providers.ts'
import { createProviderassociationApi } from './modules/providerassociation.ts'
import { createProvideraggregatorApi } from './modules/provideraggregator.ts'
import { createSponsorsApi } from './modules/sponsors.ts'
import { createContractsApi } from './modules/contracts.ts'
import { createSponsorcontractsApi } from './modules/sponsorcontracts.ts'
import { createPractitionersApi } from './modules/practitioners.ts'
import { createPractitionersaggregatorApi } from './modules/practitionersaggregator.ts'
import { createConceptsApi } from './modules/concepts.ts'
import { createTenantaggregatorApi } from './modules/tenantaggregator.ts'
import { createTenantpricelistsApi } from './modules/tenantpricelists.ts'
import { createProtocolsApi } from './modules/protocols.ts'
import { createNotificationsApi } from './modules/notifications.ts'
import { createSettlementsApi } from './modules/settlements.ts'
import { createCashflowApi } from './modules/cashflow.ts'
import { createIaApi } from './modules/ia.ts'
import { createTurneroApi } from './modules/turnero.ts'
import { createSpecialtiesApi } from './modules/specialties.ts'
import type { HttpClient } from '../httpClient.ts'
import manifest from './manifest.ts'

export { default as gatewayManifest } from './manifest.ts'

export function createGatewayApi(client: HttpClient) {
  return {
    pricelists: createPricelistsApi(client),
    medicalinsurances: createMedicalinsurancesApi(client),
    medicalservices: createMedicalservicesApi(client),
    agreements: createAgreementsApi(client),
    snowmed: createSnowmedApi(client),
    agreementsaggregator: createAgreementsaggregatorApi(client),
    persons: createPersonsApi(client),
    providers: createProvidersApi(client),
    providerassociation: createProviderassociationApi(client),
    provideraggregator: createProvideraggregatorApi(client),
    sponsors: createSponsorsApi(client),
    contracts: createContractsApi(client),
    sponsorcontracts: createSponsorcontractsApi(client),
    practitioners: createPractitionersApi(client),
    practitionersaggregator: createPractitionersaggregatorApi(client),
    concepts: createConceptsApi(client),
    tenantaggregator: createTenantaggregatorApi(client),
    tenantpricelists: createTenantpricelistsApi(client),
    protocols: createProtocolsApi(client),
    notifications: createNotificationsApi(client),
    settlements: createSettlementsApi(client),
    cashflow: createCashflowApi(client),
    ia: createIaApi(client),
    turnero: createTurneroApi(client),
    specialties: createSpecialtiesApi(client),
  }
}

export type GatewayApi = ReturnType<typeof createGatewayApi>
export { manifest }
