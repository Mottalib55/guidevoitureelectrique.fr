/**
 * Paramètres des aides à l'achat ou à la location d'une voiture électrique (RECETTE §17.4).
 * Une valeur citée dans une page vient d'ici, jamais écrite en dur. Relevé le 31/10/2026.
 */

/** Prime « coup de pouce Véhicules particuliers électriques » (certificats d'économies d'énergie,
 *  fiche TRA-EQ-117). Elle remplace le bonus écologique depuis le 1er juillet 2025. Son montant
 *  n'est pas fixé par la réglementation : il dépend de l'entreprise signataire qui la verse et du
 *  niveau de bonification (revenus du ménage, profil « gros rouleur », production européenne).
 *  Source : service-public.gouv.fr F39188, vérifiée le 9 octobre 2026. */
export const COUP_DE_POUCE = {
  depuis: "1er juillet 2025",
  prixMaxTTC: 47000,
  masseMaxKg: 2400,
  scoreEnvironnementalMin: 60,
  dureeConservationAns: 2,
  dateLimiteEngagement: "31 août 2029",
  /** Plafonds de revenu fiscal de référence par part de chaque décile (le 10e est au-delà). */
  deciles: [1970, 7640, 11250, 14130, 16880, 19600, 22770, 27310, 35880],
  /** Ménage en situation de précarité énergétique : déciles 1 à 3 ; modeste : déciles 4 et 5. */
  plafondPrecarite: 11250,
  plafondModeste: 16880,
  source: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39188",
} as const;

/** Leasing social 2026 (location sociale de voitures électriques).
 *  Source : service-public.gouv.fr F39280, vérifiée le 31 juillet 2026. */
export const LEASING_SOCIAL = {
  ouverture: "16 juillet 2026",
  rfrParPartMax: 16880,
  distanceDomicileTravailMinKm: 10,
  kmProAnMin: 8000,
  loyerMaxMois: 200,
  loyerModeleMinMois: 140,
  dureeMinAns: 3,
  prixMaxTTC: 47000,
  masseMaxKg: 1800,
  /** Aide de l'État : 29 % du coût d'achat hors options, plafonnée ; déduite du 1er loyer. */
  aideTaux: 0.29,
  aidePlafond: 6500,
  aidePlafondEurope: 9000,
  primeMoteurEurope: 500,
  kmInclusAnMin: 15000,
  source: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39280",
} as const;

/** Prime à la conversion : supprimée pour les voitures à compter du 2 décembre 2024
 *  (décret n° 2024-1084 du 29 novembre 2024). Seule subsiste la prime au rétrofit.
 *  Sources : economie.gouv.fr « Qu'est ce que la prime à la conversion ? » ;
 *  service-public.gouv.fr F36875 (prime au rétrofit, vérifiée le 1er janvier 2026). */
export const PRIME_CONVERSION = {
  supprimeeLe: "2 décembre 2024",
  decret: "décret n° 2024-1084 du 29 novembre 2024",
  source: "https://www.economie.gouv.fr/particuliers/gerer-mon-argent/beneficier-daides-et-de-reductions-dimpots/quest-ce-que-la-prime-la",
} as const;

/** Crédit d'impôt pour l'installation d'une borne de recharge : 75 % des dépenses, au plus
 *  500 € par système, pour les dépenses payées jusqu'au 31 décembre 2025 ; supprimé pour les
 *  dépenses payées à partir du 1er janvier 2026.
 *  Source : service-public.gouv.fr F35578, vérifiée le 15 avril 2026. */
export const CREDIT_IMPOT_BORNE = {
  taux: 0.75,
  plafond: 500,
  finDepenses: "31 décembre 2025",
  source: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35578",
} as const;

/** « 47 000 € », « 16 880 € » : montant entier, espace insécable avant le symbole. */
export const eur = (n: number) => `${n.toLocaleString("fr-FR").replace(/ /g, " ")} €`;

export type CategorieMenage = "precarite" | "modeste" | "autre";

/** Catégorie de ménage de la prime coup de pouce selon le revenu fiscal de référence par part. */
export function categorieCoupDePouce(rfrParPart: number): CategorieMenage {
  if (rfrParPart <= COUP_DE_POUCE.plafondPrecarite) return "precarite";
  if (rfrParPart <= COUP_DE_POUCE.plafondModeste) return "modeste";
  return "autre";
}

/** Décile de revenus (1 à 10) selon le revenu fiscal de référence par part. */
export function decileCoupDePouce(rfrParPart: number): number {
  const i = COUP_DE_POUCE.deciles.findIndex((plafond) => rfrParPart <= plafond);
  return i === -1 ? 10 : i + 1;
}

/** Plafond de l'aide de l'État au leasing social pour un véhicule donné. */
export function aideLeasingSocial(prixHorsOptions: number, produitEnEurope: boolean): number {
  const plafond = produitEnEurope ? LEASING_SOCIAL.aidePlafondEurope : LEASING_SOCIAL.aidePlafond;
  return Math.min(plafond, Math.round(prixHorsOptions * LEASING_SOCIAL.aideTaux));
}
