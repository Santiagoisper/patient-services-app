export interface paths {
    "/protocols/consumers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Consumers */
        get: operations["GetAllConsumers"];
        put?: never;
        /** Create Consumer */
        post: operations["CreateConsumer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/consumers/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Consumer By Id */
        get: operations["GetConsumerById"];
        /** Update Consumer */
        put: operations["UpdateConsumer"];
        post?: never;
        /** Delete Consumer */
        delete: operations["DeleteConsumer"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all protocols */
        get: operations["GetProtocols"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get ProtocolContract By Id */
        get: operations["GetProtocolById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/sponsorId": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Sponsor Id By Protocol Id */
        get: operations["GetSponsorIdByProtocolId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{protocolId}/visits/{crossVersionId}/patient/{numberInProtocol}/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get concepts for a specific visit in a protocol */
        get: operations["GetVisitConcepts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/info": {
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
                /** @description OK */
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
    "/protocols/visits/protocol/{ProtocolId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all patient visits by protocol id */
        get: operations["GetPatientVisitsByProtocolId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/visits/patient/{PatientId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all patient visits by patient id */
        get: operations["GetVisitByPatientId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/visits/{PatientVisitId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Patient visit by ID */
        get: operations["GetPatientVisitById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/visits/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export patient visits by date range to Excel */
        get: operations["ExportVisitsByDateRange"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/practitioners/{PractitionerId}/consumptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all practitioner consumption by practitioner id. */
        get: operations["GetAllConsumptionsByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/practitioners/{PractitionerId}/consumptions/status/{status}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all practitioner consumptions by practitioner id and status. */
        get: operations["GetAllPractitionerConsumptionsByStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/practitioners/consumptions/{PractitionerConsumptionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all protocol consumption by protocol id. */
        get: operations["GetPractitionerConsumptionById"];
        put?: never;
        post?: never;
        delete: operations["DeletePractitionerConsumption"];
        options?: never;
        head?: never;
        /** Change protocol consumption status. */
        patch: operations["ChangePractitionerConsumptionStatus"];
        trace?: never;
    };
    "/protocols/practitioners/consumptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["UpdatePractitionerConsumption"];
        post: operations["AddPractitionerConsumption"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/practitioners/consumptions/{ProtocolConsumptionId}/amount": {
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
        /** Change protocol consumption status. */
        patch: operations["ChangePractitionerConsumptionAmount"];
        trace?: never;
    };
    "/protocols/practitioners/consumptions/{ProtocolConsumptionId}/type/{newType}": {
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
        /** Assign provider to consumption. */
        patch: operations["ChangeTypeOfPractitionerConsumption"];
        trace?: never;
    };
    "/protocols/practitioners/consumptions/{PractitionerConsumptionId}/practitioner/{practitionerId}": {
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
        /** Assign producer to consumption. */
        patch: operations["AssignPractitionerToConsumption"];
        trace?: never;
    };
    "/protocols/practitioners/{practitionerId}/consumptions/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export all practitioner consumption by practitioner id. */
        get: operations["ExportConsumptionsByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/practitioners/consumptions/{PractitionerConsumptionId}/link-settlement": {
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
        /** Link a practitioner consumption to a settlement. */
        patch: operations["LinkPractitionerConsumptionToSettlement"];
        trace?: never;
    };
    "/protocols/practitioners/consumptions/unlink-settlement/{SettlementId}": {
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
        /** Unlink all practitioner consumptions from a settlement. */
        patch: operations["UnlinkPractitionerConsumptionsFromSettlement"];
        trace?: never;
    };
    "/protocols/practitioners/{PractitionerId}/consumptions/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all practitioner consumption sync process by practitioner id. */
        get: operations["GetALlSyncProcessByPractitioner"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/practitioners/consumptions/sync/{PractitionerConsumptionSyncProcessId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get protocol consumption sync process by id. */
        get: operations["GetPractitionerSyncProcessBySyncProcessById"];
        put?: never;
        post?: never;
        /** Delete a protocol consumption sync process. */
        delete: operations["DeletePractitionerSyncProcess"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/practitioners/{PractitionerId}/consumptions/sync/last": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get last sync process by practitioner id. */
        get: operations["GetLastPractitionerSyncProcess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/practitioners/consumptions/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update an existing practitioner consumption sync process. */
        put: operations["UpdatePractitionerSyncProcess"];
        /** Create a new protocol consumption sync process. */
        post: operations["CreatePractitionerSyncProcess"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/consumptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all protocol consumption by protocol id. */
        get: operations["GetAllConsumptionsByProtocolId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/consumptions/status/{StatusId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all protocol consumption by protocol id. */
        get: operations["GetAllProtocolConsumptionsByStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/consumptions/stage/{StageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all protocol consumption by protocol id and stage id. */
        get: operations["GetAllProtocolConsumptionsByStageId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/consumptions/totals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Totals of all protocol consumption by protocol id and status. */
        get: operations["GetTotalsByProtocol"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/consumptions/withholding": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get withholding totals by protocol id. */
        get: operations["GetTotalWithholdingByProtocol"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/provider/{ProviderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all protocol consumption by provider and status. */
        get: operations["GetConsumptionsByProvider"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all protocol consumption by protocol id. */
        get: operations["GetConsumptionById"];
        put?: never;
        post?: never;
        delete: operations["DeleteProtocolConsumption"];
        options?: never;
        head?: never;
        /** Change protocol consumption status. */
        patch: operations["ChangeProtocolConsumptionStatus"];
        trace?: never;
    };
    "/protocols/protocols/consumptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["UpdateProtocolConsumption"];
        post: operations["AddProtocolConsumption"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}/amount": {
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
        /** Change protocol consumption amount. */
        patch: operations["ChangeProtocolConsumptionAmount"];
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}/concept/{ConceptId}": {
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
        patch: operations["AssignConceptToConsumption"];
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}/medicalService/{MedicalServiceId}": {
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
        patch: operations["AssignMedicalServiceToConsumption"];
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}/producer/{ProducerId}": {
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
        patch: operations["AssignProducerToConsumption"];
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}/provider/{ProviderId}": {
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
        /** Assign provider to consumption. */
        patch: operations["AssignProviderToConsumption"];
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}/visit/{StageId}": {
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
        /** Change visit of a protocol consumption. */
        patch: operations["ChangeVisitOfConsumption"];
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}/type/{newType}": {
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
        /** Assign provider to consumption. */
        patch: operations["ChangeTypeOfConsumption"];
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/consumptions/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export all protocol consumption by protocol id. */
        get: operations["ExportAllConsumptionsByProtocolId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}/procedure": {
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
        /** Set consumption as procedure. */
        patch: operations["SetConsumptionAsProcedure"];
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}/additional": {
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
        /** Set consumption as additional. */
        patch: operations["SetConsumptionAsAdditional"];
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ProtocolConsumptionId}/movements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all protocol consumption movements by protocol consumption id. */
        get: operations["GetAllConsumptionMovementsByConsumptionId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/movements/{ServiceConsumedMovementId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get protocol consumption movement by id. */
        get: operations["GetConsumptionMovementById"];
        put?: never;
        post?: never;
        /** Delete protocol consumption movement. */
        delete: operations["DeleteProtocolConsumptionMovement"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/movements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update protocol consumption movement. */
        put: operations["UpdateProtocolConsumptionMovement"];
        /** Create protocol consumption movement. */
        post: operations["AddProtocolConsumptionMovement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/consumptions/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all protocol consumption sync process by protocol id. */
        get: operations["GetALlSyncProcessByProtocol"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/sync/{ProtocolConsumptionSyncProcessId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get protocol consumption sync process by id. */
        get: operations["GetBySyncProcessById"];
        put?: never;
        post?: never;
        /** Delete a protocol consumption sync process. */
        delete: operations["DeleteSyncProcess"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/consumptions/sync/last": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** get last sync process */
        get: operations["GetLastSyncProcess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update an existing protocol consumption sync process. */
        put: operations["UpdateSyncProcess"];
        /** Create a new protocol consumption sync process. */
        post: operations["CreateSyncProcess"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/consumptions/visit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves all protocol consumption visits associated with a specific protocol ID. */
        get: operations["GetProtocolConsumptionVisits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/visit/{visitId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a specific protocol consumption visit by its ID. */
        get: operations["GetProtocolConsumptionVisitById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/consumptions/visit/{stageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Retrieves a specific protocol consumption visit by its ID. */
        get: operations["GetProtocolConsumptionVisitByProtocolAndStage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/visit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Updates an existing protocol consumption visit. */
        put: operations["UpdateProtocolVisit"];
        /** Creates a new protocol consumption visit. */
        post: operations["CreateProtocolVisit"];
        /** Deletes a specific protocol consumption visit by its ID. */
        delete: operations["DeleteProtocolVisit"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ConsumptionId}/visit/{ConsumptionVisitId}/link": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Links a protocol consumption to a specific visit. */
        post: operations["LinkConsumptionToVisit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/{ConsumptionId}/visit/{ConsumptionVisitId}/unlink": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unlinks a protocol consumption from a specific visit. */
        post: operations["UnLinkConsumptionToVisit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/visit/{ProtocolVisitId}/totals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Protocol Consumption Visit Totals by Protocol Visit Id */
        get: operations["GetProtocolConsumptionVisitTotals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/visit/totals/{VisitTotalId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetProtocolConsumptionVisitTotalById"];
        put?: never;
        post?: never;
        /** Delete Protocol Consumption Visit Total */
        delete: operations["DeleteProtocolConsumptionVisitTotals"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/consumptions/visit/totals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Protocol Consumption Visit Total */
        put: operations["UpdateProtocolConsumptionVisitTotals"];
        /** Create Protocol Consumption Visit Total */
        post: operations["CreateProtocolConsumptionVisitTotals"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetProtocolContracts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/contracts/{ProtocolContractId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get ProtocolContract By Id */
        get: operations["GetProtocolContractById"];
        /** set effective date start */
        put: operations["SetEffectiveDateStart"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["AddProtocolContract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/patients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all patients by protocol id */
        get: operations["GetProtocolPatients"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/patients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all patients by protocol id */
        get: operations["GetProtocolPatientsByProtocolId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/patients/{MedicalRecordNumber}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all patient visits by patient id */
        get: operations["GetProtocolPatientByMedicalRecordNumber"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/patients/{NumberInProtocol}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Patient visit by ID */
        get: operations["GetProtocolPatientByNumberInProtocol"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/practitioners": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all practitioners by protocol */
        get: operations["GetPractitionersByProtocol"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/practitioners/{PractitionerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get practitioner by protocol and practitioner id */
        get: operations["GetProtocolPractitionerById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/practitioners/{PractitionerId}/visits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetVisitsByPractitioner"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/practitioners/{PractitionerId}/visits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get visits count group by date by practitioner */
        get: operations["GetVisitsCountByPractitioner"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/practitioners/{PractitionerId}/visits/pdf": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export visits by practitioner to PDF */
        get: operations["ExportVisitsByPractitionerToPdf"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/practitioners/{PractitionerId}/visits/excel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export visits by practitioner to Excel */
        get: operations["ExportVisitsByPractitionerToExcel"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/visits/excel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export all visits by protocol to Excel */
        get: operations["ExportVisitsByProtocolToExcel"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/practitionersStudyTasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all practitioners by protocol */
        get: operations["GetPractitionersStudyTasksByProtocol"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/practitionersStudyTasks/{PractitionerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get practitioner by protocol and practitioner id */
        get: operations["GetProtocolPractitionerStudyTaskById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Services */
        get: operations["GetAllServices"];
        put?: never;
        /** Create Service */
        post: operations["CreateService"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/services/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Service By Id */
        get: operations["GetServiceById"];
        /** Update Service */
        put: operations["UpdateService"];
        post?: never;
        /** Delete Service */
        delete: operations["DeleteService"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/consumers/{consumerId}/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Services By Consumer Id */
        get: operations["GetServicesByConsumerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/service-categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Service Categories */
        get: operations["GetAllServiceCategories"];
        put?: never;
        /** Create Service Category */
        post: operations["CreateServiceCategory"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/service-categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Service Category By Id */
        get: operations["GetServiceCategoryById"];
        /** Update Service Category */
        put: operations["UpdateServiceCategory"];
        post?: never;
        /** Delete Service Category */
        delete: operations["DeleteServiceCategory"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/studytasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all StudyTasks */
        get: operations["GetStudyTasks"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/studytasks/{StudyTaskId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get StudyTask by id */
        get: operations["GetStudyTaskById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/visits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all visitis by protocol */
        get: operations["GetVisitsByProtocol"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/{ProtocolId}/visits-full": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all visitis by protocol */
        get: operations["GetVisitsFullByProtocol"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/protocols/visits/{VisitId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get visit by id */
        get: operations["GetProtocolVisitById"];
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
        AssociateContractToProtocolCommandAsync: {
            /** Format: int32 */
            protocolId?: number;
            /** Format: int32 */
            contractId?: number;
            /** Format: date-time */
            effectiveDateStart?: string | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ConceptCalculateTypeEnum: 1 | 2 | 3 | 4;
        ConsumerCreateCommandAsync: {
            externalId?: string | null;
            name?: string | null;
            description?: string | null;
            /** Format: uuid */
            addressId?: string;
        };
        ConsumerUpdateCommandAsync: {
            /** Format: uuid */
            id?: string;
            externalId?: string | null;
            name?: string | null;
            description?: string | null;
            /** Format: uuid */
            addressId?: string;
        };
        ConsumerViewModel: {
            /** Format: uuid */
            id?: string;
            externalId?: string | null;
            name?: string | null;
            description?: string | null;
            /** Format: uuid */
            addressId?: string;
            /** Format: date-time */
            created?: string;
            createdBy?: string | null;
        };
        ConsumerViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ConsumerViewModel"][] | null;
        };
        ConsumerViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ConsumerViewModel"];
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ConsumptionOriginEnum: 1 | 2;
        EmrPatientFormConceptEntity: {
            type?: string | null;
            conceptId?: string | null;
            description?: string | null;
            realized?: boolean;
            extraFormType?: components["schemas"]["ExtraFormType"];
            /** Format: int32 */
            contractConceptId?: number | null;
            /** Format: int32 */
            medicalServiceId?: number | null;
            /** Format: uuid */
            providerId?: string | null;
            isPayable?: boolean;
            isProcedure?: boolean;
        };
        EmrSyncPatientFormEntity: {
            /** Format: int32 */
            formId?: number;
            /** Format: int32 */
            patientFormId?: number;
            formTitle?: string | null;
            formType?: string | null;
            extraFormType?: components["schemas"]["ExtraFormType"];
            concepts?: components["schemas"]["EmrPatientFormConceptEntity"][] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ExtraFormType: 0 | 1 | 2;
        FileContentResultResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            /** Format: binary */
            data?: string | null;
        };
        GuidResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            /** Format: uuid */
            data?: string;
        };
        Int32NullableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            /** Format: int32 */
            data?: number | null;
        };
        PatientVisitViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            entryId?: number;
            /** Format: int32 */
            protocolId?: number;
            protocolName?: string | null;
            patientId?: string | null;
            numberInProtocol?: string | null;
            /** Format: int32 */
            crossVersionId?: number;
            /** Format: double */
            version?: number;
            /** Format: int32 */
            visitId?: number;
            /** Format: int32 */
            order?: number;
            title?: string | null;
            /** Format: int32 */
            visitType?: number | null;
            type?: string | null;
            /** Format: date-time */
            date?: string;
            /** Format: int32 */
            stage?: number;
            /** Format: int32 */
            status?: number;
            /** Format: date-time */
            created?: string;
            practitioner?: string | null;
            /** Format: uuid */
            createdById?: string;
        };
        PatientVisitViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PatientVisitViewModel"][] | null;
        };
        PractitionerConsumptionCreateCommandAsync: {
            /** Format: uuid */
            practitionerId?: string | null;
            practitionerName?: string | null;
            status?: components["schemas"]["ProtocolConsumedServiceStatus"];
            /** Format: int32 */
            protocolId?: number | null;
            serviceName?: string | null;
            /** Format: date-time */
            serviceDueDate?: string | null;
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            addendumId?: number;
            /** Format: int32 */
            contractConceptId?: number | null;
            conceptDescription?: string | null;
            parentInstanceId?: string | null;
            instanceId: string | null;
            patientNumberInProtocol?: string | null;
            /** Format: int32 */
            stageId?: number | null;
            stageName?: string | null;
            /** Format: uuid */
            stageInternalCrossVersionId?: string | null;
            /** Format: int32 */
            emrCrossVersionId?: number | null;
            /** Format: int32 */
            quantity?: number;
            /** Format: double */
            coefficientApplied?: number;
            currencyCode: string | null;
            /** Format: double */
            unitAmount?: number;
            /** Format: double */
            amount?: number;
            /** Format: double */
            payeeAmount?: number;
            /** Format: double */
            pendingAmount?: number;
            typeOfService?: components["schemas"]["ProtocolConsumptionTypeOfServiceEnum"];
            realizedType?: components["schemas"]["ProtocolConsumptionRealizeTypeEnum"];
            originalConsumptionType?: components["schemas"]["VisitTypeEnum"];
            origin?: components["schemas"]["ConsumptionOriginEnum"];
            markedToSettle?: boolean;
            markedAsPayee?: boolean;
            markedAsFlagged?: boolean;
            markedAsItemized?: boolean;
            markedAsRefundable?: boolean;
            markedAsNeedMoreInfo?: boolean;
            moreInfoComments?: string | null;
            markedAsHaveWarnings?: boolean;
            warningsComments?: string | null;
            comments?: string | null;
            markedAsTrouble?: boolean;
            troubleComments?: string | null;
            tag1?: string | null;
            tag2?: string | null;
            tag3?: string | null;
            tag4?: string | null;
        };
        PractitionerConsumptionSyncProcessCreateCommandAsync: {
            /** Format: uuid */
            practitionerId?: string;
        };
        PractitionerConsumptionSyncProcessUpdateCommandAsync: {
            /** Format: int32 */
            protocolId?: number;
            useMedicalPayableDefinition?: boolean;
            /** Format: uuid */
            id?: string;
            /** Format: date-time */
            lastSync?: string;
            status?: components["schemas"]["ProtocolConsumptionSyncProcessStatusEnum"];
            errorMessage?: string | null;
            errorStackTrace?: string | null;
        };
        PractitionerConsumptionSyncProcessViewModel: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            practitionerId?: string;
            /** Format: date-time */
            lastSync?: string;
            status?: components["schemas"]["ProtocolConsumptionSyncProcessStatusEnum"];
            errorMessage?: string | null;
            errorStackTrace?: string | null;
        };
        PractitionerConsumptionSyncProcessViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerConsumptionSyncProcessViewModel"][] | null;
        };
        PractitionerConsumptionSyncProcessViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerConsumptionSyncProcessViewModel"];
        };
        PractitionerConsumptionUpdateCommandAsync: {
            /** Format: int32 */
            protocolId?: number;
            serviceName?: string | null;
            /** Format: date-time */
            serviceDueDate?: string | null;
            /** Format: int32 */
            contractConceptId?: number | null;
            conceptDescription?: string | null;
            parentInstanceId?: string | null;
            instanceId?: string | null;
            patientNumberInProtocol?: string | null;
            /** Format: int32 */
            stageId?: number | null;
            stageName?: string | null;
            /** Format: uuid */
            stageInternalCrossVersionId?: string | null;
            /** Format: int32 */
            emrCrossVersionId?: number | null;
            calculatingType?: components["schemas"]["ConceptCalculateTypeEnum"];
            currencyCode: string | null;
            /** Format: int32 */
            quantity?: number;
            /** Format: double */
            coefficientApplied?: number;
            haveOverheadIncluded?: boolean;
            /** Format: double */
            contractValue?: number;
            /** Format: double */
            overheadPercentage?: number;
            /** Format: double */
            overheadAmount?: number;
            haveFeeDivision?: boolean;
            /** Format: double */
            feeDivisionPercentage?: number;
            /** Format: double */
            ownerAmount?: number;
            /** Format: double */
            teamDivisionPercentage?: number;
            /** Format: double */
            teamAmount?: number;
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
            payeeAmount?: number;
            /** Format: double */
            pendingAmount?: number;
            /** Format: double */
            withHolingPercentage?: number;
            /** Format: double */
            withHolingAmount?: number;
            costStatus?: components["schemas"]["ProtocolConsumedServiceStatus"];
            /** Format: double */
            costAmount?: number;
            /** Format: double */
            costPayee?: number;
            /** Format: double */
            costPending?: number;
            costCurrencyCode?: string | null;
            /** Format: uuid */
            providerId?: string | null;
            providerName?: string | null;
            /** Format: uuid */
            producer?: string | null;
            producerName?: string | null;
            typeOfService?: components["schemas"]["ProtocolConsumptionTypeOfServiceEnum"];
            realizedType?: components["schemas"]["ProtocolConsumptionRealizeTypeEnum"];
            condition?: components["schemas"]["ProtocolConsumptionConditionEnum"];
            /** Format: int32 */
            medicalServiceId?: number | null;
            medicalServiceName?: string | null;
            medicalServiceCode?: string | null;
            markedToSettle?: boolean;
            markedAsPayee?: boolean;
            markedAsFlagged?: boolean;
            markedAsItemized?: boolean;
            markedAsRefundable?: boolean;
            markedAsNeedMoreInfo?: boolean;
            moreInfoComments?: string | null;
            markedAsHaveWarnings?: boolean;
            warningsComments?: string | null;
            comments?: string | null;
            tag1?: string | null;
            tag2?: string | null;
            tag3?: string | null;
            tag4?: string | null;
            origin?: components["schemas"]["ConsumptionOriginEnum"];
            /** Format: uuid */
            id?: string;
            status?: components["schemas"]["ProtocolConsumedServiceStatus"];
        };
        PractitionerConsumptionViewModel: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            practitionerId?: string | null;
            practitionerName?: string | null;
            /** Format: uuid */
            currentPractitionerId?: string | null;
            currentPractitionerName?: string | null;
            status?: components["schemas"]["ProtocolConsumedServiceStatus"];
            /** Format: int32 */
            protocolId?: number | null;
            protocolName?: string | null;
            serviceName?: string | null;
            /** Format: date-time */
            serviceDueDate?: string | null;
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            addendumId?: number;
            /** Format: int32 */
            contractConceptId?: number | null;
            conceptDescription?: string | null;
            parentInstanceId?: string | null;
            instanceId: string | null;
            patientNumberInProtocol?: string | null;
            /** Format: int32 */
            stageId?: number | null;
            stageName?: string | null;
            /** Format: uuid */
            stageInternalCrossVersionId?: string | null;
            /** Format: int32 */
            emrCrossVersionId?: number | null;
            /** Format: int32 */
            quantity?: number;
            /** Format: double */
            coefficientApplied?: number;
            currencyCode: string | null;
            /** Format: double */
            unitAmount?: number;
            /** Format: double */
            amount?: number;
            /** Format: double */
            payeeAmount?: number;
            /** Format: double */
            pendingAmount?: number;
            /** Format: uuid */
            settlementIdentifier?: string | null;
            /** Format: int32 */
            settlementId?: number | null;
            settlementName?: string | null;
            typeOfService?: components["schemas"]["ProtocolConsumptionTypeOfServiceEnum"];
            realizedType?: components["schemas"]["ProtocolConsumptionRealizeTypeEnum"];
            originalConsumptionType?: components["schemas"]["VisitTypeEnum"];
            currentConsumptionType?: components["schemas"]["VisitTypeEnum"];
            origin?: components["schemas"]["ConsumptionOriginEnum"];
            markedToSettle?: boolean;
            markedAsPayee?: boolean;
            markedAsFlagged?: boolean;
            markedAsItemized?: boolean;
            markedAsRefundable?: boolean;
            markedAsNeedMoreInfo?: boolean;
            moreInfoComments?: string | null;
            markedAsHaveWarnings?: boolean;
            warningsComments?: string | null;
            comments?: string | null;
            markedAsTrouble?: boolean;
            troubleComments?: string | null;
            tag1?: string | null;
            tag2?: string | null;
            tag3?: string | null;
            tag4?: string | null;
        };
        PractitionerConsumptionViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerConsumptionViewModel"][] | null;
        };
        PractitionerConsumptionViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerConsumptionViewModel"];
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
        ProtocolConsumedServiceConceptValueEntity: {
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
            tenantId?: string | null;
            /** Format: uuid */
            protocolConsumedServiceId?: string;
            /** Format: int32 */
            contractConceptId?: number;
            contractConceptName: string | null;
            /** Format: double */
            percentValue?: number | null;
            /** Format: double */
            value?: number;
            currencyCode: string | null;
            haveDivisionFee?: boolean;
            /** Format: double */
            feeDivisionPercentage?: number;
            /** Format: double */
            readonly ownerAmount?: number;
            /** Format: double */
            readonly teamDivisionPercentage?: number;
            /** Format: double */
            readonly teamAmount?: number;
        };
        ProtocolConsumedServiceEntity: {
            /** Format: uuid */
            id?: string;
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
            status?: components["schemas"]["ProtocolConsumedServiceStatus"];
            /** Format: int32 */
            protocolId?: number | null;
            protocolName?: string | null;
            serviceName?: string | null;
            /** Format: date-time */
            serviceDueDate?: string | null;
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            addendumId?: number;
            /** Format: int32 */
            contractConceptId?: number | null;
            conceptDescription?: string | null;
            parentInstanceId?: string | null;
            instanceId: string | null;
            patientNumberInProtocol?: string | null;
            /** Format: int32 */
            stageId?: number | null;
            stageName?: string | null;
            /** Format: uuid */
            stageInternalCrossVersionId?: string | null;
            /** Format: int32 */
            emrCrossVersionId?: number | null;
            /** Format: int32 */
            quantity?: number;
            /** Format: double */
            coefficientApplied?: number;
            currencyCode: string | null;
            /** Format: double */
            unitAmount?: number;
            /** Format: double */
            amount?: number;
            /** Format: double */
            payeeAmount?: number;
            /** Format: double */
            pendingAmount?: number;
            typeOfService?: components["schemas"]["ProtocolConsumptionTypeOfServiceEnum"];
            realizedType?: components["schemas"]["ProtocolConsumptionRealizeTypeEnum"];
            originalConsumptionType?: components["schemas"]["VisitTypeEnum"];
            currentConsumptionType?: components["schemas"]["VisitTypeEnum"];
            origin?: components["schemas"]["ConsumptionOriginEnum"];
            markedToSettle?: boolean;
            markedAsPayee?: boolean;
            markedAsFlagged?: boolean;
            markedAsItemized?: boolean;
            markedAsRefundable?: boolean;
            markedAsNeedMoreInfo?: boolean;
            moreInfoComments?: string | null;
            markedAsHaveWarnings?: boolean;
            warningsComments?: string | null;
            comments?: string | null;
            markedAsTrouble?: boolean;
            troubleComments?: string | null;
            tag1?: string | null;
            tag2?: string | null;
            tag3?: string | null;
            tag4?: string | null;
            calculatingType?: components["schemas"]["ConceptCalculateTypeEnum"];
            haveOverheadIncluded?: boolean;
            /** Format: double */
            contractValue?: number;
            /** Format: double */
            overheadPercentage?: number;
            /** Format: double */
            overheadAmount?: number;
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
            /** Format: double */
            readonly pendingForOwnerAmount?: number;
            /** Format: double */
            readonly pendingWithholdingForOwnerAmount?: number;
            /** Format: double */
            totalValues?: number;
            /** Format: double */
            totalAmount?: number;
            /** Format: double */
            withHolingPercentage?: number;
            /** Format: double */
            withHolingAmount?: number;
            /** Format: double */
            totalAmountWithWithholding?: number;
            costStatus?: components["schemas"]["ProtocolConsumedServiceStatus"];
            /** Format: double */
            costAmount?: number;
            /** Format: double */
            costPayee?: number;
            /** Format: double */
            costPending?: number;
            costCurrencyCode?: string | null;
            /** Format: uuid */
            providerId?: string | null;
            providerName?: string | null;
            /** Format: uuid */
            producer?: string | null;
            producerName?: string | null;
            /** Format: uuid */
            settlementIdentifier?: string | null;
            /** Format: int32 */
            settlementId?: number | null;
            settlementName?: string | null;
            condition?: components["schemas"]["ProtocolConsumptionConditionEnum"];
            /** Format: int32 */
            medicalServiceId?: number | null;
            medicalServiceName?: string | null;
            medicalServiceCode?: string | null;
            /** Format: uuid */
            parentGroupingId?: string | null;
            /** Format: uuid */
            groupingId?: string | null;
            conceptValues?: components["schemas"]["ProtocolConsumedServiceConceptValueEntity"][] | null;
            movements?: components["schemas"]["ProtocolConsumedServicesMovementEntity"][] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ProtocolConsumedServiceStatus: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
        ProtocolConsumedServicesMovementEntity: {
            /** Format: uuid */
            id?: string;
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
            tenantId?: string | null;
            /** Format: uuid */
            protocolConsumedServiceId?: string;
            protocolConsumedService?: components["schemas"]["ProtocolConsumedServiceEntity"];
            /** Format: date-time */
            movementDate?: string;
            /** Format: int32 */
            settlementDetailId?: number;
            /** Format: int32 */
            settlementId?: number;
            /** Format: double */
            amount?: number;
            currencyCode?: string | null;
        };
        ProtocolConsumptionConceptValueViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            protocolConsumedServiceId?: string;
            /** Format: int32 */
            contractConceptId?: number;
            contractConceptName: string | null;
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
        /**
         * Format: int32
         * @enum {integer}
         */
        ProtocolConsumptionConditionEnum: 1 | 2;
        ProtocolConsumptionCreateCommandAsync: {
            /** Format: int32 */
            protocolId?: number;
            serviceName?: string | null;
            /** Format: date-time */
            serviceDueDate?: string | null;
            /** Format: int32 */
            contractConceptId?: number | null;
            conceptDescription?: string | null;
            parentInstanceId?: string | null;
            instanceId?: string | null;
            patientNumberInProtocol?: string | null;
            /** Format: int32 */
            stageId?: number | null;
            stageName?: string | null;
            /** Format: uuid */
            stageInternalCrossVersionId?: string | null;
            /** Format: int32 */
            emrCrossVersionId?: number | null;
            calculatingType?: components["schemas"]["ConceptCalculateTypeEnum"];
            currencyCode: string | null;
            /** Format: int32 */
            quantity?: number;
            /** Format: double */
            coefficientApplied?: number;
            haveOverheadIncluded?: boolean;
            /** Format: double */
            contractValue?: number;
            /** Format: double */
            overheadPercentage?: number;
            /** Format: double */
            overheadAmount?: number;
            haveFeeDivision?: boolean;
            /** Format: double */
            feeDivisionPercentage?: number;
            /** Format: double */
            ownerAmount?: number;
            /** Format: double */
            teamDivisionPercentage?: number;
            /** Format: double */
            teamAmount?: number;
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
            payeeAmount?: number;
            /** Format: double */
            pendingAmount?: number;
            /** Format: double */
            withHolingPercentage?: number;
            /** Format: double */
            withHolingAmount?: number;
            costStatus?: components["schemas"]["ProtocolConsumedServiceStatus"];
            /** Format: double */
            costAmount?: number;
            /** Format: double */
            costPayee?: number;
            /** Format: double */
            costPending?: number;
            costCurrencyCode?: string | null;
            /** Format: uuid */
            providerId?: string | null;
            providerName?: string | null;
            /** Format: uuid */
            producer?: string | null;
            producerName?: string | null;
            typeOfService?: components["schemas"]["ProtocolConsumptionTypeOfServiceEnum"];
            realizedType?: components["schemas"]["ProtocolConsumptionRealizeTypeEnum"];
            condition?: components["schemas"]["ProtocolConsumptionConditionEnum"];
            /** Format: int32 */
            medicalServiceId?: number | null;
            medicalServiceName?: string | null;
            medicalServiceCode?: string | null;
            markedToSettle?: boolean;
            markedAsPayee?: boolean;
            markedAsFlagged?: boolean;
            markedAsItemized?: boolean;
            markedAsRefundable?: boolean;
            markedAsNeedMoreInfo?: boolean;
            moreInfoComments?: string | null;
            markedAsHaveWarnings?: boolean;
            warningsComments?: string | null;
            comments?: string | null;
            tag1?: string | null;
            tag2?: string | null;
            tag3?: string | null;
            tag4?: string | null;
            origin?: components["schemas"]["ConsumptionOriginEnum"];
        };
        ProtocolConsumptionMovementCreateCommandAsync: {
            /** Format: uuid */
            protocolConsumedServiceId?: string;
            protocolConsumedService?: components["schemas"]["ProtocolConsumedServiceEntity"];
            /** Format: date-time */
            movementDate?: string;
            /** Format: int32 */
            settlementDetailId?: number;
            /** Format: int32 */
            settlementId?: number;
            /** Format: double */
            amount?: number;
            currencyCode: string | null;
        };
        ProtocolConsumptionMovementUpdateCommandAsync: {
            /** Format: uuid */
            protocolConsumedServiceId?: string;
            protocolConsumedService?: components["schemas"]["ProtocolConsumedServiceEntity"];
            /** Format: date-time */
            movementDate?: string;
            /** Format: int32 */
            settlementDetailId?: number;
            /** Format: int32 */
            settlementId?: number;
            /** Format: double */
            amount?: number;
            currencyCode: string | null;
            /** Format: uuid */
            id?: string;
        };
        ProtocolConsumptionMovementViewModel: Record<string, never>;
        ProtocolConsumptionMovementViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolConsumptionMovementViewModel"][] | null;
        };
        ProtocolConsumptionMovementViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolConsumptionMovementViewModel"];
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ProtocolConsumptionRealizeTypeEnum: 1 | 2 | 3 | 4;
        ProtocolConsumptionSyncProcessCreateCommandAsync: {
            /** Format: int32 */
            protocolId?: number;
            useMedicalPayableDefinition?: boolean;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ProtocolConsumptionSyncProcessStatusEnum: 1 | 2 | 3 | 4 | 5;
        ProtocolConsumptionSyncProcessUpdateCommandAsync: {
            /** Format: int32 */
            protocolId?: number;
            useMedicalPayableDefinition?: boolean;
            /** Format: uuid */
            id?: string;
            /** Format: date-time */
            lastSync?: string;
            status?: components["schemas"]["ProtocolConsumptionSyncProcessStatusEnum"];
            errorMessage?: string | null;
            errorStackTrace?: string | null;
        };
        ProtocolConsumptionSyncProcessViewModel: {
            /** Format: uuid */
            id?: string;
            /** Format: int32 */
            protocolId?: number;
            useMedicalPayableDefinition?: boolean;
            /** Format: date-time */
            lastSync?: string;
            status?: components["schemas"]["ProtocolConsumptionSyncProcessStatusEnum"];
            errorMessage?: string | null;
            errorStackTrace?: string | null;
        };
        ProtocolConsumptionSyncProcessViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolConsumptionSyncProcessViewModel"][] | null;
        };
        ProtocolConsumptionSyncProcessViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolConsumptionSyncProcessViewModel"];
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ProtocolConsumptionTypeOfServiceEnum: 1 | 2 | 3 | 4;
        ProtocolConsumptionUpdateCommandAsync: {
            /** Format: int32 */
            protocolId?: number;
            serviceName?: string | null;
            /** Format: date-time */
            serviceDueDate?: string | null;
            /** Format: int32 */
            contractConceptId?: number | null;
            conceptDescription?: string | null;
            parentInstanceId?: string | null;
            instanceId?: string | null;
            patientNumberInProtocol?: string | null;
            /** Format: int32 */
            stageId?: number | null;
            stageName?: string | null;
            /** Format: uuid */
            stageInternalCrossVersionId?: string | null;
            /** Format: int32 */
            emrCrossVersionId?: number | null;
            calculatingType?: components["schemas"]["ConceptCalculateTypeEnum"];
            currencyCode: string | null;
            /** Format: int32 */
            quantity?: number;
            /** Format: double */
            coefficientApplied?: number;
            haveOverheadIncluded?: boolean;
            /** Format: double */
            contractValue?: number;
            /** Format: double */
            overheadPercentage?: number;
            /** Format: double */
            overheadAmount?: number;
            haveFeeDivision?: boolean;
            /** Format: double */
            feeDivisionPercentage?: number;
            /** Format: double */
            ownerAmount?: number;
            /** Format: double */
            teamDivisionPercentage?: number;
            /** Format: double */
            teamAmount?: number;
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
            payeeAmount?: number;
            /** Format: double */
            pendingAmount?: number;
            /** Format: double */
            withHolingPercentage?: number;
            /** Format: double */
            withHolingAmount?: number;
            costStatus?: components["schemas"]["ProtocolConsumedServiceStatus"];
            /** Format: double */
            costAmount?: number;
            /** Format: double */
            costPayee?: number;
            /** Format: double */
            costPending?: number;
            costCurrencyCode?: string | null;
            /** Format: uuid */
            providerId?: string | null;
            providerName?: string | null;
            /** Format: uuid */
            producer?: string | null;
            producerName?: string | null;
            typeOfService?: components["schemas"]["ProtocolConsumptionTypeOfServiceEnum"];
            realizedType?: components["schemas"]["ProtocolConsumptionRealizeTypeEnum"];
            condition?: components["schemas"]["ProtocolConsumptionConditionEnum"];
            /** Format: int32 */
            medicalServiceId?: number | null;
            medicalServiceName?: string | null;
            medicalServiceCode?: string | null;
            markedToSettle?: boolean;
            markedAsPayee?: boolean;
            markedAsFlagged?: boolean;
            markedAsItemized?: boolean;
            markedAsRefundable?: boolean;
            markedAsNeedMoreInfo?: boolean;
            moreInfoComments?: string | null;
            markedAsHaveWarnings?: boolean;
            warningsComments?: string | null;
            comments?: string | null;
            tag1?: string | null;
            tag2?: string | null;
            tag3?: string | null;
            tag4?: string | null;
            origin?: components["schemas"]["ConsumptionOriginEnum"];
            /** Format: uuid */
            id?: string;
            status?: components["schemas"]["ProtocolConsumedServiceStatus"];
        };
        ProtocolConsumptionViewModel: {
            /** Format: uuid */
            id?: string;
            status?: components["schemas"]["ProtocolConsumedServiceStatus"];
            /** Format: int32 */
            protocolId?: number;
            serviceName?: string | null;
            /** Format: date-time */
            serviceDueDate?: string | null;
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            addendumId?: number;
            /** Format: int32 */
            contractConceptId?: number | null;
            conceptDescription?: string | null;
            parentInstanceId?: string | null;
            instanceId: string | null;
            patientNumberInProtocol?: string | null;
            /** Format: int32 */
            stageId?: number | null;
            stageName?: string | null;
            /** Format: uuid */
            stageInternalCrossVersionId?: string | null;
            /** Format: int32 */
            emrCrossVersionId?: number | null;
            calculatingType?: components["schemas"]["ConceptCalculateTypeEnum"];
            currencyCode: string | null;
            /** Format: int32 */
            quantity?: number;
            /** Format: double */
            coefficientApplied?: number;
            haveOverheadIncluded?: boolean;
            /** Format: double */
            contractValue?: number;
            /** Format: double */
            overheadPercentage?: number;
            /** Format: double */
            overheadAmount?: number;
            haveFeeDivision?: boolean;
            /** Format: double */
            feeDivisionPercentage?: number;
            /** Format: double */
            ownerAmount?: number;
            /** Format: double */
            ownerAmountWithholding?: number;
            /** Format: double */
            ownerAmountWithholdingTotal?: number;
            /** Format: double */
            teamDivisionPercentage?: number;
            /** Format: double */
            teamAmount?: number;
            /** Format: double */
            teamAmountWithholding?: number;
            /** Format: double */
            teamAmountWithholdingTotal?: number;
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
            payeeAmount?: number;
            /** Format: double */
            pendingAmount?: number;
            /** Format: double */
            withHolingPercentage?: number;
            /** Format: double */
            withHolingAmount?: number;
            /** Format: double */
            pendingForOwnerAmount?: number;
            /** Format: double */
            pendingWithholdingForOwnerAmount?: number;
            costStatus?: components["schemas"]["ProtocolConsumedServiceStatus"];
            /** Format: double */
            costAmount?: number;
            /** Format: double */
            costPayee?: number;
            /** Format: double */
            costPending?: number;
            costCurrencyCode?: string | null;
            /** Format: uuid */
            providerId?: string | null;
            providerName?: string | null;
            /** Format: uuid */
            producer?: string | null;
            producerName?: string | null;
            /** Format: uuid */
            settlementIdentifier?: string | null;
            /** Format: int32 */
            settlementId?: number | null;
            settlementName?: string | null;
            typeOfService?: components["schemas"]["ProtocolConsumptionTypeOfServiceEnum"];
            realizedType?: components["schemas"]["ProtocolConsumptionRealizeTypeEnum"];
            condition?: components["schemas"]["ProtocolConsumptionConditionEnum"];
            originalConsumptionType?: components["schemas"]["VisitTypeEnum"];
            currentConsumptionType?: components["schemas"]["VisitTypeEnum"];
            /** Format: int32 */
            medicalServiceId?: number | null;
            medicalServiceName?: string | null;
            medicalServiceCode?: string | null;
            markedToSettle?: boolean;
            markedAsPayee?: boolean;
            markedAsFlagged?: boolean;
            markedAsItemized?: boolean;
            markedAsRefundable?: boolean;
            markedAsNeedMoreInfo?: boolean;
            moreInfoComments?: string | null;
            markedAsHaveWarnings?: boolean;
            warningsComments?: string | null;
            comments?: string | null;
            markedAsTrouble?: boolean;
            troubleComments?: string | null;
            tag1?: string | null;
            tag2?: string | null;
            tag3?: string | null;
            tag4?: string | null;
            /** Format: uuid */
            parentGroupingId?: string | null;
            /** Format: uuid */
            groupingId?: string | null;
            origin?: components["schemas"]["ConsumptionOriginEnum"];
            conceptValues?: components["schemas"]["ProtocolConsumptionConceptValueViewModel"][] | null;
        };
        ProtocolConsumptionViewModelIReadOnlyListPagedResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolConsumptionViewModel"][] | null;
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
        ProtocolConsumptionViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolConsumptionViewModel"][] | null;
        };
        ProtocolConsumptionViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolConsumptionViewModel"];
        };
        ProtocolConsumptionVisitCreateCommandAsync: {
            /** Format: int32 */
            protocolVisitCrossVersionId?: number;
            /** Format: int32 */
            protocolVisitEntryId?: number;
            /** Format: int32 */
            contractStageId?: number;
            /** Format: int32 */
            protocolId?: number;
            patientNumberInProtocol: string | null;
            /** Format: date-time */
            visitDueDate?: string;
        };
        ProtocolConsumptionVisitDeleteCommandAsync: {
            /** Format: uuid */
            protocolConsumptionVisitId?: string;
        };
        ProtocolConsumptionVisitTotalCreateCommandAsync: {
            /** Format: uuid */
            protocolConsumptionVisitId?: string;
            currencyCode?: string | null;
            /** Format: double */
            totalValue?: number;
        };
        ProtocolConsumptionVisitTotalViewModel: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            protocolConsumptionVisitId?: string;
            currencyCode?: string | null;
            /** Format: double */
            totalValue?: number;
        };
        ProtocolConsumptionVisitUpdateCommandAsync: {
            /** Format: int32 */
            protocolVisitCrossVersionId?: number;
            /** Format: int32 */
            protocolVisitEntryId?: number;
            /** Format: int32 */
            contractStageId?: number;
            /** Format: int32 */
            protocolId?: number;
            patientNumberInProtocol: string | null;
            /** Format: date-time */
            visitDueDate?: string;
            /** Format: uuid */
            id?: string;
        };
        ProtocolConsumptionVisitViewModel: {
            /** Format: uuid */
            id?: string;
            /** Format: int32 */
            protocolVisitCrossVersionId?: number;
            /** Format: int32 */
            protocolVisitEntryId?: number;
            /** Format: int32 */
            contractStageId?: number;
            contractStageName?: string | null;
            /** Format: int32 */
            protocolId?: number;
            protocolName?: string | null;
            patientNumberInProtocol?: string | null;
            /** Format: date-time */
            visitDueDate?: string;
            /** Format: int32 */
            visitOrder?: number;
            totals?: components["schemas"]["ProtocolConsumptionVisitTotalViewModel"][] | null;
        };
        ProtocolConsumptionVisitViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolConsumptionVisitViewModel"][] | null;
        };
        ProtocolConsumptionVisitViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolConsumptionVisitViewModel"];
        };
        ProtocolContractViewModel: Record<string, never>;
        ProtocolContractViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolContractViewModel"][] | null;
        };
        ProtocolContractViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolContractViewModel"];
        };
        ProtocolIndicationViewModel: {
            /** Format: int32 */
            id?: number;
            conceptId?: string | null;
            description?: string | null;
        };
        ProtocolLaboratoryViewModel: {
            /** Format: int32 */
            id?: number;
            code?: string | null;
            title?: string | null;
            description?: string | null;
        };
        ProtocolPatientViewModel: {
            /** Format: int32 */
            protocolId?: number;
            numberInProtocol?: string | null;
            /** Format: int32 */
            status?: number;
            /** Format: date-time */
            addedToProtocol?: string;
            /** Format: date-time */
            endProtocol?: string | null;
        };
        ProtocolPatientViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolPatientViewModel"][] | null;
        };
        ProtocolPatientViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolPatientViewModel"];
        };
        ProtocolPhaseViewModel: {
            /** Format: int32 */
            id?: number;
            code?: string | null;
            title?: string | null;
            description?: string | null;
        };
        ProtocolPractitionerStudyTaskViewModel: {
            /** Format: int32 */
            protocolId?: number;
            /** Format: uuid */
            practitionerUserId?: string;
            /** Format: int32 */
            studyTaskId?: number;
            studyTask?: components["schemas"]["StudyTaskEntity"];
        };
        ProtocolPractitionerStudyTaskViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolPractitionerStudyTaskViewModel"][] | null;
        };
        ProtocolPractitionerViewModel: {
            /** Format: int32 */
            protocolId?: number;
            /** Format: uuid */
            practitionerUserId?: string;
            /** Format: int32 */
            studyRoleId?: number;
            studyRole?: components["schemas"]["StudyRoleEntity"];
            /** Format: date-time */
            startOfTask?: string;
            /** Format: date-time */
            endOfTask?: string | null;
            tenantId?: string | null;
        };
        ProtocolPractitionerViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolPractitionerViewModel"][] | null;
        };
        ProtocolStageViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
            stageName?: string | null;
            comments?: string | null;
            isOptional?: boolean;
            isOnSiteMandatory?: boolean;
            failSelectionEnabled?: boolean;
            /** Format: int32 */
            stageOrder?: number;
            /** Format: int32 */
            emrProtocolVisitIdRelated?: number | null;
            markAsSettleable?: boolean;
            markAsPayable?: boolean;
            /** Format: uuid */
            internalCrossVersionId?: string | null;
            flowChartVisit?: components["schemas"]["VisitViewModel"];
        };
        ProtocolStageViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolStageViewModel"][] | null;
        };
        ProtocolStatusViewModel: {
            /** Format: int32 */
            id?: number;
            code?: string | null;
            title?: string | null;
            description?: string | null;
        };
        ProtocolViewModel: {
            /** Format: int32 */
            id?: number;
            active?: boolean;
            /** Format: date-time */
            created?: string;
            /** Format: uuid */
            createdById?: string;
            /** Format: date-time */
            closed?: string | null;
            title?: string | null;
            fullTitle?: string | null;
            protocolNumber?: string | null;
            centerNumber?: string | null;
            /** Format: int32 */
            laboratoryId?: number;
            laboratoy?: components["schemas"]["ProtocolLaboratoryViewModel"];
            /** Format: int32 */
            statusId?: number;
            status?: components["schemas"]["ProtocolStatusViewModel"];
            /** Format: int32 */
            specialtyId?: number;
            specialty?: components["schemas"]["ProtocolspecialtyViewModel"];
            /** Format: int32 */
            indicationId?: number;
            indication?: components["schemas"]["ProtocolIndicationViewModel"];
            /** Format: int32 */
            phaseId?: number;
            phase?: components["schemas"]["ProtocolPhaseViewModel"];
            /** Format: int32 */
            patientsObjective?: number;
            /** Format: uuid */
            principalInvestigatorId?: string;
        };
        ProtocolViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ProtocolViewModel"][] | null;
        };
        ProtocolspecialtyViewModel: {
            /** Format: int32 */
            id?: number;
            conceptId?: string | null;
            description?: string | null;
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        ServiceCategoryCreateCommandAsync: {
            description?: string | null;
        };
        ServiceCategoryUpdateCommandAsync: {
            /** Format: uuid */
            id?: string;
            description?: string | null;
        };
        ServiceCategoryViewModel: {
            /** Format: uuid */
            id?: string;
            description?: string | null;
            /** Format: date-time */
            created?: string;
            createdBy?: string | null;
        };
        ServiceCategoryViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ServiceCategoryViewModel"][] | null;
        };
        ServiceCategoryViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ServiceCategoryViewModel"];
        };
        ServiceCreateCommandAsync: {
            /** Format: uuid */
            parentId?: string | null;
            /** Format: uuid */
            centerId?: string;
            /** Format: int32 */
            protocolId?: number | null;
            /** Format: int32 */
            stageId?: number | null;
            numberInProtocol?: string | null;
            /** Format: uuid */
            consumerId?: string | null;
            /** Format: uuid */
            providerId?: string | null;
            /** Format: uuid */
            serviceCategoryId?: string | null;
            description?: string | null;
            /** Format: int32 */
            serviceStatusId?: number;
            /** Format: date-time */
            startDate?: string;
            /** Format: date-time */
            endDate?: string | null;
            originPlace?: string | null;
            destinationPlace?: string | null;
            /** Format: double */
            estimateCost?: number;
            /** Format: double */
            finalCost?: number;
            currencyType?: string | null;
        };
        ServiceUpdateCommandAsync: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            parentId?: string | null;
            /** Format: uuid */
            centerId?: string;
            /** Format: int32 */
            protocolId?: number | null;
            /** Format: int32 */
            stageId?: number | null;
            numberInProtocol?: string | null;
            /** Format: uuid */
            consumerId?: string | null;
            /** Format: uuid */
            providerId?: string | null;
            /** Format: uuid */
            serviceCategoryId?: string | null;
            description?: string | null;
            /** Format: int32 */
            serviceStatusId?: number;
            /** Format: date-time */
            startDate?: string;
            /** Format: date-time */
            endDate?: string | null;
            originPlace?: string | null;
            destinationPlace?: string | null;
            /** Format: double */
            estimateCost?: number;
            /** Format: double */
            finalCost?: number;
            currencyType?: string | null;
        };
        ServiceViewModel: {
            /** Format: uuid */
            id?: string;
            /** Format: uuid */
            parentId?: string | null;
            /** Format: uuid */
            centerId?: string;
            /** Format: int32 */
            protocolId?: number | null;
            /** Format: int32 */
            stageId?: number | null;
            numberInProtocol?: string | null;
            /** Format: uuid */
            consumerId?: string | null;
            consumerName?: string | null;
            /** Format: uuid */
            providerId?: string | null;
            /** Format: uuid */
            serviceCategoryId?: string | null;
            serviceCategoryDescription?: string | null;
            description?: string | null;
            /** Format: int32 */
            serviceStatusId?: number;
            serviceStatusName?: string | null;
            /** Format: date-time */
            startDate?: string;
            /** Format: date-time */
            endDate?: string | null;
            originPlace?: string | null;
            destinationPlace?: string | null;
            /** Format: double */
            estimateCost?: number;
            /** Format: double */
            finalCost?: number;
            currencyType?: string | null;
            /** Format: date-time */
            created?: string;
            createdBy?: string | null;
        };
        ServiceViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ServiceViewModel"][] | null;
        };
        ServiceViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ServiceViewModel"];
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        StudyActionsEnum: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /**
         * Format: int32
         * @enum {integer}
         */
        StudyModulesEnum: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        StudyPermissionEntity: {
            /** Format: int32 */
            id?: number;
            module?: components["schemas"]["StudyModulesEnum"];
            action?: components["schemas"]["StudyActionsEnum"];
        };
        StudyRoleEntity: {
            /** Format: int32 */
            id?: number;
            code?: string | null;
            name?: string | null;
            permissions?: components["schemas"]["StudyPermissionEntity"][] | null;
        };
        StudyTaskEntity: {
            /** Format: int32 */
            id?: number;
            code?: string | null;
            title?: string | null;
            description?: string | null;
        };
        StudyTasksViewModel: {
            /** Format: int32 */
            id?: number;
            code?: string | null;
            title?: string | null;
            description?: string | null;
        };
        StudyTasksViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["StudyTasksViewModel"][] | null;
        };
        TotalAmountViewModel: {
            currencyCode: string | null;
            /** Format: double */
            totalAmount: number;
        };
        TotalAmountViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["TotalAmountViewModel"][] | null;
        };
        VisitConceptViewModel: {
            /** Format: int32 */
            protocolId?: number;
            /** Format: int32 */
            visitId?: number;
            visitTitle?: string | null;
            /** Format: int32 */
            visitOrder?: number;
            /** Format: int32 */
            patientVisitId?: number;
            /** Format: int32 */
            visitType?: number;
            numberInProtocol?: string | null;
            /** Format: int32 */
            statusInProtocol?: number;
            forms?: components["schemas"]["EmrSyncPatientFormEntity"][] | null;
        };
        VisitConceptViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["VisitConceptViewModel"];
        };
        VisitCountByDateViewModel: {
            /** Format: date-time */
            date?: string;
            /** Format: int32 */
            visitCount?: number;
        };
        VisitCountByDateViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["VisitCountByDateViewModel"][] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        VisitTypeEnum: 0 | 1 | 2;
        VisitViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            crossVersionId?: number;
            /** Format: int32 */
            protocolId?: number;
            /** Format: int32 */
            order?: number;
            title?: string | null;
            /** Format: int32 */
            type?: number | null;
            /** Format: int32 */
            offset?: number | null;
            /** Format: int32 */
            offsetType?: number | null;
            /** Format: int32 */
            offsetFrom?: number | null;
            /** Format: int32 */
            windowPos?: number | null;
            /** Format: int32 */
            windowNeg?: number | null;
            baseline?: boolean;
            /** Format: int32 */
            stage?: number | null;
            notes?: string | null;
            /** Format: double */
            version?: number | null;
            versionComments?: string | null;
            /** Format: int32 */
            state?: number | null;
        };
        VisitViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["VisitViewModel"][] | null;
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
    GetAllConsumers: {
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
                    "text/plain": components["schemas"]["ConsumerViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ConsumerViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ConsumerViewModelIReadOnlyListResponse"];
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
    CreateConsumer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ConsumerCreateCommandAsync"];
                "text/json": components["schemas"]["ConsumerCreateCommandAsync"];
                "application/*+json": components["schemas"]["ConsumerCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ConsumerViewModelResponse"];
                    "application/json": components["schemas"]["ConsumerViewModelResponse"];
                    "text/json": components["schemas"]["ConsumerViewModelResponse"];
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
    GetConsumerById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
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
                    "text/plain": components["schemas"]["ConsumerViewModelResponse"];
                    "application/json": components["schemas"]["ConsumerViewModelResponse"];
                    "text/json": components["schemas"]["ConsumerViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    UpdateConsumer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ConsumerUpdateCommandAsync"];
                "text/json": components["schemas"]["ConsumerUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ConsumerUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ConsumerViewModelResponse"];
                    "application/json": components["schemas"]["ConsumerViewModelResponse"];
                    "text/json": components["schemas"]["ConsumerViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    DeleteConsumer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
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
                    "text/plain": components["schemas"]["GuidResponse"];
                    "application/json": components["schemas"]["GuidResponse"];
                    "text/json": components["schemas"]["GuidResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetProtocols: {
        parameters: {
            query?: {
                PractitionerId?: string;
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
                    "text/plain": components["schemas"]["ProtocolViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolViewModelIReadOnlyListResponse"];
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
    GetProtocolById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Protocol identifier */
                ProtocolId: number;
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
                    "text/plain": components["schemas"]["ProtocolViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolViewModelIReadOnlyListResponse"];
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
    GetSponsorIdByProtocolId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Protocol identifier */
                ProtocolId: number;
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
                    "text/plain": components["schemas"]["Int32NullableResponse"];
                    "application/json": components["schemas"]["Int32NullableResponse"];
                    "text/json": components["schemas"]["Int32NullableResponse"];
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
    GetVisitConcepts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Protocol identifier */
                protocolId: number;
                /** @description Cross-version identifier of the visit */
                crossVersionId: number;
                /** @description Patient number in protocol */
                numberInProtocol: string;
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
                    "text/plain": components["schemas"]["VisitConceptViewModelResponse"];
                    "application/json": components["schemas"]["VisitConceptViewModelResponse"];
                    "text/json": components["schemas"]["VisitConceptViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetPatientVisitsByProtocolId: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PatientVisitViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PatientVisitViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PatientVisitViewModelIReadOnlyListResponse"];
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
    GetVisitByPatientId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PatientId: string;
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
                    "text/plain": components["schemas"]["PatientVisitViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PatientVisitViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PatientVisitViewModelIReadOnlyListResponse"];
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
    GetPatientVisitById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PatientVisitId: number;
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
                    "text/plain": components["schemas"]["ProtocolViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolViewModelIReadOnlyListResponse"];
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
    ExportVisitsByDateRange: {
        parameters: {
            query?: {
                DateFrom?: string;
                DateTo?: string;
                lang?: string;
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
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
    GetAllConsumptionsByPractitionerId: {
        parameters: {
            query?: {
                Practitioners?: string[];
                Protocols?: number[];
                Concepts?: number[];
                Currencies?: string[];
                StagesName?: string[];
                Patients?: string[];
                Statuses?: number[];
                DateFrom?: string;
                DateTo?: string;
                SearchText?: string;
                PageNumber?: number;
                PageSize?: number;
            };
            header?: never;
            path: {
                PractitionerId: string;
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
                    "text/plain": components["schemas"]["PractitionerConsumptionViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionViewModelIReadOnlyListResponse"];
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
    GetAllPractitionerConsumptionsByStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerId: string;
                status: components["schemas"]["ProtocolConsumedServiceStatus"];
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
                    "text/plain": components["schemas"]["PractitionerConsumptionViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionViewModelIReadOnlyListResponse"];
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
    GetPractitionerConsumptionById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerConsumptionId: string;
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
                    "text/plain": components["schemas"]["PractitionerConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionViewModelResponse"];
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
    DeletePractitionerConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerConsumptionId: string;
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
    ChangePractitionerConsumptionStatus: {
        parameters: {
            query?: {
                newStatus?: components["schemas"]["ProtocolConsumedServiceStatus"];
                applyToAll?: boolean;
            };
            header?: never;
            path: {
                PractitionerConsumptionId: string;
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
    UpdatePractitionerConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PractitionerConsumptionUpdateCommandAsync"];
                "text/json": components["schemas"]["PractitionerConsumptionUpdateCommandAsync"];
                "application/*+json": components["schemas"]["PractitionerConsumptionUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionViewModelResponse"];
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
    AddPractitionerConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PractitionerConsumptionCreateCommandAsync"];
                "text/json": components["schemas"]["PractitionerConsumptionCreateCommandAsync"];
                "application/*+json": components["schemas"]["PractitionerConsumptionCreateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionViewModelResponse"];
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
    ChangePractitionerConsumptionAmount: {
        parameters: {
            query?: {
                newAmount?: number;
                currency?: string;
            };
            header?: never;
            path: {
                ProtocolConsumptionId: string;
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
                    "text/plain": components["schemas"]["PractitionerConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionViewModelResponse"];
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
    ChangeTypeOfPractitionerConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionId: string;
                newType: components["schemas"]["VisitTypeEnum"];
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
                    "text/plain": components["schemas"]["PractitionerConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionViewModelResponse"];
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
    AssignPractitionerToConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerConsumptionId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    ExportConsumptionsByPractitionerId: {
        parameters: {
            query?: {
                practitionerName?: string;
                Practitioners?: string[];
                Protocols?: number[];
                Concepts?: number[];
                Currencies?: string[];
                StagesName?: string[];
                Patients?: string[];
                Statuses?: number[];
                DateFrom?: string;
                DateTo?: string;
                SearchText?: string;
                PageNumber?: number;
                PageSize?: number;
            };
            header?: never;
            path: {
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
                    "text/plain": components["schemas"]["FileContentResultResponse"];
                    "application/json": components["schemas"]["FileContentResultResponse"];
                    "text/json": components["schemas"]["FileContentResultResponse"];
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
    LinkPractitionerConsumptionToSettlement: {
        parameters: {
            query?: {
                SettlementIdentifier?: string;
                SettlementId?: number;
                SettlementName?: string;
            };
            header?: never;
            path: {
                PractitionerConsumptionId: string;
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
                    "text/plain": components["schemas"]["GuidResponse"];
                    "application/json": components["schemas"]["GuidResponse"];
                    "text/json": components["schemas"]["GuidResponse"];
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
    UnlinkPractitionerConsumptionsFromSettlement: {
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
    GetALlSyncProcessByPractitioner: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerConsumptionSyncProcessViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionSyncProcessViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionSyncProcessViewModelIReadOnlyListResponse"];
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
    GetPractitionerSyncProcessBySyncProcessById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerConsumptionSyncProcessId: string;
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
                    "text/plain": components["schemas"]["PractitionerConsumptionSyncProcessViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionSyncProcessViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionSyncProcessViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    DeletePractitionerSyncProcess: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PractitionerConsumptionSyncProcessId: string;
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
            /** @description Not Found */
            404: {
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
    GetLastPractitionerSyncProcess: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerConsumptionSyncProcessViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionSyncProcessViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionSyncProcessViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    UpdatePractitionerSyncProcess: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PractitionerConsumptionSyncProcessUpdateCommandAsync"];
                "text/json": components["schemas"]["PractitionerConsumptionSyncProcessUpdateCommandAsync"];
                "application/*+json": components["schemas"]["PractitionerConsumptionSyncProcessUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerConsumptionSyncProcessViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerConsumptionSyncProcessViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerConsumptionSyncProcessViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    CreatePractitionerSyncProcess: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PractitionerConsumptionSyncProcessCreateCommandAsync"];
                "text/json": components["schemas"]["PractitionerConsumptionSyncProcessCreateCommandAsync"];
                "application/*+json": components["schemas"]["PractitionerConsumptionSyncProcessCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["GuidResponse"];
                    "application/json": components["schemas"]["GuidResponse"];
                    "text/json": components["schemas"]["GuidResponse"];
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
    GetAllConsumptionsByProtocolId: {
        parameters: {
            query?: {
                Practitioners?: string[];
                Concepts?: number[];
                Currencies?: string[];
                StagesName?: string[];
                Patients?: string[];
                Statuses?: number[];
                DateFrom?: string;
                DateTo?: string;
                ignoreVisitConsumption?: boolean;
                showGroupedByVisit?: boolean;
                GroupId?: string;
                SearchText?: string;
                PageNumber?: number;
                PageSize?: number;
            };
            header?: never;
            path: {
                ProtocolId: number;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListPagedResponse"];
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
    GetAllProtocolConsumptionsByStatus: {
        parameters: {
            query?: {
                includeGrouped?: boolean;
            };
            header?: never;
            path: {
                ProtocolId: number;
                StatusId: number;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
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
    GetAllProtocolConsumptionsByStageId: {
        parameters: {
            query?: {
                PatientNumberInProtocol?: string;
            };
            header?: never;
            path: {
                ProtocolId: number;
                StageId: number;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
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
    GetTotalsByProtocol: {
        parameters: {
            query?: {
                status?: components["schemas"]["ProtocolConsumedServiceStatus"];
            };
            header?: never;
            path: {
                ProtocolId: number;
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
                    "text/plain": components["schemas"]["TotalAmountViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["TotalAmountViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["TotalAmountViewModelIReadOnlyListResponse"];
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
    GetTotalWithholdingByProtocol: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["TotalAmountViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["TotalAmountViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["TotalAmountViewModelIReadOnlyListResponse"];
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
    GetConsumptionsByProvider: {
        parameters: {
            query?: {
                Practitioners?: string[];
                Concepts?: number[];
                Currencies?: string[];
                StagesName?: string[];
                Patients?: string[];
                Statuses?: number[];
                DateFrom?: string;
                DateTo?: string;
                ignoreVisitConsumption?: boolean;
                showGroupedByVisit?: boolean;
                GroupId?: string;
                SearchText?: string;
                PageNumber?: number;
                PageSize?: number;
                ProtocolId?: number;
            };
            header?: never;
            path: {
                ProviderId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
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
    GetConsumptionById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    DeleteProtocolConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionId: string;
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
    ChangeProtocolConsumptionStatus: {
        parameters: {
            query?: {
                newStatus?: components["schemas"]["ProtocolConsumedServiceStatus"];
                applyToAll?: boolean;
            };
            header?: never;
            path: {
                ProtocolConsumptionId: string;
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
    UpdateProtocolConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionUpdateCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    AddProtocolConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionCreateCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionCreateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    ChangeProtocolConsumptionAmount: {
        parameters: {
            query?: {
                newAmount?: number;
                currency?: string;
            };
            header?: never;
            path: {
                ProtocolConsumptionId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    AssignConceptToConsumption: {
        parameters: {
            query?: {
                ChangeAll?: boolean;
            };
            header?: never;
            path: {
                ProtocolConsumptionId: string;
                ConceptId: number;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelIReadOnlyListResponse"];
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
    AssignMedicalServiceToConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    AssignProducerToConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionId: string;
                ProducerId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    AssignProviderToConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionId: string;
                providerId: number;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    ChangeVisitOfConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionId: string;
                StageId: number;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    ChangeTypeOfConsumption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionId: string;
                newType: components["schemas"]["VisitTypeEnum"];
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    ExportAllConsumptionsByProtocolId: {
        parameters: {
            query?: {
                Practitioners?: string[];
                Concepts?: number[];
                Currencies?: string[];
                StagesName?: string[];
                Patients?: string[];
                Statuses?: number[];
                DateFrom?: string;
                DateTo?: string;
                ignoreVisitConsumption?: boolean;
                showGroupedByVisit?: boolean;
                GroupId?: string;
                SearchText?: string;
                PageNumber?: number;
                PageSize?: number;
            };
            header?: never;
            path: {
                ProtocolId: number;
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
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
    SetConsumptionAsProcedure: {
        parameters: {
            query?: {
                isProcedure?: boolean;
                changeAll?: boolean;
            };
            header?: never;
            path: {
                ProtocolConsumptionId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    SetConsumptionAsAdditional: {
        parameters: {
            query?: {
                isAdditional?: boolean;
                changeAll?: boolean;
            };
            header?: never;
            path: {
                ProtocolConsumptionId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionViewModelResponse"];
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
    GetAllConsumptionMovementsByConsumptionId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionMovementViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionMovementViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionMovementViewModelIReadOnlyListResponse"];
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
    GetConsumptionMovementById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ServiceConsumedMovementId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionMovementViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionMovementViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionMovementViewModelResponse"];
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
    DeleteProtocolConsumptionMovement: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ServiceConsumedMovementId: string;
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
        };
    };
    UpdateProtocolConsumptionMovement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionMovementUpdateCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionMovementUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionMovementUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolConsumptionMovementViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionMovementViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionMovementViewModelResponse"];
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
    AddProtocolConsumptionMovement: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionMovementCreateCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionMovementCreateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionMovementCreateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolConsumptionMovementViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionMovementViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionMovementViewModelResponse"];
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
    GetALlSyncProcessByProtocol: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolConsumptionSyncProcessViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionSyncProcessViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionSyncProcessViewModelIReadOnlyListResponse"];
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
    GetBySyncProcessById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionSyncProcessId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionSyncProcessViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionSyncProcessViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionSyncProcessViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    DeleteSyncProcess: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolConsumptionSyncProcessId: string;
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
            /** @description Not Found */
            404: {
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
    GetLastSyncProcess: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolConsumptionSyncProcessViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionSyncProcessViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionSyncProcessViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    UpdateSyncProcess: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionSyncProcessUpdateCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionSyncProcessUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionSyncProcessUpdateCommandAsync"];
            };
        };
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
            /** @description Not Found */
            404: {
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
    CreateSyncProcess: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionSyncProcessCreateCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionSyncProcessCreateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionSyncProcessCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["GuidResponse"];
                    "application/json": components["schemas"]["GuidResponse"];
                    "text/json": components["schemas"]["GuidResponse"];
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
    GetProtocolConsumptionVisits: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolConsumptionVisitViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionVisitViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionVisitViewModelIReadOnlyListResponse"];
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
    GetProtocolConsumptionVisitById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                visitId: string;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
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
    GetProtocolConsumptionVisitByProtocolAndStage: {
        parameters: {
            query?: {
                PatientNumberInProtocol?: string;
            };
            header?: never;
            path: {
                ProtocolId: number;
                StageId: number;
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
                    "text/plain": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
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
    UpdateProtocolVisit: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionVisitUpdateCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionVisitUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionVisitUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
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
    CreateProtocolVisit: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionVisitCreateCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionVisitCreateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionVisitCreateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
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
    DeleteProtocolVisit: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionVisitDeleteCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionVisitDeleteCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionVisitDeleteCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolConsumptionVisitViewModelResponse"];
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
    LinkConsumptionToVisit: {
        parameters: {
            query?: {
                LinkAll?: boolean;
            };
            header?: never;
            path: {
                ConsumptionId: string;
                ConsumptionVisitId: string;
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
    UnLinkConsumptionToVisit: {
        parameters: {
            query?: {
                UnlinkAll?: boolean;
            };
            header?: never;
            path: {
                ConsumptionId: string;
                ConsumptionVisitId: string;
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
    GetProtocolConsumptionVisitTotals: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolVisitId: string;
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
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetProtocolConsumptionVisitTotalById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                VisitTotalId: string;
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
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    DeleteProtocolConsumptionVisitTotals: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                VisitTotalId: string;
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
                content?: never;
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    UpdateProtocolConsumptionVisitTotals: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionVisitTotalCreateCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionVisitTotalCreateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionVisitTotalCreateCommandAsync"];
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
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    CreateProtocolConsumptionVisitTotals: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ProtocolConsumptionVisitTotalCreateCommandAsync"];
                "text/json": components["schemas"]["ProtocolConsumptionVisitTotalCreateCommandAsync"];
                "application/*+json": components["schemas"]["ProtocolConsumptionVisitTotalCreateCommandAsync"];
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
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
                };
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    GetProtocolContracts: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolContractViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolContractViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolContractViewModelIReadOnlyListResponse"];
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
    GetProtocolContractById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolContractId: number;
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
                    "text/plain": components["schemas"]["ProtocolContractViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolContractViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolContractViewModelResponse"];
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
    SetEffectiveDateStart: {
        parameters: {
            query?: {
                effectiveDateStart?: string;
                effectiveDateEnd?: string;
            };
            header?: never;
            path: {
                ProtocolContractId: number;
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
                    "text/plain": components["schemas"]["ProtocolContractViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolContractViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolContractViewModelResponse"];
                };
            };
            /** @description No Content */
            204: {
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
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
    AddProtocolContract: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["AssociateContractToProtocolCommandAsync"];
                "text/json": components["schemas"]["AssociateContractToProtocolCommandAsync"];
                "application/*+json": components["schemas"]["AssociateContractToProtocolCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolContractViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolContractViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolContractViewModelResponse"];
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
    GetProtocolPatients: {
        parameters: {
            query?: {
                ProtocolId?: number;
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
                    "text/plain": components["schemas"]["ProtocolPatientViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolPatientViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolPatientViewModelIReadOnlyListResponse"];
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
    GetProtocolPatientsByProtocolId: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolPatientViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolPatientViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolPatientViewModelIReadOnlyListResponse"];
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
    GetProtocolPatientByMedicalRecordNumber: {
        parameters: {
            query?: {
                NumberInProtocol?: string;
            };
            header?: never;
            path: {
                ProtocolId: number;
                MedicalRecordNumber: string;
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
                    "text/plain": components["schemas"]["ProtocolPatientViewModelResponse"];
                    "application/json": components["schemas"]["ProtocolPatientViewModelResponse"];
                    "text/json": components["schemas"]["ProtocolPatientViewModelResponse"];
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
    GetProtocolPatientByNumberInProtocol: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolId: number;
                NumberInProtocol: string;
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
                    "text/plain": components["schemas"]["ProtocolPatientViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolPatientViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolPatientViewModelIReadOnlyListResponse"];
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
    GetPractitionersByProtocol: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolPractitionerViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolPractitionerViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolPractitionerViewModelIReadOnlyListResponse"];
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
    GetProtocolPractitionerById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolId: number;
                PractitionerId: string;
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
                    "text/plain": components["schemas"]["ProtocolPractitionerViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolPractitionerViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolPractitionerViewModelIReadOnlyListResponse"];
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
    GetVisitsByPractitioner: {
        parameters: {
            query?: {
                DateFrom?: string;
                DateTo?: string;
            };
            header?: never;
            path: {
                ProtocolId: number;
                PractitionerId: string;
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
                    "text/plain": components["schemas"]["PatientVisitViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PatientVisitViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PatientVisitViewModelIReadOnlyListResponse"];
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
    GetVisitsCountByPractitioner: {
        parameters: {
            query?: {
                DateFrom?: string;
                DateTo?: string;
                ProtocolsId?: number[];
            };
            header?: never;
            path: {
                PractitionerId: string;
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
                    "text/plain": components["schemas"]["VisitCountByDateViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["VisitCountByDateViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["VisitCountByDateViewModelIReadOnlyListResponse"];
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
    ExportVisitsByPractitionerToPdf: {
        parameters: {
            query?: {
                /** @description Date from */
                DateFrom?: string;
                /** @description Date to */
                DateTo?: string;
            };
            header?: never;
            path: {
                /** @description Practitioner identifier */
                PractitionerId: string;
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
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
    ExportVisitsByPractitionerToExcel: {
        parameters: {
            query?: {
                /** @description Date from */
                DateFrom?: string;
                /** @description Date to */
                DateTo?: string;
            };
            header?: never;
            path: {
                /** @description Practitioner identifier */
                PractitionerId: string;
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
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
    ExportVisitsByProtocolToExcel: {
        parameters: {
            query?: {
                /** @description Date from */
                DateFrom?: string;
                /** @description Date to */
                DateTo?: string;
            };
            header?: never;
            path: {
                /** @description Protocol identifier */
                ProtocolId: number;
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
                    "text/plain": string;
                    "application/json": string;
                    "text/json": string;
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
    GetPractitionersStudyTasksByProtocol: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolPractitionerStudyTaskViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolPractitionerStudyTaskViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolPractitionerStudyTaskViewModelIReadOnlyListResponse"];
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
    GetProtocolPractitionerStudyTaskById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProtocolId: number;
                PractitionerId: string;
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
                    "text/plain": components["schemas"]["ProtocolPractitionerStudyTaskViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolPractitionerStudyTaskViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolPractitionerStudyTaskViewModelIReadOnlyListResponse"];
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
    GetAllServices: {
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
                    "text/plain": components["schemas"]["ServiceViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ServiceViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ServiceViewModelIReadOnlyListResponse"];
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
    CreateService: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ServiceCreateCommandAsync"];
                "text/json": components["schemas"]["ServiceCreateCommandAsync"];
                "application/*+json": components["schemas"]["ServiceCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ServiceViewModelResponse"];
                    "application/json": components["schemas"]["ServiceViewModelResponse"];
                    "text/json": components["schemas"]["ServiceViewModelResponse"];
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
    GetServiceById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
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
                    "text/plain": components["schemas"]["ServiceViewModelResponse"];
                    "application/json": components["schemas"]["ServiceViewModelResponse"];
                    "text/json": components["schemas"]["ServiceViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    UpdateService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ServiceUpdateCommandAsync"];
                "text/json": components["schemas"]["ServiceUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ServiceUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ServiceViewModelResponse"];
                    "application/json": components["schemas"]["ServiceViewModelResponse"];
                    "text/json": components["schemas"]["ServiceViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    DeleteService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
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
                    "text/plain": components["schemas"]["GuidResponse"];
                    "application/json": components["schemas"]["GuidResponse"];
                    "text/json": components["schemas"]["GuidResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetServicesByConsumerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                consumerId: string;
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
                    "text/plain": components["schemas"]["ServiceViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ServiceViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ServiceViewModelIReadOnlyListResponse"];
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
    GetAllServiceCategories: {
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
                    "text/plain": components["schemas"]["ServiceCategoryViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ServiceCategoryViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ServiceCategoryViewModelIReadOnlyListResponse"];
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
    CreateServiceCategory: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ServiceCategoryCreateCommandAsync"];
                "text/json": components["schemas"]["ServiceCategoryCreateCommandAsync"];
                "application/*+json": components["schemas"]["ServiceCategoryCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ServiceCategoryViewModelResponse"];
                    "application/json": components["schemas"]["ServiceCategoryViewModelResponse"];
                    "text/json": components["schemas"]["ServiceCategoryViewModelResponse"];
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
    GetServiceCategoryById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
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
                    "text/plain": components["schemas"]["ServiceCategoryViewModelResponse"];
                    "application/json": components["schemas"]["ServiceCategoryViewModelResponse"];
                    "text/json": components["schemas"]["ServiceCategoryViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    UpdateServiceCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ServiceCategoryUpdateCommandAsync"];
                "text/json": components["schemas"]["ServiceCategoryUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ServiceCategoryUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ServiceCategoryViewModelResponse"];
                    "application/json": components["schemas"]["ServiceCategoryViewModelResponse"];
                    "text/json": components["schemas"]["ServiceCategoryViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    DeleteServiceCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
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
                    "text/plain": components["schemas"]["GuidResponse"];
                    "application/json": components["schemas"]["GuidResponse"];
                    "text/json": components["schemas"]["GuidResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    GetStudyTasks: {
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
                    "text/plain": components["schemas"]["StudyTasksViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["StudyTasksViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["StudyTasksViewModelIReadOnlyListResponse"];
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
    GetStudyTaskById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Task indetifier */
                StudyTaskId: number;
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
                    "text/plain": components["schemas"]["StudyTasksViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["StudyTasksViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["StudyTasksViewModelIReadOnlyListResponse"];
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
    GetVisitsByProtocol: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["VisitViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["VisitViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["VisitViewModelIReadOnlyListResponse"];
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
    GetVisitsFullByProtocol: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ProtocolStageViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ProtocolStageViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ProtocolStageViewModelIReadOnlyListResponse"];
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
    GetProtocolVisitById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                VisitId: number;
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
                    "text/plain": components["schemas"]["VisitViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["VisitViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["VisitViewModelIReadOnlyListResponse"];
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
