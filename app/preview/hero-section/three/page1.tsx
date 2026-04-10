'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const textEffectVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
        },
    },
};

const charVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

const wordVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
        },
    },
};

const imageVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
        },
    },
};

const animatedGroupVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const groupItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const buttonGroupVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.55,
        },
    },
};

const buttonItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

function AnimatedText({ text }: { text: string }) {
    const words = text.split(" ");

    return (
        <motion.span
            className="inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textEffectVariants}
        >
            {words.map((word, wordIndex) => (
                <motion.span
                    key={wordIndex}
                    variants={wordVariants}
                    className="inline-block"
                >
                    {word.split("").map((char, charIndex) => (
                        <motion.span key={charIndex} variants={charVariants}>
                            {char}
                        </motion.span>
                    ))}
                    <span className="inline-block">&nbsp;</span>
                </motion.span>
            ))}
        </motion.span>
    );
}

export default function HeroSection() {
    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">

            {/* Light mode background: light gray top → dark bottom */}
            <motion.div
                className="absolute inset-x-3 sm:inset-x-4 md:inset-x-6 lg:inset-x-8 top-2 sm:top-4 bottom-24 sm:bottom-32 md:bottom-40 lg:bottom-56 rounded-2xl sm:rounded-3xl pointer-events-none dark:hidden"
                style={{
                    background: `radial-gradient(
            160% 160% at 50% 0%,
            #f3f4f6 28%,
            #6b7280 65%,
            #000000ff 100%
          )`,
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
            />

            {/* Dark mode background: dark top → light bottom */}
            <motion.div
                className="absolute inset-x-3 sm:inset-x-4 md:inset-x-6 lg:inset-x-8 top-2 sm:top-4 bottom-24 sm:bottom-32 md:bottom-40 lg:bottom-56 rounded-2xl sm:rounded-3xl pointer-events-none hidden dark:block"
                style={{
                    background: `radial-gradient(
            160% 160% at 50% 0%,
            #000000ff 28%,
            #6b7280 65%,
            #f3f4f6 100%
          )`,
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <motion.div
                    className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >

                    {/* Badge with lines */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={animatedGroupVariants}
                    >
                        <Link
                            href="#"
                            className="group flex items-center justify-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
                        >
                            <motion.div className="hidden sm:flex items-center" variants={groupItemVariants}>
                                <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-gray-400/60 dark:from-white/30 to-transparent" />
                            </motion.div>

                            <motion.div variants={groupItemVariants}>
                                <Badge
                                    variant="hero"
                                    className="group flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm"
                                >
                                    <span className="font-normal">
                                        Introducing Layered UI Agents
                                    </span>
                                </Badge>
                            </motion.div>

                            <motion.div className="hidden sm:flex items-center" variants={groupItemVariants}>
                                <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-gray-400/60 dark:from-white/30 to-transparent" />
                            </motion.div>
                        </Link>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight max-w-4xl text-balance text-gray-900 dark:text-white"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <AnimatedText text="Build 10x Faster with Layered UI" />
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-base sm:text-lg md:text-xl max-w-xl text-balance px-2 text-gray-600 dark:text-gray-300"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={descriptionVariants}
                    >
                        Craft. Build. Ship Modern Websites With AI Support.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={buttonGroupVariants}
                    >
                        <motion.div variants={buttonItemVariants} className="w-full sm:w-auto">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full px-6 w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
                            >
                                <Link href="#link">
                                    <span className="text-nowrap">Start Building</span>
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div variants={buttonItemVariants} className="w-full sm:w-auto">
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="rounded-full px-6 w-full sm:w-auto bg-transparent border-gray-400/50 text-gray-900 hover:bg-white/20 dark:border-white/30 dark:text-white dark:hover:bg-white/10 transition-all"
                            >
                                <Link href="#link">
                                    <span className="text-nowrap">Watch Video</span>
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    className="mt-8 sm:mt-10 md:mt-12 lg:mt-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={imageVariants}
                >
                    <div className="relative bg-card rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-lg shadow-primary/5">
                        <Image
                            src="/assets/12.png"
                            alt="App dashboard preview"
                            width={2880}
                            height={1842}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}