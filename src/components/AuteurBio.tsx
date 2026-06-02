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
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent), var(--accent-deep))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#fff",
          fontWeight: 800,
          fontSize: 20,
          fontFamily: "var(--font-display)",
        }}
      >
        MR
      </div>
      <div>
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
        <p
          style={{
            fontSize: 13,
            color: "var(--muted)",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          MBA INSEAD, ingénieur de formation et passionné d&apos;automobile.
          Mottalib analyse le marché de la voiture électrique en France avec une
          approche rigoureuse, croisant données constructeurs, tests indépendants
          et retours d&apos;utilisateurs pour fournir des informations fiables et
          objectives aux futurs acheteurs.
        </p>
        <div style={{ marginTop: 8, display: "flex", gap: 12 }}>
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
