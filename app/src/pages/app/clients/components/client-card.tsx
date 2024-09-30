import { toast } from 'sonner'
import { Trash2, Plus, Pencil } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ClientDialog } from './client-dialog'
import { moneyFormatter } from '@/utils/moneyFormatter'
import { useUserDeleteClient } from '@/infra/services/User/http-state/useUserDeleteClient'

export interface ClientDetailsProps {
  id: number
  name: string
  salary: number
  companyValuation: number
}

export function ClientCard({
  id,
  name,
  salary,
  companyValuation
}: ClientDetailsProps) {
  const { mutateAsync } = useUserDeleteClient({
    onSuccess: () => {
      toast.success('Cliente excluído com sucesso')
    },
    onError: (message) => {
      toast.error(message)
    }
  })

  async function handleDeleteClient() {
    await mutateAsync(id)
  }

  return (
    <Card className="p-[15px] md:max-w-[285px]">
      <CardTitle className="text-center">{name}</CardTitle>
      <CardContent className="text-center mt-[10px] gap-[10px]">
        <p className="text-wrap truncate">Salário: {moneyFormatter(salary)}</p>
        <p className="text-wrap truncate">
          Empresa: {moneyFormatter(companyValuation)}
        </p>
      </CardContent>

      <CardFooter className="flex flex-row items-center justify-between p-0">
        <Button variant="ghost">
          <Plus className="h-4 w-4 stroke-black" />
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">
              <Pencil className="h-4 w-4 stroke-black" />
            </Button>
          </DialogTrigger>
          <ClientDialog
            id={id}
            name={name}
            salary={salary}
            companyValuation={companyValuation}
            isEditing
          />
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">
              <Trash2 className="h-4 w-4 stroke-[#FF0000]" />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Excluir cliente:</DialogTitle>
              <p>
                Você está prestes a excluir o cliente: <strong>Teddy</strong>
              </p>
            </DialogHeader>
            <DialogFooter>
              <DialogTrigger asChild>
                <Button
                  variant="orange"
                  className="h-[40x] w-full rounded-sm"
                  onClick={handleDeleteClient}
                >
                  Excluir cliente
                </Button>
              </DialogTrigger>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
