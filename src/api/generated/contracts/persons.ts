export interface paths {
    "/persons/{PersonId}/addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all addresses by person */
        get: operations["GetAddressesByPersonId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/addresses/{AddressId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Address by Id */
        get: operations["GetAddressById"];
        put?: never;
        post?: never;
        /** Delete an Address */
        delete: operations["DeleteAddress"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/addresses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Address */
        put: operations["UpdateAddress"];
        /** Create Address */
        post: operations["CreateAddress"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/{PersonId}/emails": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetEmailsByPersonId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/emails/{EmailId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetEmailById"];
        put?: never;
        post?: never;
        delete: operations["DeleteEmail"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/emails": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["UpdateEmail"];
        post: operations["CreateEmail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/{PersonId}/external-associations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get external associations for a person */
        get: operations["GetExternalAssociationsByPersonId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/external-associations/{ExternalAssociationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get external association by id */
        get: operations["GetExternalAssociationById"];
        put: operations["UpdateExternalAssociation"];
        post?: never;
        /** Delete external association */
        delete: operations["DeleteExternalAssociation"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/external-associations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create new external association to a person */
        post: operations["CreateExternalAssociation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/genders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all genders */
        get: operations["GetGenders"];
        /** Update Gender */
        put: operations["UpdateGender"];
        /** Create new Gender */
        post: operations["CreateGender"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/genders/{GenderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get gender by Id */
        get: operations["GetGenderById"];
        put?: never;
        post?: never;
        /** Delete gender */
        delete: operations["DeleteGender"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/identifiertypes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all person indentifier types */
        get: operations["GetIdentifierTypes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/identifierTypes/{IdentifierTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get identifier type by id */
        get: operations["GetIdentifierTypeById"];
        put?: never;
        post?: never;
        /** Delete identifier type */
        delete: operations["DeleteIdentifierType"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/identifierTypes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Identifier Type */
        put: operations["UpdateIdentifierType"];
        /** Create new identifier type */
        post: operations["CreateIndetifierType"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/maritalstatuses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["GetMaritalStatus"];
        put: operations["UpdateMaritalStatus"];
        post: operations["CreateMaritalStatus"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/maritalstatuses/{MaritalStatusId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Marital Status by Id */
        get: operations["GetMaritalStatusById"];
        put?: never;
        post?: never;
        delete: operations["DeleteMaritalStatus"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all person */
        get: operations["GetAllPersons"];
        /** Update Person */
        put: operations["UpdatePerson"];
        /** Create Person */
        post: operations["CreatePerson"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/{PersonId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Person by Id */
        get: operations["GetPersonById"];
        put?: never;
        post?: never;
        /** Delete an Address */
        delete: operations["DeletePerson"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/fix-identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["FixPersonIdentifiers"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/{PersonId}/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all identifiers by person Id */
        get: operations["GetIdentifiersByPersonId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/identifiers/{PersonIdentifierId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get person identifier by Id */
        get: operations["GetPersonIdentifierById"];
        put?: never;
        post?: never;
        /** Delete person identifier */
        delete: operations["DeletePersonIdentifier"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/identifiers/verification": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Verify if the identifier is already used by another person */
        get: operations["VerifyIdentifier"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/identifiers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update person identifier */
        put: operations["UpdatePersonIdentifier"];
        /** Create new person identifier */
        post: operations["CreatePersonIdentifier"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/{PersonId}/preferences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all identifiers by person Id */
        get: operations["GetPreferencesByPersonId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/preferences/{PersonPreferenceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get person preference by Id */
        get: operations["GetPersonPreferenceById"];
        put?: never;
        post?: never;
        /** Delete a person preference */
        delete: operations["DeletePersonPreference"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/preferences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update a person preference */
        put: operations["UpdatePersonPreference"];
        /** Create a new person preference */
        post: operations["CreatePersonPreference"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/{PersonId}/relationships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all person relationship */
        get: operations["GetPersonRelationships"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/relationships/{PersonRelationshipId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get person relationship by Id */
        get: operations["GetPersonRelationshipById"];
        put?: never;
        post?: never;
        /** Delete person relationship */
        delete: operations["DeletePersonRelationship"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/relationships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update person relationship */
        put: operations["UpdatePersonRelationship"];
        /** Create new person relationship */
        post: operations["CreatePersonRelationship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/{PersonId}/phones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all phones by person */
        get: operations["GetPhonesByPersonId"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/phones/{PhoneId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get phone by id */
        get: operations["GetPhonesById"];
        put?: never;
        post?: never;
        /** Delete phone */
        delete: operations["DeletePhone"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/phones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update Phone */
        put: operations["UpdatePhone"];
        /** Get Phone by Id */
        post: operations["CreatePhone"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/relationshiptypes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all Relationship types */
        get: operations["GetRelationshipTypes"];
        /** Update Relationship Type */
        put: operations["UpdateRelationshipType"];
        /** Create new Relationship Type */
        post: operations["CreateRelationShipType"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/persons/relationshiptypes/{RelationshipTypeId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get relationship type by Id */
        get: operations["GetRelationshipTypeById"];
        put?: never;
        post?: never;
        /** Delete Relationship Type */
        delete: operations["DeleteRelationshipType"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AddressViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            personId?: number;
            street?: string | null;
            city?: string | null;
            postalCode?: string | null;
            country?: string | null;
        };
        AddressViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AddressViewModel"][] | null;
        };
        AddressViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AddressViewModel"] | null;
        };
        BooleanResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: boolean;
        };
        CreatePersonAddressCommand: {
            /** Format: int32 */
            personId?: number;
            street?: string | null;
            city?: string | null;
            postalCode?: string | null;
            country?: string | null;
        };
        CreatePersonCommand: {
            personType?: components["schemas"]["PersonTypeEnum"];
            businessName?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            /** Format: date-time */
            birthDate?: string | null;
            birthPlace?: string | null;
            activity?: string | null;
            nationality?: string | null;
            /** Format: int32 */
            genderId?: number | null;
            /** Format: int32 */
            maritalStatusId?: number | null;
            /** Format: int32 */
            numberOfMarriages?: number;
        };
        CreatePersonEmailCommand: {
            /** Format: int32 */
            personId?: number;
            email?: string | null;
            comments?: string | null;
        };
        CreatePersonPhoneCommand: {
            /** Format: int32 */
            personId?: number;
            phoneNumber?: string | null;
        };
        EmailEntity: {
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
            personId?: number;
            person?: components["schemas"]["PersonEntity"] | null;
            email?: string | null;
            comments?: string | null;
        };
        EmailViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            personId?: number;
            email?: string | null;
            comments?: string | null;
        };
        EmailViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["EmailViewModel"][] | null;
        };
        EmailViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["EmailViewModel"] | null;
        };
        ExternalEntityAssociationCreateCommandAsync: {
            externalEntityOrganization?: string | null;
            externalEntityId?: string | null;
            externalEntityType?: string | null;
            /** Format: int32 */
            personId?: number;
            person?: components["schemas"]["PersonEntity"] | null;
        };
        ExternalEntityAssociationViewModel: Record<string, never>;
        ExternalEntityAssociationViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ExternalEntityAssociationViewModel"][] | null;
        };
        ExternalEntityAssociationViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ExternalEntityAssociationViewModel"] | null;
        };
        ExternalEntityAssociationsUpdateCommandAsync: {
            externalEntityOrganization?: string | null;
            externalEntityId?: string | null;
            externalEntityType?: string | null;
            /** Format: int32 */
            personId?: number;
            person?: components["schemas"]["PersonEntity"] | null;
            /** Format: int32 */
            id?: number;
        };
        GenderCreateCommandAsync: {
            name?: string | null;
            description?: string | null;
            isActive?: boolean;
        };
        GenderEntity: {
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
            isActive?: boolean;
        };
        GenderUpdateCommandAsync: {
            name?: string | null;
            description?: string | null;
            isActive?: boolean;
            /** Format: int32 */
            id?: number;
        };
        GenderViewModel: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            description?: string | null;
            isActive?: boolean;
            isDeleted?: boolean;
        };
        GenderViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["GenderViewModel"][] | null;
        };
        GenderViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["GenderViewModel"] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        HttpStatusCode: 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
        IdentifierTypeCreateCommandAsync: {
            name?: string | null;
            description?: string | null;
            juridictionType?: components["schemas"]["JuridictionIdentifierTypeEnum"];
            isForNaturalPerson?: boolean;
            isForJuridicalPerson?: boolean;
            identifierMask?: string | null;
            validationRegex?: string | null;
            isActive?: boolean;
        };
        IdentifierTypeEntity: {
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
            juridictionType?: components["schemas"]["JuridictionIdentifierTypeEnum"];
            isForNaturalPerson?: boolean;
            isForJuridicalPerson?: boolean;
            identifierMask?: string | null;
            validationRegex?: string | null;
            isActive?: boolean;
        };
        IdentifierTypeUpdateCommandAsync: {
            name?: string | null;
            description?: string | null;
            juridictionType?: components["schemas"]["JuridictionIdentifierTypeEnum"];
            isForNaturalPerson?: boolean;
            isForJuridicalPerson?: boolean;
            identifierMask?: string | null;
            validationRegex?: string | null;
            isActive?: boolean;
            /** Format: int32 */
            id?: number;
        };
        IdentifierTypeViewModel: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            description?: string | null;
            juridictionType?: components["schemas"]["JuridictionIdentifierTypeEnum"];
            isForLegalPerson?: boolean;
            isForJuridicalPerson?: boolean;
            identifierMask?: string | null;
            validationRegex?: string | null;
            isActive?: boolean;
            isDeleted?: boolean;
        };
        IdentifierTypeViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["IdentifierTypeViewModel"][] | null;
        };
        IdentifierTypeViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["IdentifierTypeViewModel"] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        JuridictionIdentifierTypeEnum: 0 | 1 | 2 | 3 | 4;
        MaritalStatusCreateCommandAsync: {
            name?: string | null;
            description?: string | null;
        };
        MaritalStatusEntity: {
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
            isActive?: boolean;
        };
        MaritalStatusUpdateCommandAsync: {
            name?: string | null;
            description?: string | null;
            /** Format: int32 */
            id?: number;
            isActive?: boolean;
        };
        MaritalStatusViewModel: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            description?: string | null;
            isActive?: boolean;
            isDeleted?: boolean;
        };
        MaritalStatusViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MaritalStatusViewModel"][] | null;
        };
        MaritalStatusViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MaritalStatusViewModel"] | null;
        };
        PersonEntity: {
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
            personIdentifier?: string;
            businessName?: string | null;
            personType?: components["schemas"]["PersonTypeEnum"];
            firstName?: string | null;
            lastName?: string | null;
            /** Format: date-time */
            birthDate?: string | null;
            birthPlace?: string | null;
            /** Format: int32 */
            genderId?: number | null;
            gender?: components["schemas"]["GenderEntity"] | null;
            /** Format: int32 */
            maritalStatusId?: number | null;
            maritalStatus?: components["schemas"]["MaritalStatusEntity"] | null;
            /** Format: int32 */
            numberOfMarriages?: number;
            activity?: string | null;
            nationality?: string | null;
            /** Format: date-time */
            startOfActivityDate?: string | null;
            /** Format: date-time */
            endOfActivityDate?: string | null;
            personIdentifiers?: components["schemas"]["PersonIdentifierEntity"][] | null;
            emails?: components["schemas"]["EmailEntity"][] | null;
            phones?: components["schemas"]["PhoneEntity"][] | null;
        };
        PersonIdentifierCreateCommandAsync: {
            /** Format: int32 */
            personId?: number;
            /** Format: int32 */
            identifierTypeId?: number;
            identifier?: string | null;
            hasBeenVerified?: boolean;
            issuedBy?: string | null;
            /** Format: date-time */
            issueDate?: string | null;
            /** Format: date-time */
            expirationDate?: string | null;
        };
        PersonIdentifierEntity: {
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
            personId?: number;
            person?: components["schemas"]["PersonEntity"] | null;
            /** Format: int32 */
            identifierTypeId?: number;
            identifierType?: components["schemas"]["IdentifierTypeEntity"] | null;
            identifier?: string | null;
            hasBeenVerified?: boolean;
            issuedBy?: string | null;
            /** Format: date-time */
            issueDate?: string | null;
            /** Format: date-time */
            expirationDate?: string | null;
        };
        PersonIdentifierUpdateCommandAsync: {
            /** Format: int32 */
            personId?: number;
            /** Format: int32 */
            identifierTypeId?: number;
            identifier?: string | null;
            hasBeenVerified?: boolean;
            issuedBy?: string | null;
            /** Format: date-time */
            issueDate?: string | null;
            /** Format: date-time */
            expirationDate?: string | null;
            /** Format: int32 */
            id?: number;
        };
        PersonIdentifierViewModel: {
            /** Format: int32 */
            id?: number;
            identifierType?: components["schemas"]["IdentifierTypeViewModel"] | null;
            identifier?: string | null;
            hasBeenVerified?: boolean;
            issuedBy?: string | null;
            /** Format: date-time */
            issueDate?: string | null;
            /** Format: date-time */
            expirationDate?: string | null;
        };
        PersonIdentifierViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PersonIdentifierViewModel"][] | null;
        };
        PersonIdentifierViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PersonIdentifierViewModel"] | null;
        };
        PersonPreferenceCreateCommandAsync: {
            /** Format: int32 */
            personId?: number;
            /** Format: int32 */
            preferenceTypeId?: number;
            preferenceValue?: boolean;
        };
        PersonPreferenceViewModel: {
            /** Format: int32 */
            personId?: number;
            preferenceType?: components["schemas"]["PreferencesTypeEntity"] | null;
            preferenceValue?: boolean;
        };
        PersonPreferenceViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PersonPreferenceViewModel"][] | null;
        };
        PersonPreferenceViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PersonPreferenceViewModel"] | null;
        };
        PersonRelationshipCreateCommandAsync: {
            /** Format: int32 */
            personId?: number;
            /** Format: int32 */
            relatedPersonId?: number;
            /** Format: int32 */
            relationshipTypeId?: number;
            isActive?: boolean;
            /** Format: date-time */
            startDate?: string | null;
            /** Format: date-time */
            endDate?: string | null;
        };
        PersonRelationshipUpdateCommandAsync: {
            /** Format: int32 */
            personId?: number;
            /** Format: int32 */
            relatedPersonId?: number;
            /** Format: int32 */
            relationshipTypeId?: number;
            isActive?: boolean;
            /** Format: date-time */
            startDate?: string | null;
            /** Format: date-time */
            endDate?: string | null;
            /** Format: int32 */
            id?: number;
        };
        PersonRelationshipViewModel: {
            /** Format: int32 */
            id?: number;
            relatedPerson?: components["schemas"]["PersonViewModel"] | null;
            relationshipType?: components["schemas"]["RelationShipTypeViewModel"] | null;
            isActive?: boolean;
            /** Format: date-time */
            startDate?: string | null;
            /** Format: date-time */
            endDate?: string | null;
            isDeleted?: boolean;
        };
        PersonRelationshipViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PersonRelationshipViewModel"][] | null;
        };
        PersonRelationshipViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PersonRelationshipViewModel"] | null;
        };
        /**
         * Format: int32
         * @enum {integer}
         */
        PersonTypeEnum: 1 | 2;
        PersonViewModel: {
            /** Format: int32 */
            id?: number;
            businessName?: string | null;
            /** Format: uuid */
            personIdentifier?: string;
            firstName?: string | null;
            lastName?: string | null;
            /** Format: date-time */
            birthDate?: string | null;
            birthPlace?: string | null;
            activity?: string | null;
            nationality?: string | null;
            gender?: components["schemas"]["GenderViewModel"] | null;
            maritalStatus?: components["schemas"]["MaritalStatusViewModel"] | null;
            /** Format: int32 */
            numberOfMarriages?: number;
            personType?: components["schemas"]["PersonTypeEnum"];
        };
        PersonViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PersonViewModel"][] | null;
        };
        PersonViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PersonViewModel"] | null;
        };
        PhoneEntity: {
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
            personId?: number;
            person?: components["schemas"]["PersonEntity"] | null;
            phoneNumber?: string | null;
        };
        PhoneViewModel: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            personId?: number;
            phoneNumber?: string | null;
        };
        PhoneViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PhoneViewModel"][] | null;
        };
        PhoneViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PhoneViewModel"] | null;
        };
        PreferencesTypeEntity: {
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
            typeOfPreference?: string | null;
        };
        RelationShipTypeCreateCommandAsync: {
            name?: string | null;
            description?: string | null;
            isActive?: boolean;
            isForLegalPersons?: boolean;
            isForNaturalPersons?: boolean;
        };
        RelationShipTypeViewModel: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            description?: string | null;
            isActive?: boolean;
            isForLegalPersons?: boolean;
            isForNaturalPersons?: boolean;
            isDeleted?: boolean;
        };
        RelationShipTypeViewModelIReadOnlyListResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["RelationShipTypeViewModel"][] | null;
        };
        RelationShipTypeViewModelResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["RelationShipTypeViewModel"] | null;
        };
        RelationshipTypeUpdateCommandAsync: {
            name?: string | null;
            description?: string | null;
            isActive?: boolean;
            isForLegalPersons?: boolean;
            isForNaturalPersons?: boolean;
            /** Format: int32 */
            id?: number;
        };
        Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
        };
        UpdatePersonAddressCommand: {
            /** Format: int32 */
            personId?: number;
            street?: string | null;
            city?: string | null;
            postalCode?: string | null;
            country?: string | null;
            /** Format: int32 */
            id?: number;
        };
        UpdatePersonCommand: {
            personType?: components["schemas"]["PersonTypeEnum"];
            businessName?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            /** Format: date-time */
            birthDate?: string | null;
            birthPlace?: string | null;
            activity?: string | null;
            nationality?: string | null;
            /** Format: int32 */
            genderId?: number | null;
            /** Format: int32 */
            maritalStatusId?: number | null;
            /** Format: int32 */
            numberOfMarriages?: number;
            /** Format: int32 */
            id?: number;
        };
        UpdatePersonEmailCommand: {
            /** Format: int32 */
            personId?: number;
            email?: string | null;
            comments?: string | null;
            /** Format: int32 */
            id?: number;
        };
        UpdatePersonPhoneCommand: {
            /** Format: int32 */
            personId?: number;
            phoneNumber?: string | null;
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
    GetAddressesByPersonId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonId: number;
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
                    "text/plain": components["schemas"]["AddressViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["AddressViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["AddressViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetAddressById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AddressId: number;
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
                    "text/plain": components["schemas"]["AddressViewModelResponse"];
                    "application/json": components["schemas"]["AddressViewModelResponse"];
                    "text/json": components["schemas"]["AddressViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeleteAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                AddressId: number;
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
    UpdateAddress: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePersonAddressCommand"];
                "text/json": components["schemas"]["UpdatePersonAddressCommand"];
                "application/*+json": components["schemas"]["UpdatePersonAddressCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AddressViewModelResponse"];
                    "application/json": components["schemas"]["AddressViewModelResponse"];
                    "text/json": components["schemas"]["AddressViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreateAddress: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePersonAddressCommand"];
                "text/json": components["schemas"]["CreatePersonAddressCommand"];
                "application/*+json": components["schemas"]["CreatePersonAddressCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["AddressViewModelResponse"];
                    "application/json": components["schemas"]["AddressViewModelResponse"];
                    "text/json": components["schemas"]["AddressViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetEmailsByPersonId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonId: number;
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
                    "text/plain": components["schemas"]["EmailViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["EmailViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["EmailViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetEmailById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                EmailId: number;
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
                    "text/plain": components["schemas"]["EmailViewModelResponse"];
                    "application/json": components["schemas"]["EmailViewModelResponse"];
                    "text/json": components["schemas"]["EmailViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeleteEmail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                EmailId: number;
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
    UpdateEmail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePersonEmailCommand"];
                "text/json": components["schemas"]["UpdatePersonEmailCommand"];
                "application/*+json": components["schemas"]["UpdatePersonEmailCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["EmailViewModelResponse"];
                    "application/json": components["schemas"]["EmailViewModelResponse"];
                    "text/json": components["schemas"]["EmailViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreateEmail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePersonEmailCommand"];
                "text/json": components["schemas"]["CreatePersonEmailCommand"];
                "application/*+json": components["schemas"]["CreatePersonEmailCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["EmailViewModelResponse"];
                    "application/json": components["schemas"]["EmailViewModelResponse"];
                    "text/json": components["schemas"]["EmailViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetExternalAssociationsByPersonId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonId: number;
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
                    "text/plain": components["schemas"]["ExternalEntityAssociationViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["ExternalEntityAssociationViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["ExternalEntityAssociationViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetExternalAssociationById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ExternalAssociationId: number;
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
                    "text/plain": components["schemas"]["ExternalEntityAssociationViewModelResponse"];
                    "application/json": components["schemas"]["ExternalEntityAssociationViewModelResponse"];
                    "text/json": components["schemas"]["ExternalEntityAssociationViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    UpdateExternalAssociation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ExternalAssociationId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ExternalEntityAssociationsUpdateCommandAsync"];
                "text/json": components["schemas"]["ExternalEntityAssociationsUpdateCommandAsync"];
                "application/*+json": components["schemas"]["ExternalEntityAssociationsUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ExternalEntityAssociationViewModelResponse"];
                    "application/json": components["schemas"]["ExternalEntityAssociationViewModelResponse"];
                    "text/json": components["schemas"]["ExternalEntityAssociationViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeleteExternalAssociation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                ExternalAssociationId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
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
    CreateExternalAssociation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ExternalEntityAssociationCreateCommandAsync"];
                "text/json": components["schemas"]["ExternalEntityAssociationCreateCommandAsync"];
                "application/*+json": components["schemas"]["ExternalEntityAssociationCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["ExternalEntityAssociationViewModelResponse"];
                    "application/json": components["schemas"]["ExternalEntityAssociationViewModelResponse"];
                    "text/json": components["schemas"]["ExternalEntityAssociationViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetGenders: {
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
                    "text/plain": components["schemas"]["GenderViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["GenderViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["GenderViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    UpdateGender: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["GenderUpdateCommandAsync"];
                "text/json": components["schemas"]["GenderUpdateCommandAsync"];
                "application/*+json": components["schemas"]["GenderUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["GenderViewModelResponse"];
                    "application/json": components["schemas"]["GenderViewModelResponse"];
                    "text/json": components["schemas"]["GenderViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreateGender: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["GenderCreateCommandAsync"];
                "text/json": components["schemas"]["GenderCreateCommandAsync"];
                "application/*+json": components["schemas"]["GenderCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["GenderViewModelResponse"];
                    "application/json": components["schemas"]["GenderViewModelResponse"];
                    "text/json": components["schemas"]["GenderViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetGenderById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                GenderId: number;
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
                    "text/plain": components["schemas"]["GenderViewModelResponse"];
                    "application/json": components["schemas"]["GenderViewModelResponse"];
                    "text/json": components["schemas"]["GenderViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeleteGender: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                GenderId: number;
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
    GetIdentifierTypes: {
        parameters: {
            query?: {
                IncludeDeleted?: boolean;
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
                    "text/plain": components["schemas"]["IdentifierTypeViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["IdentifierTypeViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["IdentifierTypeViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetIdentifierTypeById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                IdentifierTypeId: number;
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
                    "text/plain": components["schemas"]["IdentifierTypeViewModelResponse"];
                    "application/json": components["schemas"]["IdentifierTypeViewModelResponse"];
                    "text/json": components["schemas"]["IdentifierTypeViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeleteIdentifierType: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                IdentifierTypeId: number;
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
    UpdateIdentifierType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["IdentifierTypeUpdateCommandAsync"];
                "text/json": components["schemas"]["IdentifierTypeUpdateCommandAsync"];
                "application/*+json": components["schemas"]["IdentifierTypeUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["IdentifierTypeViewModelResponse"];
                    "application/json": components["schemas"]["IdentifierTypeViewModelResponse"];
                    "text/json": components["schemas"]["IdentifierTypeViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreateIndetifierType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["IdentifierTypeCreateCommandAsync"];
                "text/json": components["schemas"]["IdentifierTypeCreateCommandAsync"];
                "application/*+json": components["schemas"]["IdentifierTypeCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["IdentifierTypeViewModelResponse"];
                    "application/json": components["schemas"]["IdentifierTypeViewModelResponse"];
                    "text/json": components["schemas"]["IdentifierTypeViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetMaritalStatus: {
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
                    "text/plain": components["schemas"]["MaritalStatusViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["MaritalStatusViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["MaritalStatusViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    UpdateMaritalStatus: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["MaritalStatusUpdateCommandAsync"];
                "text/json": components["schemas"]["MaritalStatusUpdateCommandAsync"];
                "application/*+json": components["schemas"]["MaritalStatusUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MaritalStatusViewModelResponse"];
                    "application/json": components["schemas"]["MaritalStatusViewModelResponse"];
                    "text/json": components["schemas"]["MaritalStatusViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreateMaritalStatus: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["MaritalStatusCreateCommandAsync"];
                "text/json": components["schemas"]["MaritalStatusCreateCommandAsync"];
                "application/*+json": components["schemas"]["MaritalStatusCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["MaritalStatusViewModelResponse"];
                    "application/json": components["schemas"]["MaritalStatusViewModelResponse"];
                    "text/json": components["schemas"]["MaritalStatusViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetMaritalStatusById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                MaritalStatusId: number;
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
                    "text/plain": components["schemas"]["MaritalStatusViewModelResponse"];
                    "application/json": components["schemas"]["MaritalStatusViewModelResponse"];
                    "text/json": components["schemas"]["MaritalStatusViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeleteMaritalStatus: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                MaritalStatusId: number;
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
    GetAllPersons: {
        parameters: {
            query?: {
                SearchText?: string;
                IdentifierTypeId?: number;
                Identifier?: string;
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
                    "text/plain": components["schemas"]["PersonViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PersonViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PersonViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    UpdatePerson: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePersonCommand"];
                "text/json": components["schemas"]["UpdatePersonCommand"];
                "application/*+json": components["schemas"]["UpdatePersonCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PersonViewModelResponse"];
                    "application/json": components["schemas"]["PersonViewModelResponse"];
                    "text/json": components["schemas"]["PersonViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreatePerson: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePersonCommand"];
                "text/json": components["schemas"]["CreatePersonCommand"];
                "application/*+json": components["schemas"]["CreatePersonCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PersonViewModelResponse"];
                    "application/json": components["schemas"]["PersonViewModelResponse"];
                    "text/json": components["schemas"]["PersonViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetPersonById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonId: number;
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
                    "text/plain": components["schemas"]["PersonViewModelResponse"];
                    "application/json": components["schemas"]["PersonViewModelResponse"];
                    "text/json": components["schemas"]["PersonViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeletePerson: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonId: number;
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
    FixPersonIdentifiers: {
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
    GetIdentifiersByPersonId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonId: number;
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
                    "text/plain": components["schemas"]["PersonIdentifierViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PersonIdentifierViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PersonIdentifierViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetPersonIdentifierById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonIdentifierId: number;
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
                    "text/plain": components["schemas"]["PersonIdentifierViewModelResponse"];
                    "application/json": components["schemas"]["PersonIdentifierViewModelResponse"];
                    "text/json": components["schemas"]["PersonIdentifierViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeletePersonIdentifier: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonIdentifierId: number;
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
    VerifyIdentifier: {
        parameters: {
            query?: {
                identifierTypeId?: number;
                identifier?: string;
                personId?: number;
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
                    "text/plain": components["schemas"]["BooleanResponse"];
                    "application/json": components["schemas"]["BooleanResponse"];
                    "text/json": components["schemas"]["BooleanResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    UpdatePersonIdentifier: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PersonIdentifierUpdateCommandAsync"];
                "text/json": components["schemas"]["PersonIdentifierUpdateCommandAsync"];
                "application/*+json": components["schemas"]["PersonIdentifierUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PersonIdentifierViewModelResponse"];
                    "application/json": components["schemas"]["PersonIdentifierViewModelResponse"];
                    "text/json": components["schemas"]["PersonIdentifierViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreatePersonIdentifier: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PersonIdentifierCreateCommandAsync"];
                "text/json": components["schemas"]["PersonIdentifierCreateCommandAsync"];
                "application/*+json": components["schemas"]["PersonIdentifierCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PersonIdentifierViewModelResponse"];
                    "application/json": components["schemas"]["PersonIdentifierViewModelResponse"];
                    "text/json": components["schemas"]["PersonIdentifierViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetPreferencesByPersonId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonId: number;
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
                    "text/plain": components["schemas"]["PersonPreferenceViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PersonPreferenceViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PersonPreferenceViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetPersonPreferenceById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonPreferenceId: number;
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
                    "text/plain": components["schemas"]["PersonPreferenceViewModelResponse"];
                    "application/json": components["schemas"]["PersonPreferenceViewModelResponse"];
                    "text/json": components["schemas"]["PersonPreferenceViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeletePersonPreference: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonPreferenceId: number;
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
    UpdatePersonPreference: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PersonPreferenceCreateCommandAsync"];
                "text/json": components["schemas"]["PersonPreferenceCreateCommandAsync"];
                "application/*+json": components["schemas"]["PersonPreferenceCreateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PersonPreferenceViewModelResponse"];
                    "application/json": components["schemas"]["PersonPreferenceViewModelResponse"];
                    "text/json": components["schemas"]["PersonPreferenceViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreatePersonPreference: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PersonPreferenceCreateCommandAsync"];
                "text/json": components["schemas"]["PersonPreferenceCreateCommandAsync"];
                "application/*+json": components["schemas"]["PersonPreferenceCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PersonPreferenceViewModelResponse"];
                    "application/json": components["schemas"]["PersonPreferenceViewModelResponse"];
                    "text/json": components["schemas"]["PersonPreferenceViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetPersonRelationships: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonId: number;
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
                    "text/plain": components["schemas"]["PersonRelationshipViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PersonRelationshipViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PersonRelationshipViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetPersonRelationshipById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonRelationshipId: number;
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
                    "text/plain": components["schemas"]["PersonRelationshipViewModelResponse"];
                    "application/json": components["schemas"]["PersonRelationshipViewModelResponse"];
                    "text/json": components["schemas"]["PersonRelationshipViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeletePersonRelationship: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonRelationshipId: number;
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
    UpdatePersonRelationship: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PersonRelationshipUpdateCommandAsync"];
                "text/json": components["schemas"]["PersonRelationshipUpdateCommandAsync"];
                "application/*+json": components["schemas"]["PersonRelationshipUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PersonRelationshipViewModelResponse"];
                    "application/json": components["schemas"]["PersonRelationshipViewModelResponse"];
                    "text/json": components["schemas"]["PersonRelationshipViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreatePersonRelationship: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["PersonRelationshipCreateCommandAsync"];
                "text/json": components["schemas"]["PersonRelationshipCreateCommandAsync"];
                "application/*+json": components["schemas"]["PersonRelationshipCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PersonRelationshipViewModelResponse"];
                    "application/json": components["schemas"]["PersonRelationshipViewModelResponse"];
                    "text/json": components["schemas"]["PersonRelationshipViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetPhonesByPersonId: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PersonId: number;
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
                    "text/plain": components["schemas"]["PhoneViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["PhoneViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["PhoneViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetPhonesById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PhoneId: number;
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
                    "text/plain": components["schemas"]["PhoneViewModelResponse"];
                    "application/json": components["schemas"]["PhoneViewModelResponse"];
                    "text/json": components["schemas"]["PhoneViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeletePhone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                PhoneId: number;
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
    UpdatePhone: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdatePersonPhoneCommand"];
                "text/json": components["schemas"]["UpdatePersonPhoneCommand"];
                "application/*+json": components["schemas"]["UpdatePersonPhoneCommand"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PhoneViewModelResponse"];
                    "application/json": components["schemas"]["PhoneViewModelResponse"];
                    "text/json": components["schemas"]["PhoneViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreatePhone: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreatePersonPhoneCommand"];
                "text/json": components["schemas"]["CreatePersonPhoneCommand"];
                "application/*+json": components["schemas"]["CreatePersonPhoneCommand"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["PhoneViewModelResponse"];
                    "application/json": components["schemas"]["PhoneViewModelResponse"];
                    "text/json": components["schemas"]["PhoneViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetRelationshipTypes: {
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
                    "text/plain": components["schemas"]["RelationShipTypeViewModelIReadOnlyListResponse"];
                    "application/json": components["schemas"]["RelationShipTypeViewModelIReadOnlyListResponse"];
                    "text/json": components["schemas"]["RelationShipTypeViewModelIReadOnlyListResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    UpdateRelationshipType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RelationshipTypeUpdateCommandAsync"];
                "text/json": components["schemas"]["RelationshipTypeUpdateCommandAsync"];
                "application/*+json": components["schemas"]["RelationshipTypeUpdateCommandAsync"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["RelationShipTypeViewModelResponse"];
                    "application/json": components["schemas"]["RelationShipTypeViewModelResponse"];
                    "text/json": components["schemas"]["RelationShipTypeViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    CreateRelationShipType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RelationShipTypeCreateCommandAsync"];
                "text/json": components["schemas"]["RelationShipTypeCreateCommandAsync"];
                "application/*+json": components["schemas"]["RelationShipTypeCreateCommandAsync"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "text/plain": components["schemas"]["RelationShipTypeViewModelResponse"];
                    "application/json": components["schemas"]["RelationShipTypeViewModelResponse"];
                    "text/json": components["schemas"]["RelationShipTypeViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    GetRelationshipTypeById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                RelationshipTypeId: number;
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
                    "text/plain": components["schemas"]["RelationShipTypeViewModelResponse"];
                    "application/json": components["schemas"]["RelationShipTypeViewModelResponse"];
                    "text/json": components["schemas"]["RelationShipTypeViewModelResponse"];
                };
            };
            /** @description Bad Request */
            400: {
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
    DeleteRelationshipType: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                RelationshipTypeId: number;
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
