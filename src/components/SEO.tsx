import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO({
  title = "Bahta Express Logistics | Global Freight & Cargo Solutions",
  description = "Expert logistics solutions since 1977. Air & ocean freight, customs clearance, and warehousing between China and Ethiopia. Fast, reliable, experienced.",
  canonical = "https://bahtaexpress.com/",
  ogImage = "/og-image.jpg",
}: SEOProps) {
  const siteTitle = title.includes("Bahta Express")
    ? title
    : `${title} | Bahta Express Logistics`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
}
