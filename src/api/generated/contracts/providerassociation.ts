export interface paths {
    "/providers/associations/{ProviderID}/medicalservices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all provider medical Services */
        get: operations["GetMedicalServicesByProviderId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/medicalservices/{ProviderMedicalServiceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get provider Medical Service by id */
        get: operations["GetProviderMedicalServiceById"];
        put?: never;
        post?: never;
        /** Delete medical Service association */
        delete: operations["DisassociateMedicalServiceFromToProvider"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/medicalservices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate provider medical Service */
        post: operations["AssociateMedicalServiceToProvider"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/{ProviderID}/medicalservices/{MedicalServiceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete medical Service association by MedicalService Id */
        delete: operations["DisassociateMedicalServiceFromToPractitionerByMedicalServiceId"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/{ProviderID}/pricelists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all price lists by provider id */
        get: operations["GetPriceListsByProviderId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/pricelists/{ProviderPriceListId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** get provider price list by id */
        get: operations["GetProviderPriceListById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/{ProviderId}/pricelists/{PriceListId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** get provider price list by pricelist id */
        get: operations["GetProviderPriceListByPriceListId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/PriceList/{ProviderPriceListId}/startvalidity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create new price list for a provider */
        put: operations["SetStartValidityProviderPriceList"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/PriceList/{ProviderPriceListId}/endvalidity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Set en validity date for a provider price list */
        put: operations["SetEndValidityProviderPriceList"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/PriceList/{ProviderPriceListId}/expire": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Set en validity date for a provider price list */
        put: operations["ExpireProviderPriceList"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/pricelists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Create Price List for provider */
        put: operations["AssociatePriceListToProvider"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/PriceList/{ProviderPriceListId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Pricelist from provider */
        delete: operations["DeleteProviderPriceListById"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/providers/associations/{ProviderId}/PriceList/{PriceListId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Pricelist from provider */
        delete: operations["DeleteProviderPriceListByPriceListId"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CreateProviderMedicalServiceAssociationCommand: {
            /** Format: int32 */
            providerId?: number;
            /** Format: int32 */
            medicalServiceId?: number;
        };
        CreateProviderPriceListCommand: {
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
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        HttpStatusCode: 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
        ProviderMedicalServiceViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            providerId?: number;
            /** Format: int32 */
            medicalServiceId?: number;
        };
        ProviderMedicalServiceViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProviderMedicalServiceViewModel"][] | null;
        };
        ProviderMedicalServiceViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProviderMedicalServiceViewModel"];
        };
        ProviderPriceListViewModel: {
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
        };
        ProviderPriceListViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProviderPriceListViewModel"][] | null;
        };
        ProviderPriceListViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProviderPriceListViewModel"];
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
                ProviderID: number;
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
                    "text/plain": components["schemas"]["ProviderMedicalServiceViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProviderMedicalServiceViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProviderMedicalServiceViewModelIReadOnlyListResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
                    "text/plain": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
                    "application/json": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
                    "text/json": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
    DisassociateMedicalServiceFromToProvider: {
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
                    "text/plain": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
                    "application/json": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
                    "text/json": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
    AssociateMedicalServiceToProvider: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateProviderMedicalServiceAssociationCommand"];
                "text/json": components["schemas"]["CreateProviderMedicalServiceAssociationCommand"];
                "application/*+json": components["schemas"]["CreateProviderMedicalServiceAssociationCommand"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
                    "application/json": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
                    "text/json": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
    DisassociateMedicalServiceFromToPractitionerByMedicalServiceId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProviderID: number;
                MedicalServiceId: number;
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
                    "text/plain": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
                    "application/json": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
                    "text/json": components["schemas"]["ProviderMedicalServiceViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
    GetPriceListsByProviderId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProviderID: number;
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
                    "text/plain": components["schemas"]["ProviderPriceListViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProviderPriceListViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProviderPriceListViewModelIReadOnlyListResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
                    "text/plain": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderPriceListViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
                    "text/plain": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderPriceListViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
    SetStartValidityProviderPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Provider price list identifier */
                ProviderPriceListId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": string;
                "text/json": string;
                "application/*+json": string;
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderPriceListViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
    SetEndValidityProviderPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProviderPriceListId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": string;
                "text/json": string;
                "application/*+json": string;
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderPriceListViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
    ExpireProviderPriceList: {
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
                    "text/plain": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderPriceListViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
    AssociatePriceListToProvider: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateProviderPriceListCommand"];
                "text/json": components["schemas"]["CreateProviderPriceListCommand"];
                "application/*+json": components["schemas"]["CreateProviderPriceListCommand"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderPriceListViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
    DeleteProviderPriceListById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Provider price list identifier */
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
                    "text/plain": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderPriceListViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
    DeleteProviderPriceListByPriceListId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description provider identifier */
                ProviderId: number;
                /** @description price list identifier */
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
                    "text/plain": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "application/json": components["schemas"]["ProviderPriceListViewModelResponse"];
                    "text/json": components["schemas"]["ProviderPriceListViewModelResponse"];
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["HttpStatusCode"];
                    "application/json": components["schemas"]["HttpStatusCode"];
                    "text/json": components["schemas"]["HttpStatusCode"];
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
