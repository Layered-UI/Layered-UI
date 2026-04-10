"use client";

import Gemini from '@/components/logos/Gemini';
import Replit from '@/components/logos/Replit';
import MagicUI from '@/components/logos/MagicUI';
import VSCodium from '@/components/logos/VSCodium';
import MediaWiki from '@/components/logos/MediaWiki';
import GooglePaLM from '@/components/logos/GooglePalM';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// ─── Easing ───────────────────────────────────────────────────────────────────
const expo = [0.16, 1, 0.3, 1] as const

// ─── Variants ─────────────────────────────────────────────────────────────────

const lineVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: expo, delay: 0.15 },
  },
}

const badgeVariant = {
  hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: expo },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(3px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: expo, delay },
  }),
}

// Each row fades + rises, rows stagger one after another
const rowVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11 },
  },
}

// Individual integration card entrance
const cardVariants = {
  hidden: { opacity: 0, scale: 0.72, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: expo },
  },
}

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
}

const ctaVariant = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: expo, delay: 0.2 },
  },
}

// ─── IntegrationCard ──────────────────────────────────────────────────────────

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.14,
        rotate: [0, -4, 4, 0],
        transition: { duration: 0.45, ease: expo },
      }}
      style={{ willChange: "transform, opacity, filter" }}
      className={cn(
        'bg-background dark:bg-background relative flex size-20 rounded-full border border-primary/15 dark:border-primary/30 hover:border-primary/30 dark:hover:border-primary/50 transition-colors duration-300 cursor-pointer',
        className
      )}
    >
      <div
        role="presentation"
        className={cn(
          'absolute inset-0 rounded-full border border-primary/15 dark:border-primary/30',
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </motion.div>
  );
};

// ─── IntegrationsSection ──────────────────────────────────────────────────────

export default function IntegrationsSection() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const ctaRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" })
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-30px" })

  return (
    <section>
      <div className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div ref={headerRef} className="mb-16 flex flex-col items-center text-center gap-6 sm:gap-8">

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
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4"
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              Integrate with your favorite tools
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-muted-foreground text-sm sm:text-base font-normal max-w-2xl"
              variants={fadeUp}
              custom={0.22}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              Connect seamlessly with popular platforms and services to enhance your workflow.
            </motion.p>
          </div>

          {/* Integration Cards Grid */}
          <div className="relative mx-auto w-fit mb-12">
            <div
              role="presentation"
              className="absolute inset-0 z-10 from-transparent to-75% dark:to-background rounded-3xl pointer-events-none"
            />

            <motion.div
              ref={gridRef}
              variants={gridVariants}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
            >
              {/* Row 1 */}
              <motion.div
                className="mx-auto mb-2 flex w-fit justify-center gap-2"
                variants={rowVariants}
              >
                <IntegrationCard><Gemini /></IntegrationCard>
                <IntegrationCard><Replit /></IntegrationCard>
              </motion.div>

              {/* Row 2 */}
              <motion.div
                className="mx-auto my-2 flex w-fit justify-center gap-2"
                variants={rowVariants}
              >
                <IntegrationCard><MagicUI /></IntegrationCard>
                <IntegrationCard><Logo /></IntegrationCard>
                <IntegrationCard><VSCodium /></IntegrationCard>
              </motion.div>

              {/* Row 3 */}
              <motion.div
                className="mx-auto flex w-fit justify-center gap-2"
                variants={rowVariants}
              >
                <IntegrationCard><MediaWiki /></IntegrationCard>
                <IntegrationCard><GooglePaLM /></IntegrationCard>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            ref={ctaRef}
            className="flex justify-center"
            variants={ctaVariant}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
          >
            <Button asChild className="rounded-3xl px-8 py-6 text-base">
              <Link href="#">Get Started</Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
