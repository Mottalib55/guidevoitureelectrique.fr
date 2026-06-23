import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { categories, getCategorieBySlug } from "@/data/categories";
import { modeles, getModelesByTag } from "@/data/modeles";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import CarteModele from "@/components/CarteModele";
import AuteurBio from "@/components/AuteurBio";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategorieBySlug(slug);
  if (!cat) return {};
  return buildMetadata({
    title: cat.titre,
    description: cat.metaDescription,
    path: `/categories/${cat.slug}/`,
  });
}

export default async function PageCategorie({ params }: Props) {
  const { slug } = await params;
  const cat = getCategorieBySlug(slug);
  if (!cat) notFound();

  const filteredModeles = cat.filtreCustom
    ? modeles.filter(cat.filtreCustom)
    : getModelesByTag(cat.tag);

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Catégories", href: `/categories/${cat.slug}/` },
          { name: cat.titre, href: `/categories/${cat.slug}/` },
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
            {cat.h1}
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 640, lineHeight: 1.5 }}>
            {cat.description}
          </p>
        </header>

        {/* Modèles */}
        <div className="grid-modeles" style={{ marginBottom: 48 }}>
          {filteredModeles
            .sort((a, b) => a.prixBase - b.prixBase)
            .map((m) => (
              <CarteModele key={m.slug} modele={m} />
            ))}
        </div>

        {/* Tableau comparatif */}
        <div className="table-wrap" style={{ marginBottom: 48 }}>
          <table>
            <thead>
              <tr>
                <th>Modèle</th>
                <th>Prix</th>
                <th>Autonomie réelle</th>
                <th>Batterie</th>
                <th>Charge rapide</th>
                <th>Bonus</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {filteredModeles
                .sort((a, b) => a.prixBase - b.prixBase)
                .map((m) => {
                  const euro = (n: number) =>
                    new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                      maximumFractionDigits: 0,
                    }).format(n);
                  return (
                    <tr key={m.slug}>
                      <td>
                        <Link href={`/modeles/${m.slug}/`}>{m.modele}</Link>
                      </td>
                      <td>{euro(m.prixBase)}</td>
                      <td>{m.autonomieReelle} km</td>
                      <td>{m.batterieKwh} kWh</td>
                      <td>{m.chargeRapideKw} kW</td>
                      <td>{m.aidesEligible ? "Oui" : "Non"}</td>
                      <td><strong>{m.note}/10</strong></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        {/* Contenu rédactionnel */}
        <div className="prose">
          {cat.contenu.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
          <Link href="/outils/financement/" className="btn-primary">
            Calculer mon financement
          </Link>
          <Link href="/outils/comparateur-modeles/" className="btn-secondary">
            Comparer les modèles
          </Link>
        </div>

        <AuteurBio />

        <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
          <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>Avere-France : Baromètre des immatriculations de véhicules électriques par segment</li>
            <li>AAA Data : Parts de marché par catégorie de véhicule en France, 2025-2026</li>
            <li>Ministère de la Transition écologique : Barème du bonus écologique et score environnemental 2026</li>
            <li>Euro NCAP : Résultats de sécurité par modèle, protocole 2024-2025</li>
            <li>Données constructeurs : Fiches techniques officielles, prix catalogue et configurateurs</li>
          </ul>
        </div>
      </article>
    </>
  );
}
