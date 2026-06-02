import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/jsonld";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
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
      <nav aria-label="Fil d'Ariane" className="breadcrumb">
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
              ) : (
                <span aria-current="page">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
