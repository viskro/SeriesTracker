import { cn } from "@/shared/utils/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-border-primary animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
