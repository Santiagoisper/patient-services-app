import { useCallback } from 'react'
import type { GatewayEnvelope } from '../api/openapi.ts'
import { useGatewayApi } from '../api/useGatewayApi.ts'
import { useApiQuery } from './useApiQuery.ts'

type TurneroSectoresResponse = GatewayEnvelope<unknown[]>

export function useTurneroSectores() {
  const gatewayApi = useGatewayApi()

  const request = useCallback(
    () => gatewayApi.turnero.getOfficesSectores() as Promise<TurneroSectoresResponse>,
    [gatewayApi],
  )

  return useApiQuery<TurneroSectoresResponse>(request, [request])
}
