'use client';

import dynamic from 'next/dynamic';

const MobileNotification = dynamic(() => import('@/components/moblie-notification').then(mod => mod.MobileNotification), { ssr: false });
const FloatingTemplatesBadge = dynamic(() => import('@/components/FloatingTemplatesBadge').then(mod => mod.FloatingTemplatesBadge), { ssr: false });
const TemplatesSection = dynamic(() => import('@/components/marketing/templates-section').then(mod => mod.TemplatesSection), { ssr: false });
const BentoSection = dynamic(() => import('@/components/marketing/components-bento').then(mod => mod.ComponentsBentoSection), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/marketing/testimonials-section'), { ssr: false });
const FaqsSection = dynamic(() => import('@/components/marketing/faq-section'), { ssr: false });

export function HomeSections() {
  return (
    <>
      <MobileNotification />
      <BentoSection />
      <TestimonialsSection />
      <FaqsSection />
      <FloatingTemplatesBadge />
    </>
  );
}
