import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Minus } from 'lucide-react'

const features = [
    { name: 'Integrations', free: '5', pro: 'Unlimited' },
    { name: 'API Calls', free: '10K/mo', pro: '500K/mo' },
    { name: 'Team Members', free: '2', pro: '20' },
    { name: 'Support', free: 'Email', pro: 'Priority' },
    { name: 'Analytics Dashboard', free: false, pro: true },
    { name: 'Custom Webhooks', free: false, pro: true },
    { name: 'Advanced Security', free: false, pro: true },
    { name: 'API Access', free: false, pro: true },
]

export default function PricingComparator() {
    return (
        <section className="relative py-16 sm:py-20 md:py-28 overflow-visible">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
                    {/* Badge with gradient lines */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <div className="flex items-center">
                            <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
                        </div>
                        
                        <Badge variant="hero" className="group">
                            <span className="text-sm font-normal">Pricing Plans</span>
                        </Badge>
                        
                        <div className="flex items-center">
                            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4">
                        Simple, transparent pricing
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl px-4">
                        Choose the perfect plan for your needs. Always flexible to scale with your growth.
                    </p>
                </div>
            </div>

            {/* Pricing Table */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl border border-primary/20 bg-card overflow-hidden @container">
                    <div className="overflow-x-auto">
                        {/* Header Row */}
                        <div className="grid grid-cols-3 border-b border-primary/10">
                            <div className="p-6 sm:p-8"></div>
                            <div className="min-w-32 p-6 sm:p-8 border-l border-primary/10 text-center">
                                <p className="text-foreground font-normal text-lg">Free</p>
                                <p className="text-4xl sm:text-5xl font-normal text-primary mt-3">$0</p>
                                <p className="text-sm text-muted-foreground mt-2">Forever</p>
                            </div>
                            <div className="min-w-32 p-6 sm:p-8 border-l border-primary/10 bg-primary/5 text-center relative overflow-visible">
                                <p className="text-foreground font-normal text-lg">Pro</p>
                                <p className="text-4xl sm:text-5xl font-normal text-primary mt-3">$29</p>
                                <p className="text-sm text-muted-foreground mt-2">Per month</p>
                            </div>
                        </div>

                        {/* Features */}
                        {features.map((feature) => (
                            <div key={feature.name} className="grid grid-cols-3 border-t border-primary/10">
                                <div className="p-6 sm:p-8 text-sm text-foreground font-normal">
                                    {feature.name}
                                </div>
                                <div className="min-w-32 p-6 sm:p-8 border-l border-primary/10 flex items-center justify-center">
                                    {typeof feature.free === 'boolean' ? (
                                        feature.free ? (
                                            <Check className="w-5 h-5 text-primary" />
                                        ) : (
                                            <Minus className="w-5 h-5 text-muted-foreground/50" />
                                        )
                                    ) : (
                                        <span className="text-sm text-muted-foreground">{feature.free}</span>
                                    )}
                                </div>
                                <div className="min-w-32 p-6 sm:p-8 border-l border-primary/10 bg-primary/5 flex items-center justify-center">
                                    {typeof feature.pro === 'boolean' ? (
                                        feature.pro ? (
                                            <Check className="w-5 h-5 text-primary" />
                                        ) : (
                                            <Minus className="w-5 h-5 text-muted-foreground/50" />
                                        )
                                    ) : (
                                        <span className="text-sm text-foreground font-normal">{feature.pro}</span>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* CTA Row */}
                        <div className="grid grid-cols-3 border-t border-primary/10">
                            <div className="p-6 sm:p-8"></div>
                            <div className="min-w-32 p-6 sm:p-8 border-l border-primary/10">
                                <Link href="#" className="block">
                                    <Button
                                        variant="outline"
                                        className="w-full rounded-full font-normal hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                            <div className="min-w-32 p-6 sm:p-8 border-l border-primary/10 bg-primary/5">
                                <Link href="#" className="block">
                                    <Button
                                        className="w-full bg-black text-white rounded-full font-normal hover:bg-gray-800 transition-all duration-300 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                                    >
                                        Upgrade
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}