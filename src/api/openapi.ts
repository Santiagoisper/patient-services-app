export type GatewayEnvelope<TData = unknown> = {
  succeeded: boolean
  message?: string | null
  errors?: string[] | null
  data?: TData
}

type ResponseContent<TResponse> = TResponse extends { content: infer TContent }
  ? TContent extends Record<string, infer TValue>
    ? TValue
    : unknown
  : unknown

type ResponsesOf<TOperation> = TOperation extends { responses: infer TResponses } ? TResponses : never

type PickSuccessResponse<TResponses> = '200' extends keyof TResponses
  ? TResponses['200']
  : '201' extends keyof TResponses
    ? TResponses['201']
    : '202' extends keyof TResponses
      ? TResponses['202']
      : '203' extends keyof TResponses
        ? TResponses['203']
        : '204' extends keyof TResponses
          ? TResponses['204']
          : '206' extends keyof TResponses
            ? TResponses['206']
            : 'default' extends keyof TResponses
              ? TResponses['default']
              : unknown

type RequestBodyOf<TOperation> = TOperation extends { requestBody: infer TBody } ? TBody : never

type BodyContent<TBody> = TBody extends { content: infer TContent }
  ? TContent extends Record<string, infer TValue>
    ? TValue
    : never
  : never

type ParametersOf<TOperation> = TOperation extends { parameters: infer TParameters }
  ? TParameters
  : never

export type OperationResponse<TOperation> = ResponseContent<
  PickSuccessResponse<ResponsesOf<TOperation>>
>

export type OperationRequestBody<TOperation> = BodyContent<RequestBodyOf<TOperation>>

export type OperationPathParams<TOperation> = ParametersOf<TOperation> extends {
  path?: infer TPath
}
  ? TPath
  : never

export type OperationQueryParams<TOperation> = ParametersOf<TOperation> extends {
  query?: infer TQuery
}
  ? TQuery
  : never

export type OperationHeaderParams<TOperation> = ParametersOf<TOperation> extends {
  header?: infer THeader
}
  ? THeader
  : never

export type RequestOptionsBase = {
  signal?: AbortSignal
  headers?: HeadersInit
}
