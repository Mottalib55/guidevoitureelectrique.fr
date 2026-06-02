import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Calculateur financement voiture électrique LOA LLD",
  description:
    "Calculez votre financement voiture électrique : comparez comptant, crédit, LOA et LLD sur la même durée. Mensualités, coût total et meilleure formule en 1 clic.",
  path: "/outils/financement/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
