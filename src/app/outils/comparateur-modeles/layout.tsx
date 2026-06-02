import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Comparateur voitures électriques : 3 modèles côte à côte",
  description:
    "Comparez jusqu'à 3 voitures électriques : prix, autonomie réelle, recharge, batterie, coffre, poids et note. Tableau comparatif interactif et gratuit.",
  path: "/outils/comparateur-modeles/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
