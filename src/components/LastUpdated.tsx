"use client";

import { usePathname } from "next/navigation";
import { pageDate, dateLongue } from "@/lib/page-date";

// Date de la dernière modification réelle de la page, tirée de git au build : jamais
// saisie à la main (RECETTE §8.4). Affichée en haut seulement sur une page de lecture
// (guide, à propos) ; ailleurs elle est en pied de page (TrustFooter).
export default function LastUpdated({ inline = false }: { inline?: boolean }) {
  const date = pageDate(usePathname());
  return (
    <p className="page-updated" style={{ fontSize: 13, color: "var(--faint)", margin: inline ? "0 0 0 auto" : "0 0 8px" }}>
      Mis à jour le <time dateTime={date}>{dateLongue(date)}</time>
    </p>
  );
}
