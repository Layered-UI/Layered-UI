"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const questions = [
  {
    id: "item-1",
    title: "What is Layered Ui?",
    content:
      "Layered Ui is a collection of beautifully crafted Shadcn UI blocks and components, designed to help developers build modern websites with ease.",
  },
  {
    id: "item-2",
    title: "Who can benefit from Layered Ui?",
    content:
      "Layered Ui is built for founders, product teams, and agencies that want to accelerate idea validation and delivery.",
  },
  {
    id: "item-3",
    title: "What features does Layered Ui include?",
    content:
      "Layered Ui offers a collaborative workspace where you can design and build beautiful web applications, with reusable UI blocks, deployment automation, and comprehensive analytics all in one place. With Layered Ui, you can streamline your team's workflow and deliver high-quality websites quickly and efficiently.",
  },
  {
    id: "item-4",
    title: "Can I customize components in Layered Ui?",
    content:
      "Yes. Layered Ui offers editable design systems and code scaffolding so you can tailor blocks to your brand and workflow.",
  },
  {
    id: "item-5",
    title: "Does Layered Ui integrate with my existing tools?",
    content:
      "Layered Ui connects with popular source control, design tools, and cloud providers to fit into your current stack.",
  },
  {
    id: "item-6",
    title: "How do I get support while using Layered Ui?",
    content:
      "You can access detailed docs, community forums, and dedicated customer success channels for help at any time.",
  },
  {
    id: "item-7",
    title: "How do I get started with Layered Ui?",
    content:
      "You can access detailed docs, community forums, and dedicated customer success channels for help at any time.",
  },
];

const FaqsSection = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-7xl px-4 sm:mb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center">
              <div className="h-px w-12 bg-gradient-to-l from-primary/30 to-transparent sm:w-20" />
            </div>

            <Badge variant="hero" className="group">
              <span className="text-sm font-normal">Questions</span>
            </Badge>

            <div className="flex items-center">
              <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent sm:w-20" />
            </div>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <h2 className="max-w-4xl px-4 text-3xl font-normal leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Here are some common questions and answers that you might encounter
              when using Layered Ui. If you don't find the answer you're looking for,
              feel free to reach out.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Accordion
          className="-space-y-px w-full rounded-3xl border border-border bg-card overflow-hidden"
          collapsible
          defaultValue="item-1"
          type="single"
        >
          {questions.map((item) => (
            <AccordionItem
              className="border-b border-border last:border-b-0 px-6 sm:px-8 transition-colors hover:bg-muted/30"
              key={item.id}
              value={item.id}
            >
              <AccordionTrigger className="py-6 text-left text-base font-normal text-foreground hover:no-underline sm:py-8 sm:text-lg">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground sm:pb-8 sm:text-base">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-8 text-center text-muted-foreground">
          Can't find what you're looking for? Contact our{" "}
          <a className="text-primary hover:underline" href="#">
            customer support team
          </a>
        </p>
      </div>
    </section>
  );
};

export default FaqsSection;
