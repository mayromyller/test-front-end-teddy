import { api } from '@/api/client/axios-instance'
import {
  ClientItem,
  Clients,
  CreateClientParams,
  UpdateClientParams,
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

async function updateClient({
  id,
  name,
  salary,
  companyValuation
}: UpdateClientParams) {
  const response = await api.patch<ClientItem>(`/use/${id}`, {
    name,
    salary,
    companyValuation
  })

  return response.data
}

async function deleteClient(id: number) {
  const response = await api.delete(`/users/${id}`)

  return response.data
}

export const userApi = {
  getClients,
  createClient,
  updateClient,
  deleteClient
}
