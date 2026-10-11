"use client";

import { useEffect, useState, type RefObject } from "react";

// Téléphone : tant que le bloc du résultat est sous l'écran, une barre collée en bas montre
// le chiffre clé ; un toucher y descend (RECETTE §5, règle du 2026-10-11). Rendue côté client
// seulement, pour ne pas dupliquer de texte dans le HTML.
export default function BarreResultat({
  cible,
  label,
  valeur,
}: {
  cible: RefObject<HTMLElement | null>;
  label: string;
  valeur: string;
}) {
  const [dessous, setDessous] = useState(false);
  useEffect(() => {
    const el = cible.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // Le résultat ne compte comme vu que si ses 120 premiers pixels sont dans l'écran.
    const io = new IntersectionObserver(
      ([e]) => setDessous(!e.isIntersecting && e.boundingClientRect.top > 0),
      { rootMargin: "0px 0px -120px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [cible]);
  if (!dessous) return null;
  return (
    <button
      type="button"
      aria-hidden="true"
      tabIndex={-1}
      className="barre-resultat"
      onClick={() => cible.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
    >
      <span>{label}</span>
      <strong>{valeur}</strong>
    </button>
  );
}
