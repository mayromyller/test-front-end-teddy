import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ClientDetailsProps } from './client-card'

import {
  CreateClientSchema,
  createClientSchema
} from './form-schema/createClientSchema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { MaskedInput } from '@/components/app-components/masked-input'
import { useUserCreateClient } from '@/infra/services/User/http-state/useUserCreteClient'
import { useUserUpdateClient } from '@/infra/services/User/http-state/useUserUpdateClient'
import { toast } from 'sonner'

interface ClientDialogProps extends Partial<ClientDetailsProps> {
  isEditing?: boolean
}

export function ClientDialog({
  id,
  name,
  salary,
  companyValuation,
  isEditing = false
}: ClientDialogProps) {
  const form = useForm<CreateClientSchema>({
    resolver: zodResolver(createClientSchema),
    defaultValues: {
      name: name ?? '',
      salary: salary ?? 0,
      companyValuation: companyValuation ?? 0
    },
    mode: 'onChange'
  })

  const {
    formState: { isSubmitting, isValid }
  } = form

  const { mutateAsync: createClient } = useUserCreateClient({
    onSuccess: () => {
      toast.success('Cliente criado com sucesso')
    },
    onError: (message) => {
      toast.error(message)
    }
  })

  const { mutateAsync: updateClient } = useUserUpdateClient({
    onSuccess: () => {
      toast.success('Cliente atualizado com sucesso')
    },
    onError: (message) => {
      toast.error(message)
      form.reset()
    }
  })

  async function handleCreateClient(data: CreateClientSchema) {
    await createClient(data)

    form.reset()
  }

  async function handleUpdateClient(data: CreateClientSchema) {
    if (id) {
      await updateClient({
        id,
        name: data.name,
        salary: data.salary,
        companyValuation: data.companyValuation
      })
    }
  }

  const handleSubmitForm = isEditing ? handleUpdateClient : handleCreateClient

  return (
    <DialogContent className="sm:max-w-[400px]">
      <DialogHeader>
        <DialogTitle className="text-base">Criar cliente:</DialogTitle>
        <DialogDescription className="sr-only">
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="flex flex-col space-y-[10px]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Digite o salário"
                    type="text"
                    className="h-[40px] border-2 text-base border-[#D9D9D9]  placeholder:text-[#AAAAAA] focus:border-neutral-400 focus-visible:ring-0 focus:outline-none  rounded-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <MaskedInput<CreateClientSchema>
            form={form}
            name="salary"
            placeholder="Digite o salário"
          />

          <MaskedInput<CreateClientSchema>
            form={form}
            name="companyValuation"
            placeholder="Digite o salário"
          />

          {!isEditing ? (
            <DialogTrigger asChild>
              <Button
                variant="orange"
                className="h-[40x] w-full rounded-sm"
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                Criar cliente
              </Button>
            </DialogTrigger>
          ) : (
            <DialogTrigger asChild>
              <Button
                variant="orange"
                className="h-[40x] w-full rounded-sm"
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                Atualizar cliente
              </Button>
            </DialogTrigger>
          )}
        </form>
      </Form>
    </DialogContent>
  )
}
