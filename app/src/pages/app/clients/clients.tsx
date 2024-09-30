import { useState } from 'react'
import { ClientCard } from './components/client-card'
import { CustomPagination } from './components/client-pagination'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { ClientDialog } from './components/client-dialog'

import { useUserListClients } from '@/infra/services/User/http-state/useUserListClients'
import { ClientSkeletonCard } from './components/client-skeleton-card'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem
} from '@/components/ui/select'

export function Clients() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [clientsPerPage, setClientsPerPage] = useState<number>(10)

  const { data, isPending, isLoading } = useUserListClients({
    page: currentPage,
    limit: clientsPerPage ?? 1
  })

  function handleChangeClientsPerPage(value: string) {
    const perPage = parseInt(value)
    setClientsPerPage(perPage)
  }

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage)
  }

  return (
    <div className="pb-8">
      <section className="flex md:flex-row items-center justify-between flex-col space-y-[10px]">
        <p className="text-lg">
          <strong>{data?.clients.length}</strong> clientes encontrados:
        </p>

        <div className="space-x-[9px] flex flex-row  items-center">
          <span className="text-lg">Clientes por página: </span>

          <Select
            defaultValue={clientsPerPage.toString()}
            onValueChange={handleChangeClientsPerPage}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="selecione um valor" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup defaultValue={clientsPerPage}>
                {[2, 4, 8, 10, 12, 16, 20].map((val) => (
                  <SelectItem key={val} value={val.toString()}>
                    {val}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="mt-[10px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
          {isLoading || isPending ? (
            <ClientSkeletonCard length={clientsPerPage} />
          ) : (
            data &&
            data.clients.map((clientItem) => (
              <ClientCard
                key={clientItem.id}
                id={clientItem.id}
                name={clientItem.name}
                salary={clientItem.salary}
                companyValuation={clientItem.companyValuation}
              />
            ))
          )}
        </div>
      </section>

      <footer className="mt-5 space-y-5">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="orange_outline"
              className="h-[40px] w-full text-sm"
            >
              Criar cliente
            </Button>
          </DialogTrigger>
          <ClientDialog />
        </Dialog>

        <CustomPagination
          currentPage={data?.currentPage ?? 1}
          totalPages={data?.totalPages ?? 1}
          onPageChange={handlePageChange}
        />
      </footer>
    </div>
  )
}
