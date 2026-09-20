import { fit, TITLE_RANGE, DESC_RANGE } from "@/lib/snippet";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { comparatifs, getComparatifBySlug } from "@/data/comparatifs";
import { getModeleBySlug } from "@/data/modeles";
import { faqJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FinancementVE from "@/components/FinancementVE";
import AuteurBio from "@/components/AuteurBio";
import LastUpdated from "@/components/LastUpdated";
import { dec } from "@/lib/format";

export function generateStaticParams() {
  return comparatifs.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparatifBySlug(slug);
  if (!c) return {};

  return buildMetadata({
    title: fit(c.titre, [
      " : comparatif 2026 prix, autonomie, recharge",
      " : comparatif 2026 prix et autonomie",
      " : comparatif prix et autonomie 2026",
      " : lequel choisir en 2026 ?",
      " : comparatif 2026",
      " en 2026 : lequel choisir ?",
      " en 2026",
      "",
    ], TITLE_RANGE, "titre"),
    description: fit(c.metaDescription, [
      "",
      " Prix, autonomie réelle, recharge et coût d'usage comparés.",
      " Prix, autonomie, recharge et coût d'usage comparés.",
      " Prix, autonomie et recharge comparés.",
      " Prix et autonomie comparés.",
      " Notre verdict chiffré et détaillé.",
      " Avec notre verdict chiffré.",
      " Notre verdict détaillé.",
      " Avec notre verdict.",
      " Notre verdict.",
      " Verdict.",
    ], DESC_RANGE, "description"),
    path: `/comparatifs/${c.slug}/`,
  });
}

function getFaqs(
  m1: NonNullable<ReturnType<typeof getModeleBySlug>>,
  m2: NonNullable<ReturnType<typeof getModeleBySlug>>
) {
  const moinsCher = m1.prixBase <= m2.prixBase ? m1 : m2;
  const plusAutonome =
    m1.autonomieReelle >= m2.autonomieReelle ? m1 : m2;
  const chargeRapide =
    m1.chargeRapideKw >= m2.chargeRapideKw ? m1 : m2;
  const plusGrandCoffre = m1.coffre >= m2.coffre ? m1 : m2;

  return [
    {
      question: `Quelle est la moins chère entre la ${m1.modele} et la ${m2.modele} ?`,
      answer: `La ${moinsCher.modele} est la moins chère à ${euro(moinsCher.prixBase)}, contre ${euro(moinsCher === m1 ? m2.prixBase : m1.prixBase)} pour la ${moinsCher === m1 ? m2.modele : m1.modele}, soit un écart de ${euro(Math.abs(m1.prixBase - m2.prixBase))}. ${m1.aidesEligible && m2.aidesEligible ? "Les deux modèles sont éligibles au bonus écologique de 4\u00a0000\u00a0€, qui ne change donc pas le classement." : m1.aidesEligible || m2.aidesEligible ? `Seule la ${m1.aidesEligible ? m1.modele : m2.modele} ouvre droit au bonus écologique de 4\u00a0000\u00a0€, ce qui peut inverser l'écart.` : "Aucun des deux n'ouvre droit au bonus écologique."} À l'achat, pensez aussi à la carte grise, gratuite pour un véhicule électrique dans la plupart des régions.`,
    },
    {
      question: `Laquelle à la meilleure autonomie : ${m1.modele} ou ${m2.modele} ?`,
      answer: `La ${plusAutonome.modele} offre la meilleure autonomie réelle avec ${plusAutonome.autonomieReelle} km, contre ${plusAutonome === m1 ? m2.autonomieReelle : m1.autonomieReelle} km pour la ${plusAutonome === m1 ? m2.modele : m1.modele}, soit ${Math.abs(m1.autonomieReelle - m2.autonomieReelle)} km d'écart. Ces valeurs correspondent à un usage mixte ville et route : sur autoroute à 130 km/h, les deux perdent 20 à 30 %, et l'écart se resserre si la consommation à haute vitesse diffère peu. Comparez aussi la vitesse de charge, qui compte davantage sur un long trajet.`,
    },
    {
      question: `${m1.modele} ou ${m2.modele} : laquelle se recharge le plus vite ?`,
      answer: `La ${chargeRapide.modele} accepte la puissance de charge la plus élevée, ${dec(chargeRapide.chargeRapideKw)} kW, contre ${dec(chargeRapide === m1 ? m2.chargeRapideKw : m1.chargeRapideKw)} kW pour l'autre. En pratique : ${m1.modele}, ${m1.tempsChargeRapide} ; ${m2.modele}, ${m2.tempsChargeRapide}. Sur un trajet de 600 km, cet écart se traduit surtout par la durée des pauses, pas par leur nombre, car les deux voitures repartent autour de 80 % de charge.`,
    },
    {
      question: `${m1.modele} ou ${m2.modele} : laquelle a le plus grand coffre ?`,
      answer: `La ${plusGrandCoffre.modele} dispose d'un coffre de ${plusGrandCoffre.coffre} litres, contre ${plusGrandCoffre === m1 ? m2.coffre : m1.coffre} litres pour la ${plusGrandCoffre === m1 ? m2.modele : m1.modele}, soit ${Math.abs(m1.coffre - m2.coffre)} litres d'écart. Rapporté à la longueur du véhicule (${m1.longueur} mm contre ${m2.longueur} mm), l'avantage n'est pas toujours là où on l'attend : une voiture plus courte peut mieux exploiter son volume grâce à un plancher plat.`,
    },
    {
      question: `${m1.modele} vs ${m2.modele} : laquelle choisir ?`,
      answer: `Le choix dépend de vos priorités. La ${moinsCher.modele} est plus abordable (${euro(moinsCher.prixBase)}), tandis que la ${plusAutonome.modele} offre une meilleure autonomie (${plusAutonome.autonomieReelle} km réels). Pour un usage urbain et périurbain, l'écart d'autonomie ne se ressent presque jamais et le prix décide ; pour des trajets autoroutiers réguliers, l'autonomie et la puissance de charge priment. Le comparatif détaillé ci-dessus reprend ces critères poste par poste.`,
    },
  ];
}

export default async function PageComparatif({ params }: Props) {
  const { slug } = await params;
  const c = getComparatifBySlug(slug);
  if (!c) notFound();

  const m1 = getModeleBySlug(c.modele1Slug);
  const m2 = getModeleBySlug(c.modele2Slug);
  if (!m1 || !m2) notFound();

  const faqs = getFaqs(m1, m2);

  const specs: { label: string; v1: string; v2: string }[] = [
    { label: "Prix neuf", v1: euro(m1.prixBase), v2: euro(m2.prixBase) },
    {
      label: "Prix après bonus",
      v1: m1.aidesEligible ? euro(m1.prixBase - 4000) : "Non éligible",
      v2: m2.aidesEligible ? euro(m2.prixBase - 4000) : "Non éligible",
    },
    {
      label: "Autonomie WLTP",
      v1: `${m1.autonomieWLTP} km`,
      v2: `${m2.autonomieWLTP} km`,
    },
    {
      label: "Autonomie réelle",
      v1: `${m1.autonomieReelle} km`,
      v2: `${m2.autonomieReelle} km`,
    },
    {
      label: "Batterie",
      v1: `${dec(m1.batterieKwh)} kWh`,
      v2: `${dec(m2.batterieKwh)} kWh`,
    },
    {
      label: "Consommation",
      v1: `${dec(m1.conso)} kWh/100 km`,
      v2: `${dec(m2.conso)} kWh/100 km`,
    },
    {
      label: "Charge rapide DC",
      v1: `${dec(m1.chargeRapideKw)} kW`,
      v2: `${dec(m2.chargeRapideKw)} kW`,
    },
    {
      label: "Temps charge rapide",
      v1: m1.tempsChargeRapide,
      v2: m2.tempsChargeRapide,
    },
    {
      label: "Charge AC",
      v1: m1.tempsChargeAC,
      v2: m2.tempsChargeAC,
    },
    {
      label: "Puissance",
      v1: `${m1.puissanceCh} ch (${dec(m1.puissanceKw)} kW)`,
      v2: `${m2.puissanceCh} ch (${dec(m2.puissanceKw)} kW)`,
    },
    { label: "Coffre", v1: `${m1.coffre} L`, v2: `${m2.coffre} L` },
    { label: "Poids", v1: `${m1.poids} kg`, v2: `${m2.poids} kg` },
    {
      label: "Longueur",
      v1: `${(m1.longueur / 1000).toFixed(2).replace('.', ',')} m`,
      v2: `${(m2.longueur / 1000).toFixed(2).replace('.', ',')} m`,
    },
    { label: "Segment", v1: m1.segment, v2: m2.segment },
    { label: "Origine", v1: m1.origine, v2: m2.origine },
    {
      label: "Bonus écologique",
      v1: m1.aidesEligible ? "Éligible" : "Non éligible",
      v2: m2.aidesEligible ? "Éligible" : "Non éligible",
    },
    { label: "Note", v1: `${m1.note}/10`, v2: `${m2.note}/10` },
  ];

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqs)),
        }}
      />

      <Breadcrumb
        items={[
          { name: "Comparatifs", href: "/comparatifs/" },
          { name: c.titre, href: `/comparatifs/${c.slug}/` },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        {/* ─── EN-TÊTE ─────────────────────────────────────────── */}
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
            Comparatif
          </p>
          <LastUpdated />
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(26px, 3.5vw, 40px)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            {c.h1}
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            {m1.modele} ({euro(m1.prixBase)}, {m1.autonomieReelle} km réels) vs{" "}
            {m2.modele} ({euro(m2.prixBase)}, {m2.autonomieReelle} km réels),
            Comparaison complète des prix, autonomie, recharge et coût de possession.
          </p>
        </header>

        {/* ─── TABLEAU COMPARATIF ──────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            Tableau comparatif complet
          </h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Caractéristique</th>
                  <th>
                    <Link href={`/modeles/${m1.slug}/`}>{m1.modele}</Link>
                  </th>
                  <th>
                    <Link href={`/modeles/${m2.slug}/`}>{m2.modele}</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((s) => (
                  <tr key={s.label}>
                    <td>{s.label}</td>
                    <td>
                      <strong>{s.v1}</strong>
                    </td>
                    <td>
                      <strong>{s.v2}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── ENCADRÉ VERDICT ────────────────────────────────── */}
        <div className="encadre-verdict" style={{ marginBottom: 48 }}>
          <h2>Verdict rapide</h2>
          <div className="encadre-verdict-grid">
            <div className="encadre-verdict-item">
              <div className="encadre-verdict-val">
                {m1.prixBase <= m2.prixBase ? m1.modele : m2.modele}
              </div>
              <div className="encadre-verdict-lbl">La moins chère</div>
            </div>
            <div className="encadre-verdict-item">
              <div className="encadre-verdict-val">
                {m1.autonomieReelle >= m2.autonomieReelle
                  ? m1.modele
                  : m2.modele}
              </div>
              <div className="encadre-verdict-lbl">La plus autonome</div>
            </div>
            <div className="encadre-verdict-item">
              <div className="encadre-verdict-val">
                {m1.chargeRapideKw >= m2.chargeRapideKw
                  ? m1.modele
                  : m2.modele}
              </div>
              <div className="encadre-verdict-lbl">Charge la plus rapide</div>
            </div>
            <div className="encadre-verdict-item">
              <div className="encadre-verdict-val">
                {m1.coffre >= m2.coffre ? m1.modele : m2.modele}
              </div>
              <div className="encadre-verdict-lbl">Le plus grand coffre</div>
            </div>
          </div>
        </div>

        {/* ─── CALCULATEURS DE FINANCEMENT ─────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            Financement : {m1.modele}
          </h2>
          <FinancementVE modele={m1.modele} prixBase={m1.prixBase} />
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            Financement : {m2.modele}
          </h2>
          <FinancementVE modele={m2.modele} prixBase={m2.prixBase} />
        </section>

        {/* ─── CONTENU RÉDACTIONNEL ───────────────────────────── */}
        <div className="prose">
          {c.contenu.split("\n\n").map((p, i) => {
            if (p.startsWith("## ")) {
              return (
                <h2 key={i}>{p.replace("## ", "")}</h2>
              );
            }
            return <p key={i}>{p}</p>;
          })}
        </div>

        {/* ─── FAQ ────────────────────────────────────────────── */}
        <section className="faq-section">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 8,
            }}
          >
            Questions fréquentes : {c.titre}
          </h2>
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <h3 className="faq-question">{f.question}</h3>
              <p className="faq-answer">{f.answer}</p>
            </div>
          ))}
        </section>

        <AuteurBio />

        {/* ─── LIENS VERS FICHES + SOURCES ────────────────────── */}
        <div className="bloc-sources">
          <h3>Fiches détaillées & sources</h3>
          <ul>
            <li>
              <Link href={`/modeles/${m1.slug}/`}>
                Fiche complète {m1.modele}
              </Link>
            </li>
            <li>
              <Link href={`/modeles/${m2.slug}/`}>
                Fiche complète {m2.modele}
              </Link>
            </li>
            <li>
              <a
                href={m1.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site officiel {m1.marque}{/^https?:\/\/[^/]+(\/[a-z]{0,6})?\/?$/.test(m1.source) ? "" : ` : ${m1.modele}`}
              </a>
            </li>
            <li>
              <a
                href={m2.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site officiel {m2.marque}{/^https?:\/\/[^/]+(\/[a-z]{0,6})?\/?$/.test(m2.source) ? "" : ` : ${m2.modele}`}
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
          </ul>
          <p className="date-maj">
            Dernière mise à jour :{" "}
            {new Date().toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </article>
    </>
  );
}
