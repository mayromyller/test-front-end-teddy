import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSessionUser } from '@/store/user/useSessionUser'

const sessionSchema = z.object({
  name: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres')
})

export function Session() {
  const { startSession } = useSessionUser()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{ name: string }>({
    resolver: zodResolver(sessionSchema),
    mode: 'onChange'
  })

  function handleStartSession(data: { name: string }) {
    navigate('/clients')

    startSession(data.name)
  }

  return (
    <div className="bg-neutral-100 min-h-dvh flex flex-col items-center justify-center p-5 space-y-5">
      <h2 className="text-[32px] text-black">Olá, seja bem-vindo!</h2>

      <div className="max-w-[521px] w-full flex flex-col space-y-2">
        <Input
          placeholder="Digite o seu nome:"
          className="h-[60px] border-2 text-2xl border-[#D9D9D9] w-full placeholder:text-[#AAAAAA] focus:border-neutral-400 focus-visible:ring-0 focus:outline-none p-5 rounded-[4px]"
          {...register('name')}
        />

        {errors.name && (
          <p className="text-red-500">Por favor digite seu nome</p>
        )}
      </div>

      <Button
        variant="orange"
        className="h-[60px] max-w-[521px] w-full text-2xl rounded-[4px] font-bold"
        onClick={handleSubmit(handleStartSession)}
      >
        Entrar
      </Button>
    </div>
  )
}
