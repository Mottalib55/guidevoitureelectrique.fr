"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { modeles } from "@/data/modeles";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

const euroCents = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);

const sorted = [...modeles].sort((a, b) =>
  `${a.marque} ${a.modele}`.localeCompare(`${b.marque} ${b.modele}`)
);

const profiles = [
  { label: "Petits trajets", kmJour: 20, desc: "Courses, école, ville" },
  { label: "Domicile-travail", kmJour: 40, desc: "Trajet moyen en France" },
  { label: "Grand rouleur", kmJour: 80, desc: "Commerciaux, longs trajets" },
];

export default function SimulateurCoutRecharge() {
  const [selectedSlug, setSelectedSlug] = useState("renault-5-e-tech");
  const [kmJour, setKmJour] = useState(40);
  const [hasHomeCharging, setHasHomeCharging] = useState(true);

  const vehicule = modeles.find((m) => m.slug === selectedSlug) || null;
  const conso = vehicule ? vehicule.conso : 15;
  const batterieKwh = vehicule ? vehicule.batterieKwh : 52;
  const autonomieReelle = vehicule ? vehicule.autonomieReelle : 300;

  // Prix moyens 2025
  const prixDomicile = 0.21; // heures creuses EDF
  const prixPublicAC = 0.35;
  const prixRapideDC = 0.45;
  const prixEssence = 1.75; // €/L
  const consoThermique = 7; // L/100km

  const calc = useMemo(() => {
    const kmAn = kmJour * 365;
    const kwhAn = (kmAn / 100) * conso;

    // Scénario adapté selon situation
    const partDomicile = hasHomeCharging ? 0.8 : 0;
    const partPublic = hasHomeCharging ? 0.15 : 0.6;
    const partRapide = hasHomeCharging ? 0.05 : 0.4;

    const coutElecAn =
      kwhAn * partDomicile * prixDomicile +
      kwhAn * partPublic * prixPublicAC +
      kwhAn * partRapide * prixRapideDC;

    const coutThermiqueAn = (kmAn / 100) * consoThermique * prixEssence;

    const economieAn = coutThermiqueAn - coutElecAn;

    // Coût d'un plein complet
    const pleinDomicile = batterieKwh * prixDomicile;
    const pleinRapide = batterieKwh * prixRapideDC;

    // 100% domicile (meilleur cas)
    const coutDomicile100 = kwhAn * prixDomicile;
    // 100% rapide (pire cas)
    const coutRapide100 = kwhAn * prixRapideDC;

    return {
      kmAn,
      kwhAn,
      coutElecAn,
      coutElecMois: coutElecAn / 12,
      coutKm: coutElecAn / kmAn,
      coutThermiqueAn,
      coutThermiqueMois: coutThermiqueAn / 12,
      economieAn,
      economieMois: economieAn / 12,
      pleinDomicile,
      pleinRapide,
      coutDomicile100,
      coutRapide100,
      nbRecharges: Math.ceil(kmAn / autonomieReelle),
    };
  }, [kmJour, conso, batterieKwh, autonomieReelle, hasHomeCharging]);

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    border: "1.5px solid var(--line)",
    background: "var(--field)",
    color: "var(--ink)",
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "inherit",
  } as const;

  const labelStyle = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--muted)",
    marginBottom: 6,
  } as const;

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Outils", href: "/outils/financement/" },
          { name: "Coût de recharge", href: "/outils/simulateur-cout-recharge/" },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        <header style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 38px)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Combien coûte la recharge d&apos;une voiture électrique ?
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 640, lineHeight: 1.5 }}>
            Répondez à 3 questions et découvrez votre budget recharge mensuel
            comparé à l&apos;essence.
          </p>
        </header>

        {/* ─── ÉTAPE 1 : VÉHICULE ──────────────────────────── */}
        <div style={{ maxWidth: 720 }}>
          <div style={{ marginBottom: 28 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                1
              </span>
              Quel véhicule ?
            </h2>
            <select
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              style={{ ...inputStyle, cursor: "pointer", maxWidth: 400 }}
            >
              {sorted.map((m) => (
                <option key={m.slug} value={m.slug}>
                  {m.marque} {m.modele}
                </option>
              ))}
            </select>
            {vehicule && (
              <p style={{ fontSize: 13, color: "var(--faint)", marginTop: 6 }}>
                Batterie {vehicule.batterieKwh} kWh — {vehicule.autonomieReelle} km
                d&apos;autonomie réelle — {vehicule.conso} kWh/100 km
              </p>
            )}
          </div>

          {/* ─── ÉTAPE 2 : USAGE ───────────────────────────── */}
          <div style={{ marginBottom: 28 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                2
              </span>
              Combien de km par jour ?
            </h2>
            <div style={{ display: "flex", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
              {profiles.map((p) => (
                <button
                  key={p.label}
                  onClick={() => setKmJour(p.kmJour)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: 12,
                    border: `1.5px solid ${kmJour === p.kmJour ? "var(--accent)" : "var(--line)"}`,
                    background: kmJour === p.kmJour ? "rgba(0,192,116,0.08)" : "var(--field)",
                    color: "var(--ink)",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 14,
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  <div>{p.label}</div>
                  <div style={{ fontSize: 12, color: "var(--faint)", fontWeight: 500 }}>
                    ~{p.kmJour} km/jour — {p.desc}
                  </div>
                </button>
              ))}
            </div>
            <div style={{ maxWidth: 200 }}>
              <label style={labelStyle}>Ou saisir un chiffre exact</label>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <input
                  type="text" inputMode="decimal"
                  value={kmJour}
                  onChange={(e) => setKmJour(Math.max(1, Number(e.target.value)))}
                  min={1}
                  step={5}
                  style={inputStyle}
                />
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)", whiteSpace: "nowrap" }}>
                  km/jour
                </span>
              </div>
              <p style={{ fontSize: 12, color: "var(--faint)", marginTop: 4 }}>
                soit {(kmJour * 365).toLocaleString("fr-FR")} km/an
              </p>
            </div>
          </div>

          {/* ─── ÉTAPE 3 : RECHARGE À DOMICILE ─────────────── */}
          <div style={{ marginBottom: 36 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                3
              </span>
              Pouvez-vous recharger à domicile ?
            </h2>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setHasHomeCharging(true)}
                style={{
                  padding: "12px 24px",
                  borderRadius: 12,
                  border: `1.5px solid ${hasHomeCharging ? "var(--accent)" : "var(--line)"}`,
                  background: hasHomeCharging ? "rgba(0,192,116,0.08)" : "var(--field)",
                  color: "var(--ink)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <div>Oui</div>
                <div style={{ fontSize: 12, color: "var(--faint)", fontWeight: 500 }}>
                  Maison ou parking privé
                </div>
              </button>
              <button
                onClick={() => setHasHomeCharging(false)}
                style={{
                  padding: "12px 24px",
                  borderRadius: 12,
                  border: `1.5px solid ${!hasHomeCharging ? "var(--accent)" : "var(--line)"}`,
                  background: !hasHomeCharging ? "rgba(0,192,116,0.08)" : "var(--field)",
                  color: "var(--ink)",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <div>Non</div>
                <div style={{ fontSize: 12, color: "var(--faint)", fontWeight: 500 }}>
                  Bornes publiques uniquement
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* ─── RÉSULTATS ─────────────────────────────────── */}
        {/* ═══════════════════════════════════════════════════ */}

        <div style={{ maxWidth: 720 }}>
          {/* Budget mensuel principal */}
          <div className="encadre-verdict" style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: 20 }}>Votre budget recharge</h2>
            <div className="encadre-verdict-grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
              <div className="encadre-verdict-item">
                <div className="encadre-verdict-val">{euro(calc.coutElecMois)}</div>
                <div className="encadre-verdict-lbl">par mois</div>
              </div>
              <div className="encadre-verdict-item">
                <div className="encadre-verdict-val">{euro(calc.coutElecAn)}</div>
                <div className="encadre-verdict-lbl">par an</div>
              </div>
              <div className="encadre-verdict-item">
                <div className="encadre-verdict-val">{euroCents(calc.coutKm * 100)} ct</div>
                <div className="encadre-verdict-lbl">par km</div>
              </div>
            </div>
          </div>

          {/* Comparaison essence - LE résultat clé */}
          <div
            style={{
              padding: 24,
              border: "2px solid var(--accent)",
              borderRadius: 16,
              background: "linear-gradient(135deg, rgba(0,192,116,0.06), rgba(0,192,116,0.02))",
              marginBottom: 20,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 16,
              }}
            >
              Électrique vs essence
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div
                style={{
                  textAlign: "center",
                  padding: 16,
                  borderRadius: 12,
                  background: "rgba(0,192,116,0.08)",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)", marginBottom: 4 }}>
                  Recharge électrique
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 28,
                    color: "var(--accent-deep)",
                  }}
                >
                  {euro(calc.coutElecMois)}
                </div>
                <div style={{ fontSize: 12, color: "var(--faint)" }}>par mois</div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: 16,
                  borderRadius: 12,
                  background: "rgba(217,138,31,0.08)",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--muted)", marginBottom: 4 }}>
                  Carburant essence
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 28,
                    color: "var(--warn)",
                  }}
                >
                  {euro(calc.coutThermiqueMois)}
                </div>
                <div style={{ fontSize: 12, color: "var(--faint)" }}>par mois</div>
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: 16,
                padding: "12px 16px",
                borderRadius: 12,
                background: "var(--paper)",
                border: "1px solid var(--line)",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
                Vous économisez{" "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 22,
                  color: "var(--accent-deep)",
                }}
              >
                {euro(calc.economieMois)}/mois
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--muted)" }}>
                {" "}soit{" "}
              </span>
              <span style={{ fontWeight: 800, color: "var(--accent-deep)" }}>
                {euro(calc.economieAn)}/an
              </span>
            </div>
            <p style={{ fontSize: 12, color: "var(--faint)", marginTop: 8, textAlign: "center" }}>
              Base : véhicule essence 7 L/100 km à {prixEssence.toFixed(2)} €/L
            </p>
          </div>

          {/* Coût concret d'un "plein" */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                padding: 20,
                border: "1.5px solid var(--line)",
                borderRadius: 16,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 12,
                }}
              >
                Recharge complète à domicile
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 24,
                  color: "var(--accent-deep)",
                  marginBottom: 4,
                }}
              >
                {euroCents(calc.pleinDomicile)}
              </div>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0 }}>
                pour {autonomieReelle} km d&apos;autonomie
              </p>
              <p style={{ fontSize: 12, color: "var(--faint)", marginTop: 4 }}>
                Tarif heures creuses {prixDomicile.toFixed(2)} €/kWh
              </p>
            </div>
            <div
              style={{
                padding: 20,
                border: "1.5px solid var(--line)",
                borderRadius: 16,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 12,
                }}
              >
                Recharge rapide (autoroute)
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 24,
                  color: "var(--warn)",
                  marginBottom: 4,
                }}
              >
                {euroCents(calc.pleinRapide)}
              </div>
              <p style={{ fontSize: 13, color: "var(--muted)", margin: 0 }}>
                pour {autonomieReelle} km d&apos;autonomie
              </p>
              <p style={{ fontSize: 12, color: "var(--faint)", marginTop: 4 }}>
                Borne rapide DC à {prixRapideDC.toFixed(2)} €/kWh
              </p>
            </div>
          </div>

          {/* Infos recharge du véhicule */}
          {vehicule && (
            <div
              style={{
                padding: 20,
                border: "1.5px solid var(--line)",
                borderRadius: 16,
                marginBottom: 20,
                background: "var(--wash)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                  marginBottom: 14,
                }}
              >
                Temps de recharge — {vehicule.marque} {vehicule.modele}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--faint)", marginBottom: 2 }}>
                    Charge rapide (10→80 %)
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 18,
                      color: "var(--ink)",
                    }}
                  >
                    {vehicule.tempsChargeRapide}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--faint)" }}>
                    Puissance max : {vehicule.chargeRapideKw} kW
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--faint)", marginBottom: 2 }}>
                    Charge à domicile (0→100 %)
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 18,
                      color: "var(--ink)",
                    }}
                  >
                    {vehicule.tempsChargeAC}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Scénarios extrêmes */}
          <div
            style={{
              padding: 20,
              border: "1.5px solid var(--line)",
              borderRadius: 16,
              marginBottom: 20,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 15,
                marginBottom: 14,
              }}
            >
              Fourchette de coût selon votre situation
            </h3>
            <div style={{ display: "grid", gap: 10, fontSize: 14, fontWeight: 500 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>
                  <strong>Meilleur cas</strong> — 100 % domicile (heures creuses)
                </span>
                <strong style={{ color: "var(--accent-deep)" }}>
                  {euro(calc.coutDomicile100)}/an
                </strong>
              </div>
              <div
                style={{
                  height: 8,
                  borderRadius: 4,
                  background: "var(--wash)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    height: "100%",
                    borderRadius: 4,
                    background: "linear-gradient(90deg, var(--accent), var(--warn))",
                    width: `${Math.min(100, (calc.coutElecAn / calc.coutRapide100) * 100)}%`,
                  }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>
                  <strong>Votre estimation</strong> —{" "}
                  {hasHomeCharging ? "80 % domicile + bornes" : "bornes publiques"}
                </span>
                <strong style={{ color: "var(--ink)" }}>{euro(calc.coutElecAn)}/an</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>
                  <strong>Pire cas</strong> — 100 % bornes rapides
                </span>
                <strong style={{ color: "var(--warn)" }}>{euro(calc.coutRapide100)}/an</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 8,
                  borderTop: "1px solid var(--line)",
                }}
              >
                <span>
                  <strong>Essence équivalente</strong> — 7 L/100 km
                </span>
                <strong style={{ color: "var(--warn)" }}>{euro(calc.coutThermiqueAn)}/an</strong>
              </div>
            </div>
          </div>

          {/* Hypothèses */}
          <details
            style={{
              fontSize: 13,
              color: "var(--faint)",
              marginBottom: 32,
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 600 }}>
              Hypothèses de calcul
            </summary>
            <ul style={{ marginTop: 8, paddingLeft: 20, lineHeight: 1.8 }}>
              <li>Électricité domicile (heures creuses) : {prixDomicile.toFixed(2)} €/kWh</li>
              <li>Borne publique AC : {prixPublicAC.toFixed(2)} €/kWh</li>
              <li>Borne rapide DC (autoroute) : {prixRapideDC.toFixed(2)} €/kWh</li>
              <li>
                Avec domicile : 80 % domicile, 15 % borne publique, 5 % rapide
              </li>
              <li>
                Sans domicile : 60 % borne publique, 40 % rapide
              </li>
              <li>Essence : {consoThermique} L/100 km à {prixEssence.toFixed(2)} €/L</li>
              <li>Consommation VE : {conso} kWh/100 km (autonomie réelle)</li>
            </ul>
          </details>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/outils/financement/" className="btn-primary">
              Calculer mon financement
            </Link>
            <Link href="/outils/comparateur-elec-thermique/" className="btn-secondary">
              Comparateur complet élec vs thermique
            </Link>
          </div>

          {/* Contenu redactionnel */}
          <div className="prose" style={{ marginTop: 48 }}>
            <h2>Comprendre le cout de la recharge electrique en France en 2026</h2>
            <p>
              Le cout de la recharge est la question numero un des futurs proprietaires de vehicules electriques. Et pour cause : c&apos;est l&apos;un des principaux arguments en faveur de l&apos;electrique face au thermique. Mais derriere le chiffre souvent cite de &quot;2 euros pour 100 km&quot;, la realite est plus nuancee. Le cout reel depend de trois facteurs fondamentaux : <strong>ou</strong> vous rechargez (domicile, travail, bornes publiques), <strong>quand</strong> vous rechargez (heures pleines, heures creuses, option Tempo), et <strong>combien</strong> vous consommez (qui varie selon le vehicule, la saison, votre style de conduite et le type de trajet).
            </p>
            <p>
              Ce guide vous explique en detail les differents tarifs, les strategies pour minimiser votre facture, et les calculs concrets pour chaque profil d&apos;utilisateur. Notre simulateur ci-dessus vous donne une estimation personnalisee, mais la lecture de ce guide vous permettra de comprendre les mecanismes sous-jacents et d&apos;optimiser vos habitudes de recharge.
            </p>

            <h2>Les tarifs de l&apos;electricite a domicile : un panorama complet</h2>
            <p>
              La recharge a domicile est de loin la solution la plus economique. En France, le prix de l&apos;electricite est encadre par les tarifs reglementes de vente (TRV) fixes par la CRE (Commission de regulation de l&apos;energie). En 2026, les tarifs reguliers se presentent ainsi :
            </p>

            <h3>Option Base : le tarif unique</h3>
            <p>
              Avec l&apos;option Base, vous payez le meme prix du kWh quelle que soit l&apos;heure de la journee. En 2026, le tarif est d&apos;environ <strong>0,25 euro/kWh TTC</strong> pour un compteur de 6 kVA (le plus courant). Ce tarif est simple mais pas le plus avantageux pour la recharge d&apos;un VE, car vous ne pouvez pas beneficier de tarifs reduits la nuit.
            </p>
            <p>
              Pour un vehicule consommant 15 kWh/100 km et parcourant 15 000 km/an, le cout annuel en tarif Base serait de : (15 000 / 100) x 15 x 0,25 = <strong>562 euros par an</strong>, soit environ 47 euros par mois. A comparer aux 1 838 euros de carburant pour un vehicule essence equivalent (7 L/100 km a 1,75 euro/L).
            </p>

            <h3>Option Heures Pleines / Heures Creuses : le choix optimal</h3>
            <p>
              L&apos;option HP/HC offre un tarif reduit pendant 8 heures par jour (generalement la nuit, entre 22h et 6h, et parfois en milieu de journee). En 2026, les tarifs sont approximativement :
            </p>
            <ul>
              <li><strong>Heures Pleines :</strong> environ 0,27 euro/kWh TTC</li>
              <li><strong>Heures Creuses :</strong> environ 0,21 euro/kWh TTC</li>
            </ul>
            <p>
              En programmant votre recharge exclusivement en heures creuses (facile avec la programmation integree de la plupart des VE ou via une wallbox connectee), vous economisez environ 16 % par rapport au tarif Base. Sur notre exemple : (15 000 / 100) x 15 x 0,21 = <strong>472 euros par an</strong>, soit 39 euros par mois. C&apos;est une economie de 90 euros par an par rapport au tarif Base, et de <strong>1 366 euros par rapport a l&apos;essence</strong>.
            </p>

            <h3>Option Tempo : pour les optimiseurs avertis</h3>
            <p>
              L&apos;option Tempo d&apos;EDF est la plus complexe mais potentiellement la plus avantageuse. Elle divise l&apos;annee en trois types de jours :
            </p>
            <ul>
              <li><strong>Jours Bleus (300 jours/an) :</strong> environ 0,15 euro/kWh en heures creuses — le tarif le plus bas du marche</li>
              <li><strong>Jours Blancs (43 jours/an) :</strong> environ 0,17 euro/kWh en heures creuses</li>
              <li><strong>Jours Rouges (22 jours/an) :</strong> environ 0,76 euro/kWh en heures pleines — tres cher, a eviter absolument pour la recharge</li>
            </ul>
            <p>
              En evitant de recharger les jours rouges en heures pleines (ce qui est tout a fait faisable avec un minimum d&apos;organisation et les alertes Tempo disponibles via l&apos;application EDF ou les notifications de votre wallbox), le cout moyen peut descendre a environ <strong>0,16 euro/kWh</strong>. Sur notre exemple : (15 000 / 100) x 15 x 0,16 = <strong>360 euros par an</strong>, soit seulement 30 euros par mois. C&apos;est <strong>cinq fois moins cher que l&apos;essence</strong>.
            </p>

            <h3>Offres fournisseurs alternatifs</h3>
            <p>
              Au-dela des tarifs reglementes d&apos;EDF, de nombreux fournisseurs alternatifs proposent des offres specifiques pour la recharge de vehicules electriques. En 2026, les plus competitives incluent :
            </p>
            <ul>
              <li><strong>Engie - Offre Elec Weekend+ :</strong> tarif reduit le week-end et les nuits, ideal si vous rechargez principalement ces jours-la</li>
              <li><strong>TotalEnergies - Offre Charge :</strong> tarif heures super creuses (nuit profonde, 2h-6h) tres competitif</li>
              <li><strong>Octopus Energy - Intelligent Octopus :</strong> tarif dynamique qui pilote automatiquement la recharge aux heures les moins cheres</li>
            </ul>

            <h2>Le cout de la wallbox : un investissement vite amorti</h2>
            <p>
              Pour recharger a domicile dans les meilleures conditions, l&apos;installation d&apos;une wallbox (borne de recharge domestique) est fortement recommandee. Contrairement a la prise domestique standard (qui limite la charge a 2,3 kW et peut presenter des risques de surchauffe), la wallbox delivre entre 7 et 22 kW en toute securite.
            </p>
            <p>
              Le cout d&apos;une wallbox installee varie entre <strong>1 200 et 2 500 euros</strong> selon le modele, la puissance et la complexite de l&apos;installation. En 2026, un credit d&apos;impot de <strong>300 euros</strong> est toujours disponible pour l&apos;installation d&apos;une borne a domicile, et un taux de TVA reduit a 5,5 % s&apos;applique si votre logement a plus de 2 ans.
            </p>
            <p>
              L&apos;investissement dans une wallbox est generalement amorti en 1 a 2 ans grace aux economies realisees par rapport a la recharge exclusivement sur bornes publiques. En effet, la difference de prix entre une recharge a domicile (0,21 euro/kWh) et une borne publique (0,35 a 0,45 euro/kWh) represente une economie de 200 a 500 euros par an pour un conducteur moyen.
            </p>

            <h2>Les reseaux de recharge publique : comprendre les tarifs</h2>
            <p>
              Lorsque vous ne pouvez pas recharger a domicile ou lors de vos deplacements, vous utiliserez les bornes de recharge publiques. Le reseau francais compte desormais plus de <strong>150 000 points de charge publics</strong> en 2026, mais les tarifs varient considerablement selon le reseau, la puissance et le mode de paiement.
            </p>

            <h3>Recharge AC (courant alternatif) : 7 a 22 kW</h3>
            <p>
              Les bornes AC, les plus repandues, sont adaptees a la recharge &quot;de destination&quot; : parking de supermarche, parking relais, lieu de travail. Comptez generalement :
            </p>
            <ul>
              <li><strong>Bornes gratuites :</strong> encore presentes dans certains centres commerciaux (Leclerc, Lidl, Ikea) et parkings municipaux, mais en diminution</li>
              <li><strong>Reseaux standards :</strong> entre 0,25 et 0,40 euro/kWh selon l&apos;operateur et l&apos;abonnement</li>
              <li><strong>Tarif moyen constate :</strong> environ 0,35 euro/kWh en 2026</li>
            </ul>

            <h3>Recharge rapide DC (courant continu) : 50 a 350 kW</h3>
            <p>
              Les bornes rapides DC sont destinees aux longs trajets : aires d&apos;autoroute, stations-service, hubs de recharge. Elles permettent de recuperer 80 % de la batterie en 20 a 40 minutes selon le vehicule. Les tarifs sont sensiblement plus eleves :
            </p>
            <ul>
              <li><strong>Ionity :</strong> 0,39 euro/kWh avec un abonnement Ionity Passport (12,99 euros/mois), 0,79 euro/kWh sans abonnement</li>
              <li><strong>TotalEnergies :</strong> 0,40 a 0,55 euro/kWh selon la puissance et l&apos;abonnement</li>
              <li><strong>Fastned :</strong> 0,59 euro/kWh (tarif standard), 0,45 euro/kWh (avec Gold Member a 12,99 euros/mois)</li>
              <li><strong>Tesla Superchargers :</strong> 0,36 a 0,44 euro/kWh pour les Tesla, 0,48 a 0,55 euro/kWh pour les autres marques</li>
              <li><strong>Reseaux autoroute (Engie, VINCI) :</strong> 0,45 a 0,65 euro/kWh, souvent les plus chers</li>
            </ul>

            <h3>Les cartes et abonnements de recharge multi-reseaux</h3>
            <p>
              Pour eviter de jongler entre les applications de chaque operateur, les cartes de roaming multi-reseaux donnent acces a la quasi-totalite des bornes en France et en Europe avec un badge unique. Les principales en 2026 :
            </p>
            <ul>
              <li><strong>Chargemap Pass :</strong> le leader francais, acces a plus de 600 000 bornes en Europe. Pas d&apos;abonnement, tarifs transparents.</li>
              <li><strong>Shell Recharge :</strong> acces a un large reseau, integration avec l&apos;application Shell pour le suivi des depenses.</li>
              <li><strong>Electroverse (Octopus Energy) :</strong> tarifs tres competitifs, facturation mensuelle unifiee.</li>
              <li><strong>Freshmile :</strong> badge sans abonnement, tarifs varies selon les reseaux.</li>
            </ul>

            <h2>Calcul detaille du cout annuel par profil d&apos;utilisateur</h2>
            <p>
              Voici trois profils types avec les calculs detailles, bases sur un vehicule consommant 15 kWh/100 km (moyenne du marche 2026) :
            </p>

            <h3>Profil 1 : Le conducteur urbain (8 000 km/an)</h3>
            <p>
              Ce profil correspond a un usage principalement urbain et periurbain : trajets domicile-travail courts, courses, activites de loisirs locales. Avec la possibilite de recharger a domicile en heures creuses :
            </p>
            <ul>
              <li>Consommation annuelle : (8 000 / 100) x 15 = 1 200 kWh</li>
              <li>90 % a domicile (HC) : 1 080 kWh x 0,21 euro = 227 euros</li>
              <li>10 % borne publique AC : 120 kWh x 0,35 euro = 42 euros</li>
              <li><strong>Total annuel : 269 euros, soit 22 euros par mois</strong></li>
              <li>Equivalent essence (6 L/100 km, urbain) : 840 euros/an — <strong>economie de 571 euros/an</strong></li>
            </ul>

            <h3>Profil 2 : Le pendulaire (15 000 km/an)</h3>
            <p>
              Le profil le plus courant en France : trajets domicile-travail de 30 a 40 km quotidiens, avec quelques longs trajets ponctuels. Recharge principalement a domicile :
            </p>
            <ul>
              <li>Consommation annuelle : (15 000 / 100) x 15 = 2 250 kWh</li>
              <li>80 % a domicile (HC) : 1 800 kWh x 0,21 euro = 378 euros</li>
              <li>15 % borne publique AC : 337 kWh x 0,35 euro = 118 euros</li>
              <li>5 % borne rapide DC : 113 kWh x 0,45 euro = 51 euros</li>
              <li><strong>Total annuel : 547 euros, soit 46 euros par mois</strong></li>
              <li>Equivalent essence (7 L/100 km) : 1 838 euros/an — <strong>economie de 1 291 euros/an</strong></li>
            </ul>

            <h3>Profil 3 : Le grand rouleur (30 000 km/an)</h3>
            <p>
              Ce profil correspond aux commerciaux, VRP, ou conducteurs effectuant de longs trajets reguliers. La part de recharge rapide est plus importante :
            </p>
            <ul>
              <li>Consommation annuelle : (30 000 / 100) x 16 = 4 800 kWh (consommation legerement superieure sur autoroute)</li>
              <li>60 % a domicile (HC) : 2 880 kWh x 0,21 euro = 605 euros</li>
              <li>20 % borne publique AC : 960 kWh x 0,35 euro = 336 euros</li>
              <li>20 % borne rapide DC : 960 kWh x 0,45 euro = 432 euros</li>
              <li><strong>Total annuel : 1 373 euros, soit 114 euros par mois</strong></li>
              <li>Equivalent essence (7,5 L/100 km, autoroute) : 3 938 euros/an — <strong>economie de 2 565 euros/an</strong></li>
            </ul>

            <h2>L&apos;impact de la saison sur la consommation et le cout</h2>
            <p>
              Un facteur souvent sous-estime est l&apos;impact de la temperature sur la consommation d&apos;un vehicule electrique. En hiver, la consommation peut augmenter de <strong>20 a 40 %</strong> par rapport a l&apos;ete, principalement en raison du chauffage de l&apos;habitacle et de la moindre efficacite de la batterie par temps froid.
            </p>
            <p>
              Concretement, un vehicule qui consomme 15 kWh/100 km en ete pourra consommer 18 a 21 kWh/100 km en hiver. L&apos;autonomie reelle est proportionnellement reduite : un vehicule affichant 350 km d&apos;autonomie en ete pourra ne parcourir que 220 a 280 km en hiver. Les vehicules equipes d&apos;une pompe a chaleur (Renault, Hyundai, Kia, Tesla) sont moins affectes, avec une surconsommation hivernale limitee a 15-25 %.
            </p>
            <p>
              Pour votre budget, cela signifie que vos factures de recharge seront plus elevees de novembre a mars. Sur une annee complete, la surconsommation hivernale represente en moyenne un surcout de 10 a 15 % par rapport aux estimations basees sur la consommation WLTP. Notre simulateur integre cette moyenne dans ses calculs.
            </p>

            <h2>Strategies pour minimiser votre cout de recharge</h2>
            <p>
              Voici les meilleures pratiques pour reduire au maximum votre facture de recharge :
            </p>
            <ul>
              <li><strong>Programmez la recharge en heures creuses :</strong> c&apos;est le levier numero un. La quasi-totalite des vehicules electriques permettent de programmer le debut de la charge via l&apos;application constructeur.</li>
              <li><strong>Explorez l&apos;option Tempo d&apos;EDF :</strong> si votre consommation electrique globale (maison + voiture) le justifie, le tarif Tempo peut faire chuter le cout de la recharge en dessous de 0,16 euro/kWh.</li>
              <li><strong>Profitez des bornes gratuites :</strong> certains employeurs, centres commerciaux et municipalites offrent encore la recharge gratuite. Identifiez ces points sur Chargemap et integrez-les dans vos routines.</li>
              <li><strong>Adoptez l&apos;eco-conduite :</strong> une conduite souple et anticipee peut reduire la consommation de 15 a 25 %. Utilisez le mode de regeneration forte, anticipez les freinages, et limitez la vitesse sur autoroute (130 km/h consomme environ 30 % de plus que 110 km/h).</li>
              <li><strong>Preconditionnez votre vehicule :</strong> en hiver, lancez le prechauffage de l&apos;habitacle pendant que le vehicule est encore branche. Cela consomme l&apos;electricite du reseau plutot que la batterie.</li>
              <li><strong>Installez des panneaux solaires :</strong> si vous etes proprietaire, l&apos;autoconsommation solaire peut rendre la recharge quasi gratuite. Un systeme de 6 kWc produit environ 6 000 kWh/an, largement suffisant pour couvrir vos besoins de recharge et une partie de votre consommation domestique.</li>
            </ul>

            <h2>Le cas particulier des coproprietes</h2>
            <p>
              Si vous habitez en appartement avec un parking en copropriete, la situation est differente mais pas insurmontable. Le <strong>droit a la prise</strong>, inscrit dans la loi depuis 2014, vous permet d&apos;installer une borne de recharge individuelle dans votre place de parking, a vos frais, meme si la copropriete s&apos;y oppose. La procedure est simplifiee : vous notifiez le syndic par lettre recommandee, et il dispose de 6 mois pour s&apos;opposer (uniquement pour des motifs techniques legitimes).
            </p>
            <p>
              Le cout d&apos;installation en copropriete est generalement plus eleve qu&apos;en maison individuelle (2 000 a 4 000 euros) en raison du tirage de cable et de la mise en place d&apos;un compteur dedie. Mais les aides sont cumulables : credit d&apos;impot de 300 euros, programme Advenir (prime de 50 % du cout, plafonnee a 960 euros pour une solution individuelle), et parfois des aides locales.
            </p>
            <p>
              L&apos;alternative pour les coproprietes est la mise en place d&apos;une <strong>infrastructure collective</strong>, ou chaque resident peut brancher une borne individuelle sur un reseau electrique partage. Les operateurs comme Zeplug ou Waat proposent des solutions cle en main avec un modele d&apos;abonnement mensuel, sans investissement initial pour la copropriete.
            </p>

            <h2>Recharge au travail : un avantage non negligeable</h2>
            <p>
              De plus en plus d&apos;employeurs installent des bornes de recharge sur leur parking d&apos;entreprise. C&apos;est un avantage considerable : la recharge au travail est generalement gratuite ou a un tarif tres reduit (l&apos;employeur beneficie de tarifs pro sur l&apos;electricite), et elle se fait pendant vos heures de travail, sans immobilisation supplementaire du vehicule.
            </p>
            <p>
              Fiscalement, la prise en charge de la recharge par l&apos;employeur constitue un avantage en nature exonere d&apos;impot sur le revenu et de cotisations sociales jusqu&apos;au 31 decembre 2027. Pour l&apos;employeur, les bornes de recharge beneficient d&apos;un amortissement accelere et contribuent a ses objectifs RSE. Depuis 2025, les entreprises de plus de 20 salaries disposant de parkings de plus de 20 places sont tenues de pre-equiper au moins 5 % des places en vue de l&apos;installation de bornes.
            </p>
          </div>
        </div>

        <AuteurBio />
        <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
          <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>EDF — Grille tarifaire réglementée (tarif bleu, Tempo, heures creuses), mai 2026</li>
            <li>CRE (Commission de Régulation de l&apos;Énergie) — Évolution des tarifs réglementés de l&apos;électricité</li>
            <li>ADEME — Consommation réelle des véhicules électriques par modèle et conditions d&apos;usage</li>
            <li>GIREVE — Tarifs moyens de recharge publique par puissance et par opérateur, 2026</li>
            <li>Programme ADVENIR — Aides à l&apos;installation de bornes en copropriété et entreprise</li>
            <li>Données constructeurs — Consommation WLTP et capacités de recharge par modèle</li>
          </ul>
        </div>
      </article>
    </>
  );
}
