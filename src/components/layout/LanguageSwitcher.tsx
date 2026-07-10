import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "@/i18n";
import { cn } from "@/lib/cn";

const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  en: "English",
  tr: "Türkçe",
  ar: "العربية",
};

const LANGUAGE_CODES: Record<SupportedLanguage, string> = {
  en: "EN",
  tr: "TR",
  ar: "AR",
};

export function LanguageSwitcher({ solid }: { solid: boolean }) {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label={t("nav.toggleLanguage")}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold tracking-wide transition-colors",
          solid
            ? "border-mist text-charcoal hover:border-gold hover:text-gold dark:text-bone"
            : "border-paper/30 text-paper hover:border-paper",
        )}
      >
        {LANGUAGE_CODES[language]}
      </button>
      {open && (
        <div className="absolute end-0 top-full z-50 mt-2 w-36 overflow-hidden rounded-lg border border-mist bg-paper py-1 shadow-lg dark:bg-ink-soft">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => {
                setLanguage(lang);
                setOpen(false);
              }}
              className={cn(
                "block w-full px-4 py-2 text-start text-sm transition-colors hover:bg-linen dark:hover:bg-ink",
                lang === language
                  ? "font-medium text-gold"
                  : "text-ink dark:text-bone",
              )}
            >
              {LANGUAGE_NAMES[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
