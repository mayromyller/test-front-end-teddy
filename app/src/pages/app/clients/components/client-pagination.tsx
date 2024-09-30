import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink
} from '@/components/ui/pagination'

interface CustomPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function CustomPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CustomPaginationProps) {

  const activePageStyle = 'bg-[#EC6724] text-white'

  const renderPaginationItem = (
    page: number,
    isActive: boolean
  ): JSX.Element => (
    <PaginationItem key={page}>
      <PaginationLink
        onClick={() => onPageChange(page)}
        isActive={isActive}
        className={`${isActive ? activePageStyle : ''} cursor-pointer hover:bg-[#EC6724] hover:text-white`}
      >
        {page}
      </PaginationLink>
    </PaginationItem>
  )

  const renderPageNumbers = (): JSX.Element[] => {
    const pageNumbers: JSX.Element[] = []
    const maxVisiblePages = 7

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(renderPaginationItem(i, currentPage === i))
      }
    } else {
      pageNumbers.push(renderPaginationItem(1, currentPage === 1))

      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      if (currentPage <= 4) {
        start = 2
        end = 5
      } else if (currentPage >= totalPages - 3) {
        start = totalPages - 4
        end = totalPages - 1
      }

      if (currentPage > 4) {
        pageNumbers.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        )
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(renderPaginationItem(i, currentPage === i))
      }

      if (currentPage < totalPages - 3) {
        pageNumbers.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        )
      }

      pageNumbers.push(
        renderPaginationItem(totalPages, currentPage === totalPages)
      )
    }

    return pageNumbers
  }

  return (
    <Pagination>
      <PaginationContent>{renderPageNumbers()}</PaginationContent>
    </Pagination>
  )
}
