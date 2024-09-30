import { useMutation, useQueryClient } from '@tanstack/react-query'

import { userApi } from '../userApi'

import { MutationOptions } from '../../../helpers/mutationOptions'
import { updateQueryCache } from '../../../helpers/updateQueryCache'
import { QueryKeys } from '@/infra/queryKeys'
import { ClientItem } from '../userTypes'

export function useUserUpdateClient(options?: MutationOptions<unknown>) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: userApi.updateClient,
    retry: false,
    onSuccess: ({ id, name, salary, companyValuation }) => {
      updateQueryCache<ClientItem>(
        queryClient,
        [QueryKeys.UserListClient],
        (item) => ({
          ...item,
          name,
          salary,
          companyValuation
        }),
        'id',
        id
      )
    },
    onError: () => {
      if (options?.onError) {
        options.onError('Erro ao atualizar cliente')
      }
    }
  })

  return mutation
}
