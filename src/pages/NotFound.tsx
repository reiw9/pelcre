import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/ui/SEO";

export function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t("notFound.seoTitle")} description={t("notFound.seoDescription")} />
      <section className="container-lux flex min-h-[80vh] flex-col items-center justify-center py-32 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone uppercase">
          {t("notFound.code")}
        </p>
        <h1 className="font-serif text-5xl text-ink sm:text-6xl dark:text-bone">
          {t("notFound.title")}
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-stone">
          {t("notFound.description")}
        </p>
        <div className="mt-10">
          <Button to="/">{t("notFound.backToHome")}</Button>
        </div>
      </section>
    </>
  );
}
