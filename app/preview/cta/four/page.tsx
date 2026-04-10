"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0 font-semibold transition-transform duration-500 ease-in-out group-hover:-translate-y-full hover:duration-300">
        {text}
      </span>
      <span className="absolute top-0 left-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:duration-300">
        {text}
      </span>
    </div>
  )
}

const Cta2Section = () => {
  return (
    <>
      <div className="relative min-h-[70vh] w-full pb-24 md:pb-32">
        {/* Full-width subtle grid — foreground adapts to light/dark */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundSize: "3rem 3rem",
            backgroundImage:
              "linear-gradient(hsl(var(--foreground) / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.04) 1px, transparent 1px)",
          }}
          aria-hidden
        />

        {/* Inner CTA container */}
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 pt-24 pb-24 md:pt-32 md:pb-32">
          {/* Focused grid with radial mask */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
              backgroundSize: "3rem 3rem",
              backgroundImage:
                "linear-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
            }}
            aria-hidden
          />

          {/* Left animated line — text-foreground makes currentColor theme-aware */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-0 hidden h-full w-24 md:block text-foreground"
          >
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 30 120"
              fill="none"
            >
              <g stroke="url(#left-fadeStroke)" strokeWidth="0.4">
                <path d="M 1 12 v 65 l 28 24 v 70" />
              </g>
              <g mask="url(#left-mask)">
                <circle
                  className="leftrightline left-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill="url(#left-fg-grad)"
                />
              </g>
              <defs>
                <mask id="left-mask">
                  <path
                    d="M 1 12 v 65 l 28 24 v 70"
                    strokeWidth="0.4"
                    stroke="white"
                  />
                </mask>
                <linearGradient
                  id="left-fadeStroke"
                  gradientUnits="userSpaceOnUse"
                  x1="0" y1="12" x2="0" y2="170"
                >
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                  <stop offset="10%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="90%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="left-fg-grad" fx="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Right animated line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute right-0 hidden h-full w-24 md:block text-foreground"
          >
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 30 120"
              fill="none"
            >
              <g stroke="url(#right-fadeStroke)" strokeWidth="0.4">
                <path d="M 29 12 v 65 l -28 24 v 65" />
              </g>
              <g mask="url(#right-mask)">
                <circle
                  className="leftrightline right-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill="url(#right-fg-grad)"
                />
              </g>
              <defs>
                <mask id="right-mask">
                  <path
                    d="M 29 12 v 65 l -28 24 v 65"
                    strokeWidth="0.4"
                    stroke="white"
                  />
                </mask>
                <linearGradient
                  id="right-fadeStroke"
                  gradientUnits="userSpaceOnUse"
                  x1="0" y1="12" x2="0" y2="170"
                >
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                  <stop offset="10%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="90%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="right-fg-grad" fx="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
            whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative z-10 flex items-center justify-center gap-2 sm:gap-3"
          >
            <div className="flex items-center">
              <div className="w-8 sm:w-12 md:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent"></div>
            </div>

            <Badge variant="hero" className="group">
              <span className="text-sm font-normal">Ready to transform</span>
            </Badge>

            <div className="flex items-center">
              <div className="w-8 sm:w-12 md:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
            whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto mt-6 max-w-3xl bg-gradient-to-br from-foreground via-foreground via-50% to-foreground/40 bg-clip-text pb-2 text-center text-5xl leading-[1.15] font-medium tracking-tighter text-balance text-transparent md:text-[4.2rem]"
          >
            Lightweight Analytics Built For Simplicity
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 10, filter: "blur(10px)", opacity: 0 }}
            whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto mb-12 max-w-sm bg-gradient-to-br from-muted-foreground via-muted-foreground/80 to-muted-foreground/60 bg-clip-text text-center text-[0.8rem] leading-relaxed text-balance text-transparent sm:max-w-[32rem] sm:text-[0.87rem] lg:text-[1rem]"
          >
            Track page views and visitors in real-time with a lightweight,
            privacy-first tool made for developers.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 5, filter: "blur(5px)", opacity: 0 }}
            whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Link
              href="#"
              className="group flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 md:text-[1rem] border border-border/60 bg-card/40 text-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.08),inset_0_1px_0_hsl(var(--primary)/0.05)] hover:border-primary/40 hover:bg-card/60 backdrop-blur-sm"
            >
              <TextGlitch text="Get Started" />
            </Link>
          </motion.div>
        </div>
      </div>

      <style>
        {`
.leftrightline {
  offset-anchor: 10px 0px;
  animation: leftrightline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 3s;
}

.left-line {
  offset-path: path("M 1 12 v 65 l 28 24 v 80");
}
.right-line {
  offset-path: path("M 29 12 v 65 l -28 24 v 80");
}

@keyframes leftrightline-animation-path {
  0% {
    offset-distance: 0%;
  }
  60% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}
        `}
      </style>
    </>
  )
}

export default Cta2Section