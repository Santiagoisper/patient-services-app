import type { HttpClient, PathParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/specialties.ts'

export type GetMedicalSpecialtiesOperation = paths["/medical-specialties"]['get']
export type GetMedicalSpecialtiesResponse = OperationResponse<GetMedicalSpecialtiesOperation>
export type GetMedicalSpecialtiesArgs = RequestOptionsBase & {
}

export type PostMedicalSpecialtiesOperation = paths["/medical-specialties"]['post']
export type PostMedicalSpecialtiesResponse = OperationResponse<PostMedicalSpecialtiesOperation>
export type PostMedicalSpecialtiesBody = OperationRequestBody<PostMedicalSpecialtiesOperation>
export type PostMedicalSpecialtiesArgs = RequestOptionsBase & {
  body: PostMedicalSpecialtiesBody
}

export type PutMedicalSpecialtiesOperation = paths["/medical-specialties"]['put']
export type PutMedicalSpecialtiesResponse = OperationResponse<PutMedicalSpecialtiesOperation>
export type PutMedicalSpecialtiesBody = OperationRequestBody<PutMedicalSpecialtiesOperation>
export type PutMedicalSpecialtiesArgs = RequestOptionsBase & {
  body: PutMedicalSpecialtiesBody
}

export type GetMedicalSpecialtiesSpecialtyIdOperation = paths["/medical-specialties/{specialtyId}"]['get']
export type GetMedicalSpecialtiesSpecialtyIdResponse = OperationResponse<GetMedicalSpecialtiesSpecialtyIdOperation>
export type GetMedicalSpecialtiesSpecialtyIdPathParams = OperationPathParams<GetMedicalSpecialtiesSpecialtyIdOperation>
export type GetMedicalSpecialtiesSpecialtyIdArgs = RequestOptionsBase & {
  path: GetMedicalSpecialtiesSpecialtyIdPathParams
}

export type DeleteMedicalSpecialtiesSpecialtyIdOperation = paths["/medical-specialties/{specialtyId}"]['delete']
export type DeleteMedicalSpecialtiesSpecialtyIdResponse = OperationResponse<DeleteMedicalSpecialtiesSpecialtyIdOperation>
export type DeleteMedicalSpecialtiesSpecialtyIdPathParams = OperationPathParams<DeleteMedicalSpecialtiesSpecialtyIdOperation>
export type DeleteMedicalSpecialtiesSpecialtyIdArgs = RequestOptionsBase & {
  path: DeleteMedicalSpecialtiesSpecialtyIdPathParams
}

export function createSpecialtiesApi(client: HttpClient) {
  return {
    getAllSpecialties(args: GetMedicalSpecialtiesArgs = {}) {
      return client.request<GetMedicalSpecialtiesResponse>({
        method: 'GET',
        path: '/medical-specialties',
        headers: args.headers,
        signal: args.signal,
      })
    },
    createSpecialty(args: PostMedicalSpecialtiesArgs) {
      return client.request<PostMedicalSpecialtiesResponse>({
        method: 'POST',
        path: '/medical-specialties',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateSpecialty(args: PutMedicalSpecialtiesArgs) {
      return client.request<PutMedicalSpecialtiesResponse>({
        method: 'PUT',
        path: '/medical-specialties',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSpecialtyById(args: GetMedicalSpecialtiesSpecialtyIdArgs) {
      return client.request<GetMedicalSpecialtiesSpecialtyIdResponse>({
        method: 'GET',
        path: '/medical-specialties/{specialtyId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteSpecialty(args: DeleteMedicalSpecialtiesSpecialtyIdArgs) {
      return client.request<DeleteMedicalSpecialtiesSpecialtyIdResponse>({
        method: 'DELETE',
        path: '/medical-specialties/{specialtyId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
