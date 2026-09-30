"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Logo } from "@/components/logo"

const expo = [0.16, 1, 0.3, 1] as const

const features = [
  {
    title: "Doctors you can trust",
    description:
      "Our physicians bring years of experience and genuine commitment to your wellbeing.",
  },
  {
    title: "Modern equipment",
    description:
      "We invest in the latest diagnostic tools for accurate results and better care.",
  },
  {
    title: "Straightforward approach",
    description:
      "No unnecessary tests or complications. Just honest medicine and clear explanations.",
  },
]

export default function WhyChooseUsSection() {
  const reduce = useReducedMotion()

  const lineVariant: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: expo },
    },
  }

  const badgeVariant: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expo } },
  }

  const headingVariant: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: expo, delay: 0.05 },
    },
  }

  const descVariant: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: expo, delay: 0.12 },
    },
  }

  const gridVariant: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: expo } },
  }

  return (
    <section className="w-full bg-background py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center gap-3">
            <motion.span
              aria-hidden
              variants={lineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="h-px w-16 origin-right bg-gradient-to-l from-border to-transparent sm:w-20"
            />
            <motion.span
              variants={badgeVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <Badge variant="hero">Why</Badge>
            </motion.span>
            <motion.span
              aria-hidden
              variants={lineVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="h-px w-16 origin-left bg-gradient-to-r from-border to-transparent sm:w-20"
            />
          </div>

          <motion.h2
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="text-balance text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Choose us
          </motion.h2>

          <motion.p
            variants={descVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            What sets our clinic apart.
          </motion.p>
        </div>

        {/* Feature cards */}
        <motion.ul
          variants={gridVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3 md:gap-8"
        >
          {features.map((feature) => (
            <motion.li
              key={feature.title}
              variants={cardVariant}
              style={{ willChange: "transform, opacity" }}
              className="group flex flex-col gap-6 rounded-[28px] bg-primary p-8 text-primary-foreground shadow-sm"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary-foreground/10">
                <Logo className="size-6 text-primary-foreground" />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-balance text-2xl font-normal leading-snug tracking-tight sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                  {feature.description}
                </p>
              </div>

              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Learn
                <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}