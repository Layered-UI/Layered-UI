"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence, type Variants } from "framer-motion"

const testimonials = [
  {
    quote:
      "With Layered UI, I finally have a clear understanding of my store's finances. The profit and loss tracking tools, combined with easy tax preparation, have saved me so much time and money. Best decision I've made for my business.",
    author: "Ryan Palmer",
    role: "Owner of Trendy Goods",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RyanPalmer",
  },
  {
    quote:
      "The platform has completely transformed how we handle our finances. The intuitive interface and powerful analytics give us insights we never had before. It's like having a full finance team at our fingertips.",
    author: "Sarah Chen",
    role: "CEO of Digital Ventures",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen",
  },
  {
    quote:
      "Implementation was seamless and the support team was incredible. We've seen a 40% reduction in time spent on financial reporting. Layered UI has become an essential tool for our business operations.",
    author: "Michael Rodriguez",
    role: "CFO at TechScale Inc",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelRodriguez",
  },
]

const TestimonialsSection2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  }

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
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

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
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  }

  const quoteIconVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.1,
        ease: "backOut",
      },
    },
  }

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  }

  const avatarVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "backOut",
      },
    },
  }

  const authorVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
      },
    },
  }

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  }
  

  const activeDotVariants: Variants = {
    inactive: {
      width: 8,
      height: 8,
      transition: {
        duration: 0.3,
      },
    },
    active: {
      width: 32,
      height: 8,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <motion.div
          className="flex flex-col items-center text-center gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Badge */}
          <motion.div className="flex items-center justify-center gap-2 sm:gap-3" variants={containerVariants}>
            <motion.div className="flex items-center" variants={lineVariants}>
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            </motion.div>
            <motion.div variants={badgeVariants}>
              <Badge variant="hero" className="group">
                <span className="text-sm font-normal">Testimonials</span>
              </Badge>
            </motion.div>
            <motion.div className="flex items-center" variants={lineVariants}>
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </motion.div>
          </motion.div>
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4 max-w-4xl"
            variants={headingVariants}
          >
            What our clients are saying
          </motion.h2>
          {/* Description */}
          <motion.p
            className="max-w-3xl text-muted-foreground text-sm sm:text-base font-normal leading-relaxed px-4"
            variants={descriptionVariants}
          >
            Our financial management platform is transforming the way people manage their money. Here's what some of our
            users have to say about their experience
          </motion.p>
        </motion.div>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-[var(--shadow-card)] overflow-hidden group"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>

            {/* Quote Icon */}
            <motion.div
              className="relative z-10 w-16 h-16 mb-8 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-[inset_0px_4px_8px_0px_rgba(255,255,255,0.15)]"
              variants={quoteIconVariants}
            >
              <Quote className="w-7 h-7 text-primary-foreground" strokeWidth={2} />
            </motion.div>

            {/* Quote Text */}
            <motion.blockquote className="relative z-10 text-center mb-12" variants={textVariants}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                "{currentTestimonial.quote}"
              </p>
            </motion.blockquote>

            {/* Author Avatar */}
            <motion.div
              className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/20"
              variants={avatarVariants}
            >
              <img
                src={currentTestimonial.avatar || "/placeholder.svg"}
                alt={currentTestimonial.author}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Author Info */}
            <motion.div className="relative z-10 text-center" variants={authorVariants}>
              <p className="text-base sm:text-lg font-normal text-foreground mb-2">{currentTestimonial.author}</p>
              <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <motion.div
        className="flex items-center justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={buttonVariants} whileHover="hover">
          <Button
            onClick={handlePrevious}
            variant="outline"
            size="icon"
            className="w-16 h-16 rounded-full bg-secondary/50 backdrop-blur-sm border-border/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} whileHover="hover">
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="w-16 h-16 rounded-full bg-secondary/50 backdrop-blur-sm border-border/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Indicator Dots */}
      <motion.div
        className="flex items-center justify-center gap-2 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="bg-border hover:bg-primary/50 rounded-full transition-colors"
            animate={index === currentIndex ? "active" : "inactive"}
            variants={activeDotVariants}
            initial="inactive"
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </motion.div>
    </section>
  )
}

export default TestimonialsSection2