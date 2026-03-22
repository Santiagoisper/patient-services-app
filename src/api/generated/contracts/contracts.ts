export interface paths {
    "/contracts/{ContractID}/commissionconcepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract concepts */
        get: operations["GetContractCommissionConcepts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/commissionconcepts/{CommissionConceptId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Contract Concept by id */
        get: operations["GetContractCommissionConceptById"];
        put?: never;
        post?: never;
        delete: operations["DeleteContractCommissionConcept"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/commissionconcepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Contract Concept */
        put: operations["UpdateContractCommissionConcept"];
        /** Create new Contract Concept */
        post: operations["AddContractCommisionConcept"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/{contractConceptId}/branches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all concept branches for a specific contract concept. */
        get: operations["GetConceptBranchesByContractConceptId"];
        put?: never;
        /** Create a new concept branch association. */
        post: operations["CreateConceptBranch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/branches/{conceptBranchId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a specific concept branch by its ID. */
        get: operations["GetConceptBranchById"];
        /** Update an existing concept branch. */
        put: operations["UpdateConceptBranch"];
        post?: never;
        /** Delete a concept branch by its ID. */
        delete: operations["DeleteConceptBranch"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Contract Access */
        get: operations["GetContractAccess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/access/{ContractAccessId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Contract Access by id */
        get: operations["GetContractAccessById"];
        put?: never;
        post?: never;
        /** Delete a contract addendum */
        delete: operations["DeleteContractAccess"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update a contract access */
        put: operations["UpdateContractAccess"];
        /** Create a new contract access */
        post: operations["CreateContractAccess"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/addendums": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get contract addendums by contract id */
        get: operations["GetContractAddendums"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/addendums/{ContractAddendumId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get contract addendum by id */
        get: operations["GetContractAddendumById"];
        put?: never;
        post?: never;
        /** Delete a contract addendum */
        delete: operations["DeleteContractAddendum"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/addendums": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update a contract addendum */
        put: operations["UpdateContractAddendum"];
        /** Create a new contract addendum */
        post: operations["CreateContractAddendum"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/addendums/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Clone addendum */
        post: operations["CloneContractAddendumById"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/branches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract branch by contract Id */
        get: operations["GetContractBranches"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/addendums/{AddendumId}/branches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract branch by contract Addendum Id */
        get: operations["GetContractAddendumBranches"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/branches/{BranchId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Contract Concept by id */
        get: operations["GetContractBranchById"];
        put?: never;
        post?: never;
        /** Delete Contract branch */
        delete: operations["DeleteContractBranch"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/branches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Contract branch */
        put: operations["UpdateContractBranch"];
        /** Create new Contract branch */
        post: operations["AddContractBranch"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/commissionagent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Contract Commission Agent */
        get: operations["GetAgents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/commissionagent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Agent by Associated Contract Id */
        get: operations["GetAgentsByContractAssociated"];
        /** Delete agent */
        put: operations["UpdateAgent"];
        /** Create new Agent */
        post: operations["AddAgent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/commissionagent/{AgentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Agent by id */
        get: operations["GetAgentById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/commissionagent/{PractitionerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Agent by Practitioner Id */
        get: operations["GetAgentByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/commissionagents/{AgentId}/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Contract Commission Agent Concepts */
        get: operations["GetCommissionAgentConceptsByAgentId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/commissionagents/{PractitionerID}/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Contract Commission Agent Concepts */
        get: operations["GetCommissionAgentConceptsByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/commissionagents/concepts/{ConceptId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Concept by id */
        get: operations["GetCommissionAgentConceptById"];
        put?: never;
        post?: never;
        /** Delete Concept */
        delete: operations["RemoveConcept"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/commissionagents/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["UpdateCommissionAgentConcept"];
        /** Create new Concept */
        post: operations["AddConcept"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractID}/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract concepts */
        get: operations["GetContractConcept"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/addendum/{AddendumId}/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract concepts */
        get: operations["GetContractAddendumConcept"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/addendums/{AddendumId}/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract addendum concepts */
        get: operations["GetContractAddendumConcepts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/{ConceptId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Contract Concept by id */
        get: operations["GetContractConceptById"];
        put?: never;
        post?: never;
        delete: operations["DeleteContractConcept"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/{ContractConceptId}/patent-concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract addendum concepts */
        get: operations["GetParentConceptsByConceptId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Contract Concept */
        put: operations["UpdateContractConcept"];
        /** Create new Contract Concept */
        post: operations["AddContractConcept"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/{ContractConceptId}/associate-visit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate a visit concept with a contract concept */
        post: operations["AssociateVisitConcept"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/{ContractConceptId}/disassociate-visit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Disassociate a visit concept from a contract concept */
        post: operations["DisassociateVisitConcept"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractID}/concepts/applicable-visit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all applicable contract concepts for a visit (filtered by optional StageId or StageType). */
        get: operations["GetAllApplicableConceptsByVisit"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/{ContractConceptId}/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract concepts concepts */
        get: operations["GetContractConceptConcepts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/concepts/{ContractConceptConceptId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Contract Concept by id */
        get: operations["GetContractConceptConceptById"];
        put?: never;
        post?: never;
        /** Delete Contract Concept */
        delete: operations["DeleteContractConceptConcept"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/concepts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["UpdateContractConceptConcept"];
        /** Create new Contract Concept */
        post: operations["AddContractConceptConcept"];
        delete: operations["DeleteContractConceptConceptByRelationship"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{contractId}/concepts/Relationship": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all ContractConceptFormRelationships for a specific contract. */
        get: operations["GetContractConceptRelationship"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{contractId}/concepts/Relationship/minimal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get minimal relationships (distinct by FormConcept) for a specific contract. */
        get: operations["GetContractConceptRelationshipMinimal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/Relationship/{ConceptRelationshipId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Gets a ContractConceptFormRelationship by its ID. */
        get: operations["GetContractConceptRelationshipById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/concepts/Relationship": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Creates a new ContractConceptFormRelationship. */
        post: operations["CreateContractConceptRelationShip"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/Relationship": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Updates an existing ContractConceptFormRelationship. */
        put: operations["UpdateContractConceptRelationShip"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/Relationship/{conceptRelationshipId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Deletes a ContractConceptFormRelationship by its ID. */
        delete: operations["DeleteContractConceptRelationShip"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/{ContractConceptId}/paymentschedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Contract Concept Payment Schedules by Contract Concept Id */
        get: operations["GetContractConceptPaymentSchedule"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/paymentschedule/{ConceptPaymentScheduleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get concept payment schedule by id */
        get: operations["GetContractConceptPaymentScheduleById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/paymentschedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Concept Payment Schedule */
        put: operations["UpdateContractConceptPaymentSchedule"];
        /** Create new Contract Concept payment schedule */
        post: operations["AddContractConceptPaymentSchedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/concepts/paymentschedule/{ContractConceptPaymentScheduleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Contract Concept payment schedule */
        delete: operations["DeleteContractPaymentSchedule"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/cycles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract cycles by contract Id */
        get: operations["GetContractCycles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/addendums/{AddendumId}/cycles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all cycles by contract addendum Id */
        get: operations["GetContractAddendumCycles"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/cycles/{CycleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Contract Concept by id */
        get: operations["GetContractCycleById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/cycles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Contract Cycle */
        put: operations["UpdateContractCycle"];
        /** Create new Contract Cycle */
        post: operations["AddContractCycle"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/cycles/{ContractCycleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Contract Cycle */
        delete: operations["DeleteContractCycle"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all files by contract Id */
        get: operations["GetContractFiles"];
        put?: never;
        /** Upload files for a contract */
        post: operations["UploadContractFiles"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/files/{FileId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get contract file by id */
        get: operations["GetContractFileById"];
        put?: never;
        post?: never;
        /** Delete a contract file */
        delete: operations["DeleteContractFile"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update a contract file */
        put: operations["UpdateContractFile"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/files/{FileId}/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Download a contract file */
        get: operations["DownloadContractFile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create IA import process for a contract */
        post: operations["CreateImportContractProcess"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/import/last": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get last IA import process for a contract */
        get: operations["GetLastImportContractProcess"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/import/{ProcessId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get IA import process by its Id */
        get: operations["GetImportContractProcessById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get contracts */
        get: operations["GetContracts"];
        /** Update Contract info */
        put: operations["UpdateContract"];
        /** Create new Practitioner contract */
        post: operations["CreateContract"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get contract by Id */
        get: operations["GetContractById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/protocol/{ProtocolId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get contract by Protocol Id */
        get: operations["GetContractByProtocolId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/practitioner/{PractitionerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get contract by Practitioner Id */
        get: operations["GetContractByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Clone contract */
        post: operations["CloneContractById"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{contractId}/setstart": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set Validity date Start of Contract */
        post: operations["SetContractValidityDateStart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{contractId}/setend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set Validity date end of Contract */
        post: operations["SetContractValidityDateEnd"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractId}/feedivision/{FeeDivisionValue}": {
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
        patch: operations["UpdateFeeDivisionContract"];
        trace?: never;
    };
    "/contracts/{ContractID}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["DeleteContract"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/stages/{ContractStageId}/items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetContractStageItems"];
        put?: never;
        post: operations["AddContractStageItem"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/stages/{ContractStageId}/items/{StageItemId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetContractStageItemById"];
        put: operations["UpdateContractStageItem"];
        post?: never;
        delete: operations["DeleteContractStageItem"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/{ContractID}/stages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contracts stages */
        get: operations["GetContractStages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/addendums/{AddendumID}/stages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract stages by contract Addendum Id */
        get: operations["GetContractAddendumStages"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/stages/{StageId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Contract stages by id */
        get: operations["GetContractStageById"];
        put?: never;
        post?: never;
        /** Delete Contract stages */
        delete: operations["DeleteContractStage"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/stages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Contract stages */
        put: operations["UpdateContractStage"];
        /** Create new Contract stages */
        post: operations["AddContractStage"];
        delete?: never;
        options?: never;
        head?: never;
        /** Link Stage to a protocol visit */
        patch: operations["ContractStageLinkToVisit"];
        trace?: never;
    };
    "/contracts/stages/types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all contract stages types */
        get: operations["GetContractStagesTypes"];
        put?: never;
        /** Create a new contract stage type */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateContractStageTypeCommand"];
                    "text/json": components["schemas"]["CreateContractStageTypeCommand"];
                    "application/*+json": components["schemas"]["CreateContractStageTypeCommand"];
                };
            };
            responses: {
                /** @description Created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["Int32Response"];
                        "application/json": components["schemas"]["Int32Response"];
                        "text/json": components["schemas"]["Int32Response"];
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
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/stages/types/{StageTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get contract stages type by id */
        get: operations["GetContractStagesTypeById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contracts/stages/types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update an existing contract stage type */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: number;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["UpdateContractStageTypeCommand"];
                    "text/json": components["schemas"]["UpdateContractStageTypeCommand"];
                    "application/*+json": components["schemas"]["UpdateContractStageTypeCommand"];
                };
            };
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
        post?: never;
        /** Delete a contract stage type */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
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
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/contracts/{PractitionerId}/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Practitioner contracts */
        get: operations["GetPractitionerContractByPractitionerId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/contracts/contracts/{PractitionerContractId}": {
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
        /** Delete contract Association */
        delete: operations["DisassociateContractFromPractitioner"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/contracts/contracts/checkassociation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["CheckPractitionerContractAssociationsByContractId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/practitioners/contracts/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create new Contract */
        post: operations["AssociateContractToPractitioner"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/contracts/{ProtocolId}/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetContractProtocolByProtocolId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/contracts/contracts/{ContractId}/associations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get protocol association by contract id */
        get: operations["GetProtocolAssociationByContractId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/contracts/contracts/{ProtocolContractId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get protocol contract by id */
        get: operations["GetProtocolContractById"];
        put?: never;
        post?: never;
        /** Delete contract association */
        delete: operations["DisassociateContractFromProtocol"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/contracts/contracts/checkassociation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Check association by contract id */
        get: operations["CheckProtocolContractAssociationsByContractId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/protocols/contracts/contracts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Associate contract */
        post: operations["AssociateContractToProtocol"];
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
        AssociateContractToPractitionerCommandAsync: {
            /** Format: int32 */
            contractId?: number;
            practitionerId?: string | null;
        };
        AssociateContractToProtocolCommandAsync: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            protocolId?: number;
        };
        CommissionAgentViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
            /** Format: uuid */
            commissionAgentId?: string;
            commissionAgentName?: string | null;
            isCommissionAPercentage?: boolean;
            /** Format: double */
            commissionAmount?: number;
            currency?: string | null;
            haveContractAssociated?: boolean;
            /** Format: int32 */
            contractAssociatedId?: number | null;
            onlyDoneHimSelf?: boolean;
        };
        CommissionAgentViewModelIReadOnlyListPagedResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["CommissionAgentViewModel"][] | null;
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
        CommissionAgentViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["CommissionAgentViewModel"] | null;
        };
        ConceptBranchViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            branchId?: number;
            branchName?: string | null;
            branchDescription?: string | null;
        };
        ConceptBranchViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ConceptBranchViewModel"][] | null;
        };
        ConceptBranchViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ConceptBranchViewModel"] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ConceptCalculateTypeEnum: 1 | 2 | 3 | 4;
        /**
         * Format: int32
         * @enum {integer}
         */
        ConceptCostValuationEnum: 1 | 2 | 3 | 4;
        /**
         * Format: int32
         * @enum {integer}
         */
        ConceptValuationOptionsEnum: 1 | 2 | 3 | 4 | 5;
        ConceptViewModel: {
            /** Format: int32 */
            id?: number;
            conceptName?: string | null;
            conceptDescription?: string | null;
            conceptReferenceId?: string | null;
        };
        ContractAccessCreateCommandAsync: {
            /** Format: int32 */
            contractID?: number;
            /** Format: uuid */
            userID?: string;
            readAccess?: boolean;
            writeAccess?: boolean;
        };
        ContractAccessUpdateCommandAsync: {
            /** Format: int32 */
            contractID?: number;
            /** Format: uuid */
            userID?: string;
            readAccess?: boolean;
            writeAccess?: boolean;
            /** Format: int32 */
            id?: number;
        };
        ContractAccessViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractID?: number;
            /** Format: uuid */
            userID?: string;
            readAccess?: boolean;
            writeAccess?: boolean;
        };
        ContractAccessViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractAccessViewModel"][] | null;
        };
        ContractAccessViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractAccessViewModel"] | null;
        };
        ContractAddendumCloneCommandAsync: {
            /** Format: int32 */
            addendumToCloneId?: number;
        };
        ContractAddendumCreateCommandAsync: {
            contractAddendumName?: string | null;
            contractAddendumDescription?: string | null;
            /** Format: int32 */
            contractId?: number;
            /** Format: date-time */
            contractAddendumExpiryStartDate?: string | null;
            /** Format: date-time */
            contractAddendumExpiryEndDate?: string | null;
            /** Format: int32 */
            contractAddendumType?: number;
        };
        ContractAddendumUpdateCommandAsync: {
            contractAddendumName?: string | null;
            contractAddendumDescription?: string | null;
            /** Format: int32 */
            contractId?: number;
            /** Format: date-time */
            contractAddendumExpiryStartDate?: string | null;
            /** Format: date-time */
            contractAddendumExpiryEndDate?: string | null;
            /** Format: int32 */
            contractAddendumType?: number;
            /** Format: int32 */
            id?: number;
        };
        ContractAddendumViewModel: {
            /** Format: int32 */
            id?: number;
            contractAddendumName?: string | null;
            contractAddendumDescription?: string | null;
            /** Format: int32 */
            contractId?: number;
            /** Format: date-time */
            contractAddendumExpiryStartDate?: string | null;
            /** Format: date-time */
            contractAddendumExpiryEndDate?: string | null;
            /** Format: int32 */
            contractAddendumType?: number;
            readonly isActive?: boolean;
        };
        ContractAddendumViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractAddendumViewModel"][] | null;
        };
        ContractAddendumViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractAddendumViewModel"] | null;
        };
        ContractBranchCreateCommandAsync: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            branchName?: string | null;
            branchDescription?: string | null;
            /** Format: int32 */
            protocolIdRelatedToBranch?: number | null;
        };
        ContractBranchUpdateCommandAsync: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            branchName?: string | null;
            branchDescription?: string | null;
            /** Format: int32 */
            protocolIdRelatedToBranch?: number | null;
            /** Format: int32 */
            id?: number;
            isDeleted?: boolean;
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
            /** Format: int32 */
            protocolIdRelatedToBranch?: number | null;
        };
        ContractBranchViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractBranchViewModel"][] | null;
        };
        ContractBranchViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractBranchViewModel"] | null;
        };
        ContractCloneCommandAsync: {
            /** Format: int32 */
            contractToCloneId?: number;
            contractName?: string | null;
            comments?: string | null;
            isChild?: boolean;
        };
        ContractCommissionAgentConceptViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            commissionAgentId?: number;
            /** Format: int32 */
            contractId?: number;
            payByVisit?: boolean;
            /** Format: int32 */
            conceptId?: number | null;
            valuationType?: components["schemas"]["ConceptValuationOptionsEnum"];
            currencyCode?: string | null;
            /** Format: double */
            value?: number;
            /** Format: double */
            remoteValue?: number;
            /** Format: double */
            additionalValue?: number;
            /** Format: double */
            failValue?: number;
            /** Format: int32 */
            medicalServiceId?: number | null;
            takeOnlyItWasDoneByHimself?: boolean;
            takeOnAlreadyRealized?: boolean;
            takeOnAlreadyPaid?: boolean;
            discountAlreadyPaidToSI?: boolean;
        };
        ContractCommissionAgentConceptViewModelIReadOnlyListPagedResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractCommissionAgentConceptViewModel"][] | null;
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
        ContractCommissionAgentConceptViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractCommissionAgentConceptViewModel"][] | null;
        };
        ContractCommissionAgentConceptViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractCommissionAgentConceptViewModel"] | null;
        };
        ContractCommissionConceptViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            conceptId?: number;
            /** Format: int32 */
            commissionPercentage?: number;
            costParticipation?: boolean;
            /** Format: int32 */
            costParticipationPercentage?: number | null;
        };
        ContractCommissionConceptViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractCommissionConceptViewModel"][] | null;
        };
        ContractCommissionConceptViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractCommissionConceptViewModel"] | null;
        };
        ContractConceptConceptCreateCommandAsync: {
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            relatedContractConceptId?: number;
        };
        ContractConceptConceptUpdateCommandAsync: {
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            relatedContractConceptId?: number;
            isSelected?: boolean;
        };
        ContractConceptConceptViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            relatedContractConceptId?: number;
            relatedContractConcept?: components["schemas"]["MinimalContractConceptViewModel"] | null;
        };
        ContractConceptConceptViewModelIReadOnlyListPagedResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptConceptViewModel"][] | null;
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
        ContractConceptConceptViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptConceptViewModel"] | null;
        };
        ContractConceptFormRelationshipViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractConceptId?: number;
            formName?: string | null;
            /** Format: int32 */
            itemNumber?: number | null;
            formConcept?: string | null;
            formConceptNormalized?: string | null;
            formConcetNameToShow?: string | null;
            isPayable?: boolean;
            isProcedure?: boolean;
            /** Format: int32 */
            medicalServiceId?: number | null;
            /** Format: uuid */
            providerId?: string | null;
        };
        ContractConceptFormRelationshipViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptFormRelationshipViewModel"][] | null;
        };
        ContractConceptFormRelationshipViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptFormRelationshipViewModel"] | null;
        };
        ContractConceptPaymentScheduleViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            contractStageId?: number;
            stage?: components["schemas"]["ContractStageViewModel"] | null;
            /** Format: double */
            price?: number | null;
            /** Format: double */
            remotePrice?: number;
            /** Format: double */
            followUpPrice?: number;
            /** Format: double */
            phonePrice?: number;
            /** Format: double */
            screeningFailurePrice?: number;
            /** Format: int32 */
            amountExpected?: number;
            /** Format: double */
            settlementCoefficient?: number;
            /** Format: double */
            settlementRemoteCoefficient?: number;
            /** Format: double */
            settlementPhoneCoefficient?: number;
            /** Format: double */
            settlementFollowUpCoefficient?: number;
            /** Format: double */
            settlementScreeningFailureCoefficient?: number;
            /** Format: double */
            priceWithoutOverhead?: number;
            currency?: string | null;
        };
        ContractConceptPaymentScheduleViewModelIReadOnlyListPagedResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptPaymentScheduleViewModel"][] | null;
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
        ContractConceptPaymentScheduleViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptPaymentScheduleViewModel"] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ContractConceptPercentageOriginOptionEnum: 1 | 2;
        ContractConceptViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            concept?: components["schemas"]["ConceptViewModel"] | null;
            conceptCurrency?: string | null;
            isIncludeInVisit?: boolean;
            groupWithInTheVisit?: boolean;
            visitConceptRelationship?: string | null;
            isOptional?: boolean;
            applyToRemoteExecution?: boolean;
            applyToInFaceExecution?: boolean;
            applyToPhoneExecution?: boolean;
            applyToUnScheduledExecution?: boolean;
            applyToEarlyTerminationExecution?: boolean;
            applyToFailvisitExecution?: boolean;
            haveDivisionFee?: boolean;
            /** Format: double */
            divisionFeeValue?: number;
            isManagedByCoordinator?: boolean;
            isMedicalService?: boolean;
            /** Format: int32 */
            medicalServiceId?: number | null;
            /** Format: int32 */
            settlementSetting?: number;
            /** Format: int32 */
            settlementPeriod?: number | null;
            /** Format: date-time */
            initialPeriodDate?: string | null;
            /** Format: int32 */
            valuationType?: number;
            /** Format: int32 */
            quantityToSettle?: number;
            /** Format: int32 */
            capToApply?: number | null;
            /** Format: int32 */
            maxQuantityToSettle?: number | null;
            /** Format: double */
            priceValue?: number | null;
            /** Format: double */
            remoteFixedValue?: number | null;
            /** Format: double */
            phoneFixedValue?: number | null;
            haveRepetitionPrice?: boolean;
            /** Format: double */
            repetitionPriceValue?: number | null;
            haveRetroactivity?: boolean;
            /** Format: date-time */
            retroactivityDateFrom?: string | null;
            haveEarlyDiscontinuationPrice?: boolean;
            /** Format: double */
            earlyDiscontinuationPrice?: number | null;
            haveWithdrawal?: boolean;
            /** Format: double */
            withdrawalValue?: number;
            applyWithholdingOnConceptValues?: boolean;
            /** Format: double */
            percentageValue?: number | null;
            /** Format: int32 */
            percentageBase?: number | null;
            /** Format: double */
            maxCostPrice?: number | null;
            /** Format: int32 */
            priceListOrigin?: number | null;
            haveCost?: boolean;
            /** Format: int32 */
            costSetting?: number | null;
            /** Format: uuid */
            serviceCategory?: string | null;
            /** Format: double */
            percentageCostValue?: number | null;
            /** Format: double */
            fixedCostValue?: number | null;
            /** Format: int32 */
            costPriceListOrigin?: number | null;
            /** Format: int32 */
            costProviderId?: number | null;
            excludeParticularPatient?: boolean;
            takeOnlyParticularPatient?: boolean;
            /** Format: int32 */
            calculateType?: number;
            takeOnlyRandomizedPatients?: boolean;
            /** Format: int32 */
            applyEachXItems?: number;
            needAggrupation?: boolean;
            /** Format: int32 */
            aggrupationSegment?: number;
            haveGenderFilter?: boolean;
            appliesToMen?: boolean;
            appliesToWomen?: boolean;
            appliesToWomenOfFertileAge?: boolean;
            appliesToWomenOfNonFertileAge?: boolean;
            appliesToAgeBetween?: boolean;
            /** Format: int32 */
            ageFrom?: number | null;
            /** Format: int32 */
            ageTo?: number | null;
            haveOverhead?: boolean;
            /** Format: double */
            overheadValue?: number;
            /** Format: double */
            averageOverheadValue?: number;
            ignoreDecimal?: boolean;
            filterByBranches?: boolean;
            branches?: components["schemas"]["ConceptBranchViewModel"][] | null;
            paymentSchedule?: components["schemas"]["ContractConceptPaymentScheduleViewModel"][] | null;
            concepts?: components["schemas"]["MinimalContractConceptViewModel"][] | null;
        };
        ContractConceptViewModelIReadOnlyListPagedResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptViewModel"][] | null;
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
        ContractConceptViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptViewModel"][] | null;
        };
        ContractConceptViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractConceptViewModel"] | null;
        };
        ContractCycleViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            cycleName?: string | null;
            /** Format: int32 */
            order?: number;
        };
        ContractCycleViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractCycleViewModel"][] | null;
        };
        ContractCycleViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractCycleViewModel"] | null;
        };
        ContractFileViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
            /** Format: uuid */
            fileId?: string;
            fileName?: string | null;
            /** Format: double */
            fileSize?: number;
            fileType?: string | null;
            fileExtension?: string | null;
        };
        ContractFileViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractFileViewModel"][] | null;
        };
        ContractFileViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractFileViewModel"] | null;
        };
        ContractIAImportProcessViewModel: {
            /** Format: uuid */
            id?: string;
            /** Format: int32 */
            contractID?: number;
            /** Format: date-time */
            dateTimeSync?: string;
            /** Format: date-time */
            startTimestamp?: string | null;
            /** Format: date-time */
            endTimestamp?: string | null;
            /** Format: date-span */
            readonly duration?: string | null;
            errorMessage?: string | null;
            errorStackTrace?: string | null;
            status?: components["schemas"]["ContractProcessStatusEnum"];
        };
        ContractIAImportProcessViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractIAImportProcessViewModel"] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ContractPaymentScheduleTypeEnum: 1 | 2 | 3 | 4 | 5;
        /**
         * Format: int32
         * @enum {integer}
         */
        ContractProcessStatusEnum: 1 | 2 | 3 | 4 | 5;
        ContractStageItemViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractStageId?: number;
            /** Format: int32 */
            ermProtocolVisitId?: number;
            emrProtocolVisitName: string | null;
        };
        ContractStageItemViewModelIReadOnlyListPagedResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractStageItemViewModel"][] | null;
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
        ContractStageItemViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractStageItemViewModel"] | null;
        };
        ContractStageSetEmrVisitRelatedCommandAsync: {
            /** Format: int32 */
            contractStageId?: number;
            /** Format: int32 */
            emrCrossVersionId?: number | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ContractStageTypeEnum: 0 | 1 | 2;
        ContractStageTypeViewModel: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            description?: string | null;
            relatedWords?: string | null;
            type?: components["schemas"]["PrimitiveStageTypeEnum"];
            /** Format: int32 */
            priceCategory?: number | null;
        };
        ContractStageTypeViewModelIReadOnlyListPagedResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractStageTypeViewModel"][] | null;
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
        ContractStageTypeViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractStageTypeViewModel"] | null;
        };
        ContractStageViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            stageName?: string | null;
            comments?: string | null;
            isOptional?: boolean;
            isOnSiteMandatory?: boolean;
            failSelectionEnabled?: boolean;
            /** Format: int32 */
            cycleId?: number | null;
            /** Format: int32 */
            stageOrder?: number;
            /** Format: int32 */
            emrProtocolVisitIdRelated?: number | null;
            markAsSettleable?: boolean;
            markAsPayable?: boolean;
            /** Format: uuid */
            internalCrossVersionId?: string | null;
            /** Format: int32 */
            offset?: number;
            /** Format: int32 */
            offsetUnit?: number;
            cycle?: components["schemas"]["ContractCycleViewModel"] | null;
            contractStageItems?: components["schemas"]["ContractStageItemViewModel"][] | null;
            contractStageType?: components["schemas"]["ContractStageTypeViewModel"] | null;
        };
        ContractStageViewModelIReadOnlyListPagedResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractStageViewModel"][] | null;
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
        ContractStageViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractStageViewModel"] | null;
        };
        ContractStagesTypeEntity: {
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
            name?: string | null;
            description?: string | null;
            relatedWords?: string | null;
            type?: components["schemas"]["PrimitiveStageTypeEnum"];
            /** Format: int32 */
            priceCategory?: number | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        ContractStatusEnum: 1 | 2 | 3 | 4 | 5 | 6;
        ContractViewModel: {
            /** Format: int32 */
            id?: number;
            tenant?: string | null;
            contractNumber?: string | null;
            contractDescription?: string | null;
            contractStatus?: components["schemas"]["ContractStatusEnum"];
            /** Format: date-time */
            contractStartDate?: string | null;
            /** Format: date-time */
            contractEndDate?: string | null;
            /** Format: date */
            contractAddendumExpiryStartDate?: string | null;
            /** Format: date */
            contractAddendumExpiryEndDate?: string | null;
            contractCurrency?: string | null;
            paymentScheduleType?: components["schemas"]["ContractPaymentScheduleTypeEnum"];
            /** Format: int32 */
            paymentScheduleFrequency?: number | null;
            /** Format: date-time */
            firstSettlement?: string | null;
            /** Format: int32 */
            feeDivision?: number;
            useContractStages?: boolean;
            /** Format: int32 */
            parentContractId?: number | null;
            isLocked?: boolean;
            sponsors?: components["schemas"]["SponsorContractsViewModel"][] | null;
            protocol?: components["schemas"]["ProtocolContractViewModel"][] | null;
            practitioners?: components["schemas"]["PractitionerContractViewModel"][] | null;
        };
        ContractViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractViewModel"][] | null;
        };
        ContractViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ContractViewModel"] | null;
        };
        CreateCommissionAgentCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: uuid */
            commissionAgentId?: string;
            commissionAgentName?: string | null;
            isCommissionAPercentage?: boolean;
            /** Format: double */
            commissionAmount?: number;
            currency?: string | null;
            haveContractAssociated?: boolean;
            /** Format: int32 */
            contractAssociatedId?: number | null;
            onlyDoneHimSelf?: boolean;
        };
        CreateConceptBranchCommandAsync: {
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            branchId?: number;
        };
        CreateConceptBranchDTO: {
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            branchId?: number;
        };
        CreateContractCommand: {
            contractNumber?: string | null;
            contractDescription?: string | null;
            contractStatus?: components["schemas"]["ContractStatusEnum"];
            /** Format: date-time */
            contractStartDate?: string | null;
            /** Format: date-time */
            contractEndDate?: string | null;
            contractCurrency?: string | null;
            paymentScheduleType?: components["schemas"]["ContractPaymentScheduleTypeEnum"];
            paymentScheduleFrequency?: components["schemas"]["ContractPaymentScheduleTypeEnum"] | null;
            /** Format: date-time */
            firstSettlement?: string | null;
            /** Format: int32 */
            feeDivision?: number;
            useContractStages?: boolean;
        };
        CreateContractCommissionAgentConceptCommand: {
            /** Format: int32 */
            commissionAgentId?: number;
            /** Format: int32 */
            contractId?: number;
            payByVisit?: boolean;
            conceptId?: number[] | null;
            valuationType?: components["schemas"]["ConceptValuationOptionsEnum"];
            currencyCode?: string | null;
            /** Format: double */
            value?: number;
            /** Format: double */
            remoteValue?: number;
            /** Format: double */
            additionalValue?: number;
            /** Format: double */
            failValue?: number;
            /** Format: int32 */
            medicalServiceId?: number | null;
            takeOnlyItWasDoneByHimself?: boolean;
            takeOnAlreadyRealized?: boolean;
            takeOnAlreadyPaid?: boolean;
            discountAlreadyPaidToSI?: boolean;
        };
        CreateContractCommissionConceptCommandAsync: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            conceptId?: number;
            /** Format: int32 */
            commissionPercentage?: number;
            costParticipation?: boolean;
            /** Format: int32 */
            costParticipationPercentage?: number | null;
        };
        CreateContractConceptCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            /** Format: int32 */
            conceptId?: number;
            conceptCurrency?: string | null;
            isIncludeInVisit?: boolean;
            groupWithInTheVisit?: boolean;
            visitConceptRelationship?: string | null;
            isOptional?: boolean;
            applyToRemoteExecution?: boolean;
            applyToInFaceExecution?: boolean;
            applyToPhoneExecution?: boolean;
            applyToUnScheduledExecution?: boolean;
            applyToEarlyTerminationExecution?: boolean;
            applyToFailvisitExecution?: boolean;
            haveDivisionFee?: boolean;
            /** Format: double */
            divisionFeeValue?: number;
            isManagedByCoordinator?: boolean;
            isMedicalService?: boolean;
            /** Format: int32 */
            medicalServiceId?: number;
            settlementSetting?: components["schemas"]["SettlementOptionsEnum"];
            /** Format: int32 */
            quantityToSettle?: number;
            /** Format: int32 */
            capToApply?: number | null;
            /** Format: int32 */
            maxQuantityToSettle?: number | null;
            settlementPeriod?: components["schemas"]["SettlementPeriodEnum"] | null;
            /** Format: date-time */
            initialPeriodDate?: string | null;
            valuationType?: components["schemas"]["ConceptValuationOptionsEnum"];
            /** Format: double */
            priceValue?: number | null;
            /** Format: double */
            remoteFixedValue?: number | null;
            /** Format: double */
            phoneFixedValue?: number | null;
            haveRepetitionPrice?: boolean;
            /** Format: double */
            repetitionPriceValue?: number | null;
            haveEarlyDiscontinuationPrice?: boolean;
            /** Format: double */
            earlyDiscontinuationPrice?: number | null;
            /** Format: double */
            percentageValue?: number | null;
            percentageBase?: components["schemas"]["ContractConceptPercentageOriginOptionEnum"] | null;
            /** Format: double */
            maxCostPrice?: number | null;
            priceListOrigin?: components["schemas"]["PriceListOriginEnum"] | null;
            haveCost?: boolean;
            costSetting?: components["schemas"]["ConceptCostValuationEnum"] | null;
            /** Format: uuid */
            serviceCategory?: string | null;
            /** Format: double */
            percentageCostValue?: number | null;
            /** Format: double */
            fixedCostValue?: number | null;
            costPriceListOrigin?: components["schemas"]["PriceListOriginEnum"] | null;
            /** Format: int32 */
            costProviderId?: number | null;
            excludeParticularPatient?: boolean;
            takeOnlyParticularPatient?: boolean;
            haveRetroactivity?: boolean;
            /** Format: date-time */
            retroactivityDateFrom?: string | null;
            haveWithdrawal?: boolean;
            /** Format: double */
            withdrawalValue?: number;
            applyWithholdingOnConceptValues?: boolean;
            calculateType?: components["schemas"]["ConceptCalculateTypeEnum"];
            takeOnlyRandomizedPatients?: boolean;
            /** Format: int32 */
            applyEachXItems?: number;
            needAggrupation?: boolean;
            /** Format: int32 */
            aggrupationSegment?: number;
            haveGenderFilter?: boolean;
            appliesToMen?: boolean;
            appliesToWomen?: boolean;
            appliesToWomenOfFertileAge?: boolean;
            appliesToWomenOfNonFertileAge?: boolean;
            appliesToAgeBetween?: boolean;
            /** Format: int32 */
            ageFrom?: number | null;
            /** Format: int32 */
            ageTo?: number | null;
            haveOverhead?: boolean;
            /** Format: double */
            overheadValue?: number;
            /** Format: double */
            averageOverheadValue?: number;
            ignoreDecimal?: boolean;
            filterByBranches?: boolean;
            branches?: components["schemas"]["CreateConceptBranchDTO"][] | null;
        };
        CreateContractConceptFormRelationshipCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractConceptId?: number | null;
            formName?: string | null;
            /** Format: int32 */
            itemNumber?: number | null;
            formConcept?: string | null;
            formConceptNameToShow?: string | null;
            isPayable?: boolean;
            isProcedure?: boolean;
            /** Format: int32 */
            medicalServiceId?: number | null;
            /** Format: uuid */
            providerId?: string | null;
        };
        CreateContractConceptPaymentScheduleCommand: {
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            contractStageId?: number;
            /** Format: double */
            price?: number | null;
            /** Format: double */
            remotePrice?: number;
            /** Format: double */
            followUpPrice?: number;
            /** Format: double */
            phonePrice?: number;
            /** Format: double */
            screeningFailurePrice?: number;
            /** Format: int32 */
            amountExpected?: number;
            /** Format: double */
            settlementCoefficient?: number;
            /** Format: double */
            settlementRemoteCoefficient?: number;
            /** Format: double */
            settlementPhoneCoefficient?: number;
            /** Format: double */
            settlementFollowUpCoefficient?: number;
            /** Format: double */
            settlementScreeningFailureCoefficient?: number;
            /** Format: double */
            priceWithoutOverhead?: number;
            currency?: string | null;
        };
        CreateContractCycleCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            cycleName?: string | null;
            /** Format: int32 */
            order?: number;
        };
        CreateContractIAImportProcessCommandAsync: {
            /** Format: int32 */
            contractID?: number;
            fileIds?: string[] | null;
            hasPassword?: boolean;
            reWriteExistingData?: boolean;
            password?: string | null;
            additionalPromptInformation?: string | null;
        };
        CreateContractStageCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            stageName?: string | null;
            comments?: string | null;
            isOptional?: boolean;
            isOnSiteMandatory?: boolean;
            failSelectionEnabled?: boolean;
            /** Format: int32 */
            cycleId?: number | null;
            /** Format: int32 */
            contractStageTypeId?: number | null;
            /** Format: int32 */
            stageOrder?: number;
            /** Format: int32 */
            emrProtocolVisitIdRelated?: number | null;
            markAsSettleable?: boolean;
            markAsPayable?: boolean;
            /** Format: int32 */
            offset?: number;
            /** Format: int32 */
            offsetUnit?: number;
        };
        CreateContractStageItemCommand: {
            /** Format: int32 */
            contractStageId?: number;
            /** Format: int32 */
            ermProtocolVisitId?: number;
            emrProtocolVisitName?: string | null;
        };
        CreateContractStageTypeCommand: {
            name?: string | null;
            description?: string | null;
            relatedWords?: string | null;
            type?: components["schemas"]["PrimitiveStageTypeEnum"];
            /** Format: int32 */
            priceCategory?: number | null;
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
        MinimalContractConceptViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractId?: number;
            conceptCurrency?: string | null;
            concept?: components["schemas"]["ConceptViewModel"] | null;
        };
        PractitionerContractViewModel: {
            /** Format: int32 */
            id?: number;
            practitionerId?: string | null;
            /** Format: int32 */
            contractId?: number;
        };
        PractitionerContractViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerContractViewModel"][] | null;
        };
        PractitionerContractViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PractitionerContractViewModel"] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        PriceListOriginEnum: 1 | 2 | 3;
        /**
         * Format: int32
         * @enum {integer}
         */
        PrimitiveStageTypeEnum: 0 | 1 | 2 | 3 | 4;
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
        ProtocolContractViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            protocolId?: number;
            /** Format: int32 */
            contractId?: number;
        };
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
            data?: components["schemas"]["ProtocolContractViewModel"] | null;
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
        SponsorContractsViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            sponsorId?: number;
            /** Format: int32 */
            contractId?: number;
        };
        StringResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: string | null;
        };
        UpdateCommissionAgentCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: uuid */
            commissionAgentId?: string;
            commissionAgentName?: string | null;
            isCommissionAPercentage?: boolean;
            /** Format: double */
            commissionAmount?: number;
            currency?: string | null;
            haveContractAssociated?: boolean;
            /** Format: int32 */
            contractAssociatedId?: number | null;
            onlyDoneHimSelf?: boolean;
            /** Format: int32 */
            id?: number;
        };
        UpdateConceptBranchCommandAsync: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            branchId?: number;
        };
        UpdateContractCommand: {
            contractNumber?: string | null;
            contractDescription?: string | null;
            contractStatus?: components["schemas"]["ContractStatusEnum"];
            /** Format: date-time */
            contractStartDate?: string | null;
            /** Format: date-time */
            contractEndDate?: string | null;
            contractCurrency?: string | null;
            paymentScheduleType?: components["schemas"]["ContractPaymentScheduleTypeEnum"];
            paymentScheduleFrequency?: components["schemas"]["ContractPaymentScheduleTypeEnum"] | null;
            /** Format: date-time */
            firstSettlement?: string | null;
            /** Format: int32 */
            feeDivision?: number;
            useContractStages?: boolean;
            /** Format: int32 */
            id?: number;
            isLocked?: boolean;
            /** Format: int32 */
            parentContractId?: number | null;
        };
        UpdateContractCommissionAgentConceptCommandAsync: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            commissionAgentId?: number;
            /** Format: int32 */
            contractId?: number;
            payByVisit?: boolean;
            /** Format: int32 */
            conceptId?: number | null;
            valuationType?: components["schemas"]["ConceptValuationOptionsEnum"];
            currencyCode?: string | null;
            /** Format: double */
            value?: number;
            /** Format: double */
            remoteValue?: number;
            /** Format: double */
            additionalValue?: number;
            /** Format: double */
            failValue?: number;
            /** Format: int32 */
            medicalServiceId?: number | null;
            takeOnlyItWasDoneByHimself?: boolean;
            takeOnAlreadyRealized?: boolean;
            takeOnAlreadyPaid?: boolean;
            discountAlreadyPaidToSI?: boolean;
        };
        UpdateContractCommissionConceptCommandAsync: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            conceptId?: number;
            /** Format: int32 */
            commissionPercentage?: number;
            costParticipation?: boolean;
            /** Format: int32 */
            costParticipationPercentage?: number | null;
            /** Format: int32 */
            id?: number;
        };
        UpdateContractConceptCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            /** Format: int32 */
            conceptId?: number;
            conceptCurrency?: string | null;
            isIncludeInVisit?: boolean;
            groupWithInTheVisit?: boolean;
            visitConceptRelationship?: string | null;
            isOptional?: boolean;
            applyToRemoteExecution?: boolean;
            applyToInFaceExecution?: boolean;
            applyToPhoneExecution?: boolean;
            applyToUnScheduledExecution?: boolean;
            applyToEarlyTerminationExecution?: boolean;
            applyToFailvisitExecution?: boolean;
            haveDivisionFee?: boolean;
            /** Format: double */
            divisionFeeValue?: number;
            isManagedByCoordinator?: boolean;
            isMedicalService?: boolean;
            /** Format: int32 */
            medicalServiceId?: number;
            settlementSetting?: components["schemas"]["SettlementOptionsEnum"];
            /** Format: int32 */
            quantityToSettle?: number;
            /** Format: int32 */
            capToApply?: number | null;
            /** Format: int32 */
            maxQuantityToSettle?: number | null;
            settlementPeriod?: components["schemas"]["SettlementPeriodEnum"] | null;
            /** Format: date-time */
            initialPeriodDate?: string | null;
            valuationType?: components["schemas"]["ConceptValuationOptionsEnum"];
            /** Format: double */
            priceValue?: number | null;
            /** Format: double */
            remoteFixedValue?: number | null;
            /** Format: double */
            phoneFixedValue?: number | null;
            haveRepetitionPrice?: boolean;
            /** Format: double */
            repetitionPriceValue?: number | null;
            haveEarlyDiscontinuationPrice?: boolean;
            /** Format: double */
            earlyDiscontinuationPrice?: number | null;
            /** Format: double */
            percentageValue?: number | null;
            percentageBase?: components["schemas"]["ContractConceptPercentageOriginOptionEnum"] | null;
            /** Format: double */
            maxCostPrice?: number | null;
            priceListOrigin?: components["schemas"]["PriceListOriginEnum"] | null;
            haveCost?: boolean;
            costSetting?: components["schemas"]["ConceptCostValuationEnum"] | null;
            /** Format: uuid */
            serviceCategory?: string | null;
            /** Format: double */
            percentageCostValue?: number | null;
            /** Format: double */
            fixedCostValue?: number | null;
            costPriceListOrigin?: components["schemas"]["PriceListOriginEnum"] | null;
            /** Format: int32 */
            costProviderId?: number | null;
            excludeParticularPatient?: boolean;
            takeOnlyParticularPatient?: boolean;
            haveRetroactivity?: boolean;
            /** Format: date-time */
            retroactivityDateFrom?: string | null;
            haveWithdrawal?: boolean;
            /** Format: double */
            withdrawalValue?: number;
            applyWithholdingOnConceptValues?: boolean;
            calculateType?: components["schemas"]["ConceptCalculateTypeEnum"];
            takeOnlyRandomizedPatients?: boolean;
            /** Format: int32 */
            applyEachXItems?: number;
            needAggrupation?: boolean;
            /** Format: int32 */
            aggrupationSegment?: number;
            haveGenderFilter?: boolean;
            appliesToMen?: boolean;
            appliesToWomen?: boolean;
            appliesToWomenOfFertileAge?: boolean;
            appliesToWomenOfNonFertileAge?: boolean;
            appliesToAgeBetween?: boolean;
            /** Format: int32 */
            ageFrom?: number | null;
            /** Format: int32 */
            ageTo?: number | null;
            haveOverhead?: boolean;
            /** Format: double */
            overheadValue?: number;
            /** Format: double */
            averageOverheadValue?: number;
            ignoreDecimal?: boolean;
            filterByBranches?: boolean;
            branches?: components["schemas"]["CreateConceptBranchDTO"][] | null;
            /** Format: int32 */
            id?: number;
        };
        UpdateContractConceptFormRelationshipCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractConceptId?: number | null;
            formName?: string | null;
            /** Format: int32 */
            itemNumber?: number | null;
            formConcept?: string | null;
            formConceptNameToShow?: string | null;
            isPayable?: boolean;
            isProcedure?: boolean;
            /** Format: int32 */
            medicalServiceId?: number | null;
            /** Format: uuid */
            providerId?: string | null;
            /** Format: int32 */
            id?: number;
        };
        UpdateContractConceptPaymentScheduleCommand: {
            /** Format: int32 */
            contractConceptId?: number;
            /** Format: int32 */
            contractStageId?: number;
            /** Format: double */
            price?: number | null;
            /** Format: double */
            remotePrice?: number;
            /** Format: double */
            followUpPrice?: number;
            /** Format: double */
            phonePrice?: number;
            /** Format: double */
            screeningFailurePrice?: number;
            /** Format: int32 */
            amountExpected?: number;
            /** Format: double */
            settlementCoefficient?: number;
            /** Format: double */
            settlementRemoteCoefficient?: number;
            /** Format: double */
            settlementPhoneCoefficient?: number;
            /** Format: double */
            settlementFollowUpCoefficient?: number;
            /** Format: double */
            settlementScreeningFailureCoefficient?: number;
            /** Format: double */
            priceWithoutOverhead?: number;
            currency?: string | null;
            /** Format: int32 */
            id?: number;
        };
        UpdateContractCycleCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            cycleName?: string | null;
            /** Format: int32 */
            order?: number;
            /** Format: int32 */
            id?: number;
        };
        UpdateContractFileCommand: {
            /** Format: int32 */
            contractId?: number;
            fileName?: string | null;
            fileType?: string | null;
            /** Format: double */
            fileSize?: number;
            fileExtension?: string | null;
            /** Format: int32 */
            id?: number;
        };
        UpdateContractStageCommand: {
            /** Format: int32 */
            contractId?: number;
            /** Format: int32 */
            contractAddendumId?: number;
            stageName?: string | null;
            comments?: string | null;
            isOptional?: boolean;
            isOnSiteMandatory?: boolean;
            failSelectionEnabled?: boolean;
            /** Format: int32 */
            cycleId?: number | null;
            /** Format: int32 */
            contractStageTypeId?: number | null;
            /** Format: int32 */
            stageOrder?: number;
            /** Format: int32 */
            emrProtocolVisitIdRelated?: number | null;
            markAsSettleable?: boolean;
            markAsPayable?: boolean;
            /** Format: int32 */
            offset?: number;
            /** Format: int32 */
            offsetUnit?: number;
            /** Format: int32 */
            id?: number;
            /** Format: uuid */
            internalCrossVersionId?: string | null;
            contractStageType?: components["schemas"]["ContractStagesTypeEntity"] | null;
        };
        UpdateContractStageItemCommand: {
            /** Format: int32 */
            contractStageId?: number;
            /** Format: int32 */
            ermProtocolVisitId?: number;
            emrProtocolVisitName?: string | null;
            /** Format: int32 */
            id?: number;
        };
        UpdateContractStageTypeCommand: {
            name?: string | null;
            description?: string | null;
            relatedWords?: string | null;
            type?: components["schemas"]["PrimitiveStageTypeEnum"];
            /** Format: int32 */
            priceCategory?: number | null;
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
    GetContractCommissionConcepts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractID: number;
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
                    "text/plain": components["schemas"]["ContractCommissionConceptViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractCommissionConceptViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractCommissionConceptViewModelIReadOnlyListResponse"];
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
    GetContractCommissionConceptById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                CommissionConceptId: number;
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
                    "text/plain": components["schemas"]["ContractCommissionConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractCommissionConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractCommissionConceptViewModelResponse"];
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
    DeleteContractCommissionConcept: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                CommissionConceptId: number;
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
    UpdateContractCommissionConcept: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContractCommissionConceptCommandAsync"];
                "text/json": components["schemas"]["UpdateContractCommissionConceptCommandAsync"];
                "application/*+json": components["schemas"]["UpdateContractCommissionConceptCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractCommissionConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractCommissionConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractCommissionConceptViewModelResponse"];
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
    AddContractCommisionConcept: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateContractCommissionConceptCommandAsync"];
                "text/json": components["schemas"]["CreateContractCommissionConceptCommandAsync"];
                "application/*+json": components["schemas"]["CreateContractCommissionConceptCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractCommissionConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractCommissionConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractCommissionConceptViewModelResponse"];
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
    GetConceptBranchesByContractConceptId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the contract concept. */
                contractConceptId: number;
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
                    "text/plain": components["schemas"]["ConceptBranchViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ConceptBranchViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ConceptBranchViewModelIReadOnlyListResponse"];
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
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
                };
            };
        };
    };
    CreateConceptBranch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the contract concept. */
                contractConceptId: number;
            };
            cookie?: never;
        };
        /** @description The data to create the concept branch. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateConceptBranchCommandAsync"];
                "text/json": components["schemas"]["CreateConceptBranchCommandAsync"];
                "application/*+json": components["schemas"]["CreateConceptBranchCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
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
    GetConceptBranchById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the concept branch. */
                conceptBranchId: number;
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
                    "text/plain": components["schemas"]["ConceptBranchViewModelResponse"];
                    "application/json": components["schemas"]["ConceptBranchViewModelResponse"];
                    "text/json": components["schemas"]["ConceptBranchViewModelResponse"];
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
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
                };
            };
        };
    };
    UpdateConceptBranch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the concept branch to update. */
                conceptBranchId: number;
            };
            cookie?: never;
        };
        /** @description The updated data. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateConceptBranchCommandAsync"];
                "text/json": components["schemas"]["UpdateConceptBranchCommandAsync"];
                "application/*+json": components["schemas"]["UpdateConceptBranchCommandAsync"];
            };
        };
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
        };
    };
    DeleteConceptBranch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The ID of the concept branch to delete. */
                conceptBranchId: number;
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
                    "text/plain": components["schemas"]["ProblemDetails"];
                    "application/json": components["schemas"]["ProblemDetails"];
                    "text/json": components["schemas"]["ProblemDetails"];
                };
            };
        };
    };
    GetContractAccess: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractAccessViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractAccessViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractAccessViewModelIReadOnlyListResponse"];
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
    GetContractAccessById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractAccessId: number;
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
                    "text/plain": components["schemas"]["ContractAccessViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractAccessViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractAccessViewModelIReadOnlyListResponse"];
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
    DeleteContractAccess: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractAccessId: number;
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
    UpdateContractAccess: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractAccessUpdateCommandAsync"];
                "text/json": components["schemas"]["ContractAccessUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ContractAccessUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractAccessViewModelResponse"];
                    "application/json": components["schemas"]["ContractAccessViewModelResponse"];
                    "text/json": components["schemas"]["ContractAccessViewModelResponse"];
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
    CreateContractAccess: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractAccessCreateCommandAsync"];
                "text/json": components["schemas"]["ContractAccessCreateCommandAsync"];
                "application/*+json": components["schemas"]["ContractAccessCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractAccessViewModelResponse"];
                    "application/json": components["schemas"]["ContractAccessViewModelResponse"];
                    "text/json": components["schemas"]["ContractAccessViewModelResponse"];
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
    GetContractAddendums: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractAddendumViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractAddendumViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractAddendumViewModelIReadOnlyListResponse"];
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
    GetContractAddendumById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractAddendumId: number;
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
                    "text/plain": components["schemas"]["ContractAddendumViewModelResponse"];
                    "application/json": components["schemas"]["ContractAddendumViewModelResponse"];
                    "text/json": components["schemas"]["ContractAddendumViewModelResponse"];
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
    DeleteContractAddendum: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractAddendumId: number;
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
    UpdateContractAddendum: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractAddendumUpdateCommandAsync"];
                "text/json": components["schemas"]["ContractAddendumUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ContractAddendumUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractAddendumViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractAddendumViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractAddendumViewModelIReadOnlyListResponse"];
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
    CreateContractAddendum: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractAddendumCreateCommandAsync"];
                "text/json": components["schemas"]["ContractAddendumCreateCommandAsync"];
                "application/*+json": components["schemas"]["ContractAddendumCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractAddendumViewModelResponse"];
                    "application/json": components["schemas"]["ContractAddendumViewModelResponse"];
                    "text/json": components["schemas"]["ContractAddendumViewModelResponse"];
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
    CloneContractAddendumById: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractAddendumCloneCommandAsync"];
                "text/json": components["schemas"]["ContractAddendumCloneCommandAsync"];
                "application/*+json": components["schemas"]["ContractAddendumCloneCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractAddendumViewModelResponse"];
                    "application/json": components["schemas"]["ContractAddendumViewModelResponse"];
                    "text/json": components["schemas"]["ContractAddendumViewModelResponse"];
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
    GetContractBranches: {
        parameters: {
            query?: {
                /** @description Optional referral date to filter branches by addendum validity */
                ReferralDate?: string;
            };
            header?: never;
            path: {
                ContractId: number;
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
                    "text/plain": components["schemas"]["ContractBranchViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractBranchViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractBranchViewModelIReadOnlyListResponse"];
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
    GetContractAddendumBranches: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AddendumId: number;
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
                    "text/plain": components["schemas"]["ContractBranchViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractBranchViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractBranchViewModelIReadOnlyListResponse"];
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
    GetContractBranchById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                BranchId: number;
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
                    "text/plain": components["schemas"]["ContractBranchViewModelResponse"];
                    "application/json": components["schemas"]["ContractBranchViewModelResponse"];
                    "text/json": components["schemas"]["ContractBranchViewModelResponse"];
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
    DeleteContractBranch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                BranchId: number;
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
                    "text/plain": components["schemas"]["ContractBranchViewModelResponse"];
                    "application/json": components["schemas"]["ContractBranchViewModelResponse"];
                    "text/json": components["schemas"]["ContractBranchViewModelResponse"];
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
    UpdateContractBranch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractBranchUpdateCommandAsync"];
                "text/json": components["schemas"]["ContractBranchUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ContractBranchUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractBranchViewModelResponse"];
                    "application/json": components["schemas"]["ContractBranchViewModelResponse"];
                    "text/json": components["schemas"]["ContractBranchViewModelResponse"];
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
    AddContractBranch: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractBranchCreateCommandAsync"];
                "text/json": components["schemas"]["ContractBranchCreateCommandAsync"];
                "application/*+json": components["schemas"]["ContractBranchCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractBranchViewModelResponse"];
                    "application/json": components["schemas"]["ContractBranchViewModelResponse"];
                    "text/json": components["schemas"]["ContractBranchViewModelResponse"];
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
    GetAgents: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["CommissionAgentViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["CommissionAgentViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["CommissionAgentViewModelIReadOnlyListPagedResponse"];
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
    GetAgentsByContractAssociated: {
        parameters: {
            query?: {
                AssociatedContractId?: number;
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
                    "text/plain": components["schemas"]["CommissionAgentViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["CommissionAgentViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["CommissionAgentViewModelIReadOnlyListPagedResponse"];
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
    UpdateAgent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateCommissionAgentCommand"];
                "text/json": components["schemas"]["UpdateCommissionAgentCommand"];
                "application/*+json": components["schemas"]["UpdateCommissionAgentCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["CommissionAgentViewModelResponse"];
                    "application/json": components["schemas"]["CommissionAgentViewModelResponse"];
                    "text/json": components["schemas"]["CommissionAgentViewModelResponse"];
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
    AddAgent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateCommissionAgentCommand"];
                "text/json": components["schemas"]["CreateCommissionAgentCommand"];
                "application/*+json": components["schemas"]["CreateCommissionAgentCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["CommissionAgentViewModelResponse"];
                    "application/json": components["schemas"]["CommissionAgentViewModelResponse"];
                    "text/json": components["schemas"]["CommissionAgentViewModelResponse"];
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
    GetAgentById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgentId: number;
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
                    "text/plain": components["schemas"]["CommissionAgentViewModelResponse"];
                    "application/json": components["schemas"]["CommissionAgentViewModelResponse"];
                    "text/json": components["schemas"]["CommissionAgentViewModelResponse"];
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
    GetAgentByPractitionerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractId: number;
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
                    "text/plain": components["schemas"]["CommissionAgentViewModelResponse"];
                    "application/json": components["schemas"]["CommissionAgentViewModelResponse"];
                    "text/json": components["schemas"]["CommissionAgentViewModelResponse"];
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
    GetCommissionAgentConceptsByAgentId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AgentId: number;
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
                    "text/plain": components["schemas"]["ContractCommissionAgentConceptViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractCommissionAgentConceptViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractCommissionAgentConceptViewModelIReadOnlyListPagedResponse"];
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
    GetCommissionAgentConceptsByPractitionerId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractId: number;
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
                    "text/plain": components["schemas"]["ContractCommissionAgentConceptViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractCommissionAgentConceptViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractCommissionAgentConceptViewModelIReadOnlyListPagedResponse"];
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
    GetCommissionAgentConceptById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
                    "text/plain": components["schemas"]["ContractCommissionAgentConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractCommissionAgentConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractCommissionAgentConceptViewModelResponse"];
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
    RemoveConcept: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
    UpdateCommissionAgentConcept: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContractCommissionAgentConceptCommandAsync"];
                "text/json": components["schemas"]["UpdateContractCommissionAgentConceptCommandAsync"];
                "application/*+json": components["schemas"]["UpdateContractCommissionAgentConceptCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractCommissionAgentConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractCommissionAgentConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractCommissionAgentConceptViewModelResponse"];
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
    AddConcept: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateContractCommissionAgentConceptCommand"];
                "text/json": components["schemas"]["CreateContractCommissionAgentConceptCommand"];
                "application/*+json": components["schemas"]["CreateContractCommissionAgentConceptCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractCommissionAgentConceptViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractCommissionAgentConceptViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractCommissionAgentConceptViewModelIReadOnlyListResponse"];
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
    GetContractConcept: {
        parameters: {
            query?: {
                referralDate?: string;
            };
            header?: never;
            path: {
                ContractID: number;
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
                    "text/plain": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
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
    GetContractAddendumConcept: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AddendumId: number;
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
                    "text/plain": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
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
    GetContractAddendumConcepts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AddendumId: number;
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
                    "text/plain": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
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
    GetContractConceptById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
                    "text/plain": components["schemas"]["ContractConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractConceptViewModelResponse"];
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
    DeleteContractConcept: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
    GetParentConceptsByConceptId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractConceptId: number;
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
                    "text/plain": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractConceptViewModelIReadOnlyListPagedResponse"];
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
    UpdateContractConcept: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContractConceptCommand"];
                "text/json": components["schemas"]["UpdateContractConceptCommand"];
                "application/*+json": components["schemas"]["UpdateContractConceptCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractConceptViewModelResponse"];
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
    AddContractConcept: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateContractConceptCommand"];
                "text/json": components["schemas"]["CreateContractConceptCommand"];
                "application/*+json": components["schemas"]["CreateContractConceptCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractConceptViewModelResponse"];
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
    AssociateVisitConcept: {
        parameters: {
            query?: {
                VisitConceptId?: string;
            };
            header?: never;
            path: {
                ContractConceptId: number;
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
    DisassociateVisitConcept: {
        parameters: {
            query?: {
                VisitConceptId?: string;
            };
            header?: never;
            path: {
                ContractConceptId: number;
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
    GetAllApplicableConceptsByVisit: {
        parameters: {
            query?: {
                /** @description Optional stage identifier. */
                stageId?: number;
                /** @description Optional stage type if stageId is not provided. */
                stageType?: components["schemas"]["ContractStageTypeEnum"];
            };
            header?: never;
            path: {
                /** @description Contract identifier. */
                ContractID: number;
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
                    "text/plain": components["schemas"]["ContractConceptViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractConceptViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractConceptViewModelIReadOnlyListResponse"];
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
    GetContractConceptConcepts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractConceptId: number;
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
                    "text/plain": components["schemas"]["ContractConceptConceptViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractConceptConceptViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractConceptConceptViewModelIReadOnlyListPagedResponse"];
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
    GetContractConceptConceptById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractConceptConceptId: number;
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
                    "text/plain": components["schemas"]["ContractConceptConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractConceptConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractConceptConceptViewModelResponse"];
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
    DeleteContractConceptConcept: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Contract Concept's Concept Identifier */
                ContractConceptConceptId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created */
            201: {
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
    UpdateContractConceptConcept: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractConceptConceptUpdateCommandAsync"];
                "text/json": components["schemas"]["ContractConceptConceptUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ContractConceptConceptUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractConceptConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractConceptConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractConceptConceptViewModelResponse"];
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
    AddContractConceptConcept: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractConceptConceptCreateCommandAsync"];
                "text/json": components["schemas"]["ContractConceptConceptCreateCommandAsync"];
                "application/*+json": components["schemas"]["ContractConceptConceptCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractConceptConceptViewModelResponse"];
                    "application/json": components["schemas"]["ContractConceptConceptViewModelResponse"];
                    "text/json": components["schemas"]["ContractConceptConceptViewModelResponse"];
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
    DeleteContractConceptConceptByRelationship: {
        parameters: {
            query?: {
                ContractConceptId?: number;
                RelatedContractConceptId?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created */
            201: {
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
    GetContractConceptRelationship: {
        parameters: {
            query?: {
                formConcept?: string;
            };
            header?: never;
            path: {
                contractId: number;
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
                    "text/plain": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
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
    GetContractConceptRelationshipMinimal: {
        parameters: {
            query?: {
                formConcept?: string;
            };
            header?: never;
            path: {
                contractId: number;
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
                    "text/plain": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
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
    GetContractConceptRelationshipById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                conceptRelationshipId: number;
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
                    "text/plain": components["schemas"]["ContractConceptFormRelationshipViewModelResponse"];
                    "application/json": components["schemas"]["ContractConceptFormRelationshipViewModelResponse"];
                    "text/json": components["schemas"]["ContractConceptFormRelationshipViewModelResponse"];
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
                    "text/plain": components["schemas"]["Response"];
                    "application/json": components["schemas"]["Response"];
                    "text/json": components["schemas"]["Response"];
                };
            };
        };
    };
    CreateContractConceptRelationShip: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractId: number;
            };
            cookie?: never;
        };
        /** @description The data to create the relationship. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateContractConceptFormRelationshipCommand"];
                "text/json": components["schemas"]["CreateContractConceptFormRelationshipCommand"];
                "application/*+json": components["schemas"]["CreateContractConceptFormRelationshipCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
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
    UpdateContractConceptRelationShip: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The updated data. */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContractConceptFormRelationshipCommand"];
                "text/json": components["schemas"]["UpdateContractConceptFormRelationshipCommand"];
                "application/*+json": components["schemas"]["UpdateContractConceptFormRelationshipCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractConceptFormRelationshipViewModelIReadOnlyListResponse"];
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
    DeleteContractConceptRelationShip: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                conceptRelationshipId: number;
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
    GetContractConceptPaymentSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractConceptId: number;
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
                    "text/plain": components["schemas"]["ContractConceptPaymentScheduleViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractConceptPaymentScheduleViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractConceptPaymentScheduleViewModelIReadOnlyListPagedResponse"];
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
    GetContractConceptPaymentScheduleById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ConceptPaymentScheduleId: number;
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
                    "text/plain": components["schemas"]["ContractConceptPaymentScheduleViewModelResponse"];
                    "application/json": components["schemas"]["ContractConceptPaymentScheduleViewModelResponse"];
                    "text/json": components["schemas"]["ContractConceptPaymentScheduleViewModelResponse"];
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
    UpdateContractConceptPaymentSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContractConceptPaymentScheduleCommand"];
                "text/json": components["schemas"]["UpdateContractConceptPaymentScheduleCommand"];
                "application/*+json": components["schemas"]["UpdateContractConceptPaymentScheduleCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractConceptPaymentScheduleViewModelResponse"];
                    "application/json": components["schemas"]["ContractConceptPaymentScheduleViewModelResponse"];
                    "text/json": components["schemas"]["ContractConceptPaymentScheduleViewModelResponse"];
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
    AddContractConceptPaymentSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateContractConceptPaymentScheduleCommand"];
                "text/json": components["schemas"]["CreateContractConceptPaymentScheduleCommand"];
                "application/*+json": components["schemas"]["CreateContractConceptPaymentScheduleCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractConceptPaymentScheduleViewModelResponse"];
                    "application/json": components["schemas"]["ContractConceptPaymentScheduleViewModelResponse"];
                    "text/json": components["schemas"]["ContractConceptPaymentScheduleViewModelResponse"];
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
    DeleteContractPaymentSchedule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Contract Concept payment schedule Identifier */
                ContractConceptPaymentScheduleId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created */
            201: {
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
    GetContractCycles: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractCycleViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractCycleViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractCycleViewModelIReadOnlyListResponse"];
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
    GetContractAddendumCycles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AddendumId: number;
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
                    "text/plain": components["schemas"]["ContractCycleViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractCycleViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractCycleViewModelIReadOnlyListResponse"];
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
    GetContractCycleById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                CycleId: number;
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
                    "text/plain": components["schemas"]["ContractCycleViewModelResponse"];
                    "application/json": components["schemas"]["ContractCycleViewModelResponse"];
                    "text/json": components["schemas"]["ContractCycleViewModelResponse"];
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
    UpdateContractCycle: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContractCycleCommand"];
                "text/json": components["schemas"]["UpdateContractCycleCommand"];
                "application/*+json": components["schemas"]["UpdateContractCycleCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractCycleViewModelResponse"];
                    "application/json": components["schemas"]["ContractCycleViewModelResponse"];
                    "text/json": components["schemas"]["ContractCycleViewModelResponse"];
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
    AddContractCycle: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateContractCycleCommand"];
                "text/json": components["schemas"]["CreateContractCycleCommand"];
                "application/*+json": components["schemas"]["CreateContractCycleCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractCycleViewModelResponse"];
                    "application/json": components["schemas"]["ContractCycleViewModelResponse"];
                    "text/json": components["schemas"]["ContractCycleViewModelResponse"];
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
    DeleteContractCycle: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractCycleId: number;
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
                    "text/plain": components["schemas"]["ContractCycleViewModelResponse"];
                    "application/json": components["schemas"]["ContractCycleViewModelResponse"];
                    "text/json": components["schemas"]["ContractCycleViewModelResponse"];
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
    GetContractFiles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The contract ID */
                ContractId: number;
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
                    "text/plain": components["schemas"]["ContractFileViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractFileViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractFileViewModelIReadOnlyListResponse"];
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
    UploadContractFiles: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The contract ID */
                ContractId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /** @description The files to upload */
                    files?: string[];
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
    GetContractFileById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The file ID */
                FileId: number;
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
                    "text/plain": components["schemas"]["ContractFileViewModelResponse"];
                    "application/json": components["schemas"]["ContractFileViewModelResponse"];
                    "text/json": components["schemas"]["ContractFileViewModelResponse"];
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
    DeleteContractFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The file ID to delete */
                FileId: number;
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
    UpdateContractFile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The update command */
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContractFileCommand"];
                "text/json": components["schemas"]["UpdateContractFileCommand"];
                "application/*+json": components["schemas"]["UpdateContractFileCommand"];
            };
        };
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
    DownloadContractFile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description The file ID to download */
                FileId: number;
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
    CreateImportContractProcess: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateContractIAImportProcessCommandAsync"];
                "text/json": components["schemas"]["CreateContractIAImportProcessCommandAsync"];
                "application/*+json": components["schemas"]["CreateContractIAImportProcessCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractIAImportProcessViewModelResponse"];
                    "application/json": components["schemas"]["ContractIAImportProcessViewModelResponse"];
                    "text/json": components["schemas"]["ContractIAImportProcessViewModelResponse"];
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
    GetLastImportContractProcess: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractIAImportProcessViewModelResponse"];
                    "application/json": components["schemas"]["ContractIAImportProcessViewModelResponse"];
                    "text/json": components["schemas"]["ContractIAImportProcessViewModelResponse"];
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
    GetImportContractProcessById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ProcessId: string;
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
                    "text/plain": components["schemas"]["ContractIAImportProcessViewModelResponse"];
                    "application/json": components["schemas"]["ContractIAImportProcessViewModelResponse"];
                    "text/json": components["schemas"]["ContractIAImportProcessViewModelResponse"];
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
    GetContracts: {
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
    UpdateContract: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContractCommand"];
                "text/json": components["schemas"]["UpdateContractCommand"];
                "application/*+json": components["schemas"]["UpdateContractCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
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
    CreateContract: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateContractCommand"];
                "text/json": components["schemas"]["CreateContractCommand"];
                "application/*+json": components["schemas"]["CreateContractCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
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
    GetContractById: {
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
    GetContractByProtocolId: {
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
    CloneContractById: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractCloneCommandAsync"];
                "text/json": components["schemas"]["ContractCloneCommandAsync"];
                "application/*+json": components["schemas"]["ContractCloneCommandAsync"];
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
    SetContractValidityDateStart: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contractId: number;
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
                    "text/plain": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
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
    SetContractValidityDateEnd: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contractId: number;
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
                    "text/plain": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
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
    UpdateFeeDivisionContract: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractId: number;
                FeeDivisionValue: number;
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
                    "text/plain": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
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
    DeleteContract: {
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
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ContractViewModelIReadOnlyListResponse"];
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
    GetContractStageItems: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractStageId: number;
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
                    "text/plain": components["schemas"]["ContractStageItemViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractStageItemViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractStageItemViewModelIReadOnlyListPagedResponse"];
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
    AddContractStageItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractStageId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateContractStageItemCommand"];
                "text/json": components["schemas"]["CreateContractStageItemCommand"];
                "application/*+json": components["schemas"]["CreateContractStageItemCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractStageItemViewModelResponse"];
                    "application/json": components["schemas"]["ContractStageItemViewModelResponse"];
                    "text/json": components["schemas"]["ContractStageItemViewModelResponse"];
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
    GetContractStageItemById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractStageId: number;
                StageItemId: number;
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
                    "text/plain": components["schemas"]["ContractStageItemViewModelResponse"];
                    "application/json": components["schemas"]["ContractStageItemViewModelResponse"];
                    "text/json": components["schemas"]["ContractStageItemViewModelResponse"];
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
    UpdateContractStageItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractStageId: number;
                StageItemId: number;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContractStageItemCommand"];
                "text/json": components["schemas"]["UpdateContractStageItemCommand"];
                "application/*+json": components["schemas"]["UpdateContractStageItemCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractStageItemViewModelResponse"];
                    "application/json": components["schemas"]["ContractStageItemViewModelResponse"];
                    "text/json": components["schemas"]["ContractStageItemViewModelResponse"];
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
    DeleteContractStageItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ContractStageId: number;
                StageItemId: number;
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
    GetContractStages: {
        parameters: {
            query?: {
                referralDate?: string;
            };
            header?: never;
            path: {
                ContractID: number;
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
                    "text/plain": components["schemas"]["ContractStageViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractStageViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractStageViewModelIReadOnlyListPagedResponse"];
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
    GetContractAddendumStages: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AddendumID: number;
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
                    "text/plain": components["schemas"]["ContractStageViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractStageViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractStageViewModelIReadOnlyListPagedResponse"];
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
    GetContractStageById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
                    "text/plain": components["schemas"]["ContractStageViewModelResponse"];
                    "application/json": components["schemas"]["ContractStageViewModelResponse"];
                    "text/json": components["schemas"]["ContractStageViewModelResponse"];
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
    DeleteContractStage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
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
    UpdateContractStage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateContractStageCommand"];
                "text/json": components["schemas"]["UpdateContractStageCommand"];
                "application/*+json": components["schemas"]["UpdateContractStageCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractStageViewModelResponse"];
                    "application/json": components["schemas"]["ContractStageViewModelResponse"];
                    "text/json": components["schemas"]["ContractStageViewModelResponse"];
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
    AddContractStage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateContractStageCommand"];
                "text/json": components["schemas"]["CreateContractStageCommand"];
                "application/*+json": components["schemas"]["CreateContractStageCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractStageViewModelResponse"];
                    "application/json": components["schemas"]["ContractStageViewModelResponse"];
                    "text/json": components["schemas"]["ContractStageViewModelResponse"];
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
    ContractStageLinkToVisit: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ContractStageSetEmrVisitRelatedCommandAsync"];
                "text/json": components["schemas"]["ContractStageSetEmrVisitRelatedCommandAsync"];
                "application/*+json": components["schemas"]["ContractStageSetEmrVisitRelatedCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ContractStageViewModelResponse"];
                    "application/json": components["schemas"]["ContractStageViewModelResponse"];
                    "text/json": components["schemas"]["ContractStageViewModelResponse"];
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
    GetContractStagesTypes: {
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
                    "text/plain": components["schemas"]["ContractStageTypeViewModelIReadOnlyListPagedResponse"];
                    "application/json": components["schemas"]["ContractStageTypeViewModelIReadOnlyListPagedResponse"];
                    "text/json": components["schemas"]["ContractStageTypeViewModelIReadOnlyListPagedResponse"];
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
    GetContractStagesTypeById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                StageTypeId: number;
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
                    "text/plain": components["schemas"]["ContractStageTypeViewModelResponse"];
                    "application/json": components["schemas"]["ContractStageTypeViewModelResponse"];
                    "text/json": components["schemas"]["ContractStageTypeViewModelResponse"];
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
    GetPractitionerContractByPractitionerId: {
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
                    "text/plain": components["schemas"]["PractitionerContractViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PractitionerContractViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PractitionerContractViewModelIReadOnlyListResponse"];
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
                    "text/plain": components["schemas"]["PractitionerContractViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerContractViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerContractViewModelResponse"];
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
    CheckPractitionerContractAssociationsByContractId: {
        parameters: {
            query?: {
                ContractId?: number;
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
                    "text/plain": components["schemas"]["StringResponse"];
                    "application/json": components["schemas"]["StringResponse"];
                    "text/json": components["schemas"]["StringResponse"];
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
                "application/json": components["schemas"]["AssociateContractToPractitionerCommandAsync"];
                "text/json": components["schemas"]["AssociateContractToPractitionerCommandAsync"];
                "application/*+json": components["schemas"]["AssociateContractToPractitionerCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PractitionerContractViewModelResponse"];
                    "application/json": components["schemas"]["PractitionerContractViewModelResponse"];
                    "text/json": components["schemas"]["PractitionerContractViewModelResponse"];
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
    GetContractProtocolByProtocolId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                protocolId: number;
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
    GetProtocolAssociationByContractId: {
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
    DisassociateContractFromProtocol: {
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
    CheckProtocolContractAssociationsByContractId: {
        parameters: {
            query?: {
                ContractId?: number;
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
    AssociateContractToProtocol: {
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
