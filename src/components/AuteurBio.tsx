import Image from "next/image";
import Link from "next/link";

export default function AuteurBio() {
  return (
    <div
      style={{
        marginTop: 48,
        padding: "24px 28px",
        border: "1.5px solid var(--line)",
        borderRadius: 16,
        background: "var(--wash)",
        display: "flex",
        gap: 20,
        alignItems: "flex-start",
      }}
    >
      <Image
        src="/team/mottalib-radif.jpg"
        alt="Mottalib Radif"
        width={56}
        height={56}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          flexShrink: 0,
          border: "2px solid var(--accent)",
        }}
      />
      <div>
        <Link
          href="/a-propos/"
          style={{ textDecoration: "none" }}
        >
          <h4
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 16,
              marginBottom: 4,
              color: "var(--ink)",
            }}
          >
            Mottalib Radif
          </h4>
        </Link>
        <p
          style={{
            fontSize: 13,
            color: "var(--muted)",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          MBA INSEAD, Passionné de Finance. Spécialisé dans
          l&apos;analyse du marché des véhicules électriques, les aides à
          l&apos;achat et l&apos;infrastructure de recharge en France.
          Mottalib croise données constructeurs, tests indépendants et retours
          d&apos;utilisateurs pour fournir des informations fiables et
          objectives.
        </p>
        <div style={{ marginTop: 8, display: "flex", gap: 12 }}>
          <Link
            href="/a-propos/"
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--accent-deep)",
              textDecoration: "none",
            }}
          >
            À propos
          </Link>
          <Link
            href="/guides/"
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--accent-deep)",
              textDecoration: "none",
            }}
          >
            Tous les guides
          </Link>
          <Link
            href="/comparatifs/"
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--accent-deep)",
              textDecoration: "none",
            }}
          >
            Comparatifs
          </Link>
        </div>
      </div>
    </div>
  );
}
