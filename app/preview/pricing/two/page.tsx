"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic plan",
    price: 9,
    description:
      "Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease",
    featured: false,
    features: [
      "Unlimited Invoices",
      "Next-Day Payments",
      "Secure Payment Gateway",
      "Basic Analytics and Reporting",
      "Email Support",
    ],
  },
  {
    name: "Pro plan",
    price: 19,
    description:
      "Designed for growing businesses, the Basic Plan expands on our Starter package with additional features",
    featured: true,
    features: [
      "Unlimited Invoices",
      "Next-Day Payments",
      "Secure Payment Gateway",
      "Advanced Analytics and Reporting",
      "Priority Email Support",
      "Custom Integrations",
    ],
  },
  {
    name: "Enterprise plan",
    price: 49,
    description:
      "Tailored for large enterprises, this plan offers advanced features, personalized support, and the scalability.",
    featured: false,
    features: [
      "Unlimited Invoices",
      "Instant Payments",
      "Enterprise Payment Gateway",
      "Advanced Analytics and Reporting",
      "24/7 Priority Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

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
              Choose a plan that fits your business needs and budget. No hidden
              fees, no surprises—just straightforward pricing for powerful
              financial management.
            </p>
          </div>
        </div>
      </div>

      {/* Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 flex justify-center">
        <div className="relative bg-muted rounded-full p-2 border border-border inline-flex">
          <div
            className="absolute top-2 bottom-2 bg-card rounded-full shadow-sm transition-all duration-300 ease-out"
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
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col bg-card rounded-3xl p-6 sm:p-8 border transition-all duration-300 group hover:-translate-y-2 ${
                plan.featured
                  ? "border-primary shadow-[var(--shadow-card)] ring-2 ring-primary/20"
                  : "border-border hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              }`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div
                className={`relative z-10 w-16 h-16 mb-6 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110 ${
                  plan.featured
                    ? "bg-gradient-to-br from-primary to-primary/60 border-primary/30"
                    : "bg-secondary border-border group-hover:border-primary/50"
                }`}
              >
                <Check
                  className={`w-6 h-6 ${
                    plan.featured
                      ? "text-primary-foreground"
                      : "text-primary"
                  }`}
                />
              </div>

              {/* Plan Name */}
              <h3 className="relative z-10 text-xl font-normal text-foreground mb-8">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="relative z-10 flex items-end gap-2 mb-6">
                <span className="text-4xl sm:text-5xl font-normal text-foreground">
                  ${isYearly ? plan.price * 10 : plan.price}
                </span>
                <span className="text-base text-muted-foreground mb-2">
                  /Month
                </span>
              </div>

              {/* Description */}
              <p className="relative z-10 text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                {plan.description}
              </p>

              {/* Features */}
              <div className="relative z-10 flex-1 space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-card-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="relative z-10">
                <Button
                  className={`w-full rounded-full py-6 font-medium transition-all duration-300 ${
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
                      : "bg-card border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Get started
                </Button>
              </div>

              {/* Corner accent for featured */}
              {plan.featured && (
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;