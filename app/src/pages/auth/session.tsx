import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Session() {
  return (
    <div className="bg-neutral-100 min-h-dvh flex flex-col items-center justify-center p-5 space-y-5">
      <h2 className="text-[32px] text-black">Olá, seja bem-vindo!</h2>

      <Input
        placeholder="Digite o seu nome:"
        className="h-[60px] border-2 text-2xl border-[#D9D9D9] max-w-[521px] placeholder:text-[#AAAAAA] focus:border-neutral-400 focus-visible:ring-0 focus:outline-none p-5 rounded-[4px]"
      />

      <Button
        variant="orange"
        className="h-[60px] max-w-[521px] w-full text-2xl rounded-[4px] font-bold"
      >
        Entrar
      </Button>
    </div>
  )
}
