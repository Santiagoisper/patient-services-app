export interface paths {
    "/ia/api/v{version}/Ai/chat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    version: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ChatRequest"];
                    "text/json": components["schemas"]["ChatRequest"];
                    "application/*+json": components["schemas"]["ChatRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ia/api/v{version}/Ai/embed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    version: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["EmbedRequest"];
                    "text/json": components["schemas"]["EmbedRequest"];
                    "application/*+json": components["schemas"]["EmbedRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Bad Request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ProblemDetails"];
                        "application/json": components["schemas"]["ProblemDetails"];
                        "text/json": components["schemas"]["ProblemDetails"];
                    };
                };
                /** @description Not Implemented */
                501: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ia/api/v{version}/ContractMultiFile/extract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ExtractContractFromMultipleFiles"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ia/api/v{version}/ContractMultiFile/extract/stages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ExtractStagesFromMultipleFiles"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ia/api/v{version}/ContractMultiFile/extract/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ExtractConceptsFromMultipleFiles"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ia/api/v{version}/ContractMultiFile/extract/schedules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ExtractSchedulesFromMultipleFiles"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ia/api/v{version}/ContractMultiFile/analyze/simple": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AnalyzeMultipleFilesSimple"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ia/api/v{version}/ContractPdf/extract": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["ExtractContractFromPdf"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ia/api/v{version}/PdfAnalysis/analyze": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AnalyzePdf"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ia/api/v{version}/PdfAnalysis/analyze/simple": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AnalyzePdfSimpleUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ia/api/v{version}/PdfAnalysis/analyze/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AnalyzePdfUpload"];
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
        AnalyzePdfCommand: {
            /** Format: byte */
            pdfContent?: string | null;
            pdfBase64?: string | null;
            analysisPrompt?: string | null;
            jsonSchema?: string | null;
        };
        ChatRequest: {
            prompt?: string | null;
        };
        ConceptViewModel: {
            /** Format: int32 */
            id?: number;
            conceptName?: string | null;
            conceptDescription?: string | null;
            conceptReferenceId?: string | null;
        };
        ContractBranchViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            branchName?: string | null;
            branchDescription?: string | null;
        };
        ContractConceptConceptViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            relatedContractConceptId?: number;
        };
        ContractConceptPaymentScheduleViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            contractStageId?: number;
            /** Format: double */
            price?: number | null;
            /** Format: double */
            settlementCoefficient?: number;
            /** Format: double */
            remotePrice?: number;
            /** Format: int32 */
            amountExpected?: number;
            /** Format: double */
            screeningFailurePrice?: number | null;
            /** Format: double */
            priceWithoutOverhead?: number;
            /** Format: double */
            followUpPrice?: number;
            currency?: string | null;
        };
        ContractConceptPaymentScheduleViewModelListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptPaymentScheduleViewModel"][] | null;
        };
        ContractConceptViewModel: {
            /** Format: int32 */
            id?: number | null;
            /** Format: int32 */
            contractId?: number | null;
            /** Format: int32 */
            contractAddendumId?: number | null;
            concept?: components["schemas"]["ConceptViewModel"];
            conceptCurrency?: string | null;
            isIncludeInVisit?: boolean | null;
            groupWithInTheVisit?: boolean | null;
            visitConceptRelationship?: string | null;
            isOptional?: boolean | null;
            applyToRemoteExecution?: boolean | null;
            applyToInFaceExecution?: boolean | null;
            applyToPhoneExecution?: boolean | null;
            applyToUnScheduledExecution?: boolean | null;
            applyToEarlyTerminationExecution?: boolean | null;
            haveDivisionFee?: boolean | null;
            /** Format: double */
            divisionFeeValue?: number | null;
            isManagedByCoordinator?: boolean | null;
            isMedicalService?: boolean | null;
            /** Format: int32 */
            medicalServiceId?: number | null;
            settlementSetting?: components["schemas"]["SettlementOptionsEnum"];
            settlementPeriod?: components["schemas"]["SettlementPeriodEnum"];
            /** Format: date-time */
            initialPeriodDate?: string | null;
            /** Format: int32 */
            valuationType?: number | null;
            /** Format: int32 */
            quantityToSettle?: number | null;
            /** Format: int32 */
            maxQuantityToSettle?: number | null;
            /** Format: double */
            priceValue?: number | null;
            /** Format: double */
            remoteFixedValue?: number | null;
            /** Format: double */
            phoneFixedValue?: number | null;
            haveRepetitionPrice?: boolean | null;
            /** Format: double */
            repetitionPriceValue?: number | null;
            haveRetroactivity?: boolean | null;
            /** Format: date-time */
            retroactivityDateFrom?: string | null;
            haveEarlyDiscontinuationPrice?: boolean | null;
            /** Format: double */
            earlyDiscontinuationPrice?: number | null;
            haveWithdrawal?: boolean | null;
            /** Format: double */
            withdrawalValue?: number | null;
            applyWithholdingOnConceptValues?: boolean | null;
            /** Format: double */
            percentageValue?: number | null;
            /** Format: int32 */
            percentageBase?: number | null;
            /** Format: double */
            maxCostPrice?: number | null;
            /** Format: int32 */
            priceListOrigin?: number | null;
            /** Format: int32 */
            calculateType?: number | null;
            needAggrupation?: boolean | null;
            /** Format: int32 */
            aggrupationSegment?: number | null;
            haveGenderFilter?: boolean | null;
            appliesToMen?: boolean | null;
            appliesToWomen?: boolean | null;
            appliesToWomenOfFertileAge?: boolean | null;
            appliesToWomenOfNonFertileAge?: boolean | null;
            appliesToAgeBetween?: boolean | null;
            /** Format: int32 */
            ageFrom?: number | null;
            /** Format: int32 */
            ageTo?: number | null;
            haveOverhead?: boolean | null;
            /** Format: double */
            overheadValue?: number | null;
            /** Format: double */
            averageOverheadValue?: number | null;
            filterByBranches?: boolean | null;
            paymentSchedule?: components["schemas"]["ContractConceptPaymentScheduleViewModel"][] | null;
            concepts?: components["schemas"]["ContractConceptConceptViewModel"][] | null;
            branches?: components["schemas"]["ContractBranchViewModel"][] | null;
        };
        ContractConceptViewModelListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptViewModel"][] | null;
        };
        ContractStageViewModel: {
            /** Format: int32 */
            id?: number | null;
            /** Format: int32 */
            contractId?: number | null;
            /** Format: int32 */
            contractAddendumId?: number | null;
            stageName?: string | null;
            comments?: string | null;
            isOptional?: boolean | null;
            isOnSiteMandatory?: boolean | null;
            failSelectionEnabled?: boolean | null;
            /** Format: int32 */
            cycleId?: number | null;
            /** Format: int32 */
            stageOrder?: number | null;
            /** Format: int32 */
            offset?: number | null;
            /** Format: int32 */
            offsetUnit?: number | null;
        };
        ContractStageViewModelListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractStageViewModel"][] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ContractStatusEnum: 1 | 2 | 3 | 4 | 5 | 6;
        ContractViewModel: {
            contractNumber?: string | null;
            contractDescription?: string | null;
            contractStatus?: components["schemas"]["ContractStatusEnum"];
            contractCurrency?: string | null;
            stages?: components["schemas"]["ContractStageViewModel"][] | null;
            concepts?: components["schemas"]["ContractConceptViewModel"][] | null;
        };
        ContractViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractViewModel"];
        };
        EmbedRequest: {
            text?: string | null;
        };
        JsonDocumentResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: unknown;
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
        /**
         * Format: int32
         * @enum {integer}
         */
        SettlementOptionsEnum: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
        /**
         * Format: int32
         * @enum {integer}
         */
        SettlementPeriodEnum: 1 | 2 | 3 | 4 | 5 | 6;
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    ExtractContractFromMultipleFiles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    files?: string[];
                    analysisPrompt?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractViewModelResponse"];
                    "application/json": components["schemas"]["ContractViewModelResponse"];
                    "text/json": components["schemas"]["ContractViewModelResponse"];
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
            /** @description Internal Server Error */
            500: {
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
    ExtractStagesFromMultipleFiles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    files?: string[];
                    analysisPrompt?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractStageViewModelListResponse"];
                    "application/json": components["schemas"]["ContractStageViewModelListResponse"];
                    "text/json": components["schemas"]["ContractStageViewModelListResponse"];
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
            /** @description Internal Server Error */
            500: {
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
    ExtractConceptsFromMultipleFiles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    files?: string[];
                    analysisPrompt?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractConceptViewModelListResponse"];
                    "application/json": components["schemas"]["ContractConceptViewModelListResponse"];
                    "text/json": components["schemas"]["ContractConceptViewModelListResponse"];
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
            /** @description Internal Server Error */
            500: {
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
    ExtractSchedulesFromMultipleFiles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    files?: string[];
                    analysisPrompt?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractConceptPaymentScheduleViewModelListResponse"];
                    "application/json": components["schemas"]["ContractConceptPaymentScheduleViewModelListResponse"];
                    "text/json": components["schemas"]["ContractConceptPaymentScheduleViewModelListResponse"];
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
            /** @description Internal Server Error */
            500: {
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
    AnalyzeMultipleFilesSimple: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    files?: string[];
                    analysisPrompt?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
                };
            };
        };
    };
    ExtractContractFromPdf: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    pdf?: string;
                    prompt?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractViewModelResponse"];
                    "application/json": components["schemas"]["ContractViewModelResponse"];
                    "text/json": components["schemas"]["ContractViewModelResponse"];
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
    AnalyzePdf: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AnalyzePdfCommand"];
                "text/json": components["schemas"]["AnalyzePdfCommand"];
                "application/*+json": components["schemas"]["AnalyzePdfCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["JsonDocumentResponse"];
                    "application/json": components["schemas"]["JsonDocumentResponse"];
                    "text/json": components["schemas"]["JsonDocumentResponse"];
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
            /** @description Internal Server Error */
            500: {
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
    AnalyzePdfSimpleUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    pdf?: string;
                    prompt?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
                };
            };
        };
    };
    AnalyzePdfUpload: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                version: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    pdf?: string;
                    analysisPrompt?: string;
                    jsonSchema?: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["JsonDocumentResponse"];
                    "application/json": components["schemas"]["JsonDocumentResponse"];
                    "text/json": components["schemas"]["JsonDocumentResponse"];
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
