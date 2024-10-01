import { MemoryRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
  QueryClientConfig
} from '@tanstack/react-query'

import {
  RenderOptions,
  render,
  renderHook,
  RenderHookOptions
} from '@testing-library/react'

import { Toaster } from 'sonner'

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity
    },
    mutations: {
      retry: false,
      gcTime: Infinity
    }
  }
}

export const wrapperAllTheProviders = (initialEntries: string[] = ['/']) => {
  const queryClient = new QueryClient(queryClientConfig)

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={initialEntries}>
        <Toaster richColors />
        {children}
      </MemoryRouter>
    </QueryClientProvider>
  )
}

export function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  initialEntries: string[] = ['/']
) {
  return render(ui, {
    wrapper: wrapperAllTheProviders(initialEntries),
    ...options
  })
}

export function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
  initialEntries: string[] = ['/']
) {
  return renderHook(renderCallback, {
    wrapper: wrapperAllTheProviders(initialEntries),
    ...options
  })
}

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
export { customRender as render }
export { customRenderHook as renderHook }
