import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQ as FAQType } from "@/data/faqs";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function FAQList({ items, className }: { items: FAQType[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-white/8 rounded-3xl glass", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
            >
              <span className={cn("font-display text-base font-medium sm:text-lg transition-colors", isOpen ? "text-white" : "text-slate-200")}>
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-300",
                  isOpen && "rotate-45 border-electric-400/60 bg-electric-500/15 text-electric-300",
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400 sm:px-8 sm:text-base">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function FAQSection({
  items,
  eyebrow = "FAQ",
  title = "Questions, answered.",
  description,
  id = "faq",
}: {
  items: FAQType[];
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
}) {
  return (
    <section id={id} className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description ?? "Still have a question? Message us on WhatsApp and we'll answer within the hour during business hours."}
            />
          </div>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <FAQList items={items} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
