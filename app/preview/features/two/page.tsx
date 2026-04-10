'use client';

import { Badge } from "@/components/ui/badge";
import { Users, Eye, Zap, UsersRound } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: "Customer Success",
    description:
      "Our customers are at the heart of everything we do. From onboarding to ongoing support, we're here to ensure our platform delivers real value.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe in clear communication, honest business practices, and providing our customers with the insights they need to make informed decisions.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "We're committed to helping businesses operate more efficiently by simplifying financial processes and eliminating unnecessary complexity.",
  },
  {
    icon: UsersRound,
    title: "Collaboration",
    description:
      "We believe that the best solutions come from working together. Whether it's within our team or with our customers, collaboration is key to our success.",
  },
];

const ValuesSection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            </div>
            
            <Badge variant="hero" className="group">
              <span className="text-sm font-normal">Our value</span>
            </Badge>
            
            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4 max-w-4xl">
            Our core values guide everything
          </h2>
        </div>
      </div>

      {/* Values Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="relative group flex flex-col bg-card rounded-3xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative mb-16 sm:mb-20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center shadow-[inset_0px_4px_8px_0px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-normal text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
