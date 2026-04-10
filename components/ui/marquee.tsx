"use client"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)
  const marqueeRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={marqueeRef}
      className={cn(
        "group flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0",
              vertical ? "flex-col" : "flex-row",
              vertical ? "animate-marquee-vertical" : "animate-marquee",
              reverse && "direction-reverse",
              isPaused && "paused"
            )}
            style={
              reverse
                ? {
                    animationDirection: vertical ? "reverse" : "reverse",
                  }
                : undefined
            }
          >
            {children}
          </div>
        ))}
    </div>
  )
}