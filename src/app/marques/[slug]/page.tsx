import { fit, TITLE_RANGE, DESC_RANGE } from "@/lib/snippet";
import { resumeMarque } from "@/lib/resume-citable";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { marques, getMarqueBySlug } from "@/data/marques";
import { getModelesByMarque } from "@/data/modeles";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import FaqSection from "@/components/FaqSection";
import CarteModele from "@/components/CarteModele";
import AuteurBio from "@/components/AuteurBio";
import LastUpdated from "@/components/LastUpdated";
import { dec } from "@/lib/format";

export function generateStaticParams() {
  return marques.map((m) => ({ slug: m.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = getMarqueBySlug(slug);
  if (!m) return {};

  return buildMetadata({
    title: fit(`${m.nom} électrique ${new Date().getFullYear()}`, [
      " : modèles, prix et autonomie réelle",
      " : tous les modèles, prix et autonomie",
      " : modèles, prix et autonomie",
      " : modèles, prix, autonomie",
      " : modèles et prix",
    ], TITLE_RANGE, "titre"),
    description: fit(`Tous les véhicules électriques ${m.nom} disponibles en France : prix, autonomie réelle, charge rapide.`, [
      " Fiches techniques, comparatif et financement LOA/LLD.",
      " Fiches techniques, comparatif et LOA/LLD.",
      " Fiches, comparatif et financement LOA/LLD.",
      " Fiches, comparatif et LOA/LLD.",
      " Fiches et comparatif.",
    ], DESC_RANGE, "description"),
    path: `/marques/${m.slug}/`,
  });
}

/**
 * FAQ de la page marque, construite sur le catalogue réel de la marque : nombre de
 * modèles, fourchette de prix et d'autonomie, éligibilité au bonus (RECETTE §12).
 */
function getFaqs(
  marque: NonNullable<ReturnType<typeof getMarqueBySlug>>,
  modeles: ReturnType<typeof getModelesByMarque>,
) {
  if (modeles.length === 0) return [];
  const euro = (n: number) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  const prix = modeles.map((m) => m.prixBase).sort((a, b) => a - b);
  const autos = modeles.map((m) => m.autonomieReelle).sort((a, b) => a - b);
  const moinsCher = modeles.find((m) => m.prixBase === prix[0])!;
  const plusEndurant = modeles.find((m) => m.autonomieReelle === autos[autos.length - 1])!;
  const eligibles = modeles.filter((m) => m.aidesEligible);
  const consoMoy = modeles.reduce((t, m) => t + m.conso, 0) / modeles.length;
  const chargeMax = Math.max(...modeles.map((m) => m.chargeRapideKw));

  return [
    {
      question: `Quels mod\u00e8les \u00e9lectriques ${marque.nom} sont disponibles ?`,
      answer: `Nous suivons ${modeles.length} mod\u00e8le${modeles.length > 1 ? "s" : ""} ${marque.nom} 100 % \u00e9lectrique${modeles.length > 1 ? "s" : ""} : ${modeles.slice(0, 5).map((m) => m.modele).join(", ")}${modeles.length > 5 ? ", entre autres" : ""}. Les prix s'\u00e9chelonnent de ${euro(prix[0])} \u00e0 ${euro(prix[prix.length - 1])} et les autonomies r\u00e9elles de ${autos[0]} km \u00e0 ${autos[autos.length - 1]} km, ce qui couvre aussi bien l'usage urbain que les trajets longue distance r\u00e9guliers.`,
    },
    {
      question: `Quelle est la ${marque.nom} \u00e9lectrique la moins ch\u00e8re ?`,
      answer: `La ${moinsCher.modele} ouvre la gamme \u00e0 ${euro(moinsCher.prixBase)}, avec ${moinsCher.autonomieReelle} km d'autonomie r\u00e9elle et une batterie de ${dec(moinsCher.batterieKwh)} kWh.${moinsCher.aidesEligible ? ` Elle ouvre droit au bonus \u00e9cologique de 4 000 \u20ac, soit ${euro(Math.max(0, moinsCher.prixBase - 4000))} apr\u00e8s aide.` : " Elle n'ouvre pas droit au bonus \u00e9cologique."} \u00c0 ce prix s'ajoutent l'assurance et, le cas \u00e9ch\u00e9ant, l'installation d'une wallbox.`,
    },
    {
      question: `Quelle ${marque.nom} a la meilleure autonomie ?`,
      answer: `La ${plusEndurant.modele} affiche la meilleure autonomie r\u00e9elle de la gamme, ${plusEndurant.autonomieReelle} km, pour ${plusEndurant.autonomieWLTP} km annonc\u00e9s en cycle WLTP. Sur autoroute \u00e0 130 km/h, comptez 20 \u00e0 30 % de moins, et davantage par temps froid. Sa batterie de ${dec(plusEndurant.batterieKwh)} kWh et sa consommation de ${dec(plusEndurant.conso)} kWh/100 km expliquent ce r\u00e9sultat.`,
    },
    {
      question: `Les ${marque.nom} \u00e9lectriques sont-elles \u00e9ligibles au bonus \u00e9cologique ?`,
      answer: eligibles.length === modeles.length
        ? `Oui, les ${modeles.length} mod\u00e8les ${marque.nom} que nous suivons ouvrent droit au bonus \u00e9cologique de 4 000 \u20ac en 2026. Le bonus d\u00e9pend du score environnemental, qui tient compte du lieu de production et du transport, et d'un prix catalogue inf\u00e9rieur \u00e0 47 000 \u20ac. Les aides r\u00e9gionales et le leasing social peuvent s'y ajouter selon vos revenus.`
        : eligibles.length === 0
        ? `Non. Aucun des ${modeles.length} mod\u00e8les ${marque.nom} que nous suivons n'atteint le score environnemental exig\u00e9 depuis 2024, principalement en raison du lieu de production (${marque.pays}). Le leasing social et les aides locales, qui ne d\u00e9pendent pas de ce score, restent en revanche accessibles selon votre r\u00e9gion et vos revenus.`
        : `En partie : ${eligibles.length} mod\u00e8le${eligibles.length > 1 ? "s" : ""} sur ${modeles.length} ouvre${eligibles.length > 1 ? "nt" : ""} droit au bonus \u00e9cologique de 4 000 \u20ac, \u00e0 savoir ${eligibles.slice(0, 3).map((m) => m.modele).join(", ")}. Le crit\u00e8re d\u00e9cisif est le score environnemental, qui p\u00e9nalise les v\u00e9hicules produits loin de l'Europe, et non la marque elle-m\u00eame.`,
    },
    {
      question: `Combien co\u00fbte la recharge d'une ${marque.nom} \u00e9lectrique ?`,
      answer: `Avec une consommation moyenne de ${dec(Math.round(consoMoy * 10) / 10)} kWh/100 km sur la gamme, 100 km reviennent \u00e0 environ ${(consoMoy * 0.2).toFixed(2).replace(".", ",")} \u20ac en recharge \u00e0 domicile (0,20 \u20ac/kWh) et \u00e0 trois fois plus sur une borne rapide d'autoroute. Les mod\u00e8les de la marque acceptent jusqu'\u00e0 ${dec(chargeMax)} kW en courant continu.`,
    },
    {
      question: `O\u00f9 sont fabriqu\u00e9es les ${marque.nom} \u00e9lectriques ?`,
      answer: `${marque.nom} est une marque ${marque.pays === "France" ? "fran\u00e7aise" : `bas\u00e9e en ${marque.pays}`}, fond\u00e9e en ${marque.anneeCreation}. Le lieu d'assemblage varie selon les mod\u00e8les et compte directement dans le score environnemental qui conditionne le bonus \u00e9cologique : un m\u00eame mod\u00e8le peut y ouvrir droit ou non selon l'usine qui le produit. Les fiches mod\u00e8le pr\u00e9cisent l'origine retenue pour le calcul.`,
    },
  ];
}

export default async function PageMarque({ params }: Props) {
  const { slug } = await params;
  const marque = getMarqueBySlug(slug);
  if (!marque) notFound();

  const modelesMarque = getModelesByMarque(marque.slug);
  const faqs = getFaqs(marque, modelesMarque);

  const euro = (n: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Marques", href: "/marques/" + marque.slug + "/" },
          { name: marque.nom, href: "/marques/" + marque.slug + "/" },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        {/* ─── EN-TÊTE ──────────────────────────────────────────── */}
        <header style={{ marginBottom: 40 }}>
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
            {marque.pays}, {marque.origine === "Chine" ? "Constructeur chinois" : "Constructeur"} depuis{" "}
            {marque.anneeCreation}
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
            {marque.nom} électrique
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 640,
              lineHeight: 1.5,
            }}
          >
            {modelesMarque.length} modèle{modelesMarque.length > 1 ? "s" : ""}{" "}
            électrique{modelesMarque.length > 1 ? "s" : ""} référencé
            {modelesMarque.length > 1 ? "s" : ""}, à partir de{" "}
            {euro(Math.min(...modelesMarque.map((m) => m.prixBase)))}
          </p>
        </header>

        {/* ─── PRÉSENTATION ─────────────────────────────────────── */}
        {/* §21 : bloc citable, construit sur la gamme référencée. */}
        <div className="prose">
          <p>{resumeMarque(marque, modelesMarque)}</p>
        </div>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: marque.description }}
        />

        {/* ─── TABLEAU DES MODÈLES ──────────────────────────────── */}
        <section style={{ marginTop: 48 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            Tous les modèles {marque.nom} électriques
          </h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Modèle</th>
                  <th>Prix</th>
                  <th>Autonomie réelle</th>
                  <th>Batterie</th>
                  <th>Charge rapide</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {modelesMarque
                  .sort((a, b) => a.prixBase - b.prixBase)
                  .map((m) => (
                    <tr key={m.slug}>
                      <td>
                        <Link href={`/modeles/${m.slug}/`}>{m.modele}</Link>
                      </td>
                      <td>{euro(m.prixBase)}</td>
                      <td>{m.autonomieReelle} km</td>
                      <td>{dec(m.batterieKwh)} kWh</td>
                      <td>{dec(m.chargeRapideKw)} kW</td>
                      <td>
                        <strong>{m.note}/10</strong>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── CARTES MODÈLES ───────────────────────────────────── */}
        <section style={{ marginTop: 40 }}>
          <div className="grid-modeles">
            {modelesMarque.map((m) => (
              <CarteModele key={m.slug} modele={m} />
            ))}
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────── */}
        <div className="cta-bloc">
          <h3>Comparez les modèles {marque.nom}</h3>
          <p>
            Utilisez notre comparateur pour mettre côte à côte prix, autonomie et coût
            de possession.
          </p>
          <Link href="/outils/comparateur-modeles/" className="btn-primary">
            Ouvrir le comparateur
          </Link>
        </div>

        <AuteurBio />

        {/* ─── SOURCES ──────────────────────────────────────────── */}
        <div className="bloc-sources">
          <h3>Sources</h3>
          <ul>
            <li>
              <a
                href={marque.siteOfficiel}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site officiel {marque.nom}
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
          </ul>
        </div>
        <FaqSection items={faqs} titre={`Questions fréquentes\u00a0: ${marque.nom} électrique`} />
      </article>
    </>
  );
}
