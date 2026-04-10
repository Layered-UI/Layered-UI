"use client";

import { Badge } from "@/components/ui/badge";
import { motion, type Variants } from "framer-motion";

const stats = [
  {
    percentage: "95%",
    title: "Fast-Track Results",
    description: "Accelerate your growth journey with Layered UI cutting-edge automation.",
  },
  {
    percentage: "20%",
    title: "Increased Efficiency",
    description: "Uncover hidden opportunities in your workflows with Layered UI automated insights.",
  },
  {
    percentage: "36%",
    title: "Performance Leap",
    description: "Elevate your workflows and outpace the competition using Layered UI advanced features.",
  },
  {
    percentage: "54%",
    title: "Strategic Advantage",
    description: "Gain a competitive edge through Layered UI powerful, data-driven strategies.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const StatsSection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Side - Header */}
          <motion.div className="flex flex-col gap-8" variants={headerVariants}>
            <div className="flex items-center gap-2 sm:gap-3">
              <Badge variant="hero" className="group">
                <span className="text-xs sm:text-sm font-normal">Our statistics</span>
              </Badge>

              <div className="flex items-center">
                <div className="w-8 sm:w-12 md:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground">
              The numbers that
              <br />
              define our success
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Our track record speaks for itself. See how we've helped businesses achieve remarkable growth and transformation with Layered UI solutions.
            </p>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col bg-card rounded-3xl p-6 sm:p-8 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                variants={cardVariants}
              >
                {/* Percentage */}
                <div className="text-4xl sm:text-5xl font-normal text-primary mb-6">
                  {stat.percentage}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-normal text-foreground mb-2">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;