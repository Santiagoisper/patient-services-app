export interface paths {
    "/agreements/services/{AgreementServiceId}/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Geet all details of a service */
        get: operations["GetAgreementServicesDetails"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/services/details/{AgreementServiceDetailId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get service detail by id */
        get: operations["GetAgreementServicesDetail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/{AgreementId}/services/{MedicalServiceId}/details/{InsurancePlanId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get service detail by id */
        get: operations["GetAgreementServicesDetailByAgreementServiceAndPlan"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/services/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update service detail by id */
        put: operations["UpdateAgreementServicesDetail"];
        /** Create service detail by id */
        post: operations["CreateAgreementServicesDetail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/services/details/{AgreementServiceDetailsId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Update service detail by id */
        delete: operations["DeleteAgreementServicesDetail"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/{AgreementId}/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Geet all services */
        get: operations["GetAgreementServices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/services/{AgreementServiceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Ger Agreement service By Id */
        get: operations["GetAgreementServiceById"];
        put?: never;
        post?: never;
        /** Delete a agreement service */
        delete: operations["DeleteAgreementService"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["UpdateAgreementService"];
        /** Add new Service to agreement */
        post: operations["CreateAgreementService"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/services/{AgreementServiceId}/status/{newStatus}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["ChangeStatusAgreementService"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All agreements */
        get: operations["GetMedicalInsuranceAgreements"];
        /** update agreement */
        put: operations["UpdateAgreement"];
        /** Add new agreement */
        post: operations["AddAgreement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/{AgreementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get agreement by id */
        get: operations["GetAgreementById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/{AgreementId}/activePriceList/{ReferecenceDate}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get active price list by agreement id */
        get: operations["GetActivePriceListByAgreementId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/{AgreementId}/PriceList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get agreement price lists */
        get: operations["GetPriceListByAgreement"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/PriceList/{AgreementPriceListId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get agreement price list by id */
        get: operations["GetAgreementPriceListById"];
        put?: never;
        post?: never;
        /** Delete Pricelist from agreement */
        delete: operations["DeleteAgreementPriceListById"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/PriceList": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Link existing price list to a aggrement */
        post: operations["AddAgreementPriceListById"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/PriceList/{AgreementPriceListId}/startvalidity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create new price list for an agreement */
        post: operations["SetStartValidityAgreementPriceList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/PriceList/{AgreementPriceListId}/endvalidity": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set en validity date for a pricelist of agreement */
        post: operations["SetEndValidityAgreementPriceList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/PriceList/{AgreementPriceListId}/expire": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set en validity date for a pricelist of agreement */
        post: operations["ExpireAgreementPriceList"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/agreements/{agreementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Agreement */
        delete: operations["DeleteAgreement"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
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
        AgreementServiceDetailViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AgreementServiceDetailViewModel"][] | null;
        };
        AgreementServiceDetailViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AgreementServiceDetailViewModel"];
        };
        AgreementServiceViewModel: {
            /** Format: int32 */
            id?: number;
            tenant?: string | null;
            /** Format: int32 */
            agreementId?: number;
            /** Format: int32 */
            medicalServiceId?: number;
            medicalService?: components["schemas"]["MedicalsServicesAvailableEntity"];
            isActive?: boolean;
            details?: components["schemas"]["AgreementServiceDetailViewModel"][] | null;
            isDeleted?: boolean;
        };
        AgreementServiceViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AgreementServiceViewModel"][] | null;
        };
        AgreementServiceViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AgreementServiceViewModel"];
        };
        AgreementsPriceListViewModel: {
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
            isActive?: boolean;
            isExpired?: boolean;
        };
        AgreementsPriceListViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AgreementsPriceListViewModel"][] | null;
        };
        AgreementsPriceListViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AgreementsPriceListViewModel"];
        };
        CreateAgreementsPriceListCommand: {
            /** Format: int32 */
            agreementId?: number;
            /** Format: int32 */
            priceListId?: number;
        };
        CreateInsuranceAgreementServiceCommand: {
            /** Format: int32 */
            agreementId?: number;
            /** Format: int32 */
            medicalServiceId?: number;
        };
        CreateInsuranceAgreementServiceDetailsCommand: {
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
        CreateMedicalInsuranceAgreementCommand: {
            healthProviderId?: string | null;
            /** Format: date-time */
            agreementStartDate?: string | null;
            /** Format: date-time */
            agreementEndDate?: string | null;
            /** Format: int32 */
            medicalInsuranceId?: number;
        };
        DeleteInsuranceAgreementServiceDetailsCommand: {
            /** Format: int32 */
            agreementServiceDetailId?: number;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        HttpStatusCode: 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
        Int32IReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: number[] | null;
        };
        MedicalInsuranceAgreementExtendedViewModel: {
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
            priceLists?: components["schemas"]["AgreementsPriceListViewModel"][] | null;
        };
        MedicalInsuranceAgreementExtendedViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MedicalInsuranceAgreementExtendedViewModel"];
        };
        MedicalInsuranceAgreementViewModel: {
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
        };
        MedicalInsuranceAgreementViewModelIEnumerablePagedResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MedicalInsuranceAgreementViewModel"][] | null;
            /** Format: int32 */
            pageNumber?: number;
            /** Format: int32 */
            pageSize?: number;
            /** Format: uri */
            firstPage?: string | null;
            /** Format: uri */
            lastPage?: string | null;
            /** Format: int32 */
            totalPages?: number;
            /** Format: int32 */
            totalRecords?: number;
            /** Format: uri */
            nextPage?: string | null;
            /** Format: uri */
            previousPage?: string | null;
        };
        MedicalsServicesAvailableEntity: {
            /** Format: int32 */
            id?: number;
            createdBy?: string | null;
            /** Format: date-time */
            created?: string;
            lastModifiedBy?: string | null;
            /** Format: date-time */
            lastModified?: string | null;
            isDeleted?: boolean;
            deletedBy?: string | null;
            /** Format: date-time */
            deleted?: string | null;
            tenant?: string | null;
            serviceNameReference?: string | null;
            comments?: string | null;
            isLinkedToSnowmed?: boolean;
            snowmedName?: string | null;
            /** Format: int64 */
            snowmedCode?: number | null;
            available?: boolean;
            /** Format: date-time */
            disableUntilDate?: string | null;
            disableComment?: string | null;
            enablePatientSelfManagement?: boolean;
            serviceProvidedBy3rdParty?: boolean;
            enableforAppointment?: boolean;
            onlyForAdministrativeUse?: boolean;
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        UpdateInsuranceAgreementServiceCommand: {
            /** Format: int32 */
            agreementId?: number;
            /** Format: int32 */
            medicalServiceId?: number;
            /** Format: int32 */
            id?: number;
            isActive?: boolean;
        };
        UpdateInsuranceAgreementServiceDetailsCommand: {
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
            /** Format: int32 */
            id?: number;
        };
        UpdateMedicalInsuranceAgreementCommand: {
            healthProviderId?: string | null;
            /** Format: date-time */
            agreementStartDate?: string | null;
            /** Format: date-time */
            agreementEndDate?: string | null;
            /** Format: int32 */
            medicalInsuranceId?: number;
            /** Format: int32 */
            id?: number;
            isActive?: boolean;
            isExpired?: boolean;
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
    GetAgreementServicesDetails: {
        parameters: {
            query?: {
                MedicalInsuranceId?: number;
                MedicalInsurancePlanId?: number;
                SearchText?: string;
                PageNumber?: number;
                PageSize?: number;
            };
            header?: never;
            path: {
                AgreementServiceId: number;
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
                    "text/plain": components["schemas"]["AgreementServiceDetailViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["AgreementServiceDetailViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["AgreementServiceDetailViewModelIReadOnlyListResponse"];
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
    GetAgreementServicesDetail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementServiceDetailId: number;
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
                    "text/plain": components["schemas"]["AgreementServiceDetailViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["AgreementServiceDetailViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["AgreementServiceDetailViewModelIReadOnlyListResponse"];
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
    GetAgreementServicesDetailByAgreementServiceAndPlan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementId: number;
                MedicalServiceId: number;
                InsurancePlanId: number;
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
                    "text/plain": components["schemas"]["AgreementServiceDetailViewModelResponse"];
                    "application/json": components["schemas"]["AgreementServiceDetailViewModelResponse"];
                    "text/json": components["schemas"]["AgreementServiceDetailViewModelResponse"];
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
    UpdateAgreementServicesDetail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateInsuranceAgreementServiceDetailsCommand"];
                "text/json": components["schemas"]["UpdateInsuranceAgreementServiceDetailsCommand"];
                "application/*+json": components["schemas"]["UpdateInsuranceAgreementServiceDetailsCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementServiceDetailViewModelResponse"];
                    "application/json": components["schemas"]["AgreementServiceDetailViewModelResponse"];
                    "text/json": components["schemas"]["AgreementServiceDetailViewModelResponse"];
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
    CreateAgreementServicesDetail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateInsuranceAgreementServiceDetailsCommand"];
                "text/json": components["schemas"]["CreateInsuranceAgreementServiceDetailsCommand"];
                "application/*+json": components["schemas"]["CreateInsuranceAgreementServiceDetailsCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementServiceDetailViewModelResponse"];
                    "application/json": components["schemas"]["AgreementServiceDetailViewModelResponse"];
                    "text/json": components["schemas"]["AgreementServiceDetailViewModelResponse"];
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
    DeleteAgreementServicesDetail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementServiceDetailsId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["DeleteInsuranceAgreementServiceDetailsCommand"];
                "text/json": components["schemas"]["DeleteInsuranceAgreementServiceDetailsCommand"];
                "application/*+json": components["schemas"]["DeleteInsuranceAgreementServiceDetailsCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementServiceDetailViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["AgreementServiceDetailViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["AgreementServiceDetailViewModelIReadOnlyListResponse"];
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
    GetAgreementServices: {
        parameters: {
            query?: {
                Available?: boolean;
                enablePatientSelfManagement?: boolean;
                serviceProvidedBy3rdParty?: boolean;
                enableforAppointment?: boolean;
                SearchText?: string;
                PageNumber?: number;
                PageSize?: number;
            };
            header?: never;
            path: {
                AgreementId: number;
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
                    "text/plain": components["schemas"]["AgreementServiceViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["AgreementServiceViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["AgreementServiceViewModelIReadOnlyListResponse"];
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
    GetAgreementServiceById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementServiceId: number;
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
                    "text/plain": components["schemas"]["AgreementServiceViewModelResponse"];
                    "application/json": components["schemas"]["AgreementServiceViewModelResponse"];
                    "text/json": components["schemas"]["AgreementServiceViewModelResponse"];
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
    DeleteAgreementService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementServiceId: number;
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
    UpdateAgreementService: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateInsuranceAgreementServiceCommand"];
                "text/json": components["schemas"]["UpdateInsuranceAgreementServiceCommand"];
                "application/*+json": components["schemas"]["UpdateInsuranceAgreementServiceCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementServiceViewModelResponse"];
                    "application/json": components["schemas"]["AgreementServiceViewModelResponse"];
                    "text/json": components["schemas"]["AgreementServiceViewModelResponse"];
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
    CreateAgreementService: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateInsuranceAgreementServiceCommand"];
                "text/json": components["schemas"]["CreateInsuranceAgreementServiceCommand"];
                "application/*+json": components["schemas"]["CreateInsuranceAgreementServiceCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementServiceViewModelResponse"];
                    "application/json": components["schemas"]["AgreementServiceViewModelResponse"];
                    "text/json": components["schemas"]["AgreementServiceViewModelResponse"];
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
    ChangeStatusAgreementService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementServiceId: number;
                newStatus: boolean;
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
                    "text/plain": components["schemas"]["AgreementServiceViewModelResponse"];
                    "application/json": components["schemas"]["AgreementServiceViewModelResponse"];
                    "text/json": components["schemas"]["AgreementServiceViewModelResponse"];
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
    GetMedicalInsuranceAgreements: {
        parameters: {
            query?: {
                MedicalInsuranceId?: number;
                activeOnly?: boolean;
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
                    "text/plain": components["schemas"]["MedicalInsuranceAgreementViewModelIEnumerablePagedResponse"];
                    "application/json": components["schemas"]["MedicalInsuranceAgreementViewModelIEnumerablePagedResponse"];
                    "text/json": components["schemas"]["MedicalInsuranceAgreementViewModelIEnumerablePagedResponse"];
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
    UpdateAgreement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Agreement info */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateMedicalInsuranceAgreementCommand"];
                "text/json": components["schemas"]["UpdateMedicalInsuranceAgreementCommand"];
                "application/*+json": components["schemas"]["UpdateMedicalInsuranceAgreementCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MedicalInsuranceAgreementExtendedViewModelResponse"];
                    "application/json": components["schemas"]["MedicalInsuranceAgreementExtendedViewModelResponse"];
                    "text/json": components["schemas"]["MedicalInsuranceAgreementExtendedViewModelResponse"];
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
    AddAgreement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Agreement info */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateMedicalInsuranceAgreementCommand"];
                "text/json": components["schemas"]["CreateMedicalInsuranceAgreementCommand"];
                "application/*+json": components["schemas"]["CreateMedicalInsuranceAgreementCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MedicalInsuranceAgreementExtendedViewModelResponse"];
                    "application/json": components["schemas"]["MedicalInsuranceAgreementExtendedViewModelResponse"];
                    "text/json": components["schemas"]["MedicalInsuranceAgreementExtendedViewModelResponse"];
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
    GetAgreementById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementId: number;
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
                    "text/plain": components["schemas"]["MedicalInsuranceAgreementExtendedViewModelResponse"];
                    "application/json": components["schemas"]["MedicalInsuranceAgreementExtendedViewModelResponse"];
                    "text/json": components["schemas"]["MedicalInsuranceAgreementExtendedViewModelResponse"];
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
    GetActivePriceListByAgreementId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementId: number;
                ReferecenceDate: string;
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
                    "text/plain": components["schemas"]["Int32IReadOnlyListResponse"];
                    "application/json": components["schemas"]["Int32IReadOnlyListResponse"];
                    "text/json": components["schemas"]["Int32IReadOnlyListResponse"];
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
    GetPriceListByAgreement: {
        parameters: {
            query?: {
                ActiveOnly?: boolean;
                SearchText?: string;
                PageNumber?: number;
                PageSize?: number;
            };
            header?: never;
            path: {
                AgreementId: number;
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
                    "text/plain": components["schemas"]["AgreementsPriceListViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["AgreementsPriceListViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["AgreementsPriceListViewModelIReadOnlyListResponse"];
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
    GetAgreementPriceListById: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "application/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "text/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
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
    DeleteAgreementPriceListById: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "application/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "text/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
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
    AddAgreementPriceListById: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateAgreementsPriceListCommand"];
                "text/json": components["schemas"]["CreateAgreementsPriceListCommand"];
                "application/*+json": components["schemas"]["CreateAgreementsPriceListCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "application/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "text/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
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
    SetStartValidityAgreementPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementPriceListId: number;
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "application/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "text/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
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
    SetEndValidityAgreementPriceList: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementPriceListId: number;
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "application/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "text/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
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
    ExpireAgreementPriceList: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "application/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
                    "text/json": components["schemas"]["AgreementsPriceListViewModelResponse"];
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
    DeleteAgreement: {
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
