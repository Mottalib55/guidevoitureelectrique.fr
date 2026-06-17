import type { Metadata } from "next";
import { Manrope, Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Voiture électrique 2026 : comparatif, prix et autonomie",
    template: "%s",
  },
  description:
    "Comparez les voitures électriques 2026 : prix, autonomie réelle, recharge rapide, bonus écologique. Fiches, calculateurs LOA/LLD et guides d'achat indépendants.",
  metadataBase: new URL("https://guidevoitureelectrique.fr"),
  authors: [{ name: "Mottalib Radif" }],
  openGraph: {
    siteName: "Guide Voiture Électrique",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Guide Voiture Electrique",
  url: "https://guidevoitureelectrique.fr",
  logo: "https://guidevoitureelectrique.fr/logo.svg",
  founder: {
    "@type": "Person",
    name: "Mottalib Radif",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@guidevoitureelectrique.fr",
    contactType: "customer support",
    availableLanguage: "French",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mottalib Radif",
  jobTitle: "Fondateur et Editeur",
  url: "https://guidevoitureelectrique.fr/a-propos/",
  image: "https://guidevoitureelectrique.fr/team/mottalib-radif.jpg",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "INSEAD",
  },
  description:
    "MBA INSEAD, fondateur de Guide Voiture Electrique. Expert en mobilite electrique et analyse du marche automobile.",
  worksFor: {
    "@type": "Organization",
    name: "Guide Voiture Electrique",
    url: "https://guidevoitureelectrique.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${bricolage.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[var(--ink)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson),
          }}
        />
        {/* ─── HEADER ──────────────────────────────────────────── */}
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="site-logo">
              <Image src="/logo.svg" alt="" width={28} height={28} className="site-logo-icon" />
              <span>
                Guide<strong>VoitureÉlectrique</strong>
              </span>
            </Link>
            <nav className="site-nav" aria-label="Navigation principale">
              <Link href="/modeles/">Modèles</Link>
              <Link href="/marques/">Marques</Link>
              <Link href="/comparatifs/">Comparatifs</Link>
              <Link href="/guides/">Guides</Link>
              <Link href="/recharge/">Recharge</Link>
              <Link href="/acheter/">Acheter</Link>
              <Link href="/outils/financement/">Outils</Link>
            </nav>
          </div>
        </header>

        {/* ─── MAIN ────────────────────────────────────────────── */}
        <main className="flex-1">{children}</main>

        {/* ─── FOOTER ──────────────────────────────────────────── */}
        <footer className="site-footer">
          <div className="site-footer-inner">
            <div className="site-footer-brand">
              <Image src="/logo.svg" alt="" width={24} height={24} style={{ display: "inline-block", verticalAlign: "middle", marginRight: 6 }} /> Guide Voiture Électrique
              <p className="site-footer-tagline">
                Le guide indépendant pour bien choisir votre voiture électrique
                en France.
              </p>
            </div>
            <div className="site-footer-links">
              <div>
                <h4><Link href="/categories/">Explorer</Link></h4>
                <Link href="/categories/pas-cher/">Pas cher</Link>
                <Link href="/categories/chinoise/">Chinoises</Link>
                <Link href="/categories/sans-permis/">Sans permis</Link>
                <Link href="/categories/grande-autonomie/">
                  Grande autonomie
                </Link>
                <Link href="/modeles/">Tous les modèles</Link>
                <Link href="/marques/">Toutes les marques</Link>
              </div>
              <div>
                <h4><Link href="/comparatifs/">Comparatifs</Link></h4>
                <Link href="/comparatifs/renault-5-e-tech-vs-citroen-e-c3/">
                  Renault 5 vs Citroën ë-C3
                </Link>
                <Link href="/comparatifs/">Tous les comparatifs</Link>
              </div>
              <div>
                <h4>Outils</h4>
                <Link href="/outils/financement/">Calculateur financement</Link>
                <Link href="/outils/simulateur-cout-recharge/">
                  Coût de recharge
                </Link>
                <Link href="/outils/comparateur-modeles/">Comparateur</Link>
              </div>
              <div>
                <h4><Link href="/recharge/">Recharge</Link></h4>
                <Link href="/recharge/borne-de-recharge/">Bornes de recharge</Link>
                <Link href="/recharge/bornes/paris/">Bornes à Paris</Link>
                <Link href="/recharge/bornes/lyon/">Bornes à Lyon</Link>
                <Link href="/recharge/bornes/">Toutes les villes</Link>
              </div>
              <div>
                <h4><Link href="/acheter/">Acheter</Link></h4>
                <Link href="/acheter/aides-et-bonus/">Aides & bonus</Link>
                <Link href="/acheter/loa-leasing/">LOA / LLD</Link>
                <Link href="/acheter/assurance/">Assurance</Link>
              </div>
              <div>
                <h4><Link href="/guides/">Guides</Link></h4>
                <Link href="/guides/quest-ce-quune-voiture-electrique/">
                  Qu&apos;est-ce qu&apos;un VE ?
                </Link>
                <Link href="/guides/autonomie-reelle-expliquee/">
                  Autonomie réelle
                </Link>
                <Link href="/guides/recharge-pour-debutants/">
                  Recharge débutants
                </Link>
              </div>
            </div>
          </div>
          <div className="site-footer-bottom">
            © {new Date().getFullYear()} guidevoitureelectrique.fr — Données
            indicatives, non contractuelles.
            {" | "}
            <Link href="/a-propos/" style={{ color: "var(--faint)", textDecoration: "none" }}>
              À propos
            </Link>
            {" | "}
            <Link href="/mentions-legales/" style={{ color: "var(--faint)", textDecoration: "none" }}>
              Mentions légales
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
