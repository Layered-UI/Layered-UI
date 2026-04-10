"use client";

import Gemini from '@/components/logos/Gemini';
import Replit from '@/components/logos/Replit';
import MagicUI from '@/components/logos/MagicUI';
import VSCodium from '@/components/logos/VSCodium';
import MediaWiki from '@/components/logos/MediaWiki';
import GooglePaLM from '@/components/logos/GooglePalM';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function IntegrationsSection() {
    return (
        <section>
            <div className="bg-background py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <div className="mb-16 flex flex-col items-center text-center gap-6 sm:gap-8">
                        {/* Badge */}
                        <div className="flex items-center justify-center gap-2 sm:gap-3">
                            <div className="flex items-center">
                                <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
                            </div>

                            <Badge variant="hero" className="group">
                                <span className="text-sm font-normal">Integrations</span>
                            </Badge>

                            <div className="flex items-center">
                                <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground px-4">
                            Integrate with your favorite tools
                        </h2>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm sm:text-base font-normal max-w-2xl">
                            Connect seamlessly with popular platforms and services to enhance your workflow.
                        </p>
                    </div>

                    {/* Integration Cards */}
                    <div className="relative mx-auto w-fit mb-12">
                        <div
                            role="presentation"
                            className="absolute inset-0 z-10 from-transparent to-75% bg-gradient-to-b to-background dark:to-background rounded-3xl"
                        />

                        {/* Row 1 */}
                        <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                            <IntegrationCard>
                                <Gemini />
                            </IntegrationCard>
                            <IntegrationCard>
                                <Replit />
                            </IntegrationCard>
                        </div>

                        {/* Row 2 */}
                        <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                            <IntegrationCard>
                                <MagicUI />
                            </IntegrationCard>
                            <IntegrationCard
                                borderClassName="shadow-primary/20 dark:shadow-primary/30 shadow-lg border-primary/40 dark:border-primary/40"
                                className="bg-primary/5 dark:bg-primary/10"
                            >
                                <Logo />
                            </IntegrationCard>
                            <IntegrationCard>
                                <VSCodium />
                            </IntegrationCard>
                        </div>

                        {/* Row 3 */}
                        <div className="mx-auto flex w-fit justify-center gap-2">
                            <IntegrationCard>
                                <MediaWiki />
                            </IntegrationCard>
                            <IntegrationCard>
                                <GooglePaLM />
                            </IntegrationCard>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <Button asChild className="rounded-3xl px-8 py-6 text-base">
                            <Link href="#">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const IntegrationCard = ({
    children,
    className,
    borderClassName,
}: {
    children: React.ReactNode;
    className?: string;
    borderClassName?: string;
}) => {
    return (
        <div
            className={cn(
                'bg-background dark:bg-background relative flex size-20 rounded-full border border-primary/15 dark:border-primary/30 hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300',
                className
            )}
        >
            <div
                role="presentation"
                className={cn(
                    'absolute inset-0 rounded-full border border-primary/15 dark:border-primary/30',
                    borderClassName
                )}
            />
            <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
        </div>
    );
};