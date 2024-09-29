import { Session } from '@/pages/auth/session'
import {createBrowserRouter} from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Session />
  }
])
