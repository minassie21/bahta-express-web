import React from "react";
import { Helmet } from "react-helmet-async";

interface ServiceSchema {
  name: string;
  description: string;
  url: string;
}

export const LogisticsCompanySchema: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bahta Express Logistics",
    url: "https://bahtaexpress.com",
    logo: "https://bahtaexpress.com/logo.png",
    description:
      "Expert logistics solutions since 1977. Air & ocean freight, customs clearance, and warehousing between China and Ethiopia.",
    foundingDate: "1977",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address",
      addressLocality: "Addis Ababa",
      addressRegion: "Ethiopia",
      postalCode: "1000",
      addressCountry: "ET",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+251911282956",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.facebook.com/bahtaexpress",
      "https://www.linkedin.com/company/bahtaexpress",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export const ServicesSchema: React.FC<{ services: ServiceSchema[] }> = ({
  services,
}) => {
  const structuredData = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Bahta Express Logistics",
      url: "https://bahtaexpress.com",
    },
    url: service.url,
  }));

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
