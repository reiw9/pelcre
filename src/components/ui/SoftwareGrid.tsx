import type { SoftwareItem } from "@/data/types";
import { ScrollRevealGroup, ScrollRevealItem } from "./ScrollReveal";

export function SoftwareGrid({ items }: { items: SoftwareItem[] }) {
  return (
    <ScrollRevealGroup className="grid grid-cols-2 gap-px overflow-hidden border border-charcoal/10 sm:grid-cols-3 lg:grid-cols-5 dark:border-bone/10">
      {items.map((item) => (
        <ScrollRevealItem key={item.name}>
          <div className="group flex h-full flex-col justify-between gap-8 bg-paper p-6 transition-colors hover:bg-linen dark:bg-ink dark:hover:bg-ink-soft">
            <p className="text-xs tracking-[0.2em] text-stone uppercase">
              {item.category}
            </p>
            <p className="font-serif text-xl text-ink dark:text-bone">
              {item.name}
            </p>
          </div>
        </ScrollRevealItem>
      ))}
    </ScrollRevealGroup>
  );
}
