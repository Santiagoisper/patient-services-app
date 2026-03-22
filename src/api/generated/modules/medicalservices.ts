import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/medicalservices.ts'

export type GetMedicalServicesOperation = paths["/medicalServices"]['get']
export type GetMedicalServicesResponse = OperationResponse<GetMedicalServicesOperation>
export type GetMedicalServicesQueryParams = OperationQueryParams<GetMedicalServicesOperation>
export type GetMedicalServicesArgs = RequestOptionsBase & {
  query?: GetMedicalServicesQueryParams
}

export type PostMedicalServicesOperation = paths["/medicalServices"]['post']
export type PostMedicalServicesResponse = OperationResponse<PostMedicalServicesOperation>
export type PostMedicalServicesBody = OperationRequestBody<PostMedicalServicesOperation>
export type PostMedicalServicesArgs = RequestOptionsBase & {
  body: PostMedicalServicesBody
}

export type PutMedicalServicesOperation = paths["/medicalServices"]['put']
export type PutMedicalServicesResponse = OperationResponse<PutMedicalServicesOperation>
export type PutMedicalServicesBody = OperationRequestBody<PutMedicalServicesOperation>
export type PutMedicalServicesArgs = RequestOptionsBase & {
  body: PutMedicalServicesBody
}

export type GetMedicalServicesMedicalServiceIdOperation = paths["/medicalServices/{medicalServiceId}"]['get']
export type GetMedicalServicesMedicalServiceIdResponse = OperationResponse<GetMedicalServicesMedicalServiceIdOperation>
export type GetMedicalServicesMedicalServiceIdPathParams = OperationPathParams<GetMedicalServicesMedicalServiceIdOperation>
export type GetMedicalServicesMedicalServiceIdArgs = RequestOptionsBase & {
  path: GetMedicalServicesMedicalServiceIdPathParams
}

export type PostMedicalServicesSettingsOperation = paths["/medicalServices/settings"]['post']
export type PostMedicalServicesSettingsResponse = OperationResponse<PostMedicalServicesSettingsOperation>
export type PostMedicalServicesSettingsBody = OperationRequestBody<PostMedicalServicesSettingsOperation>
export type PostMedicalServicesSettingsArgs = RequestOptionsBase & {
  body: PostMedicalServicesSettingsBody
}

export type PutMedicalServicesMedicalServiceIdStatusNewStatusOperation = paths["/medicalServices/{MedicalServiceId}/status/{NewStatus}"]['put']
export type PutMedicalServicesMedicalServiceIdStatusNewStatusResponse = OperationResponse<PutMedicalServicesMedicalServiceIdStatusNewStatusOperation>
export type PutMedicalServicesMedicalServiceIdStatusNewStatusPathParams = OperationPathParams<PutMedicalServicesMedicalServiceIdStatusNewStatusOperation>
export type PutMedicalServicesMedicalServiceIdStatusNewStatusQueryParams = OperationQueryParams<PutMedicalServicesMedicalServiceIdStatusNewStatusOperation>
export type PutMedicalServicesMedicalServiceIdStatusNewStatusArgs = RequestOptionsBase & {
  path: PutMedicalServicesMedicalServiceIdStatusNewStatusPathParams
  query?: PutMedicalServicesMedicalServiceIdStatusNewStatusQueryParams
}

export type DeleteMedicalServicesServiceIdOperation = paths["/medicalServices/{serviceId}"]['delete']
export type DeleteMedicalServicesServiceIdResponse = OperationResponse<DeleteMedicalServicesServiceIdOperation>
export type DeleteMedicalServicesServiceIdPathParams = OperationPathParams<DeleteMedicalServicesServiceIdOperation>
export type DeleteMedicalServicesServiceIdArgs = RequestOptionsBase & {
  path: DeleteMedicalServicesServiceIdPathParams
}

export function createMedicalservicesApi(client: HttpClient) {
  return {
    getMedicalServices(args: GetMedicalServicesArgs) {
      return client.request<GetMedicalServicesResponse>({
        method: 'GET',
        path: '/medicalServices',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addMedicalService(args: PostMedicalServicesArgs) {
      return client.request<PostMedicalServicesResponse>({
        method: 'POST',
        path: '/medicalServices',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateMedicalService(args: PutMedicalServicesArgs) {
      return client.request<PutMedicalServicesResponse>({
        method: 'PUT',
        path: '/medicalServices',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMedicalServiceById(args: GetMedicalServicesMedicalServiceIdArgs) {
      return client.request<GetMedicalServicesMedicalServiceIdResponse>({
        method: 'GET',
        path: '/medicalServices/{medicalServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    changeMedicalServiceSettings(args: PostMedicalServicesSettingsArgs) {
      return client.request<PostMedicalServicesSettingsResponse>({
        method: 'POST',
        path: '/medicalServices/settings',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateMedicalServiceStatus(args: PutMedicalServicesMedicalServiceIdStatusNewStatusArgs) {
      return client.request<PutMedicalServicesMedicalServiceIdStatusNewStatusResponse>({
        method: 'PUT',
        path: '/medicalServices/{MedicalServiceId}/status/{NewStatus}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteMedicalService(args: DeleteMedicalServicesServiceIdArgs) {
      return client.request<DeleteMedicalServicesServiceIdResponse>({
        method: 'DELETE',
        path: '/medicalServices/{serviceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
