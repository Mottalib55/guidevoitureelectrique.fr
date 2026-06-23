"use client";

import React, { useMemo, useState } from "react";
import { Wallet, Landmark, RefreshCw, KeyRound, Pencil, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { safeParseNumber } from "@/lib/parseNumericInput";

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

/* ── Valeurs marché françaises 2026 (défaut) ── */
const DEFAULTS = {
  bonus: 4000,
  apportPct: 10,
  mois: 48,
  kmAn: 12000,
  taeg: 4.9,
};

const DECOTE_PCT = 48;
const CONSO = 16; // kWh/100 km
const PRIX_KWH = 0.2;
const ASSUR_AN = 650;
const ENTRETIEN_AN = 250;

interface Scenario {
  key: string;
  nom: string;
  icon: LucideIcon;
  mensualite: number | null;
  sortieInit: number;
  totalVerse: number;
  revente: number;
  net: number;
  note: string;
  sub?: string;
  pct?: number;
}

interface FinancementVEProps {
  modele?: string;
  prixBase?: number;
}

export default function FinancementVE({
  modele = "Renault 5 E-Tech",
  prixBase = 25000,
}: FinancementVEProps) {
  const [hypo, setHypo] = useState(DEFAULTS);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(DEFAULTS);

  const bonus = hypo.bonus;
  const apportPct = hypo.apportPct / 100;
  const n = hypo.mois;
  const kmAn = hypo.kmAn;
  const taeg = hypo.taeg;

  const r = taeg / 100 / 12;
  const annees = n / 12;
  const apport = Math.round(prixBase * apportPct);

  function openEditor() {
    setDraft(hypo);
    setEditing(true);
  }

  function saveEditor() {
    setHypo(draft);
    setEditing(false);
  }

  function cancelEditor() {
    setEditing(false);
  }

  const calc = useMemo(() => {
    const capitalAchat = Math.max(0, prixBase - bonus);
    const revente = prixBase * (1 - DECOTE_PCT / 100);

    const rechargeAn = (kmAn / 100) * CONSO * PRIX_KWH;
    const usageAnnuel = rechargeAn + ASSUR_AN + ENTRETIEN_AN;
    const usageTotal = usageAnnuel * annees;
    const usageSansEntretien = (rechargeAn + ASSUR_AN) * annees;

    // CRÉDIT
    const principal = Math.max(0, prixBase - bonus - apport);
    const mLoan =
      r > 0
        ? (principal * r) / (1 - Math.pow(1 + r, -n))
        : principal / n;
    const totalCredit = apport + mLoan * n;
    const netCredit = totalCredit - revente + usageTotal;

    // COMPTANT
    const netComptant = capitalAchat - revente + usageTotal;

    // LOA
    const VR = revente;
    const capLoa = Math.max(0, prixBase - bonus - apport);
    const mLoa =
      r > 0
        ? ((capLoa - VR / Math.pow(1 + r, n)) * r) /
          (1 - Math.pow(1 + r, -n))
        : (capLoa - VR) / n;
    const totalLoaVerse = apport + mLoa * n;
    const netLoaRestit = totalLoaVerse + usageTotal;
    const netLoaRachat = totalLoaVerse + VR - revente + usageTotal;

    // LLD
    const mLld = mLoa * 1.06;
    const totalLld = apport + mLld * n;
    const netLld = totalLld + usageSansEntretien;

    const scenarios: Scenario[] = [
      {
        key: "comptant",
        nom: "Achat comptant",
        icon: Wallet,
        mensualite: null,
        sortieInit: capitalAchat,
        totalVerse: capitalAchat,
        revente,
        net: netComptant,
        note: "Vous payez tout en une fois et revendez le véhicule quand vous voulez, sans contrainte.",
      },
      {
        key: "credit",
        nom: "Crédit auto",
        icon: Landmark,
        mensualite: mLoan,
        sortieInit: apport,
        totalVerse: totalCredit,
        revente,
        net: netCredit,
        note: "Vous êtes propriétaire dès le départ et étalez le paiement sur 4 ans.",
      },
      {
        key: "loa",
        nom: "LOA",
        icon: KeyRound,
        mensualite: mLoa,
        sortieInit: apport,
        totalVerse: totalLoaVerse,
        revente: 0,
        net: netLoaRestit,
        note: "Vous louez et rendez le véhicule en fin de contrat. Pas de risque de décote.",
        sub: `Si rachat + revente : ${euro(netLoaRachat)} net`,
      },
      {
        key: "lld",
        nom: "LLD",
        icon: RefreshCw,
        mensualite: mLld,
        sortieInit: apport,
        totalVerse: totalLld,
        revente: 0,
        net: netLld,
        note: "Tout compris (entretien inclus). Budget mensuel fixe, zéro surprise.",
      },
    ];

    const max = Math.max(...scenarios.map((s) => s.net));
    scenarios.forEach((s) => {
      s.pct = max > 0 ? (s.net / max) * 100 : 0;
    });

    return { scenarios };
  }, [prixBase, bonus, apport, r, n, annees, kmAn]);

  return (
    <div className="fve-root">
      <style>{`
        .fve-root{
          --ink:#0b1d2a; --muted:#5a6b78; --faint:#93a2ad; --line:#e3e9ed;
          --field:#fbfcfd; --paper:#ffffff; --wash:#f4f7f8;
          --accent:#00c074; --accent-deep:#03894f;
          --shadow:0 1px 2px rgba(11,29,42,.05),0 12px 32px -12px rgba(11,29,42,.14);
          font-family:'Manrope',system-ui,sans-serif; color:var(--ink);
          background:var(--paper); border:1px solid var(--line); border-radius:22px;
          box-shadow:var(--shadow); overflow:hidden; max-width:920px; margin:0 auto;
        }
        .fve-head{ padding:22px 24px 18px; color:#fff;
          background:
            radial-gradient(120% 140% at 0% 0%, rgba(0,192,116,.16), transparent 55%),
            linear-gradient(135deg,#0b1d2a 0%,#123042 100%); }
        .fve-kicker{ font-size:11px; letter-spacing:.16em; text-transform:uppercase; color:#7fe3b6; font-weight:700; }
        .fve-title{ font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:23px; line-height:1.1; margin:6px 0 2px; letter-spacing:-.01em;}
        .fve-sub{ font-size:13px; color:#aebfc9; font-weight:500;}
        .fve-hypo{ padding:14px 24px; font-size:13px; color:var(--muted); font-weight:500; line-height:1.5;
          background:var(--wash); border-bottom:1px solid var(--line);
          display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .fve-hypo strong{ font-weight:700; color:var(--ink); }
        .fve-hypo-text{ flex:1; min-width:0; }
        .fve-hypo-btn{
          display:inline-flex; align-items:center; gap:5px;
          padding:6px 14px; border-radius:8px;
          border:1.5px solid var(--line); background:var(--paper);
          font-size:12px; font-weight:700; font-family:'Manrope',system-ui,sans-serif;
          color:var(--muted); cursor:pointer; transition:all .15s; white-space:nowrap;
        }
        .fve-hypo-btn:hover{ border-color:var(--accent); color:var(--accent-deep); }
        .fve-hypo-btn--save{
          border-color:var(--accent); background:var(--accent); color:#fff;
        }
        .fve-hypo-btn--save:hover{ background:var(--accent-deep); border-color:var(--accent-deep); }
        .fve-hypo-btn--cancel{
          border-color:var(--line); background:var(--paper); color:var(--muted);
        }
        .fve-editor{
          padding:18px 24px; background:var(--wash); border-bottom:1px solid var(--line);
        }
        .fve-editor-grid{
          display:grid; grid-template-columns:repeat(auto-fill, minmax(160px, 1fr));
          gap:12px;
        }
        .fve-editor-field{ display:flex; flex-direction:column; gap:4px; }
        .fve-editor-label{
          font-size:11px; font-weight:700; color:var(--faint);
          text-transform:uppercase; letter-spacing:.06em;
        }
        .fve-editor-input{
          padding:9px 12px; border:1.5px solid var(--line); border-radius:10px;
          font-size:14px; font-weight:600; font-family:'Manrope',system-ui,sans-serif;
          color:var(--ink); background:var(--paper); outline:none;
          transition:border-color .15s; width:100%; box-sizing:border-box;
        }
        .fve-editor-input:focus{ border-color:var(--accent); }
        .fve-editor-suffix{
          font-size:11px; color:var(--faint); font-weight:500; margin-top:2px;
        }
        .fve-editor-actions{
          display:flex; gap:8px; margin-top:14px; justify-content:flex-end;
        }
        .fve-cards{ display:grid; grid-template-columns:repeat(4,1fr); gap:12px; padding:18px 24px 4px;}
        .fve-card{ position:relative; border:1.5px solid var(--line); border-radius:16px; padding:14px; background:var(--paper);}
        .fve-card:hover{ border-color:var(--accent); box-shadow:0 0 0 3px rgba(0,192,116,.08);}
        .fve-cardname{ font-weight:700; font-size:13px; display:flex; align-items:center; gap:7px; color:var(--ink);}
        .fve-month{ font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:22px; margin:8px 0 0; letter-spacing:-.01em;}
        .fve-monthlbl{ font-size:11px; color:var(--faint); font-weight:600;}
        .fve-net{ margin-top:12px; padding-top:10px; border-top:1px dashed var(--line);}
        .fve-netval{ font-family:'Bricolage Grotesque',sans-serif; font-weight:800; font-size:18px;}
        .fve-bar{ height:5px; border-radius:99px; background:var(--wash); margin-top:8px; overflow:hidden;}
        .fve-barfill{ height:100%; border-radius:99px; background:linear-gradient(90deg,#9fb2bd,#5a6b78);}
        .fve-note{ font-size:11px; color:var(--muted); margin-top:9px; line-height:1.35; font-weight:500;}
        .fve-sub2{ font-size:10.5px; color:var(--faint); margin-top:4px; font-weight:600;}
        .fve-ctas{ display:flex; gap:12px; padding:16px 24px 0; flex-wrap:wrap;}
        .fve-cta{ flex:1; min-width:200px; text-align:center; padding:12px 16px; border-radius:12px;
          font-weight:700; font-size:14px; text-decoration:none; transition:.15s;}
        .fve-cta-primary{ background:var(--accent); color:#fff; }
        .fve-cta-primary:hover{ background:var(--accent-deep); }
        .fve-cta-secondary{ background:var(--wash); color:var(--ink); border:1.5px solid var(--line); }
        .fve-cta-secondary:hover{ border-color:var(--accent); }
        .fve-disc{ font-size:10.5px; color:var(--faint); padding:16px 24px 18px; line-height:1.5;}
        @media(max-width:680px){
          .fve-cards{grid-template-columns:1fr 1fr;}
          .fve-editor-grid{grid-template-columns:1fr 1fr;}
        }
        @media(max-width:440px){ .fve-cards{grid-template-columns:1fr;} .fve-editor-grid{grid-template-columns:1fr;} }
      `}</style>

      <div className="fve-head">
        <div className="fve-kicker">Acheter ou louer ?</div>
        <div className="fve-title">
          {modele} : comparatif de financement
        </div>
        <div className="fve-sub">
          Comptant, crédit, LOA et LLD comparés sur {annees} ans, tous frais inclus.
        </div>
      </div>

      {/* ── Hypothèses (lecture) ── */}
      {!editing && (
        <div className="fve-hypo">
          <div className="fve-hypo-text">
            <strong>Hypothèses :</strong> bonus {euro(bonus)}, apport {hypo.apportPct} % ({euro(apport)}), {kmAn.toLocaleString("fr-FR")} km/an, {annees} ans, TAEG {taeg} %
          </div>
          <button className="fve-hypo-btn" onClick={openEditor}>
            <Pencil size={13} />
            Modifier
          </button>
        </div>
      )}

      {/* ── Éditeur d'hypothèses ── */}
      {editing && (
        <div className="fve-editor">
          <div className="fve-editor-grid">
            <div className="fve-editor-field">
              <label className="fve-editor-label">Bonus écologique</label>
              <input
                className="fve-editor-input"
                type="text" inputMode="decimal"
                min={0}
                max={7000}
                step={500}
                value={draft.bonus}
                onChange={(e) => setDraft({ ...draft, bonus: safeParseNumber(e.target.value, draft.bonus) })}
              />
              <span className="fve-editor-suffix">€ (0 à 7 000)</span>
            </div>
            <div className="fve-editor-field">
              <label className="fve-editor-label">Apport</label>
              <input
                className="fve-editor-input"
                type="text" inputMode="decimal"
                min={0}
                max={100}
                step={5}
                value={draft.apportPct}
                onChange={(e) => setDraft({ ...draft, apportPct: safeParseNumber(e.target.value, draft.apportPct) })}
              />
              <span className="fve-editor-suffix">% du prix ({euro(prixBase * draft.apportPct / 100)})</span>
            </div>
            <div className="fve-editor-field">
              <label className="fve-editor-label">Kilométrage annuel</label>
              <input
                className="fve-editor-input"
                type="text" inputMode="decimal"
                min={5000}
                max={40000}
                step={1000}
                value={draft.kmAn}
                onChange={(e) => setDraft({ ...draft, kmAn: safeParseNumber(e.target.value, draft.kmAn) })}
              />
              <span className="fve-editor-suffix">km/an</span>
            </div>
            <div className="fve-editor-field">
              <label className="fve-editor-label">Durée</label>
              <input
                className="fve-editor-input"
                type="text" inputMode="decimal"
                min={12}
                max={72}
                step={12}
                value={draft.mois}
                onChange={(e) => setDraft({ ...draft, mois: safeParseNumber(e.target.value, draft.mois) })}
              />
              <span className="fve-editor-suffix">mois ({draft.mois / 12} ans)</span>
            </div>
            <div className="fve-editor-field">
              <label className="fve-editor-label">TAEG</label>
              <input
                className="fve-editor-input"
                type="text" inputMode="decimal"
                min={0}
                max={15}
                step={0.1}
                value={draft.taeg}
                onChange={(e) => setDraft({ ...draft, taeg: safeParseNumber(e.target.value, draft.taeg) })}
              />
              <span className="fve-editor-suffix">%</span>
            </div>
          </div>
          <div className="fve-editor-actions">
            <button className="fve-hypo-btn fve-hypo-btn--cancel" onClick={cancelEditor}>
              Annuler
            </button>
            <button className="fve-hypo-btn fve-hypo-btn--save" onClick={saveEditor}>
              <Check size={13} />
              Appliquer
            </button>
          </div>
        </div>
      )}

      <div className="fve-cards">
        {calc.scenarios.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.key} className="fve-card">
              <div className="fve-cardname">
                <Icon size={15} color="var(--muted)" />
                {s.nom}
              </div>
              {s.mensualite != null ? (
                <>
                  <div className="fve-month">{euro(s.mensualite)}</div>
                  <div className="fve-monthlbl">par mois</div>
                </>
              ) : (
                <>
                  <div className="fve-month">{euro(s.totalVerse)}</div>
                  <div className="fve-monthlbl">payé en une fois</div>
                </>
              )}
              <div className="fve-net">
                <div className="fve-monthlbl">
                  Coût total réel sur {annees} ans
                </div>
                <div className="fve-netval">{euro(s.net)}</div>
                <div className="fve-bar">
                  <div
                    className="fve-barfill"
                    style={{
                      width: `${Math.max(8, s.pct || 0)}%`,
                    }}
                  />
                </div>
              </div>
              <div className="fve-note">{s.note}</div>
              {s.sub && <div className="fve-sub2">{s.sub}</div>}
            </div>
          );
        })}
      </div>

      <div className="fve-ctas">
        <Link href="/acheter/loa-leasing/" className="fve-cta fve-cta-primary">
          Voir les offres LOA/LLD pour ce modèle
        </Link>
        <Link href="/acheter/assurance/" className="fve-cta fve-cta-secondary">
          Assurer ce modèle
        </Link>
      </div>

      <p className="fve-disc">
        Estimations indicatives basées sur le marché français 2026 (bonus écologique,
        taux crédit moyen, décote VE constatée). Le coût total inclut recharge, assurance
        et entretien. Ne constitue pas un conseil financier.
      </p>
    </div>
  );
}
