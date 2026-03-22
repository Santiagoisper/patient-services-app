import type { HttpClient, PathParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/agreementsaggregator.ts'

export type GetAgreementsAggregatorAgreementsAgreementIdOperation = paths["/agreements.aggregator/agreements/{agreementId}"]['get']
export type GetAgreementsAggregatorAgreementsAgreementIdResponse = OperationResponse<GetAgreementsAggregatorAgreementsAgreementIdOperation>
export type GetAgreementsAggregatorAgreementsAgreementIdPathParams = OperationPathParams<GetAgreementsAggregatorAgreementsAgreementIdOperation>
export type GetAgreementsAggregatorAgreementsAgreementIdArgs = RequestOptionsBase & {
  path: GetAgreementsAggregatorAgreementsAgreementIdPathParams
}

export type GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdOperation = paths["/agreements.aggregator/agreements/pricelist/{agreementPriceListId}"]['get']
export type GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdResponse = OperationResponse<GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdOperation>
export type GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdPathParams = OperationPathParams<GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdOperation>
export type GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdArgs = RequestOptionsBase & {
  path: GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdPathParams
}

export type PostAgreementsAggregatorAgreementsPricelistOperation = paths["/agreements.aggregator/agreements/pricelist"]['post']
export type PostAgreementsAggregatorAgreementsPricelistResponse = OperationResponse<PostAgreementsAggregatorAgreementsPricelistOperation>
export type PostAgreementsAggregatorAgreementsPricelistBody = OperationRequestBody<PostAgreementsAggregatorAgreementsPricelistOperation>
export type PostAgreementsAggregatorAgreementsPricelistArgs = RequestOptionsBase & {
  body: PostAgreementsAggregatorAgreementsPricelistBody
}

export type PostAgreementsAggregatorAgreementsPricelistDetailsOperation = paths["/agreements.aggregator/agreements/pricelist/details"]['post']
export type PostAgreementsAggregatorAgreementsPricelistDetailsResponse = OperationResponse<PostAgreementsAggregatorAgreementsPricelistDetailsOperation>
export type PostAgreementsAggregatorAgreementsPricelistDetailsBody = OperationRequestBody<PostAgreementsAggregatorAgreementsPricelistDetailsOperation>
export type PostAgreementsAggregatorAgreementsPricelistDetailsArgs = RequestOptionsBase & {
  body: PostAgreementsAggregatorAgreementsPricelistDetailsBody
}

export type GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdCloneOperation = paths["/agreements.aggregator/agreements/pricelist/{AgreementPriceListId}/clone"]['get']
export type GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdCloneResponse = OperationResponse<GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdCloneOperation>
export type GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdClonePathParams = OperationPathParams<GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdCloneOperation>
export type GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdCloneArgs = RequestOptionsBase & {
  path: GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdClonePathParams
}

export type GetAgreementsAggregatorAgreementsAgreementidMedicalserviceMedicalServiceIdCurrentPriceReferenceDateOperation = paths["/agreements.aggregator/agreements/{agreementid}/medicalservice/{medicalServiceId}/currentPrice/{referenceDate}"]['get']
export type GetAgreementsAggregatorAgreementsAgreementidMedicalserviceMedicalServiceIdCurrentPriceReferenceDateResponse = OperationResponse<GetAgreementsAggregatorAgreementsAgreementidMedicalserviceMedicalServiceIdCurrentPriceReferenceDateOperation>
export type GetAgreementsAggregatorAgreementsAgreementidMedicalserviceMedicalServiceIdCurrentPriceReferenceDatePathParams = OperationPathParams<GetAgreementsAggregatorAgreementsAgreementidMedicalserviceMedicalServiceIdCurrentPriceReferenceDateOperation>
export type GetAgreementsAggregatorAgreementsAgreementidMedicalserviceMedicalServiceIdCurrentPriceReferenceDateArgs = RequestOptionsBase & {
  path: GetAgreementsAggregatorAgreementsAgreementidMedicalserviceMedicalServiceIdCurrentPriceReferenceDatePathParams
}

export type PostAgreementsAggregatorAgreementsPricelistCurrentPriceOperation = paths["/agreements.aggregator/agreements/pricelist/currentPrice"]['post']
export type PostAgreementsAggregatorAgreementsPricelistCurrentPriceResponse = OperationResponse<PostAgreementsAggregatorAgreementsPricelistCurrentPriceOperation>
export type PostAgreementsAggregatorAgreementsPricelistCurrentPriceBody = OperationRequestBody<PostAgreementsAggregatorAgreementsPricelistCurrentPriceOperation>
export type PostAgreementsAggregatorAgreementsPricelistCurrentPriceArgs = RequestOptionsBase & {
  body: PostAgreementsAggregatorAgreementsPricelistCurrentPriceBody
}

export type GetAgreementsAggregatorInfoOperation = paths["/agreements.aggregator/info"]['get']
export type GetAgreementsAggregatorInfoResponse = OperationResponse<GetAgreementsAggregatorInfoOperation>
export type GetAgreementsAggregatorInfoArgs = RequestOptionsBase & {
}

export function createAgreementsaggregatorApi(client: HttpClient) {
  return {
    getAgreementById(args: GetAgreementsAggregatorAgreementsAgreementIdArgs) {
      return client.request<GetAgreementsAggregatorAgreementsAgreementIdResponse>({
        method: 'GET',
        path: '/agreements.aggregator/agreements/{agreementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgreementPriceListById(args: GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdArgs) {
      return client.request<GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdResponse>({
        method: 'GET',
        path: '/agreements.aggregator/agreements/pricelist/{agreementPriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createAgreementPriceList(args: PostAgreementsAggregatorAgreementsPricelistArgs) {
      return client.request<PostAgreementsAggregatorAgreementsPricelistResponse>({
        method: 'POST',
        path: '/agreements.aggregator/agreements/pricelist',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createAgreementPriceListDetails(args: PostAgreementsAggregatorAgreementsPricelistDetailsArgs) {
      return client.request<PostAgreementsAggregatorAgreementsPricelistDetailsResponse>({
        method: 'POST',
        path: '/agreements.aggregator/agreements/pricelist/details',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    cloneAgreementPriceList(args: GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdCloneArgs) {
      return client.request<GetAgreementsAggregatorAgreementsPricelistAgreementPriceListIdCloneResponse>({
        method: 'GET',
        path: '/agreements.aggregator/agreements/pricelist/{AgreementPriceListId}/clone',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getCurrentPrice(args: GetAgreementsAggregatorAgreementsAgreementidMedicalserviceMedicalServiceIdCurrentPriceReferenceDateArgs) {
      return client.request<GetAgreementsAggregatorAgreementsAgreementidMedicalserviceMedicalServiceIdCurrentPriceReferenceDateResponse>({
        method: 'GET',
        path: '/agreements.aggregator/agreements/{agreementid}/medicalservice/{medicalServiceId}/currentPrice/{referenceDate}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getCurrentPriceListByAgreementServiceId(args: PostAgreementsAggregatorAgreementsPricelistCurrentPriceArgs) {
      return client.request<PostAgreementsAggregatorAgreementsPricelistCurrentPriceResponse>({
        method: 'POST',
        path: '/agreements.aggregator/agreements/pricelist/currentPrice',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgreementsAggregatorInfo(args: GetAgreementsAggregatorInfoArgs = {}) {
      return client.request<GetAgreementsAggregatorInfoResponse>({
        method: 'GET',
        path: '/agreements.aggregator/info',
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
