/**
 * §21 : le paragraphe qu'un moteur peut reprendre pour répondre sans ouvrir la
 * page. Il doit donc porter les chiffres de la fiche, pas une phrase d'accroche,
 * et faire au moins 120 mots. Il est construit à partir des données de la page :
 * deux modèles ne peuvent pas produire le même texte.
 */
import type { Modele } from "@/data/modeles";

const euro = (n: number) => `${n.toLocaleString("fr-FR")} €`;

export function resumeModele(m: Modele): string {
  const conso100 = m.conso.toLocaleString("fr-FR");
  const coutRecharge = Math.round((m.batterieKwh * 0.2519) * 100) / 100;
  const coutAuxCent = Math.round(m.conso * 0.2519 * 100) / 100;
  const ecart = Math.round(((m.autonomieWLTP - m.autonomieReelle) / m.autonomieWLTP) * 100);
  const occasion = m.prixOccasion
    ? ` D'occasion, elle se négocie autour de ${euro(m.prixOccasion)}.`
    : " Elle est trop récente pour qu'un marché de l'occasion se soit formé.";
  const aides = m.aidesEligible
    ? " Elle entre dans le champ du bonus écologique, sous réserve du score environnemental et des conditions de revenus en vigueur."
    : " Elle n'est pas éligible au bonus écologique, son score environnemental ou son lieu d'assemblage l'en excluant.";

  return (
    `La ${m.marque} ${m.modele} est une ${m.segment.toLowerCase()} électrique de ${m.puissanceCh} ch ` +
    `annoncée à ${m.autonomieWLTP} km d'autonomie WLTP. En usage réel, comptez plutôt ` +
    `${m.autonomieReelle} km, soit ${ecart} % de moins que l'homologation : l'écart vient du ` +
    `chauffage, de l'autoroute et du froid, que le cycle WLTP ne reproduit pas. Sa batterie de ` +
    `${m.batterieKwh} kWh et sa consommation de ${conso100} kWh aux 100 km situent le coût au ` +
    `tarif réglementé à environ ${coutAuxCent.toLocaleString("fr-FR")} € aux 100 km, et ` +
    `${coutRecharge.toLocaleString("fr-FR")} € pour une charge complète à domicile. ` +
    `Sur borne rapide, elle accepte ${m.chargeRapideKw} kW, ce qui donne ${m.tempsChargeRapide} ; ` +
    `sur une prise murale, ${m.tempsChargeAC}. Le prix neuf démarre à ${euro(m.prixBase)} hors options.` +
    occasion + aides
  );
}

import type { Ville } from "@/data/villes";

export function resumeVille(v: Ville): string {
  const densite = Math.round((v.nombreBornes / v.population) * 10000 * 10) / 10;
  const pop = v.population.toLocaleString("fr-FR");
  const bornes = v.nombreBornes.toLocaleString("fr-FR");
  return (
    `${v.nom} (${v.departement}, ${v.region}) compte environ ${bornes} points de charge publics ` +
    `pour ${pop} habitants, soit ${densite.toLocaleString("fr-FR")} bornes pour 10 000 habitants. ` +
    `Ce chiffre dit l'essentiel : au-delà de dix bornes pour 10 000 habitants, un conducteur sans ` +
    `garage trouve à recharger sans planifier ; en dessous de cinq, la recharge à domicile ou au ` +
    `travail devient une condition pratique à l'achat d'un véhicule électrique. Le coût dépend ` +
    `ensuite du type de borne : environ 0,25 € le kWh au tarif réglementé chez soi, de 0,35 à ` +
    `0,45 € sur une borne publique en charge lente, et de 0,50 à 0,79 € sur une borne rapide en ` +
    `itinérance, soit du simple au triple pour la même énergie. Les tarifs, les réseaux présents ` +
    `et les emplacements utiles à ${v.nom} sont détaillés ci-dessous, avec les badges et ` +
    `abonnements qui changent réellement la facture.`
  );
}

export function resumeComparatif(a: Modele, b: Modele): string {
  const ecartPrix = Math.abs(a.prixBase - b.prixBase);
  const moinsCher = a.prixBase <= b.prixBase ? a : b;
  const plusLoin = a.autonomieReelle >= b.autonomieReelle ? a : b;
  const ecartAuto = Math.abs(a.autonomieReelle - b.autonomieReelle);
  const plusSobre = a.conso <= b.conso ? a : b;
  const plusRapide = a.chargeRapideKw >= b.chargeRapideKw ? a : b;
  const coutA = Math.round(a.conso * 0.2519 * 100) / 100;
  const coutB = Math.round(b.conso * 0.2519 * 100) / 100;
  return (
    `La ${a.marque} ${a.modele} démarre à ${euro(a.prixBase)} et la ${b.marque} ${b.modele} à ` +
    `${euro(b.prixBase)}, soit ${euro(ecartPrix)} d'écart en faveur de la ${moinsCher.modele}. ` +
    `Sur l'autonomie réelle, la ${plusLoin.modele} l'emporte avec ${plusLoin.autonomieReelle} km ` +
    `contre ${plusLoin === a ? b.autonomieReelle : a.autonomieReelle} km, ${ecartAuto} km de plus, ` +
    `ce qui représente une pause de moins sur un trajet de cinq cents kilomètres. La ` +
    `${plusSobre.modele} consomme le moins, ${plusSobre.conso.toLocaleString("fr-FR")} kWh aux ` +
    `100 km, d'où un coût au tarif réglementé de ${(plusSobre === a ? coutA : coutB).toLocaleString("fr-FR")} € ` +
    `aux 100 km contre ${(plusSobre === a ? coutB : coutA).toLocaleString("fr-FR")} €. Sur borne ` +
    `rapide, la ${plusRapide.modele} accepte ${plusRapide.chargeRapideKw} kW et annonce ` +
    `${plusRapide.tempsChargeRapide}. Côté coffre, ${a.coffre} litres contre ${b.coffre} litres. ` +
    `Le détail de chaque poste, y compris les aides et le marché de l'occasion, suit ci-dessous. ` +
    `Ces trois chiffres, prix d'entrée, autonomie réelle et puissance de charge, suffisent le plus ` +
    `souvent à trancher : le reste relève du goût et de l'usage.`
  );
}

import type { Marque } from "@/data/marques";

export function resumeMarque(m: Marque, modeles: Modele[]): string {
  const n = modeles.length;
  const prix = modeles.map((x) => x.prixBase).sort((a, b) => a - b);
  const autos = modeles.map((x) => x.autonomieReelle).sort((a, b) => a - b);
  const eligibles = modeles.filter((x) => x.aidesEligible).length;
  const gamme = n
    ? `Sa gamme électrique compte ${n} modèle${n > 1 ? "s" : ""} disponibles en France, de ` +
      `${euro(prix[0])} à ${euro(prix[prix.length - 1])}, avec des autonomies réelles de ` +
      `${autos[0]} à ${autos[autos.length - 1]} km. ${eligibles} d'entre eux entrent dans le ` +
      `champ du bonus écologique, les autres en étant exclus par leur score environnemental ou ` +
      `leur lieu d'assemblage.`
    : "Aucun modèle électrique de la marque n'est actuellement commercialisé en France.";
  return (
    `${m.nom} est un constructeur ${m.pays === "France" ? "français" : `implanté en ${m.pays}`} ` +
    `fondé en ${m.anneeCreation}. ${gamme} Ce qui distingue une marque d'une autre sur ` +
    `l'électrique tient à trois choses mesurables : le prix d'entrée de gamme, l'écart entre ` +
    `l'autonomie WLTP annoncée et l'autonomie réelle, et la puissance de charge acceptée, qui ` +
    `décide du temps passé sur l'autoroute. Les fiches ci-dessous donnent ces trois chiffres pour ` +
    `chaque modèle, avec le coût de recharge au tarif réglementé et le prix d'occasion quand le ` +
    `modèle est assez ancien pour qu'un marché se soit formé.`
  );
}
