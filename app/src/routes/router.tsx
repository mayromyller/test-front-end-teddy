import { Clients } from '@/pages/app/clients/clients'
import { Session } from '@/pages/auth/session'
import { AppLayout } from '@/pages/layouts/app-layout'
import {createBrowserRouter} from 'react-router-dom'

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
        element: <div>Clientes selecionados</div>
      }
    ]
  }
])
