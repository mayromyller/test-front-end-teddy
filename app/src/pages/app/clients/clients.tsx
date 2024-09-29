import { useState } from 'react'
import { ClientCard } from './components/client-card'
import { CustomPagination } from './components/client-pagination'
import { ClientSelect } from './components/client-select'
import { Button } from '@/components/ui/button'

export function Clients() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = 10

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage)
  }

  return (
    <div className="pb-8">
      <section className="flex md:flex-row items-center justify-between flex-col space-y-[10px]">
        <p className="text-lg">
          <strong>16</strong> clientes encontrados:
        </p>

        <div className="space-x-[9px] flex flex-row  items-center">
          <span className="text-lg">Clientes por página: </span>

          <ClientSelect />
        </div>
      </section>

      <section className="mt-[10px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
          {Array.from({ length: 16 }, (_, i) => (
            <ClientCard key={i} />
          ))}
        </div>
      </section>

      <footer className="mt-5 space-y-5">
          <Button variant="orange_outline" className='h-[40px] w-full text-sm'>
            Criar cliente
          </Button>

        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </footer>
    </div>
  )
}
