import { api } from '@/api/client/axios-instance'
import {
  ClientItem,
  Clients,
  CreateClientParams,
  UserListClientParams
} from './userTypes'

async function getClients({ page, limit }: UserListClientParams) {
  const response = await api.get<Clients>(`/users?page=${page}&limit=${limit}`)

  return response.data
}

async function createClient({
  name,
  salary,
  companyValuation
}: CreateClientParams) {
  const response = await api.post<ClientItem>('/users', {
    name,
    salary,
    companyValuation
  })

  return response.data
}

export const userApi = {
  getClients,
  createClient
}
