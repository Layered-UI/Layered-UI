'use client';

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type LogoType = {
    src: string;
    alt: string;
    isInvertable?: boolean;
};

type TileData = {
    row: number;
    col: number;
    logo?: LogoType;
};

// Coordinate mapping to approximate the "scattered" look in the image.
// Grid 5x5, 72px cell size.
const tiles: TileData[] = [
    // Row 0
    { row: 0, col: 1 },
    {
        row: 0,
        col: 3,
        logo: {
            src: "https://storage.efferd.com/logo/notion.svg",
            alt: "Notion Logo",
        },
    },
    // Row 1
    { row: 1, col: 0 },
    {
        row: 1,
        col: 2,
        logo: {
            src: "https://storage.efferd.com/logo/cursor.svg",
            alt: "Cursor Logo",
            isInvertable: true,
        },
    },
    {
        row: 1,
        col: 4,
        logo: {
            src: "https://storage.efferd.com/logo/vercel.svg",
            alt: "Vercel Logo",
            isInvertable: true,
        },
    },
    // Row 2
    {
        row: 2,
        col: 1,
        logo: {
            src: "https://storage.efferd.com/logo/planetscale.svg",
            alt: "Planetscale Logo",
            isInvertable: true,
        },
    },
    {
        row: 2,
        col: 3,
        logo: {
            src: "https://storage.efferd.com/logo/gmail.svg",
            alt: "Gmail Logo",
        },
    },
    // Row 3
    { row: 3, col: 0 },
    {
        row: 3,
        col: 2,
        logo: {
            src: "https://storage.efferd.com/logo/supabase.svg",
            alt: "Supabase Logo",
        },
    },
    {
        row: 3,
        col: 4,
        logo: {
            src: "https://storage.efferd.com/logo/canva.svg",
            alt: "Canva Logo",
        },
    },
    // Row 4
    {
        row: 4,
        col: 1,
        logo: {
            src: "https://storage.efferd.com/logo/adobe.svg",
            alt: "Adobe Logo",
        },
    },
    {
        row: 4,
        col: 3,
        logo: {
            src: "https://storage.efferd.com/logo/polar.svg",
            alt: "Polar Logo",
        },
    },
];

function IntegrationCard({ row, col, logo }: TileData) {
    return (
        <div
            className={cn(
                "absolute flex size-18 items-center justify-center rounded-xl border border-border transition-all duration-300",
                logo
                    ? "bg-card shadow-xs hover:border-primary/30 hover:shadow-sm dark:bg-card/60"
                    : "bg-secondary/30 dark:bg-background"
            )}
            style={{
                left: col * 72,
                top: row * 72,
            }}
        >
            {logo && (
                <img
                    alt={logo.alt}
                    className={cn(
                        "pointer-events-none size-8 select-none object-contain p-1",
                        logo.isInvertable && "dark:invert"
                    )}
                    height={40}
                    src={logo.src}
                    width={40}
                />
            )}
        </div>
    );
}

export default function IntegrationsSection() {
    return (
        <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-16">

                    {/* Badge */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
                        <Badge variant="hero" className="group">
                            <span className="text-sm font-normal">Integrations</span>
                        </Badge>
                        <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                    </div>

                    {/* Heading and Description */}
                    <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-balance text-foreground px-4">
                            Seamless Integration
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed px-4">
                            Integrate with over 100+ tools and platforms to streamline your
                            workflow and boost productivity.
                        </p>
                    </div>
                </div>

                {/* Integration Grid */}
                <div className="flex justify-center">
                    <div
                        className="relative size-[360px]"
                        style={{
                            maskImage:
                                "radial-gradient(ellipse at center, black 30%, black 55%, transparent 80%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse at center, black 30%, black 55%, transparent 80%)",
                        }}
                    >
                        {tiles.map((tile) => (
                            <IntegrationCard key={`${tile.row}_${tile.col}`} {...tile} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}