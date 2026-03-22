export interface paths {
    "/practitioners/associations/{PractitionerID}/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Settings By Practitioner Id */
        get: operations["GetSettingsByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/settings/particularattention/{ParticularAttentionStatus}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Practitioner list by particular attention status */
        get: operations["GetPractitionersByParticularAttentionStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Practitioner Setting */
        put: operations["UpdatePractitionerSettings"];
        /** Set practitioner Settings */
        post: operations["SetPractitionerSettings"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/{PractitionerID}/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Practitioner contracts */
        get: operations["GetContractByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/contracts/{PractitionerContractId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Practitioner contract by id */
        get: operations["GetPractitionerContractById"];
        put?: never;
        post?: never;
        /** Delete Contract association */
        delete: operations["DisassociateContractFromPractitioner"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate contract to Practitioner */
        post: operations["AssociateContractToPractitioner"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/{PractitionerID}/medicalinsurances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Practitioner medical insurances */
        get: operations["GetMedicalInsurancesByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/medicalinsurances/{PractitionerMedicalInsuranceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Practitioner Medical Insurance by id */
        get: operations["GetPractitionerMedicalInsuranceById"];
        put?: never;
        post?: never;
        /** Delete medical insurance association */
        delete: operations["DisassociateMedicalInsuranceFromToPractitioner"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/medicalinsurances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate Practitioner medical insurance */
        post: operations["AssociateMedicalInsuranceToPractitioner"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/{PractitionerId}/medicalinsurances/{MedicalInsuranceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete medical insurance association by MedicalInsurance Id */
        delete: operations["DisassociateMedicalInsuranceFromToPractitionerByMedicalInsuranceId"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/{PractitionerID}/medicalservices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Practitioner medical Services */
        get: operations["GetMedicalServicesByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/medicalservices/{PractitionerMedicalServiceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Practitioner Medical Service by id */
        get: operations["GetPractitionerMedicalServiceById"];
        put?: never;
        post?: never;
        /** Delete medical Service association */
        delete: operations["DisassociateMedicalServiceFromToPractitioner"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/medicalservices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate Practitioner medical Service */
        post: operations["AssociateMedicalServiceToPractitioner"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/{PractitionerId}/medicalservices/{MedicalServiceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete medical Service association by MedicalInsurance Id */
        delete: operations["DisassociateMedicalServiceFromToPractitionerByMedicalServiceId"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Settings By Practitioner Id */
        get: operations["GetPractitioners"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/{practitionerId}/specialties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all specialties for a practitioner */
        get: operations["GetSpecialtiesByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/specialties/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a practitioner specialty association by id */
        get: operations["GetPractitionerSpecialtyById"];
        put?: never;
        post?: never;
        /** Disassociate a specialty from a practitioner */
        delete: operations["DisassociatePractitionerSpecialty"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/associations/specialties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate a specialty to a practitioner */
        post: operations["AssociatePractitionerSpecialty"];
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
        AssociateContractToPractitionerCommand: {
            /** Format: int32 */
            contractId?: number;
            practitionerId?: string | null;
        };
        AssociatePractitionerSpecialtyCommand: {
            practitionerId?: string | null;
            /** Format: int32 */
            specialtyId?: number;
        };
        CreatePractitionerAssociationSettingsCommand: {
            practitionerId?: string | null;
            enableIndividualPatientAttention?: boolean;
        };
        CreatePractitionerMedicalInsuranceAssociationCommand: {
            practitionerId?: string | null;
            /** Format: int32 */
            medicalInsuranceId?: number;
        };
        CreatePractitionerMedicalServiceAssociationCommand: {
            practitionerId?: string | null;
            /** Format: int32 */
            medicalServiceId?: number;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        HttpStatusCode: 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
        Int32Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            /** Format: int32 */
            data?: number;
        };
        PractitionerAssociationSettingsViewModel: {
            /** Format: int32 */
            id?: number;
            practitionerId?: string | null;
            enableIndividualPatientAttention?: boolean;
        };
        PractitionerAssociationSettingsViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerAssociationSettingsViewModel"];
        };
        PractitionerContractsViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
            /** Format: uuid */
            practitionerId?: string;
        };
        PractitionerContractsViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerContractsViewModel"][] | null;
        };
        PractitionerContractsViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerContractsViewModel"];
        };
        PractitionerMedicalInsuranceViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            practitionerId?: string;
            /** Format: int32 */
            medicalInsuranceId?: number;
        };
        PractitionerMedicalInsuranceViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerMedicalInsuranceViewModel"][] | null;
        };
        PractitionerMedicalInsuranceViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerMedicalInsuranceViewModel"];
        };
        PractitionerMedicalServiceViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            practitionerId?: string;
            /** Format: int32 */
            medicalServiceId?: number;
        };
        PractitionerMedicalServiceViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerMedicalServiceViewModel"][] | null;
        };
        PractitionerMedicalServiceViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerMedicalServiceViewModel"];
        };
        PractitionerQueriesViewModel: {
            practitionerId?: string | null;
            attendanceCoberedByMedicalInsurance?: boolean;
        };
        PractitionerQueriesViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerQueriesViewModel"][] | null;
        };
        PractitionerSpecialtyViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            practitionerId?: string;
            /** Format: int32 */
            specialtyId?: number;
        };
        PractitionerSpecialtyViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerSpecialtyViewModel"][] | null;
        };
        PractitionerSpecialtyViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerSpecialtyViewModel"];
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        UpdatePractitionerAssociationSettingsCommand: {
            practitionerId?: string | null;
            enableIndividualPatientAttention?: boolean;
            /** Format: int32 */
            id?: number;
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
    GetSettingsByPractitionerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerID: string;
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
                    "text/plain": components["schemas"]["PractitionerAssociationSettingsViewModel"];
                    "application/json": components["schemas"]["PractitionerAssociationSettingsViewModel"];
                    "text/json": components["schemas"]["PractitionerAssociationSettingsViewModel"];
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
    GetPractitionersByParticularAttentionStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ParticularAttentionStatus: boolean;
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
                    "text/plain": components["schemas"]["PractitionerAssociationSettingsViewModel"];
                    "application/json": components["schemas"]["PractitionerAssociationSettingsViewModel"];
                    "text/json": components["schemas"]["PractitionerAssociationSettingsViewModel"];
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
    UpdatePractitionerSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePractitionerAssociationSettingsCommand"];
                "text/json": components["schemas"]["UpdatePractitionerAssociationSettingsCommand"];
                "application/*+json": components["schemas"]["UpdatePractitionerAssociationSettingsCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerAssociationSettingsViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerAssociationSettingsViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerAssociationSettingsViewModelResponse"];
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
    SetPractitionerSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePractitionerAssociationSettingsCommand"];
                "text/json": components["schemas"]["CreatePractitionerAssociationSettingsCommand"];
                "application/*+json": components["schemas"]["CreatePractitionerAssociationSettingsCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerAssociationSettingsViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerAssociationSettingsViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerAssociationSettingsViewModelResponse"];
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
    GetContractByPractitionerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerID: string;
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
                    "text/plain": components["schemas"]["PractitionerContractsViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerContractsViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerContractsViewModelIReadOnlyListResponse"];
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
    GetPractitionerContractById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerContractId: number;
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
                    "text/plain": components["schemas"]["PractitionerContractsViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerContractsViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerContractsViewModelResponse"];
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
    DisassociateContractFromPractitioner: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerContractId: number;
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
                    "text/plain": components["schemas"]["PractitionerContractsViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerContractsViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerContractsViewModelResponse"];
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
    AssociateContractToPractitioner: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AssociateContractToPractitionerCommand"];
                "text/json": components["schemas"]["AssociateContractToPractitionerCommand"];
                "application/*+json": components["schemas"]["AssociateContractToPractitionerCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerContractsViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerContractsViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerContractsViewModelResponse"];
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
    GetMedicalInsurancesByPractitionerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerID: string;
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
                    "text/plain": components["schemas"]["PractitionerMedicalInsuranceViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalInsuranceViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalInsuranceViewModelIReadOnlyListResponse"];
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
    GetPractitionerMedicalInsuranceById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerMedicalInsuranceId: number;
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
                    "text/plain": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
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
    DisassociateMedicalInsuranceFromToPractitioner: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerMedicalInsuranceId: number;
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
                    "text/plain": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
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
    AssociateMedicalInsuranceToPractitioner: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePractitionerMedicalInsuranceAssociationCommand"];
                "text/json": components["schemas"]["CreatePractitionerMedicalInsuranceAssociationCommand"];
                "application/*+json": components["schemas"]["CreatePractitionerMedicalInsuranceAssociationCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
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
    DisassociateMedicalInsuranceFromToPractitionerByMedicalInsuranceId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerId: string;
                MedicalInsuranceId: number;
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
                    "text/plain": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalInsuranceViewModelResponse"];
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
    GetMedicalServicesByPractitionerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerID: string;
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
                    "text/plain": components["schemas"]["PractitionerMedicalServiceViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalServiceViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalServiceViewModelIReadOnlyListResponse"];
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
    GetPractitionerMedicalServiceById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerMedicalServiceId: number;
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
                    "text/plain": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
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
    DisassociateMedicalServiceFromToPractitioner: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerMedicalServiceId: number;
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
                    "text/plain": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
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
    AssociateMedicalServiceToPractitioner: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePractitionerMedicalServiceAssociationCommand"];
                "text/json": components["schemas"]["CreatePractitionerMedicalServiceAssociationCommand"];
                "application/*+json": components["schemas"]["CreatePractitionerMedicalServiceAssociationCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
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
                PractitionerId: string;
                MedicalServiceId: number;
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
                    "text/plain": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalServiceViewModelResponse"];
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
    GetPractitioners: {
        parameters: {
            query?: {
                MedicalInsuranceId?: number;
                MedicalServiceId?: number;
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
                    "text/plain": components["schemas"]["PractitionerQueriesViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerQueriesViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerQueriesViewModelIReadOnlyListResponse"];
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
    GetSpecialtiesByPractitionerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The practitioner unique identifier (PractitionerId). */
                practitionerId: string;
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
                    "text/plain": components["schemas"]["PractitionerSpecialtyViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerSpecialtyViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerSpecialtyViewModelIReadOnlyListResponse"];
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
        };
    };
    GetPractitionerSpecialtyById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The specialty association (PractitionerId and SpecialtyId) identifier. */
                id: number;
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
                    "text/plain": components["schemas"]["PractitionerSpecialtyViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerSpecialtyViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerSpecialtyViewModelResponse"];
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
        };
    };
    DisassociatePractitionerSpecialty: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The specialty association (PractitionerId and SpecialtyId) identifier to remove. */
                id: number;
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
        };
    };
    AssociatePractitionerSpecialty: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The association data (PractitionerId and SpecialtyId). */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AssociatePractitionerSpecialtyCommand"];
                "text/json": components["schemas"]["AssociatePractitionerSpecialtyCommand"];
                "application/*+json": components["schemas"]["AssociatePractitionerSpecialtyCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerSpecialtyViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerSpecialtyViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerSpecialtyViewModelResponse"];
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
        };
    };
}
