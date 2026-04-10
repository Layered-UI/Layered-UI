"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

const logos = [
  { src: "https://storage.efferd.com/logo/nvidia-wordmark.svg", alt: "Nvidia" },
  { src: "https://storage.efferd.com/logo/supabase-wordmark.svg", alt: "Supabase" },
  { src: "https://storage.efferd.com/logo/openai-wordmark.svg", alt: "OpenAI" },
  { src: "https://storage.efferd.com/logo/turso-wordmark.svg", alt: "Turso" },
  { src: "https://storage.efferd.com/logo/vercel-wordmark.svg", alt: "Vercel" },
  { src: "https://storage.efferd.com/logo/github-wordmark.svg", alt: "GitHub" },
  { src: "https://storage.efferd.com/logo/claude-wordmark.svg", alt: "Claude AI" },
  { src: "https://storage.efferd.com/logo/clerk-wordmark.svg", alt: "Clerk" },
]

// Duplicate for seamless infinite scroll
const allLogos = [...logos, ...logos]

export default function TrustedByCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animationId: number
    let position = 0
    const speed = 0.5

    const animate = () => {
      if (!paused) {
        position -= speed
        const halfWidth = track.scrollWidth / 2
        if (Math.abs(position) >= halfWidth) {
          position = 0
        }
        track.style.transform = `translateX(${position}px)`
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [paused])

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-10 mb-12 sm:mb-16">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">Trusted By</span>
              </Badge>
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-left">
              <span className="text-muted-foreground">Trusted by thousands of </span>
              <span className="text-primary">businesses worldwide.</span>
            </h2>
          </div>
        </div>

        {/* Carousel wrapped in bg-border like the logo grid */}
        <div className="p-1 rounded-3xl bg-border overflow-hidden">
          <div
            className="flex gap-1"
            ref={trackRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{ willChange: "transform" }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="group flex-shrink-0 flex items-center justify-center rounded-3xl border border-border bg-card p-8 sm:p-12 w-40 sm:w-48 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-primary/30"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="pointer-events-none block h-5 sm:h-6 select-none transition-all duration-300 group-hover:scale-110 dark:brightness-0 dark:invert"
                  loading="lazy"
                  width="auto"
                  height="auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}