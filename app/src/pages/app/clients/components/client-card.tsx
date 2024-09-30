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
import { Trash2, Plus, Pencil } from 'lucide-react'
import { ClientDialog } from './client-dialog'

export interface ClientDetailsProps {
  name?: string
  salary?: number | string
  companyValue?: number | string
}

export function ClientCard({ name, salary, companyValue }: ClientDetailsProps) {
  return (
    <Card className="p-[15px] md:max-w-[285px]">
      <CardTitle className="text-center">{name}</CardTitle>
      <CardContent className="text-center mt-[10px] gap-[10px]">
        <p className="text-wrap truncate">Salário: {salary}</p>
        <p className="text-wrap truncate">Empresa: {companyValue}</p>
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
          <ClientDialog name={name} salary={salary} companyValue={companyValue} />
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
              <Button variant="orange" className="h-[40x] w-full rounded-sm">
                Excluir cliente
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
