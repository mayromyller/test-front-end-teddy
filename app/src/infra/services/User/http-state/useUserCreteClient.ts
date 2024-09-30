import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userApi } from '../userApi'
import { QueryKeys } from '@/infra/queryKeys'
import { MutationOptions } from '@/infra/helpers/mutationOptions'
import { ClientItem } from '../userTypes'

export function useUserCreateClient(options?: MutationOptions<ClientItem>) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: userApi.createClient,
    retry: false,
    onSuccess: (data) => {
      if (options?.onSuccess) {
        options.onSuccess(data)
      }

      queryClient.invalidateQueries({
        queryKey: [QueryKeys.UserListClient]
      })
    },
    onError: () => {
      if (options?.onError) {
        options.onError('Erro ao criar cliente')
      }
    }
  })

  return mutation
}
