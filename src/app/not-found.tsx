import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page non trouvée — Guide Voiture Électrique",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 64,
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          color: "var(--accent)",
          marginBottom: 8,
          lineHeight: 1,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 28,
          letterSpacing: "-0.02em",
          marginBottom: 12,
        }}
      >
        Page non trouvée
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "var(--muted)",
          lineHeight: 1.6,
          marginBottom: 32,
        }}
      >
        Désolé, la page que vous recherchez n&apos;existe pas ou a été
        déplacée. Utilisez les liens ci-dessous pour retrouver votre chemin.
      </p>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          marginBottom: 48,
        }}
      >
        <Link href="/" className="btn-primary">
          Retour à l&apos;accueil
        </Link>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/modeles/"
            style={{ color: "var(--accent-deep)", fontWeight: 600, fontSize: 15 }}
          >
            Modèles
          </Link>
          <Link
            href="/comparatifs/"
            style={{ color: "var(--accent-deep)", fontWeight: 600, fontSize: 15 }}
          >
            Comparatifs
          </Link>
          <Link
            href="/guides/"
            style={{ color: "var(--accent-deep)", fontWeight: 600, fontSize: 15 }}
          >
            Guides
          </Link>
          <Link
            href="/recharge/"
            style={{ color: "var(--accent-deep)", fontWeight: 600, fontSize: 15 }}
          >
            Recharge
          </Link>
          <Link
            href="/acheter/"
            style={{ color: "var(--accent-deep)", fontWeight: 600, fontSize: 15 }}
          >
            Acheter
          </Link>
        </div>
      </nav>

      <div
        style={{
          padding: "20px 24px",
          border: "1px solid var(--line)",
          borderRadius: 14,
          background: "var(--wash)",
        }}
      >
        <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
          Vous pensez qu&apos;il s&apos;agit d&apos;une erreur ? Signalez-nous
          ce lien cassé à{" "}
          <a
            href="mailto:contact@guidevoitureelectrique.fr"
            style={{ color: "var(--accent-deep)", fontWeight: 600 }}
          >
            contact@guidevoitureelectrique.fr
          </a>
        </p>
      </div>
    </div>
  );
}
