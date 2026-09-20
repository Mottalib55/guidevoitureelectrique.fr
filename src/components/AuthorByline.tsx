import Link from "next/link";

interface AuthorBylineProps {
  date?: string;
}

export default function AuthorByline({ date }: AuthorBylineProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 24,
      }}
    >
      <Link rel="author" href="/a-propos/" style={{ flexShrink: 0 }}>
        </Link>
      <div>
        <p
          style={{
            fontSize: 12,
            color: "var(--faint)",
            margin: 0,
            fontWeight: 500,
          }}
        >
          Rédigé par
        </p>
        <Link
          rel="author"
          href="/a-propos/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 14,
            color: "var(--ink)",
            textDecoration: "none",
          }}
        >
          Radif Partners
        </Link>
        <p
          style={{
            fontSize: 12,
            color: "var(--faint)",
            margin: 0,
            fontWeight: 500,
          }}
        >
          Éditeur de calculateurs et de guides pratiques, Passionné de Finance{date ? ` · ${date}` : ""}
        </p>
      </div>
    </div>
  );
}
