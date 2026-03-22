import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/settlements.ts'

export type GetSettlementsContractContractIDSettlementsOperation = paths["/settlements/contract/{ContractID}/settlements"]['get']
export type GetSettlementsContractContractIDSettlementsResponse = OperationResponse<GetSettlementsContractContractIDSettlementsOperation>
export type GetSettlementsContractContractIDSettlementsPathParams = OperationPathParams<GetSettlementsContractContractIDSettlementsOperation>
export type GetSettlementsContractContractIDSettlementsArgs = RequestOptionsBase & {
  path: GetSettlementsContractContractIDSettlementsPathParams
}

export type GetSettlementsContractSettlementsContractSettlementIdOperation = paths["/settlements/contract/settlements/{ContractSettlementId}"]['get']
export type GetSettlementsContractSettlementsContractSettlementIdResponse = OperationResponse<GetSettlementsContractSettlementsContractSettlementIdOperation>
export type GetSettlementsContractSettlementsContractSettlementIdPathParams = OperationPathParams<GetSettlementsContractSettlementsContractSettlementIdOperation>
export type GetSettlementsContractSettlementsContractSettlementIdArgs = RequestOptionsBase & {
  path: GetSettlementsContractSettlementsContractSettlementIdPathParams
}

export type PostSettlementsContractSettlementsOperation = paths["/settlements/contract/settlements"]['post']
export type PostSettlementsContractSettlementsResponse = OperationResponse<PostSettlementsContractSettlementsOperation>
export type PostSettlementsContractSettlementsBody = OperationRequestBody<PostSettlementsContractSettlementsOperation>
export type PostSettlementsContractSettlementsArgs = RequestOptionsBase & {
  body: PostSettlementsContractSettlementsBody
}

export type DeleteSettlementsContractSettlementsAssociationIdOperation = paths["/settlements/contract/settlements/{associationId}"]['delete']
export type DeleteSettlementsContractSettlementsAssociationIdResponse = OperationResponse<DeleteSettlementsContractSettlementsAssociationIdOperation>
export type DeleteSettlementsContractSettlementsAssociationIdPathParams = OperationPathParams<DeleteSettlementsContractSettlementsAssociationIdOperation>
export type DeleteSettlementsContractSettlementsAssociationIdArgs = RequestOptionsBase & {
  path: DeleteSettlementsContractSettlementsAssociationIdPathParams
}

export type GetSettlementsMedicalagreementsAgreementIdSettlementsOperation = paths["/settlements/medicalagreements/{agreementId}/settlements"]['get']
export type GetSettlementsMedicalagreementsAgreementIdSettlementsResponse = OperationResponse<GetSettlementsMedicalagreementsAgreementIdSettlementsOperation>
export type GetSettlementsMedicalagreementsAgreementIdSettlementsPathParams = OperationPathParams<GetSettlementsMedicalagreementsAgreementIdSettlementsOperation>
export type GetSettlementsMedicalagreementsAgreementIdSettlementsArgs = RequestOptionsBase & {
  path: GetSettlementsMedicalagreementsAgreementIdSettlementsPathParams
}

export type GetSettlementsMedicalagreementsSettlementsAgreementSettlementIdOperation = paths["/settlements/medicalagreements/settlements/{AgreementSettlementId}"]['get']
export type GetSettlementsMedicalagreementsSettlementsAgreementSettlementIdResponse = OperationResponse<GetSettlementsMedicalagreementsSettlementsAgreementSettlementIdOperation>
export type GetSettlementsMedicalagreementsSettlementsAgreementSettlementIdPathParams = OperationPathParams<GetSettlementsMedicalagreementsSettlementsAgreementSettlementIdOperation>
export type GetSettlementsMedicalagreementsSettlementsAgreementSettlementIdArgs = RequestOptionsBase & {
  path: GetSettlementsMedicalagreementsSettlementsAgreementSettlementIdPathParams
}

export type PostSettlementsMedicalagreementsSettlementsOperation = paths["/settlements/medicalagreements/settlements"]['post']
export type PostSettlementsMedicalagreementsSettlementsResponse = OperationResponse<PostSettlementsMedicalagreementsSettlementsOperation>
export type PostSettlementsMedicalagreementsSettlementsBody = OperationRequestBody<PostSettlementsMedicalagreementsSettlementsOperation>
export type PostSettlementsMedicalagreementsSettlementsArgs = RequestOptionsBase & {
  body: PostSettlementsMedicalagreementsSettlementsBody
}

export type DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdOperation = paths["/settlements/medicalagreements/settlements/{ContractSettlementId}"]['delete']
export type DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdResponse = OperationResponse<DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdOperation>
export type DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdPathParams = OperationPathParams<DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdOperation>
export type DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdQueryParams = OperationQueryParams<DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdOperation>
export type DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdArgs = RequestOptionsBase & {
  path: DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdPathParams
  query?: DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdQueryParams
}

export type GetSettlementsInfoOperation = paths["/settlements/info"]['get']
export type GetSettlementsInfoResponse = OperationResponse<GetSettlementsInfoOperation>
export type GetSettlementsInfoArgs = RequestOptionsBase & {
}

export type GetSettlementsPractitionersPractitionerIdSettlementsOperation = paths["/settlements/Practitioners/{PractitionerId}/settlements"]['get']
export type GetSettlementsPractitionersPractitionerIdSettlementsResponse = OperationResponse<GetSettlementsPractitionersPractitionerIdSettlementsOperation>
export type GetSettlementsPractitionersPractitionerIdSettlementsPathParams = OperationPathParams<GetSettlementsPractitionersPractitionerIdSettlementsOperation>
export type GetSettlementsPractitionersPractitionerIdSettlementsArgs = RequestOptionsBase & {
  path: GetSettlementsPractitionersPractitionerIdSettlementsPathParams
}

export type GetSettlementsPractitionersSettlementsPractitionerSettlementIdOperation = paths["/settlements/Practitioners/settlements/{PractitionerSettlementId}"]['get']
export type GetSettlementsPractitionersSettlementsPractitionerSettlementIdResponse = OperationResponse<GetSettlementsPractitionersSettlementsPractitionerSettlementIdOperation>
export type GetSettlementsPractitionersSettlementsPractitionerSettlementIdPathParams = OperationPathParams<GetSettlementsPractitionersSettlementsPractitionerSettlementIdOperation>
export type GetSettlementsPractitionersSettlementsPractitionerSettlementIdArgs = RequestOptionsBase & {
  path: GetSettlementsPractitionersSettlementsPractitionerSettlementIdPathParams
}

export type DeleteSettlementsPractitionersSettlementsPractitionerSettlementIdOperation = paths["/settlements/Practitioners/settlements/{PractitionerSettlementId}"]['delete']
export type DeleteSettlementsPractitionersSettlementsPractitionerSettlementIdResponse = OperationResponse<DeleteSettlementsPractitionersSettlementsPractitionerSettlementIdOperation>
export type DeleteSettlementsPractitionersSettlementsPractitionerSettlementIdPathParams = OperationPathParams<DeleteSettlementsPractitionersSettlementsPractitionerSettlementIdOperation>
export type DeleteSettlementsPractitionersSettlementsPractitionerSettlementIdArgs = RequestOptionsBase & {
  path: DeleteSettlementsPractitionersSettlementsPractitionerSettlementIdPathParams
}

export type PostSettlementsPractitionersSettlementsOperation = paths["/settlements/Practitioners/settlements"]['post']
export type PostSettlementsPractitionersSettlementsResponse = OperationResponse<PostSettlementsPractitionersSettlementsOperation>
export type PostSettlementsPractitionersSettlementsBody = OperationRequestBody<PostSettlementsPractitionersSettlementsOperation>
export type PostSettlementsPractitionersSettlementsArgs = RequestOptionsBase & {
  body: PostSettlementsPractitionersSettlementsBody
}

export type GetSettlementsProtocolProtocolIdSettlementsOperation = paths["/settlements/protocol/{ProtocolId}/settlements"]['get']
export type GetSettlementsProtocolProtocolIdSettlementsResponse = OperationResponse<GetSettlementsProtocolProtocolIdSettlementsOperation>
export type GetSettlementsProtocolProtocolIdSettlementsPathParams = OperationPathParams<GetSettlementsProtocolProtocolIdSettlementsOperation>
export type GetSettlementsProtocolProtocolIdSettlementsArgs = RequestOptionsBase & {
  path: GetSettlementsProtocolProtocolIdSettlementsPathParams
}

export type GetSettlementsProtocolSettlementsProtocolSettlementIdOperation = paths["/settlements/protocol/settlements/{ProtocolSettlementId}"]['get']
export type GetSettlementsProtocolSettlementsProtocolSettlementIdResponse = OperationResponse<GetSettlementsProtocolSettlementsProtocolSettlementIdOperation>
export type GetSettlementsProtocolSettlementsProtocolSettlementIdPathParams = OperationPathParams<GetSettlementsProtocolSettlementsProtocolSettlementIdOperation>
export type GetSettlementsProtocolSettlementsProtocolSettlementIdArgs = RequestOptionsBase & {
  path: GetSettlementsProtocolSettlementsProtocolSettlementIdPathParams
}

export type DeleteSettlementsProtocolSettlementsProtocolSettlementIdOperation = paths["/settlements/protocol/settlements/{ProtocolSettlementId}"]['delete']
export type DeleteSettlementsProtocolSettlementsProtocolSettlementIdResponse = OperationResponse<DeleteSettlementsProtocolSettlementsProtocolSettlementIdOperation>
export type DeleteSettlementsProtocolSettlementsProtocolSettlementIdPathParams = OperationPathParams<DeleteSettlementsProtocolSettlementsProtocolSettlementIdOperation>
export type DeleteSettlementsProtocolSettlementsProtocolSettlementIdArgs = RequestOptionsBase & {
  path: DeleteSettlementsProtocolSettlementsProtocolSettlementIdPathParams
}

export type PostSettlementsProtocolSettlementsOperation = paths["/settlements/protocol/settlements"]['post']
export type PostSettlementsProtocolSettlementsResponse = OperationResponse<PostSettlementsProtocolSettlementsOperation>
export type PostSettlementsProtocolSettlementsBody = OperationRequestBody<PostSettlementsProtocolSettlementsOperation>
export type PostSettlementsProtocolSettlementsArgs = RequestOptionsBase & {
  body: PostSettlementsProtocolSettlementsBody
}

export type GetSettlementsProtocolProtocolIdPatientsOperation = paths["/settlements/protocol/{ProtocolId}/patients"]['get']
export type GetSettlementsProtocolProtocolIdPatientsResponse = OperationResponse<GetSettlementsProtocolProtocolIdPatientsOperation>
export type GetSettlementsProtocolProtocolIdPatientsPathParams = OperationPathParams<GetSettlementsProtocolProtocolIdPatientsOperation>
export type GetSettlementsProtocolProtocolIdPatientsQueryParams = OperationQueryParams<GetSettlementsProtocolProtocolIdPatientsOperation>
export type GetSettlementsProtocolProtocolIdPatientsArgs = RequestOptionsBase & {
  path: GetSettlementsProtocolProtocolIdPatientsPathParams
  query?: GetSettlementsProtocolProtocolIdPatientsQueryParams
}

export type GetSettlementsSettlementsOperation = paths["/settlements/settlements"]['get']
export type GetSettlementsSettlementsResponse = OperationResponse<GetSettlementsSettlementsOperation>
export type GetSettlementsSettlementsArgs = RequestOptionsBase & {
}

export type PostSettlementsSettlementsOperation = paths["/settlements/settlements"]['post']
export type PostSettlementsSettlementsResponse = OperationResponse<PostSettlementsSettlementsOperation>
export type PostSettlementsSettlementsBody = OperationRequestBody<PostSettlementsSettlementsOperation>
export type PostSettlementsSettlementsArgs = RequestOptionsBase & {
  body: PostSettlementsSettlementsBody
}

export type PutSettlementsSettlementsOperation = paths["/settlements/settlements"]['put']
export type PutSettlementsSettlementsResponse = OperationResponse<PutSettlementsSettlementsOperation>
export type PutSettlementsSettlementsBody = OperationRequestBody<PutSettlementsSettlementsOperation>
export type PutSettlementsSettlementsArgs = RequestOptionsBase & {
  body: PutSettlementsSettlementsBody
}

export type PatchSettlementsSettlementsOperation = paths["/settlements/settlements"]['patch']
export type PatchSettlementsSettlementsResponse = OperationResponse<PatchSettlementsSettlementsOperation>
export type PatchSettlementsSettlementsBody = OperationRequestBody<PatchSettlementsSettlementsOperation>
export type PatchSettlementsSettlementsArgs = RequestOptionsBase & {
  body: PatchSettlementsSettlementsBody
}

export type GetSettlementsSettlementsSettlementIdOperation = paths["/settlements/settlements/{SettlementId}"]['get']
export type GetSettlementsSettlementsSettlementIdResponse = OperationResponse<GetSettlementsSettlementsSettlementIdOperation>
export type GetSettlementsSettlementsSettlementIdPathParams = OperationPathParams<GetSettlementsSettlementsSettlementIdOperation>
export type GetSettlementsSettlementsSettlementIdQueryParams = OperationQueryParams<GetSettlementsSettlementsSettlementIdOperation>
export type GetSettlementsSettlementsSettlementIdArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsSettlementIdPathParams
  query?: GetSettlementsSettlementsSettlementIdQueryParams
}

export type DeleteSettlementsSettlementsSettlementIdOperation = paths["/settlements/settlements/{SettlementId}"]['delete']
export type DeleteSettlementsSettlementsSettlementIdResponse = OperationResponse<DeleteSettlementsSettlementsSettlementIdOperation>
export type DeleteSettlementsSettlementsSettlementIdPathParams = OperationPathParams<DeleteSettlementsSettlementsSettlementIdOperation>
export type DeleteSettlementsSettlementsSettlementIdArgs = RequestOptionsBase & {
  path: DeleteSettlementsSettlementsSettlementIdPathParams
}

export type GetSettlementsSettlementsSettlementIdConceptsOperation = paths["/settlements/settlements/{SettlementId}/concepts"]['get']
export type GetSettlementsSettlementsSettlementIdConceptsResponse = OperationResponse<GetSettlementsSettlementsSettlementIdConceptsOperation>
export type GetSettlementsSettlementsSettlementIdConceptsPathParams = OperationPathParams<GetSettlementsSettlementsSettlementIdConceptsOperation>
export type GetSettlementsSettlementsSettlementIdConceptsArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsSettlementIdConceptsPathParams
}

export type GetSettlementsSettlementsConceptsSettlementConceptIdOperation = paths["/settlements/settlements/concepts/{SettlementConceptId}"]['get']
export type GetSettlementsSettlementsConceptsSettlementConceptIdResponse = OperationResponse<GetSettlementsSettlementsConceptsSettlementConceptIdOperation>
export type GetSettlementsSettlementsConceptsSettlementConceptIdPathParams = OperationPathParams<GetSettlementsSettlementsConceptsSettlementConceptIdOperation>
export type GetSettlementsSettlementsConceptsSettlementConceptIdArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsConceptsSettlementConceptIdPathParams
}

export type PostSettlementsSettlementsConceptsOperation = paths["/settlements/settlements/concepts"]['post']
export type PostSettlementsSettlementsConceptsResponse = OperationResponse<PostSettlementsSettlementsConceptsOperation>
export type PostSettlementsSettlementsConceptsBody = OperationRequestBody<PostSettlementsSettlementsConceptsOperation>
export type PostSettlementsSettlementsConceptsArgs = RequestOptionsBase & {
  body: PostSettlementsSettlementsConceptsBody
}

export type GetSettlementsSettlementsSettlementIdDebtsOperation = paths["/settlements/settlements/{SettlementId}/debts"]['get']
export type GetSettlementsSettlementsSettlementIdDebtsResponse = OperationResponse<GetSettlementsSettlementsSettlementIdDebtsOperation>
export type GetSettlementsSettlementsSettlementIdDebtsPathParams = OperationPathParams<GetSettlementsSettlementsSettlementIdDebtsOperation>
export type GetSettlementsSettlementsSettlementIdDebtsArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsSettlementIdDebtsPathParams
}

export type GetSettlementsSettlementsDebtsSettlementDebtIdOperation = paths["/settlements/settlements/debts/{SettlementDebtId}"]['get']
export type GetSettlementsSettlementsDebtsSettlementDebtIdResponse = OperationResponse<GetSettlementsSettlementsDebtsSettlementDebtIdOperation>
export type GetSettlementsSettlementsDebtsSettlementDebtIdPathParams = OperationPathParams<GetSettlementsSettlementsDebtsSettlementDebtIdOperation>
export type GetSettlementsSettlementsDebtsSettlementDebtIdArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsDebtsSettlementDebtIdPathParams
}

export type GetSettlementsSettlementsSettlementIdDetailsOperation = paths["/settlements/settlements/{SettlementId}/details"]['get']
export type GetSettlementsSettlementsSettlementIdDetailsResponse = OperationResponse<GetSettlementsSettlementsSettlementIdDetailsOperation>
export type GetSettlementsSettlementsSettlementIdDetailsPathParams = OperationPathParams<GetSettlementsSettlementsSettlementIdDetailsOperation>
export type GetSettlementsSettlementsSettlementIdDetailsArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsSettlementIdDetailsPathParams
}

export type GetSettlementsSettlementsDetailsSettlementDetailIdOperation = paths["/settlements/settlements/details/{SettlementDetailId}"]['get']
export type GetSettlementsSettlementsDetailsSettlementDetailIdResponse = OperationResponse<GetSettlementsSettlementsDetailsSettlementDetailIdOperation>
export type GetSettlementsSettlementsDetailsSettlementDetailIdPathParams = OperationPathParams<GetSettlementsSettlementsDetailsSettlementDetailIdOperation>
export type GetSettlementsSettlementsDetailsSettlementDetailIdArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsDetailsSettlementDetailIdPathParams
}

export type DeleteSettlementsSettlementsDetailsSettlementDetailIdOperation = paths["/settlements/settlements/details/{SettlementDetailId}"]['delete']
export type DeleteSettlementsSettlementsDetailsSettlementDetailIdResponse = OperationResponse<DeleteSettlementsSettlementsDetailsSettlementDetailIdOperation>
export type DeleteSettlementsSettlementsDetailsSettlementDetailIdPathParams = OperationPathParams<DeleteSettlementsSettlementsDetailsSettlementDetailIdOperation>
export type DeleteSettlementsSettlementsDetailsSettlementDetailIdArgs = RequestOptionsBase & {
  path: DeleteSettlementsSettlementsDetailsSettlementDetailIdPathParams
}

export type PostSettlementsSettlementsDetailsOperation = paths["/settlements/settlements/details"]['post']
export type PostSettlementsSettlementsDetailsResponse = OperationResponse<PostSettlementsSettlementsDetailsOperation>
export type PostSettlementsSettlementsDetailsBody = OperationRequestBody<PostSettlementsSettlementsDetailsOperation>
export type PostSettlementsSettlementsDetailsArgs = RequestOptionsBase & {
  body: PostSettlementsSettlementsDetailsBody
}

export type PutSettlementsSettlementsDetailsOperation = paths["/settlements/settlements/details"]['put']
export type PutSettlementsSettlementsDetailsResponse = OperationResponse<PutSettlementsSettlementsDetailsOperation>
export type PutSettlementsSettlementsDetailsBody = OperationRequestBody<PutSettlementsSettlementsDetailsOperation>
export type PutSettlementsSettlementsDetailsArgs = RequestOptionsBase & {
  body: PutSettlementsSettlementsDetailsBody
}

export type PatchSettlementsSettlementsDetailsSettlementDetailIdExcludeExcludeStatusOperation = paths["/settlements/settlements/details/{SettlementDetailId}/exclude/{excludeStatus}"]['patch']
export type PatchSettlementsSettlementsDetailsSettlementDetailIdExcludeExcludeStatusResponse = OperationResponse<PatchSettlementsSettlementsDetailsSettlementDetailIdExcludeExcludeStatusOperation>
export type PatchSettlementsSettlementsDetailsSettlementDetailIdExcludeExcludeStatusPathParams = OperationPathParams<PatchSettlementsSettlementsDetailsSettlementDetailIdExcludeExcludeStatusOperation>
export type PatchSettlementsSettlementsDetailsSettlementDetailIdExcludeExcludeStatusArgs = RequestOptionsBase & {
  path: PatchSettlementsSettlementsDetailsSettlementDetailIdExcludeExcludeStatusPathParams
}

export type PatchSettlementsSettlementsDetailsExcludeExcludeStatusOperation = paths["/settlements/settlements/details/exclude/{excludeStatus}"]['patch']
export type PatchSettlementsSettlementsDetailsExcludeExcludeStatusResponse = OperationResponse<PatchSettlementsSettlementsDetailsExcludeExcludeStatusOperation>
export type PatchSettlementsSettlementsDetailsExcludeExcludeStatusPathParams = OperationPathParams<PatchSettlementsSettlementsDetailsExcludeExcludeStatusOperation>
export type PatchSettlementsSettlementsDetailsExcludeExcludeStatusQueryParams = OperationQueryParams<PatchSettlementsSettlementsDetailsExcludeExcludeStatusOperation>
export type PatchSettlementsSettlementsDetailsExcludeExcludeStatusArgs = RequestOptionsBase & {
  path: PatchSettlementsSettlementsDetailsExcludeExcludeStatusPathParams
  query?: PatchSettlementsSettlementsDetailsExcludeExcludeStatusQueryParams
}

export type PatchSettlementsSettlementsDetailsSettlementDetailIdMarkokStatusOperation = paths["/settlements/settlements/details/{SettlementDetailId}/markok/{Status}"]['patch']
export type PatchSettlementsSettlementsDetailsSettlementDetailIdMarkokStatusResponse = OperationResponse<PatchSettlementsSettlementsDetailsSettlementDetailIdMarkokStatusOperation>
export type PatchSettlementsSettlementsDetailsSettlementDetailIdMarkokStatusPathParams = OperationPathParams<PatchSettlementsSettlementsDetailsSettlementDetailIdMarkokStatusOperation>
export type PatchSettlementsSettlementsDetailsSettlementDetailIdMarkokStatusArgs = RequestOptionsBase & {
  path: PatchSettlementsSettlementsDetailsSettlementDetailIdMarkokStatusPathParams
}

export type PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusOperation = paths["/settlements/settlements/details/{SettlementDetailId}/marktoreview/{Status}"]['patch']
export type PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusResponse = OperationResponse<PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusOperation>
export type PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusPathParams = OperationPathParams<PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusOperation>
export type PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusQueryParams = OperationQueryParams<PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusOperation>
export type PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusArgs = RequestOptionsBase & {
  path: PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusPathParams
  query?: PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusQueryParams
}

export type GetSettlementsSettlementsDetailsDetailIdConceptValuesOperation = paths["/settlements/settlements/details/{DetailId}/concept-values"]['get']
export type GetSettlementsSettlementsDetailsDetailIdConceptValuesResponse = OperationResponse<GetSettlementsSettlementsDetailsDetailIdConceptValuesOperation>
export type GetSettlementsSettlementsDetailsDetailIdConceptValuesPathParams = OperationPathParams<GetSettlementsSettlementsDetailsDetailIdConceptValuesOperation>
export type GetSettlementsSettlementsDetailsDetailIdConceptValuesArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsDetailsDetailIdConceptValuesPathParams
}

export type GetSettlementsSettlementsDetailsConceptValuesConceptValueIdOperation = paths["/settlements/settlements/details/concept-values/{ConceptValueId}"]['get']
export type GetSettlementsSettlementsDetailsConceptValuesConceptValueIdResponse = OperationResponse<GetSettlementsSettlementsDetailsConceptValuesConceptValueIdOperation>
export type GetSettlementsSettlementsDetailsConceptValuesConceptValueIdPathParams = OperationPathParams<GetSettlementsSettlementsDetailsConceptValuesConceptValueIdOperation>
export type GetSettlementsSettlementsDetailsConceptValuesConceptValueIdArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsDetailsConceptValuesConceptValueIdPathParams
}

export type DeleteSettlementsSettlementsDetailsConceptValuesConceptValueIdOperation = paths["/settlements/settlements/details/concept-values/{ConceptValueId}"]['delete']
export type DeleteSettlementsSettlementsDetailsConceptValuesConceptValueIdResponse = OperationResponse<DeleteSettlementsSettlementsDetailsConceptValuesConceptValueIdOperation>
export type DeleteSettlementsSettlementsDetailsConceptValuesConceptValueIdPathParams = OperationPathParams<DeleteSettlementsSettlementsDetailsConceptValuesConceptValueIdOperation>
export type DeleteSettlementsSettlementsDetailsConceptValuesConceptValueIdArgs = RequestOptionsBase & {
  path: DeleteSettlementsSettlementsDetailsConceptValuesConceptValueIdPathParams
}

export type PostSettlementsSettlementsDetailsConceptValuesOperation = paths["/settlements/settlements/details/concept-values"]['post']
export type PostSettlementsSettlementsDetailsConceptValuesResponse = OperationResponse<PostSettlementsSettlementsDetailsConceptValuesOperation>
export type PostSettlementsSettlementsDetailsConceptValuesBody = OperationRequestBody<PostSettlementsSettlementsDetailsConceptValuesOperation>
export type PostSettlementsSettlementsDetailsConceptValuesArgs = RequestOptionsBase & {
  body: PostSettlementsSettlementsDetailsConceptValuesBody
}

export type PutSettlementsSettlementsDetailsConceptValuesOperation = paths["/settlements/settlements/details/concept-values"]['put']
export type PutSettlementsSettlementsDetailsConceptValuesResponse = OperationResponse<PutSettlementsSettlementsDetailsConceptValuesOperation>
export type PutSettlementsSettlementsDetailsConceptValuesBody = OperationRequestBody<PutSettlementsSettlementsDetailsConceptValuesOperation>
export type PutSettlementsSettlementsDetailsConceptValuesArgs = RequestOptionsBase & {
  body: PutSettlementsSettlementsDetailsConceptValuesBody
}

export type GetSettlementsSettlementsSettlementIdResumesOperation = paths["/settlements/settlements/{SettlementId}/resumes"]['get']
export type GetSettlementsSettlementsSettlementIdResumesResponse = OperationResponse<GetSettlementsSettlementsSettlementIdResumesOperation>
export type GetSettlementsSettlementsSettlementIdResumesPathParams = OperationPathParams<GetSettlementsSettlementsSettlementIdResumesOperation>
export type GetSettlementsSettlementsSettlementIdResumesArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsSettlementIdResumesPathParams
}

export type GetSettlementsSettlementsResumesSettlementResumeIdOperation = paths["/settlements/settlements/resumes/{SettlementResumeId}"]['get']
export type GetSettlementsSettlementsResumesSettlementResumeIdResponse = OperationResponse<GetSettlementsSettlementsResumesSettlementResumeIdOperation>
export type GetSettlementsSettlementsResumesSettlementResumeIdPathParams = OperationPathParams<GetSettlementsSettlementsResumesSettlementResumeIdOperation>
export type GetSettlementsSettlementsResumesSettlementResumeIdArgs = RequestOptionsBase & {
  path: GetSettlementsSettlementsResumesSettlementResumeIdPathParams
}

export type DeleteSettlementsSettlementsResumesSettlementResumeIdOperation = paths["/settlements/settlements/resumes/{SettlementResumeId}"]['delete']
export type DeleteSettlementsSettlementsResumesSettlementResumeIdResponse = OperationResponse<DeleteSettlementsSettlementsResumesSettlementResumeIdOperation>
export type DeleteSettlementsSettlementsResumesSettlementResumeIdPathParams = OperationPathParams<DeleteSettlementsSettlementsResumesSettlementResumeIdOperation>
export type DeleteSettlementsSettlementsResumesSettlementResumeIdArgs = RequestOptionsBase & {
  path: DeleteSettlementsSettlementsResumesSettlementResumeIdPathParams
}

export type PostSettlementsSettlementsResumesOperation = paths["/settlements/settlements/resumes"]['post']
export type PostSettlementsSettlementsResumesResponse = OperationResponse<PostSettlementsSettlementsResumesOperation>
export type PostSettlementsSettlementsResumesBody = OperationRequestBody<PostSettlementsSettlementsResumesOperation>
export type PostSettlementsSettlementsResumesArgs = RequestOptionsBase & {
  body: PostSettlementsSettlementsResumesBody
}

export type PutSettlementsSettlementsResumesOperation = paths["/settlements/settlements/resumes"]['put']
export type PutSettlementsSettlementsResumesResponse = OperationResponse<PutSettlementsSettlementsResumesOperation>
export type PutSettlementsSettlementsResumesBody = OperationRequestBody<PutSettlementsSettlementsResumesOperation>
export type PutSettlementsSettlementsResumesArgs = RequestOptionsBase & {
  body: PutSettlementsSettlementsResumesBody
}

export type GetSettlementsSponsorsSponsorIdSettlementsOperation = paths["/settlements/Sponsors/{SponsorId}/settlements"]['get']
export type GetSettlementsSponsorsSponsorIdSettlementsResponse = OperationResponse<GetSettlementsSponsorsSponsorIdSettlementsOperation>
export type GetSettlementsSponsorsSponsorIdSettlementsPathParams = OperationPathParams<GetSettlementsSponsorsSponsorIdSettlementsOperation>
export type GetSettlementsSponsorsSponsorIdSettlementsArgs = RequestOptionsBase & {
  path: GetSettlementsSponsorsSponsorIdSettlementsPathParams
}

export type GetSettlementsSponsorsSettlementsSponsorSettlementIdOperation = paths["/settlements/Sponsors/settlements/{SponsorSettlementId}"]['get']
export type GetSettlementsSponsorsSettlementsSponsorSettlementIdResponse = OperationResponse<GetSettlementsSponsorsSettlementsSponsorSettlementIdOperation>
export type GetSettlementsSponsorsSettlementsSponsorSettlementIdPathParams = OperationPathParams<GetSettlementsSponsorsSettlementsSponsorSettlementIdOperation>
export type GetSettlementsSponsorsSettlementsSponsorSettlementIdArgs = RequestOptionsBase & {
  path: GetSettlementsSponsorsSettlementsSponsorSettlementIdPathParams
}

export type DeleteSettlementsSponsorsSettlementsSponsorSettlementIdOperation = paths["/settlements/Sponsors/settlements/{SponsorSettlementId}"]['delete']
export type DeleteSettlementsSponsorsSettlementsSponsorSettlementIdResponse = OperationResponse<DeleteSettlementsSponsorsSettlementsSponsorSettlementIdOperation>
export type DeleteSettlementsSponsorsSettlementsSponsorSettlementIdPathParams = OperationPathParams<DeleteSettlementsSponsorsSettlementsSponsorSettlementIdOperation>
export type DeleteSettlementsSponsorsSettlementsSponsorSettlementIdArgs = RequestOptionsBase & {
  path: DeleteSettlementsSponsorsSettlementsSponsorSettlementIdPathParams
}

export type PostSettlementsSponsorsSettlementsOperation = paths["/settlements/Sponsors/settlements"]['post']
export type PostSettlementsSponsorsSettlementsResponse = OperationResponse<PostSettlementsSponsorsSettlementsOperation>
export type PostSettlementsSponsorsSettlementsBody = OperationRequestBody<PostSettlementsSponsorsSettlementsOperation>
export type PostSettlementsSponsorsSettlementsArgs = RequestOptionsBase & {
  body: PostSettlementsSponsorsSettlementsBody
}

export function createSettlementsApi(client: HttpClient) {
  return {
    getAllSettlementsByContractId(args: GetSettlementsContractContractIDSettlementsArgs) {
      return client.request<GetSettlementsContractContractIDSettlementsResponse>({
        method: 'GET',
        path: '/settlements/contract/{ContractID}/settlements',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractSettlementById(args: GetSettlementsContractSettlementsContractSettlementIdArgs) {
      return client.request<GetSettlementsContractSettlementsContractSettlementIdResponse>({
        method: 'GET',
        path: '/settlements/contract/settlements/{ContractSettlementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateSettlementToContract(args: PostSettlementsContractSettlementsArgs) {
      return client.request<PostSettlementsContractSettlementsResponse>({
        method: 'POST',
        path: '/settlements/contract/settlements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateSettlementFromContract(args: DeleteSettlementsContractSettlementsAssociationIdArgs) {
      return client.request<DeleteSettlementsContractSettlementsAssociationIdResponse>({
        method: 'DELETE',
        path: '/settlements/contract/settlements/{associationId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllSettlementsByAgreementId(args: GetSettlementsMedicalagreementsAgreementIdSettlementsArgs) {
      return client.request<GetSettlementsMedicalagreementsAgreementIdSettlementsResponse>({
        method: 'GET',
        path: '/settlements/medicalagreements/{agreementId}/settlements',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgreementSettlementById(args: GetSettlementsMedicalagreementsSettlementsAgreementSettlementIdArgs) {
      return client.request<GetSettlementsMedicalagreementsSettlementsAgreementSettlementIdResponse>({
        method: 'GET',
        path: '/settlements/medicalagreements/settlements/{AgreementSettlementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateSettlementToAgreement(args: PostSettlementsMedicalagreementsSettlementsArgs) {
      return client.request<PostSettlementsMedicalagreementsSettlementsResponse>({
        method: 'POST',
        path: '/settlements/medicalagreements/settlements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateSettlementFromAgreement(args: DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdArgs) {
      return client.request<DeleteSettlementsMedicalagreementsSettlementsContractSettlementIdResponse>({
        method: 'DELETE',
        path: '/settlements/medicalagreements/settlements/{ContractSettlementId}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSettlementsInfo(args: GetSettlementsInfoArgs = {}) {
      return client.request<GetSettlementsInfoResponse>({
        method: 'GET',
        path: '/settlements/info',
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllSettlementsByPractitionerId(args: GetSettlementsPractitionersPractitionerIdSettlementsArgs) {
      return client.request<GetSettlementsPractitionersPractitionerIdSettlementsResponse>({
        method: 'GET',
        path: '/settlements/Practitioners/{PractitionerId}/settlements',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionerSettlementById(args: GetSettlementsPractitionersSettlementsPractitionerSettlementIdArgs) {
      return client.request<GetSettlementsPractitionersSettlementsPractitionerSettlementIdResponse>({
        method: 'GET',
        path: '/settlements/Practitioners/settlements/{PractitionerSettlementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateSettlementFromPractitioner(args: DeleteSettlementsPractitionersSettlementsPractitionerSettlementIdArgs) {
      return client.request<DeleteSettlementsPractitionersSettlementsPractitionerSettlementIdResponse>({
        method: 'DELETE',
        path: '/settlements/Practitioners/settlements/{PractitionerSettlementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateSettlementToPractitioner(args: PostSettlementsPractitionersSettlementsArgs) {
      return client.request<PostSettlementsPractitionersSettlementsResponse>({
        method: 'POST',
        path: '/settlements/Practitioners/settlements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllSettlementsByProtocolId(args: GetSettlementsProtocolProtocolIdSettlementsArgs) {
      return client.request<GetSettlementsProtocolProtocolIdSettlementsResponse>({
        method: 'GET',
        path: '/settlements/protocol/{ProtocolId}/settlements',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProtocolSettlementById(args: GetSettlementsProtocolSettlementsProtocolSettlementIdArgs) {
      return client.request<GetSettlementsProtocolSettlementsProtocolSettlementIdResponse>({
        method: 'GET',
        path: '/settlements/protocol/settlements/{ProtocolSettlementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateSettlementFromProtocol(args: DeleteSettlementsProtocolSettlementsProtocolSettlementIdArgs) {
      return client.request<DeleteSettlementsProtocolSettlementsProtocolSettlementIdResponse>({
        method: 'DELETE',
        path: '/settlements/protocol/settlements/{ProtocolSettlementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateSettlementToProtocol(args: PostSettlementsProtocolSettlementsArgs) {
      return client.request<PostSettlementsProtocolSettlementsResponse>({
        method: 'POST',
        path: '/settlements/protocol/settlements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllPatientsByProtocolId(args: GetSettlementsProtocolProtocolIdPatientsArgs) {
      return client.request<GetSettlementsProtocolProtocolIdPatientsResponse>({
        method: 'GET',
        path: '/settlements/protocol/{ProtocolId}/patients',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllSettlements(args: GetSettlementsSettlementsArgs = {}) {
      return client.request<GetSettlementsSettlementsResponse>({
        method: 'GET',
        path: '/settlements/settlements',
        headers: args.headers,
        signal: args.signal,
      })
    },
    createSettlement(args: PostSettlementsSettlementsArgs) {
      return client.request<PostSettlementsSettlementsResponse>({
        method: 'POST',
        path: '/settlements/settlements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateSettlement(args: PutSettlementsSettlementsArgs) {
      return client.request<PutSettlementsSettlementsResponse>({
        method: 'PUT',
        path: '/settlements/settlements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    changeStatus(args: PatchSettlementsSettlementsArgs) {
      return client.request<PatchSettlementsSettlementsResponse>({
        method: 'PATCH',
        path: '/settlements/settlements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSettlementById(args: GetSettlementsSettlementsSettlementIdArgs) {
      return client.request<GetSettlementsSettlementsSettlementIdResponse>({
        method: 'GET',
        path: '/settlements/settlements/{SettlementId}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteSettlement(args: DeleteSettlementsSettlementsSettlementIdArgs) {
      return client.request<DeleteSettlementsSettlementsSettlementIdResponse>({
        method: 'DELETE',
        path: '/settlements/settlements/{SettlementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllSettlementConcept(args: GetSettlementsSettlementsSettlementIdConceptsArgs) {
      return client.request<GetSettlementsSettlementsSettlementIdConceptsResponse>({
        method: 'GET',
        path: '/settlements/settlements/{SettlementId}/concepts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSettlementConceptById(args: GetSettlementsSettlementsConceptsSettlementConceptIdArgs) {
      return client.request<GetSettlementsSettlementsConceptsSettlementConceptIdResponse>({
        method: 'GET',
        path: '/settlements/settlements/concepts/{SettlementConceptId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addSettlementConcept(args: PostSettlementsSettlementsConceptsArgs) {
      return client.request<PostSettlementsSettlementsConceptsResponse>({
        method: 'POST',
        path: '/settlements/settlements/concepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllDebtsBySettlementId(args: GetSettlementsSettlementsSettlementIdDebtsArgs) {
      return client.request<GetSettlementsSettlementsSettlementIdDebtsResponse>({
        method: 'GET',
        path: '/settlements/settlements/{SettlementId}/debts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSettlementDebtById(args: GetSettlementsSettlementsDebtsSettlementDebtIdArgs) {
      return client.request<GetSettlementsSettlementsDebtsSettlementDebtIdResponse>({
        method: 'GET',
        path: '/settlements/settlements/debts/{SettlementDebtId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllDetailsBySettlementId(args: GetSettlementsSettlementsSettlementIdDetailsArgs) {
      return client.request<GetSettlementsSettlementsSettlementIdDetailsResponse>({
        method: 'GET',
        path: '/settlements/settlements/{SettlementId}/details',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSettlementDetailsById(args: GetSettlementsSettlementsDetailsSettlementDetailIdArgs) {
      return client.request<GetSettlementsSettlementsDetailsSettlementDetailIdResponse>({
        method: 'GET',
        path: '/settlements/settlements/details/{SettlementDetailId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteSettlementDetail(args: DeleteSettlementsSettlementsDetailsSettlementDetailIdArgs) {
      return client.request<DeleteSettlementsSettlementsDetailsSettlementDetailIdResponse>({
        method: 'DELETE',
        path: '/settlements/settlements/details/{SettlementDetailId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createSettlementDetail(args: PostSettlementsSettlementsDetailsArgs) {
      return client.request<PostSettlementsSettlementsDetailsResponse>({
        method: 'POST',
        path: '/settlements/settlements/details',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateSettlementDetail(args: PutSettlementsSettlementsDetailsArgs) {
      return client.request<PutSettlementsSettlementsDetailsResponse>({
        method: 'PUT',
        path: '/settlements/settlements/details',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    excludeSettlementDetail(args: PatchSettlementsSettlementsDetailsSettlementDetailIdExcludeExcludeStatusArgs) {
      return client.request<PatchSettlementsSettlementsDetailsSettlementDetailIdExcludeExcludeStatusResponse>({
        method: 'PATCH',
        path: '/settlements/settlements/details/{SettlementDetailId}/exclude/{excludeStatus}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    masiveExcludeSettlementDetail(args: PatchSettlementsSettlementsDetailsExcludeExcludeStatusArgs) {
      return client.request<PatchSettlementsSettlementsDetailsExcludeExcludeStatusResponse>({
        method: 'PATCH',
        path: '/settlements/settlements/details/exclude/{excludeStatus}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    verifiedSettlementDetail(args: PatchSettlementsSettlementsDetailsSettlementDetailIdMarkokStatusArgs) {
      return client.request<PatchSettlementsSettlementsDetailsSettlementDetailIdMarkokStatusResponse>({
        method: 'PATCH',
        path: '/settlements/settlements/details/{SettlementDetailId}/markok/{Status}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    reviewSettlementDetail(args: PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusArgs) {
      return client.request<PatchSettlementsSettlementsDetailsSettlementDetailIdMarktoreviewStatusResponse>({
        method: 'PATCH',
        path: '/settlements/settlements/details/{SettlementDetailId}/marktoreview/{Status}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllConceptValuesBySettlementDetailId(args: GetSettlementsSettlementsDetailsDetailIdConceptValuesArgs) {
      return client.request<GetSettlementsSettlementsDetailsDetailIdConceptValuesResponse>({
        method: 'GET',
        path: '/settlements/settlements/details/{DetailId}/concept-values',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSettlementDetailConceptValueById(args: GetSettlementsSettlementsDetailsConceptValuesConceptValueIdArgs) {
      return client.request<GetSettlementsSettlementsDetailsConceptValuesConceptValueIdResponse>({
        method: 'GET',
        path: '/settlements/settlements/details/concept-values/{ConceptValueId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteSettlementDetailConceptValueById(args: DeleteSettlementsSettlementsDetailsConceptValuesConceptValueIdArgs) {
      return client.request<DeleteSettlementsSettlementsDetailsConceptValuesConceptValueIdResponse>({
        method: 'DELETE',
        path: '/settlements/settlements/details/concept-values/{ConceptValueId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createSettlementDetailConceptValue(args: PostSettlementsSettlementsDetailsConceptValuesArgs) {
      return client.request<PostSettlementsSettlementsDetailsConceptValuesResponse>({
        method: 'POST',
        path: '/settlements/settlements/details/concept-values',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateSettlementDetailConceptValue(args: PutSettlementsSettlementsDetailsConceptValuesArgs) {
      return client.request<PutSettlementsSettlementsDetailsConceptValuesResponse>({
        method: 'PUT',
        path: '/settlements/settlements/details/concept-values',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllResumesBySettlementId(args: GetSettlementsSettlementsSettlementIdResumesArgs) {
      return client.request<GetSettlementsSettlementsSettlementIdResumesResponse>({
        method: 'GET',
        path: '/settlements/settlements/{SettlementId}/resumes',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSettlementResumeById(args: GetSettlementsSettlementsResumesSettlementResumeIdArgs) {
      return client.request<GetSettlementsSettlementsResumesSettlementResumeIdResponse>({
        method: 'GET',
        path: '/settlements/settlements/resumes/{SettlementResumeId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteSettlementResume(args: DeleteSettlementsSettlementsResumesSettlementResumeIdArgs) {
      return client.request<DeleteSettlementsSettlementsResumesSettlementResumeIdResponse>({
        method: 'DELETE',
        path: '/settlements/settlements/resumes/{SettlementResumeId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createSettlementResume(args: PostSettlementsSettlementsResumesArgs) {
      return client.request<PostSettlementsSettlementsResumesResponse>({
        method: 'POST',
        path: '/settlements/settlements/resumes',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateSettlementResume(args: PutSettlementsSettlementsResumesArgs) {
      return client.request<PutSettlementsSettlementsResumesResponse>({
        method: 'PUT',
        path: '/settlements/settlements/resumes',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllSettlementsBySponsorId(args: GetSettlementsSponsorsSponsorIdSettlementsArgs) {
      return client.request<GetSettlementsSponsorsSponsorIdSettlementsResponse>({
        method: 'GET',
        path: '/settlements/Sponsors/{SponsorId}/settlements',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSponsorSettlementById(args: GetSettlementsSponsorsSettlementsSponsorSettlementIdArgs) {
      return client.request<GetSettlementsSponsorsSettlementsSponsorSettlementIdResponse>({
        method: 'GET',
        path: '/settlements/Sponsors/settlements/{SponsorSettlementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateSettlementFromSponsor(args: DeleteSettlementsSponsorsSettlementsSponsorSettlementIdArgs) {
      return client.request<DeleteSettlementsSponsorsSettlementsSponsorSettlementIdResponse>({
        method: 'DELETE',
        path: '/settlements/Sponsors/settlements/{SponsorSettlementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateSettlementToSponsor(args: PostSettlementsSponsorsSettlementsArgs) {
      return client.request<PostSettlementsSponsorsSettlementsResponse>({
        method: 'POST',
        path: '/settlements/Sponsors/settlements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
