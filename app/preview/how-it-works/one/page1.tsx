"use client";

import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { UserIcon, ContactIcon, CrosshairIcon } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Easing ───────────────────────────────────────────────────────────────────
const expo = [0.16, 1, 0.3, 1] as const

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
    {
        id: "choose-role",
        icon: UserIcon,
        title: "Choose your role",
        description: "Select whether you're joining as an employee or team manager.",
    },
    {
        id: "enter-details",
        icon: ContactIcon,
        title: "Enter your details",
        description: "Set up your profile in minutes and connect with your team instantly.",
    },
    {
        id: "define-focus",
        icon: CrosshairIcon,
        title: "Define your focus",
        description: "Choose your department and title to tailor your experience.",
    },
];

// ─── Variants ─────────────────────────────────────────────────────────────────

const lineVariant = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1, opacity: 1,
        transition: { duration: 0.9, ease: expo, delay: 0.15 },
    },
}

const badgeVariant = {
    hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
    visible: {
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.7, ease: expo },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 28, filter: "blur(3px)" },
    visible: (delay = 0) => ({
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.85, ease: expo, delay },
    }),
}

const leftColVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
}

const stepCardVariant = {
    hidden: { opacity: 0, x: -32, filter: "blur(6px)" },
    visible: {
        opacity: 1, x: 0, filter: "blur(0px)",
        transition: { duration: 0.85, ease: expo },
    },
}

const rightPanelVariant = {
    hidden: { opacity: 0, x: 32, filter: "blur(8px)" },
    visible: {
        opacity: 1, x: 0, filter: "blur(0px)",
        transition: { duration: 0.95, ease: expo, delay: 0.35 },
    },
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(0);

    const headerRef = useRef(null)
    const contentRef = useRef(null)

    const headerInView = useInView(headerRef, { once: true, margin: "-60px" })
    const contentInView = useInView(contentRef, { once: true, margin: "-60px" })

    return (
        <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div
                    ref={headerRef}
                    className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-16"
                >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <motion.div
                            className="origin-right"
                            variants={lineVariant}
                            initial="hidden"
                            animate={headerInView ? "visible" : "hidden"}
                        >
                            <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
                        </motion.div>

                        <motion.div
                            variants={badgeVariant}
                            initial="hidden"
                            animate={headerInView ? "visible" : "hidden"}
                        >
                            <Badge variant="hero" className="group">
                                <span className="text-sm font-normal">How it works?</span>
                            </Badge>
                        </motion.div>

                        <motion.div
                            className="origin-left"
                            variants={lineVariant}
                            initial="hidden"
                            animate={headerInView ? "visible" : "hidden"}
                        >
                            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                        </motion.div>
                    </div>

                    <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-3xl">
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-balance text-foreground px-4"
                            variants={fadeUp}
                            custom={0.1}
                            initial="hidden"
                            animate={headerInView ? "visible" : "hidden"}
                        >
                            Start fast, join your team easier
                        </motion.h2>

                        <motion.p
                            className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed px-4"
                            variants={fadeUp}
                            custom={0.22}
                            initial="hidden"
                            animate={headerInView ? "visible" : "hidden"}
                        >
                            Set up your profile in minutes and sync with your workspace.
                            <br className="hidden sm:block" />
                            No friction, no confusion — just flow.
                        </motion.p>
                    </div>
                </div>

                {/* Content */}
                <div
                    ref={contentRef}
                    className="grid grid-cols-1 gap-3 md:grid-cols-2 md:items-stretch"
                >
                    {/* Left: step cards slide in from left, staggered */}
                    <motion.div
                        className="flex flex-col gap-3"
                        variants={leftColVariants}
                        initial="hidden"
                        animate={contentInView ? "visible" : "hidden"}
                    >
                        {steps.map((step, index) => {
                            const isActive = index === activeStep;
                            return (
                                <motion.button
                                    key={step.id}
                                    variants={stepCardVariant}
                                    onClick={() => setActiveStep(index)}
                                    whileHover={{ x: 4, transition: { duration: 0.3, ease: expo } }}
                                    whileTap={{ scale: 0.985, transition: { duration: 0.18, ease: expo } }}
                                    style={{ willChange: "transform, opacity, filter" }}
                                    className={cn(
                                        "group relative flex-1 overflow-hidden rounded-2xl border text-left px-8 py-8 transition-colors duration-300",
                                        isActive
                                            ? "border-primary/20 bg-secondary/50"
                                            : "bg-background hover:bg-secondary/30"
                                    )}
                                >
                                    {/* Active indicator bar */}
                                    <motion.div
                                        className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary rounded-full"
                                        initial={{ scaleY: 0, opacity: 0 }}
                                        animate={isActive
                                            ? { scaleY: 1, opacity: 1 }
                                            : { scaleY: 0, opacity: 0 }
                                        }
                                        transition={{ duration: 0.4, ease: expo }}
                                        style={{ originY: 0.5 }}
                                    />

                                    {/* Gradient overlay */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent transition-opacity duration-300",
                                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    )} />

                                    <div className="relative z-10 flex flex-col gap-4">
                                        {/* Icon circle */}
                                        <motion.div
                                            animate={isActive
                                                ? { scale: 1.08, transition: { duration: 0.4, ease: expo } }
                                                : { scale: 1, transition: { duration: 0.4, ease: expo } }
                                            }
                                            className={cn(
                                                "flex size-10 items-center justify-center rounded-full border bg-secondary transition-colors duration-300",
                                                isActive
                                                    ? "border-primary/50"
                                                    : "border-border group-hover:border-primary/40"
                                            )}
                                        >
                                            <step.icon className={cn(
                                                "size-4 transition-colors duration-300",
                                                isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                                            )} />
                                        </motion.div>

                                        {/* Title + description */}
                                        <div className="space-y-2">
                                            <h3 className="font-medium text-foreground text-base leading-snug">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </motion.div>

                    {/* Right: image panel slides in from right */}
                    <motion.div
                        className="relative overflow-hidden rounded-2xl border bg-secondary/30 min-h-[460px]"
                        variants={rightPanelVariant}
                        initial="hidden"
                        animate={contentInView ? "visible" : "hidden"}
                        style={{ willChange: "transform, opacity, filter" }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeStep}
                                src="/assets/phone.png"
                                alt={steps[activeStep].title}
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                initial={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
                                transition={{ duration: 0.55, ease: expo }}
                            />
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}