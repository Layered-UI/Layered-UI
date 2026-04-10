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
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

// ─── Easing ───────────────────────────────────────────────────────────────────
// Strong expo ease-out: starts fast, gives immediate visual feedback.
// Built-in easings lack the punch that makes animations feel intentional.
// Rule: all entering/exiting elements → ease-out. Never ease-in.
const expo = [0.16, 1, 0.3, 1] as const;

// ─── Variants ─────────────────────────────────────────────────────────────────

const lineVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: expo, delay: 0.15 },
  },
};

// Badge: translateY + opacity only.
// Removed filter:blur — blur on small text is not GPU-composited,
// triggers a repaint on every frame, and is imperceptible at y:8.
const badgeVariant = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: expo },
  },
};

// Heading + description: translateY + opacity only.
// Removed filter:blur — blur on text is not GPU-composited, forces
// a repaint on every animation frame.
// custom={delay} passes the stagger delay into the variant function.
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: expo, delay },
  }),
};

// Grid stagger cascade: gridVariants → rowVariants → cardVariants.
// Effective card delay = delayChildren(0.05) + row×0.14 + card×0.09.
// Stagger delays kept short (60–140ms) — long delays make the UI feel slow.
const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const rowVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

// Card entrance: scale(0.72) + opacity + blur.
// Nothing in the real world appears from nothing — 0.72 gives a
// "growing in" feel rather than snapping from invisible.
// blur(6px) is a one-time entrance cost, not a sustained animation.
const cardVariants = {
  hidden: { opacity: 0, scale: 0.72, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: expo },
  },
};

// CTA: translateY + opacity only.
// Delayed so it enters after the grid settles — grid is the scene,
// CTA is the punchline.
const ctaVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: expo, delay: 0.2 },
  },
};

// ─── Reduced-motion variants ──────────────────────────────────────────────────
// prefers-reduced-motion: remove all movement and blur, keep opacity
// transitions (they aid comprehension without causing motion sickness).
// Reduced motion ≠ no animation — just gentler.
const fadeOnly = {
  hidden: { opacity: 0 },
  // Function form so it's safe to swap in for fadeUp (which also uses custom={delay}).
  // Other variants (line/badge/cta) don't use custom but a function form is harmless.
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.4, ease: expo, delay },
  }),
};

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={cardVariants}

      // FIX: Framer Motion's whileHover/whileTap only accept Framer's own
      // motion value keys (scale, rotate, x, y…), NOT raw CSS transform strings.
      // A raw `transform: 'scale(1.14) rotate(4deg)'` string is silently ignored
      // in animate targets — it only works in `style`. Use named keys instead.
      //
      // Spring transition gives the hover momentum and interruptibility.
      // Springs maintain velocity when interrupted mid-animation; keyframe
      // arrays restart from zero. bounce:0.25 keeps it subtle but alive.
      whileHover={shouldReduceMotion ? {} : {
        scale: 1.14,
        rotate: 4,
        transition: { type: 'spring', duration: 0.4, bounce: 0.25 },
      }}

      // scale(0.97) on tap: all pressable elements need press feedback.
      // 160ms confirms the interface heard the user.
      whileTap={shouldReduceMotion ? {} : {
        scale: 0.97,
        transition: { duration: 0.16, ease: expo },
      }}

      // willChange: transform + opacity only.
      // Removed `filter` — willChange:filter creates a persistent composited
      // layer for the lifetime of the component. With 7 cards that's 7 always-on
      // layers. The entrance blur is a one-time cost that doesn't need promotion.
      style={{ willChange: 'transform, opacity' }}

      className={cn(
        'bg-background dark:bg-background relative flex size-20 rounded-full',
        'border border-primary/15 dark:border-primary/30 cursor-pointer',
        // Color change on hover → `ease` easing (not ease-out).
        // Ease-out is for entrances; ease is for on-screen property changes.
        // Tightened 300ms → 200ms: 300ms is perceptibly slow for a hover color.
        'transition-colors duration-200 ease',
        className,
      )}
    >
      <div
        role="presentation"
        className={cn(
          'absolute inset-0 rounded-full border border-primary/15 dark:border-primary/30',
          borderClassName,
        )}
      />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </motion.div>
  );
};

// ─── IntegrationsSection ──────────────────────────────────────────────────────

export default function IntegrationsSection() {
  const headerRef = useRef(null);
  const gridRef   = useRef(null);
  const ctaRef    = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const gridInView   = useInView(gridRef,   { once: true, margin: '-40px' });
  const ctaInView    = useInView(ctaRef,    { once: true, margin: '-30px' });

  const shouldReduceMotion = useReducedMotion();

  // Swap every variant to the reduced version when the user has requested
  // reduced motion at the OS level.
  const line  = shouldReduceMotion ? fadeOnly : lineVariant;
  const badge = shouldReduceMotion ? fadeOnly : badgeVariant;
  const text  = shouldReduceMotion ? fadeOnly : fadeUp;
  const cta   = shouldReduceMotion ? fadeOnly : ctaVariant;

  return (
    <section>
      <div className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ── Header ─────────────────────────────────────────────────────── */}
          <div
            ref={headerRef}
            className="mb-16 flex flex-col items-center text-center gap-6 sm:gap-8"
          >

            {/* Badge row */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <motion.div
                className="origin-right"
                variants={line}
                initial="hidden"
                animate={headerInView ? 'visible' : 'hidden'}
              >
                <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
              </motion.div>

              <motion.div
                variants={badge}
                initial="hidden"
                animate={headerInView ? 'visible' : 'hidden'}
              >
                <Badge variant="hero" className="group">
                  <span className="text-sm font-normal">Integrations</span>
                </Badge>
              </motion.div>

              <motion.div
                className="origin-left"
                variants={line}
                initial="hidden"
                animate={headerInView ? 'visible' : 'hidden'}
              >
                <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              </motion.div>
            </div>

            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4"
              variants={text}
              custom={0.1}
              initial="hidden"
              animate={headerInView ? 'visible' : 'hidden'}
            >
              Integrate with your favorite tools
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-muted-foreground text-sm sm:text-base font-normal max-w-2xl"
              variants={text}
              custom={0.22}
              initial="hidden"
              animate={headerInView ? 'visible' : 'hidden'}
            >
              Connect seamlessly with popular platforms and services to enhance your workflow.
            </motion.p>
          </div>

          {/* ── Integration Cards Grid ─────────────────────────────────────── */}
          <div className="relative mx-auto w-fit mb-12">
            <div
              role="presentation"
              className="absolute inset-0 z-10 from-transparent to-75% dark:to-background rounded-3xl pointer-events-none"
            />

            <motion.div
              ref={gridRef}
              variants={gridVariants}
              initial="hidden"
              animate={gridInView ? 'visible' : 'hidden'}
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

          {/* ── CTA ────────────────────────────────────────────────────────── */}
          <motion.div
            ref={ctaRef}
            className="flex justify-center"
            variants={cta}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
          >
            <Button
              asChild
              className={cn(
                'rounded-3xl px-8 py-6 text-base',
                // scale(0.97) on :active — all pressable elements need press feedback.
                // 160ms ease-out is the correct duration for button press feedback.
                'transition-transform duration-[160ms] ease-out active:scale-[0.97]',
              )}
            >
              <Link href="#">Get Started</Link>
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
