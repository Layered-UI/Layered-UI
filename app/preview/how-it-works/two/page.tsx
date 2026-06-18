"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Logo } from "@/components/logo"
import { Badge } from "@/components/ui/badge"

// ─── Easing ───────────────────────────────────────────────────────────────────
// Strong expo ease-out — starts fast, feels immediately responsive.
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

// Badge pill: translateY + opacity only.
const badgeVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: expo },
    },
}

// Heading: translateY + opacity.
const headingVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: expo, delay: 0.15 },
    },
}

// Description: cascades just after heading.
const descVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: expo, delay: 0.25 },
    },
}

// Cards group: stagger cascade.
const cardsGroupVariant = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
}

// Card entrance: scale(0.95) + opacity.
const cardVariant = {
    hidden: { opacity: 0, y: 16, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: expo },
    },
}

// Reduced-motion: opacity only, no movement.
const fadeOnly = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
}

const fadeOnlyGroup = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
}

// Step data

const steps = [
    {
        title: "Start with your team",
        description: "Add people, set roles and launch your HR setup fast.",
    },
    {
        title: "Streamline daily work",
        description: "Automate time-off and feedback to simplify daily tasks.",
    },
    {
        title: "Lead with confidence",
        description: "Track key team insights to guide better decisions.",
    },
]

// ─── HowItWorksStepsSection ────────────────────────────────────────────────────

export default function HowItWorksStepsSection() {
    const shouldReduceMotion = useReducedMotion()

    const line = shouldReduceMotion ? fadeOnly : lineVariant
    const badge = shouldReduceMotion ? fadeOnly : badgeVariant
    const heading = shouldReduceMotion ? fadeOnly : headingVariant
    const desc = shouldReduceMotion ? fadeOnly : descVariant
    const cardsGrp = shouldReduceMotion ? fadeOnlyGroup : cardsGroupVariant
    const card = shouldReduceMotion ? fadeOnly : cardVariant

    return (
        <section className="w-full bg-background py-16 sm:py-20 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12 sm:gap-14 md:gap-16">
                {/* ── Header ─────────────────────────────────────────────────────── */}
                <div className="flex flex-col items-center gap-6 sm:gap-8 w-full text-center">
                    {/* Badge row */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <motion.div
                            className="flex items-center origin-right"
                            variants={line}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                        >
                            <div className="w-12 sm:w-20 lg:w-32 h-px bg-gradient-to-l from-primary/30 to-transparent" />
                        </motion.div>

                        <motion.div
                            variants={badge}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                        >
                            <Badge variant="hero">
                                <span className="text-sm font-normal">How it works</span>
                            </Badge>
                        </motion.div>

                        <motion.div
                            className="flex items-center origin-left"
                            variants={line}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                        >
                            <div className="w-12 sm:w-20 lg:w-32 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Heading */}
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4 text-balance"
                        variants={heading}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        Simplify time, feedback and scheduling
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="max-w-xl text-sm sm:text-base font-normal leading-relaxed text-muted-foreground px-4 text-pretty"
                        variants={desc}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        Build efficient workflows, reduce manual work, and give your team
                        more time to focus on culture and growth.
                    </motion.p>
                </div>

                {/* ── Step cards ─────────────────────────────────────────────────── */}
                <motion.div
                    className="w-full p-2 bg-secondary/50 rounded-[28px] border border-border/50 grid grid-cols-1 md:grid-cols-3 gap-2"
                    variants={cardsGrp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.title}
                            variants={card}
                            style={{ willChange: "transform, opacity" }}
                            className="w-full bg-background rounded-[22px] px-8 py-10 border border-border/40 flex flex-col items-center text-center gap-5 shadow-sm"
                        >
                            <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary/80 border border-border/60">
                                <Logo className="size-8 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-lg sm:text-xl font-medium text-foreground leading-snug">
                                    {step.title}
                                </h3>
                                <p className="text-sm sm:text-base font-normal text-muted-foreground leading-relaxed max-w-[280px] mx-auto text-pretty">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
