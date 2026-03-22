import type { HttpClient } from '../../httpClient.ts'

export const notificationsStatus = {
  status: 'stub',
  reason: "HTTP 500",
} as const

export function createNotificationsApi(_client: HttpClient) {
  return {}
}
