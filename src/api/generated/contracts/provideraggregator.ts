export interface paths {
    "/providers/aggregator/{ProviderId}/medicalservices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Medical Services by Practitioner id */
        get: operations["GetMedicalServicesByProviderId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/aggregator/medicalservices/{ProviderMedicalServiceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Provider Medical Services By Id */
        get: operations["GetProviderMedicalServiceById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/aggregator/medicalservices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate medical insurance to provider */
        post: operations["AssociateMedicalServiceByProviderId"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/aggregator/{ProviderId}/pricelists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Price Lists by tenant */
        get: operations["GetPriceListByProviderID"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/aggregator/pricelists/{ProviderPriceListId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Agreement price list by id */
        get: operations["GetProviderPriceListById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/aggregator/{ProviderId}/pricelists/{PriceListId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Agreement price list by price list id */
        get: operations["GetProviderPriceListByPriceListId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/aggregator/pricelist": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create new price list for provider */
        post: operations["CreateProviderPriceList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/aggregator/pricelist/{ProviderPriceListId}/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Clone agreement price list */
        get: operations["CloneProviderPriceList"];
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
        AssociateNewMedicalServiceDTO: {
            /** Format: int32 */
            medicalServiceId?: number;
            /** Format: int32 */
            providerId?: number;
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
        };
        CreateProviderPriceListOrchestratorCommand: {
            /** Format: int32 */
            providerId?: number;
            listName?: string | null;
            comments?: string | null;
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
            currency?: string | null;
            /** Format: int32 */
            pricelistEntityId?: number;
            isEnabled?: boolean;
        };
        PriceListViewModel: {
            /** Format: int32 */
            id?: number;
            comments?: string | null;
            listName?: string | null;
            prices?: components["schemas"]["PriceListDetailsViewModel"][] | null;
        };
        ProviderAggregatorPriceListViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            providerId?: number;
            /** Format: int32 */
            priceListId?: number;
            /** Format: date-time */
            effectiveDateStart?: string | null;
            /** Format: date-time */
            effectiveDateEnd?: string | null;
            isActive?: boolean;
            isExpired?: boolean;
            priceList?: components["schemas"]["PriceListViewModel"];
        };
        ProviderAggregatorPriceListViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProviderAggregatorPriceListViewModel"][] | null;
        };
        ProviderAggregatorPriceListViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProviderAggregatorPriceListViewModel"];
        };
        ProviderMedicalServiceAggregatorViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            providerId?: number;
            /** Format: int32 */
            medicalServiceId?: number;
            medicalService?: components["schemas"]["AvailableMedicalServiceViewModel"];
        };
        ProviderMedicalServiceAggregatorViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProviderMedicalServiceAggregatorViewModel"][] | null;
        };
        ProviderMedicalServiceAggregatorViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProviderMedicalServiceAggregatorViewModel"];
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
    GetMedicalServicesByProviderId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProviderId: number;
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
                    "text/plain": components["schemas"]["ProviderMedicalServiceAggregatorViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProviderMedicalServiceAggregatorViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProviderMedicalServiceAggregatorViewModelIReadOnlyListResponse"];
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
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
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
    GetProviderMedicalServiceById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProviderMedicalServiceId: number;
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
                    "text/plain": components["schemas"]["ProviderMedicalServiceAggregatorViewModelResponse"];
                    "application/json": components["schemas"]["ProviderMedicalServiceAggregatorViewModelResponse"];
                    "text/json": components["schemas"]["ProviderMedicalServiceAggregatorViewModelResponse"];
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
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
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
    AssociateMedicalServiceByProviderId: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AssociateNewMedicalServiceDTO"];
                "text/json": components["schemas"]["AssociateNewMedicalServiceDTO"];
                "application/*+json": components["schemas"]["AssociateNewMedicalServiceDTO"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProviderMedicalServiceAggregatorViewModelResponse"];
                    "application/json": components["schemas"]["ProviderMedicalServiceAggregatorViewModelResponse"];
                    "text/json": components["schemas"]["ProviderMedicalServiceAggregatorViewModelResponse"];
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
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
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
    GetPriceListByProviderID: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProviderId: number;
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
                    "text/plain": components["schemas"]["ProviderAggregatorPriceListViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProviderAggregatorPriceListViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProviderAggregatorPriceListViewModelIReadOnlyListResponse"];
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
    GetProviderPriceListById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProviderPriceListId: number;
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
                    "text/plain": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
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
    GetProviderPriceListByPriceListId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProviderId: number;
                PriceListId: number;
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
                    "text/plain": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
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
    CreateProviderPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateProviderPriceListOrchestratorCommand"];
                "text/json": components["schemas"]["CreateProviderPriceListOrchestratorCommand"];
                "application/*+json": components["schemas"]["CreateProviderPriceListOrchestratorCommand"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
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
    CloneProviderPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProviderPriceListId: number;
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
                    "text/plain": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderAggregatorPriceListViewModelResponse"];
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
