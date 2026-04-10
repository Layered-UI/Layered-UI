'use client';

import { Hero2 } from '@/components/hero2-header';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { MobileNotification } from '@/components/moblie-notification';
import { FloatingTemplatesBadge } from '@/components/FloatingTemplatesBadge';
import { TemplatesSection } from '@/components/marketing/templates-section';
import TestimonialsSection from '@/components/marketing/testimonials-section';
import FaqsSection from '@/components/marketing/faq-section';

export default function Hero() {
  return (
    <>
      <MobileNotification />
      <SiteHeader />
      <section>
        <Hero2 />
      </section>
      <section>
        {/* Bento-style Templates Section */}
        <TemplatesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FaqsSection />

        {/* Floating Badge */}
        <FloatingTemplatesBadge />
      </section>
      <SiteFooter />
    </>
  );
}