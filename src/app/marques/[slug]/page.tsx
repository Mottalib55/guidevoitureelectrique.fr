import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { marques, getMarqueBySlug } from "@/data/marques";
import { getModelesByMarque } from "@/data/modeles";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import CarteModele from "@/components/CarteModele";
import AuteurBio from "@/components/AuteurBio";

export function generateStaticParams() {
  return marques.map((m) => ({ slug: m.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = getMarqueBySlug(slug);
  if (!m) return {};

  return buildMetadata({
    title: `${m.nom} électrique ${new Date().getFullYear()} : modèles et prix`,
    description: `Tous les véhicules électriques ${m.nom} disponibles en France : prix, autonomie réelle, charge rapide. Fiches techniques, comparatif et financement LOA/LLD.`,
    path: `/marques/${m.slug}/`,
  });
}

export default async function PageMarque({ params }: Props) {
  const { slug } = await params;
  const marque = getMarqueBySlug(slug);
  if (!marque) notFound();

  const modelesMarque = getModelesByMarque(marque.slug);

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
            {marque.pays} — {marque.origine === "Chine" ? "Constructeur chinois" : "Constructeur"} depuis{" "}
            {marque.anneeCreation}
          </p>
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
            {modelesMarque.length > 1 ? "s" : ""} — à partir de{" "}
            {euro(Math.min(...modelesMarque.map((m) => m.prixBase)))}
          </p>
        </header>

        {/* ─── PRÉSENTATION ─────────────────────────────────────── */}
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
                      <td>{m.autonomieReelle} km</td>
                      <td>{m.batterieKwh} kWh</td>
                      <td>{m.chargeRapideKw} kW</td>
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
                Avere-France — données immatriculations VE
              </a>
            </li>
          </ul>
          <p className="date-maj">
            Dernière mise à jour :{" "}
            {new Date(marque.dateMAJ).toLocaleDateString("fr-FR", {
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
