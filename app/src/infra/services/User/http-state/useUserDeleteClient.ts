import { useMutation, useQueryClient } from '@tanstack/react-query'

import { userApi } from '../userApi'

import { MutationOptions } from '../../../helpers/mutationOptions'
import { QueryKeys } from '../../../queryKeys'

export function useUserDeleteClient(options?: MutationOptions<unknown>) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: userApi.deleteClient,
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
        options.onError('Erro ao excluir cliente')
      }
    }
  })

  return mutation
}
