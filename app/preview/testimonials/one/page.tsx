'use client'

import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  // Column 1
  [
    {
      quote: "Layered UI made managing our finances so easy. I can track everything in one place!",
      author: "David James",
      role: "Small Business Owner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      quote: "Layered UI keeps us organized and on top of our budget. Love it!",
      author: "Daniel Harnes",
      role: "CFO",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
      hasIcon: true,
    },
    {
      quote: "We rely on Layered UI to keep our financials transparent and organized. The donor tracking and expense categorization features are perfect for nonprofits like ours. Plus, the customer support is always there when we need help!",
      author: "Sarah Martinez",
      role: "Nonprofit Director",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      isLong: true,
    },
  ],
  // Column 2
  [
    {
      quote: "Simple, reliable, and effective. It's perfect for my business.",
      author: "Linda Kiely",
      role: "E-commerce Seller",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda",
    },
    {
      quote: "The automation features are a game-changer. No more manual work!",
      author: "Emma Robertson",
      role: "Freelancer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      hasIcon: true,
    },
    {
      quote: "With Layered Ui, I finally have a clear understanding of my store's finances. The profit and loss tracking tools, combined with easy tax preparation, have saved me so much time and money. Best decision I've made for my business.",
      author: "Michael Chen",
      role: "Retail Owner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      isLong: true,
      hasIcon: true,
    },
  ],
  // Column 3
  [
    {
      quote: "When scaling a startup, staying on top of cash flow is crucial. Aurion has been our go-to tool for managing finances efficiently. The customizable dashboards and predictive analytics give us a clear view of where we're headed financially.",
      author: "Alex Jan",
      role: "CEO",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      isLong: true,
    },
    {
      quote: "I finally feel in control of my finances. Thank you, Layered Ui",
      author: "Mark Julio",
      role: "Entrepreneur",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark",
      hasIcon: true,
    },
    {
      quote: "This tool has saved us hours every month. Highly recommend it!",
      author: "Jennifer Lee",
      role: "Operations Manager",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer",
      hasIcon: true,
    },
  ],
];

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string
}

const TestimonialCard = ({ quote, author, role, avatar }: TestimonialCardProps) => {
  return (
    <div className="relative bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:border-primary/20 min-h-[280px] sm:min-h-[320px] flex flex-col">
      <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-full flex items-center justify-center bg-gradient-to-b from-primary to-primary/20 border border-border shadow-[inset_0px_4px_8px_1px_rgba(244,244,254,0.25)]">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p className="text-muted-foreground text-sm sm:text-base leading-6 mb-6 sm:mb-8 flex-grow">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-3 sm:gap-4 mt-auto">
        <img 
          src={avatar || "/placeholder.svg"} 
          alt={author} 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0" 
        />
        <div className="min-w-0">
          <p className="text-foreground text-sm sm:text-base font-normal leading-6 truncate">{author}</p>
          <p className="text-muted-foreground text-xs sm:text-sm leading-5 truncate">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection2 = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {/* Badge with decorative lines */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full">
            <div className="w-8 sm:w-16 md:w-32 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            <Badge variant="hero" className="flex-shrink-0">
              <span className="text-xs sm:text-sm font-normal">Testimonials</span>
            </Badge>
            <div className="w-8 sm:w-16 md:w-32 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight text-foreground px-4">
            What our clients are saying
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed px-4">
            Our financial management platform is transforming the way people manage their money. Here's
            what some of our users have to say about their experience
          </p>
        </div>

        {/* Testimonials Grid with Marquee */}
        <div className="relative h-[600px] sm:h-[650px] md:h-[700px] overflow-hidden">
          {/* Top gradient fade */}
          <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          {/* Mobile: Show only first column */}
          <div className="sm:hidden h-full px-2">
            <Marquee
              vertical
              className="h-full"
              pauseOnHover
            >
              {[...testimonials[0], ...testimonials[1], ...testimonials[2]].map((testimonial, index) => (
                <div key={index} className="mb-4 px-2">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </Marquee>
          </div>

          {/* Tablet: Show 2 columns */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 h-full">
            {[testimonials[0], [...testimonials[1], ...testimonials[2]]].map((column, columnIndex) => (
              <Marquee
                key={columnIndex}
                vertical
                className="h-full"
                pauseOnHover
                reverse={columnIndex % 2 === 1}
              >
                {column.map((testimonial, index) => (
                  <div key={index} className="mb-4 sm:mb-6">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </Marquee>
            ))}
          </div>

          {/* Desktop: Show 3 columns */}
          <div className="hidden lg:grid grid-cols-3 gap-6 h-full">
            {testimonials.map((column, columnIndex) => (
              <Marquee
                key={columnIndex}
                vertical
                className="h-full"
                pauseOnHover
                reverse={columnIndex % 2 === 1}
              >
                {column.map((testimonial, index) => (
                  <div key={index} className="mb-6">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </Marquee>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection2;