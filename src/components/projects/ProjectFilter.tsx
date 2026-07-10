import { cn } from "@/lib/cn";
import type { Category } from "@/data/types";

interface ProjectFilterProps {
  categories: Category[];
  active: string | "All";
  onChange: (category: string | "All") => void;
  counts: Record<string, number>;
  filterLabel: string;
  allLabel: string;
}

export function ProjectFilter({
  categories,
  active,
  onChange,
  counts,
  filterLabel,
  allLabel,
}: ProjectFilterProps) {
  const options: { id: string | "All"; label: string }[] = [
    { id: "All", label: allLabel },
    ...categories.map((c) => ({ id: c.id, label: c.name })),
  ];

  return (
    <div className="flex flex-wrap gap-3" role="tablist" aria-label={filterLabel}>
      {options.map((option) => {
        const isActive = active === option.id;
        return (
          <button
            key={option.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.id)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300",
              isActive
                ? "border-ink bg-ink text-paper dark:border-bone dark:bg-bone dark:text-ink"
                : "border-mist text-stone hover:border-ink hover:text-ink dark:hover:text-bone",
            )}
          >
            {option.label}
            <span className="ms-1.5 opacity-60">({counts[option.id] ?? 0})</span>
          </button>
        );
      })}
    </div>
  );
}
