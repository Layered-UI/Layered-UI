"use client"

import Link from "next/link"
import { Globe, Share2, MessageCircle, LinkIcon, Send, Feather } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const links = [
  {
    title: "Features",
    href: "#",
  },
  {
    title: "Solution",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Help",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
]

const socialLinks = [
  { icon: Share2, label: "Share", href: "#" },
  { icon: MessageCircle, label: "Message", href: "#" },
  { icon: LinkIcon, label: "Link", href: "#" },
  { icon: Globe, label: "Website", href: "#" },
  { icon: Send, label: "Contact", href: "#" },
  { icon: Feather, label: "Blog", href: "#" },
]

export default function FooterSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <footer className="border-t border-border/5 py-16 md:py-32" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" aria-label="Go home" className="mx-auto block w-fit">
            <motion.span
              className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-xl font-bold text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
            Layered UI
            </motion.span>
          </Link>
        </motion.div>

        <div className="my-12 flex flex-wrap justify-center gap-8 text-sm">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.05,
              }}
            >
              <Link href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  {link.title}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="my-12 flex flex-wrap justify-center gap-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + index * 0.05,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/5"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Layered UI, All rights reserved
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}