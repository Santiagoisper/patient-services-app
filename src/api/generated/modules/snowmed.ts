import type { HttpClient, PathParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
} from '../../openapi.ts'
import type { paths } from '../contracts/snowmed.ts'

export type GetPathologiesSearchTextOperation = paths["/pathologies/{searchText}"]['get']
export type GetPathologiesSearchTextResponse = OperationResponse<GetPathologiesSearchTextOperation>
export type GetPathologiesSearchTextPathParams = OperationPathParams<GetPathologiesSearchTextOperation>
export type GetPathologiesSearchTextArgs = RequestOptionsBase & {
  path: GetPathologiesSearchTextPathParams
}

export type GetProceduresSearchTextOperation = paths["/procedures/{searchText}"]['get']
export type GetProceduresSearchTextResponse = OperationResponse<GetProceduresSearchTextOperation>
export type GetProceduresSearchTextPathParams = OperationPathParams<GetProceduresSearchTextOperation>
export type GetProceduresSearchTextArgs = RequestOptionsBase & {
  path: GetProceduresSearchTextPathParams
}

export type GetSpecialtiesSearchTextOperation = paths["/specialties/{searchText}"]['get']
export type GetSpecialtiesSearchTextResponse = OperationResponse<GetSpecialtiesSearchTextOperation>
export type GetSpecialtiesSearchTextPathParams = OperationPathParams<GetSpecialtiesSearchTextOperation>
export type GetSpecialtiesSearchTextArgs = RequestOptionsBase & {
  path: GetSpecialtiesSearchTextPathParams
}

export function createSnowmedApi(client: HttpClient) {
  return {
    getPatologiesByTerm(args: GetPathologiesSearchTextArgs) {
      return client.request<GetPathologiesSearchTextResponse>({
        method: 'GET',
        path: '/pathologies/{searchText}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProceduresByTerm(args: GetProceduresSearchTextArgs) {
      return client.request<GetProceduresSearchTextResponse>({
        method: 'GET',
        path: '/procedures/{searchText}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSpecialtiesByTerm(args: GetSpecialtiesSearchTextArgs) {
      return client.request<GetSpecialtiesSearchTextResponse>({
        method: 'GET',
        path: '/specialties/{searchText}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
