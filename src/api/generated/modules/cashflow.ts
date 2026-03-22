import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/cashflow.ts'

export type GetCashflowAccountsOperation = paths["/cashflow/accounts"]['get']
export type GetCashflowAccountsResponse = OperationResponse<GetCashflowAccountsOperation>
export type GetCashflowAccountsQueryParams = OperationQueryParams<GetCashflowAccountsOperation>
export type GetCashflowAccountsArgs = RequestOptionsBase & {
  query?: GetCashflowAccountsQueryParams
}

export type PostCashflowAccountsOperation = paths["/cashflow/accounts"]['post']
export type PostCashflowAccountsResponse = OperationResponse<PostCashflowAccountsOperation>
export type PostCashflowAccountsBody = OperationRequestBody<PostCashflowAccountsOperation>
export type PostCashflowAccountsArgs = RequestOptionsBase & {
  body: PostCashflowAccountsBody
}

export type GetCashflowAccountsAccountIdOperation = paths["/cashflow/accounts/{AccountId}"]['get']
export type GetCashflowAccountsAccountIdResponse = OperationResponse<GetCashflowAccountsAccountIdOperation>
export type GetCashflowAccountsAccountIdPathParams = OperationPathParams<GetCashflowAccountsAccountIdOperation>
export type GetCashflowAccountsAccountIdArgs = RequestOptionsBase & {
  path: GetCashflowAccountsAccountIdPathParams
}

export type GetCashflowAccountsAccountIdMovementsOperation = paths["/cashflow/accounts/{AccountId}/movements"]['get']
export type GetCashflowAccountsAccountIdMovementsResponse = OperationResponse<GetCashflowAccountsAccountIdMovementsOperation>
export type GetCashflowAccountsAccountIdMovementsPathParams = OperationPathParams<GetCashflowAccountsAccountIdMovementsOperation>
export type GetCashflowAccountsAccountIdMovementsArgs = RequestOptionsBase & {
  path: GetCashflowAccountsAccountIdMovementsPathParams
}

export type GetCashflowAccountsMovementsAccountMovementIdOperation = paths["/cashflow/accounts/movements/{AccountMovementId}"]['get']
export type GetCashflowAccountsMovementsAccountMovementIdResponse = OperationResponse<GetCashflowAccountsMovementsAccountMovementIdOperation>
export type GetCashflowAccountsMovementsAccountMovementIdPathParams = OperationPathParams<GetCashflowAccountsMovementsAccountMovementIdOperation>
export type GetCashflowAccountsMovementsAccountMovementIdArgs = RequestOptionsBase & {
  path: GetCashflowAccountsMovementsAccountMovementIdPathParams
}

export type PostCashflowAccountsMovementsOperation = paths["/cashflow/accounts/movements"]['post']
export type PostCashflowAccountsMovementsResponse = OperationResponse<PostCashflowAccountsMovementsOperation>
export type PostCashflowAccountsMovementsBody = OperationRequestBody<PostCashflowAccountsMovementsOperation>
export type PostCashflowAccountsMovementsArgs = RequestOptionsBase & {
  body: PostCashflowAccountsMovementsBody
}

export type PutCashflowAccountsMovementsOperation = paths["/cashflow/accounts/movements"]['put']
export type PutCashflowAccountsMovementsResponse = OperationResponse<PutCashflowAccountsMovementsOperation>
export type PutCashflowAccountsMovementsBody = OperationRequestBody<PutCashflowAccountsMovementsOperation>
export type PutCashflowAccountsMovementsArgs = RequestOptionsBase & {
  body: PutCashflowAccountsMovementsBody
}

export type GetCashflowDebtsCreditorCreditorIdOperation = paths["/cashflow/debts/creditor/{CreditorId}"]['get']
export type GetCashflowDebtsCreditorCreditorIdResponse = OperationResponse<GetCashflowDebtsCreditorCreditorIdOperation>
export type GetCashflowDebtsCreditorCreditorIdPathParams = OperationPathParams<GetCashflowDebtsCreditorCreditorIdOperation>
export type GetCashflowDebtsCreditorCreditorIdQueryParams = OperationQueryParams<GetCashflowDebtsCreditorCreditorIdOperation>
export type GetCashflowDebtsCreditorCreditorIdArgs = RequestOptionsBase & {
  path: GetCashflowDebtsCreditorCreditorIdPathParams
  query?: GetCashflowDebtsCreditorCreditorIdQueryParams
}

export type GetCashflowDebtsDebtorDebtorIdOperation = paths["/cashflow/debts/debtor/{DebtorId}"]['get']
export type GetCashflowDebtsDebtorDebtorIdResponse = OperationResponse<GetCashflowDebtsDebtorDebtorIdOperation>
export type GetCashflowDebtsDebtorDebtorIdPathParams = OperationPathParams<GetCashflowDebtsDebtorDebtorIdOperation>
export type GetCashflowDebtsDebtorDebtorIdQueryParams = OperationQueryParams<GetCashflowDebtsDebtorDebtorIdOperation>
export type GetCashflowDebtsDebtorDebtorIdArgs = RequestOptionsBase & {
  path: GetCashflowDebtsDebtorDebtorIdPathParams
  query?: GetCashflowDebtsDebtorDebtorIdQueryParams
}

export type GetCashflowDebtsSettlementsSettlementIdOperation = paths["/cashflow/debts/settlements/{SettlementId}"]['get']
export type GetCashflowDebtsSettlementsSettlementIdResponse = OperationResponse<GetCashflowDebtsSettlementsSettlementIdOperation>
export type GetCashflowDebtsSettlementsSettlementIdPathParams = OperationPathParams<GetCashflowDebtsSettlementsSettlementIdOperation>
export type GetCashflowDebtsSettlementsSettlementIdQueryParams = OperationQueryParams<GetCashflowDebtsSettlementsSettlementIdOperation>
export type GetCashflowDebtsSettlementsSettlementIdArgs = RequestOptionsBase & {
  path: GetCashflowDebtsSettlementsSettlementIdPathParams
  query?: GetCashflowDebtsSettlementsSettlementIdQueryParams
}

export type GetCashflowDebtsDebtIdOperation = paths["/cashflow/debts/{DebtId}"]['get']
export type GetCashflowDebtsDebtIdResponse = OperationResponse<GetCashflowDebtsDebtIdOperation>
export type GetCashflowDebtsDebtIdPathParams = OperationPathParams<GetCashflowDebtsDebtIdOperation>
export type GetCashflowDebtsDebtIdArgs = RequestOptionsBase & {
  path: GetCashflowDebtsDebtIdPathParams
}

export type GetCashflowDebtsDebtorIdOperation = paths["/cashflow/debts/{DebtorId}"]['get']
export type GetCashflowDebtsDebtorIdResponse = OperationResponse<GetCashflowDebtsDebtorIdOperation>
export type GetCashflowDebtsDebtorIdPathParams = OperationPathParams<GetCashflowDebtsDebtorIdOperation>
export type GetCashflowDebtsDebtorIdQueryParams = OperationQueryParams<GetCashflowDebtsDebtorIdOperation>
export type GetCashflowDebtsDebtorIdArgs = RequestOptionsBase & {
  path: GetCashflowDebtsDebtorIdPathParams
  query?: GetCashflowDebtsDebtorIdQueryParams
}

export type PostCashflowDebtsOperation = paths["/cashflow/debts"]['post']
export type PostCashflowDebtsResponse = OperationResponse<PostCashflowDebtsOperation>
export type PostCashflowDebtsBody = OperationRequestBody<PostCashflowDebtsOperation>
export type PostCashflowDebtsArgs = RequestOptionsBase & {
  body: PostCashflowDebtsBody
}

export type PostCashflowDebtsDebtIdForgivenessOperation = paths["/cashflow/debts/{debtId}/forgiveness"]['post']
export type PostCashflowDebtsDebtIdForgivenessResponse = OperationResponse<PostCashflowDebtsDebtIdForgivenessOperation>
export type PostCashflowDebtsDebtIdForgivenessPathParams = OperationPathParams<PostCashflowDebtsDebtIdForgivenessOperation>
export type PostCashflowDebtsDebtIdForgivenessArgs = RequestOptionsBase & {
  path: PostCashflowDebtsDebtIdForgivenessPathParams
}

export type PostCashflowDebtsDebtIdAdjustmentOperation = paths["/cashflow/debts/{debtId}/adjustment"]['post']
export type PostCashflowDebtsDebtIdAdjustmentResponse = OperationResponse<PostCashflowDebtsDebtIdAdjustmentOperation>
export type PostCashflowDebtsDebtIdAdjustmentPathParams = OperationPathParams<PostCashflowDebtsDebtIdAdjustmentOperation>
export type PostCashflowDebtsDebtIdAdjustmentBody = OperationRequestBody<PostCashflowDebtsDebtIdAdjustmentOperation>
export type PostCashflowDebtsDebtIdAdjustmentArgs = RequestOptionsBase & {
  path: PostCashflowDebtsDebtIdAdjustmentPathParams
  body: PostCashflowDebtsDebtIdAdjustmentBody
}

export type PostCashflowDebtsDebtIdRollbackOperation = paths["/cashflow/debts/{debtId}/rollback"]['post']
export type PostCashflowDebtsDebtIdRollbackResponse = OperationResponse<PostCashflowDebtsDebtIdRollbackOperation>
export type PostCashflowDebtsDebtIdRollbackPathParams = OperationPathParams<PostCashflowDebtsDebtIdRollbackOperation>
export type PostCashflowDebtsDebtIdRollbackArgs = RequestOptionsBase & {
  path: PostCashflowDebtsDebtIdRollbackPathParams
}

export type GetCashflowDebtsDebtIdPaidOperation = paths["/cashflow/debts/{debtId}/paid"]['get']
export type GetCashflowDebtsDebtIdPaidResponse = OperationResponse<GetCashflowDebtsDebtIdPaidOperation>
export type GetCashflowDebtsDebtIdPaidPathParams = OperationPathParams<GetCashflowDebtsDebtIdPaidOperation>
export type GetCashflowDebtsDebtIdPaidArgs = RequestOptionsBase & {
  path: GetCashflowDebtsDebtIdPaidPathParams
}

export type GetCashflowDebtsDebtIdMovementsOperation = paths["/cashflow/debts/{DebtId}/movements"]['get']
export type GetCashflowDebtsDebtIdMovementsResponse = OperationResponse<GetCashflowDebtsDebtIdMovementsOperation>
export type GetCashflowDebtsDebtIdMovementsPathParams = OperationPathParams<GetCashflowDebtsDebtIdMovementsOperation>
export type GetCashflowDebtsDebtIdMovementsArgs = RequestOptionsBase & {
  path: GetCashflowDebtsDebtIdMovementsPathParams
}

export type GetCashflowDebtsMovementsDebtMovementIdOperation = paths["/cashflow/debts/movements/{debtMovementId}"]['get']
export type GetCashflowDebtsMovementsDebtMovementIdResponse = OperationResponse<GetCashflowDebtsMovementsDebtMovementIdOperation>
export type GetCashflowDebtsMovementsDebtMovementIdPathParams = OperationPathParams<GetCashflowDebtsMovementsDebtMovementIdOperation>
export type GetCashflowDebtsMovementsDebtMovementIdArgs = RequestOptionsBase & {
  path: GetCashflowDebtsMovementsDebtMovementIdPathParams
}

export type PostCashflowDebtsMovementsOperation = paths["/cashflow/debts/movements"]['post']
export type PostCashflowDebtsMovementsResponse = OperationResponse<PostCashflowDebtsMovementsOperation>
export type PostCashflowDebtsMovementsBody = OperationRequestBody<PostCashflowDebtsMovementsOperation>
export type PostCashflowDebtsMovementsArgs = RequestOptionsBase & {
  body: PostCashflowDebtsMovementsBody
}

export type GetCashflowInfoOperation = paths["/cashflow/info"]['get']
export type GetCashflowInfoResponse = OperationResponse<GetCashflowInfoOperation>
export type GetCashflowInfoArgs = RequestOptionsBase & {
}

export type GetCashflowMovementOperation = paths["/cashflow/movement"]['get']
export type GetCashflowMovementResponse = OperationResponse<GetCashflowMovementOperation>
export type GetCashflowMovementQueryParams = OperationQueryParams<GetCashflowMovementOperation>
export type GetCashflowMovementArgs = RequestOptionsBase & {
  query?: GetCashflowMovementQueryParams
}

export type GetCashflowMovementTypesOperation = paths["/cashflow/movement-types"]['get']
export type GetCashflowMovementTypesResponse = OperationResponse<GetCashflowMovementTypesOperation>
export type GetCashflowMovementTypesArgs = RequestOptionsBase & {
}

export type PostCashflowMovementTypesOperation = paths["/cashflow/movement-types"]['post']
export type PostCashflowMovementTypesResponse = OperationResponse<PostCashflowMovementTypesOperation>
export type PostCashflowMovementTypesBody = OperationRequestBody<PostCashflowMovementTypesOperation>
export type PostCashflowMovementTypesArgs = RequestOptionsBase & {
  body: PostCashflowMovementTypesBody
}

export type PutCashflowMovementTypesOperation = paths["/cashflow/movement-types"]['put']
export type PutCashflowMovementTypesResponse = OperationResponse<PutCashflowMovementTypesOperation>
export type PutCashflowMovementTypesBody = OperationRequestBody<PutCashflowMovementTypesOperation>
export type PutCashflowMovementTypesArgs = RequestOptionsBase & {
  body: PutCashflowMovementTypesBody
}

export type GetCashflowMovementTypesMovementTypeIdOperation = paths["/cashflow/movement-types/{MovementTypeId}"]['get']
export type GetCashflowMovementTypesMovementTypeIdResponse = OperationResponse<GetCashflowMovementTypesMovementTypeIdOperation>
export type GetCashflowMovementTypesMovementTypeIdPathParams = OperationPathParams<GetCashflowMovementTypesMovementTypeIdOperation>
export type GetCashflowMovementTypesMovementTypeIdArgs = RequestOptionsBase & {
  path: GetCashflowMovementTypesMovementTypeIdPathParams
}

export type DeleteCashflowMovementTypesMovementTypeIdOperation = paths["/cashflow/movement-types/{MovementTypeId}"]['delete']
export type DeleteCashflowMovementTypesMovementTypeIdResponse = OperationResponse<DeleteCashflowMovementTypesMovementTypeIdOperation>
export type DeleteCashflowMovementTypesMovementTypeIdPathParams = OperationPathParams<DeleteCashflowMovementTypesMovementTypeIdOperation>
export type DeleteCashflowMovementTypesMovementTypeIdArgs = RequestOptionsBase & {
  path: DeleteCashflowMovementTypesMovementTypeIdPathParams
}

export type GetCashflowPaymentsChartInfoOperation = paths["/cashflow/payments/chart-info"]['get']
export type GetCashflowPaymentsChartInfoResponse = OperationResponse<GetCashflowPaymentsChartInfoOperation>
export type GetCashflowPaymentsChartInfoQueryParams = OperationQueryParams<GetCashflowPaymentsChartInfoOperation>
export type GetCashflowPaymentsChartInfoArgs = RequestOptionsBase & {
  query?: GetCashflowPaymentsChartInfoQueryParams
}

export type GetCashflowPaymentsOperation = paths["/cashflow/payments"]['get']
export type GetCashflowPaymentsResponse = OperationResponse<GetCashflowPaymentsOperation>
export type GetCashflowPaymentsQueryParams = OperationQueryParams<GetCashflowPaymentsOperation>
export type GetCashflowPaymentsArgs = RequestOptionsBase & {
  query?: GetCashflowPaymentsQueryParams
}

export type PostCashflowPaymentsOperation = paths["/cashflow/payments"]['post']
export type PostCashflowPaymentsResponse = OperationResponse<PostCashflowPaymentsOperation>
export type PostCashflowPaymentsBody = OperationRequestBody<PostCashflowPaymentsOperation>
export type PostCashflowPaymentsArgs = RequestOptionsBase & {
  body: PostCashflowPaymentsBody
}

export type GetCashflowPaymentsPendingImputationOperation = paths["/cashflow/payments/pending-imputation"]['get']
export type GetCashflowPaymentsPendingImputationResponse = OperationResponse<GetCashflowPaymentsPendingImputationOperation>
export type GetCashflowPaymentsPendingImputationQueryParams = OperationQueryParams<GetCashflowPaymentsPendingImputationOperation>
export type GetCashflowPaymentsPendingImputationArgs = RequestOptionsBase & {
  query?: GetCashflowPaymentsPendingImputationQueryParams
}

export type GetCashflowPaymentsPaymentIdOperation = paths["/cashflow/payments/{PaymentId}"]['get']
export type GetCashflowPaymentsPaymentIdResponse = OperationResponse<GetCashflowPaymentsPaymentIdOperation>
export type GetCashflowPaymentsPaymentIdPathParams = OperationPathParams<GetCashflowPaymentsPaymentIdOperation>
export type GetCashflowPaymentsPaymentIdArgs = RequestOptionsBase & {
  path: GetCashflowPaymentsPaymentIdPathParams
}

export type PostCashflowPaymentsPaymentIdRollbackCreationOperation = paths["/cashflow/payments/{paymentId}/rollback-creation"]['post']
export type PostCashflowPaymentsPaymentIdRollbackCreationResponse = OperationResponse<PostCashflowPaymentsPaymentIdRollbackCreationOperation>
export type PostCashflowPaymentsPaymentIdRollbackCreationPathParams = OperationPathParams<PostCashflowPaymentsPaymentIdRollbackCreationOperation>
export type PostCashflowPaymentsPaymentIdRollbackCreationArgs = RequestOptionsBase & {
  path: PostCashflowPaymentsPaymentIdRollbackCreationPathParams
}

export type PostCashflowPaymentsPaymentIdRollbackImputationsOperation = paths["/cashflow/payments/{paymentId}/rollback-imputations"]['post']
export type PostCashflowPaymentsPaymentIdRollbackImputationsResponse = OperationResponse<PostCashflowPaymentsPaymentIdRollbackImputationsOperation>
export type PostCashflowPaymentsPaymentIdRollbackImputationsPathParams = OperationPathParams<PostCashflowPaymentsPaymentIdRollbackImputationsOperation>
export type PostCashflowPaymentsPaymentIdRollbackImputationsArgs = RequestOptionsBase & {
  path: PostCashflowPaymentsPaymentIdRollbackImputationsPathParams
}

export type PostCashflowPaymentsPaymentIdAdjustmentOperation = paths["/cashflow/payments/{paymentId}/adjustment"]['post']
export type PostCashflowPaymentsPaymentIdAdjustmentResponse = OperationResponse<PostCashflowPaymentsPaymentIdAdjustmentOperation>
export type PostCashflowPaymentsPaymentIdAdjustmentPathParams = OperationPathParams<PostCashflowPaymentsPaymentIdAdjustmentOperation>
export type PostCashflowPaymentsPaymentIdAdjustmentBody = OperationRequestBody<PostCashflowPaymentsPaymentIdAdjustmentOperation>
export type PostCashflowPaymentsPaymentIdAdjustmentArgs = RequestOptionsBase & {
  path: PostCashflowPaymentsPaymentIdAdjustmentPathParams
  body: PostCashflowPaymentsPaymentIdAdjustmentBody
}

export type GetCashflowPaymentmovementDebtDebtIdOperation = paths["/cashflow/paymentmovement/debt/{debtId}"]['get']
export type GetCashflowPaymentmovementDebtDebtIdResponse = OperationResponse<GetCashflowPaymentmovementDebtDebtIdOperation>
export type GetCashflowPaymentmovementDebtDebtIdPathParams = OperationPathParams<GetCashflowPaymentmovementDebtDebtIdOperation>
export type GetCashflowPaymentmovementDebtDebtIdArgs = RequestOptionsBase & {
  path: GetCashflowPaymentmovementDebtDebtIdPathParams
}

export type GetCashflowPaymentmovementPaymentPaymentIdOperation = paths["/cashflow/paymentmovement/payment/{paymentId}"]['get']
export type GetCashflowPaymentmovementPaymentPaymentIdResponse = OperationResponse<GetCashflowPaymentmovementPaymentPaymentIdOperation>
export type GetCashflowPaymentmovementPaymentPaymentIdPathParams = OperationPathParams<GetCashflowPaymentmovementPaymentPaymentIdOperation>
export type GetCashflowPaymentmovementPaymentPaymentIdArgs = RequestOptionsBase & {
  path: GetCashflowPaymentmovementPaymentPaymentIdPathParams
}

export type GetCashflowSystemMovementsOperation = paths["/cashflow/system-movements"]['get']
export type GetCashflowSystemMovementsResponse = OperationResponse<GetCashflowSystemMovementsOperation>
export type GetCashflowSystemMovementsArgs = RequestOptionsBase & {
}

export type PostCashflowSystemMovementsOperation = paths["/cashflow/system-movements"]['post']
export type PostCashflowSystemMovementsResponse = OperationResponse<PostCashflowSystemMovementsOperation>
export type PostCashflowSystemMovementsBody = OperationRequestBody<PostCashflowSystemMovementsOperation>
export type PostCashflowSystemMovementsArgs = RequestOptionsBase & {
  body: PostCashflowSystemMovementsBody
}

export type PutCashflowSystemMovementsOperation = paths["/cashflow/system-movements"]['put']
export type PutCashflowSystemMovementsResponse = OperationResponse<PutCashflowSystemMovementsOperation>
export type PutCashflowSystemMovementsBody = OperationRequestBody<PutCashflowSystemMovementsOperation>
export type PutCashflowSystemMovementsArgs = RequestOptionsBase & {
  body: PutCashflowSystemMovementsBody
}

export type GetCashflowSystemMovementsSystemMovementIdOperation = paths["/cashflow/system-movements/{SystemMovementId}"]['get']
export type GetCashflowSystemMovementsSystemMovementIdResponse = OperationResponse<GetCashflowSystemMovementsSystemMovementIdOperation>
export type GetCashflowSystemMovementsSystemMovementIdPathParams = OperationPathParams<GetCashflowSystemMovementsSystemMovementIdOperation>
export type GetCashflowSystemMovementsSystemMovementIdArgs = RequestOptionsBase & {
  path: GetCashflowSystemMovementsSystemMovementIdPathParams
}

export type DeleteCashflowSystemMovementsSystemMovementIdOperation = paths["/cashflow/system-movements/{SystemMovementId}"]['delete']
export type DeleteCashflowSystemMovementsSystemMovementIdResponse = OperationResponse<DeleteCashflowSystemMovementsSystemMovementIdOperation>
export type DeleteCashflowSystemMovementsSystemMovementIdPathParams = OperationPathParams<DeleteCashflowSystemMovementsSystemMovementIdOperation>
export type DeleteCashflowSystemMovementsSystemMovementIdArgs = RequestOptionsBase & {
  path: DeleteCashflowSystemMovementsSystemMovementIdPathParams
}

export function createCashflowApi(client: HttpClient) {
  return {
    getAccounts(args: GetCashflowAccountsArgs) {
      return client.request<GetCashflowAccountsResponse>({
        method: 'GET',
        path: '/cashflow/accounts',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createAccount(args: PostCashflowAccountsArgs) {
      return client.request<PostCashflowAccountsResponse>({
        method: 'POST',
        path: '/cashflow/accounts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAccount(args: GetCashflowAccountsAccountIdArgs) {
      return client.request<GetCashflowAccountsAccountIdResponse>({
        method: 'GET',
        path: '/cashflow/accounts/{AccountId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAccountMovements(args: GetCashflowAccountsAccountIdMovementsArgs) {
      return client.request<GetCashflowAccountsAccountIdMovementsResponse>({
        method: 'GET',
        path: '/cashflow/accounts/{AccountId}/movements',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAccountMovementById(args: GetCashflowAccountsMovementsAccountMovementIdArgs) {
      return client.request<GetCashflowAccountsMovementsAccountMovementIdResponse>({
        method: 'GET',
        path: '/cashflow/accounts/movements/{AccountMovementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createAccountMovement(args: PostCashflowAccountsMovementsArgs) {
      return client.request<PostCashflowAccountsMovementsResponse>({
        method: 'POST',
        path: '/cashflow/accounts/movements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateAccountMovement(args: PutCashflowAccountsMovementsArgs) {
      return client.request<PutCashflowAccountsMovementsResponse>({
        method: 'PUT',
        path: '/cashflow/accounts/movements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getDebtsByCreditor(args: GetCashflowDebtsCreditorCreditorIdArgs) {
      return client.request<GetCashflowDebtsCreditorCreditorIdResponse>({
        method: 'GET',
        path: '/cashflow/debts/creditor/{CreditorId}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getDebtsByDebtor(args: GetCashflowDebtsDebtorDebtorIdArgs) {
      return client.request<GetCashflowDebtsDebtorDebtorIdResponse>({
        method: 'GET',
        path: '/cashflow/debts/debtor/{DebtorId}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllDebtsBySettlementId(args: GetCashflowDebtsSettlementsSettlementIdArgs) {
      return client.request<GetCashflowDebtsSettlementsSettlementIdResponse>({
        method: 'GET',
        path: '/cashflow/debts/settlements/{SettlementId}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getDebtById(args: GetCashflowDebtsDebtIdArgs) {
      return client.request<GetCashflowDebtsDebtIdResponse>({
        method: 'GET',
        path: '/cashflow/debts/{DebtId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPendingCreditorDebtsByDebtorById(args: GetCashflowDebtsDebtorIdArgs) {
      return client.request<GetCashflowDebtsDebtorIdResponse>({
        method: 'GET',
        path: '/cashflow/debts/{DebtorId}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createDebt(args: PostCashflowDebtsArgs) {
      return client.request<PostCashflowDebtsResponse>({
        method: 'POST',
        path: '/cashflow/debts',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    debtForgiveness(args: PostCashflowDebtsDebtIdForgivenessArgs) {
      return client.request<PostCashflowDebtsDebtIdForgivenessResponse>({
        method: 'POST',
        path: '/cashflow/debts/{debtId}/forgiveness',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    debtAdjustment(args: PostCashflowDebtsDebtIdAdjustmentArgs) {
      return client.request<PostCashflowDebtsDebtIdAdjustmentResponse>({
        method: 'POST',
        path: '/cashflow/debts/{debtId}/adjustment',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    rollbackDebtCreation(args: PostCashflowDebtsDebtIdRollbackArgs) {
      return client.request<PostCashflowDebtsDebtIdRollbackResponse>({
        method: 'POST',
        path: '/cashflow/debts/{debtId}/rollback',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    checkDebtPaid(args: GetCashflowDebtsDebtIdPaidArgs) {
      return client.request<GetCashflowDebtsDebtIdPaidResponse>({
        method: 'GET',
        path: '/cashflow/debts/{debtId}/paid',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getDebtsMovementsByDebtId(args: GetCashflowDebtsDebtIdMovementsArgs) {
      return client.request<GetCashflowDebtsDebtIdMovementsResponse>({
        method: 'GET',
        path: '/cashflow/debts/{DebtId}/movements',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getDebtMovementById(args: GetCashflowDebtsMovementsDebtMovementIdArgs) {
      return client.request<GetCashflowDebtsMovementsDebtMovementIdResponse>({
        method: 'GET',
        path: '/cashflow/debts/movements/{debtMovementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createDebtMovement(args: PostCashflowDebtsMovementsArgs) {
      return client.request<PostCashflowDebtsMovementsResponse>({
        method: 'POST',
        path: '/cashflow/debts/movements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getCashflowInfo(args: GetCashflowInfoArgs = {}) {
      return client.request<GetCashflowInfoResponse>({
        method: 'GET',
        path: '/cashflow/info',
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMovements(args: GetCashflowMovementArgs) {
      return client.request<GetCashflowMovementResponse>({
        method: 'GET',
        path: '/cashflow/movement',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMovementTypes(args: GetCashflowMovementTypesArgs = {}) {
      return client.request<GetCashflowMovementTypesResponse>({
        method: 'GET',
        path: '/cashflow/movement-types',
        headers: args.headers,
        signal: args.signal,
      })
    },
    createMovementType(args: PostCashflowMovementTypesArgs) {
      return client.request<PostCashflowMovementTypesResponse>({
        method: 'POST',
        path: '/cashflow/movement-types',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateMovementType(args: PutCashflowMovementTypesArgs) {
      return client.request<PutCashflowMovementTypesResponse>({
        method: 'PUT',
        path: '/cashflow/movement-types',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMovementTypesById(args: GetCashflowMovementTypesMovementTypeIdArgs) {
      return client.request<GetCashflowMovementTypesMovementTypeIdResponse>({
        method: 'GET',
        path: '/cashflow/movement-types/{MovementTypeId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteMovementType(args: DeleteCashflowMovementTypesMovementTypeIdArgs) {
      return client.request<DeleteCashflowMovementTypesMovementTypeIdResponse>({
        method: 'DELETE',
        path: '/cashflow/movement-types/{MovementTypeId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPaymentCharInfoByPeriod(args: GetCashflowPaymentsChartInfoArgs) {
      return client.request<GetCashflowPaymentsChartInfoResponse>({
        method: 'GET',
        path: '/cashflow/payments/chart-info',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPaymentsByPayer(args: GetCashflowPaymentsArgs) {
      return client.request<GetCashflowPaymentsResponse>({
        method: 'GET',
        path: '/cashflow/payments',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createPayment(args: PostCashflowPaymentsArgs) {
      return client.request<PostCashflowPaymentsResponse>({
        method: 'POST',
        path: '/cashflow/payments',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPaymentsWithPendingImputation(args: GetCashflowPaymentsPendingImputationArgs) {
      return client.request<GetCashflowPaymentsPendingImputationResponse>({
        method: 'GET',
        path: '/cashflow/payments/pending-imputation',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPaymentById(args: GetCashflowPaymentsPaymentIdArgs) {
      return client.request<GetCashflowPaymentsPaymentIdResponse>({
        method: 'GET',
        path: '/cashflow/payments/{PaymentId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    rollbackPaymentCreation(args: PostCashflowPaymentsPaymentIdRollbackCreationArgs) {
      return client.request<PostCashflowPaymentsPaymentIdRollbackCreationResponse>({
        method: 'POST',
        path: '/cashflow/payments/{paymentId}/rollback-creation',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    rollbackPaymentImputations(args: PostCashflowPaymentsPaymentIdRollbackImputationsArgs) {
      return client.request<PostCashflowPaymentsPaymentIdRollbackImputationsResponse>({
        method: 'POST',
        path: '/cashflow/payments/{paymentId}/rollback-imputations',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    paymentAdjustment(args: PostCashflowPaymentsPaymentIdAdjustmentArgs) {
      return client.request<PostCashflowPaymentsPaymentIdAdjustmentResponse>({
        method: 'POST',
        path: '/cashflow/payments/{paymentId}/adjustment',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPaymentMovementsByDebtId(args: GetCashflowPaymentmovementDebtDebtIdArgs) {
      return client.request<GetCashflowPaymentmovementDebtDebtIdResponse>({
        method: 'GET',
        path: '/cashflow/paymentmovement/debt/{debtId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPaymentMovementsByPaymentId(args: GetCashflowPaymentmovementPaymentPaymentIdArgs) {
      return client.request<GetCashflowPaymentmovementPaymentPaymentIdResponse>({
        method: 'GET',
        path: '/cashflow/paymentmovement/payment/{paymentId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSystemMovements(args: GetCashflowSystemMovementsArgs = {}) {
      return client.request<GetCashflowSystemMovementsResponse>({
        method: 'GET',
        path: '/cashflow/system-movements',
        headers: args.headers,
        signal: args.signal,
      })
    },
    createSystemMovement(args: PostCashflowSystemMovementsArgs) {
      return client.request<PostCashflowSystemMovementsResponse>({
        method: 'POST',
        path: '/cashflow/system-movements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateSystemMovement(args: PutCashflowSystemMovementsArgs) {
      return client.request<PutCashflowSystemMovementsResponse>({
        method: 'PUT',
        path: '/cashflow/system-movements',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getSystemMovementsById(args: GetCashflowSystemMovementsSystemMovementIdArgs) {
      return client.request<GetCashflowSystemMovementsSystemMovementIdResponse>({
        method: 'GET',
        path: '/cashflow/system-movements/{SystemMovementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteSystemMovement(args: DeleteCashflowSystemMovementsSystemMovementIdArgs) {
      return client.request<DeleteCashflowSystemMovementsSystemMovementIdResponse>({
        method: 'DELETE',
        path: '/cashflow/system-movements/{SystemMovementId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
