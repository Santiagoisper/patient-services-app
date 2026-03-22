export interface paths {
    "/cashflow/accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all accounts by OwnerId */
        get: operations["GetAccounts"];
        put?: never;
        /** Create a new account */
        post: operations["CreateAccount"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/accounts/{AccountId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get account by Id */
        get: operations["GetAccount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/accounts/{AccountId}/movements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all movements by AccountId */
        get: operations["GetAccountMovements"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/accounts/movements/{AccountMovementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get movement by Id */
        get: operations["GetAccountMovementById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/accounts/movements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update a account movement */
        put: operations["UpdateAccountMovement"];
        /** Create a new movement */
        post: operations["CreateAccountMovement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/creditor/{CreditorId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all debts by Creditors or Debtors */
        get: operations["GetDebtsByCreditor"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/debtor/{DebtorId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all debts by Debtor */
        get: operations["GetDebtsByDebtor"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/settlements/{SettlementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get debts by settlement id */
        get: operations["GetAllDebtsBySettlementId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/{DebtId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get debt by Id */
        get: operations["GetDebtById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/{DebtorId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all debts by Debtor */
        get: operations["GetPendingCreditorDebtsByDebtorById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a new debt */
        post: operations["CreateDebt"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/{debtId}/forgiveness": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Forgiveness a debt */
        post: operations["DebtForgiveness"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/{debtId}/adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Debt adjustment */
        post: operations["DebtAdjustment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/{debtId}/rollback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Rollback Debt Creation */
        post: operations["RollbackDebtCreation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/{debtId}/paid": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Check if a debt is fully paid (no pending amount) */
        get: operations["CheckDebtPaid"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/{DebtId}/movements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all movements by DebtId */
        get: operations["GetDebtsMovementsByDebtId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/movements/{debtMovementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get debt movement by Id */
        get: operations["GetDebtMovementById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/debts/movements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a new debt movement */
        post: operations["CreateDebtMovement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": string;
                        "application/json": string;
                        "text/json": string;
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/movement": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get movements debt or payment id */
        get: operations["GetMovements"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/movement-types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all movement types */
        get: operations["GetMovementTypes"];
        /** Update Movement Type */
        put: operations["UpdateMovementType"];
        /** Create new movement Type */
        post: operations["CreateMovementType"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/movement-types/{MovementTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get movement type by id */
        get: operations["GetMovementTypesById"];
        put?: never;
        post?: never;
        /** Delete Movement Type */
        delete: operations["DeleteMovementType"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/payments/chart-info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetPaymentCharInfoByPeriod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all payments by Payer */
        get: operations["GetPaymentsByPayer"];
        put?: never;
        /** Create a new payment */
        post: operations["CreatePayment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/payments/pending-imputation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all payments with pending imputation amount */
        get: operations["GetPaymentsWithPendingImputation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/payments/{PaymentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get payment by Id */
        get: operations["GetPaymentById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/payments/{paymentId}/rollback-creation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Rollback payment creation */
        post: operations["RollbackPaymentCreation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/payments/{paymentId}/rollback-imputations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Rollback payment Imputations */
        post: operations["RollbackPaymentImputations"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/payments/{paymentId}/adjustment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Payment Adjustment */
        post: operations["PaymentAdjustment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/paymentmovement/debt/{debtId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get payments movements by debtId */
        get: operations["GetPaymentMovementsByDebtId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/paymentmovement/payment/{paymentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get payments movements by paymentId */
        get: operations["GetPaymentMovementsByPaymentId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/system-movements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all system movements */
        get: operations["GetSystemMovements"];
        /** Update a system movement */
        put: operations["UpdateSystemMovement"];
        /** Create a new system movement */
        post: operations["CreateSystemMovement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cashflow/system-movements/{SystemMovementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all system movement by id */
        get: operations["GetSystemMovementsById"];
        put?: never;
        post?: never;
        delete: operations["DeleteSystemMovement"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AccountCreateCommandAsync: {
            /** Format: uuid */
            ownerIdentifier?: string;
            currencyCode?: string | null;
        };
        AccountMovementCreateCommandAsync: {
            /** Format: int32 */
            movementTypeId?: number;
            originalCurrencyCode?: string | null;
            /** Format: double */
            originalAmount?: number;
            currencyCode?: string | null;
            /** Format: double */
            amount?: number;
            /** Format: double */
            exchangeRate?: number;
            comments?: string | null;
            /** Format: int32 */
            accountId?: number;
        };
        AccountMovementUpdateCommandAsync: {
            /** Format: int32 */
            movementTypeId?: number;
            originalCurrencyCode?: string | null;
            /** Format: double */
            originalAmount?: number;
            currencyCode?: string | null;
            /** Format: double */
            amount?: number;
            /** Format: double */
            exchangeRate?: number;
            comments?: string | null;
            /** Format: int32 */
            accountId?: number;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            movementId?: number;
        };
        AccountMovementViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            accountId?: number;
            movement?: components["schemas"]["MovementViewModel"] | null;
        };
        AccountMovementViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AccountMovementViewModel"][] | null;
        };
        AccountMovementViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AccountMovementViewModel"] | null;
        };
        AccountViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            ownerIdentifier?: string;
            /** Format: uuid */
            accountIdentifier?: string;
            currencyCode?: string | null;
            /** Format: double */
            currentAmount?: number;
        };
        AccountViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AccountViewModel"][] | null;
        };
        AccountViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AccountViewModel"] | null;
        };
        BooleanResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: boolean;
        };
        ChartPaymentViewModel: {
            /** Format: date-time */
            x?: string;
            /** Format: double */
            y?: number;
        };
        ChartPaymentViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ChartPaymentViewModel"][] | null;
        };
        DebtAdjustmentCommandAsync: {
            /** Format: int32 */
            debtId?: number;
            /** Format: double */
            amount?: number;
        };
        DebtCreateCommandAsync: {
            /** Format: uuid */
            debtor?: string;
            /** Format: uuid */
            creditor?: string;
            /** Format: date-time */
            debtDate?: string;
            /** Format: double */
            originalAmount?: number;
            currencyCode?: string | null;
            /** Format: int32 */
            settlementId?: number | null;
            comments?: string | null;
            /** Format: double */
            originalAmountInOriginalCurrency?: number | null;
            originalCurrencyCode?: string | null;
            /** Format: double */
            currencyExchangeRate?: number | null;
            isMarkAsCollected?: boolean;
            /** Format: date-time */
            collectedDate?: string | null;
        };
        DebtMovementCreateCommandAsync: {
            /** Format: int32 */
            debtId?: number;
            /** Format: int32 */
            paymentId?: number | null;
            /** Format: int32 */
            movementTypeId?: number;
            originalCurrencyCode?: string | null;
            /** Format: double */
            originalAmount?: number;
            currencyCode?: string | null;
            /** Format: double */
            amount?: number;
            /** Format: double */
            exchangeRate?: number;
            comments?: string | null;
        };
        DebtMovementViewModel: {
            /** Format: int32 */
            id?: number;
            debt?: components["schemas"]["DebtViewModel"] | null;
            movement?: components["schemas"]["MovementViewModel"] | null;
        };
        DebtMovementViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["DebtMovementViewModel"][] | null;
        };
        DebtPaymentImputationDTO: {
            /** Format: int32 */
            debtId?: number;
            /** Format: double */
            amount?: number;
            /** Format: double */
            exchangeRate?: number;
        };
        DebtViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            debtor?: string;
            /** Format: uuid */
            creditor?: string;
            /** Format: date-time */
            debtDate?: string;
            /** Format: double */
            originalAmount?: number;
            comments?: string | null;
            /** Format: double */
            paidAmount?: number;
            /** Format: double */
            pendingAmount?: number;
            isDebtSettled?: boolean;
            currencyCode?: string | null;
            /** Format: double */
            originalAmountInOriginalCurrency?: number;
            originalCurrencyCode?: string | null;
            /** Format: double */
            currencyExchangeRate?: number;
        };
        DebtViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["DebtViewModel"][] | null;
        };
        DebtViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["DebtViewModel"] | null;
        };
        MovementTypeCreateCommandAsync: {
            referralName?: string | null;
            referralDescription?: string | null;
            /** Format: int32 */
            systemMovementId?: number;
        };
        MovementTypeUpdateCommandAsync: {
            referralName?: string | null;
            referralDescription?: string | null;
            /** Format: int32 */
            systemMovementId?: number;
            /** Format: int32 */
            id?: number;
        };
        MovementTypeViewModel: {
            /** Format: int32 */
            id?: number;
            referralName?: string | null;
            referralDescription?: string | null;
            systemMovement?: components["schemas"]["SystemMovementViewModel"] | null;
        };
        MovementTypeViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MovementTypeViewModel"][] | null;
        };
        MovementTypeViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MovementTypeViewModel"] | null;
        };
        MovementViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            movementTypeId?: number;
            type?: components["schemas"]["MovementTypeViewModel"] | null;
            originalCurrencyCode?: string | null;
            /** Format: double */
            originalAmount?: number;
            currencyCode?: string | null;
            /** Format: double */
            amount?: number;
            /** Format: double */
            exchangeRate?: number;
            comments?: string | null;
        };
        MovementViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MovementViewModel"][] | null;
        };
        PaymentAdjustmentCommandAsync: {
            /** Format: int32 */
            id?: number;
            /** Format: double */
            amount?: number;
            currencyCode?: string | null;
            debtsPaymentImputation?: components["schemas"]["DebtPaymentImputationDTO"][] | null;
        };
        PaymentCreateCommandAsync: {
            /** Format: double */
            amount?: number;
            /** Format: double */
            readonly exchangeRate?: number;
            currencyCode?: string | null;
            payer?: string | null;
            receiver?: string | null;
            /** Format: date-time */
            paymentDate?: string;
            /** Format: date-time */
            imputationDate?: string | null;
            debtsPaymentImputation?: components["schemas"]["DebtPaymentImputationDTO"][] | null;
            comments?: string | null;
        };
        PaymentMovementViewModel: {
            /** Format: int32 */
            id?: number;
            debt?: components["schemas"]["DebtViewModel"] | null;
            movement?: components["schemas"]["MovementViewModel"] | null;
            payment?: components["schemas"]["PaymentViewModel"] | null;
        };
        PaymentMovementViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PaymentMovementViewModel"][] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        PaymentTypeEnum: 1 | 2;
        PaymentViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: double */
            amount?: number;
            /** Format: double */
            imputedAmount?: number;
            /** Format: double */
            pendingIndictmentAmount?: number;
            /** Format: double */
            exchangeRate?: number;
            /** Format: double */
            amountInBaseCurrency?: number;
            currencyCode?: string | null;
            payer?: string | null;
            receiver?: string | null;
            /** Format: date-time */
            paymentDate?: string;
            /** Format: date-time */
            imputationDate?: string | null;
            comments?: string | null;
        };
        PaymentViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PaymentViewModel"][] | null;
        };
        PaymentViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PaymentViewModel"] | null;
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        SystemMovementCreateCommandAsync: {
            referralName?: string | null;
            description?: string | null;
            /** Format: double */
            operationFactor?: number;
        };
        SystemMovementUpdateCommandAsync: {
            referralName?: string | null;
            referralDescription?: string | null;
            /** Format: int32 */
            systemMovementId?: number;
            /** Format: int32 */
            id?: number;
        };
        SystemMovementViewModel: {
            /** Format: int32 */
            id?: number;
            referralName?: string | null;
            description?: string | null;
            /** Format: double */
            operationFactor?: number;
        };
        SystemMovementViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SystemMovementViewModel"][] | null;
        };
        SystemMovementViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SystemMovementViewModel"] | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    GetAccounts: {
        parameters: {
            query?: {
                OwnerIdentifier?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AccountViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["AccountViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["AccountViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    CreateAccount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AccountCreateCommandAsync"];
                "text/json": components["schemas"]["AccountCreateCommandAsync"];
                "application/*+json": components["schemas"]["AccountCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AccountViewModelResponse"];
                    "application/json": components["schemas"]["AccountViewModelResponse"];
                    "text/json": components["schemas"]["AccountViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AccountId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AccountViewModelResponse"];
                    "application/json": components["schemas"]["AccountViewModelResponse"];
                    "text/json": components["schemas"]["AccountViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetAccountMovements: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AccountId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AccountMovementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["AccountMovementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["AccountMovementViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetAccountMovementById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AccountMovementId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AccountMovementViewModelResponse"];
                    "application/json": components["schemas"]["AccountMovementViewModelResponse"];
                    "text/json": components["schemas"]["AccountMovementViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    UpdateAccountMovement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AccountMovementUpdateCommandAsync"];
                "text/json": components["schemas"]["AccountMovementUpdateCommandAsync"];
                "application/*+json": components["schemas"]["AccountMovementUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AccountMovementViewModelResponse"];
                    "application/json": components["schemas"]["AccountMovementViewModelResponse"];
                    "text/json": components["schemas"]["AccountMovementViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    CreateAccountMovement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AccountMovementCreateCommandAsync"];
                "text/json": components["schemas"]["AccountMovementCreateCommandAsync"];
                "application/*+json": components["schemas"]["AccountMovementCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AccountMovementViewModelResponse"];
                    "application/json": components["schemas"]["AccountMovementViewModelResponse"];
                    "text/json": components["schemas"]["AccountMovementViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetDebtsByCreditor: {
        parameters: {
            query?: {
                DebtorId?: string;
            };
            header?: never;
            path: {
                CreditorId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetDebtsByDebtor: {
        parameters: {
            query?: {
                CreditorId?: string;
            };
            header?: never;
            path: {
                DebtorId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetAllDebtsBySettlementId: {
        parameters: {
            query?: {
                currencyCode?: string;
                OnlyActive?: boolean;
            };
            header?: never;
            path: {
                SettlementId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetDebtById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                DebtId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["DebtViewModelResponse"];
                    "application/json": components["schemas"]["DebtViewModelResponse"];
                    "text/json": components["schemas"]["DebtViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetPendingCreditorDebtsByDebtorById: {
        parameters: {
            query?: {
                CreditorId?: string;
            };
            header?: never;
            path: {
                DebtorId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["DebtViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    CreateDebt: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["DebtCreateCommandAsync"];
                "text/json": components["schemas"]["DebtCreateCommandAsync"];
                "application/*+json": components["schemas"]["DebtCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["DebtViewModelResponse"];
                    "application/json": components["schemas"]["DebtViewModelResponse"];
                    "text/json": components["schemas"]["DebtViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    DebtForgiveness: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                debtId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["BooleanResponse"];
                    "application/json": components["schemas"]["BooleanResponse"];
                    "text/json": components["schemas"]["BooleanResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    DebtAdjustment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                debtId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["DebtAdjustmentCommandAsync"];
                "text/json": components["schemas"]["DebtAdjustmentCommandAsync"];
                "application/*+json": components["schemas"]["DebtAdjustmentCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["BooleanResponse"];
                    "application/json": components["schemas"]["BooleanResponse"];
                    "text/json": components["schemas"]["BooleanResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    RollbackDebtCreation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                debtId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["BooleanResponse"];
                    "application/json": components["schemas"]["BooleanResponse"];
                    "text/json": components["schemas"]["BooleanResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    CheckDebtPaid: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                debtId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["BooleanResponse"];
                    "application/json": components["schemas"]["BooleanResponse"];
                    "text/json": components["schemas"]["BooleanResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetDebtsMovementsByDebtId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                DebtId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["DebtMovementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["DebtMovementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["DebtMovementViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetDebtMovementById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                debtMovementId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["DebtMovementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["DebtMovementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["DebtMovementViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    CreateDebtMovement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["DebtMovementCreateCommandAsync"];
                "text/json": components["schemas"]["DebtMovementCreateCommandAsync"];
                "application/*+json": components["schemas"]["DebtMovementCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["DebtMovementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["DebtMovementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["DebtMovementViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetMovements: {
        parameters: {
            query?: {
                debtId?: number;
                paymentId?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MovementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["MovementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["MovementViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetMovementTypes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MovementTypeViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["MovementTypeViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["MovementTypeViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    UpdateMovementType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["MovementTypeUpdateCommandAsync"];
                "text/json": components["schemas"]["MovementTypeUpdateCommandAsync"];
                "application/*+json": components["schemas"]["MovementTypeUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MovementTypeViewModelResponse"];
                    "application/json": components["schemas"]["MovementTypeViewModelResponse"];
                    "text/json": components["schemas"]["MovementTypeViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    CreateMovementType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["MovementTypeCreateCommandAsync"];
                "text/json": components["schemas"]["MovementTypeCreateCommandAsync"];
                "application/*+json": components["schemas"]["MovementTypeCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MovementTypeViewModelResponse"];
                    "application/json": components["schemas"]["MovementTypeViewModelResponse"];
                    "text/json": components["schemas"]["MovementTypeViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetMovementTypesById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                MovementTypeId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MovementTypeViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["MovementTypeViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["MovementTypeViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    DeleteMovementType: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                MovementTypeId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MovementTypeViewModelResponse"];
                    "application/json": components["schemas"]["MovementTypeViewModelResponse"];
                    "text/json": components["schemas"]["MovementTypeViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetPaymentCharInfoByPeriod: {
        parameters: {
            query?: {
                PaymentType?: components["schemas"]["PaymentTypeEnum"];
                EntityIdentifier?: string;
                RelatedEntityIdentifier?: string;
                StartDate?: string;
                EndDate?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ChartPaymentViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ChartPaymentViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ChartPaymentViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetPaymentsByPayer: {
        parameters: {
            query?: {
                Payer?: string;
                Receiver?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PaymentViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PaymentViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PaymentViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    CreatePayment: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PaymentCreateCommandAsync"];
                "text/json": components["schemas"]["PaymentCreateCommandAsync"];
                "application/*+json": components["schemas"]["PaymentCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PaymentViewModelResponse"];
                    "application/json": components["schemas"]["PaymentViewModelResponse"];
                    "text/json": components["schemas"]["PaymentViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetPaymentsWithPendingImputation: {
        parameters: {
            query?: {
                /** @description Optional payer filter */
                Payer?: string;
                /** @description Optional receiver filter */
                Receiver?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PaymentViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PaymentViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PaymentViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetPaymentById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PaymentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PaymentViewModelResponse"];
                    "application/json": components["schemas"]["PaymentViewModelResponse"];
                    "text/json": components["schemas"]["PaymentViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    RollbackPaymentCreation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                paymentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    RollbackPaymentImputations: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                paymentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    PaymentAdjustment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                paymentId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PaymentAdjustmentCommandAsync"];
                "text/json": components["schemas"]["PaymentAdjustmentCommandAsync"];
                "application/*+json": components["schemas"]["PaymentAdjustmentCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetPaymentMovementsByDebtId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                debtId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PaymentMovementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PaymentMovementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PaymentMovementViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetPaymentMovementsByPaymentId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                paymentId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PaymentMovementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PaymentMovementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PaymentMovementViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetSystemMovements: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SystemMovementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SystemMovementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SystemMovementViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    UpdateSystemMovement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SystemMovementUpdateCommandAsync"];
                "text/json": components["schemas"]["SystemMovementUpdateCommandAsync"];
                "application/*+json": components["schemas"]["SystemMovementUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SystemMovementViewModelResponse"];
                    "application/json": components["schemas"]["SystemMovementViewModelResponse"];
                    "text/json": components["schemas"]["SystemMovementViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    CreateSystemMovement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SystemMovementCreateCommandAsync"];
                "text/json": components["schemas"]["SystemMovementCreateCommandAsync"];
                "application/*+json": components["schemas"]["SystemMovementCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SystemMovementViewModelResponse"];
                    "application/json": components["schemas"]["SystemMovementViewModelResponse"];
                    "text/json": components["schemas"]["SystemMovementViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetSystemMovementsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SystemMovementId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SystemMovementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SystemMovementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SystemMovementViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    DeleteSystemMovement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SystemMovementId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SystemMovementViewModelResponse"];
                    "application/json": components["schemas"]["SystemMovementViewModelResponse"];
                    "text/json": components["schemas"]["SystemMovementViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
}
