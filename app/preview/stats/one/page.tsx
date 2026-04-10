"use client";

import { Badge } from "@/components/ui/badge";
import { motion, useInView, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    percentage: "95%",
    value: 95,
    title: "Fast-Track Results",
    description: "Accelerate your growth journey with Finova's cutting-edge automation.",
  },
  {
    percentage: "20%",
    value: 20,
    title: "Increased Efficiency",
    description: "Uncover hidden opportunities in your workflows with Finova's automated insights.",
  },
  {
    percentage: "36%",
    value: 36,
    title: "Performance Leap",
    description: "Elevate your workflows and outpace the competition using Finova's advanced features.",
  },
  {
    percentage: "54%",
    value: 54,
    title: "Strategic Advantage",
    description: "Gain a competitive edge through Finova's powerful, data-driven strategies.",
  },
];

// Animated counter component
function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  return <motion.span>{display}</motion.span>;
}

// Variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const StatsSection = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div
        ref={headerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16"
      >
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Badge row */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <motion.div
              className="flex items-center origin-right"
              variants={lineVariants}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
            </motion.div>

            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">Our statistics</span>
              </Badge>
            </motion.div>

            <motion.div
              className="flex items-center origin-left"
              variants={lineVariants}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4"
            variants={headerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            transition={{ delay: 0.25 }}
          >
            The numbers that define our success
          </motion.h2>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={cardContainerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="relative flex flex-col bg-card rounded-3xl p-6 sm:p-8 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-colors duration-300 cursor-default"
            >
              {/* Percentage with count-up */}
              <div className="text-4xl sm:text-5xl font-normal text-primary mb-20">
                <AnimatedNumber value={stat.value} inView={gridInView} />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-normal text-foreground mb-3">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;