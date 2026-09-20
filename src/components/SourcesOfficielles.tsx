/**
 * Bloc « Sources officielles » (RECETTE §7 : au moins trois liens publics sur une page
 * pilier). Les liens par défaut font autorité pour le véhicule électrique en France ;
 * une page peut fournir les siens.
 */
type Lien = { url: string; libelle: string };

const PAR_DEFAUT: Lien[] = [
  {
    url: 'https://www.service-public.fr/particuliers/vosdroits/F35634',
    libelle: 'Service-Public.fr — Bonus écologique pour un véhicule électrique',
  },
  {
    url: 'https://www.economie.gouv.fr/particuliers/prime-conversion-vehicule',
    libelle: 'Ministère de l’Économie — Prime à la conversion',
  },
  {
    url: 'https://www.ecologie.gouv.fr/politiques-publiques/vehicules-electriques',
    libelle: 'Ministère de la Transition écologique — Véhicules électriques',
  },
  {
    url: 'https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000023983208/',
    libelle: 'Légifrance — Code de l’énergie',
  },
];

export default function SourcesOfficielles({ liens = PAR_DEFAUT }: { liens?: Lien[] }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="mb-3 text-xl font-semibold">Sources officielles</h2>
      <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
        Les aides, prix et règles cités sur cette page proviennent des textes et services
        publics suivants, consultés pour 2026&nbsp;:
      </p>
      <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-400">
        {liens.map((l) => (
          <li key={l.url}>
            <a className="underline" href={l.url} target="_blank" rel="noopener noreferrer">
              {l.libelle}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
