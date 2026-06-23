import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pagesGuides, getGuideBySlug } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";
import { articleJsonLd } from "@/lib/jsonld";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

export function generateStaticParams() {
  return pagesGuides.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getGuideBySlug(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.titre,
    description: page.metaDescription,
    path: `/guides/${page.slug}/`,
  });
}

/* ── Navigation interne du silo ──────────────────────────────────── */
const siloLinks = [
  { slug: "quest-ce-quune-voiture-electrique", label: "Qu'est-ce qu'un VE ?" },
  { slug: "autonomie-reelle-expliquee", label: "Autonomie réelle" },
  { slug: "duree-de-vie-batterie", label: "Durée de vie batterie" },
  { slug: "recharge-pour-debutants", label: "Recharge débutants" },
  { slug: "actualites", label: "Bilan marché 2025-2026" },
];

export default async function PageGuide({ params }: Props) {
  const { slug } = await params;
  const page = getGuideBySlug(slug);
  if (!page) notFound();

  const renderContenu = (contenu: string) => {
    const blocks = contenu.split("\n\n");
    return blocks.map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith("<")) {
        return (
          <div
            key={i}
            dangerouslySetInnerHTML={{ __html: trimmed }}
          />
        );
      }
      return <p key={i}>{trimmed}</p>;
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd({
            title: page.titre,
            description: page.metaDescription,
            path: `/guides/${page.slug}/`,
          })),
        }}
      />
      <Breadcrumb
        items={[
          { name: "Guides", href: "/guides/quest-ce-quune-voiture-electrique/" },
          { name: page.titre, href: `/guides/${page.slug}/` },
        ]}
      />

      <article
        className="section"
        style={{ paddingTop: 24, paddingBottom: 64 }}
      >
        {/* ─── EN-TÊTE ──────────────────────────────────────────── */}
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
            Guide : Voiture électrique
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
            {page.h1}
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 640,
              lineHeight: 1.5,
            }}
          >
            {page.metaDescription}
          </p>
        </header>

        {/* ─── NAVIGATION SILO ───────────────────────────────────── */}
        <nav
          aria-label="Pages du guide"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 40,
          }}
        >
          {siloLinks.map((link) => (
            <Link
              key={link.slug}
              href={`/guides/${link.slug}/`}
              className={link.slug === slug ? "btn-primary" : "btn-secondary"}
              style={{ padding: "8px 16px", fontSize: 13 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ─── CONTENU RÉDACTIONNEL ──────────────────────────────── */}
        <div className="prose">{renderContenu(page.contenu)}</div>

        {/* ─── LIENS INTERNES SILO ───────────────────────────────── */}
        <section style={{ marginTop: 48 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            Poursuivre la lecture
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {pagesGuides
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/guides/${p.slug}/`}
                  className="carte-modele"
                  style={{ padding: 20 }}
                >
                  <h3
                    className="carte-modele-nom"
                    style={{ marginBottom: 4, fontSize: 16 }}
                  >
                    {p.titre}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {p.metaDescription.slice(0, 120)}...
                  </p>
                </Link>
              ))}
          </div>
        </section>

        {/* ─── CTA OUTILS ───────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginTop: 48,
          }}
        >
          <Link
            href="/outils/financement/"
            className="cta-bloc"
            style={{ margin: 0 }}
          >
            <h3>Calculateur de financement</h3>
            <p>Comparez comptant, crédit, LOA et LLD pour votre VE</p>
          </Link>
          <Link
            href="/acheter/guide-achat/"
            className="cta-bloc"
            style={{ margin: 0 }}
          >
            <h3>Guide d&apos;achat complet</h3>
            <p>Tout savoir avant d&apos;acheter votre voiture électrique</p>
          </Link>
        </div>

        <AuteurBio />

        {/* ─── SOURCES ───────────────────────────────────────────── */}
        <div className="bloc-sources">
          <h3>Sources & références</h3>
          <ul>
            <li>
              <a
                href="https://www.avere-france.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Avere-France : données marché VE
              </a>
            </li>
            <li>
              <a
                href="https://www.ademe.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                ADEME : analyses de cycle de vie
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
            <li>
              <a
                href="https://www.ecologie.gouv.fr/politiques-publiques/bonus-ecologique"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ministère de la Transition Écologique
              </a>
            </li>
          </ul>
          <p className="date-maj">Dernière mise à jour : mai 2025</p>
        </div>
      </article>
    </>
  );
}
