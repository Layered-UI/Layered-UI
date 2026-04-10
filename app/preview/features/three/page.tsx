'use client';

import { motion, type Variants } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const features = [
  'Quick list creation in seconds',
  'Intuitive task management',
  'Seamless organization experience',
];

interface FeatureSection {
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

const featureSections: FeatureSection[] = [
  {
    title: 'Effortless task building',
    description:
      'Build workflows and manage projects in seconds with our intuitive dashboard interface',
    image: 'https://placehold.co/550x400',
    imagePosition: 'right',
  },
  {
    title: 'Advanced workflow tools',
    description:
      'Streamline your work process with powerful automation and intelligent project tracking',
    image: 'https://placehold.co/550x400',
    imagePosition: 'left',
  },
  {
    title: 'Real-time synchronization',
    description:
      'Connect your data across platforms and sync updates instantly with powerful integration',
    image: 'https://placehold.co/550x400',
    imagePosition: 'right',
  },
];

export default function FeatureDetail() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <motion.div
            className="flex flex-col items-center text-center gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={containerVariants}
          >
            {/* Badge */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="flex items-center">
                <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
              </div>

              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">key features</span>
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
              Features that make the difference
            </motion.h2>
          </motion.div>
        </div>

        {/* Feature Sections */}
        <div className="space-y-20 sm:space-y-28">
          {featureSections.map((section) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={containerVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center ${section.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Content */}
              <motion.div
                variants={fadeInUpVariants}
                className={`space-y-6 sm:space-y-8 ${section.imagePosition === 'left'
                    ? 'lg:order-2'
                    : 'lg:order-1'
                  }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {section.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {features.map((feature) => (
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
              </motion.div>

              {/* Image */}
              <motion.div
                variants={scaleInVariants}
                className={`relative ${section.imagePosition === 'left'
                    ? 'lg:order-1'
                    : 'lg:order-2'
                  }`}
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-card border border-border shadow-[0px_-4px_100px_21px_rgba(11,56,88,0.16)_inset]">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}