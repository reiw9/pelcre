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
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[8%] left-0 h-36 w-36 -translate-x-1/2 rounded-full bg-gold/60 sm:h-56 sm:w-56 lg:h-[340px] lg:w-[340px] dark:bg-linen/50" />
        <div className="absolute top-[26%] right-0 h-36 w-36 translate-x-1/2 rounded-full bg-ink/50 sm:h-56 sm:w-56 lg:h-[340px] lg:w-[340px] dark:bg-gold-soft/50" />
        <div className="absolute top-[52%] left-0 h-36 w-36 -translate-x-1/2 rounded-full bg-ink/50 sm:h-56 sm:w-56 lg:h-[340px] lg:w-[340px] dark:bg-gold-soft/50" />
        <div className="absolute top-[74%] right-0 h-36 w-36 translate-x-1/2 rounded-full bg-gold/60 sm:h-56 sm:w-56 lg:h-[340px] lg:w-[340px] dark:bg-linen/50" />
        <div className="absolute top-[94%] left-0 h-36 w-36 -translate-x-1/2 rounded-full bg-gold/60 sm:h-56 sm:w-56 lg:h-[340px] lg:w-[340px] dark:bg-linen/50" />
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
