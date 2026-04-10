"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import posthog from "posthog-js"
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"

export function ProBanner() {
  return (
    <div className="group relative top-0 bg-white dark:bg-black py-3 transition-all duration-300 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 text-center md:flex-row md:gap-4 md:text-left">
        <Link
          href="https://layered-blocks.vercel.app"
          onClick={() => posthog.capture("banner_cta_clicked")}
          target="_blank"
          className="inline-flex items-center justify-center text-xs leading-snug md:text-sm md:justify-start flex-wrap"
        >
          <AnimatedGradientText className="font-[580] text-center md:text-left">
            <span className="inline md:hidden">
              Introducing Layered UI
            </span>
            <span className="hidden md:inline">
              Introducing Layered UI – blocks and templates to build beautiful landing pages in minutes.
            </span>
          </AnimatedGradientText>
          <ChevronRight className="ml-1 mt-[2px] h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-300 dark:bg-neutral-700" />
    </div>
  )
}

export function ProductHuntBanner() {
  return (
    <div className="group relative top-0 bg-white dark:bg-black py-3 transition-all duration-300 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 text-center md:flex-row md:gap-4 md:text-left">
        <Link
          href="https://www.producthunt.com/products/"
          onClick={() => posthog.capture("product_hunt_banner_clicked")}
          target="_blank"
          className="inline-flex items-center justify-center text-xs leading-snug md:text-sm md:justify-start flex-wrap"
        >
          <AnimatedGradientText className="font-[580] text-center md:text-left">
            <span className="inline md:hidden">
              Live on Product Hunt!
            </span>
            <span className="hidden md:inline">
              Layered UI is live on Product Hunt today! Show your support and vote for us.
            </span>
          </AnimatedGradientText>
          <ChevronRight className="ml-1 mt-[2px] h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-300 dark:bg-neutral-700" />
    </div>
  )
}

export function GithubBanner() {
  return (
    <div className="group relative top-0 bg-white dark:bg-black py-3 transition-all duration-300 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 text-center md:flex-row md:gap-4 md:text-left">
        <Link
          href="https://github.com/kingtroy125/layered-blocks"
          onClick={() => posthog.capture("github_banner_clicked")}
          target="_blank"
          className="inline-flex items-center justify-center text-xs leading-snug md:text-sm md:justify-start flex-wrap"
        >
          <AnimatedGradientText className="font-[580] text-center md:text-left">
            <span className="inline md:hidden">
              Give us a star on GitHub
            </span>
            <span className="hidden md:inline">
              Give us a star on GitHub. Help us grow by starring the project and sharing your feedback.
            </span>
          </AnimatedGradientText>
          <ChevronRight className="ml-1 mt-[2px] h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-300 dark:bg-neutral-700" />
    </div>
  )
}

export function SiteBanner() {
  return <GithubBanner />
}
