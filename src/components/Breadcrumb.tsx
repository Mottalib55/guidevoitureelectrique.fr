import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import LastUpdated from "@/components/LastUpdated";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumb({ items, dateEnHaut = false }: { items: BreadcrumbItem[]; dateEnHaut?: boolean }) {
  const fullItems = [{ name: "Accueil", href: "/" }, ...items];
  const jsonLd = breadcrumbJsonLd(
    fullItems.map((i) => ({
      name: i.name,
      url: `https://guidevoitureelectrique.fr${i.href}`,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Date de mise à jour à droite sur la ligne fine du fil d'Ariane, seulement sur une
          page de lecture (dateEnHaut) ; ailleurs elle est en pied de page (RECETTE §8.4, §10.3). */}
      <div className="breadcrumb">
      <nav aria-label="Fil d'Ariane">
        <ol>
          {fullItems.map((item, i) => (
            <li key={item.href}>
              {i < fullItems.length - 1 ? (
                <>
                  <Link href={item.href}>{item.name}</Link>
                  <span className="breadcrumb-sep" aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {dateEnHaut && <LastUpdated inline />}
      </div>
    </>
  );
}
