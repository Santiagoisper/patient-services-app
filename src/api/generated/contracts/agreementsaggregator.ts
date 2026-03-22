export interface paths {
    "/agreements.aggregator/agreements/{agreementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Agreement by id */
        get: operations["GetAgreementById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements.aggregator/agreements/pricelist/{agreementPriceListId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Agreement price list by id */
        get: operations["GetAgreementPriceListById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements.aggregator/agreements/pricelist": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create new price list for agreement */
        post: operations["CreateAgreementPriceList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements.aggregator/agreements/pricelist/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create new price list for agreement */
        post: operations["CreateAgreementPriceListDetails"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements.aggregator/agreements/pricelist/{AgreementPriceListId}/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Clone agreement price list */
        get: operations["CloneAgreementPriceList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements.aggregator/agreements/{agreementid}/medicalservice/{medicalServiceId}/currentPrice/{referenceDate}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Current Price List By Agreement Service Id */
        get: operations["GetCurrentPrice"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements.aggregator/agreements/pricelist/currentPrice": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Get current price */
        post: operations["GetCurrentPriceListByAgreementServiceId"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements.aggregator/info": {
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
                /** @description Success */
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
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AggregatorAgreementPriceListViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            agreementId?: number;
            /** Format: int32 */
            priceListId?: number;
            /** Format: date-time */
            effectiveDateStart?: string | null;
            /** Format: date-time */
            effectiveDateEnd?: string | null;
            priceList?: components["schemas"]["AggregatorPriceListViewModel"];
            isActive?: boolean;
            isExpired?: boolean;
        };
        AggregatorAgreementViewModel: {
            /** Format: int32 */
            id?: number;
            healthProviderId?: string | null;
            /** Format: date-time */
            agreementStartDate?: string | null;
            /** Format: date-time */
            agreementEndDate?: string | null;
            /** Format: int32 */
            medicalInsuranceId?: number;
            isActive?: boolean;
            isExpired?: boolean;
            priceLists?: components["schemas"]["AggregatorAgreementPriceListViewModel"][] | null;
        };
        AggregatorAgreementViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AggregatorAgreementViewModel"];
        };
        AggregatorPriceListDetailViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            itemReferredId?: number;
            itemReferredName?: string | null;
            itemReferredType?: string | null;
            /** Format: double */
            price?: number;
            currency?: string | null;
            /** Format: int32 */
            pricelistEntityId?: number;
            isEnabled?: boolean;
        };
        AggregatorPriceListViewModel: {
            /** Format: int32 */
            id?: number;
            comments?: string | null;
            listName?: string | null;
            prices?: components["schemas"]["AggregatorPriceListDetailViewModel"][] | null;
        };
        AgreegatorAgreementServiceDetailViewModel: {
            service?: components["schemas"]["AvailableMedicalServiceViewModel"];
            isCoveredByMedicalInsurance?: boolean;
            coverRequirements?: components["schemas"]["AgreementServiceDetailViewModel"];
            price?: components["schemas"]["PriceListDetailsViewModel"];
        };
        AgreegatorAgreementServiceDetailViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AgreegatorAgreementServiceDetailViewModel"];
        };
        AgreementServiceDetailViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            agreementServiceId?: number;
            /** Format: int32 */
            insurancePlanId?: number;
            insurancePlanReferenceName?: string | null;
            requiresApproval?: boolean;
            hasStop?: boolean;
            /** Format: int32 */
            maximumAllowed?: number | null;
            /** Format: int32 */
            maximumAllowedPerPeriod?: number | null;
            /** Format: int32 */
            periodType?: number | null;
            requiredCopago?: boolean;
            copagoComments?: string | null;
            isActive?: boolean;
        };
        AvailableMedicalServiceViewModel: {
            /** Format: int32 */
            id?: number;
            serviceNameReference?: string | null;
            available?: boolean;
            /** Format: date-time */
            disableUntilDate?: string | null;
            disableComment?: string | null;
            comments?: string | null;
            isLinkedToSnowmed?: boolean;
            snowmedName?: string | null;
            /** Format: int64 */
            snowmedCode?: number | null;
            enablePatientSelfManagement?: boolean;
            serviceProvidedBy3rdParty?: boolean;
            enableforAppointment?: boolean;
            onlyForAdministrativeUse?: boolean;
        };
        CreatePriceListComand: {
            /** Format: int32 */
            agreementId?: number;
            priceListName?: string | null;
            comments?: string | null;
        };
        CreatePriceListDetailsCommandAggregator: {
            /** Format: int32 */
            itemReferredId?: number;
            itemReferredName?: string | null;
            itemReferredType?: string | null;
            /** Format: double */
            price?: number;
            /** Format: double */
            remotePrice?: number;
            /** Format: double */
            failPrice?: number;
            /** Format: double */
            randomPrice?: number;
            /** Format: double */
            preScreeningPrice?: number;
            /** Format: double */
            additionalPaymentPrice?: number;
            currency?: string | null;
            /** Format: int32 */
            pricelistEntityId?: number;
            isEnabled?: boolean;
        };
        GetAgreementServiceDetailsQuery: {
            /** Format: int32 */
            medicalServiceId?: number;
            /** Format: int32 */
            medicalInsuranceId?: number;
            /** Format: int32 */
            medicalInsurancePlanId?: number;
        };
        PriceListDetailsViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            itemReferredId?: number;
            itemReferredName?: string | null;
            itemReferredType?: string | null;
            /** Format: double */
            price?: number;
            /** Format: double */
            remotePrice?: number;
            /** Format: double */
            failPrice?: number;
            /** Format: double */
            preScreeningPrice?: number;
            /** Format: double */
            randomPrice?: number;
            /** Format: double */
            additionalPaymentPrice?: number;
            currency?: string | null;
            /** Format: int32 */
            pricelistEntityId?: number;
            isEnabled?: boolean;
        };
        PriceListDetailsViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PriceListDetailsViewModel"][] | null;
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
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
    GetAgreementById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                agreementId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AggregatorAgreementViewModelResponse"];
                    "application/json": components["schemas"]["AggregatorAgreementViewModelResponse"];
                    "text/json": components["schemas"]["AggregatorAgreementViewModelResponse"];
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
                };
            };
        };
    };
    GetAgreementPriceListById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                agreementPriceListId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AggregatorAgreementViewModelResponse"];
                    "application/json": components["schemas"]["AggregatorAgreementViewModelResponse"];
                    "text/json": components["schemas"]["AggregatorAgreementViewModelResponse"];
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
                };
            };
        };
    };
    CreateAgreementPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePriceListComand"];
                "text/json": components["schemas"]["CreatePriceListComand"];
                "application/*+json": components["schemas"]["CreatePriceListComand"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AggregatorAgreementViewModelResponse"];
                    "application/json": components["schemas"]["AggregatorAgreementViewModelResponse"];
                    "text/json": components["schemas"]["AggregatorAgreementViewModelResponse"];
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
                };
            };
        };
    };
    CreateAgreementPriceListDetails: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePriceListDetailsCommandAggregator"];
                "text/json": components["schemas"]["CreatePriceListDetailsCommandAggregator"];
                "application/*+json": components["schemas"]["CreatePriceListDetailsCommandAggregator"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AggregatorAgreementViewModelResponse"];
                    "application/json": components["schemas"]["AggregatorAgreementViewModelResponse"];
                    "text/json": components["schemas"]["AggregatorAgreementViewModelResponse"];
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
                };
            };
        };
    };
    CloneAgreementPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementPriceListId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AggregatorAgreementViewModelResponse"];
                    "application/json": components["schemas"]["AggregatorAgreementViewModelResponse"];
                    "text/json": components["schemas"]["AggregatorAgreementViewModelResponse"];
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
                };
            };
        };
    };
    GetCurrentPrice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                agreementid: number;
                medicalServiceId: number;
                referenceDate: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PriceListDetailsViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PriceListDetailsViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PriceListDetailsViewModelIReadOnlyListResponse"];
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
                };
            };
        };
    };
    GetCurrentPriceListByAgreementServiceId: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["GetAgreementServiceDetailsQuery"];
                "text/json": components["schemas"]["GetAgreementServiceDetailsQuery"];
                "application/*+json": components["schemas"]["GetAgreementServiceDetailsQuery"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreegatorAgreementServiceDetailViewModelResponse"];
                    "application/json": components["schemas"]["AgreegatorAgreementServiceDetailViewModelResponse"];
                    "text/json": components["schemas"]["AgreegatorAgreementServiceDetailViewModelResponse"];
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
                };
            };
        };
    };
}
