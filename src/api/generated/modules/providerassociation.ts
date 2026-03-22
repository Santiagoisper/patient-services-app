import type { HttpClient, PathParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/providerassociation.ts'

export type GetProvidersAssociationsProviderIDMedicalservicesOperation = paths["/providers/associations/{ProviderID}/medicalservices"]['get']
export type GetProvidersAssociationsProviderIDMedicalservicesResponse = OperationResponse<GetProvidersAssociationsProviderIDMedicalservicesOperation>
export type GetProvidersAssociationsProviderIDMedicalservicesPathParams = OperationPathParams<GetProvidersAssociationsProviderIDMedicalservicesOperation>
export type GetProvidersAssociationsProviderIDMedicalservicesArgs = RequestOptionsBase & {
  path: GetProvidersAssociationsProviderIDMedicalservicesPathParams
}

export type GetProvidersAssociationsMedicalservicesProviderMedicalServiceIdOperation = paths["/providers/associations/medicalservices/{ProviderMedicalServiceId}"]['get']
export type GetProvidersAssociationsMedicalservicesProviderMedicalServiceIdResponse = OperationResponse<GetProvidersAssociationsMedicalservicesProviderMedicalServiceIdOperation>
export type GetProvidersAssociationsMedicalservicesProviderMedicalServiceIdPathParams = OperationPathParams<GetProvidersAssociationsMedicalservicesProviderMedicalServiceIdOperation>
export type GetProvidersAssociationsMedicalservicesProviderMedicalServiceIdArgs = RequestOptionsBase & {
  path: GetProvidersAssociationsMedicalservicesProviderMedicalServiceIdPathParams
}

export type DeleteProvidersAssociationsMedicalservicesProviderMedicalServiceIdOperation = paths["/providers/associations/medicalservices/{ProviderMedicalServiceId}"]['delete']
export type DeleteProvidersAssociationsMedicalservicesProviderMedicalServiceIdResponse = OperationResponse<DeleteProvidersAssociationsMedicalservicesProviderMedicalServiceIdOperation>
export type DeleteProvidersAssociationsMedicalservicesProviderMedicalServiceIdPathParams = OperationPathParams<DeleteProvidersAssociationsMedicalservicesProviderMedicalServiceIdOperation>
export type DeleteProvidersAssociationsMedicalservicesProviderMedicalServiceIdArgs = RequestOptionsBase & {
  path: DeleteProvidersAssociationsMedicalservicesProviderMedicalServiceIdPathParams
}

export type PostProvidersAssociationsMedicalservicesOperation = paths["/providers/associations/medicalservices"]['post']
export type PostProvidersAssociationsMedicalservicesResponse = OperationResponse<PostProvidersAssociationsMedicalservicesOperation>
export type PostProvidersAssociationsMedicalservicesBody = OperationRequestBody<PostProvidersAssociationsMedicalservicesOperation>
export type PostProvidersAssociationsMedicalservicesArgs = RequestOptionsBase & {
  body: PostProvidersAssociationsMedicalservicesBody
}

export type DeleteProvidersAssociationsProviderIDMedicalservicesMedicalServiceIdOperation = paths["/providers/associations/{ProviderID}/medicalservices/{MedicalServiceId}"]['delete']
export type DeleteProvidersAssociationsProviderIDMedicalservicesMedicalServiceIdResponse = OperationResponse<DeleteProvidersAssociationsProviderIDMedicalservicesMedicalServiceIdOperation>
export type DeleteProvidersAssociationsProviderIDMedicalservicesMedicalServiceIdPathParams = OperationPathParams<DeleteProvidersAssociationsProviderIDMedicalservicesMedicalServiceIdOperation>
export type DeleteProvidersAssociationsProviderIDMedicalservicesMedicalServiceIdArgs = RequestOptionsBase & {
  path: DeleteProvidersAssociationsProviderIDMedicalservicesMedicalServiceIdPathParams
}

export type GetProvidersAssociationsProviderIDPricelistsOperation = paths["/providers/associations/{ProviderID}/pricelists"]['get']
export type GetProvidersAssociationsProviderIDPricelistsResponse = OperationResponse<GetProvidersAssociationsProviderIDPricelistsOperation>
export type GetProvidersAssociationsProviderIDPricelistsPathParams = OperationPathParams<GetProvidersAssociationsProviderIDPricelistsOperation>
export type GetProvidersAssociationsProviderIDPricelistsArgs = RequestOptionsBase & {
  path: GetProvidersAssociationsProviderIDPricelistsPathParams
}

export type GetProvidersAssociationsPricelistsProviderPriceListIdOperation = paths["/providers/associations/pricelists/{ProviderPriceListId}"]['get']
export type GetProvidersAssociationsPricelistsProviderPriceListIdResponse = OperationResponse<GetProvidersAssociationsPricelistsProviderPriceListIdOperation>
export type GetProvidersAssociationsPricelistsProviderPriceListIdPathParams = OperationPathParams<GetProvidersAssociationsPricelistsProviderPriceListIdOperation>
export type GetProvidersAssociationsPricelistsProviderPriceListIdArgs = RequestOptionsBase & {
  path: GetProvidersAssociationsPricelistsProviderPriceListIdPathParams
}

export type GetProvidersAssociationsProviderIdPricelistsPriceListIdOperation = paths["/providers/associations/{ProviderId}/pricelists/{PriceListId}"]['get']
export type GetProvidersAssociationsProviderIdPricelistsPriceListIdResponse = OperationResponse<GetProvidersAssociationsProviderIdPricelistsPriceListIdOperation>
export type GetProvidersAssociationsProviderIdPricelistsPriceListIdPathParams = OperationPathParams<GetProvidersAssociationsProviderIdPricelistsPriceListIdOperation>
export type GetProvidersAssociationsProviderIdPricelistsPriceListIdArgs = RequestOptionsBase & {
  path: GetProvidersAssociationsProviderIdPricelistsPriceListIdPathParams
}

export type PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityOperation = paths["/providers/associations/PriceList/{ProviderPriceListId}/startvalidity"]['put']
export type PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityResponse = OperationResponse<PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityOperation>
export type PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityPathParams = OperationPathParams<PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityOperation>
export type PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityBody = OperationRequestBody<PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityOperation>
export type PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityArgs = RequestOptionsBase & {
  path: PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityPathParams
  body: PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityBody
}

export type PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityOperation = paths["/providers/associations/PriceList/{ProviderPriceListId}/endvalidity"]['put']
export type PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityResponse = OperationResponse<PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityOperation>
export type PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityPathParams = OperationPathParams<PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityOperation>
export type PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityBody = OperationRequestBody<PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityOperation>
export type PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityArgs = RequestOptionsBase & {
  path: PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityPathParams
  body: PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityBody
}

export type PutProvidersAssociationsPriceListProviderPriceListIdExpireOperation = paths["/providers/associations/PriceList/{ProviderPriceListId}/expire"]['put']
export type PutProvidersAssociationsPriceListProviderPriceListIdExpireResponse = OperationResponse<PutProvidersAssociationsPriceListProviderPriceListIdExpireOperation>
export type PutProvidersAssociationsPriceListProviderPriceListIdExpirePathParams = OperationPathParams<PutProvidersAssociationsPriceListProviderPriceListIdExpireOperation>
export type PutProvidersAssociationsPriceListProviderPriceListIdExpireArgs = RequestOptionsBase & {
  path: PutProvidersAssociationsPriceListProviderPriceListIdExpirePathParams
}

export type PutProvidersAssociationsPricelistsOperation = paths["/providers/associations/pricelists"]['put']
export type PutProvidersAssociationsPricelistsResponse = OperationResponse<PutProvidersAssociationsPricelistsOperation>
export type PutProvidersAssociationsPricelistsBody = OperationRequestBody<PutProvidersAssociationsPricelistsOperation>
export type PutProvidersAssociationsPricelistsArgs = RequestOptionsBase & {
  body: PutProvidersAssociationsPricelistsBody
}

export type DeleteProvidersAssociationsPriceListProviderPriceListIdOperation = paths["/providers/associations/PriceList/{ProviderPriceListId}"]['delete']
export type DeleteProvidersAssociationsPriceListProviderPriceListIdResponse = OperationResponse<DeleteProvidersAssociationsPriceListProviderPriceListIdOperation>
export type DeleteProvidersAssociationsPriceListProviderPriceListIdPathParams = OperationPathParams<DeleteProvidersAssociationsPriceListProviderPriceListIdOperation>
export type DeleteProvidersAssociationsPriceListProviderPriceListIdArgs = RequestOptionsBase & {
  path: DeleteProvidersAssociationsPriceListProviderPriceListIdPathParams
}

export type DeleteProvidersAssociationsProviderIdPriceListPriceListIdOperation = paths["/providers/associations/{ProviderId}/PriceList/{PriceListId}"]['delete']
export type DeleteProvidersAssociationsProviderIdPriceListPriceListIdResponse = OperationResponse<DeleteProvidersAssociationsProviderIdPriceListPriceListIdOperation>
export type DeleteProvidersAssociationsProviderIdPriceListPriceListIdPathParams = OperationPathParams<DeleteProvidersAssociationsProviderIdPriceListPriceListIdOperation>
export type DeleteProvidersAssociationsProviderIdPriceListPriceListIdArgs = RequestOptionsBase & {
  path: DeleteProvidersAssociationsProviderIdPriceListPriceListIdPathParams
}

export function createProviderassociationApi(client: HttpClient) {
  return {
    getMedicalServicesByProviderId(args: GetProvidersAssociationsProviderIDMedicalservicesArgs) {
      return client.request<GetProvidersAssociationsProviderIDMedicalservicesResponse>({
        method: 'GET',
        path: '/providers/associations/{ProviderID}/medicalservices',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProviderMedicalServiceById(args: GetProvidersAssociationsMedicalservicesProviderMedicalServiceIdArgs) {
      return client.request<GetProvidersAssociationsMedicalservicesProviderMedicalServiceIdResponse>({
        method: 'GET',
        path: '/providers/associations/medicalservices/{ProviderMedicalServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateMedicalServiceFromToProvider(args: DeleteProvidersAssociationsMedicalservicesProviderMedicalServiceIdArgs) {
      return client.request<DeleteProvidersAssociationsMedicalservicesProviderMedicalServiceIdResponse>({
        method: 'DELETE',
        path: '/providers/associations/medicalservices/{ProviderMedicalServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associateMedicalServiceToProvider(args: PostProvidersAssociationsMedicalservicesArgs) {
      return client.request<PostProvidersAssociationsMedicalservicesResponse>({
        method: 'POST',
        path: '/providers/associations/medicalservices',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    disassociateMedicalServiceFromToPractitionerByMedicalServiceId(args: DeleteProvidersAssociationsProviderIDMedicalservicesMedicalServiceIdArgs) {
      return client.request<DeleteProvidersAssociationsProviderIDMedicalservicesMedicalServiceIdResponse>({
        method: 'DELETE',
        path: '/providers/associations/{ProviderID}/medicalservices/{MedicalServiceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPriceListsByProviderId(args: GetProvidersAssociationsProviderIDPricelistsArgs) {
      return client.request<GetProvidersAssociationsProviderIDPricelistsResponse>({
        method: 'GET',
        path: '/providers/associations/{ProviderID}/pricelists',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProviderPriceListById(args: GetProvidersAssociationsPricelistsProviderPriceListIdArgs) {
      return client.request<GetProvidersAssociationsPricelistsProviderPriceListIdResponse>({
        method: 'GET',
        path: '/providers/associations/pricelists/{ProviderPriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getProviderPriceListByPriceListId(args: GetProvidersAssociationsProviderIdPricelistsPriceListIdArgs) {
      return client.request<GetProvidersAssociationsProviderIdPricelistsPriceListIdResponse>({
        method: 'GET',
        path: '/providers/associations/{ProviderId}/pricelists/{PriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    setStartValidityProviderPriceList(args: PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityArgs) {
      return client.request<PutProvidersAssociationsPriceListProviderPriceListIdStartvalidityResponse>({
        method: 'PUT',
        path: '/providers/associations/PriceList/{ProviderPriceListId}/startvalidity',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    setEndValidityProviderPriceList(args: PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityArgs) {
      return client.request<PutProvidersAssociationsPriceListProviderPriceListIdEndvalidityResponse>({
        method: 'PUT',
        path: '/providers/associations/PriceList/{ProviderPriceListId}/endvalidity',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    expireProviderPriceList(args: PutProvidersAssociationsPriceListProviderPriceListIdExpireArgs) {
      return client.request<PutProvidersAssociationsPriceListProviderPriceListIdExpireResponse>({
        method: 'PUT',
        path: '/providers/associations/PriceList/{ProviderPriceListId}/expire',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    associatePriceListToProvider(args: PutProvidersAssociationsPricelistsArgs) {
      return client.request<PutProvidersAssociationsPricelistsResponse>({
        method: 'PUT',
        path: '/providers/associations/pricelists',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteProviderPriceListById(args: DeleteProvidersAssociationsPriceListProviderPriceListIdArgs) {
      return client.request<DeleteProvidersAssociationsPriceListProviderPriceListIdResponse>({
        method: 'DELETE',
        path: '/providers/associations/PriceList/{ProviderPriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteProviderPriceListByPriceListId(args: DeleteProvidersAssociationsProviderIdPriceListPriceListIdArgs) {
      return client.request<DeleteProvidersAssociationsProviderIdPriceListPriceListIdResponse>({
        method: 'DELETE',
        path: '/providers/associations/{ProviderId}/PriceList/{PriceListId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
