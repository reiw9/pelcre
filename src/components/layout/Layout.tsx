import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { ScrollToTop } from "./ScrollToTop";
import { cn } from "@/lib/cn";

// Evenly spaced from top to bottom of the full page so the accent runs the whole way
// down, alternating sides/colors for rhythm rather than a repeating mechanical pattern.
// Kept behind all page content (-z-10) so it can never sit on top of text or buttons —
// it will naturally be hidden behind photos and solid-color sections, which is expected.
const SIDE_ACCENTS = [
  { top: "6%", side: "left" },
  { top: "27%", side: "right" },
  { top: "48%", side: "left" },
  { top: "69%", side: "right" },
  { top: "90%", side: "left" },
] as const;

export function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="relative flex min-h-screen flex-col">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {SIDE_ACCENTS.map((accent, i) => (
          <div
            key={i}
            className={cn(
              "absolute h-64 w-64 rounded-full sm:h-96 sm:w-96 lg:h-[480px] lg:w-[480px]",
              accent.side === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2",
              i % 2 === 0 ? "bg-gold/35 dark:bg-linen/30" : "bg-ink/30 dark:bg-gold-soft/30",
            )}
            style={{ top: accent.top }}
          />
        ))}
      </div>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </div>
  );
}
