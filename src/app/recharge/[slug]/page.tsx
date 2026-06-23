import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pagesRecharge, getPageRechargeBySlug } from "@/data/recharge";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

export function generateStaticParams() {
  return pagesRecharge.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageRechargeBySlug(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.titre,
    description: page.metaDescription,
    path: `/recharge/${page.slug}/`,
  });
}

export default async function PageRecharge({ params }: Props) {
  const { slug } = await params;
  const page = getPageRechargeBySlug(slug);
  if (!page) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Recharge", href: `/recharge/${page.slug}/` },
          { name: page.titre, href: `/recharge/${page.slug}/` },
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
            {page.h1}
          </h1>
        </header>

        {/* Contenu rédactionnel */}
        <div className="prose">
          {page.contenu.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
          <Link href="/outils/simulateur-cout-recharge/" className="btn-primary">
            Simuler mon coût de recharge
          </Link>
          <Link href="/outils/comparateur-modeles/" className="btn-secondary">
            Comparer les modèles
          </Link>
        </div>

        <AuteurBio />

        <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
          <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>Avere-France : Guides techniques de la recharge pour véhicules électriques</li>
            <li>GIREVE : Données du réseau de recharge public en France, 2026</li>
            <li>ADEME : Guide pratique « Installer une borne de recharge », édition 2025</li>
            <li>Enedis : Normes d&apos;installation IRVE et raccordement électrique</li>
            <li>Programme ADVENIR : Conditions de subvention pour bornes résidentielles et professionnelles</li>
            <li>EDF : Grille tarifaire réglementée et options heures creuses, 2026</li>
            <li>Données constructeurs : Spécifications de recharge par modèle</li>
          </ul>
        </div>
      </article>
    </>
  );
}
