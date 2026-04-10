"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

const SQRT_5000 = Math.sqrt(5000)

const testimonials = [
  {
    tempId: 0,
    testimonial: "My favorite solution in the market. We work 5x faster with this platform.",
    by: "Alex Chen, CEO at TechCorp",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  {
    tempId: 1,
    testimonial: "I'm confident my data is safe. I can't say that about other providers.",
    by: "Dan Wilson, CTO at SecureNet",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dan",
  },
  {
    tempId: 2,
    testimonial: "I know it's cliche, but we were lost before we found this. Can't thank you enough!",
    by: "Stephanie Ross, COO at InnovateCo",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Stephanie",
  },
  {
    tempId: 3,
    testimonial: "These products make planning for the future seamless. Can't recommend them enough!",
    by: "Marie Johnson, CFO at FuturePlanning",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 12.",
    by: "Andre Davis, Head of Design at CreativeSolutions",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andre",
  },
  {
    tempId: 5,
    testimonial: "SO SO SO HAPPY WE FOUND YOU! I'd bet you've saved me 100 hours so far.",
    by: "Jeremy Miller, Product Manager at TimeWise",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jeremy",
  },
  {
    tempId: 6,
    testimonial: "Took some convincing, but now that we're here, we're never going back.",
    by: "Pam Taylor, Marketing Director at BrandBuilders",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pam",
  },
  {
    tempId: 7,
    testimonial: "I would be lost without the in-depth analytics. The ROI is EASILY 100X for us.",
    by: "Daniel Brown, Data Scientist at AnalyticsPro",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
  },
  {
    tempId: 8,
    testimonial: "It's just the best. Period.",
    by: "Fernando Garcia, UX Designer at UserFirst",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fernando",
  },
  {
    tempId: 9,
    testimonial: "I switched 5 years ago and never looked back.",
    by: "Andy Martinez, DevOps Engineer at CloudMasters",
    imgSrc: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andy",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 sm:p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-primary text-primary-foreground border-primary"
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top rounded-sm"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3
        className={cn(
          "text-base sm:text-xl font-medium leading-relaxed",
          isCenter ? "text-primary-foreground" : "text-foreground",
        )}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 mt-2 text-sm italic",
          isCenter ? "text-primary-foreground/80" : "text-muted-foreground",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

const TestimonialsSection3: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 xl:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
            <div className="w-6 sm:w-12 md:w-20 lg:w-32 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            <Badge variant="hero" className="flex-shrink-0">
              <span className="text-xs sm:text-sm font-normal">Client Stories</span>
            </Badge>
            <div className="w-6 sm:w-12 md:w-20 lg:w-32 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-foreground px-2 sm:px-4">
            Trusted by industry leaders
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed px-2 sm:px-4">
            See what professionals across various industries have to say about how we've transformed their workflow and
            boosted their productivity
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative w-full overflow-hidden bg-muted/30 rounded-3xl" style={{ height: 600 }}>
          {testimonialsList.map((testimonial, index) => {
            const position =
              testimonialsList.length % 2
                ? index - (testimonialsList.length + 1) / 2
                : index - testimonialsList.length / 2
            return (
              <TestimonialCard
                key={testimonial.tempId}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
              />
            )
          })}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            <button
              onClick={() => handleMove(-1)}
              className={cn(
                "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-2xl transition-all duration-300 rounded-xl",
                "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              )}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => handleMove(1)}
              className={cn(
                "flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-2xl transition-all duration-300 rounded-xl",
                "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              )}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection3