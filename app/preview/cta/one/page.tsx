import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const CTASection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            </div>

            <Badge variant="hero" className="group">
              <span className="text-sm font-normal">Join us</span>
            </Badge>

            <div className="flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground mb-6 sm:mb-8 max-w-4xl text-balance px-4">
            Ready to transform your financial management?
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl px-4">
            Join thousands of businesses that trust our platform to streamline their financial operations.
            <br className="hidden sm:block" />
            Get started today and experience the difference.
          </p>

          <Button
            variant="default"
            size="lg"
            className="group !rounded-full px-8 py-6 h-auto text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
          >
            Get started
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection