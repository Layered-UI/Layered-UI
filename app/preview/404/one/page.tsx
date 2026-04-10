'use client';

import { motion, type Variants } from 'framer-motion';
import { HomeIcon, CompassIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ── Animation Variants ────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const numberVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.25, ease: 'easeOut' },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.35, ease: 'easeOut' },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.45, ease: 'easeOut' },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4">
      <motion.div
        className="flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* ── 404 number ── */}
        <motion.h1
          className="text-[10rem] sm:text-[14rem] md:text-[18rem] font-extrabold leading-none tracking-tight text-foreground select-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)',
          }}
          variants={numberVariants}
        >
          404
        </motion.h1>

        {/* ── Divider with flanking lines ── */}
        <motion.div
          className="flex items-center justify-center gap-3 -mt-6 sm:-mt-10 mb-6"
          variants={lineVariants}
          style={{ transformOrigin: 'center' }}
        >
          <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-primary/30 to-transparent" />
          <span className="text-xs font-normal text-muted-foreground tracking-widest uppercase">
            Page not found
          </span>
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-primary/30 to-transparent" />
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          className="max-w-sm text-muted-foreground text-sm sm:text-base font-normal leading-relaxed mb-8"
          variants={descriptionVariants}
        >
          The page you're looking for might have been moved or doesn't exist.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center"
          variants={buttonVariants}
        >
          <Button
            size="lg"
            className="gap-2 rounded-full font-medium bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto"
            asChild
          >
            <a href="#">
              Go Home
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="gap-2 rounded-full font-medium w-full sm:w-auto"
            asChild
          >
            <a href="#">
              Explore
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}