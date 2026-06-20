"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

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

    // Bonus écologique 2025
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
                <input type="text" inputMode="decimal" value={prixVehicule} onChange={(e) => setPrixVehicule(Number(e.target.value))} step={1000} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Revenu fiscal de référence</label>
                <input type="text" inputMode="decimal" value={rfr} onChange={(e) => setRfr(Number(e.target.value))} step={1000} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Nombre de parts fiscales</label>
                <input type="text" inputMode="decimal" value={nbParts} onChange={(e) => setNbParts(Number(e.target.value))} step={0.5} min={1} style={inputStyle} />
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
            <div className="encadre-verdict">
              <h2 style={{ fontSize: 20 }}>Vos aides estimées</h2>
              <div className="encadre-verdict-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                <div className="encadre-verdict-item">
                  <div className="encadre-verdict-val">{euro(calc.totalAides)}</div>
                  <div className="encadre-verdict-lbl">Total des aides</div>
                </div>
                <div className="encadre-verdict-item">
                  <div className="encadre-verdict-val">{euro(calc.prixApresAides)}</div>
                  <div className="encadre-verdict-lbl">Prix après aides</div>
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
              Estimations basées sur les barèmes 2025. Le bonus écologique est soumis au
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
          <h2>Toutes les aides pour acheter une voiture electrique en France en 2026 : le guide etape par etape</h2>
          <p>
            L&apos;Etat francais et les collectivites locales proposent un ensemble d&apos;aides financieres pour encourager l&apos;achat de vehicules electriques. Cumulees, ces aides peuvent representer <strong>5 000 a 14 000 euros de reduction</strong> sur le prix d&apos;un vehicule neuf, voire davantage dans certaines configurations. Mais le systeme est complexe, avec des conditions d&apos;eligibilite specifiques a chaque dispositif. Ce guide vous accompagne pas a pas pour identifier toutes les aides auxquelles vous avez droit et maximiser votre soutien financier.
          </p>

          <h2>Etape 1 : Le bonus ecologique — l&apos;aide principale</h2>
          <p>
            Le bonus ecologique est la pierre angulaire du dispositif de soutien a l&apos;achat de vehicules electriques en France. Mis en place en 2008, il a ete profondement reforme en 2024 avec l&apos;introduction du <strong>score environnemental</strong>, et ses montants ont ete revises pour 2026.
          </p>

          <h3>Montants du bonus ecologique en 2026</h3>
          <p>
            Le montant du bonus depend de deux criteres : le <strong>prix du vehicule</strong> et votre <strong>revenu fiscal de reference par part</strong> (RFR/part). Voici les baremes en vigueur :
          </p>
          <ul>
            <li><strong>Vehicule de moins de 47 000 euros :</strong>
              <ul>
                <li>RFR/part inferieur a 15 400 euros : <strong>7 000 euros</strong></li>
                <li>RFR/part compris entre 15 400 et 24 900 euros : <strong>4 000 euros</strong></li>
                <li>RFR/part superieur a 24 900 euros : <strong>4 000 euros</strong></li>
              </ul>
            </li>
            <li><strong>Vehicule de 47 000 a 60 000 euros :</strong> <strong>0 euro</strong> (aucun bonus)</li>
            <li><strong>Vehicule de plus de 60 000 euros :</strong> <strong>0 euro</strong></li>
          </ul>
          <p>
            <strong>Attention :</strong> le plafond de 47 000 euros est calcule sur le prix d&apos;achat TTC du vehicule, options comprises. Les frais de mise a la route et la peinture metallisee sont exclus du calcul, mais les equipements de serie ou optionnels cochés au configurateur sont inclus. Verifiez bien que la configuration choisie reste sous le seuil.
          </p>

          <h3>Le score environnemental : la condition d&apos;eligibilite cle</h3>
          <p>
            Depuis 2024, l&apos;eligibilite au bonus est conditionnee a un <strong>score environnemental</strong> calcule par l&apos;ADEME (Agence de la transition ecologique). Ce score prend en compte l&apos;empreinte carbone de la fabrication du vehicule : extraction des matieres premieres, fabrication de la batterie, assemblage du vehicule, et transport jusqu&apos;en France.
          </p>
          <p>
            En pratique, ce score penalise les vehicules fabriques dans des pays au mix energetique fortement carbone. La quasi-totalite des vehicules assembles en Chine sont exclus du bonus. Les vehicules assembles en Europe (y compris en Europe de l&apos;Est) sont generalement eligibles. Le score minimum requis est de 60 points sur 100.
          </p>
          <p>
            La liste des vehicules eligibles est publiee par un arrete ministeriel et mise a jour periodiquement. En 2026, les principaux modeles eligibles incluent :
          </p>
          <ul>
            <li>Renault 5 E-Tech, Renault Scenic E-Tech, Renault Megane E-Tech</li>
            <li>Peugeot e-208, Peugeot e-2008, Peugeot e-308, Peugeot e-3008</li>
            <li>Citroen e-C3, Citroen e-C4</li>
            <li>Fiat 500e, Fiat 600e</li>
            <li>Volkswagen ID.3, Volkswagen ID.4 (versions assemblees en Allemagne)</li>
            <li>Tesla Model 3 (assemblee a Berlin), Tesla Model Y (assemblee a Berlin)</li>
            <li>Hyundai Ioniq 5 (assemble en Republique tcheque), Hyundai Kona Electric</li>
            <li>Kia EV6 (version assemblee en Europe)</li>
            <li>BMW iX1, BMW i4</li>
            <li>Leapmotor T03 (assemble en Pologne par Stellantis)</li>
          </ul>
          <p>
            Les modeles <strong>non eligibles</strong> au bonus incluent notamment : BYD Atto 3, BYD Dolphin (importes de Chine), MG4 (version chinoise), Xpeng G6, Zeekr 001/X, Tesla Model 3/Y (version assemblee a Shanghai).
          </p>

          <h3>Comment verifier l&apos;eligibilite de votre vehicule</h3>
          <p>
            Avant tout achat, verifiez l&apos;eligibilite du vehicule sur le site officiel <strong>service-public.fr</strong> ou sur le site de l&apos;ADEME. Les concessionnaires sont tenus de vous informer de l&apos;eligibilite au bonus, mais les erreurs sont possibles, notamment pour les modeles dont le lieu d&apos;assemblage varie selon les versions. Demandez toujours le <strong>numero de version</strong> (version specifique du modele) et verifiez-le sur la liste officielle.
          </p>

          <h2>Etape 2 : La prime a la conversion — cumul possible avec le bonus</h2>
          <p>
            La prime a la conversion est une aide supplementaire accordee lorsque vous mettez au rebut un ancien vehicule polluant pour acheter un vehicule propre. Elle est <strong>cumulable avec le bonus ecologique</strong>, ce qui peut significativement reduire le cout d&apos;acquisition.
          </p>

          <h3>Conditions d&apos;eligibilite de l&apos;ancien vehicule</h3>
          <p>
            Pour beneficier de la prime a la conversion, l&apos;ancien vehicule mis au rebut doit remplir les conditions suivantes :
          </p>
          <ul>
            <li>Etre immatricule en France et a votre nom depuis au moins 12 mois</li>
            <li>Avoir une vignette <strong>Crit&apos;Air 3 ou plus</strong> (correspondant generalement aux vehicules essence d&apos;avant 2006 et diesel d&apos;avant 2011)</li>
            <li>Ne pas etre gage ni faire l&apos;objet d&apos;une opposition au transfert du certificat d&apos;immatriculation</li>
            <li>Etre remis pour destruction a un centre VHU (vehicule hors d&apos;usage) agree, dans les 3 mois suivant la facturation du vehicule neuf (ou 6 mois precedant)</li>
          </ul>

          <h3>Montants de la prime a la conversion en 2026</h3>
          <p>
            Les montants dependent de votre revenu fiscal de reference par part :
          </p>
          <ul>
            <li><strong>RFR/part inferieur a 7 700 euros :</strong> prime de <strong>5 000 euros</strong></li>
            <li><strong>RFR/part entre 7 700 et 15 400 euros :</strong> prime de <strong>3 000 euros</strong></li>
            <li><strong>RFR/part superieur a 15 400 euros :</strong> prime de <strong>1 500 euros</strong></li>
          </ul>
          <p>
            <strong>Exemple cumul maximal :</strong> Un menage avec un RFR/part de 12 000 euros, mettant au rebut un vehicule Crit&apos;Air 4, et achetant une Renault 5 E-Tech a 25 000 euros, peut cumuler : bonus ecologique de 4 000 euros + prime a la conversion de 3 000 euros = <strong>7 000 euros d&apos;aides</strong>, soit un prix net de 18 000 euros.
          </p>

          <h2>Etape 3 : Le leasing social — pour les menages modestes</h2>
          <p>
            Le <strong>leasing social</strong> est un dispositif lance fin 2023 et reconduit en 2025-2026, permettant aux menages les plus modestes de louer une voiture electrique neuve a partir de <strong>100 euros par mois</strong>. C&apos;est une revolution en termes d&apos;accessibilite a la mobilite electrique.
          </p>

          <h3>Conditions d&apos;eligibilite au leasing social</h3>
          <ul>
            <li><strong>Revenu fiscal de reference par part</strong> inferieur a <strong>15 400 euros</strong></li>
            <li>Habiter a plus de 15 km de son lieu de travail <strong>OU</strong> parcourir plus de 8 000 km/an pour des deplacements professionnels</li>
            <li>Ne pas avoir deja beneficie du dispositif dans les 3 dernieres annees</li>
          </ul>

          <h3>Fonctionnement concret</h3>
          <p>
            Le leasing social fonctionne en LOA sur 36 mois avec un forfait de 12 000 km/an. L&apos;Etat subventionne directement le loyer, ce qui permet d&apos;atteindre des mensualites de 100 a 150 euros pour des vehicules dont le loyer normal serait de 350 a 500 euros. Les vehicules proposes sont selectionnes par l&apos;Etat parmi les modeles eligibles au bonus ecologique et assembles en Europe.
          </p>
          <p>
            En 2026, les modeles disponibles en leasing social incluent typiquement : la Citroen e-C3 (des 100 euros/mois), la Renault 5 E-Tech (des 120 euros/mois), la Fiat 500e (des 130 euros/mois) et la Peugeot e-208 (des 140 euros/mois). Les lots sont attribues par vagues, avec un nombre de vehicules limite a chaque session. Il est conseille de se pre-inscrire des l&apos;ouverture des candidatures.
          </p>

          <h2>Etape 4 : Les aides regionales et locales — un complement souvent meconnu</h2>
          <p>
            En plus des aides nationales, de nombreuses regions, departements et metropoles proposent des aides complementaires. Ces aides sont cumulables avec le bonus ecologique et la prime a la conversion, ce qui peut porter le total des aides a des niveaux tres significatifs.
          </p>

          <h3>Aides regionales en 2026</h3>
          <ul>
            <li><strong>Ile-de-France :</strong> aide de 6 000 euros pour l&apos;achat d&apos;un VE ou d&apos;un vehicule a hydrogene, sous conditions de revenus (RFR/part inferieur a 13 489 euros). Cumulable avec le bonus ecologique.</li>
            <li><strong>Grand Est :</strong> prime de 3 000 euros pour l&apos;achat d&apos;un VE neuf, sous conditions de revenus et de lieu de residence.</li>
            <li><strong>Occitanie :</strong> eco-cheque mobilite de 2 000 a 4 000 euros selon les revenus, pour l&apos;achat ou la location longue duree d&apos;un VE.</li>
            <li><strong>Normandie :</strong> aide de 2 500 euros pour les menages modestes achetant un VE neuf ou d&apos;occasion.</li>
            <li><strong>Nouvelle-Aquitaine :</strong> aide de 2 000 euros pour l&apos;achat d&apos;un VE neuf, portee a 3 000 euros en zone rurale.</li>
            <li><strong>Auvergne-Rhone-Alpes :</strong> aide de 1 000 a 2 000 euros selon les revenus et le lieu de residence.</li>
          </ul>
          <p>
            <strong>Conseil :</strong> les aides regionales evoluent frequemment et sont parfois limitees dans le temps ou en nombre de beneficiaires. Consultez le site de votre region ou contactez votre maison de l&apos;environnement locale pour connaitre les dispositifs en vigueur au moment de votre achat.
          </p>

          <h3>Aides metropolitaines et communales</h3>
          <p>
            Certaines metropoles et communes offrent des aides supplementaires :
          </p>
          <ul>
            <li><strong>Metropole de Lyon :</strong> aide pouvant atteindre 2 000 euros, sous conditions de revenus</li>
            <li><strong>Ville de Paris :</strong> aide a la mobilite propre de 400 a 600 euros (en sus des aides Ile-de-France)</li>
            <li><strong>Metropole de Grenoble :</strong> prime de 1 500 euros pour les residents de la ZFE</li>
            <li><strong>Metropole de Strasbourg :</strong> aide de 2 500 euros pour les menages en ZFE</li>
            <li><strong>Nantes Metropole :</strong> aide de 1 000 euros pour les professionnels et les particuliers</li>
          </ul>

          <h2>Etape 5 : Les avantages fiscaux pour les entreprises</h2>
          <p>
            Les entreprises beneficient d&apos;un cadre fiscal particulierement avantageux pour l&apos;acquisition de vehicules electriques. En 2026, les principaux avantages sont les suivants :
          </p>

          <h3>Exoneration de la taxe sur les vehicules de societe (TVS)</h3>
          <p>
            Les vehicules electriques dont les emissions de CO2 sont inferieures a 20 g/km sont <strong>totalement exoneres de TVS</strong>. Pour un vehicule de societe thermique, la TVS peut representer 1 000 a 5 000 euros par an selon la puissance et les emissions. C&apos;est donc une economie annuelle considerable.
          </p>

          <h3>Amortissement fiscal majore</h3>
          <p>
            Le plafond d&apos;amortissement deductible pour un vehicule electrique est de <strong>30 000 euros</strong>, contre 18 300 euros pour un vehicule emettant moins de 20 g/km de CO2 (hybride rechargeable) et 9 900 euros pour un vehicule emettant plus de 160 g/km. Ce plafond majore permet de deduire davantage du resultat fiscal.
          </p>

          <h3>Avantage en nature reduit pour les salaries</h3>
          <p>
            Lorsqu&apos;une entreprise met un vehicule electrique a disposition d&apos;un salarie pour un usage personnel, la valeur de l&apos;avantage en nature est calculee apres un <strong>abattement de 50 %</strong>, dans la limite de 1 800 euros par an. De plus, la mise a disposition d&apos;une borne de recharge au domicile du salarie et la prise en charge de l&apos;electricite sont exonerees d&apos;impot et de cotisations sociales. Cela represente un avantage significatif pour le salarie et un argument de recrutement pour l&apos;entreprise.
          </p>

          <h3>Recuperation de la TVA sur l&apos;electricite</h3>
          <p>
            Contrairement au carburant (TVA recuperable a 80 % pour le gazole, non recuperable pour l&apos;essence), la TVA sur l&apos;electricite utilisee pour la recharge des vehicules d&apos;entreprise est <strong>integralement recuperable</strong>. Sur un budget recharge de 1 500 euros/an, cela represente une economie de 250 euros de TVA recuperee.
          </p>

          <h2>Etape 6 : Les aides a l&apos;installation d&apos;une borne de recharge</h2>
          <p>
            Completer l&apos;achat d&apos;un vehicule electrique par l&apos;installation d&apos;une borne de recharge a domicile est fortement recommande, et plusieurs aides existent pour en reduire le cout :
          </p>
          <ul>
            <li><strong>Credit d&apos;impot de 300 euros</strong> pour l&apos;installation d&apos;une borne de recharge a domicile (residence principale ou secondaire)</li>
            <li><strong>Taux de TVA reduit a 5,5 %</strong> pour les travaux d&apos;installation dans un logement de plus de 2 ans</li>
            <li><strong>Programme ADVENIR :</strong> prime couvrant jusqu&apos;a 50 % du cout d&apos;installation, plafonnee a 960 euros pour une solution individuelle en copropriete, et a 1 660 euros pour une solution partagee</li>
            <li><strong>Aides locales :</strong> certaines collectivites ajoutent une aide supplementaire (par exemple, la metropole de Lyon propose 500 euros supplementaires pour l&apos;installation d&apos;une wallbox)</li>
          </ul>

          <h2>Comment cumuler les aides : le recapitulatif</h2>
          <p>
            Voici le cumul maximal theorique pour un menage tres modeste (RFR/part inferieur a 7 700 euros) achetant un VE eligible a moins de 47 000 euros en Ile-de-France, avec mise au rebut d&apos;un ancien vehicule Crit&apos;Air 4 :
          </p>
          <ul>
            <li>Bonus ecologique : 7 000 euros</li>
            <li>Prime a la conversion : 5 000 euros</li>
            <li>Aide Ile-de-France : 6 000 euros</li>
            <li><strong>Total : 18 000 euros d&apos;aides</strong></li>
          </ul>
          <p>
            Pour un vehicule comme la Citroen e-C3 a 23 300 euros, le prix net apres toutes les aides serait de <strong>5 300 euros</strong>. C&apos;est un niveau de soutien exceptionnel qui rend l&apos;electrique accessible a pratiquement tous les budgets.
          </p>
          <p>
            <strong>Important :</strong> le cumul des aides est soumis a la regle de non-depassement. En aucun cas, le total des aides ne peut depasser le prix d&apos;achat du vehicule. De plus, certaines aides regionales sont soumises a des conditions specifiques supplementaires (residence dans une ZFE, anciennete de residence, etc.). Verifiez chaque condition aupres de l&apos;organisme concerne avant de compter sur un cumul maximal.
          </p>

          <h2>Demarches administratives : comment demander les aides</h2>
          <p>
            La bonne nouvelle est que le processus de demande s&apos;est considerablement simplifie ces dernieres annees :
          </p>
          <ul>
            <li><strong>Bonus ecologique :</strong> le plus souvent, il est directement deduit du prix par le concessionnaire lors de la facturation. Si ce n&apos;est pas le cas, vous pouvez en faire la demande en ligne sur le site de l&apos;ASP (Agence de Services et de Paiement) dans les 6 mois suivant la facturation.</li>
            <li><strong>Prime a la conversion :</strong> meme demarche que le bonus, via le site de l&apos;ASP. Vous devrez fournir le certificat de destruction du vehicule ancien.</li>
            <li><strong>Leasing social :</strong> inscription en ligne sur la plateforme dediee du gouvernement, suivie d&apos;une prise de rendez-vous chez un concessionnaire participant.</li>
            <li><strong>Aides regionales :</strong> procedures variables selon les regions. Generalement, une demande en ligne sur le site de la region, avec fourniture de pieces justificatives (avis d&apos;imposition, facture du vehicule, carte grise).</li>
            <li><strong>Credit d&apos;impot borne :</strong> a declarer lors de votre declaration de revenus annuelle, avec la facture de l&apos;installateur.</li>
          </ul>
          <p>
            <strong>Conseil :</strong> conservez soigneusement tous les documents relatifs a l&apos;achat (facture detaillee, carte grise, certificat de conformite, avis d&apos;imposition, justificatif de domicile). Les delais de traitement des aides varient de 1 semaine (bonus avance par le concessionnaire) a 3 mois (aides regionales versees par virement).
          </p>
          <p>
            Notre simulateur ci-dessus vous donne une estimation personnalisee des aides nationales auxquelles vous avez droit. Pour les aides regionales et locales, nous vous invitons a consulter le site de votre region et de votre commune, ou a utiliser le service en ligne de l&apos;ADEME qui centralise progressivement l&apos;ensemble des aides disponibles sur le territoire.
          </p>
        </div>

        <AuteurBio />
        <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
          <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>Ministère de la Transition écologique — Décret n° 2024-102 relatif au bonus écologique, modifié 2026</li>
            <li>Service-Public.fr — Fiche pratique « Bonus écologique pour un véhicule électrique »</li>
            <li>ASP — Conditions de la prime à la conversion et formulaire de demande en ligne</li>
            <li>Régions de France — Dispositifs d&apos;aide à l&apos;achat de véhicules propres par région</li>
            <li>Code général des impôts, art. 200 quater C — Crédit d&apos;impôt borne de recharge</li>
            <li>ADEME — Simulateur national des aides à la mobilité propre</li>
          </ul>
        </div>
      </article>
    </>
  );
}
