import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/tenantpricelists.ts'

export type GetTenantPricelistsOperation = paths["/tenant/pricelists"]['get']
export type GetTenantPricelistsResponse = OperationResponse<GetTenantPricelistsOperation>
export type GetTenantPricelistsArgs = RequestOptionsBase & {
}

export type PostTenantPricelistsOperation = paths["/tenant/pricelists"]['post']
export type PostTenantPricelistsResponse = OperationResponse<PostTenantPricelistsOperation>
export type PostTenantPricelistsBody = OperationRequestBody<PostTenantPricelistsOperation>
export type PostTenantPricelistsArgs = RequestOptionsBase & {
  body: PostTenantPricelistsBody
}

export type PutTenantPricelistsOperation = paths["/tenant/pricelists"]['put']
export type PutTenantPricelistsResponse = OperationResponse<PutTenantPricelistsOperation>
export type PutTenantPricelistsBody = OperationRequestBody<PutTenantPricelistsOperation>
export type PutTenantPricelistsArgs = RequestOptionsBase & {
  body: PutTenantPricelistsBody
}

export type GetTenantPricelistsActiveOperation = paths["/tenant/pricelists/active"]['get']
export type GetTenantPricelistsActiveResponse = OperationResponse<GetTenantPricelistsActiveOperation>
export type GetTenantPricelistsActiveQueryParams = OperationQueryParams<GetTenantPricelistsActiveOperation>
export type GetTenantPricelistsActiveArgs = RequestOptionsBase & {
  query?: GetTenantPricelistsActiveQueryParams
}

export type GetTenantPricelistsTenantPriceListIdOperation = paths["/tenant/pricelists/{TenantPriceListId}"]['get']
export type GetTenantPricelistsTenantPriceListIdResponse = OperationResponse<GetTenantPricelistsTenantPriceListIdOperation>
export type GetTenantPricelistsTenantPriceListIdPathParams = OperationPathParams<GetTenantPricelistsTenantPriceListIdOperation>
export type GetTenantPricelistsTenantPriceListIdArgs = RequestOptionsBase & {
  path: GetTenantPricelistsTenantPriceListIdPathParams
}

export type DeleteTenantPricelistsTenantPriceListIdOperation = paths["/tenant/pricelists/{TenantPriceListId}"]['delete']
export type DeleteTenantPricelistsTenantPriceListIdResponse = OperationResponse<DeleteTenantPricelistsTenantPriceListIdOperation>
export type DeleteTenantPricelistsTenantPriceListIdPathParams = OperationPathParams<DeleteTenantPricelistsTenantPriceListIdOperation>
export type DeleteTenantPricelistsTenantPriceListIdArgs = RequestOptionsBase & {
  path: DeleteTenantPricelistsTenantPriceListIdPathParams
}

export type PutTenantPricelistsTenantPriceListIdValiditystartOperation = paths["/tenant/pricelists/{TenantPriceListId}/validitystart"]['put']
export type PutTenantPricelistsTenantPriceListIdValiditystartResponse = OperationResponse<PutTenantPricelistsTenantPriceListIdValiditystartOperation>
export type PutTenantPricelistsTenantPriceListIdValiditystartPathParams = OperationPathParams<PutTenantPricelistsTenantPriceListIdValiditystartOperation>
export type PutTenantPricelistsTenantPriceListIdValiditystartBody = OperationRequestBody<PutTenantPricelistsTenantPriceListIdValiditystartOperation>
export type PutTenantPricelistsTenantPriceListIdValiditystartArgs = RequestOptionsBase & {
  path: PutTenantPricelistsTenantPriceListIdValiditystartPathParams
  body: PutTenantPricelistsTenantPriceListIdValiditystartBody
}

export type PutTenantPricelistsTenantPriceListIdValidityendOperation = paths["/tenant/pricelists/{TenantPriceListId}/validityend"]['put']
export type PutTenantPricelistsTenantPriceListIdValidityendResponse = OperationResponse<PutTenantPricelistsTenantPriceListIdValidityendOperation>
export type PutTenantPricelistsTenantPriceListIdValidityendPathParams = OperationPathParams<PutTenantPricelistsTenantPriceListIdValidityendOperation>
export type PutTenantPricelistsTenantPriceListIdValidityendBody = OperationRequestBody<PutTenantPricelistsTenantPriceListIdValidityendOperation>
export type PutTenantPricelistsTenantPriceListIdValidityendArgs = RequestOptionsBase & {
  path: PutTenantPricelistsTenantPriceListIdValidityendPathParams
  body: PutTenantPricelistsTenantPriceListIdValidityendBody
}

export function createTenantpricelistsApi(client: HttpClient) {
  return {
    getTenantPriceLists(args: GetTenantPricelistsArgs = {}) {
      return client.request<GetTenantPricelistsResponse>({
        method: 'GET',
        path: '/tenant/pricelists',
        headers: args.headers,
        signal: args.signal,
      })
    },
    createTenantPriceList(args: PostTenantPricelistsArgs) {
      return client.request<PostTenantPricelistsResponse>({
        method: 'POST',
        path: '/tenant/pricelists',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateTenantPriceList(args: PutTenantPricelistsArgs) {
      return client.request<PutTenantPricelistsResponse>({
        method: 'PUT',
        path: '/tenant/pricelists',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getActiveTenantPriceLists(args: GetTenantPricelistsActiveArgs) {
      return client.request<GetTenantPricelistsActiveResponse>({
        method: 'GET',
        path: '/tenant/pricelists/active',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getTenantPriceListById(args: GetTenantPricelistsTenantPriceListIdArgs) {
      return client.request<GetTenantPricelistsTenantPriceListIdResponse>({
        method: 'GET',
        path: '/tenant/pricelists/{TenantPriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteTenantPriceList(args: DeleteTenantPricelistsTenantPriceListIdArgs) {
      return client.request<DeleteTenantPricelistsTenantPriceListIdResponse>({
        method: 'DELETE',
        path: '/tenant/pricelists/{TenantPriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    setValidityStartTenantPriceList(args: PutTenantPricelistsTenantPriceListIdValiditystartArgs) {
      return client.request<PutTenantPricelistsTenantPriceListIdValiditystartResponse>({
        method: 'PUT',
        path: '/tenant/pricelists/{TenantPriceListId}/validitystart',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    setValidityEndTenantPriceList(args: PutTenantPricelistsTenantPriceListIdValidityendArgs) {
      return client.request<PutTenantPricelistsTenantPriceListIdValidityendResponse>({
        method: 'PUT',
        path: '/tenant/pricelists/{TenantPriceListId}/validityend',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
