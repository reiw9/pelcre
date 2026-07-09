import type { TimelineItem } from "@/data/types";
import { ScrollReveal } from "./ScrollReveal";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 start-0 w-px bg-mist sm:start-[11rem]" />
      <div className="space-y-14">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.05}>
            <div className="relative grid gap-2 ps-8 sm:grid-cols-[11rem_1fr] sm:gap-10 sm:ps-0">
              <span className="absolute top-1.5 start-0 h-2.5 w-2.5 rtl:translate-x-1/2 -translate-x-1/2 rounded-full bg-gold sm:start-[11rem]" />
              <p className="text-sm font-medium tracking-wide text-stone uppercase sm:text-end sm:pe-10">
                {item.year}
              </p>
              <div className="sm:ps-10">
                <h3 className="font-serif text-2xl text-ink dark:text-bone">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">
                  {item.place}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone">
                  {item.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
