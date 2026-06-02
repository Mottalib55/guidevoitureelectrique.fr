import type { Metadata } from "next";

const SITE_NAME = "Guide Voiture Électrique";
const SITE_URL = "https://guidevoitureelectrique.fr";

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || `${SITE_URL}/og-default.jpg`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": url,
        // prêt pour multi-pays
        // "de-DE": `https://guidevoitureelectrique.de${path}`,
        // "en-GB": `https://guidevoitureelectrique.co.uk${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
