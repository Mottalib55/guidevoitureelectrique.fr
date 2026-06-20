import { Modele } from "@/data/modeles";

export function vehicleJsonLd(modele: Modele) {
  return {
    "@context": "https://schema.org",
    "@type": "Car",
    name: modele.modele,
    brand: {
      "@type": "Brand",
      name: modele.marque,
    },
    model: modele.modele.replace(`${modele.marque} `, ""),
    vehicleEngine: {
      "@type": "EngineSpecification",
      fuelType: "Electricity",
    },
    fuelType: "Electricity",
    fuelEfficiency: `${modele.conso} kWh/100 km`,
    speed: {
      "@type": "QuantitativeValue",
      value: modele.autonomieWLTP,
      unitCode: "KMT",
      name: "Autonomie WLTP",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: modele.prixBase,
      availability: modele.statut === "a-venir"
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock",
      url: `https://guidevoitureelectrique.fr/modeles/${modele.slug}/`,
    },
    image: `https://guidevoitureelectrique.fr/images/modeles/${modele.slug}.jpg`,
    description: modele.description.slice(0, 300),
    url: `https://guidevoitureelectrique.fr/modeles/${modele.slug}/`,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://guidevoitureelectrique.fr${path}`,
    datePublished: datePublished || "2026-05-28",
    dateModified: datePublished || "2026-05-28",
    author: {
      "@type": "Person",
      name: "Mottalib Radif",
      jobTitle: "MBA INSEAD, Passionné de Finance",
      description: "Passionné par l'automobile et la mobilité électrique, diplômé MBA de l'INSEAD. Spécialisé dans l'analyse du marché des véhicules électriques, les aides à l'achat et l'infrastructure de recharge en France.",
      url: "https://guidevoitureelectrique.fr/a-propos/",
      image: "https://guidevoitureelectrique.fr/team/mottalib-radif.jpg",
    },
    publisher: {
      "@type": "Organization",
      name: "Guide Voiture Électrique",
      url: "https://guidevoitureelectrique.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://guidevoitureelectrique.fr/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://guidevoitureelectrique.fr${path}`,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webApplicationJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    author: {
      "@type": "Organization",
      name: "Guide Voiture Électrique",
      url: "https://guidevoitureelectrique.fr",
    },
  };
}

export function definedTermSetJsonLd(
  terms: { term: string; description: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossaire de la voiture électrique",
    url: "https://guidevoitureelectrique.fr/glossaire/",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.description,
    })),
  };
}
