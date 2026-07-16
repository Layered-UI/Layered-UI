"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"

// Easing
// Strong expo ease-out — starts fast, feels immediately responsive.
// Built-in 'easeOut' is too weak. All entering elements use this.
const expo = [0.16, 1, 0.3, 1] as const

// Variants

// Badge row lines: scaleX reveal from origin point.
const lineVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: expo, delay: 0.1 },
  },
}

// Badge pill: translateY + opacity only — no blur (text, not GPU-composited).
const badgeVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: expo },
  },
}

// Large "404" background text: rises in from below on mount.
// Decorative, seen once — marketing/explanatory category, longer duration ok.
const bgTextVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: expo, delay: 0.05 },
  },
}

// Heading: translateY + opacity. Seen rarely → 0.8s acceptable.
const headingVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: expo, delay: 0.15 },
  },
}

// Description: slightly later than heading to cascade naturally.
const descVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: expo, delay: 0.25 },
  },
}

// Button group: stagger the two buttons 100ms apart.
const buttonGroupVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.35 },
  },
}

// Individual button entrance: scale(0.95) + opacity.
// Never from scale(0) — 0.95 gives the "growing in" feel.
const buttonItemVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: expo },
  },
}

// Reduced-motion: opacity only, no movement.
const fadeOnly = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

const fadeOnlyGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

// ─── NotFoundPage ─────────────────────────────────────────────────────────────

export default function NotFoundPage() {
  const shouldReduceMotion = useReducedMotion()

  const line = shouldReduceMotion ? fadeOnly : lineVariant
  const badge = shouldReduceMotion ? fadeOnly : badgeVariant
  const bgText = shouldReduceMotion ? fadeOnly : bgTextVariant
  const heading = shouldReduceMotion ? fadeOnly : headingVariant
  const desc = shouldReduceMotion ? fadeOnly : descVariant
  const btnGrp = shouldReduceMotion ? fadeOnlyGroup : buttonGroupVariant
  const btnItem = shouldReduceMotion ? fadeOnly : buttonItemVariant

  return (
    <section className="relative min-h-[calc(100vh-4rem)] py-16 sm:py-20 md:py-28 overflow-hidden flex items-center">

      {/* ── Large background "404" text ──────────────────────────────────── */}
      {/* Decorative, aria-hidden — same pattern as Hero background text.    */}
      {/* Positioned at bottom so content overlaps it naturally.             */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center overflow-hidden pb-8 select-none">
        <motion.span
          aria-hidden="true"
          className="bg-[linear-gradient(90deg,rgba(0,0,0,0.07)_0%,rgba(0,0,0,0.03)_50%,transparent_100%)] bg-clip-text text-[160px] sm:text-[240px] md:text-[320px] font-black leading-[0.9] tracking-[-0.03em] text-transparent dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]"
          variants={bgText}
          initial="hidden"
          animate="visible"
        >
          404
        </motion.span>
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">

          {/* Badge row — identical structure to LogoCloudSection */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <motion.div
              className="flex items-center origin-right"
              variants={line}
              initial="hidden"
              animate="visible"
            >
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
            </motion.div>

            <motion.div
              variants={badge}
              initial="hidden"
              animate="visible"
            >
              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">Error 404</span>
              </Badge>
            </motion.div>

            <motion.div
              className="flex items-center origin-left"
              variants={line}
              initial="hidden"
              animate="visible"
            >
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </motion.div>
          </div>

          {/* Heading */}
          <motion.div
            className="flex flex-col items-center gap-4 sm:gap-6"
            variants={heading}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-center px-4">
              <span className="text-muted-foreground">This page </span>
              <span className="text-primary">doesn't exist.</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-sm sm:text-base font-normal max-w-md leading-relaxed"
            variants={desc}
            initial="hidden"
            animate="visible"
          >
            The page you're looking for may have been moved, deleted, or never
            existed. Double-check the URL or head back home.
          </motion.p>

          {/* CTA buttons — staggered pair, same hover conventions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={btnGrp}
            initial="hidden"
            animate="visible"
          >
            {/* Primary button */}
            <motion.div variants={btnItem} style={{ willChange: "transform, opacity" }}>
              <Button
                asChild
                className={[
                  "rounded-full px-8 py-3 text-sm font-medium",
                  // Specify exact properties — no transition-all.
                  // scale(0.97) on :active — all pressable elements need press
                  // feedback at 160ms ease-out.
                  "transition-[opacity,transform] duration-[160ms] ease-out",
                  "hover:opacity-90 active:scale-[0.97]",
                ].join(" ")}
              >
                <Link href="/">
                  <Home className="w-4 h-4" />
                  Go home
                </Link>
              </Button>
            </motion.div>

            {/* Secondary button */}
            <motion.div variants={btnItem} style={{ willChange: "transform, opacity" }}>
              <Button
                asChild
                variant="outline"
                className={[
                  "rounded-full px-8 py-3 text-sm font-medium",
                  // Background color change on hover → `ease` easing
                  // (on-screen property change, not an entrance).
                  // Gated behind pointer:fine — touch false-positive guard.
                  "transition-[background-color,border-color,transform] duration-200 ease",
                  "[@media(hover:hover)_and_(pointer:fine)]:hover:bg-muted",
                  "active:scale-[0.97] transition-transform duration-[160ms] ease-out",
                ].join(" ")}
              >
                <Link href="javascript:history.back()">
                  <ArrowLeft className="w-4 h-4" />
                  Go back
                </Link>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}