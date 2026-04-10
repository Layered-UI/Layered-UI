'use client'

import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, useInView, type Variants } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const faqs = [
  {
    question: 'What is Layered UI?',
    answer:
      'Layered UI is a collection of beautifully crafted Shadcn UI blocks and components, designed to help developers build modern websites with ease.',
  },
  {
    question: 'Can I integrate Layered UI with my existing tools?',
    answer:
      'Yes! Layered UI seamlessly integrates with popular tools like QuickBooks, Xero, Stripe, and many more. Our robust API allows you to connect with virtually any financial tool in your workflow, ensuring all your data stays synchronized across platforms.',
  },
  {
    question: 'How does Layered UI automate finances?',
    answer:
      'Layered UI uses advanced AI algorithms to analyze your financial patterns and automatically categorize transactions, set budgets, and suggest optimal saving strategies. It can also generate recurring reports, send smart alerts, and even recommend tax-saving opportunities.',
  },
  {
    question: 'Is my data secure with Layered UI?',
    answer:
      'Absolutely. We use enterprise-grade encryption, secure cloud infrastructure, and comply with GDPR and SOC 2 standards. Your data is encrypted both in transit and at rest, and we never share your information with third parties. You maintain full control over your data at all times.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our premium plans include dedicated account managers, priority support, and personalized onboarding sessions to help you get the most out of Aurion.',
  },
]

export default function FaqSection2() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? [] : [index]))
  }

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Title */}
          <motion.div
            className="lg:sticky lg:top-8"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Badge */}
            <motion.div
              className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
              variants={containerVariants}
            >
              <motion.div variants={badgeVariants}>
                <Badge variant="hero" className="group">
                  <span className="text-sm font-normal">FAQ</span>
                </Badge>
              </motion.div>
              <motion.div className="flex items-center" variants={lineVariants}>
                <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-foreground"
              variants={headingVariants}
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          {/* Right side - FAQ Items */}
          <motion.div
            className="space-y-4 sm:space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-2xl sm:rounded-3xl border border-border overflow-hidden transition-all duration-300 group hover:border-primary/30 relative"
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Hover glow effect */}
                <motion.div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <motion.button
                  onClick={() => toggleItem(index)}
                  className="relative z-10 w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 sm:gap-6 hover:bg-secondary/50 transition-colors duration-200"
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-foreground leading-tight">
                    {faq.question}
                  </h3>
                  <motion.div
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-border bg-secondary/50 transition-all duration-300 group-hover:border-primary/50"
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <ChevronDown className="w-5 h-5 text-foreground" />
                  </motion.div>
                </motion.button>

                {/* Smooth expand/collapse animation */}
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      className="relative z-10 px-5 sm:px-6 pb-5 sm:pb-6"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <motion.div
                        className="pt-2 border-t border-border"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        <motion.p
                          className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 0.2,
                            delay: 0.15,
                          }}
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}