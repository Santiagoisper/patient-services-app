export interface paths {
    "/tenant/aggregator/info": {
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
    "/tenant/aggregator/pricelists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Price Lists by tenant */
        get: operations["GetPriceListByTenant"];
        /** Update new price list for agreement */
        put: operations["UpdateTenantPriceList"];
        /** Create new price list for agreement */
        post: operations["CreateTenantPriceList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/aggregator/pricelists/{TenantPriceListId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Agreement price list by id */
        get: operations["GetTenantPriceListById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tenant/aggregator/pricelist/{TenantPriceListId}/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Clone tenant price list */
        get: operations["CloneTenantPriceList"];
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
        CreateTenantPriceListOrchestratorCommand: {
            listName?: string | null;
            comments?: string | null;
            priceListType?: string | null;
        };
        ProblemDetails: {
            type?: string | null;
            title?: string | null;
            /** Format: int32 */
            status?: number | null;
            detail?: string | null;
            instance?: string | null;
        } & {
            [key: string]: unknown;
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        TenantPriceListViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            tenant?: string;
            /** Format: int32 */
            priceListId?: number;
            /** Format: date-time */
            effectiveDateStart?: string | null;
            /** Format: date-time */
            effectiveDateEnd?: string | null;
            isActive?: boolean;
            isExpired?: boolean;
            isBlocked?: boolean;
            priceListType?: string | null;
        };
        TenantPriceListViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["TenantPriceListViewModel"][] | null;
        };
        TenantPriceListViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["TenantPriceListViewModel"];
        };
        UpdateTenantPriceListOrchestratorCommand: {
            listName?: string | null;
            comments?: string | null;
            priceListType?: string | null;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            priceListId?: number;
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
    GetPriceListByTenant: {
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
                    "text/plain": components["schemas"]["TenantPriceListViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["TenantPriceListViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["TenantPriceListViewModelIReadOnlyListResponse"];
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
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
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
    UpdateTenantPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateTenantPriceListOrchestratorCommand"];
                "text/json": components["schemas"]["UpdateTenantPriceListOrchestratorCommand"];
                "application/*+json": components["schemas"]["UpdateTenantPriceListOrchestratorCommand"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["TenantPriceListViewModelResponse"];
                    "application/json": components["schemas"]["TenantPriceListViewModelResponse"];
                    "text/json": components["schemas"]["TenantPriceListViewModelResponse"];
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
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
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
    CreateTenantPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateTenantPriceListOrchestratorCommand"];
                "text/json": components["schemas"]["CreateTenantPriceListOrchestratorCommand"];
                "application/*+json": components["schemas"]["CreateTenantPriceListOrchestratorCommand"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["TenantPriceListViewModelResponse"];
                    "application/json": components["schemas"]["TenantPriceListViewModelResponse"];
                    "text/json": components["schemas"]["TenantPriceListViewModelResponse"];
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
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
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
    GetTenantPriceListById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                TenantPriceListId: number;
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
                    "text/plain": components["schemas"]["TenantPriceListViewModelResponse"];
                    "application/json": components["schemas"]["TenantPriceListViewModelResponse"];
                    "text/json": components["schemas"]["TenantPriceListViewModelResponse"];
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
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
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
    CloneTenantPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                TenantPriceListId: number;
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
                    "text/plain": components["schemas"]["TenantPriceListViewModelResponse"];
                    "application/json": components["schemas"]["TenantPriceListViewModelResponse"];
                    "text/json": components["schemas"]["TenantPriceListViewModelResponse"];
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
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
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
