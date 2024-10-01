import {
  useSelectedClientsActions,
  useSelectedClientsList
} from '@/store/useSelectedClients'
import { ClientCard } from '../clients/components/client-card'
import { Button } from '@/components/ui/button'

export function ClientsSelected() {
  const data = useSelectedClientsList()
  const { clearClients } = useSelectedClientsActions()

  return (
    <div className="pb-8">
      <section className="flex md:flex-row items-center justify-between flex-col space-y-[10px]">
        <h3 className="text-xl font-bold">Clientes selecionados:</h3>
      </section>
      {data.length <= 0 ? (
        <p className="text-center mt-6">Não há clientes selecionados</p>
      ) : (
        <>
          <section className="mt-[10px]">
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
              {data.map((clientItem) => (
                <ClientCard
                  key={clientItem.id}
                  id={clientItem.id}
                  name={clientItem.name}
                  salary={clientItem.salary}
                  companyValuation={clientItem.companyValuation}
                  actionTypeFlow="unselected"
                />
              ))}
            </div>
          </section>

          <footer className="mt-5 space-y-5">
            <Button
              variant="orange_outline"
              className="h-[40px] w-full text-sm"
              onClick={clearClients}
            >
              Limpar clientes selecionados
            </Button>
          </footer>
        </>
      )}
    </div>
  )
}
