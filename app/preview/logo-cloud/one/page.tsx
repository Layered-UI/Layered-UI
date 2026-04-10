"use client"

import { Badge } from "@/components/ui/badge"

const logos = [
  {
    src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://storage.efferd.com/logo/openai-wordmark.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://storage.efferd.com/logo/turso-wordmark.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://storage.efferd.com/logo/github-wordmark.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://storage.efferd.com/logo/claude-wordmark.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
    alt: "Clerk Logo",
  },
]

export default function LogoCloudSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            </div>

            <Badge variant="hero" className="group">
              <span className="text-sm font-normal">Partners</span>
            </Badge>

            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-center px-4">
              <span className="text-muted-foreground">Your favorite companies are </span>
              <span className="text-primary">our partners.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Logo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-1 rounded-3xl bg-border">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="group flex items-center justify-center rounded-3xl border border-border bg-card p-8 sm:p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-primary/30"
            >
              <img
                alt={logo.alt}
                className="pointer-events-none block h-5 sm:h-6 select-none transition-all duration-300 group-hover:scale-110 dark:brightness-0 dark:invert"
                height="auto"
                loading="lazy"
                src={logo.src || "/placeholder.svg"}
                width="auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}