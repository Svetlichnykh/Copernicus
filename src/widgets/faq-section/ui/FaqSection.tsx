"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/ui/accordion";
import { Reveal } from "@/shared/ui/reveal";
import { useLanguage } from "@/shared/lib/i18n";

export function FaqSection() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <Reveal className="text-center">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">
            {t.faq.eyebrow}
          </p>
          <h2 className="font-display mt-2 text-3xl text-foreground sm:text-4xl">
            {t.faq.title}
          </h2>
        </Reveal>

        <Reveal delayMs={120}>
          <Accordion type="single" collapsible className="mt-10">
            {t.faq.items.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
