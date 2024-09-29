import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { Trash2, Plus, Pencil } from 'lucide-react'

export function ClientCard() {
  return (
    <Card className="p-[15px] md:max-w-[285px]">
      <CardTitle className="text-center">Teddy</CardTitle>
      <CardContent className="text-center mt-[10px] gap-[10px]">
        <p className='text-wrap truncate'>Salário: R$3.500,00</p>
        <p className='text-wrap truncate'>Empresa: R$120.000,00</p>
      </CardContent>

      <CardFooter className="flex flex-row items-center justify-between p-0">
        <Button variant="ghost">
          <Plus className="h-4 w-4 stroke-black" />
        </Button>
        <Button variant="ghost">
          <Pencil className="h-4 w-4 stroke-black" />
        </Button>
        <Button variant="ghost">
          <Trash2 className="h-4 w-4 stroke-[#FF0000]" />
        </Button>
      </CardFooter>
    </Card>
  )
}
