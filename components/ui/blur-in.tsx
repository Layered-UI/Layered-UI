"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type React from "react"

interface BlurInProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function BlurIn({ children, className, as = "div" }: BlurInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const Component = as

  return (
    <motion.div ref={ref}>
      <Component
        className={className}
        initial={{ filter: "blur(10px)", opacity: 0 }}
        animate={isInView ? { filter: "blur(0px)", opacity: 1 } : { filter: "blur(10px)", opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </Component>
    </motion.div>
  )
}