import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { ClientSelectedList, SelectedClientStore } from './selectedClientStore'

const clientsSelectedStore = create<SelectedClientStore>()(
  persist(
    (set, get) => ({
      clientsSelected: [],
      addClient: (client: ClientSelectedList) => {
        const listClientsSelected = get().clientsSelected

        const clientSelectedExists = listClientsSelected.find(
          (item) => item.id === client.id
        )

        if (!clientSelectedExists) {
          const updateClientSelected = [...listClientsSelected, client]

          set({ clientsSelected: updateClientSelected })
        }
      },
      removeClient: (id: ClientSelectedList['id']) => {
        const listClientsSelected = get().clientsSelected

        const updateClientSelected = listClientsSelected.filter(
          (item) => item.id !== id
        )

        set({ clientsSelected: updateClientSelected })
      },
      clearClients: () => {
        set({ clientsSelected: [] })
      }
    }),
    {
      name: '@teddy-app/selected-clients',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export function useSelectedClientsList(): SelectedClientStore['clientsSelected'] {
  const clientsSelectedList = clientsSelectedStore(
    (state) => state.clientsSelected
  )

  return clientsSelectedList
}

export function useSelectedClientsActions() {
  const addClient = clientsSelectedStore((state) => state.addClient)
  const removeClient = clientsSelectedStore((state) => state.removeClient)
  const clearClients = clientsSelectedStore((state) => state.clearClients)

  return { addClient, removeClient, clearClients }
}
