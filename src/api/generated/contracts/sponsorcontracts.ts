export interface paths {
    "/sponsors/contracts/{SponsorID}/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Sponsor contracts */
        get: operations["GetContractBySponsorId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sponsors/contracts/contracts/{SponsorContractId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Sponsor contract by id */
        get: operations["GetSponsorContractById"];
        put?: never;
        post?: never;
        /** Delete contract Association */
        delete: operations["DisassociateContractToSponsor"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sponsors/contracts/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create new Contract */
        post: operations["AssociateContractToSponsor"];
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
        AssociateContractToSponsorCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            sponsorId?: number;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        HttpStatusCode: 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        SponsorContractsViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            sponsorId?: number;
            /** Format: int32 */
            contractId?: number;
        };
        SponsorContractsViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SponsorContractsViewModel"][] | null;
        };
        SponsorContractsViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SponsorContractsViewModel"] | null;
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
    GetContractBySponsorId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SponsorID: number;
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
                    "text/plain": components["schemas"]["SponsorContractsViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SponsorContractsViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SponsorContractsViewModelIReadOnlyListResponse"];
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
    GetSponsorContractById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SponsorContractId: number;
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
                    "text/plain": components["schemas"]["SponsorContractsViewModelResponse"];
                    "application/json": components["schemas"]["SponsorContractsViewModelResponse"];
                    "text/json": components["schemas"]["SponsorContractsViewModelResponse"];
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
    DisassociateContractToSponsor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SponsorContractId: number;
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
    AssociateContractToSponsor: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AssociateContractToSponsorCommand"];
                "text/json": components["schemas"]["AssociateContractToSponsorCommand"];
                "application/*+json": components["schemas"]["AssociateContractToSponsorCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SponsorContractsViewModelResponse"];
                    "application/json": components["schemas"]["SponsorContractsViewModelResponse"];
                    "text/json": components["schemas"]["SponsorContractsViewModelResponse"];
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
