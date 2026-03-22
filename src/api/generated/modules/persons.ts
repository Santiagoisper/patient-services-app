import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/persons.ts'

export type GetPersonsPersonIdAddressesOperation = paths["/persons/{PersonId}/addresses"]['get']
export type GetPersonsPersonIdAddressesResponse = OperationResponse<GetPersonsPersonIdAddressesOperation>
export type GetPersonsPersonIdAddressesPathParams = OperationPathParams<GetPersonsPersonIdAddressesOperation>
export type GetPersonsPersonIdAddressesArgs = RequestOptionsBase & {
  path: GetPersonsPersonIdAddressesPathParams
}

export type GetPersonsAddressesAddressIdOperation = paths["/persons/addresses/{AddressId}"]['get']
export type GetPersonsAddressesAddressIdResponse = OperationResponse<GetPersonsAddressesAddressIdOperation>
export type GetPersonsAddressesAddressIdPathParams = OperationPathParams<GetPersonsAddressesAddressIdOperation>
export type GetPersonsAddressesAddressIdArgs = RequestOptionsBase & {
  path: GetPersonsAddressesAddressIdPathParams
}

export type DeletePersonsAddressesAddressIdOperation = paths["/persons/addresses/{AddressId}"]['delete']
export type DeletePersonsAddressesAddressIdResponse = OperationResponse<DeletePersonsAddressesAddressIdOperation>
export type DeletePersonsAddressesAddressIdPathParams = OperationPathParams<DeletePersonsAddressesAddressIdOperation>
export type DeletePersonsAddressesAddressIdArgs = RequestOptionsBase & {
  path: DeletePersonsAddressesAddressIdPathParams
}

export type PostPersonsAddressesOperation = paths["/persons/addresses"]['post']
export type PostPersonsAddressesResponse = OperationResponse<PostPersonsAddressesOperation>
export type PostPersonsAddressesBody = OperationRequestBody<PostPersonsAddressesOperation>
export type PostPersonsAddressesArgs = RequestOptionsBase & {
  body: PostPersonsAddressesBody
}

export type PutPersonsAddressesOperation = paths["/persons/addresses"]['put']
export type PutPersonsAddressesResponse = OperationResponse<PutPersonsAddressesOperation>
export type PutPersonsAddressesBody = OperationRequestBody<PutPersonsAddressesOperation>
export type PutPersonsAddressesArgs = RequestOptionsBase & {
  body: PutPersonsAddressesBody
}

export type GetPersonsPersonIdEmailsOperation = paths["/persons/{PersonId}/emails"]['get']
export type GetPersonsPersonIdEmailsResponse = OperationResponse<GetPersonsPersonIdEmailsOperation>
export type GetPersonsPersonIdEmailsPathParams = OperationPathParams<GetPersonsPersonIdEmailsOperation>
export type GetPersonsPersonIdEmailsArgs = RequestOptionsBase & {
  path: GetPersonsPersonIdEmailsPathParams
}

export type GetPersonsEmailsEmailIdOperation = paths["/persons/emails/{EmailId}"]['get']
export type GetPersonsEmailsEmailIdResponse = OperationResponse<GetPersonsEmailsEmailIdOperation>
export type GetPersonsEmailsEmailIdPathParams = OperationPathParams<GetPersonsEmailsEmailIdOperation>
export type GetPersonsEmailsEmailIdArgs = RequestOptionsBase & {
  path: GetPersonsEmailsEmailIdPathParams
}

export type DeletePersonsEmailsEmailIdOperation = paths["/persons/emails/{EmailId}"]['delete']
export type DeletePersonsEmailsEmailIdResponse = OperationResponse<DeletePersonsEmailsEmailIdOperation>
export type DeletePersonsEmailsEmailIdPathParams = OperationPathParams<DeletePersonsEmailsEmailIdOperation>
export type DeletePersonsEmailsEmailIdArgs = RequestOptionsBase & {
  path: DeletePersonsEmailsEmailIdPathParams
}

export type PostPersonsEmailsOperation = paths["/persons/emails"]['post']
export type PostPersonsEmailsResponse = OperationResponse<PostPersonsEmailsOperation>
export type PostPersonsEmailsBody = OperationRequestBody<PostPersonsEmailsOperation>
export type PostPersonsEmailsArgs = RequestOptionsBase & {
  body: PostPersonsEmailsBody
}

export type PutPersonsEmailsOperation = paths["/persons/emails"]['put']
export type PutPersonsEmailsResponse = OperationResponse<PutPersonsEmailsOperation>
export type PutPersonsEmailsBody = OperationRequestBody<PutPersonsEmailsOperation>
export type PutPersonsEmailsArgs = RequestOptionsBase & {
  body: PutPersonsEmailsBody
}

export type GetPersonsPersonIdExternalAssociationsOperation = paths["/persons/{PersonId}/external-associations"]['get']
export type GetPersonsPersonIdExternalAssociationsResponse = OperationResponse<GetPersonsPersonIdExternalAssociationsOperation>
export type GetPersonsPersonIdExternalAssociationsPathParams = OperationPathParams<GetPersonsPersonIdExternalAssociationsOperation>
export type GetPersonsPersonIdExternalAssociationsArgs = RequestOptionsBase & {
  path: GetPersonsPersonIdExternalAssociationsPathParams
}

export type GetPersonsExternalAssociationsExternalAssociationIdOperation = paths["/persons/external-associations/{ExternalAssociationId}"]['get']
export type GetPersonsExternalAssociationsExternalAssociationIdResponse = OperationResponse<GetPersonsExternalAssociationsExternalAssociationIdOperation>
export type GetPersonsExternalAssociationsExternalAssociationIdPathParams = OperationPathParams<GetPersonsExternalAssociationsExternalAssociationIdOperation>
export type GetPersonsExternalAssociationsExternalAssociationIdArgs = RequestOptionsBase & {
  path: GetPersonsExternalAssociationsExternalAssociationIdPathParams
}

export type PutPersonsExternalAssociationsExternalAssociationIdOperation = paths["/persons/external-associations/{ExternalAssociationId}"]['put']
export type PutPersonsExternalAssociationsExternalAssociationIdResponse = OperationResponse<PutPersonsExternalAssociationsExternalAssociationIdOperation>
export type PutPersonsExternalAssociationsExternalAssociationIdPathParams = OperationPathParams<PutPersonsExternalAssociationsExternalAssociationIdOperation>
export type PutPersonsExternalAssociationsExternalAssociationIdBody = OperationRequestBody<PutPersonsExternalAssociationsExternalAssociationIdOperation>
export type PutPersonsExternalAssociationsExternalAssociationIdArgs = RequestOptionsBase & {
  path: PutPersonsExternalAssociationsExternalAssociationIdPathParams
  body: PutPersonsExternalAssociationsExternalAssociationIdBody
}

export type DeletePersonsExternalAssociationsExternalAssociationIdOperation = paths["/persons/external-associations/{ExternalAssociationId}"]['delete']
export type DeletePersonsExternalAssociationsExternalAssociationIdResponse = OperationResponse<DeletePersonsExternalAssociationsExternalAssociationIdOperation>
export type DeletePersonsExternalAssociationsExternalAssociationIdPathParams = OperationPathParams<DeletePersonsExternalAssociationsExternalAssociationIdOperation>
export type DeletePersonsExternalAssociationsExternalAssociationIdArgs = RequestOptionsBase & {
  path: DeletePersonsExternalAssociationsExternalAssociationIdPathParams
}

export type PostPersonsExternalAssociationsOperation = paths["/persons/external-associations"]['post']
export type PostPersonsExternalAssociationsResponse = OperationResponse<PostPersonsExternalAssociationsOperation>
export type PostPersonsExternalAssociationsBody = OperationRequestBody<PostPersonsExternalAssociationsOperation>
export type PostPersonsExternalAssociationsArgs = RequestOptionsBase & {
  body: PostPersonsExternalAssociationsBody
}

export type GetPersonsGendersOperation = paths["/persons/genders"]['get']
export type GetPersonsGendersResponse = OperationResponse<GetPersonsGendersOperation>
export type GetPersonsGendersArgs = RequestOptionsBase & {
}

export type PostPersonsGendersOperation = paths["/persons/genders"]['post']
export type PostPersonsGendersResponse = OperationResponse<PostPersonsGendersOperation>
export type PostPersonsGendersBody = OperationRequestBody<PostPersonsGendersOperation>
export type PostPersonsGendersArgs = RequestOptionsBase & {
  body: PostPersonsGendersBody
}

export type PutPersonsGendersOperation = paths["/persons/genders"]['put']
export type PutPersonsGendersResponse = OperationResponse<PutPersonsGendersOperation>
export type PutPersonsGendersBody = OperationRequestBody<PutPersonsGendersOperation>
export type PutPersonsGendersArgs = RequestOptionsBase & {
  body: PutPersonsGendersBody
}

export type GetPersonsGendersGenderIdOperation = paths["/persons/genders/{GenderId}"]['get']
export type GetPersonsGendersGenderIdResponse = OperationResponse<GetPersonsGendersGenderIdOperation>
export type GetPersonsGendersGenderIdPathParams = OperationPathParams<GetPersonsGendersGenderIdOperation>
export type GetPersonsGendersGenderIdArgs = RequestOptionsBase & {
  path: GetPersonsGendersGenderIdPathParams
}

export type DeletePersonsGendersGenderIdOperation = paths["/persons/genders/{GenderId}"]['delete']
export type DeletePersonsGendersGenderIdResponse = OperationResponse<DeletePersonsGendersGenderIdOperation>
export type DeletePersonsGendersGenderIdPathParams = OperationPathParams<DeletePersonsGendersGenderIdOperation>
export type DeletePersonsGendersGenderIdArgs = RequestOptionsBase & {
  path: DeletePersonsGendersGenderIdPathParams
}

export type GetPersonsIdentifiertypesOperation = paths["/persons/identifiertypes"]['get']
export type GetPersonsIdentifiertypesResponse = OperationResponse<GetPersonsIdentifiertypesOperation>
export type GetPersonsIdentifiertypesQueryParams = OperationQueryParams<GetPersonsIdentifiertypesOperation>
export type GetPersonsIdentifiertypesArgs = RequestOptionsBase & {
  query?: GetPersonsIdentifiertypesQueryParams
}

export type GetPersonsIdentifierTypesIdentifierTypeIdOperation = paths["/persons/identifierTypes/{IdentifierTypeId}"]['get']
export type GetPersonsIdentifierTypesIdentifierTypeIdResponse = OperationResponse<GetPersonsIdentifierTypesIdentifierTypeIdOperation>
export type GetPersonsIdentifierTypesIdentifierTypeIdPathParams = OperationPathParams<GetPersonsIdentifierTypesIdentifierTypeIdOperation>
export type GetPersonsIdentifierTypesIdentifierTypeIdArgs = RequestOptionsBase & {
  path: GetPersonsIdentifierTypesIdentifierTypeIdPathParams
}

export type DeletePersonsIdentifierTypesIdentifierTypeIdOperation = paths["/persons/identifierTypes/{IdentifierTypeId}"]['delete']
export type DeletePersonsIdentifierTypesIdentifierTypeIdResponse = OperationResponse<DeletePersonsIdentifierTypesIdentifierTypeIdOperation>
export type DeletePersonsIdentifierTypesIdentifierTypeIdPathParams = OperationPathParams<DeletePersonsIdentifierTypesIdentifierTypeIdOperation>
export type DeletePersonsIdentifierTypesIdentifierTypeIdArgs = RequestOptionsBase & {
  path: DeletePersonsIdentifierTypesIdentifierTypeIdPathParams
}

export type PostPersonsIdentifierTypesOperation = paths["/persons/identifierTypes"]['post']
export type PostPersonsIdentifierTypesResponse = OperationResponse<PostPersonsIdentifierTypesOperation>
export type PostPersonsIdentifierTypesBody = OperationRequestBody<PostPersonsIdentifierTypesOperation>
export type PostPersonsIdentifierTypesArgs = RequestOptionsBase & {
  body: PostPersonsIdentifierTypesBody
}

export type PutPersonsIdentifierTypesOperation = paths["/persons/identifierTypes"]['put']
export type PutPersonsIdentifierTypesResponse = OperationResponse<PutPersonsIdentifierTypesOperation>
export type PutPersonsIdentifierTypesBody = OperationRequestBody<PutPersonsIdentifierTypesOperation>
export type PutPersonsIdentifierTypesArgs = RequestOptionsBase & {
  body: PutPersonsIdentifierTypesBody
}

export type GetPersonsMaritalstatusesOperation = paths["/persons/maritalstatuses"]['get']
export type GetPersonsMaritalstatusesResponse = OperationResponse<GetPersonsMaritalstatusesOperation>
export type GetPersonsMaritalstatusesArgs = RequestOptionsBase & {
}

export type PostPersonsMaritalstatusesOperation = paths["/persons/maritalstatuses"]['post']
export type PostPersonsMaritalstatusesResponse = OperationResponse<PostPersonsMaritalstatusesOperation>
export type PostPersonsMaritalstatusesBody = OperationRequestBody<PostPersonsMaritalstatusesOperation>
export type PostPersonsMaritalstatusesArgs = RequestOptionsBase & {
  body: PostPersonsMaritalstatusesBody
}

export type PutPersonsMaritalstatusesOperation = paths["/persons/maritalstatuses"]['put']
export type PutPersonsMaritalstatusesResponse = OperationResponse<PutPersonsMaritalstatusesOperation>
export type PutPersonsMaritalstatusesBody = OperationRequestBody<PutPersonsMaritalstatusesOperation>
export type PutPersonsMaritalstatusesArgs = RequestOptionsBase & {
  body: PutPersonsMaritalstatusesBody
}

export type GetPersonsMaritalstatusesMaritalStatusIdOperation = paths["/persons/maritalstatuses/{MaritalStatusId}"]['get']
export type GetPersonsMaritalstatusesMaritalStatusIdResponse = OperationResponse<GetPersonsMaritalstatusesMaritalStatusIdOperation>
export type GetPersonsMaritalstatusesMaritalStatusIdPathParams = OperationPathParams<GetPersonsMaritalstatusesMaritalStatusIdOperation>
export type GetPersonsMaritalstatusesMaritalStatusIdArgs = RequestOptionsBase & {
  path: GetPersonsMaritalstatusesMaritalStatusIdPathParams
}

export type DeletePersonsMaritalstatusesMaritalStatusIdOperation = paths["/persons/maritalstatuses/{MaritalStatusId}"]['delete']
export type DeletePersonsMaritalstatusesMaritalStatusIdResponse = OperationResponse<DeletePersonsMaritalstatusesMaritalStatusIdOperation>
export type DeletePersonsMaritalstatusesMaritalStatusIdPathParams = OperationPathParams<DeletePersonsMaritalstatusesMaritalStatusIdOperation>
export type DeletePersonsMaritalstatusesMaritalStatusIdArgs = RequestOptionsBase & {
  path: DeletePersonsMaritalstatusesMaritalStatusIdPathParams
}

export type GetPersonsOperation = paths["/persons"]['get']
export type GetPersonsResponse = OperationResponse<GetPersonsOperation>
export type GetPersonsQueryParams = OperationQueryParams<GetPersonsOperation>
export type GetPersonsArgs = RequestOptionsBase & {
  query?: GetPersonsQueryParams
}

export type PostPersonsOperation = paths["/persons"]['post']
export type PostPersonsResponse = OperationResponse<PostPersonsOperation>
export type PostPersonsBody = OperationRequestBody<PostPersonsOperation>
export type PostPersonsArgs = RequestOptionsBase & {
  body: PostPersonsBody
}

export type PutPersonsOperation = paths["/persons"]['put']
export type PutPersonsResponse = OperationResponse<PutPersonsOperation>
export type PutPersonsBody = OperationRequestBody<PutPersonsOperation>
export type PutPersonsArgs = RequestOptionsBase & {
  body: PutPersonsBody
}

export type GetPersonsPersonIdOperation = paths["/persons/{PersonId}"]['get']
export type GetPersonsPersonIdResponse = OperationResponse<GetPersonsPersonIdOperation>
export type GetPersonsPersonIdPathParams = OperationPathParams<GetPersonsPersonIdOperation>
export type GetPersonsPersonIdArgs = RequestOptionsBase & {
  path: GetPersonsPersonIdPathParams
}

export type DeletePersonsPersonIdOperation = paths["/persons/{PersonId}"]['delete']
export type DeletePersonsPersonIdResponse = OperationResponse<DeletePersonsPersonIdOperation>
export type DeletePersonsPersonIdPathParams = OperationPathParams<DeletePersonsPersonIdOperation>
export type DeletePersonsPersonIdArgs = RequestOptionsBase & {
  path: DeletePersonsPersonIdPathParams
}

export type PutPersonsFixIdentifiersOperation = paths["/persons/fix-identifiers"]['put']
export type PutPersonsFixIdentifiersResponse = OperationResponse<PutPersonsFixIdentifiersOperation>
export type PutPersonsFixIdentifiersArgs = RequestOptionsBase & {
}

export type GetPersonsPersonIdIdentifiersOperation = paths["/persons/{PersonId}/identifiers"]['get']
export type GetPersonsPersonIdIdentifiersResponse = OperationResponse<GetPersonsPersonIdIdentifiersOperation>
export type GetPersonsPersonIdIdentifiersPathParams = OperationPathParams<GetPersonsPersonIdIdentifiersOperation>
export type GetPersonsPersonIdIdentifiersArgs = RequestOptionsBase & {
  path: GetPersonsPersonIdIdentifiersPathParams
}

export type GetPersonsIdentifiersPersonIdentifierIdOperation = paths["/persons/identifiers/{PersonIdentifierId}"]['get']
export type GetPersonsIdentifiersPersonIdentifierIdResponse = OperationResponse<GetPersonsIdentifiersPersonIdentifierIdOperation>
export type GetPersonsIdentifiersPersonIdentifierIdPathParams = OperationPathParams<GetPersonsIdentifiersPersonIdentifierIdOperation>
export type GetPersonsIdentifiersPersonIdentifierIdArgs = RequestOptionsBase & {
  path: GetPersonsIdentifiersPersonIdentifierIdPathParams
}

export type DeletePersonsIdentifiersPersonIdentifierIdOperation = paths["/persons/identifiers/{PersonIdentifierId}"]['delete']
export type DeletePersonsIdentifiersPersonIdentifierIdResponse = OperationResponse<DeletePersonsIdentifiersPersonIdentifierIdOperation>
export type DeletePersonsIdentifiersPersonIdentifierIdPathParams = OperationPathParams<DeletePersonsIdentifiersPersonIdentifierIdOperation>
export type DeletePersonsIdentifiersPersonIdentifierIdArgs = RequestOptionsBase & {
  path: DeletePersonsIdentifiersPersonIdentifierIdPathParams
}

export type GetPersonsIdentifiersVerificationOperation = paths["/persons/identifiers/verification"]['get']
export type GetPersonsIdentifiersVerificationResponse = OperationResponse<GetPersonsIdentifiersVerificationOperation>
export type GetPersonsIdentifiersVerificationQueryParams = OperationQueryParams<GetPersonsIdentifiersVerificationOperation>
export type GetPersonsIdentifiersVerificationArgs = RequestOptionsBase & {
  query?: GetPersonsIdentifiersVerificationQueryParams
}

export type PostPersonsIdentifiersOperation = paths["/persons/identifiers"]['post']
export type PostPersonsIdentifiersResponse = OperationResponse<PostPersonsIdentifiersOperation>
export type PostPersonsIdentifiersBody = OperationRequestBody<PostPersonsIdentifiersOperation>
export type PostPersonsIdentifiersArgs = RequestOptionsBase & {
  body: PostPersonsIdentifiersBody
}

export type PutPersonsIdentifiersOperation = paths["/persons/identifiers"]['put']
export type PutPersonsIdentifiersResponse = OperationResponse<PutPersonsIdentifiersOperation>
export type PutPersonsIdentifiersBody = OperationRequestBody<PutPersonsIdentifiersOperation>
export type PutPersonsIdentifiersArgs = RequestOptionsBase & {
  body: PutPersonsIdentifiersBody
}

export type GetPersonsPersonIdPreferencesOperation = paths["/persons/{PersonId}/preferences"]['get']
export type GetPersonsPersonIdPreferencesResponse = OperationResponse<GetPersonsPersonIdPreferencesOperation>
export type GetPersonsPersonIdPreferencesPathParams = OperationPathParams<GetPersonsPersonIdPreferencesOperation>
export type GetPersonsPersonIdPreferencesArgs = RequestOptionsBase & {
  path: GetPersonsPersonIdPreferencesPathParams
}

export type GetPersonsPreferencesPersonPreferenceIdOperation = paths["/persons/preferences/{PersonPreferenceId}"]['get']
export type GetPersonsPreferencesPersonPreferenceIdResponse = OperationResponse<GetPersonsPreferencesPersonPreferenceIdOperation>
export type GetPersonsPreferencesPersonPreferenceIdPathParams = OperationPathParams<GetPersonsPreferencesPersonPreferenceIdOperation>
export type GetPersonsPreferencesPersonPreferenceIdArgs = RequestOptionsBase & {
  path: GetPersonsPreferencesPersonPreferenceIdPathParams
}

export type DeletePersonsPreferencesPersonPreferenceIdOperation = paths["/persons/preferences/{PersonPreferenceId}"]['delete']
export type DeletePersonsPreferencesPersonPreferenceIdResponse = OperationResponse<DeletePersonsPreferencesPersonPreferenceIdOperation>
export type DeletePersonsPreferencesPersonPreferenceIdPathParams = OperationPathParams<DeletePersonsPreferencesPersonPreferenceIdOperation>
export type DeletePersonsPreferencesPersonPreferenceIdArgs = RequestOptionsBase & {
  path: DeletePersonsPreferencesPersonPreferenceIdPathParams
}

export type PostPersonsPreferencesOperation = paths["/persons/preferences"]['post']
export type PostPersonsPreferencesResponse = OperationResponse<PostPersonsPreferencesOperation>
export type PostPersonsPreferencesBody = OperationRequestBody<PostPersonsPreferencesOperation>
export type PostPersonsPreferencesArgs = RequestOptionsBase & {
  body: PostPersonsPreferencesBody
}

export type PutPersonsPreferencesOperation = paths["/persons/preferences"]['put']
export type PutPersonsPreferencesResponse = OperationResponse<PutPersonsPreferencesOperation>
export type PutPersonsPreferencesBody = OperationRequestBody<PutPersonsPreferencesOperation>
export type PutPersonsPreferencesArgs = RequestOptionsBase & {
  body: PutPersonsPreferencesBody
}

export type GetPersonsPersonIdRelationshipsOperation = paths["/persons/{PersonId}/relationships"]['get']
export type GetPersonsPersonIdRelationshipsResponse = OperationResponse<GetPersonsPersonIdRelationshipsOperation>
export type GetPersonsPersonIdRelationshipsPathParams = OperationPathParams<GetPersonsPersonIdRelationshipsOperation>
export type GetPersonsPersonIdRelationshipsArgs = RequestOptionsBase & {
  path: GetPersonsPersonIdRelationshipsPathParams
}

export type GetPersonsRelationshipsPersonRelationshipIdOperation = paths["/persons/relationships/{PersonRelationshipId}"]['get']
export type GetPersonsRelationshipsPersonRelationshipIdResponse = OperationResponse<GetPersonsRelationshipsPersonRelationshipIdOperation>
export type GetPersonsRelationshipsPersonRelationshipIdPathParams = OperationPathParams<GetPersonsRelationshipsPersonRelationshipIdOperation>
export type GetPersonsRelationshipsPersonRelationshipIdArgs = RequestOptionsBase & {
  path: GetPersonsRelationshipsPersonRelationshipIdPathParams
}

export type DeletePersonsRelationshipsPersonRelationshipIdOperation = paths["/persons/relationships/{PersonRelationshipId}"]['delete']
export type DeletePersonsRelationshipsPersonRelationshipIdResponse = OperationResponse<DeletePersonsRelationshipsPersonRelationshipIdOperation>
export type DeletePersonsRelationshipsPersonRelationshipIdPathParams = OperationPathParams<DeletePersonsRelationshipsPersonRelationshipIdOperation>
export type DeletePersonsRelationshipsPersonRelationshipIdArgs = RequestOptionsBase & {
  path: DeletePersonsRelationshipsPersonRelationshipIdPathParams
}

export type PostPersonsRelationshipsOperation = paths["/persons/relationships"]['post']
export type PostPersonsRelationshipsResponse = OperationResponse<PostPersonsRelationshipsOperation>
export type PostPersonsRelationshipsBody = OperationRequestBody<PostPersonsRelationshipsOperation>
export type PostPersonsRelationshipsArgs = RequestOptionsBase & {
  body: PostPersonsRelationshipsBody
}

export type PutPersonsRelationshipsOperation = paths["/persons/relationships"]['put']
export type PutPersonsRelationshipsResponse = OperationResponse<PutPersonsRelationshipsOperation>
export type PutPersonsRelationshipsBody = OperationRequestBody<PutPersonsRelationshipsOperation>
export type PutPersonsRelationshipsArgs = RequestOptionsBase & {
  body: PutPersonsRelationshipsBody
}

export type GetPersonsPersonIdPhonesOperation = paths["/persons/{PersonId}/phones"]['get']
export type GetPersonsPersonIdPhonesResponse = OperationResponse<GetPersonsPersonIdPhonesOperation>
export type GetPersonsPersonIdPhonesPathParams = OperationPathParams<GetPersonsPersonIdPhonesOperation>
export type GetPersonsPersonIdPhonesArgs = RequestOptionsBase & {
  path: GetPersonsPersonIdPhonesPathParams
}

export type GetPersonsPhonesPhoneIdOperation = paths["/persons/phones/{PhoneId}"]['get']
export type GetPersonsPhonesPhoneIdResponse = OperationResponse<GetPersonsPhonesPhoneIdOperation>
export type GetPersonsPhonesPhoneIdPathParams = OperationPathParams<GetPersonsPhonesPhoneIdOperation>
export type GetPersonsPhonesPhoneIdArgs = RequestOptionsBase & {
  path: GetPersonsPhonesPhoneIdPathParams
}

export type DeletePersonsPhonesPhoneIdOperation = paths["/persons/phones/{PhoneId}"]['delete']
export type DeletePersonsPhonesPhoneIdResponse = OperationResponse<DeletePersonsPhonesPhoneIdOperation>
export type DeletePersonsPhonesPhoneIdPathParams = OperationPathParams<DeletePersonsPhonesPhoneIdOperation>
export type DeletePersonsPhonesPhoneIdArgs = RequestOptionsBase & {
  path: DeletePersonsPhonesPhoneIdPathParams
}

export type PostPersonsPhonesOperation = paths["/persons/phones"]['post']
export type PostPersonsPhonesResponse = OperationResponse<PostPersonsPhonesOperation>
export type PostPersonsPhonesBody = OperationRequestBody<PostPersonsPhonesOperation>
export type PostPersonsPhonesArgs = RequestOptionsBase & {
  body: PostPersonsPhonesBody
}

export type PutPersonsPhonesOperation = paths["/persons/phones"]['put']
export type PutPersonsPhonesResponse = OperationResponse<PutPersonsPhonesOperation>
export type PutPersonsPhonesBody = OperationRequestBody<PutPersonsPhonesOperation>
export type PutPersonsPhonesArgs = RequestOptionsBase & {
  body: PutPersonsPhonesBody
}

export type GetPersonsRelationshiptypesOperation = paths["/persons/relationshiptypes"]['get']
export type GetPersonsRelationshiptypesResponse = OperationResponse<GetPersonsRelationshiptypesOperation>
export type GetPersonsRelationshiptypesArgs = RequestOptionsBase & {
}

export type PostPersonsRelationshiptypesOperation = paths["/persons/relationshiptypes"]['post']
export type PostPersonsRelationshiptypesResponse = OperationResponse<PostPersonsRelationshiptypesOperation>
export type PostPersonsRelationshiptypesBody = OperationRequestBody<PostPersonsRelationshiptypesOperation>
export type PostPersonsRelationshiptypesArgs = RequestOptionsBase & {
  body: PostPersonsRelationshiptypesBody
}

export type PutPersonsRelationshiptypesOperation = paths["/persons/relationshiptypes"]['put']
export type PutPersonsRelationshiptypesResponse = OperationResponse<PutPersonsRelationshiptypesOperation>
export type PutPersonsRelationshiptypesBody = OperationRequestBody<PutPersonsRelationshiptypesOperation>
export type PutPersonsRelationshiptypesArgs = RequestOptionsBase & {
  body: PutPersonsRelationshiptypesBody
}

export type GetPersonsRelationshiptypesRelationshipTypeIdOperation = paths["/persons/relationshiptypes/{RelationshipTypeId}"]['get']
export type GetPersonsRelationshiptypesRelationshipTypeIdResponse = OperationResponse<GetPersonsRelationshiptypesRelationshipTypeIdOperation>
export type GetPersonsRelationshiptypesRelationshipTypeIdPathParams = OperationPathParams<GetPersonsRelationshiptypesRelationshipTypeIdOperation>
export type GetPersonsRelationshiptypesRelationshipTypeIdArgs = RequestOptionsBase & {
  path: GetPersonsRelationshiptypesRelationshipTypeIdPathParams
}

export type DeletePersonsRelationshiptypesRelationshipTypeIdOperation = paths["/persons/relationshiptypes/{RelationshipTypeId}"]['delete']
export type DeletePersonsRelationshiptypesRelationshipTypeIdResponse = OperationResponse<DeletePersonsRelationshiptypesRelationshipTypeIdOperation>
export type DeletePersonsRelationshiptypesRelationshipTypeIdPathParams = OperationPathParams<DeletePersonsRelationshiptypesRelationshipTypeIdOperation>
export type DeletePersonsRelationshiptypesRelationshipTypeIdArgs = RequestOptionsBase & {
  path: DeletePersonsRelationshiptypesRelationshipTypeIdPathParams
}

export function createPersonsApi(client: HttpClient) {
  return {
    getAddressesByPersonId(args: GetPersonsPersonIdAddressesArgs) {
      return client.request<GetPersonsPersonIdAddressesResponse>({
        method: 'GET',
        path: '/persons/{PersonId}/addresses',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAddressById(args: GetPersonsAddressesAddressIdArgs) {
      return client.request<GetPersonsAddressesAddressIdResponse>({
        method: 'GET',
        path: '/persons/addresses/{AddressId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteAddress(args: DeletePersonsAddressesAddressIdArgs) {
      return client.request<DeletePersonsAddressesAddressIdResponse>({
        method: 'DELETE',
        path: '/persons/addresses/{AddressId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createAddress(args: PostPersonsAddressesArgs) {
      return client.request<PostPersonsAddressesResponse>({
        method: 'POST',
        path: '/persons/addresses',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateAddress(args: PutPersonsAddressesArgs) {
      return client.request<PutPersonsAddressesResponse>({
        method: 'PUT',
        path: '/persons/addresses',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getEmailsByPersonId(args: GetPersonsPersonIdEmailsArgs) {
      return client.request<GetPersonsPersonIdEmailsResponse>({
        method: 'GET',
        path: '/persons/{PersonId}/emails',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getEmailById(args: GetPersonsEmailsEmailIdArgs) {
      return client.request<GetPersonsEmailsEmailIdResponse>({
        method: 'GET',
        path: '/persons/emails/{EmailId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteEmail(args: DeletePersonsEmailsEmailIdArgs) {
      return client.request<DeletePersonsEmailsEmailIdResponse>({
        method: 'DELETE',
        path: '/persons/emails/{EmailId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createEmail(args: PostPersonsEmailsArgs) {
      return client.request<PostPersonsEmailsResponse>({
        method: 'POST',
        path: '/persons/emails',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateEmail(args: PutPersonsEmailsArgs) {
      return client.request<PutPersonsEmailsResponse>({
        method: 'PUT',
        path: '/persons/emails',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getExternalAssociationsByPersonId(args: GetPersonsPersonIdExternalAssociationsArgs) {
      return client.request<GetPersonsPersonIdExternalAssociationsResponse>({
        method: 'GET',
        path: '/persons/{PersonId}/external-associations',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getExternalAssociationById(args: GetPersonsExternalAssociationsExternalAssociationIdArgs) {
      return client.request<GetPersonsExternalAssociationsExternalAssociationIdResponse>({
        method: 'GET',
        path: '/persons/external-associations/{ExternalAssociationId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateExternalAssociation(args: PutPersonsExternalAssociationsExternalAssociationIdArgs) {
      return client.request<PutPersonsExternalAssociationsExternalAssociationIdResponse>({
        method: 'PUT',
        path: '/persons/external-associations/{ExternalAssociationId}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteExternalAssociation(args: DeletePersonsExternalAssociationsExternalAssociationIdArgs) {
      return client.request<DeletePersonsExternalAssociationsExternalAssociationIdResponse>({
        method: 'DELETE',
        path: '/persons/external-associations/{ExternalAssociationId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createExternalAssociation(args: PostPersonsExternalAssociationsArgs) {
      return client.request<PostPersonsExternalAssociationsResponse>({
        method: 'POST',
        path: '/persons/external-associations',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getGenders(args: GetPersonsGendersArgs = {}) {
      return client.request<GetPersonsGendersResponse>({
        method: 'GET',
        path: '/persons/genders',
        headers: args.headers,
        signal: args.signal,
      })
    },
    createGender(args: PostPersonsGendersArgs) {
      return client.request<PostPersonsGendersResponse>({
        method: 'POST',
        path: '/persons/genders',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateGender(args: PutPersonsGendersArgs) {
      return client.request<PutPersonsGendersResponse>({
        method: 'PUT',
        path: '/persons/genders',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getGenderById(args: GetPersonsGendersGenderIdArgs) {
      return client.request<GetPersonsGendersGenderIdResponse>({
        method: 'GET',
        path: '/persons/genders/{GenderId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteGender(args: DeletePersonsGendersGenderIdArgs) {
      return client.request<DeletePersonsGendersGenderIdResponse>({
        method: 'DELETE',
        path: '/persons/genders/{GenderId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getIdentifierTypes(args: GetPersonsIdentifiertypesArgs) {
      return client.request<GetPersonsIdentifiertypesResponse>({
        method: 'GET',
        path: '/persons/identifiertypes',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getIdentifierTypeById(args: GetPersonsIdentifierTypesIdentifierTypeIdArgs) {
      return client.request<GetPersonsIdentifierTypesIdentifierTypeIdResponse>({
        method: 'GET',
        path: '/persons/identifierTypes/{IdentifierTypeId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteIdentifierType(args: DeletePersonsIdentifierTypesIdentifierTypeIdArgs) {
      return client.request<DeletePersonsIdentifierTypesIdentifierTypeIdResponse>({
        method: 'DELETE',
        path: '/persons/identifierTypes/{IdentifierTypeId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createIndetifierType(args: PostPersonsIdentifierTypesArgs) {
      return client.request<PostPersonsIdentifierTypesResponse>({
        method: 'POST',
        path: '/persons/identifierTypes',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateIdentifierType(args: PutPersonsIdentifierTypesArgs) {
      return client.request<PutPersonsIdentifierTypesResponse>({
        method: 'PUT',
        path: '/persons/identifierTypes',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMaritalStatus(args: GetPersonsMaritalstatusesArgs = {}) {
      return client.request<GetPersonsMaritalstatusesResponse>({
        method: 'GET',
        path: '/persons/maritalstatuses',
        headers: args.headers,
        signal: args.signal,
      })
    },
    createMaritalStatus(args: PostPersonsMaritalstatusesArgs) {
      return client.request<PostPersonsMaritalstatusesResponse>({
        method: 'POST',
        path: '/persons/maritalstatuses',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateMaritalStatus(args: PutPersonsMaritalstatusesArgs) {
      return client.request<PutPersonsMaritalstatusesResponse>({
        method: 'PUT',
        path: '/persons/maritalstatuses',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getMaritalStatusById(args: GetPersonsMaritalstatusesMaritalStatusIdArgs) {
      return client.request<GetPersonsMaritalstatusesMaritalStatusIdResponse>({
        method: 'GET',
        path: '/persons/maritalstatuses/{MaritalStatusId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteMaritalStatus(args: DeletePersonsMaritalstatusesMaritalStatusIdArgs) {
      return client.request<DeletePersonsMaritalstatusesMaritalStatusIdResponse>({
        method: 'DELETE',
        path: '/persons/maritalstatuses/{MaritalStatusId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getAllPersons(args: GetPersonsArgs) {
      return client.request<GetPersonsResponse>({
        method: 'GET',
        path: '/persons',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createPerson(args: PostPersonsArgs) {
      return client.request<PostPersonsResponse>({
        method: 'POST',
        path: '/persons',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updatePerson(args: PutPersonsArgs) {
      return client.request<PutPersonsResponse>({
        method: 'PUT',
        path: '/persons',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPersonById(args: GetPersonsPersonIdArgs) {
      return client.request<GetPersonsPersonIdResponse>({
        method: 'GET',
        path: '/persons/{PersonId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deletePerson(args: DeletePersonsPersonIdArgs) {
      return client.request<DeletePersonsPersonIdResponse>({
        method: 'DELETE',
        path: '/persons/{PersonId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    fixPersonIdentifiers(args: PutPersonsFixIdentifiersArgs = {}) {
      return client.request<PutPersonsFixIdentifiersResponse>({
        method: 'PUT',
        path: '/persons/fix-identifiers',
        headers: args.headers,
        signal: args.signal,
      })
    },
    getIdentifiersByPersonId(args: GetPersonsPersonIdIdentifiersArgs) {
      return client.request<GetPersonsPersonIdIdentifiersResponse>({
        method: 'GET',
        path: '/persons/{PersonId}/identifiers',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPersonIdentifierById(args: GetPersonsIdentifiersPersonIdentifierIdArgs) {
      return client.request<GetPersonsIdentifiersPersonIdentifierIdResponse>({
        method: 'GET',
        path: '/persons/identifiers/{PersonIdentifierId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deletePersonIdentifier(args: DeletePersonsIdentifiersPersonIdentifierIdArgs) {
      return client.request<DeletePersonsIdentifiersPersonIdentifierIdResponse>({
        method: 'DELETE',
        path: '/persons/identifiers/{PersonIdentifierId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    verifyIdentifier(args: GetPersonsIdentifiersVerificationArgs) {
      return client.request<GetPersonsIdentifiersVerificationResponse>({
        method: 'GET',
        path: '/persons/identifiers/verification',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createPersonIdentifier(args: PostPersonsIdentifiersArgs) {
      return client.request<PostPersonsIdentifiersResponse>({
        method: 'POST',
        path: '/persons/identifiers',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updatePersonIdentifier(args: PutPersonsIdentifiersArgs) {
      return client.request<PutPersonsIdentifiersResponse>({
        method: 'PUT',
        path: '/persons/identifiers',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPreferencesByPersonId(args: GetPersonsPersonIdPreferencesArgs) {
      return client.request<GetPersonsPersonIdPreferencesResponse>({
        method: 'GET',
        path: '/persons/{PersonId}/preferences',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPersonPreferenceById(args: GetPersonsPreferencesPersonPreferenceIdArgs) {
      return client.request<GetPersonsPreferencesPersonPreferenceIdResponse>({
        method: 'GET',
        path: '/persons/preferences/{PersonPreferenceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deletePersonPreference(args: DeletePersonsPreferencesPersonPreferenceIdArgs) {
      return client.request<DeletePersonsPreferencesPersonPreferenceIdResponse>({
        method: 'DELETE',
        path: '/persons/preferences/{PersonPreferenceId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createPersonPreference(args: PostPersonsPreferencesArgs) {
      return client.request<PostPersonsPreferencesResponse>({
        method: 'POST',
        path: '/persons/preferences',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updatePersonPreference(args: PutPersonsPreferencesArgs) {
      return client.request<PutPersonsPreferencesResponse>({
        method: 'PUT',
        path: '/persons/preferences',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPersonRelationships(args: GetPersonsPersonIdRelationshipsArgs) {
      return client.request<GetPersonsPersonIdRelationshipsResponse>({
        method: 'GET',
        path: '/persons/{PersonId}/relationships',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPersonRelationshipById(args: GetPersonsRelationshipsPersonRelationshipIdArgs) {
      return client.request<GetPersonsRelationshipsPersonRelationshipIdResponse>({
        method: 'GET',
        path: '/persons/relationships/{PersonRelationshipId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deletePersonRelationship(args: DeletePersonsRelationshipsPersonRelationshipIdArgs) {
      return client.request<DeletePersonsRelationshipsPersonRelationshipIdResponse>({
        method: 'DELETE',
        path: '/persons/relationships/{PersonRelationshipId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createPersonRelationship(args: PostPersonsRelationshipsArgs) {
      return client.request<PostPersonsRelationshipsResponse>({
        method: 'POST',
        path: '/persons/relationships',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updatePersonRelationship(args: PutPersonsRelationshipsArgs) {
      return client.request<PutPersonsRelationshipsResponse>({
        method: 'PUT',
        path: '/persons/relationships',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPhonesByPersonId(args: GetPersonsPersonIdPhonesArgs) {
      return client.request<GetPersonsPersonIdPhonesResponse>({
        method: 'GET',
        path: '/persons/{PersonId}/phones',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getPhonesById(args: GetPersonsPhonesPhoneIdArgs) {
      return client.request<GetPersonsPhonesPhoneIdResponse>({
        method: 'GET',
        path: '/persons/phones/{PhoneId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deletePhone(args: DeletePersonsPhonesPhoneIdArgs) {
      return client.request<DeletePersonsPhonesPhoneIdResponse>({
        method: 'DELETE',
        path: '/persons/phones/{PhoneId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    createPhone(args: PostPersonsPhonesArgs) {
      return client.request<PostPersonsPhonesResponse>({
        method: 'POST',
        path: '/persons/phones',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updatePhone(args: PutPersonsPhonesArgs) {
      return client.request<PutPersonsPhonesResponse>({
        method: 'PUT',
        path: '/persons/phones',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getRelationshipTypes(args: GetPersonsRelationshiptypesArgs = {}) {
      return client.request<GetPersonsRelationshiptypesResponse>({
        method: 'GET',
        path: '/persons/relationshiptypes',
        headers: args.headers,
        signal: args.signal,
      })
    },
    createRelationShipType(args: PostPersonsRelationshiptypesArgs) {
      return client.request<PostPersonsRelationshiptypesResponse>({
        method: 'POST',
        path: '/persons/relationshiptypes',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    updateRelationshipType(args: PutPersonsRelationshiptypesArgs) {
      return client.request<PutPersonsRelationshiptypesResponse>({
        method: 'PUT',
        path: '/persons/relationshiptypes',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getRelationshipTypeById(args: GetPersonsRelationshiptypesRelationshipTypeIdArgs) {
      return client.request<GetPersonsRelationshiptypesRelationshipTypeIdResponse>({
        method: 'GET',
        path: '/persons/relationshiptypes/{RelationshipTypeId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteRelationshipType(args: DeletePersonsRelationshiptypesRelationshipTypeIdArgs) {
      return client.request<DeletePersonsRelationshiptypesRelationshipTypeIdResponse>({
        method: 'DELETE',
        path: '/persons/relationshiptypes/{RelationshipTypeId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
