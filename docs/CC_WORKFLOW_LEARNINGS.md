# Aprendizajes: Workflow con Claude Code

## Cómo arrancamos

El proyecto se inició desde cero con Vite + React + TypeScript. CC (Claude Code) construyó toda la capa de autenticación OIDC y la integración con el gateway en las primeras sesiones.

## Flujo de trabajo efectivo

### 1. Handoff document funciona

El archivo `docs/CC_HANDOFF.md` define qué tocar y qué no. CC lo respeta consistentemente. Es la forma más efectiva de dar contexto persistente entre sesiones.

### 2. CLAUDE.md para contexto automático

`CLAUDE.md` en la raíz del repo es leído automáticamente por CC al iniciar sesión. Ideal para:
- Restricciones arquitectónicas
- Comandos del proyecto
- Bugs conocidos
- Convenciones de código

### 3. Planificación antes de ejecución

CC trabaja mejor cuando planifica antes de codear. El flujo ideal:
1. Pedir que explore/investigue primero (ej: "¿qué endpoints del turnero no necesitan params?").
2. Revisar el hallazgo juntos.
3. Pedir la implementación con el contexto ya claro.

### 4. Commits incrementales

Cada feature en su propio commit con mensaje descriptivo:
```
d314b29 Initial Vite React TS setup
f70c9df Add OIDC foundation and generated Prebiller gateway layer
79920ca feat: build workspace dashboard with 3 real gateway modules
560625c feat: expand workspace with turnero modules (medicos + sectores)
```

Esto facilita el rollback y la revisión.

## Qué funciona bien con CC

- **Generación de código repetitivo:** hooks de API, componentes con patrón conocido.
- **Exploración de APIs:** CC analiza swagger specs y encuentra endpoints útiles rápidamente.
- **Detección de limitaciones:** identifica módulos sin list-all, bugs en discovery documents.
- **Respeto de boundaries:** si le decís "no toques auth", no lo toca.

## Qué requiere supervisión

- **Decisiones de arquitectura:** CC propone, pero el humano decide. Siempre revisar antes de aprobar.
- **Integración con servicios externos:** verificar que los endpoints realmente responden lo esperado (ej: notifications devuelve 500).
- **Push a branches:** confirmar el branch correcto antes de pushear.

## Tips operativos

1. **Ser específico:** "Agregá el módulo turnero con Medicos y Sectores" > "Agregá más módulos".
2. **Validar builds:** siempre pedir `npm run build` después de cambios.
3. **Documentar hallazgos:** si CC descubre algo (un bug, una limitación), pedirle que lo documente inmediatamente.
4. **Branches dedicados:** trabajar en feature branches, nunca directamente en main.
5. **Fetch antes de asumir:** `git fetch origin` para sincronizar refs remotas antes de comparar.
