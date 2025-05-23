import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/shadcn/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const showEllipsis = totalPages > 7;


  const getVisiblePages = () => {
    if (!showEllipsis) return pages;

    if (currentPage <= 4) {
      return [...pages.slice(0, 5), "end-ellipsis"];
    }

    if (currentPage >= totalPages - 3) {
      return ["start-ellipsis", ...pages.slice(-5)];
    }

    return [
      "start-ellipsis",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "end-ellipsis",
    ];
  };

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${baseUrl}?page=${currentPage - 1}`}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {getVisiblePages().map((page) => {
          if (page === "start-ellipsis" || page === "end-ellipsis") {
            return (
              <PaginationItem key={page}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={`${baseUrl}?page=${page}`}
                isActive={currentPage === page}
                className="bg-gradient-to-br from-background-secondary to-background-primary border border-border-primary hover:border-accent-primary/40 transition-all duration-300"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href={`${baseUrl}?page=${currentPage + 1}`}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
} 