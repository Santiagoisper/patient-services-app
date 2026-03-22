import { useMemo } from 'react'
import { HttpClient } from './httpClient.ts'
import { useAccessToken } from '../auth/session.ts'

export const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL?.trim() ??
  'https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway'

export function useApiClient() {
  const accessToken = useAccessToken()

  return useMemo(
    () =>
      new HttpClient({
        baseUrl: apiBaseUrl,
        getAccessToken: () => accessToken,
        getDefaultHeaders: () => ({
          'X-Requested-With': 'PatientServices.APP',
        }),
      }),
    [accessToken],
  )
}
