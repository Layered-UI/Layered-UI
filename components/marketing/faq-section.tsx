"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Data //
const questions = [
  {
    id: "item-1",
    title: "What are Layered UI components?",
    content:
      "Layered UI components are a curated collection of pre-built, production-ready interface blocks designed for Next.js applications. Each component is crafted with multiple visual layers — combining subtle gradients, borders, shadows, and animations — to create a polished, depth-rich design out of the box.",
  },
  {
    id: "item-2",
    title: "Who are Layered UI components built for?",
    content:
      "They're built for developers, founders, and design-conscious teams who want to ship beautiful interfaces fast. Whether you're building a SaaS dashboard, a marketing site, or a portfolio — Layered UI components give you a professional foundation without needing a dedicated designer.",
  },
  {
    id: "item-3",
    title: "Can I customize the Layered UI components?",
    content:
      "Absolutely. Every component is built with clean, readable code using Tailwind CSS utility classes and shadcn/ui primitives. You can easily adjust colors, spacing, typography, and layout to match your brand — or extend them with your own design tokens.",
  },
  {
    id: "item-4",
    title: "Do Layered UI components support dark mode?",
    content:
      "Yes. All components include full dark mode support out of the box using Tailwind's dark variant and CSS custom properties. Every layer, shadow, and gradient adapts seamlessly between light and dark themes without any extra configuration.",
  },
  {
    id: "item-5",
    title: "What technologies are Layered UI components built with?",
    content:
      "Layered UI components are built with Next.js (App Router), Tailwind CSS, and shadcn/ui. Select components also leverage Framer Motion for smooth entrance and interaction animations. Everything is TypeScript-first and follows modern React patterns.",
  },
  {
    id: "item-6",
    title: "How do I start using Layered UI components?",
    content:
      "Browse the components and templates in our collection, preview them live, then copy the code directly into your project. Each block is self-contained — just drop it in, install any required dependencies, and you're ready to ship.",
  },
  {
    id: "item-7",
    title: "Will new Layered UI components be added over time?",
    content:
      "Yes. We're continuously expanding the collection with new blocks, sections, and full-page templates. Upcoming additions include more dashboard widgets, e-commerce blocks, authentication flows, and data visualization components — all following the same layered design philosophy.",
  },

  // Add more questions here
  // {
  //   id: "item-8",
  //   title: "Your question here?",
  //   content: "Your answer here.",
  // },
];

// FaqsSection //

const FaqsSection = () => {
  return (
    <section
      id="faq"
      className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]"
    >
      {/* Heading — centered, matching project style */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />
          <Badge variant="hero" className="group">
            <span className="text-sm font-normal">FAQ</span>
          </Badge>
          <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
        </div>
        <h2 className="text-balance text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-3 text-base max-w-xl">
          Common questions about Layered UI components. Can't find what you're looking for?{" "}
          <a className="text-primary hover:underline" href="#">Reach out</a>.
        </p>
      </div>

      {/* Accordion */}
      <div className="mx-auto max-w-3xl">
        <Accordion
          className="w-full rounded-2xl border border-border bg-card overflow-hidden"
          collapsible
          defaultValue="item-1"
          type="single"
        >
          {questions.map((item) => (
            <AccordionItem
              className="border-b border-border last:border-b-0 px-6 transition-colors hover:bg-muted/30"
              key={item.id}
              value={item.id}
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqsSection;