import { Skeleton } from '@/components/ui/skeleton'

export function ClientSkeletonCard({ length = 4 }: { length?: number }) {
  const numberOfItems = length >= 4 ? 4 : length

  return (
    <>
      {Array.from({ length: numberOfItems }, (_, i) => (
        <Skeleton
          key={i}
          className="h-[166px] w-full md:max-w-[285px] rounded-xl"
        />
      ))}
    </>
  )
}
