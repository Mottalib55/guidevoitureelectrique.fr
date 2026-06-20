import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/seo";
import { webApplicationJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Widget calculateur VE gratuit — Intégrez sur votre site",
  description:
    "Intégrez gratuitement notre calculateur de coût de voiture électrique sur votre site web. Widget responsive, léger et sans publicité.",
  path: "/outils/widget/",
});

const jsonLd = webApplicationJsonLd({
  name: "Calculateur coût voiture électrique",
  description:
    "Widget embarquable pour estimer le coût annuel de recharge d'une voiture électrique comparé à l'essence.",
  url: "https://guidevoitureelectrique.fr/outils/widget/",
});

const embedCode = `<iframe src="https://guidevoitureelectrique.fr/embed/" width="100%" height="520" style="border:none;border-radius:18px;max-width:480px" title="Calculateur coût voiture électrique" loading="lazy"></iframe>`;

export default function WidgetPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Outils", href: "/outils/financement/" },
          { name: "Widget calculateur", href: "/outils/widget/" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="section" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 38px)",
            letterSpacing: "-0.02em",
            marginBottom: 8,
          }}
        >
          Widget calculateur voiture électrique
        </h1>
        <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 640, lineHeight: 1.5, marginBottom: 32 }}>
          Intégrez gratuitement notre calculateur de coût VE sur votre site.
          Widget léger, responsive et sans publicité.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 960, alignItems: "start" }}>
          {/* Preview */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 16,
              }}
            >
              Aperçu
            </h2>
            <iframe
              src="/embed/"
              width="100%"
              height={520}
              style={{ border: "none", borderRadius: 18, maxWidth: 480 }}
              title="Calculateur coût voiture électrique"
              loading="lazy"
            />
          </div>

          {/* Code */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 18,
                marginBottom: 16,
              }}
            >
              Code à copier
            </h2>
            <pre
              style={{
                padding: 20,
                borderRadius: 14,
                background: "var(--wash)",
                border: "1px solid var(--line)",
                fontSize: 13,
                lineHeight: 1.6,
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
              }}
            >
              {embedCode}
            </pre>
            <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 12, lineHeight: 1.5 }}>
              Copiez ce code et collez-le dans votre page HTML.
              Le widget est 100 % gratuit et sans tracking.
            </p>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 16,
                marginTop: 32,
                marginBottom: 12,
              }}
            >
              Conditions d&apos;utilisation
            </h3>
            <ul style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8, paddingLeft: 20 }}>
              <li>Utilisation gratuite, y compris à des fins commerciales</li>
              <li>Le lien vers guidevoitureelectrique.fr doit rester visible</li>
              <li>Aucune modification du contenu du widget</li>
              <li>Nous nous réservons le droit de modifier ou retirer le widget</li>
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
