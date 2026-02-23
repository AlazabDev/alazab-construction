import { Helmet } from "react-helmet";
import { SITE_CANONICAL } from "@/config/links";

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
}

const PageSEO = ({ title, description, path }: PageSEOProps) => {
  const canonical = new URL(path, SITE_CANONICAL).toString();

  return (
    <Helmet>
      <html lang="ar" dir="rtl" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta property="og:locale" content="ar_AR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default PageSEO;
