# Aprendizajes: Prebiller Gateway API

## Estructura de respuestas

Todas las respuestas del gateway siguen el envelope:

```json
{
  "succeeded": true,
  "message": "...",
  "errors": [],
  "data": [...]
}
```

Tipo TypeScript: `GatewayEnvelope<TData>` en `src/api/openapi.ts`.

## Headers requeridos

- `Authorization: Bearer {token}` — inyectado automáticamente por `useApiClient()`.
- `X-Requested-With: PatientServices.APP` — identificador de la app cliente.
- Ambos los setea `useApiClient.ts`, no hay que agregarlos manualmente.

## Módulos integrados (24 de 25)

Los 25 módulos están generados en `src/api/generated/modules/`. Estado actual:

| Estado | Módulos |
|--------|---------|
| Funcionando | specialties, medicalservices, medicalinsurances, turnero, agreements, contracts, providers, sponsors, practitioners, pricelists, snowmed, aggregators, persons, concepts, protocols, settlements, cashflow, tenant-aggregators, y más |
| Error HTTP 500 | notifications |

## Endpoints sin list-all

Estos módulos no tienen un GET que devuelva todos los registros:

- **pricelists** — todos los endpoints requieren `priceListId` u otro path param.
- Para mostrarlos en dashboard se necesitaría un flujo de búsqueda/selección previa.

## Turnero: endpoints útiles sin parámetros

El módulo turnero tiene 7 endpoints que no requieren parámetros:

```
GET /offices/Medicos              → lista de médicos
GET /offices/Sectores             → lista de sectores
GET /offices/Consultorios         → lista de consultorios
GET /offices/Asignaciones/activas → asignaciones activas
GET /offices/Consultorios/todos-disponibles → consultorios disponibles
GET /offices/Pacientes            → pacientes en espera
GET /offices/QueueDisplayScreen   → pantalla de turnos
```

**Lección:** Antes de agregar un módulo al dashboard, verificar si tiene un endpoint list-all sin parámetros obligatorios. Revisar `src/api/generated/modules/{modulo}.ts`.

## Generación de tipos

```bash
npm run api:generate
```

- Lee la spec swagger del gateway en producción.
- Genera tipos TypeScript en `src/api/generated/contracts/`.
- Genera funciones de API en `src/api/generated/modules/`.
- El manifiesto en `src/api/generated/manifest.ts` lista todos los módulos y su estado.

## Patrón para agregar un nuevo módulo al dashboard

1. Crear hook en `src/hooks/use{NombreModulo}.ts` siguiendo el patrón de `useSpecialties.ts`.
2. Importar el hook en `WorkspacePage.tsx`.
3. Agregar al `reloadAll()`.
4. Agregar card en el JSX con eyebrow, título, y endpoint.
5. Verificar con `npm run build`.
