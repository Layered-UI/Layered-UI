"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Box, Layers, Zap, CheckCircle, Star } from "lucide-react"
import NumberFlow from "@number-flow/react"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"

type Plan = {
  name: string
  info: string
  price: {
    monthly: number
    yearly: number
  }
  features: string[]
  icon: typeof Box
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: "Basic plan",
    info: "Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease",
    price: {
      monthly: 9,
      yearly: 7,
    },
    features: [
      "Up to 3 Blog posts",
      "Up to 3 Transcriptions",
      "Up to 3 Posts stored",
      "Markdown support",
      "Community support",
    ],
    icon: Box,
  },
  {
    name: "Pro plan",
    info: "Designed for growing businesses, the Basic Plan expands on our Starter package with additional features",
    price: {
      monthly: 19,
      yearly: 16,
    },
    features: [
      "Up to 500 Blog Posts",
      "Up to 500 Transcriptions",
      "Up to 500 Posts stored",
      "Unlimited Markdown support",
      "SEO optimization tools",
      "Priority support",
    ],
    icon: Layers,
    highlighted: true,
  },
  {
    name: "Enterprise plan",
    info: "Tailored for large enterprises, this plan offers advanced features, personalized support, and the scalability.",
    price: {
      monthly: 49,
      yearly: 40,
    },
    features: [
      "Unlimited Blog Posts",
      "Unlimited Transcriptions",
      "Unlimited Posts stored",
      "Unlimited Markdown support",
      "SEO optimization tools",
      "Priority support",
      "AI powered suggestions",
    ],
    icon: Zap,
  },
]

const PricingSection2 = () => {
  const [frequency, setFrequency] = useState<"monthly" | "yearly">("monthly")

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
              left: frequency === "yearly" ? "50%" : "0.5rem",
              right: frequency === "yearly" ? "0.5rem" : "50%",
            }}
          />

          <button
            onClick={() => setFrequency("monthly")}
            className={`relative z-10 px-6 sm:px-8 py-3 rounded-full font-medium text-sm sm:text-base transition-colors ${
              frequency === "monthly" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setFrequency("yearly")}
            className={`relative z-10 px-6 sm:px-8 py-3 rounded-full font-medium text-sm sm:text-base transition-colors ${
              frequency === "yearly" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} frequency={frequency} />
          ))}
        </div>
      </div>
    </section>
  )
}

type PricingCardProps = {
  plan: Plan
  frequency: "monthly" | "yearly"
}

function PricingCard({ plan, frequency }: PricingCardProps) {
  const Icon = plan.icon

  return (
    <div
      className={cn(
        "relative flex flex-col bg-card rounded-3xl p-6 sm:p-8 border border-border transition-all duration-300 group hover:-translate-y-2 hover:border-primary/30 hover:shadow-[var(--shadow-card)]",
        plan.highlighted && "scale-105"
      )}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Badges */}
      <AnimatePresence mode="wait">
        <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-10 flex items-center gap-2">
          {plan.highlighted && (
            <motion.div
              className="flex items-center gap-1 rounded-full border bg-background px-3 py-1 text-xs font-medium shadow-sm"
              key="popular-badge"
              layout
              transition={{ duration: 0.1 }}
            >
              <Star className="size-3 fill-current" />
              Popular
            </motion.div>
          )}

          {frequency === "yearly" && plan.price.monthly > plan.price.yearly && (
            <motion.div
              animate={{ opacity: 1 }}
              className="flex items-center gap-1 rounded-full border bg-primary px-3 py-1 text-primary-foreground text-xs font-medium shadow-sm"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              key="discount-badge"
              layout
              transition={{ duration: 0.15 }}
            >
              {Math.round(((plan.price.monthly - plan.price.yearly) / plan.price.monthly) * 100)}% off
            </motion.div>
          )}
        </div>
      </AnimatePresence>

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
      <div className="relative z-10 mb-6">
        <div className="flex items-end gap-2">
          <NumberFlow
            className="text-4xl sm:text-5xl font-normal text-foreground"
            format={{
              style: "currency",
              currency: "USD",
              notation: "compact",
            }}
            value={plan.price[frequency]}
          />
          <span className="text-base text-muted-foreground mb-2">/Month</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground font-normal">billed {frequency}</p>
      </div>

      {/* Description */}
      <p className="relative z-10 text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
        {plan.info}
      </p>

      {/* Features */}
      <div className="relative z-10 space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <div className="flex items-center gap-2" key={feature}>
            <CheckCircle className="size-3.5 text-foreground flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{feature}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative z-10">
        <Button className="w-full rounded-full py-6 font-medium bg-card border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          Get started
        </Button>
      </div>
    </div>
  )
}

export default PricingSection2