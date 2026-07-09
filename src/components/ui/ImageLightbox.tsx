import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

interface ImageLightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function ImageLightbox({
  images,
  index,
  onClose,
  onChange,
}: ImageLightboxProps) {
  const { t } = useTranslation();
  const isOpen = index !== null;
  useLockBodyScroll(isOpen);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onChange((index + dir + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, go]);

  return (
    <AnimatePresence>
      {isOpen && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <button
            aria-label={t("lightbox.close")}
            onClick={onClose}
            className="absolute top-6 end-6 flex h-11 w-11 items-center justify-center rounded-full text-mist transition-colors hover:text-bone"
          >
            <X size={24} />
          </button>

          <button
            aria-label={t("lightbox.previous")}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute start-3 flex h-12 w-12 items-center justify-center rounded-full text-mist transition-colors hover:text-bone sm:start-8"
          >
            <ChevronLeft size={28} className="rtl:rotate-180" />
          </button>

          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            src={images[index]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[88vw] rounded-lg object-contain"
          />

          <button
            aria-label={t("lightbox.next")}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute end-3 flex h-12 w-12 items-center justify-center rounded-full text-mist transition-colors hover:text-bone sm:end-8"
          >
            <ChevronRight size={28} className="rtl:rotate-180" />
          </button>

          <p className="absolute bottom-6 text-xs tracking-[0.2em] text-mist uppercase">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
