"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pageDate } from "@/lib/page-date";

const SITE = "https://guidevoitureelectrique.fr";
const link = { color: "var(--faint)", textDecoration: "none" } as const;

// Bas de page de confiance (RECETTE §8.4) : disclaimer, date réelle de mise à jour,
// méthodologie, auteur, confidentialité, et le WebPage.dateModified correspondant.
export default function TrustFooter() {
  const pathname = (usePathname() || "/").replace(/\/?$/, "/");
  const date = pageDate(pathname);
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${SITE}${pathname}`,
    dateModified: date,
    author: { "@id": `${SITE}/#author` },
    publisher: { "@id": `${SITE}/#org` },
  };
  return (
    <div className="site-footer-trust" style={{ marginTop: 8 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      Estimation indicative : ce site ne remplace ni le devis d&apos;un vendeur ni la décision de
      l&apos;administration pour les aides.
      <br />
      Dernière mise à jour{" "}: <time dateTime={date}>{date}</time>
      {" | "}
      <Link href="/methodologie/" style={link}>Méthodologie</Link>
      {" | "}
      <Link rel="author" href="/a-propos/" style={link}>Radif Partners</Link>
      {" | "}
      <Link href="/politique-confidentialite/" style={link}>Confidentialité</Link>
    </div>
  );
}
