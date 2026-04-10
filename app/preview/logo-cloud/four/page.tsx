"use client"

import { Badge } from "@/components/ui/badge"

const companies = [
  { src: "https://storage.efferd.com/logo/nvidia-wordmark.svg", alt: "Nvidia" },
  { src: "https://storage.efferd.com/logo/supabase-wordmark.svg", alt: "Supabase" },
  { src: "https://storage.efferd.com/logo/openai-wordmark.svg", alt: "OpenAI" },
  { src: "https://storage.efferd.com/logo/vercel-wordmark.svg", alt: "Vercel" },
  { src: "https://storage.efferd.com/logo/github-wordmark.svg", alt: "GitHub" },
]

export default function TrustedBySection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Badge with decorative lines */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
            </div>

            <Badge variant="hero" className="group">
              <span className="text-sm font-normal">Trusted By</span>
            </Badge>

            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-center px-4">
            <span className="text-muted-foreground">Trusted by </span>
            <span className="text-primary">104+ Businesses.</span>
          </h2>
        </div>

        {/* Logo Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 p-1 rounded-3xl">
          {companies.map((company) => (
            <div
              key={company.alt}
              className="group flex items-center justify-center rounded-3xl border border-border bg-card px-8 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-primary/30"
            >
              <img
                src={company.src}
                alt={company.alt}
                className="pointer-events-none block h-5 select-none transition-all duration-300 group-hover:scale-110 dark:brightness-0 dark:invert"
                loading="lazy"
                width="auto"
                height="auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}