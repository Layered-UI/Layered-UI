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

export default function TrustedByMarquee() {
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-center">

          {/* Left label */}
          <div className="flex flex-col items-start gap-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-l from-primary/30 to-transparent" />
              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">Partners</span>
              </Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal leading-tight text-left">
              <span className="text-muted-foreground">Trusted by </span>
              <span className="text-primary">market leaders.</span>
            </h3>
          </div>

          {/* Carousel */}
          <div className="relative md:col-span-4">
            {/* Fade overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background to-transparent" />

            <div className="p-1 rounded-3xl bg-border">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent className="-ml-1">
                  {logos.map((logo) => (
                    <CarouselItem key={logo.alt} className="basis-1/2 sm:basis-1/3 lg:basis-1/4 pl-1">
                      <div className="group flex items-center justify-center rounded-3xl border border-border bg-card p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] hover:border-primary/30">
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

        </div>
      </div>
    </section>
  )
}