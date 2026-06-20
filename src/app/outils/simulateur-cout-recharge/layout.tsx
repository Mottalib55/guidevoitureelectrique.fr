import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Simulateur coût de recharge voiture électrique 2026",
  description:
    "Calculez le coût de recharge de votre voiture électrique : domicile vs borne publique vs rapide. Budget mensuel, comparaison essence et économies estimées.",
  path: "/outils/simulateur-cout-recharge/",
});

const jsonLd = webApplicationJsonLd({
  name: "Simulateur coût de recharge VE",
  description: "Calculez votre budget recharge mensuel : domicile, bornes publiques ou rapides. Comparaison avec l'essence incluse.",
  url: "https://guidevoitureelectrique.fr/outils/simulateur-cout-recharge/",
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
