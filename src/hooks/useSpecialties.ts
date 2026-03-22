import { useCallback } from 'react'
import type { GatewayEnvelope } from '../api/openapi.ts'
import { useGatewayApi } from '../api/useGatewayApi.ts'
import { useApiQuery } from './useApiQuery.ts'

type SpecialtiesResponse = GatewayEnvelope<unknown[]>

export function useSpecialties() {
  const gatewayApi = useGatewayApi()

  const request = useCallback(
    () => gatewayApi.specialties.getAllSpecialties() as Promise<SpecialtiesResponse>,
    [gatewayApi],
  )

  return useApiQuery<SpecialtiesResponse>(request, [request])
}
