import { useCallback, useEffect, useState } from 'react'

export type ApiQueryState<TData> = {
  data: TData | null
  error: Error | null
  isLoading: boolean
}

export function useApiQuery<TData>(
  request: (() => Promise<TData>) | null,
  deps: readonly unknown[],
) {
  const [state, setState] = useState<ApiQueryState<TData>>({
    data: null,
    error: null,
    isLoading: Boolean(request),
  })

  const execute = useCallback(async () => {
    if (!request) {
      setState({ data: null, error: null, isLoading: false })
      return
    }

    setState((current) => ({ ...current, error: null, isLoading: true }))

    try {
      const data = await request()
      setState({ data, error: null, isLoading: false })
    } catch (error) {
      setState({
        data: null,
        error: error instanceof Error ? error : new Error('Unexpected API error'),
        isLoading: false,
      })
    }
  }, [request])

  useEffect(() => {
    void execute()
  }, [execute, ...deps])

  return {
    ...state,
    reload: execute,
  }
}
