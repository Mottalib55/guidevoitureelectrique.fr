"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";
import { safeParseNumber } from "@/lib/parseNumericInput";

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

export default function SimulateurAides() {
  const [prixVehicule, setPrixVehicule] = useState(25000);
  const [rfr, setRfr] = useState(30000); // revenu fiscal de référence
  const [nbParts, setNbParts] = useState(1);
  const [eligible, setEligible] = useState(true); // véhicule éligible au bonus
  const [ancienVehicule, setAncienVehicule] = useState(false); // prime conversion
  const [critair, setCritair] = useState("3");

  const calc = useMemo(() => {
    const rfrParPart = rfr / nbParts;
    let bonus = 0;
    let leasingSocial = false;
    let primeConversion = 0;

    // Bonus écologique 2026
    if (eligible && prixVehicule <= 47000) {
      if (rfrParPart <= 15400) {
        bonus = 7000; // ménages très modestes
      } else if (rfrParPart <= 24900) {
        bonus = 4000; // ménages modestes
      } else {
        bonus = 4000; // barème standard
      }
    }

    // Leasing social (sous conditions de revenus)
    if (eligible && rfrParPart <= 15400) {
      leasingSocial = true;
    }

    // Prime à la conversion
    if (ancienVehicule) {
      const critairNum = parseInt(critair);
      if (critairNum >= 3) {
        if (rfrParPart <= 7700) {
          primeConversion = 5000;
        } else if (rfrParPart <= 15400) {
          primeConversion = 3000;
        } else {
          primeConversion = 1500;
        }
      }
    }

    const totalAides = bonus + primeConversion;
    const prixApresAides = Math.max(0, prixVehicule - totalAides);

    return { bonus, leasingSocial, primeConversion, totalAides, prixApresAides, rfrParPart };
  }, [prixVehicule, rfr, nbParts, eligible, ancienVehicule, critair]);

  const inputStyle = {
    width: "100%",
    padding: "11px 13px",
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
    fontSize: 12,
    fontWeight: 700,
    color: "var(--muted)",
    marginBottom: 6,
  } as const;

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Outils", href: "/outils/financement/" },
          { name: "Simulateur d'aides", href: "/outils/simulateur-aides/" },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        <header style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Simulateur d&apos;aides voiture électrique
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 640, lineHeight: 1.5 }}>
            Estimez le montant des aides auxquelles vous avez droit : bonus écologique,
            prime à la conversion, leasing social.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 920 }}>
          {/* Formulaire */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <label style={labelStyle}>Prix du véhicule</label>
                <input type="text" inputMode="decimal" value={prixVehicule} onChange={(e) => setPrixVehicule(safeParseNumber(e.target.value, prixVehicule))} step={1000} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Revenu fiscal de référence</label>
                <input type="text" inputMode="decimal" value={rfr} onChange={(e) => setRfr(safeParseNumber(e.target.value, rfr))} step={1000} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Nombre de parts fiscales</label>
                <input type="text" inputMode="decimal" value={nbParts} onChange={(e) => setNbParts(safeParseNumber(e.target.value, nbParts))} step={0.5} min={1} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>RFR par part</label>
                <input type="text" value={euro(calc.rfrParPart)} disabled style={{ ...inputStyle, background: "var(--wash)", color: "var(--faint)" }} />
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>
                <input type="checkbox" checked={eligible} onChange={(e) => setEligible(e.target.checked)} style={{ width: 18, height: 18 }} />
                Véhicule éligible au bonus (score environnemental OK)
              </label>
            </div>

            <div style={{ marginTop: 12 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>
                <input type="checkbox" checked={ancienVehicule} onChange={(e) => setAncienVehicule(e.target.checked)} style={{ width: 18, height: 18 }} />
                Je mets un ancien véhicule au rebut (prime conversion)
              </label>
            </div>

            {ancienVehicule && (
              <div style={{ marginTop: 12 }}>
                <label style={labelStyle}>Vignette Crit&apos;Air de l&apos;ancien véhicule</label>
                <select value={critair} onChange={(e) => setCritair(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                  <option value="5">Crit&apos;Air 5</option>
                  <option value="4">Crit&apos;Air 4</option>
                  <option value="3">Crit&apos;Air 3</option>
                  <option value="2">Crit&apos;Air 2</option>
                  <option value="1">Crit&apos;Air 1</option>
                </select>
              </div>
            )}
          </div>

          {/* Résultats */}
          <div>
            <div className="encadré-verdict">
              <h2 style={{ fontSize: 20 }}>Vos aides estimées</h2>
              <div className="encadré-verdict-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                <div className="encadré-verdict-item">
                  <div className="encadré-verdict-val">{euro(calc.totalAides)}</div>
                  <div className="encadré-verdict-lbl">Total des aides</div>
                </div>
                <div className="encadré-verdict-item">
                  <div className="encadré-verdict-val">{euro(calc.prixApresAides)}</div>
                  <div className="encadré-verdict-lbl">Prix après aides</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20, padding: 20, border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--wash)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, marginBottom: 12 }}>
                Détail des aides
              </h3>
              <div style={{ display: "grid", gap: 12, fontSize: 14, fontWeight: 500 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>Bonus écologique</span>
                  <strong style={{ color: calc.bonus > 0 ? "var(--accent-deep)" : "var(--faint)" }}>
                    {calc.bonus > 0 ? euro(calc.bonus) : "Non éligible"}
                  </strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>Prime à la conversion</span>
                  <strong style={{ color: calc.primeConversion > 0 ? "var(--accent-deep)" : "var(--faint)" }}>
                    {calc.primeConversion > 0 ? euro(calc.primeConversion) : ancienVehicule ? "Non éligible" : "—"}
                  </strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>Leasing social (100 €/mois)</span>
                  <strong style={{ color: calc.leasingSocial ? "var(--accent-deep)" : "var(--faint)" }}>
                    {calc.leasingSocial ? "Éligible" : "Non éligible"}
                  </strong>
                </div>
              </div>
            </div>

            <p style={{ fontSize: 12, color: "var(--faint)", marginTop: 12, lineHeight: 1.5 }}>
              Estimations basées sur les barèmes 2026. Le bonus écologique est soumis au
              score environnemental du véhicule. La prime à la conversion et le leasing
              social sont soumis à conditions. Vérifiez sur{" "}
              <a href="https://www.service-public.fr/particuliers/vosdroits/F34014" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-deep)" }}>
                service-public.fr
              </a>.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
          <Link href="/outils/financement/" className="btn-primary">
            Calculer mon financement
          </Link>
          <Link href="/acheter/aides-et-bonus/" className="btn-secondary">
            Guide complet des aides
          </Link>
        </div>

        {/* Contenu redactionnel */}
        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Toutes les aides pour acheter une voiture électrique en France en 2026 : le guide étape par étape</h2>
          <p>
            L&apos;État français et les collectivites locales proposent un ensemble d&apos;aides financieres pour encourager l&apos;achat de véhicules électriques. Cumulees, ces aides peuvent représenter <strong>5 000 a 14 000 euros de reduction</strong> sur le prix d&apos;un véhicule neuf, voire davantage dans certaines configurations. Mais le système est complexe, avec des conditions d&apos;éligibilité spécifiques a chaque dispositif. Ce guide vous accompagne pas a pas pour identifier toutes les aides auxquelles vous avez droit et maximiser votre soutien financier.
          </p>

          <h2>Étape 1 : Le bonus écologique : l&apos;aide principale</h2>
          <p>
            Le bonus écologique est la pierre angulaire du dispositif de soutien a l&apos;achat de véhicules électriques en France. Mis en place en 2008, il a été profondément réformé en 2024 avec l&apos;introduction du <strong>score environnemental</strong>, et ses montants ont été révisés pour 2026.
          </p>

          <h3>Montants du bonus écologique en 2026</h3>
          <p>
            Le montant du bonus dépend de deux critères : le <strong>prix du véhicule</strong> et votre <strong>revenu fiscal de référence par part</strong> (RFR/part). Voici les barèmes en vigueur :
          </p>
          <ul>
            <li><strong>Véhicule de moins de 47 000 euros :</strong>
              <ul>
                <li>RFR/part inférieur a 15 400 euros : <strong>7 000 euros</strong></li>
                <li>RFR/part compris entre 15 400 et 24 900 euros : <strong>4 000 euros</strong></li>
                <li>RFR/part supérieur a 24 900 euros : <strong>4 000 euros</strong></li>
              </ul>
            </li>
            <li><strong>Véhicule de 47 000 a 60 000 euros :</strong> <strong>0 euro</strong> (aucun bonus)</li>
            <li><strong>Véhicule de plus de 60 000 euros :</strong> <strong>0 euro</strong></li>
          </ul>
          <p>
            <strong>Attention :</strong> le plafond de 47 000 euros est calcule sur le prix d&apos;achat TTC du véhicule, options comprises. Les frais de mise a la route et la peinture metallisee sont exclus du calcul, mais les équipements de serie ou optionnels cochés au configurateur sont inclus. Vérifiez bien que la configuration choisie reste sous le seuil.
          </p>

          <h3>Le score environnemental : la condition d&apos;éligibilité clé</h3>
          <p>
            Depuis 2024, l&apos;éligibilité au bonus est conditionnee a un <strong>score environnemental</strong> calcule par l&apos;ADEME (Agence de la transition écologique). Ce score prend en compte l&apos;empreinte carbone de la fabrication du véhicule : extraction des matières premières, fabrication de la batterie, assemblage du véhicule, et transport jusqu&apos;en France.
          </p>
          <p>
            En pratique, ce score pénalise les véhicules fabriqués dans des pays au mix énergétique fortement carbone. La quasi-totalité des véhicules assemblés en Chine sont exclus du bonus. Les véhicules assemblés en Europe (y compris en Europe de l&apos;Est) sont généralement éligibles. Le score minimum requis est de 60 points sur 100.
          </p>
          <p>
            La liste des véhicules éligibles est publiée par un arrêté ministériel et mise a jour périodiquement. En 2026, les principaux modèles éligibles incluent :
          </p>
          <ul>
            <li>Renault 5 E-Tech, Renault Scenic E-Tech, Renault Megane E-Tech</li>
            <li>Peugeot e-208, Peugeot e-2008, Peugeot e-308, Peugeot e-3008</li>
            <li>Citroen e-C3, Citroen e-C4</li>
            <li>Fiat 500e, Fiat 600e</li>
            <li>Volkswagen ID.3, Volkswagen ID.4 (versions assemblées en Allemagne)</li>
            <li>Tesla Model 3 (assemblée a Berlin), Tesla Model Y (assemblée a Berlin)</li>
            <li>Hyundai Ioniq 5 (assemblé en République tchèque), Hyundai Kona Electric</li>
            <li>Kia EV6 (version assemblée en Europe)</li>
            <li>BMW iX1, BMW i4</li>
            <li>Leapmotor T03 (assemblé en Pologne par Stellantis)</li>
          </ul>
          <p>
            Les modèles <strong>non éligibles</strong> au bonus incluent notamment : BYD Atto 3, BYD Dolphin (importés de Chine), MG4 (version chinoise), Xpeng G6, Zeekr 001/X, Tesla Model 3/Y (version assemblée a Shanghai).
          </p>

          <h3>Comment vérifier l&apos;éligibilité de votre véhicule</h3>
          <p>
            Avant tout achat, vérifiez l&apos;éligibilité du véhicule sur le site officiel <strong>service-public.fr</strong> ou sur le site de l&apos;ADEME. Les concessionnaires sont tenus de vous informer de l&apos;éligibilité au bonus, mais les erreurs sont possibles, notamment pour les modèles dont le lieu d&apos;assemblage varie selon les versions. Demandez toujours le <strong>numéro de version</strong> (version spécifique du modèle) et vérifiez-le sur la liste officielle.
          </p>

          <h2>Étape 2 : La prime à la conversion : cumul possible avec le bonus</h2>
          <p>
            La prime a la conversion est une aide supplémentaire accordée lorsque vous mettez au rebut un ancien véhicule polluant pour acheter un véhicule propre. Elle est <strong>cumulable avec le bonus écologique</strong>, ce qui peut significativement réduire le coût d&apos;acquisition.
          </p>

          <h3>Conditions d&apos;éligibilité de l&apos;ancien véhicule</h3>
          <p>
            Pour bénéficier de la prime a la conversion, l&apos;ancien véhicule mis au rebut doit remplir les conditions suivantes :
          </p>
          <ul>
            <li>Être immatriculé en France et a votre nom depuis au moins 12 mois</li>
            <li>Avoir une vignette <strong>Crit&apos;Air 3 ou plus</strong> (correspondant généralement aux véhicules essence d&apos;avant 2006 et diesel d&apos;avant 2011)</li>
            <li>Ne pas être gagé ni faire l&apos;objet d&apos;une opposition au transfert du certificat d&apos;immatriculation</li>
            <li>Être remis pour destruction a un centre VHU (véhicule hors d&apos;usage) agréé, dans les 3 mois suivant la facturation du véhicule neuf (ou 6 mois precedant)</li>
          </ul>

          <h3>Montants de la prime a la conversion en 2026</h3>
          <p>
            Les montants dependent de votre revenu fiscal de référence par part :
          </p>
          <ul>
            <li><strong>RFR/part inférieur a 7 700 euros :</strong> prime de <strong>5 000 euros</strong></li>
            <li><strong>RFR/part entre 7 700 et 15 400 euros :</strong> prime de <strong>3 000 euros</strong></li>
            <li><strong>RFR/part supérieur a 15 400 euros :</strong> prime de <strong>1 500 euros</strong></li>
          </ul>
          <p>
            <strong>Exemple cumul maximal :</strong> Un ménage avec un RFR/part de 12 000 euros, mettant au rebut un véhicule Crit&apos;Air 4, et achetant une Renault 5 E-Tech a 25 000 euros, peut cumuler : bonus écologique de 4 000 euros + prime a la conversion de 3 000 euros = <strong>7 000 euros d&apos;aides</strong>, soit un prix net de 18 000 euros.
          </p>

          <h2>Étape 3 : Le leasing social : pour les ménages modestes</h2>
          <p>
            Le <strong>leasing social</strong> est un dispositif lancé fin 2023 et reconduit en 2025-2026, permettant aux ménages les plus modestes de louer une voiture électrique neuve a partir de <strong>100 euros par mois</strong>. C&apos;est une révolution en termes d&apos;accessibilite a la mobilite électrique.
          </p>

          <h3>Conditions d&apos;éligibilité au leasing social</h3>
          <ul>
            <li><strong>Revenu fiscal de référence par part</strong> inférieur a <strong>15 400 euros</strong></li>
            <li>Habiter a plus de 15 km de son lieu de travail <strong>OU</strong> parcourir plus de 8 000 km/an pour des déplacements professionnels</li>
            <li>Ne pas avoir déjà bénéficié du dispositif dans les 3 dernières années</li>
          </ul>

          <h3>Fonctionnement concret</h3>
          <p>
            Le leasing social fonctionne en LOA sur 36 mois avec un forfait de 12 000 km/an. L&apos;État subventionne directement le loyer, ce qui permet d&apos;atteindre des mensualités de 100 a 150 euros pour des véhicules dont le loyer normal serait de 350 a 500 euros. Les véhicules proposés sont sélectionnés par l&apos;État parmi les modèles éligibles au bonus écologique et assemblés en Europe.
          </p>
          <p>
            En 2026, les modèles disponibles en leasing social incluent typiquement : la Citroen e-C3 (des 100 euros/mois), la Renault 5 E-Tech (des 120 euros/mois), la Fiat 500e (des 130 euros/mois) et la Peugeot e-208 (des 140 euros/mois). Les lots sont attribues par vagues, avec un nombre de véhicules limité a chaque session. Il est conseille de se pré-inscrire des l&apos;ouverture des candidatures.
          </p>

          <h2>Étape 4 : Les aides régionales et locales : un complément souvent méconnu</h2>
          <p>
            En plus des aides nationales, de nombreuses régions, départements et métropoles proposent des aides complémentaires. Ces aides sont cumulables avec le bonus écologique et la prime a la conversion, ce qui peut porter le total des aides a des niveaux très significatifs.
          </p>

          <h3>Aides régionales en 2026</h3>
          <ul>
            <li><strong>Ile-de-France :</strong> aide de 6 000 euros pour l&apos;achat d&apos;un VE ou d&apos;un véhicule a hydrogene, sous conditions de revenus (RFR/part inférieur a 13 489 euros). Cumulable avec le bonus écologique.</li>
            <li><strong>Grand Est :</strong> prime de 3 000 euros pour l&apos;achat d&apos;un VE neuf, sous conditions de revenus et de lieu de residence.</li>
            <li><strong>Occitanie :</strong> eco-cheque mobilite de 2 000 a 4 000 euros selon les revenus, pour l&apos;achat ou la location longue durée d&apos;un VE.</li>
            <li><strong>Normandie :</strong> aide de 2 500 euros pour les ménages modestes achetant un VE neuf ou d&apos;occasion.</li>
            <li><strong>Nouvelle-Aquitaine :</strong> aide de 2 000 euros pour l&apos;achat d&apos;un VE neuf, portée a 3 000 euros en zone rurale.</li>
            <li><strong>Auvergne-Rhone-Alpes :</strong> aide de 1 000 a 2 000 euros selon les revenus et le lieu de residence.</li>
          </ul>
          <p>
            <strong>Conseil :</strong> les aides régionales évoluent fréquemment et sont parfois limitées dans le temps ou en nombre de bénéficiaires. Consultez le site de votre région ou contactez votre maison de l&apos;environnement locale pour connaître les dispositifs en vigueur au moment de votre achat.
          </p>

          <h3>Aides métropolitaines et communales</h3>
          <p>
            Certaines métropoles et communes offrent des aides supplémentaires :
          </p>
          <ul>
            <li><strong>Métropole de Lyon :</strong> aide pouvant atteindre 2 000 euros, sous conditions de revenus</li>
            <li><strong>Ville de Paris :</strong> aide a la mobilite propre de 400 a 600 euros (en sus des aides Ile-de-France)</li>
            <li><strong>Métropole de Grenoble :</strong> prime de 1 500 euros pour les residents de la ZFE</li>
            <li><strong>Métropole de Strasbourg :</strong> aide de 2 500 euros pour les ménages en ZFE</li>
            <li><strong>Nantes Métropole :</strong> aide de 1 000 euros pour les professionnels et les particuliers</li>
          </ul>

          <h2>Étape 5 : Les avantages fiscaux pour les entreprises</h2>
          <p>
            Les entreprises bénéficient d&apos;un cadre fiscal particulièrement avantageux pour l&apos;acquisition de véhicules électriques. En 2026, les principaux avantages sont les suivants :
          </p>

          <h3>Exonération de la taxe sur les véhicules de société (TVS)</h3>
          <p>
            Les véhicules électriques dont les émissions de CO2 sont inférieures a 20 g/km sont <strong>totalement exonérés de TVS</strong>. Pour un véhicule de société thermique, la TVS peut représenter 1 000 a 5 000 euros par an selon la puissance et les émissions. C&apos;est donc une économie annuelle considérable.
          </p>

          <h3>Amortissement fiscal majore</h3>
          <p>
            Le plafond d&apos;amortissement déductible pour un véhicule électrique est de <strong>30 000 euros</strong>, contre 18 300 euros pour un véhicule émettant moins de 20 g/km de CO2 (hybride rechargeable) et 9 900 euros pour un véhicule émettant plus de 160 g/km. Ce plafond majore permet de déduire davantage du résultat fiscal.
          </p>

          <h3>Avantage en nature réduit pour les salariés</h3>
          <p>
            Lorsqu&apos;une entreprise met un véhicule électrique a disposition d&apos;un salarié pour un usage personnel, la valeur de l&apos;avantage en nature est calculee après un <strong>abattement de 50 %</strong>, dans la limite de 1 800 euros par an. De plus, la mise a disposition d&apos;une borne de recharge au domicile du salarié et la prise en charge de l&apos;électricité sont exonérées d&apos;impôt et de cotisations sociales. Cela représente un avantage significatif pour le salarié et un argument de recrutement pour l&apos;entreprise.
          </p>

          <h3>Recuperation de la TVA sur l&apos;électricité</h3>
          <p>
            Contrairement au carburant (TVA récupérable a 80 % pour le gazole, non récupérable pour l&apos;essence), la TVA sur l&apos;électricité utilisée pour la recharge des véhicules d&apos;entreprise est <strong>intégralement récupérable</strong>. Sur un budget recharge de 1 500 euros/an, cela représente une économie de 250 euros de TVA recuperee.
          </p>

          <h2>Étape 6 : Les aides a l&apos;installation d&apos;une borne de recharge</h2>
          <p>
            Completer l&apos;achat d&apos;un véhicule électrique par l&apos;installation d&apos;une borne de recharge a domicile est fortement recommande, et plusieurs aides existent pour en réduire le coût :
          </p>
          <ul>
            <li><strong>Crédit d&apos;impôt de 300 euros</strong> pour l&apos;installation d&apos;une borne de recharge a domicile (residence principale ou secondaire)</li>
            <li><strong>Taux de TVA réduit a 5,5 %</strong> pour les travaux d&apos;installation dans un logement de plus de 2 ans</li>
            <li><strong>Programme ADVENIR :</strong> prime couvrant jusqu&apos;a 50 % du coût d&apos;installation, plafonnée a 960 euros pour une solution individuelle en copropriété, et a 1 660 euros pour une solution partagée</li>
            <li><strong>Aides locales :</strong> certaines collectivites ajoutent une aide supplémentaire (par exemple, la métropole de Lyon propose 500 euros supplémentaires pour l&apos;installation d&apos;une wallbox)</li>
          </ul>

          <h2>Comment cumuler les aides : le récapitulatif</h2>
          <p>
            Voici le cumul maximal théorique pour un ménage très modeste (RFR/part inférieur a 7 700 euros) achetant un VE éligible a moins de 47 000 euros en Ile-de-France, avec mise au rebut d&apos;un ancien véhicule Crit&apos;Air 4 :
          </p>
          <ul>
            <li>Bonus écologique : 7 000 euros</li>
            <li>Prime a la conversion : 5 000 euros</li>
            <li>Aide Ile-de-France : 6 000 euros</li>
            <li><strong>Total : 18 000 euros d&apos;aides</strong></li>
          </ul>
          <p>
            Pour un véhicule comme la Citroen e-C3 a 23 300 euros, le prix net après toutes les aides serait de <strong>5 300 euros</strong>. C&apos;est un niveau de soutien exceptionnel qui rend l&apos;électrique accessible a pratiquement tous les budgets.
          </p>
          <p>
            <strong>Important :</strong> le cumul des aides est soumis a la regle de non-depassement. En aucun cas, le total des aides ne peut dépasser le prix d&apos;achat du véhicule. De plus, certaines aides régionales sont soumises a des conditions spécifiques supplémentaires (residence dans une ZFE, anciennete de residence, etc.). Vérifiez chaque condition auprès de l&apos;organisme concerné avant de compter sur un cumul maximal.
          </p>

          <h2>Démarches administratives : comment demander les aides</h2>
          <p>
            La bonne nouvelle est que le processus de demande s&apos;est considérablement simplifié ces dernières années :
          </p>
          <ul>
            <li><strong>Bonus écologique :</strong> le plus souvent, il est directement déduit du prix par le concessionnaire lors de la facturation. Si ce n&apos;est pas le cas, vous pouvez en faire la demande en ligne sur le site de l&apos;ASP (Agence de Services et de Paiement) dans les 6 mois suivant la facturation.</li>
            <li><strong>Prime a la conversion :</strong> même démarche que le bonus, via le site de l&apos;ASP. Vous devrez fournir le certificat de destruction du véhicule ancien.</li>
            <li><strong>Leasing social :</strong> inscription en ligne sur la plateforme dédiée du gouvernement, suivie d&apos;une prise de rendez-vous chez un concessionnaire participant.</li>
            <li><strong>Aides régionales :</strong> procédures variables selon les régions. Generalement, une demande en ligne sur le site de la région, avec fourniture de pièces justificatives (avis d&apos;imposition, facture du véhicule, carte grise).</li>
            <li><strong>Crédit d&apos;impôt borne :</strong> a déclarer lors de votre declaration de revenus annuelle, avec la facture de l&apos;installateur.</li>
          </ul>
          <p>
            <strong>Conseil :</strong> conservez soigneusement tous les documents relatifs a l&apos;achat (facture détaillée, carte grise, certificat de conformite, avis d&apos;imposition, justificatif de domicile). Les délais de traitement des aides varient de 1 semaine (bonus avance par le concessionnaire) a 3 mois (aides régionales versees par virement).
          </p>
          <p>
            Notre simulateur ci-dessus vous donne une estimation personnalisée des aides nationales auxquelles vous avez droit. Pour les aides régionales et locales, nous vous invitons a consulter le site de votre région et de votre commune, ou a utiliser le service en ligne de l&apos;ADEME qui centralise progressivement l&apos;ensemble des aides disponibles sur le territoire.
          </p>
        </div>

        <AuteurBio />
        <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
          <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>Ministère de la Transition écologique : Décret n° 2024-102 relatif au bonus écologique, modifié 2026</li>
            <li>Service-Public.fr : Fiche pratique « Bonus écologique pour un véhicule électrique »</li>
            <li>ASP : Conditions de la prime à la conversion et formulaire de demande en ligne</li>
            <li>Régions de France : Dispositifs d&apos;aide à l&apos;achat de véhicules propres par région</li>
            <li>Code général des impôts, art. 200 quater C : Crédit d&apos;impôt borne de recharge</li>
            <li>ADEME : Simulateur national des aides à la mobilité propre</li>
          </ul>
        </div>
      </article>
    </>
  );
}