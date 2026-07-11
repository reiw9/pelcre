import { useTranslation } from "react-i18next";
import { SEO } from "@/components/ui/SEO";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useSiteData } from "@/context/DataContext";

function Section({ title, children }: { title: string; children: string }) {
  return (
    <ScrollReveal>
      <h2 className="font-serif text-2xl text-ink sm:text-3xl dark:text-bone">{title}</h2>
      <p className="mt-4 leading-relaxed text-stone">{children}</p>
    </ScrollReveal>
  );
}

export function Privacy() {
  const { t } = useTranslation();
  const { architect } = useSiteData();

  return (
    <>
      <SEO title={t("privacy.seoTitle")} description={t("privacy.seoDescription")} />

      <section className="container-lux max-w-3xl py-32 sm:py-40">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone uppercase">
          {t("privacy.eyebrow")}
        </p>
        <h1 className="font-serif text-4xl leading-[1.1] font-medium text-balance text-ink sm:text-5xl dark:text-bone">
          {t("privacy.title")}
        </h1>
        <p className="mt-4 text-sm text-stone">{t("privacy.lastUpdated")}</p>
        <p className="mt-8 leading-relaxed text-stone">{t("privacy.intro")}</p>

        <div className="mt-16 space-y-12">
          <Section title={t("privacy.collectTitle")}>{t("privacy.collectBody")}</Section>
          <Section title={t("privacy.useTitle")}>{t("privacy.useBody")}</Section>
          <Section title={t("privacy.analyticsTitle")}>{t("privacy.analyticsBody")}</Section>
          <Section title={t("privacy.storageTitle")}>{t("privacy.storageBody")}</Section>
          <Section title={t("privacy.thirdPartyTitle")}>{t("privacy.thirdPartyBody")}</Section>

          <ScrollReveal>
            <h2 className="font-serif text-2xl text-ink sm:text-3xl dark:text-bone">
              {t("privacy.contactTitle")}
            </h2>
            <p className="mt-4 leading-relaxed text-stone">
              {t("privacy.contactBody")}{" "}
              <a href={`mailto:${architect.email}`} className="link-underline font-medium text-ink dark:text-bone">
                {architect.email}
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
