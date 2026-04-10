"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

// Variants //

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
    }),
};

const lineVariant: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.15 },
    },
};

const badgeVariant: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

const gridVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

// Components //
function CodeBlock({ code, lang }: { code: string; lang: string }) {
    return (
        <div className="relative border border-border bg-muted/40 overflow-x-auto rounded-lg shadow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-muted/20 px-4 py-2">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {lang}
                </span>
            </div>
            <pre className="px-4 py-4">
                <code className="font-mono text-xs leading-relaxed text-foreground">{code}</code>
            </pre>
        </div>
    );
}

// Data //

const steps = [
    {
        id: "01",
        title: "Add registry",
        description: (
            <>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Add the Layered UI registry namespace to your{" "}
                    <code className="font-mono text-xs text-foreground bg-muted px-1 py-0.5 border border-border rounded">
                        components.json
                    </code>
                    .
                </p>
                <CodeBlock
                    lang="json"
                    code={`{
  "registries": {
    "@layeredUI": "https://layered-blocks.vercel.app/r/{name}.json"
  }
}`}
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Learn more about registry config from{" "}
                    <Link
                        href="https://ui.shadcn.com/docs/registry/namespace"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
                    >
                        Shadcn UI docs
                    </Link>
                    .
                </p>
            </>
        ),
    },
    {
        id: "02",
        title: "Usage",
        description: (
            <>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Install blocks via the shadcn CLI using the{" "}
                    <code className="font-mono text-xs text-foreground bg-muted px-1 py-0.5 border border-border rounded">
                        @layeredUI/&#123;name&#125;
                    </code>{" "}
                    syntax.
                </p>
                <CodeBlock
                    lang="bash"
                    code="pnpm dlx shadcn add @layeredUI/hero-section-1"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Don't guess the block name — copy the CLI command from each block on its category page.
                </p>
            </>
        ),
    },
    {
        id: "03",
        title: "Configure MCP",
        description: (
            <>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Run the following command to configure the MCP server:
                </p>
                <CodeBlock lang="bash" code="pnpm dlx shadcn mcp init" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                    Select your MCP client when prompted. Remember to enable the MCP server in your client when done.
                </p>
                <div className="border-l-2 border-primary/20 pl-4 mt-2 flex flex-col gap-3">
                    <p className="font-mono text-[10px] tracking-widest text-foreground uppercase">
                        Prompts to try
                    </p>
                    <ul className="flex flex-col gap-2">
                        {[
                            "Find me a hero from layeredUI registry",
                            "Build me a landing page using a hero and features section from layeredUI registry",
                            "Build me a pricing page using a pricing, logo cloud, comparator and faqs blocks from layeredUI mist registry",
                        ].map((prompt) => (
                            <li key={prompt} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/40" aria-hidden />
                                {prompt}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        ),
    },
];

// RegistryPage //

const RegistryPage = () => {
    const headerRef = useRef(null);
    const gridRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
    const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />

            <main className="flex-1">
                <section
                    id="registry"
                    className="mx-4 max-w-7xl border-x px-4 py-20 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
                >
                    {/* Heading */}
                    <div ref={headerRef} className="flex flex-col items-center text-center mb-16">
                        <div className="mb-4 flex items-center justify-center gap-3">
                            <motion.div
                                className="origin-right"
                                variants={lineVariant}
                                initial="hidden"
                                animate={headerInView ? "visible" : "hidden"}
                            >
                                <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />
                            </motion.div>

                            <motion.div
                                variants={badgeVariant}
                                initial="hidden"
                                animate={headerInView ? "visible" : "hidden"}
                            >
                                <Badge variant="hero" className="group">
                                    <span className="text-sm font-normal">Documentation</span>
                                </Badge>
                            </motion.div>

                            <motion.div
                                className="origin-left"
                                variants={lineVariant}
                                initial="hidden"
                                animate={headerInView ? "visible" : "hidden"}
                            >
                                <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
                            </motion.div>
                        </div>

                        <motion.h2
                            className="text-balance text-3xl font-bold sm:text-4xl"
                            variants={fadeUp}
                            custom={0.1}
                            initial="hidden"
                            animate={headerInView ? "visible" : "hidden"}
                        >
                            Layered UI Registry
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-base max-w-xl text-muted-foreground"
                            variants={fadeUp}
                            custom={0.2}
                            initial="hidden"
                            animate={headerInView ? "visible" : "hidden"}
                        >
                            Install production‑ready shadcn/UI marketing blocks directly into your project
                            using the shadcn CLI. Add the registry once and pull blocks by name.
                        </motion.p>
                    </div>

                    {/* Steps */}
                    <div className="mx-auto max-w-3xl">
                        <motion.div
                            ref={gridRef}
                            className="w-full rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
                            initial={{ opacity: 0, scale: 0.99 }}
                            animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                        >
                            <motion.div
                                variants={gridVariants}
                                initial="hidden"
                                animate={gridInView ? "visible" : "hidden"}
                            >
                                {steps.map((step, i) => (
                                    <motion.div
                                        key={step.id}
                                        variants={cardVariants}
                                        className={cn(
                                            "flex gap-6 px-8 py-10 transition-colors hover:bg-muted/30",
                                            i !== steps.length - 1 && "border-b border-border",
                                        )}
                                    >
                                        <div className="shrink-0 pt-0.5">
                                            <span className="font-mono text-[10px] tracking-widest text-muted-foreground/40 tabular-nums">
                                                {step.id}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-5 flex-1 min-w-0">
                                            <p className="font-mono text-[10px] tracking-widest text-foreground uppercase opacity-80">
                                                {step.title}
                                            </p>
                                            {step.description}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
};

export default RegistryPage;