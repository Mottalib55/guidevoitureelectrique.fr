import { faqJsonLd } from "@/lib/jsonld";

type Item = { question: string; answer: string };

/**
 * Bloc FAQ : le texte servi dans le HTML et le JSON-LD FAQPage correspondant
 * (RECETTE §12). Les réponses tiennent entre 40 et 90 mots.
 */
export default function FaqSection({ items, titre = "Questions fréquentes" }: { items?: Item[]; titre?: string }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="faq-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(items)) }}
      />
      <h2
        style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, marginBottom: 8 }}
      >
        {titre}
      </h2>
      {items.map((f, i) => (
        <div key={i} className="faq-item">
          <h3 className="faq-question">{f.question}</h3>
          <p className="faq-answer">{f.answer}</p>
        </div>
      ))}
    </section>
  );
}
