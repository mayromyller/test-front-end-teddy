import { api } from '@/api/client/axios-instance'
import { Clients, UserListClientParams } from './userTypes'

async function getClients({ page, limit }: UserListClientParams) {
  const response = await api.get<Clients>(`/users?page=${page}&limit=${limit}`)

  return response.data
}

export const userApi = {
  getClients
}
