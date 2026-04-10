"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { UserIcon, ContactIcon, CrosshairIcon } from "lucide-react";

const steps = [
    {
        id: "choose-role",
        icon: UserIcon,
        title: "Choose your role",
        description: "Select whether you're joining as an employee or team manager.",
    },
    {
        id: "enter-details",
        icon: ContactIcon,
        title: "Enter your details",
        description: "Set up your profile in minutes and connect with your team instantly.",
    },
    {
        id: "define-focus",
        icon: CrosshairIcon,
        title: "Define your focus",
        description: "Choose your department and title to tailor your experience.",
    },
];

export default function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-16">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
                        <Badge variant="hero" className="group">
                            <span className="text-sm font-normal">How it works?</span>
                        </Badge>
                        <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                    </div>

                    <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-balance text-foreground px-4">
                            Start fast, join your team easier
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed px-4">
                            Set up your profile in minutes and sync with your workspace.
                            <br className="hidden sm:block" />
                            No friction, no confusion — just flow.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:items-stretch">

                    {/* Left: 3 tall step cards stacked, filling full height */}
                    <div className="flex flex-col gap-3">
                        {steps.map((step, index) => {
                            const isActive = index === activeStep;
                            return (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStep(index)}
                                    className={cn(
                                        "group relative flex-1 overflow-hidden rounded-2xl border text-left px-8 py-8 transition-all duration-300",
                                        isActive
                                            ? "border-primary/20 bg-secondary/50"
                                            : "bg-background hover:bg-secondary/30"
                                    )}
                                >
                                    {/* Gradient overlay */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent transition-opacity duration-300",
                                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                    )} />

                                    <div className="relative z-10 flex flex-col gap-4">
                                        {/* Icon circle */}
                                        <div className={cn(
                                            "flex size-10 items-center justify-center rounded-full border bg-secondary transition-all duration-300",
                                            isActive
                                                ? "border-primary/50"
                                                : "border-border group-hover:border-primary/40"
                                        )}>
                                            <step.icon className={cn(
                                                "size-4 transition-colors duration-300",
                                                isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                                            )} />
                                        </div>

                                        {/* Title + description */}
                                        <div className="space-y-2">
                                            <h3 className="font-medium text-foreground text-base leading-snug">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Image filling the full card */}
                    <div className="relative overflow-hidden rounded-2xl border bg-secondary/30 min-h-[460px]">
                        <img
                            key={activeStep}
                            src="/assets/phone.png"
                            alt={steps[activeStep].title}
                            className="absolute inset-0 w-full h-full object-cover object-center animate-in fade-in duration-300"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}