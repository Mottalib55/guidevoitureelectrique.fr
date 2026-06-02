import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Simulateur coût de recharge voiture électrique 2026",
  description:
    "Calculez le coût de recharge de votre voiture électrique : domicile vs borne publique vs rapide. Budget mensuel, comparaison essence et économies estimées.",
  path: "/outils/simulateur-cout-recharge/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
