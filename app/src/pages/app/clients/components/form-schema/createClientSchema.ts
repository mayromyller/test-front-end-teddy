import { z } from 'zod'

export const createClientSchema = z.object({
  name: z
    .string({ required_error: 'O nome é obrigatório' })
    .min(3, { message: 'O nome é obrigatório' }),
  salary: z
    .number({ required_error: 'O salário é obrigatório' })
    .min(1, { message: 'O salário é obrigatório' }),
  companyValuation: z
    .number({
      required_error: 'O valor da empresa é obrigatório'
    })
    .min(1, { message: 'O valor da empresa é obrigatório' })
})

export type CreateClientSchema = z.infer<typeof createClientSchema>
