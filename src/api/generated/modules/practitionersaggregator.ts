import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/practitionersaggregator.ts'

export type GetPractitionersAggregatorPractitionerIdContractsOperation = paths["/practitioners/aggregator/{PractitionerId}/contracts"]['get']
export type GetPractitionersAggregatorPractitionerIdContractsResponse = OperationResponse<GetPractitionersAggregatorPractitionerIdContractsOperation>
export type GetPractitionersAggregatorPractitionerIdContractsPathParams = OperationPathParams<GetPractitionersAggregatorPractitionerIdContractsOperation>
export type GetPractitionersAggregatorPractitionerIdContractsArgs = RequestOptionsBase & {
  path: GetPractitionersAggregatorPractitionerIdContractsPathParams
}

export type GetPractitionersAggregatorContractsPractitionerContractIdOperation = paths["/practitioners/aggregator/contracts/{PractitionerContractId}"]['get']
export type GetPractitionersAggregatorContractsPractitionerContractIdResponse = OperationResponse<GetPractitionersAggregatorContractsPractitionerContractIdOperation>
export type GetPractitionersAggregatorContractsPractitionerContractIdPathParams = OperationPathParams<GetPractitionersAggregatorContractsPractitionerContractIdOperation>
export type GetPractitionersAggregatorContractsPractitionerContractIdArgs = RequestOptionsBase & {
  path: GetPractitionersAggregatorContractsPractitionerContractIdPathParams
}

export type GetPractitionersAggregatorPractitionerIdMedicalinsurancesOperation = paths["/practitioners/aggregator/{PractitionerId}/medicalinsurances"]['get']
export type GetPractitionersAggregatorPractitionerIdMedicalinsurancesResponse = OperationResponse<GetPractitionersAggregatorPractitionerIdMedicalinsurancesOperation>
export type GetPractitionersAggregatorPractitionerIdMedicalinsurancesPathParams = OperationPathParams<GetPractitionersAggregatorPractitionerIdMedicalinsurancesOperation>
export type GetPractitionersAggregatorPractitionerIdMedicalinsurancesArgs = RequestOptionsBase & {
  path: GetPractitionersAggregatorPractitionerIdMedicalinsurancesPathParams
}

export type GetPractitionersAggregatorMedicalinsurancesPractitionerMedicalInsuranceIdOperation = paths["/practitioners/aggregator/medicalinsurances/{PractitionerMedicalInsuranceId}"]['get']
export type GetPractitionersAggregatorMedicalinsurancesPractitionerMedicalInsuranceIdResponse = OperationResponse<GetPractitionersAggregatorMedicalinsurancesPractitionerMedicalInsuranceIdOperation>
export type GetPractitionersAggregatorMedicalinsurancesPractitionerMedicalInsuranceIdPathParams = OperationPathParams<GetPractitionersAggregatorMedicalinsurancesPractitionerMedicalInsuranceIdOperation>
export type GetPractitionersAggregatorMedicalinsurancesPractitionerMedicalInsuranceIdArgs = RequestOptionsBase & {
  path: GetPractitionersAggregatorMedicalinsurancesPractitionerMedicalInsuranceIdPathParams
}

export type PostPractitionersAggregatorMedicalinsurancesOperation = paths["/practitioners/aggregator/medicalinsurances"]['post']
export type PostPractitionersAggregatorMedicalinsurancesResponse = OperationResponse<PostPractitionersAggregatorMedicalinsurancesOperation>
export type PostPractitionersAggregatorMedicalinsurancesBody = OperationRequestBody<PostPractitionersAggregatorMedicalinsurancesOperation>
export type PostPractitionersAggregatorMedicalinsurancesArgs = RequestOptionsBase & {
  body: PostPractitionersAggregatorMedicalinsurancesBody
}

export type GetPractitionersAggregatorPractitionerIdMedicalservicesOperation = paths["/practitioners/aggregator/{PractitionerId}/medicalservices"]['get']
export type GetPractitionersAggregatorPractitionerIdMedicalservicesResponse = OperationResponse<GetPractitionersAggregatorPractitionerIdMedicalservicesOperation>
export type GetPractitionersAggregatorPractitionerIdMedicalservicesPathParams = OperationPathParams<GetPractitionersAggregatorPractitionerIdMedicalservicesOperation>
export type GetPractitionersAggregatorPractitionerIdMedicalservicesQueryParams = OperationQueryParams<GetPractitionersAggregatorPractitionerIdMedicalservicesOperation>
export type GetPractitionersAggregatorPractitionerIdMedicalservicesArgs = RequestOptionsBase & {
  path: GetPractitionersAggregatorPractitionerIdMedicalservicesPathParams
  query?: GetPractitionersAggregatorPractitionerIdMedicalservicesQueryParams
}

export type GetPractitionersAggregatorMedicalservicesPractitionerMedicalServiceIdOperation = paths["/practitioners/aggregator/medicalservices/{PractitionerMedicalServiceId}"]['get']
export type GetPractitionersAggregatorMedicalservicesPractitionerMedicalServiceIdResponse = OperationResponse<GetPractitionersAggregatorMedicalservicesPractitionerMedicalServiceIdOperation>
export type GetPractitionersAggregatorMedicalservicesPractitionerMedicalServiceIdPathParams = OperationPathParams<GetPractitionersAggregatorMedicalservicesPractitionerMedicalServiceIdOperation>
export type GetPractitionersAggregatorMedicalservicesPractitionerMedicalServiceIdArgs = RequestOptionsBase & {
  path: GetPractitionersAggregatorMedicalservicesPractitionerMedicalServiceIdPathParams
}

export type PostPractitionersAggregatorMedicalservicesOperation = paths["/practitioners/aggregator/medicalservices"]['post']
export type PostPractitionersAggregatorMedicalservicesResponse = OperationResponse<PostPractitionersAggregatorMedicalservicesOperation>
export type PostPractitionersAggregatorMedicalservicesBody = OperationRequestBody<PostPractitionersAggregatorMedicalservicesOperation>
export type PostPractitionersAggregatorMedicalservicesArgs = RequestOptionsBase & {
  body: PostPractitionersAggregatorMedicalservicesBody
}

export type GetPractitionersAggregatorOperation = paths["/practitioners/aggregator"]['get']
export type GetPractitionersAggregatorResponse = OperationResponse<GetPractitionersAggregatorOperation>
export type GetPractitionersAggregatorQueryParams = OperationQueryParams<GetPractitionersAggregatorOperation>
export type GetPractitionersAggregatorArgs = RequestOptionsBase & {
  query?: GetPractitionersAggregatorQueryParams
}

export function createPractitionersaggregatorApi(client: HttpClient) {
  return {
    getContractsByPractitionerId(args: GetPractitionersAggregatorPractitionerIdContractsArgs) {
      return client.request<GetPractitionersAggregatorPractitionerIdContractsResponse>({
        method: 'GET',
        path: '/practitioners/aggregator/{PractitionerId}/contracts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionerContractsById(args: GetPractitionersAggregatorContractsPractitionerContractIdArgs) {
      return client.request<GetPractitionersAggregatorContractsPractitionerContractIdResponse>({
        method: 'GET',
        path: '/practitioners/aggregator/contracts/{PractitionerContractId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMedicalInsurancesByPractitionerId(args: GetPractitionersAggregatorPractitionerIdMedicalinsurancesArgs) {
      return client.request<GetPractitionersAggregatorPractitionerIdMedicalinsurancesResponse>({
        method: 'GET',
        path: '/practitioners/aggregator/{PractitionerId}/medicalinsurances',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionerMedicalInsuranceById(args: GetPractitionersAggregatorMedicalinsurancesPractitionerMedicalInsuranceIdArgs) {
      return client.request<GetPractitionersAggregatorMedicalinsurancesPractitionerMedicalInsuranceIdResponse>({
        method: 'GET',
        path: '/practitioners/aggregator/medicalinsurances/{PractitionerMedicalInsuranceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateMedicalInsuranceByPratitionerId(args: PostPractitionersAggregatorMedicalinsurancesArgs) {
      return client.request<PostPractitionersAggregatorMedicalinsurancesResponse>({
        method: 'POST',
        path: '/practitioners/aggregator/medicalinsurances',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMedicalServicesByPractitionerId(args: GetPractitionersAggregatorPractitionerIdMedicalservicesArgs) {
      return client.request<GetPractitionersAggregatorPractitionerIdMedicalservicesResponse>({
        method: 'GET',
        path: '/practitioners/aggregator/{PractitionerId}/medicalservices',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionerMedicalServiceById(args: GetPractitionersAggregatorMedicalservicesPractitionerMedicalServiceIdArgs) {
      return client.request<GetPractitionersAggregatorMedicalservicesPractitionerMedicalServiceIdResponse>({
        method: 'GET',
        path: '/practitioners/aggregator/medicalservices/{PractitionerMedicalServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateMedicalServiceByPratitionerId(args: PostPractitionersAggregatorMedicalservicesArgs) {
      return client.request<PostPractitionersAggregatorMedicalservicesResponse>({
        method: 'POST',
        path: '/practitioners/aggregator/medicalservices',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitioner(args: GetPractitionersAggregatorArgs) {
      return client.request<GetPractitionersAggregatorResponse>({
        method: 'GET',
        path: '/practitioners/aggregator',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
