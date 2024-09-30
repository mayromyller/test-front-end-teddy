import './index.css'

import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'

import { router } from './routes/router'
import { queryClient } from './api/client/query-client'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
