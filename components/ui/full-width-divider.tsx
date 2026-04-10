"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface FullWidthDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom" | "middle"
}

export function FullWidthDivider({
  position = "middle",
  className,
  ...props
}: FullWidthDividerProps) {
  return (
    <div
      className={cn(
        "col-span-1 md:col-span-2 lg:col-span-4 h-px w-full bg-border relative overflow-hidden",
        position === "top" && "border-b border-border/10 mb-[-1px]",
        position === "bottom" && "border-t border-border/10 mt-[-1px]",
        className
      )}
      {...props}
    >
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-60" />
      
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_5s_infinite]" />
      
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
