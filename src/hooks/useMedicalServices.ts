import { useCallback } from 'react'
import type { GatewayEnvelope } from '../api/openapi.ts'
import { useGatewayApi } from '../api/useGatewayApi.ts'
import { useApiQuery } from './useApiQuery.ts'

type MedicalServicesResponse = GatewayEnvelope<unknown[]>

export function useMedicalServices() {
  const gatewayApi = useGatewayApi()

  const request = useCallback(
    () => gatewayApi.medicalservices.getMedicalServices({}) as Promise<MedicalServicesResponse>,
    [gatewayApi],
  )

  return useApiQuery<MedicalServicesResponse>(request, [request])
}
