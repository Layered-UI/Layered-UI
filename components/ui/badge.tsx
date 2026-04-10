import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        hero: "border-border/50 bg-secondary/50 text-foreground backdrop-blur-sm px-4 py-2 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  showLines = false,
  lineClassName,
  ...props
}: React.ComponentProps<"span"> & 
  VariantProps<typeof badgeVariants> & { 
    asChild?: boolean
    showLines?: boolean
    lineClassName?: string
  }) {
  const Comp = asChild ? Slot : "span"

  if (showLines) {
    return (
      <div className="flex items-center gap-2 sm:gap-3">
        <div className={cn("w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent", lineClassName)} />
        <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
        <div className={cn("w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent", lineClassName)} />
      </div>
    )
  }

  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }