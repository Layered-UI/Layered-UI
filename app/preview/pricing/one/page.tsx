"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Box, Layers, Zap } from "lucide-react"

const plans = [
  {
    name: "Basic plan",
    price: 9,
    description:
      "Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease",
    icon: Box,
  },
  {
    name: "Pro plan",
    price: 19,
    description:
      "Designed for growing businesses, the Basic Plan expands on our Starter package with additional features",
    icon: Layers,
  },
  {
    name: "Enterprise plan",
    price: 49,
    description:
      "Tailored for large enterprises, this plan offers advanced features, personalized support, and the scalability.",
    icon: Zap,
  },
]

const PricingSection2 = () => {
  const [isYearly, setIsYearly] = useState(false)

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
              <span className="text-sm font-normal">Pricing</span>
            </Badge>

            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4">
              Simple and transparent pricing
            </h2>

            <p className="max-w-3xl text-muted-foreground text-sm sm:text-base font-normal leading-relaxed px-4">
              Choose a plan that fits your business needs and budget. No hidden fees, no surprises—just straightforward
              pricing for powerful financial management.
            </p>
          </div>
        </div>
      </div>

      {/* Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 flex justify-center">
        <div className="relative bg-muted/30 backdrop-blur-sm rounded-full p-2 border border-border inline-flex shadow-sm">
          <div
            className="absolute top-2 bottom-2 bg-card rounded-full shadow-md transition-all duration-300 ease-out"
            style={{
              left: isYearly ? "50%" : "0.5rem",
              right: isYearly ? "0.5rem" : "50%",
            }}
          />

          <button
            onClick={() => setIsYearly(false)}
            className={`relative z-10 px-6 sm:px-8 py-3 rounded-full font-medium text-sm sm:text-base transition-colors ${
              !isYearly ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setIsYearly(true)}
            className={`relative z-10 px-6 sm:px-8 py-3 rounded-full font-medium text-sm sm:text-base transition-colors ${
              isYearly ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={index}
                className="relative flex flex-col bg-card rounded-3xl p-6 sm:p-8 border border-border transition-all duration-300 group hover:-translate-y-2 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Header with icon and name */}
                <div className="relative z-10 flex items-center gap-4 mb-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center border border-border bg-secondary/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-xl font-normal text-foreground">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="relative z-10 flex items-end gap-2 mb-6">
                  <span className="text-4xl sm:text-5xl font-normal text-foreground">
                    ${isYearly ? plan.price * 10 : plan.price}
                  </span>
                  <span className="text-base text-muted-foreground mb-2">/Month</span>
                </div>

                {/* Description */}
                <p className="relative z-10 text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 flex-1">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <div className="relative z-10">
                  <Button className="w-full rounded-full py-6 font-medium bg-card border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Get started
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PricingSection2
