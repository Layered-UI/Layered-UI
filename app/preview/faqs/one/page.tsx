"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const faqs = [
  {
    question: "What is Layered UI?",
    answer:
      "Layered UI is a collection of beautifully crafted Shadcn UI blocks and components, designed to help developers build modern websites with ease.",
  },
  {
    question: "How does Layered UI work?",
    answer:
      "Layered UI works by providing developers with a set of pre-built, customizable UI components that can be easily integrated into any project. These components are designed to work together seamlessly, allowing for rapid development and consistent design.",
  },
  {
    question: "Is Layered UI secure?",
    answer:
      "Yes, Layered UI is built with enterprise-grade security. We use encryption for data in transit and at rest, comply with industry standards, and regularly undergo security audits to protect your information.",
  },
  {
    question: "Can Layered UI integrate with other software?",
    answer:
      "Layered UI integrates with hundreds of popular tools and platforms. From CRMs to project management tools, we support a wide range of integrations to fit seamlessly into your existing workflow.",
  },
  {
    question: "What support options are available?",
    answer:
      "We offer multiple support channels including email support for all plans, priority support for Pro users, and dedicated account management for Enterprise customers. Our comprehensive documentation and community forum are also available 24/7.",
  },
]

const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28" ref={ref}>
      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl px-4 sm:mb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Badge */}
          <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: "right" }}
            />
            <Badge variant="hero">
              <span className="text-sm font-normal">Questions</span>
            </Badge>
            <motion.div
              className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          {/* Heading and Description */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <motion.h2
              className="px-4 text-3xl font-normal tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl font-inter"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Frequently asked questions
            </motion.h2>
            <motion.p
              className="max-w-3xl px-4 text-sm leading-relaxed text-muted-foreground sm:text-base font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Find answers to common questions about Layered UI. Can't find what you're looking for? Reach out to our
              support team for personalized assistance.
            </motion.p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.7 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="group rounded-2xl border border-border bg-card px-6 transition-all hover:border-primary/50 hover:shadow-lg sm:px-8"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-normal text-foreground hover:no-underline sm:py-8 sm:text-xl font-inter">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground sm:pb-8 sm:text-base font-inter">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>

      {/* Background decoration */}
      <motion.div
        className="pointer-events-none absolute left-0 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  )
}

export default FAQSection
