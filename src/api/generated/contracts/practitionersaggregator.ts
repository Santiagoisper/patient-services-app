export interface paths {
    "/practitioners/aggregator/{PractitionerId}/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Contracts by Practitioner id */
        get: operations["GetContractsByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/aggregator/contracts/{PractitionerContractId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Practitioner Contract By Id */
        get: operations["GetPractitionerContractsById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/aggregator/{PractitionerId}/medicalinsurances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Medical Insurances by Practitioner id */
        get: operations["GetMedicalInsurancesByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/aggregator/medicalinsurances/{PractitionerMedicalInsuranceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Practitioner Medical Insurance By Id */
        get: operations["GetPractitionerMedicalInsuranceById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/aggregator/medicalinsurances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate medical insurance to practitioner */
        post: operations["AssociateMedicalInsuranceByPratitionerId"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/aggregator/{PractitionerId}/medicalservices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Medical Services by Practitioner id */
        get: operations["GetMedicalServicesByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/aggregator/medicalservices/{PractitionerMedicalServiceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Practitioner Medical Services By Id */
        get: operations["GetPractitionerMedicalServiceById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/aggregator/medicalservices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate medical insurance to practitioner */
        post: operations["AssociateMedicalServiceByPratitionerId"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/aggregator": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Practitioners */
        get: operations["GetPractitioner"];
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
        AssociateNewMedicalInsuranceDTO: {
            /** Format: int32 */
            medicalInsuranceId?: number;
            practitionerId?: string | null;
        };
        AssociateNewMedicalServiceDTO: {
            /** Format: int32 */
            medicalServiceId?: number;
            practitionerId?: string | null;
        };
        AvailableMedicalServiceViewModel: {
            /** Format: int32 */
            id?: number;
            serviceNameReference?: string | null;
            available?: boolean;
            comments?: string | null;
            isLinkedToSnowmed?: boolean;
            snowmedName?: string | null;
            /** Format: int64 */
            snowmedCode?: number | null;
        };
        ContractViewModel: {
            /** Format: int32 */
            id?: number;
            tenant?: string | null;
            /** Format: uuid */
            practitionerId?: string;
            /** Format: int32 */
            contractType?: number;
            contractNumber?: string | null;
            contractCurrency?: string | null;
            /** Format: double */
            contractPrice?: number;
            /** Format: date-time */
            contractStartDate?: string | null;
            /** Format: date-time */
            contractEndDate?: string | null;
        };
        MedicalInsurancePlanViewModel: {
            /** Format: int32 */
            id?: number;
            code?: string | null;
            title?: string | null;
            description?: string | null;
            /** Format: int32 */
            medicalInsuranceId?: number;
            isDeleted?: boolean;
        };
        MedicalInsuranceViewModel: {
            /** Format: int32 */
            id?: number;
            title?: string | null;
            businessName?: string | null;
            taxName?: string | null;
            cuit?: string | null;
            iibb?: string | null;
            agreementsEnabled?: boolean;
            plans?: components["schemas"]["MedicalInsurancePlanViewModel"][] | null;
            isDeleted?: boolean;
        };
        PractitionerAggregatorViewModel: {
            practitionerId?: string | null;
            attendanceCoberedByMedicalInsurance?: boolean;
            practitioner?: components["schemas"]["UserProfileViewModel"];
        };
        PractitionerAggregatorViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerAggregatorViewModel"][] | null;
        };
        PractitionerContractAggregatorViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            practitionerId?: string;
            /** Format: int32 */
            contractId?: number;
            contract?: components["schemas"]["ContractViewModel"];
        };
        PractitionerContractAggregatorViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerContractAggregatorViewModel"][] | null;
        };
        PractitionerMedicalInsuranceAggregatorViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            practitionerId?: string;
            /** Format: int32 */
            medicalInsuranceId?: number;
            medicalInsurance?: components["schemas"]["MedicalInsuranceViewModel"];
        };
        PractitionerMedicalInsuranceAggregatorViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModel"][] | null;
        };
        PractitionerMedicalInsuranceAggregatorViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModel"];
        };
        PractitionerMedicalServiceAggregatorViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            practitionerId?: string;
            /** Format: int32 */
            medicalServiceId?: number;
            medicalService?: components["schemas"]["AvailableMedicalServiceViewModel"];
        };
        PractitionerMedicalServiceAggregatorViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerMedicalServiceAggregatorViewModel"][] | null;
        };
        PractitionerMedicalServiceAggregatorViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerMedicalServiceAggregatorViewModel"];
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        UserProfileViewModel: {
            userName?: string | null;
            userId?: string | null;
            /** Format: date-time */
            created?: string | null;
            fullName?: string | null;
            fullNameUnique?: string | null;
            given?: string | null;
            familyName?: string | null;
            identificationNumber?: string | null;
            /** Format: int32 */
            identificationTypeId?: number | null;
            /** Format: date-time */
            birthDate?: string | null;
            address?: string | null;
            contact?: string | null;
            nationality?: string | null;
            photo?: string | null;
            profilePicUrl?: string | null;
            active?: boolean | null;
            role?: string | null;
            registrationNumber?: string | null;
            speciality?: string | null;
            tenant?: string | null;
            email?: string | null;
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
    GetContractsByPractitionerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerId: string;
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
                    "text/plain": components["schemas"]["PractitionerContractAggregatorViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerContractAggregatorViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerContractAggregatorViewModelIReadOnlyListResponse"];
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
    GetPractitionerContractsById: {
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
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerContractAggregatorViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerContractAggregatorViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerContractAggregatorViewModelIReadOnlyListResponse"];
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
    GetMedicalInsurancesByPractitionerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerId: string;
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
                    "text/plain": components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModelIReadOnlyListResponse"];
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
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModelResponse"];
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
    AssociateMedicalInsuranceByPratitionerId: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AssociateNewMedicalInsuranceDTO"];
                "text/json": components["schemas"]["AssociateNewMedicalInsuranceDTO"];
                "application/*+json": components["schemas"]["AssociateNewMedicalInsuranceDTO"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalInsuranceAggregatorViewModelResponse"];
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
    GetMedicalServicesByPractitionerId: {
        parameters: {
            query?: {
                fechadesde?: string;
            };
            header?: never;
            path: {
                PractitionerId: string;
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
                    "text/plain": components["schemas"]["PractitionerMedicalServiceAggregatorViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalServiceAggregatorViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalServiceAggregatorViewModelIReadOnlyListResponse"];
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
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerMedicalServiceAggregatorViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalServiceAggregatorViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalServiceAggregatorViewModelResponse"];
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
    AssociateMedicalServiceByPratitionerId: {
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
                    "text/plain": components["schemas"]["PractitionerMedicalServiceAggregatorViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerMedicalServiceAggregatorViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerMedicalServiceAggregatorViewModelResponse"];
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
    GetPractitioner: {
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
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerAggregatorViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerAggregatorViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerAggregatorViewModelIReadOnlyListResponse"];
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
}
