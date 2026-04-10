'use client';

import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Zap,
    title: "Faaast",
    description: "It supports an entire helping developers and innovate.",
  },
  {
    icon: Cpu,
    title: "Powerful",
    description: "It supports an entire helping developers and businesses.",
  },
  {
    icon: Fingerprint,
    title: "Security",
    description: "It supports an helping developers businesses.",
  },
  {
    icon: Pencil,
    title: "Customization",
    description: "It supports helping developers and businesses innovate.",
  },
  {
    icon: Settings2,
    title: "Control",
    description: "It supports helping developers and businesses innovate.",
  },
  {
    icon: Sparkles,
    title: "Built for AI",
    description: "It supports helping developers and businesses innovate.",
  },
]

export default function FeaturesSection() {
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
              <span className="text-sm font-normal">Features</span>
            </Badge>

            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-balance text-foreground px-4">
              The foundation for creative teams management
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed px-4">
              Lyra is evolving to be more than just the models. It supports an entire helping developers and businesses innovate.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-border rounded-3xl overflow-hidden divide-x divide-y divide-border">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-card p-8 sm:p-10 md:p-12 group hover:bg-secondary/50 transition-all duration-300"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon container */}
              <div className="relative z-10 flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50">
                  <feature.icon className="w-4 h-4 text-primary transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <h3 className="text-base font-medium text-foreground">{feature.title}</h3>
              </div>

              {/* Description */}
              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}