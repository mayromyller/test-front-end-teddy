import { QueryClient } from '@tanstack/react-query'

type UpdateCacheFunction<T> = (item: T) => T

export function updateQueryCache<T>(
  queryClient: QueryClient,
  queryKey: unknown[],
  updateFunction: UpdateCacheFunction<T>,
  identifier: keyof T,
  newItemId: string | number
) {
  const cachedData = queryClient.getQueriesData<{ [key: string]: T[] }>({
    queryKey
  })

  cachedData.forEach(([cachedKey, cachedValue]) => {
    if (!cachedValue) return

    const dataKey = Object.keys(cachedValue)[0]
    const updatedData = {
      ...cachedValue,
      [dataKey]: cachedValue[dataKey].map((item: T) =>
        item[identifier] === newItemId ? updateFunction(item) : item
      )
    }

    queryClient.setQueryData<typeof updatedData>(cachedKey, updatedData)
  })
}
