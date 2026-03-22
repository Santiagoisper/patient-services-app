import type { HttpClient, PathParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/provideraggregator.ts'

export type GetProvidersAggregatorProviderIdMedicalservicesOperation = paths["/providers/aggregator/{ProviderId}/medicalservices"]['get']
export type GetProvidersAggregatorProviderIdMedicalservicesResponse = OperationResponse<GetProvidersAggregatorProviderIdMedicalservicesOperation>
export type GetProvidersAggregatorProviderIdMedicalservicesPathParams = OperationPathParams<GetProvidersAggregatorProviderIdMedicalservicesOperation>
export type GetProvidersAggregatorProviderIdMedicalservicesArgs = RequestOptionsBase & {
  path: GetProvidersAggregatorProviderIdMedicalservicesPathParams
}

export type GetProvidersAggregatorMedicalservicesProviderMedicalServiceIdOperation = paths["/providers/aggregator/medicalservices/{ProviderMedicalServiceId}"]['get']
export type GetProvidersAggregatorMedicalservicesProviderMedicalServiceIdResponse = OperationResponse<GetProvidersAggregatorMedicalservicesProviderMedicalServiceIdOperation>
export type GetProvidersAggregatorMedicalservicesProviderMedicalServiceIdPathParams = OperationPathParams<GetProvidersAggregatorMedicalservicesProviderMedicalServiceIdOperation>
export type GetProvidersAggregatorMedicalservicesProviderMedicalServiceIdArgs = RequestOptionsBase & {
  path: GetProvidersAggregatorMedicalservicesProviderMedicalServiceIdPathParams
}

export type PostProvidersAggregatorMedicalservicesOperation = paths["/providers/aggregator/medicalservices"]['post']
export type PostProvidersAggregatorMedicalservicesResponse = OperationResponse<PostProvidersAggregatorMedicalservicesOperation>
export type PostProvidersAggregatorMedicalservicesBody = OperationRequestBody<PostProvidersAggregatorMedicalservicesOperation>
export type PostProvidersAggregatorMedicalservicesArgs = RequestOptionsBase & {
  body: PostProvidersAggregatorMedicalservicesBody
}

export type GetProvidersAggregatorProviderIdPricelistsOperation = paths["/providers/aggregator/{ProviderId}/pricelists"]['get']
export type GetProvidersAggregatorProviderIdPricelistsResponse = OperationResponse<GetProvidersAggregatorProviderIdPricelistsOperation>
export type GetProvidersAggregatorProviderIdPricelistsPathParams = OperationPathParams<GetProvidersAggregatorProviderIdPricelistsOperation>
export type GetProvidersAggregatorProviderIdPricelistsArgs = RequestOptionsBase & {
  path: GetProvidersAggregatorProviderIdPricelistsPathParams
}

export type GetProvidersAggregatorPricelistsProviderPriceListIdOperation = paths["/providers/aggregator/pricelists/{ProviderPriceListId}"]['get']
export type GetProvidersAggregatorPricelistsProviderPriceListIdResponse = OperationResponse<GetProvidersAggregatorPricelistsProviderPriceListIdOperation>
export type GetProvidersAggregatorPricelistsProviderPriceListIdPathParams = OperationPathParams<GetProvidersAggregatorPricelistsProviderPriceListIdOperation>
export type GetProvidersAggregatorPricelistsProviderPriceListIdArgs = RequestOptionsBase & {
  path: GetProvidersAggregatorPricelistsProviderPriceListIdPathParams
}

export type GetProvidersAggregatorProviderIdPricelistsPriceListIdOperation = paths["/providers/aggregator/{ProviderId}/pricelists/{PriceListId}"]['get']
export type GetProvidersAggregatorProviderIdPricelistsPriceListIdResponse = OperationResponse<GetProvidersAggregatorProviderIdPricelistsPriceListIdOperation>
export type GetProvidersAggregatorProviderIdPricelistsPriceListIdPathParams = OperationPathParams<GetProvidersAggregatorProviderIdPricelistsPriceListIdOperation>
export type GetProvidersAggregatorProviderIdPricelistsPriceListIdArgs = RequestOptionsBase & {
  path: GetProvidersAggregatorProviderIdPricelistsPriceListIdPathParams
}

export type PostProvidersAggregatorPricelistOperation = paths["/providers/aggregator/pricelist"]['post']
export type PostProvidersAggregatorPricelistResponse = OperationResponse<PostProvidersAggregatorPricelistOperation>
export type PostProvidersAggregatorPricelistBody = OperationRequestBody<PostProvidersAggregatorPricelistOperation>
export type PostProvidersAggregatorPricelistArgs = RequestOptionsBase & {
  body: PostProvidersAggregatorPricelistBody
}

export type GetProvidersAggregatorPricelistProviderPriceListIdCloneOperation = paths["/providers/aggregator/pricelist/{ProviderPriceListId}/clone"]['get']
export type GetProvidersAggregatorPricelistProviderPriceListIdCloneResponse = OperationResponse<GetProvidersAggregatorPricelistProviderPriceListIdCloneOperation>
export type GetProvidersAggregatorPricelistProviderPriceListIdClonePathParams = OperationPathParams<GetProvidersAggregatorPricelistProviderPriceListIdCloneOperation>
export type GetProvidersAggregatorPricelistProviderPriceListIdCloneArgs = RequestOptionsBase & {
  path: GetProvidersAggregatorPricelistProviderPriceListIdClonePathParams
}

export function createProvideraggregatorApi(client: HttpClient) {
  return {
    getMedicalServicesByProviderId(args: GetProvidersAggregatorProviderIdMedicalservicesArgs) {
      return client.request<GetProvidersAggregatorProviderIdMedicalservicesResponse>({
        method: 'GET',
        path: '/providers/aggregator/{ProviderId}/medicalservices',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProviderMedicalServiceById(args: GetProvidersAggregatorMedicalservicesProviderMedicalServiceIdArgs) {
      return client.request<GetProvidersAggregatorMedicalservicesProviderMedicalServiceIdResponse>({
        method: 'GET',
        path: '/providers/aggregator/medicalservices/{ProviderMedicalServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateMedicalServiceByProviderId(args: PostProvidersAggregatorMedicalservicesArgs) {
      return client.request<PostProvidersAggregatorMedicalservicesResponse>({
        method: 'POST',
        path: '/providers/aggregator/medicalservices',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPriceListByProviderID(args: GetProvidersAggregatorProviderIdPricelistsArgs) {
      return client.request<GetProvidersAggregatorProviderIdPricelistsResponse>({
        method: 'GET',
        path: '/providers/aggregator/{ProviderId}/pricelists',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProviderPriceListById(args: GetProvidersAggregatorPricelistsProviderPriceListIdArgs) {
      return client.request<GetProvidersAggregatorPricelistsProviderPriceListIdResponse>({
        method: 'GET',
        path: '/providers/aggregator/pricelists/{ProviderPriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProviderPriceListByPriceListId(args: GetProvidersAggregatorProviderIdPricelistsPriceListIdArgs) {
      return client.request<GetProvidersAggregatorProviderIdPricelistsPriceListIdResponse>({
        method: 'GET',
        path: '/providers/aggregator/{ProviderId}/pricelists/{PriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createProviderPriceList(args: PostProvidersAggregatorPricelistArgs) {
      return client.request<PostProvidersAggregatorPricelistResponse>({
        method: 'POST',
        path: '/providers/aggregator/pricelist',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    cloneProviderPriceList(args: GetProvidersAggregatorPricelistProviderPriceListIdCloneArgs) {
      return client.request<GetProvidersAggregatorPricelistProviderPriceListIdCloneResponse>({
        method: 'GET',
        path: '/providers/aggregator/pricelist/{ProviderPriceListId}/clone',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
