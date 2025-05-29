import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "hover:cursor-default inline-flex items-center justify-center rounded-md border px-2.5 py-0.5 text-xs font-badge w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors",
  {
    variants: {
      variant: {
        finished:
          "border-transparent bg-accent-primary/80 text-primary hover:bg-accent-primary/30",
        ongoing:
          "border-transparent bg-accent-secondary/80 text-primary hover:bg-accent-secondary/30",
        to_watch:
          "border-transparent bg-background-secondary text-primary hover:bg-border-primary",
        category:
          "border border-border-primary bg-background-secondary text-primary hover:bg-border-primary hover:text-white",
      },
    },
    defaultVariants: {
      variant: "to_watch",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
