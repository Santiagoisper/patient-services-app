import type { HttpClient, PathParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/sponsorcontracts.ts'

export type GetSponsorsContractsSponsorIDContractsOperation = paths["/sponsors/contracts/{SponsorID}/contracts"]['get']
export type GetSponsorsContractsSponsorIDContractsResponse = OperationResponse<GetSponsorsContractsSponsorIDContractsOperation>
export type GetSponsorsContractsSponsorIDContractsPathParams = OperationPathParams<GetSponsorsContractsSponsorIDContractsOperation>
export type GetSponsorsContractsSponsorIDContractsArgs = RequestOptionsBase & {
  path: GetSponsorsContractsSponsorIDContractsPathParams
}

export type GetSponsorsContractsContractsSponsorContractIdOperation = paths["/sponsors/contracts/contracts/{SponsorContractId}"]['get']
export type GetSponsorsContractsContractsSponsorContractIdResponse = OperationResponse<GetSponsorsContractsContractsSponsorContractIdOperation>
export type GetSponsorsContractsContractsSponsorContractIdPathParams = OperationPathParams<GetSponsorsContractsContractsSponsorContractIdOperation>
export type GetSponsorsContractsContractsSponsorContractIdArgs = RequestOptionsBase & {
  path: GetSponsorsContractsContractsSponsorContractIdPathParams
}

export type DeleteSponsorsContractsContractsSponsorContractIdOperation = paths["/sponsors/contracts/contracts/{SponsorContractId}"]['delete']
export type DeleteSponsorsContractsContractsSponsorContractIdResponse = OperationResponse<DeleteSponsorsContractsContractsSponsorContractIdOperation>
export type DeleteSponsorsContractsContractsSponsorContractIdPathParams = OperationPathParams<DeleteSponsorsContractsContractsSponsorContractIdOperation>
export type DeleteSponsorsContractsContractsSponsorContractIdArgs = RequestOptionsBase & {
  path: DeleteSponsorsContractsContractsSponsorContractIdPathParams
}

export type PostSponsorsContractsContractsOperation = paths["/sponsors/contracts/contracts"]['post']
export type PostSponsorsContractsContractsResponse = OperationResponse<PostSponsorsContractsContractsOperation>
export type PostSponsorsContractsContractsBody = OperationRequestBody<PostSponsorsContractsContractsOperation>
export type PostSponsorsContractsContractsArgs = RequestOptionsBase & {
  body: PostSponsorsContractsContractsBody
}

export function createSponsorcontractsApi(client: HttpClient) {
  return {
    getContractBySponsorId(args: GetSponsorsContractsSponsorIDContractsArgs) {
      return client.request<GetSponsorsContractsSponsorIDContractsResponse>({
        method: 'GET',
        path: '/sponsors/contracts/{SponsorID}/contracts',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSponsorContractById(args: GetSponsorsContractsContractsSponsorContractIdArgs) {
      return client.request<GetSponsorsContractsContractsSponsorContractIdResponse>({
        method: 'GET',
        path: '/sponsors/contracts/contracts/{SponsorContractId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateContractToSponsor(args: DeleteSponsorsContractsContractsSponsorContractIdArgs) {
      return client.request<DeleteSponsorsContractsContractsSponsorContractIdResponse>({
        method: 'DELETE',
        path: '/sponsors/contracts/contracts/{SponsorContractId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateContractToSponsor(args: PostSponsorsContractsContractsArgs) {
      return client.request<PostSponsorsContractsContractsResponse>({
        method: 'POST',
        path: '/sponsors/contracts/contracts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
