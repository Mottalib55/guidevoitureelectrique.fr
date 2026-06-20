import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Comparateur voitures électriques : 3 modèles côte à côte",
  description:
    "Comparez jusqu'à 3 voitures électriques : prix, autonomie réelle, recharge, batterie, coffre, poids et note. Tableau comparatif interactif et gratuit.",
  path: "/outils/comparateur-modeles/",
});

const jsonLd = webApplicationJsonLd({
  name: "Comparateur de voitures électriques",
  description: "Comparez jusqu'à 3 modèles de voitures électriques côte à côte : prix, autonomie, recharge, batterie et plus.",
  url: "https://guidevoitureelectrique.fr/outils/comparateur-modeles/",
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
