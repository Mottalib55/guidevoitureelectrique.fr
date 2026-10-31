import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Aides voiture électrique 2026 : simulateur des primes",
  description:
    "Estimez vos aides pour l'achat d'une voiture électrique : bonus écologique, prime à la conversion, leasing social. Calculez le prix après aides en 30 secondes.",
  path: "/outils/simulateur-aides/",
});

const jsonLd = webApplicationJsonLd({
  name: "Simulateur aides achat voiture électrique",
  description: "Vérifiez votre éligibilité à la prime coup de pouce CEE et au leasing social 2026 pour une voiture électrique.",
  url: "https://guidevoitureelectrique.fr/outils/simulateur-aides/",
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
