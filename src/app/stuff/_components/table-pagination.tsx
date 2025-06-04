import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function TablePagination() {
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem className="bg-[#A7E92F] rounded-full">
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem  className=" rounded-full">
          <PaginationLink href="#" >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem  className=" rounded-full">
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
