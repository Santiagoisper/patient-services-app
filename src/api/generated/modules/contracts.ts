import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/contracts.ts'

export type GetContractsContractIDCommissionconceptsOperation = paths["/contracts/{ContractID}/commissionconcepts"]['get']
export type GetContractsContractIDCommissionconceptsResponse = OperationResponse<GetContractsContractIDCommissionconceptsOperation>
export type GetContractsContractIDCommissionconceptsPathParams = OperationPathParams<GetContractsContractIDCommissionconceptsOperation>
export type GetContractsContractIDCommissionconceptsArgs = RequestOptionsBase & {
  path: GetContractsContractIDCommissionconceptsPathParams
}

export type GetContractsCommissionconceptsCommissionConceptIdOperation = paths["/contracts/commissionconcepts/{CommissionConceptId}"]['get']
export type GetContractsCommissionconceptsCommissionConceptIdResponse = OperationResponse<GetContractsCommissionconceptsCommissionConceptIdOperation>
export type GetContractsCommissionconceptsCommissionConceptIdPathParams = OperationPathParams<GetContractsCommissionconceptsCommissionConceptIdOperation>
export type GetContractsCommissionconceptsCommissionConceptIdArgs = RequestOptionsBase & {
  path: GetContractsCommissionconceptsCommissionConceptIdPathParams
}

export type DeleteContractsCommissionconceptsCommissionConceptIdOperation = paths["/contracts/commissionconcepts/{CommissionConceptId}"]['delete']
export type DeleteContractsCommissionconceptsCommissionConceptIdResponse = OperationResponse<DeleteContractsCommissionconceptsCommissionConceptIdOperation>
export type DeleteContractsCommissionconceptsCommissionConceptIdPathParams = OperationPathParams<DeleteContractsCommissionconceptsCommissionConceptIdOperation>
export type DeleteContractsCommissionconceptsCommissionConceptIdArgs = RequestOptionsBase & {
  path: DeleteContractsCommissionconceptsCommissionConceptIdPathParams
}

export type PostContractsCommissionconceptsOperation = paths["/contracts/commissionconcepts"]['post']
export type PostContractsCommissionconceptsResponse = OperationResponse<PostContractsCommissionconceptsOperation>
export type PostContractsCommissionconceptsBody = OperationRequestBody<PostContractsCommissionconceptsOperation>
export type PostContractsCommissionconceptsArgs = RequestOptionsBase & {
  body: PostContractsCommissionconceptsBody
}

export type PutContractsCommissionconceptsOperation = paths["/contracts/commissionconcepts"]['put']
export type PutContractsCommissionconceptsResponse = OperationResponse<PutContractsCommissionconceptsOperation>
export type PutContractsCommissionconceptsBody = OperationRequestBody<PutContractsCommissionconceptsOperation>
export type PutContractsCommissionconceptsArgs = RequestOptionsBase & {
  body: PutContractsCommissionconceptsBody
}

export type GetContractsConceptsContractConceptIdBranchesOperation = paths["/contracts/concepts/{contractConceptId}/branches"]['get']
export type GetContractsConceptsContractConceptIdBranchesResponse = OperationResponse<GetContractsConceptsContractConceptIdBranchesOperation>
export type GetContractsConceptsContractConceptIdBranchesPathParams = OperationPathParams<GetContractsConceptsContractConceptIdBranchesOperation>
export type GetContractsConceptsContractConceptIdBranchesArgs = RequestOptionsBase & {
  path: GetContractsConceptsContractConceptIdBranchesPathParams
}

export type PostContractsConceptsContractConceptIdBranchesOperation = paths["/contracts/concepts/{contractConceptId}/branches"]['post']
export type PostContractsConceptsContractConceptIdBranchesResponse = OperationResponse<PostContractsConceptsContractConceptIdBranchesOperation>
export type PostContractsConceptsContractConceptIdBranchesPathParams = OperationPathParams<PostContractsConceptsContractConceptIdBranchesOperation>
export type PostContractsConceptsContractConceptIdBranchesBody = OperationRequestBody<PostContractsConceptsContractConceptIdBranchesOperation>
export type PostContractsConceptsContractConceptIdBranchesArgs = RequestOptionsBase & {
  path: PostContractsConceptsContractConceptIdBranchesPathParams
  body: PostContractsConceptsContractConceptIdBranchesBody
}

export type GetContractsConceptsBranchesConceptBranchIdOperation = paths["/contracts/concepts/branches/{conceptBranchId}"]['get']
export type GetContractsConceptsBranchesConceptBranchIdResponse = OperationResponse<GetContractsConceptsBranchesConceptBranchIdOperation>
export type GetContractsConceptsBranchesConceptBranchIdPathParams = OperationPathParams<GetContractsConceptsBranchesConceptBranchIdOperation>
export type GetContractsConceptsBranchesConceptBranchIdArgs = RequestOptionsBase & {
  path: GetContractsConceptsBranchesConceptBranchIdPathParams
}

export type PutContractsConceptsBranchesConceptBranchIdOperation = paths["/contracts/concepts/branches/{conceptBranchId}"]['put']
export type PutContractsConceptsBranchesConceptBranchIdResponse = OperationResponse<PutContractsConceptsBranchesConceptBranchIdOperation>
export type PutContractsConceptsBranchesConceptBranchIdPathParams = OperationPathParams<PutContractsConceptsBranchesConceptBranchIdOperation>
export type PutContractsConceptsBranchesConceptBranchIdBody = OperationRequestBody<PutContractsConceptsBranchesConceptBranchIdOperation>
export type PutContractsConceptsBranchesConceptBranchIdArgs = RequestOptionsBase & {
  path: PutContractsConceptsBranchesConceptBranchIdPathParams
  body: PutContractsConceptsBranchesConceptBranchIdBody
}

export type DeleteContractsConceptsBranchesConceptBranchIdOperation = paths["/contracts/concepts/branches/{conceptBranchId}"]['delete']
export type DeleteContractsConceptsBranchesConceptBranchIdResponse = OperationResponse<DeleteContractsConceptsBranchesConceptBranchIdOperation>
export type DeleteContractsConceptsBranchesConceptBranchIdPathParams = OperationPathParams<DeleteContractsConceptsBranchesConceptBranchIdOperation>
export type DeleteContractsConceptsBranchesConceptBranchIdArgs = RequestOptionsBase & {
  path: DeleteContractsConceptsBranchesConceptBranchIdPathParams
}

export type GetContractsContractIdAccessOperation = paths["/contracts/{ContractId}/access"]['get']
export type GetContractsContractIdAccessResponse = OperationResponse<GetContractsContractIdAccessOperation>
export type GetContractsContractIdAccessPathParams = OperationPathParams<GetContractsContractIdAccessOperation>
export type GetContractsContractIdAccessArgs = RequestOptionsBase & {
  path: GetContractsContractIdAccessPathParams
}

export type GetContractsAccessContractAccessIdOperation = paths["/contracts/access/{ContractAccessId}"]['get']
export type GetContractsAccessContractAccessIdResponse = OperationResponse<GetContractsAccessContractAccessIdOperation>
export type GetContractsAccessContractAccessIdPathParams = OperationPathParams<GetContractsAccessContractAccessIdOperation>
export type GetContractsAccessContractAccessIdArgs = RequestOptionsBase & {
  path: GetContractsAccessContractAccessIdPathParams
}

export type DeleteContractsAccessContractAccessIdOperation = paths["/contracts/access/{ContractAccessId}"]['delete']
export type DeleteContractsAccessContractAccessIdResponse = OperationResponse<DeleteContractsAccessContractAccessIdOperation>
export type DeleteContractsAccessContractAccessIdPathParams = OperationPathParams<DeleteContractsAccessContractAccessIdOperation>
export type DeleteContractsAccessContractAccessIdArgs = RequestOptionsBase & {
  path: DeleteContractsAccessContractAccessIdPathParams
}

export type PostContractsAccessOperation = paths["/contracts/access"]['post']
export type PostContractsAccessResponse = OperationResponse<PostContractsAccessOperation>
export type PostContractsAccessBody = OperationRequestBody<PostContractsAccessOperation>
export type PostContractsAccessArgs = RequestOptionsBase & {
  body: PostContractsAccessBody
}

export type PutContractsAccessOperation = paths["/contracts/access"]['put']
export type PutContractsAccessResponse = OperationResponse<PutContractsAccessOperation>
export type PutContractsAccessBody = OperationRequestBody<PutContractsAccessOperation>
export type PutContractsAccessArgs = RequestOptionsBase & {
  body: PutContractsAccessBody
}

export type GetContractsContractIdAddendumsOperation = paths["/contracts/{ContractId}/addendums"]['get']
export type GetContractsContractIdAddendumsResponse = OperationResponse<GetContractsContractIdAddendumsOperation>
export type GetContractsContractIdAddendumsPathParams = OperationPathParams<GetContractsContractIdAddendumsOperation>
export type GetContractsContractIdAddendumsArgs = RequestOptionsBase & {
  path: GetContractsContractIdAddendumsPathParams
}

export type GetContractsAddendumsContractAddendumIdOperation = paths["/contracts/addendums/{ContractAddendumId}"]['get']
export type GetContractsAddendumsContractAddendumIdResponse = OperationResponse<GetContractsAddendumsContractAddendumIdOperation>
export type GetContractsAddendumsContractAddendumIdPathParams = OperationPathParams<GetContractsAddendumsContractAddendumIdOperation>
export type GetContractsAddendumsContractAddendumIdArgs = RequestOptionsBase & {
  path: GetContractsAddendumsContractAddendumIdPathParams
}

export type DeleteContractsAddendumsContractAddendumIdOperation = paths["/contracts/addendums/{ContractAddendumId}"]['delete']
export type DeleteContractsAddendumsContractAddendumIdResponse = OperationResponse<DeleteContractsAddendumsContractAddendumIdOperation>
export type DeleteContractsAddendumsContractAddendumIdPathParams = OperationPathParams<DeleteContractsAddendumsContractAddendumIdOperation>
export type DeleteContractsAddendumsContractAddendumIdArgs = RequestOptionsBase & {
  path: DeleteContractsAddendumsContractAddendumIdPathParams
}

export type PostContractsAddendumsOperation = paths["/contracts/addendums"]['post']
export type PostContractsAddendumsResponse = OperationResponse<PostContractsAddendumsOperation>
export type PostContractsAddendumsBody = OperationRequestBody<PostContractsAddendumsOperation>
export type PostContractsAddendumsArgs = RequestOptionsBase & {
  body: PostContractsAddendumsBody
}

export type PutContractsAddendumsOperation = paths["/contracts/addendums"]['put']
export type PutContractsAddendumsResponse = OperationResponse<PutContractsAddendumsOperation>
export type PutContractsAddendumsBody = OperationRequestBody<PutContractsAddendumsOperation>
export type PutContractsAddendumsArgs = RequestOptionsBase & {
  body: PutContractsAddendumsBody
}

export type PostContractsAddendumsCloneOperation = paths["/contracts/addendums/clone"]['post']
export type PostContractsAddendumsCloneResponse = OperationResponse<PostContractsAddendumsCloneOperation>
export type PostContractsAddendumsCloneBody = OperationRequestBody<PostContractsAddendumsCloneOperation>
export type PostContractsAddendumsCloneArgs = RequestOptionsBase & {
  body: PostContractsAddendumsCloneBody
}

export type GetContractsContractIdBranchesOperation = paths["/contracts/{ContractId}/branches"]['get']
export type GetContractsContractIdBranchesResponse = OperationResponse<GetContractsContractIdBranchesOperation>
export type GetContractsContractIdBranchesPathParams = OperationPathParams<GetContractsContractIdBranchesOperation>
export type GetContractsContractIdBranchesQueryParams = OperationQueryParams<GetContractsContractIdBranchesOperation>
export type GetContractsContractIdBranchesArgs = RequestOptionsBase & {
  path: GetContractsContractIdBranchesPathParams
  query?: GetContractsContractIdBranchesQueryParams
}

export type GetContractsAddendumsAddendumIdBranchesOperation = paths["/contracts/addendums/{AddendumId}/branches"]['get']
export type GetContractsAddendumsAddendumIdBranchesResponse = OperationResponse<GetContractsAddendumsAddendumIdBranchesOperation>
export type GetContractsAddendumsAddendumIdBranchesPathParams = OperationPathParams<GetContractsAddendumsAddendumIdBranchesOperation>
export type GetContractsAddendumsAddendumIdBranchesArgs = RequestOptionsBase & {
  path: GetContractsAddendumsAddendumIdBranchesPathParams
}

export type GetContractsBranchesBranchIdOperation = paths["/contracts/branches/{BranchId}"]['get']
export type GetContractsBranchesBranchIdResponse = OperationResponse<GetContractsBranchesBranchIdOperation>
export type GetContractsBranchesBranchIdPathParams = OperationPathParams<GetContractsBranchesBranchIdOperation>
export type GetContractsBranchesBranchIdArgs = RequestOptionsBase & {
  path: GetContractsBranchesBranchIdPathParams
}

export type DeleteContractsBranchesBranchIdOperation = paths["/contracts/branches/{BranchId}"]['delete']
export type DeleteContractsBranchesBranchIdResponse = OperationResponse<DeleteContractsBranchesBranchIdOperation>
export type DeleteContractsBranchesBranchIdPathParams = OperationPathParams<DeleteContractsBranchesBranchIdOperation>
export type DeleteContractsBranchesBranchIdArgs = RequestOptionsBase & {
  path: DeleteContractsBranchesBranchIdPathParams
}

export type PostContractsBranchesOperation = paths["/contracts/branches"]['post']
export type PostContractsBranchesResponse = OperationResponse<PostContractsBranchesOperation>
export type PostContractsBranchesBody = OperationRequestBody<PostContractsBranchesOperation>
export type PostContractsBranchesArgs = RequestOptionsBase & {
  body: PostContractsBranchesBody
}

export type PutContractsBranchesOperation = paths["/contracts/branches"]['put']
export type PutContractsBranchesResponse = OperationResponse<PutContractsBranchesOperation>
export type PutContractsBranchesBody = OperationRequestBody<PutContractsBranchesOperation>
export type PutContractsBranchesArgs = RequestOptionsBase & {
  body: PutContractsBranchesBody
}

export type GetContractsContractIdCommissionagentOperation = paths["/contracts/{ContractId}/commissionagent"]['get']
export type GetContractsContractIdCommissionagentResponse = OperationResponse<GetContractsContractIdCommissionagentOperation>
export type GetContractsContractIdCommissionagentPathParams = OperationPathParams<GetContractsContractIdCommissionagentOperation>
export type GetContractsContractIdCommissionagentArgs = RequestOptionsBase & {
  path: GetContractsContractIdCommissionagentPathParams
}

export type GetContractsCommissionagentOperation = paths["/contracts/commissionagent"]['get']
export type GetContractsCommissionagentResponse = OperationResponse<GetContractsCommissionagentOperation>
export type GetContractsCommissionagentQueryParams = OperationQueryParams<GetContractsCommissionagentOperation>
export type GetContractsCommissionagentArgs = RequestOptionsBase & {
  query?: GetContractsCommissionagentQueryParams
}

export type PostContractsCommissionagentOperation = paths["/contracts/commissionagent"]['post']
export type PostContractsCommissionagentResponse = OperationResponse<PostContractsCommissionagentOperation>
export type PostContractsCommissionagentBody = OperationRequestBody<PostContractsCommissionagentOperation>
export type PostContractsCommissionagentArgs = RequestOptionsBase & {
  body: PostContractsCommissionagentBody
}

export type PutContractsCommissionagentOperation = paths["/contracts/commissionagent"]['put']
export type PutContractsCommissionagentResponse = OperationResponse<PutContractsCommissionagentOperation>
export type PutContractsCommissionagentBody = OperationRequestBody<PutContractsCommissionagentOperation>
export type PutContractsCommissionagentArgs = RequestOptionsBase & {
  body: PutContractsCommissionagentBody
}

export type GetContractsCommissionagentAgentIdOperation = paths["/contracts/commissionagent/{AgentId}"]['get']
export type GetContractsCommissionagentAgentIdResponse = OperationResponse<GetContractsCommissionagentAgentIdOperation>
export type GetContractsCommissionagentAgentIdPathParams = OperationPathParams<GetContractsCommissionagentAgentIdOperation>
export type GetContractsCommissionagentAgentIdArgs = RequestOptionsBase & {
  path: GetContractsCommissionagentAgentIdPathParams
}

export type GetContractsContractIdCommissionagentPractitionerIdOperation = paths["/contracts/{ContractId}/commissionagent/{PractitionerId}"]['get']
export type GetContractsContractIdCommissionagentPractitionerIdResponse = OperationResponse<GetContractsContractIdCommissionagentPractitionerIdOperation>
export type GetContractsContractIdCommissionagentPractitionerIdPathParams = OperationPathParams<GetContractsContractIdCommissionagentPractitionerIdOperation>
export type GetContractsContractIdCommissionagentPractitionerIdArgs = RequestOptionsBase & {
  path: GetContractsContractIdCommissionagentPractitionerIdPathParams
}

export type GetContractsCommissionagentsAgentIdConceptsOperation = paths["/contracts/commissionagents/{AgentId}/concepts"]['get']
export type GetContractsCommissionagentsAgentIdConceptsResponse = OperationResponse<GetContractsCommissionagentsAgentIdConceptsOperation>
export type GetContractsCommissionagentsAgentIdConceptsPathParams = OperationPathParams<GetContractsCommissionagentsAgentIdConceptsOperation>
export type GetContractsCommissionagentsAgentIdConceptsArgs = RequestOptionsBase & {
  path: GetContractsCommissionagentsAgentIdConceptsPathParams
}

export type GetContractsContractIdCommissionagentsPractitionerIDConceptsOperation = paths["/contracts/{ContractId}/commissionagents/{PractitionerID}/concepts"]['get']
export type GetContractsContractIdCommissionagentsPractitionerIDConceptsResponse = OperationResponse<GetContractsContractIdCommissionagentsPractitionerIDConceptsOperation>
export type GetContractsContractIdCommissionagentsPractitionerIDConceptsPathParams = OperationPathParams<GetContractsContractIdCommissionagentsPractitionerIDConceptsOperation>
export type GetContractsContractIdCommissionagentsPractitionerIDConceptsArgs = RequestOptionsBase & {
  path: GetContractsContractIdCommissionagentsPractitionerIDConceptsPathParams
}

export type GetContractsCommissionagentsConceptsConceptIdOperation = paths["/contracts/commissionagents/concepts/{ConceptId}"]['get']
export type GetContractsCommissionagentsConceptsConceptIdResponse = OperationResponse<GetContractsCommissionagentsConceptsConceptIdOperation>
export type GetContractsCommissionagentsConceptsConceptIdPathParams = OperationPathParams<GetContractsCommissionagentsConceptsConceptIdOperation>
export type GetContractsCommissionagentsConceptsConceptIdArgs = RequestOptionsBase & {
  path: GetContractsCommissionagentsConceptsConceptIdPathParams
}

export type DeleteContractsCommissionagentsConceptsConceptIdOperation = paths["/contracts/commissionagents/concepts/{ConceptId}"]['delete']
export type DeleteContractsCommissionagentsConceptsConceptIdResponse = OperationResponse<DeleteContractsCommissionagentsConceptsConceptIdOperation>
export type DeleteContractsCommissionagentsConceptsConceptIdPathParams = OperationPathParams<DeleteContractsCommissionagentsConceptsConceptIdOperation>
export type DeleteContractsCommissionagentsConceptsConceptIdArgs = RequestOptionsBase & {
  path: DeleteContractsCommissionagentsConceptsConceptIdPathParams
}

export type PostContractsCommissionagentsConceptsOperation = paths["/contracts/commissionagents/concepts"]['post']
export type PostContractsCommissionagentsConceptsResponse = OperationResponse<PostContractsCommissionagentsConceptsOperation>
export type PostContractsCommissionagentsConceptsBody = OperationRequestBody<PostContractsCommissionagentsConceptsOperation>
export type PostContractsCommissionagentsConceptsArgs = RequestOptionsBase & {
  body: PostContractsCommissionagentsConceptsBody
}

export type PutContractsCommissionagentsConceptsOperation = paths["/contracts/commissionagents/concepts"]['put']
export type PutContractsCommissionagentsConceptsResponse = OperationResponse<PutContractsCommissionagentsConceptsOperation>
export type PutContractsCommissionagentsConceptsBody = OperationRequestBody<PutContractsCommissionagentsConceptsOperation>
export type PutContractsCommissionagentsConceptsArgs = RequestOptionsBase & {
  body: PutContractsCommissionagentsConceptsBody
}

export type GetContractsContractIDConceptsOperation = paths["/contracts/{ContractID}/concepts"]['get']
export type GetContractsContractIDConceptsResponse = OperationResponse<GetContractsContractIDConceptsOperation>
export type GetContractsContractIDConceptsPathParams = OperationPathParams<GetContractsContractIDConceptsOperation>
export type GetContractsContractIDConceptsQueryParams = OperationQueryParams<GetContractsContractIDConceptsOperation>
export type GetContractsContractIDConceptsArgs = RequestOptionsBase & {
  path: GetContractsContractIDConceptsPathParams
  query?: GetContractsContractIDConceptsQueryParams
}

export type GetContractsAddendumAddendumIdConceptsOperation = paths["/contracts/addendum/{AddendumId}/concepts"]['get']
export type GetContractsAddendumAddendumIdConceptsResponse = OperationResponse<GetContractsAddendumAddendumIdConceptsOperation>
export type GetContractsAddendumAddendumIdConceptsPathParams = OperationPathParams<GetContractsAddendumAddendumIdConceptsOperation>
export type GetContractsAddendumAddendumIdConceptsArgs = RequestOptionsBase & {
  path: GetContractsAddendumAddendumIdConceptsPathParams
}

export type GetContractsAddendumsAddendumIdConceptsOperation = paths["/contracts/addendums/{AddendumId}/concepts"]['get']
export type GetContractsAddendumsAddendumIdConceptsResponse = OperationResponse<GetContractsAddendumsAddendumIdConceptsOperation>
export type GetContractsAddendumsAddendumIdConceptsPathParams = OperationPathParams<GetContractsAddendumsAddendumIdConceptsOperation>
export type GetContractsAddendumsAddendumIdConceptsArgs = RequestOptionsBase & {
  path: GetContractsAddendumsAddendumIdConceptsPathParams
}

export type GetContractsConceptsConceptIdOperation = paths["/contracts/concepts/{ConceptId}"]['get']
export type GetContractsConceptsConceptIdResponse = OperationResponse<GetContractsConceptsConceptIdOperation>
export type GetContractsConceptsConceptIdPathParams = OperationPathParams<GetContractsConceptsConceptIdOperation>
export type GetContractsConceptsConceptIdArgs = RequestOptionsBase & {
  path: GetContractsConceptsConceptIdPathParams
}

export type DeleteContractsConceptsConceptIdOperation = paths["/contracts/concepts/{ConceptId}"]['delete']
export type DeleteContractsConceptsConceptIdResponse = OperationResponse<DeleteContractsConceptsConceptIdOperation>
export type DeleteContractsConceptsConceptIdPathParams = OperationPathParams<DeleteContractsConceptsConceptIdOperation>
export type DeleteContractsConceptsConceptIdArgs = RequestOptionsBase & {
  path: DeleteContractsConceptsConceptIdPathParams
}

export type GetContractsConceptsContractConceptIdPatentConceptsOperation = paths["/contracts/concepts/{ContractConceptId}/patent-concepts"]['get']
export type GetContractsConceptsContractConceptIdPatentConceptsResponse = OperationResponse<GetContractsConceptsContractConceptIdPatentConceptsOperation>
export type GetContractsConceptsContractConceptIdPatentConceptsPathParams = OperationPathParams<GetContractsConceptsContractConceptIdPatentConceptsOperation>
export type GetContractsConceptsContractConceptIdPatentConceptsArgs = RequestOptionsBase & {
  path: GetContractsConceptsContractConceptIdPatentConceptsPathParams
}

export type PostContractsConceptsOperation = paths["/contracts/concepts"]['post']
export type PostContractsConceptsResponse = OperationResponse<PostContractsConceptsOperation>
export type PostContractsConceptsBody = OperationRequestBody<PostContractsConceptsOperation>
export type PostContractsConceptsArgs = RequestOptionsBase & {
  body: PostContractsConceptsBody
}

export type PutContractsConceptsOperation = paths["/contracts/concepts"]['put']
export type PutContractsConceptsResponse = OperationResponse<PutContractsConceptsOperation>
export type PutContractsConceptsBody = OperationRequestBody<PutContractsConceptsOperation>
export type PutContractsConceptsArgs = RequestOptionsBase & {
  body: PutContractsConceptsBody
}

export type PostContractsConceptsContractConceptIdAssociateVisitOperation = paths["/contracts/concepts/{ContractConceptId}/associate-visit"]['post']
export type PostContractsConceptsContractConceptIdAssociateVisitResponse = OperationResponse<PostContractsConceptsContractConceptIdAssociateVisitOperation>
export type PostContractsConceptsContractConceptIdAssociateVisitPathParams = OperationPathParams<PostContractsConceptsContractConceptIdAssociateVisitOperation>
export type PostContractsConceptsContractConceptIdAssociateVisitQueryParams = OperationQueryParams<PostContractsConceptsContractConceptIdAssociateVisitOperation>
export type PostContractsConceptsContractConceptIdAssociateVisitArgs = RequestOptionsBase & {
  path: PostContractsConceptsContractConceptIdAssociateVisitPathParams
  query?: PostContractsConceptsContractConceptIdAssociateVisitQueryParams
}

export type PostContractsConceptsContractConceptIdDisassociateVisitOperation = paths["/contracts/concepts/{ContractConceptId}/disassociate-visit"]['post']
export type PostContractsConceptsContractConceptIdDisassociateVisitResponse = OperationResponse<PostContractsConceptsContractConceptIdDisassociateVisitOperation>
export type PostContractsConceptsContractConceptIdDisassociateVisitPathParams = OperationPathParams<PostContractsConceptsContractConceptIdDisassociateVisitOperation>
export type PostContractsConceptsContractConceptIdDisassociateVisitQueryParams = OperationQueryParams<PostContractsConceptsContractConceptIdDisassociateVisitOperation>
export type PostContractsConceptsContractConceptIdDisassociateVisitArgs = RequestOptionsBase & {
  path: PostContractsConceptsContractConceptIdDisassociateVisitPathParams
  query?: PostContractsConceptsContractConceptIdDisassociateVisitQueryParams
}

export type GetContractsContractIDConceptsApplicableVisitOperation = paths["/contracts/{ContractID}/concepts/applicable-visit"]['get']
export type GetContractsContractIDConceptsApplicableVisitResponse = OperationResponse<GetContractsContractIDConceptsApplicableVisitOperation>
export type GetContractsContractIDConceptsApplicableVisitPathParams = OperationPathParams<GetContractsContractIDConceptsApplicableVisitOperation>
export type GetContractsContractIDConceptsApplicableVisitQueryParams = OperationQueryParams<GetContractsContractIDConceptsApplicableVisitOperation>
export type GetContractsContractIDConceptsApplicableVisitArgs = RequestOptionsBase & {
  path: GetContractsContractIDConceptsApplicableVisitPathParams
  query?: GetContractsContractIDConceptsApplicableVisitQueryParams
}

export type GetContractsConceptsContractConceptIdConceptsOperation = paths["/contracts/concepts/{ContractConceptId}/concepts"]['get']
export type GetContractsConceptsContractConceptIdConceptsResponse = OperationResponse<GetContractsConceptsContractConceptIdConceptsOperation>
export type GetContractsConceptsContractConceptIdConceptsPathParams = OperationPathParams<GetContractsConceptsContractConceptIdConceptsOperation>
export type GetContractsConceptsContractConceptIdConceptsArgs = RequestOptionsBase & {
  path: GetContractsConceptsContractConceptIdConceptsPathParams
}

export type GetContractsConceptsConceptsContractConceptConceptIdOperation = paths["/contracts/concepts/concepts/{ContractConceptConceptId}"]['get']
export type GetContractsConceptsConceptsContractConceptConceptIdResponse = OperationResponse<GetContractsConceptsConceptsContractConceptConceptIdOperation>
export type GetContractsConceptsConceptsContractConceptConceptIdPathParams = OperationPathParams<GetContractsConceptsConceptsContractConceptConceptIdOperation>
export type GetContractsConceptsConceptsContractConceptConceptIdArgs = RequestOptionsBase & {
  path: GetContractsConceptsConceptsContractConceptConceptIdPathParams
}

export type DeleteContractsConceptsConceptsContractConceptConceptIdOperation = paths["/contracts/concepts/concepts/{ContractConceptConceptId}"]['delete']
export type DeleteContractsConceptsConceptsContractConceptConceptIdResponse = OperationResponse<DeleteContractsConceptsConceptsContractConceptConceptIdOperation>
export type DeleteContractsConceptsConceptsContractConceptConceptIdPathParams = OperationPathParams<DeleteContractsConceptsConceptsContractConceptConceptIdOperation>
export type DeleteContractsConceptsConceptsContractConceptConceptIdArgs = RequestOptionsBase & {
  path: DeleteContractsConceptsConceptsContractConceptConceptIdPathParams
}

export type PostContractsConceptsConceptsOperation = paths["/contracts/concepts/concepts"]['post']
export type PostContractsConceptsConceptsResponse = OperationResponse<PostContractsConceptsConceptsOperation>
export type PostContractsConceptsConceptsBody = OperationRequestBody<PostContractsConceptsConceptsOperation>
export type PostContractsConceptsConceptsArgs = RequestOptionsBase & {
  body: PostContractsConceptsConceptsBody
}

export type PutContractsConceptsConceptsOperation = paths["/contracts/concepts/concepts"]['put']
export type PutContractsConceptsConceptsResponse = OperationResponse<PutContractsConceptsConceptsOperation>
export type PutContractsConceptsConceptsBody = OperationRequestBody<PutContractsConceptsConceptsOperation>
export type PutContractsConceptsConceptsArgs = RequestOptionsBase & {
  body: PutContractsConceptsConceptsBody
}

export type DeleteContractsConceptsConceptsOperation = paths["/contracts/concepts/concepts"]['delete']
export type DeleteContractsConceptsConceptsResponse = OperationResponse<DeleteContractsConceptsConceptsOperation>
export type DeleteContractsConceptsConceptsQueryParams = OperationQueryParams<DeleteContractsConceptsConceptsOperation>
export type DeleteContractsConceptsConceptsArgs = RequestOptionsBase & {
  query?: DeleteContractsConceptsConceptsQueryParams
}

export type GetContractsContractIdConceptsRelationshipOperation = paths["/contracts/{contractId}/concepts/Relationship"]['get']
export type GetContractsContractIdConceptsRelationshipResponse = OperationResponse<GetContractsContractIdConceptsRelationshipOperation>
export type GetContractsContractIdConceptsRelationshipPathParams = OperationPathParams<GetContractsContractIdConceptsRelationshipOperation>
export type GetContractsContractIdConceptsRelationshipQueryParams = OperationQueryParams<GetContractsContractIdConceptsRelationshipOperation>
export type GetContractsContractIdConceptsRelationshipArgs = RequestOptionsBase & {
  path: GetContractsContractIdConceptsRelationshipPathParams
  query?: GetContractsContractIdConceptsRelationshipQueryParams
}

export type GetContractsContractIdConceptsRelationshipMinimalOperation = paths["/contracts/{contractId}/concepts/Relationship/minimal"]['get']
export type GetContractsContractIdConceptsRelationshipMinimalResponse = OperationResponse<GetContractsContractIdConceptsRelationshipMinimalOperation>
export type GetContractsContractIdConceptsRelationshipMinimalPathParams = OperationPathParams<GetContractsContractIdConceptsRelationshipMinimalOperation>
export type GetContractsContractIdConceptsRelationshipMinimalQueryParams = OperationQueryParams<GetContractsContractIdConceptsRelationshipMinimalOperation>
export type GetContractsContractIdConceptsRelationshipMinimalArgs = RequestOptionsBase & {
  path: GetContractsContractIdConceptsRelationshipMinimalPathParams
  query?: GetContractsContractIdConceptsRelationshipMinimalQueryParams
}

export type GetContractsConceptsRelationshipConceptRelationshipIdOperation = paths["/contracts/concepts/Relationship/{ConceptRelationshipId}"]['get']
export type GetContractsConceptsRelationshipConceptRelationshipIdResponse = OperationResponse<GetContractsConceptsRelationshipConceptRelationshipIdOperation>
export type GetContractsConceptsRelationshipConceptRelationshipIdPathParams = OperationPathParams<GetContractsConceptsRelationshipConceptRelationshipIdOperation>
export type GetContractsConceptsRelationshipConceptRelationshipIdArgs = RequestOptionsBase & {
  path: GetContractsConceptsRelationshipConceptRelationshipIdPathParams
}

export type PostContractsContractIdConceptsRelationshipOperation = paths["/contracts/{ContractId}/concepts/Relationship"]['post']
export type PostContractsContractIdConceptsRelationshipResponse = OperationResponse<PostContractsContractIdConceptsRelationshipOperation>
export type PostContractsContractIdConceptsRelationshipPathParams = OperationPathParams<PostContractsContractIdConceptsRelationshipOperation>
export type PostContractsContractIdConceptsRelationshipBody = OperationRequestBody<PostContractsContractIdConceptsRelationshipOperation>
export type PostContractsContractIdConceptsRelationshipArgs = RequestOptionsBase & {
  path: PostContractsContractIdConceptsRelationshipPathParams
  body: PostContractsContractIdConceptsRelationshipBody
}

export type PutContractsConceptsRelationshipOperation = paths["/contracts/concepts/Relationship"]['put']
export type PutContractsConceptsRelationshipResponse = OperationResponse<PutContractsConceptsRelationshipOperation>
export type PutContractsConceptsRelationshipBody = OperationRequestBody<PutContractsConceptsRelationshipOperation>
export type PutContractsConceptsRelationshipArgs = RequestOptionsBase & {
  body: PutContractsConceptsRelationshipBody
}

export type DeleteContractsConceptsRelationshipConceptRelationshipIdOperation = paths["/contracts/concepts/Relationship/{conceptRelationshipId}"]['delete']
export type DeleteContractsConceptsRelationshipConceptRelationshipIdResponse = OperationResponse<DeleteContractsConceptsRelationshipConceptRelationshipIdOperation>
export type DeleteContractsConceptsRelationshipConceptRelationshipIdPathParams = OperationPathParams<DeleteContractsConceptsRelationshipConceptRelationshipIdOperation>
export type DeleteContractsConceptsRelationshipConceptRelationshipIdArgs = RequestOptionsBase & {
  path: DeleteContractsConceptsRelationshipConceptRelationshipIdPathParams
}

export type GetContractsConceptsContractConceptIdPaymentscheduleOperation = paths["/contracts/concepts/{ContractConceptId}/paymentschedule"]['get']
export type GetContractsConceptsContractConceptIdPaymentscheduleResponse = OperationResponse<GetContractsConceptsContractConceptIdPaymentscheduleOperation>
export type GetContractsConceptsContractConceptIdPaymentschedulePathParams = OperationPathParams<GetContractsConceptsContractConceptIdPaymentscheduleOperation>
export type GetContractsConceptsContractConceptIdPaymentscheduleArgs = RequestOptionsBase & {
  path: GetContractsConceptsContractConceptIdPaymentschedulePathParams
}

export type GetContractsConceptsPaymentscheduleConceptPaymentScheduleIdOperation = paths["/contracts/concepts/paymentschedule/{ConceptPaymentScheduleId}"]['get']
export type GetContractsConceptsPaymentscheduleConceptPaymentScheduleIdResponse = OperationResponse<GetContractsConceptsPaymentscheduleConceptPaymentScheduleIdOperation>
export type GetContractsConceptsPaymentscheduleConceptPaymentScheduleIdPathParams = OperationPathParams<GetContractsConceptsPaymentscheduleConceptPaymentScheduleIdOperation>
export type GetContractsConceptsPaymentscheduleConceptPaymentScheduleIdArgs = RequestOptionsBase & {
  path: GetContractsConceptsPaymentscheduleConceptPaymentScheduleIdPathParams
}

export type PostContractsConceptsPaymentscheduleOperation = paths["/contracts/concepts/paymentschedule"]['post']
export type PostContractsConceptsPaymentscheduleResponse = OperationResponse<PostContractsConceptsPaymentscheduleOperation>
export type PostContractsConceptsPaymentscheduleBody = OperationRequestBody<PostContractsConceptsPaymentscheduleOperation>
export type PostContractsConceptsPaymentscheduleArgs = RequestOptionsBase & {
  body: PostContractsConceptsPaymentscheduleBody
}

export type PutContractsConceptsPaymentscheduleOperation = paths["/contracts/concepts/paymentschedule"]['put']
export type PutContractsConceptsPaymentscheduleResponse = OperationResponse<PutContractsConceptsPaymentscheduleOperation>
export type PutContractsConceptsPaymentscheduleBody = OperationRequestBody<PutContractsConceptsPaymentscheduleOperation>
export type PutContractsConceptsPaymentscheduleArgs = RequestOptionsBase & {
  body: PutContractsConceptsPaymentscheduleBody
}

export type DeleteContractsConceptsPaymentscheduleContractConceptPaymentScheduleIdOperation = paths["/contracts/concepts/paymentschedule/{ContractConceptPaymentScheduleId}"]['delete']
export type DeleteContractsConceptsPaymentscheduleContractConceptPaymentScheduleIdResponse = OperationResponse<DeleteContractsConceptsPaymentscheduleContractConceptPaymentScheduleIdOperation>
export type DeleteContractsConceptsPaymentscheduleContractConceptPaymentScheduleIdPathParams = OperationPathParams<DeleteContractsConceptsPaymentscheduleContractConceptPaymentScheduleIdOperation>
export type DeleteContractsConceptsPaymentscheduleContractConceptPaymentScheduleIdArgs = RequestOptionsBase & {
  path: DeleteContractsConceptsPaymentscheduleContractConceptPaymentScheduleIdPathParams
}

export type GetContractsContractIdCyclesOperation = paths["/contracts/{ContractId}/cycles"]['get']
export type GetContractsContractIdCyclesResponse = OperationResponse<GetContractsContractIdCyclesOperation>
export type GetContractsContractIdCyclesPathParams = OperationPathParams<GetContractsContractIdCyclesOperation>
export type GetContractsContractIdCyclesArgs = RequestOptionsBase & {
  path: GetContractsContractIdCyclesPathParams
}

export type GetContractsAddendumsAddendumIdCyclesOperation = paths["/contracts/addendums/{AddendumId}/cycles"]['get']
export type GetContractsAddendumsAddendumIdCyclesResponse = OperationResponse<GetContractsAddendumsAddendumIdCyclesOperation>
export type GetContractsAddendumsAddendumIdCyclesPathParams = OperationPathParams<GetContractsAddendumsAddendumIdCyclesOperation>
export type GetContractsAddendumsAddendumIdCyclesArgs = RequestOptionsBase & {
  path: GetContractsAddendumsAddendumIdCyclesPathParams
}

export type GetContractsCyclesCycleIdOperation = paths["/contracts/cycles/{CycleId}"]['get']
export type GetContractsCyclesCycleIdResponse = OperationResponse<GetContractsCyclesCycleIdOperation>
export type GetContractsCyclesCycleIdPathParams = OperationPathParams<GetContractsCyclesCycleIdOperation>
export type GetContractsCyclesCycleIdArgs = RequestOptionsBase & {
  path: GetContractsCyclesCycleIdPathParams
}

export type PostContractsCyclesOperation = paths["/contracts/cycles"]['post']
export type PostContractsCyclesResponse = OperationResponse<PostContractsCyclesOperation>
export type PostContractsCyclesBody = OperationRequestBody<PostContractsCyclesOperation>
export type PostContractsCyclesArgs = RequestOptionsBase & {
  body: PostContractsCyclesBody
}

export type PutContractsCyclesOperation = paths["/contracts/cycles"]['put']
export type PutContractsCyclesResponse = OperationResponse<PutContractsCyclesOperation>
export type PutContractsCyclesBody = OperationRequestBody<PutContractsCyclesOperation>
export type PutContractsCyclesArgs = RequestOptionsBase & {
  body: PutContractsCyclesBody
}

export type DeleteContractsCyclesContractCycleIdOperation = paths["/contracts/cycles/{ContractCycleId}"]['delete']
export type DeleteContractsCyclesContractCycleIdResponse = OperationResponse<DeleteContractsCyclesContractCycleIdOperation>
export type DeleteContractsCyclesContractCycleIdPathParams = OperationPathParams<DeleteContractsCyclesContractCycleIdOperation>
export type DeleteContractsCyclesContractCycleIdArgs = RequestOptionsBase & {
  path: DeleteContractsCyclesContractCycleIdPathParams
}

export type GetContractsContractIdFilesOperation = paths["/contracts/{ContractId}/files"]['get']
export type GetContractsContractIdFilesResponse = OperationResponse<GetContractsContractIdFilesOperation>
export type GetContractsContractIdFilesPathParams = OperationPathParams<GetContractsContractIdFilesOperation>
export type GetContractsContractIdFilesArgs = RequestOptionsBase & {
  path: GetContractsContractIdFilesPathParams
}

export type PostContractsContractIdFilesOperation = paths["/contracts/{ContractId}/files"]['post']
export type PostContractsContractIdFilesResponse = OperationResponse<PostContractsContractIdFilesOperation>
export type PostContractsContractIdFilesPathParams = OperationPathParams<PostContractsContractIdFilesOperation>
export type PostContractsContractIdFilesBody = OperationRequestBody<PostContractsContractIdFilesOperation>
export type PostContractsContractIdFilesArgs = RequestOptionsBase & {
  path: PostContractsContractIdFilesPathParams
  body: PostContractsContractIdFilesBody
}

export type GetContractsFilesFileIdOperation = paths["/contracts/files/{FileId}"]['get']
export type GetContractsFilesFileIdResponse = OperationResponse<GetContractsFilesFileIdOperation>
export type GetContractsFilesFileIdPathParams = OperationPathParams<GetContractsFilesFileIdOperation>
export type GetContractsFilesFileIdArgs = RequestOptionsBase & {
  path: GetContractsFilesFileIdPathParams
}

export type DeleteContractsFilesFileIdOperation = paths["/contracts/files/{FileId}"]['delete']
export type DeleteContractsFilesFileIdResponse = OperationResponse<DeleteContractsFilesFileIdOperation>
export type DeleteContractsFilesFileIdPathParams = OperationPathParams<DeleteContractsFilesFileIdOperation>
export type DeleteContractsFilesFileIdArgs = RequestOptionsBase & {
  path: DeleteContractsFilesFileIdPathParams
}

export type PutContractsFilesOperation = paths["/contracts/files"]['put']
export type PutContractsFilesResponse = OperationResponse<PutContractsFilesOperation>
export type PutContractsFilesBody = OperationRequestBody<PutContractsFilesOperation>
export type PutContractsFilesArgs = RequestOptionsBase & {
  body: PutContractsFilesBody
}

export type GetContractsFilesFileIdDownloadOperation = paths["/contracts/files/{FileId}/download"]['get']
export type GetContractsFilesFileIdDownloadResponse = OperationResponse<GetContractsFilesFileIdDownloadOperation>
export type GetContractsFilesFileIdDownloadPathParams = OperationPathParams<GetContractsFilesFileIdDownloadOperation>
export type GetContractsFilesFileIdDownloadArgs = RequestOptionsBase & {
  path: GetContractsFilesFileIdDownloadPathParams
}

export type PostContractsImportOperation = paths["/contracts/import"]['post']
export type PostContractsImportResponse = OperationResponse<PostContractsImportOperation>
export type PostContractsImportBody = OperationRequestBody<PostContractsImportOperation>
export type PostContractsImportArgs = RequestOptionsBase & {
  body: PostContractsImportBody
}

export type GetContractsContractIdImportLastOperation = paths["/contracts/{ContractId}/import/last"]['get']
export type GetContractsContractIdImportLastResponse = OperationResponse<GetContractsContractIdImportLastOperation>
export type GetContractsContractIdImportLastPathParams = OperationPathParams<GetContractsContractIdImportLastOperation>
export type GetContractsContractIdImportLastArgs = RequestOptionsBase & {
  path: GetContractsContractIdImportLastPathParams
}

export type GetContractsImportProcessIdOperation = paths["/contracts/import/{ProcessId}"]['get']
export type GetContractsImportProcessIdResponse = OperationResponse<GetContractsImportProcessIdOperation>
export type GetContractsImportProcessIdPathParams = OperationPathParams<GetContractsImportProcessIdOperation>
export type GetContractsImportProcessIdArgs = RequestOptionsBase & {
  path: GetContractsImportProcessIdPathParams
}

export type GetContractsOperation = paths["/contracts"]['get']
export type GetContractsResponse = OperationResponse<GetContractsOperation>
export type GetContractsArgs = RequestOptionsBase & {
}

export type PostContractsOperation = paths["/contracts"]['post']
export type PostContractsResponse = OperationResponse<PostContractsOperation>
export type PostContractsBody = OperationRequestBody<PostContractsOperation>
export type PostContractsArgs = RequestOptionsBase & {
  body: PostContractsBody
}

export type PutContractsOperation = paths["/contracts"]['put']
export type PutContractsResponse = OperationResponse<PutContractsOperation>
export type PutContractsBody = OperationRequestBody<PutContractsOperation>
export type PutContractsArgs = RequestOptionsBase & {
  body: PutContractsBody
}

export type GetContractsContractIdOperation = paths["/contracts/{ContractId}"]['get']
export type GetContractsContractIdResponse = OperationResponse<GetContractsContractIdOperation>
export type GetContractsContractIdPathParams = OperationPathParams<GetContractsContractIdOperation>
export type GetContractsContractIdArgs = RequestOptionsBase & {
  path: GetContractsContractIdPathParams
}

export type GetContractsProtocolProtocolIdOperation = paths["/contracts/protocol/{ProtocolId}"]['get']
export type GetContractsProtocolProtocolIdResponse = OperationResponse<GetContractsProtocolProtocolIdOperation>
export type GetContractsProtocolProtocolIdPathParams = OperationPathParams<GetContractsProtocolProtocolIdOperation>
export type GetContractsProtocolProtocolIdArgs = RequestOptionsBase & {
  path: GetContractsProtocolProtocolIdPathParams
}

export type GetContractsPractitionerPractitionerIdOperation = paths["/contracts/practitioner/{PractitionerId}"]['get']
export type GetContractsPractitionerPractitionerIdResponse = OperationResponse<GetContractsPractitionerPractitionerIdOperation>
export type GetContractsPractitionerPractitionerIdPathParams = OperationPathParams<GetContractsPractitionerPractitionerIdOperation>
export type GetContractsPractitionerPractitionerIdArgs = RequestOptionsBase & {
  path: GetContractsPractitionerPractitionerIdPathParams
}

export type PostContractsCloneOperation = paths["/contracts/clone"]['post']
export type PostContractsCloneResponse = OperationResponse<PostContractsCloneOperation>
export type PostContractsCloneBody = OperationRequestBody<PostContractsCloneOperation>
export type PostContractsCloneArgs = RequestOptionsBase & {
  body: PostContractsCloneBody
}

export type PostContractsContractIdSetstartOperation = paths["/contracts/{contractId}/setstart"]['post']
export type PostContractsContractIdSetstartResponse = OperationResponse<PostContractsContractIdSetstartOperation>
export type PostContractsContractIdSetstartPathParams = OperationPathParams<PostContractsContractIdSetstartOperation>
export type PostContractsContractIdSetstartBody = OperationRequestBody<PostContractsContractIdSetstartOperation>
export type PostContractsContractIdSetstartArgs = RequestOptionsBase & {
  path: PostContractsContractIdSetstartPathParams
  body: PostContractsContractIdSetstartBody
}

export type PostContractsContractIdSetendOperation = paths["/contracts/{contractId}/setend"]['post']
export type PostContractsContractIdSetendResponse = OperationResponse<PostContractsContractIdSetendOperation>
export type PostContractsContractIdSetendPathParams = OperationPathParams<PostContractsContractIdSetendOperation>
export type PostContractsContractIdSetendBody = OperationRequestBody<PostContractsContractIdSetendOperation>
export type PostContractsContractIdSetendArgs = RequestOptionsBase & {
  path: PostContractsContractIdSetendPathParams
  body: PostContractsContractIdSetendBody
}

export type PatchContractsContractIdFeedivisionFeeDivisionValueOperation = paths["/contracts/{ContractId}/feedivision/{FeeDivisionValue}"]['patch']
export type PatchContractsContractIdFeedivisionFeeDivisionValueResponse = OperationResponse<PatchContractsContractIdFeedivisionFeeDivisionValueOperation>
export type PatchContractsContractIdFeedivisionFeeDivisionValuePathParams = OperationPathParams<PatchContractsContractIdFeedivisionFeeDivisionValueOperation>
export type PatchContractsContractIdFeedivisionFeeDivisionValueArgs = RequestOptionsBase & {
  path: PatchContractsContractIdFeedivisionFeeDivisionValuePathParams
}

export type DeleteContractsContractIDOperation = paths["/contracts/{ContractID}"]['delete']
export type DeleteContractsContractIDResponse = OperationResponse<DeleteContractsContractIDOperation>
export type DeleteContractsContractIDPathParams = OperationPathParams<DeleteContractsContractIDOperation>
export type DeleteContractsContractIDArgs = RequestOptionsBase & {
  path: DeleteContractsContractIDPathParams
}

export type GetContractsStagesContractStageIdItemsOperation = paths["/contracts/stages/{ContractStageId}/items"]['get']
export type GetContractsStagesContractStageIdItemsResponse = OperationResponse<GetContractsStagesContractStageIdItemsOperation>
export type GetContractsStagesContractStageIdItemsPathParams = OperationPathParams<GetContractsStagesContractStageIdItemsOperation>
export type GetContractsStagesContractStageIdItemsArgs = RequestOptionsBase & {
  path: GetContractsStagesContractStageIdItemsPathParams
}

export type PostContractsStagesContractStageIdItemsOperation = paths["/contracts/stages/{ContractStageId}/items"]['post']
export type PostContractsStagesContractStageIdItemsResponse = OperationResponse<PostContractsStagesContractStageIdItemsOperation>
export type PostContractsStagesContractStageIdItemsPathParams = OperationPathParams<PostContractsStagesContractStageIdItemsOperation>
export type PostContractsStagesContractStageIdItemsBody = OperationRequestBody<PostContractsStagesContractStageIdItemsOperation>
export type PostContractsStagesContractStageIdItemsArgs = RequestOptionsBase & {
  path: PostContractsStagesContractStageIdItemsPathParams
  body: PostContractsStagesContractStageIdItemsBody
}

export type GetContractsStagesContractStageIdItemsStageItemIdOperation = paths["/contracts/stages/{ContractStageId}/items/{StageItemId}"]['get']
export type GetContractsStagesContractStageIdItemsStageItemIdResponse = OperationResponse<GetContractsStagesContractStageIdItemsStageItemIdOperation>
export type GetContractsStagesContractStageIdItemsStageItemIdPathParams = OperationPathParams<GetContractsStagesContractStageIdItemsStageItemIdOperation>
export type GetContractsStagesContractStageIdItemsStageItemIdArgs = RequestOptionsBase & {
  path: GetContractsStagesContractStageIdItemsStageItemIdPathParams
}

export type PutContractsStagesContractStageIdItemsStageItemIdOperation = paths["/contracts/stages/{ContractStageId}/items/{StageItemId}"]['put']
export type PutContractsStagesContractStageIdItemsStageItemIdResponse = OperationResponse<PutContractsStagesContractStageIdItemsStageItemIdOperation>
export type PutContractsStagesContractStageIdItemsStageItemIdPathParams = OperationPathParams<PutContractsStagesContractStageIdItemsStageItemIdOperation>
export type PutContractsStagesContractStageIdItemsStageItemIdBody = OperationRequestBody<PutContractsStagesContractStageIdItemsStageItemIdOperation>
export type PutContractsStagesContractStageIdItemsStageItemIdArgs = RequestOptionsBase & {
  path: PutContractsStagesContractStageIdItemsStageItemIdPathParams
  body: PutContractsStagesContractStageIdItemsStageItemIdBody
}

export type DeleteContractsStagesContractStageIdItemsStageItemIdOperation = paths["/contracts/stages/{ContractStageId}/items/{StageItemId}"]['delete']
export type DeleteContractsStagesContractStageIdItemsStageItemIdResponse = OperationResponse<DeleteContractsStagesContractStageIdItemsStageItemIdOperation>
export type DeleteContractsStagesContractStageIdItemsStageItemIdPathParams = OperationPathParams<DeleteContractsStagesContractStageIdItemsStageItemIdOperation>
export type DeleteContractsStagesContractStageIdItemsStageItemIdArgs = RequestOptionsBase & {
  path: DeleteContractsStagesContractStageIdItemsStageItemIdPathParams
}

export type GetContractsContractIDStagesOperation = paths["/contracts/{ContractID}/stages"]['get']
export type GetContractsContractIDStagesResponse = OperationResponse<GetContractsContractIDStagesOperation>
export type GetContractsContractIDStagesPathParams = OperationPathParams<GetContractsContractIDStagesOperation>
export type GetContractsContractIDStagesQueryParams = OperationQueryParams<GetContractsContractIDStagesOperation>
export type GetContractsContractIDStagesArgs = RequestOptionsBase & {
  path: GetContractsContractIDStagesPathParams
  query?: GetContractsContractIDStagesQueryParams
}

export type GetContractsAddendumsAddendumIDStagesOperation = paths["/contracts/addendums/{AddendumID}/stages"]['get']
export type GetContractsAddendumsAddendumIDStagesResponse = OperationResponse<GetContractsAddendumsAddendumIDStagesOperation>
export type GetContractsAddendumsAddendumIDStagesPathParams = OperationPathParams<GetContractsAddendumsAddendumIDStagesOperation>
export type GetContractsAddendumsAddendumIDStagesArgs = RequestOptionsBase & {
  path: GetContractsAddendumsAddendumIDStagesPathParams
}

export type GetContractsStagesStageIdOperation = paths["/contracts/stages/{StageId}"]['get']
export type GetContractsStagesStageIdResponse = OperationResponse<GetContractsStagesStageIdOperation>
export type GetContractsStagesStageIdPathParams = OperationPathParams<GetContractsStagesStageIdOperation>
export type GetContractsStagesStageIdArgs = RequestOptionsBase & {
  path: GetContractsStagesStageIdPathParams
}

export type DeleteContractsStagesStageIdOperation = paths["/contracts/stages/{StageId}"]['delete']
export type DeleteContractsStagesStageIdResponse = OperationResponse<DeleteContractsStagesStageIdOperation>
export type DeleteContractsStagesStageIdPathParams = OperationPathParams<DeleteContractsStagesStageIdOperation>
export type DeleteContractsStagesStageIdArgs = RequestOptionsBase & {
  path: DeleteContractsStagesStageIdPathParams
}

export type PostContractsStagesOperation = paths["/contracts/stages"]['post']
export type PostContractsStagesResponse = OperationResponse<PostContractsStagesOperation>
export type PostContractsStagesBody = OperationRequestBody<PostContractsStagesOperation>
export type PostContractsStagesArgs = RequestOptionsBase & {
  body: PostContractsStagesBody
}

export type PutContractsStagesOperation = paths["/contracts/stages"]['put']
export type PutContractsStagesResponse = OperationResponse<PutContractsStagesOperation>
export type PutContractsStagesBody = OperationRequestBody<PutContractsStagesOperation>
export type PutContractsStagesArgs = RequestOptionsBase & {
  body: PutContractsStagesBody
}

export type PatchContractsStagesOperation = paths["/contracts/stages"]['patch']
export type PatchContractsStagesResponse = OperationResponse<PatchContractsStagesOperation>
export type PatchContractsStagesBody = OperationRequestBody<PatchContractsStagesOperation>
export type PatchContractsStagesArgs = RequestOptionsBase & {
  body: PatchContractsStagesBody
}

export type GetContractsStagesTypesOperation = paths["/contracts/stages/types"]['get']
export type GetContractsStagesTypesResponse = OperationResponse<GetContractsStagesTypesOperation>
export type GetContractsStagesTypesArgs = RequestOptionsBase & {
}

export type PostContractsStagesTypesOperation = paths["/contracts/stages/types"]['post']
export type PostContractsStagesTypesResponse = OperationResponse<PostContractsStagesTypesOperation>
export type PostContractsStagesTypesBody = OperationRequestBody<PostContractsStagesTypesOperation>
export type PostContractsStagesTypesArgs = RequestOptionsBase & {
  body: PostContractsStagesTypesBody
}

export type GetContractsStagesTypesStageTypeIdOperation = paths["/contracts/stages/types/{StageTypeId}"]['get']
export type GetContractsStagesTypesStageTypeIdResponse = OperationResponse<GetContractsStagesTypesStageTypeIdOperation>
export type GetContractsStagesTypesStageTypeIdPathParams = OperationPathParams<GetContractsStagesTypesStageTypeIdOperation>
export type GetContractsStagesTypesStageTypeIdArgs = RequestOptionsBase & {
  path: GetContractsStagesTypesStageTypeIdPathParams
}

export type PutContractsStagesTypesIdOperation = paths["/contracts/stages/types/{id}"]['put']
export type PutContractsStagesTypesIdResponse = OperationResponse<PutContractsStagesTypesIdOperation>
export type PutContractsStagesTypesIdPathParams = OperationPathParams<PutContractsStagesTypesIdOperation>
export type PutContractsStagesTypesIdBody = OperationRequestBody<PutContractsStagesTypesIdOperation>
export type PutContractsStagesTypesIdArgs = RequestOptionsBase & {
  path: PutContractsStagesTypesIdPathParams
  body: PutContractsStagesTypesIdBody
}

export type DeleteContractsStagesTypesIdOperation = paths["/contracts/stages/types/{id}"]['delete']
export type DeleteContractsStagesTypesIdResponse = OperationResponse<DeleteContractsStagesTypesIdOperation>
export type DeleteContractsStagesTypesIdPathParams = OperationPathParams<DeleteContractsStagesTypesIdOperation>
export type DeleteContractsStagesTypesIdArgs = RequestOptionsBase & {
  path: DeleteContractsStagesTypesIdPathParams
}

export type GetPractitionersContractsPractitionerIdContractsOperation = paths["/practitioners/contracts/{PractitionerId}/contracts"]['get']
export type GetPractitionersContractsPractitionerIdContractsResponse = OperationResponse<GetPractitionersContractsPractitionerIdContractsOperation>
export type GetPractitionersContractsPractitionerIdContractsPathParams = OperationPathParams<GetPractitionersContractsPractitionerIdContractsOperation>
export type GetPractitionersContractsPractitionerIdContractsArgs = RequestOptionsBase & {
  path: GetPractitionersContractsPractitionerIdContractsPathParams
}

export type GetPractitionersContractsContractsPractitionerContractIdOperation = paths["/practitioners/contracts/contracts/{PractitionerContractId}"]['get']
export type GetPractitionersContractsContractsPractitionerContractIdResponse = OperationResponse<GetPractitionersContractsContractsPractitionerContractIdOperation>
export type GetPractitionersContractsContractsPractitionerContractIdPathParams = OperationPathParams<GetPractitionersContractsContractsPractitionerContractIdOperation>
export type GetPractitionersContractsContractsPractitionerContractIdArgs = RequestOptionsBase & {
  path: GetPractitionersContractsContractsPractitionerContractIdPathParams
}

export type DeletePractitionersContractsContractsPractitionerContractIdOperation = paths["/practitioners/contracts/contracts/{PractitionerContractId}"]['delete']
export type DeletePractitionersContractsContractsPractitionerContractIdResponse = OperationResponse<DeletePractitionersContractsContractsPractitionerContractIdOperation>
export type DeletePractitionersContractsContractsPractitionerContractIdPathParams = OperationPathParams<DeletePractitionersContractsContractsPractitionerContractIdOperation>
export type DeletePractitionersContractsContractsPractitionerContractIdArgs = RequestOptionsBase & {
  path: DeletePractitionersContractsContractsPractitionerContractIdPathParams
}

export type GetPractitionersContractsContractsCheckassociationOperation = paths["/practitioners/contracts/contracts/checkassociation"]['get']
export type GetPractitionersContractsContractsCheckassociationResponse = OperationResponse<GetPractitionersContractsContractsCheckassociationOperation>
export type GetPractitionersContractsContractsCheckassociationQueryParams = OperationQueryParams<GetPractitionersContractsContractsCheckassociationOperation>
export type GetPractitionersContractsContractsCheckassociationArgs = RequestOptionsBase & {
  query?: GetPractitionersContractsContractsCheckassociationQueryParams
}

export type PostPractitionersContractsContractsOperation = paths["/practitioners/contracts/contracts"]['post']
export type PostPractitionersContractsContractsResponse = OperationResponse<PostPractitionersContractsContractsOperation>
export type PostPractitionersContractsContractsBody = OperationRequestBody<PostPractitionersContractsContractsOperation>
export type PostPractitionersContractsContractsArgs = RequestOptionsBase & {
  body: PostPractitionersContractsContractsBody
}

export type GetProtocolsContractsProtocolIdContractsOperation = paths["/protocols/contracts/{ProtocolId}/contracts"]['get']
export type GetProtocolsContractsProtocolIdContractsResponse = OperationResponse<GetProtocolsContractsProtocolIdContractsOperation>
export type GetProtocolsContractsProtocolIdContractsPathParams = OperationPathParams<GetProtocolsContractsProtocolIdContractsOperation>
export type GetProtocolsContractsProtocolIdContractsArgs = RequestOptionsBase & {
  path: GetProtocolsContractsProtocolIdContractsPathParams
}

export type GetProtocolsContractsContractsContractIdAssociationsOperation = paths["/protocols/contracts/contracts/{ContractId}/associations"]['get']
export type GetProtocolsContractsContractsContractIdAssociationsResponse = OperationResponse<GetProtocolsContractsContractsContractIdAssociationsOperation>
export type GetProtocolsContractsContractsContractIdAssociationsPathParams = OperationPathParams<GetProtocolsContractsContractsContractIdAssociationsOperation>
export type GetProtocolsContractsContractsContractIdAssociationsArgs = RequestOptionsBase & {
  path: GetProtocolsContractsContractsContractIdAssociationsPathParams
}

export type GetProtocolsContractsContractsProtocolContractIdOperation = paths["/protocols/contracts/contracts/{ProtocolContractId}"]['get']
export type GetProtocolsContractsContractsProtocolContractIdResponse = OperationResponse<GetProtocolsContractsContractsProtocolContractIdOperation>
export type GetProtocolsContractsContractsProtocolContractIdPathParams = OperationPathParams<GetProtocolsContractsContractsProtocolContractIdOperation>
export type GetProtocolsContractsContractsProtocolContractIdArgs = RequestOptionsBase & {
  path: GetProtocolsContractsContractsProtocolContractIdPathParams
}

export type DeleteProtocolsContractsContractsProtocolContractIdOperation = paths["/protocols/contracts/contracts/{ProtocolContractId}"]['delete']
export type DeleteProtocolsContractsContractsProtocolContractIdResponse = OperationResponse<DeleteProtocolsContractsContractsProtocolContractIdOperation>
export type DeleteProtocolsContractsContractsProtocolContractIdPathParams = OperationPathParams<DeleteProtocolsContractsContractsProtocolContractIdOperation>
export type DeleteProtocolsContractsContractsProtocolContractIdArgs = RequestOptionsBase & {
  path: DeleteProtocolsContractsContractsProtocolContractIdPathParams
}

export type GetProtocolsContractsContractsCheckassociationOperation = paths["/protocols/contracts/contracts/checkassociation"]['get']
export type GetProtocolsContractsContractsCheckassociationResponse = OperationResponse<GetProtocolsContractsContractsCheckassociationOperation>
export type GetProtocolsContractsContractsCheckassociationQueryParams = OperationQueryParams<GetProtocolsContractsContractsCheckassociationOperation>
export type GetProtocolsContractsContractsCheckassociationArgs = RequestOptionsBase & {
  query?: GetProtocolsContractsContractsCheckassociationQueryParams
}

export type PostProtocolsContractsContractsOperation = paths["/protocols/contracts/contracts"]['post']
export type PostProtocolsContractsContractsResponse = OperationResponse<PostProtocolsContractsContractsOperation>
export type PostProtocolsContractsContractsBody = OperationRequestBody<PostProtocolsContractsContractsOperation>
export type PostProtocolsContractsContractsArgs = RequestOptionsBase & {
  body: PostProtocolsContractsContractsBody
}

export function createContractsApi(client: HttpClient) {
  return {
    getContractCommissionConcepts(args: GetContractsContractIDCommissionconceptsArgs) {
      return client.request<GetContractsContractIDCommissionconceptsResponse>({
        method: 'GET',
        path: '/contracts/{ContractID}/commissionconcepts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractCommissionConceptById(args: GetContractsCommissionconceptsCommissionConceptIdArgs) {
      return client.request<GetContractsCommissionconceptsCommissionConceptIdResponse>({
        method: 'GET',
        path: '/contracts/commissionconcepts/{CommissionConceptId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractCommissionConcept(args: DeleteContractsCommissionconceptsCommissionConceptIdArgs) {
      return client.request<DeleteContractsCommissionconceptsCommissionConceptIdResponse>({
        method: 'DELETE',
        path: '/contracts/commissionconcepts/{CommissionConceptId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addContractCommisionConcept(args: PostContractsCommissionconceptsArgs) {
      return client.request<PostContractsCommissionconceptsResponse>({
        method: 'POST',
        path: '/contracts/commissionconcepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractCommissionConcept(args: PutContractsCommissionconceptsArgs) {
      return client.request<PutContractsCommissionconceptsResponse>({
        method: 'PUT',
        path: '/contracts/commissionconcepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getConceptBranchesByContractConceptId(args: GetContractsConceptsContractConceptIdBranchesArgs) {
      return client.request<GetContractsConceptsContractConceptIdBranchesResponse>({
        method: 'GET',
        path: '/contracts/concepts/{contractConceptId}/branches',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createConceptBranch(args: PostContractsConceptsContractConceptIdBranchesArgs) {
      return client.request<PostContractsConceptsContractConceptIdBranchesResponse>({
        method: 'POST',
        path: '/contracts/concepts/{contractConceptId}/branches',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getConceptBranchById(args: GetContractsConceptsBranchesConceptBranchIdArgs) {
      return client.request<GetContractsConceptsBranchesConceptBranchIdResponse>({
        method: 'GET',
        path: '/contracts/concepts/branches/{conceptBranchId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateConceptBranch(args: PutContractsConceptsBranchesConceptBranchIdArgs) {
      return client.request<PutContractsConceptsBranchesConceptBranchIdResponse>({
        method: 'PUT',
        path: '/contracts/concepts/branches/{conceptBranchId}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteConceptBranch(args: DeleteContractsConceptsBranchesConceptBranchIdArgs) {
      return client.request<DeleteContractsConceptsBranchesConceptBranchIdResponse>({
        method: 'DELETE',
        path: '/contracts/concepts/branches/{conceptBranchId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractAccess(args: GetContractsContractIdAccessArgs) {
      return client.request<GetContractsContractIdAccessResponse>({
        method: 'GET',
        path: '/contracts/{ContractId}/access',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractAccessById(args: GetContractsAccessContractAccessIdArgs) {
      return client.request<GetContractsAccessContractAccessIdResponse>({
        method: 'GET',
        path: '/contracts/access/{ContractAccessId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractAccess(args: DeleteContractsAccessContractAccessIdArgs) {
      return client.request<DeleteContractsAccessContractAccessIdResponse>({
        method: 'DELETE',
        path: '/contracts/access/{ContractAccessId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createContractAccess(args: PostContractsAccessArgs) {
      return client.request<PostContractsAccessResponse>({
        method: 'POST',
        path: '/contracts/access',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractAccess(args: PutContractsAccessArgs) {
      return client.request<PutContractsAccessResponse>({
        method: 'PUT',
        path: '/contracts/access',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractAddendums(args: GetContractsContractIdAddendumsArgs) {
      return client.request<GetContractsContractIdAddendumsResponse>({
        method: 'GET',
        path: '/contracts/{ContractId}/addendums',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractAddendumById(args: GetContractsAddendumsContractAddendumIdArgs) {
      return client.request<GetContractsAddendumsContractAddendumIdResponse>({
        method: 'GET',
        path: '/contracts/addendums/{ContractAddendumId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractAddendum(args: DeleteContractsAddendumsContractAddendumIdArgs) {
      return client.request<DeleteContractsAddendumsContractAddendumIdResponse>({
        method: 'DELETE',
        path: '/contracts/addendums/{ContractAddendumId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createContractAddendum(args: PostContractsAddendumsArgs) {
      return client.request<PostContractsAddendumsResponse>({
        method: 'POST',
        path: '/contracts/addendums',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractAddendum(args: PutContractsAddendumsArgs) {
      return client.request<PutContractsAddendumsResponse>({
        method: 'PUT',
        path: '/contracts/addendums',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    cloneContractAddendumById(args: PostContractsAddendumsCloneArgs) {
      return client.request<PostContractsAddendumsCloneResponse>({
        method: 'POST',
        path: '/contracts/addendums/clone',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractBranches(args: GetContractsContractIdBranchesArgs) {
      return client.request<GetContractsContractIdBranchesResponse>({
        method: 'GET',
        path: '/contracts/{ContractId}/branches',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractAddendumBranches(args: GetContractsAddendumsAddendumIdBranchesArgs) {
      return client.request<GetContractsAddendumsAddendumIdBranchesResponse>({
        method: 'GET',
        path: '/contracts/addendums/{AddendumId}/branches',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractBranchById(args: GetContractsBranchesBranchIdArgs) {
      return client.request<GetContractsBranchesBranchIdResponse>({
        method: 'GET',
        path: '/contracts/branches/{BranchId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractBranch(args: DeleteContractsBranchesBranchIdArgs) {
      return client.request<DeleteContractsBranchesBranchIdResponse>({
        method: 'DELETE',
        path: '/contracts/branches/{BranchId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addContractBranch(args: PostContractsBranchesArgs) {
      return client.request<PostContractsBranchesResponse>({
        method: 'POST',
        path: '/contracts/branches',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractBranch(args: PutContractsBranchesArgs) {
      return client.request<PutContractsBranchesResponse>({
        method: 'PUT',
        path: '/contracts/branches',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgents(args: GetContractsContractIdCommissionagentArgs) {
      return client.request<GetContractsContractIdCommissionagentResponse>({
        method: 'GET',
        path: '/contracts/{ContractId}/commissionagent',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgentsByContractAssociated(args: GetContractsCommissionagentArgs) {
      return client.request<GetContractsCommissionagentResponse>({
        method: 'GET',
        path: '/contracts/commissionagent',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addAgent(args: PostContractsCommissionagentArgs) {
      return client.request<PostContractsCommissionagentResponse>({
        method: 'POST',
        path: '/contracts/commissionagent',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateAgent(args: PutContractsCommissionagentArgs) {
      return client.request<PutContractsCommissionagentResponse>({
        method: 'PUT',
        path: '/contracts/commissionagent',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgentById(args: GetContractsCommissionagentAgentIdArgs) {
      return client.request<GetContractsCommissionagentAgentIdResponse>({
        method: 'GET',
        path: '/contracts/commissionagent/{AgentId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAgentByPractitionerId(args: GetContractsContractIdCommissionagentPractitionerIdArgs) {
      return client.request<GetContractsContractIdCommissionagentPractitionerIdResponse>({
        method: 'GET',
        path: '/contracts/{ContractId}/commissionagent/{PractitionerId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getCommissionAgentConceptsByAgentId(args: GetContractsCommissionagentsAgentIdConceptsArgs) {
      return client.request<GetContractsCommissionagentsAgentIdConceptsResponse>({
        method: 'GET',
        path: '/contracts/commissionagents/{AgentId}/concepts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getCommissionAgentConceptsByPractitionerId(args: GetContractsContractIdCommissionagentsPractitionerIDConceptsArgs) {
      return client.request<GetContractsContractIdCommissionagentsPractitionerIDConceptsResponse>({
        method: 'GET',
        path: '/contracts/{ContractId}/commissionagents/{PractitionerID}/concepts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getCommissionAgentConceptById(args: GetContractsCommissionagentsConceptsConceptIdArgs) {
      return client.request<GetContractsCommissionagentsConceptsConceptIdResponse>({
        method: 'GET',
        path: '/contracts/commissionagents/concepts/{ConceptId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    removeConcept(args: DeleteContractsCommissionagentsConceptsConceptIdArgs) {
      return client.request<DeleteContractsCommissionagentsConceptsConceptIdResponse>({
        method: 'DELETE',
        path: '/contracts/commissionagents/concepts/{ConceptId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addConcept(args: PostContractsCommissionagentsConceptsArgs) {
      return client.request<PostContractsCommissionagentsConceptsResponse>({
        method: 'POST',
        path: '/contracts/commissionagents/concepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateCommissionAgentConcept(args: PutContractsCommissionagentsConceptsArgs) {
      return client.request<PutContractsCommissionagentsConceptsResponse>({
        method: 'PUT',
        path: '/contracts/commissionagents/concepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractConcept(args: GetContractsContractIDConceptsArgs) {
      return client.request<GetContractsContractIDConceptsResponse>({
        method: 'GET',
        path: '/contracts/{ContractID}/concepts',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractAddendumConcept(args: GetContractsAddendumAddendumIdConceptsArgs) {
      return client.request<GetContractsAddendumAddendumIdConceptsResponse>({
        method: 'GET',
        path: '/contracts/addendum/{AddendumId}/concepts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractAddendumConcepts(args: GetContractsAddendumsAddendumIdConceptsArgs) {
      return client.request<GetContractsAddendumsAddendumIdConceptsResponse>({
        method: 'GET',
        path: '/contracts/addendums/{AddendumId}/concepts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractConceptById(args: GetContractsConceptsConceptIdArgs) {
      return client.request<GetContractsConceptsConceptIdResponse>({
        method: 'GET',
        path: '/contracts/concepts/{ConceptId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractConcept(args: DeleteContractsConceptsConceptIdArgs) {
      return client.request<DeleteContractsConceptsConceptIdResponse>({
        method: 'DELETE',
        path: '/contracts/concepts/{ConceptId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getParentConceptsByConceptId(args: GetContractsConceptsContractConceptIdPatentConceptsArgs) {
      return client.request<GetContractsConceptsContractConceptIdPatentConceptsResponse>({
        method: 'GET',
        path: '/contracts/concepts/{ContractConceptId}/patent-concepts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addContractConcept(args: PostContractsConceptsArgs) {
      return client.request<PostContractsConceptsResponse>({
        method: 'POST',
        path: '/contracts/concepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractConcept(args: PutContractsConceptsArgs) {
      return client.request<PutContractsConceptsResponse>({
        method: 'PUT',
        path: '/contracts/concepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateVisitConcept(args: PostContractsConceptsContractConceptIdAssociateVisitArgs) {
      return client.request<PostContractsConceptsContractConceptIdAssociateVisitResponse>({
        method: 'POST',
        path: '/contracts/concepts/{ContractConceptId}/associate-visit',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateVisitConcept(args: PostContractsConceptsContractConceptIdDisassociateVisitArgs) {
      return client.request<PostContractsConceptsContractConceptIdDisassociateVisitResponse>({
        method: 'POST',
        path: '/contracts/concepts/{ContractConceptId}/disassociate-visit',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllApplicableConceptsByVisit(args: GetContractsContractIDConceptsApplicableVisitArgs) {
      return client.request<GetContractsContractIDConceptsApplicableVisitResponse>({
        method: 'GET',
        path: '/contracts/{ContractID}/concepts/applicable-visit',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractConceptConcepts(args: GetContractsConceptsContractConceptIdConceptsArgs) {
      return client.request<GetContractsConceptsContractConceptIdConceptsResponse>({
        method: 'GET',
        path: '/contracts/concepts/{ContractConceptId}/concepts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractConceptConceptById(args: GetContractsConceptsConceptsContractConceptConceptIdArgs) {
      return client.request<GetContractsConceptsConceptsContractConceptConceptIdResponse>({
        method: 'GET',
        path: '/contracts/concepts/concepts/{ContractConceptConceptId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractConceptConcept(args: DeleteContractsConceptsConceptsContractConceptConceptIdArgs) {
      return client.request<DeleteContractsConceptsConceptsContractConceptConceptIdResponse>({
        method: 'DELETE',
        path: '/contracts/concepts/concepts/{ContractConceptConceptId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addContractConceptConcept(args: PostContractsConceptsConceptsArgs) {
      return client.request<PostContractsConceptsConceptsResponse>({
        method: 'POST',
        path: '/contracts/concepts/concepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractConceptConcept(args: PutContractsConceptsConceptsArgs) {
      return client.request<PutContractsConceptsConceptsResponse>({
        method: 'PUT',
        path: '/contracts/concepts/concepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractConceptConceptByRelationship(args: DeleteContractsConceptsConceptsArgs) {
      return client.request<DeleteContractsConceptsConceptsResponse>({
        method: 'DELETE',
        path: '/contracts/concepts/concepts',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractConceptRelationship(args: GetContractsContractIdConceptsRelationshipArgs) {
      return client.request<GetContractsContractIdConceptsRelationshipResponse>({
        method: 'GET',
        path: '/contracts/{contractId}/concepts/Relationship',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractConceptRelationshipMinimal(args: GetContractsContractIdConceptsRelationshipMinimalArgs) {
      return client.request<GetContractsContractIdConceptsRelationshipMinimalResponse>({
        method: 'GET',
        path: '/contracts/{contractId}/concepts/Relationship/minimal',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractConceptRelationshipById(args: GetContractsConceptsRelationshipConceptRelationshipIdArgs) {
      return client.request<GetContractsConceptsRelationshipConceptRelationshipIdResponse>({
        method: 'GET',
        path: '/contracts/concepts/Relationship/{ConceptRelationshipId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createContractConceptRelationShip(args: PostContractsContractIdConceptsRelationshipArgs) {
      return client.request<PostContractsContractIdConceptsRelationshipResponse>({
        method: 'POST',
        path: '/contracts/{ContractId}/concepts/Relationship',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractConceptRelationShip(args: PutContractsConceptsRelationshipArgs) {
      return client.request<PutContractsConceptsRelationshipResponse>({
        method: 'PUT',
        path: '/contracts/concepts/Relationship',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractConceptRelationShip(args: DeleteContractsConceptsRelationshipConceptRelationshipIdArgs) {
      return client.request<DeleteContractsConceptsRelationshipConceptRelationshipIdResponse>({
        method: 'DELETE',
        path: '/contracts/concepts/Relationship/{conceptRelationshipId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractConceptPaymentSchedule(args: GetContractsConceptsContractConceptIdPaymentscheduleArgs) {
      return client.request<GetContractsConceptsContractConceptIdPaymentscheduleResponse>({
        method: 'GET',
        path: '/contracts/concepts/{ContractConceptId}/paymentschedule',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractConceptPaymentScheduleById(args: GetContractsConceptsPaymentscheduleConceptPaymentScheduleIdArgs) {
      return client.request<GetContractsConceptsPaymentscheduleConceptPaymentScheduleIdResponse>({
        method: 'GET',
        path: '/contracts/concepts/paymentschedule/{ConceptPaymentScheduleId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addContractConceptPaymentSchedule(args: PostContractsConceptsPaymentscheduleArgs) {
      return client.request<PostContractsConceptsPaymentscheduleResponse>({
        method: 'POST',
        path: '/contracts/concepts/paymentschedule',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractConceptPaymentSchedule(args: PutContractsConceptsPaymentscheduleArgs) {
      return client.request<PutContractsConceptsPaymentscheduleResponse>({
        method: 'PUT',
        path: '/contracts/concepts/paymentschedule',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractPaymentSchedule(args: DeleteContractsConceptsPaymentscheduleContractConceptPaymentScheduleIdArgs) {
      return client.request<DeleteContractsConceptsPaymentscheduleContractConceptPaymentScheduleIdResponse>({
        method: 'DELETE',
        path: '/contracts/concepts/paymentschedule/{ContractConceptPaymentScheduleId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractCycles(args: GetContractsContractIdCyclesArgs) {
      return client.request<GetContractsContractIdCyclesResponse>({
        method: 'GET',
        path: '/contracts/{ContractId}/cycles',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractAddendumCycles(args: GetContractsAddendumsAddendumIdCyclesArgs) {
      return client.request<GetContractsAddendumsAddendumIdCyclesResponse>({
        method: 'GET',
        path: '/contracts/addendums/{AddendumId}/cycles',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractCycleById(args: GetContractsCyclesCycleIdArgs) {
      return client.request<GetContractsCyclesCycleIdResponse>({
        method: 'GET',
        path: '/contracts/cycles/{CycleId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addContractCycle(args: PostContractsCyclesArgs) {
      return client.request<PostContractsCyclesResponse>({
        method: 'POST',
        path: '/contracts/cycles',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractCycle(args: PutContractsCyclesArgs) {
      return client.request<PutContractsCyclesResponse>({
        method: 'PUT',
        path: '/contracts/cycles',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractCycle(args: DeleteContractsCyclesContractCycleIdArgs) {
      return client.request<DeleteContractsCyclesContractCycleIdResponse>({
        method: 'DELETE',
        path: '/contracts/cycles/{ContractCycleId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractFiles(args: GetContractsContractIdFilesArgs) {
      return client.request<GetContractsContractIdFilesResponse>({
        method: 'GET',
        path: '/contracts/{ContractId}/files',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    uploadContractFiles(args: PostContractsContractIdFilesArgs) {
      return client.request<PostContractsContractIdFilesResponse>({
        method: 'POST',
        path: '/contracts/{ContractId}/files',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractFileById(args: GetContractsFilesFileIdArgs) {
      return client.request<GetContractsFilesFileIdResponse>({
        method: 'GET',
        path: '/contracts/files/{FileId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractFile(args: DeleteContractsFilesFileIdArgs) {
      return client.request<DeleteContractsFilesFileIdResponse>({
        method: 'DELETE',
        path: '/contracts/files/{FileId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractFile(args: PutContractsFilesArgs) {
      return client.request<PutContractsFilesResponse>({
        method: 'PUT',
        path: '/contracts/files',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    downloadContractFile(args: GetContractsFilesFileIdDownloadArgs) {
      return client.request<GetContractsFilesFileIdDownloadResponse>({
        method: 'GET',
        path: '/contracts/files/{FileId}/download',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createImportContractProcess(args: PostContractsImportArgs) {
      return client.request<PostContractsImportResponse>({
        method: 'POST',
        path: '/contracts/import',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getLastImportContractProcess(args: GetContractsContractIdImportLastArgs) {
      return client.request<GetContractsContractIdImportLastResponse>({
        method: 'GET',
        path: '/contracts/{ContractId}/import/last',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getImportContractProcessById(args: GetContractsImportProcessIdArgs) {
      return client.request<GetContractsImportProcessIdResponse>({
        method: 'GET',
        path: '/contracts/import/{ProcessId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContracts(args: GetContractsArgs = {}) {
      return client.request<GetContractsResponse>({
        method: 'GET',
        path: '/contracts',
        headers: args.headers,
        signal: args.signal,
      })
    },
    createContract(args: PostContractsArgs) {
      return client.request<PostContractsResponse>({
        method: 'POST',
        path: '/contracts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContract(args: PutContractsArgs) {
      return client.request<PutContractsResponse>({
        method: 'PUT',
        path: '/contracts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractById(args: GetContractsContractIdArgs) {
      return client.request<GetContractsContractIdResponse>({
        method: 'GET',
        path: '/contracts/{ContractId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractByProtocolId(args: GetContractsProtocolProtocolIdArgs) {
      return client.request<GetContractsProtocolProtocolIdResponse>({
        method: 'GET',
        path: '/contracts/protocol/{ProtocolId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractByPractitionerId(args: GetContractsPractitionerPractitionerIdArgs) {
      return client.request<GetContractsPractitionerPractitionerIdResponse>({
        method: 'GET',
        path: '/contracts/practitioner/{PractitionerId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    cloneContractById(args: PostContractsCloneArgs) {
      return client.request<PostContractsCloneResponse>({
        method: 'POST',
        path: '/contracts/clone',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    setContractValidityDateStart(args: PostContractsContractIdSetstartArgs) {
      return client.request<PostContractsContractIdSetstartResponse>({
        method: 'POST',
        path: '/contracts/{contractId}/setstart',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    setContractValidityDateEnd(args: PostContractsContractIdSetendArgs) {
      return client.request<PostContractsContractIdSetendResponse>({
        method: 'POST',
        path: '/contracts/{contractId}/setend',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateFeeDivisionContract(args: PatchContractsContractIdFeedivisionFeeDivisionValueArgs) {
      return client.request<PatchContractsContractIdFeedivisionFeeDivisionValueResponse>({
        method: 'PATCH',
        path: '/contracts/{ContractId}/feedivision/{FeeDivisionValue}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContract(args: DeleteContractsContractIDArgs) {
      return client.request<DeleteContractsContractIDResponse>({
        method: 'DELETE',
        path: '/contracts/{ContractID}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractStageItems(args: GetContractsStagesContractStageIdItemsArgs) {
      return client.request<GetContractsStagesContractStageIdItemsResponse>({
        method: 'GET',
        path: '/contracts/stages/{ContractStageId}/items',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addContractStageItem(args: PostContractsStagesContractStageIdItemsArgs) {
      return client.request<PostContractsStagesContractStageIdItemsResponse>({
        method: 'POST',
        path: '/contracts/stages/{ContractStageId}/items',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractStageItemById(args: GetContractsStagesContractStageIdItemsStageItemIdArgs) {
      return client.request<GetContractsStagesContractStageIdItemsStageItemIdResponse>({
        method: 'GET',
        path: '/contracts/stages/{ContractStageId}/items/{StageItemId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractStageItem(args: PutContractsStagesContractStageIdItemsStageItemIdArgs) {
      return client.request<PutContractsStagesContractStageIdItemsStageItemIdResponse>({
        method: 'PUT',
        path: '/contracts/stages/{ContractStageId}/items/{StageItemId}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractStageItem(args: DeleteContractsStagesContractStageIdItemsStageItemIdArgs) {
      return client.request<DeleteContractsStagesContractStageIdItemsStageItemIdResponse>({
        method: 'DELETE',
        path: '/contracts/stages/{ContractStageId}/items/{StageItemId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractStages(args: GetContractsContractIDStagesArgs) {
      return client.request<GetContractsContractIDStagesResponse>({
        method: 'GET',
        path: '/contracts/{ContractID}/stages',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractAddendumStages(args: GetContractsAddendumsAddendumIDStagesArgs) {
      return client.request<GetContractsAddendumsAddendumIDStagesResponse>({
        method: 'GET',
        path: '/contracts/addendums/{AddendumID}/stages',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractStageById(args: GetContractsStagesStageIdArgs) {
      return client.request<GetContractsStagesStageIdResponse>({
        method: 'GET',
        path: '/contracts/stages/{StageId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractStage(args: DeleteContractsStagesStageIdArgs) {
      return client.request<DeleteContractsStagesStageIdResponse>({
        method: 'DELETE',
        path: '/contracts/stages/{StageId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addContractStage(args: PostContractsStagesArgs) {
      return client.request<PostContractsStagesResponse>({
        method: 'POST',
        path: '/contracts/stages',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateContractStage(args: PutContractsStagesArgs) {
      return client.request<PutContractsStagesResponse>({
        method: 'PUT',
        path: '/contracts/stages',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    contractStageLinkToVisit(args: PatchContractsStagesArgs) {
      return client.request<PatchContractsStagesResponse>({
        method: 'PATCH',
        path: '/contracts/stages',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractStagesTypes(args: GetContractsStagesTypesArgs = {}) {
      return client.request<GetContractsStagesTypesResponse>({
        method: 'GET',
        path: '/contracts/stages/types',
        headers: args.headers,
        signal: args.signal,
      })
    },
    postContractsStagesTypes(args: PostContractsStagesTypesArgs) {
      return client.request<PostContractsStagesTypesResponse>({
        method: 'POST',
        path: '/contracts/stages/types',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractStagesTypeById(args: GetContractsStagesTypesStageTypeIdArgs) {
      return client.request<GetContractsStagesTypesStageTypeIdResponse>({
        method: 'GET',
        path: '/contracts/stages/types/{StageTypeId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    putContractsStagesTypesId(args: PutContractsStagesTypesIdArgs) {
      return client.request<PutContractsStagesTypesIdResponse>({
        method: 'PUT',
        path: '/contracts/stages/types/{id}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteContractsStagesTypesId(args: DeleteContractsStagesTypesIdArgs) {
      return client.request<DeleteContractsStagesTypesIdResponse>({
        method: 'DELETE',
        path: '/contracts/stages/types/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionerContractByPractitionerId(args: GetPractitionersContractsPractitionerIdContractsArgs) {
      return client.request<GetPractitionersContractsPractitionerIdContractsResponse>({
        method: 'GET',
        path: '/practitioners/contracts/{PractitionerId}/contracts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPractitionerContractById(args: GetPractitionersContractsContractsPractitionerContractIdArgs) {
      return client.request<GetPractitionersContractsContractsPractitionerContractIdResponse>({
        method: 'GET',
        path: '/practitioners/contracts/contracts/{PractitionerContractId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateContractFromPractitioner(args: DeletePractitionersContractsContractsPractitionerContractIdArgs) {
      return client.request<DeletePractitionersContractsContractsPractitionerContractIdResponse>({
        method: 'DELETE',
        path: '/practitioners/contracts/contracts/{PractitionerContractId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    checkPractitionerContractAssociationsByContractId(args: GetPractitionersContractsContractsCheckassociationArgs) {
      return client.request<GetPractitionersContractsContractsCheckassociationResponse>({
        method: 'GET',
        path: '/practitioners/contracts/contracts/checkassociation',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateContractToPractitioner(args: PostPractitionersContractsContractsArgs) {
      return client.request<PostPractitionersContractsContractsResponse>({
        method: 'POST',
        path: '/practitioners/contracts/contracts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getContractProtocolByProtocolId(args: GetProtocolsContractsProtocolIdContractsArgs) {
      return client.request<GetProtocolsContractsProtocolIdContractsResponse>({
        method: 'GET',
        path: '/protocols/contracts/{ProtocolId}/contracts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProtocolAssociationByContractId(args: GetProtocolsContractsContractsContractIdAssociationsArgs) {
      return client.request<GetProtocolsContractsContractsContractIdAssociationsResponse>({
        method: 'GET',
        path: '/protocols/contracts/contracts/{ContractId}/associations',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProtocolContractById(args: GetProtocolsContractsContractsProtocolContractIdArgs) {
      return client.request<GetProtocolsContractsContractsProtocolContractIdResponse>({
        method: 'GET',
        path: '/protocols/contracts/contracts/{ProtocolContractId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateContractFromProtocol(args: DeleteProtocolsContractsContractsProtocolContractIdArgs) {
      return client.request<DeleteProtocolsContractsContractsProtocolContractIdResponse>({
        method: 'DELETE',
        path: '/protocols/contracts/contracts/{ProtocolContractId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    checkProtocolContractAssociationsByContractId(args: GetProtocolsContractsContractsCheckassociationArgs) {
      return client.request<GetProtocolsContractsContractsCheckassociationResponse>({
        method: 'GET',
        path: '/protocols/contracts/contracts/checkassociation',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateContractToProtocol(args: PostProtocolsContractsContractsArgs) {
      return client.request<PostProtocolsContractsContractsResponse>({
        method: 'POST',
        path: '/protocols/contracts/contracts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
