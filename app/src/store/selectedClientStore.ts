import { ClientItem } from '@/infra/services/User/userTypes'

export type ClientSelectedList = Omit<ClientItem, 'createdAt' | 'updatedAt'>

export type SelectedClientStore = {
  clientsSelected: ClientSelectedList[]
  addClient: (client: ClientSelectedList) => void
  removeClient: (client: ClientSelectedList['id']) => void
  clearClients: () => void
}
