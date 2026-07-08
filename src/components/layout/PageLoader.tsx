import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { architect } from "@/data/content";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-2xl text-bone uppercase"
          >
            {architect.name}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
