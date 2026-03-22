# Prebiller Gateway Integration

Generated on 2026-03-22T18:01:20.787Z.

## Module Status

- `pricelists`: integrated (10 endpoints)
- `medicalinsurances`: integrated (12 endpoints)
- `medicalservices`: integrated (7 endpoints)
- `agreements`: integrated (25 endpoints)
- `snowmed`: integrated (3 endpoints)
- `agreementsaggregator`: integrated (8 endpoints)
- `persons`: integrated (62 endpoints)
- `providers`: integrated (5 endpoints)
- `providerassociation`: integrated (14 endpoints)
- `provideraggregator`: integrated (8 endpoints)
- `sponsors`: integrated (6 endpoints)
- `contracts`: integrated (121 endpoints)
- `sponsorcontracts`: integrated (4 endpoints)
- `practitioners`: integrated (23 endpoints)
- `practitionersaggregator`: integrated (9 endpoints)
- `concepts`: integrated (4 endpoints)
- `tenantaggregator`: integrated (6 endpoints)
- `tenantpricelists`: integrated (8 endpoints)
- `protocols`: integrated (111 endpoints)
- `notifications`: error (0 endpoints)
  error: HTTP 500
- `settlements`: integrated (52 endpoints)
- `cashflow`: integrated (42 endpoints)
- `ia`: integrated (11 endpoints)
- `turnero`: integrated (51 endpoints)
- `specialties`: integrated (5 endpoints)

## Integrated Endpoints

### Price Lists API

- `POST /pricelists` -> `AddPriceList`: Add Price to Price list
- `PUT /pricelists` -> `UpdatePriceList`: Add Price to Price list
- `POST /pricelists/details` -> `AddPriceListDetail`: Add Price to Price list
- `PUT /pricelists/details` -> `UpdatePriceListDetail`: Update Price to Price list
- `GET /pricelists/{priceListId}` -> `GetPriceList`: Add Price to Price list
- `GET /pricelists/{priceListId}/clone` -> `ClonePriceList`: Clone a price list
- `DELETE /pricelists/details/{PriceListDetialsId}` -> `DeletePriceListDetail`: Delete Price from Price List
- `GET /pricelists/{priceListId}/details` -> `GetPriceListDetailsByPriceList`
- `GET /pricelists/details/{priceListDetailId}` -> `GetPriceListDetail`: Add Price to Price list
- `GET /pricelists/{PriceListId}/details/{ItemRefererId}` -> `GetCurrentPriceByReferenceId`: Get current price by ReferenceId

### Medical Insurances API

- `GET /medicalinsurances/{medicalInsuranceId}/plans` -> `GetMedicalInsurancePlans`: Geet all medical insurance plans
- `GET /medicalinsurances/plans/{planId}` -> `GetMedicalInsurancePlan`: Get plan by id
- `DELETE /medicalinsurances/plans/{planId}` -> `DeleteMedicalInsurancePlan`: Delete a plan
- `POST /medicalinsurances/plans` -> `AddMedicalInsurancePlan`: Add new plan
- `PUT /medicalinsurances/plans` -> `UpdateMedicalInsurancePlan`: update a plan
- `GET /medicalinsurances` -> `GetMedicalInsurances`: Geet all medical insurance
- `POST /medicalinsurances` -> `AddMedicalInsurance`: Add medical insurance
- `PUT /medicalinsurances` -> `UpdateMedicalInsurance`: Update medical insurance
- `GET /medicalinsurances/{medicalInsuranceId}` -> `GetMedicalInsuranceById`: Geet medical insurance by id
- `DELETE /medicalinsurances/{medicalInsuranceId}` -> `DeleteMedicalInsurance`: Delete a medical Insurance
- `POST /medicalinsurances/enableagreements` -> `MedicalInsuranceAgreementsEnable`: Enable Medical Insurance Agreements
- `POST /medicalinsurances/disableagreements` -> `MedicalInsuranceAgreementsDisable`: Disable Medical Insurance Agreements

### Medical Services API

- `GET /medicalServices` -> `GetMedicalServices`: Geet all services
- `POST /medicalServices` -> `AddMedicalService`: Create a service
- `PUT /medicalServices` -> `UpdateMedicalService`: Create a service
- `GET /medicalServices/{medicalServiceId}` -> `GetMedicalServiceById`: get service by id
- `POST /medicalServices/settings` -> `ChangeMedicalServiceSettings`: Change medical service settings
- `PUT /medicalServices/{MedicalServiceId}/status/{NewStatus}` -> `UpdateMedicalServiceStatus`: Change medical service status
- `DELETE /medicalServices/{serviceId}` -> `DeleteMedicalService`: Delete Service

### Medical Agreements API

- `GET /agreements/services/{AgreementServiceId}/details` -> `GetAgreementServicesDetails`: Geet all details of a service
- `GET /agreements/services/details/{AgreementServiceDetailId}` -> `GetAgreementServicesDetail`: Get service detail by id
- `GET /agreements/{AgreementId}/services/{MedicalServiceId}/details/{InsurancePlanId}` -> `GetAgreementServicesDetailByAgreementServiceAndPlan`: Get service detail by id
- `POST /agreements/services/details` -> `CreateAgreementServicesDetail`: Create service detail by id
- `PUT /agreements/services/details` -> `UpdateAgreementServicesDetail`: Update service detail by id
- `DELETE /agreements/services/details/{AgreementServiceDetailsId}` -> `DeleteAgreementServicesDetail`: Update service detail by id
- `GET /agreements/{AgreementId}/services` -> `GetAgreementServices`: Geet all services
- `GET /agreements/services/{AgreementServiceId}` -> `GetAgreementServiceById`: Ger Agreement service By Id
- `DELETE /agreements/services/{AgreementServiceId}` -> `DeleteAgreementService`: Delete a agreement service
- `POST /agreements/services` -> `CreateAgreementService`: Add new Service to agreement
- `PUT /agreements/services` -> `UpdateAgreementService`
- `PUT /agreements/services/{AgreementServiceId}/status/{newStatus}` -> `ChangeStatusAgreementService`
- `GET /agreements` -> `GetMedicalInsuranceAgreements`: Get All agreements
- `POST /agreements` -> `AddAgreement`: Add new agreement
- `PUT /agreements` -> `UpdateAgreement`: update agreement
- `GET /agreements/{AgreementId}` -> `GetAgreementById`: Get agreement by id
- `GET /agreements/{AgreementId}/activePriceList/{ReferecenceDate}` -> `GetActivePriceListByAgreementId`: Get active price list by agreement id
- `GET /agreements/{AgreementId}/PriceList` -> `GetPriceListByAgreement`: Get agreement price lists
- `GET /agreements/PriceList/{AgreementPriceListId}` -> `GetAgreementPriceListById`: Get agreement price list by id
- `DELETE /agreements/PriceList/{AgreementPriceListId}` -> `DeleteAgreementPriceListById`: Delete Pricelist from agreement
- `POST /agreements/PriceList` -> `AddAgreementPriceListById`: Link existing price list to a aggrement
- `POST /agreements/PriceList/{AgreementPriceListId}/startvalidity` -> `SetStartValidityAgreementPriceList`: Create new price list for an agreement
- `POST /agreements/PriceList/{AgreementPriceListId}/endvalidity` -> `SetEndValidityAgreementPriceList`: Set en validity date for a pricelist of agreement
- `POST /agreements/PriceList/{AgreementPriceListId}/expire` -> `ExpireAgreementPriceList`: Set en validity date for a pricelist of agreement
- `DELETE /agreements/{agreementId}` -> `DeleteAgreement`: Delete Agreement

### Snowmed API

- `GET /pathologies/{searchText}` -> `GetPatologiesByTerm`: Search patologies definition
- `GET /procedures/{searchText}` -> `GetProceduresByTerm`: Search procedures definition
- `GET /specialties/{searchText}` -> `GetSpecialtiesByTerm`: Search procedures definition

### Medical Agreements Aggregators API

- `GET /agreements.aggregator/agreements/{agreementId}` -> `GetAgreementById`: Get Agreement by id
- `GET /agreements.aggregator/agreements/pricelist/{agreementPriceListId}` -> `GetAgreementPriceListById`: Get Agreement price list by id
- `POST /agreements.aggregator/agreements/pricelist` -> `CreateAgreementPriceList`: Create new price list for agreement
- `POST /agreements.aggregator/agreements/pricelist/details` -> `CreateAgreementPriceListDetails`: Create new price list for agreement
- `GET /agreements.aggregator/agreements/pricelist/{AgreementPriceListId}/clone` -> `CloneAgreementPriceList`: Clone agreement price list
- `GET /agreements.aggregator/agreements/{agreementid}/medicalservice/{medicalServiceId}/currentPrice/{referenceDate}` -> `GetCurrentPrice`: Get Current Price List By Agreement Service Id
- `POST /agreements.aggregator/agreements/pricelist/currentPrice` -> `GetCurrentPriceListByAgreementServiceId`: Get current price
- `GET /agreements.aggregator/info` -> `get-/agreements.aggregator/info`

### Persons API

- `GET /persons/{PersonId}/addresses` -> `GetAddressesByPersonId`: Get all addresses by person
- `GET /persons/addresses/{AddressId}` -> `GetAddressById`: Get Address by Id
- `DELETE /persons/addresses/{AddressId}` -> `DeleteAddress`: Delete an Address
- `POST /persons/addresses` -> `CreateAddress`: Create Address
- `PUT /persons/addresses` -> `UpdateAddress`: Update Address
- `GET /persons/{PersonId}/emails` -> `GetEmailsByPersonId`
- `GET /persons/emails/{EmailId}` -> `GetEmailById`
- `DELETE /persons/emails/{EmailId}` -> `DeleteEmail`
- `POST /persons/emails` -> `CreateEmail`
- `PUT /persons/emails` -> `UpdateEmail`
- `GET /persons/{PersonId}/external-associations` -> `GetExternalAssociationsByPersonId`: Get external associations for a person
- `GET /persons/external-associations/{ExternalAssociationId}` -> `GetExternalAssociationById`: Get external association by id
- `PUT /persons/external-associations/{ExternalAssociationId}` -> `UpdateExternalAssociation`
- `DELETE /persons/external-associations/{ExternalAssociationId}` -> `DeleteExternalAssociation`: Delete external association
- `POST /persons/external-associations` -> `CreateExternalAssociation`: Create new external association to a person
- `GET /persons/genders` -> `GetGenders`: Get all genders
- `POST /persons/genders` -> `CreateGender`: Create new Gender
- `PUT /persons/genders` -> `UpdateGender`: Update Gender
- `GET /persons/genders/{GenderId}` -> `GetGenderById`: Get gender by Id
- `DELETE /persons/genders/{GenderId}` -> `DeleteGender`: Delete gender
- `GET /persons/identifiertypes` -> `GetIdentifierTypes`: Get all person indentifier types
- `GET /persons/identifierTypes/{IdentifierTypeId}` -> `GetIdentifierTypeById`: Get identifier type by id
- `DELETE /persons/identifierTypes/{IdentifierTypeId}` -> `DeleteIdentifierType`: Delete identifier type
- `POST /persons/identifierTypes` -> `CreateIndetifierType`: Create new identifier type
- `PUT /persons/identifierTypes` -> `UpdateIdentifierType`: Update Identifier Type
- `GET /persons/maritalstatuses` -> `GetMaritalStatus`
- `POST /persons/maritalstatuses` -> `CreateMaritalStatus`
- `PUT /persons/maritalstatuses` -> `UpdateMaritalStatus`
- `GET /persons/maritalstatuses/{MaritalStatusId}` -> `GetMaritalStatusById`: Get Marital Status by Id
- `DELETE /persons/maritalstatuses/{MaritalStatusId}` -> `DeleteMaritalStatus`
- `GET /persons` -> `GetAllPersons`: Get all person
- `POST /persons` -> `CreatePerson`: Create Person
- `PUT /persons` -> `UpdatePerson`: Update Person
- `GET /persons/{PersonId}` -> `GetPersonById`: Get Person by Id
- `DELETE /persons/{PersonId}` -> `DeletePerson`: Delete an Address
- `PUT /persons/fix-identifiers` -> `FixPersonIdentifiers`
- `GET /persons/{PersonId}/identifiers` -> `GetIdentifiersByPersonId`: Get all identifiers by person Id
- `GET /persons/identifiers/{PersonIdentifierId}` -> `GetPersonIdentifierById`: Get person identifier by Id
- `DELETE /persons/identifiers/{PersonIdentifierId}` -> `DeletePersonIdentifier`: Delete person identifier
- `GET /persons/identifiers/verification` -> `VerifyIdentifier`: Verify if the identifier is already used by another person
- `POST /persons/identifiers` -> `CreatePersonIdentifier`: Create new person identifier
- `PUT /persons/identifiers` -> `UpdatePersonIdentifier`: Update person identifier
- `GET /persons/{PersonId}/preferences` -> `GetPreferencesByPersonId`: Get all identifiers by person Id
- `GET /persons/preferences/{PersonPreferenceId}` -> `GetPersonPreferenceById`: Get person preference by Id
- `DELETE /persons/preferences/{PersonPreferenceId}` -> `DeletePersonPreference`: Delete a person preference
- `POST /persons/preferences` -> `CreatePersonPreference`: Create a new person preference
- `PUT /persons/preferences` -> `UpdatePersonPreference`: Update a person preference
- `GET /persons/{PersonId}/relationships` -> `GetPersonRelationships`: Get all person relationship
- `GET /persons/relationships/{PersonRelationshipId}` -> `GetPersonRelationshipById`: Get person relationship by Id
- `DELETE /persons/relationships/{PersonRelationshipId}` -> `DeletePersonRelationship`: Delete person relationship
- `POST /persons/relationships` -> `CreatePersonRelationship`: Create new person relationship
- `PUT /persons/relationships` -> `UpdatePersonRelationship`: Update person relationship
- `GET /persons/{PersonId}/phones` -> `GetPhonesByPersonId`: Get all phones by person
- `GET /persons/phones/{PhoneId}` -> `GetPhonesById`: Get phone by id
- `DELETE /persons/phones/{PhoneId}` -> `DeletePhone`: Delete phone
- `POST /persons/phones` -> `CreatePhone`: Get Phone by Id
- `PUT /persons/phones` -> `UpdatePhone`: Update Phone
- `GET /persons/relationshiptypes` -> `GetRelationshipTypes`: Get all Relationship types
- `POST /persons/relationshiptypes` -> `CreateRelationShipType`: Create new Relationship Type
- `PUT /persons/relationshiptypes` -> `UpdateRelationshipType`: Update Relationship Type
- `GET /persons/relationshiptypes/{RelationshipTypeId}` -> `GetRelationshipTypeById`: Get relationship type by Id
- `DELETE /persons/relationshiptypes/{RelationshipTypeId}` -> `DeleteRelationshipType`: Delete Relationship Type

### Providers API

- `GET /providers` -> `GetAllProviders`: Get all provider
- `POST /providers` -> `CreateProvider`: Create Provider
- `PUT /providers` -> `UpdateProvider`: Update Provider
- `GET /providers/{ProviderId}` -> `GetProviderById`: Get Provider by Id
- `DELETE /providers/{ProviderId}` -> `DeleteProvider`: Delete an provider

### Provider Association API

- `GET /providers/associations/{ProviderID}/medicalservices` -> `GetMedicalServicesByProviderId`: Get all provider medical Services
- `GET /providers/associations/medicalservices/{ProviderMedicalServiceId}` -> `GetProviderMedicalServiceById`: Get provider Medical Service by id
- `DELETE /providers/associations/medicalservices/{ProviderMedicalServiceId}` -> `DisassociateMedicalServiceFromToProvider`: Delete medical Service association
- `POST /providers/associations/medicalservices` -> `AssociateMedicalServiceToProvider`: Associate provider medical Service
- `DELETE /providers/associations/{ProviderID}/medicalservices/{MedicalServiceId}` -> `DisassociateMedicalServiceFromToPractitionerByMedicalServiceId`: Delete medical Service association by MedicalService Id
- `GET /providers/associations/{ProviderID}/pricelists` -> `GetPriceListsByProviderId`: Get all price lists by provider id
- `GET /providers/associations/pricelists/{ProviderPriceListId}` -> `GetProviderPriceListById`: get provider price list by id
- `GET /providers/associations/{ProviderId}/pricelists/{PriceListId}` -> `GetProviderPriceListByPriceListId`: get provider price list by pricelist id
- `PUT /providers/associations/PriceList/{ProviderPriceListId}/startvalidity` -> `SetStartValidityProviderPriceList`: Create new price list for a provider
- `PUT /providers/associations/PriceList/{ProviderPriceListId}/endvalidity` -> `SetEndValidityProviderPriceList`: Set en validity date for a provider price list
- `PUT /providers/associations/PriceList/{ProviderPriceListId}/expire` -> `ExpireProviderPriceList`: Set en validity date for a provider price list
- `PUT /providers/associations/pricelists` -> `AssociatePriceListToProvider`: Create Price List for provider
- `DELETE /providers/associations/PriceList/{ProviderPriceListId}` -> `DeleteProviderPriceListById`: Delete Pricelist from provider
- `DELETE /providers/associations/{ProviderId}/PriceList/{PriceListId}` -> `DeleteProviderPriceListByPriceListId`: Delete Pricelist from provider

### Provider Aggregator API

- `GET /providers/aggregator/{ProviderId}/medicalservices` -> `GetMedicalServicesByProviderId`: Get Medical Services by Practitioner id
- `GET /providers/aggregator/medicalservices/{ProviderMedicalServiceId}` -> `GetProviderMedicalServiceById`: Get Provider Medical Services By Id
- `POST /providers/aggregator/medicalservices` -> `AssociateMedicalServiceByProviderId`: Associate medical insurance to provider
- `GET /providers/aggregator/{ProviderId}/pricelists` -> `GetPriceListByProviderID`: Get Price Lists by tenant
- `GET /providers/aggregator/pricelists/{ProviderPriceListId}` -> `GetProviderPriceListById`: Get Agreement price list by id
- `GET /providers/aggregator/{ProviderId}/pricelists/{PriceListId}` -> `GetProviderPriceListByPriceListId`: Get Agreement price list by price list id
- `POST /providers/aggregator/pricelist` -> `CreateProviderPriceList`: Create new price list for provider
- `GET /providers/aggregator/pricelist/{ProviderPriceListId}/clone` -> `CloneProviderPriceList`: Clone agreement price list

### Sponsors API

- `GET /sponsors` -> `GetAllSponsor`: Get all sponsors
- `POST /sponsors` -> `CreateSponsor`: Create sponsor
- `PUT /sponsors` -> `UpdateSponsor`: Update sponsor
- `GET /sponsors/resync` -> `ReSyncSponsor`: resync sponsor
- `GET /sponsors/{SponsorId}` -> `GetSponsorById`: Get sponsor by Id
- `DELETE /sponsors/{SponsorId}` -> `DeleteSponsor`: Delete an sponsor

### Contracts API

- `GET /contracts/{ContractID}/commissionconcepts` -> `GetContractCommissionConcepts`: Get all contract concepts
- `GET /contracts/commissionconcepts/{CommissionConceptId}` -> `GetContractCommissionConceptById`: Get Contract Concept by id
- `DELETE /contracts/commissionconcepts/{CommissionConceptId}` -> `DeleteContractCommissionConcept`
- `POST /contracts/commissionconcepts` -> `AddContractCommisionConcept`: Create new Contract Concept
- `PUT /contracts/commissionconcepts` -> `UpdateContractCommissionConcept`: Update Contract Concept
- `GET /contracts/concepts/{contractConceptId}/branches` -> `GetConceptBranchesByContractConceptId`: Get all concept branches for a specific contract concept.
- `POST /contracts/concepts/{contractConceptId}/branches` -> `CreateConceptBranch`: Create a new concept branch association.
- `GET /contracts/concepts/branches/{conceptBranchId}` -> `GetConceptBranchById`: Get a specific concept branch by its ID.
- `PUT /contracts/concepts/branches/{conceptBranchId}` -> `UpdateConceptBranch`: Update an existing concept branch.
- `DELETE /contracts/concepts/branches/{conceptBranchId}` -> `DeleteConceptBranch`: Delete a concept branch by its ID.
- `GET /contracts/{ContractId}/access` -> `GetContractAccess`: Get Contract Access
- `GET /contracts/access/{ContractAccessId}` -> `GetContractAccessById`: Get Contract Access by id
- `DELETE /contracts/access/{ContractAccessId}` -> `DeleteContractAccess`: Delete a contract addendum
- `POST /contracts/access` -> `CreateContractAccess`: Create a new contract access
- `PUT /contracts/access` -> `UpdateContractAccess`: Update a contract access
- `GET /contracts/{ContractId}/addendums` -> `GetContractAddendums`: Get contract addendums by contract id
- `GET /contracts/addendums/{ContractAddendumId}` -> `GetContractAddendumById`: Get contract addendum by id
- `DELETE /contracts/addendums/{ContractAddendumId}` -> `DeleteContractAddendum`: Delete a contract addendum
- `POST /contracts/addendums` -> `CreateContractAddendum`: Create a new contract addendum
- `PUT /contracts/addendums` -> `UpdateContractAddendum`: Update a contract addendum
- `POST /contracts/addendums/clone` -> `CloneContractAddendumById`: Clone addendum
- `GET /contracts/{ContractId}/branches` -> `GetContractBranches`: Get all contract branch by contract Id
- `GET /contracts/addendums/{AddendumId}/branches` -> `GetContractAddendumBranches`: Get all contract branch by contract Addendum Id
- `GET /contracts/branches/{BranchId}` -> `GetContractBranchById`: Get Contract Concept by id
- `DELETE /contracts/branches/{BranchId}` -> `DeleteContractBranch`: Delete Contract branch
- `POST /contracts/branches` -> `AddContractBranch`: Create new Contract branch
- `PUT /contracts/branches` -> `UpdateContractBranch`: Update Contract branch
- `GET /contracts/{ContractId}/commissionagent` -> `GetAgents`: Get all Contract Commission Agent
- `GET /contracts/commissionagent` -> `GetAgentsByContractAssociated`: Get all Agent by Associated Contract Id
- `POST /contracts/commissionagent` -> `AddAgent`: Create new Agent
- `PUT /contracts/commissionagent` -> `UpdateAgent`: Delete agent
- `GET /contracts/commissionagent/{AgentId}` -> `GetAgentById`: Get Agent by id
- `GET /contracts/{ContractId}/commissionagent/{PractitionerId}` -> `GetAgentByPractitionerId`: Get Agent by Practitioner Id
- `GET /contracts/commissionagents/{AgentId}/concepts` -> `GetCommissionAgentConceptsByAgentId`: Get all Contract Commission Agent Concepts
- `GET /contracts/{ContractId}/commissionagents/{PractitionerID}/concepts` -> `GetCommissionAgentConceptsByPractitionerId`: Get all Contract Commission Agent Concepts
- `GET /contracts/commissionagents/concepts/{ConceptId}` -> `GetCommissionAgentConceptById`: Get Concept by id
- `DELETE /contracts/commissionagents/concepts/{ConceptId}` -> `RemoveConcept`: Delete Concept
- `POST /contracts/commissionagents/concepts` -> `AddConcept`: Create new Concept
- `PUT /contracts/commissionagents/concepts` -> `UpdateCommissionAgentConcept`
- `GET /contracts/{ContractID}/concepts` -> `GetContractConcept`: Get all contract concepts
- `GET /contracts/addendum/{AddendumId}/concepts` -> `GetContractAddendumConcept`: Get all contract concepts
- `GET /contracts/addendums/{AddendumId}/concepts` -> `GetContractAddendumConcepts`: Get all contract addendum concepts
- `GET /contracts/concepts/{ConceptId}` -> `GetContractConceptById`: Get Contract Concept by id
- `DELETE /contracts/concepts/{ConceptId}` -> `DeleteContractConcept`
- `GET /contracts/concepts/{ContractConceptId}/patent-concepts` -> `GetParentConceptsByConceptId`: Get all contract addendum concepts
- `POST /contracts/concepts` -> `AddContractConcept`: Create new Contract Concept
- `PUT /contracts/concepts` -> `UpdateContractConcept`: Update Contract Concept
- `POST /contracts/concepts/{ContractConceptId}/associate-visit` -> `AssociateVisitConcept`: Associate a visit concept with a contract concept
- `POST /contracts/concepts/{ContractConceptId}/disassociate-visit` -> `DisassociateVisitConcept`: Disassociate a visit concept from a contract concept
- `GET /contracts/{ContractID}/concepts/applicable-visit` -> `GetAllApplicableConceptsByVisit`: Get all applicable contract concepts for a visit (filtered by optional StageId or StageType).
- `GET /contracts/concepts/{ContractConceptId}/concepts` -> `GetContractConceptConcepts`: Get all contract concepts concepts
- `GET /contracts/concepts/concepts/{ContractConceptConceptId}` -> `GetContractConceptConceptById`: Get Contract Concept by id
- `DELETE /contracts/concepts/concepts/{ContractConceptConceptId}` -> `DeleteContractConceptConcept`: Delete Contract Concept
- `POST /contracts/concepts/concepts` -> `AddContractConceptConcept`: Create new Contract Concept
- `PUT /contracts/concepts/concepts` -> `UpdateContractConceptConcept`
- `DELETE /contracts/concepts/concepts` -> `DeleteContractConceptConceptByRelationship`
- `GET /contracts/{contractId}/concepts/Relationship` -> `GetContractConceptRelationship`: Get all ContractConceptFormRelationships for a specific contract.
- `GET /contracts/{contractId}/concepts/Relationship/minimal` -> `GetContractConceptRelationshipMinimal`: Get minimal relationships (distinct by FormConcept) for a specific contract.
- `GET /contracts/concepts/Relationship/{ConceptRelationshipId}` -> `GetContractConceptRelationshipById`: Gets a ContractConceptFormRelationship by its ID.
- `POST /contracts/{ContractId}/concepts/Relationship` -> `CreateContractConceptRelationShip`: Creates a new ContractConceptFormRelationship.
- `PUT /contracts/concepts/Relationship` -> `UpdateContractConceptRelationShip`: Updates an existing ContractConceptFormRelationship.
- `DELETE /contracts/concepts/Relationship/{conceptRelationshipId}` -> `DeleteContractConceptRelationShip`: Deletes a ContractConceptFormRelationship by its ID.
- `GET /contracts/concepts/{ContractConceptId}/paymentschedule` -> `GetContractConceptPaymentSchedule`: Get all Contract Concept Payment Schedules by Contract Concept Id
- `GET /contracts/concepts/paymentschedule/{ConceptPaymentScheduleId}` -> `GetContractConceptPaymentScheduleById`: Get concept payment schedule by id
- `POST /contracts/concepts/paymentschedule` -> `AddContractConceptPaymentSchedule`: Create new Contract Concept payment schedule
- `PUT /contracts/concepts/paymentschedule` -> `UpdateContractConceptPaymentSchedule`: Update Concept Payment Schedule
- `DELETE /contracts/concepts/paymentschedule/{ContractConceptPaymentScheduleId}` -> `DeleteContractPaymentSchedule`: Delete Contract Concept payment schedule
- `GET /contracts/{ContractId}/cycles` -> `GetContractCycles`: Get all contract cycles by contract Id
- `GET /contracts/addendums/{AddendumId}/cycles` -> `GetContractAddendumCycles`: Get all cycles by contract addendum Id
- `GET /contracts/cycles/{CycleId}` -> `GetContractCycleById`: Get Contract Concept by id
- `POST /contracts/cycles` -> `AddContractCycle`: Create new Contract Cycle
- `PUT /contracts/cycles` -> `UpdateContractCycle`: Update Contract Cycle
- `DELETE /contracts/cycles/{ContractCycleId}` -> `DeleteContractCycle`: Delete Contract Cycle
- `GET /contracts/{ContractId}/files` -> `GetContractFiles`: Get all files by contract Id
- `POST /contracts/{ContractId}/files` -> `UploadContractFiles`: Upload files for a contract
- `GET /contracts/files/{FileId}` -> `GetContractFileById`: Get contract file by id
- `DELETE /contracts/files/{FileId}` -> `DeleteContractFile`: Delete a contract file
- `PUT /contracts/files` -> `UpdateContractFile`: Update a contract file
- `GET /contracts/files/{FileId}/download` -> `DownloadContractFile`: Download a contract file
- `POST /contracts/import` -> `CreateImportContractProcess`: Create IA import process for a contract
- `GET /contracts/{ContractId}/import/last` -> `GetLastImportContractProcess`: Get last IA import process for a contract
- `GET /contracts/import/{ProcessId}` -> `GetImportContractProcessById`: Get IA import process by its Id
- `GET /contracts` -> `GetContracts`: Get contracts
- `POST /contracts` -> `CreateContract`: Create new Practitioner contract
- `PUT /contracts` -> `UpdateContract`: Update Contract info
- `GET /contracts/{ContractId}` -> `GetContractById`: Get contract by Id
- `GET /contracts/protocol/{ProtocolId}` -> `GetContractByProtocolId`: Get contract by Protocol Id
- `GET /contracts/practitioner/{PractitionerId}` -> `GetContractByPractitionerId`: Get contract by Practitioner Id
- `POST /contracts/clone` -> `CloneContractById`: Clone contract
- `POST /contracts/{contractId}/setstart` -> `SetContractValidityDateStart`: Set Validity date Start of Contract
- `POST /contracts/{contractId}/setend` -> `SetContractValidityDateEnd`: Set Validity date end of Contract
- `PATCH /contracts/{ContractId}/feedivision/{FeeDivisionValue}` -> `UpdateFeeDivisionContract`
- `DELETE /contracts/{ContractID}` -> `DeleteContract`
- `GET /contracts/stages/{ContractStageId}/items` -> `GetContractStageItems`
- `POST /contracts/stages/{ContractStageId}/items` -> `AddContractStageItem`
- `GET /contracts/stages/{ContractStageId}/items/{StageItemId}` -> `GetContractStageItemById`
- `PUT /contracts/stages/{ContractStageId}/items/{StageItemId}` -> `UpdateContractStageItem`
- `DELETE /contracts/stages/{ContractStageId}/items/{StageItemId}` -> `DeleteContractStageItem`
- `GET /contracts/{ContractID}/stages` -> `GetContractStages`: Get all contracts stages
- `GET /contracts/addendums/{AddendumID}/stages` -> `GetContractAddendumStages`: Get all contract stages by contract Addendum Id
- `GET /contracts/stages/{StageId}` -> `GetContractStageById`: Get Contract stages by id
- `DELETE /contracts/stages/{StageId}` -> `DeleteContractStage`: Delete Contract stages
- `POST /contracts/stages` -> `AddContractStage`: Create new Contract stages
- `PUT /contracts/stages` -> `UpdateContractStage`: Update Contract stages
- `PATCH /contracts/stages` -> `ContractStageLinkToVisit`: Link Stage to a protocol visit
- `GET /contracts/stages/types` -> `GetContractStagesTypes`: Get all contract stages types
- `POST /contracts/stages/types` -> `post-/contracts/stages/types`: Create a new contract stage type
- `GET /contracts/stages/types/{StageTypeId}` -> `GetContractStagesTypeById`: Get contract stages type by id
- `PUT /contracts/stages/types/{id}` -> `put-/contracts/stages/types/{id}`: Update an existing contract stage type
- `DELETE /contracts/stages/types/{id}` -> `delete-/contracts/stages/types/{id}`: Delete a contract stage type
- `GET /practitioners/contracts/{PractitionerId}/contracts` -> `GetPractitionerContractByPractitionerId`: Get all Practitioner contracts
- `GET /practitioners/contracts/contracts/{PractitionerContractId}` -> `GetPractitionerContractById`: Get Practitioner contract by id
- `DELETE /practitioners/contracts/contracts/{PractitionerContractId}` -> `DisassociateContractFromPractitioner`: Delete contract Association
- `GET /practitioners/contracts/contracts/checkassociation` -> `CheckPractitionerContractAssociationsByContractId`
- `POST /practitioners/contracts/contracts` -> `AssociateContractToPractitioner`: Create new Contract
- `GET /protocols/contracts/{ProtocolId}/contracts` -> `GetContractProtocolByProtocolId`
- `GET /protocols/contracts/contracts/{ContractId}/associations` -> `GetProtocolAssociationByContractId`: Get protocol association by contract id
- `GET /protocols/contracts/contracts/{ProtocolContractId}` -> `GetProtocolContractById`: Get protocol contract by id
- `DELETE /protocols/contracts/contracts/{ProtocolContractId}` -> `DisassociateContractFromProtocol`: Delete contract association
- `GET /protocols/contracts/contracts/checkassociation` -> `CheckProtocolContractAssociationsByContractId`: Check association by contract id
- `POST /protocols/contracts/contracts` -> `AssociateContractToProtocol`: Associate contract

### SponsorContracts API

- `GET /sponsors/contracts/{SponsorID}/contracts` -> `GetContractBySponsorId`: Get all Sponsor contracts
- `GET /sponsors/contracts/contracts/{SponsorContractId}` -> `GetSponsorContractById`: Get Sponsor contract by id
- `DELETE /sponsors/contracts/contracts/{SponsorContractId}` -> `DisassociateContractToSponsor`: Delete contract Association
- `POST /sponsors/contracts/contracts` -> `AssociateContractToSponsor`: Create new Contract

### Practitioners Associations API

- `GET /practitioners/associations/{PractitionerID}/settings` -> `GetSettingsByPractitionerId`: Get Settings By Practitioner Id
- `GET /practitioners/associations/settings/particularattention/{ParticularAttentionStatus}` -> `GetPractitionersByParticularAttentionStatus`: Get Practitioner list by particular attention status
- `POST /practitioners/associations/settings` -> `SetPractitionerSettings`: Set practitioner Settings
- `PUT /practitioners/associations/settings` -> `UpdatePractitionerSettings`: Update Practitioner Setting
- `GET /practitioners/associations/{PractitionerID}/contracts` -> `GetContractByPractitionerId`: Get all Practitioner contracts
- `GET /practitioners/associations/contracts/{PractitionerContractId}` -> `GetPractitionerContractById`: Get Practitioner contract by id
- `DELETE /practitioners/associations/contracts/{PractitionerContractId}` -> `DisassociateContractFromPractitioner`: Delete Contract association
- `POST /practitioners/associations/contracts` -> `AssociateContractToPractitioner`: Associate contract to Practitioner
- `GET /practitioners/associations/{PractitionerID}/medicalinsurances` -> `GetMedicalInsurancesByPractitionerId`: Get all Practitioner medical insurances
- `GET /practitioners/associations/medicalinsurances/{PractitionerMedicalInsuranceId}` -> `GetPractitionerMedicalInsuranceById`: Get Practitioner Medical Insurance by id
- `DELETE /practitioners/associations/medicalinsurances/{PractitionerMedicalInsuranceId}` -> `DisassociateMedicalInsuranceFromToPractitioner`: Delete medical insurance association
- `POST /practitioners/associations/medicalinsurances` -> `AssociateMedicalInsuranceToPractitioner`: Associate Practitioner medical insurance
- `DELETE /practitioners/associations/{PractitionerId}/medicalinsurances/{MedicalInsuranceId}` -> `DisassociateMedicalInsuranceFromToPractitionerByMedicalInsuranceId`: Delete medical insurance association by MedicalInsurance Id
- `GET /practitioners/associations/{PractitionerID}/medicalservices` -> `GetMedicalServicesByPractitionerId`: Get all Practitioner medical Services
- `GET /practitioners/associations/medicalservices/{PractitionerMedicalServiceId}` -> `GetPractitionerMedicalServiceById`: Get Practitioner Medical Service by id
- `DELETE /practitioners/associations/medicalservices/{PractitionerMedicalServiceId}` -> `DisassociateMedicalServiceFromToPractitioner`: Delete medical Service association
- `POST /practitioners/associations/medicalservices` -> `AssociateMedicalServiceToPractitioner`: Associate Practitioner medical Service
- `DELETE /practitioners/associations/{PractitionerId}/medicalservices/{MedicalServiceId}` -> `DisassociateMedicalServiceFromToPractitionerByMedicalServiceId`: Delete medical Service association by MedicalInsurance Id
- `GET /practitioners/associations` -> `GetPractitioners`: Get Settings By Practitioner Id
- `GET /practitioners/associations/{practitionerId}/specialties` -> `GetSpecialtiesByPractitionerId`: Get all specialties for a practitioner
- `GET /practitioners/associations/specialties/{id}` -> `GetPractitionerSpecialtyById`: Get a practitioner specialty association by id
- `DELETE /practitioners/associations/specialties/{id}` -> `DisassociatePractitionerSpecialty`: Disassociate a specialty from a practitioner
- `POST /practitioners/associations/specialties` -> `AssociatePractitionerSpecialty`: Associate a specialty to a practitioner

### Practitioners Aggregator API

- `GET /practitioners/aggregator/{PractitionerId}/contracts` -> `GetContractsByPractitionerId`: Get Contracts by Practitioner id
- `GET /practitioners/aggregator/contracts/{PractitionerContractId}` -> `GetPractitionerContractsById`: Get Practitioner Contract By Id
- `GET /practitioners/aggregator/{PractitionerId}/medicalinsurances` -> `GetMedicalInsurancesByPractitionerId`: Get Medical Insurances by Practitioner id
- `GET /practitioners/aggregator/medicalinsurances/{PractitionerMedicalInsuranceId}` -> `GetPractitionerMedicalInsuranceById`: Get Practitioner Medical Insurance By Id
- `POST /practitioners/aggregator/medicalinsurances` -> `AssociateMedicalInsuranceByPratitionerId`: Associate medical insurance to practitioner
- `GET /practitioners/aggregator/{PractitionerId}/medicalservices` -> `GetMedicalServicesByPractitionerId`: Get Medical Services by Practitioner id
- `GET /practitioners/aggregator/medicalservices/{PractitionerMedicalServiceId}` -> `GetPractitionerMedicalServiceById`: Get Practitioner Medical Services By Id
- `POST /practitioners/aggregator/medicalservices` -> `AssociateMedicalServiceByPratitionerId`: Associate medical insurance to practitioner
- `GET /practitioners/aggregator` -> `GetPractitioner`: Get Practitioners

### Concepts API

- `GET /concepts` -> `Getconcepts`: Get concepts
- `POST /concepts` -> `CreateConcept`: Create new Concept
- `PUT /concepts` -> `UpdateConcept`: Update new Concept
- `GET /concepts/{ConceptId}` -> `GetConceptById`: Get Concept by id

### Tenant Aggregator API

- `GET /tenant/aggregator/info` -> `get-/tenant/aggregator/info`
- `GET /tenant/aggregator/pricelists` -> `GetPriceListByTenant`: Get Price Lists by tenant
- `POST /tenant/aggregator/pricelists` -> `CreateTenantPriceList`: Create new price list for agreement
- `PUT /tenant/aggregator/pricelists` -> `UpdateTenantPriceList`: Update new price list for agreement
- `GET /tenant/aggregator/pricelists/{TenantPriceListId}` -> `GetTenantPriceListById`: Get Agreement price list by id
- `GET /tenant/aggregator/pricelist/{TenantPriceListId}/clone` -> `CloneTenantPriceList`: Clone tenant price list

### Tenant Price Lists API

- `GET /tenant/pricelists` -> `GetTenantPriceLists`: Get all Tenant price List
- `POST /tenant/pricelists` -> `CreateTenantPriceList`: Create tenant price list
- `PUT /tenant/pricelists` -> `UpdateTenantPriceList`: Update tenant price list
- `GET /tenant/pricelists/active` -> `GetActiveTenantPriceLists`
- `GET /tenant/pricelists/{TenantPriceListId}` -> `GetTenantPriceListById`: Get Tenant price List by Id
- `DELETE /tenant/pricelists/{TenantPriceListId}` -> `DeleteTenantPriceList`: Delete tenant price list
- `PUT /tenant/pricelists/{TenantPriceListId}/validitystart` -> `SetValidityStartTenantPriceList`: Set validity start of tenant price list
- `PUT /tenant/pricelists/{TenantPriceListId}/validityend` -> `SetValidityEndTenantPriceList`: Set validity end of tenant price list

### Protocols API

- `GET /protocols/consumers` -> `GetAllConsumers`: Get All Consumers
- `POST /protocols/consumers` -> `CreateConsumer`: Create Consumer
- `GET /protocols/consumers/{id}` -> `GetConsumerById`: Get Consumer By Id
- `PUT /protocols/consumers/{id}` -> `UpdateConsumer`: Update Consumer
- `DELETE /protocols/consumers/{id}` -> `DeleteConsumer`: Delete Consumer
- `GET /protocols/protocols` -> `GetProtocols`: Get all protocols
- `GET /protocols/protocols/{ProtocolId}` -> `GetProtocolById`: Get ProtocolContract By Id
- `GET /protocols/protocols/{ProtocolId}/sponsorId` -> `GetSponsorIdByProtocolId`: Get Sponsor Id By Protocol Id
- `GET /protocols/protocols/{protocolId}/visits/{crossVersionId}/patient/{numberInProtocol}/concepts` -> `GetVisitConcepts`: Get concepts for a specific visit in a protocol
- `GET /protocols/info` -> `get-/protocols/info`
- `GET /protocols/visits/protocol/{ProtocolId}` -> `GetPatientVisitsByProtocolId`: Get all patient visits by protocol id
- `GET /protocols/visits/patient/{PatientId}` -> `GetVisitByPatientId`: Get all patient visits by patient id
- `GET /protocols/visits/{PatientVisitId}` -> `GetPatientVisitById`: Get Patient visit by ID
- `GET /protocols/visits/export` -> `ExportVisitsByDateRange`: Export patient visits by date range to Excel
- `GET /protocols/practitioners/{PractitionerId}/consumptions` -> `GetAllConsumptionsByPractitionerId`: Get all practitioner consumption by practitioner id.
- `GET /protocols/practitioners/{PractitionerId}/consumptions/status/{status}` -> `GetAllPractitionerConsumptionsByStatus`: Get all practitioner consumptions by practitioner id and status.
- `GET /protocols/practitioners/consumptions/{PractitionerConsumptionId}` -> `GetPractitionerConsumptionById`: Get all protocol consumption by protocol id.
- `PATCH /protocols/practitioners/consumptions/{PractitionerConsumptionId}` -> `ChangePractitionerConsumptionStatus`: Change protocol consumption status.
- `DELETE /protocols/practitioners/consumptions/{PractitionerConsumptionId}` -> `DeletePractitionerConsumption`
- `POST /protocols/practitioners/consumptions` -> `AddPractitionerConsumption`
- `PUT /protocols/practitioners/consumptions` -> `UpdatePractitionerConsumption`
- `PATCH /protocols/practitioners/consumptions/{ProtocolConsumptionId}/amount` -> `ChangePractitionerConsumptionAmount`: Change protocol consumption status.
- `PATCH /protocols/practitioners/consumptions/{ProtocolConsumptionId}/type/{newType}` -> `ChangeTypeOfPractitionerConsumption`: Assign provider to consumption.
- `PATCH /protocols/practitioners/consumptions/{PractitionerConsumptionId}/practitioner/{practitionerId}` -> `AssignPractitionerToConsumption`: Assign producer to consumption.
- `GET /protocols/practitioners/{practitionerId}/consumptions/export` -> `ExportConsumptionsByPractitionerId`: Export all practitioner consumption by practitioner id.
- `PATCH /protocols/practitioners/consumptions/{PractitionerConsumptionId}/link-settlement` -> `LinkPractitionerConsumptionToSettlement`: Link a practitioner consumption to a settlement.
- `PATCH /protocols/practitioners/consumptions/unlink-settlement/{SettlementId}` -> `UnlinkPractitionerConsumptionsFromSettlement`: Unlink all practitioner consumptions from a settlement.
- `GET /protocols/practitioners/{PractitionerId}/consumptions/sync` -> `GetALlSyncProcessByPractitioner`: Get all practitioner consumption sync process by practitioner id.
- `GET /protocols/practitioners/consumptions/sync/{PractitionerConsumptionSyncProcessId}` -> `GetPractitionerSyncProcessBySyncProcessById`: Get protocol consumption sync process by id.
- `DELETE /protocols/practitioners/consumptions/sync/{PractitionerConsumptionSyncProcessId}` -> `DeletePractitionerSyncProcess`: Delete a protocol consumption sync process.
- `GET /protocols/practitioners/{PractitionerId}/consumptions/sync/last` -> `GetLastPractitionerSyncProcess`: Get last sync process by practitioner id.
- `POST /protocols/practitioners/consumptions/sync` -> `CreatePractitionerSyncProcess`: Create a new protocol consumption sync process.
- `PUT /protocols/practitioners/consumptions/sync` -> `UpdatePractitionerSyncProcess`: Update an existing practitioner consumption sync process.
- `GET /protocols/protocols/{ProtocolId}/consumptions` -> `GetAllConsumptionsByProtocolId`: Get all protocol consumption by protocol id.
- `GET /protocols/protocols/{ProtocolId}/consumptions/status/{StatusId}` -> `GetAllProtocolConsumptionsByStatus`: Get all protocol consumption by protocol id.
- `GET /protocols/protocols/{ProtocolId}/consumptions/stage/{StageId}` -> `GetAllProtocolConsumptionsByStageId`: Get all protocol consumption by protocol id and stage id.
- `GET /protocols/protocols/{ProtocolId}/consumptions/totals` -> `GetTotalsByProtocol`: Get Totals of all protocol consumption by protocol id and status.
- `GET /protocols/protocols/{ProtocolId}/consumptions/withholding` -> `GetTotalWithholdingByProtocol`: Get withholding totals by protocol id.
- `GET /protocols/protocols/consumptions/provider/{ProviderId}` -> `GetConsumptionsByProvider`: Get all protocol consumption by provider and status.
- `GET /protocols/protocols/consumptions/{ProtocolConsumptionId}` -> `GetConsumptionById`: Get all protocol consumption by protocol id.
- `PATCH /protocols/protocols/consumptions/{ProtocolConsumptionId}` -> `ChangeProtocolConsumptionStatus`: Change protocol consumption status.
- `DELETE /protocols/protocols/consumptions/{ProtocolConsumptionId}` -> `DeleteProtocolConsumption`
- `POST /protocols/protocols/consumptions` -> `AddProtocolConsumption`
- `PUT /protocols/protocols/consumptions` -> `UpdateProtocolConsumption`
- `PATCH /protocols/protocols/consumptions/{ProtocolConsumptionId}/amount` -> `ChangeProtocolConsumptionAmount`: Change protocol consumption amount.
- `PATCH /protocols/protocols/consumptions/{ProtocolConsumptionId}/concept/{ConceptId}` -> `AssignConceptToConsumption`
- `PATCH /protocols/protocols/consumptions/{ProtocolConsumptionId}/medicalService/{MedicalServiceId}` -> `AssignMedicalServiceToConsumption`
- `PATCH /protocols/protocols/consumptions/{ProtocolConsumptionId}/producer/{ProducerId}` -> `AssignProducerToConsumption`
- `PATCH /protocols/protocols/consumptions/{ProtocolConsumptionId}/provider/{ProviderId}` -> `AssignProviderToConsumption`: Assign provider to consumption.
- `PATCH /protocols/protocols/consumptions/{ProtocolConsumptionId}/visit/{StageId}` -> `ChangeVisitOfConsumption`: Change visit of a protocol consumption.
- `PATCH /protocols/protocols/consumptions/{ProtocolConsumptionId}/type/{newType}` -> `ChangeTypeOfConsumption`: Assign provider to consumption.
- `GET /protocols/protocols/{ProtocolId}/consumptions/export` -> `ExportAllConsumptionsByProtocolId`: Export all protocol consumption by protocol id.
- `PATCH /protocols/protocols/consumptions/{ProtocolConsumptionId}/procedure` -> `SetConsumptionAsProcedure`: Set consumption as procedure.
- `PATCH /protocols/protocols/consumptions/{ProtocolConsumptionId}/additional` -> `SetConsumptionAsAdditional`: Set consumption as additional.
- `GET /protocols/protocols/consumptions/{ProtocolConsumptionId}/movements` -> `GetAllConsumptionMovementsByConsumptionId`: Get all protocol consumption movements by protocol consumption id.
- `GET /protocols/protocols/consumptions/movements/{ServiceConsumedMovementId}` -> `GetConsumptionMovementById`: Get protocol consumption movement by id.
- `DELETE /protocols/protocols/consumptions/movements/{ServiceConsumedMovementId}` -> `DeleteProtocolConsumptionMovement`: Delete protocol consumption movement.
- `POST /protocols/protocols/consumptions/movements` -> `AddProtocolConsumptionMovement`: Create protocol consumption movement.
- `PUT /protocols/protocols/consumptions/movements` -> `UpdateProtocolConsumptionMovement`: Update protocol consumption movement.
- `GET /protocols/protocols/{ProtocolId}/consumptions/sync` -> `GetALlSyncProcessByProtocol`: Get all protocol consumption sync process by protocol id.
- `GET /protocols/protocols/consumptions/sync/{ProtocolConsumptionSyncProcessId}` -> `GetBySyncProcessById`: Get protocol consumption sync process by id.
- `DELETE /protocols/protocols/consumptions/sync/{ProtocolConsumptionSyncProcessId}` -> `DeleteSyncProcess`: Delete a protocol consumption sync process.
- `GET /protocols/protocols/{ProtocolId}/consumptions/sync/last` -> `GetLastSyncProcess`: get last sync process
- `POST /protocols/protocols/consumptions/sync` -> `CreateSyncProcess`: Create a new protocol consumption sync process.
- `PUT /protocols/protocols/consumptions/sync` -> `UpdateSyncProcess`: Update an existing protocol consumption sync process.
- `GET /protocols/protocols/{ProtocolId}/consumptions/visit` -> `GetProtocolConsumptionVisits`: Retrieves all protocol consumption visits associated with a specific protocol ID.
- `GET /protocols/protocols/consumptions/visit/{visitId}` -> `GetProtocolConsumptionVisitById`: Retrieves a specific protocol consumption visit by its ID.
- `GET /protocols/protocols/{ProtocolId}/consumptions/visit/{stageId}` -> `GetProtocolConsumptionVisitByProtocolAndStage`: Retrieves a specific protocol consumption visit by its ID.
- `POST /protocols/protocols/consumptions/visit` -> `CreateProtocolVisit`: Creates a new protocol consumption visit.
- `PUT /protocols/protocols/consumptions/visit` -> `UpdateProtocolVisit`: Updates an existing protocol consumption visit.
- `DELETE /protocols/protocols/consumptions/visit` -> `DeleteProtocolVisit`: Deletes a specific protocol consumption visit by its ID.
- `POST /protocols/protocols/consumptions/{ConsumptionId}/visit/{ConsumptionVisitId}/link` -> `LinkConsumptionToVisit`: Links a protocol consumption to a specific visit.
- `POST /protocols/protocols/consumptions/{ConsumptionId}/visit/{ConsumptionVisitId}/unlink` -> `UnLinkConsumptionToVisit`: Unlinks a protocol consumption from a specific visit.
- `GET /protocols/protocols/consumptions/visit/{ProtocolVisitId}/totals` -> `GetProtocolConsumptionVisitTotals`: Get all Protocol Consumption Visit Totals by Protocol Visit Id
- `GET /protocols/protocols/consumptions/visit/totals/{VisitTotalId}` -> `GetProtocolConsumptionVisitTotalById`
- `DELETE /protocols/protocols/consumptions/visit/totals/{VisitTotalId}` -> `DeleteProtocolConsumptionVisitTotals`: Delete Protocol Consumption Visit Total
- `POST /protocols/protocols/consumptions/visit/totals` -> `CreateProtocolConsumptionVisitTotals`: Create Protocol Consumption Visit Total
- `PUT /protocols/protocols/consumptions/visit/totals` -> `UpdateProtocolConsumptionVisitTotals`: Update Protocol Consumption Visit Total
- `GET /protocols/protocols/{ProtocolId}/contracts` -> `GetProtocolContracts`
- `GET /protocols/protocols/contracts/{ProtocolContractId}` -> `GetProtocolContractById`: Get ProtocolContract By Id
- `PUT /protocols/protocols/contracts/{ProtocolContractId}` -> `SetEffectiveDateStart`: set effective date start
- `POST /protocols/protocols/contracts` -> `AddProtocolContract`
- `GET /protocols/protocols/patients` -> `GetProtocolPatients`: Get all patients by protocol id
- `GET /protocols/protocols/{ProtocolId}/patients` -> `GetProtocolPatientsByProtocolId`: Get all patients by protocol id
- `GET /protocols/protocols/{ProtocolId}/patients/{MedicalRecordNumber}` -> `GetProtocolPatientByMedicalRecordNumber`: Get all patient visits by patient id
- `GET /protocols/protocols/{ProtocolId}/patients/{NumberInProtocol}` -> `GetProtocolPatientByNumberInProtocol`: Get Patient visit by ID
- `GET /protocols/protocols/{ProtocolId}/practitioners` -> `GetPractitionersByProtocol`: Get all practitioners by protocol
- `GET /protocols/protocols/{ProtocolId}/practitioners/{PractitionerId}` -> `GetProtocolPractitionerById`: Get practitioner by protocol and practitioner id
- `GET /protocols/protocols/{ProtocolId}/practitioners/{PractitionerId}/visits` -> `GetVisitsByPractitioner`
- `GET /protocols/protocols/practitioners/{PractitionerId}/visits` -> `GetVisitsCountByPractitioner`: Get visits count group by date by practitioner
- `GET /protocols/protocols/practitioners/{PractitionerId}/visits/pdf` -> `ExportVisitsByPractitionerToPdf`: Export visits by practitioner to PDF
- `GET /protocols/protocols/practitioners/{PractitionerId}/visits/excel` -> `ExportVisitsByPractitionerToExcel`: Export visits by practitioner to Excel
- `GET /protocols/protocols/{ProtocolId}/visits/excel` -> `ExportVisitsByProtocolToExcel`: Export all visits by protocol to Excel
- `GET /protocols/protocols/{ProtocolId}/practitionersStudyTasks` -> `GetPractitionersStudyTasksByProtocol`: Get all practitioners by protocol
- `GET /protocols/protocols/{ProtocolId}/practitionersStudyTasks/{PractitionerId}` -> `GetProtocolPractitionerStudyTaskById`: Get practitioner by protocol and practitioner id
- `GET /protocols/services` -> `GetAllServices`: Get All Services
- `POST /protocols/services` -> `CreateService`: Create Service
- `GET /protocols/services/{id}` -> `GetServiceById`: Get Service By Id
- `PUT /protocols/services/{id}` -> `UpdateService`: Update Service
- `DELETE /protocols/services/{id}` -> `DeleteService`: Delete Service
- `GET /protocols/consumers/{consumerId}/services` -> `GetServicesByConsumerId`: Get Services By Consumer Id
- `GET /protocols/service-categories` -> `GetAllServiceCategories`: Get All Service Categories
- `POST /protocols/service-categories` -> `CreateServiceCategory`: Create Service Category
- `GET /protocols/service-categories/{id}` -> `GetServiceCategoryById`: Get Service Category By Id
- `PUT /protocols/service-categories/{id}` -> `UpdateServiceCategory`: Update Service Category
- `DELETE /protocols/service-categories/{id}` -> `DeleteServiceCategory`: Delete Service Category
- `GET /protocols/protocols/studytasks` -> `GetStudyTasks`: Get all StudyTasks
- `GET /protocols/protocols/studytasks/{StudyTaskId}` -> `GetStudyTaskById`: Get StudyTask by id
- `GET /protocols/protocols/{ProtocolId}/visits` -> `GetVisitsByProtocol`: Get all visitis by protocol
- `GET /protocols/protocols/{ProtocolId}/visits-full` -> `GetVisitsFullByProtocol`: Get all visitis by protocol
- `GET /protocols/protocols/visits/{VisitId}` -> `GetProtocolVisitById`: Get visit by id

### Liquidaciones API

- `GET /settlements/contract/{ContractID}/settlements` -> `GetAllSettlementsByContractId`: Get all settlements by contract id
- `GET /settlements/contract/settlements/{ContractSettlementId}` -> `GetContractSettlementById`: Get Contract Settlements By Id
- `POST /settlements/contract/settlements` -> `AssociateSettlementToContract`: Associate Settlement To Contract
- `DELETE /settlements/contract/settlements/{associationId}` -> `DisassociateSettlementFromContract`: Disassociate Settlement From Contract
- `GET /settlements/medicalagreements/{agreementId}/settlements` -> `GetAllSettlementsByAgreementId`: Get all settlements by Agreement id
- `GET /settlements/medicalagreements/settlements/{AgreementSettlementId}` -> `GetAgreementSettlementById`: Get Agreement Settlements By Id
- `POST /settlements/medicalagreements/settlements` -> `AssociateSettlementToAgreement`: Associate Settlement To Agreement
- `DELETE /settlements/medicalagreements/settlements/{ContractSettlementId}` -> `DisassociateSettlementFromAgreement`: Disassociate Settlement From Agreement
- `GET /settlements/info` -> `get-/settlements/info`
- `GET /settlements/Practitioners/{PractitionerId}/settlements` -> `GetAllSettlementsByPractitionerId`: Get all settlements by practitioner id
- `GET /settlements/Practitioners/settlements/{PractitionerSettlementId}` -> `GetPractitionerSettlementById`: Get practitioner Settlements By Id
- `DELETE /settlements/Practitioners/settlements/{PractitionerSettlementId}` -> `DisassociateSettlementFromPractitioner`: Disassociate Settlement From Agreement
- `POST /settlements/Practitioners/settlements` -> `AssociateSettlementToPractitioner`: Associate Settlement To Practitioner
- `GET /settlements/protocol/{ProtocolId}/settlements` -> `GetAllSettlementsByProtocolId`: Get all settlements by protocol id
- `GET /settlements/protocol/settlements/{ProtocolSettlementId}` -> `GetProtocolSettlementById`: Get protocol Settlements By Id
- `DELETE /settlements/protocol/settlements/{ProtocolSettlementId}` -> `DisassociateSettlementFromProtocol`: Disassociate Settlement From protocol
- `POST /settlements/protocol/settlements` -> `AssociateSettlementToProtocol`: Associate Settlement To protocol
- `GET /settlements/protocol/{ProtocolId}/patients` -> `GetAllPatientsByProtocolId`: Get all settlements by protocol id
- `GET /settlements/settlements` -> `GetAllSettlements`: Get all settlements
- `POST /settlements/settlements` -> `CreateSettlement`: Create Settlement
- `PUT /settlements/settlements` -> `UpdateSettlement`: Update Settlement
- `PATCH /settlements/settlements` -> `ChangeStatus`: change status of a Settlement
- `GET /settlements/settlements/{SettlementId}` -> `GetSettlementById`: Get settlement by Id
- `DELETE /settlements/settlements/{SettlementId}` -> `DeleteSettlement`: Delete a Settlement
- `GET /settlements/settlements/{SettlementId}/concepts` -> `GetAllSettlementConcept`: Get settlement concepts by settlement Id
- `GET /settlements/settlements/concepts/{SettlementConceptId}` -> `GetSettlementConceptById`: Get settlement concepts by settlementconcept Id
- `POST /settlements/settlements/concepts` -> `AddSettlementConcept`: add settlement concept
- `GET /settlements/settlements/{SettlementId}/debts` -> `GetAllDebtsBySettlementId`: Get all settlement debts by SettlementId
- `GET /settlements/settlements/debts/{SettlementDebtId}` -> `GetSettlementDebtById`: Get settlement debt by Id
- `GET /settlements/settlements/{SettlementId}/details` -> `GetAllDetailsBySettlementId`: Get all settlements details
- `GET /settlements/settlements/details/{SettlementDetailId}` -> `GetSettlementDetailsById`: Get settlement detail by Id
- `DELETE /settlements/settlements/details/{SettlementDetailId}` -> `DeleteSettlementDetail`: Delete a Settlement detail
- `POST /settlements/settlements/details` -> `CreateSettlementDetail`: Create Settlement detail
- `PUT /settlements/settlements/details` -> `UpdateSettlementDetail`: Update Settlement detail
- `PATCH /settlements/settlements/details/{SettlementDetailId}/exclude/{excludeStatus}` -> `ExcludeSettlementDetail`: Exclude a Settlement detail
- `PATCH /settlements/settlements/details/exclude/{excludeStatus}` -> `MasiveExcludeSettlementDetail`: Exclude all Settlement details by resume id
- `PATCH /settlements/settlements/details/{SettlementDetailId}/markok/{Status}` -> `VerifiedSettlementDetail`: Mark a Settlement detail as ok
- `PATCH /settlements/settlements/details/{SettlementDetailId}/marktoreview/{Status}` -> `ReviewSettlementDetail`: Delete a Settlement detail
- `GET /settlements/settlements/details/{DetailId}/concept-values` -> `GetAllConceptValuesBySettlementDetailId`: Get all concept values by detail id
- `GET /settlements/settlements/details/concept-values/{ConceptValueId}` -> `GetSettlementDetailConceptValueById`: Get concept value by Id
- `DELETE /settlements/settlements/details/concept-values/{ConceptValueId}` -> `DeleteSettlementDetailConceptValueById`: Delete concept value by Id
- `POST /settlements/settlements/details/concept-values` -> `CreateSettlementDetailConceptValue`
- `PUT /settlements/settlements/details/concept-values` -> `UpdateSettlementDetailConceptValue`
- `GET /settlements/settlements/{SettlementId}/resumes` -> `GetAllResumesBySettlementId`: Get all settlements resumes
- `GET /settlements/settlements/resumes/{SettlementResumeId}` -> `GetSettlementResumeById`: Get settlement resume by Id
- `DELETE /settlements/settlements/resumes/{SettlementResumeId}` -> `DeleteSettlementResume`: Delete a Settlement resume
- `POST /settlements/settlements/resumes` -> `CreateSettlementResume`: Create Settlement resume
- `PUT /settlements/settlements/resumes` -> `UpdateSettlementResume`: Update Settlement Resume
- `GET /settlements/Sponsors/{SponsorId}/settlements` -> `GetAllSettlementsBySponsorId`: Get all settlements by sponsor id
- `GET /settlements/Sponsors/settlements/{SponsorSettlementId}` -> `GetSponsorSettlementById`: Get sponsor Settlements By Id
- `DELETE /settlements/Sponsors/settlements/{SponsorSettlementId}` -> `DisassociateSettlementFromSponsor`: Disassociate Settlement From sponsor
- `POST /settlements/Sponsors/settlements` -> `AssociateSettlementToSponsor`: Associate Settlement To Sponsor

### Cashflow API

- `GET /cashflow/accounts` -> `GetAccounts`: Get all accounts by OwnerId
- `POST /cashflow/accounts` -> `CreateAccount`: Create a new account
- `GET /cashflow/accounts/{AccountId}` -> `GetAccount`: Get account by Id
- `GET /cashflow/accounts/{AccountId}/movements` -> `GetAccountMovements`: Get all movements by AccountId
- `GET /cashflow/accounts/movements/{AccountMovementId}` -> `GetAccountMovementById`: Get movement by Id
- `POST /cashflow/accounts/movements` -> `CreateAccountMovement`: Create a new movement
- `PUT /cashflow/accounts/movements` -> `UpdateAccountMovement`: Update a account movement
- `GET /cashflow/debts/creditor/{CreditorId}` -> `GetDebtsByCreditor`: Get all debts by Creditors or Debtors
- `GET /cashflow/debts/debtor/{DebtorId}` -> `GetDebtsByDebtor`: Get all debts by Debtor
- `GET /cashflow/debts/settlements/{SettlementId}` -> `GetAllDebtsBySettlementId`: Get debts by settlement id
- `GET /cashflow/debts/{DebtId}` -> `GetDebtById`: Get debt by Id
- `GET /cashflow/debts/{DebtorId}` -> `GetPendingCreditorDebtsByDebtorById`: Get all debts by Debtor
- `POST /cashflow/debts` -> `CreateDebt`: Create a new debt
- `POST /cashflow/debts/{debtId}/forgiveness` -> `DebtForgiveness`: Forgiveness a debt
- `POST /cashflow/debts/{debtId}/adjustment` -> `DebtAdjustment`: Debt adjustment
- `POST /cashflow/debts/{debtId}/rollback` -> `RollbackDebtCreation`: Rollback Debt Creation
- `GET /cashflow/debts/{debtId}/paid` -> `CheckDebtPaid`: Check if a debt is fully paid (no pending amount)
- `GET /cashflow/debts/{DebtId}/movements` -> `GetDebtsMovementsByDebtId`: Get all movements by DebtId
- `GET /cashflow/debts/movements/{debtMovementId}` -> `GetDebtMovementById`: Get debt movement by Id
- `POST /cashflow/debts/movements` -> `CreateDebtMovement`: Create a new debt movement
- `GET /cashflow/info` -> `get-/cashflow/info`
- `GET /cashflow/movement` -> `GetMovements`: Get movements debt or payment id
- `GET /cashflow/movement-types` -> `GetMovementTypes`: Get all movement types
- `POST /cashflow/movement-types` -> `CreateMovementType`: Create new movement Type
- `PUT /cashflow/movement-types` -> `UpdateMovementType`: Update Movement Type
- `GET /cashflow/movement-types/{MovementTypeId}` -> `GetMovementTypesById`: Get movement type by id
- `DELETE /cashflow/movement-types/{MovementTypeId}` -> `DeleteMovementType`: Delete Movement Type
- `GET /cashflow/payments/chart-info` -> `GetPaymentCharInfoByPeriod`
- `GET /cashflow/payments` -> `GetPaymentsByPayer`: Get all payments by Payer
- `POST /cashflow/payments` -> `CreatePayment`: Create a new payment
- `GET /cashflow/payments/pending-imputation` -> `GetPaymentsWithPendingImputation`: Get all payments with pending imputation amount
- `GET /cashflow/payments/{PaymentId}` -> `GetPaymentById`: Get payment by Id
- `POST /cashflow/payments/{paymentId}/rollback-creation` -> `RollbackPaymentCreation`: Rollback payment creation
- `POST /cashflow/payments/{paymentId}/rollback-imputations` -> `RollbackPaymentImputations`: Rollback payment Imputations
- `POST /cashflow/payments/{paymentId}/adjustment` -> `PaymentAdjustment`: Payment Adjustment
- `GET /cashflow/paymentmovement/debt/{debtId}` -> `GetPaymentMovementsByDebtId`: Get payments movements by debtId
- `GET /cashflow/paymentmovement/payment/{paymentId}` -> `GetPaymentMovementsByPaymentId`: Get payments movements by paymentId
- `GET /cashflow/system-movements` -> `GetSystemMovements`: Get all system movements
- `POST /cashflow/system-movements` -> `CreateSystemMovement`: Create a new system movement
- `PUT /cashflow/system-movements` -> `UpdateSystemMovement`: Update a system movement
- `GET /cashflow/system-movements/{SystemMovementId}` -> `GetSystemMovementsById`: Get all system movement by id
- `DELETE /cashflow/system-movements/{SystemMovementId}` -> `DeleteSystemMovement`

### IA API

- `POST /ia/api/v{version}/Ai/chat` -> `post-/ia/api/v{version}/Ai/chat`
- `POST /ia/api/v{version}/Ai/embed` -> `post-/ia/api/v{version}/Ai/embed`
- `POST /ia/api/v{version}/ContractMultiFile/extract` -> `ExtractContractFromMultipleFiles`
- `POST /ia/api/v{version}/ContractMultiFile/extract/stages` -> `ExtractStagesFromMultipleFiles`
- `POST /ia/api/v{version}/ContractMultiFile/extract/concepts` -> `ExtractConceptsFromMultipleFiles`
- `POST /ia/api/v{version}/ContractMultiFile/extract/schedules` -> `ExtractSchedulesFromMultipleFiles`
- `POST /ia/api/v{version}/ContractMultiFile/analyze/simple` -> `AnalyzeMultipleFilesSimple`
- `POST /ia/api/v{version}/ContractPdf/extract` -> `ExtractContractFromPdf`
- `POST /ia/api/v{version}/PdfAnalysis/analyze` -> `AnalyzePdf`
- `POST /ia/api/v{version}/PdfAnalysis/analyze/simple` -> `AnalyzePdfSimpleUpload`
- `POST /ia/api/v{version}/PdfAnalysis/analyze/upload` -> `AnalyzePdfUpload`

### Turnero API

- `POST /offices/Asignaciones/asignar` -> `post-/offices/Asignaciones/asignar`
- `PUT /offices/Asignaciones/liberar/{medicoId}` -> `put-/offices/Asignaciones/liberar/{medicoId}`
- `GET /offices/Asignaciones/activas` -> `get-/offices/Asignaciones/activas`
- `GET /offices/Consultorios` -> `get-/offices/Consultorios`
- `POST /offices/Consultorios` -> `post-/offices/Consultorios`
- `GET /offices/Consultorios/todos-disponibles` -> `get-/offices/Consultorios/todos-disponibles`
- `GET /offices/Consultorios/disponibles/{doctorId}` -> `get-/offices/Consultorios/disponibles/{doctorId}`
- `PUT /offices/Consultorios/{id}` -> `put-/offices/Consultorios/{id}`
- `DELETE /offices/Consultorios/{id}` -> `delete-/offices/Consultorios/{id}`
- `PUT /offices/Consultorios/{id}/estado` -> `put-/offices/Consultorios/{id}/estado`
- `GET /offices/historia_clinica/{pacienteId}` -> `get-/offices/historia_clinica/{pacienteId}`
- `POST /offices/historia_clinica` -> `post-/offices/historia_clinica`
- `POST /offices/Llamados` -> `post-/offices/Llamados`
- `GET /offices/Llamados/ultimos/{sectorId}` -> `get-/offices/Llamados/ultimos/{sectorId}`
- `POST /offices/Llamados/purge-old` -> `post-/offices/Llamados/purge-old`
- `GET /offices/Medicos` -> `get-/offices/Medicos`
- `POST /offices/Medicos` -> `post-/offices/Medicos`
- `GET /offices/Medicos/{id}` -> `get-/offices/Medicos/{id}`
- `PUT /offices/Medicos/{id}` -> `put-/offices/Medicos/{id}`
- `DELETE /offices/Medicos/{id}` -> `delete-/offices/Medicos/{id}`
- `GET /offices/Medicos/{medicoId}/configuracion` -> `get-/offices/Medicos/{medicoId}/configuracion`
- `GET /offices/Pacientes` -> `get-/offices/Pacientes`
- `POST /offices/Pacientes` -> `post-/offices/Pacientes`
- `GET /offices/Pacientes/{id}` -> `get-/offices/Pacientes/{id}`
- `GET /offices/Pacientes/{medicoId}/{sectorId}/{consultorioNumero}` -> `get-/offices/Pacientes/{medicoId}/{sectorId}/{consultorioNumero}`
- `POST /offices/prefacturador/generar` -> `post-/offices/prefacturador/generar`
- `GET /offices/prefacturador/{id}` -> `get-/offices/prefacturador/{id}`
- `GET /offices/prefacturador` -> `get-/offices/prefacturador`
- `PUT /offices/prefacturador/{id}/estado` -> `put-/offices/prefacturador/{id}/estado`
- `GET /offices/QueueDisplayScreen` -> `get-/offices/QueueDisplayScreen`
- `POST /offices/QueueDisplayScreen` -> `post-/offices/QueueDisplayScreen`
- `GET /offices/QueueDisplayScreen/{id}` -> `get-/offices/QueueDisplayScreen/{id}`
- `PUT /offices/QueueDisplayScreen/{id}` -> `put-/offices/QueueDisplayScreen/{id}`
- `DELETE /offices/QueueDisplayScreen/{id}` -> `delete-/offices/QueueDisplayScreen/{id}`
- `GET /offices/QueueDisplayScreen/DisplayInfo` -> `get-/offices/QueueDisplayScreen/DisplayInfo`
- `POST /offices/QueueDisplayScreen/register` -> `post-/offices/QueueDisplayScreen/register`
- `GET /offices/Sectores` -> `get-/offices/Sectores`
- `POST /offices/Sectores` -> `post-/offices/Sectores`
- `GET /offices/Sectores/{sectorId}` -> `get-/offices/Sectores/{sectorId}`
- `GET /offices/Sectores/{sectorId}/getinfo` -> `get-/offices/Sectores/{sectorId}/getinfo`
- `PUT /offices/Sectores/{id}` -> `put-/offices/Sectores/{id}`
- `DELETE /offices/Sectores/{id}` -> `delete-/offices/Sectores/{id}`
- `GET /offices/Sectores/{sectorId}/estadisticas` -> `get-/offices/Sectores/{sectorId}/estadisticas`
- `GET /offices/Sedes` -> `get-/offices/Sedes`
- `POST /offices/Sedes` -> `post-/offices/Sedes`
- `PUT /offices/Sedes/{id}` -> `put-/offices/Sedes/{id}`
- `DELETE /offices/Sedes/{id}` -> `delete-/offices/Sedes/{id}`
- `GET /offices/Videos` -> `get-/offices/Videos`
- `POST /offices/Videos` -> `post-/offices/Videos`
- `PUT /offices/Videos/{id}` -> `put-/offices/Videos/{id}`
- `DELETE /offices/Videos/{id}` -> `delete-/offices/Videos/{id}`

### Medical Specialties API

- `GET /medical-specialties` -> `GetAllSpecialties`: Get All Services
- `POST /medical-specialties` -> `CreateSpecialty`: Create Specialty
- `PUT /medical-specialties` -> `UpdateSpecialty`: Update Specialty
- `GET /medical-specialties/{specialtyId}` -> `GetSpecialtyById`: Get Specialty by Id
- `DELETE /medical-specialties/{specialtyId}` -> `DeleteSpecialty`: Delete Specialty
