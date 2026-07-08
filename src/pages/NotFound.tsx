import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/ui/SEO";

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." />
      <section className="container-lux flex min-h-[80vh] flex-col items-center justify-center py-32 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-stone uppercase">
          404
        </p>
        <h1 className="font-serif text-5xl text-ink sm:text-6xl dark:text-bone">
          Page not found
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-stone">
          The page you're looking for may have been moved, renamed, or never
          existed. Let's get you back to solid ground.
        </p>
        <div className="mt-10">
          <Button to="/">Back to Home</Button>
        </div>
      </section>
    </>
  );
}
