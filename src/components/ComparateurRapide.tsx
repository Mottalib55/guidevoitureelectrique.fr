"use client";

import { useState } from "react";
import Link from "next/link";
import { modeles, type Modele } from "@/data/modeles";

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);

const sorted = [...modeles].sort((a, b) =>
  `${a.marque} ${a.modele}`.localeCompare(`${b.marque} ${b.modele}`)
);

const specs: { label: string; render: (m: Modele) => string }[] = [
  { label: "Prix neuf", render: (m) => euro(m.prixBase) },
  { label: "Autonomie réelle", render: (m) => `${m.autonomieReelle} km` },
  { label: "Autonomie WLTP", render: (m) => `${m.autonomieWLTP} km` },
  { label: "Batterie", render: (m) => `${m.batterieKwh} kWh` },
  { label: "Charge rapide max", render: (m) => `${m.chargeRapideKw} kW` },
  { label: "Temps charge rapide", render: (m) => m.tempsChargeRapide },
  { label: "Charge domicile", render: (m) => m.tempsChargeAC },
  { label: "Consommation", render: (m) => `${m.conso} kWh/100 km` },
  { label: "Coffre", render: (m) => `${m.coffre} L` },
  { label: "Poids", render: (m) => `${m.poids} kg` },
  { label: "Puissance", render: (m) => `${m.puissanceCh} ch (${m.puissanceKw} kW)` },
  { label: "Bonus écologique", render: (m) => m.aidesEligible ? "Éligible" : "Non éligible" },
  { label: "Note", render: (m) => `${m.note}/10` },
];

const selectStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 12,
  border: "1.5px solid var(--line)",
  background: "var(--field)",
  color: "var(--ink)",
  fontSize: 14,
  fontWeight: 600,
  fontFamily: "inherit",
  cursor: "pointer",
} as const;

export default function ComparateurRapide() {
  const [slug1, setSlug1] = useState("");
  const [slug2, setSlug2] = useState("");

  const m1 = modeles.find((m) => m.slug === slug1) || null;
  const m2 = modeles.find((m) => m.slug === slug2) || null;

  return (
    <div
      style={{
        border: "1.5px solid var(--accent)",
        borderRadius: 18,
        padding: 28,
        background:
          "linear-gradient(135deg, rgba(0,192,116,0.04), rgba(0,192,116,0.01))",
        marginBottom: 48,
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 22,
          marginBottom: 6,
        }}
      >
        Comparer deux modèles
      </h2>
      <p
        style={{
          fontSize: 14,
          color: "var(--muted)",
          marginBottom: 20,
        }}
      >
        Sélectionnez deux modèles pour voir le comparatif détaillé.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 24,
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--faint)",
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Modèle 1
          </label>
          <select
            value={slug1}
            onChange={(e) => setSlug1(e.target.value)}
            style={selectStyle}
          >
            <option value="">— Choisir —</option>
            {sorted.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.marque} {m.modele}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--faint)",
              marginBottom: 6,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Modèle 2
          </label>
          <select
            value={slug2}
            onChange={(e) => setSlug2(e.target.value)}
            style={selectStyle}
          >
            <option value="">— Choisir —</option>
            {sorted.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.marque} {m.modele}
              </option>
            ))}
          </select>
        </div>
      </div>

      {m1 && m2 && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Caractéristique</th>
                <th>
                  <Link
                    href={`/modeles/${m1.slug}/`}
                    style={{
                      color: "var(--accent-deep)",
                      textDecoration: "none",
                    }}
                  >
                    {m1.marque} {m1.modele}
                  </Link>
                </th>
                <th>
                  <Link
                    href={`/modeles/${m2.slug}/`}
                    style={{
                      color: "var(--accent-deep)",
                      textDecoration: "none",
                    }}
                  >
                    {m2.marque} {m2.modele}
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec) => (
                <tr key={spec.label}>
                  <td style={{ fontWeight: 600 }}>{spec.label}</td>
                  <td>{spec.render(m1)}</td>
                  <td>{spec.render(m2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {m1 && m2 && (
        <div style={{ marginTop: 16, textAlign: "center" }}>
          <Link href="/outils/comparateur-modeles/" className="btn-secondary">
            Comparateur avancé (3 modèles)
          </Link>
        </div>
      )}
    </div>
  );
}
