import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="relative flex min-h-screen flex-col">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[6%] left-0 h-56 w-56 -translate-x-1/2 rounded-full bg-gold/45 blur-2xl sm:h-96 sm:w-96 lg:h-[560px] lg:w-[560px] dark:bg-linen/35" />
        <div className="absolute top-[38%] right-0 h-56 w-56 translate-x-1/2 rounded-full bg-ink/40 blur-2xl sm:h-96 sm:w-96 lg:h-[560px] lg:w-[560px] dark:bg-gold-soft/35" />
        <div className="absolute top-[70%] left-0 h-56 w-56 -translate-x-1/2 rounded-full bg-ink/40 blur-2xl sm:h-96 sm:w-96 lg:h-[560px] lg:w-[560px] dark:bg-gold-soft/35" />
        <div className="absolute top-[98%] right-0 h-56 w-56 translate-x-1/2 rounded-full bg-gold/45 blur-2xl sm:h-96 sm:w-96 lg:h-[560px] lg:w-[560px] dark:bg-linen/35" />
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
