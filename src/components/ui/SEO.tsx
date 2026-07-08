import { Helmet } from "react-helmet-async";
import { useSiteData } from "@/context/DataContext";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

export function SEO({ title, description, image }: SEOProps) {
  const { architect } = useSiteData();
  const fullTitle = `${title} — ${architect.name}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
}
