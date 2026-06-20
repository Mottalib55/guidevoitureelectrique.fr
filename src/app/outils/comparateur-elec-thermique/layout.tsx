import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Électrique vs thermique : comparateur coût total (TCO)",
  description:
    "Comparez le coût total électrique vs thermique sur 5 ans : achat, énergie, entretien, assurance et décote. Simulateur TCO personnalisable et résultat immédiat.",
  path: "/outils/comparateur-elec-thermique/",
});

const jsonLd = webApplicationJsonLd({
  name: "Comparateur coût total électrique vs thermique",
  description: "Comparez le TCO d'une voiture électrique et d'une voiture thermique sur 1 à 10 ans. Tous les postes de dépense inclus.",
  url: "https://guidevoitureelectrique.fr/outils/comparateur-elec-thermique/",
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
