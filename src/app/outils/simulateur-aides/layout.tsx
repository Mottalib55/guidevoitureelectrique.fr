import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Simulateur aides voiture électrique 2026 : bonus et primes",
  description:
    "Estimez vos aides pour l'achat d'une voiture électrique : bonus écologique, prime à la conversion, leasing social. Calculez le prix après aides en 30 secondes.",
  path: "/outils/simulateur-aides/",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
