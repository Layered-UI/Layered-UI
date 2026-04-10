'use client';

import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const templates = [
  {
    title: "Vaulto",
    imageUrl: "./Templates/Vaulto.png",
    livePreviewUrl: "https://vaulto-nextjs-template.vercel.app/",
    githubUrl: "",
    tag: "SaaS",
  },
  {
    title: "Modula Landing Page",
    imageUrl: "./Templates/Modula.png",
    livePreviewUrl: "https://modula-nj.vercel.app/",
    githubUrl: "",
    tag: "Landing",
  },
  {
    title: "Opencal PureLanding",
    imageUrl: "./Templates/Opencal.png",
    livePreviewUrl: "https://opencal-nextjs.vercel.app/",
    githubUrl: "",
    tag: "Landing",
  },
  {
    title: "Qupo Landing Page",
    imageUrl: "./Templates/Qupo.png",
    livePreviewUrl: "https://nextjs-template-qupo.vercel.app/",
    githubUrl: "",
    tag: "Marketing",
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
    default: return templates.map((_, i) => i % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1');
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

// TemplateCard //

const TemplateCard = ({
  title,
  imageUrl,
  livePreviewUrl,
  githubUrl,
  tag,
  className,
}: {
  title: string;
  imageUrl: string;
  livePreviewUrl: string;
  githubUrl: string;
  tag: string;
  className?: string;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.22, ease: 'easeOut' } }}
      className={cn(
        'group relative overflow-hidden rounded-xl aspect-video border border-border shadow shadow-black/4 bg-card dark:bg-background',
        className,
      )}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Tag pill */}
      <span className="absolute top-3 left-3 z-10 rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
        {tag}
      </span>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-center text-lg font-semibold text-white">{title}</h3>

        <div className="flex items-center justify-center gap-3">
          <Button asChild size="sm" className="bg-white text-black hover:bg-gray-200">
            <a href={livePreviewUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="w-4 h-4" />
              Live Preview
            </a>
          </Button>

          {githubUrl && (
            <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white/20">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <svg role="img" viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Github
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// TemplatesSection //

export const TemplatesSection = () => {
  const layout = getLayout(templates.length);

  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-40px' });

  return (
    <section
      id="templates-bento"
      className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
    >
      {/* Heading */}
      <div ref={headerRef} className="flex flex-col items-center text-center mb-12">
        <div className="mb-4 flex items-center justify-center gap-3">
          <motion.div
            className="origin-right"
            variants={lineVariant}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
          >
            <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />
          </motion.div>

          <motion.div
            variants={badgeVariant}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
          >
            <Badge variant="hero" className="group">
              <span className="text-sm font-normal">All Templates</span>
            </Badge>
          </motion.div>

          <motion.div
            className="origin-left"
            variants={lineVariant}
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
          >
            <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
          </motion.div>
        </div>

        <motion.h2
          className="text-balance text-3xl font-bold sm:text-4xl"
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          Browse the Full Collection
        </motion.h2>

        <motion.p
          className="mt-3 text-base max-w-xl"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          Every template is production-ready, fully responsive, and built with Next.js and Tailwind CSS.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <motion.div
        ref={gridRef}
        className="bg-muted/50 border rounded-2xl p-4"
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
          {templates.map((template, index) => (
            <TemplateCard
              key={index}
              {...template}
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
          <a href="/templates">
            See all templates
            <span className="border-l-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
};