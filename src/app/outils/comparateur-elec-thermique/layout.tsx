import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Électrique vs thermique : comparateur coût total (TCO)",
  description:
    "Comparez le coût total électrique vs thermique sur 5 ans : achat, énergie, entretien, assurance et décote. Simulateur TCO personnalisable et résultat immédiat.",
  path: "/outils/comparateur-elec-thermique/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
