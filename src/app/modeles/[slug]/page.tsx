import { fit, TITLE_RANGE, DESC_RANGE } from "@/lib/snippet";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { modeles, getModeleBySlug, getAlternatives } from "@/data/modeles";
import { getMarqueBySlug } from "@/data/marques";
import { vehicleJsonLd, faqJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FinancementVE from "@/components/FinancementVE";
import CarteModele from "@/components/CarteModele";
import AuteurBio from "@/components/AuteurBio";
import LastUpdated from "@/components/LastUpdated";
import { dec } from "@/lib/format";

function formatChargeTime(hours: number): string {
  if (hours < 1) {
    return `${Math.round(hours * 60)} min`;
  }
  const h = Math.floor(hours);
  const min = Math.round((hours - h) * 60);
  if (min === 0) return `${h}h`;
  return `${h}h${min.toString().padStart(2, "0")}`;
}

export function generateStaticParams() {
  return modeles.map((m) => ({ slug: m.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = getModeleBySlug(slug);
  if (!m) return {};
  const euro = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(m.prixBase);

  const isAVenir = m.statut === "a-venir";

  const km = `${m.autonomieReelle} km`;
  const title = isAVenir
    ? fit(`${m.modele} ${m.sortiePrevue ?? m.annee}`, [
        ` : prix estimé ${euro}, date de sortie et fiche`,
        ` : prix estimé ${euro}, sortie et fiche`,
        ` : prix estimé, date de sortie et fiche`,
        ` : prix estimé, sortie et fiche`,
        ` : prix et date de sortie`,
        ` : prix estimé`,
      ], TITLE_RANGE, "titre")
    : fit(m.modele, [
        ` : prix dès ${euro}, autonomie réelle et avis 2026`,
        ` : prix dès ${euro}, autonomie et avis 2026`,
        ` : prix dès ${euro}, fiche et avis 2026`,
        ` : prix ${euro}, autonomie et avis 2026`,
        ` 2026 : prix dès ${euro} et autonomie`,
        ` 2026 : prix, autonomie et avis`,
        ` 2026 : prix dès ${euro}`,
        ` 2026 : prix et autonomie`,
        ` : prix et avis 2026`,
      ], TITLE_RANGE, "titre");
  const description = isAVenir
    ? fit(`${m.modele} : prix estimé ${euro}, ${km} d'autonomie réelle, sortie ${m.sortiePrevue ?? m.annee}.`, [
        ` Fiche technique, alternatives déjà disponibles et financement en LOA ou LLD.`,
        ` Fiche technique, alternatives disponibles et financement LOA ou LLD.`,
        ` Fiche technique, alternatives et financement en LOA ou LLD.`,
        ` Fiche technique, alternatives et financement LOA/LLD.`,
        ` Fiche technique et alternatives.`,
      ], DESC_RANGE, "description")
    : fit(`${m.modele} dès ${euro} : ${km} réels, batterie ${dec(m.batterieKwh)} kWh, charge rapide ${dec(m.chargeRapideKw)} kW.`, [
        ` Fiche technique complète, calculateur LOA/LLD et meilleures alternatives du marché.`,
        ` Fiche technique complète, calculateur LOA/LLD et meilleures alternatives en 2026.`,
        ` Fiche technique complète, simulateur LOA/LLD et les meilleures alternatives.`,
        ` Fiche technique complète, calculateur LOA/LLD et meilleures alternatives.`,
        ` Fiche technique, calculateur LOA/LLD et meilleures alternatives.`,
        ` Fiche technique, calculateur LOA/LLD et alternatives.`,
        ` Fiche technique, LOA/LLD et alternatives.`,
        ` Fiche, LOA/LLD et alternatives.`,
        ` Fiche et alternatives.`,
      ], DESC_RANGE, "description");

  return buildMetadata({
    title,
    description,
    path: `/modeles/${m.slug}/`,
  });
}

function getFaqs(m: ReturnType<typeof getModeleBySlug>) {
  if (!m) return [];
  const euro = (n: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  const isAVenir = m.statut === "a-venir";

  return [
    {
      question: `Quel est le prix de la ${m.modele} ?`,
      answer: isAVenir
        ? `Le prix de la ${m.modele} est estimé à environ ${euro(m.prixBase)}. Ce tarif reste provisoire et sera confirmé à l'approche du lancement commercial${m.sortiePrevue ? `, prévu en ${m.sortiePrevue}` : ""} ; les grilles définitives s'écartent souvent de quelques centaines d'euros des annonces initiales. ${m.aidesEligible ? `Ce modèle devrait être éligible au bonus écologique de 4\u00a0000\u00a0€, soit un ticket d'entrée ramené autour de ${euro(Math.max(0, m.prixBase - 4000))}.` : "Ce modèle ne devrait pas être éligible au bonus écologique, compte tenu de son lieu de production."} S'y ajouteront l'assurance, la carte grise et, le cas échéant, l'installation d'une wallbox.`
        : `La ${m.modele} est disponible à partir de ${euro(m.prixBase)} en neuf.${m.prixOccasion ? ` En occasion, comptez à partir de ${euro(m.prixOccasion)}, soit environ ${Math.round((1 - m.prixOccasion / m.prixBase) * 100)}\u00a0% de moins.` : ""} ${m.aidesEligible ? `Ce prix ouvre droit au bonus écologique de 4\u00a0000\u00a0€, qui ramène la facture à ${euro(Math.max(0, m.prixBase - 4000))}.` : "Ce modèle n'ouvre pas droit au bonus écologique, son score environnemental ne remplissant pas les conditions fixées depuis 2024."} À ce montant s'ajoutent l'assurance, la carte grise, gratuite pour un véhicule électrique dans la plupart des régions, et l'éventuelle installation d'une wallbox, entre 1\u00a0200 et 1\u00a0800\u00a0€ posée.`,
    },
    {
      question: `Quelle est l'autonomie réelle de la ${m.modele} ?`,
      answer: isAVenir
        ? `L'autonomie WLTP annoncée est d'environ ${m.autonomieWLTP} km, une estimation constructeur. En conditions réelles, mélange de ville et de route, on peut s'attendre à environ ${m.autonomieReelle} km, soit un écart d'à peu près ${Math.round((1 - m.autonomieReelle / m.autonomieWLTP) * 100)} % avec l'homologation. Sur autoroute à 130 km/h et par temps froid, comptez encore 20 à 30 % de moins. Ces valeurs seront confirmées lors des premiers essais indépendants.`
        : `L'autonomie WLTP annoncée est de ${m.autonomieWLTP} km. En conditions réelles, ville et route hors autoroute, comptez environ ${m.autonomieReelle} km, soit ${Math.round((1 - m.autonomieReelle / m.autonomieWLTP) * 100)} % de moins que l'homologation. Sur autoroute à 130 km/h, l'autonomie baisse encore de 20 à 30 %, et le froid en retire jusqu'à 20 % de plus. Avec ${dec(m.batterieKwh)} kWh de batterie et ${dec(m.conso)} kWh/100 km de consommation moyenne, ce chiffre reste cohérent.`,
    },
    {
      question: `Combien de temps pour recharger la ${m.modele} ?`,
      answer: `En charge rapide DC (${dec(m.chargeRapideKw)} kW au maximum) : ${m.tempsChargeRapide}. En charge AC sur borne publique ou wallbox domestique : ${m.tempsChargeAC}. Avec une batterie de ${dec(m.batterieKwh)} kWh, une charge complète à domicile au tarif heures creuses (0,20 €/kWh) revient à environ ${Math.round(m.batterieKwh * 0.2)} €, contre deux à trois fois plus sur une borne rapide d'autoroute, où le kilowattheure dépasse souvent 0,55 €.`,
    },
    {
      question: `La ${m.modele} est-elle éligible au bonus écologique ?`,
      answer: m.aidesEligible
        ? `Oui, la ${m.modele} est éligible au bonus écologique de 4 000 € en 2026. Le bonus dépend du score environnemental du véhicule, qui tient compte du lieu de production et du transport, et d'un prix catalogue inférieur à 47 000 €. Sur un prix de départ de ${euro(m.prixBase)}, il ramène la facture à ${euro(Math.max(0, m.prixBase - 4000))}, avant la prime à la conversion éventuelle et les aides de votre région.`
        : `Non, la ${m.modele} n'est pas éligible au bonus écologique, principalement à cause de son lieu de fabrication (${m.origine === "Chine" ? "Chine" : "hors conditions d'éligibilité"}), qui pèse dans le score environnemental exigé depuis 2024. Le prix reste donc de ${euro(m.prixBase)}. Le leasing social et les aides locales, eux, ne dépendent pas de ce score et peuvent rester accessibles selon votre région et vos revenus.`,
    },
    {
      question: `Quelle est la consommation de la ${m.modele} ?`,
      answer: `La ${m.modele} consomme en moyenne ${dec(m.conso)} kWh/100 km en cycle mixte. Pour 12 000 km par an rechargés à domicile à 0,20 €/kWh, cela représente environ ${Math.round((12000 / 100) * m.conso * 0.2)} € par an, contre à peu près ${Math.round((12000 / 100) * m.conso * 0.55)} € en ne rechargeant que sur borne rapide. Une thermique équivalente consommant 6 l/100 km coûte près de 1 300 € de carburant sur la même distance.`,
    },
    {
      question: `Quelles sont les alternatives à la ${m.modele} ?`,
      answer: `Dans le segment ${m.segment.toLowerCase()}, les principales alternatives à la ${m.modele} sont : ${getAlternatives(m, 3).map((a) => `la ${a.modele} (${euro(a.prixBase)}, ${a.autonomieReelle} km réels)`).join(", ")}. Le bon critère de choix n'est pas l'autonomie maximale mais le coût au kilomètre sur cinq ans, qui dépend du prix d'achat, de la consommation et de la valeur de revente. Nos fiches détaillées donnent ces trois éléments pour chaque modèle.`,
    },
  ];
}

export default async function PageModele({ params }: Props) {
  const { slug } = await params;
  const m = getModeleBySlug(slug);
  if (!m) notFound();

  const marque = getMarqueBySlug(m.marqueSlug);
  const alternatives = getAlternatives(m);
  const faqs = getFaqs(m);
  const euro = (n: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vehicleJsonLd(m)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqs)),
        }}
      />

      <Breadcrumb
        items={[
          { name: m.marque, href: "/marques/" + m.marqueSlug + "/" },
          { name: m.modele, href: "/modeles/" + m.slug + "/" },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        {/* ─── EN-TÊTE + VERDICT ────────────────────────────────── */}
        <header style={{ marginBottom: 32 }}>
          <p
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--faint)",
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            {m.marque}, {m.segment}
          </p>
          <LastUpdated />
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 42px)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            {m.modele}
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 640,
              lineHeight: 1.5,
            }}
          >
            À partir de <strong>{euro(m.prixBase)}</strong>, {m.autonomieReelle} km
            d&apos;autonomie réelle, batterie {dec(m.batterieKwh)} kWh, note{" "}
            <strong>{m.note}/10</strong>
          </p>
        </header>

        {/* ─── BANDEAU "À VENIR" ─────────────────────────────────── */}
        {m.statut === "a-venir" && (
          <div
            style={{
              background: "linear-gradient(90deg, #fff8e1, #fff3cd)",
              border: "1.5px solid #f0d060",
              borderRadius: 12,
              padding: "16px 20px",
              marginBottom: 24,
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 22, lineHeight: 1 }}>&#128338;</span>
            <div>
              <strong style={{ color: "#8a6d00", fontSize: 15 }}>
                Modèle à venir, sortie prévue {m.sortiePrevue ?? m.annee}
              </strong>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: 13,
                  color: "#6b5500",
                  lineHeight: 1.45,
                }}
              >
                Les données techniques et le prix affiché sont des estimations
                basées sur les informations communiquées par le constructeur. Les
                spécifications définitives seront confirmées à l&apos;approche du
                lancement commercial.
              </p>
            </div>
          </div>
        )}

        {/* ─── ENCADRÉ VERDICT ──────────────────────────────────── */}
        <div className="encadre-verdict">
          <h2>Fiche en bref</h2>
          <div className="encadre-verdict-grid">
            <div className="encadre-verdict-item">
              <div className="encadre-verdict-val">{euro(m.prixBase)}</div>
              <div className="encadre-verdict-lbl">Prix neuf</div>
            </div>
            {m.prixOccasion && (
              <div className="encadre-verdict-item">
                <div className="encadre-verdict-val">
                  dès {euro(m.prixOccasion)}
                </div>
                <div className="encadre-verdict-lbl">Occasion</div>
              </div>
            )}
            <div className="encadre-verdict-item">
              <div className="encadre-verdict-val">{m.autonomieReelle} km</div>
              <div className="encadre-verdict-lbl">Autonomie réelle</div>
            </div>
            <div className="encadre-verdict-item">
              <div className="encadre-verdict-val">{dec(m.chargeRapideKw)} kW</div>
              <div className="encadre-verdict-lbl">Charge rapide max</div>
            </div>
            <div className="encadre-verdict-item">
              <div className="encadre-verdict-val">{m.note}/10</div>
              <div className="encadre-verdict-lbl">Notre note</div>
            </div>
            <div className="encadre-verdict-item">
              <div className="encadre-verdict-val">
                {m.aidesEligible ? "Oui" : "Non"}
              </div>
              <div className="encadre-verdict-lbl">Bonus écologique</div>
            </div>
          </div>
        </div>

        {/* ─── CALCULATEUR DE FINANCEMENT ───────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <FinancementVE modele={m.modele} prixBase={m.prixBase} />
        </section>

        {/* ─── CONTENU RÉDACTIONNEL ─────────────────────────────── */}
        <div className="prose">
          <h2>Présentation de la {m.modele}</h2>
          {m.description.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h2>Prix neuf et occasion</h2>
          <p>
            La {m.modele} est disponible à partir de <strong>{euro(m.prixBase)}</strong> en
            neuf (tarif constructeur, hors options).
            {m.aidesEligible && (
              <> Après déduction du bonus écologique de 4 000 €, le prix effectif descend
                à <strong>{euro(m.prixBase - 4000)}</strong>.</>
            )}
            {m.prixOccasion && (
              <> Sur le marché de l&apos;occasion, les premiers exemplaires se trouvent à
                partir de <strong>{euro(m.prixOccasion)}</strong> (prix constaté en juin 2026,
                variable selon kilométrage et état).</>
            )}
          </p>

          <h2>Autonomie réelle vs WLTP</h2>
          <p>
            {m.marque} annonce une autonomie WLTP de <strong>{m.autonomieWLTP} km</strong>.
            En conditions réelles (cycle mixte ville + route, température modérée),
            comptez environ <strong>{m.autonomieReelle} km</strong>, soit environ{" "}
            {Math.round((m.autonomieReelle / m.autonomieWLTP) * 100)} % de
            l&apos;autonomie annoncée. Sur autoroute à 130 km/h, l&apos;autonomie peut
            descendre à environ {Math.round(m.autonomieReelle * 0.7)} km en raison de la
            résistance aérodynamique accrue.
          </p>
          <p>
            La batterie de <strong>{dec(m.batterieKwh)} kWh</strong> permet une consommation
            moyenne de <strong>{dec(m.conso)} kWh/100 km</strong> en cycle mixte.
          </p>

          <h2>Recharge : temps et coût</h2>
          <p>
            La {m.modele} accepte la charge rapide DC jusqu&apos;à{" "}
            <strong>{dec(m.chargeRapideKw)} kW</strong>. Temps de charge rapide :{" "}
            <strong>{m.tempsChargeRapide}</strong>. En courant alternatif (borne domestique
            ou wallbox) : <strong>{m.tempsChargeAC}</strong>.
          </p>
          <p>
            Coût de recharge estimé pour 12 000 km/an à domicile (0,20 €/kWh) :{" "}
            <strong>{euro(Math.round((12000 / 100) * m.conso * 0.2))}/an</strong>, soit
            environ {euro(Math.round(((12000 / 100) * m.conso * 0.2) / 12))}/mois.
            Sur borne rapide publique (~0,45 €/kWh), ce coût monte à environ{" "}
            {euro(Math.round((12000 / 100) * m.conso * 0.45))}/an.
          </p>

          <h3>Temps de recharge estimé : {m.modele}</h3>
          <div className="table-wrap table-recharge">
            <table>
              <thead>
                <tr>
                  <th>Type de charge</th>
                  <th>Puissance</th>
                  <th>Temps estimé</th>
                  <th>Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="table-section-header">Recharge à domicile (AC), 0 à 100 %</td>
                </tr>
                <tr>
                  <td>Prise domestique</td>
                  <td>2,3 kW</td>
                  <td><strong>{formatChargeTime(m.batterieKwh / 2.3)}</strong></td>
                  <td>Dépannage uniquement</td>
                </tr>
                <tr>
                  <td>Prise renforcée</td>
                  <td>3,7 kW</td>
                  <td><strong>{formatChargeTime(m.batterieKwh / 3.7)}</strong></td>
                  <td>Charge nocturne (lente)</td>
                </tr>
                <tr>
                  <td>Wallbox monophasé</td>
                  <td>7,4 kW</td>
                  <td><strong>{formatChargeTime(m.batterieKwh / 7.4)}</strong></td>
                  <td>Installation standard</td>
                </tr>
                <tr>
                  <td>Wallbox triphasé</td>
                  <td>11 kW</td>
                  <td><strong>{formatChargeTime(m.batterieKwh / 11)}</strong></td>
                  <td>Installation recommandée</td>
                </tr>
                <tr>
                  <td>Wallbox triphasé</td>
                  <td>22 kW</td>
                  <td><strong>{formatChargeTime(m.batterieKwh / 22)}</strong></td>
                  <td>Si le véhicule accepte 22 kW AC</td>
                </tr>
                <tr>
                  <td colSpan={4} className="table-section-header">Charge rapide (DC), 10 à 80 %</td>
                </tr>
                <tr>
                  <td>Borne publique</td>
                  <td>50 kW</td>
                  <td><strong>{formatChargeTime((m.batterieKwh * 0.7) / (Math.min(50, m.chargeRapideKw) * 0.85))}</strong></td>
                  <td>Centres commerciaux</td>
                </tr>
                {m.chargeRapideKw >= 100 && (
                  <tr>
                    <td>Borne rapide</td>
                    <td>100 kW</td>
                    <td><strong>{formatChargeTime((m.batterieKwh * 0.7) / (Math.min(100, m.chargeRapideKw) * 0.85))}</strong></td>
                    <td>Autoroute / réseau Ionity</td>
                  </tr>
                )}
                {m.chargeRapideKw >= 150 && (
                  <tr>
                    <td>Borne ultra-rapide</td>
                    <td>150 kW</td>
                    <td><strong>{formatChargeTime((m.batterieKwh * 0.7) / (150 * 0.85))}</strong></td>
                    <td>Supercharger / Ionity</td>
                  </tr>
                )}
                {m.chargeRapideKw > 150 && (
                  <tr>
                    <td>Borne max</td>
                    <td>{dec(m.chargeRapideKw)} kW</td>
                    <td><strong>{formatChargeTime((m.batterieKwh * 0.7) / (m.chargeRapideKw * 0.85))}</strong></td>
                    <td>Puissance maximale du véhicule</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: "var(--faint)", marginTop: 8 }}>
            Temps estimés dans des conditions optimales (température 20-25 °C, batterie préchauffée).
            En hiver, les temps peuvent augmenter de 20 à 40 %. La puissance réelle dépend
            de la borne, de la température et de l&apos;état de charge.
          </p>

          <h2>Batterie et technologie</h2>
          <p>
            La {m.modele} embarque une batterie de <strong>{dec(m.batterieKwh)} kWh</strong>{" "}
            alimentant un moteur de <strong>{m.puissanceCh} ch ({dec(m.puissanceKw)} kW)</strong>.
            Le poids total du véhicule atteint {m.poids} kg pour une longueur de{" "}
            {(m.longueur / 1000).toFixed(2).replace('.', ',')} m. Le coffre offre{" "}
            <strong>{m.coffre} litres</strong> de volume de chargement.
          </p>

          <h2>Points forts</h2>
          <ul>
            {m.pointsForts.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <h2>Points faibles</h2>
          <ul>
            {m.pointsFaibles.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          <h2>La {m.modele} au quotidien</h2>
          <p>
            Au quotidien, la {m.modele} offre une autonomie réelle de {m.autonomieReelle} km,
            ce qui couvre largement les besoins d&apos;un conducteur français moyen qui parcourt
            environ 37 km par jour. Avec sa batterie de {dec(m.batterieKwh)} kWh et sa consommation
            de {dec(m.conso)} kWh/100 km, une charge complète à domicile sur wallbox 7,4 kW prend{" "}
            {formatChargeTime(m.batterieKwh / 7.4)}, idéalement programmée en heures creuses
            (entre 22h et 6h) pour bénéficier d&apos;un tarif réduit d&apos;environ 0,15 €/kWh.
          </p>
          <p>
            Le coffre de {m.coffre} litres {m.coffre >= 450 ? "est généreux et permet de partir en week-end ou en vacances sans compromis sur les bagages" : m.coffre >= 300 ? "offre un volume correct pour un usage quotidien et les courses hebdomadaires" : "reste compact et convient à un usage essentiellement urbain"}.
            Avec un poids de {m.poids} kg pour une longueur de {(m.longueur / 1000).toFixed(2).replace('.', ',')} m,
            {m.longueur <= 4100
              ? " ce gabarit compact facilite les manœuvres en ville et le stationnement"
              : m.longueur <= 4500
              ? " ce format polyvalent s'adapte aussi bien à la ville qu'à la route"
              : " ce véhicule offre un espace intérieur confortable pour les longs trajets familiaux"}.
          </p>
          <p>
            Sur le plan de l&apos;entretien, la {m.modele} bénéficie de la simplicité mécanique
            des véhicules électriques : pas de vidange, pas de courroie de distribution, pas
            d&apos;embrayage. Les principaux postes d&apos;entretien se limitent aux pneumatiques
            (à vérifier tous les 15 000 km), au liquide de frein (tous les 2 ans) et aux
            filtres d&apos;habitacle. Le freinage régénératif réduit l&apos;usure des plaquettes
            de frein de 50 à 70 % par rapport à un véhicule thermique, ce qui diminue le budget
            entretien annuel à environ 200-300 € contre 600-900 € pour un modèle essence
            équivalent.
          </p>

          <h2>Performances et conduite</h2>
          <p>
            Avec {m.puissanceCh} ch ({dec(m.puissanceKw)} kW) disponibles instantanément grâce
            au couple immédiat du moteur électrique, la {m.modele}{" "}
            {m.puissanceCh >= 300
              ? "offre des performances sportives impressionnantes avec des accélérations foudroyantes"
              : m.puissanceCh >= 200
              ? "propose des reprises vives et un agrément de conduite supérieur à la plupart des thermiques équivalentes"
              : m.puissanceCh >= 130
              ? "assure des accélérations franches et suffisantes pour s'insérer sur autoroute en toute sérénité"
              : "délivre une puissance adaptée à un usage urbain et périurbain confortable"}.
            Le silence de fonctionnement et l&apos;absence de vibrations contribuent au confort
            général, notamment sur les longs trajets.
          </p>
          <p>
            Le freinage régénératif, réglable sur la plupart des modèles, permet de récupérer
            de l&apos;énergie au freinage et à la décélération. En mode « one pedal driving »,
            le conducteur peut gérer jusqu&apos;à 90 % de ses freinages sans toucher la pédale
            de frein, ce qui réduit la fatigue en conduite urbaine et améliore l&apos;efficience
            globale. En conditions réelles, le freinage régénératif peut récupérer entre 10 et
            20 % d&apos;autonomie supplémentaire selon le profil du parcours.
          </p>

          <h2>Sur la route des vacances</h2>
          <p>
            Pour les longs trajets, la {m.modele} accepte la charge rapide DC jusqu&apos;à{" "}
            {dec(m.chargeRapideKw)} kW.{" "}
            {m.chargeRapideKw >= 200
              ? "Cette puissance de charge élevée permet de récupérer environ 200 km d'autonomie en 15 minutes sur une borne compatible, rendant les arrêts autoroutiers à peine plus longs qu'un plein d'essence."
              : m.chargeRapideKw >= 130
              ? "Cette puissance permet de récupérer environ 100 km d'autonomie en 15-20 minutes, ce qui reste très acceptable pour les pauses autoroutières."
              : "La puissance de charge, bien que modérée, reste suffisante pour les trajets occasionnels avec des pauses de 30 à 45 minutes."}
          </p>
          <p>
            Pour un trajet type Paris-Lyon (465 km), comptez{" "}
            {m.autonomieReelle >= 450
              ? "un seul arrêt recharge d'environ 20-25 minutes"
              : m.autonomieReelle >= 350
              ? "un à deux arrêts recharge pour un total d'environ 30-45 minutes"
              : m.autonomieReelle >= 250
              ? "deux arrêts recharge pour un total d'environ 45 minutes à 1 heure"
              : "deux à trois arrêts recharge pour un total d'environ 1h à 1h30"}.
            Planifiez vos arrêts avec A Better Route Planner (ABRP) ou Chargemap pour optimiser
            votre itinéraire et les temps de charge. Le réseau français compte plus de 150 000
            points de charge publics, dont plus de 12 000 bornes rapides sur autoroute.
          </p>

          <h2>Valeur résiduelle et revente</h2>
          <p>
            {m.prixOccasion ? (
              <>
                Sur le marché de l&apos;occasion, la {m.modele} se négocie à partir de{" "}
                <strong>{euro(m.prixOccasion)}</strong>, ce qui représente une décote
                d&apos;environ {Math.round((1 - m.prixOccasion / m.prixBase) * 100)} % par
                rapport au prix neuf. Les véhicules électriques bénéficient d&apos;une décote
                qui se stabilise après les 2-3 premières années, grâce à la durabilité des
                batteries modernes garanties 8 ans ou 160 000 km. L&apos;état de santé (SOH) de
                la batterie est le critère déterminant pour la valeur de revente : un SOH
                supérieur à 90 % après 3 ans est excellent.
              </>
            ) : (
              <>
                En tant que modèle récent, la {m.modele} n&apos;a pas encore de cote d&apos;occasion
                établie. Les véhicules électriques récents conservent généralement bien leur valeur
                grâce à la forte demande et à la durabilité des batteries modernes, garanties 8 ans
                ou 160 000 km par la plupart des constructeurs.
              </>
            )}
          </p>

          <h2>Aides et bonus écologique</h2>
          <p>
            {m.aidesEligible ? (
              <>
                La {m.modele} est <strong>éligible au bonus écologique</strong> de 4 000 €
                (barème 2026). Elle peut également être éligible au leasing social à
                100 €/mois (sous conditions de revenus) et à la prime à la conversion si
                vous mettez au rebut un ancien véhicule thermique Crit&apos;Air 3 ou plus.
              </>
            ) : (
              <>
                La {m.modele} n&apos;est <strong>pas éligible au bonus écologique</strong>{" "}
                actuellement, en raison de son score environnemental insuffisant
                {m.origine === "Chine" && " (véhicule fabriqué en Chine)"}. Elle reste
                éligible à la prime à la conversion sous certaines conditions.
              </>
            )}
          </p>
          <p>
            Pour estimer vos aides personnalisées, utilisez notre{" "}
            <Link href="/outils/simulateur-aides/">simulateur d&apos;aides</Link>.
          </p>

          <h2>Coût de possession (TCO)</h2>
          <p>
            Le coût total de possession (TCO) de la {m.modele} sur 4 ans / 48 000 km
            inclut : achat (après aides), recharge, assurance (~650 €/an) et entretien
            (~250 €/an). Utilisez le calculateur de financement ci-dessus pour obtenir
            une estimation personnalisée selon votre mode de financement (comptant, crédit,
            LOA ou LLD).
          </p>
          <p>
            Pour comparer avec un véhicule thermique équivalent, consultez notre{" "}
            <Link href="/outils/comparateur-elec-thermique/">
              comparateur électrique vs thermique
            </Link>
            .
          </p>
        </div>

        {/* ─── TABLEAU TECHNIQUE ────────────────────────────────── */}
        <section style={{ marginTop: 48 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            Fiche technique complète
          </h2>
          <div className="table-wrap">
            <table>
              <tbody>
                <tr><td>Modèle</td><td><strong>{m.modele}</strong></td></tr>
                <tr><td>Marque</td><td><Link href={`/marques/${m.marqueSlug}/`}>{m.marque}</Link></td></tr>
                <tr><td>Année</td><td>{m.annee}</td></tr>
                <tr><td>Segment</td><td>{m.segment}</td></tr>
                <tr><td>Origine</td><td>{m.origine}</td></tr>
                <tr><td>Prix neuf</td><td><strong>{euro(m.prixBase)}</strong></td></tr>
                {m.prixOccasion && <tr><td>Prix occasion (dès)</td><td>{euro(m.prixOccasion)}</td></tr>}
                <tr><td>Autonomie WLTP</td><td>{m.autonomieWLTP} km</td></tr>
                <tr><td>Autonomie réelle</td><td><strong>{m.autonomieReelle} km</strong></td></tr>
                <tr><td>Batterie</td><td>{dec(m.batterieKwh)} kWh</td></tr>
                <tr><td>Consommation</td><td>{dec(m.conso)} kWh/100 km</td></tr>
                <tr><td>Puissance</td><td>{m.puissanceCh} ch ({dec(m.puissanceKw)} kW)</td></tr>
                <tr><td>Charge rapide DC</td><td>{dec(m.chargeRapideKw)} kW, {m.tempsChargeRapide}</td></tr>
                <tr><td>Charge AC</td><td>{m.tempsChargeAC}</td></tr>
                <tr><td>Coffre</td><td>{m.coffre} litres</td></tr>
                <tr><td>Poids</td><td>{m.poids} kg</td></tr>
                <tr><td>Longueur</td><td>{(m.longueur / 1000).toFixed(2).replace('.', ',')} m</td></tr>
                <tr><td>Bonus écologique</td><td>{m.aidesEligible ? "Éligible (4 000 €)" : "Non éligible"}</td></tr>
                <tr><td>Note</td><td><strong>{m.note}/10</strong></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── ALTERNATIVES ─────────────────────────────────────── */}
        {alternatives.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 24,
                marginBottom: 16,
              }}
            >
              Alternatives à la {m.modele}
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                marginBottom: 20,
              }}
            >
              Modèles du même segment, classés par proximité de prix.
            </p>
            <div className="grid-modeles">
              {alternatives.map((alt) => (
                <CarteModele key={alt.slug} modele={alt} />
              ))}
            </div>
          </section>
        )}

        {/* ─── CTA MONÉTISATION ─────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",   // une colonne sur mobile
            gap: 16,
            marginTop: 48,
          }}
        >
          <Link href="/acheter/loa-leasing/" className="cta-bloc" style={{ margin: 0 }}>
            <h3>Financer cette {m.modele}</h3>
            <p>Comparez les offres LOA et LLD pour ce modèle</p>
          </Link>
          <Link
            href="/acheter/assurance/"
            className="cta-bloc"
            style={{ margin: 0 }}
          >
            <h3>Assurer cette {m.modele}</h3>
            <p>Obtenez un devis assurance auto pour votre électrique</p>
          </Link>
        </div>

        {/* ─── FAQ ──────────────────────────────────────────────── */}
        <section className="faq-section">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 8,
            }}
          >
            Questions fréquentes : {m.modele}
          </h2>
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <h3 className="faq-question">{f.question}</h3>
              <p className="faq-answer">{f.answer}</p>
            </div>
          ))}
        </section>

        <AuteurBio />

        {/* ─── SOURCES ──────────────────────────────────────────── */}
        <div className="bloc-sources">
          <h3>Sources & liens officiels</h3>
          <ul>
            <li>
              <a
                href={m.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Source = accueil de la marque quand la fiche modèle n'existe plus */}
                {/^https?:\/\/[^/]+(\/[a-z]{0,6})?\/?$/.test(m.source) ? `Site officiel ${m.marque}` : `Fiche officielle ${m.marque} : ${m.modele}`}
              </a>
            </li>
            <li>
              <a
                href="https://www.service-public.fr/particuliers/vosdroits/F34014"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bonus écologique : service-public.fr
              </a>
            </li>
            <li>
              <a
                href="https://www.avere-france.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Avere-France : données immatriculations VE
              </a>
            </li>
            {marque && (
              <li>
                <a
                  href={marque.siteOfficiel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Site officiel {marque.nom}
                </a>
              </li>
            )}
          </ul>
        </div>
      </article>
    </>
  );
}
