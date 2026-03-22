import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/sponsors.ts'

export type GetSponsorsOperation = paths["/sponsors"]['get']
export type GetSponsorsResponse = OperationResponse<GetSponsorsOperation>
export type GetSponsorsQueryParams = OperationQueryParams<GetSponsorsOperation>
export type GetSponsorsArgs = RequestOptionsBase & {
  query?: GetSponsorsQueryParams
}

export type PostSponsorsOperation = paths["/sponsors"]['post']
export type PostSponsorsResponse = OperationResponse<PostSponsorsOperation>
export type PostSponsorsBody = OperationRequestBody<PostSponsorsOperation>
export type PostSponsorsArgs = RequestOptionsBase & {
  body: PostSponsorsBody
}

export type PutSponsorsOperation = paths["/sponsors"]['put']
export type PutSponsorsResponse = OperationResponse<PutSponsorsOperation>
export type PutSponsorsBody = OperationRequestBody<PutSponsorsOperation>
export type PutSponsorsArgs = RequestOptionsBase & {
  body: PutSponsorsBody
}

export type GetSponsorsResyncOperation = paths["/sponsors/resync"]['get']
export type GetSponsorsResyncResponse = OperationResponse<GetSponsorsResyncOperation>
export type GetSponsorsResyncArgs = RequestOptionsBase & {
}

export type GetSponsorsSponsorIdOperation = paths["/sponsors/{SponsorId}"]['get']
export type GetSponsorsSponsorIdResponse = OperationResponse<GetSponsorsSponsorIdOperation>
export type GetSponsorsSponsorIdPathParams = OperationPathParams<GetSponsorsSponsorIdOperation>
export type GetSponsorsSponsorIdArgs = RequestOptionsBase & {
  path: GetSponsorsSponsorIdPathParams
}

export type DeleteSponsorsSponsorIdOperation = paths["/sponsors/{SponsorId}"]['delete']
export type DeleteSponsorsSponsorIdResponse = OperationResponse<DeleteSponsorsSponsorIdOperation>
export type DeleteSponsorsSponsorIdPathParams = OperationPathParams<DeleteSponsorsSponsorIdOperation>
export type DeleteSponsorsSponsorIdArgs = RequestOptionsBase & {
  path: DeleteSponsorsSponsorIdPathParams
}

export function createSponsorsApi(client: HttpClient) {
  return {
    getAllSponsor(args: GetSponsorsArgs) {
      return client.request<GetSponsorsResponse>({
        method: 'GET',
        path: '/sponsors',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createSponsor(args: PostSponsorsArgs) {
      return client.request<PostSponsorsResponse>({
        method: 'POST',
        path: '/sponsors',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateSponsor(args: PutSponsorsArgs) {
      return client.request<PutSponsorsResponse>({
        method: 'PUT',
        path: '/sponsors',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    reSyncSponsor(args: GetSponsorsResyncArgs = {}) {
      return client.request<GetSponsorsResyncResponse>({
        method: 'GET',
        path: '/sponsors/resync',
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSponsorById(args: GetSponsorsSponsorIdArgs) {
      return client.request<GetSponsorsSponsorIdResponse>({
        method: 'GET',
        path: '/sponsors/{SponsorId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteSponsor(args: DeleteSponsorsSponsorIdArgs) {
      return client.request<DeleteSponsorsSponsorIdResponse>({
        method: 'DELETE',
        path: '/sponsors/{SponsorId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
