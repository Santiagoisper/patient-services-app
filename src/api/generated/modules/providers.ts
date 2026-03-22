import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/providers.ts'

export type GetProvidersOperation = paths["/providers"]['get']
export type GetProvidersResponse = OperationResponse<GetProvidersOperation>
export type GetProvidersQueryParams = OperationQueryParams<GetProvidersOperation>
export type GetProvidersArgs = RequestOptionsBase & {
  query?: GetProvidersQueryParams
}

export type PostProvidersOperation = paths["/providers"]['post']
export type PostProvidersResponse = OperationResponse<PostProvidersOperation>
export type PostProvidersBody = OperationRequestBody<PostProvidersOperation>
export type PostProvidersArgs = RequestOptionsBase & {
  body: PostProvidersBody
}

export type PutProvidersOperation = paths["/providers"]['put']
export type PutProvidersResponse = OperationResponse<PutProvidersOperation>
export type PutProvidersBody = OperationRequestBody<PutProvidersOperation>
export type PutProvidersArgs = RequestOptionsBase & {
  body: PutProvidersBody
}

export type GetProvidersProviderIdOperation = paths["/providers/{ProviderId}"]['get']
export type GetProvidersProviderIdResponse = OperationResponse<GetProvidersProviderIdOperation>
export type GetProvidersProviderIdPathParams = OperationPathParams<GetProvidersProviderIdOperation>
export type GetProvidersProviderIdArgs = RequestOptionsBase & {
  path: GetProvidersProviderIdPathParams
}

export type DeleteProvidersProviderIdOperation = paths["/providers/{ProviderId}"]['delete']
export type DeleteProvidersProviderIdResponse = OperationResponse<DeleteProvidersProviderIdOperation>
export type DeleteProvidersProviderIdPathParams = OperationPathParams<DeleteProvidersProviderIdOperation>
export type DeleteProvidersProviderIdArgs = RequestOptionsBase & {
  path: DeleteProvidersProviderIdPathParams
}

export function createProvidersApi(client: HttpClient) {
  return {
    getAllProviders(args: GetProvidersArgs) {
      return client.request<GetProvidersResponse>({
        method: 'GET',
        path: '/providers',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createProvider(args: PostProvidersArgs) {
      return client.request<PostProvidersResponse>({
        method: 'POST',
        path: '/providers',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateProvider(args: PutProvidersArgs) {
      return client.request<PutProvidersResponse>({
        method: 'PUT',
        path: '/providers',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProviderById(args: GetProvidersProviderIdArgs) {
      return client.request<GetProvidersProviderIdResponse>({
        method: 'GET',
        path: '/providers/{ProviderId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteProvider(args: DeleteProvidersProviderIdArgs) {
      return client.request<DeleteProvidersProviderIdResponse>({
        method: 'DELETE',
        path: '/providers/{ProviderId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
