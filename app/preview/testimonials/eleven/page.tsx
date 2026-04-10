import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    quote: "The design tools are incredible. My workflow has never been smoother!",
    author: "Emma Robertson",
    role: "Freelance Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    height: "short",
  },
  {
    quote:
      "With Lumina, I've been able to create professional designs for my brand in half the time. The templates and collaboration features are game-changing. This is exactly what small business owners need.",
    author: "Ryan Palmer",
    role: "Brand Strategist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan",
    height: "tall",
  },
  {
    quote: "Simple, powerful, and beautiful. Perfect for my creative projects.",
    author: "Linda Kiely",
    role: "Content Creator",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda",
    height: "short",
  },
  {
    quote:
      "As a creative director, I need tools that keep up with my team's pace. Lumina delivers with real-time collaboration, smart design systems, and stunning results every time. It's become essential to our creative process.",
    author: "Alex Jan",
    role: "Creative Director",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    height: "tall",
  },
  {
    quote: "This platform has transformed how we approach design. Absolutely recommend it!",
    author: "James Luis",
    role: "Product Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    height: "tall",
  },
  {
    quote: "I finally found a design tool that doesn't get in my way. Thank you, Lumina!",
    author: "Mark Julio",
    role: "UI/UX Designer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
    height: "short",
  },
]

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
}

const TestimonialCard = ({ quote, author, role, avatar }: TestimonialCardProps) => {
  return (
    <div className="relative bg-card rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-border transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:border-primary/20 min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] flex flex-col">
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-6 rounded-full flex items-center justify-center bg-gradient-to-b from-primary to-primary/20 border border-border shadow-[inset_0px_4px_8px_1px_rgba(244,244,254,0.25)]">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 md:mb-8 flex-grow">
        "{quote}"
      </p>

      <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mt-auto">
        <img
          src={avatar || "/placeholder.svg"}
          alt={author}
          className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="text-foreground text-xs sm:text-sm md:text-base font-normal leading-5 sm:leading-6 truncate">
            {author}
          </p>
          <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm leading-4 sm:leading-5 truncate">
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}

const TestimonialsSection2 = () => {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 xl:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
            <div className="w-6 sm:w-12 md:w-20 lg:w-32 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            <Badge variant="hero" className="flex-shrink-0">
              <span className="text-xs sm:text-sm font-normal">Testimonials</span>
            </Badge>
            <div className="w-6 sm:w-12 md:w-20 lg:w-32 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-foreground px-2 sm:px-4">
            What creators are saying
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed px-2 sm:px-4">
            Our creative platform is transforming the way designers and creators work. Here's what some of our community
            members have to say about their experience
          </p>
        </div>

        {/* Testimonials Grid - Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 auto-rows-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`${testimonial.height === "tall" ? "sm:row-span-2" : "row-span-1"}`}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection2