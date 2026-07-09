import { useTranslation } from "react-i18next";
import { useSiteData } from "@/context/DataContext";

export function StudioMap() {
  const { t } = useTranslation();
  const { architect } = useSiteData();
  const embedSrc = `https://www.google.com/maps/embed?pb=!1m3!2m1!1s${encodeURIComponent(
    architect.address,
  )}!6i15`;

  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-lg border border-mist">
      <iframe
        src={embedSrc}
        title={t("common.studioLocationMap")}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[320px] w-full"
        style={{ border: 0 }}
      />
      <div className="pointer-events-none absolute inset-0 dark:bg-ink/15" />
    </div>
  );
}
