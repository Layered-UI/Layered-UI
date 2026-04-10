'use client';

import { motion, type Variants } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const customersVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: 'easeOut',
    },
  },
};

const contributors = [
  { id: 1, name: 'John Doe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JohnDoe', github: 'https://github.com' },
  { id: 2, name: 'Jane Smith', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JaneSmith', github: 'https://github.com' },
  { id: 3, name: 'Mike Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MikeJohnson', github: 'https://github.com' },
  { id: 4, name: 'Sarah Williams', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahWilliams', github: 'https://github.com' },
  { id: 5, name: 'Tom Brown', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TomBrown', github: 'https://github.com' },
  { id: 6, name: 'Emma Davis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaDavis', github: 'https://github.com' },
  { id: 7, name: 'David Miller', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidMiller', github: 'https://github.com' },
  { id: 8, name: 'Lisa Anderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LisaAnderson', github: 'https://github.com' },
  { id: 9, name: 'James Taylor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JamesTaylor', github: 'https://github.com' },
  { id: 10, name: 'Rachel White', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelWhite', github: 'https://github.com' },
];

export default function ContributorsSection() {
  return (
    <section className="relative py-16 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            variants={containerVariants}
          >
            <motion.div className="flex items-center" variants={lineVariants}>
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </motion.div>

            <motion.div variants={badgeVariants}>
              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">Community</span>
              </Badge>
            </motion.div>

            <motion.div className="flex items-center" variants={lineVariants}>
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-foreground max-w-3xl"
            variants={headingVariants}
          >
            Built by the Community <br /> for the Community
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-6 text-muted-foreground text-sm sm:text-base font-normal leading-relaxed"
            variants={descriptionVariants}
          >
            Join our community of passionate developers and designers
          </motion.p>

          {/* Contributors Grid */}
          <motion.div
            className="mx-auto mt-12 flex max-w-lg flex-wrap justify-center gap-3"
            variants={customersVariants}
          >
            {contributors.map((contributor, index) => (
              <motion.a
                key={contributor.id}
                href={contributor.github}
                target="_blank"
                rel="noopener noreferrer"
                title={contributor.name}
                className="size-16 rounded-full border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group overflow-hidden flex items-center justify-center bg-muted"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15 }}
              >
                <img
                  alt={contributor.name}
                  src={contributor.avatar}
                  loading="lazy"
                  width={64}
                  height={64}
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}