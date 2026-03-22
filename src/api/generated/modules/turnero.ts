import type { HttpClient, PathParams, QueryParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/turnero.ts'

export type PostOfficesAsignacionesAsignarOperation = paths["/offices/Asignaciones/asignar"]['post']
export type PostOfficesAsignacionesAsignarResponse = OperationResponse<PostOfficesAsignacionesAsignarOperation>
export type PostOfficesAsignacionesAsignarBody = OperationRequestBody<PostOfficesAsignacionesAsignarOperation>
export type PostOfficesAsignacionesAsignarArgs = RequestOptionsBase & {
  body: PostOfficesAsignacionesAsignarBody
}

export type PutOfficesAsignacionesLiberarMedicoIdOperation = paths["/offices/Asignaciones/liberar/{medicoId}"]['put']
export type PutOfficesAsignacionesLiberarMedicoIdResponse = OperationResponse<PutOfficesAsignacionesLiberarMedicoIdOperation>
export type PutOfficesAsignacionesLiberarMedicoIdPathParams = OperationPathParams<PutOfficesAsignacionesLiberarMedicoIdOperation>
export type PutOfficesAsignacionesLiberarMedicoIdArgs = RequestOptionsBase & {
  path: PutOfficesAsignacionesLiberarMedicoIdPathParams
}

export type GetOfficesAsignacionesActivasOperation = paths["/offices/Asignaciones/activas"]['get']
export type GetOfficesAsignacionesActivasResponse = OperationResponse<GetOfficesAsignacionesActivasOperation>
export type GetOfficesAsignacionesActivasArgs = RequestOptionsBase & {
}

export type GetOfficesConsultoriosOperation = paths["/offices/Consultorios"]['get']
export type GetOfficesConsultoriosResponse = OperationResponse<GetOfficesConsultoriosOperation>
export type GetOfficesConsultoriosArgs = RequestOptionsBase & {
}

export type PostOfficesConsultoriosOperation = paths["/offices/Consultorios"]['post']
export type PostOfficesConsultoriosResponse = OperationResponse<PostOfficesConsultoriosOperation>
export type PostOfficesConsultoriosBody = OperationRequestBody<PostOfficesConsultoriosOperation>
export type PostOfficesConsultoriosArgs = RequestOptionsBase & {
  body: PostOfficesConsultoriosBody
}

export type GetOfficesConsultoriosTodosDisponiblesOperation = paths["/offices/Consultorios/todos-disponibles"]['get']
export type GetOfficesConsultoriosTodosDisponiblesResponse = OperationResponse<GetOfficesConsultoriosTodosDisponiblesOperation>
export type GetOfficesConsultoriosTodosDisponiblesArgs = RequestOptionsBase & {
}

export type GetOfficesConsultoriosDisponiblesDoctorIdOperation = paths["/offices/Consultorios/disponibles/{doctorId}"]['get']
export type GetOfficesConsultoriosDisponiblesDoctorIdResponse = OperationResponse<GetOfficesConsultoriosDisponiblesDoctorIdOperation>
export type GetOfficesConsultoriosDisponiblesDoctorIdPathParams = OperationPathParams<GetOfficesConsultoriosDisponiblesDoctorIdOperation>
export type GetOfficesConsultoriosDisponiblesDoctorIdQueryParams = OperationQueryParams<GetOfficesConsultoriosDisponiblesDoctorIdOperation>
export type GetOfficesConsultoriosDisponiblesDoctorIdArgs = RequestOptionsBase & {
  path: GetOfficesConsultoriosDisponiblesDoctorIdPathParams
  query?: GetOfficesConsultoriosDisponiblesDoctorIdQueryParams
}

export type PutOfficesConsultoriosIdOperation = paths["/offices/Consultorios/{id}"]['put']
export type PutOfficesConsultoriosIdResponse = OperationResponse<PutOfficesConsultoriosIdOperation>
export type PutOfficesConsultoriosIdPathParams = OperationPathParams<PutOfficesConsultoriosIdOperation>
export type PutOfficesConsultoriosIdBody = OperationRequestBody<PutOfficesConsultoriosIdOperation>
export type PutOfficesConsultoriosIdArgs = RequestOptionsBase & {
  path: PutOfficesConsultoriosIdPathParams
  body: PutOfficesConsultoriosIdBody
}

export type DeleteOfficesConsultoriosIdOperation = paths["/offices/Consultorios/{id}"]['delete']
export type DeleteOfficesConsultoriosIdResponse = OperationResponse<DeleteOfficesConsultoriosIdOperation>
export type DeleteOfficesConsultoriosIdPathParams = OperationPathParams<DeleteOfficesConsultoriosIdOperation>
export type DeleteOfficesConsultoriosIdArgs = RequestOptionsBase & {
  path: DeleteOfficesConsultoriosIdPathParams
}

export type PutOfficesConsultoriosIdEstadoOperation = paths["/offices/Consultorios/{id}/estado"]['put']
export type PutOfficesConsultoriosIdEstadoResponse = OperationResponse<PutOfficesConsultoriosIdEstadoOperation>
export type PutOfficesConsultoriosIdEstadoPathParams = OperationPathParams<PutOfficesConsultoriosIdEstadoOperation>
export type PutOfficesConsultoriosIdEstadoBody = OperationRequestBody<PutOfficesConsultoriosIdEstadoOperation>
export type PutOfficesConsultoriosIdEstadoArgs = RequestOptionsBase & {
  path: PutOfficesConsultoriosIdEstadoPathParams
  body: PutOfficesConsultoriosIdEstadoBody
}

export type GetOfficesHistoriaClinicaPacienteIdOperation = paths["/offices/historia_clinica/{pacienteId}"]['get']
export type GetOfficesHistoriaClinicaPacienteIdResponse = OperationResponse<GetOfficesHistoriaClinicaPacienteIdOperation>
export type GetOfficesHistoriaClinicaPacienteIdPathParams = OperationPathParams<GetOfficesHistoriaClinicaPacienteIdOperation>
export type GetOfficesHistoriaClinicaPacienteIdArgs = RequestOptionsBase & {
  path: GetOfficesHistoriaClinicaPacienteIdPathParams
}

export type PostOfficesHistoriaClinicaOperation = paths["/offices/historia_clinica"]['post']
export type PostOfficesHistoriaClinicaResponse = OperationResponse<PostOfficesHistoriaClinicaOperation>
export type PostOfficesHistoriaClinicaBody = OperationRequestBody<PostOfficesHistoriaClinicaOperation>
export type PostOfficesHistoriaClinicaArgs = RequestOptionsBase & {
  body: PostOfficesHistoriaClinicaBody
}

export type PostOfficesLlamadosOperation = paths["/offices/Llamados"]['post']
export type PostOfficesLlamadosResponse = OperationResponse<PostOfficesLlamadosOperation>
export type PostOfficesLlamadosBody = OperationRequestBody<PostOfficesLlamadosOperation>
export type PostOfficesLlamadosArgs = RequestOptionsBase & {
  body: PostOfficesLlamadosBody
}

export type GetOfficesLlamadosUltimosSectorIdOperation = paths["/offices/Llamados/ultimos/{sectorId}"]['get']
export type GetOfficesLlamadosUltimosSectorIdResponse = OperationResponse<GetOfficesLlamadosUltimosSectorIdOperation>
export type GetOfficesLlamadosUltimosSectorIdPathParams = OperationPathParams<GetOfficesLlamadosUltimosSectorIdOperation>
export type GetOfficesLlamadosUltimosSectorIdQueryParams = OperationQueryParams<GetOfficesLlamadosUltimosSectorIdOperation>
export type GetOfficesLlamadosUltimosSectorIdArgs = RequestOptionsBase & {
  path: GetOfficesLlamadosUltimosSectorIdPathParams
  query?: GetOfficesLlamadosUltimosSectorIdQueryParams
}

export type PostOfficesLlamadosPurgeOldOperation = paths["/offices/Llamados/purge-old"]['post']
export type PostOfficesLlamadosPurgeOldResponse = OperationResponse<PostOfficesLlamadosPurgeOldOperation>
export type PostOfficesLlamadosPurgeOldArgs = RequestOptionsBase & {
}

export type GetOfficesMedicosOperation = paths["/offices/Medicos"]['get']
export type GetOfficesMedicosResponse = OperationResponse<GetOfficesMedicosOperation>
export type GetOfficesMedicosArgs = RequestOptionsBase & {
}

export type PostOfficesMedicosOperation = paths["/offices/Medicos"]['post']
export type PostOfficesMedicosResponse = OperationResponse<PostOfficesMedicosOperation>
export type PostOfficesMedicosBody = OperationRequestBody<PostOfficesMedicosOperation>
export type PostOfficesMedicosArgs = RequestOptionsBase & {
  body: PostOfficesMedicosBody
}

export type GetOfficesMedicosIdOperation = paths["/offices/Medicos/{id}"]['get']
export type GetOfficesMedicosIdResponse = OperationResponse<GetOfficesMedicosIdOperation>
export type GetOfficesMedicosIdPathParams = OperationPathParams<GetOfficesMedicosIdOperation>
export type GetOfficesMedicosIdArgs = RequestOptionsBase & {
  path: GetOfficesMedicosIdPathParams
}

export type PutOfficesMedicosIdOperation = paths["/offices/Medicos/{id}"]['put']
export type PutOfficesMedicosIdResponse = OperationResponse<PutOfficesMedicosIdOperation>
export type PutOfficesMedicosIdPathParams = OperationPathParams<PutOfficesMedicosIdOperation>
export type PutOfficesMedicosIdBody = OperationRequestBody<PutOfficesMedicosIdOperation>
export type PutOfficesMedicosIdArgs = RequestOptionsBase & {
  path: PutOfficesMedicosIdPathParams
  body: PutOfficesMedicosIdBody
}

export type DeleteOfficesMedicosIdOperation = paths["/offices/Medicos/{id}"]['delete']
export type DeleteOfficesMedicosIdResponse = OperationResponse<DeleteOfficesMedicosIdOperation>
export type DeleteOfficesMedicosIdPathParams = OperationPathParams<DeleteOfficesMedicosIdOperation>
export type DeleteOfficesMedicosIdArgs = RequestOptionsBase & {
  path: DeleteOfficesMedicosIdPathParams
}

export type GetOfficesMedicosMedicoIdConfiguracionOperation = paths["/offices/Medicos/{medicoId}/configuracion"]['get']
export type GetOfficesMedicosMedicoIdConfiguracionResponse = OperationResponse<GetOfficesMedicosMedicoIdConfiguracionOperation>
export type GetOfficesMedicosMedicoIdConfiguracionPathParams = OperationPathParams<GetOfficesMedicosMedicoIdConfiguracionOperation>
export type GetOfficesMedicosMedicoIdConfiguracionArgs = RequestOptionsBase & {
  path: GetOfficesMedicosMedicoIdConfiguracionPathParams
}

export type GetOfficesPacientesOperation = paths["/offices/Pacientes"]['get']
export type GetOfficesPacientesResponse = OperationResponse<GetOfficesPacientesOperation>
export type GetOfficesPacientesArgs = RequestOptionsBase & {
}

export type PostOfficesPacientesOperation = paths["/offices/Pacientes"]['post']
export type PostOfficesPacientesResponse = OperationResponse<PostOfficesPacientesOperation>
export type PostOfficesPacientesBody = OperationRequestBody<PostOfficesPacientesOperation>
export type PostOfficesPacientesArgs = RequestOptionsBase & {
  body: PostOfficesPacientesBody
}

export type GetOfficesPacientesIdOperation = paths["/offices/Pacientes/{id}"]['get']
export type GetOfficesPacientesIdResponse = OperationResponse<GetOfficesPacientesIdOperation>
export type GetOfficesPacientesIdPathParams = OperationPathParams<GetOfficesPacientesIdOperation>
export type GetOfficesPacientesIdArgs = RequestOptionsBase & {
  path: GetOfficesPacientesIdPathParams
}

export type GetOfficesPacientesMedicoIdSectorIdConsultorioNumeroOperation = paths["/offices/Pacientes/{medicoId}/{sectorId}/{consultorioNumero}"]['get']
export type GetOfficesPacientesMedicoIdSectorIdConsultorioNumeroResponse = OperationResponse<GetOfficesPacientesMedicoIdSectorIdConsultorioNumeroOperation>
export type GetOfficesPacientesMedicoIdSectorIdConsultorioNumeroPathParams = OperationPathParams<GetOfficesPacientesMedicoIdSectorIdConsultorioNumeroOperation>
export type GetOfficesPacientesMedicoIdSectorIdConsultorioNumeroArgs = RequestOptionsBase & {
  path: GetOfficesPacientesMedicoIdSectorIdConsultorioNumeroPathParams
}

export type PostOfficesPrefacturadorGenerarOperation = paths["/offices/prefacturador/generar"]['post']
export type PostOfficesPrefacturadorGenerarResponse = OperationResponse<PostOfficesPrefacturadorGenerarOperation>
export type PostOfficesPrefacturadorGenerarBody = OperationRequestBody<PostOfficesPrefacturadorGenerarOperation>
export type PostOfficesPrefacturadorGenerarArgs = RequestOptionsBase & {
  body: PostOfficesPrefacturadorGenerarBody
}

export type GetOfficesPrefacturadorIdOperation = paths["/offices/prefacturador/{id}"]['get']
export type GetOfficesPrefacturadorIdResponse = OperationResponse<GetOfficesPrefacturadorIdOperation>
export type GetOfficesPrefacturadorIdPathParams = OperationPathParams<GetOfficesPrefacturadorIdOperation>
export type GetOfficesPrefacturadorIdArgs = RequestOptionsBase & {
  path: GetOfficesPrefacturadorIdPathParams
}

export type GetOfficesPrefacturadorOperation = paths["/offices/prefacturador"]['get']
export type GetOfficesPrefacturadorResponse = OperationResponse<GetOfficesPrefacturadorOperation>
export type GetOfficesPrefacturadorQueryParams = OperationQueryParams<GetOfficesPrefacturadorOperation>
export type GetOfficesPrefacturadorArgs = RequestOptionsBase & {
  query?: GetOfficesPrefacturadorQueryParams
}

export type PutOfficesPrefacturadorIdEstadoOperation = paths["/offices/prefacturador/{id}/estado"]['put']
export type PutOfficesPrefacturadorIdEstadoResponse = OperationResponse<PutOfficesPrefacturadorIdEstadoOperation>
export type PutOfficesPrefacturadorIdEstadoPathParams = OperationPathParams<PutOfficesPrefacturadorIdEstadoOperation>
export type PutOfficesPrefacturadorIdEstadoBody = OperationRequestBody<PutOfficesPrefacturadorIdEstadoOperation>
export type PutOfficesPrefacturadorIdEstadoArgs = RequestOptionsBase & {
  path: PutOfficesPrefacturadorIdEstadoPathParams
  body: PutOfficesPrefacturadorIdEstadoBody
}

export type GetOfficesQueueDisplayScreenOperation = paths["/offices/QueueDisplayScreen"]['get']
export type GetOfficesQueueDisplayScreenResponse = OperationResponse<GetOfficesQueueDisplayScreenOperation>
export type GetOfficesQueueDisplayScreenArgs = RequestOptionsBase & {
}

export type PostOfficesQueueDisplayScreenOperation = paths["/offices/QueueDisplayScreen"]['post']
export type PostOfficesQueueDisplayScreenResponse = OperationResponse<PostOfficesQueueDisplayScreenOperation>
export type PostOfficesQueueDisplayScreenBody = OperationRequestBody<PostOfficesQueueDisplayScreenOperation>
export type PostOfficesQueueDisplayScreenArgs = RequestOptionsBase & {
  body: PostOfficesQueueDisplayScreenBody
}

export type GetOfficesQueueDisplayScreenIdOperation = paths["/offices/QueueDisplayScreen/{id}"]['get']
export type GetOfficesQueueDisplayScreenIdResponse = OperationResponse<GetOfficesQueueDisplayScreenIdOperation>
export type GetOfficesQueueDisplayScreenIdPathParams = OperationPathParams<GetOfficesQueueDisplayScreenIdOperation>
export type GetOfficesQueueDisplayScreenIdArgs = RequestOptionsBase & {
  path: GetOfficesQueueDisplayScreenIdPathParams
}

export type PutOfficesQueueDisplayScreenIdOperation = paths["/offices/QueueDisplayScreen/{id}"]['put']
export type PutOfficesQueueDisplayScreenIdResponse = OperationResponse<PutOfficesQueueDisplayScreenIdOperation>
export type PutOfficesQueueDisplayScreenIdPathParams = OperationPathParams<PutOfficesQueueDisplayScreenIdOperation>
export type PutOfficesQueueDisplayScreenIdBody = OperationRequestBody<PutOfficesQueueDisplayScreenIdOperation>
export type PutOfficesQueueDisplayScreenIdArgs = RequestOptionsBase & {
  path: PutOfficesQueueDisplayScreenIdPathParams
  body: PutOfficesQueueDisplayScreenIdBody
}

export type DeleteOfficesQueueDisplayScreenIdOperation = paths["/offices/QueueDisplayScreen/{id}"]['delete']
export type DeleteOfficesQueueDisplayScreenIdResponse = OperationResponse<DeleteOfficesQueueDisplayScreenIdOperation>
export type DeleteOfficesQueueDisplayScreenIdPathParams = OperationPathParams<DeleteOfficesQueueDisplayScreenIdOperation>
export type DeleteOfficesQueueDisplayScreenIdArgs = RequestOptionsBase & {
  path: DeleteOfficesQueueDisplayScreenIdPathParams
}

export type GetOfficesQueueDisplayScreenDisplayInfoOperation = paths["/offices/QueueDisplayScreen/DisplayInfo"]['get']
export type GetOfficesQueueDisplayScreenDisplayInfoResponse = OperationResponse<GetOfficesQueueDisplayScreenDisplayInfoOperation>
export type GetOfficesQueueDisplayScreenDisplayInfoQueryParams = OperationQueryParams<GetOfficesQueueDisplayScreenDisplayInfoOperation>
export type GetOfficesQueueDisplayScreenDisplayInfoArgs = RequestOptionsBase & {
  query?: GetOfficesQueueDisplayScreenDisplayInfoQueryParams
}

export type PostOfficesQueueDisplayScreenRegisterOperation = paths["/offices/QueueDisplayScreen/register"]['post']
export type PostOfficesQueueDisplayScreenRegisterResponse = OperationResponse<PostOfficesQueueDisplayScreenRegisterOperation>
export type PostOfficesQueueDisplayScreenRegisterBody = OperationRequestBody<PostOfficesQueueDisplayScreenRegisterOperation>
export type PostOfficesQueueDisplayScreenRegisterArgs = RequestOptionsBase & {
  body: PostOfficesQueueDisplayScreenRegisterBody
}

export type GetOfficesSectoresOperation = paths["/offices/Sectores"]['get']
export type GetOfficesSectoresResponse = OperationResponse<GetOfficesSectoresOperation>
export type GetOfficesSectoresArgs = RequestOptionsBase & {
}

export type PostOfficesSectoresOperation = paths["/offices/Sectores"]['post']
export type PostOfficesSectoresResponse = OperationResponse<PostOfficesSectoresOperation>
export type PostOfficesSectoresBody = OperationRequestBody<PostOfficesSectoresOperation>
export type PostOfficesSectoresArgs = RequestOptionsBase & {
  body: PostOfficesSectoresBody
}

export type GetOfficesSectoresSectorIdOperation = paths["/offices/Sectores/{sectorId}"]['get']
export type GetOfficesSectoresSectorIdResponse = OperationResponse<GetOfficesSectoresSectorIdOperation>
export type GetOfficesSectoresSectorIdPathParams = OperationPathParams<GetOfficesSectoresSectorIdOperation>
export type GetOfficesSectoresSectorIdArgs = RequestOptionsBase & {
  path: GetOfficesSectoresSectorIdPathParams
}

export type GetOfficesSectoresSectorIdGetinfoOperation = paths["/offices/Sectores/{sectorId}/getinfo"]['get']
export type GetOfficesSectoresSectorIdGetinfoResponse = OperationResponse<GetOfficesSectoresSectorIdGetinfoOperation>
export type GetOfficesSectoresSectorIdGetinfoPathParams = OperationPathParams<GetOfficesSectoresSectorIdGetinfoOperation>
export type GetOfficesSectoresSectorIdGetinfoQueryParams = OperationQueryParams<GetOfficesSectoresSectorIdGetinfoOperation>
export type GetOfficesSectoresSectorIdGetinfoArgs = RequestOptionsBase & {
  path: GetOfficesSectoresSectorIdGetinfoPathParams
  query?: GetOfficesSectoresSectorIdGetinfoQueryParams
}

export type PutOfficesSectoresIdOperation = paths["/offices/Sectores/{id}"]['put']
export type PutOfficesSectoresIdResponse = OperationResponse<PutOfficesSectoresIdOperation>
export type PutOfficesSectoresIdPathParams = OperationPathParams<PutOfficesSectoresIdOperation>
export type PutOfficesSectoresIdBody = OperationRequestBody<PutOfficesSectoresIdOperation>
export type PutOfficesSectoresIdArgs = RequestOptionsBase & {
  path: PutOfficesSectoresIdPathParams
  body: PutOfficesSectoresIdBody
}

export type DeleteOfficesSectoresIdOperation = paths["/offices/Sectores/{id}"]['delete']
export type DeleteOfficesSectoresIdResponse = OperationResponse<DeleteOfficesSectoresIdOperation>
export type DeleteOfficesSectoresIdPathParams = OperationPathParams<DeleteOfficesSectoresIdOperation>
export type DeleteOfficesSectoresIdArgs = RequestOptionsBase & {
  path: DeleteOfficesSectoresIdPathParams
}

export type GetOfficesSectoresSectorIdEstadisticasOperation = paths["/offices/Sectores/{sectorId}/estadisticas"]['get']
export type GetOfficesSectoresSectorIdEstadisticasResponse = OperationResponse<GetOfficesSectoresSectorIdEstadisticasOperation>
export type GetOfficesSectoresSectorIdEstadisticasPathParams = OperationPathParams<GetOfficesSectoresSectorIdEstadisticasOperation>
export type GetOfficesSectoresSectorIdEstadisticasArgs = RequestOptionsBase & {
  path: GetOfficesSectoresSectorIdEstadisticasPathParams
}

export type GetOfficesSedesOperation = paths["/offices/Sedes"]['get']
export type GetOfficesSedesResponse = OperationResponse<GetOfficesSedesOperation>
export type GetOfficesSedesArgs = RequestOptionsBase & {
}

export type PostOfficesSedesOperation = paths["/offices/Sedes"]['post']
export type PostOfficesSedesResponse = OperationResponse<PostOfficesSedesOperation>
export type PostOfficesSedesBody = OperationRequestBody<PostOfficesSedesOperation>
export type PostOfficesSedesArgs = RequestOptionsBase & {
  body: PostOfficesSedesBody
}

export type PutOfficesSedesIdOperation = paths["/offices/Sedes/{id}"]['put']
export type PutOfficesSedesIdResponse = OperationResponse<PutOfficesSedesIdOperation>
export type PutOfficesSedesIdPathParams = OperationPathParams<PutOfficesSedesIdOperation>
export type PutOfficesSedesIdBody = OperationRequestBody<PutOfficesSedesIdOperation>
export type PutOfficesSedesIdArgs = RequestOptionsBase & {
  path: PutOfficesSedesIdPathParams
  body: PutOfficesSedesIdBody
}

export type DeleteOfficesSedesIdOperation = paths["/offices/Sedes/{id}"]['delete']
export type DeleteOfficesSedesIdResponse = OperationResponse<DeleteOfficesSedesIdOperation>
export type DeleteOfficesSedesIdPathParams = OperationPathParams<DeleteOfficesSedesIdOperation>
export type DeleteOfficesSedesIdArgs = RequestOptionsBase & {
  path: DeleteOfficesSedesIdPathParams
}

export type GetOfficesVideosOperation = paths["/offices/Videos"]['get']
export type GetOfficesVideosResponse = OperationResponse<GetOfficesVideosOperation>
export type GetOfficesVideosArgs = RequestOptionsBase & {
}

export type PostOfficesVideosOperation = paths["/offices/Videos"]['post']
export type PostOfficesVideosResponse = OperationResponse<PostOfficesVideosOperation>
export type PostOfficesVideosBody = OperationRequestBody<PostOfficesVideosOperation>
export type PostOfficesVideosArgs = RequestOptionsBase & {
  body: PostOfficesVideosBody
}

export type PutOfficesVideosIdOperation = paths["/offices/Videos/{id}"]['put']
export type PutOfficesVideosIdResponse = OperationResponse<PutOfficesVideosIdOperation>
export type PutOfficesVideosIdPathParams = OperationPathParams<PutOfficesVideosIdOperation>
export type PutOfficesVideosIdBody = OperationRequestBody<PutOfficesVideosIdOperation>
export type PutOfficesVideosIdArgs = RequestOptionsBase & {
  path: PutOfficesVideosIdPathParams
  body: PutOfficesVideosIdBody
}

export type DeleteOfficesVideosIdOperation = paths["/offices/Videos/{id}"]['delete']
export type DeleteOfficesVideosIdResponse = OperationResponse<DeleteOfficesVideosIdOperation>
export type DeleteOfficesVideosIdPathParams = OperationPathParams<DeleteOfficesVideosIdOperation>
export type DeleteOfficesVideosIdArgs = RequestOptionsBase & {
  path: DeleteOfficesVideosIdPathParams
}

export function createTurneroApi(client: HttpClient) {
  return {
    postOfficesAsignacionesAsignar(args: PostOfficesAsignacionesAsignarArgs) {
      return client.request<PostOfficesAsignacionesAsignarResponse>({
        method: 'POST',
        path: '/offices/Asignaciones/asignar',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    putOfficesAsignacionesLiberarMedicoId(args: PutOfficesAsignacionesLiberarMedicoIdArgs) {
      return client.request<PutOfficesAsignacionesLiberarMedicoIdResponse>({
        method: 'PUT',
        path: '/offices/Asignaciones/liberar/{medicoId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesAsignacionesActivas(args: GetOfficesAsignacionesActivasArgs = {}) {
      return client.request<GetOfficesAsignacionesActivasResponse>({
        method: 'GET',
        path: '/offices/Asignaciones/activas',
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesConsultorios(args: GetOfficesConsultoriosArgs = {}) {
      return client.request<GetOfficesConsultoriosResponse>({
        method: 'GET',
        path: '/offices/Consultorios',
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesConsultorios(args: PostOfficesConsultoriosArgs) {
      return client.request<PostOfficesConsultoriosResponse>({
        method: 'POST',
        path: '/offices/Consultorios',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesConsultoriosTodosDisponibles(args: GetOfficesConsultoriosTodosDisponiblesArgs = {}) {
      return client.request<GetOfficesConsultoriosTodosDisponiblesResponse>({
        method: 'GET',
        path: '/offices/Consultorios/todos-disponibles',
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesConsultoriosDisponiblesDoctorId(args: GetOfficesConsultoriosDisponiblesDoctorIdArgs) {
      return client.request<GetOfficesConsultoriosDisponiblesDoctorIdResponse>({
        method: 'GET',
        path: '/offices/Consultorios/disponibles/{doctorId}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    putOfficesConsultoriosId(args: PutOfficesConsultoriosIdArgs) {
      return client.request<PutOfficesConsultoriosIdResponse>({
        method: 'PUT',
        path: '/offices/Consultorios/{id}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteOfficesConsultoriosId(args: DeleteOfficesConsultoriosIdArgs) {
      return client.request<DeleteOfficesConsultoriosIdResponse>({
        method: 'DELETE',
        path: '/offices/Consultorios/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    putOfficesConsultoriosIdEstado(args: PutOfficesConsultoriosIdEstadoArgs) {
      return client.request<PutOfficesConsultoriosIdEstadoResponse>({
        method: 'PUT',
        path: '/offices/Consultorios/{id}/estado',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesHistoriaClinicaPacienteId(args: GetOfficesHistoriaClinicaPacienteIdArgs) {
      return client.request<GetOfficesHistoriaClinicaPacienteIdResponse>({
        method: 'GET',
        path: '/offices/historia_clinica/{pacienteId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesHistoriaClinica(args: PostOfficesHistoriaClinicaArgs) {
      return client.request<PostOfficesHistoriaClinicaResponse>({
        method: 'POST',
        path: '/offices/historia_clinica',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesLlamados(args: PostOfficesLlamadosArgs) {
      return client.request<PostOfficesLlamadosResponse>({
        method: 'POST',
        path: '/offices/Llamados',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesLlamadosUltimosSectorId(args: GetOfficesLlamadosUltimosSectorIdArgs) {
      return client.request<GetOfficesLlamadosUltimosSectorIdResponse>({
        method: 'GET',
        path: '/offices/Llamados/ultimos/{sectorId}',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesLlamadosPurgeOld(args: PostOfficesLlamadosPurgeOldArgs = {}) {
      return client.request<PostOfficesLlamadosPurgeOldResponse>({
        method: 'POST',
        path: '/offices/Llamados/purge-old',
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesMedicos(args: GetOfficesMedicosArgs = {}) {
      return client.request<GetOfficesMedicosResponse>({
        method: 'GET',
        path: '/offices/Medicos',
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesMedicos(args: PostOfficesMedicosArgs) {
      return client.request<PostOfficesMedicosResponse>({
        method: 'POST',
        path: '/offices/Medicos',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesMedicosId(args: GetOfficesMedicosIdArgs) {
      return client.request<GetOfficesMedicosIdResponse>({
        method: 'GET',
        path: '/offices/Medicos/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    putOfficesMedicosId(args: PutOfficesMedicosIdArgs) {
      return client.request<PutOfficesMedicosIdResponse>({
        method: 'PUT',
        path: '/offices/Medicos/{id}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteOfficesMedicosId(args: DeleteOfficesMedicosIdArgs) {
      return client.request<DeleteOfficesMedicosIdResponse>({
        method: 'DELETE',
        path: '/offices/Medicos/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesMedicosMedicoIdConfiguracion(args: GetOfficesMedicosMedicoIdConfiguracionArgs) {
      return client.request<GetOfficesMedicosMedicoIdConfiguracionResponse>({
        method: 'GET',
        path: '/offices/Medicos/{medicoId}/configuracion',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesPacientes(args: GetOfficesPacientesArgs = {}) {
      return client.request<GetOfficesPacientesResponse>({
        method: 'GET',
        path: '/offices/Pacientes',
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesPacientes(args: PostOfficesPacientesArgs) {
      return client.request<PostOfficesPacientesResponse>({
        method: 'POST',
        path: '/offices/Pacientes',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesPacientesId(args: GetOfficesPacientesIdArgs) {
      return client.request<GetOfficesPacientesIdResponse>({
        method: 'GET',
        path: '/offices/Pacientes/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesPacientesMedicoIdSectorIdConsultorioNumero(args: GetOfficesPacientesMedicoIdSectorIdConsultorioNumeroArgs) {
      return client.request<GetOfficesPacientesMedicoIdSectorIdConsultorioNumeroResponse>({
        method: 'GET',
        path: '/offices/Pacientes/{medicoId}/{sectorId}/{consultorioNumero}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesPrefacturadorGenerar(args: PostOfficesPrefacturadorGenerarArgs) {
      return client.request<PostOfficesPrefacturadorGenerarResponse>({
        method: 'POST',
        path: '/offices/prefacturador/generar',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesPrefacturadorId(args: GetOfficesPrefacturadorIdArgs) {
      return client.request<GetOfficesPrefacturadorIdResponse>({
        method: 'GET',
        path: '/offices/prefacturador/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesPrefacturador(args: GetOfficesPrefacturadorArgs) {
      return client.request<GetOfficesPrefacturadorResponse>({
        method: 'GET',
        path: '/offices/prefacturador',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    putOfficesPrefacturadorIdEstado(args: PutOfficesPrefacturadorIdEstadoArgs) {
      return client.request<PutOfficesPrefacturadorIdEstadoResponse>({
        method: 'PUT',
        path: '/offices/prefacturador/{id}/estado',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesQueueDisplayScreen(args: GetOfficesQueueDisplayScreenArgs = {}) {
      return client.request<GetOfficesQueueDisplayScreenResponse>({
        method: 'GET',
        path: '/offices/QueueDisplayScreen',
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesQueueDisplayScreen(args: PostOfficesQueueDisplayScreenArgs) {
      return client.request<PostOfficesQueueDisplayScreenResponse>({
        method: 'POST',
        path: '/offices/QueueDisplayScreen',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesQueueDisplayScreenId(args: GetOfficesQueueDisplayScreenIdArgs) {
      return client.request<GetOfficesQueueDisplayScreenIdResponse>({
        method: 'GET',
        path: '/offices/QueueDisplayScreen/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    putOfficesQueueDisplayScreenId(args: PutOfficesQueueDisplayScreenIdArgs) {
      return client.request<PutOfficesQueueDisplayScreenIdResponse>({
        method: 'PUT',
        path: '/offices/QueueDisplayScreen/{id}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteOfficesQueueDisplayScreenId(args: DeleteOfficesQueueDisplayScreenIdArgs) {
      return client.request<DeleteOfficesQueueDisplayScreenIdResponse>({
        method: 'DELETE',
        path: '/offices/QueueDisplayScreen/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesQueueDisplayScreenDisplayInfo(args: GetOfficesQueueDisplayScreenDisplayInfoArgs) {
      return client.request<GetOfficesQueueDisplayScreenDisplayInfoResponse>({
        method: 'GET',
        path: '/offices/QueueDisplayScreen/DisplayInfo',
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesQueueDisplayScreenRegister(args: PostOfficesQueueDisplayScreenRegisterArgs) {
      return client.request<PostOfficesQueueDisplayScreenRegisterResponse>({
        method: 'POST',
        path: '/offices/QueueDisplayScreen/register',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesSectores(args: GetOfficesSectoresArgs = {}) {
      return client.request<GetOfficesSectoresResponse>({
        method: 'GET',
        path: '/offices/Sectores',
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesSectores(args: PostOfficesSectoresArgs) {
      return client.request<PostOfficesSectoresResponse>({
        method: 'POST',
        path: '/offices/Sectores',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesSectoresSectorId(args: GetOfficesSectoresSectorIdArgs) {
      return client.request<GetOfficesSectoresSectorIdResponse>({
        method: 'GET',
        path: '/offices/Sectores/{sectorId}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesSectoresSectorIdGetinfo(args: GetOfficesSectoresSectorIdGetinfoArgs) {
      return client.request<GetOfficesSectoresSectorIdGetinfoResponse>({
        method: 'GET',
        path: '/offices/Sectores/{sectorId}/getinfo',
        pathParams: args.path as PathParams,
        query: args.query as QueryParams | undefined,
        headers: args.headers,
        signal: args.signal,
      })
    },
    putOfficesSectoresId(args: PutOfficesSectoresIdArgs) {
      return client.request<PutOfficesSectoresIdResponse>({
        method: 'PUT',
        path: '/offices/Sectores/{id}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteOfficesSectoresId(args: DeleteOfficesSectoresIdArgs) {
      return client.request<DeleteOfficesSectoresIdResponse>({
        method: 'DELETE',
        path: '/offices/Sectores/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesSectoresSectorIdEstadisticas(args: GetOfficesSectoresSectorIdEstadisticasArgs) {
      return client.request<GetOfficesSectoresSectorIdEstadisticasResponse>({
        method: 'GET',
        path: '/offices/Sectores/{sectorId}/estadisticas',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesSedes(args: GetOfficesSedesArgs = {}) {
      return client.request<GetOfficesSedesResponse>({
        method: 'GET',
        path: '/offices/Sedes',
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesSedes(args: PostOfficesSedesArgs) {
      return client.request<PostOfficesSedesResponse>({
        method: 'POST',
        path: '/offices/Sedes',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    putOfficesSedesId(args: PutOfficesSedesIdArgs) {
      return client.request<PutOfficesSedesIdResponse>({
        method: 'PUT',
        path: '/offices/Sedes/{id}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteOfficesSedesId(args: DeleteOfficesSedesIdArgs) {
      return client.request<DeleteOfficesSedesIdResponse>({
        method: 'DELETE',
        path: '/offices/Sedes/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
    getOfficesVideos(args: GetOfficesVideosArgs = {}) {
      return client.request<GetOfficesVideosResponse>({
        method: 'GET',
        path: '/offices/Videos',
        headers: args.headers,
        signal: args.signal,
      })
    },
    postOfficesVideos(args: PostOfficesVideosArgs) {
      return client.request<PostOfficesVideosResponse>({
        method: 'POST',
        path: '/offices/Videos',
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    putOfficesVideosId(args: PutOfficesVideosIdArgs) {
      return client.request<PutOfficesVideosIdResponse>({
        method: 'PUT',
        path: '/offices/Videos/{id}',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    deleteOfficesVideosId(args: DeleteOfficesVideosIdArgs) {
      return client.request<DeleteOfficesVideosIdResponse>({
        method: 'DELETE',
        path: '/offices/Videos/{id}',
        pathParams: args.path as PathParams,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
