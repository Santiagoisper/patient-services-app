export interface paths {
    "/medical-specialties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Services */
        get: operations["GetAllSpecialties"];
        /** Update Specialty */
        put: operations["UpdateSpecialty"];
        /** Create Specialty */
        post: operations["CreateSpecialty"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/medical-specialties/{specialtyId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Specialty by Id */
        get: operations["GetSpecialtyById"];
        put?: never;
        post?: never;
        /** Delete Specialty */
        delete: operations["DeleteSpecialty"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Int32Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            /** Format: int32 */
            data?: number;
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        SpecialtyCreateCommandAsync: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            snomedCode?: string | null;
            snomedName?: string | null;
        };
        SpecialtyUpdateCommandAsync: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            snomedCode?: string | null;
            snomedName?: string | null;
        };
        SpecialtyViewModel: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            snomedCode?: string | null;
            snomedName?: string | null;
        };
        SpecialtyViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SpecialtyViewModel"][] | null;
        };
        SpecialtyViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SpecialtyViewModel"];
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
    GetAllSpecialties: {
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
                    "text/plain": components["schemas"]["SpecialtyViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SpecialtyViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SpecialtyViewModelIReadOnlyListResponse"];
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
        };
    };
    UpdateSpecialty: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SpecialtyUpdateCommandAsync"];
                "text/json": components["schemas"]["SpecialtyUpdateCommandAsync"];
                "application/*+json": components["schemas"]["SpecialtyUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SpecialtyViewModelResponse"];
                    "application/json": components["schemas"]["SpecialtyViewModelResponse"];
                    "text/json": components["schemas"]["SpecialtyViewModelResponse"];
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
        };
    };
    CreateSpecialty: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SpecialtyCreateCommandAsync"];
                "text/json": components["schemas"]["SpecialtyCreateCommandAsync"];
                "application/*+json": components["schemas"]["SpecialtyCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SpecialtyViewModelResponse"];
                    "application/json": components["schemas"]["SpecialtyViewModelResponse"];
                    "text/json": components["schemas"]["SpecialtyViewModelResponse"];
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
        };
    };
    GetSpecialtyById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                specialtyId: number;
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
                    "text/plain": components["schemas"]["SpecialtyViewModelResponse"];
                    "application/json": components["schemas"]["SpecialtyViewModelResponse"];
                    "text/json": components["schemas"]["SpecialtyViewModelResponse"];
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
        };
    };
    DeleteSpecialty: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                specialtyId: number;
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
                    "text/plain": components["schemas"]["Int32Response"];
                    "application/json": components["schemas"]["Int32Response"];
                    "text/json": components["schemas"]["Int32Response"];
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
        };
    };
}
