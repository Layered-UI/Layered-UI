import { cn } from "@/lib/utils";
import type React from "react";
import { FullWidthDivider } from "@/components/ui/full-width-divider";
import { Badge } from "@/components/ui/badge";
import { ZapIcon, ShieldCheckIcon, ActivityIcon, GlobeIcon } from "lucide-react";

type FeatureType = {
    title: string;
    icon: React.ReactNode;
    description: string;
};

const features: FeatureType[] = [
    {
        title: "Lightning Fast",
        icon: <ZapIcon />,
        description: "Blazing fast performance with edge network optimizations.",
    },
    {
        title: "Secure by Design",
        icon: <ShieldCheckIcon />,
        description: "Enterprise-grade security, zero configuration required.",
    },
    {
        title: "Real-time Sync",
        icon: <ActivityIcon />,
        description: "Real-time data sync across all devices efficiently.",
    },
    {
        title: "Global Scale",
        icon: <GlobeIcon />,
        description: "Instant global deployment to 35+ regions worldwide.",
    },
];

export function FeatureCard({
    feature,
    className,
    ...props
}: React.ComponentProps<"div"> & {
    feature: FeatureType;
}) {
    return (
        <div
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden bg-background p-6 transition-all duration-300 hover:bg-secondary/50",
                className
            )}
            {...props}
        >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className={cn(
                "relative z-10 flex items-center pt-4 pb-6",
                "[&_svg]:size-5 [&_svg]:text-primary [&_svg]:transition-transform [&_svg]:duration-300 group-hover:[&_svg]:rotate-6"
            )}>
                <div className="flex size-10 items-center justify-center rounded-full border border-border bg-secondary transition-all duration-300 group-hover:border-primary/50 group-hover:scale-110">
                    {feature.icon}
                </div>
            </div>

            <div className="relative z-10 space-y-2">
                <h3 className="font-medium text-foreground text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </div>
    );
}

export default function FeatureSection() {
    return (
        <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-16">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
                        <Badge variant="hero" className="group">
                            <span className="text-sm font-normal">Features</span>
                        </Badge>
                        <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                    </div>

                    <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-balance text-foreground px-4">
                            Everything you need to build faster
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed px-4">
                            Lyra is evolving to be more than just the models. It supports an
                            entire ecosystem helping developers and businesses innovate.
                        </p>
                    </div>
                </div>

                {/* Feature grid */}
                <div className="relative grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-4 border border-border rounded-2xl overflow-hidden">
                    <FullWidthDivider position="top" />
                    {features.map((feature) => (
                        <FeatureCard feature={feature} key={feature.title} />
                    ))}
                    <FullWidthDivider position="bottom" />
                </div>

            </div>
        </section>
    );
}