'use client';

import Link from 'next/link';
import { Eye, Code2, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, useInView, type Variants, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { useCopyToClipboard } from '@/hooks/useClipboard';
import CodeBlock from '@/components/code-block';

// You can easily swap these out for real components/blocks you want to feature
const previewComponents = [
  {
    title: "Hero Section",
    previewUrl: "/preview/hero-section/one",
    tag: "Marketing",
  },
  {
    title: "AI Input Form",
    previewUrl: "/preview/ai-interfaces/one",
    tag: "AI Interfaces",
  },
  {
    title: "Integrations",
    previewUrl: "/preview/integrations/one",
    tag: "Integrations",
  },
  {
    title: "How it works",
    previewUrl: "/preview/how-it-works/one",
    tag: "How it works",
  },
  {
    title: "Bento Grid",
    previewUrl: "/preview/bento/one",
    tag: "Layout",
  },
  {
    title: "Features Section",
    previewUrl: "/preview/features/one",
    tag: "Features",
  },
  {
    title: "Logo-Cloud",
    previewUrl: "/preview/logo-cloud/five",
    tag: "Logo Cloud",
  },
  {
    title: "Pricing Cards",
    previewUrl: "/preview/pricing/one",
    tag: "Pricing",
  },
  {
    title: "Team Section",
    previewUrl: "/preview/team/four",
    tag: "Team",
  },
];

function getLayout(count: number): string[] {
  switch (count) {
    case 1: return ['md:col-span-3'];
    case 2: return ['md:col-span-3', 'md:col-span-3'];
    case 3: return ['md:col-span-3', 'md:col-span-1', 'md:col-span-2'];
    case 4: return ['md:col-span-2', 'md:col-span-1', 'md:col-span-1', 'md:col-span-2'];
    case 5: return ['md:col-span-2', 'md:col-span-1', 'md:col-span-1', 'md:col-span-1', 'md:col-span-1'];
    case 6: return Array(6).fill('md:col-span-1');
    case 7: return ['md:col-span-2', 'md:col-span-1', ...Array(5).fill('md:col-span-1')];
    case 8: return ['md:col-span-2', 'md:col-span-1', 'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'md:col-span-1', 'md:col-span-1', 'md:col-span-1'];
    case 9: return [
      'md:col-span-2', 'md:col-span-1',
      'md:col-span-1', 'md:col-span-2',
      'md:col-span-1', 'md:col-span-1', 'md:col-span-1',
      'md:col-span-2', 'md:col-span-1'
    ];
    default:
      return Array(count).fill('md:col-span-1');
  }
}

// Variants //

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const lineVariant: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.15 },
  },
};

const badgeVariant: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ComponentPreviewCard //

const ComponentPreviewCard = ({
  title,
  previewUrl,
  tag,
  className,
}: {
  title: string;
  previewUrl: string;
  tag: string;
  className?: string;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        'group relative overflow-hidden rounded-xl min-h-[350px] border border-border shadow shadow-black/4 bg-card dark:bg-background flex flex-col',
        className,
      )}
    >
      <div className="absolute inset-0 overflow-hidden bg-zinc-50 dark:bg-zinc-950/50">
        <iframe
          src={previewUrl}
          className="absolute left-1/2 top-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 scale-[0.4] border-0 bg-transparent pointer-events-none"
          title={title}
          loading="lazy"
          scrolling="no"
        />
      </div>

      {/* Tag pill */}
      <span className="absolute top-3 left-3 z-10 rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm pointer-events-none">
        {tag}
      </span>
    </motion.div>
  );
};

// ComponentsBentoSection //

export const ComponentsBentoSection = () => {
  const layout = getLayout(previewComponents.length);

  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' });

  return (
    <section
      id="components-bento"
      className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
    >
      {/* Heading */}
      <div ref={headerRef} className="flex flex-col items-center text-center mb-12">
        <motion.p
          className="mt-3 text-base max-w-xl text-muted-foreground"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          Explore interactive, production-ready components. Toggle between live preview and the source code.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <motion.div
        ref={gridRef}
        className="bg-muted/30 border rounded-2xl p-4"
        initial={{ opacity: 0, scale: 0.99 }}
        animate={gridInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={gridVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
        >
          {previewComponents.map((component, index) => (
            <ComponentPreviewCard
              key={index}
              {...component}
              className={layout[index]}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        ref={ctaRef}
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 12 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
      >
        <Button variant="ghost" size="sm" className="text-sm" asChild>
          <Link href="/hero-section">
            Explore all components
            <span className="border-l-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
          </Link>
        </Button>
      </motion.div>
    </section >
  );
};
