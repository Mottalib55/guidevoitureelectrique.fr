"use client";

import { usePathname } from "next/navigation";
import { pageDate } from "@/lib/page-date";

// Date de la dernière modification réelle de la page, tirée de git au build : jamais
// saisie à la main (RECETTE §8.4).
export default function LastUpdated() {
  const date = pageDate(usePathname());
  return (
    <p className="page-updated" style={{ fontSize: 13, color: "var(--faint)", margin: "0 0 8px" }}>
      Mis à jour le <time dateTime={date}>{date}</time>
    </p>
  );
}
