import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQItem } from "@/data/types";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/cn";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-charcoal/10 border-t border-b border-charcoal/10 dark:divide-bone/10 dark:border-bone/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <ScrollReveal key={item.question} delay={i * 0.04}>
            <div>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-xl text-ink sm:text-2xl dark:text-bone">
                  {item.question}
                </span>
                <Plus
                  size={20}
                  className={cn(
                    "shrink-0 text-gold transition-transform duration-500",
                    isOpen && "rotate-45",
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 text-sm leading-relaxed text-stone">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
