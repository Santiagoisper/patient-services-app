import { useCallback } from 'react'
import type { GatewayEnvelope } from '../api/openapi.ts'
import { useGatewayApi } from '../api/useGatewayApi.ts'
import { useApiQuery } from './useApiQuery.ts'

type MedicalInsurancesResponse = GatewayEnvelope<unknown[]>

export function useMedicalInsurances() {
  const gatewayApi = useGatewayApi()

  const request = useCallback(
    () => gatewayApi.medicalinsurances.getMedicalInsurances({}) as Promise<MedicalInsurancesResponse>,
    [gatewayApi],
  )

  return useApiQuery<MedicalInsurancesResponse>(request, [request])
}
