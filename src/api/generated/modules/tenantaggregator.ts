import type { HttpClient, PathParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/tenantaggregator.ts'

export type GetTenantAggregatorInfoOperation = paths["/tenant/aggregator/info"]['get']
export type GetTenantAggregatorInfoResponse = OperationResponse<GetTenantAggregatorInfoOperation>
export type GetTenantAggregatorInfoArgs = RequestOptionsBase & {
}

export type GetTenantAggregatorPricelistsOperation = paths["/tenant/aggregator/pricelists"]['get']
export type GetTenantAggregatorPricelistsResponse = OperationResponse<GetTenantAggregatorPricelistsOperation>
export type GetTenantAggregatorPricelistsArgs = RequestOptionsBase & {
}

export type PostTenantAggregatorPricelistsOperation = paths["/tenant/aggregator/pricelists"]['post']
export type PostTenantAggregatorPricelistsResponse = OperationResponse<PostTenantAggregatorPricelistsOperation>
export type PostTenantAggregatorPricelistsBody = OperationRequestBody<PostTenantAggregatorPricelistsOperation>
export type PostTenantAggregatorPricelistsArgs = RequestOptionsBase & {
  body: PostTenantAggregatorPricelistsBody
}

export type PutTenantAggregatorPricelistsOperation = paths["/tenant/aggregator/pricelists"]['put']
export type PutTenantAggregatorPricelistsResponse = OperationResponse<PutTenantAggregatorPricelistsOperation>
export type PutTenantAggregatorPricelistsBody = OperationRequestBody<PutTenantAggregatorPricelistsOperation>
export type PutTenantAggregatorPricelistsArgs = RequestOptionsBase & {
  body: PutTenantAggregatorPricelistsBody
}

export type GetTenantAggregatorPricelistsTenantPriceListIdOperation = paths["/tenant/aggregator/pricelists/{TenantPriceListId}"]['get']
export type GetTenantAggregatorPricelistsTenantPriceListIdResponse = OperationResponse<GetTenantAggregatorPricelistsTenantPriceListIdOperation>
export type GetTenantAggregatorPricelistsTenantPriceListIdPathParams = OperationPathParams<GetTenantAggregatorPricelistsTenantPriceListIdOperation>
export type GetTenantAggregatorPricelistsTenantPriceListIdArgs = RequestOptionsBase & {
  path: GetTenantAggregatorPricelistsTenantPriceListIdPathParams
}

export type GetTenantAggregatorPricelistTenantPriceListIdCloneOperation = paths["/tenant/aggregator/pricelist/{TenantPriceListId}/clone"]['get']
export type GetTenantAggregatorPricelistTenantPriceListIdCloneResponse = OperationResponse<GetTenantAggregatorPricelistTenantPriceListIdCloneOperation>
export type GetTenantAggregatorPricelistTenantPriceListIdClonePathParams = OperationPathParams<GetTenantAggregatorPricelistTenantPriceListIdCloneOperation>
export type GetTenantAggregatorPricelistTenantPriceListIdCloneArgs = RequestOptionsBase & {
  path: GetTenantAggregatorPricelistTenantPriceListIdClonePathParams
}

export function createTenantaggregatorApi(client: HttpClient) {
  return {
    getTenantAggregatorInfo(args: GetTenantAggregatorInfoArgs = {}) {
      return client.request<GetTenantAggregatorInfoResponse>({
        method: 'GET',
        path: '/tenant/aggregator/info',
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPriceListByTenant(args: GetTenantAggregatorPricelistsArgs = {}) {
      return client.request<GetTenantAggregatorPricelistsResponse>({
        method: 'GET',
        path: '/tenant/aggregator/pricelists',
        headers: args.headers,
        signal: args.signal,
      })
    },
    createTenantPriceList(args: PostTenantAggregatorPricelistsArgs) {
      return client.request<PostTenantAggregatorPricelistsResponse>({
        method: 'POST',
        path: '/tenant/aggregator/pricelists',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateTenantPriceList(args: PutTenantAggregatorPricelistsArgs) {
      return client.request<PutTenantAggregatorPricelistsResponse>({
        method: 'PUT',
        path: '/tenant/aggregator/pricelists',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getTenantPriceListById(args: GetTenantAggregatorPricelistsTenantPriceListIdArgs) {
      return client.request<GetTenantAggregatorPricelistsTenantPriceListIdResponse>({
        method: 'GET',
        path: '/tenant/aggregator/pricelists/{TenantPriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    cloneTenantPriceList(args: GetTenantAggregatorPricelistTenantPriceListIdCloneArgs) {
      return client.request<GetTenantAggregatorPricelistTenantPriceListIdCloneResponse>({
        method: 'GET',
        path: '/tenant/aggregator/pricelist/{TenantPriceListId}/clone',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
