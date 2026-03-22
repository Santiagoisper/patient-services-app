import type { HttpClient, PathParams } from '../../httpClient.ts'
import type {
  OperationResponse,
  RequestOptionsBase,
  OperationPathParams,
  OperationRequestBody,
} from '../../openapi.ts'
import type { paths } from '../contracts/ia.ts'

export type PostIaApiVVersionAiChatOperation = paths["/ia/api/v{version}/Ai/chat"]['post']
export type PostIaApiVVersionAiChatResponse = OperationResponse<PostIaApiVVersionAiChatOperation>
export type PostIaApiVVersionAiChatPathParams = OperationPathParams<PostIaApiVVersionAiChatOperation>
export type PostIaApiVVersionAiChatBody = OperationRequestBody<PostIaApiVVersionAiChatOperation>
export type PostIaApiVVersionAiChatArgs = RequestOptionsBase & {
  path: PostIaApiVVersionAiChatPathParams
  body: PostIaApiVVersionAiChatBody
}

export type PostIaApiVVersionAiEmbedOperation = paths["/ia/api/v{version}/Ai/embed"]['post']
export type PostIaApiVVersionAiEmbedResponse = OperationResponse<PostIaApiVVersionAiEmbedOperation>
export type PostIaApiVVersionAiEmbedPathParams = OperationPathParams<PostIaApiVVersionAiEmbedOperation>
export type PostIaApiVVersionAiEmbedBody = OperationRequestBody<PostIaApiVVersionAiEmbedOperation>
export type PostIaApiVVersionAiEmbedArgs = RequestOptionsBase & {
  path: PostIaApiVVersionAiEmbedPathParams
  body: PostIaApiVVersionAiEmbedBody
}

export type PostIaApiVVersionContractMultiFileExtractOperation = paths["/ia/api/v{version}/ContractMultiFile/extract"]['post']
export type PostIaApiVVersionContractMultiFileExtractResponse = OperationResponse<PostIaApiVVersionContractMultiFileExtractOperation>
export type PostIaApiVVersionContractMultiFileExtractPathParams = OperationPathParams<PostIaApiVVersionContractMultiFileExtractOperation>
export type PostIaApiVVersionContractMultiFileExtractBody = OperationRequestBody<PostIaApiVVersionContractMultiFileExtractOperation>
export type PostIaApiVVersionContractMultiFileExtractArgs = RequestOptionsBase & {
  path: PostIaApiVVersionContractMultiFileExtractPathParams
  body: PostIaApiVVersionContractMultiFileExtractBody
}

export type PostIaApiVVersionContractMultiFileExtractStagesOperation = paths["/ia/api/v{version}/ContractMultiFile/extract/stages"]['post']
export type PostIaApiVVersionContractMultiFileExtractStagesResponse = OperationResponse<PostIaApiVVersionContractMultiFileExtractStagesOperation>
export type PostIaApiVVersionContractMultiFileExtractStagesPathParams = OperationPathParams<PostIaApiVVersionContractMultiFileExtractStagesOperation>
export type PostIaApiVVersionContractMultiFileExtractStagesBody = OperationRequestBody<PostIaApiVVersionContractMultiFileExtractStagesOperation>
export type PostIaApiVVersionContractMultiFileExtractStagesArgs = RequestOptionsBase & {
  path: PostIaApiVVersionContractMultiFileExtractStagesPathParams
  body: PostIaApiVVersionContractMultiFileExtractStagesBody
}

export type PostIaApiVVersionContractMultiFileExtractConceptsOperation = paths["/ia/api/v{version}/ContractMultiFile/extract/concepts"]['post']
export type PostIaApiVVersionContractMultiFileExtractConceptsResponse = OperationResponse<PostIaApiVVersionContractMultiFileExtractConceptsOperation>
export type PostIaApiVVersionContractMultiFileExtractConceptsPathParams = OperationPathParams<PostIaApiVVersionContractMultiFileExtractConceptsOperation>
export type PostIaApiVVersionContractMultiFileExtractConceptsBody = OperationRequestBody<PostIaApiVVersionContractMultiFileExtractConceptsOperation>
export type PostIaApiVVersionContractMultiFileExtractConceptsArgs = RequestOptionsBase & {
  path: PostIaApiVVersionContractMultiFileExtractConceptsPathParams
  body: PostIaApiVVersionContractMultiFileExtractConceptsBody
}

export type PostIaApiVVersionContractMultiFileExtractSchedulesOperation = paths["/ia/api/v{version}/ContractMultiFile/extract/schedules"]['post']
export type PostIaApiVVersionContractMultiFileExtractSchedulesResponse = OperationResponse<PostIaApiVVersionContractMultiFileExtractSchedulesOperation>
export type PostIaApiVVersionContractMultiFileExtractSchedulesPathParams = OperationPathParams<PostIaApiVVersionContractMultiFileExtractSchedulesOperation>
export type PostIaApiVVersionContractMultiFileExtractSchedulesBody = OperationRequestBody<PostIaApiVVersionContractMultiFileExtractSchedulesOperation>
export type PostIaApiVVersionContractMultiFileExtractSchedulesArgs = RequestOptionsBase & {
  path: PostIaApiVVersionContractMultiFileExtractSchedulesPathParams
  body: PostIaApiVVersionContractMultiFileExtractSchedulesBody
}

export type PostIaApiVVersionContractMultiFileAnalyzeSimpleOperation = paths["/ia/api/v{version}/ContractMultiFile/analyze/simple"]['post']
export type PostIaApiVVersionContractMultiFileAnalyzeSimpleResponse = OperationResponse<PostIaApiVVersionContractMultiFileAnalyzeSimpleOperation>
export type PostIaApiVVersionContractMultiFileAnalyzeSimplePathParams = OperationPathParams<PostIaApiVVersionContractMultiFileAnalyzeSimpleOperation>
export type PostIaApiVVersionContractMultiFileAnalyzeSimpleBody = OperationRequestBody<PostIaApiVVersionContractMultiFileAnalyzeSimpleOperation>
export type PostIaApiVVersionContractMultiFileAnalyzeSimpleArgs = RequestOptionsBase & {
  path: PostIaApiVVersionContractMultiFileAnalyzeSimplePathParams
  body: PostIaApiVVersionContractMultiFileAnalyzeSimpleBody
}

export type PostIaApiVVersionContractPdfExtractOperation = paths["/ia/api/v{version}/ContractPdf/extract"]['post']
export type PostIaApiVVersionContractPdfExtractResponse = OperationResponse<PostIaApiVVersionContractPdfExtractOperation>
export type PostIaApiVVersionContractPdfExtractPathParams = OperationPathParams<PostIaApiVVersionContractPdfExtractOperation>
export type PostIaApiVVersionContractPdfExtractBody = OperationRequestBody<PostIaApiVVersionContractPdfExtractOperation>
export type PostIaApiVVersionContractPdfExtractArgs = RequestOptionsBase & {
  path: PostIaApiVVersionContractPdfExtractPathParams
  body: PostIaApiVVersionContractPdfExtractBody
}

export type PostIaApiVVersionPdfAnalysisAnalyzeOperation = paths["/ia/api/v{version}/PdfAnalysis/analyze"]['post']
export type PostIaApiVVersionPdfAnalysisAnalyzeResponse = OperationResponse<PostIaApiVVersionPdfAnalysisAnalyzeOperation>
export type PostIaApiVVersionPdfAnalysisAnalyzePathParams = OperationPathParams<PostIaApiVVersionPdfAnalysisAnalyzeOperation>
export type PostIaApiVVersionPdfAnalysisAnalyzeBody = OperationRequestBody<PostIaApiVVersionPdfAnalysisAnalyzeOperation>
export type PostIaApiVVersionPdfAnalysisAnalyzeArgs = RequestOptionsBase & {
  path: PostIaApiVVersionPdfAnalysisAnalyzePathParams
  body: PostIaApiVVersionPdfAnalysisAnalyzeBody
}

export type PostIaApiVVersionPdfAnalysisAnalyzeSimpleOperation = paths["/ia/api/v{version}/PdfAnalysis/analyze/simple"]['post']
export type PostIaApiVVersionPdfAnalysisAnalyzeSimpleResponse = OperationResponse<PostIaApiVVersionPdfAnalysisAnalyzeSimpleOperation>
export type PostIaApiVVersionPdfAnalysisAnalyzeSimplePathParams = OperationPathParams<PostIaApiVVersionPdfAnalysisAnalyzeSimpleOperation>
export type PostIaApiVVersionPdfAnalysisAnalyzeSimpleBody = OperationRequestBody<PostIaApiVVersionPdfAnalysisAnalyzeSimpleOperation>
export type PostIaApiVVersionPdfAnalysisAnalyzeSimpleArgs = RequestOptionsBase & {
  path: PostIaApiVVersionPdfAnalysisAnalyzeSimplePathParams
  body: PostIaApiVVersionPdfAnalysisAnalyzeSimpleBody
}

export type PostIaApiVVersionPdfAnalysisAnalyzeUploadOperation = paths["/ia/api/v{version}/PdfAnalysis/analyze/upload"]['post']
export type PostIaApiVVersionPdfAnalysisAnalyzeUploadResponse = OperationResponse<PostIaApiVVersionPdfAnalysisAnalyzeUploadOperation>
export type PostIaApiVVersionPdfAnalysisAnalyzeUploadPathParams = OperationPathParams<PostIaApiVVersionPdfAnalysisAnalyzeUploadOperation>
export type PostIaApiVVersionPdfAnalysisAnalyzeUploadBody = OperationRequestBody<PostIaApiVVersionPdfAnalysisAnalyzeUploadOperation>
export type PostIaApiVVersionPdfAnalysisAnalyzeUploadArgs = RequestOptionsBase & {
  path: PostIaApiVVersionPdfAnalysisAnalyzeUploadPathParams
  body: PostIaApiVVersionPdfAnalysisAnalyzeUploadBody
}

export function createIaApi(client: HttpClient) {
  return {
    postIaApiVversionAiChat(args: PostIaApiVVersionAiChatArgs) {
      return client.request<PostIaApiVVersionAiChatResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/Ai/chat',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    postIaApiVversionAiEmbed(args: PostIaApiVVersionAiEmbedArgs) {
      return client.request<PostIaApiVVersionAiEmbedResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/Ai/embed',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    extractContractFromMultipleFiles(args: PostIaApiVVersionContractMultiFileExtractArgs) {
      return client.request<PostIaApiVVersionContractMultiFileExtractResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/ContractMultiFile/extract',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    extractStagesFromMultipleFiles(args: PostIaApiVVersionContractMultiFileExtractStagesArgs) {
      return client.request<PostIaApiVVersionContractMultiFileExtractStagesResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/ContractMultiFile/extract/stages',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    extractConceptsFromMultipleFiles(args: PostIaApiVVersionContractMultiFileExtractConceptsArgs) {
      return client.request<PostIaApiVVersionContractMultiFileExtractConceptsResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/ContractMultiFile/extract/concepts',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    extractSchedulesFromMultipleFiles(args: PostIaApiVVersionContractMultiFileExtractSchedulesArgs) {
      return client.request<PostIaApiVVersionContractMultiFileExtractSchedulesResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/ContractMultiFile/extract/schedules',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    analyzeMultipleFilesSimple(args: PostIaApiVVersionContractMultiFileAnalyzeSimpleArgs) {
      return client.request<PostIaApiVVersionContractMultiFileAnalyzeSimpleResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/ContractMultiFile/analyze/simple',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    extractContractFromPdf(args: PostIaApiVVersionContractPdfExtractArgs) {
      return client.request<PostIaApiVVersionContractPdfExtractResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/ContractPdf/extract',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    analyzePdf(args: PostIaApiVVersionPdfAnalysisAnalyzeArgs) {
      return client.request<PostIaApiVVersionPdfAnalysisAnalyzeResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/PdfAnalysis/analyze',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    analyzePdfSimpleUpload(args: PostIaApiVVersionPdfAnalysisAnalyzeSimpleArgs) {
      return client.request<PostIaApiVVersionPdfAnalysisAnalyzeSimpleResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/PdfAnalysis/analyze/simple',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
    analyzePdfUpload(args: PostIaApiVVersionPdfAnalysisAnalyzeUploadArgs) {
      return client.request<PostIaApiVVersionPdfAnalysisAnalyzeUploadResponse>({
        method: 'POST',
        path: '/ia/api/v{version}/PdfAnalysis/analyze/upload',
        pathParams: args.path as PathParams,
        body: args.body,
        headers: args.headers,
        signal: args.signal,
      })
    },
  }
}
