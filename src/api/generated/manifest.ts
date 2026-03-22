const manifest = [
  {
    "slug": "pricelists",
    "displayName": "Price Lists API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/pricelists",
    "status": "integrated",
    "endpointCount": 10,
    "endpoints": [
      {
        "method": "POST",
        "path": "/pricelists",
        "operationId": "AddPriceList",
        "summary": "Add Price to Price list",
        "tag": "PriceList"
      },
      {
        "method": "PUT",
        "path": "/pricelists",
        "operationId": "UpdatePriceList",
        "summary": "Add Price to Price list",
        "tag": "PriceList"
      },
      {
        "method": "POST",
        "path": "/pricelists/details",
        "operationId": "AddPriceListDetail",
        "summary": "Add Price to Price list",
        "tag": "PriceList"
      },
      {
        "method": "PUT",
        "path": "/pricelists/details",
        "operationId": "UpdatePriceListDetail",
        "summary": "Update Price to Price list",
        "tag": "PriceList"
      },
      {
        "method": "GET",
        "path": "/pricelists/{priceListId}",
        "operationId": "GetPriceList",
        "summary": "Add Price to Price list",
        "tag": "PriceList"
      },
      {
        "method": "GET",
        "path": "/pricelists/{priceListId}/clone",
        "operationId": "ClonePriceList",
        "summary": "Clone a price list",
        "tag": "PriceList"
      },
      {
        "method": "DELETE",
        "path": "/pricelists/details/{PriceListDetialsId}",
        "operationId": "DeletePriceListDetail",
        "summary": "Delete Price from Price List",
        "tag": "PriceList"
      },
      {
        "method": "GET",
        "path": "/pricelists/{priceListId}/details",
        "operationId": "GetPriceListDetailsByPriceList",
        "summary": "",
        "tag": "PriceList"
      },
      {
        "method": "GET",
        "path": "/pricelists/details/{priceListDetailId}",
        "operationId": "GetPriceListDetail",
        "summary": "Add Price to Price list",
        "tag": "PriceList"
      },
      {
        "method": "GET",
        "path": "/pricelists/{PriceListId}/details/{ItemRefererId}",
        "operationId": "GetCurrentPriceByReferenceId",
        "summary": "Get current price by ReferenceId",
        "tag": "PriceList"
      }
    ]
  },
  {
    "slug": "medicalinsurances",
    "displayName": "Medical Insurances API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/medicalinsurances",
    "status": "integrated",
    "endpointCount": 12,
    "endpoints": [
      {
        "method": "GET",
        "path": "/medicalinsurances/{medicalInsuranceId}/plans",
        "operationId": "GetMedicalInsurancePlans",
        "summary": "Geet all medical insurance plans",
        "tag": "MedicalInsurancePlans"
      },
      {
        "method": "GET",
        "path": "/medicalinsurances/plans/{planId}",
        "operationId": "GetMedicalInsurancePlan",
        "summary": "Get plan by id",
        "tag": "MedicalInsurancePlans"
      },
      {
        "method": "DELETE",
        "path": "/medicalinsurances/plans/{planId}",
        "operationId": "DeleteMedicalInsurancePlan",
        "summary": "Delete a plan",
        "tag": "MedicalInsurancePlans"
      },
      {
        "method": "POST",
        "path": "/medicalinsurances/plans",
        "operationId": "AddMedicalInsurancePlan",
        "summary": "Add new plan",
        "tag": "MedicalInsurancePlans"
      },
      {
        "method": "PUT",
        "path": "/medicalinsurances/plans",
        "operationId": "UpdateMedicalInsurancePlan",
        "summary": "update a plan",
        "tag": "MedicalInsurancePlans"
      },
      {
        "method": "GET",
        "path": "/medicalinsurances",
        "operationId": "GetMedicalInsurances",
        "summary": "Geet all medical insurance",
        "tag": "MedicalInsurances"
      },
      {
        "method": "POST",
        "path": "/medicalinsurances",
        "operationId": "AddMedicalInsurance",
        "summary": "Add medical insurance",
        "tag": "MedicalInsurances"
      },
      {
        "method": "PUT",
        "path": "/medicalinsurances",
        "operationId": "UpdateMedicalInsurance",
        "summary": "Update medical insurance",
        "tag": "MedicalInsurances"
      },
      {
        "method": "GET",
        "path": "/medicalinsurances/{medicalInsuranceId}",
        "operationId": "GetMedicalInsuranceById",
        "summary": "Geet medical insurance by id",
        "tag": "MedicalInsurances"
      },
      {
        "method": "DELETE",
        "path": "/medicalinsurances/{medicalInsuranceId}",
        "operationId": "DeleteMedicalInsurance",
        "summary": "Delete a medical Insurance",
        "tag": "MedicalInsurances"
      },
      {
        "method": "POST",
        "path": "/medicalinsurances/enableagreements",
        "operationId": "MedicalInsuranceAgreementsEnable",
        "summary": "Enable Medical Insurance Agreements",
        "tag": "MedicalInsurances"
      },
      {
        "method": "POST",
        "path": "/medicalinsurances/disableagreements",
        "operationId": "MedicalInsuranceAgreementsDisable",
        "summary": "Disable Medical Insurance Agreements",
        "tag": "MedicalInsurances"
      }
    ]
  },
  {
    "slug": "medicalservices",
    "displayName": "Medical Services API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/medicalservices",
    "status": "integrated",
    "endpointCount": 7,
    "endpoints": [
      {
        "method": "GET",
        "path": "/medicalServices",
        "operationId": "GetMedicalServices",
        "summary": "Geet all services",
        "tag": "AvailableMedicalServices"
      },
      {
        "method": "POST",
        "path": "/medicalServices",
        "operationId": "AddMedicalService",
        "summary": "Create a service",
        "tag": "AvailableMedicalServices"
      },
      {
        "method": "PUT",
        "path": "/medicalServices",
        "operationId": "UpdateMedicalService",
        "summary": "Create a service",
        "tag": "AvailableMedicalServices"
      },
      {
        "method": "GET",
        "path": "/medicalServices/{medicalServiceId}",
        "operationId": "GetMedicalServiceById",
        "summary": "get service by id",
        "tag": "AvailableMedicalServices"
      },
      {
        "method": "POST",
        "path": "/medicalServices/settings",
        "operationId": "ChangeMedicalServiceSettings",
        "summary": "Change medical service settings",
        "tag": "AvailableMedicalServices"
      },
      {
        "method": "PUT",
        "path": "/medicalServices/{MedicalServiceId}/status/{NewStatus}",
        "operationId": "UpdateMedicalServiceStatus",
        "summary": "Change medical service status",
        "tag": "AvailableMedicalServices"
      },
      {
        "method": "DELETE",
        "path": "/medicalServices/{serviceId}",
        "operationId": "DeleteMedicalService",
        "summary": "Delete Service",
        "tag": "AvailableMedicalServices"
      }
    ]
  },
  {
    "slug": "agreements",
    "displayName": "Medical Agreements API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/agreements",
    "status": "integrated",
    "endpointCount": 25,
    "endpoints": [
      {
        "method": "GET",
        "path": "/agreements/services/{AgreementServiceId}/details",
        "operationId": "GetAgreementServicesDetails",
        "summary": "Geet all details of a service",
        "tag": "InsuranceAgreementServiceDetails"
      },
      {
        "method": "GET",
        "path": "/agreements/services/details/{AgreementServiceDetailId}",
        "operationId": "GetAgreementServicesDetail",
        "summary": "Get service detail by id",
        "tag": "InsuranceAgreementServiceDetails"
      },
      {
        "method": "GET",
        "path": "/agreements/{AgreementId}/services/{MedicalServiceId}/details/{InsurancePlanId}",
        "operationId": "GetAgreementServicesDetailByAgreementServiceAndPlan",
        "summary": "Get service detail by id",
        "tag": "InsuranceAgreementServiceDetails"
      },
      {
        "method": "POST",
        "path": "/agreements/services/details",
        "operationId": "CreateAgreementServicesDetail",
        "summary": "Create service detail by id",
        "tag": "InsuranceAgreementServiceDetails"
      },
      {
        "method": "PUT",
        "path": "/agreements/services/details",
        "operationId": "UpdateAgreementServicesDetail",
        "summary": "Update service detail by id",
        "tag": "InsuranceAgreementServiceDetails"
      },
      {
        "method": "DELETE",
        "path": "/agreements/services/details/{AgreementServiceDetailsId}",
        "operationId": "DeleteAgreementServicesDetail",
        "summary": "Update service detail by id",
        "tag": "InsuranceAgreementServiceDetails"
      },
      {
        "method": "GET",
        "path": "/agreements/{AgreementId}/services",
        "operationId": "GetAgreementServices",
        "summary": "Geet all services",
        "tag": "InsuranceAgreementServices"
      },
      {
        "method": "GET",
        "path": "/agreements/services/{AgreementServiceId}",
        "operationId": "GetAgreementServiceById",
        "summary": "Ger Agreement service By Id",
        "tag": "InsuranceAgreementServices"
      },
      {
        "method": "DELETE",
        "path": "/agreements/services/{AgreementServiceId}",
        "operationId": "DeleteAgreementService",
        "summary": "Delete a agreement service",
        "tag": "InsuranceAgreementServices"
      },
      {
        "method": "POST",
        "path": "/agreements/services",
        "operationId": "CreateAgreementService",
        "summary": "Add new Service to agreement",
        "tag": "InsuranceAgreementServices"
      },
      {
        "method": "PUT",
        "path": "/agreements/services",
        "operationId": "UpdateAgreementService",
        "summary": "",
        "tag": "InsuranceAgreementServices"
      },
      {
        "method": "PUT",
        "path": "/agreements/services/{AgreementServiceId}/status/{newStatus}",
        "operationId": "ChangeStatusAgreementService",
        "summary": "",
        "tag": "InsuranceAgreementServices"
      },
      {
        "method": "GET",
        "path": "/agreements",
        "operationId": "GetMedicalInsuranceAgreements",
        "summary": "Get All agreements",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "POST",
        "path": "/agreements",
        "operationId": "AddAgreement",
        "summary": "Add new agreement",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "PUT",
        "path": "/agreements",
        "operationId": "UpdateAgreement",
        "summary": "update agreement",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "GET",
        "path": "/agreements/{AgreementId}",
        "operationId": "GetAgreementById",
        "summary": "Get agreement by id",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "GET",
        "path": "/agreements/{AgreementId}/activePriceList/{ReferecenceDate}",
        "operationId": "GetActivePriceListByAgreementId",
        "summary": "Get active price list by agreement id",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "GET",
        "path": "/agreements/{AgreementId}/PriceList",
        "operationId": "GetPriceListByAgreement",
        "summary": "Get agreement price lists",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "GET",
        "path": "/agreements/PriceList/{AgreementPriceListId}",
        "operationId": "GetAgreementPriceListById",
        "summary": "Get agreement price list by id",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "DELETE",
        "path": "/agreements/PriceList/{AgreementPriceListId}",
        "operationId": "DeleteAgreementPriceListById",
        "summary": "Delete Pricelist from agreement",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "POST",
        "path": "/agreements/PriceList",
        "operationId": "AddAgreementPriceListById",
        "summary": "Link existing price list to a aggrement",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "POST",
        "path": "/agreements/PriceList/{AgreementPriceListId}/startvalidity",
        "operationId": "SetStartValidityAgreementPriceList",
        "summary": "Create new price list for an agreement",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "POST",
        "path": "/agreements/PriceList/{AgreementPriceListId}/endvalidity",
        "operationId": "SetEndValidityAgreementPriceList",
        "summary": "Set en validity date for a pricelist of agreement",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "POST",
        "path": "/agreements/PriceList/{AgreementPriceListId}/expire",
        "operationId": "ExpireAgreementPriceList",
        "summary": "Set en validity date for a pricelist of agreement",
        "tag": "MedicalInsuranceAgreements"
      },
      {
        "method": "DELETE",
        "path": "/agreements/{agreementId}",
        "operationId": "DeleteAgreement",
        "summary": "Delete Agreement",
        "tag": "MedicalInsuranceAgreements"
      }
    ]
  },
  {
    "slug": "snowmed",
    "displayName": "Snowmed API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/snowmed",
    "status": "integrated",
    "endpointCount": 3,
    "endpoints": [
      {
        "method": "GET",
        "path": "/pathologies/{searchText}",
        "operationId": "GetPatologiesByTerm",
        "summary": "Search patologies definition",
        "tag": "Patologies"
      },
      {
        "method": "GET",
        "path": "/procedures/{searchText}",
        "operationId": "GetProceduresByTerm",
        "summary": "Search procedures definition",
        "tag": "Procedures"
      },
      {
        "method": "GET",
        "path": "/specialties/{searchText}",
        "operationId": "GetSpecialtiesByTerm",
        "summary": "Search procedures definition",
        "tag": "Specialties"
      }
    ]
  },
  {
    "slug": "agreementsaggregator",
    "displayName": "Medical Agreements Aggregators API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/agreementsaggregator",
    "status": "integrated",
    "endpointCount": 8,
    "endpoints": [
      {
        "method": "GET",
        "path": "/agreements.aggregator/agreements/{agreementId}",
        "operationId": "GetAgreementById",
        "summary": "Get Agreement by id",
        "tag": "Agreements"
      },
      {
        "method": "GET",
        "path": "/agreements.aggregator/agreements/pricelist/{agreementPriceListId}",
        "operationId": "GetAgreementPriceListById",
        "summary": "Get Agreement price list by id",
        "tag": "Agreements"
      },
      {
        "method": "POST",
        "path": "/agreements.aggregator/agreements/pricelist",
        "operationId": "CreateAgreementPriceList",
        "summary": "Create new price list for agreement",
        "tag": "Agreements"
      },
      {
        "method": "POST",
        "path": "/agreements.aggregator/agreements/pricelist/details",
        "operationId": "CreateAgreementPriceListDetails",
        "summary": "Create new price list for agreement",
        "tag": "Agreements"
      },
      {
        "method": "GET",
        "path": "/agreements.aggregator/agreements/pricelist/{AgreementPriceListId}/clone",
        "operationId": "CloneAgreementPriceList",
        "summary": "Clone agreement price list",
        "tag": "Agreements"
      },
      {
        "method": "GET",
        "path": "/agreements.aggregator/agreements/{agreementid}/medicalservice/{medicalServiceId}/currentPrice/{referenceDate}",
        "operationId": "GetCurrentPrice",
        "summary": "Get Current Price List By Agreement Service Id",
        "tag": "Agreements"
      },
      {
        "method": "POST",
        "path": "/agreements.aggregator/agreements/pricelist/currentPrice",
        "operationId": "GetCurrentPriceListByAgreementServiceId",
        "summary": "Get current price",
        "tag": "Agreements"
      },
      {
        "method": "GET",
        "path": "/agreements.aggregator/info",
        "operationId": "get-/agreements.aggregator/info",
        "summary": "",
        "tag": "Meta"
      }
    ]
  },
  {
    "slug": "persons",
    "displayName": "Persons API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/persons",
    "status": "integrated",
    "endpointCount": 62,
    "endpoints": [
      {
        "method": "GET",
        "path": "/persons/{PersonId}/addresses",
        "operationId": "GetAddressesByPersonId",
        "summary": "Get all addresses by person",
        "tag": "Address"
      },
      {
        "method": "GET",
        "path": "/persons/addresses/{AddressId}",
        "operationId": "GetAddressById",
        "summary": "Get Address by Id",
        "tag": "Address"
      },
      {
        "method": "DELETE",
        "path": "/persons/addresses/{AddressId}",
        "operationId": "DeleteAddress",
        "summary": "Delete an Address",
        "tag": "Address"
      },
      {
        "method": "POST",
        "path": "/persons/addresses",
        "operationId": "CreateAddress",
        "summary": "Create Address",
        "tag": "Address"
      },
      {
        "method": "PUT",
        "path": "/persons/addresses",
        "operationId": "UpdateAddress",
        "summary": "Update Address",
        "tag": "Address"
      },
      {
        "method": "GET",
        "path": "/persons/{PersonId}/emails",
        "operationId": "GetEmailsByPersonId",
        "summary": "",
        "tag": "Email"
      },
      {
        "method": "GET",
        "path": "/persons/emails/{EmailId}",
        "operationId": "GetEmailById",
        "summary": "",
        "tag": "Email"
      },
      {
        "method": "DELETE",
        "path": "/persons/emails/{EmailId}",
        "operationId": "DeleteEmail",
        "summary": "",
        "tag": "Email"
      },
      {
        "method": "POST",
        "path": "/persons/emails",
        "operationId": "CreateEmail",
        "summary": "",
        "tag": "Email"
      },
      {
        "method": "PUT",
        "path": "/persons/emails",
        "operationId": "UpdateEmail",
        "summary": "",
        "tag": "Email"
      },
      {
        "method": "GET",
        "path": "/persons/{PersonId}/external-associations",
        "operationId": "GetExternalAssociationsByPersonId",
        "summary": "Get external associations for a person",
        "tag": "ExternalEntityAssociation"
      },
      {
        "method": "GET",
        "path": "/persons/external-associations/{ExternalAssociationId}",
        "operationId": "GetExternalAssociationById",
        "summary": "Get external association by id",
        "tag": "ExternalEntityAssociation"
      },
      {
        "method": "PUT",
        "path": "/persons/external-associations/{ExternalAssociationId}",
        "operationId": "UpdateExternalAssociation",
        "summary": "",
        "tag": "ExternalEntityAssociation"
      },
      {
        "method": "DELETE",
        "path": "/persons/external-associations/{ExternalAssociationId}",
        "operationId": "DeleteExternalAssociation",
        "summary": "Delete external association",
        "tag": "ExternalEntityAssociation"
      },
      {
        "method": "POST",
        "path": "/persons/external-associations",
        "operationId": "CreateExternalAssociation",
        "summary": "Create new external association to a person",
        "tag": "ExternalEntityAssociation"
      },
      {
        "method": "GET",
        "path": "/persons/genders",
        "operationId": "GetGenders",
        "summary": "Get all genders",
        "tag": "Gender"
      },
      {
        "method": "POST",
        "path": "/persons/genders",
        "operationId": "CreateGender",
        "summary": "Create new Gender",
        "tag": "Gender"
      },
      {
        "method": "PUT",
        "path": "/persons/genders",
        "operationId": "UpdateGender",
        "summary": "Update Gender",
        "tag": "Gender"
      },
      {
        "method": "GET",
        "path": "/persons/genders/{GenderId}",
        "operationId": "GetGenderById",
        "summary": "Get gender by Id",
        "tag": "Gender"
      },
      {
        "method": "DELETE",
        "path": "/persons/genders/{GenderId}",
        "operationId": "DeleteGender",
        "summary": "Delete gender",
        "tag": "Gender"
      },
      {
        "method": "GET",
        "path": "/persons/identifiertypes",
        "operationId": "GetIdentifierTypes",
        "summary": "Get all person indentifier types",
        "tag": "IdentifierTypes"
      },
      {
        "method": "GET",
        "path": "/persons/identifierTypes/{IdentifierTypeId}",
        "operationId": "GetIdentifierTypeById",
        "summary": "Get identifier type by id",
        "tag": "IdentifierTypes"
      },
      {
        "method": "DELETE",
        "path": "/persons/identifierTypes/{IdentifierTypeId}",
        "operationId": "DeleteIdentifierType",
        "summary": "Delete identifier type",
        "tag": "IdentifierTypes"
      },
      {
        "method": "POST",
        "path": "/persons/identifierTypes",
        "operationId": "CreateIndetifierType",
        "summary": "Create new identifier type",
        "tag": "IdentifierTypes"
      },
      {
        "method": "PUT",
        "path": "/persons/identifierTypes",
        "operationId": "UpdateIdentifierType",
        "summary": "Update Identifier Type",
        "tag": "IdentifierTypes"
      },
      {
        "method": "GET",
        "path": "/persons/maritalstatuses",
        "operationId": "GetMaritalStatus",
        "summary": "",
        "tag": "MaritalStatus"
      },
      {
        "method": "POST",
        "path": "/persons/maritalstatuses",
        "operationId": "CreateMaritalStatus",
        "summary": "",
        "tag": "MaritalStatus"
      },
      {
        "method": "PUT",
        "path": "/persons/maritalstatuses",
        "operationId": "UpdateMaritalStatus",
        "summary": "",
        "tag": "MaritalStatus"
      },
      {
        "method": "GET",
        "path": "/persons/maritalstatuses/{MaritalStatusId}",
        "operationId": "GetMaritalStatusById",
        "summary": "Get Marital Status by Id",
        "tag": "MaritalStatus"
      },
      {
        "method": "DELETE",
        "path": "/persons/maritalstatuses/{MaritalStatusId}",
        "operationId": "DeleteMaritalStatus",
        "summary": "",
        "tag": "MaritalStatus"
      },
      {
        "method": "GET",
        "path": "/persons",
        "operationId": "GetAllPersons",
        "summary": "Get all person",
        "tag": "Person"
      },
      {
        "method": "POST",
        "path": "/persons",
        "operationId": "CreatePerson",
        "summary": "Create Person",
        "tag": "Person"
      },
      {
        "method": "PUT",
        "path": "/persons",
        "operationId": "UpdatePerson",
        "summary": "Update Person",
        "tag": "Person"
      },
      {
        "method": "GET",
        "path": "/persons/{PersonId}",
        "operationId": "GetPersonById",
        "summary": "Get Person by Id",
        "tag": "Person"
      },
      {
        "method": "DELETE",
        "path": "/persons/{PersonId}",
        "operationId": "DeletePerson",
        "summary": "Delete an Address",
        "tag": "Person"
      },
      {
        "method": "PUT",
        "path": "/persons/fix-identifiers",
        "operationId": "FixPersonIdentifiers",
        "summary": "",
        "tag": "Person"
      },
      {
        "method": "GET",
        "path": "/persons/{PersonId}/identifiers",
        "operationId": "GetIdentifiersByPersonId",
        "summary": "Get all identifiers by person Id",
        "tag": "PersonIdentifier"
      },
      {
        "method": "GET",
        "path": "/persons/identifiers/{PersonIdentifierId}",
        "operationId": "GetPersonIdentifierById",
        "summary": "Get person identifier by Id",
        "tag": "PersonIdentifier"
      },
      {
        "method": "DELETE",
        "path": "/persons/identifiers/{PersonIdentifierId}",
        "operationId": "DeletePersonIdentifier",
        "summary": "Delete person identifier",
        "tag": "PersonIdentifier"
      },
      {
        "method": "GET",
        "path": "/persons/identifiers/verification",
        "operationId": "VerifyIdentifier",
        "summary": "Verify if the identifier is already used by another person",
        "tag": "PersonIdentifier"
      },
      {
        "method": "POST",
        "path": "/persons/identifiers",
        "operationId": "CreatePersonIdentifier",
        "summary": "Create new person identifier",
        "tag": "PersonIdentifier"
      },
      {
        "method": "PUT",
        "path": "/persons/identifiers",
        "operationId": "UpdatePersonIdentifier",
        "summary": "Update person identifier",
        "tag": "PersonIdentifier"
      },
      {
        "method": "GET",
        "path": "/persons/{PersonId}/preferences",
        "operationId": "GetPreferencesByPersonId",
        "summary": "Get all identifiers by person Id",
        "tag": "PersonPreference"
      },
      {
        "method": "GET",
        "path": "/persons/preferences/{PersonPreferenceId}",
        "operationId": "GetPersonPreferenceById",
        "summary": "Get person preference by Id",
        "tag": "PersonPreference"
      },
      {
        "method": "DELETE",
        "path": "/persons/preferences/{PersonPreferenceId}",
        "operationId": "DeletePersonPreference",
        "summary": "Delete a person preference",
        "tag": "PersonPreference"
      },
      {
        "method": "POST",
        "path": "/persons/preferences",
        "operationId": "CreatePersonPreference",
        "summary": "Create a new person preference",
        "tag": "PersonPreference"
      },
      {
        "method": "PUT",
        "path": "/persons/preferences",
        "operationId": "UpdatePersonPreference",
        "summary": "Update a person preference",
        "tag": "PersonPreference"
      },
      {
        "method": "GET",
        "path": "/persons/{PersonId}/relationships",
        "operationId": "GetPersonRelationships",
        "summary": "Get all person relationship",
        "tag": "PersonRelationship"
      },
      {
        "method": "GET",
        "path": "/persons/relationships/{PersonRelationshipId}",
        "operationId": "GetPersonRelationshipById",
        "summary": "Get person relationship by Id",
        "tag": "PersonRelationship"
      },
      {
        "method": "DELETE",
        "path": "/persons/relationships/{PersonRelationshipId}",
        "operationId": "DeletePersonRelationship",
        "summary": "Delete person relationship",
        "tag": "PersonRelationship"
      },
      {
        "method": "POST",
        "path": "/persons/relationships",
        "operationId": "CreatePersonRelationship",
        "summary": "Create new person relationship",
        "tag": "PersonRelationship"
      },
      {
        "method": "PUT",
        "path": "/persons/relationships",
        "operationId": "UpdatePersonRelationship",
        "summary": "Update person relationship",
        "tag": "PersonRelationship"
      },
      {
        "method": "GET",
        "path": "/persons/{PersonId}/phones",
        "operationId": "GetPhonesByPersonId",
        "summary": "Get all phones by person",
        "tag": "Phone"
      },
      {
        "method": "GET",
        "path": "/persons/phones/{PhoneId}",
        "operationId": "GetPhonesById",
        "summary": "Get phone by id",
        "tag": "Phone"
      },
      {
        "method": "DELETE",
        "path": "/persons/phones/{PhoneId}",
        "operationId": "DeletePhone",
        "summary": "Delete phone",
        "tag": "Phone"
      },
      {
        "method": "POST",
        "path": "/persons/phones",
        "operationId": "CreatePhone",
        "summary": "Get Phone by Id",
        "tag": "Phone"
      },
      {
        "method": "PUT",
        "path": "/persons/phones",
        "operationId": "UpdatePhone",
        "summary": "Update Phone",
        "tag": "Phone"
      },
      {
        "method": "GET",
        "path": "/persons/relationshiptypes",
        "operationId": "GetRelationshipTypes",
        "summary": "Get all Relationship types",
        "tag": "RelationShipType"
      },
      {
        "method": "POST",
        "path": "/persons/relationshiptypes",
        "operationId": "CreateRelationShipType",
        "summary": "Create new Relationship Type",
        "tag": "RelationShipType"
      },
      {
        "method": "PUT",
        "path": "/persons/relationshiptypes",
        "operationId": "UpdateRelationshipType",
        "summary": "Update Relationship Type",
        "tag": "RelationShipType"
      },
      {
        "method": "GET",
        "path": "/persons/relationshiptypes/{RelationshipTypeId}",
        "operationId": "GetRelationshipTypeById",
        "summary": "Get relationship type by Id",
        "tag": "RelationShipType"
      },
      {
        "method": "DELETE",
        "path": "/persons/relationshiptypes/{RelationshipTypeId}",
        "operationId": "DeleteRelationshipType",
        "summary": "Delete Relationship Type",
        "tag": "RelationShipType"
      }
    ]
  },
  {
    "slug": "providers",
    "displayName": "Providers API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/providers",
    "status": "integrated",
    "endpointCount": 5,
    "endpoints": [
      {
        "method": "GET",
        "path": "/providers",
        "operationId": "GetAllProviders",
        "summary": "Get all provider",
        "tag": "Provider"
      },
      {
        "method": "POST",
        "path": "/providers",
        "operationId": "CreateProvider",
        "summary": "Create Provider",
        "tag": "Provider"
      },
      {
        "method": "PUT",
        "path": "/providers",
        "operationId": "UpdateProvider",
        "summary": "Update Provider",
        "tag": "Provider"
      },
      {
        "method": "GET",
        "path": "/providers/{ProviderId}",
        "operationId": "GetProviderById",
        "summary": "Get Provider by Id",
        "tag": "Provider"
      },
      {
        "method": "DELETE",
        "path": "/providers/{ProviderId}",
        "operationId": "DeleteProvider",
        "summary": "Delete an provider",
        "tag": "Provider"
      }
    ]
  },
  {
    "slug": "providerassociation",
    "displayName": "Provider Association API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/providerassociation",
    "status": "integrated",
    "endpointCount": 14,
    "endpoints": [
      {
        "method": "GET",
        "path": "/providers/associations/{ProviderID}/medicalservices",
        "operationId": "GetMedicalServicesByProviderId",
        "summary": "Get all provider medical Services",
        "tag": "ProviderMedicalService"
      },
      {
        "method": "GET",
        "path": "/providers/associations/medicalservices/{ProviderMedicalServiceId}",
        "operationId": "GetProviderMedicalServiceById",
        "summary": "Get provider Medical Service by id",
        "tag": "ProviderMedicalService"
      },
      {
        "method": "DELETE",
        "path": "/providers/associations/medicalservices/{ProviderMedicalServiceId}",
        "operationId": "DisassociateMedicalServiceFromToProvider",
        "summary": "Delete medical Service association",
        "tag": "ProviderMedicalService"
      },
      {
        "method": "POST",
        "path": "/providers/associations/medicalservices",
        "operationId": "AssociateMedicalServiceToProvider",
        "summary": "Associate provider medical Service",
        "tag": "ProviderMedicalService"
      },
      {
        "method": "DELETE",
        "path": "/providers/associations/{ProviderID}/medicalservices/{MedicalServiceId}",
        "operationId": "DisassociateMedicalServiceFromToPractitionerByMedicalServiceId",
        "summary": "Delete medical Service association by MedicalService Id",
        "tag": "ProviderMedicalService"
      },
      {
        "method": "GET",
        "path": "/providers/associations/{ProviderID}/pricelists",
        "operationId": "GetPriceListsByProviderId",
        "summary": "Get all price lists by provider id",
        "tag": "ProviderPriceList"
      },
      {
        "method": "GET",
        "path": "/providers/associations/pricelists/{ProviderPriceListId}",
        "operationId": "GetProviderPriceListById",
        "summary": "get provider price list by id",
        "tag": "ProviderPriceList"
      },
      {
        "method": "GET",
        "path": "/providers/associations/{ProviderId}/pricelists/{PriceListId}",
        "operationId": "GetProviderPriceListByPriceListId",
        "summary": "get provider price list by pricelist id",
        "tag": "ProviderPriceList"
      },
      {
        "method": "PUT",
        "path": "/providers/associations/PriceList/{ProviderPriceListId}/startvalidity",
        "operationId": "SetStartValidityProviderPriceList",
        "summary": "Create new price list for a provider",
        "tag": "ProviderPriceList"
      },
      {
        "method": "PUT",
        "path": "/providers/associations/PriceList/{ProviderPriceListId}/endvalidity",
        "operationId": "SetEndValidityProviderPriceList",
        "summary": "Set en validity date for a provider price list",
        "tag": "ProviderPriceList"
      },
      {
        "method": "PUT",
        "path": "/providers/associations/PriceList/{ProviderPriceListId}/expire",
        "operationId": "ExpireProviderPriceList",
        "summary": "Set en validity date for a provider price list",
        "tag": "ProviderPriceList"
      },
      {
        "method": "PUT",
        "path": "/providers/associations/pricelists",
        "operationId": "AssociatePriceListToProvider",
        "summary": "Create Price List for provider",
        "tag": "ProviderPriceList"
      },
      {
        "method": "DELETE",
        "path": "/providers/associations/PriceList/{ProviderPriceListId}",
        "operationId": "DeleteProviderPriceListById",
        "summary": "Delete Pricelist from provider",
        "tag": "ProviderPriceList"
      },
      {
        "method": "DELETE",
        "path": "/providers/associations/{ProviderId}/PriceList/{PriceListId}",
        "operationId": "DeleteProviderPriceListByPriceListId",
        "summary": "Delete Pricelist from provider",
        "tag": "ProviderPriceList"
      }
    ]
  },
  {
    "slug": "provideraggregator",
    "displayName": "Provider Aggregator API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/provideraggregator",
    "status": "integrated",
    "endpointCount": 8,
    "endpoints": [
      {
        "method": "GET",
        "path": "/providers/aggregator/{ProviderId}/medicalservices",
        "operationId": "GetMedicalServicesByProviderId",
        "summary": "Get Medical Services by Practitioner id",
        "tag": "ProviderMedicalServiceAggregator"
      },
      {
        "method": "GET",
        "path": "/providers/aggregator/medicalservices/{ProviderMedicalServiceId}",
        "operationId": "GetProviderMedicalServiceById",
        "summary": "Get Provider Medical Services By Id",
        "tag": "ProviderMedicalServiceAggregator"
      },
      {
        "method": "POST",
        "path": "/providers/aggregator/medicalservices",
        "operationId": "AssociateMedicalServiceByProviderId",
        "summary": "Associate medical insurance to provider",
        "tag": "ProviderMedicalServiceAggregator"
      },
      {
        "method": "GET",
        "path": "/providers/aggregator/{ProviderId}/pricelists",
        "operationId": "GetPriceListByProviderID",
        "summary": "Get Price Lists by tenant",
        "tag": "ProviderPriceListAggregator"
      },
      {
        "method": "GET",
        "path": "/providers/aggregator/pricelists/{ProviderPriceListId}",
        "operationId": "GetProviderPriceListById",
        "summary": "Get Agreement price list by id",
        "tag": "ProviderPriceListAggregator"
      },
      {
        "method": "GET",
        "path": "/providers/aggregator/{ProviderId}/pricelists/{PriceListId}",
        "operationId": "GetProviderPriceListByPriceListId",
        "summary": "Get Agreement price list by price list id",
        "tag": "ProviderPriceListAggregator"
      },
      {
        "method": "POST",
        "path": "/providers/aggregator/pricelist",
        "operationId": "CreateProviderPriceList",
        "summary": "Create new price list for provider",
        "tag": "ProviderPriceListAggregator"
      },
      {
        "method": "GET",
        "path": "/providers/aggregator/pricelist/{ProviderPriceListId}/clone",
        "operationId": "CloneProviderPriceList",
        "summary": "Clone agreement price list",
        "tag": "ProviderPriceListAggregator"
      }
    ]
  },
  {
    "slug": "sponsors",
    "displayName": "Sponsors API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/sponsors",
    "status": "integrated",
    "endpointCount": 6,
    "endpoints": [
      {
        "method": "GET",
        "path": "/sponsors",
        "operationId": "GetAllSponsor",
        "summary": "Get all sponsors",
        "tag": "Sponsor"
      },
      {
        "method": "POST",
        "path": "/sponsors",
        "operationId": "CreateSponsor",
        "summary": "Create sponsor",
        "tag": "Sponsor"
      },
      {
        "method": "PUT",
        "path": "/sponsors",
        "operationId": "UpdateSponsor",
        "summary": "Update sponsor",
        "tag": "Sponsor"
      },
      {
        "method": "GET",
        "path": "/sponsors/resync",
        "operationId": "ReSyncSponsor",
        "summary": "resync sponsor",
        "tag": "Sponsor"
      },
      {
        "method": "GET",
        "path": "/sponsors/{SponsorId}",
        "operationId": "GetSponsorById",
        "summary": "Get sponsor by Id",
        "tag": "Sponsor"
      },
      {
        "method": "DELETE",
        "path": "/sponsors/{SponsorId}",
        "operationId": "DeleteSponsor",
        "summary": "Delete an sponsor",
        "tag": "Sponsor"
      }
    ]
  },
  {
    "slug": "contracts",
    "displayName": "Contracts API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/contracts",
    "status": "integrated",
    "endpointCount": 121,
    "endpoints": [
      {
        "method": "GET",
        "path": "/contracts/{ContractID}/commissionconcepts",
        "operationId": "GetContractCommissionConcepts",
        "summary": "Get all contract concepts",
        "tag": "CommissionConcepts"
      },
      {
        "method": "GET",
        "path": "/contracts/commissionconcepts/{CommissionConceptId}",
        "operationId": "GetContractCommissionConceptById",
        "summary": "Get Contract Concept by id",
        "tag": "CommissionConcepts"
      },
      {
        "method": "DELETE",
        "path": "/contracts/commissionconcepts/{CommissionConceptId}",
        "operationId": "DeleteContractCommissionConcept",
        "summary": "",
        "tag": "CommissionConcepts"
      },
      {
        "method": "POST",
        "path": "/contracts/commissionconcepts",
        "operationId": "AddContractCommisionConcept",
        "summary": "Create new Contract Concept",
        "tag": "CommissionConcepts"
      },
      {
        "method": "PUT",
        "path": "/contracts/commissionconcepts",
        "operationId": "UpdateContractCommissionConcept",
        "summary": "Update Contract Concept",
        "tag": "CommissionConcepts"
      },
      {
        "method": "GET",
        "path": "/contracts/concepts/{contractConceptId}/branches",
        "operationId": "GetConceptBranchesByContractConceptId",
        "summary": "Get all concept branches for a specific contract concept.",
        "tag": "ConceptBranch"
      },
      {
        "method": "POST",
        "path": "/contracts/concepts/{contractConceptId}/branches",
        "operationId": "CreateConceptBranch",
        "summary": "Create a new concept branch association.",
        "tag": "ConceptBranch"
      },
      {
        "method": "GET",
        "path": "/contracts/concepts/branches/{conceptBranchId}",
        "operationId": "GetConceptBranchById",
        "summary": "Get a specific concept branch by its ID.",
        "tag": "ConceptBranch"
      },
      {
        "method": "PUT",
        "path": "/contracts/concepts/branches/{conceptBranchId}",
        "operationId": "UpdateConceptBranch",
        "summary": "Update an existing concept branch.",
        "tag": "ConceptBranch"
      },
      {
        "method": "DELETE",
        "path": "/contracts/concepts/branches/{conceptBranchId}",
        "operationId": "DeleteConceptBranch",
        "summary": "Delete a concept branch by its ID.",
        "tag": "ConceptBranch"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractId}/access",
        "operationId": "GetContractAccess",
        "summary": "Get Contract Access",
        "tag": "ContractAccess"
      },
      {
        "method": "GET",
        "path": "/contracts/access/{ContractAccessId}",
        "operationId": "GetContractAccessById",
        "summary": "Get Contract Access by id",
        "tag": "ContractAccess"
      },
      {
        "method": "DELETE",
        "path": "/contracts/access/{ContractAccessId}",
        "operationId": "DeleteContractAccess",
        "summary": "Delete a contract addendum",
        "tag": "ContractAccess"
      },
      {
        "method": "POST",
        "path": "/contracts/access",
        "operationId": "CreateContractAccess",
        "summary": "Create a new contract access",
        "tag": "ContractAccess"
      },
      {
        "method": "PUT",
        "path": "/contracts/access",
        "operationId": "UpdateContractAccess",
        "summary": "Update a contract access",
        "tag": "ContractAccess"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractId}/addendums",
        "operationId": "GetContractAddendums",
        "summary": "Get contract addendums by contract id",
        "tag": "ContractAddendums"
      },
      {
        "method": "GET",
        "path": "/contracts/addendums/{ContractAddendumId}",
        "operationId": "GetContractAddendumById",
        "summary": "Get contract addendum by id",
        "tag": "ContractAddendums"
      },
      {
        "method": "DELETE",
        "path": "/contracts/addendums/{ContractAddendumId}",
        "operationId": "DeleteContractAddendum",
        "summary": "Delete a contract addendum",
        "tag": "ContractAddendums"
      },
      {
        "method": "POST",
        "path": "/contracts/addendums",
        "operationId": "CreateContractAddendum",
        "summary": "Create a new contract addendum",
        "tag": "ContractAddendums"
      },
      {
        "method": "PUT",
        "path": "/contracts/addendums",
        "operationId": "UpdateContractAddendum",
        "summary": "Update a contract addendum",
        "tag": "ContractAddendums"
      },
      {
        "method": "POST",
        "path": "/contracts/addendums/clone",
        "operationId": "CloneContractAddendumById",
        "summary": "Clone addendum",
        "tag": "ContractAddendums"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractId}/branches",
        "operationId": "GetContractBranches",
        "summary": "Get all contract branch by contract Id",
        "tag": "ContractBranches"
      },
      {
        "method": "GET",
        "path": "/contracts/addendums/{AddendumId}/branches",
        "operationId": "GetContractAddendumBranches",
        "summary": "Get all contract branch by contract Addendum Id",
        "tag": "ContractBranches"
      },
      {
        "method": "GET",
        "path": "/contracts/branches/{BranchId}",
        "operationId": "GetContractBranchById",
        "summary": "Get Contract Concept by id",
        "tag": "ContractBranches"
      },
      {
        "method": "DELETE",
        "path": "/contracts/branches/{BranchId}",
        "operationId": "DeleteContractBranch",
        "summary": "Delete Contract branch",
        "tag": "ContractBranches"
      },
      {
        "method": "POST",
        "path": "/contracts/branches",
        "operationId": "AddContractBranch",
        "summary": "Create new Contract branch",
        "tag": "ContractBranches"
      },
      {
        "method": "PUT",
        "path": "/contracts/branches",
        "operationId": "UpdateContractBranch",
        "summary": "Update Contract branch",
        "tag": "ContractBranches"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractId}/commissionagent",
        "operationId": "GetAgents",
        "summary": "Get all Contract Commission Agent",
        "tag": "ContractCommissionAgent"
      },
      {
        "method": "GET",
        "path": "/contracts/commissionagent",
        "operationId": "GetAgentsByContractAssociated",
        "summary": "Get all Agent by Associated Contract Id",
        "tag": "ContractCommissionAgent"
      },
      {
        "method": "POST",
        "path": "/contracts/commissionagent",
        "operationId": "AddAgent",
        "summary": "Create new Agent",
        "tag": "ContractCommissionAgent"
      },
      {
        "method": "PUT",
        "path": "/contracts/commissionagent",
        "operationId": "UpdateAgent",
        "summary": "Delete agent",
        "tag": "ContractCommissionAgent"
      },
      {
        "method": "GET",
        "path": "/contracts/commissionagent/{AgentId}",
        "operationId": "GetAgentById",
        "summary": "Get Agent by id",
        "tag": "ContractCommissionAgent"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractId}/commissionagent/{PractitionerId}",
        "operationId": "GetAgentByPractitionerId",
        "summary": "Get Agent by Practitioner Id",
        "tag": "ContractCommissionAgent"
      },
      {
        "method": "GET",
        "path": "/contracts/commissionagents/{AgentId}/concepts",
        "operationId": "GetCommissionAgentConceptsByAgentId",
        "summary": "Get all Contract Commission Agent Concepts",
        "tag": "ContractCommissionAgentConcepts"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractId}/commissionagents/{PractitionerID}/concepts",
        "operationId": "GetCommissionAgentConceptsByPractitionerId",
        "summary": "Get all Contract Commission Agent Concepts",
        "tag": "ContractCommissionAgentConcepts"
      },
      {
        "method": "GET",
        "path": "/contracts/commissionagents/concepts/{ConceptId}",
        "operationId": "GetCommissionAgentConceptById",
        "summary": "Get Concept by id",
        "tag": "ContractCommissionAgentConcepts"
      },
      {
        "method": "DELETE",
        "path": "/contracts/commissionagents/concepts/{ConceptId}",
        "operationId": "RemoveConcept",
        "summary": "Delete Concept",
        "tag": "ContractCommissionAgentConcepts"
      },
      {
        "method": "POST",
        "path": "/contracts/commissionagents/concepts",
        "operationId": "AddConcept",
        "summary": "Create new Concept",
        "tag": "ContractCommissionAgentConcepts"
      },
      {
        "method": "PUT",
        "path": "/contracts/commissionagents/concepts",
        "operationId": "UpdateCommissionAgentConcept",
        "summary": "",
        "tag": "ContractCommissionAgentConcepts"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractID}/concepts",
        "operationId": "GetContractConcept",
        "summary": "Get all contract concepts",
        "tag": "ContractConcept"
      },
      {
        "method": "GET",
        "path": "/contracts/addendum/{AddendumId}/concepts",
        "operationId": "GetContractAddendumConcept",
        "summary": "Get all contract concepts",
        "tag": "ContractConcept"
      },
      {
        "method": "GET",
        "path": "/contracts/addendums/{AddendumId}/concepts",
        "operationId": "GetContractAddendumConcepts",
        "summary": "Get all contract addendum concepts",
        "tag": "ContractConcept"
      },
      {
        "method": "GET",
        "path": "/contracts/concepts/{ConceptId}",
        "operationId": "GetContractConceptById",
        "summary": "Get Contract Concept by id",
        "tag": "ContractConcept"
      },
      {
        "method": "DELETE",
        "path": "/contracts/concepts/{ConceptId}",
        "operationId": "DeleteContractConcept",
        "summary": "",
        "tag": "ContractConcept"
      },
      {
        "method": "GET",
        "path": "/contracts/concepts/{ContractConceptId}/patent-concepts",
        "operationId": "GetParentConceptsByConceptId",
        "summary": "Get all contract addendum concepts",
        "tag": "ContractConcept"
      },
      {
        "method": "POST",
        "path": "/contracts/concepts",
        "operationId": "AddContractConcept",
        "summary": "Create new Contract Concept",
        "tag": "ContractConcept"
      },
      {
        "method": "PUT",
        "path": "/contracts/concepts",
        "operationId": "UpdateContractConcept",
        "summary": "Update Contract Concept",
        "tag": "ContractConcept"
      },
      {
        "method": "POST",
        "path": "/contracts/concepts/{ContractConceptId}/associate-visit",
        "operationId": "AssociateVisitConcept",
        "summary": "Associate a visit concept with a contract concept",
        "tag": "ContractConcept"
      },
      {
        "method": "POST",
        "path": "/contracts/concepts/{ContractConceptId}/disassociate-visit",
        "operationId": "DisassociateVisitConcept",
        "summary": "Disassociate a visit concept from a contract concept",
        "tag": "ContractConcept"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractID}/concepts/applicable-visit",
        "operationId": "GetAllApplicableConceptsByVisit",
        "summary": "Get all applicable contract concepts for a visit (filtered by optional StageId or StageType).",
        "tag": "ContractConcept"
      },
      {
        "method": "GET",
        "path": "/contracts/concepts/{ContractConceptId}/concepts",
        "operationId": "GetContractConceptConcepts",
        "summary": "Get all contract concepts concepts",
        "tag": "ContractConceptConcept"
      },
      {
        "method": "GET",
        "path": "/contracts/concepts/concepts/{ContractConceptConceptId}",
        "operationId": "GetContractConceptConceptById",
        "summary": "Get Contract Concept by id",
        "tag": "ContractConceptConcept"
      },
      {
        "method": "DELETE",
        "path": "/contracts/concepts/concepts/{ContractConceptConceptId}",
        "operationId": "DeleteContractConceptConcept",
        "summary": "Delete Contract Concept",
        "tag": "ContractConceptConcept"
      },
      {
        "method": "POST",
        "path": "/contracts/concepts/concepts",
        "operationId": "AddContractConceptConcept",
        "summary": "Create new Contract Concept",
        "tag": "ContractConceptConcept"
      },
      {
        "method": "PUT",
        "path": "/contracts/concepts/concepts",
        "operationId": "UpdateContractConceptConcept",
        "summary": "",
        "tag": "ContractConceptConcept"
      },
      {
        "method": "DELETE",
        "path": "/contracts/concepts/concepts",
        "operationId": "DeleteContractConceptConceptByRelationship",
        "summary": "",
        "tag": "ContractConceptConcept"
      },
      {
        "method": "GET",
        "path": "/contracts/{contractId}/concepts/Relationship",
        "operationId": "GetContractConceptRelationship",
        "summary": "Get all ContractConceptFormRelationships for a specific contract.",
        "tag": "ContractConceptFormRelationship"
      },
      {
        "method": "GET",
        "path": "/contracts/{contractId}/concepts/Relationship/minimal",
        "operationId": "GetContractConceptRelationshipMinimal",
        "summary": "Get minimal relationships (distinct by FormConcept) for a specific contract.",
        "tag": "ContractConceptFormRelationship"
      },
      {
        "method": "GET",
        "path": "/contracts/concepts/Relationship/{ConceptRelationshipId}",
        "operationId": "GetContractConceptRelationshipById",
        "summary": "Gets a ContractConceptFormRelationship by its ID.",
        "tag": "ContractConceptFormRelationship"
      },
      {
        "method": "POST",
        "path": "/contracts/{ContractId}/concepts/Relationship",
        "operationId": "CreateContractConceptRelationShip",
        "summary": "Creates a new ContractConceptFormRelationship.",
        "tag": "ContractConceptFormRelationship"
      },
      {
        "method": "PUT",
        "path": "/contracts/concepts/Relationship",
        "operationId": "UpdateContractConceptRelationShip",
        "summary": "Updates an existing ContractConceptFormRelationship.",
        "tag": "ContractConceptFormRelationship"
      },
      {
        "method": "DELETE",
        "path": "/contracts/concepts/Relationship/{conceptRelationshipId}",
        "operationId": "DeleteContractConceptRelationShip",
        "summary": "Deletes a ContractConceptFormRelationship by its ID.",
        "tag": "ContractConceptFormRelationship"
      },
      {
        "method": "GET",
        "path": "/contracts/concepts/{ContractConceptId}/paymentschedule",
        "operationId": "GetContractConceptPaymentSchedule",
        "summary": "Get all Contract Concept Payment Schedules by Contract Concept Id",
        "tag": "ContractConceptPaymentScedule"
      },
      {
        "method": "GET",
        "path": "/contracts/concepts/paymentschedule/{ConceptPaymentScheduleId}",
        "operationId": "GetContractConceptPaymentScheduleById",
        "summary": "Get concept payment schedule by id",
        "tag": "ContractConceptPaymentScedule"
      },
      {
        "method": "POST",
        "path": "/contracts/concepts/paymentschedule",
        "operationId": "AddContractConceptPaymentSchedule",
        "summary": "Create new Contract Concept payment schedule",
        "tag": "ContractConceptPaymentScedule"
      },
      {
        "method": "PUT",
        "path": "/contracts/concepts/paymentschedule",
        "operationId": "UpdateContractConceptPaymentSchedule",
        "summary": "Update Concept Payment Schedule",
        "tag": "ContractConceptPaymentScedule"
      },
      {
        "method": "DELETE",
        "path": "/contracts/concepts/paymentschedule/{ContractConceptPaymentScheduleId}",
        "operationId": "DeleteContractPaymentSchedule",
        "summary": "Delete Contract Concept payment schedule",
        "tag": "ContractConceptPaymentScedule"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractId}/cycles",
        "operationId": "GetContractCycles",
        "summary": "Get all contract cycles by contract Id",
        "tag": "ContractCycles"
      },
      {
        "method": "GET",
        "path": "/contracts/addendums/{AddendumId}/cycles",
        "operationId": "GetContractAddendumCycles",
        "summary": "Get all cycles by contract addendum Id",
        "tag": "ContractCycles"
      },
      {
        "method": "GET",
        "path": "/contracts/cycles/{CycleId}",
        "operationId": "GetContractCycleById",
        "summary": "Get Contract Concept by id",
        "tag": "ContractCycles"
      },
      {
        "method": "POST",
        "path": "/contracts/cycles",
        "operationId": "AddContractCycle",
        "summary": "Create new Contract Cycle",
        "tag": "ContractCycles"
      },
      {
        "method": "PUT",
        "path": "/contracts/cycles",
        "operationId": "UpdateContractCycle",
        "summary": "Update Contract Cycle",
        "tag": "ContractCycles"
      },
      {
        "method": "DELETE",
        "path": "/contracts/cycles/{ContractCycleId}",
        "operationId": "DeleteContractCycle",
        "summary": "Delete Contract Cycle",
        "tag": "ContractCycles"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractId}/files",
        "operationId": "GetContractFiles",
        "summary": "Get all files by contract Id",
        "tag": "ContractFiles"
      },
      {
        "method": "POST",
        "path": "/contracts/{ContractId}/files",
        "operationId": "UploadContractFiles",
        "summary": "Upload files for a contract",
        "tag": "ContractFiles"
      },
      {
        "method": "GET",
        "path": "/contracts/files/{FileId}",
        "operationId": "GetContractFileById",
        "summary": "Get contract file by id",
        "tag": "ContractFiles"
      },
      {
        "method": "DELETE",
        "path": "/contracts/files/{FileId}",
        "operationId": "DeleteContractFile",
        "summary": "Delete a contract file",
        "tag": "ContractFiles"
      },
      {
        "method": "PUT",
        "path": "/contracts/files",
        "operationId": "UpdateContractFile",
        "summary": "Update a contract file",
        "tag": "ContractFiles"
      },
      {
        "method": "GET",
        "path": "/contracts/files/{FileId}/download",
        "operationId": "DownloadContractFile",
        "summary": "Download a contract file",
        "tag": "ContractFiles"
      },
      {
        "method": "POST",
        "path": "/contracts/import",
        "operationId": "CreateImportContractProcess",
        "summary": "Create IA import process for a contract",
        "tag": "ContractIAImportProcess"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractId}/import/last",
        "operationId": "GetLastImportContractProcess",
        "summary": "Get last IA import process for a contract",
        "tag": "ContractIAImportProcess"
      },
      {
        "method": "GET",
        "path": "/contracts/import/{ProcessId}",
        "operationId": "GetImportContractProcessById",
        "summary": "Get IA import process by its Id",
        "tag": "ContractIAImportProcess"
      },
      {
        "method": "GET",
        "path": "/contracts",
        "operationId": "GetContracts",
        "summary": "Get contracts",
        "tag": "Contracts"
      },
      {
        "method": "POST",
        "path": "/contracts",
        "operationId": "CreateContract",
        "summary": "Create new Practitioner contract",
        "tag": "Contracts"
      },
      {
        "method": "PUT",
        "path": "/contracts",
        "operationId": "UpdateContract",
        "summary": "Update Contract info",
        "tag": "Contracts"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractId}",
        "operationId": "GetContractById",
        "summary": "Get contract by Id",
        "tag": "Contracts"
      },
      {
        "method": "GET",
        "path": "/contracts/protocol/{ProtocolId}",
        "operationId": "GetContractByProtocolId",
        "summary": "Get contract by Protocol Id",
        "tag": "Contracts"
      },
      {
        "method": "GET",
        "path": "/contracts/practitioner/{PractitionerId}",
        "operationId": "GetContractByPractitionerId",
        "summary": "Get contract by Practitioner Id",
        "tag": "Contracts"
      },
      {
        "method": "POST",
        "path": "/contracts/clone",
        "operationId": "CloneContractById",
        "summary": "Clone contract",
        "tag": "Contracts"
      },
      {
        "method": "POST",
        "path": "/contracts/{contractId}/setstart",
        "operationId": "SetContractValidityDateStart",
        "summary": "Set Validity date Start of Contract",
        "tag": "Contracts"
      },
      {
        "method": "POST",
        "path": "/contracts/{contractId}/setend",
        "operationId": "SetContractValidityDateEnd",
        "summary": "Set Validity date end of Contract",
        "tag": "Contracts"
      },
      {
        "method": "PATCH",
        "path": "/contracts/{ContractId}/feedivision/{FeeDivisionValue}",
        "operationId": "UpdateFeeDivisionContract",
        "summary": "",
        "tag": "Contracts"
      },
      {
        "method": "DELETE",
        "path": "/contracts/{ContractID}",
        "operationId": "DeleteContract",
        "summary": "",
        "tag": "Contracts"
      },
      {
        "method": "GET",
        "path": "/contracts/stages/{ContractStageId}/items",
        "operationId": "GetContractStageItems",
        "summary": "",
        "tag": "ContractStageItems"
      },
      {
        "method": "POST",
        "path": "/contracts/stages/{ContractStageId}/items",
        "operationId": "AddContractStageItem",
        "summary": "",
        "tag": "ContractStageItems"
      },
      {
        "method": "GET",
        "path": "/contracts/stages/{ContractStageId}/items/{StageItemId}",
        "operationId": "GetContractStageItemById",
        "summary": "",
        "tag": "ContractStageItems"
      },
      {
        "method": "PUT",
        "path": "/contracts/stages/{ContractStageId}/items/{StageItemId}",
        "operationId": "UpdateContractStageItem",
        "summary": "",
        "tag": "ContractStageItems"
      },
      {
        "method": "DELETE",
        "path": "/contracts/stages/{ContractStageId}/items/{StageItemId}",
        "operationId": "DeleteContractStageItem",
        "summary": "",
        "tag": "ContractStageItems"
      },
      {
        "method": "GET",
        "path": "/contracts/{ContractID}/stages",
        "operationId": "GetContractStages",
        "summary": "Get all contracts stages",
        "tag": "ContractStages"
      },
      {
        "method": "GET",
        "path": "/contracts/addendums/{AddendumID}/stages",
        "operationId": "GetContractAddendumStages",
        "summary": "Get all contract stages by contract Addendum Id",
        "tag": "ContractStages"
      },
      {
        "method": "GET",
        "path": "/contracts/stages/{StageId}",
        "operationId": "GetContractStageById",
        "summary": "Get Contract stages by id",
        "tag": "ContractStages"
      },
      {
        "method": "DELETE",
        "path": "/contracts/stages/{StageId}",
        "operationId": "DeleteContractStage",
        "summary": "Delete Contract stages",
        "tag": "ContractStages"
      },
      {
        "method": "POST",
        "path": "/contracts/stages",
        "operationId": "AddContractStage",
        "summary": "Create new Contract stages",
        "tag": "ContractStages"
      },
      {
        "method": "PUT",
        "path": "/contracts/stages",
        "operationId": "UpdateContractStage",
        "summary": "Update Contract stages",
        "tag": "ContractStages"
      },
      {
        "method": "PATCH",
        "path": "/contracts/stages",
        "operationId": "ContractStageLinkToVisit",
        "summary": "Link Stage to a protocol visit",
        "tag": "ContractStages"
      },
      {
        "method": "GET",
        "path": "/contracts/stages/types",
        "operationId": "GetContractStagesTypes",
        "summary": "Get all contract stages types",
        "tag": "ContractStageTypes"
      },
      {
        "method": "POST",
        "path": "/contracts/stages/types",
        "operationId": "post-/contracts/stages/types",
        "summary": "Create a new contract stage type",
        "tag": "ContractStageTypes"
      },
      {
        "method": "GET",
        "path": "/contracts/stages/types/{StageTypeId}",
        "operationId": "GetContractStagesTypeById",
        "summary": "Get contract stages type by id",
        "tag": "ContractStageTypes"
      },
      {
        "method": "PUT",
        "path": "/contracts/stages/types/{id}",
        "operationId": "put-/contracts/stages/types/{id}",
        "summary": "Update an existing contract stage type",
        "tag": "ContractStageTypes"
      },
      {
        "method": "DELETE",
        "path": "/contracts/stages/types/{id}",
        "operationId": "delete-/contracts/stages/types/{id}",
        "summary": "Delete a contract stage type",
        "tag": "ContractStageTypes"
      },
      {
        "method": "GET",
        "path": "/practitioners/contracts/{PractitionerId}/contracts",
        "operationId": "GetPractitionerContractByPractitionerId",
        "summary": "Get all Practitioner contracts",
        "tag": "PractitionerContracts"
      },
      {
        "method": "GET",
        "path": "/practitioners/contracts/contracts/{PractitionerContractId}",
        "operationId": "GetPractitionerContractById",
        "summary": "Get Practitioner contract by id",
        "tag": "PractitionerContracts"
      },
      {
        "method": "DELETE",
        "path": "/practitioners/contracts/contracts/{PractitionerContractId}",
        "operationId": "DisassociateContractFromPractitioner",
        "summary": "Delete contract Association",
        "tag": "PractitionerContracts"
      },
      {
        "method": "GET",
        "path": "/practitioners/contracts/contracts/checkassociation",
        "operationId": "CheckPractitionerContractAssociationsByContractId",
        "summary": "",
        "tag": "PractitionerContracts"
      },
      {
        "method": "POST",
        "path": "/practitioners/contracts/contracts",
        "operationId": "AssociateContractToPractitioner",
        "summary": "Create new Contract",
        "tag": "PractitionerContracts"
      },
      {
        "method": "GET",
        "path": "/protocols/contracts/{ProtocolId}/contracts",
        "operationId": "GetContractProtocolByProtocolId",
        "summary": "",
        "tag": "ProtocolContracts"
      },
      {
        "method": "GET",
        "path": "/protocols/contracts/contracts/{ContractId}/associations",
        "operationId": "GetProtocolAssociationByContractId",
        "summary": "Get protocol association by contract id",
        "tag": "ProtocolContracts"
      },
      {
        "method": "GET",
        "path": "/protocols/contracts/contracts/{ProtocolContractId}",
        "operationId": "GetProtocolContractById",
        "summary": "Get protocol contract by id",
        "tag": "ProtocolContracts"
      },
      {
        "method": "DELETE",
        "path": "/protocols/contracts/contracts/{ProtocolContractId}",
        "operationId": "DisassociateContractFromProtocol",
        "summary": "Delete contract association",
        "tag": "ProtocolContracts"
      },
      {
        "method": "GET",
        "path": "/protocols/contracts/contracts/checkassociation",
        "operationId": "CheckProtocolContractAssociationsByContractId",
        "summary": "Check association by contract id",
        "tag": "ProtocolContracts"
      },
      {
        "method": "POST",
        "path": "/protocols/contracts/contracts",
        "operationId": "AssociateContractToProtocol",
        "summary": "Associate contract",
        "tag": "ProtocolContracts"
      }
    ]
  },
  {
    "slug": "sponsorcontracts",
    "displayName": "SponsorContracts API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/sponsorcontracts",
    "status": "integrated",
    "endpointCount": 4,
    "endpoints": [
      {
        "method": "GET",
        "path": "/sponsors/contracts/{SponsorID}/contracts",
        "operationId": "GetContractBySponsorId",
        "summary": "Get all Sponsor contracts",
        "tag": "SponsorContracts"
      },
      {
        "method": "GET",
        "path": "/sponsors/contracts/contracts/{SponsorContractId}",
        "operationId": "GetSponsorContractById",
        "summary": "Get Sponsor contract by id",
        "tag": "SponsorContracts"
      },
      {
        "method": "DELETE",
        "path": "/sponsors/contracts/contracts/{SponsorContractId}",
        "operationId": "DisassociateContractToSponsor",
        "summary": "Delete contract Association",
        "tag": "SponsorContracts"
      },
      {
        "method": "POST",
        "path": "/sponsors/contracts/contracts",
        "operationId": "AssociateContractToSponsor",
        "summary": "Create new Contract",
        "tag": "SponsorContracts"
      }
    ]
  },
  {
    "slug": "practitioners",
    "displayName": "Practitioners Associations API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/practitioners",
    "status": "integrated",
    "endpointCount": 23,
    "endpoints": [
      {
        "method": "GET",
        "path": "/practitioners/associations/{PractitionerID}/settings",
        "operationId": "GetSettingsByPractitionerId",
        "summary": "Get Settings By Practitioner Id",
        "tag": "PractitionerAssociationSettings"
      },
      {
        "method": "GET",
        "path": "/practitioners/associations/settings/particularattention/{ParticularAttentionStatus}",
        "operationId": "GetPractitionersByParticularAttentionStatus",
        "summary": "Get Practitioner list by particular attention status",
        "tag": "PractitionerAssociationSettings"
      },
      {
        "method": "POST",
        "path": "/practitioners/associations/settings",
        "operationId": "SetPractitionerSettings",
        "summary": "Set practitioner Settings",
        "tag": "PractitionerAssociationSettings"
      },
      {
        "method": "PUT",
        "path": "/practitioners/associations/settings",
        "operationId": "UpdatePractitionerSettings",
        "summary": "Update Practitioner Setting",
        "tag": "PractitionerAssociationSettings"
      },
      {
        "method": "GET",
        "path": "/practitioners/associations/{PractitionerID}/contracts",
        "operationId": "GetContractByPractitionerId",
        "summary": "Get all Practitioner contracts",
        "tag": "PractitionerContracts"
      },
      {
        "method": "GET",
        "path": "/practitioners/associations/contracts/{PractitionerContractId}",
        "operationId": "GetPractitionerContractById",
        "summary": "Get Practitioner contract by id",
        "tag": "PractitionerContracts"
      },
      {
        "method": "DELETE",
        "path": "/practitioners/associations/contracts/{PractitionerContractId}",
        "operationId": "DisassociateContractFromPractitioner",
        "summary": "Delete Contract association",
        "tag": "PractitionerContracts"
      },
      {
        "method": "POST",
        "path": "/practitioners/associations/contracts",
        "operationId": "AssociateContractToPractitioner",
        "summary": "Associate contract to Practitioner",
        "tag": "PractitionerContracts"
      },
      {
        "method": "GET",
        "path": "/practitioners/associations/{PractitionerID}/medicalinsurances",
        "operationId": "GetMedicalInsurancesByPractitionerId",
        "summary": "Get all Practitioner medical insurances",
        "tag": "PractitionerMedicalInsurance"
      },
      {
        "method": "GET",
        "path": "/practitioners/associations/medicalinsurances/{PractitionerMedicalInsuranceId}",
        "operationId": "GetPractitionerMedicalInsuranceById",
        "summary": "Get Practitioner Medical Insurance by id",
        "tag": "PractitionerMedicalInsurance"
      },
      {
        "method": "DELETE",
        "path": "/practitioners/associations/medicalinsurances/{PractitionerMedicalInsuranceId}",
        "operationId": "DisassociateMedicalInsuranceFromToPractitioner",
        "summary": "Delete medical insurance association",
        "tag": "PractitionerMedicalInsurance"
      },
      {
        "method": "POST",
        "path": "/practitioners/associations/medicalinsurances",
        "operationId": "AssociateMedicalInsuranceToPractitioner",
        "summary": "Associate Practitioner medical insurance",
        "tag": "PractitionerMedicalInsurance"
      },
      {
        "method": "DELETE",
        "path": "/practitioners/associations/{PractitionerId}/medicalinsurances/{MedicalInsuranceId}",
        "operationId": "DisassociateMedicalInsuranceFromToPractitionerByMedicalInsuranceId",
        "summary": "Delete medical insurance association by MedicalInsurance Id",
        "tag": "PractitionerMedicalInsurance"
      },
      {
        "method": "GET",
        "path": "/practitioners/associations/{PractitionerID}/medicalservices",
        "operationId": "GetMedicalServicesByPractitionerId",
        "summary": "Get all Practitioner medical Services",
        "tag": "PractitionerMedicalService"
      },
      {
        "method": "GET",
        "path": "/practitioners/associations/medicalservices/{PractitionerMedicalServiceId}",
        "operationId": "GetPractitionerMedicalServiceById",
        "summary": "Get Practitioner Medical Service by id",
        "tag": "PractitionerMedicalService"
      },
      {
        "method": "DELETE",
        "path": "/practitioners/associations/medicalservices/{PractitionerMedicalServiceId}",
        "operationId": "DisassociateMedicalServiceFromToPractitioner",
        "summary": "Delete medical Service association",
        "tag": "PractitionerMedicalService"
      },
      {
        "method": "POST",
        "path": "/practitioners/associations/medicalservices",
        "operationId": "AssociateMedicalServiceToPractitioner",
        "summary": "Associate Practitioner medical Service",
        "tag": "PractitionerMedicalService"
      },
      {
        "method": "DELETE",
        "path": "/practitioners/associations/{PractitionerId}/medicalservices/{MedicalServiceId}",
        "operationId": "DisassociateMedicalServiceFromToPractitionerByMedicalServiceId",
        "summary": "Delete medical Service association by MedicalInsurance Id",
        "tag": "PractitionerMedicalService"
      },
      {
        "method": "GET",
        "path": "/practitioners/associations",
        "operationId": "GetPractitioners",
        "summary": "Get Settings By Practitioner Id",
        "tag": "PractitionerQueries"
      },
      {
        "method": "GET",
        "path": "/practitioners/associations/{practitionerId}/specialties",
        "operationId": "GetSpecialtiesByPractitionerId",
        "summary": "Get all specialties for a practitioner",
        "tag": "PractitionerSpecialty"
      },
      {
        "method": "GET",
        "path": "/practitioners/associations/specialties/{id}",
        "operationId": "GetPractitionerSpecialtyById",
        "summary": "Get a practitioner specialty association by id",
        "tag": "PractitionerSpecialty"
      },
      {
        "method": "DELETE",
        "path": "/practitioners/associations/specialties/{id}",
        "operationId": "DisassociatePractitionerSpecialty",
        "summary": "Disassociate a specialty from a practitioner",
        "tag": "PractitionerSpecialty"
      },
      {
        "method": "POST",
        "path": "/practitioners/associations/specialties",
        "operationId": "AssociatePractitionerSpecialty",
        "summary": "Associate a specialty to a practitioner",
        "tag": "PractitionerSpecialty"
      }
    ]
  },
  {
    "slug": "practitionersaggregator",
    "displayName": "Practitioners Aggregator API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/practitionersaggregator",
    "status": "integrated",
    "endpointCount": 9,
    "endpoints": [
      {
        "method": "GET",
        "path": "/practitioners/aggregator/{PractitionerId}/contracts",
        "operationId": "GetContractsByPractitionerId",
        "summary": "Get Contracts by Practitioner id",
        "tag": "PractitionerContracts"
      },
      {
        "method": "GET",
        "path": "/practitioners/aggregator/contracts/{PractitionerContractId}",
        "operationId": "GetPractitionerContractsById",
        "summary": "Get Practitioner Contract By Id",
        "tag": "PractitionerContracts"
      },
      {
        "method": "GET",
        "path": "/practitioners/aggregator/{PractitionerId}/medicalinsurances",
        "operationId": "GetMedicalInsurancesByPractitionerId",
        "summary": "Get Medical Insurances by Practitioner id",
        "tag": "PractitionerMedicalInsurance"
      },
      {
        "method": "GET",
        "path": "/practitioners/aggregator/medicalinsurances/{PractitionerMedicalInsuranceId}",
        "operationId": "GetPractitionerMedicalInsuranceById",
        "summary": "Get Practitioner Medical Insurance By Id",
        "tag": "PractitionerMedicalInsurance"
      },
      {
        "method": "POST",
        "path": "/practitioners/aggregator/medicalinsurances",
        "operationId": "AssociateMedicalInsuranceByPratitionerId",
        "summary": "Associate medical insurance to practitioner",
        "tag": "PractitionerMedicalInsurance"
      },
      {
        "method": "GET",
        "path": "/practitioners/aggregator/{PractitionerId}/medicalservices",
        "operationId": "GetMedicalServicesByPractitionerId",
        "summary": "Get Medical Services by Practitioner id",
        "tag": "PractitionerMedicalservices"
      },
      {
        "method": "GET",
        "path": "/practitioners/aggregator/medicalservices/{PractitionerMedicalServiceId}",
        "operationId": "GetPractitionerMedicalServiceById",
        "summary": "Get Practitioner Medical Services By Id",
        "tag": "PractitionerMedicalservices"
      },
      {
        "method": "POST",
        "path": "/practitioners/aggregator/medicalservices",
        "operationId": "AssociateMedicalServiceByPratitionerId",
        "summary": "Associate medical insurance to practitioner",
        "tag": "PractitionerMedicalservices"
      },
      {
        "method": "GET",
        "path": "/practitioners/aggregator",
        "operationId": "GetPractitioner",
        "summary": "Get Practitioners",
        "tag": "PractitionerQueries"
      }
    ]
  },
  {
    "slug": "concepts",
    "displayName": "Concepts API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/concepts",
    "status": "integrated",
    "endpointCount": 4,
    "endpoints": [
      {
        "method": "GET",
        "path": "/concepts",
        "operationId": "Getconcepts",
        "summary": "Get concepts",
        "tag": "Concepts"
      },
      {
        "method": "POST",
        "path": "/concepts",
        "operationId": "CreateConcept",
        "summary": "Create new Concept",
        "tag": "Concepts"
      },
      {
        "method": "PUT",
        "path": "/concepts",
        "operationId": "UpdateConcept",
        "summary": "Update new Concept",
        "tag": "Concepts"
      },
      {
        "method": "GET",
        "path": "/concepts/{ConceptId}",
        "operationId": "GetConceptById",
        "summary": "Get Concept by id",
        "tag": "Concepts"
      }
    ]
  },
  {
    "slug": "tenantaggregator",
    "displayName": "Tenant Aggregator API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/tenantaggregator",
    "status": "integrated",
    "endpointCount": 6,
    "endpoints": [
      {
        "method": "GET",
        "path": "/tenant/aggregator/info",
        "operationId": "get-/tenant/aggregator/info",
        "summary": "",
        "tag": "Meta"
      },
      {
        "method": "GET",
        "path": "/tenant/aggregator/pricelists",
        "operationId": "GetPriceListByTenant",
        "summary": "Get Price Lists by tenant",
        "tag": "TenantPriceListAggregator"
      },
      {
        "method": "POST",
        "path": "/tenant/aggregator/pricelists",
        "operationId": "CreateTenantPriceList",
        "summary": "Create new price list for agreement",
        "tag": "TenantPriceListAggregator"
      },
      {
        "method": "PUT",
        "path": "/tenant/aggregator/pricelists",
        "operationId": "UpdateTenantPriceList",
        "summary": "Update new price list for agreement",
        "tag": "TenantPriceListAggregator"
      },
      {
        "method": "GET",
        "path": "/tenant/aggregator/pricelists/{TenantPriceListId}",
        "operationId": "GetTenantPriceListById",
        "summary": "Get Agreement price list by id",
        "tag": "TenantPriceListAggregator"
      },
      {
        "method": "GET",
        "path": "/tenant/aggregator/pricelist/{TenantPriceListId}/clone",
        "operationId": "CloneTenantPriceList",
        "summary": "Clone tenant price list",
        "tag": "TenantPriceListAggregator"
      }
    ]
  },
  {
    "slug": "tenantpricelists",
    "displayName": "Tenant Price Lists API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/tenantpricelists",
    "status": "integrated",
    "endpointCount": 8,
    "endpoints": [
      {
        "method": "GET",
        "path": "/tenant/pricelists",
        "operationId": "GetTenantPriceLists",
        "summary": "Get all Tenant price List",
        "tag": "TenantPriceList"
      },
      {
        "method": "POST",
        "path": "/tenant/pricelists",
        "operationId": "CreateTenantPriceList",
        "summary": "Create tenant price list",
        "tag": "TenantPriceList"
      },
      {
        "method": "PUT",
        "path": "/tenant/pricelists",
        "operationId": "UpdateTenantPriceList",
        "summary": "Update tenant price list",
        "tag": "TenantPriceList"
      },
      {
        "method": "GET",
        "path": "/tenant/pricelists/active",
        "operationId": "GetActiveTenantPriceLists",
        "summary": "",
        "tag": "TenantPriceList"
      },
      {
        "method": "GET",
        "path": "/tenant/pricelists/{TenantPriceListId}",
        "operationId": "GetTenantPriceListById",
        "summary": "Get Tenant price List by Id",
        "tag": "TenantPriceList"
      },
      {
        "method": "DELETE",
        "path": "/tenant/pricelists/{TenantPriceListId}",
        "operationId": "DeleteTenantPriceList",
        "summary": "Delete tenant price list",
        "tag": "TenantPriceList"
      },
      {
        "method": "PUT",
        "path": "/tenant/pricelists/{TenantPriceListId}/validitystart",
        "operationId": "SetValidityStartTenantPriceList",
        "summary": "Set validity start of tenant price list",
        "tag": "TenantPriceList"
      },
      {
        "method": "PUT",
        "path": "/tenant/pricelists/{TenantPriceListId}/validityend",
        "operationId": "SetValidityEndTenantPriceList",
        "summary": "Set validity end of tenant price list",
        "tag": "TenantPriceList"
      }
    ]
  },
  {
    "slug": "protocols",
    "displayName": "Protocols API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/protocols",
    "status": "integrated",
    "endpointCount": 111,
    "endpoints": [
      {
        "method": "GET",
        "path": "/protocols/consumers",
        "operationId": "GetAllConsumers",
        "summary": "Get All Consumers",
        "tag": "Consumer"
      },
      {
        "method": "POST",
        "path": "/protocols/consumers",
        "operationId": "CreateConsumer",
        "summary": "Create Consumer",
        "tag": "Consumer"
      },
      {
        "method": "GET",
        "path": "/protocols/consumers/{id}",
        "operationId": "GetConsumerById",
        "summary": "Get Consumer By Id",
        "tag": "Consumer"
      },
      {
        "method": "PUT",
        "path": "/protocols/consumers/{id}",
        "operationId": "UpdateConsumer",
        "summary": "Update Consumer",
        "tag": "Consumer"
      },
      {
        "method": "DELETE",
        "path": "/protocols/consumers/{id}",
        "operationId": "DeleteConsumer",
        "summary": "Delete Consumer",
        "tag": "Consumer"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols",
        "operationId": "GetProtocols",
        "summary": "Get all protocols",
        "tag": "MedicalProtocols"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}",
        "operationId": "GetProtocolById",
        "summary": "Get ProtocolContract By Id",
        "tag": "MedicalProtocols"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/sponsorId",
        "operationId": "GetSponsorIdByProtocolId",
        "summary": "Get Sponsor Id By Protocol Id",
        "tag": "MedicalProtocols"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{protocolId}/visits/{crossVersionId}/patient/{numberInProtocol}/concepts",
        "operationId": "GetVisitConcepts",
        "summary": "Get concepts for a specific visit in a protocol",
        "tag": "MedicalProtocols"
      },
      {
        "method": "GET",
        "path": "/protocols/info",
        "operationId": "get-/protocols/info",
        "summary": "",
        "tag": "Meta"
      },
      {
        "method": "GET",
        "path": "/protocols/visits/protocol/{ProtocolId}",
        "operationId": "GetPatientVisitsByProtocolId",
        "summary": "Get all patient visits by protocol id",
        "tag": "PatientVisits"
      },
      {
        "method": "GET",
        "path": "/protocols/visits/patient/{PatientId}",
        "operationId": "GetVisitByPatientId",
        "summary": "Get all patient visits by patient id",
        "tag": "PatientVisits"
      },
      {
        "method": "GET",
        "path": "/protocols/visits/{PatientVisitId}",
        "operationId": "GetPatientVisitById",
        "summary": "Get Patient visit by ID",
        "tag": "PatientVisits"
      },
      {
        "method": "GET",
        "path": "/protocols/visits/export",
        "operationId": "ExportVisitsByDateRange",
        "summary": "Export patient visits by date range to Excel",
        "tag": "PatientVisits"
      },
      {
        "method": "GET",
        "path": "/protocols/practitioners/{PractitionerId}/consumptions",
        "operationId": "GetAllConsumptionsByPractitionerId",
        "summary": "Get all practitioner consumption by practitioner id.",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/practitioners/{PractitionerId}/consumptions/status/{status}",
        "operationId": "GetAllPractitionerConsumptionsByStatus",
        "summary": "Get all practitioner consumptions by practitioner id and status.",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/practitioners/consumptions/{PractitionerConsumptionId}",
        "operationId": "GetPractitionerConsumptionById",
        "summary": "Get all protocol consumption by protocol id.",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/practitioners/consumptions/{PractitionerConsumptionId}",
        "operationId": "ChangePractitionerConsumptionStatus",
        "summary": "Change protocol consumption status.",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "DELETE",
        "path": "/protocols/practitioners/consumptions/{PractitionerConsumptionId}",
        "operationId": "DeletePractitionerConsumption",
        "summary": "",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "POST",
        "path": "/protocols/practitioners/consumptions",
        "operationId": "AddPractitionerConsumption",
        "summary": "",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "PUT",
        "path": "/protocols/practitioners/consumptions",
        "operationId": "UpdatePractitionerConsumption",
        "summary": "",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/practitioners/consumptions/{ProtocolConsumptionId}/amount",
        "operationId": "ChangePractitionerConsumptionAmount",
        "summary": "Change protocol consumption status.",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/practitioners/consumptions/{ProtocolConsumptionId}/type/{newType}",
        "operationId": "ChangeTypeOfPractitionerConsumption",
        "summary": "Assign provider to consumption.",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/practitioners/consumptions/{PractitionerConsumptionId}/practitioner/{practitionerId}",
        "operationId": "AssignPractitionerToConsumption",
        "summary": "Assign producer to consumption.",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/practitioners/{practitionerId}/consumptions/export",
        "operationId": "ExportConsumptionsByPractitionerId",
        "summary": "Export all practitioner consumption by practitioner id.",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/practitioners/consumptions/{PractitionerConsumptionId}/link-settlement",
        "operationId": "LinkPractitionerConsumptionToSettlement",
        "summary": "Link a practitioner consumption to a settlement.",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/practitioners/consumptions/unlink-settlement/{SettlementId}",
        "operationId": "UnlinkPractitionerConsumptionsFromSettlement",
        "summary": "Unlink all practitioner consumptions from a settlement.",
        "tag": "PractitionerConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/practitioners/{PractitionerId}/consumptions/sync",
        "operationId": "GetALlSyncProcessByPractitioner",
        "summary": "Get all practitioner consumption sync process by practitioner id.",
        "tag": "PractitionerConsumptionSyncProcess"
      },
      {
        "method": "GET",
        "path": "/protocols/practitioners/consumptions/sync/{PractitionerConsumptionSyncProcessId}",
        "operationId": "GetPractitionerSyncProcessBySyncProcessById",
        "summary": "Get protocol consumption sync process by id.",
        "tag": "PractitionerConsumptionSyncProcess"
      },
      {
        "method": "DELETE",
        "path": "/protocols/practitioners/consumptions/sync/{PractitionerConsumptionSyncProcessId}",
        "operationId": "DeletePractitionerSyncProcess",
        "summary": "Delete a protocol consumption sync process.",
        "tag": "PractitionerConsumptionSyncProcess"
      },
      {
        "method": "GET",
        "path": "/protocols/practitioners/{PractitionerId}/consumptions/sync/last",
        "operationId": "GetLastPractitionerSyncProcess",
        "summary": "Get last sync process by practitioner id.",
        "tag": "PractitionerConsumptionSyncProcess"
      },
      {
        "method": "POST",
        "path": "/protocols/practitioners/consumptions/sync",
        "operationId": "CreatePractitionerSyncProcess",
        "summary": "Create a new protocol consumption sync process.",
        "tag": "PractitionerConsumptionSyncProcess"
      },
      {
        "method": "PUT",
        "path": "/protocols/practitioners/consumptions/sync",
        "operationId": "UpdatePractitionerSyncProcess",
        "summary": "Update an existing practitioner consumption sync process.",
        "tag": "PractitionerConsumptionSyncProcess"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/consumptions",
        "operationId": "GetAllConsumptionsByProtocolId",
        "summary": "Get all protocol consumption by protocol id.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/consumptions/status/{StatusId}",
        "operationId": "GetAllProtocolConsumptionsByStatus",
        "summary": "Get all protocol consumption by protocol id.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/consumptions/stage/{StageId}",
        "operationId": "GetAllProtocolConsumptionsByStageId",
        "summary": "Get all protocol consumption by protocol id and stage id.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/consumptions/totals",
        "operationId": "GetTotalsByProtocol",
        "summary": "Get Totals of all protocol consumption by protocol id and status.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/consumptions/withholding",
        "operationId": "GetTotalWithholdingByProtocol",
        "summary": "Get withholding totals by protocol id.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/consumptions/provider/{ProviderId}",
        "operationId": "GetConsumptionsByProvider",
        "summary": "Get all protocol consumption by provider and status.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}",
        "operationId": "GetConsumptionById",
        "summary": "Get all protocol consumption by protocol id.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}",
        "operationId": "ChangeProtocolConsumptionStatus",
        "summary": "Change protocol consumption status.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "DELETE",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}",
        "operationId": "DeleteProtocolConsumption",
        "summary": "",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "POST",
        "path": "/protocols/protocols/consumptions",
        "operationId": "AddProtocolConsumption",
        "summary": "",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PUT",
        "path": "/protocols/protocols/consumptions",
        "operationId": "UpdateProtocolConsumption",
        "summary": "",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}/amount",
        "operationId": "ChangeProtocolConsumptionAmount",
        "summary": "Change protocol consumption amount.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}/concept/{ConceptId}",
        "operationId": "AssignConceptToConsumption",
        "summary": "",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}/medicalService/{MedicalServiceId}",
        "operationId": "AssignMedicalServiceToConsumption",
        "summary": "",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}/producer/{ProducerId}",
        "operationId": "AssignProducerToConsumption",
        "summary": "",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}/provider/{ProviderId}",
        "operationId": "AssignProviderToConsumption",
        "summary": "Assign provider to consumption.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}/visit/{StageId}",
        "operationId": "ChangeVisitOfConsumption",
        "summary": "Change visit of a protocol consumption.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}/type/{newType}",
        "operationId": "ChangeTypeOfConsumption",
        "summary": "Assign provider to consumption.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/consumptions/export",
        "operationId": "ExportAllConsumptionsByProtocolId",
        "summary": "Export all protocol consumption by protocol id.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}/procedure",
        "operationId": "SetConsumptionAsProcedure",
        "summary": "Set consumption as procedure.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "PATCH",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}/additional",
        "operationId": "SetConsumptionAsAdditional",
        "summary": "Set consumption as additional.",
        "tag": "ProtocolConsumption"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/consumptions/{ProtocolConsumptionId}/movements",
        "operationId": "GetAllConsumptionMovementsByConsumptionId",
        "summary": "Get all protocol consumption movements by protocol consumption id.",
        "tag": "ProtocolConsumptionMovements"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/consumptions/movements/{ServiceConsumedMovementId}",
        "operationId": "GetConsumptionMovementById",
        "summary": "Get protocol consumption movement by id.",
        "tag": "ProtocolConsumptionMovements"
      },
      {
        "method": "DELETE",
        "path": "/protocols/protocols/consumptions/movements/{ServiceConsumedMovementId}",
        "operationId": "DeleteProtocolConsumptionMovement",
        "summary": "Delete protocol consumption movement.",
        "tag": "ProtocolConsumptionMovements"
      },
      {
        "method": "POST",
        "path": "/protocols/protocols/consumptions/movements",
        "operationId": "AddProtocolConsumptionMovement",
        "summary": "Create protocol consumption movement.",
        "tag": "ProtocolConsumptionMovements"
      },
      {
        "method": "PUT",
        "path": "/protocols/protocols/consumptions/movements",
        "operationId": "UpdateProtocolConsumptionMovement",
        "summary": "Update protocol consumption movement.",
        "tag": "ProtocolConsumptionMovements"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/consumptions/sync",
        "operationId": "GetALlSyncProcessByProtocol",
        "summary": "Get all protocol consumption sync process by protocol id.",
        "tag": "ProtocolConsumptionSyncProcess"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/consumptions/sync/{ProtocolConsumptionSyncProcessId}",
        "operationId": "GetBySyncProcessById",
        "summary": "Get protocol consumption sync process by id.",
        "tag": "ProtocolConsumptionSyncProcess"
      },
      {
        "method": "DELETE",
        "path": "/protocols/protocols/consumptions/sync/{ProtocolConsumptionSyncProcessId}",
        "operationId": "DeleteSyncProcess",
        "summary": "Delete a protocol consumption sync process.",
        "tag": "ProtocolConsumptionSyncProcess"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/consumptions/sync/last",
        "operationId": "GetLastSyncProcess",
        "summary": "get last sync process",
        "tag": "ProtocolConsumptionSyncProcess"
      },
      {
        "method": "POST",
        "path": "/protocols/protocols/consumptions/sync",
        "operationId": "CreateSyncProcess",
        "summary": "Create a new protocol consumption sync process.",
        "tag": "ProtocolConsumptionSyncProcess"
      },
      {
        "method": "PUT",
        "path": "/protocols/protocols/consumptions/sync",
        "operationId": "UpdateSyncProcess",
        "summary": "Update an existing protocol consumption sync process.",
        "tag": "ProtocolConsumptionSyncProcess"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/consumptions/visit",
        "operationId": "GetProtocolConsumptionVisits",
        "summary": "Retrieves all protocol consumption visits associated with a specific protocol ID.",
        "tag": "ProtocolConsumptionVisit"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/consumptions/visit/{visitId}",
        "operationId": "GetProtocolConsumptionVisitById",
        "summary": "Retrieves a specific protocol consumption visit by its ID.",
        "tag": "ProtocolConsumptionVisit"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/consumptions/visit/{stageId}",
        "operationId": "GetProtocolConsumptionVisitByProtocolAndStage",
        "summary": "Retrieves a specific protocol consumption visit by its ID.",
        "tag": "ProtocolConsumptionVisit"
      },
      {
        "method": "POST",
        "path": "/protocols/protocols/consumptions/visit",
        "operationId": "CreateProtocolVisit",
        "summary": "Creates a new protocol consumption visit.",
        "tag": "ProtocolConsumptionVisit"
      },
      {
        "method": "PUT",
        "path": "/protocols/protocols/consumptions/visit",
        "operationId": "UpdateProtocolVisit",
        "summary": "Updates an existing protocol consumption visit.",
        "tag": "ProtocolConsumptionVisit"
      },
      {
        "method": "DELETE",
        "path": "/protocols/protocols/consumptions/visit",
        "operationId": "DeleteProtocolVisit",
        "summary": "Deletes a specific protocol consumption visit by its ID.",
        "tag": "ProtocolConsumptionVisit"
      },
      {
        "method": "POST",
        "path": "/protocols/protocols/consumptions/{ConsumptionId}/visit/{ConsumptionVisitId}/link",
        "operationId": "LinkConsumptionToVisit",
        "summary": "Links a protocol consumption to a specific visit.",
        "tag": "ProtocolConsumptionVisit"
      },
      {
        "method": "POST",
        "path": "/protocols/protocols/consumptions/{ConsumptionId}/visit/{ConsumptionVisitId}/unlink",
        "operationId": "UnLinkConsumptionToVisit",
        "summary": "Unlinks a protocol consumption from a specific visit.",
        "tag": "ProtocolConsumptionVisit"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/consumptions/visit/{ProtocolVisitId}/totals",
        "operationId": "GetProtocolConsumptionVisitTotals",
        "summary": "Get all Protocol Consumption Visit Totals by Protocol Visit Id",
        "tag": "ProtocolConsumptionVisitTotals"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/consumptions/visit/totals/{VisitTotalId}",
        "operationId": "GetProtocolConsumptionVisitTotalById",
        "summary": "",
        "tag": "ProtocolConsumptionVisitTotals"
      },
      {
        "method": "DELETE",
        "path": "/protocols/protocols/consumptions/visit/totals/{VisitTotalId}",
        "operationId": "DeleteProtocolConsumptionVisitTotals",
        "summary": "Delete Protocol Consumption Visit Total",
        "tag": "ProtocolConsumptionVisitTotals"
      },
      {
        "method": "POST",
        "path": "/protocols/protocols/consumptions/visit/totals",
        "operationId": "CreateProtocolConsumptionVisitTotals",
        "summary": "Create Protocol Consumption Visit Total",
        "tag": "ProtocolConsumptionVisitTotals"
      },
      {
        "method": "PUT",
        "path": "/protocols/protocols/consumptions/visit/totals",
        "operationId": "UpdateProtocolConsumptionVisitTotals",
        "summary": "Update Protocol Consumption Visit Total",
        "tag": "ProtocolConsumptionVisitTotals"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/contracts",
        "operationId": "GetProtocolContracts",
        "summary": "",
        "tag": "ProtocolContract"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/contracts/{ProtocolContractId}",
        "operationId": "GetProtocolContractById",
        "summary": "Get ProtocolContract By Id",
        "tag": "ProtocolContract"
      },
      {
        "method": "PUT",
        "path": "/protocols/protocols/contracts/{ProtocolContractId}",
        "operationId": "SetEffectiveDateStart",
        "summary": "set effective date start",
        "tag": "ProtocolContract"
      },
      {
        "method": "POST",
        "path": "/protocols/protocols/contracts",
        "operationId": "AddProtocolContract",
        "summary": "",
        "tag": "ProtocolContract"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/patients",
        "operationId": "GetProtocolPatients",
        "summary": "Get all patients by protocol id",
        "tag": "ProtocolPatients"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/patients",
        "operationId": "GetProtocolPatientsByProtocolId",
        "summary": "Get all patients by protocol id",
        "tag": "ProtocolPatients"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/patients/{MedicalRecordNumber}",
        "operationId": "GetProtocolPatientByMedicalRecordNumber",
        "summary": "Get all patient visits by patient id",
        "tag": "ProtocolPatients"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/patients/{NumberInProtocol}",
        "operationId": "GetProtocolPatientByNumberInProtocol",
        "summary": "Get Patient visit by ID",
        "tag": "ProtocolPatients"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/practitioners",
        "operationId": "GetPractitionersByProtocol",
        "summary": "Get all practitioners by protocol",
        "tag": "ProtocolPractitioners"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/practitioners/{PractitionerId}",
        "operationId": "GetProtocolPractitionerById",
        "summary": "Get practitioner by protocol and practitioner id",
        "tag": "ProtocolPractitioners"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/practitioners/{PractitionerId}/visits",
        "operationId": "GetVisitsByPractitioner",
        "summary": "",
        "tag": "ProtocolPractitioners"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/practitioners/{PractitionerId}/visits",
        "operationId": "GetVisitsCountByPractitioner",
        "summary": "Get visits count group by date by practitioner",
        "tag": "ProtocolPractitioners"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/practitioners/{PractitionerId}/visits/pdf",
        "operationId": "ExportVisitsByPractitionerToPdf",
        "summary": "Export visits by practitioner to PDF",
        "tag": "ProtocolPractitioners"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/practitioners/{PractitionerId}/visits/excel",
        "operationId": "ExportVisitsByPractitionerToExcel",
        "summary": "Export visits by practitioner to Excel",
        "tag": "ProtocolPractitioners"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/visits/excel",
        "operationId": "ExportVisitsByProtocolToExcel",
        "summary": "Export all visits by protocol to Excel",
        "tag": "ProtocolPractitioners"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/practitionersStudyTasks",
        "operationId": "GetPractitionersStudyTasksByProtocol",
        "summary": "Get all practitioners by protocol",
        "tag": "ProtocolPractitionerStudyTasks"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/practitionersStudyTasks/{PractitionerId}",
        "operationId": "GetProtocolPractitionerStudyTaskById",
        "summary": "Get practitioner by protocol and practitioner id",
        "tag": "ProtocolPractitionerStudyTasks"
      },
      {
        "method": "GET",
        "path": "/protocols/services",
        "operationId": "GetAllServices",
        "summary": "Get All Services",
        "tag": "Service"
      },
      {
        "method": "POST",
        "path": "/protocols/services",
        "operationId": "CreateService",
        "summary": "Create Service",
        "tag": "Service"
      },
      {
        "method": "GET",
        "path": "/protocols/services/{id}",
        "operationId": "GetServiceById",
        "summary": "Get Service By Id",
        "tag": "Service"
      },
      {
        "method": "PUT",
        "path": "/protocols/services/{id}",
        "operationId": "UpdateService",
        "summary": "Update Service",
        "tag": "Service"
      },
      {
        "method": "DELETE",
        "path": "/protocols/services/{id}",
        "operationId": "DeleteService",
        "summary": "Delete Service",
        "tag": "Service"
      },
      {
        "method": "GET",
        "path": "/protocols/consumers/{consumerId}/services",
        "operationId": "GetServicesByConsumerId",
        "summary": "Get Services By Consumer Id",
        "tag": "Service"
      },
      {
        "method": "GET",
        "path": "/protocols/service-categories",
        "operationId": "GetAllServiceCategories",
        "summary": "Get All Service Categories",
        "tag": "ServiceCategory"
      },
      {
        "method": "POST",
        "path": "/protocols/service-categories",
        "operationId": "CreateServiceCategory",
        "summary": "Create Service Category",
        "tag": "ServiceCategory"
      },
      {
        "method": "GET",
        "path": "/protocols/service-categories/{id}",
        "operationId": "GetServiceCategoryById",
        "summary": "Get Service Category By Id",
        "tag": "ServiceCategory"
      },
      {
        "method": "PUT",
        "path": "/protocols/service-categories/{id}",
        "operationId": "UpdateServiceCategory",
        "summary": "Update Service Category",
        "tag": "ServiceCategory"
      },
      {
        "method": "DELETE",
        "path": "/protocols/service-categories/{id}",
        "operationId": "DeleteServiceCategory",
        "summary": "Delete Service Category",
        "tag": "ServiceCategory"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/studytasks",
        "operationId": "GetStudyTasks",
        "summary": "Get all StudyTasks",
        "tag": "StudyTasks"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/studytasks/{StudyTaskId}",
        "operationId": "GetStudyTaskById",
        "summary": "Get StudyTask by id",
        "tag": "StudyTasks"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/visits",
        "operationId": "GetVisitsByProtocol",
        "summary": "Get all visitis by protocol",
        "tag": "Visit"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/{ProtocolId}/visits-full",
        "operationId": "GetVisitsFullByProtocol",
        "summary": "Get all visitis by protocol",
        "tag": "Visit"
      },
      {
        "method": "GET",
        "path": "/protocols/protocols/visits/{VisitId}",
        "operationId": "GetProtocolVisitById",
        "summary": "Get visit by id",
        "tag": "Visit"
      }
    ]
  },
  {
    "slug": "notifications",
    "displayName": "Notification API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/notifications",
    "status": "error",
    "endpointCount": 0,
    "error": "HTTP 500",
    "endpoints": []
  },
  {
    "slug": "settlements",
    "displayName": "Liquidaciones API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/settlements",
    "status": "integrated",
    "endpointCount": 52,
    "endpoints": [
      {
        "method": "GET",
        "path": "/settlements/contract/{ContractID}/settlements",
        "operationId": "GetAllSettlementsByContractId",
        "summary": "Get all settlements by contract id",
        "tag": "ContractAssociation"
      },
      {
        "method": "GET",
        "path": "/settlements/contract/settlements/{ContractSettlementId}",
        "operationId": "GetContractSettlementById",
        "summary": "Get Contract Settlements By Id",
        "tag": "ContractAssociation"
      },
      {
        "method": "POST",
        "path": "/settlements/contract/settlements",
        "operationId": "AssociateSettlementToContract",
        "summary": "Associate Settlement To Contract",
        "tag": "ContractAssociation"
      },
      {
        "method": "DELETE",
        "path": "/settlements/contract/settlements/{associationId}",
        "operationId": "DisassociateSettlementFromContract",
        "summary": "Disassociate Settlement From Contract",
        "tag": "ContractAssociation"
      },
      {
        "method": "GET",
        "path": "/settlements/medicalagreements/{agreementId}/settlements",
        "operationId": "GetAllSettlementsByAgreementId",
        "summary": "Get all settlements by Agreement id",
        "tag": "MedicalAgreementAssociation"
      },
      {
        "method": "GET",
        "path": "/settlements/medicalagreements/settlements/{AgreementSettlementId}",
        "operationId": "GetAgreementSettlementById",
        "summary": "Get Agreement Settlements By Id",
        "tag": "MedicalAgreementAssociation"
      },
      {
        "method": "POST",
        "path": "/settlements/medicalagreements/settlements",
        "operationId": "AssociateSettlementToAgreement",
        "summary": "Associate Settlement To Agreement",
        "tag": "MedicalAgreementAssociation"
      },
      {
        "method": "DELETE",
        "path": "/settlements/medicalagreements/settlements/{ContractSettlementId}",
        "operationId": "DisassociateSettlementFromAgreement",
        "summary": "Disassociate Settlement From Agreement",
        "tag": "MedicalAgreementAssociation"
      },
      {
        "method": "GET",
        "path": "/settlements/info",
        "operationId": "get-/settlements/info",
        "summary": "",
        "tag": "Meta"
      },
      {
        "method": "GET",
        "path": "/settlements/Practitioners/{PractitionerId}/settlements",
        "operationId": "GetAllSettlementsByPractitionerId",
        "summary": "Get all settlements by practitioner id",
        "tag": "PractitionerAssociation"
      },
      {
        "method": "GET",
        "path": "/settlements/Practitioners/settlements/{PractitionerSettlementId}",
        "operationId": "GetPractitionerSettlementById",
        "summary": "Get practitioner Settlements By Id",
        "tag": "PractitionerAssociation"
      },
      {
        "method": "DELETE",
        "path": "/settlements/Practitioners/settlements/{PractitionerSettlementId}",
        "operationId": "DisassociateSettlementFromPractitioner",
        "summary": "Disassociate Settlement From Agreement",
        "tag": "PractitionerAssociation"
      },
      {
        "method": "POST",
        "path": "/settlements/Practitioners/settlements",
        "operationId": "AssociateSettlementToPractitioner",
        "summary": "Associate Settlement To Practitioner",
        "tag": "PractitionerAssociation"
      },
      {
        "method": "GET",
        "path": "/settlements/protocol/{ProtocolId}/settlements",
        "operationId": "GetAllSettlementsByProtocolId",
        "summary": "Get all settlements by protocol id",
        "tag": "ProtocolAssociation"
      },
      {
        "method": "GET",
        "path": "/settlements/protocol/settlements/{ProtocolSettlementId}",
        "operationId": "GetProtocolSettlementById",
        "summary": "Get protocol Settlements By Id",
        "tag": "ProtocolAssociation"
      },
      {
        "method": "DELETE",
        "path": "/settlements/protocol/settlements/{ProtocolSettlementId}",
        "operationId": "DisassociateSettlementFromProtocol",
        "summary": "Disassociate Settlement From protocol",
        "tag": "ProtocolAssociation"
      },
      {
        "method": "POST",
        "path": "/settlements/protocol/settlements",
        "operationId": "AssociateSettlementToProtocol",
        "summary": "Associate Settlement To protocol",
        "tag": "ProtocolAssociation"
      },
      {
        "method": "GET",
        "path": "/settlements/protocol/{ProtocolId}/patients",
        "operationId": "GetAllPatientsByProtocolId",
        "summary": "Get all settlements by protocol id",
        "tag": "ProtocolPatients"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements",
        "operationId": "GetAllSettlements",
        "summary": "Get all settlements",
        "tag": "Settlement"
      },
      {
        "method": "POST",
        "path": "/settlements/settlements",
        "operationId": "CreateSettlement",
        "summary": "Create Settlement",
        "tag": "Settlement"
      },
      {
        "method": "PUT",
        "path": "/settlements/settlements",
        "operationId": "UpdateSettlement",
        "summary": "Update Settlement",
        "tag": "Settlement"
      },
      {
        "method": "PATCH",
        "path": "/settlements/settlements",
        "operationId": "ChangeStatus",
        "summary": "change status of a Settlement",
        "tag": "Settlement"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/{SettlementId}",
        "operationId": "GetSettlementById",
        "summary": "Get settlement by Id",
        "tag": "Settlement"
      },
      {
        "method": "DELETE",
        "path": "/settlements/settlements/{SettlementId}",
        "operationId": "DeleteSettlement",
        "summary": "Delete a Settlement",
        "tag": "Settlement"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/{SettlementId}/concepts",
        "operationId": "GetAllSettlementConcept",
        "summary": "Get settlement concepts by settlement Id",
        "tag": "SettlementConcepts"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/concepts/{SettlementConceptId}",
        "operationId": "GetSettlementConceptById",
        "summary": "Get settlement concepts by settlementconcept Id",
        "tag": "SettlementConcepts"
      },
      {
        "method": "POST",
        "path": "/settlements/settlements/concepts",
        "operationId": "AddSettlementConcept",
        "summary": "add settlement concept",
        "tag": "SettlementConcepts"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/{SettlementId}/debts",
        "operationId": "GetAllDebtsBySettlementId",
        "summary": "Get all settlement debts by SettlementId",
        "tag": "SettlementDebts"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/debts/{SettlementDebtId}",
        "operationId": "GetSettlementDebtById",
        "summary": "Get settlement debt by Id",
        "tag": "SettlementDebts"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/{SettlementId}/details",
        "operationId": "GetAllDetailsBySettlementId",
        "summary": "Get all settlements details",
        "tag": "SettlementDetails"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/details/{SettlementDetailId}",
        "operationId": "GetSettlementDetailsById",
        "summary": "Get settlement detail by Id",
        "tag": "SettlementDetails"
      },
      {
        "method": "DELETE",
        "path": "/settlements/settlements/details/{SettlementDetailId}",
        "operationId": "DeleteSettlementDetail",
        "summary": "Delete a Settlement detail",
        "tag": "SettlementDetails"
      },
      {
        "method": "POST",
        "path": "/settlements/settlements/details",
        "operationId": "CreateSettlementDetail",
        "summary": "Create Settlement detail",
        "tag": "SettlementDetails"
      },
      {
        "method": "PUT",
        "path": "/settlements/settlements/details",
        "operationId": "UpdateSettlementDetail",
        "summary": "Update Settlement detail",
        "tag": "SettlementDetails"
      },
      {
        "method": "PATCH",
        "path": "/settlements/settlements/details/{SettlementDetailId}/exclude/{excludeStatus}",
        "operationId": "ExcludeSettlementDetail",
        "summary": "Exclude a Settlement detail",
        "tag": "SettlementDetails"
      },
      {
        "method": "PATCH",
        "path": "/settlements/settlements/details/exclude/{excludeStatus}",
        "operationId": "MasiveExcludeSettlementDetail",
        "summary": "Exclude all Settlement details by resume id",
        "tag": "SettlementDetails"
      },
      {
        "method": "PATCH",
        "path": "/settlements/settlements/details/{SettlementDetailId}/markok/{Status}",
        "operationId": "VerifiedSettlementDetail",
        "summary": "Mark a Settlement detail as ok",
        "tag": "SettlementDetails"
      },
      {
        "method": "PATCH",
        "path": "/settlements/settlements/details/{SettlementDetailId}/marktoreview/{Status}",
        "operationId": "ReviewSettlementDetail",
        "summary": "Delete a Settlement detail",
        "tag": "SettlementDetails"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/details/{DetailId}/concept-values",
        "operationId": "GetAllConceptValuesBySettlementDetailId",
        "summary": "Get all concept values by detail id",
        "tag": "SettlementDetailsConceptValues"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/details/concept-values/{ConceptValueId}",
        "operationId": "GetSettlementDetailConceptValueById",
        "summary": "Get concept value by Id",
        "tag": "SettlementDetailsConceptValues"
      },
      {
        "method": "DELETE",
        "path": "/settlements/settlements/details/concept-values/{ConceptValueId}",
        "operationId": "DeleteSettlementDetailConceptValueById",
        "summary": "Delete concept value by Id",
        "tag": "SettlementDetailsConceptValues"
      },
      {
        "method": "POST",
        "path": "/settlements/settlements/details/concept-values",
        "operationId": "CreateSettlementDetailConceptValue",
        "summary": "",
        "tag": "SettlementDetailsConceptValues"
      },
      {
        "method": "PUT",
        "path": "/settlements/settlements/details/concept-values",
        "operationId": "UpdateSettlementDetailConceptValue",
        "summary": "",
        "tag": "SettlementDetailsConceptValues"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/{SettlementId}/resumes",
        "operationId": "GetAllResumesBySettlementId",
        "summary": "Get all settlements resumes",
        "tag": "SettlementResumes"
      },
      {
        "method": "GET",
        "path": "/settlements/settlements/resumes/{SettlementResumeId}",
        "operationId": "GetSettlementResumeById",
        "summary": "Get settlement resume by Id",
        "tag": "SettlementResumes"
      },
      {
        "method": "DELETE",
        "path": "/settlements/settlements/resumes/{SettlementResumeId}",
        "operationId": "DeleteSettlementResume",
        "summary": "Delete a Settlement resume",
        "tag": "SettlementResumes"
      },
      {
        "method": "POST",
        "path": "/settlements/settlements/resumes",
        "operationId": "CreateSettlementResume",
        "summary": "Create Settlement resume",
        "tag": "SettlementResumes"
      },
      {
        "method": "PUT",
        "path": "/settlements/settlements/resumes",
        "operationId": "UpdateSettlementResume",
        "summary": "Update Settlement Resume",
        "tag": "SettlementResumes"
      },
      {
        "method": "GET",
        "path": "/settlements/Sponsors/{SponsorId}/settlements",
        "operationId": "GetAllSettlementsBySponsorId",
        "summary": "Get all settlements by sponsor id",
        "tag": "SponsorAssociation"
      },
      {
        "method": "GET",
        "path": "/settlements/Sponsors/settlements/{SponsorSettlementId}",
        "operationId": "GetSponsorSettlementById",
        "summary": "Get sponsor Settlements By Id",
        "tag": "SponsorAssociation"
      },
      {
        "method": "DELETE",
        "path": "/settlements/Sponsors/settlements/{SponsorSettlementId}",
        "operationId": "DisassociateSettlementFromSponsor",
        "summary": "Disassociate Settlement From sponsor",
        "tag": "SponsorAssociation"
      },
      {
        "method": "POST",
        "path": "/settlements/Sponsors/settlements",
        "operationId": "AssociateSettlementToSponsor",
        "summary": "Associate Settlement To Sponsor",
        "tag": "SponsorAssociation"
      }
    ]
  },
  {
    "slug": "cashflow",
    "displayName": "Cashflow API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/cashflow",
    "status": "integrated",
    "endpointCount": 42,
    "endpoints": [
      {
        "method": "GET",
        "path": "/cashflow/accounts",
        "operationId": "GetAccounts",
        "summary": "Get all accounts by OwnerId",
        "tag": "Account"
      },
      {
        "method": "POST",
        "path": "/cashflow/accounts",
        "operationId": "CreateAccount",
        "summary": "Create a new account",
        "tag": "Account"
      },
      {
        "method": "GET",
        "path": "/cashflow/accounts/{AccountId}",
        "operationId": "GetAccount",
        "summary": "Get account by Id",
        "tag": "Account"
      },
      {
        "method": "GET",
        "path": "/cashflow/accounts/{AccountId}/movements",
        "operationId": "GetAccountMovements",
        "summary": "Get all movements by AccountId",
        "tag": "AccountMovement"
      },
      {
        "method": "GET",
        "path": "/cashflow/accounts/movements/{AccountMovementId}",
        "operationId": "GetAccountMovementById",
        "summary": "Get movement by Id",
        "tag": "AccountMovement"
      },
      {
        "method": "POST",
        "path": "/cashflow/accounts/movements",
        "operationId": "CreateAccountMovement",
        "summary": "Create a new movement",
        "tag": "AccountMovement"
      },
      {
        "method": "PUT",
        "path": "/cashflow/accounts/movements",
        "operationId": "UpdateAccountMovement",
        "summary": "Update a account movement",
        "tag": "AccountMovement"
      },
      {
        "method": "GET",
        "path": "/cashflow/debts/creditor/{CreditorId}",
        "operationId": "GetDebtsByCreditor",
        "summary": "Get all debts by Creditors or Debtors",
        "tag": "Debt"
      },
      {
        "method": "GET",
        "path": "/cashflow/debts/debtor/{DebtorId}",
        "operationId": "GetDebtsByDebtor",
        "summary": "Get all debts by Debtor",
        "tag": "Debt"
      },
      {
        "method": "GET",
        "path": "/cashflow/debts/settlements/{SettlementId}",
        "operationId": "GetAllDebtsBySettlementId",
        "summary": "Get debts by settlement id",
        "tag": "Debt"
      },
      {
        "method": "GET",
        "path": "/cashflow/debts/{DebtId}",
        "operationId": "GetDebtById",
        "summary": "Get debt by Id",
        "tag": "Debt"
      },
      {
        "method": "GET",
        "path": "/cashflow/debts/{DebtorId}",
        "operationId": "GetPendingCreditorDebtsByDebtorById",
        "summary": "Get all debts by Debtor",
        "tag": "Debt"
      },
      {
        "method": "POST",
        "path": "/cashflow/debts",
        "operationId": "CreateDebt",
        "summary": "Create a new debt",
        "tag": "Debt"
      },
      {
        "method": "POST",
        "path": "/cashflow/debts/{debtId}/forgiveness",
        "operationId": "DebtForgiveness",
        "summary": "Forgiveness a debt",
        "tag": "Debt"
      },
      {
        "method": "POST",
        "path": "/cashflow/debts/{debtId}/adjustment",
        "operationId": "DebtAdjustment",
        "summary": "Debt adjustment",
        "tag": "Debt"
      },
      {
        "method": "POST",
        "path": "/cashflow/debts/{debtId}/rollback",
        "operationId": "RollbackDebtCreation",
        "summary": "Rollback Debt Creation",
        "tag": "Debt"
      },
      {
        "method": "GET",
        "path": "/cashflow/debts/{debtId}/paid",
        "operationId": "CheckDebtPaid",
        "summary": "Check if a debt is fully paid (no pending amount)",
        "tag": "Debt"
      },
      {
        "method": "GET",
        "path": "/cashflow/debts/{DebtId}/movements",
        "operationId": "GetDebtsMovementsByDebtId",
        "summary": "Get all movements by DebtId",
        "tag": "DebtMovement"
      },
      {
        "method": "GET",
        "path": "/cashflow/debts/movements/{debtMovementId}",
        "operationId": "GetDebtMovementById",
        "summary": "Get debt movement by Id",
        "tag": "DebtMovement"
      },
      {
        "method": "POST",
        "path": "/cashflow/debts/movements",
        "operationId": "CreateDebtMovement",
        "summary": "Create a new debt movement",
        "tag": "DebtMovement"
      },
      {
        "method": "GET",
        "path": "/cashflow/info",
        "operationId": "get-/cashflow/info",
        "summary": "",
        "tag": "Meta"
      },
      {
        "method": "GET",
        "path": "/cashflow/movement",
        "operationId": "GetMovements",
        "summary": "Get movements debt or payment id",
        "tag": "Movement"
      },
      {
        "method": "GET",
        "path": "/cashflow/movement-types",
        "operationId": "GetMovementTypes",
        "summary": "Get all movement types",
        "tag": "MovementType"
      },
      {
        "method": "POST",
        "path": "/cashflow/movement-types",
        "operationId": "CreateMovementType",
        "summary": "Create new movement Type",
        "tag": "MovementType"
      },
      {
        "method": "PUT",
        "path": "/cashflow/movement-types",
        "operationId": "UpdateMovementType",
        "summary": "Update Movement Type",
        "tag": "MovementType"
      },
      {
        "method": "GET",
        "path": "/cashflow/movement-types/{MovementTypeId}",
        "operationId": "GetMovementTypesById",
        "summary": "Get movement type by id",
        "tag": "MovementType"
      },
      {
        "method": "DELETE",
        "path": "/cashflow/movement-types/{MovementTypeId}",
        "operationId": "DeleteMovementType",
        "summary": "Delete Movement Type",
        "tag": "MovementType"
      },
      {
        "method": "GET",
        "path": "/cashflow/payments/chart-info",
        "operationId": "GetPaymentCharInfoByPeriod",
        "summary": "",
        "tag": "Payment"
      },
      {
        "method": "GET",
        "path": "/cashflow/payments",
        "operationId": "GetPaymentsByPayer",
        "summary": "Get all payments by Payer",
        "tag": "Payment"
      },
      {
        "method": "POST",
        "path": "/cashflow/payments",
        "operationId": "CreatePayment",
        "summary": "Create a new payment",
        "tag": "Payment"
      },
      {
        "method": "GET",
        "path": "/cashflow/payments/pending-imputation",
        "operationId": "GetPaymentsWithPendingImputation",
        "summary": "Get all payments with pending imputation amount",
        "tag": "Payment"
      },
      {
        "method": "GET",
        "path": "/cashflow/payments/{PaymentId}",
        "operationId": "GetPaymentById",
        "summary": "Get payment by Id",
        "tag": "Payment"
      },
      {
        "method": "POST",
        "path": "/cashflow/payments/{paymentId}/rollback-creation",
        "operationId": "RollbackPaymentCreation",
        "summary": "Rollback payment creation",
        "tag": "Payment"
      },
      {
        "method": "POST",
        "path": "/cashflow/payments/{paymentId}/rollback-imputations",
        "operationId": "RollbackPaymentImputations",
        "summary": "Rollback payment Imputations",
        "tag": "Payment"
      },
      {
        "method": "POST",
        "path": "/cashflow/payments/{paymentId}/adjustment",
        "operationId": "PaymentAdjustment",
        "summary": "Payment Adjustment",
        "tag": "Payment"
      },
      {
        "method": "GET",
        "path": "/cashflow/paymentmovement/debt/{debtId}",
        "operationId": "GetPaymentMovementsByDebtId",
        "summary": "Get payments movements by debtId",
        "tag": "PaymentMovement"
      },
      {
        "method": "GET",
        "path": "/cashflow/paymentmovement/payment/{paymentId}",
        "operationId": "GetPaymentMovementsByPaymentId",
        "summary": "Get payments movements by paymentId",
        "tag": "PaymentMovement"
      },
      {
        "method": "GET",
        "path": "/cashflow/system-movements",
        "operationId": "GetSystemMovements",
        "summary": "Get all system movements",
        "tag": "SystemMovement"
      },
      {
        "method": "POST",
        "path": "/cashflow/system-movements",
        "operationId": "CreateSystemMovement",
        "summary": "Create a new system movement",
        "tag": "SystemMovement"
      },
      {
        "method": "PUT",
        "path": "/cashflow/system-movements",
        "operationId": "UpdateSystemMovement",
        "summary": "Update a system movement",
        "tag": "SystemMovement"
      },
      {
        "method": "GET",
        "path": "/cashflow/system-movements/{SystemMovementId}",
        "operationId": "GetSystemMovementsById",
        "summary": "Get all system movement by id",
        "tag": "SystemMovement"
      },
      {
        "method": "DELETE",
        "path": "/cashflow/system-movements/{SystemMovementId}",
        "operationId": "DeleteSystemMovement",
        "summary": "",
        "tag": "SystemMovement"
      }
    ]
  },
  {
    "slug": "ia",
    "displayName": "IA API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/ia",
    "status": "integrated",
    "endpointCount": 11,
    "endpoints": [
      {
        "method": "POST",
        "path": "/ia/api/v{version}/Ai/chat",
        "operationId": "post-/ia/api/v{version}/Ai/chat",
        "summary": "",
        "tag": "Ai"
      },
      {
        "method": "POST",
        "path": "/ia/api/v{version}/Ai/embed",
        "operationId": "post-/ia/api/v{version}/Ai/embed",
        "summary": "",
        "tag": "Ai"
      },
      {
        "method": "POST",
        "path": "/ia/api/v{version}/ContractMultiFile/extract",
        "operationId": "ExtractContractFromMultipleFiles",
        "summary": "",
        "tag": "ContractMultiFile"
      },
      {
        "method": "POST",
        "path": "/ia/api/v{version}/ContractMultiFile/extract/stages",
        "operationId": "ExtractStagesFromMultipleFiles",
        "summary": "",
        "tag": "ContractMultiFile"
      },
      {
        "method": "POST",
        "path": "/ia/api/v{version}/ContractMultiFile/extract/concepts",
        "operationId": "ExtractConceptsFromMultipleFiles",
        "summary": "",
        "tag": "ContractMultiFile"
      },
      {
        "method": "POST",
        "path": "/ia/api/v{version}/ContractMultiFile/extract/schedules",
        "operationId": "ExtractSchedulesFromMultipleFiles",
        "summary": "",
        "tag": "ContractMultiFile"
      },
      {
        "method": "POST",
        "path": "/ia/api/v{version}/ContractMultiFile/analyze/simple",
        "operationId": "AnalyzeMultipleFilesSimple",
        "summary": "",
        "tag": "ContractMultiFile"
      },
      {
        "method": "POST",
        "path": "/ia/api/v{version}/ContractPdf/extract",
        "operationId": "ExtractContractFromPdf",
        "summary": "",
        "tag": "ContractPdf"
      },
      {
        "method": "POST",
        "path": "/ia/api/v{version}/PdfAnalysis/analyze",
        "operationId": "AnalyzePdf",
        "summary": "",
        "tag": "PdfAnalysis"
      },
      {
        "method": "POST",
        "path": "/ia/api/v{version}/PdfAnalysis/analyze/simple",
        "operationId": "AnalyzePdfSimpleUpload",
        "summary": "",
        "tag": "PdfAnalysis"
      },
      {
        "method": "POST",
        "path": "/ia/api/v{version}/PdfAnalysis/analyze/upload",
        "operationId": "AnalyzePdfUpload",
        "summary": "",
        "tag": "PdfAnalysis"
      }
    ]
  },
  {
    "slug": "turnero",
    "displayName": "Turnero API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/turnero",
    "status": "integrated",
    "endpointCount": 51,
    "endpoints": [
      {
        "method": "POST",
        "path": "/offices/Asignaciones/asignar",
        "operationId": "post-/offices/Asignaciones/asignar",
        "summary": "",
        "tag": "Asignaciones"
      },
      {
        "method": "PUT",
        "path": "/offices/Asignaciones/liberar/{medicoId}",
        "operationId": "put-/offices/Asignaciones/liberar/{medicoId}",
        "summary": "",
        "tag": "Asignaciones"
      },
      {
        "method": "GET",
        "path": "/offices/Asignaciones/activas",
        "operationId": "get-/offices/Asignaciones/activas",
        "summary": "",
        "tag": "Asignaciones"
      },
      {
        "method": "GET",
        "path": "/offices/Consultorios",
        "operationId": "get-/offices/Consultorios",
        "summary": "",
        "tag": "Consultorios"
      },
      {
        "method": "POST",
        "path": "/offices/Consultorios",
        "operationId": "post-/offices/Consultorios",
        "summary": "",
        "tag": "Consultorios"
      },
      {
        "method": "GET",
        "path": "/offices/Consultorios/todos-disponibles",
        "operationId": "get-/offices/Consultorios/todos-disponibles",
        "summary": "",
        "tag": "Consultorios"
      },
      {
        "method": "GET",
        "path": "/offices/Consultorios/disponibles/{doctorId}",
        "operationId": "get-/offices/Consultorios/disponibles/{doctorId}",
        "summary": "",
        "tag": "Consultorios"
      },
      {
        "method": "PUT",
        "path": "/offices/Consultorios/{id}",
        "operationId": "put-/offices/Consultorios/{id}",
        "summary": "",
        "tag": "Consultorios"
      },
      {
        "method": "DELETE",
        "path": "/offices/Consultorios/{id}",
        "operationId": "delete-/offices/Consultorios/{id}",
        "summary": "",
        "tag": "Consultorios"
      },
      {
        "method": "PUT",
        "path": "/offices/Consultorios/{id}/estado",
        "operationId": "put-/offices/Consultorios/{id}/estado",
        "summary": "",
        "tag": "Consultorios"
      },
      {
        "method": "GET",
        "path": "/offices/historia_clinica/{pacienteId}",
        "operationId": "get-/offices/historia_clinica/{pacienteId}",
        "summary": "",
        "tag": "HistoriaClinica"
      },
      {
        "method": "POST",
        "path": "/offices/historia_clinica",
        "operationId": "post-/offices/historia_clinica",
        "summary": "",
        "tag": "HistoriaClinica"
      },
      {
        "method": "POST",
        "path": "/offices/Llamados",
        "operationId": "post-/offices/Llamados",
        "summary": "",
        "tag": "Llamados"
      },
      {
        "method": "GET",
        "path": "/offices/Llamados/ultimos/{sectorId}",
        "operationId": "get-/offices/Llamados/ultimos/{sectorId}",
        "summary": "",
        "tag": "Llamados"
      },
      {
        "method": "POST",
        "path": "/offices/Llamados/purge-old",
        "operationId": "post-/offices/Llamados/purge-old",
        "summary": "",
        "tag": "Llamados"
      },
      {
        "method": "GET",
        "path": "/offices/Medicos",
        "operationId": "get-/offices/Medicos",
        "summary": "",
        "tag": "Medicos"
      },
      {
        "method": "POST",
        "path": "/offices/Medicos",
        "operationId": "post-/offices/Medicos",
        "summary": "",
        "tag": "Medicos"
      },
      {
        "method": "GET",
        "path": "/offices/Medicos/{id}",
        "operationId": "get-/offices/Medicos/{id}",
        "summary": "",
        "tag": "Medicos"
      },
      {
        "method": "PUT",
        "path": "/offices/Medicos/{id}",
        "operationId": "put-/offices/Medicos/{id}",
        "summary": "",
        "tag": "Medicos"
      },
      {
        "method": "DELETE",
        "path": "/offices/Medicos/{id}",
        "operationId": "delete-/offices/Medicos/{id}",
        "summary": "",
        "tag": "Medicos"
      },
      {
        "method": "GET",
        "path": "/offices/Medicos/{medicoId}/configuracion",
        "operationId": "get-/offices/Medicos/{medicoId}/configuracion",
        "summary": "",
        "tag": "Medicos"
      },
      {
        "method": "GET",
        "path": "/offices/Pacientes",
        "operationId": "get-/offices/Pacientes",
        "summary": "",
        "tag": "Pacientes"
      },
      {
        "method": "POST",
        "path": "/offices/Pacientes",
        "operationId": "post-/offices/Pacientes",
        "summary": "",
        "tag": "Pacientes"
      },
      {
        "method": "GET",
        "path": "/offices/Pacientes/{id}",
        "operationId": "get-/offices/Pacientes/{id}",
        "summary": "",
        "tag": "Pacientes"
      },
      {
        "method": "GET",
        "path": "/offices/Pacientes/{medicoId}/{sectorId}/{consultorioNumero}",
        "operationId": "get-/offices/Pacientes/{medicoId}/{sectorId}/{consultorioNumero}",
        "summary": "",
        "tag": "Pacientes"
      },
      {
        "method": "POST",
        "path": "/offices/prefacturador/generar",
        "operationId": "post-/offices/prefacturador/generar",
        "summary": "",
        "tag": "Prefacturador"
      },
      {
        "method": "GET",
        "path": "/offices/prefacturador/{id}",
        "operationId": "get-/offices/prefacturador/{id}",
        "summary": "",
        "tag": "Prefacturador"
      },
      {
        "method": "GET",
        "path": "/offices/prefacturador",
        "operationId": "get-/offices/prefacturador",
        "summary": "",
        "tag": "Prefacturador"
      },
      {
        "method": "PUT",
        "path": "/offices/prefacturador/{id}/estado",
        "operationId": "put-/offices/prefacturador/{id}/estado",
        "summary": "",
        "tag": "Prefacturador"
      },
      {
        "method": "GET",
        "path": "/offices/QueueDisplayScreen",
        "operationId": "get-/offices/QueueDisplayScreen",
        "summary": "",
        "tag": "QueueDisplayScreen"
      },
      {
        "method": "POST",
        "path": "/offices/QueueDisplayScreen",
        "operationId": "post-/offices/QueueDisplayScreen",
        "summary": "",
        "tag": "QueueDisplayScreen"
      },
      {
        "method": "GET",
        "path": "/offices/QueueDisplayScreen/{id}",
        "operationId": "get-/offices/QueueDisplayScreen/{id}",
        "summary": "",
        "tag": "QueueDisplayScreen"
      },
      {
        "method": "PUT",
        "path": "/offices/QueueDisplayScreen/{id}",
        "operationId": "put-/offices/QueueDisplayScreen/{id}",
        "summary": "",
        "tag": "QueueDisplayScreen"
      },
      {
        "method": "DELETE",
        "path": "/offices/QueueDisplayScreen/{id}",
        "operationId": "delete-/offices/QueueDisplayScreen/{id}",
        "summary": "",
        "tag": "QueueDisplayScreen"
      },
      {
        "method": "GET",
        "path": "/offices/QueueDisplayScreen/DisplayInfo",
        "operationId": "get-/offices/QueueDisplayScreen/DisplayInfo",
        "summary": "",
        "tag": "QueueDisplayScreen"
      },
      {
        "method": "POST",
        "path": "/offices/QueueDisplayScreen/register",
        "operationId": "post-/offices/QueueDisplayScreen/register",
        "summary": "",
        "tag": "QueueDisplayScreen"
      },
      {
        "method": "GET",
        "path": "/offices/Sectores",
        "operationId": "get-/offices/Sectores",
        "summary": "",
        "tag": "Sectores"
      },
      {
        "method": "POST",
        "path": "/offices/Sectores",
        "operationId": "post-/offices/Sectores",
        "summary": "",
        "tag": "Sectores"
      },
      {
        "method": "GET",
        "path": "/offices/Sectores/{sectorId}",
        "operationId": "get-/offices/Sectores/{sectorId}",
        "summary": "",
        "tag": "Sectores"
      },
      {
        "method": "GET",
        "path": "/offices/Sectores/{sectorId}/getinfo",
        "operationId": "get-/offices/Sectores/{sectorId}/getinfo",
        "summary": "",
        "tag": "Sectores"
      },
      {
        "method": "PUT",
        "path": "/offices/Sectores/{id}",
        "operationId": "put-/offices/Sectores/{id}",
        "summary": "",
        "tag": "Sectores"
      },
      {
        "method": "DELETE",
        "path": "/offices/Sectores/{id}",
        "operationId": "delete-/offices/Sectores/{id}",
        "summary": "",
        "tag": "Sectores"
      },
      {
        "method": "GET",
        "path": "/offices/Sectores/{sectorId}/estadisticas",
        "operationId": "get-/offices/Sectores/{sectorId}/estadisticas",
        "summary": "",
        "tag": "Sectores"
      },
      {
        "method": "GET",
        "path": "/offices/Sedes",
        "operationId": "get-/offices/Sedes",
        "summary": "",
        "tag": "Sedes"
      },
      {
        "method": "POST",
        "path": "/offices/Sedes",
        "operationId": "post-/offices/Sedes",
        "summary": "",
        "tag": "Sedes"
      },
      {
        "method": "PUT",
        "path": "/offices/Sedes/{id}",
        "operationId": "put-/offices/Sedes/{id}",
        "summary": "",
        "tag": "Sedes"
      },
      {
        "method": "DELETE",
        "path": "/offices/Sedes/{id}",
        "operationId": "delete-/offices/Sedes/{id}",
        "summary": "",
        "tag": "Sedes"
      },
      {
        "method": "GET",
        "path": "/offices/Videos",
        "operationId": "get-/offices/Videos",
        "summary": "",
        "tag": "Videos"
      },
      {
        "method": "POST",
        "path": "/offices/Videos",
        "operationId": "post-/offices/Videos",
        "summary": "",
        "tag": "Videos"
      },
      {
        "method": "PUT",
        "path": "/offices/Videos/{id}",
        "operationId": "put-/offices/Videos/{id}",
        "summary": "",
        "tag": "Videos"
      },
      {
        "method": "DELETE",
        "path": "/offices/Videos/{id}",
        "operationId": "delete-/offices/Videos/{id}",
        "summary": "",
        "tag": "Videos"
      }
    ]
  },
  {
    "slug": "specialties",
    "displayName": "Medical Specialties API",
    "specUrl": "https://prebiller.hc.alpha-cr.com/apis/prebiller-gateway/swagger/docs/v1/specialties",
    "status": "integrated",
    "endpointCount": 5,
    "endpoints": [
      {
        "method": "GET",
        "path": "/medical-specialties",
        "operationId": "GetAllSpecialties",
        "summary": "Get All Services",
        "tag": "Specialties"
      },
      {
        "method": "POST",
        "path": "/medical-specialties",
        "operationId": "CreateSpecialty",
        "summary": "Create Specialty",
        "tag": "Specialties"
      },
      {
        "method": "PUT",
        "path": "/medical-specialties",
        "operationId": "UpdateSpecialty",
        "summary": "Update Specialty",
        "tag": "Specialties"
      },
      {
        "method": "GET",
        "path": "/medical-specialties/{specialtyId}",
        "operationId": "GetSpecialtyById",
        "summary": "Get Specialty by Id",
        "tag": "Specialties"
      },
      {
        "method": "DELETE",
        "path": "/medical-specialties/{specialtyId}",
        "operationId": "DeleteSpecialty",
        "summary": "Delete Specialty",
        "tag": "Specialties"
      }
    ]
  }
] as const

export default manifest
