import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ClientDetailsProps } from './client-card'

export function ClientDialog({
  name,
  salary,
  companyValue
}: ClientDetailsProps) {
  return (
    <DialogContent className="sm:max-w-[400px]">
      <DialogHeader>
        <DialogTitle className="text-base">Criar cliente:</DialogTitle>
        <DialogDescription className="sr-only">
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col space-y-[10px]">
        <Input
          id="name"
          value={name}
          placeholder="Digite o nome"
          className="h-[40px] border-2 text-base border-[#D9D9D9]  placeholder:text-[#AAAAAA] focus:border-neutral-400 focus-visible:ring-0 focus:outline-none  rounded-sm"
        />

        <Input
          id="salary"
          value={salary}
          placeholder="Digite o salário"
          type="text"
          className="h-[40px] border-2 text-base border-[#D9D9D9]  placeholder:text-[#AAAAAA] focus:border-neutral-400 focus-visible:ring-0 focus:outline-none  rounded-sm"
        />

        <Input
          id="companyValue"
          value={companyValue}
          placeholder="Digite o valor da empresa"
          type="text"
          className="h-[40px] border-2 text-base border-[#D9D9D9]  placeholder:text-[#AAAAAA] focus:border-neutral-400 focus-visible:ring-0 focus:outline-none  rounded-sm"
        />
      </div>

      <DialogFooter>
        <Button variant="orange" className="h-[40x] w-full rounded-sm">
          Criar cliente
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
