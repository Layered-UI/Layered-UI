import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const CTASection = () => {
    return (
        <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">

            {/* Light mode background: light top → dark bottom */}
            <div
                className="absolute inset-x-3 sm:inset-x-4 md:inset-x-6 lg:inset-x-8 top-2 sm:top-4 bottom-2 sm:bottom-4 rounded-2xl sm:rounded-3xl pointer-events-none dark:hidden"
                style={{
                    background: `radial-gradient(
                        160% 160% at 50% 0%,
                        #f3f4f6 28%,
                        #6b7280 65%,
                        #000000ff 100%
                    )`,
                }}
            />

            {/* Dark mode background: dark top → light bottom */}
            <div
                className="absolute inset-x-3 sm:inset-x-4 md:inset-x-6 lg:inset-x-8 top-2 sm:top-4 bottom-2 sm:bottom-4 rounded-2xl sm:rounded-3xl pointer-events-none hidden dark:block"
                style={{
                    background: `radial-gradient(
                        160% 160% at 50% 0%,
                        #000000ff 28%,
                        #6b7280 65%,
                        #f3f4f6 100%
                    )`,
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex flex-col items-center justify-center text-center">

                    {/* Badge with lines */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                        <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-gray-400/60 dark:from-white/30 to-transparent"></div>
                        <Badge variant="hero" className="group">
                            <span className="text-sm font-normal">Join us</span>
                        </Badge>
                        <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-gray-400/60 dark:from-white/30 to-transparent"></div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 sm:mb-8 max-w-4xl text-balance px-4 text-gray-900 dark:text-white">
                        Ready to transform your financial management?
                    </h2>

                    {/* Subtext */}
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-2xl px-4 text-gray-600 dark:text-gray-300">
                        Join thousands of businesses that trust our platform to streamline their financial operations.
                        <br className="hidden sm:block" />
                        Get started today and experience the difference.
                    </p>

                    {/* Button */}
                    <Button
                        variant="default"
                        size="lg"
                        className="group !rounded-full px-8 py-6 h-auto text-base font-medium shadow-lg hover:shadow-xl transition-all bg-white text-gray-900 hover:bg-gray-100 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
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