export interface paths {
    "/pricelists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Add Price to Price list */
        put: operations["UpdatePriceList"];
        /** Add Price to Price list */
        post: operations["AddPriceList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricelists/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Price to Price list */
        put: operations["UpdatePriceListDetail"];
        /** Add Price to Price list */
        post: operations["AddPriceListDetail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricelists/{priceListId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Add Price to Price list */
        get: operations["GetPriceList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricelists/{priceListId}/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Clone a price list */
        get: operations["ClonePriceList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricelists/details/{PriceListDetialsId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Price from Price List */
        delete: operations["DeletePriceListDetail"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricelists/{priceListId}/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetPriceListDetailsByPriceList"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricelists/details/{priceListDetailId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Add Price to Price list */
        get: operations["GetPriceListDetail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/pricelists/{PriceListId}/details/{ItemRefererId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get current price by ReferenceId */
        get: operations["GetCurrentPriceByReferenceId"];
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
        CreatePriceListCommand: {
            listName?: string | null;
            comments?: string | null;
        };
        CreatePriceListDetailCommand: {
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
        /**
         * Format: int32
         * @enum {integer}
         */
        HttpStatusCode: 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
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
        PriceListDetailsViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PriceListDetailsViewModel"];
        };
        PriceListViewModel: {
            /** Format: int32 */
            id?: number;
            comments?: string | null;
            listName?: string | null;
            prices?: components["schemas"]["PriceListDetailsViewModel"][] | null;
        };
        PriceListViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PriceListViewModel"];
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        UpdatePriceListCommand: {
            listName?: string | null;
            comments?: string | null;
            /** Format: int32 */
            id?: number;
        };
        UpdatePriceListDetailCommand: {
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
            /** Format: int32 */
            id?: number;
            isEnabled?: boolean;
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
    UpdatePriceList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePriceListCommand"];
                "text/json": components["schemas"]["UpdatePriceListCommand"];
                "application/*+json": components["schemas"]["UpdatePriceListCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PriceListViewModelResponse"];
                    "application/json": components["schemas"]["PriceListViewModelResponse"];
                    "text/json": components["schemas"]["PriceListViewModelResponse"];
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
    AddPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePriceListCommand"];
                "text/json": components["schemas"]["CreatePriceListCommand"];
                "application/*+json": components["schemas"]["CreatePriceListCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PriceListViewModelResponse"];
                    "application/json": components["schemas"]["PriceListViewModelResponse"];
                    "text/json": components["schemas"]["PriceListViewModelResponse"];
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
    UpdatePriceListDetail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePriceListDetailCommand"];
                "text/json": components["schemas"]["UpdatePriceListDetailCommand"];
                "application/*+json": components["schemas"]["UpdatePriceListDetailCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PriceListDetailsViewModelResponse"];
                    "application/json": components["schemas"]["PriceListDetailsViewModelResponse"];
                    "text/json": components["schemas"]["PriceListDetailsViewModelResponse"];
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
    AddPriceListDetail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePriceListDetailCommand"];
                "text/json": components["schemas"]["CreatePriceListDetailCommand"];
                "application/*+json": components["schemas"]["CreatePriceListDetailCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PriceListDetailsViewModelResponse"];
                    "application/json": components["schemas"]["PriceListDetailsViewModelResponse"];
                    "text/json": components["schemas"]["PriceListDetailsViewModelResponse"];
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
    GetPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                priceListId: number;
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
                    "text/plain": components["schemas"]["PriceListViewModelResponse"];
                    "application/json": components["schemas"]["PriceListViewModelResponse"];
                    "text/json": components["schemas"]["PriceListViewModelResponse"];
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
    ClonePriceList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                priceListId: number;
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
                    "text/plain": components["schemas"]["PriceListViewModelResponse"];
                    "application/json": components["schemas"]["PriceListViewModelResponse"];
                    "text/json": components["schemas"]["PriceListViewModelResponse"];
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
    DeletePriceListDetail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PriceListDetialsId: number;
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
    GetPriceListDetailsByPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                priceListId: number;
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
    GetPriceListDetail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                priceListDetailId: number;
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
                    "text/plain": components["schemas"]["PriceListDetailsViewModelResponse"];
                    "application/json": components["schemas"]["PriceListDetailsViewModelResponse"];
                    "text/json": components["schemas"]["PriceListDetailsViewModelResponse"];
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
    GetCurrentPriceByReferenceId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PriceListId: number;
                ItemRefererId: number;
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
                    "text/plain": components["schemas"]["PriceListDetailsViewModelResponse"];
                    "application/json": components["schemas"]["PriceListDetailsViewModelResponse"];
                    "text/json": components["schemas"]["PriceListDetailsViewModelResponse"];
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
