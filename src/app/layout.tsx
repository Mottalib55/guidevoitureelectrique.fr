import type { Metadata } from "next";
import { Manrope, Bricolage_Grotesque } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import NavDropdown from "@/components/NavDropdown";
import MobileNav from "@/components/MobileNav";
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
    "Comparez les voitures électriques 2026 : prix, autonomie réelle, recharge rapide, bonus écologique. Fiches détaillées, simulateurs LOA/LLD et guides d'achat.",
  metadataBase: new URL("https://guidevoitureelectrique.fr"),
  authors: [{ name: "Mottalib Radif, MBA INSEAD, Passionné de Finance" }],
  openGraph: {
    siteName: "Guide Voiture Électrique",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://guidevoitureelectrique.fr/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Guide Voiture Électrique",
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    other: {
      "msvalidate.01": "GUIDEVE2026BINGVERIFY",
    },
  },
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
    jobTitle: "MBA INSEAD, Passionné de Finance",
    url: "https://guidevoitureelectrique.fr/a-propos/",
    image: "https://guidevoitureelectrique.fr/team/mottalib-radif.jpg",
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
  jobTitle: "MBA INSEAD, Passionné de Finance",
  url: "https://guidevoitureelectrique.fr/a-propos/",
  image: "https://guidevoitureelectrique.fr/team/mottalib-radif.jpg",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "INSEAD",
  },
  description:
    "Passionné par l'automobile et la mobilité électrique, diplômé MBA de l'INSEAD. Spécialisé dans l'analyse du marché des véhicules électriques, les aides à l'achat et l'infrastructure de recharge en France.",
  worksFor: {
    "@type": "Organization",
    name: "Guide Voiture Electrique",
    url: "https://guidevoitureelectrique.fr",
  },
};

const jsonLdWebSiteSearch = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Guide Voiture Électrique",
  url: "https://guidevoitureelectrique.fr",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://guidevoitureelectrique.fr/modeles/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
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
      <head>
        {/* Microsoft Clarity — only in production */}
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/GUIDEVE2026";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script");`,
            }}
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[var(--ink)]">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Aller au contenu
        </a>

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSiteSearch),
          }}
        />
        {/* ─── HEADER ──────────────────────────────────────────── */}
        <header className="site-header" role="banner">
          <div className="site-header-inner">
            <Link href="/" className="site-logo">
              <Image src="/logo.svg" alt="" width={28} height={28} className="site-logo-icon" />
              <span>
                Guide<strong>VoitureÉlectrique</strong>
              </span>
            </Link>
            <NavDropdown />
            <MobileNav />
          </div>
        </header>

        {/* ─── MAIN ────────────────────────────────────────────── */}
        <main id="main-content" className="flex-1" role="main">{children}</main>

        {/* ─── FOOTER ──────────────────────────────────────────── */}
        <footer className="site-footer" role="contentinfo">
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
                <Link href="/outils/widget/">Widget calculateur</Link>
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
                <Link href="/glossaire/">Glossaire VE</Link>
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
            {" | "}
            <Link href="/glossaire/" style={{ color: "var(--faint)", textDecoration: "none" }}>
              Glossaire
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
