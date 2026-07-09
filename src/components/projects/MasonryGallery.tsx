import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MasonryGallery({ images, title = "Gallery" }: { images: string[]; title?: string }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {images.map((src, i) => (
          <ScrollReveal key={src + i} delay={(i % 6) * 0.05} className="break-inside-avoid">
            <button
              onClick={() => setActiveIndex(i)}
              className="block w-full overflow-hidden rounded-lg border border-mist bg-charcoal/10"
              aria-label={t("gallery.openImage", { title, index: i + 1 })}
            >
              <img
                src={src}
                alt={t("gallery.imageAlt", { title, index: i + 1 })}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </button>
          </ScrollReveal>
        ))}
      </div>
      <ImageLightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </div>
  );
}
