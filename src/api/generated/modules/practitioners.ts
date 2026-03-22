import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/practitioners.ts'

export type GetPractitionersAssociationsPractitionerIDSettingsOperation = paths["/practitioners/associations/{PractitionerID}/settings"]['get']
export type GetPractitionersAssociationsPractitionerIDSettingsResponse = OperationResponse<GetPractitionersAssociationsPractitionerIDSettingsOperation>
export type GetPractitionersAssociationsPractitionerIDSettingsPathParams = OperationPathParams<GetPractitionersAssociationsPractitionerIDSettingsOperation>
export type GetPractitionersAssociationsPractitionerIDSettingsArgs = RequestOptionsBase & {
  path: GetPractitionersAssociationsPractitionerIDSettingsPathParams
}

export type GetPractitionersAssociationsSettingsParticularattentionParticularAttentionStatusOperation = paths["/practitioners/associations/settings/particularattention/{ParticularAttentionStatus}"]['get']
export type GetPractitionersAssociationsSettingsParticularattentionParticularAttentionStatusResponse = OperationResponse<GetPractitionersAssociationsSettingsParticularattentionParticularAttentionStatusOperation>
export type GetPractitionersAssociationsSettingsParticularattentionParticularAttentionStatusPathParams = OperationPathParams<GetPractitionersAssociationsSettingsParticularattentionParticularAttentionStatusOperation>
export type GetPractitionersAssociationsSettingsParticularattentionParticularAttentionStatusArgs = RequestOptionsBase & {
  path: GetPractitionersAssociationsSettingsParticularattentionParticularAttentionStatusPathParams
}

export type PostPractitionersAssociationsSettingsOperation = paths["/practitioners/associations/settings"]['post']
export type PostPractitionersAssociationsSettingsResponse = OperationResponse<PostPractitionersAssociationsSettingsOperation>
export type PostPractitionersAssociationsSettingsBody = OperationRequestBody<PostPractitionersAssociationsSettingsOperation>
export type PostPractitionersAssociationsSettingsArgs = RequestOptionsBase & {
  body: PostPractitionersAssociationsSettingsBody
}

export type PutPractitionersAssociationsSettingsOperation = paths["/practitioners/associations/settings"]['put']
export type PutPractitionersAssociationsSettingsResponse = OperationResponse<PutPractitionersAssociationsSettingsOperation>
export type PutPractitionersAssociationsSettingsBody = OperationRequestBody<PutPractitionersAssociationsSettingsOperation>
export type PutPractitionersAssociationsSettingsArgs = RequestOptionsBase & {
  body: PutPractitionersAssociationsSettingsBody
}

export type GetPractitionersAssociationsPractitionerIDContractsOperation = paths["/practitioners/associations/{PractitionerID}/contracts"]['get']
export type GetPractitionersAssociationsPractitionerIDContractsResponse = OperationResponse<GetPractitionersAssociationsPractitionerIDContractsOperation>
export type GetPractitionersAssociationsPractitionerIDContractsPathParams = OperationPathParams<GetPractitionersAssociationsPractitionerIDContractsOperation>
export type GetPractitionersAssociationsPractitionerIDContractsArgs = RequestOptionsBase & {
  path: GetPractitionersAssociationsPractitionerIDContractsPathParams
}

export type GetPractitionersAssociationsContractsPractitionerContractIdOperation = paths["/practitioners/associations/contracts/{PractitionerContractId}"]['get']
export type GetPractitionersAssociationsContractsPractitionerContractIdResponse = OperationResponse<GetPractitionersAssociationsContractsPractitionerContractIdOperation>
export type GetPractitionersAssociationsContractsPractitionerContractIdPathParams = OperationPathParams<GetPractitionersAssociationsContractsPractitionerContractIdOperation>
export type GetPractitionersAssociationsContractsPractitionerContractIdArgs = RequestOptionsBase & {
  path: GetPractitionersAssociationsContractsPractitionerContractIdPathParams
}

export type DeletePractitionersAssociationsContractsPractitionerContractIdOperation = paths["/practitioners/associations/contracts/{PractitionerContractId}"]['delete']
export type DeletePractitionersAssociationsContractsPractitionerContractIdResponse = OperationResponse<DeletePractitionersAssociationsContractsPractitionerContractIdOperation>
export type DeletePractitionersAssociationsContractsPractitionerContractIdPathParams = OperationPathParams<DeletePractitionersAssociationsContractsPractitionerContractIdOperation>
export type DeletePractitionersAssociationsContractsPractitionerContractIdArgs = RequestOptionsBase & {
  path: DeletePractitionersAssociationsContractsPractitionerContractIdPathParams
}

export type PostPractitionersAssociationsContractsOperation = paths["/practitioners/associations/contracts"]['post']
export type PostPractitionersAssociationsContractsResponse = OperationResponse<PostPractitionersAssociationsContractsOperation>
export type PostPractitionersAssociationsContractsBody = OperationRequestBody<PostPractitionersAssociationsContractsOperation>
export type PostPractitionersAssociationsContractsArgs = RequestOptionsBase & {
  body: PostPractitionersAssociationsContractsBody
}

export type GetPractitionersAssociationsPractitionerIDMedicalinsurancesOperation = paths["/practitioners/associations/{PractitionerID}/medicalinsurances"]['get']
export type GetPractitionersAssociationsPractitionerIDMedicalinsurancesResponse = OperationResponse<GetPractitionersAssociationsPractitionerIDMedicalinsurancesOperation>
export type GetPractitionersAssociationsPractitionerIDMedicalinsurancesPathParams = OperationPathParams<GetPractitionersAssociationsPractitionerIDMedicalinsurancesOperation>
export type GetPractitionersAssociationsPractitionerIDMedicalinsurancesArgs = RequestOptionsBase & {
  path: GetPractitionersAssociationsPractitionerIDMedicalinsurancesPathParams
}

export type GetPractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdOperation = paths["/practitioners/associations/medicalinsurances/{PractitionerMedicalInsuranceId}"]['get']
export type GetPractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdResponse = OperationResponse<GetPractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdOperation>
export type GetPractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdPathParams = OperationPathParams<GetPractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdOperation>
export type GetPractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdArgs = RequestOptionsBase & {
  path: GetPractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdPathParams
}

export type DeletePractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdOperation = paths["/practitioners/associations/medicalinsurances/{PractitionerMedicalInsuranceId}"]['delete']
export type DeletePractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdResponse = OperationResponse<DeletePractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdOperation>
export type DeletePractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdPathParams = OperationPathParams<DeletePractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdOperation>
export type DeletePractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdArgs = RequestOptionsBase & {
  path: DeletePractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdPathParams
}

export type PostPractitionersAssociationsMedicalinsurancesOperation = paths["/practitioners/associations/medicalinsurances"]['post']
export type PostPractitionersAssociationsMedicalinsurancesResponse = OperationResponse<PostPractitionersAssociationsMedicalinsurancesOperation>
export type PostPractitionersAssociationsMedicalinsurancesBody = OperationRequestBody<PostPractitionersAssociationsMedicalinsurancesOperation>
export type PostPractitionersAssociationsMedicalinsurancesArgs = RequestOptionsBase & {
  body: PostPractitionersAssociationsMedicalinsurancesBody
}

export type DeletePractitionersAssociationsPractitionerIdMedicalinsurancesMedicalInsuranceIdOperation = paths["/practitioners/associations/{PractitionerId}/medicalinsurances/{MedicalInsuranceId}"]['delete']
export type DeletePractitionersAssociationsPractitionerIdMedicalinsurancesMedicalInsuranceIdResponse = OperationResponse<DeletePractitionersAssociationsPractitionerIdMedicalinsurancesMedicalInsuranceIdOperation>
export type DeletePractitionersAssociationsPractitionerIdMedicalinsurancesMedicalInsuranceIdPathParams = OperationPathParams<DeletePractitionersAssociationsPractitionerIdMedicalinsurancesMedicalInsuranceIdOperation>
export type DeletePractitionersAssociationsPractitionerIdMedicalinsurancesMedicalInsuranceIdArgs = RequestOptionsBase & {
  path: DeletePractitionersAssociationsPractitionerIdMedicalinsurancesMedicalInsuranceIdPathParams
}

export type GetPractitionersAssociationsPractitionerIDMedicalservicesOperation = paths["/practitioners/associations/{PractitionerID}/medicalservices"]['get']
export type GetPractitionersAssociationsPractitionerIDMedicalservicesResponse = OperationResponse<GetPractitionersAssociationsPractitionerIDMedicalservicesOperation>
export type GetPractitionersAssociationsPractitionerIDMedicalservicesPathParams = OperationPathParams<GetPractitionersAssociationsPractitionerIDMedicalservicesOperation>
export type GetPractitionersAssociationsPractitionerIDMedicalservicesArgs = RequestOptionsBase & {
  path: GetPractitionersAssociationsPractitionerIDMedicalservicesPathParams
}

export type GetPractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdOperation = paths["/practitioners/associations/medicalservices/{PractitionerMedicalServiceId}"]['get']
export type GetPractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdResponse = OperationResponse<GetPractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdOperation>
export type GetPractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdPathParams = OperationPathParams<GetPractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdOperation>
export type GetPractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdArgs = RequestOptionsBase & {
  path: GetPractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdPathParams
}

export type DeletePractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdOperation = paths["/practitioners/associations/medicalservices/{PractitionerMedicalServiceId}"]['delete']
export type DeletePractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdResponse = OperationResponse<DeletePractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdOperation>
export type DeletePractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdPathParams = OperationPathParams<DeletePractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdOperation>
export type DeletePractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdArgs = RequestOptionsBase & {
  path: DeletePractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdPathParams
}

export type PostPractitionersAssociationsMedicalservicesOperation = paths["/practitioners/associations/medicalservices"]['post']
export type PostPractitionersAssociationsMedicalservicesResponse = OperationResponse<PostPractitionersAssociationsMedicalservicesOperation>
export type PostPractitionersAssociationsMedicalservicesBody = OperationRequestBody<PostPractitionersAssociationsMedicalservicesOperation>
export type PostPractitionersAssociationsMedicalservicesArgs = RequestOptionsBase & {
  body: PostPractitionersAssociationsMedicalservicesBody
}

export type DeletePractitionersAssociationsPractitionerIdMedicalservicesMedicalServiceIdOperation = paths["/practitioners/associations/{PractitionerId}/medicalservices/{MedicalServiceId}"]['delete']
export type DeletePractitionersAssociationsPractitionerIdMedicalservicesMedicalServiceIdResponse = OperationResponse<DeletePractitionersAssociationsPractitionerIdMedicalservicesMedicalServiceIdOperation>
export type DeletePractitionersAssociationsPractitionerIdMedicalservicesMedicalServiceIdPathParams = OperationPathParams<DeletePractitionersAssociationsPractitionerIdMedicalservicesMedicalServiceIdOperation>
export type DeletePractitionersAssociationsPractitionerIdMedicalservicesMedicalServiceIdArgs = RequestOptionsBase & {
  path: DeletePractitionersAssociationsPractitionerIdMedicalservicesMedicalServiceIdPathParams
}

export type GetPractitionersAssociationsOperation = paths["/practitioners/associations"]['get']
export type GetPractitionersAssociationsResponse = OperationResponse<GetPractitionersAssociationsOperation>
export type GetPractitionersAssociationsQueryParams = OperationQueryParams<GetPractitionersAssociationsOperation>
export type GetPractitionersAssociationsArgs = RequestOptionsBase & {
  query?: GetPractitionersAssociationsQueryParams
}

export type GetPractitionersAssociationsPractitionerIdSpecialtiesOperation = paths["/practitioners/associations/{practitionerId}/specialties"]['get']
export type GetPractitionersAssociationsPractitionerIdSpecialtiesResponse = OperationResponse<GetPractitionersAssociationsPractitionerIdSpecialtiesOperation>
export type GetPractitionersAssociationsPractitionerIdSpecialtiesPathParams = OperationPathParams<GetPractitionersAssociationsPractitionerIdSpecialtiesOperation>
export type GetPractitionersAssociationsPractitionerIdSpecialtiesArgs = RequestOptionsBase & {
  path: GetPractitionersAssociationsPractitionerIdSpecialtiesPathParams
}

export type GetPractitionersAssociationsSpecialtiesIdOperation = paths["/practitioners/associations/specialties/{id}"]['get']
export type GetPractitionersAssociationsSpecialtiesIdResponse = OperationResponse<GetPractitionersAssociationsSpecialtiesIdOperation>
export type GetPractitionersAssociationsSpecialtiesIdPathParams = OperationPathParams<GetPractitionersAssociationsSpecialtiesIdOperation>
export type GetPractitionersAssociationsSpecialtiesIdArgs = RequestOptionsBase & {
  path: GetPractitionersAssociationsSpecialtiesIdPathParams
}

export type DeletePractitionersAssociationsSpecialtiesIdOperation = paths["/practitioners/associations/specialties/{id}"]['delete']
export type DeletePractitionersAssociationsSpecialtiesIdResponse = OperationResponse<DeletePractitionersAssociationsSpecialtiesIdOperation>
export type DeletePractitionersAssociationsSpecialtiesIdPathParams = OperationPathParams<DeletePractitionersAssociationsSpecialtiesIdOperation>
export type DeletePractitionersAssociationsSpecialtiesIdArgs = RequestOptionsBase & {
  path: DeletePractitionersAssociationsSpecialtiesIdPathParams
}

export type PostPractitionersAssociationsSpecialtiesOperation = paths["/practitioners/associations/specialties"]['post']
export type PostPractitionersAssociationsSpecialtiesResponse = OperationResponse<PostPractitionersAssociationsSpecialtiesOperation>
export type PostPractitionersAssociationsSpecialtiesBody = OperationRequestBody<PostPractitionersAssociationsSpecialtiesOperation>
export type PostPractitionersAssociationsSpecialtiesArgs = RequestOptionsBase & {
  body: PostPractitionersAssociationsSpecialtiesBody
}

export function createPractitionersApi(client: HttpClient) {
  return {
    getSettingsByPractitionerId(args: GetPractitionersAssociationsPractitionerIDSettingsArgs) {
      return client.request<GetPractitionersAssociationsPractitionerIDSettingsResponse>({
        method: 'GET',
        path: '/practitioners/associations/{PractitionerID}/settings',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionersByParticularAttentionStatus(args: GetPractitionersAssociationsSettingsParticularattentionParticularAttentionStatusArgs) {
      return client.request<GetPractitionersAssociationsSettingsParticularattentionParticularAttentionStatusResponse>({
        method: 'GET',
        path: '/practitioners/associations/settings/particularattention/{ParticularAttentionStatus}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    setPractitionerSettings(args: PostPractitionersAssociationsSettingsArgs) {
      return client.request<PostPractitionersAssociationsSettingsResponse>({
        method: 'POST',
        path: '/practitioners/associations/settings',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updatePractitionerSettings(args: PutPractitionersAssociationsSettingsArgs) {
      return client.request<PutPractitionersAssociationsSettingsResponse>({
        method: 'PUT',
        path: '/practitioners/associations/settings',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractByPractitionerId(args: GetPractitionersAssociationsPractitionerIDContractsArgs) {
      return client.request<GetPractitionersAssociationsPractitionerIDContractsResponse>({
        method: 'GET',
        path: '/practitioners/associations/{PractitionerID}/contracts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionerContractById(args: GetPractitionersAssociationsContractsPractitionerContractIdArgs) {
      return client.request<GetPractitionersAssociationsContractsPractitionerContractIdResponse>({
        method: 'GET',
        path: '/practitioners/associations/contracts/{PractitionerContractId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateContractFromPractitioner(args: DeletePractitionersAssociationsContractsPractitionerContractIdArgs) {
      return client.request<DeletePractitionersAssociationsContractsPractitionerContractIdResponse>({
        method: 'DELETE',
        path: '/practitioners/associations/contracts/{PractitionerContractId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateContractToPractitioner(args: PostPractitionersAssociationsContractsArgs) {
      return client.request<PostPractitionersAssociationsContractsResponse>({
        method: 'POST',
        path: '/practitioners/associations/contracts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMedicalInsurancesByPractitionerId(args: GetPractitionersAssociationsPractitionerIDMedicalinsurancesArgs) {
      return client.request<GetPractitionersAssociationsPractitionerIDMedicalinsurancesResponse>({
        method: 'GET',
        path: '/practitioners/associations/{PractitionerID}/medicalinsurances',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionerMedicalInsuranceById(args: GetPractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdArgs) {
      return client.request<GetPractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdResponse>({
        method: 'GET',
        path: '/practitioners/associations/medicalinsurances/{PractitionerMedicalInsuranceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateMedicalInsuranceFromToPractitioner(args: DeletePractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdArgs) {
      return client.request<DeletePractitionersAssociationsMedicalinsurancesPractitionerMedicalInsuranceIdResponse>({
        method: 'DELETE',
        path: '/practitioners/associations/medicalinsurances/{PractitionerMedicalInsuranceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateMedicalInsuranceToPractitioner(args: PostPractitionersAssociationsMedicalinsurancesArgs) {
      return client.request<PostPractitionersAssociationsMedicalinsurancesResponse>({
        method: 'POST',
        path: '/practitioners/associations/medicalinsurances',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateMedicalInsuranceFromToPractitionerByMedicalInsuranceId(args: DeletePractitionersAssociationsPractitionerIdMedicalinsurancesMedicalInsuranceIdArgs) {
      return client.request<DeletePractitionersAssociationsPractitionerIdMedicalinsurancesMedicalInsuranceIdResponse>({
        method: 'DELETE',
        path: '/practitioners/associations/{PractitionerId}/medicalinsurances/{MedicalInsuranceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMedicalServicesByPractitionerId(args: GetPractitionersAssociationsPractitionerIDMedicalservicesArgs) {
      return client.request<GetPractitionersAssociationsPractitionerIDMedicalservicesResponse>({
        method: 'GET',
        path: '/practitioners/associations/{PractitionerID}/medicalservices',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionerMedicalServiceById(args: GetPractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdArgs) {
      return client.request<GetPractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdResponse>({
        method: 'GET',
        path: '/practitioners/associations/medicalservices/{PractitionerMedicalServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateMedicalServiceFromToPractitioner(args: DeletePractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdArgs) {
      return client.request<DeletePractitionersAssociationsMedicalservicesPractitionerMedicalServiceIdResponse>({
        method: 'DELETE',
        path: '/practitioners/associations/medicalservices/{PractitionerMedicalServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateMedicalServiceToPractitioner(args: PostPractitionersAssociationsMedicalservicesArgs) {
      return client.request<PostPractitionersAssociationsMedicalservicesResponse>({
        method: 'POST',
        path: '/practitioners/associations/medicalservices',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateMedicalServiceFromToPractitionerByMedicalServiceId(args: DeletePractitionersAssociationsPractitionerIdMedicalservicesMedicalServiceIdArgs) {
      return client.request<DeletePractitionersAssociationsPractitionerIdMedicalservicesMedicalServiceIdResponse>({
        method: 'DELETE',
        path: '/practitioners/associations/{PractitionerId}/medicalservices/{MedicalServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitioners(args: GetPractitionersAssociationsArgs) {
      return client.request<GetPractitionersAssociationsResponse>({
        method: 'GET',
        path: '/practitioners/associations',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSpecialtiesByPractitionerId(args: GetPractitionersAssociationsPractitionerIdSpecialtiesArgs) {
      return client.request<GetPractitionersAssociationsPractitionerIdSpecialtiesResponse>({
        method: 'GET',
        path: '/practitioners/associations/{practitionerId}/specialties',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionerSpecialtyById(args: GetPractitionersAssociationsSpecialtiesIdArgs) {
      return client.request<GetPractitionersAssociationsSpecialtiesIdResponse>({
        method: 'GET',
        path: '/practitioners/associations/specialties/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociatePractitionerSpecialty(args: DeletePractitionersAssociationsSpecialtiesIdArgs) {
      return client.request<DeletePractitionersAssociationsSpecialtiesIdResponse>({
        method: 'DELETE',
        path: '/practitioners/associations/specialties/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associatePractitionerSpecialty(args: PostPractitionersAssociationsSpecialtiesArgs) {
      return client.request<PostPractitionersAssociationsSpecialtiesResponse>({
        method: 'POST',
        path: '/practitioners/associations/specialties',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
