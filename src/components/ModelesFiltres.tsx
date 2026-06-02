"use client";

import { useState, useMemo, type CSSProperties } from "react";
import type { Modele } from "@/data/modeles";
import CarteModele from "@/components/CarteModele";

/* ─── SEGMENT → FAMILLE ───────────────────────────────────────────── */
const FAMILLES: Record<string, string> = {
  citadine: "Citadine",
  "mini-citadine": "Citadine",
  "citadine-compacte": "Citadine",
  "citadine-sportive": "Citadine",
  "sans-permis": "Citadine",
  compacte: "Compacte",
  "compacte-premium": "Compacte",
  crossover: "Compacte",
  berline: "Berline",
  "berline-compacte": "Berline",
  "berline-premium": "Berline",
  "berline-luxe": "Berline",
  "berline-sport": "Berline",
  "shooting-brake": "Berline",
  ludospace: "Autres",
  roadster: "Autres",
  van: "Autres",
  utilitaire: "Autres",
};

function getFamille(segment: string): string {
  if (FAMILLES[segment]) return FAMILLES[segment];
  if (segment.toLowerCase().includes("suv")) return "SUV";
  return "Autres";
}

const TYPE_ICONS: Record<string, string> = {
  Citadine: "🚗",
  Compacte: "🚙",
  Berline: "🏎️",
  SUV: "🚜",
  Autres: "🔧",
};

const TYPES = ["Citadine", "Compacte", "Berline", "SUV", "Autres"] as const;

type PrixRange = "" | "<25000" | "25000-35000" | "35000-50000" | ">50000";
type AutoRange = "" | "200" | "300" | "400" | "500";
type Tri = "prix-asc" | "prix-desc" | "autonomie-desc" | "note-desc";

const PRIX_OPTIONS: { value: PrixRange; label: string }[] = [
  { value: "<25000", label: "< 25 000 €" },
  { value: "25000-35000", label: "25–35 k€" },
  { value: "35000-50000", label: "35–50 k€" },
  { value: ">50000", label: "> 50 000 €" },
];

const AUTO_OPTIONS: { value: AutoRange; label: string }[] = [
  { value: "200", label: "> 200 km" },
  { value: "300", label: "> 300 km" },
  { value: "400", label: "> 400 km" },
  { value: "500", label: "> 500 km" },
];

const TRI_OPTIONS: { value: Tri; label: string }[] = [
  { value: "prix-asc", label: "Prix ↑" },
  { value: "prix-desc", label: "Prix ↓" },
  { value: "autonomie-desc", label: "Autonomie ↓" },
  { value: "note-desc", label: "Note ↓" },
];

/* ─── STYLES ──────────────────────────────────────────────────────── */

const chip = (active: boolean): CSSProperties => ({
  padding: "8px 18px",
  borderRadius: 999,
  border: active ? "1.5px solid var(--accent)" : "1.5px solid var(--line)",
  background: active ? "var(--accent)" : "var(--paper)",
  fontSize: 13,
  fontWeight: 600,
  fontFamily: "var(--font-body)",
  color: active ? "#fff" : "var(--muted)",
  cursor: "pointer",
  transition: "all 0.15s ease",
  lineHeight: 1.3,
  boxShadow: active ? "0 2px 8px rgba(0,192,116,0.25)" : "0 1px 3px rgba(0,0,0,0.04)",
});

const typeChip = (active: boolean): CSSProperties => ({
  ...chip(active),
  padding: "10px 20px",
  fontSize: 14,
  display: "flex",
  alignItems: "center",
  gap: 6,
});

const s = {
  wrapper: {
    marginBottom: 28,
  } as CSSProperties,
  bar: {
    borderRadius: 20,
    overflow: "hidden" as const,
    boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px var(--line)",
  } as CSSProperties,
  barTop: {
    padding: "20px 24px",
    background: "linear-gradient(135deg, rgba(0,192,116,0.06) 0%, rgba(0,192,116,0.02) 100%)",
    borderBottom: "1px solid var(--line)",
  } as CSSProperties,
  barBottom: {
    padding: "18px 24px",
    background: "var(--paper)",
    display: "flex",
    flexDirection: "column" as const,
    gap: 14,
  } as CSSProperties,
  searchWrap: {
    position: "relative" as const,
  } as CSSProperties,
  searchSvg: {
    position: "absolute" as const,
    left: 16,
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none" as const,
    width: 18,
    height: 18,
    color: "var(--faint)",
  } as CSSProperties,
  search: {
    width: "100%",
    padding: "14px 18px 14px 46px",
    border: "2px solid var(--line)",
    borderRadius: 14,
    fontSize: 15,
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    color: "var(--ink)",
    background: "var(--paper)",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s, box-shadow 0.2s",
  } as CSSProperties,
  filtersGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px 24px",
  } as CSSProperties,
  filterBlock: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 8,
  } as CSSProperties,
  label: {
    fontSize: 11,
    fontWeight: 700,
    color: "var(--faint)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
  } as CSSProperties,
  chips: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap" as const,
  } as CSSProperties,
  selectRow: {
    display: "flex",
    gap: 24,
    alignItems: "flex-end",
    flexWrap: "wrap" as const,
    paddingTop: 4,
    borderTop: "1px solid var(--line)",
  } as CSSProperties,
  selectBlock: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 6,
    flex: 1,
    minWidth: 150,
  } as CSSProperties,
  select: {
    padding: "10px 14px",
    border: "2px solid var(--line)",
    borderRadius: 12,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "var(--font-body)",
    color: "var(--ink)",
    background: "var(--paper)",
    cursor: "pointer",
    outline: "none",
    appearance: "auto" as const,
    transition: "border-color 0.15s",
  } as CSSProperties,
  statusBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 0",
    flexWrap: "wrap" as const,
    gap: 8,
  } as CSSProperties,
  count: {
    fontSize: 14,
    fontWeight: 700,
    color: "var(--ink)",
  } as CSSProperties,
  countNum: {
    color: "var(--accent-deep)",
    fontFamily: "var(--font-display)",
    fontSize: 16,
  } as CSSProperties,
  reset: {
    padding: "8px 20px",
    borderRadius: 12,
    border: "1.5px solid var(--line)",
    background: "var(--paper)",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "var(--font-body)",
    color: "var(--muted)",
    cursor: "pointer",
    transition: "all 0.15s ease",
    display: "flex",
    alignItems: "center",
    gap: 6,
  } as CSSProperties,
  empty: {
    textAlign: "center" as const,
    padding: "64px 24px",
    fontSize: 16,
    color: "var(--faint)",
    fontWeight: 500,
    background: "var(--wash)",
    borderRadius: 18,
    border: "1.5px dashed var(--line)",
  } as CSSProperties,
};

export default function ModelesFiltres({ modeles }: { modeles: Modele[] }) {
  const [search, setSearch] = useState("");
  const [types, setTypes] = useState<Set<string>>(new Set());
  const [marque, setMarque] = useState("");
  const [prixRange, setPrixRange] = useState<PrixRange>("");
  const [autoMin, setAutoMin] = useState<AutoRange>("");
  const [tri, setTri] = useState<Tri>("note-desc");
  const [searchFocused, setSearchFocused] = useState(false);

  const marques = useMemo(
    () => [...new Set(modeles.map((m) => m.marque))].sort(),
    [modeles]
  );

  const hasFilter =
    search !== "" ||
    types.size > 0 ||
    marque !== "" ||
    prixRange !== "" ||
    autoMin !== "";

  function toggleType(t: string) {
    setTypes((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }

  function resetFilters() {
    setSearch("");
    setTypes(new Set());
    setMarque("");
    setPrixRange("");
    setAutoMin("");
    setTri("note-desc");
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let result = modeles.filter((m) => {
      if (
        q &&
        !m.modele.toLowerCase().includes(q) &&
        !m.marque.toLowerCase().includes(q)
      )
        return false;
      if (types.size > 0 && !types.has(getFamille(m.segment))) return false;
      if (marque && m.marque !== marque) return false;
      if (prixRange === "<25000" && m.prixBase >= 25000) return false;
      if (prixRange === "25000-35000" && (m.prixBase < 25000 || m.prixBase > 35000))
        return false;
      if (prixRange === "35000-50000" && (m.prixBase < 35000 || m.prixBase > 50000))
        return false;
      if (prixRange === ">50000" && m.prixBase <= 50000) return false;
      if (autoMin && m.autonomieReelle < Number(autoMin)) return false;
      return true;
    });

    result = [...result];
    switch (tri) {
      case "prix-asc":
        result.sort((a, b) => a.prixBase - b.prixBase);
        break;
      case "prix-desc":
        result.sort((a, b) => b.prixBase - a.prixBase);
        break;
      case "autonomie-desc":
        result.sort((a, b) => b.autonomieReelle - a.autonomieReelle);
        break;
      case "note-desc":
        result.sort((a, b) => b.note - a.note || a.prixBase - b.prixBase);
        break;
    }

    return result;
  }, [modeles, search, types, marque, prixRange, autoMin, tri]);

  const searchStyle: CSSProperties = {
    ...s.search,
    borderColor: searchFocused ? "var(--accent)" : "var(--line)",
    boxShadow: searchFocused ? "0 0 0 3px rgba(0,192,116,0.12)" : "none",
  };

  return (
    <div style={s.wrapper}>
      {/* ─── BARRE DE FILTRES ──────────────────────────────────────── */}
      <div style={s.bar}>
        {/* ── Recherche (zone accent) ── */}
        <div style={s.barTop}>
          <div style={s.searchWrap}>
            <svg
              style={s.searchSvg}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              style={searchStyle}
              placeholder="Rechercher un modèle ou une marque…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        {/* ── Filtres (zone blanche) ── */}
        <div style={s.barBottom}>
          {/* Type — pleine largeur */}
          <div style={s.filterBlock}>
            <span style={s.label}>Type de véhicule</span>
            <div style={s.chips}>
              {TYPES.map((t) => (
                <button
                  key={t}
                  style={typeChip(types.has(t))}
                  onClick={() => toggleType(t)}
                >
                  <span>{TYPE_ICONS[t]}</span>
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Prix + Autonomie — 2 colonnes */}
          <div style={s.filtersGrid}>
            <div style={s.filterBlock}>
              <span style={s.label}>Budget</span>
              <div style={s.chips}>
                {PRIX_OPTIONS.map((o) => (
                  <button
                    key={o.value}
                    style={chip(prixRange === o.value)}
                    onClick={() =>
                      setPrixRange((prev) => (prev === o.value ? "" : o.value))
                    }
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
            <div style={s.filterBlock}>
              <span style={s.label}>Autonomie min.</span>
              <div style={s.chips}>
                {AUTO_OPTIONS.map((o) => (
                  <button
                    key={o.value}
                    style={chip(autoMin === o.value)}
                    onClick={() =>
                      setAutoMin((prev) => (prev === o.value ? "" : o.value))
                    }
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Marque + Tri — séparateur + 2 selects */}
          <div style={s.selectRow}>
            <div style={s.selectBlock}>
              <span style={s.label}>Marque</span>
              <select
                style={s.select}
                value={marque}
                onChange={(e) => setMarque(e.target.value)}
              >
                <option value="">Toutes les marques</option>
                {marques.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div style={s.selectBlock}>
              <span style={s.label}>Trier par</span>
              <select
                style={s.select}
                value={tri}
                onChange={(e) => setTri(e.target.value as Tri)}
              >
                {TRI_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ─── COMPTEUR + RESET ──────────────────────────────────────── */}
      <div style={s.statusBar}>
        <span style={s.count}>
          <span style={s.countNum}>{filtered.length}</span> modèle{filtered.length !== 1 ? "s" : ""} trouvé{filtered.length !== 1 ? "s" : ""}
        </span>
        {hasFilter && (
          <button style={s.reset} onClick={resetFilters}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            Réinitialiser
          </button>
        )}
      </div>

      {/* ─── GRILLE ────────────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid-modeles">
          {filtered.map((m) => (
            <CarteModele key={m.slug} modele={m} />
          ))}
        </div>
      ) : (
        <p style={s.empty}>
          Aucun modèle ne correspond à vos critères.
          <br />
          Essayez de modifier ou réinitialiser vos filtres.
        </p>
      )}
    </div>
  );
}
