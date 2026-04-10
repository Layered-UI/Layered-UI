'use client';

import { Star, Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    type: "dark",
    stars: 5,
    quote:
      "This CRM transformed the way our team manages customers and opportunities. Within only three months of consistent use, we achieved a remarkable 35% increase in sales, driven by smarter workflows, better communication, and improved tracking.",
    author: "Alex Jordan",
    role: "Content Strategist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlexJordan",
  },
  {
    type: "light",
    quote:
      "Our team finally stopped juggling countless spreadsheets and switched to a cleaner, more efficient workflow solution.",
    author: "Daniel Cooper",
    role: "Project Coordinator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DanielCooper",
  },
  {
    type: "light",
    quote: "Within just 60 seconds, our complete CRM system was set up and ready for immediate use.",
    author: "Alex Jofer",
    role: "Systems Administrator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlexJofer",
  },
  {
    type: "light",
    quote:
      "In just one day, our whole team was seamlessly collaborating and managing projects through a single dashboard.",
    author: "Liam Parker",
    role: "Productivity Lead",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=LiamParker",
  },
  {
    type: "light",
    quote: "Our customer response time has improved by 40%, allowing us to provide faster, more efficient support.",
    author: "Ethan Ross",
    role: "Operations Manager",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=EthanRoss",
  },
  {
    type: "light",
    quote:
      "We moved away from messy manual processes and embraced a smoother workflow that keeps our whole team aligned and efficient.",
    author: "Alison Thomas",
    role: "Team Operations Lead",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlisonThomas",
  },
  {
    type: "brand",
    stars: 5,
    quote:
      "CRM CRD is a modern CRM platform designed to be simple, intelligent, and enjoyable to use. It streamlines daily tasks, organizes customer interactions, and helps teams work more efficiently while making the entire experience smoother and more engaging for everyone.",
    author: "Maya Rahman",
    role: "Business Process Analyst",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MayaRahman",
  },
]

// ─── Easing ───────────────────────────────────────────────────────────────────
// Smooth "expo" ease-out — starts fast, glides to rest with no bounce
const expo = [0.16, 1, 0.3, 1] as const

// ─── Variants ─────────────────────────────────────────────────────────────────

const lineVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: expo, delay: 0.15 },
  },
}

const badgeVariant = {
  hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: expo },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(3px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: expo, delay },
  }),
}

const columnVariants = {
  hidden: {},
  visible: (delayBase: number) => ({
    transition: { staggerChildren: 0.14, delayChildren: delayBase },
  }),
}

const cardVariants = {
  hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: expo },
  },
}

const starVariants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -15 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: expo, delay: 0.35 + i * 0.06 },
  }),
}

const avatarVariant = {
  hidden: { opacity: 0, scale: 0.75, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: expo, delay: 0.25 },
  },
}

// ─── TestimonialCard ──────────────────────────────────────────────────────────

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => {
  const isDark = testimonial.type === "dark"
  const isBrand = testimonial.type === "brand"

  let cardClasses = "relative flex flex-col p-8 rounded-3xl border shadow-lg overflow-hidden backdrop-blur-sm "
  let textClasses = "text-base font-normal leading-relaxed mb-8 "
  const authorClasses = "font-semibold text-base "
  let roleClasses = "text-sm "

  if (isDark) {
    cardClasses += "bg-foreground/95 text-background border-foreground/20"
    textClasses += "text-background"
    roleClasses += "text-background/70"
  } else if (isBrand) {
    cardClasses += "bg-primary/95 text-primary-foreground border-primary/20"
    textClasses += "text-primary-foreground"
    roleClasses += "text-primary-foreground/80"
  } else {
    cardClasses += "bg-card/90 text-card-foreground border-border/50"
    textClasses += "text-foreground"
    roleClasses += "text-muted-foreground"
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
        scale: 1.015,
        transition: { duration: 0.45, ease: expo },
      }}
      className={cardClasses}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {testimonial.stars ? (
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-1">
            {[...Array(testimonial.stars)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={starVariants}
                initial="hidden"
                animate="visible"
              >
                <Star size={16} fill="currentColor" className="text-current" />
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-16 h-16 mb-6 rounded-full overflow-hidden relative bg-primary/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <Quote className="w-6 h-6 text-primary fill-primary" strokeWidth={0} />
          </div>
        </div>
      )}

      <p className={textClasses}>&ldquo;{testimonial.quote}&rdquo;</p>

      <div className="flex items-center gap-4 mt-auto">
        <motion.img
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
          variants={avatarVariant}
          initial="hidden"
          animate="visible"
        />
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate="visible"
        >
          <h4 className={authorClasses}>{testimonial.author}</h4>
          <p className={roleClasses}>{testimonial.role}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─── TestimonialsMasonrySection ───────────────────────────────────────────────

const TestimonialsMasonrySection = () => {
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true, margin: "-80px" })
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" })

  const columns = [
    [testimonials[0], testimonials[2]],
    [testimonials[1], testimonials[3], testimonials[4]],
    [testimonials[5], testimonials[6]],
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
            <motion.div
              className="origin-right"
              variants={lineVariant}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              <div className="w-6 sm:w-12 md:w-20 lg:w-32 h-px bg-gradient-to-l from-primary/30 to-transparent" />
            </motion.div>

            <motion.div
              variants={badgeVariant}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              <Badge variant="hero" className="flex-shrink-0">
                <span className="text-xs sm:text-sm font-normal">Testimonials</span>
              </Badge>
            </motion.div>

            <motion.div
              className="origin-left"
              variants={lineVariant}
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
            >
              <div className="w-6 sm:w-12 md:w-20 lg:w-32 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </motion.div>
          </div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-foreground px-2 sm:px-4"
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            Trusted by Teams Worldwide
          </motion.h2>

          <motion.p
            className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed px-2 sm:px-4"
            variants={fadeUp}
            custom={0.22}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            Join thousands of teams globally who rely on our solutions to collaborate, grow, and succeed.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {columns.map((col, colIndex) => (
            <motion.div
              key={colIndex}
              className="flex flex-col gap-6"
              variants={columnVariants}
              custom={colIndex * 0.1}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
            >
              {col.map((testimonial, cardIndex) => (
                <TestimonialCard key={cardIndex} testimonial={testimonial} />
              ))}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestimonialsMasonrySection