'use client'

import { Badge } from "@/components/ui/badge"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"

const testimonials = {
  featured: {
    quote:
      "Working with this platform has dramatically improved our development cycle. The intuitive design tools and robust API integrations have allowed us to innovate faster and deliver high-quality solutions to our clients with unprecedented efficiency. It's truly a game-changer for modern software development.",
    author: "Shekinah Tshikulila",
    role: "Software Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shekinah",
  },
  secondary: {
    quote:
      "This framework is incredibly powerful and user-friendly. It eliminated so many headaches in our workflow, allowing us to focus on creativity rather than tedious setup. A truly invaluable asset for any developer.",
    author: "Jonathan Yombo",
    role: "Software Engineer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jonathan",
  },
  small: [
    {
      quote:
        "The templates provided here are top-notch. They've saved me countless hours and the designs are simply stunning. Highly recommend for anyone building a personal website!",
      author: "Yucel Farukşahan",
      role: "Creator, Tailkits",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yucel",
    },
    {
      quote:
        "Exceptional quality and incredible attention to detail. This platform has truly elevated my web projects. The best personal website resource I've come across!",
      author: "Rodrigo Aguilar",
      role: "Creator, TailwindAwesome",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rodrigo",
    },
  ],
}

export default function TestimonialsGrid() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
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
        ease: [0.4, 0, 0.2, 1],
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
        ease: [0.4, 0, 0.2, 1],
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
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      y: -4,
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
                <span className="text-sm font-normal">Trusted Worldwide</span>
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
            Innovate with Ease, Trusted by Global Developers
          </motion.h2>

          {/* Description */}
          <motion.p
            className="max-w-3xl text-muted-foreground text-sm sm:text-base font-normal leading-relaxed px-4"
            variants={descriptionVariants}
          >
            Our platform empowers creators to build groundbreaking applications, offering robust APIs and comprehensive
            tools that streamline development and foster innovation.
          </motion.p>
        </motion.div>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Large Left Card */}
          <motion.div
            className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-between border border-border shadow-lg group hover:border-primary/30 transition-colors duration-300"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="mb-8">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                "{testimonials.featured.quote}"
              </p>
            </div>
            <div className="flex items-center">
              <Image
                src={testimonials.featured.avatar}
                alt={testimonials.featured.author}
                width={48}
                height={48}
                className="rounded-full object-cover mr-4 border-2 border-primary/20"
              />
              <div>
                <p className="font-medium text-foreground">{testimonials.featured.author}</p>
                <p className="text-sm text-muted-foreground">{testimonials.featured.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Secondary Card */}
            <motion.div
              className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-between border border-border shadow-lg group hover:border-primary/30 transition-colors duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                "{testimonials.secondary.quote}"
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonials.secondary.avatar}
                  alt={testimonials.secondary.author}
                  width={48}
                  height={48}
                  className="rounded-full object-cover mr-4 border-2 border-primary/20"
                />
                <div>
                  <p className="font-medium text-foreground">{testimonials.secondary.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials.secondary.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Small Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.small.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-3xl flex flex-col justify-between border border-border shadow-lg group hover:border-primary/30 transition-colors duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full object-cover mr-3 border-2 border-primary/20"
                    />
                    <div>
                      <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}