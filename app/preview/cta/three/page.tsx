import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 sm:gap-10 rounded-3xl border border-border bg-card p-8 sm:p-12 md:p-16 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-card)]">
          {/* Decorative corner dots */}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-primary/30" />
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30" />
          <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-primary/30" />
          <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-primary/30" />

          {/* Background glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />

          {/* Vertical dashed line */}
          <div className="absolute top-0 left-1/2 h-full w-px border-l border-dashed border-border/50 -translate-x-1/2" />

          {/* Heading */}
          <h2 className="relative z-10 text-center text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-foreground">
            Start for Free Today!
          </h2>

          {/* Description */}
          <p className="relative z-10 text-center text-muted-foreground text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl">
            Begin your 6-day free trial today to fully explore and experience all the features and benefits we offer.
          </p>

          {/* CTA Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-6 font-medium border-2 transition-all duration-300 hover:border-primary/50"
            >
              Contact Sales
            </Button>
            <Button className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-6 font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}