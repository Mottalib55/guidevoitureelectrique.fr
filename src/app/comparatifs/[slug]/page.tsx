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
    title: c.titre,
    description: c.metaDescription,
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
      question: `Quelle est la moins chère entre la ${m1.modele} et la ${m2.modele} ?`,
      answer: `La ${moinsCher.modele} est la moins chère à ${euro(moinsCher.prixBase)}, contre ${euro(moinsCher === m1 ? m2.prixBase : m1.prixBase)} pour la ${moinsCher === m1 ? m2.modele : m1.modele}. ${m1.aidesEligible && m2.aidesEligible ? "Les deux modèles sont éligibles au bonus écologique de 4 000 €." : ""}`,
    },
    {
      question: `Laquelle a la meilleure autonomie : ${m1.modele} ou ${m2.modele} ?`,
      answer: `La ${plusAutonome.modele} offre la meilleure autonomie réelle avec ${plusAutonome.autonomieReelle} km, contre ${plusAutonome === m1 ? m2.autonomieReelle : m1.autonomieReelle} km pour la ${plusAutonome === m1 ? m2.modele : m1.modele}.`,
    },
    {
      question: `Laquelle se recharge le plus vite ?`,
      answer: `La ${chargeRapide.modele} accepte la charge rapide la plus élevée à ${chargeRapide.chargeRapideKw} kW. Temps de charge rapide : ${m1.modele} : ${m1.tempsChargeRapide} ; ${m2.modele} : ${m2.tempsChargeRapide}.`,
    },
    {
      question: `Laquelle a le plus grand coffre ?`,
      answer: `La ${plusGrandCoffre.modele} dispose d'un coffre de ${plusGrandCoffre.coffre} litres, contre ${plusGrandCoffre === m1 ? m2.coffre : m1.coffre} litres pour la ${plusGrandCoffre === m1 ? m2.modele : m1.modele}.`,
    },
    {
      question: `${m1.modele} vs ${m2.modele} : laquelle choisir ?`,
      answer: `Le choix dépend de vos priorités. La ${moinsCher.modele} est plus abordable (${euro(moinsCher.prixBase)}), tandis que la ${plusAutonome.modele} offre une meilleure autonomie (${plusAutonome.autonomieReelle} km réels). Consultez notre comparatif détaillé ci-dessus pour choisir selon votre profil.`,
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
      v1: `${m1.batterieKwh} kWh`,
      v2: `${m2.batterieKwh} kWh`,
    },
    {
      label: "Consommation",
      v1: `${m1.conso} kWh/100 km`,
      v2: `${m2.conso} kWh/100 km`,
    },
    {
      label: "Charge rapide DC",
      v1: `${m1.chargeRapideKw} kW`,
      v2: `${m2.chargeRapideKw} kW`,
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
      v1: `${m1.puissanceCh} ch (${m1.puissanceKw} kW)`,
      v2: `${m2.puissanceCh} ch (${m2.puissanceKw} kW)`,
    },
    { label: "Coffre", v1: `${m1.coffre} L`, v2: `${m2.coffre} L` },
    { label: "Poids", v1: `${m1.poids} kg`, v2: `${m2.poids} kg` },
    {
      label: "Longueur",
      v1: `${(m1.longueur / 1000).toFixed(2)} m`,
      v2: `${(m2.longueur / 1000).toFixed(2)} m`,
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
            {m1.modele} ({euro(m1.prixBase)}, {m1.autonomieReelle} km réels) vs{" "}
            {m2.modele} ({euro(m2.prixBase)}, {m2.autonomieReelle} km réels),
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
            Financement : {m1.modele}
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
            Financement : {m2.modele}
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
            Questions fréquentes : {c.titre}
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
                Site officiel {m1.marque} : {m1.modele}
              </a>
            </li>
            <li>
              <a
                href={m2.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site officiel {m2.marque} : {m2.modele}
              </a>
            </li>
            <li>
              <a
                href="https://www.service-public.fr/particuliers/vosdroits/F34014"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bonus écologique : service-public.fr
              </a>
            </li>
          </ul>
          <p className="date-maj">
            Dernière mise à jour :{" "}
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
