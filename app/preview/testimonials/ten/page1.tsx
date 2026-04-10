"use client";

import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

export function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            </div>

            <Badge variant="hero" className="group">
              <span className="text-sm font-normal">Testimonials</span>
            </Badge>

            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4">
            What our users say
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base font-normal max-w-2xl">
            Join thousands of satisfied customers who have transformed their workflows with Finova.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto -mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              index={index}
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

function TestimonialCard({
  testimonial,
  index,
  className,
  ...props
}: React.ComponentProps<"figure"> & {
  testimonial: Testimonial;
  index: number;
}) {
  const { quote, name, role, company, image } = testimonial;

  return (
    <figure
      className={cn(
        "relative flex flex-col justify-between gap-6 rounded-3xl bg-card border border-primary/20 p-6 sm:p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 md:translate-y-[calc(3rem*var(--t-card-index))]",
        className
      )}
      style={
        {
          "--t-card-index": index,
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Quote Icon */}
      <QuoteIcon
        aria-hidden="true"
        className="size-6 text-primary/40 shrink-0 stroke-1"
      />

      {/* Quote */}
      <blockquote className="flex-1">
        <p className="text-sm sm:text-base font-normal text-foreground leading-relaxed">
          {quote}
        </p>
      </blockquote>

      {/* Author */}
      <figcaption className="flex items-center gap-3">
        <Avatar className="size-10 rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
          <AvatarImage alt={`${name}'s profile picture`} src={image} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <cite className="font-semibold text-foreground text-sm not-italic">
            {name}
          </cite>
          <p className="text-muted-foreground text-xs">
            {role}, <span className="text-foreground/70">{company}</span>
          </p>
        </div>
      </figcaption>
    </figure>
  );
}