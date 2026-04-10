import { Metadata } from 'next'
import { VariantProps } from 'class-variance-authority'

import SnippetPreview from '@/components/SnippetPreview'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type BadgeVariant = VariantProps<typeof badgeVariants>['variant']

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Shadcn Badge Snippets',
  description: 'Custom shadcn badges and buttons for your marketing website.',
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function BadgesPage() {
  return (
    <div className="*:has-[[data-state=open]]:bg-muted/25 *:hover:bg-muted/25 grid grid-cols-2 divide-x divide-y divide-dashed *:relative *:flex *:aspect-square *:items-center *:justify-center *:p-12 sm:grid-cols-2 lg:grid-cols-3 lg:*:aspect-video 2xl:mx-auto 2xl:max-w-7xl">
      {/* ── Full Badge Component (with lines) ── */}
      <div className="group">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />
          <div className="flex flex-col items-center gap-2">
            <Badge variant="hero">
              <span className="text-sm font-normal">Join us</span>
            </Badge>
          </div>
          <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
        </div>
        <div className={actionClasses}>
          <SnippetPreview
            description="Complete Badge component - Copy and paste into components/ui/badge.tsx"
            codeToCopy={badgeComponentCode}
            displayedCode={badgeComponentCode}
          />
        </div>
      </div>

      {/* ────────────────────────── Button Snippets ──────────────────────────── */}

      {/* ── Ghost Button ── */}
      <div className="group">
        <Button variant="ghost">Ghost</Button>
        <div className={actionClasses}>
          <SnippetPreview
            description="Ghost Button - Usage snippet"
            codeToCopy={ghostButtonUsageCode}
            displayedCode={ghostButtonUsageCode}
          />
        </div>
      </div>

      {/* ── Link Button ── */}
      <div className="group">
        <Button variant="link">Link</Button>
        <div className={actionClasses}>
          <SnippetPreview
            description="Link Button - Usage snippet"
            codeToCopy={linkButtonUsageCode}
            displayedCode={linkButtonUsageCode}
          />
        </div>
      </div>

    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                           Badge Usage Snippets                              */
/* -------------------------------------------------------------------------- */

const heroBadgeUsageCode = `import { Badge } from '@/components/ui/badge'

<div className="flex items-center justify-center gap-3">
  <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />
  <Badge variant="hero">
    <span className="text-sm font-normal">Join us</span>
  </Badge>
  <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
</div>`

const defaultBadgeUsageCode = `import { Badge } from '@/components/ui/badge'

<Badge variant="default">
  <span className="text-sm font-normal">Default</span>
</Badge>`

const secondaryBadgeUsageCode = `import { Badge } from '@/components/ui/badge'

<Badge variant="secondary">
  <span className="text-sm font-normal">Secondary</span>
</Badge>`

const destructiveBadgeUsageCode = `import { Badge } from '@/components/ui/badge'

<Badge variant="destructive">
  <span className="text-sm font-normal">Destructive</span>
</Badge>`

const outlineBadgeUsageCode = `import { Badge } from '@/components/ui/badge'

<Badge variant="outline">
  <span className="text-sm font-normal">Outline</span>
</Badge>`

/* -------------------------------------------------------------------------- */
/*                           Button Usage Snippets                             */
/* -------------------------------------------------------------------------- */

const defaultButtonUsageCode = `import { Button } from '@/components/ui/button'

<Button variant="default">Default</Button>`

const outlineButtonUsageCode = `import { Button } from '@/components/ui/button'

<Button variant="outline">Outline</Button>`

const secondaryButtonUsageCode = `import { Button } from '@/components/ui/button'

<Button variant="secondary">Secondary</Button>`

const destructiveButtonUsageCode = `import { Button } from '@/components/ui/button'

<Button variant="destructive">Destructive</Button>`

const ghostButtonUsageCode = `import { Button } from '@/components/ui/button'

<Button variant="ghost">Ghost</Button>`

const linkButtonUsageCode = `import { Button } from '@/components/ui/button'

<Button variant="link">Link</Button>`

/* -------------------------------------------------------------------------- */
/*                            Badge Component Code                             */
/* -------------------------------------------------------------------------- */

const badgeComponentCode = `import type * as React from "react"
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

export { Badge, badgeVariants }`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

const actionClasses =
  'lg:scale-55 absolute inset-x-0 bottom-4 mx-auto size-fit duration-200 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100'