import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/agreements.ts'

export type GetAgreementsServicesAgreementServiceIdDetailsOperation = paths["/agreements/services/{AgreementServiceId}/details"]['get']
export type GetAgreementsServicesAgreementServiceIdDetailsResponse = OperationResponse<GetAgreementsServicesAgreementServiceIdDetailsOperation>
export type GetAgreementsServicesAgreementServiceIdDetailsPathParams = OperationPathParams<GetAgreementsServicesAgreementServiceIdDetailsOperation>
export type GetAgreementsServicesAgreementServiceIdDetailsQueryParams = OperationQueryParams<GetAgreementsServicesAgreementServiceIdDetailsOperation>
export type GetAgreementsServicesAgreementServiceIdDetailsArgs = RequestOptionsBase & {
  path: GetAgreementsServicesAgreementServiceIdDetailsPathParams
  query?: GetAgreementsServicesAgreementServiceIdDetailsQueryParams
}

export type GetAgreementsServicesDetailsAgreementServiceDetailIdOperation = paths["/agreements/services/details/{AgreementServiceDetailId}"]['get']
export type GetAgreementsServicesDetailsAgreementServiceDetailIdResponse = OperationResponse<GetAgreementsServicesDetailsAgreementServiceDetailIdOperation>
export type GetAgreementsServicesDetailsAgreementServiceDetailIdPathParams = OperationPathParams<GetAgreementsServicesDetailsAgreementServiceDetailIdOperation>
export type GetAgreementsServicesDetailsAgreementServiceDetailIdArgs = RequestOptionsBase & {
  path: GetAgreementsServicesDetailsAgreementServiceDetailIdPathParams
}

export type GetAgreementsAgreementIdServicesMedicalServiceIdDetailsInsurancePlanIdOperation = paths["/agreements/{AgreementId}/services/{MedicalServiceId}/details/{InsurancePlanId}"]['get']
export type GetAgreementsAgreementIdServicesMedicalServiceIdDetailsInsurancePlanIdResponse = OperationResponse<GetAgreementsAgreementIdServicesMedicalServiceIdDetailsInsurancePlanIdOperation>
export type GetAgreementsAgreementIdServicesMedicalServiceIdDetailsInsurancePlanIdPathParams = OperationPathParams<GetAgreementsAgreementIdServicesMedicalServiceIdDetailsInsurancePlanIdOperation>
export type GetAgreementsAgreementIdServicesMedicalServiceIdDetailsInsurancePlanIdArgs = RequestOptionsBase & {
  path: GetAgreementsAgreementIdServicesMedicalServiceIdDetailsInsurancePlanIdPathParams
}

export type PostAgreementsServicesDetailsOperation = paths["/agreements/services/details"]['post']
export type PostAgreementsServicesDetailsResponse = OperationResponse<PostAgreementsServicesDetailsOperation>
export type PostAgreementsServicesDetailsBody = OperationRequestBody<PostAgreementsServicesDetailsOperation>
export type PostAgreementsServicesDetailsArgs = RequestOptionsBase & {
  body: PostAgreementsServicesDetailsBody
}

export type PutAgreementsServicesDetailsOperation = paths["/agreements/services/details"]['put']
export type PutAgreementsServicesDetailsResponse = OperationResponse<PutAgreementsServicesDetailsOperation>
export type PutAgreementsServicesDetailsBody = OperationRequestBody<PutAgreementsServicesDetailsOperation>
export type PutAgreementsServicesDetailsArgs = RequestOptionsBase & {
  body: PutAgreementsServicesDetailsBody
}

export type DeleteAgreementsServicesDetailsAgreementServiceDetailsIdOperation = paths["/agreements/services/details/{AgreementServiceDetailsId}"]['delete']
export type DeleteAgreementsServicesDetailsAgreementServiceDetailsIdResponse = OperationResponse<DeleteAgreementsServicesDetailsAgreementServiceDetailsIdOperation>
export type DeleteAgreementsServicesDetailsAgreementServiceDetailsIdPathParams = OperationPathParams<DeleteAgreementsServicesDetailsAgreementServiceDetailsIdOperation>
export type DeleteAgreementsServicesDetailsAgreementServiceDetailsIdBody = OperationRequestBody<DeleteAgreementsServicesDetailsAgreementServiceDetailsIdOperation>
export type DeleteAgreementsServicesDetailsAgreementServiceDetailsIdArgs = RequestOptionsBase & {
  path: DeleteAgreementsServicesDetailsAgreementServiceDetailsIdPathParams
  body: DeleteAgreementsServicesDetailsAgreementServiceDetailsIdBody
}

export type GetAgreementsAgreementIdServicesOperation = paths["/agreements/{AgreementId}/services"]['get']
export type GetAgreementsAgreementIdServicesResponse = OperationResponse<GetAgreementsAgreementIdServicesOperation>
export type GetAgreementsAgreementIdServicesPathParams = OperationPathParams<GetAgreementsAgreementIdServicesOperation>
export type GetAgreementsAgreementIdServicesQueryParams = OperationQueryParams<GetAgreementsAgreementIdServicesOperation>
export type GetAgreementsAgreementIdServicesArgs = RequestOptionsBase & {
  path: GetAgreementsAgreementIdServicesPathParams
  query?: GetAgreementsAgreementIdServicesQueryParams
}

export type GetAgreementsServicesAgreementServiceIdOperation = paths["/agreements/services/{AgreementServiceId}"]['get']
export type GetAgreementsServicesAgreementServiceIdResponse = OperationResponse<GetAgreementsServicesAgreementServiceIdOperation>
export type GetAgreementsServicesAgreementServiceIdPathParams = OperationPathParams<GetAgreementsServicesAgreementServiceIdOperation>
export type GetAgreementsServicesAgreementServiceIdArgs = RequestOptionsBase & {
  path: GetAgreementsServicesAgreementServiceIdPathParams
}

export type DeleteAgreementsServicesAgreementServiceIdOperation = paths["/agreements/services/{AgreementServiceId}"]['delete']
export type DeleteAgreementsServicesAgreementServiceIdResponse = OperationResponse<DeleteAgreementsServicesAgreementServiceIdOperation>
export type DeleteAgreementsServicesAgreementServiceIdPathParams = OperationPathParams<DeleteAgreementsServicesAgreementServiceIdOperation>
export type DeleteAgreementsServicesAgreementServiceIdArgs = RequestOptionsBase & {
  path: DeleteAgreementsServicesAgreementServiceIdPathParams
}

export type PostAgreementsServicesOperation = paths["/agreements/services"]['post']
export type PostAgreementsServicesResponse = OperationResponse<PostAgreementsServicesOperation>
export type PostAgreementsServicesBody = OperationRequestBody<PostAgreementsServicesOperation>
export type PostAgreementsServicesArgs = RequestOptionsBase & {
  body: PostAgreementsServicesBody
}

export type PutAgreementsServicesOperation = paths["/agreements/services"]['put']
export type PutAgreementsServicesResponse = OperationResponse<PutAgreementsServicesOperation>
export type PutAgreementsServicesBody = OperationRequestBody<PutAgreementsServicesOperation>
export type PutAgreementsServicesArgs = RequestOptionsBase & {
  body: PutAgreementsServicesBody
}

export type PutAgreementsServicesAgreementServiceIdStatusNewStatusOperation = paths["/agreements/services/{AgreementServiceId}/status/{newStatus}"]['put']
export type PutAgreementsServicesAgreementServiceIdStatusNewStatusResponse = OperationResponse<PutAgreementsServicesAgreementServiceIdStatusNewStatusOperation>
export type PutAgreementsServicesAgreementServiceIdStatusNewStatusPathParams = OperationPathParams<PutAgreementsServicesAgreementServiceIdStatusNewStatusOperation>
export type PutAgreementsServicesAgreementServiceIdStatusNewStatusArgs = RequestOptionsBase & {
  path: PutAgreementsServicesAgreementServiceIdStatusNewStatusPathParams
}

export type GetAgreementsOperation = paths["/agreements"]['get']
export type GetAgreementsResponse = OperationResponse<GetAgreementsOperation>
export type GetAgreementsQueryParams = OperationQueryParams<GetAgreementsOperation>
export type GetAgreementsArgs = RequestOptionsBase & {
  query?: GetAgreementsQueryParams
}

export type PostAgreementsOperation = paths["/agreements"]['post']
export type PostAgreementsResponse = OperationResponse<PostAgreementsOperation>
export type PostAgreementsBody = OperationRequestBody<PostAgreementsOperation>
export type PostAgreementsArgs = RequestOptionsBase & {
  body: PostAgreementsBody
}

export type PutAgreementsOperation = paths["/agreements"]['put']
export type PutAgreementsResponse = OperationResponse<PutAgreementsOperation>
export type PutAgreementsBody = OperationRequestBody<PutAgreementsOperation>
export type PutAgreementsArgs = RequestOptionsBase & {
  body: PutAgreementsBody
}

export type GetAgreementsAgreementIdOperation = paths["/agreements/{AgreementId}"]['get']
export type GetAgreementsAgreementIdResponse = OperationResponse<GetAgreementsAgreementIdOperation>
export type GetAgreementsAgreementIdPathParams = OperationPathParams<GetAgreementsAgreementIdOperation>
export type GetAgreementsAgreementIdArgs = RequestOptionsBase & {
  path: GetAgreementsAgreementIdPathParams
}

export type GetAgreementsAgreementIdActivePriceListReferecenceDateOperation = paths["/agreements/{AgreementId}/activePriceList/{ReferecenceDate}"]['get']
export type GetAgreementsAgreementIdActivePriceListReferecenceDateResponse = OperationResponse<GetAgreementsAgreementIdActivePriceListReferecenceDateOperation>
export type GetAgreementsAgreementIdActivePriceListReferecenceDatePathParams = OperationPathParams<GetAgreementsAgreementIdActivePriceListReferecenceDateOperation>
export type GetAgreementsAgreementIdActivePriceListReferecenceDateArgs = RequestOptionsBase & {
  path: GetAgreementsAgreementIdActivePriceListReferecenceDatePathParams
}

export type GetAgreementsAgreementIdPriceListOperation = paths["/agreements/{AgreementId}/PriceList"]['get']
export type GetAgreementsAgreementIdPriceListResponse = OperationResponse<GetAgreementsAgreementIdPriceListOperation>
export type GetAgreementsAgreementIdPriceListPathParams = OperationPathParams<GetAgreementsAgreementIdPriceListOperation>
export type GetAgreementsAgreementIdPriceListQueryParams = OperationQueryParams<GetAgreementsAgreementIdPriceListOperation>
export type GetAgreementsAgreementIdPriceListArgs = RequestOptionsBase & {
  path: GetAgreementsAgreementIdPriceListPathParams
  query?: GetAgreementsAgreementIdPriceListQueryParams
}

export type GetAgreementsPriceListAgreementPriceListIdOperation = paths["/agreements/PriceList/{AgreementPriceListId}"]['get']
export type GetAgreementsPriceListAgreementPriceListIdResponse = OperationResponse<GetAgreementsPriceListAgreementPriceListIdOperation>
export type GetAgreementsPriceListAgreementPriceListIdPathParams = OperationPathParams<GetAgreementsPriceListAgreementPriceListIdOperation>
export type GetAgreementsPriceListAgreementPriceListIdArgs = RequestOptionsBase & {
  path: GetAgreementsPriceListAgreementPriceListIdPathParams
}

export type DeleteAgreementsPriceListAgreementPriceListIdOperation = paths["/agreements/PriceList/{AgreementPriceListId}"]['delete']
export type DeleteAgreementsPriceListAgreementPriceListIdResponse = OperationResponse<DeleteAgreementsPriceListAgreementPriceListIdOperation>
export type DeleteAgreementsPriceListAgreementPriceListIdPathParams = OperationPathParams<DeleteAgreementsPriceListAgreementPriceListIdOperation>
export type DeleteAgreementsPriceListAgreementPriceListIdArgs = RequestOptionsBase & {
  path: DeleteAgreementsPriceListAgreementPriceListIdPathParams
}

export type PostAgreementsPriceListOperation = paths["/agreements/PriceList"]['post']
export type PostAgreementsPriceListResponse = OperationResponse<PostAgreementsPriceListOperation>
export type PostAgreementsPriceListBody = OperationRequestBody<PostAgreementsPriceListOperation>
export type PostAgreementsPriceListArgs = RequestOptionsBase & {
  body: PostAgreementsPriceListBody
}

export type PostAgreementsPriceListAgreementPriceListIdStartvalidityOperation = paths["/agreements/PriceList/{AgreementPriceListId}/startvalidity"]['post']
export type PostAgreementsPriceListAgreementPriceListIdStartvalidityResponse = OperationResponse<PostAgreementsPriceListAgreementPriceListIdStartvalidityOperation>
export type PostAgreementsPriceListAgreementPriceListIdStartvalidityPathParams = OperationPathParams<PostAgreementsPriceListAgreementPriceListIdStartvalidityOperation>
export type PostAgreementsPriceListAgreementPriceListIdStartvalidityBody = OperationRequestBody<PostAgreementsPriceListAgreementPriceListIdStartvalidityOperation>
export type PostAgreementsPriceListAgreementPriceListIdStartvalidityArgs = RequestOptionsBase & {
  path: PostAgreementsPriceListAgreementPriceListIdStartvalidityPathParams
  body: PostAgreementsPriceListAgreementPriceListIdStartvalidityBody
}

export type PostAgreementsPriceListAgreementPriceListIdEndvalidityOperation = paths["/agreements/PriceList/{AgreementPriceListId}/endvalidity"]['post']
export type PostAgreementsPriceListAgreementPriceListIdEndvalidityResponse = OperationResponse<PostAgreementsPriceListAgreementPriceListIdEndvalidityOperation>
export type PostAgreementsPriceListAgreementPriceListIdEndvalidityPathParams = OperationPathParams<PostAgreementsPriceListAgreementPriceListIdEndvalidityOperation>
export type PostAgreementsPriceListAgreementPriceListIdEndvalidityBody = OperationRequestBody<PostAgreementsPriceListAgreementPriceListIdEndvalidityOperation>
export type PostAgreementsPriceListAgreementPriceListIdEndvalidityArgs = RequestOptionsBase & {
  path: PostAgreementsPriceListAgreementPriceListIdEndvalidityPathParams
  body: PostAgreementsPriceListAgreementPriceListIdEndvalidityBody
}

export type PostAgreementsPriceListAgreementPriceListIdExpireOperation = paths["/agreements/PriceList/{AgreementPriceListId}/expire"]['post']
export type PostAgreementsPriceListAgreementPriceListIdExpireResponse = OperationResponse<PostAgreementsPriceListAgreementPriceListIdExpireOperation>
export type PostAgreementsPriceListAgreementPriceListIdExpirePathParams = OperationPathParams<PostAgreementsPriceListAgreementPriceListIdExpireOperation>
export type PostAgreementsPriceListAgreementPriceListIdExpireArgs = RequestOptionsBase & {
  path: PostAgreementsPriceListAgreementPriceListIdExpirePathParams
}

export type DeleteAgreementsAgreementIdOperation = paths["/agreements/{agreementId}"]['delete']
export type DeleteAgreementsAgreementIdResponse = OperationResponse<DeleteAgreementsAgreementIdOperation>
export type DeleteAgreementsAgreementIdPathParams = OperationPathParams<DeleteAgreementsAgreementIdOperation>
export type DeleteAgreementsAgreementIdArgs = RequestOptionsBase & {
  path: DeleteAgreementsAgreementIdPathParams
}

export function createAgreementsApi(client: HttpClient) {
  return {
    getAgreementServicesDetails(args: GetAgreementsServicesAgreementServiceIdDetailsArgs) {
      return client.request<GetAgreementsServicesAgreementServiceIdDetailsResponse>({
        method: 'GET',
        path: '/agreements/services/{AgreementServiceId}/details',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgreementServicesDetail(args: GetAgreementsServicesDetailsAgreementServiceDetailIdArgs) {
      return client.request<GetAgreementsServicesDetailsAgreementServiceDetailIdResponse>({
        method: 'GET',
        path: '/agreements/services/details/{AgreementServiceDetailId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgreementServicesDetailByAgreementServiceAndPlan(args: GetAgreementsAgreementIdServicesMedicalServiceIdDetailsInsurancePlanIdArgs) {
      return client.request<GetAgreementsAgreementIdServicesMedicalServiceIdDetailsInsurancePlanIdResponse>({
        method: 'GET',
        path: '/agreements/{AgreementId}/services/{MedicalServiceId}/details/{InsurancePlanId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createAgreementServicesDetail(args: PostAgreementsServicesDetailsArgs) {
      return client.request<PostAgreementsServicesDetailsResponse>({
        method: 'POST',
        path: '/agreements/services/details',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateAgreementServicesDetail(args: PutAgreementsServicesDetailsArgs) {
      return client.request<PutAgreementsServicesDetailsResponse>({
        method: 'PUT',
        path: '/agreements/services/details',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteAgreementServicesDetail(args: DeleteAgreementsServicesDetailsAgreementServiceDetailsIdArgs) {
      return client.request<DeleteAgreementsServicesDetailsAgreementServiceDetailsIdResponse>({
        method: 'DELETE',
        path: '/agreements/services/details/{AgreementServiceDetailsId}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgreementServices(args: GetAgreementsAgreementIdServicesArgs) {
      return client.request<GetAgreementsAgreementIdServicesResponse>({
        method: 'GET',
        path: '/agreements/{AgreementId}/services',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgreementServiceById(args: GetAgreementsServicesAgreementServiceIdArgs) {
      return client.request<GetAgreementsServicesAgreementServiceIdResponse>({
        method: 'GET',
        path: '/agreements/services/{AgreementServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteAgreementService(args: DeleteAgreementsServicesAgreementServiceIdArgs) {
      return client.request<DeleteAgreementsServicesAgreementServiceIdResponse>({
        method: 'DELETE',
        path: '/agreements/services/{AgreementServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createAgreementService(args: PostAgreementsServicesArgs) {
      return client.request<PostAgreementsServicesResponse>({
        method: 'POST',
        path: '/agreements/services',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateAgreementService(args: PutAgreementsServicesArgs) {
      return client.request<PutAgreementsServicesResponse>({
        method: 'PUT',
        path: '/agreements/services',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    changeStatusAgreementService(args: PutAgreementsServicesAgreementServiceIdStatusNewStatusArgs) {
      return client.request<PutAgreementsServicesAgreementServiceIdStatusNewStatusResponse>({
        method: 'PUT',
        path: '/agreements/services/{AgreementServiceId}/status/{newStatus}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMedicalInsuranceAgreements(args: GetAgreementsArgs) {
      return client.request<GetAgreementsResponse>({
        method: 'GET',
        path: '/agreements',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addAgreement(args: PostAgreementsArgs) {
      return client.request<PostAgreementsResponse>({
        method: 'POST',
        path: '/agreements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateAgreement(args: PutAgreementsArgs) {
      return client.request<PutAgreementsResponse>({
        method: 'PUT',
        path: '/agreements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgreementById(args: GetAgreementsAgreementIdArgs) {
      return client.request<GetAgreementsAgreementIdResponse>({
        method: 'GET',
        path: '/agreements/{AgreementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getActivePriceListByAgreementId(args: GetAgreementsAgreementIdActivePriceListReferecenceDateArgs) {
      return client.request<GetAgreementsAgreementIdActivePriceListReferecenceDateResponse>({
        method: 'GET',
        path: '/agreements/{AgreementId}/activePriceList/{ReferecenceDate}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPriceListByAgreement(args: GetAgreementsAgreementIdPriceListArgs) {
      return client.request<GetAgreementsAgreementIdPriceListResponse>({
        method: 'GET',
        path: '/agreements/{AgreementId}/PriceList',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgreementPriceListById(args: GetAgreementsPriceListAgreementPriceListIdArgs) {
      return client.request<GetAgreementsPriceListAgreementPriceListIdResponse>({
        method: 'GET',
        path: '/agreements/PriceList/{AgreementPriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteAgreementPriceListById(args: DeleteAgreementsPriceListAgreementPriceListIdArgs) {
      return client.request<DeleteAgreementsPriceListAgreementPriceListIdResponse>({
        method: 'DELETE',
        path: '/agreements/PriceList/{AgreementPriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addAgreementPriceListById(args: PostAgreementsPriceListArgs) {
      return client.request<PostAgreementsPriceListResponse>({
        method: 'POST',
        path: '/agreements/PriceList',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    setStartValidityAgreementPriceList(args: PostAgreementsPriceListAgreementPriceListIdStartvalidityArgs) {
      return client.request<PostAgreementsPriceListAgreementPriceListIdStartvalidityResponse>({
        method: 'POST',
        path: '/agreements/PriceList/{AgreementPriceListId}/startvalidity',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    setEndValidityAgreementPriceList(args: PostAgreementsPriceListAgreementPriceListIdEndvalidityArgs) {
      return client.request<PostAgreementsPriceListAgreementPriceListIdEndvalidityResponse>({
        method: 'POST',
        path: '/agreements/PriceList/{AgreementPriceListId}/endvalidity',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    expireAgreementPriceList(args: PostAgreementsPriceListAgreementPriceListIdExpireArgs) {
      return client.request<PostAgreementsPriceListAgreementPriceListIdExpireResponse>({
        method: 'POST',
        path: '/agreements/PriceList/{AgreementPriceListId}/expire',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteAgreement(args: DeleteAgreementsAgreementIdArgs) {
      return client.request<DeleteAgreementsAgreementIdResponse>({
        method: 'DELETE',
        path: '/agreements/{agreementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
