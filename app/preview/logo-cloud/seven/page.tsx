"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

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

export default function TrustedByCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0)
        api.scrollTo(0)
      } else {
        api.scrollNext()
        setCurrent(current + 1)
      }
    }, 1000)
  }, [api, current])

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

        {/* Carousel */}
        <div className="p-1 rounded-3xl bg-border">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="-ml-1">
              {logos.map((logo) => (
                <CarouselItem key={logo.alt} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-1">
                  <div className="group flex items-center justify-center rounded-3xl border border-border bg-card p-8 sm:p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-primary/30">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="pointer-events-none block h-5 sm:h-6 select-none transition-all duration-300 group-hover:scale-110 dark:brightness-0 dark:invert"
                      loading="lazy"
                      width="auto"
                      height="auto"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}