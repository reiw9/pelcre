import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { Project } from "@/data/types";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const { t } = useTranslation();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-4/5 overflow-hidden rounded-lg border border-mist bg-charcoal/10 transition-colors duration-500 group-hover:border-ink/40">
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
          <span className="absolute top-5 start-5 rounded-md bg-paper px-3 py-1.5 text-[0.65rem] font-medium tracking-[0.2em] text-ink uppercase">
            {t(`categories.${project.category}`)}
          </span>
          <span className="absolute top-5 end-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={16} className="rtl:-scale-x-100" />
          </span>
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl text-ink transition-colors group-hover:text-gold dark:text-bone">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-stone">{project.location}</p>
          </div>
          <span className="pt-1 text-sm text-stone">{project.year}</span>
        </div>
      </Link>
    </motion.div>
  );
}
