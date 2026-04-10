"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, type Variants } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Finova transformed how we manage our workflows. The automation capabilities are unmatched in the market.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=TimCook",
    name: "Tim Cook",
    role: "CEO",
    company: "Apple",
  },
  {
    quote:
      "We've seen a 40% increase in productivity since implementing Finova. It's a game-changer for our team.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=JeffBezos",
    name: "Jeff Bezos",
    role: "Founder",
    company: "Amazon",
  },
  {
    quote:
      "The integration capabilities are seamless. Finova has become an essential part of our tech stack.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SamAltman",
    name: "Sam Altman",
    role: "CEO",
    company: "OpenAI",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const animatedGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const groupItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const textEffectVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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
      ease: "easeOut",
    },
  },
};

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function AnimatedText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <motion.span
      className="inline-block"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textEffectVariants}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={wordVariants}
          className="inline-block"
        >
          {word.split("").map((char, charIndex) => (
            <motion.span key={charIndex} variants={charVariants}>
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
    </motion.span>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 sm:mb-16 flex flex-col items-center text-center gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animatedGroupVariants}
          >
            <motion.div className="flex items-center" variants={groupItemVariants}>
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            </motion.div>

            <motion.div variants={groupItemVariants}>
              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">Testimonials</span>
              </Badge>
            </motion.div>

            <motion.div className="flex items-center" variants={groupItemVariants}>
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AnimatedText text="What our users say" />
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-sm sm:text-base font-normal max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={descriptionVariants}
          >
            Join thousands of satisfied customers who have transformed their workflows with Finova.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="mx-auto -mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-3 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardsContainerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} variants={cardVariants}>
              <TestimonialCard index={index} testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

type TestimonialCardProps = {
  testimonial: Testimonial;
  index: number;
  className?: string;
};

function TestimonialCard({ testimonial, index, className }: TestimonialCardProps) {
  const { quote, name, role, company, image } = testimonial;

  return (
    <motion.figure
      className={cn(
        "relative flex flex-col justify-between gap-6 rounded-3xl bg-card border border-primary/20 p-6 sm:p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 md:translate-y-[calc(3rem*var(--t-card-index))]",
        className
      )}
      style={
        {
          "--t-card-index": index,
        } as React.CSSProperties
      }
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Quote Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <QuoteIcon
          aria-hidden="true"
          className="size-6 text-primary/40 shrink-0 stroke-1"
        />
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        className="flex-1"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-sm sm:text-base font-normal text-foreground leading-relaxed">
          {quote}
        </p>
      </motion.blockquote>

      {/* Author */}
      <motion.figcaption
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Avatar className="size-10 rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
            <AvatarImage alt={`${name}'s profile picture`} src={image} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
        </motion.div>
        <div className="flex flex-col">
          <cite className="font-semibold text-foreground text-sm not-italic">
            {name}
          </cite>
          <p className="text-muted-foreground text-xs">
            {role}, <span className="text-foreground/70">{company}</span>
          </p>
        </div>
      </motion.figcaption>
    </motion.figure>
  );
}