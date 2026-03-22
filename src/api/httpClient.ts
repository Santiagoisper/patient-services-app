export class ApiError extends Error {
  readonly status: number
  readonly body: unknown

  constructor(status: number, body: unknown, message?: string) {
    super(message ?? `HTTP ${status}`)
    this.name = 'ApiError'
    this.status = status
    this.body = body
  }
}

export type Primitive = string | number | boolean | null | undefined
export type QueryValue = Primitive | Primitive[]
export type QueryParams = Record<string, QueryValue>
export type PathParams = Record<string, Primitive>
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type HttpRequestOptions = {
  method: HttpMethod
  path: string
  pathParams?: PathParams
  query?: QueryParams
  body?: BodyInit | Record<string, unknown> | unknown[] | null
  headers?: HeadersInit
  signal?: AbortSignal
}

export type HttpClientOptions = {
  baseUrl: string
  getAccessToken?: () => string | undefined
  getDefaultHeaders?: () => HeadersInit | undefined
}

function isBodyInit(value: unknown): value is BodyInit {
  return (
    value instanceof Blob ||
    value instanceof FormData ||
    value instanceof URLSearchParams ||
    ArrayBuffer.isView(value) ||
    value instanceof ArrayBuffer ||
    typeof value === 'string'
  )
}

function withLeadingSlash(path: string) {
  return path.startsWith('/') ? path : `/${path}`
}

function serializePath(path: string, pathParams?: PathParams) {
  if (!pathParams) {
    return withLeadingSlash(path)
  }

  return withLeadingSlash(path).replace(/\{([^}]+)\}/g, (_, token: string) => {
    const value = pathParams[token]
    if (value === undefined || value === null) {
      throw new Error(`Missing path param: ${token}`)
    }

    return encodeURIComponent(String(value))
  })
}

function appendQuery(url: URL, query?: QueryParams) {
  if (!query) {
    return
  }

  for (const [key, rawValue] of Object.entries(query)) {
    if (rawValue === undefined || rawValue === null) {
      continue
    }

    const values = Array.isArray(rawValue) ? rawValue : [rawValue]
    for (const value of values) {
      if (value === undefined || value === null) {
        continue
      }

      url.searchParams.append(key, String(value))
    }
  }
}

function normalizeBody(body: HttpRequestOptions['body'], headers: Headers) {
  if (body === undefined) {
    return undefined
  }

  if (body === null) {
    return null
  }

  if (isBodyInit(body)) {
    return body
  }

  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  return JSON.stringify(body)
}

export class HttpClient {
  private readonly baseUrl: string
  private readonly getAccessToken?: () => string | undefined
  private readonly getDefaultHeaders?: () => HeadersInit | undefined

  constructor({ baseUrl, getAccessToken, getDefaultHeaders }: HttpClientOptions) {
    this.baseUrl = baseUrl.replace(/\/+$/, '')
    this.getAccessToken = getAccessToken
    this.getDefaultHeaders = getDefaultHeaders
  }

  get<T>(path: string, options: Omit<HttpRequestOptions, 'method' | 'path'> = {}) {
    return this.request<T>({ ...options, method: 'GET', path })
  }

  post<T>(
    path: string,
    body?: HttpRequestOptions['body'],
    options: Omit<HttpRequestOptions, 'method' | 'path' | 'body'> = {},
  ) {
    return this.request<T>({ ...options, method: 'POST', path, body })
  }

  put<T>(
    path: string,
    body?: HttpRequestOptions['body'],
    options: Omit<HttpRequestOptions, 'method' | 'path' | 'body'> = {},
  ) {
    return this.request<T>({ ...options, method: 'PUT', path, body })
  }

  patch<T>(
    path: string,
    body?: HttpRequestOptions['body'],
    options: Omit<HttpRequestOptions, 'method' | 'path' | 'body'> = {},
  ) {
    return this.request<T>({ ...options, method: 'PATCH', path, body })
  }

  delete<T>(path: string, options: Omit<HttpRequestOptions, 'method' | 'path'> = {}) {
    return this.request<T>({ ...options, method: 'DELETE', path })
  }

  async request<T>({
    method,
    path,
    pathParams,
    query,
    body,
    headers: providedHeaders,
    signal,
  }: HttpRequestOptions) {
    const url = new URL(serializePath(path, pathParams), `${this.baseUrl}/`)
    appendQuery(url, query)

    const headers = new Headers(this.getDefaultHeaders?.())
    const extraHeaders = new Headers(providedHeaders)
    extraHeaders.forEach((value, key) => headers.set(key, value))
    headers.set('Accept', 'application/json')

    const token = this.getAccessToken?.()
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    const response = await fetch(url, {
      method,
      headers,
      body: normalizeBody(body, headers),
      signal,
    })

    if (response.status === 204) {
      return undefined as T
    }

    const contentType = response.headers.get('content-type') || ''
    const payload = contentType.includes('application/json')
      ? await response.json()
      : await response.text()

    if (!response.ok) {
      throw new ApiError(response.status, payload)
    }

    return payload as T
  }
}
