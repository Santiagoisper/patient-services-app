import { useMemo } from 'react'
import { createGatewayApi } from './generated/index.ts'
import { useApiClient } from './useApiClient.ts'

export function useGatewayApi() {
  const client = useApiClient()
  return useMemo(() => createGatewayApi(client), [client])
}
