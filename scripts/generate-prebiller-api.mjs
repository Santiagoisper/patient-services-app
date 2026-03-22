import fs from 'node:fs/promises'
import path from 'node:path'
import openapiTS, { astToString } from 'openapi-typescript'

const repoRoot = process.cwd()
const generatedRoot = path.join(repoRoot, 'src', 'api', 'generated')
const contractsRoot = path.join(generatedRoot, 'contracts')
const modulesRoot = path.join(generatedRoot, 'modules')
const docsRoot = path.join(repoRoot, 'docs')

const modules = [
  ['pricelists', 'Price Lists API', '/apis/prebiller-gateway/swagger/docs/v1/pricelists'],
  ['medicalinsurances', 'Medical Insurances API', '/apis/prebiller-gateway/swagger/docs/v1/medicalinsurances'],
  ['medicalservices', 'Medical Services API', '/apis/prebiller-gateway/swagger/docs/v1/medicalservices'],
  ['agreements', 'Medical Agreements API', '/apis/prebiller-gateway/swagger/docs/v1/agreements'],
  ['snowmed', 'Snowmed API', '/apis/prebiller-gateway/swagger/docs/v1/snowmed'],
  ['agreementsaggregator', 'Medical Agreements Aggregators API', '/apis/prebiller-gateway/swagger/docs/v1/agreementsaggregator'],
  ['persons', 'Persons API', '/apis/prebiller-gateway/swagger/docs/v1/persons'],
  ['providers', 'Providers API', '/apis/prebiller-gateway/swagger/docs/v1/providers'],
  ['providerassociation', 'Provider Association API', '/apis/prebiller-gateway/swagger/docs/v1/providerassociation'],
  ['provideraggregator', 'Provider Aggregator API', '/apis/prebiller-gateway/swagger/docs/v1/provideraggregator'],
  ['sponsors', 'Sponsors API', '/apis/prebiller-gateway/swagger/docs/v1/sponsors'],
  ['contracts', 'Contracts API', '/apis/prebiller-gateway/swagger/docs/v1/contracts'],
  ['sponsorcontracts', 'SponsorContracts API', '/apis/prebiller-gateway/swagger/docs/v1/sponsorcontracts'],
  ['practitioners', 'Practitioners Associations API', '/apis/prebiller-gateway/swagger/docs/v1/practitioners'],
  ['practitionersaggregator', 'Practitioners Aggregator API', '/apis/prebiller-gateway/swagger/docs/v1/practitionersaggregator'],
  ['concepts', 'Concepts API', '/apis/prebiller-gateway/swagger/docs/v1/concepts'],
  ['tenantaggregator', 'Tenant Aggregator API', '/apis/prebiller-gateway/swagger/docs/v1/tenantaggregator'],
  ['tenantpricelists', 'Tenant Price Lists API', '/apis/prebiller-gateway/swagger/docs/v1/tenantpricelists'],
  ['protocols', 'Protocols API', '/apis/prebiller-gateway/swagger/docs/v1/protocols'],
  ['notifications', 'Notification API', '/apis/prebiller-gateway/swagger/docs/v1/notifications'],
  ['settlements', 'Liquidaciones API', '/apis/prebiller-gateway/swagger/docs/v1/settlements'],
  ['cashflow', 'Cashflow API', '/apis/prebiller-gateway/swagger/docs/v1/cashflow'],
  ['ia', 'IA API', '/apis/prebiller-gateway/swagger/docs/v1/ia'],
  ['turnero', 'Turnero API', '/apis/prebiller-gateway/swagger/docs/v1/turnero'],
  ['specialties', 'Medical Specialties API', '/apis/prebiller-gateway/swagger/docs/v1/specialties'],
]

const baseUrl = 'https://prebiller.hc.alpha-cr.com'
const httpMethods = ['get', 'post', 'put', 'patch', 'delete']

function pascalCase(value) {
  const normalized = value
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('')

  return normalized || 'Operation'
}

function camelCase(value) {
  const asPascal = pascalCase(value)
  return asPascal.charAt(0).toLowerCase() + asPascal.slice(1)
}

function sanitizeOperationName(value, method, routePath) {
  if (value) {
    return camelCase(value)
  }

  const fallback = `${method}-${routePath}`
    .replace(/[{}]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
  return camelCase(fallback)
}

function serviceFactoryName(slug) {
  return `create${pascalCase(slug)}Api`
}

function operationAliasName(method, routePath) {
  return `${pascalCase(`${method} ${routePath}`)}Operation`
}

function argsTypeName(method, routePath) {
  return `${pascalCase(`${method} ${routePath}`)}Args`
}

function responseTypeName(method, routePath) {
  return `${pascalCase(`${method} ${routePath}`)}Response`
}

function bodyTypeName(method, routePath) {
  return `${pascalCase(`${method} ${routePath}`)}Body`
}

function pathTypeName(method, routePath) {
  return `${pascalCase(`${method} ${routePath}`)}PathParams`
}

function queryTypeName(method, routePath) {
  return `${pascalCase(`${method} ${routePath}`)}QueryParams`
}

function isPathRequired(operation) {
  return (operation.parameters ?? []).some((parameter) => parameter.in === 'path')
}

function hasQuery(operation) {
  return (operation.parameters ?? []).some((parameter) => parameter.in === 'query')
}

function hasBody(operation) {
  return Boolean(operation.requestBody)
}

function generateArgsBlock(method, routePath, operation) {
  const argsName = argsTypeName(method, routePath)
  const lines = [`export type ${argsName} = RequestOptionsBase & {`]

  if (isPathRequired(operation)) {
    lines.push(`  path: ${pathTypeName(method, routePath)}`)
  }

  if (hasQuery(operation)) {
    lines.push(`  query?: ${queryTypeName(method, routePath)}`)
  }

  if (hasBody(operation)) {
    lines.push(`  body: ${bodyTypeName(method, routePath)}`)
  }

  lines.push('}')
  return lines.join('\n')
}

function generateOperationBlock(routePath, method, operation) {
  const rawOperationId = operation.operationId || `${method}-${routePath}`
  const operationId = pascalCase(rawOperationId)
  const functionName = sanitizeOperationName(operation.operationId, method, routePath)
  const operationAlias = operationAliasName(method, routePath)
  const responseAlias = responseTypeName(method, routePath)
  const argsAlias = argsTypeName(method, routePath)
  const pathAlias = pathTypeName(method, routePath)
  const queryAlias = queryTypeName(method, routePath)
  const bodyAlias = bodyTypeName(method, routePath)
  const routeLiteral = JSON.stringify(routePath)

  const lines = [
    `export type ${operationAlias} = paths[${routeLiteral}]['${method}']`,
    `export type ${responseAlias} = OperationResponse<${operationAlias}>`,
  ]

  if (isPathRequired(operation)) {
    lines.push(`export type ${pathAlias} = OperationPathParams<${operationAlias}>`)
  }

  if (hasQuery(operation)) {
    lines.push(`export type ${queryAlias} = OperationQueryParams<${operationAlias}>`)
  }

  if (hasBody(operation)) {
    lines.push(`export type ${bodyAlias} = OperationRequestBody<${operationAlias}>`)
  }

  lines.push(generateArgsBlock(method, routePath, operation))

  const requestLines = [
    `    ${functionName}(args: ${argsAlias}${isPathRequired(operation) || hasQuery(operation) || hasBody(operation) ? '' : ' = {}'}) {`,
    `      return client.request<${responseAlias}>({`,
        `        method: '${method.toUpperCase()}',`,
        `        path: '${routePath}',`,
  ]

  if (isPathRequired(operation)) {
    requestLines.push('        pathParams: args.path as PathParams,')
  }

  if (hasQuery(operation)) {
    requestLines.push('        query: args.query as QueryParams | undefined,')
  }

  if (hasBody(operation)) {
    requestLines.push('        body: args.body,')
  }

  requestLines.push('        headers: args.headers,')
  requestLines.push('        signal: args.signal,')
  requestLines.push('      })')
  requestLines.push('    },')

  return {
    typeBlock: lines.join('\n'),
    functionBlock: requestLines.join('\n'),
    usesPath: isPathRequired(operation),
    usesQuery: hasQuery(operation),
    usesBody: hasBody(operation),
    endpoint: {
      method: method.toUpperCase(),
      path: routePath,
      operationId: rawOperationId,
      summary: operation.summary || '',
      tag: operation.tags?.[0] || null,
    },
  }
}

async function ensureDir(target) {
  await fs.mkdir(target, { recursive: true })
}

async function fetchSpec(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`)
  }

  return response.json()
}

function generateStubModule(slug, displayName, reason) {
  const factoryName = serviceFactoryName(slug)
  return `import type { HttpClient } from '../../httpClient.ts'\n\nexport const ${camelCase(
    `${slug}-status`,
  )} = {\n  status: 'stub',\n  reason: ${JSON.stringify(reason)},\n} as const\n\nexport function ${factoryName}(_client: HttpClient) {\n  return {}\n}\n`
}

function generateModuleSource(slug, operations) {
  const factoryName = serviceFactoryName(slug)
  const typeBlocks = []
  const functionBlocks = []
  const needsPathTypes = operations.some((operation) => operation.usesPath)
  const needsQueryTypes = operations.some((operation) => operation.usesQuery)
  const needsBodyTypes = operations.some((operation) => operation.usesBody)
  const importLines = ["import type { HttpClient"]

  if (needsPathTypes) {
    importLines.push(', PathParams')
  }

  if (needsQueryTypes) {
    importLines.push(', QueryParams')
  }

  importLines.push(" } from '../../httpClient.ts'")
  const openapiImports = ['OperationResponse', 'RequestOptionsBase']
  if (needsPathTypes) {
    openapiImports.push('OperationPathParams')
  }
  if (needsQueryTypes) {
    openapiImports.push('OperationQueryParams')
  }
  if (needsBodyTypes) {
    openapiImports.push('OperationRequestBody')
  }

  for (const operation of operations) {
    typeBlocks.push(operation.typeBlock)
    functionBlocks.push(operation.functionBlock)
  }

  return `${importLines.join('')}\nimport type {\n  ${openapiImports.join(',\n  ')},\n} from '../../openapi.ts'\nimport type { paths } from '../contracts/${slug}.ts'\n\n${typeBlocks.join(
    '\n\n',
  )}\n\nexport function ${factoryName}(client: HttpClient) {\n  return {\n${functionBlocks.join(
    '\n',
  )}\n  }\n}\n`
}

async function writeFile(target, contents) {
  await fs.writeFile(target, contents.replace(/\r?\n/g, '\n'))
}

const manifest = []
const gatewayIndexImports = []
const gatewayIndexFactories = []

await ensureDir(contractsRoot)
await ensureDir(modulesRoot)
await ensureDir(docsRoot)

for (const [slug, displayName, specPath] of modules) {
  const specUrl = `${baseUrl}${specPath}`

  try {
    const spec = await fetchSpec(specUrl)
    const pathEntries = Object.entries(spec.paths ?? {})

    if (pathEntries.length === 0) {
      await writeFile(
        path.join(modulesRoot, `${slug}.ts`),
        generateStubModule(slug, displayName, 'Swagger document has no published paths.'),
      )
      manifest.push({
        slug,
        displayName,
        specUrl,
        status: 'empty',
        endpointCount: 0,
        endpoints: [],
      })
      gatewayIndexImports.push(`import { ${serviceFactoryName(slug)} } from './modules/${slug}.ts'`)
      gatewayIndexFactories.push(`    ${slug}: ${serviceFactoryName(slug)}(client),`)
      continue
    }

    const contractAst = await openapiTS(spec)
    await writeFile(path.join(contractsRoot, `${slug}.ts`), astToString(contractAst))

    const operations = []
    for (const [routePath, pathItem] of pathEntries) {
      for (const method of httpMethods) {
        const operation = pathItem?.[method]
        if (!operation) {
          continue
        }

        operations.push(generateOperationBlock(routePath, method, operation))
      }
    }

    await writeFile(path.join(modulesRoot, `${slug}.ts`), generateModuleSource(slug, operations))
    manifest.push({
      slug,
      displayName,
      specUrl,
      status: 'integrated',
      endpointCount: operations.length,
      endpoints: operations.map((operation) => operation.endpoint),
    })
    gatewayIndexImports.push(`import { ${serviceFactoryName(slug)} } from './modules/${slug}.ts'`)
    gatewayIndexFactories.push(`    ${slug}: ${serviceFactoryName(slug)}(client),`)
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'Unknown gateway error'
    await writeFile(path.join(modulesRoot, `${slug}.ts`), generateStubModule(slug, displayName, reason))
    manifest.push({
      slug,
      displayName,
      specUrl,
      status: 'error',
      endpointCount: 0,
      error: reason,
      endpoints: [],
    })
    gatewayIndexImports.push(`import { ${serviceFactoryName(slug)} } from './modules/${slug}.ts'`)
    gatewayIndexFactories.push(`    ${slug}: ${serviceFactoryName(slug)}(client),`)
  }
}

await writeFile(
  path.join(generatedRoot, 'index.ts'),
  `${gatewayIndexImports.join('\n')}\nimport type { HttpClient } from '../httpClient.ts'\nimport manifest from './manifest.ts'\n\nexport { default as gatewayManifest } from './manifest.ts'\n\nexport function createGatewayApi(client: HttpClient) {\n  return {\n${gatewayIndexFactories.join(
    '\n',
  )}\n  }\n}\n\nexport type GatewayApi = ReturnType<typeof createGatewayApi>\nexport { manifest }\n`,
)

await writeFile(
  path.join(generatedRoot, 'manifest.ts'),
  `const manifest = ${JSON.stringify(manifest, null, 2)} as const\n\nexport default manifest\n`,
)

const lines = [
  '# Prebiller Gateway Integration',
  '',
  `Generated on ${new Date().toISOString()}.`,
  '',
  '## Module Status',
  '',
]

for (const entry of manifest) {
  lines.push(`- \`${entry.slug}\`: ${entry.status} (${entry.endpointCount} endpoints)`)
  if (entry.error) {
    lines.push(`  error: ${entry.error}`)
  }
}

lines.push('', '## Integrated Endpoints', '')

for (const entry of manifest.filter((item) => item.status === 'integrated')) {
  lines.push(`### ${entry.displayName}`)
  lines.push('')
  for (const endpoint of entry.endpoints) {
    lines.push(
      `- \`${endpoint.method} ${endpoint.path}\` -> \`${endpoint.operationId}\`${endpoint.summary ? `: ${endpoint.summary}` : ''}`,
    )
  }
  lines.push('')
}

await writeFile(path.join(docsRoot, 'PREBILLER_GATEWAY_ENDPOINTS.md'), lines.join('\n'))
console.log(`Generated ${manifest.length} gateway modules.`)
