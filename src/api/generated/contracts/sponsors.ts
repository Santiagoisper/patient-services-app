export interface paths {
    "/sponsors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all sponsors */
        get: operations["GetAllSponsor"];
        /** Update sponsor */
        put: operations["UpdateSponsor"];
        /** Create sponsor */
        post: operations["CreateSponsor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sponsors/resync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** resync sponsor */
        get: operations["ReSyncSponsor"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sponsors/{SponsorId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get sponsor by Id */
        get: operations["GetSponsorById"];
        put?: never;
        post?: never;
        /** Delete an sponsor */
        delete: operations["DeleteSponsor"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        CreateSponsorCommand: {
            personType?: components["schemas"]["PersonTypeEnum"];
            businessName?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            /** Format: date-time */
            birthDate?: string | null;
            birthPlace?: string | null;
            activity?: string | null;
            nationality?: string | null;
            /** Format: int32 */
            genderId?: number | null;
            /** Format: int32 */
            maritalStatusId?: number | null;
            /** Format: int32 */
            numberOfMarriages?: number;
            /** Format: int32 */
            customId?: number | null;
            syncLaboratory?: boolean;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        HttpStatusCode: 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
        MinimalPersonViewModel: {
            /** Format: int32 */
            id?: number;
            businessName?: string | null;
            /** Format: uuid */
            personIdentifier?: string;
            personType?: components["schemas"]["PersonTypeEnum"];
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        PersonTypeEnum: 1 | 2;
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        SponsorViewModel: {
            /** Format: int32 */
            id?: number;
            person?: components["schemas"]["MinimalPersonViewModel"] | null;
        };
        SponsorViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SponsorViewModel"][] | null;
        };
        SponsorViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SponsorViewModel"] | null;
        };
        UpdateSponsorCommand: {
            personType?: components["schemas"]["PersonTypeEnum"];
            businessName?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            /** Format: date-time */
            birthDate?: string | null;
            birthPlace?: string | null;
            activity?: string | null;
            nationality?: string | null;
            /** Format: int32 */
            genderId?: number | null;
            /** Format: int32 */
            maritalStatusId?: number | null;
            /** Format: int32 */
            numberOfMarriages?: number;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            personId?: number;
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
    GetAllSponsor: {
        parameters: {
            query?: {
                SearchText?: string;
                PageNumber?: number;
                PageSize?: number;
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
                    "text/plain": components["schemas"]["SponsorViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SponsorViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SponsorViewModelIReadOnlyListResponse"];
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
    UpdateSponsor: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateSponsorCommand"];
                "text/json": components["schemas"]["UpdateSponsorCommand"];
                "application/*+json": components["schemas"]["UpdateSponsorCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SponsorViewModelResponse"];
                    "application/json": components["schemas"]["SponsorViewModelResponse"];
                    "text/json": components["schemas"]["SponsorViewModelResponse"];
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
    CreateSponsor: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateSponsorCommand"];
                "text/json": components["schemas"]["CreateSponsorCommand"];
                "application/*+json": components["schemas"]["CreateSponsorCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SponsorViewModelResponse"];
                    "application/json": components["schemas"]["SponsorViewModelResponse"];
                    "text/json": components["schemas"]["SponsorViewModelResponse"];
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
    ReSyncSponsor: {
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
    GetSponsorById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SponsorId: number;
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
                    "text/plain": components["schemas"]["SponsorViewModelResponse"];
                    "application/json": components["schemas"]["SponsorViewModelResponse"];
                    "text/json": components["schemas"]["SponsorViewModelResponse"];
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
    DeleteSponsor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SponsorId: number;
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
}
