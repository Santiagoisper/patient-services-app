import type { HttpClient, PathParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/pricelists.ts'

export type PostPricelistsOperation = paths["/pricelists"]['post']
export type PostPricelistsResponse = OperationResponse<PostPricelistsOperation>
export type PostPricelistsBody = OperationRequestBody<PostPricelistsOperation>
export type PostPricelistsArgs = RequestOptionsBase & {
  body: PostPricelistsBody
}

export type PutPricelistsOperation = paths["/pricelists"]['put']
export type PutPricelistsResponse = OperationResponse<PutPricelistsOperation>
export type PutPricelistsBody = OperationRequestBody<PutPricelistsOperation>
export type PutPricelistsArgs = RequestOptionsBase & {
  body: PutPricelistsBody
}

export type PostPricelistsDetailsOperation = paths["/pricelists/details"]['post']
export type PostPricelistsDetailsResponse = OperationResponse<PostPricelistsDetailsOperation>
export type PostPricelistsDetailsBody = OperationRequestBody<PostPricelistsDetailsOperation>
export type PostPricelistsDetailsArgs = RequestOptionsBase & {
  body: PostPricelistsDetailsBody
}

export type PutPricelistsDetailsOperation = paths["/pricelists/details"]['put']
export type PutPricelistsDetailsResponse = OperationResponse<PutPricelistsDetailsOperation>
export type PutPricelistsDetailsBody = OperationRequestBody<PutPricelistsDetailsOperation>
export type PutPricelistsDetailsArgs = RequestOptionsBase & {
  body: PutPricelistsDetailsBody
}

export type GetPricelistsPriceListIdOperation = paths["/pricelists/{priceListId}"]['get']
export type GetPricelistsPriceListIdResponse = OperationResponse<GetPricelistsPriceListIdOperation>
export type GetPricelistsPriceListIdPathParams = OperationPathParams<GetPricelistsPriceListIdOperation>
export type GetPricelistsPriceListIdArgs = RequestOptionsBase & {
  path: GetPricelistsPriceListIdPathParams
}

export type GetPricelistsPriceListIdCloneOperation = paths["/pricelists/{priceListId}/clone"]['get']
export type GetPricelistsPriceListIdCloneResponse = OperationResponse<GetPricelistsPriceListIdCloneOperation>
export type GetPricelistsPriceListIdClonePathParams = OperationPathParams<GetPricelistsPriceListIdCloneOperation>
export type GetPricelistsPriceListIdCloneArgs = RequestOptionsBase & {
  path: GetPricelistsPriceListIdClonePathParams
}

export type DeletePricelistsDetailsPriceListDetialsIdOperation = paths["/pricelists/details/{PriceListDetialsId}"]['delete']
export type DeletePricelistsDetailsPriceListDetialsIdResponse = OperationResponse<DeletePricelistsDetailsPriceListDetialsIdOperation>
export type DeletePricelistsDetailsPriceListDetialsIdPathParams = OperationPathParams<DeletePricelistsDetailsPriceListDetialsIdOperation>
export type DeletePricelistsDetailsPriceListDetialsIdArgs = RequestOptionsBase & {
  path: DeletePricelistsDetailsPriceListDetialsIdPathParams
}

export type GetPricelistsPriceListIdDetailsOperation = paths["/pricelists/{priceListId}/details"]['get']
export type GetPricelistsPriceListIdDetailsResponse = OperationResponse<GetPricelistsPriceListIdDetailsOperation>
export type GetPricelistsPriceListIdDetailsPathParams = OperationPathParams<GetPricelistsPriceListIdDetailsOperation>
export type GetPricelistsPriceListIdDetailsArgs = RequestOptionsBase & {
  path: GetPricelistsPriceListIdDetailsPathParams
}

export type GetPricelistsDetailsPriceListDetailIdOperation = paths["/pricelists/details/{priceListDetailId}"]['get']
export type GetPricelistsDetailsPriceListDetailIdResponse = OperationResponse<GetPricelistsDetailsPriceListDetailIdOperation>
export type GetPricelistsDetailsPriceListDetailIdPathParams = OperationPathParams<GetPricelistsDetailsPriceListDetailIdOperation>
export type GetPricelistsDetailsPriceListDetailIdArgs = RequestOptionsBase & {
  path: GetPricelistsDetailsPriceListDetailIdPathParams
}

export type GetPricelistsPriceListIdDetailsItemRefererIdOperation = paths["/pricelists/{PriceListId}/details/{ItemRefererId}"]['get']
export type GetPricelistsPriceListIdDetailsItemRefererIdResponse = OperationResponse<GetPricelistsPriceListIdDetailsItemRefererIdOperation>
export type GetPricelistsPriceListIdDetailsItemRefererIdPathParams = OperationPathParams<GetPricelistsPriceListIdDetailsItemRefererIdOperation>
export type GetPricelistsPriceListIdDetailsItemRefererIdArgs = RequestOptionsBase & {
  path: GetPricelistsPriceListIdDetailsItemRefererIdPathParams
}

export function createPricelistsApi(client: HttpClient) {
  return {
    addPriceList(args: PostPricelistsArgs) {
      return client.request<PostPricelistsResponse>({
        method: 'POST',
        path: '/pricelists',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updatePriceList(args: PutPricelistsArgs) {
      return client.request<PutPricelistsResponse>({
        method: 'PUT',
        path: '/pricelists',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    addPriceListDetail(args: PostPricelistsDetailsArgs) {
      return client.request<PostPricelistsDetailsResponse>({
        method: 'POST',
        path: '/pricelists/details',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updatePriceListDetail(args: PutPricelistsDetailsArgs) {
      return client.request<PutPricelistsDetailsResponse>({
        method: 'PUT',
        path: '/pricelists/details',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPriceList(args: GetPricelistsPriceListIdArgs) {
      return client.request<GetPricelistsPriceListIdResponse>({
        method: 'GET',
        path: '/pricelists/{priceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    clonePriceList(args: GetPricelistsPriceListIdCloneArgs) {
      return client.request<GetPricelistsPriceListIdCloneResponse>({
        method: 'GET',
        path: '/pricelists/{priceListId}/clone',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deletePriceListDetail(args: DeletePricelistsDetailsPriceListDetialsIdArgs) {
      return client.request<DeletePricelistsDetailsPriceListDetialsIdResponse>({
        method: 'DELETE',
        path: '/pricelists/details/{PriceListDetialsId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPriceListDetailsByPriceList(args: GetPricelistsPriceListIdDetailsArgs) {
      return client.request<GetPricelistsPriceListIdDetailsResponse>({
        method: 'GET',
        path: '/pricelists/{priceListId}/details',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPriceListDetail(args: GetPricelistsDetailsPriceListDetailIdArgs) {
      return client.request<GetPricelistsDetailsPriceListDetailIdResponse>({
        method: 'GET',
        path: '/pricelists/details/{priceListDetailId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getCurrentPriceByReferenceId(args: GetPricelistsPriceListIdDetailsItemRefererIdArgs) {
      return client.request<GetPricelistsPriceListIdDetailsItemRefererIdResponse>({
        method: 'GET',
        path: '/pricelists/{PriceListId}/details/{ItemRefererId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
