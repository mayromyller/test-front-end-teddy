import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/layouts/app-layout'

import { Session } from '@/pages/auth/session'
import { Clients } from '@/pages/app/clients/clients'
import { ClientsSelected } from '@/pages/app/clients-selected/clients-selected'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Session />
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/clients',
        element: <Clients />
      },
      {
        path: '/selected-clients',
        element: <ClientsSelected />
      }
    ]
  }
])
