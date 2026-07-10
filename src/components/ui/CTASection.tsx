import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import { ScrollReveal } from "./ScrollReveal";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  buttonLabel: string;
  buttonTo: string;
}

export function CTASection({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonTo,
}: CTASectionProps) {
  const { t } = useTranslation();
  const resolvedEyebrow = eyebrow ?? t("footer.startAProject");
  return (
    <section className="relative z-0 overflow-hidden bg-ink py-28 sm:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold-soft/40 blur-3xl sm:h-[420px] sm:w-[420px] lg:h-[560px] lg:w-[560px]" />
        <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/2 translate-y-1/3 rounded-full bg-linen/40 blur-3xl sm:h-[420px] sm:w-[420px] lg:h-[560px] lg:w-[560px]" />
      </div>
      <div className="container-lux text-center">
        <ScrollReveal className="mx-auto max-w-3xl">
          <p className="mb-5 text-xs font-medium tracking-[0.3em] text-gold-soft uppercase">
            {resolvedEyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-[1.1] font-medium text-balance text-bone sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist">
              {description}
            </p>
          )}
          <div className="mt-10 flex justify-center">
            <Button to={buttonTo} variant="primary" className="!bg-bone !text-ink hover:!bg-gold-soft">
              {buttonLabel}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
