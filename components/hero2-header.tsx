'use client'

import { ChevronRight } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { useRef, useCallback, useState, useEffect, ReactNode } from 'react'
import { useTheme } from 'next-themes'

const animatedGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const groupItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Text effect animation - word by word reveal
const textEffectVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

const charVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

const wordVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: 'easeOut',
    },
  },
}

const buttonGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
}

const buttonItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Text effect component that animates characters word by word
function AnimatedText({ text }: { text: string }) {
  const words = text.split(' ')

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
          {word.split('').map((char, charIndex) => (
            <motion.span key={charIndex} variants={charVariants}>
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
    </motion.span>
  )
}

export function Hero2(): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    if (!containerRef.current) return

    requestAnimationFrame(() => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      containerRef.current.style.setProperty('--mouse-x', `${x}px`)
      containerRef.current.style.setProperty('--mouse-y', `${y}px`)
    })
  }, [])

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative mx-4 max-w-7xl border-x px-4 py-16 overflow-hidden rounded-3xl bg-card transition-colors duration-500 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:border-zinc-800"
    >
      {/* Vertical Lines Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[length:80px_100%] bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]"
      />

      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Circular blur effect - Top Left */}
      <div
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 pointer-events-none bg-slate-500/15 dark:bg-slate-300/20 rounded-full blur-[80px]"
      />

      {/* Circular blur effect - Top Right */}
      <div
        className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 pointer-events-none bg-slate-500/10 dark:bg-slate-300/20 rounded-full blur-[100px]"
      />

      {/* Circular blur effect - Bottom Center */}
      <div
        className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 pointer-events-none bg-slate-500/10 dark:bg-slate-300/20 rounded-full blur-[120px]"
      />

      {/* Circular blur effect - Bottom Left */}
      <div
        className="absolute bottom-0 -left-1/3 w-1/2 h-2/3 pointer-events-none bg-slate-500/10 dark:bg-slate-300/20 rounded-full blur-[90px]"
      />

      {/* Circular blur effect - Bottom Right */}
      <div
        className="absolute bottom-0 -right-1/3 w-1/2 h-2/3 pointer-events-none bg-slate-500/10 dark:bg-slate-300/20 rounded-full blur-[100px]"
      />

      {/* Large Background Text - Mobile */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden md:hidden pb-4">
        <motion.span
          className="text-[100px] sm:text-[140px] font-black tracking-tighter text-center text-transparent bg-clip-text select-none whitespace-nowrap bg-gradient-to-r from-black/20 via-black/10 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent leading-[0.9] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Layered
        </motion.span>
      </div>

      {/* Large Background Text - Tablet */}
      <div className="absolute inset-0 hidden md:flex lg:hidden items-end justify-center pointer-events-none overflow-hidden pb-6">
        <motion.span
          className="text-[200px] font-black tracking-tighter text-center text-transparent bg-clip-text select-none bg-gradient-to-r from-black/15 via-black/5 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent leading-[0.9] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Layered
        </motion.span>
      </div>

      {/* Large Background Text - Desktop */}
      <div className="absolute inset-0 hidden lg:flex items-end justify-center pointer-events-none overflow-hidden pb-8">
        <motion.span
          className="text-[320px] font-black tracking-tighter text-center text-transparent bg-clip-text select-none bg-gradient-to-r from-black/15 via-black/5 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent leading-[0.9] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Layered
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        <div className="z-10 flex flex-col">
          <div className="grid grid-cols-1">
            <motion.div
              className="flex flex-col items-center gap-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {/* Badge - Animated Group */}
              <motion.div
                className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animatedGroupVariants}
              >
                <motion.div className="flex items-center" variants={groupItemVariants}>
                  <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
                </motion.div>

                <motion.div variants={groupItemVariants}>
                  <Badge variant="hero" className="group">
                    <span className="text-sm font-normal">Layered UI 1.0</span>
                  </Badge>
                </motion.div>

                <motion.div className="flex items-center" variants={groupItemVariants}>
                  <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                </motion.div>
              </motion.div>

              {/* Main Heading - Text Effect Animation */}
              <motion.div
                className="flex flex-col gap-4 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.div
                  className="w-full"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight text-center">
                    <AnimatedText text="Layered UI for" />
                  </h1>
                  <div className="flex items-center justify-center gap-2 mt-4 flex-col">
                    <motion.h1
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.6,
                            delay: 0.6,
                          },
                        },
                      }}
                    >
                      <AnimatedText text="Design Engineers" />
                    </motion.h1>
                    <motion.div
                      className="w-full max-w-sm overflow-hidden"
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <svg aria-hidden="true" className="w-full h-auto" height="22" viewBox="0 0 283 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332" stroke="url(#paint0_linear_pl)" strokeWidth="4"></path>
                        <defs>
                          <linearGradient id="paint0_linear_pl" x1="282" y1="5.49999" x2="40" y2="13" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#fa1515"></stop>
                            <stop offset="1" stopColor="#5560f7"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-gray-600 dark:text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={descriptionVariants}
              >
                Free and open-source component blocks and layouts built with{' '}
                <span className="font-semibold text-black dark:text-white">React</span>,{' '}
                <span className="font-semibold text-black dark:text-white">Typescript</span>,{' '}
                <span className="font-semibold text-black dark:text-white">Tailwind CSS</span>, and{' '}
                <span className="font-semibold text-black dark:text-white">Motion</span>.
                <br />
                Perfect companion for{' '}
                <span className="font-semibold text-black dark:text-white">shadcn/ui</span>.
              </motion.p>

              {/* CTA Buttons - Animated Group */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={buttonGroupVariants}
              >
                <motion.a
                  href="/hero-section"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition-all"
                  variants={buttonItemVariants}
                >
                  Browse Components
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  variants={buttonItemVariants}
                >
                  Browse Templates
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}