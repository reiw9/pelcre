import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { useOutlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { ScrollToTop } from "./ScrollToTop";
import { PageLoader } from "@/components/ui/PageLoader";
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

// Same ease-out-expo curve ScrollReveal uses elsewhere, so page transitions read as the
// same motion language rather than a different animation vocabulary.
const TRANSITION_EASE = [0.22, 1, 0.36, 1] as const;
const EXIT_MS = 260;

// Deliberately not AnimatePresence + key-based remount (see below) — this defers *when*
// the new outlet gets committed instead, so `motion.main` never unmounts and there's
// nothing for a suspending child to corrupt. The old page's content stays put and fades
// out first; only once that finishes does the new (possibly still-loading) route swap in
// underneath and fade up, matching how a considered, unhurried transition should feel.
function useDeferredOutlet(pathname: string, outlet: ReactNode) {
  const [displayed, setDisplayed] = useState({ pathname, outlet });
  const [visible, setVisible] = useState(true);
  const latestOutlet = useRef(outlet);
  latestOutlet.current = outlet;

  useEffect(() => {
    if (pathname === displayed.pathname) return;
    setVisible(false);
    const timer = setTimeout(() => {
      setDisplayed({ pathname, outlet: latestOutlet.current });
      setVisible(true);
    }, EXIT_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return { outlet: displayed.outlet, visible };
}

export function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  const { outlet: displayedOutlet, visible } = useDeferredOutlet(location.pathname, outlet);

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
      <motion.main
        className="flex-1"
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
        transition={{
          duration: visible ? 0.5 : EXIT_MS / 1000,
          ease: TRANSITION_EASE,
        }}
      >
        <Suspense fallback={<PageLoader />}>{displayedOutlet}</Suspense>
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  );
}
