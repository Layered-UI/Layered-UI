'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Data

const testimonials = [
  {
    quote:
      'Our team finally stopped juggling countless spreadsheets and switched to a cleaner, more efficient workflow solution.',
    author: 'Daniel Cooper',
    role: 'Project Coordinator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanielCooper',
  },
  {
    quote:
      'In just one day, our whole team was seamlessly collaborating and managing projects through a single dashboard.',
    author: 'Liam Parker',
    role: 'Productivity Lead',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LiamParker',
  },
  {
    quote:
      'We moved away from messy manual processes and embraced a smoother workflow that keeps our whole team aligned and efficient.',
    author: 'Alison Thomas',
    role: 'Team Operations Lead',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlisonThomas',
  },
  {
    quote:
      'Within just 60 seconds, our complete CRM system was set up and ready for immediate use.',
    author: 'Alex Jofer',
    role: 'Systems Administrator',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexJofer',
  },
  {
    quote:
      'Our customer response time has improved by 40%, allowing us to provide faster, more efficient support.',
    author: 'Ethan Ross',
    role: 'Operations Manager',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EthanRoss',
  },
  {
    quote:
      'The visibility into our pipeline has never been clearer — our entire sales team is finally on the same page.',
    author: 'Sarah Mendez',
    role: 'Sales Director',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahMendez',
  },
  {
    quote:
      'Onboarding new team members used to take a full week. Now with the clear structure, they are productive within hours.',
    author: 'Sophie Lane',
    role: 'HR Manager',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SophieLane',
  },
  {
    quote:
      'Switching to this platform was the best decision we made last year. Our team is aligned and we ship faster than ever.',
    author: 'Rachel Kim',
    role: 'VP of Engineering',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelKim',
  },
  {
    quote:
      'The automation features alone saved us hours every week. We finally have a workflow that actually scales with us.',
    author: 'James Whitfield',
    role: 'Head of Operations',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JamesWhitfield',
  },
  {
    quote:
      'We tried three other tools before this one. Nothing came close to how seamlessly it fits into our existing workflow.',
    author: 'Priya Nair',
    role: 'Product Manager',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaNair',
  },
  {
    quote:
      'The reporting dashboard gives us exactly the insights we need without any of the noise. Incredibly well thought out.',
    author: 'Marcus Webb',
    role: 'Customer Success Lead',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusWebb',
  },
  // Add more testimonials here 
  // {
  //   quote: 'Your testimonial text here.',
  //   author: 'Jane Doe',
  //   role: 'CEO, Acme Inc.',
  //   avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JaneDoe',
  // },
];

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

// TestimonialCard
const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => (
  <div
    className={cn(
      'relative flex flex-col p-6 rounded-xl border shadow-sm overflow-hidden',
      'bg-card text-card-foreground border-border',
      'transition-transform duration-300 hover:-translate-y-1',
    )}
  >
    {/* Quote icon — matches Figma's circular icon container */}
    <div className="w-16 h-16 mb-6 rounded-full bg-foreground/[0.06] flex items-center justify-center flex-shrink-0">
      <Quote className="w-6 h-6 text-foreground/70 fill-foreground/70" strokeWidth={0} />
    </div>

    {/* Quote text */}
    <p className="text-sm font-normal leading-relaxed text-foreground mb-6 flex-1">
      &ldquo;{testimonial.quote}&rdquo;
    </p>

    {/* Author row */}
    <div className="flex items-center gap-3.5 mt-auto">
      <Image
        src={testimonial.avatar}
        alt={testimonial.author}
        width={52}
        height={52}
        className="w-[52px] h-[52px] rounded-full object-cover ring-2 ring-foreground/20 flex-shrink-0"
      />
      <div className="min-w-0">
        <p className="font-semibold text-sm leading-6 truncate text-foreground">
          {testimonial.author}
        </p>
        <p className="text-xs leading-5 truncate text-muted-foreground">
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);

// TestimonialsSection

export const TestimonialsSection = () => {
  const [count, setCount] = useState(INITIAL_COUNT);


  const visible = testimonials.slice(0, count);
  const hasMore = count < testimonials.length;

  return (
    <section
      id="testimonials"
      className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="hero" showLines={true} className="group mb-4">
          <span className="text-sm font-normal">Testimonials</span>
        </Badge>
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">
          Trusted by Teams Worldwide
        </h2>
        <p className="mt-3 text-base max-w-xl text-muted-foreground">
          Join thousands of teams globally who rely on our solutions to collaborate, grow, and succeed.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="relative">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance] space-y-4">
          {visible.map((t, i) => (
            <div key={`${t.author}-${i}`} className="break-inside-avoid">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Fade overlay — only when more items are hidden */}
        {hasMore && (
          <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}

        {/* Load more / Show less */}
        {(hasMore || count > INITIAL_COUNT) && (
          <div className="relative flex justify-center mt-6 z-10">
            {hasMore ? (
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-medium"
                onClick={() => setCount((c) => Math.min(c + LOAD_MORE_COUNT, testimonials.length))}
              >
                Load more
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-medium"
                onClick={() => setCount(INITIAL_COUNT)}
              >
                Show less
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;