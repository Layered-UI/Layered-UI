"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    price: 29,
    interval: "per month",
    description: "Perfect for individuals and small teams getting started with essential features.",
    features: [
      { name: "Up to 10 team members", included: true },
      { name: "5GB storage", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "API access", included: false },
      { name: "Custom integrations", included: false },
    ],
    highlight: false,
    cta: {
      text: "Get started",
    },
  },
  {
    name: "Professional",
    price: 99,
    interval: "per month",
    description: "Ideal for growing teams that need advanced features and priority support.",
    features: [
      { name: "Unlimited team members", included: true },
      { name: "100GB storage", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "API access", included: true },
      { name: "Custom integrations", included: true },
    ],
    highlight: true,
    cta: {
      text: "Get started",
    },
  },
]

const PricingSection2 = () => {
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
              <span className="text-sm font-normal">Plans & Pricing</span>
            </Badge>

            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4">
              Choose your plan
            </h2>

            <p className="max-w-3xl text-muted-foreground text-sm sm:text-base font-normal leading-relaxed px-4">
              Select the perfect plan for your needs. All plans include our core features with options to scale as you
              grow.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col bg-card rounded-3xl p-8 sm:p-10 border transition-all duration-300 group hover:-translate-y-2 ${
                tier.highlight
                  ? "border-primary shadow-[var(--shadow-card)] ring-2 ring-primary/20"
                  : "border-border hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              }`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-6">
                {/* Plan name */}
                <h3 className="text-xl font-medium uppercase tracking-wider text-foreground">{tier.name}</h3>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-light text-foreground">${tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.interval}</span>
                </div>

                {/* Description */}
                <p className="text-sm pb-6 border-b border-border text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <div className="relative z-10 mt-8 space-y-4 flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature.name} className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        feature.included ? "bg-primary/10 group-hover:bg-primary/20" : "bg-muted"
                      }`}
                    >
                      <Check className={`w-3 h-3 ${feature.included ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <span className={`text-sm ${feature.included ? "text-card-foreground" : "text-muted-foreground"}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              {tier.cta && (
                <div className="relative z-10 mt-8">
                  <Button
                    className={`w-full h-12 rounded-full font-medium transition-all duration-300 group/btn ${
                      tier.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                        : "bg-card border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {tier.cta.text}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </div>
              )}

              {/* Corner accent for featured */}
              {tier.highlight && (
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection2