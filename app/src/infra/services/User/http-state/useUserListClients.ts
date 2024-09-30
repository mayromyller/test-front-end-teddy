import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { userApi } from '../userApi'
import { UserListClientParams } from '../userTypes'

import { QueryKeys } from '../../../queryKeys'

export function useUserListClients({ page, limit }: UserListClientParams) {
  const query = useQuery({
    queryKey: [QueryKeys.UserListClient, page, limit],
    queryFn: () => userApi.getClients({ page, limit }),
    placeholderData: keepPreviousData,
    retry: false,
    staleTime: Infinity
  })

  return query
}
