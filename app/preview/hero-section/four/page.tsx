'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Iphone } from '@/components/ui/iphone';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
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
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: 'easeOut',
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: 'easeOut',
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
            variants={containerVariants}
          >
            <motion.div className="flex items-center" variants={lineVariants}>
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
            </motion.div>

            <motion.div variants={badgeVariants}>
              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">Join us</span>
              </Badge>
            </motion.div>

            <motion.div className="flex items-center" variants={lineVariants}>
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground max-w-4xl mb-6"
            variants={headingVariants}
          >
            Ready to transform
            <br />
            your financial management?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="max-w-2xl text-muted-foreground text-sm sm:text-base font-normal leading-relaxed mb-8"
            variants={descriptionVariants}
          >
            Streamline your business's financial management with our intuitive,
            scalable SaaS platform. Designed for U.S. enterprises, our solutions
            simplify complex processes.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={buttonVariants}>
            <Button
              size="lg"
              variant="default"
              className="bg-foreground text-background hover:bg-foreground/90 font-medium rounded-4xl"
            >
              Get started
            </Button>
          </motion.div>

          {/* iPhone Demo */}
          <motion.div
            className="mt-12 sm:mt-16 flex justify-center w-full px-4"
            variants={imageVariants}
          >
            <div className="w-full max-w-[434px]">
              <Iphone />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}