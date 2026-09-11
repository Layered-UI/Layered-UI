import type * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const layeredButtonVariants = cva(
  [
    "rounded-full font-medium",
    "transition-all duration-300 ease-out",
    "active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-foreground text-background",
          "hover:bg-foreground/90",
          "shadow-sm hover:shadow-md",
        ].join(" "),
        secondary: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80",
          "border border-border/50",
        ].join(" "),
        outline: [
          "bg-transparent text-foreground",
          "border border-border",
          "hover:bg-accent hover:text-accent-foreground",
        ].join(" "),
        ghost: [
          "bg-transparent text-foreground",
          "hover:bg-accent/50 hover:text-accent-foreground",
        ].join(" "),
        destructive: [
          "bg-destructive text-white",
          "hover:bg-destructive/90",
          "shadow-sm hover:shadow-md",
        ].join(" "),
      },
      size: {
        sm: "h-8 px-4 text-xs gap-1.5",
        default: "h-10 px-6 text-sm gap-2",
        lg: "h-12 px-8 text-base gap-2",
        xl: "h-14 px-10 text-lg gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface LayeredButtonProps
  extends Omit<React.ComponentProps<"button">, "size">,
    VariantProps<typeof layeredButtonVariants> {
  /** Render as a child component (Radix Slot) */
  asChild?: boolean
  /** Leading icon element */
  icon?: React.ReactNode
}

function LayeredButton({
  className,
  variant,
  size,
  asChild = false,
  icon,
  children,
  ...props
}: LayeredButtonProps) {
  return (
    <Button
      asChild={asChild}
      variant="default"
      size="default"
      className={cn(layeredButtonVariants({ variant, size }), className)}
      {...props}
    >
      {icon || children ? (
        <>
          {icon && <span className="shrink-0">{icon}</span>}
          {children}
        </>
      ) : null}
    </Button>
  )
}

export { LayeredButton, layeredButtonVariants }
