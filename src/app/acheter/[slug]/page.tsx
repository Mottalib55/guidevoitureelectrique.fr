import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pagesAcheter, getPageAcheterBySlug } from "@/data/acheter";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

export function generateStaticParams() {
  return pagesAcheter.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageAcheterBySlug(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.titre,
    description: page.metaDescription,
    path: `/acheter/${page.slug}/`,
  });
}

/* ── Navigation interne du silo ──────────────────────────────────── */
const siloLinks = [
  { slug: "guide-achat", label: "Guide d'achat" },
  { slug: "prix-et-cout-reel", label: "Prix & TCO" },
  { slug: "aides-et-bonus", label: "Aides & bonus" },
  { slug: "loa-leasing", label: "LOA / LLD" },
  { slug: "assurance", label: "Assurance" },
  { slug: "electrique-vs-thermique", label: "Electrique vs thermique" },
];

export default async function PageAcheter({ params }: Props) {
  const { slug } = await params;
  const page = getPageAcheterBySlug(slug);
  if (!page) notFound();

  /* Détection des pages de monétisation */
  const isMonetisation = slug === "loa-leasing" || slug === "assurance";

  /* Rendu du contenu HTML/texte : on sépare les blocs par double saut de
     ligne et on gère les balises HTML inline (h2, div.cta-bloc, ul, etc.) */
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
      <Breadcrumb
        items={[
          { name: "Acheter", href: "/acheter/guide-achat/" },
          { name: page.titre, href: `/acheter/${page.slug}/` },
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
            Guide d&apos;achat : Voiture électrique
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

        {/* ─── CTA MONÉTISATION (haut de page) ───────────────────── */}
        {isMonetisation && (
          <div className="cta-bloc" style={{ marginBottom: 40 }}>
            {slug === "loa-leasing" ? (
              <>
                <h3>Simulez votre leasing VE en 2 minutes</h3>
                <p>
                  Comparez LOA et LLD, calculez vos mensualités et trouvez
                  l&apos;offre la plus avantageuse pour votre voiture
                  électrique.
                </p>
                <Link href="/outils/financement/" className="btn-primary">
                  Calculer mes mensualités
                </Link>
              </>
            ) : (
              <>
                <h3>Comparez les assurances VE et économisez</h3>
                <p>
                  Obtenez gratuitement des devis d&apos;assurance auto pour
                  votre voiture électrique. Garanties batterie, borne,
                  assistance panne de charge incluses.
                </p>
                <Link href="/outils/financement/" className="btn-primary">
                  Obtenir un devis gratuit
                </Link>
              </>
            )}
          </div>
        )}

        {/* ─── NAVIGATION SILO ───────────────────────────────────── */}
        <nav
          aria-label="Pages du guide d'achat"
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
              href={`/acheter/${link.slug}/`}
              className={link.slug === slug ? "btn-primary" : "btn-secondary"}
              style={{ padding: "8px 16px", fontSize: 13 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ─── CONTENU RÉDACTIONNEL ──────────────────────────────── */}
        <div className="prose">{renderContenu(page.contenu)}</div>

        {/* ─── CTA MONÉTISATION (bas de page) ────────────────────── */}
        {isMonetisation && (
          <div className="cta-bloc" style={{ marginTop: 48 }}>
            {slug === "loa-leasing" ? (
              <>
                <h3>Prêt à financer votre voiture électrique ?</h3>
                <p>
                  LOA, LLD ou crédit : notre calculateur compare les formules et
                  vous recommande la plus économique selon votre profil.
                </p>
                <Link href="/outils/financement/" className="btn-primary">
                  Ouvrir le calculateur de financement
                </Link>
              </>
            ) : (
              <>
                <h3>Trouvez la meilleure assurance pour votre VE</h3>
                <p>
                  Ne payez pas trop cher. Comparez les offres des meilleurs
                  assureurs avec des garanties adaptées aux voitures électriques.
                </p>
                <Link href="/outils/financement/" className="btn-primary">
                  Comparer les assurances
                </Link>
              </>
            )}
          </div>
        )}

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
            {pagesAcheter
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/acheter/${p.slug}/`}
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

        {/* ─── CTA MODÈLES ───────────────────────────────────────── */}
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
            href="/categories/pas-cher/"
            className="cta-bloc"
            style={{ margin: 0 }}
          >
            <h3>Voitures électriques pas cher</h3>
            <p>Les meilleurs modèles à moins de 25 000 euros</p>
          </Link>
        </div>

        <AuteurBio />

        {/* ─── SOURCES ───────────────────────────────────────────── */}
        <div className="bloc-sources">
          <h3>Sources & références</h3>
          <ul>
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
                href="https://www.primealaconversion.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prime à la conversion : primealaconversion.gouv.fr
              </a>
            </li>
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
