export interface NavLink {
  label: string;
  href: string;
}

export interface NavSection {
  label: string;
  href: string;
  children: NavLink[];
}

export const mainNav: NavSection[] = [
  {
    label: "Modèles",
    href: "/modeles/",
    children: [
      { label: "Tous les modèles", href: "/modeles/" },
      { label: "Pas cher", href: "/categories/pas-cher/" },
      { label: "Petites voitures", href: "/categories/petite-voiture/" },
      { label: "Grande autonomie", href: "/categories/grande-autonomie/" },
      { label: "Familiales", href: "/categories/familiale/" },
      { label: "Sans permis", href: "/categories/sans-permis/" },
      { label: "Occasion", href: "/categories/occasion/" },
    ],
  },
  {
    label: "Marques",
    href: "/marques/",
    children: [
      { label: "Toutes les marques", href: "/marques/" },
      { label: "Voitures chinoises", href: "/marques/voitures-chinoises/" },
    ],
  },
  {
    label: "Comparatifs",
    href: "/comparatifs/",
    children: [
      { label: "Tous les comparatifs", href: "/comparatifs/" },
      { label: "Renault 5 vs Citroën ë-C3", href: "/comparatifs/renault-5-e-tech-vs-citroen-e-c3/" },
      { label: "Renault 5 vs Peugeot e-208", href: "/comparatifs/renault-5-e-tech-vs-peugeot-e-208/" },
      { label: "Comparateur de modèles", href: "/outils/comparateur-modeles/" },
    ],
  },
  {
    label: "Guides",
    href: "/guides/",
    children: [
      { label: "Tous les guides", href: "/guides/" },
      { label: "Qu'est-ce qu'un VE ?", href: "/guides/quest-ce-quune-voiture-electrique/" },
      { label: "Autonomie réelle", href: "/guides/autonomie-reelle-expliquee/" },
      { label: "Recharge débutants", href: "/guides/recharge-pour-debutants/" },
      { label: "Glossaire VE", href: "/glossaire/" },
    ],
  },
  {
    label: "Recharge",
    href: "/recharge/",
    children: [
      { label: "Tout sur la recharge", href: "/recharge/" },
      { label: "Bornes de recharge", href: "/recharge/borne-de-recharge/" },
      { label: "Bornes à Paris", href: "/recharge/bornes/paris/" },
      { label: "Bornes à Lyon", href: "/recharge/bornes/lyon/" },
      { label: "Toutes les villes", href: "/recharge/bornes/" },
      { label: "Coût de recharge", href: "/outils/simulateur-cout-recharge/" },
    ],
  },
  {
    label: "Acheter",
    href: "/acheter/",
    children: [
      { label: "Guide d'achat", href: "/acheter/" },
      { label: "Aides et bonus", href: "/acheter/aides-et-bonus/" },
      { label: "LOA / LLD", href: "/acheter/loa-leasing/" },
      { label: "Assurance", href: "/acheter/assurance/" },
      { label: "Simulateur d'aides", href: "/outils/simulateur-aides/" },
    ],
  },
  {
    label: "Outils",
    href: "/outils/financement/",
    children: [
      { label: "Calculateur financement", href: "/outils/financement/" },
      { label: "Coût de recharge", href: "/outils/simulateur-cout-recharge/" },
      { label: "Comparateur élec vs thermique", href: "/outils/comparateur-elec-thermique/" },
      { label: "Simulateur d'aides", href: "/outils/simulateur-aides/" },
      { label: "Comparateur de modèles", href: "/outils/comparateur-modeles/" },
      { label: "Widget calculateur", href: "/outils/widget/" },
    ],
  },
];
