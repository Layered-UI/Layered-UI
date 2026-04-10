'use client';

import { motion, type Variants } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Eye, ShoppingCart, ArrowRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

// Animation Variants //
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// Data //
interface TemplateItem {
  title: string;
  description: string;
  imageUrl: string;
  livePreviewUrl: string;
  buyUrl: string;
  tag: string;
  features: string[];
  imagePosition: 'left' | 'right';
}

const templates: TemplateItem[] = [
  {
    title: 'Vaulto',
    description:
      'A beautifully designed template optimized for high-conversion SaaS landing pages, packed with modern animations and polished components.',
    imageUrl: './Templates/Vaulto.png',
    livePreviewUrl: 'https://vaulto-nextjs-template.vercel.app/',
    buyUrl: '#',
    tag: 'SaaS',
    features: [
      'Hero sections with video support',
      'Pricing tables with toggles',
      'Pre-built integration sections',
    ],
    imagePosition: 'right',
  },
  {
    title: 'Modula Landing Page',
    description:
      'An enterprise-grade landing page template featuring complex layouts, rich typography, and a comprehensive component system.',
    imageUrl: './Templates/Modula.png',
    livePreviewUrl: 'https://modula-nj.vercel.app/',
    buyUrl: '#',
    tag: 'Landing',
    features: [
      'Interactive hero animations',
      'Advanced feature showcases',
      'Fully responsive design system',
    ],
    imagePosition: 'left',
  },
  {
    title: 'Opencal PureLanding',
    description:
      'Create a stunning scheduling experience with smooth interactions, clean layouts, and an optimized conversion funnel.',
    imageUrl: './Templates/Opencal.png',
    livePreviewUrl: 'https://opencal-nextjs.vercel.app/',
    buyUrl: '#',
    tag: 'Landing',
    features: [
      'Clean minimal aesthetics',
      'Optimized call-to-actions',
      'Mobile-first responsive layout',
    ],
    imagePosition: 'right',
  },
  {
    title: 'Qupo Landing Page',
    description:
      'A marketing-focused template with bold visuals, smooth scroll animations, and conversion-optimized sections.',
    imageUrl: './Templates/Qupo.png',
    livePreviewUrl: 'https://nextjs-template-qupo.vercel.app/',
    buyUrl: '#',
    tag: 'Marketing',
    features: [
      'Bold marketing sections',
      'Smooth scroll animations',
      'Newsletter & CTA blocks',
    ],
    imagePosition: 'left',
  },
];

// Template Preview Card (templates-section style) //

const TemplateCard = ({ template }: { template: TemplateItem }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl aspect-video ring ring-border shadow shadow-black/4 bg-card dark:bg-background">
      <img
        src={template.imageUrl}
        alt={template.title}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />

      {/* Tag pill */}
      <span className="absolute top-3 left-3 z-10 rounded-full bg-black/60 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
        {template.tag}
      </span>

    </div>
  );
};

// Page Component //
export default function TemplatesPage() {
  return (
    <>
      <SiteHeader />
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
            <motion.div
              className="flex flex-col items-center text-center gap-6 sm:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {/* Badge */}
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="flex items-center">
                  <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
                </div>
                <Badge variant="hero" className="group">
                  <span className="text-sm font-normal">All Templates</span>
                </Badge>
                <div className="flex items-center">
                  <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>
              </div>

              {/* Heading */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4 max-w-4xl"
                variants={headingVariants}
              >
                Browse the Full Collection
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg text-muted-foreground max-w-xl"
                variants={fadeInUpVariants}
              >
                Every template is production-ready, fully responsive, and built with Next.js and Tailwind CSS.
              </motion.p>
            </motion.div>
          </div>

          {/* Template Sections */}
          <div className="space-y-20 sm:space-y-28">
            {templates.map((template) => (
              <motion.div
                key={template.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center ${template.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Content */}
                <motion.div
                  variants={fadeInUpVariants}
                  className={`space-y-6 sm:space-y-8 ${template.imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1'
                    }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground">
                        {template.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                      {template.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4">
                    {template.features.map((feature) => (
                      <motion.div
                        key={feature}
                        variants={fadeInUpVariants}
                        className="flex items-center gap-3"
                      >
                        <Checkbox
                          checked
                          className="h-5 w-5 rounded-full border-primary data-[state=checked]:bg-primary"
                        />
                        <span className="text-sm sm:text-base text-foreground">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <motion.div variants={fadeInUpVariants} className="flex flex-wrap items-center gap-3">
                    <Button
                      size="lg"
                      className="rounded-full font-medium bg-foreground text-background hover:bg-foreground/90"
                      asChild
                    >
                      <a href={template.livePreviewUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview Template
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full font-medium"
                      asChild
                    >
                      <a href={template.buyUrl} target="_blank" rel="noopener noreferrer">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Template
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Image Card (templates-section style) */}
                <motion.div
                  variants={scaleInVariants}
                  className={`relative ${template.imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2'
                    }`}
                >
                  <TemplateCard template={template} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}