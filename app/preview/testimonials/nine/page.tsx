'use client'

import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: "john-smith",
    text: "The quality is outstanding! They always exceed our expectations, delivering more than we imagined",
    author: "John Smith",
    metric: "100x Views",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=JohnSmith",
    highlight: false,
  },
  {
    id: "maxxz",
    text: "They nailed everything we needed and went above and beyond to bring our vision to life",
    author: "Maxxz",
    metric: "100M+ Revenue",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maxxz",
    highlight: true,
  },
  {
    id: "martin-guptil",
    text: "Amazing service! They consistently deliver top-notch results and meet every requirement perfectly",
    author: "Martin Guptil",
    metric: "1M+ Subscribers",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MartinGuptil",
    highlight: false,
  },
]

const TestimonialsGrid = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
            <div className="w-6 sm:w-12 md:w-20 lg:w-32 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>

            <Badge variant="hero" className="flex-shrink-0">
              <span className="text-xs sm:text-sm font-normal">Testimonials</span>
            </Badge>

            <div className="w-6 sm:w-12 md:w-20 lg:w-32 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>

          {/* Heading and Description */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-foreground px-2 sm:px-4">
            What our premium clients are saying about us
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed px-2 sm:px-4">
            Hear from businesses that have transformed their operations with our solutions. Their success stories
            inspire us to keep pushing boundaries.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`relative flex flex-col justify-between p-8 md:p-10 rounded-3xl border transition-all duration-300 group hover:-translate-y-2 ${
                testimonial.highlight
                  ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-primary/30 shadow-[var(--shadow-card)]"
                  : "bg-card border-border text-card-foreground hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              }`}
            >
              {/* Hover glow effect for non-highlighted cards */}
              {!testimonial.highlight && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}

              <div className="relative z-10 mb-12">
                <p className="text-lg md:text-xl leading-relaxed font-normal">{testimonial.text}</p>
              </div>

              <div className="relative z-10 flex items-center gap-4">
                <div className="relative w-12 h-12 overflow-hidden rounded-full flex-shrink-0 bg-muted">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-medium leading-tight">{testimonial.author}</h4>
                  <p
                    className={`text-sm mt-1 ${
                      testimonial.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {testimonial.metric}
                  </p>
                </div>
              </div>

              {/* Corner accent for highlighted card */}
              {testimonial.highlight && (
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary-foreground/20 rounded-tr-3xl" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsGrid