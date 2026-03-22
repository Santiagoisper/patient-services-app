export interface paths {
    "/settlements/contract/{ContractID}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all settlements by contract id */
        get: operations["GetAllSettlementsByContractId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/contract/settlements/{ContractSettlementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Contract Settlements By Id */
        get: operations["GetContractSettlementById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/contract/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate Settlement To Contract */
        post: operations["AssociateSettlementToContract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/contract/settlements/{associationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Disassociate Settlement From Contract */
        delete: operations["DisassociateSettlementFromContract"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/medicalagreements/{agreementId}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all settlements by Agreement id */
        get: operations["GetAllSettlementsByAgreementId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/medicalagreements/settlements/{AgreementSettlementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Agreement Settlements By Id */
        get: operations["GetAgreementSettlementById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/medicalagreements/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate Settlement To Agreement */
        post: operations["AssociateSettlementToAgreement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/medicalagreements/settlements/{ContractSettlementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Disassociate Settlement From Agreement */
        delete: operations["DisassociateSettlementFromAgreement"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/info": {
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
    "/settlements/Practitioners/{PractitionerId}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all settlements by practitioner id */
        get: operations["GetAllSettlementsByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/Practitioners/settlements/{PractitionerSettlementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get practitioner Settlements By Id */
        get: operations["GetPractitionerSettlementById"];
        put?: never;
        post?: never;
        /** Disassociate Settlement From Agreement */
        delete: operations["DisassociateSettlementFromPractitioner"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/Practitioners/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate Settlement To Practitioner */
        post: operations["AssociateSettlementToPractitioner"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/protocol/{ProtocolId}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all settlements by protocol id */
        get: operations["GetAllSettlementsByProtocolId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/protocol/settlements/{ProtocolSettlementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get protocol Settlements By Id */
        get: operations["GetProtocolSettlementById"];
        put?: never;
        post?: never;
        /** Disassociate Settlement From protocol */
        delete: operations["DisassociateSettlementFromProtocol"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/protocol/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate Settlement To protocol */
        post: operations["AssociateSettlementToProtocol"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/protocol/{ProtocolId}/patients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all settlements by protocol id */
        get: operations["GetAllPatientsByProtocolId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all settlements */
        get: operations["GetAllSettlements"];
        /** Update Settlement */
        put: operations["UpdateSettlement"];
        /** Create Settlement */
        post: operations["CreateSettlement"];
        delete?: never;
        options?: never;
        head?: never;
        /** change status of a Settlement */
        patch: operations["ChangeStatus"];
        trace?: never;
    };
    "/settlements/settlements/{SettlementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get settlement by Id */
        get: operations["GetSettlementById"];
        put?: never;
        post?: never;
        /** Delete a Settlement */
        delete: operations["DeleteSettlement"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/{SettlementId}/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get settlement concepts by settlement Id */
        get: operations["GetAllSettlementConcept"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/concepts/{SettlementConceptId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get settlement concepts by settlementconcept Id */
        get: operations["GetSettlementConceptById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** add settlement concept */
        post: operations["AddSettlementConcept"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/{SettlementId}/debts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all settlement debts by SettlementId */
        get: operations["GetAllDebtsBySettlementId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/debts/{SettlementDebtId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get settlement debt by Id */
        get: operations["GetSettlementDebtById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/{SettlementId}/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all settlements details */
        get: operations["GetAllDetailsBySettlementId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/details/{SettlementDetailId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get settlement detail by Id */
        get: operations["GetSettlementDetailsById"];
        put?: never;
        post?: never;
        /** Delete a Settlement detail */
        delete: operations["DeleteSettlementDetail"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Settlement detail */
        put: operations["UpdateSettlementDetail"];
        /** Create Settlement detail */
        post: operations["CreateSettlementDetail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/details/{SettlementDetailId}/exclude/{excludeStatus}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Exclude a Settlement detail */
        patch: operations["ExcludeSettlementDetail"];
        trace?: never;
    };
    "/settlements/settlements/details/exclude/{excludeStatus}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Exclude all Settlement details by resume id */
        patch: operations["MasiveExcludeSettlementDetail"];
        trace?: never;
    };
    "/settlements/settlements/details/{SettlementDetailId}/markok/{Status}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Mark a Settlement detail as ok */
        patch: operations["VerifiedSettlementDetail"];
        trace?: never;
    };
    "/settlements/settlements/details/{SettlementDetailId}/marktoreview/{Status}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Delete a Settlement detail */
        patch: operations["ReviewSettlementDetail"];
        trace?: never;
    };
    "/settlements/settlements/details/{DetailId}/concept-values": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all concept values by detail id */
        get: operations["GetAllConceptValuesBySettlementDetailId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/details/concept-values/{ConceptValueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get concept value by Id */
        get: operations["GetSettlementDetailConceptValueById"];
        put?: never;
        post?: never;
        /** Delete concept value by Id */
        delete: operations["DeleteSettlementDetailConceptValueById"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/details/concept-values": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["UpdateSettlementDetailConceptValue"];
        post: operations["CreateSettlementDetailConceptValue"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/{SettlementId}/resumes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all settlements resumes */
        get: operations["GetAllResumesBySettlementId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/resumes/{SettlementResumeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get settlement resume by Id */
        get: operations["GetSettlementResumeById"];
        put?: never;
        post?: never;
        /** Delete a Settlement resume */
        delete: operations["DeleteSettlementResume"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/settlements/resumes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Settlement Resume */
        put: operations["UpdateSettlementResume"];
        /** Create Settlement resume */
        post: operations["CreateSettlementResume"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/Sponsors/{SponsorId}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all settlements by sponsor id */
        get: operations["GetAllSettlementsBySponsorId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/Sponsors/settlements/{SponsorSettlementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get sponsor Settlements By Id */
        get: operations["GetSponsorSettlementById"];
        put?: never;
        post?: never;
        /** Disassociate Settlement From sponsor */
        delete: operations["DisassociateSettlementFromSponsor"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settlements/Sponsors/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate Settlement To Sponsor */
        post: operations["AssociateSettlementToSponsor"];
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
        /**
         * Format: int32
         * @enum {integer}
         */
        ConceptCalculateTypeEnum: 1 | 2 | 3 | 4;
        ContractAssociateCommandAsync: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            settlementId?: number;
        };
        ContractAssociationViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
        };
        ContractAssociationViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractAssociationViewModel"][] | null;
        };
        ContractAssociationViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractAssociationViewModel"];
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        HttpStatusCode: 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
        MedicalAgreementAssociateCommandAsync: {
            /** Format: int32 */
            medicalAgreementId?: number;
            /** Format: int32 */
            settlementId?: number;
        };
        MedicalAgreementAssociationViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            medicalAgreementId?: number;
        };
        MedicalAgreementAssociationViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MedicalAgreementAssociationViewModel"][] | null;
        };
        MedicalAgreementAssociationViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MedicalAgreementAssociationViewModel"];
        };
        PractitionerAssociateCommandAsync: {
            practitionerId?: string | null;
            /** Format: int32 */
            settlementId?: number;
        };
        PractitionerAssociationViewModel: {
            /** Format: int32 */
            id?: number;
            practitionerId?: string | null;
        };
        PractitionerAssociationViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerAssociationViewModel"][] | null;
        };
        PractitionerAssociationViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerAssociationViewModel"];
        };
        ProtocolAssociateCommandAsync: {
            /** Format: int32 */
            protocolId?: number;
            /** Format: int32 */
            settlementId?: number;
        };
        ProtocolAssociationViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            protocolId?: number;
        };
        ProtocolAssociationViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolAssociationViewModel"][] | null;
        };
        ProtocolAssociationViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolAssociationViewModel"];
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        SettlementChangeStatusCommandAsync: {
            /** Format: int32 */
            settlementId?: number;
            voucheredNumber?: string | null;
            bussinessname?: string | null;
            status?: components["schemas"]["SettlementStatusEnum"];
            markAsCollected?: boolean;
            /** Format: date-time */
            collectionDate?: string | null;
            convertToSpecifiedCurrency?: boolean;
            specifiedCurrencyCode?: string | null;
            /** Format: double */
            specifiedExchangeRate?: number;
            comments?: string | null;
        };
        SettlementConceptAddCommandAsync: {
            /** Format: int32 */
            settlementId?: number;
            /** Format: int32 */
            conceptId?: number;
        };
        SettlementConceptViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            settlementId?: number;
            /** Format: int32 */
            conceptId?: number;
        };
        SettlementConceptViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementConceptViewModel"][] | null;
        };
        SettlementConceptViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementConceptViewModel"];
        };
        SettlementCreateCommandAsync: {
            name?: string | null;
            /** Format: int32 */
            contractId?: number | null;
            /** Format: int32 */
            protocolId?: number | null;
            practitionerId?: string | null;
            /** Format: int32 */
            medicalInsuranceId?: number | null;
            /** Format: int32 */
            medicalAgreementId?: number | null;
            description?: string | null;
            settlementType?: components["schemas"]["SettlementTypeEnum"];
            /** Format: date-time */
            settlementDateRangeInit?: string | null;
            /** Format: date-time */
            settlementDateRangeEnd?: string | null;
            isLastSettlement?: boolean;
            concepts?: number[] | null;
            isManualSettlement?: boolean;
            isIncludeContractConcepts?: boolean;
            isIncludedAdditionalConcepts?: boolean;
            isIncludedRefundableConcepts?: boolean;
        };
        SettlementDebtViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            settlementId?: number;
            /** Format: int32 */
            debtId?: number;
        };
        SettlementDebtViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementDebtViewModel"][] | null;
        };
        SettlementDebtViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementDebtViewModel"];
        };
        SettlementDetailConceptValueCreateCommandAsync: {
            /** Format: int32 */
            settlementDetailsId?: number;
            /** Format: int32 */
            contractConceptId?: number;
            contractConceptName?: string | null;
            /** Format: double */
            percentValue?: number | null;
            /** Format: double */
            value?: number;
            currencyCode?: string | null;
        };
        SettlementDetailConceptValueUpdateCommandAsync: {
            /** Format: int32 */
            settlementDetailsId?: number;
            /** Format: int32 */
            contractConceptId?: number;
            contractConceptName?: string | null;
            /** Format: double */
            percentValue?: number | null;
            /** Format: double */
            value?: number;
            currencyCode?: string | null;
            /** Format: int32 */
            id?: number;
        };
        SettlementDetailConceptValueViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            settlementDetailsId?: number;
            /** Format: int32 */
            contractConceptId?: number;
            contractConceptName?: string | null;
            /** Format: double */
            percentValue?: number | null;
            /** Format: double */
            value?: number;
            currencyCode?: string | null;
            haveDivisionFee?: boolean;
            /** Format: double */
            feeDivisionPercentage?: number;
            /** Format: double */
            ownerAmount?: number;
            /** Format: double */
            teamDivisionPercentage?: number;
            /** Format: double */
            teamAmount?: number;
        };
        SettlementDetailConceptValueViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementDetailConceptValueViewModel"][] | null;
        };
        SettlementDetailConceptValueViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementDetailConceptValueViewModel"];
        };
        SettlementDetailCreateCommandAsync: {
            /** Format: int32 */
            settlementId?: number;
            /** Format: int32 */
            contractId?: number | null;
            /** Format: uuid */
            internalSummaryIdentifier?: string | null;
            /** Format: int32 */
            settlementResumeId?: number | null;
            description?: string | null;
            /** Format: int32 */
            conceptId?: number | null;
            conceptName?: string | null;
            /** Format: int32 */
            uniqueControlId?: number | null;
            isSettledAlready?: boolean;
            /** Format: int32 */
            settlementLinked?: number | null;
            /** Format: int32 */
            contractStage?: number | null;
            contractStageName?: string | null;
            /** Format: int32 */
            patientRecordNumber?: number | null;
            patientNumberInProtocol?: string | null;
            /** Format: int32 */
            referredId?: number;
            referrerName?: string | null;
            /** Format: int32 */
            referredId2?: number;
            referrerName2?: string | null;
            currency?: string | null;
            comments?: string | null;
            haveWarning?: boolean;
            warningDescription?: string | null;
            priceOrigin?: components["schemas"]["SettlementPriceOrigin"];
            /** Format: int32 */
            originReferenceId?: number | null;
            /** Format: double */
            costValue?: number;
            currencyCost?: string | null;
            /** Format: double */
            withHoldPercentage?: number;
            /** Format: double */
            withHoldAmount?: number;
            /** Format: double */
            overheadValue?: number;
            /** Format: double */
            overheadPercentage?: number;
            /** Format: double */
            overheadUnitValue?: number;
            /** Format: int32 */
            providerId?: number | null;
            isItemized?: boolean;
            isRefundable?: boolean;
            markOk?: boolean;
            markForReview?: boolean;
            /** Format: date-time */
            dueDate?: string | null;
            /** Format: date-time */
            settlementDate?: string;
            type?: components["schemas"]["SettlementDetailTypeEnum"];
            calculatingType?: components["schemas"]["ConceptCalculateTypeEnum"];
            /** Format: double */
            value?: number;
            /** Format: double */
            unitValue?: number;
            /** Format: double */
            coefficient?: number;
            /** Format: int32 */
            quantityToSettle?: number;
            notEnoughInfo?: boolean;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        SettlementDetailTypeEnum: 1 | 2;
        SettlementDetailUpdateCommandAsync: {
            /** Format: int32 */
            settlementId?: number;
            /** Format: int32 */
            contractId?: number | null;
            /** Format: uuid */
            internalSummaryIdentifier?: string | null;
            /** Format: int32 */
            settlementResumeId?: number | null;
            description?: string | null;
            /** Format: int32 */
            conceptId?: number | null;
            conceptName?: string | null;
            /** Format: int32 */
            uniqueControlId?: number | null;
            isSettledAlready?: boolean;
            /** Format: int32 */
            settlementLinked?: number | null;
            /** Format: int32 */
            contractStage?: number | null;
            contractStageName?: string | null;
            /** Format: int32 */
            patientRecordNumber?: number | null;
            patientNumberInProtocol?: string | null;
            /** Format: int32 */
            referredId?: number;
            referrerName?: string | null;
            /** Format: int32 */
            referredId2?: number;
            referrerName2?: string | null;
            currency?: string | null;
            comments?: string | null;
            haveWarning?: boolean;
            warningDescription?: string | null;
            priceOrigin?: components["schemas"]["SettlementPriceOrigin"];
            /** Format: int32 */
            originReferenceId?: number | null;
            /** Format: double */
            costValue?: number;
            currencyCost?: string | null;
            /** Format: double */
            withHoldPercentage?: number;
            /** Format: double */
            withHoldAmount?: number;
            /** Format: double */
            overheadValue?: number;
            /** Format: double */
            overheadPercentage?: number;
            /** Format: double */
            overheadUnitValue?: number;
            /** Format: int32 */
            providerId?: number | null;
            isItemized?: boolean;
            isRefundable?: boolean;
            markOk?: boolean;
            markForReview?: boolean;
            /** Format: date-time */
            dueDate?: string | null;
            /** Format: date-time */
            settlementDate?: string;
            type?: components["schemas"]["SettlementDetailTypeEnum"];
            calculatingType?: components["schemas"]["ConceptCalculateTypeEnum"];
            /** Format: double */
            value?: number;
            /** Format: double */
            unitValue?: number;
            /** Format: double */
            coefficient?: number;
            /** Format: int32 */
            quantityToSettle?: number;
            notEnoughInfo?: boolean;
            /** Format: int32 */
            id?: number;
            settlementResume?: components["schemas"]["SettlementResumeEntity"];
            isExcluded?: boolean;
        };
        SettlementDetailViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            settlementId?: number;
            /** Format: int32 */
            contractId?: number | null;
            /** Format: int32 */
            settlementResumeId?: number | null;
            /** Format: uuid */
            internalSummaryIdentifier?: string | null;
            settlementResume?: components["schemas"]["SettlementResumeEntity"];
            description?: string | null;
            /** Format: int32 */
            conceptId?: number | null;
            conceptName?: string | null;
            /** Format: int32 */
            contractStage?: number | null;
            contractStageName?: string | null;
            /** Format: uuid */
            stageInternalCrossVersionId?: string | null;
            /** Format: int32 */
            emrCrossVersionId?: number | null;
            /** Format: int32 */
            patientRecordNumber?: number | null;
            patientNumberInProtocol?: string | null;
            /** Format: double */
            unitAmount?: number;
            /** Format: double */
            amount?: number;
            /** Format: double */
            totalValues?: number;
            /** Format: double */
            totalAmount?: number;
            /** Format: double */
            totalAmountWithWithholding?: number;
            /** Format: double */
            withHolingPercentage?: number;
            /** Format: double */
            withHolingAmount?: number;
            /** Format: double */
            coefficient?: number;
            /** Format: int32 */
            quantityToSettle?: number;
            currency?: string | null;
            comments?: string | null;
            /** Format: double */
            overheadValue?: number;
            /** Format: double */
            overheadPercentage?: number;
            /** Format: double */
            overheadUnitValue?: number;
            /** Format: date-time */
            dueDate?: string | null;
            /** Format: date-time */
            settlementDate?: string;
            type?: components["schemas"]["SettlementDetailTypeEnum"];
            haveFeeDivision?: boolean;
            /** Format: double */
            feeDivisionPercentage?: number;
            /** Format: double */
            readonly ownerAmount?: number;
            /** Format: double */
            readonly ownerAmountWithholding?: number;
            /** Format: double */
            readonly ownerAmountWithholdingTotal?: number;
            /** Format: double */
            readonly teamDivisionPercentage?: number;
            /** Format: double */
            readonly teamAmount?: number;
            /** Format: double */
            readonly teamAmountWithholding?: number;
            /** Format: double */
            readonly teamAmountWithholdingTotal?: number;
            calculatingType?: components["schemas"]["ConceptCalculateTypeEnum"];
            conceptValue?: components["schemas"]["SettlementDetailConceptValueViewModel"][] | null;
        };
        SettlementDetailViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementDetailViewModel"][] | null;
        };
        SettlementDetailViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementDetailViewModel"];
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        SettlementPriceOrigin: 1 | 2 | 3;
        SettlementResumeCreateCommandAsync: {
            /** Format: uuid */
            internalIdentifier?: string;
            /** Format: int32 */
            settlementId?: number;
            description?: string | null;
            comments?: string | null;
            /** Format: int32 */
            itemsTotal?: number;
            haveWarning?: boolean;
        };
        SettlementResumeCurrencyTotalsEntity: {
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
            /** Format: int32 */
            settlementResumeId?: number;
            summary?: components["schemas"]["SettlementResumeEntity"];
            currencyCode?: string | null;
            /** Format: double */
            total?: number;
            /** Format: double */
            totalWithholding?: number;
            haveFeeDivision?: boolean;
            /** Format: double */
            ownerAmount?: number;
            /** Format: double */
            ownerAmountWithholding?: number;
            /** Format: double */
            readonly ownerAmountWithholdingTotal?: number;
            /** Format: double */
            teamAmount?: number;
            /** Format: double */
            teamAmountWithholding?: number;
            /** Format: double */
            readonly teamAmountWithholdingTotal?: number;
        };
        SettlementResumeEntity: {
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
            /** Format: uuid */
            internalIdentifier?: string;
            /** Format: int32 */
            settlementId?: number;
            description?: string | null;
            comments?: string | null;
            /** Format: int32 */
            itemsTotal?: number;
            haveWarning?: boolean;
            totals?: components["schemas"]["SettlementResumeCurrencyTotalsEntity"][] | null;
        };
        SettlementResumeUpdateCommandAsync: {
            /** Format: uuid */
            internalIdentifier?: string;
            /** Format: int32 */
            settlementId?: number;
            description?: string | null;
            comments?: string | null;
            /** Format: int32 */
            itemsTotal?: number;
            haveWarning?: boolean;
            /** Format: int32 */
            id?: number;
        };
        SettlementResumeViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            internalIdentifier?: string;
            /** Format: int32 */
            settlementId?: number;
            description?: string | null;
            comments?: string | null;
            haveWarning?: boolean;
            totals?: components["schemas"]["SettlementTotalSummaryViewModel"][] | null;
        };
        SettlementResumeViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementResumeViewModel"][] | null;
        };
        SettlementResumeViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementResumeViewModel"];
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        SettlementStatusEnum: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        SettlementTotalSummaryViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            settlementResumeId?: number;
            currencyCode?: string | null;
            /** Format: double */
            total?: number;
            /** Format: double */
            totalWithholding?: number;
            haveFeeDivision?: boolean;
            /** Format: double */
            ownerAmount?: number;
            /** Format: double */
            ownerAmountWithholding?: number;
            /** Format: double */
            ownerAmountWithholdingTotal?: number;
            /** Format: double */
            teamAmount?: number;
            /** Format: double */
            teamAmountWithholding?: number;
            /** Format: double */
            teamAmountWithholdingTotal?: number;
        };
        SettlementTotalViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            settlementId?: number;
            /** Format: double */
            totalValue?: number;
            currencyCode?: string | null;
            /** Format: double */
            withholdRetention?: number;
            haveFeeDivision?: boolean;
            /** Format: double */
            ownerAmount?: number;
            /** Format: double */
            ownerAmountWithholding?: number;
            /** Format: double */
            ownerAmountWithholdingTotal?: number;
            /** Format: double */
            teamAmount?: number;
            /** Format: double */
            teamAmountWithholding?: number;
            /** Format: double */
            teamAmountWithholdingTotal?: number;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        SettlementTypeEnum: 1 | 2 | 3;
        SettlementUpdateCommandAsync: {
            name?: string | null;
            /** Format: int32 */
            protocolId?: number | null;
            practitionerId?: string | null;
            /** Format: int32 */
            medicalInsuranceId?: number | null;
            /** Format: int32 */
            medicalAgreementId?: number | null;
            description?: string | null;
            settlementType?: components["schemas"]["SettlementTypeEnum"];
            /** Format: date-time */
            settlementDateRangeInit?: string | null;
            /** Format: date-time */
            settlementDateRangeEnd?: string | null;
            isLastSettlement?: boolean;
            concepts?: number[] | null;
            isManualSettlement?: boolean;
            isIncludeContractConcepts?: boolean;
            isIncludedAdditionalConcepts?: boolean;
            isIncludedRefundableConcepts?: boolean;
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number | null;
            status?: components["schemas"]["SettlementStatusEnum"];
            currencyCode?: string | null;
        };
        SettlementViewModel: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            /** Format: int32 */
            contractId?: number | null;
            /** Format: uuid */
            identifier?: string;
            description?: string | null;
            settlementType?: components["schemas"]["SettlementTypeEnum"];
            status?: components["schemas"]["SettlementStatusEnum"];
            currencyCode?: string | null;
            voucheredNumber?: string | null;
            bussinessname?: string | null;
            /** Format: date-time */
            settlementDateRangeInit?: string;
            /** Format: date-time */
            settlementDateRangeEnd?: string;
            tenant?: string | null;
            createdBy?: string | null;
            /** Format: date-time */
            created?: string;
            isLastSettlement?: boolean;
            isManualSettlement?: boolean;
            isIncludeContractConcepts?: boolean;
            isIncludedAdditionalConcepts?: boolean;
            isIncludedRefundableConcepts?: boolean;
            settlementResume?: components["schemas"]["SettlementResumeViewModel"][] | null;
            practitioner?: components["schemas"]["PractitionerAssociationViewModel"][] | null;
            sponsor?: components["schemas"]["SponsorAssociationViewModel"][] | null;
            protocol?: components["schemas"]["ProtocolAssociationViewModel"][] | null;
            agreements?: components["schemas"]["MedicalAgreementAssociationViewModel"][] | null;
            contract?: components["schemas"]["ContractAssociationViewModel"][] | null;
            debts?: components["schemas"]["SettlementDebtViewModel"][] | null;
            totals?: components["schemas"]["SettlementTotalViewModel"][] | null;
        };
        SettlementViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementViewModel"][] | null;
        };
        SettlementViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SettlementViewModel"];
        };
        SponsorAssociateCommandAsync: {
            /** Format: int32 */
            sponsorId?: number;
            /** Format: int32 */
            settlementId?: number;
        };
        SponsorAssociationViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            sponsorId?: number;
        };
        SponsorAssociationViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SponsorAssociationViewModel"][] | null;
        };
        SponsorAssociationViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SponsorAssociationViewModel"];
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
    GetAllSettlementsByContractId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractId: number;
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
                    "text/plain": components["schemas"]["ContractAssociationViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractAssociationViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractAssociationViewModelIReadOnlyListResponse"];
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
    GetContractSettlementById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractSettlementId: number;
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
                    "text/plain": components["schemas"]["ContractAssociationViewModelResponse"];
                    "application/json": components["schemas"]["ContractAssociationViewModelResponse"];
                    "text/json": components["schemas"]["ContractAssociationViewModelResponse"];
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
    AssociateSettlementToContract: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractAssociateCommandAsync"];
                "text/json": components["schemas"]["ContractAssociateCommandAsync"];
                "application/*+json": components["schemas"]["ContractAssociateCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractAssociationViewModelResponse"];
                    "application/json": components["schemas"]["ContractAssociationViewModelResponse"];
                    "text/json": components["schemas"]["ContractAssociationViewModelResponse"];
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
    DisassociateSettlementFromContract: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                associationId: number;
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
                    "text/plain": components["schemas"]["ContractAssociationViewModelResponse"];
                    "application/json": components["schemas"]["ContractAssociationViewModelResponse"];
                    "text/json": components["schemas"]["ContractAssociationViewModelResponse"];
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
    GetAllSettlementsByAgreementId: {
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
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MedicalAgreementAssociationViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["MedicalAgreementAssociationViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["MedicalAgreementAssociationViewModelIReadOnlyListResponse"];
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
    GetAgreementSettlementById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgreementSettlementId: number;
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
                    "text/plain": components["schemas"]["MedicalAgreementAssociationViewModelResponse"];
                    "application/json": components["schemas"]["MedicalAgreementAssociationViewModelResponse"];
                    "text/json": components["schemas"]["MedicalAgreementAssociationViewModelResponse"];
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
    AssociateSettlementToAgreement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["MedicalAgreementAssociateCommandAsync"];
                "text/json": components["schemas"]["MedicalAgreementAssociateCommandAsync"];
                "application/*+json": components["schemas"]["MedicalAgreementAssociateCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MedicalAgreementAssociationViewModelResponse"];
                    "application/json": components["schemas"]["MedicalAgreementAssociationViewModelResponse"];
                    "text/json": components["schemas"]["MedicalAgreementAssociationViewModelResponse"];
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
    DisassociateSettlementFromAgreement: {
        parameters: {
            query?: {
                associationId?: number;
            };
            header?: never;
            path: {
                ContractSettlementId: string;
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
    GetAllSettlementsByPractitionerId: {
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
                    "text/plain": components["schemas"]["PractitionerAssociationViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerAssociationViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerAssociationViewModelIReadOnlyListResponse"];
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
    GetPractitionerSettlementById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerSettlementId: number;
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
                    "text/plain": components["schemas"]["PractitionerAssociationViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerAssociationViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerAssociationViewModelResponse"];
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
    DisassociateSettlementFromPractitioner: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerSettlementId: number;
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
    AssociateSettlementToPractitioner: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PractitionerAssociateCommandAsync"];
                "text/json": components["schemas"]["PractitionerAssociateCommandAsync"];
                "application/*+json": components["schemas"]["PractitionerAssociateCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerAssociationViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerAssociationViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerAssociationViewModelResponse"];
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
    GetAllSettlementsByProtocolId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolId: number;
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
                    "text/plain": components["schemas"]["ProtocolAssociationViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolAssociationViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolAssociationViewModelIReadOnlyListResponse"];
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
    GetProtocolSettlementById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolSettlementId: number;
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
                    "text/plain": components["schemas"]["ProtocolAssociationViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolAssociationViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolAssociationViewModelResponse"];
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
    DisassociateSettlementFromProtocol: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolSettlementId: number;
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
    AssociateSettlementToProtocol: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolAssociateCommandAsync"];
                "text/json": components["schemas"]["ProtocolAssociateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolAssociateCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolAssociationViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolAssociationViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolAssociationViewModelResponse"];
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
    GetAllPatientsByProtocolId: {
        parameters: {
            query?: {
                SearchText?: string;
            };
            header?: never;
            path: {
                ProtocolId: number;
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
                    "text/plain": components["schemas"]["ProtocolAssociationViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolAssociationViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolAssociationViewModelIReadOnlyListResponse"];
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
    GetAllSettlements: {
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
                    "text/plain": components["schemas"]["SettlementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SettlementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SettlementViewModelIReadOnlyListResponse"];
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
    UpdateSettlement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlementUpdateCommandAsync"];
                "text/json": components["schemas"]["SettlementUpdateCommandAsync"];
                "application/*+json": components["schemas"]["SettlementUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SettlementViewModelResponse"];
                    "application/json": components["schemas"]["SettlementViewModelResponse"];
                    "text/json": components["schemas"]["SettlementViewModelResponse"];
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
    CreateSettlement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlementCreateCommandAsync"];
                "text/json": components["schemas"]["SettlementCreateCommandAsync"];
                "application/*+json": components["schemas"]["SettlementCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SettlementViewModelResponse"];
                    "application/json": components["schemas"]["SettlementViewModelResponse"];
                    "text/json": components["schemas"]["SettlementViewModelResponse"];
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
    ChangeStatus: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlementChangeStatusCommandAsync"];
                "text/json": components["schemas"]["SettlementChangeStatusCommandAsync"];
                "application/*+json": components["schemas"]["SettlementChangeStatusCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SettlementViewModelResponse"];
                    "application/json": components["schemas"]["SettlementViewModelResponse"];
                    "text/json": components["schemas"]["SettlementViewModelResponse"];
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
    GetSettlementById: {
        parameters: {
            query?: {
                Recalculate?: boolean;
            };
            header?: never;
            path: {
                SettlementId: number;
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
                    "text/plain": components["schemas"]["SettlementViewModelResponse"];
                    "application/json": components["schemas"]["SettlementViewModelResponse"];
                    "text/json": components["schemas"]["SettlementViewModelResponse"];
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
    DeleteSettlement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementId: number;
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
    GetAllSettlementConcept: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementId: number;
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
                    "text/plain": components["schemas"]["SettlementConceptViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SettlementConceptViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SettlementConceptViewModelIReadOnlyListResponse"];
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
    GetSettlementConceptById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementConceptId: number;
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
                    "text/plain": components["schemas"]["SettlementConceptViewModelResponse"];
                    "application/json": components["schemas"]["SettlementConceptViewModelResponse"];
                    "text/json": components["schemas"]["SettlementConceptViewModelResponse"];
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
    AddSettlementConcept: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlementConceptAddCommandAsync"];
                "text/json": components["schemas"]["SettlementConceptAddCommandAsync"];
                "application/*+json": components["schemas"]["SettlementConceptAddCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SettlementConceptViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SettlementConceptViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SettlementConceptViewModelIReadOnlyListResponse"];
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
    GetAllDebtsBySettlementId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementId: number;
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
                    "text/plain": components["schemas"]["SettlementDebtViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SettlementDebtViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SettlementDebtViewModelIReadOnlyListResponse"];
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
    GetSettlementDebtById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementDebtId: number;
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
                    "text/plain": components["schemas"]["SettlementDebtViewModelResponse"];
                    "application/json": components["schemas"]["SettlementDebtViewModelResponse"];
                    "text/json": components["schemas"]["SettlementDebtViewModelResponse"];
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
    GetAllDetailsBySettlementId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementId: number;
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
                    "text/plain": components["schemas"]["SettlementDetailViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SettlementDetailViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SettlementDetailViewModelIReadOnlyListResponse"];
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
    GetSettlementDetailsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementDetailId: number;
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
                    "text/plain": components["schemas"]["SettlementDetailViewModelResponse"];
                    "application/json": components["schemas"]["SettlementDetailViewModelResponse"];
                    "text/json": components["schemas"]["SettlementDetailViewModelResponse"];
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
    DeleteSettlementDetail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementDetailId: number;
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
    UpdateSettlementDetail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlementDetailUpdateCommandAsync"];
                "text/json": components["schemas"]["SettlementDetailUpdateCommandAsync"];
                "application/*+json": components["schemas"]["SettlementDetailUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SettlementDetailViewModelResponse"];
                    "application/json": components["schemas"]["SettlementDetailViewModelResponse"];
                    "text/json": components["schemas"]["SettlementDetailViewModelResponse"];
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
    CreateSettlementDetail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlementDetailCreateCommandAsync"];
                "text/json": components["schemas"]["SettlementDetailCreateCommandAsync"];
                "application/*+json": components["schemas"]["SettlementDetailCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SettlementDetailViewModelResponse"];
                    "application/json": components["schemas"]["SettlementDetailViewModelResponse"];
                    "text/json": components["schemas"]["SettlementDetailViewModelResponse"];
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
    ExcludeSettlementDetail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementDetailId: number;
                excludeStatus: boolean;
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
                    "text/plain": components["schemas"]["SettlementDetailViewModelResponse"];
                    "application/json": components["schemas"]["SettlementDetailViewModelResponse"];
                    "text/json": components["schemas"]["SettlementDetailViewModelResponse"];
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
    MasiveExcludeSettlementDetail: {
        parameters: {
            query?: {
                SettlementResumeId?: number;
            };
            header?: never;
            path: {
                excludeStatus: boolean;
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
    VerifiedSettlementDetail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementDetailId: number;
                Status: boolean;
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
                    "text/plain": components["schemas"]["SettlementDetailViewModelResponse"];
                    "application/json": components["schemas"]["SettlementDetailViewModelResponse"];
                    "text/json": components["schemas"]["SettlementDetailViewModelResponse"];
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
    ReviewSettlementDetail: {
        parameters: {
            query?: {
                comments?: string;
            };
            header?: never;
            path: {
                SettlementDetailId: number;
                Status: boolean;
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
                    "text/plain": components["schemas"]["SettlementDetailViewModelResponse"];
                    "application/json": components["schemas"]["SettlementDetailViewModelResponse"];
                    "text/json": components["schemas"]["SettlementDetailViewModelResponse"];
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
    GetAllConceptValuesBySettlementDetailId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                DetailId: number;
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
                    "text/plain": components["schemas"]["SettlementDetailConceptValueViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SettlementDetailConceptValueViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SettlementDetailConceptValueViewModelIReadOnlyListResponse"];
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
    GetSettlementDetailConceptValueById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ConceptValueId: number;
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
                    "text/plain": components["schemas"]["SettlementDetailConceptValueViewModelResponse"];
                    "application/json": components["schemas"]["SettlementDetailConceptValueViewModelResponse"];
                    "text/json": components["schemas"]["SettlementDetailConceptValueViewModelResponse"];
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
    DeleteSettlementDetailConceptValueById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ConceptValueId: number;
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
    UpdateSettlementDetailConceptValue: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlementDetailConceptValueUpdateCommandAsync"];
                "text/json": components["schemas"]["SettlementDetailConceptValueUpdateCommandAsync"];
                "application/*+json": components["schemas"]["SettlementDetailConceptValueUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SettlementDetailConceptValueViewModelResponse"];
                    "application/json": components["schemas"]["SettlementDetailConceptValueViewModelResponse"];
                    "text/json": components["schemas"]["SettlementDetailConceptValueViewModelResponse"];
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
    CreateSettlementDetailConceptValue: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlementDetailConceptValueCreateCommandAsync"];
                "text/json": components["schemas"]["SettlementDetailConceptValueCreateCommandAsync"];
                "application/*+json": components["schemas"]["SettlementDetailConceptValueCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SettlementDetailConceptValueViewModelResponse"];
                    "application/json": components["schemas"]["SettlementDetailConceptValueViewModelResponse"];
                    "text/json": components["schemas"]["SettlementDetailConceptValueViewModelResponse"];
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
    GetAllResumesBySettlementId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementId: number;
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
                    "text/plain": components["schemas"]["SettlementResumeViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SettlementResumeViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SettlementResumeViewModelIReadOnlyListResponse"];
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
    GetSettlementResumeById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementResumeId: number;
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
                    "text/plain": components["schemas"]["SettlementResumeViewModelResponse"];
                    "application/json": components["schemas"]["SettlementResumeViewModelResponse"];
                    "text/json": components["schemas"]["SettlementResumeViewModelResponse"];
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
    DeleteSettlementResume: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SettlementResumeId: number;
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
    UpdateSettlementResume: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlementResumeUpdateCommandAsync"];
                "text/json": components["schemas"]["SettlementResumeUpdateCommandAsync"];
                "application/*+json": components["schemas"]["SettlementResumeUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SettlementResumeViewModelResponse"];
                    "application/json": components["schemas"]["SettlementResumeViewModelResponse"];
                    "text/json": components["schemas"]["SettlementResumeViewModelResponse"];
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
    CreateSettlementResume: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SettlementResumeCreateCommandAsync"];
                "text/json": components["schemas"]["SettlementResumeCreateCommandAsync"];
                "application/*+json": components["schemas"]["SettlementResumeCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SettlementResumeViewModelResponse"];
                    "application/json": components["schemas"]["SettlementResumeViewModelResponse"];
                    "text/json": components["schemas"]["SettlementResumeViewModelResponse"];
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
    GetAllSettlementsBySponsorId: {
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
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SponsorAssociationViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["SponsorAssociationViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["SponsorAssociationViewModelIReadOnlyListResponse"];
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
    GetSponsorSettlementById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SponsorSettlementId: number;
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
                    "text/plain": components["schemas"]["SponsorAssociationViewModelResponse"];
                    "application/json": components["schemas"]["SponsorAssociationViewModelResponse"];
                    "text/json": components["schemas"]["SponsorAssociationViewModelResponse"];
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
    DisassociateSettlementFromSponsor: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                SponsorSettlementId: number;
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
    AssociateSettlementToSponsor: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SponsorAssociateCommandAsync"];
                "text/json": components["schemas"]["SponsorAssociateCommandAsync"];
                "application/*+json": components["schemas"]["SponsorAssociateCommandAsync"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["SponsorAssociationViewModelResponse"];
                    "application/json": components["schemas"]["SponsorAssociationViewModelResponse"];
                    "text/json": components["schemas"]["SponsorAssociationViewModelResponse"];
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
