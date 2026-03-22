import { useCallback } from 'react'
import type { GatewayEnvelope } from '../api/openapi.ts'
import { useGatewayApi } from '../api/useGatewayApi.ts'
import { useApiQuery } from './useApiQuery.ts'

type TurneroMedicosResponse = GatewayEnvelope<unknown[]>

export function useTurneroMedicos() {
  const gatewayApi = useGatewayApi()

  const request = useCallback(
    () => gatewayApi.turnero.getOfficesMedicos() as Promise<TurneroMedicosResponse>,
    [gatewayApi],
  )

  return useApiQuery<TurneroMedicosResponse>(request, [request])
}
