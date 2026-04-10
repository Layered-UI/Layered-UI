"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import { motion, useInView, type Variants, type TargetAndTransition } from "framer-motion";

// Easing
const expo = [0.16, 1, 0.3, 1] as const

// Types

type LogoType = {
    src?: string;
    alt: string;
    isInvertable?: boolean;
    component?: React.ComponentType<{ className?: string }>;
};

type TileData = {
    row: number;
    col: number;
    logo?: LogoType;
};

const tiles: TileData[] = [
    { row: 0, col: 1 },
    { row: 0, col: 3, logo: { src: "https://storage.efferd.com/logo/notion.svg", alt: "Notion Logo" } },
    { row: 1, col: 0 },
    { row: 1, col: 2, logo: { src: "https://storage.efferd.com/logo/cursor.svg", alt: "Cursor Logo", isInvertable: true } },
    { row: 1, col: 4, logo: { src: "https://storage.efferd.com/logo/vercel.svg", alt: "Vercel Logo", isInvertable: true } },
    { row: 2, col: 1, logo: { component: Logo, alt: "Layered Logo" } },
    { row: 2, col: 3, logo: { src: "https://storage.efferd.com/logo/gmail.svg", alt: "Gmail Logo" } },
    { row: 3, col: 0 },
    { row: 3, col: 2, logo: { src: "https://storage.efferd.com/logo/supabase.svg", alt: "Supabase Logo" } },
    { row: 3, col: 4, logo: { src: "https://storage.efferd.com/logo/canva.svg", alt: "Canva Logo" } },
    { row: 4, col: 1, logo: { src: "https://storage.efferd.com/logo/adobe.svg", alt: "Adobe Logo" } },
    { row: 4, col: 3, logo: { src: "https://storage.efferd.com/logo/polar.svg", alt: "Polar Logo" } },
];

// Variants 
const lineVariant: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1, opacity: 1,
        transition: { duration: 0.9, ease: expo, delay: 0.15 },
    },
}

const badgeVariant: Variants = {
    hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
    visible: {
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.7, ease: expo },
    },
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28, filter: "blur(3px)" },
    visible: (delay = 0) => ({
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.85, ease: expo, delay },
    }),
}

// Tiles scatter inward from random offsets, staggered by distance from center
function getTileVariant(row: number, col: number): Variants {
    // Center of grid is row 2, col 2
    const dx = (col - 2) * 18
    const dy = (row - 2) * 18
    const distFromCenter = Math.sqrt((col - 2) ** 2 + (row - 2) ** 2)
    const delay = 0.38 + distFromCenter * 0.08

    return {
        hidden: {
            opacity: 0,
            x: dx,
            y: dy,
            scale: 0.78,
            filter: "blur(6px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.85, ease: expo, delay },
        },
    }
}

// Subtle idle float for logo tiles — each gets a unique phase
function getFloatAnimation(index: number): TargetAndTransition {
    const yAmp = 4 + (index % 3) * 1.5
    const duration = 3.2 + (index % 4) * 0.5
    return {
        y: [0, -yAmp, 0],
        transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.18,
        },
    }
}

// IntegrationCard 

function IntegrationCard({ row, col, logo, index, inView }: TileData & { index: number; inView: boolean }) {
    const variant = getTileVariant(row, col)

    return (
        <motion.div
            variants={variant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={logo ? {
                scale: 1.14,
                transition: { duration: 0.35, ease: expo },
            } : undefined}
            style={{
                position: "absolute",
                left: col * 72,
                top: row * 72,
                willChange: "transform, opacity, filter",
            }}
        >
            {/* Idle float only on logo tiles */}
            <motion.div
                animate={inView && logo ? getFloatAnimation(index) : {}}
                className={cn(
                    "flex size-18 items-center justify-center rounded-xl border border-border transition-colors duration-300",
                    logo
                        ? "bg-card shadow-xs hover:border-primary/30 hover:shadow-sm dark:bg-card/60"
                        : "bg-secondary/30 dark:bg-background"
                )}
            >
                {logo && (
                    <>
                        {logo.component ? (
                            <logo.component className="size-8" />
                        ) : (
                            <img
                                alt={logo.alt}
                                className={cn(
                                    "pointer-events-none size-8 select-none object-contain p-1",
                                    logo.isInvertable && "dark:invert"
                                )}
                                height={40}
                                src={logo.src}
                                width={40}
                            />
                        )}
                    </>
                )}
            </motion.div>
        </motion.div>
    );
}

// IntegrationsSection

export default function IntegrationsSection() {
    const headerRef = useRef(null)
    const gridRef = useRef(null)

    const headerInView = useInView(headerRef, { once: true, margin: "-60px" })
    const gridInView = useInView(gridRef, { once: true, margin: "-40px" })

    return (
        <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div
                    ref={headerRef}
                    className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-16"
                >
                    {/* Badge row */}
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
                                <span className="text-sm font-normal">Integrations</span>
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

                    {/* Heading */}
                    <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-3xl">
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-balance text-foreground px-4"
                            variants={fadeUp}
                            custom={0.1}
                            initial="hidden"
                            animate={headerInView ? "visible" : "hidden"}
                        >
                            Seamless Integration
                        </motion.h2>

                        <motion.p
                            className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed px-4"
                            variants={fadeUp}
                            custom={0.22}
                            initial="hidden"
                            animate={headerInView ? "visible" : "hidden"}
                        >
                            Integrate with over 100+ tools and platforms to streamline your
                            workflow and boost productivity.
                        </motion.p>
                    </div>
                </div>

                {/* Integration Grid */}
                <div className="flex justify-center">
                    <div
                        ref={gridRef}
                        className="relative size-[360px]"
                        style={{
                            maskImage: "radial-gradient(ellipse at center, black 30%, black 55%, transparent 80%)",
                            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, black 55%, transparent 80%)",
                        }}
                    >
                        {tiles.map((tile, index) => (
                            <IntegrationCard
                                key={`${tile.row}_${tile.col}`}
                                {...tile}
                                index={index}
                                inView={gridInView}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}