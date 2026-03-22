import type { HttpClient, PathParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/concepts.ts'

export type GetConceptsOperation = paths["/concepts"]['get']
export type GetConceptsResponse = OperationResponse<GetConceptsOperation>
export type GetConceptsBody = OperationRequestBody<GetConceptsOperation>
export type GetConceptsArgs = RequestOptionsBase & {
  body: GetConceptsBody
}

export type PostConceptsOperation = paths["/concepts"]['post']
export type PostConceptsResponse = OperationResponse<PostConceptsOperation>
export type PostConceptsBody = OperationRequestBody<PostConceptsOperation>
export type PostConceptsArgs = RequestOptionsBase & {
  body: PostConceptsBody
}

export type PutConceptsOperation = paths["/concepts"]['put']
export type PutConceptsResponse = OperationResponse<PutConceptsOperation>
export type PutConceptsBody = OperationRequestBody<PutConceptsOperation>
export type PutConceptsArgs = RequestOptionsBase & {
  body: PutConceptsBody
}

export type GetConceptsConceptIdOperation = paths["/concepts/{ConceptId}"]['get']
export type GetConceptsConceptIdResponse = OperationResponse<GetConceptsConceptIdOperation>
export type GetConceptsConceptIdPathParams = OperationPathParams<GetConceptsConceptIdOperation>
export type GetConceptsConceptIdArgs = RequestOptionsBase & {
  path: GetConceptsConceptIdPathParams
}

export function createConceptsApi(client: HttpClient) {
  return {
    getconcepts(args: GetConceptsArgs) {
      return client.request<GetConceptsResponse>({
        method: 'GET',
        path: '/concepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createConcept(args: PostConceptsArgs) {
      return client.request<PostConceptsResponse>({
        method: 'POST',
        path: '/concepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateConcept(args: PutConceptsArgs) {
      return client.request<PutConceptsResponse>({
        method: 'PUT',
        path: '/concepts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getConceptById(args: GetConceptsConceptIdArgs) {
      return client.request<GetConceptsConceptIdResponse>({
        method: 'GET',
        path: '/concepts/{ConceptId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
