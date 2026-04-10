'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, useAnimation, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MoveRight, PhoneCall } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';


// ── Animation Variants ────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15, ease: 'easeOut' },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.42, ease: 'easeOut' },
  },
};

const previewVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = useMemo(
    () => ['amazing', 'new', 'wonderful', 'beautiful', 'smart'],
    [],
  );

  useEffect(() => {
    const id = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(id);
  }, [titleNumber, titles]);

  // App preview animation
  const previewControls = useAnimation();
  const [previewRef, previewInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (previewInView) previewControls.start('visible');
  }, [previewControls, previewInView]);

  return (
    <section className="relative py-12 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* ── Badge with flanking lines ── */}
          <motion.div
            className="mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3"
            variants={badgeVariants}
          >
            <div className="w-8 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />

            <Badge variant="hero" className="group">
              <span className="text-xs sm:text-sm font-normal">Read our launch article</span>
            </Badge>

            <div className="w-8 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </motion.div>

          {/* ── Heading with rotating word ── */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-foreground max-w-3xl mb-4 tracking-tight"
            variants={headingVariants}
          >
            {/* Static line */}
            <span className="block">This is something</span>

            {/* Rotating word */}
            <span className="relative flex w-full justify-center overflow-hidden md:pb-4 md:pt-1 h-[1.2em]">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold"
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ type: 'spring', stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* ── Description ── */}
          <motion.p
            className="max-w-2xl text-muted-foreground text-sm sm:text-base font-normal leading-relaxed mb-8"
            variants={descriptionVariants}
          >
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our goal
            is to streamline SMB trade, making it easier and faster than ever.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center"
            variants={buttonVariants}
          >
            <Button size="lg" variant="outline" className="gap-2 rounded-full font-medium w-full sm:w-auto">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>

            <Button
              size="lg"
              className="gap-2 rounded-full font-medium bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto"
            >
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* ── App Preview ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
        <motion.div
          ref={previewRef}
          initial="hidden"
          animate={previewControls}
          variants={previewVariants}
        >
          {/* Outer shell — theme-aware neutral border + bg */}
          <div className="rounded-lg sm:rounded-xl bg-muted/60 dark:bg-muted/40 border border-border p-2 sm:p-3 md:p-4">
            {/* Inner image */}
            <div className="rounded-lg overflow-hidden border border-border shadow-[0px_14px_54px_-20px_rgba(0,0,0,0.2)] dark:shadow-[0px_14px_54px_-20px_rgba(0,0,0,0.55)]">
              <img
                src="https://opencal-nextjs.vercel.app/12.png"
                alt="AI chat builder interface preview"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}