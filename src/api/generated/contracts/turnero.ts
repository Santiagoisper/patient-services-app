export interface paths {
    "/offices/Asignaciones/asignar": {
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
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["AsignacionDto"];
                    "text/json": components["schemas"]["AsignacionDto"];
                    "application/*+json": components["schemas"]["AsignacionDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["AsignacionResponseDtoResponse"];
                        "application/json": components["schemas"]["AsignacionResponseDtoResponse"];
                        "text/json": components["schemas"]["AsignacionResponseDtoResponse"];
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
    "/offices/Asignaciones/liberar/{medicoId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    medicoId: string;
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
                        "text/plain": components["schemas"]["StringResponse"];
                        "application/json": components["schemas"]["StringResponse"];
                        "text/json": components["schemas"]["StringResponse"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offices/Asignaciones/activas": {
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
                        "text/plain": components["schemas"]["AsignacionResponseDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["AsignacionResponseDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["AsignacionResponseDtoIEnumerableResponse"];
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
    "/offices/Consultorios": {
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
                        "text/plain": components["schemas"]["ConsultorioDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["ConsultorioDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["ConsultorioDtoIEnumerableResponse"];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ConsultorioDto"];
                    "text/json": components["schemas"]["ConsultorioDto"];
                    "application/*+json": components["schemas"]["ConsultorioDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["ConsultorioDtoResponse"];
                        "application/json": components["schemas"]["ConsultorioDtoResponse"];
                        "text/json": components["schemas"]["ConsultorioDtoResponse"];
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
    "/offices/Consultorios/todos-disponibles": {
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
                        "text/plain": components["schemas"]["ConsultorioDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["ConsultorioDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["ConsultorioDtoIEnumerableResponse"];
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
    "/offices/Consultorios/disponibles/{doctorId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    medicoId?: string;
                };
                header?: never;
                path: {
                    doctorId: string;
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
                        "text/plain": components["schemas"]["ConsultorioDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["ConsultorioDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["ConsultorioDtoIEnumerableResponse"];
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
    "/offices/Consultorios/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
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
                    "application/json": components["schemas"]["ConsultorioDto"];
                    "text/json": components["schemas"]["ConsultorioDto"];
                    "application/*+json": components["schemas"]["ConsultorioDto"];
                };
            };
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
            };
        };
        post?: never;
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
                        "text/plain": components["schemas"]["StringResponse"];
                        "application/json": components["schemas"]["StringResponse"];
                        "text/json": components["schemas"]["StringResponse"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offices/Consultorios/{id}/estado": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
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
                        "text/plain": components["schemas"]["StringResponse"];
                        "application/json": components["schemas"]["StringResponse"];
                        "text/json": components["schemas"]["StringResponse"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offices/historia_clinica/{pacienteId}": {
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
                path: {
                    pacienteId: number;
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
                        "text/plain": components["schemas"]["HistoriaClinicaResponse"];
                        "application/json": components["schemas"]["HistoriaClinicaResponse"];
                        "text/json": components["schemas"]["HistoriaClinicaResponse"];
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
    "/offices/historia_clinica": {
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
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["HistoriaClinica"];
                    "text/json": components["schemas"]["HistoriaClinica"];
                    "application/*+json": components["schemas"]["HistoriaClinica"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["HistoriaClinicaResponse"];
                        "application/json": components["schemas"]["HistoriaClinicaResponse"];
                        "text/json": components["schemas"]["HistoriaClinicaResponse"];
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
    "/offices/Llamados": {
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
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CrearLlamadoDto"];
                    "text/json": components["schemas"]["CrearLlamadoDto"];
                    "application/*+json": components["schemas"]["CrearLlamadoDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["LlamadoDtoResponse"];
                        "application/json": components["schemas"]["LlamadoDtoResponse"];
                        "text/json": components["schemas"]["LlamadoDtoResponse"];
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
    "/offices/Llamados/ultimos/{sectorId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    TenantId?: string;
                };
                header?: never;
                path: {
                    sectorId: number;
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
                        "text/plain": components["schemas"]["LlamadosListDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["LlamadosListDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["LlamadosListDtoIEnumerableResponse"];
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
    "/offices/Llamados/purge-old": {
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
                        "text/plain": components["schemas"]["Int32Response"];
                        "application/json": components["schemas"]["Int32Response"];
                        "text/json": components["schemas"]["Int32Response"];
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
    "/offices/Medicos": {
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
                        "text/plain": components["schemas"]["MedicoDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["MedicoDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["MedicoDtoIEnumerableResponse"];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["MedicoDto"];
                    "text/json": components["schemas"]["MedicoDto"];
                    "application/*+json": components["schemas"]["MedicoDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["MedicoDtoResponse"];
                        "application/json": components["schemas"]["MedicoDtoResponse"];
                        "text/json": components["schemas"]["MedicoDtoResponse"];
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
    "/offices/Medicos/{id}": {
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
                        "text/plain": components["schemas"]["MedicoDtoResponse"];
                        "application/json": components["schemas"]["MedicoDtoResponse"];
                        "text/json": components["schemas"]["MedicoDtoResponse"];
                    };
                };
            };
        };
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
                    "application/json": components["schemas"]["MedicoDto"];
                    "text/json": components["schemas"]["MedicoDto"];
                    "application/*+json": components["schemas"]["MedicoDto"];
                };
            };
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
            };
        };
        post?: never;
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
                        "text/plain": components["schemas"]["StringResponse"];
                        "application/json": components["schemas"]["StringResponse"];
                        "text/json": components["schemas"]["StringResponse"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offices/Medicos/{medicoId}/configuracion": {
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
                path: {
                    medicoId: string;
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
                        "text/plain": components["schemas"]["ObjectResponse"];
                        "application/json": components["schemas"]["ObjectResponse"];
                        "text/json": components["schemas"]["ObjectResponse"];
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
    "/offices/Pacientes": {
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
                        "text/plain": components["schemas"]["PacienteDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["PacienteDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["PacienteDtoIEnumerableResponse"];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["PacienteDto"];
                    "text/json": components["schemas"]["PacienteDto"];
                    "application/*+json": components["schemas"]["PacienteDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["PacienteDtoResponse"];
                        "application/json": components["schemas"]["PacienteDtoResponse"];
                        "text/json": components["schemas"]["PacienteDtoResponse"];
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
    "/offices/Pacientes/{id}": {
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
                        "text/plain": components["schemas"]["PacienteDtoResponse"];
                        "application/json": components["schemas"]["PacienteDtoResponse"];
                        "text/json": components["schemas"]["PacienteDtoResponse"];
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
    "/offices/Pacientes/{medicoId}/{sectorId}/{consultorioNumero}": {
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
                path: {
                    medicoId: string;
                    sectorId: number;
                    consultorioNumero: number;
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
                        "text/plain": components["schemas"]["PacienteDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["PacienteDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["PacienteDtoIEnumerableResponse"];
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
    "/offices/prefacturador/generar": {
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
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["PrefacturaDto"];
                    "text/json": components["schemas"]["PrefacturaDto"];
                    "application/*+json": components["schemas"]["PrefacturaDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["PrefacturaDtoResponse"];
                        "application/json": components["schemas"]["PrefacturaDtoResponse"];
                        "text/json": components["schemas"]["PrefacturaDtoResponse"];
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
    "/offices/prefacturador/{id}": {
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
                        "text/plain": components["schemas"]["PrefacturaDtoResponse"];
                        "application/json": components["schemas"]["PrefacturaDtoResponse"];
                        "text/json": components["schemas"]["PrefacturaDtoResponse"];
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
    "/offices/prefacturador": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    estado?: string;
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
                        "text/plain": components["schemas"]["PrefacturaDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["PrefacturaDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["PrefacturaDtoIEnumerableResponse"];
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
    "/offices/prefacturador/{id}/estado": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
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
                        "text/plain": components["schemas"]["StringResponse"];
                        "application/json": components["schemas"]["StringResponse"];
                        "text/json": components["schemas"]["StringResponse"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offices/QueueDisplayScreen": {
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
                        "text/plain": components["schemas"]["QueueDisplayScreenDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["QueueDisplayScreenDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["QueueDisplayScreenDtoIEnumerableResponse"];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["QueueDisplayScreenDto"];
                    "text/json": components["schemas"]["QueueDisplayScreenDto"];
                    "application/*+json": components["schemas"]["QueueDisplayScreenDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["QueueDisplayScreenDtoResponse"];
                        "application/json": components["schemas"]["QueueDisplayScreenDtoResponse"];
                        "text/json": components["schemas"]["QueueDisplayScreenDtoResponse"];
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
    "/offices/QueueDisplayScreen/{id}": {
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
                        "text/plain": components["schemas"]["QueueDisplayScreenDtoResponse"];
                        "application/json": components["schemas"]["QueueDisplayScreenDtoResponse"];
                        "text/json": components["schemas"]["QueueDisplayScreenDtoResponse"];
                    };
                };
            };
        };
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
                    "application/json": components["schemas"]["QueueDisplayScreenDto"];
                    "text/json": components["schemas"]["QueueDisplayScreenDto"];
                    "application/*+json": components["schemas"]["QueueDisplayScreenDto"];
                };
            };
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
            };
        };
        post?: never;
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
                        "text/plain": components["schemas"]["StringResponse"];
                        "application/json": components["schemas"]["StringResponse"];
                        "text/json": components["schemas"]["StringResponse"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offices/QueueDisplayScreen/DisplayInfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    fingerprint?: string;
                    tenantId?: string;
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
                        "text/plain": components["schemas"]["QueueDisplayScreenDtoResponse"];
                        "application/json": components["schemas"]["QueueDisplayScreenDtoResponse"];
                        "text/json": components["schemas"]["QueueDisplayScreenDtoResponse"];
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
    "/offices/QueueDisplayScreen/register": {
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
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["RegisterDisplayRequest"];
                    "text/json": components["schemas"]["RegisterDisplayRequest"];
                    "application/*+json": components["schemas"]["RegisterDisplayRequest"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["QueueDisplayScreenDtoResponse"];
                        "application/json": components["schemas"]["QueueDisplayScreenDtoResponse"];
                        "text/json": components["schemas"]["QueueDisplayScreenDtoResponse"];
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
    "/offices/Sectores": {
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
                        "text/plain": components["schemas"]["SectorDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["SectorDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["SectorDtoIEnumerableResponse"];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateSectorDto"];
                    "text/json": components["schemas"]["CreateSectorDto"];
                    "application/*+json": components["schemas"]["CreateSectorDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SectorDtoResponse"];
                        "application/json": components["schemas"]["SectorDtoResponse"];
                        "text/json": components["schemas"]["SectorDtoResponse"];
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
    "/offices/Sectores/{sectorId}": {
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
                path: {
                    sectorId: number;
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
                        "text/plain": components["schemas"]["SectorDtoResponse"];
                        "application/json": components["schemas"]["SectorDtoResponse"];
                        "text/json": components["schemas"]["SectorDtoResponse"];
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
    "/offices/Sectores/{sectorId}/getinfo": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    TenantId?: string;
                };
                header?: never;
                path: {
                    sectorId: number;
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
                        "text/plain": components["schemas"]["SectorDtoResponse"];
                        "application/json": components["schemas"]["SectorDtoResponse"];
                        "text/json": components["schemas"]["SectorDtoResponse"];
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
    "/offices/Sectores/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
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
                    "application/json": components["schemas"]["UpdateSectorDto"];
                    "text/json": components["schemas"]["UpdateSectorDto"];
                    "application/*+json": components["schemas"]["UpdateSectorDto"];
                };
            };
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
            };
        };
        post?: never;
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
                        "text/plain": components["schemas"]["StringResponse"];
                        "application/json": components["schemas"]["StringResponse"];
                        "text/json": components["schemas"]["StringResponse"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offices/Sectores/{sectorId}/estadisticas": {
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
                path: {
                    sectorId: number;
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
                        "text/plain": components["schemas"]["EstadisticasSectorDtoResponse"];
                        "application/json": components["schemas"]["EstadisticasSectorDtoResponse"];
                        "text/json": components["schemas"]["EstadisticasSectorDtoResponse"];
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
    "/offices/Sedes": {
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
                        "text/plain": components["schemas"]["SedeDtoIEnumerableResponse"];
                        "application/json": components["schemas"]["SedeDtoIEnumerableResponse"];
                        "text/json": components["schemas"]["SedeDtoIEnumerableResponse"];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SedeDto"];
                    "text/json": components["schemas"]["SedeDto"];
                    "application/*+json": components["schemas"]["SedeDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["SedeDtoResponse"];
                        "application/json": components["schemas"]["SedeDtoResponse"];
                        "text/json": components["schemas"]["SedeDtoResponse"];
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
    "/offices/Sedes/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
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
                    "application/json": components["schemas"]["SedeDto"];
                    "text/json": components["schemas"]["SedeDto"];
                    "application/*+json": components["schemas"]["SedeDto"];
                };
            };
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
            };
        };
        post?: never;
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
                        "text/plain": components["schemas"]["StringResponse"];
                        "application/json": components["schemas"]["StringResponse"];
                        "text/json": components["schemas"]["StringResponse"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/offices/Videos": {
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
                        "text/plain": components["schemas"]["VideoIEnumerableResponse"];
                        "application/json": components["schemas"]["VideoIEnumerableResponse"];
                        "text/json": components["schemas"]["VideoIEnumerableResponse"];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["Video"];
                    "text/json": components["schemas"]["Video"];
                    "application/*+json": components["schemas"]["Video"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "text/plain": components["schemas"]["VideoResponse"];
                        "application/json": components["schemas"]["VideoResponse"];
                        "text/json": components["schemas"]["VideoResponse"];
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
    "/offices/Videos/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
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
                    "application/json": components["schemas"]["Video"];
                    "text/json": components["schemas"]["Video"];
                    "application/*+json": components["schemas"]["Video"];
                };
            };
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
            };
        };
        post?: never;
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
                        "text/plain": components["schemas"]["StringResponse"];
                        "application/json": components["schemas"]["StringResponse"];
                        "text/json": components["schemas"]["StringResponse"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AsignacionDto: {
            medicoId: string | null;
            /** Format: int32 */
            consultorioId?: number;
        };
        AsignacionResponseDto: {
            /** Format: int32 */
            id?: number;
            medicoId?: string | null;
            consultorio?: components["schemas"]["ConsultorioDto"];
            /** Format: date-time */
            fechaInicio?: string;
        };
        AsignacionResponseDtoIEnumerableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AsignacionResponseDto"][] | null;
        };
        AsignacionResponseDtoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["AsignacionResponseDto"];
        };
        ConsultorioDto: {
            /** Format: int32 */
            id?: number;
            name: string | null;
            number: string;
            /** Format: int32 */
            sectorId?: number | null;
            status?: string | null;
            medicoId?: string | null;
            asignaciones?: components["schemas"]["AsignacionDto"][] | null;
        };
        ConsultorioDtoIEnumerableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ConsultorioDto"][] | null;
        };
        ConsultorioDtoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["ConsultorioDto"];
        };
        CrearLlamadoDto: {
            medicoId: string | null;
            nombrePaciente: string | null;
        };
        CreateSectorDto: {
            number: string;
            name: string;
            /** Format: int32 */
            branchId: number;
            consultorios?: number[] | null;
        };
        EstadisticasSectorDto: {
            /** Format: int32 */
            totalConsultorios?: number;
            /** Format: int32 */
            disponibles?: number;
            /** Format: int32 */
            ocupados?: number;
        };
        EstadisticasSectorDtoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["EstadisticasSectorDto"];
        };
        HistoriaClinica: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            pacienteId?: number;
            diagnostico?: string | null;
            /** Format: date-time */
            fecha?: string;
        };
        HistoriaClinicaResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["HistoriaClinica"];
        };
        Int32Response: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            /** Format: int32 */
            data?: number;
        };
        LlamadoDto: {
            /** Format: int32 */
            id?: number;
            nombrePaciente: string;
            medicoId: string | null;
            /** Format: int32 */
            consultorioId: number;
            consultorio?: components["schemas"]["ConsultorioDto"];
            /** Format: int32 */
            sectorId: number;
            /** Format: date-time */
            fechaHoraLlamado?: string | null;
        };
        LlamadoDtoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["LlamadoDto"];
        };
        LlamadosListDto: {
            /** Format: int32 */
            id?: number;
            nombrePaciente?: string | null;
            fechaHoraLlamado?: string | null;
            consultorioNumero?: string | null;
        };
        LlamadosListDtoIEnumerableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["LlamadosListDto"][] | null;
        };
        MedicoDto: {
            /** Format: int32 */
            id?: number;
            name: string;
            lastName: string;
            specialty: string;
            /** Format: int32 */
            sectorId: number;
        };
        MedicoDtoIEnumerableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MedicoDto"][] | null;
        };
        MedicoDtoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["MedicoDto"];
        };
        ObjectResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: unknown;
        };
        PacienteDto: {
            /** Format: int32 */
            id?: number;
            nombre?: string | null;
            apellido?: string | null;
            estado?: string | null;
            /** Format: date-time */
            fechaRegistro?: string;
            /** Format: int32 */
            consultorioNumero?: number;
            ultimoMedicoAsignado?: string | null;
        };
        PacienteDtoIEnumerableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PacienteDto"][] | null;
        };
        PacienteDtoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PacienteDto"];
        };
        PrefacturaDto: {
            /** Format: int32 */
            id?: number;
            /** Format: int32 */
            pacienteId?: number;
            servicios?: string[] | null;
            /** Format: double */
            total?: number;
            estado?: string | null;
            /** Format: date-time */
            fechaCreacion?: string;
        };
        PrefacturaDtoIEnumerableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PrefacturaDto"][] | null;
        };
        PrefacturaDtoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["PrefacturaDto"];
        };
        QueueDisplayScreenDto: {
            /** Format: int32 */
            id?: number;
            registrationNumber?: string | null;
            fingerprint?: string | null;
            name?: string | null;
            description?: string | null;
            /** Format: int32 */
            sedeId?: number | null;
            /** Format: int32 */
            sectorId?: number | null;
            isActive?: boolean;
        };
        QueueDisplayScreenDtoIEnumerableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["QueueDisplayScreenDto"][] | null;
        };
        QueueDisplayScreenDtoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["QueueDisplayScreenDto"];
        };
        RegisterDisplayRequest: {
            registrationNumber?: string | null;
            fingerPrint?: string | null;
            tenant?: string | null;
        };
        SectorDto: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            /** Format: int32 */
            branchId?: number;
            branch?: components["schemas"]["SedeDto"];
            consultingRooms?: components["schemas"]["ConsultorioDto"][] | null;
        };
        SectorDtoIEnumerableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SectorDto"][] | null;
        };
        SectorDtoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SectorDto"];
        };
        SedeDto: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            direccion?: string | null;
            consultorios?: components["schemas"]["ConsultorioDto"][] | null;
        };
        SedeDtoIEnumerableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SedeDto"][] | null;
        };
        SedeDtoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["SedeDto"];
        };
        StringResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: string | null;
        };
        UpdateSectorDto: {
            /** Format: int32 */
            id?: number;
            name?: string | null;
            consultorios?: number[] | null;
            /** Format: int32 */
            branchId?: number | null;
        };
        Video: {
            /** Format: int32 */
            id?: number;
            url: string;
            nombre?: string | null;
            descripcion?: string | null;
            /** Format: date-time */
            fechaCreacion?: string;
        };
        VideoIEnumerableResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["Video"][] | null;
        };
        VideoResponse: {
            succeeded?: boolean;
            message?: string | null;
            errors?: string[] | null;
            data?: components["schemas"]["Video"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
