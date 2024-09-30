export interface Clients {
  clients: Array<ClientItem>
  currentPage: number
  totalPages: number
}

export interface ClientItem {
  id: number
  name: string
  salary: number
  companyValuation: number
  createdAt: string
  updatedAt: string
}

export interface UserListClientParams {
  page: number
  limit: number
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CreateClientParams
  extends Omit<ClientItem, 'id' | 'createdAt' | 'updatedAt'> {}
