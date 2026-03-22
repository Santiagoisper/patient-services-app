import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/medicalinsurances.ts'

export type GetMedicalinsurancesMedicalInsuranceIdPlansOperation = paths["/medicalinsurances/{medicalInsuranceId}/plans"]['get']
export type GetMedicalinsurancesMedicalInsuranceIdPlansResponse = OperationResponse<GetMedicalinsurancesMedicalInsuranceIdPlansOperation>
export type GetMedicalinsurancesMedicalInsuranceIdPlansPathParams = OperationPathParams<GetMedicalinsurancesMedicalInsuranceIdPlansOperation>
export type GetMedicalinsurancesMedicalInsuranceIdPlansArgs = RequestOptionsBase & {
  path: GetMedicalinsurancesMedicalInsuranceIdPlansPathParams
}

export type GetMedicalinsurancesPlansPlanIdOperation = paths["/medicalinsurances/plans/{planId}"]['get']
export type GetMedicalinsurancesPlansPlanIdResponse = OperationResponse<GetMedicalinsurancesPlansPlanIdOperation>
export type GetMedicalinsurancesPlansPlanIdPathParams = OperationPathParams<GetMedicalinsurancesPlansPlanIdOperation>
export type GetMedicalinsurancesPlansPlanIdArgs = RequestOptionsBase & {
  path: GetMedicalinsurancesPlansPlanIdPathParams
}

export type DeleteMedicalinsurancesPlansPlanIdOperation = paths["/medicalinsurances/plans/{planId}"]['delete']
export type DeleteMedicalinsurancesPlansPlanIdResponse = OperationResponse<DeleteMedicalinsurancesPlansPlanIdOperation>
export type DeleteMedicalinsurancesPlansPlanIdPathParams = OperationPathParams<DeleteMedicalinsurancesPlansPlanIdOperation>
export type DeleteMedicalinsurancesPlansPlanIdArgs = RequestOptionsBase & {
  path: DeleteMedicalinsurancesPlansPlanIdPathParams
}

export type PostMedicalinsurancesPlansOperation = paths["/medicalinsurances/plans"]['post']
export type PostMedicalinsurancesPlansResponse = OperationResponse<PostMedicalinsurancesPlansOperation>
export type PostMedicalinsurancesPlansBody = OperationRequestBody<PostMedicalinsurancesPlansOperation>
export type PostMedicalinsurancesPlansArgs = RequestOptionsBase & {
  body: PostMedicalinsurancesPlansBody
}

export type PutMedicalinsurancesPlansOperation = paths["/medicalinsurances/plans"]['put']
export type PutMedicalinsurancesPlansResponse = OperationResponse<PutMedicalinsurancesPlansOperation>
export type PutMedicalinsurancesPlansBody = OperationRequestBody<PutMedicalinsurancesPlansOperation>
export type PutMedicalinsurancesPlansArgs = RequestOptionsBase & {
  body: PutMedicalinsurancesPlansBody
}

export type GetMedicalinsurancesOperation = paths["/medicalinsurances"]['get']
export type GetMedicalinsurancesResponse = OperationResponse<GetMedicalinsurancesOperation>
export type GetMedicalinsurancesQueryParams = OperationQueryParams<GetMedicalinsurancesOperation>
export type GetMedicalinsurancesArgs = RequestOptionsBase & {
  query?: GetMedicalinsurancesQueryParams
}

export type PostMedicalinsurancesOperation = paths["/medicalinsurances"]['post']
export type PostMedicalinsurancesResponse = OperationResponse<PostMedicalinsurancesOperation>
export type PostMedicalinsurancesBody = OperationRequestBody<PostMedicalinsurancesOperation>
export type PostMedicalinsurancesArgs = RequestOptionsBase & {
  body: PostMedicalinsurancesBody
}

export type PutMedicalinsurancesOperation = paths["/medicalinsurances"]['put']
export type PutMedicalinsurancesResponse = OperationResponse<PutMedicalinsurancesOperation>
export type PutMedicalinsurancesBody = OperationRequestBody<PutMedicalinsurancesOperation>
export type PutMedicalinsurancesArgs = RequestOptionsBase & {
  body: PutMedicalinsurancesBody
}

export type GetMedicalinsurancesMedicalInsuranceIdOperation = paths["/medicalinsurances/{medicalInsuranceId}"]['get']
export type GetMedicalinsurancesMedicalInsuranceIdResponse = OperationResponse<GetMedicalinsurancesMedicalInsuranceIdOperation>
export type GetMedicalinsurancesMedicalInsuranceIdPathParams = OperationPathParams<GetMedicalinsurancesMedicalInsuranceIdOperation>
export type GetMedicalinsurancesMedicalInsuranceIdArgs = RequestOptionsBase & {
  path: GetMedicalinsurancesMedicalInsuranceIdPathParams
}

export type DeleteMedicalinsurancesMedicalInsuranceIdOperation = paths["/medicalinsurances/{medicalInsuranceId}"]['delete']
export type DeleteMedicalinsurancesMedicalInsuranceIdResponse = OperationResponse<DeleteMedicalinsurancesMedicalInsuranceIdOperation>
export type DeleteMedicalinsurancesMedicalInsuranceIdPathParams = OperationPathParams<DeleteMedicalinsurancesMedicalInsuranceIdOperation>
export type DeleteMedicalinsurancesMedicalInsuranceIdArgs = RequestOptionsBase & {
  path: DeleteMedicalinsurancesMedicalInsuranceIdPathParams
}

export type PostMedicalinsurancesEnableagreementsOperation = paths["/medicalinsurances/enableagreements"]['post']
export type PostMedicalinsurancesEnableagreementsResponse = OperationResponse<PostMedicalinsurancesEnableagreementsOperation>
export type PostMedicalinsurancesEnableagreementsQueryParams = OperationQueryParams<PostMedicalinsurancesEnableagreementsOperation>
export type PostMedicalinsurancesEnableagreementsArgs = RequestOptionsBase & {
  query?: PostMedicalinsurancesEnableagreementsQueryParams
}

export type PostMedicalinsurancesDisableagreementsOperation = paths["/medicalinsurances/disableagreements"]['post']
export type PostMedicalinsurancesDisableagreementsResponse = OperationResponse<PostMedicalinsurancesDisableagreementsOperation>
export type PostMedicalinsurancesDisableagreementsQueryParams = OperationQueryParams<PostMedicalinsurancesDisableagreementsOperation>
export type PostMedicalinsurancesDisableagreementsArgs = RequestOptionsBase & {
  query?: PostMedicalinsurancesDisableagreementsQueryParams
}

export function createMedicalinsurancesApi(client: HttpClient) {
  return {
    getMedicalInsurancePlans(args: GetMedicalinsurancesMedicalInsuranceIdPlansArgs) {
      return client.request<GetMedicalinsurancesMedicalInsuranceIdPlansResponse>({
        method: 'GET',
        path: '/medicalinsurances/{medicalInsuranceId}/plans',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMedicalInsurancePlan(args: GetMedicalinsurancesPlansPlanIdArgs) {
      return client.request<GetMedicalinsurancesPlansPlanIdResponse>({
        method: 'GET',
        path: '/medicalinsurances/plans/{planId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteMedicalInsurancePlan(args: DeleteMedicalinsurancesPlansPlanIdArgs) {
      return client.request<DeleteMedicalinsurancesPlansPlanIdResponse>({
        method: 'DELETE',
        path: '/medicalinsurances/plans/{planId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addMedicalInsurancePlan(args: PostMedicalinsurancesPlansArgs) {
      return client.request<PostMedicalinsurancesPlansResponse>({
        method: 'POST',
        path: '/medicalinsurances/plans',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateMedicalInsurancePlan(args: PutMedicalinsurancesPlansArgs) {
      return client.request<PutMedicalinsurancesPlansResponse>({
        method: 'PUT',
        path: '/medicalinsurances/plans',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMedicalInsurances(args: GetMedicalinsurancesArgs) {
      return client.request<GetMedicalinsurancesResponse>({
        method: 'GET',
        path: '/medicalinsurances',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addMedicalInsurance(args: PostMedicalinsurancesArgs) {
      return client.request<PostMedicalinsurancesResponse>({
        method: 'POST',
        path: '/medicalinsurances',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateMedicalInsurance(args: PutMedicalinsurancesArgs) {
      return client.request<PutMedicalinsurancesResponse>({
        method: 'PUT',
        path: '/medicalinsurances',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMedicalInsuranceById(args: GetMedicalinsurancesMedicalInsuranceIdArgs) {
      return client.request<GetMedicalinsurancesMedicalInsuranceIdResponse>({
        method: 'GET',
        path: '/medicalinsurances/{medicalInsuranceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteMedicalInsurance(args: DeleteMedicalinsurancesMedicalInsuranceIdArgs) {
      return client.request<DeleteMedicalinsurancesMedicalInsuranceIdResponse>({
        method: 'DELETE',
        path: '/medicalinsurances/{medicalInsuranceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    medicalInsuranceAgreementsEnable(args: PostMedicalinsurancesEnableagreementsArgs) {
      return client.request<PostMedicalinsurancesEnableagreementsResponse>({
        method: 'POST',
        path: '/medicalinsurances/enableagreements',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    medicalInsuranceAgreementsDisable(args: PostMedicalinsurancesDisableagreementsArgs) {
      return client.request<PostMedicalinsurancesDisableagreementsResponse>({
        method: 'POST',
        path: '/medicalinsurances/disableagreements',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
