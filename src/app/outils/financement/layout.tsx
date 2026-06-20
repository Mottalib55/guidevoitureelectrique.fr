import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Calculateur financement voiture électrique LOA LLD",
  description:
    "Calculez votre financement voiture électrique : comparez comptant, crédit, LOA et LLD sur la même durée. Mensualités, coût total et meilleure formule en 1 clic.",
  path: "/outils/financement/",
});

const jsonLd = webApplicationJsonLd({
  name: "Calculateur financement voiture électrique",
  description: "Comparez comptant, crédit, LOA et LLD pour votre voiture électrique. Mensualités, coût total réel et recommandation personnalisée.",
  url: "https://guidevoitureelectrique.fr/outils/financement/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
