import Image from "next/image";
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
      <Link href="/a-propos/" style={{ flexShrink: 0 }}>
        <Image
          src="/team/mottalib-radif.jpg"
          alt="Mottalib Radif"
          width={40}
          height={40}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid var(--accent)",
          }}
        />
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
          href="/a-propos/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 14,
            color: "var(--ink)",
            textDecoration: "none",
          }}
        >
          Mottalib Radif
        </Link>
        <p
          style={{
            fontSize: 12,
            color: "var(--faint)",
            margin: 0,
            fontWeight: 500,
          }}
        >
          MBA INSEAD, Passionné de Finance{date ? ` · ${date}` : ""}
        </p>
      </div>
    </div>
  );
}
