"use client"

import { Badge } from "@/components/ui/badge"
import { motion, useReducedMotion } from "framer-motion"

// ─── Easing ───────────────────────────────────────────────────────────────────
// Strong expo ease-out — starts fast, feels immediately responsive.
// Built-in 'easeOut' is too weak. All entering elements use this.
const expo = [0.16, 1, 0.3, 1] as const

// ─── Variants ─────────────────────────────────────────────────────────────────

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

// Heading: translateY + opacity. Marketing section seen rarely → 0.8s acceptable.
const headingVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: expo, delay: 0.15 },
  },
}

// Grid wrapper: drives the stagger cascade into each card.
// staggerChildren 0.06 = 60ms between cards — short enough to feel
// snappy, long enough to read as a cascade across 8 items.
const gridVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

// Card entrance: scale(0.95) + opacity.
// Never from scale(0) — 0.95 gives the "growing in" feel.
// No blur: cards have border + background, blur would look muddy.
const cardVariant = {
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

const fadeOnlyGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const logos = [
  { src: "https://storage.efferd.com/logo/nvidia-wordmark.svg", alt: "Nvidia Logo" },
  { src: "https://storage.efferd.com/logo/supabase-wordmark.svg", alt: "Supabase Logo" },
  { src: "https://storage.efferd.com/logo/openai-wordmark.svg", alt: "OpenAI Logo" },
  { src: "https://storage.efferd.com/logo/turso-wordmark.svg", alt: "Turso Logo" },
  { src: "https://storage.efferd.com/logo/vercel-wordmark.svg", alt: "Vercel Logo" },
  { src: "https://storage.efferd.com/logo/github-wordmark.svg", alt: "GitHub Logo" },
  { src: "https://storage.efferd.com/logo/claude-wordmark.svg", alt: "Claude AI Logo" },
  { src: "https://storage.efferd.com/logo/clerk-wordmark.svg", alt: "Clerk Logo" },
]

// ─── LogoCloudSection ─────────────────────────────────────────────────────────

export default function LogoCloudSection() {
  const shouldReduceMotion = useReducedMotion()

  const line = shouldReduceMotion ? fadeOnly : lineVariant
  const badge = shouldReduceMotion ? fadeOnly : badgeVariant
  const heading = shouldReduceMotion ? fadeOnly : headingVariant
  const grid = shouldReduceMotion ? fadeOnlyGrid : gridVariant
  const card = shouldReduceMotion ? fadeOnly : cardVariant

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">

          {/* Badge row */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {/* Line — scaleX reveal from right edge inward */}
            <motion.div
              className="flex items-center origin-right"
              variants={line}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
            </motion.div>

            <motion.div
              variants={badge}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">Partners</span>
              </Badge>
            </motion.div>

            {/* Line — scaleX reveal from left edge outward */}
            <motion.div
              className="flex items-center origin-left"
              variants={line}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </motion.div>
          </div>

          {/* Heading */}
          <motion.div
            className="flex flex-col items-center gap-4 sm:gap-6"
            variants={heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-center px-4">
              <span className="text-muted-foreground">Your favorite companies are </span>
              <span className="text-primary">our partners.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* ── Logo Grid ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-1 rounded-3xl bg-border"
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.alt}
              variants={card}
              // willChange on transform+opacity only — no filter promotion.
              style={{ willChange: "transform, opacity" }}
              className={[
                "group flex items-center justify-center rounded-3xl border border-border bg-card p-8 sm:p-12",
                // FIX: replaced `transition-all duration-300` — animating `all`
                // is an Emil antipattern. Specify exact properties.
                // translateY + border-color are the only things changing on hover.
                "transition-[transform,border-color] duration-200",
                // FIX: hover transforms gated behind pointer:fine media query.
                // Touch devices trigger :hover on tap, causing a false positive
                // translateY lift that looks broken and doesn't reset cleanly.
                // shadow removed from transition — box-shadow triggers paint,
                // not GPU-composited. The border-color change is sufficient.
                "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1",
                "[@media(hover:hover)_and_(pointer:fine)]:hover:border-primary/30",
              ].join(" ")}
            >
              <img
                alt={logo.alt}
                className={[
                  "pointer-events-none block h-5 sm:h-6 select-none",
                  // FIX: specify exact property (transform only), add explicit
                  // `ease` easing — on-screen scale change = ease, not ease-out.
                  // Gate behind pointer:fine so touch doesn't trigger the scale.
                  "transition-transform duration-200 ease",
                  "[@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-110",
                  "dark:brightness-0 dark:invert",
                ].join(" ")}
                height="auto"
                loading="lazy"
                src={logo.src || "/placeholder.svg"}
                width="auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}