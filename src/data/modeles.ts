export type Origine = "FR" | "EU" | "Chine" | "US";
export type StatutModele = "dispo" | "a-venir";

export interface Modele {
  slug: string;
  modele: string;
  marque: string;
  marqueSlug: string;
  prixBase: number;
  prixOccasion: number | null;
  autonomieWLTP: number;
  autonomieReelle: number;
  batterieKwh: number;
  conso: number; // kWh/100 km
  puissanceCh: number;
  puissanceKw: number;
  chargeRapideKw: number;
  tempsChargeRapide: string; // ex. "30 min (10-80 %)"
  tempsChargeAC: string; // ex. "7h30 (0-100 % sur 7,4 kW)"
  coffre: number; // litres
  poids: number; // kg
  longueur: number; // mm
  segment: string;
  origine: Origine;
  aidesEligible: boolean;
  note: number; // /10
  tags: string[];
  annee: number;
  description: string;
  pointsForts: string[];
  pointsFaibles: string[];
  source: string; // URL constructeur
  dateMAJ: string; // ISO date
  statut?: StatutModele; // "dispo" par défaut si absent
  sortiePrevue?: string; // ex. "2026"
}

// ─── DONNÉES MODÈLES ───────────────────────────────────────────────
// Valeurs issues des sites constructeurs officiels et fiches techniques
// publiées (renault.fr, peugeot.fr, citroen.fr, dacia.fr, tesla.com,
// volkswagen.fr, skoda.fr, kia.fr, byd.com/fr, mgmotor.fr,
// leapmotor.eu, xpeng.com, zeekr.com, bmw.fr, audi.fr, mercedes-benz.fr).
// Dernière vérification : juin 2026.

export const modeles: Modele[] = [
  // ─── RENAULT 5 E-TECH ─────────────────────────────────────────────
  {
    slug: "renault-5-e-tech",
    modele: "Renault 5 E-Tech",
    marque: "Renault",
    marqueSlug: "renault",
    prixBase: 25000,
    prixOccasion: null,
    autonomieWLTP: 400,
    autonomieReelle: 320,
    batterieKwh: 52,
    conso: 14.9,
    puissanceCh: 150,
    puissanceKw: 110,
    chargeRapideKw: 100,
    tempsChargeRapide: "30 min (15-80 %)",
    tempsChargeAC: "3h45 (10-100 % sur 11 kW)",
    coffre: 326,
    poids: 1449,
    longueur: 3922,
    segment: "citadine",
    origine: "FR",
    aidesEligible: true,
    note: 9,
    tags: ["pas-cher", "petite-voiture", "citadine", "made-in-france"],
    annee: 2024,
    description: `La Renault 5 E-Tech marque le grand retour d'une icône française sous forme 100 % électrique. Produite à Douai (Hauts-de-France) sur la plateforme AmpR Small, elle incarne la stratégie de Renault pour démocratiser la voiture électrique en Europe. Avec un design néo-rétro signé Gilles Vidal, elle séduit autant par son style que par sa fiche technique équilibrée.

Disponible en deux niveaux de batterie (40 kWh / 300 km WLTP et 52 kWh / 400 km WLTP), la Renault 5 E-Tech cible les conducteurs urbains et périurbains qui souhaitent passer à l'électrique sans compromis sur le budget. Son prix d'entrée à 25 000 € avant bonus en fait l'une des citadines électriques les plus compétitives du marché français.

Côté recharge, la plateforme AmpR Small accepte la charge rapide DC jusqu'à 100 kW, permettant de récupérer 200 km d'autonomie en environ 30 minutes. En courant alternatif, le chargeur embarqué de 11 kW permet une recharge complète en moins de 4 heures sur une borne domestique ou publique adaptée.

La Renault 5 E-Tech embarque le système multimédia openR link basé sur Google, avec Google Maps, Google Assistant et le Google Play Store intégrés. L'instrumentation numérique de 10 pouces et l'écran central de 10,1 pouces offrent une expérience connectée moderne.

En matière de sécurité, la voiture dispose de série d'un freinage automatique d'urgence, d'un maintien dans la voie et d'un régulateur de vitesse adaptatif. La structure renforcée de la plateforme AmpR Small intègre la batterie dans le plancher, abaissant le centre de gravité pour un comportement routier dynamique.

Le coffre de 326 litres est correct pour le segment des citadines, et l'habitabilité arrière permet d'accueillir deux adultes confortablement. La banquette arrière est rabattable en 60/40 pour étendre la capacité de chargement.

Renault propose la 5 E-Tech en plusieurs finitions (evolution, techno, iconic cinq) avec des options de personnalisation extérieure et intérieure variées, incluant un toit bicolore et des inserts colorés.

Produite en France et éligible au bonus écologique de 4 000 €, la Renault 5 E-Tech peut descendre à 21 000 € après aides, ce qui la positionne comme une alternative sérieuse à la Peugeot e-208, à la Citroën ë-C3 et aux modèles chinois comme la BYD Dolphin Surf ou la MG4.`,
    pointsForts: [
      "Design néo-rétro réussi et identité forte",
      "Fabrication française (Douai), éligible au bonus",
      "Rapport prix/autonomie parmi les meilleurs du marché",
      "Charge rapide 100 kW (30 min 15-80 %)",
      "Système multimédia openR link (Google intégré)",
      "Comportement routier dynamique grâce au centre de gravité bas",
    ],
    pointsFaibles: [
      "Coffre limité à 326 litres (pas de frunk)",
      "Pas de version longue autonomie au-dessus de 400 km WLTP",
      "Places arrière justes pour les grands gabarits",
      "Pas encore de données fiabilité long terme (modèle récent)",
    ],
    source: "https://www.renault.fr/vehicules-electriques/r5-e-tech-electric.html",
    dateMAJ: "2026-06-22",
  },

  // ─── RENAULT 4 E-TECH ─────────────────────────────────────────────
  {
    slug: "renault-4-e-tech",
    modele: "Renault 4 E-Tech",
    marque: "Renault",
    marqueSlug: "renault",
    prixBase: 28700,
    prixOccasion: null,
    autonomieWLTP: 400,
    autonomieReelle: 320,
    batterieKwh: 52,
    conso: 15.2,
    puissanceCh: 150,
    puissanceKw: 110,
    chargeRapideKw: 100,
    tempsChargeRapide: "30 min (15-80 %)",
    tempsChargeAC: "3h45 (10-100 % sur 11 kW)",
    coffre: 420,
    poids: 1510,
    longueur: 4140,
    segment: "SUV-urbain",
    origine: "FR",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "familiale", "made-in-france"],
    annee: 2025,
    description: `La Renault 4 E-Tech est la version SUV urbain surélevée de la plateforme AmpR Small, partageant sa base technique avec la Renault 5 E-Tech. Avec sa garde au sol rehaussée et son coffre plus généreux de 420 litres, elle vise les familles et les conducteurs recherchant plus de polyvalence que la citadine R5.`,
    pointsForts: [
      "Coffre spacieux de 420 litres",
      "Garde au sol surélevée, style crossover",
      "Même plateforme éprouvée que la R5 E-Tech",
      "Fabrication française, éligible bonus",
    ],
    pointsFaibles: [
      "Plus lourde que la R5, consommation légèrement supérieure",
      "Prix d'entrée plus élevé que la R5",
      "Design qui peut diviser (moins iconique que la R5)",
    ],
    source: "https://www.renault.fr/vehicules-electriques/r4-e-tech-electric.html",
    dateMAJ: "2026-06-22",
  },

  // ─── RENAULT TWINGO E-TECH ────────────────────────────────────────
  {
    slug: "renault-twingo-e-tech",
    modele: "Renault Twingo E-Tech",
    marque: "Renault",
    marqueSlug: "renault",
    prixBase: 20000,
    prixOccasion: null,
    autonomieWLTP: 300,
    autonomieReelle: 240,
    batterieKwh: 40,
    conso: 14.0,
    puissanceCh: 113,
    puissanceKw: 83,
    chargeRapideKw: 80,
    tempsChargeRapide: "30 min (15-80 %)",
    tempsChargeAC: "4h (10-100 % sur 11 kW)",
    coffre: 270,
    poids: 1350,
    longueur: 3760,
    segment: "mini-citadine",
    origine: "FR",
    aidesEligible: true,
    note: 8,
    tags: ["pas-cher", "petite-voiture", "citadine", "made-in-france"],
    annee: 2026,
    description: `La Renault Twingo E-Tech est la future citadine électrique d'entrée de gamme de Renault, annoncée sous la barre des 20 000 € avant aides. Basée sur une version simplifiée de la plateforme AmpR Small, elle vise à devenir la voiture électrique la moins chère produite en Europe.`,
    pointsForts: [
      "Prix annoncé sous 20 000 €",
      "Gabarit ultra-compact pour la ville",
      "Production européenne prévue",
    ],
    pointsFaibles: [
      "Pas encore en vente (lancement prévu 2026)",
      "Autonomie limitée à 300 km WLTP",
      "Fiche technique encore provisoire",
    ],
    source: "https://www.renault.fr/vehicules-electriques.html",
    dateMAJ: "2026-06-22",
  },

  // ─── RENAULT MEGANE E-TECH ────────────────────────────────────────
  {
    slug: "renault-megane-e-tech",
    modele: "Renault Mégane E-Tech",
    marque: "Renault",
    marqueSlug: "renault",
    prixBase: 37200,
    prixOccasion: 24000,
    autonomieWLTP: 470,
    autonomieReelle: 370,
    batterieKwh: 60,
    conso: 15.5,
    puissanceCh: 220,
    puissanceKw: 160,
    chargeRapideKw: 130,
    tempsChargeRapide: "30 min (15-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 7,4 kW)",
    coffre: 440,
    poids: 1636,
    longueur: 4200,
    segment: "compacte",
    origine: "FR",
    aidesEligible: true,
    note: 8,
    tags: ["compacte", "grande-autonomie", "made-in-france"],
    annee: 2022,
    description: `La Renault Mégane E-Tech Electric est la première voiture électrique de Renault construite sur la plateforme CMF-EV. Avec son profil de crossover compact, sa batterie ultra-fine de 60 kWh et sa charge rapide à 130 kW, elle se positionne face aux Volkswagen ID.3 et Peugeot e-308.`,
    pointsForts: [
      "Batterie ultra-fine, habitabilité préservée",
      "Charge rapide 130 kW",
      "Système openR link avec Google intégré",
      "Bon comportement routier",
    ],
    pointsFaibles: [
      "Coffre un peu juste (440 L)",
      "Tarif élevé en finition haute",
      "Autonomie réelle en dessous des 400 km sur autoroute",
    ],
    source: "https://www.renault.fr/vehicules-electriques/megane-e-tech-electric.html",
    dateMAJ: "2026-06-22",
  },

  // ─── RENAULT SCENIC E-TECH ────────────────────────────────────────
  {
    slug: "renault-scenic-e-tech",
    modele: "Renault Scénic E-Tech",
    marque: "Renault",
    marqueSlug: "renault",
    prixBase: 41700,
    prixOccasion: null,
    autonomieWLTP: 625,
    autonomieReelle: 490,
    batterieKwh: 87,
    conso: 16.2,
    puissanceCh: 220,
    puissanceKw: 160,
    chargeRapideKw: 150,
    tempsChargeRapide: "35 min (15-80 %)",
    tempsChargeAC: "9h (0-100 % sur 11 kW)",
    coffre: 545,
    poids: 1874,
    longueur: 4470,
    segment: "SUV-familial",
    origine: "FR",
    aidesEligible: true,
    note: 9,
    tags: ["familiale", "grande-autonomie", "SUV", "made-in-france"],
    annee: 2024,
    description: `Le Renault Scénic E-Tech est le premier SUV familial 100 % électrique de Renault. Avec sa batterie de 87 kWh offrant jusqu'à 625 km d'autonomie WLTP, il est l'un des véhicules électriques les plus endurants du marché. Son coffre de 545 litres et son habitabilité familiale en font un choix pertinent pour les familles.`,
    pointsForts: [
      "Autonomie de référence : 625 km WLTP",
      "Coffre généreux de 545 litres",
      "Charge rapide 150 kW",
      "5 étoiles Euro NCAP (meilleur score 2024)",
    ],
    pointsFaibles: [
      "Prix d'entrée supérieur à 41 000 €",
      "Poids élevé (1 874 kg)",
      "Consommation sur autoroute plus importante",
    ],
    source: "https://www.renault.fr/vehicules-electriques/scenic-e-tech-electric.html",
    dateMAJ: "2026-06-22",
  },

  // ─── PEUGEOT e-208 ────────────────────────────────────────────────
  {
    slug: "peugeot-e-208",
    modele: "Peugeot e-208",
    marque: "Peugeot",
    marqueSlug: "peugeot",
    prixBase: 33470,
    prixOccasion: 19000,
    autonomieWLTP: 400,
    autonomieReelle: 310,
    batterieKwh: 51,
    conso: 15.1,
    puissanceCh: 156,
    puissanceKw: 115,
    chargeRapideKw: 100,
    tempsChargeRapide: "25 min (20-80 %)",
    tempsChargeAC: "5h15 (0-100 % sur 11 kW)",
    coffre: 309,
    poids: 1530,
    longueur: 4055,
    segment: "citadine",
    origine: "FR",
    aidesEligible: true,
    note: 8,
    tags: ["citadine", "pas-cher", "made-in-france"],
    annee: 2024,
    description: `La Peugeot e-208 est la citadine électrique best-seller de Peugeot. Restylée en 2024 avec une batterie de 51 kWh (contre 50 kWh auparavant) et un moteur de 156 ch, elle offre jusqu'à 400 km d'autonomie WLTP. Son i-Cockpit 3D et son design félin en font l'une des citadines les plus désirables du segment.`,
    pointsForts: [
      "Design séduisant avec i-Cockpit",
      "400 km d'autonomie WLTP (version 2024)",
      "Bonne tenue de route",
      "Large réseau Peugeot en France",
    ],
    pointsFaibles: [
      "Prix supérieur à la Renault 5 E-Tech",
      "Coffre limité à 309 litres",
      "Charge rapide plafonnée à 100 kW",
    ],
    source: "https://www.peugeot.fr/nos-vehicules/e-208.html",
    dateMAJ: "2026-06-22",
  },

  // ─── CITROËN ë-C3 ─────────────────────────────────────────────────
  {
    slug: "citroen-e-c3",
    modele: "Citroën ë-C3",
    marque: "Citroën",
    marqueSlug: "citroen",
    prixBase: 23300,
    prixOccasion: null,
    autonomieWLTP: 320,
    autonomieReelle: 260,
    batterieKwh: 44,
    conso: 15.3,
    puissanceCh: 113,
    puissanceKw: 83,
    chargeRapideKw: 100,
    tempsChargeRapide: "26 min (20-80 %)",
    tempsChargeAC: "4h10 (0-100 % sur 11 kW)",
    coffre: 310,
    poids: 1416,
    longueur: 4015,
    segment: "citadine",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["pas-cher", "citadine", "petite-voiture"],
    annee: 2024,
    description: `La Citroën ë-C3 est la citadine électrique abordable du groupe Stellantis, construite sur la plateforme Smart Car. Avec un prix d'entrée à 23 300 €, elle vise à démocratiser l'accès à la voiture électrique. Son confort de suspension (programme Citroën Advanced Comfort) est un atout distinctif.`,
    pointsForts: [
      "Prix très compétitif à 23 300 €",
      "Confort de suspension Citroën Advanced Comfort",
      "Design moderne et spacieux pour le segment",
      "Charge rapide 100 kW",
    ],
    pointsFaibles: [
      "Autonomie limitée à 320 km WLTP",
      "Équipement de série basique sur la version d'entrée",
      "Pas de compteur numérique sur la version de base",
    ],
    source: "https://www.citroen.fr/vehicules/citroen-e-c3.html",
    dateMAJ: "2026-06-22",
  },

  // ─── CITROËN AMI ──────────────────────────────────────────────────
  {
    slug: "citroen-ami",
    modele: "Citroën Ami",
    marque: "Citroën",
    marqueSlug: "citroen",
    prixBase: 7990,
    prixOccasion: 5500,
    autonomieWLTP: 75,
    autonomieReelle: 60,
    batterieKwh: 5.5,
    conso: 7.3,
    puissanceCh: 8,
    puissanceKw: 6,
    chargeRapideKw: 0,
    tempsChargeRapide: "Non compatible",
    tempsChargeAC: "3h (0-100 % sur prise domestique)",
    coffre: 63,
    poids: 485,
    longueur: 2410,
    segment: "sans-permis",
    origine: "EU",
    aidesEligible: false,
    note: 7,
    tags: ["sans-permis", "pas-cher", "petite-voiture"],
    annee: 2021,
    description: `La Citroën Ami est un quadricycle léger électrique accessible dès 14 ans (avec permis AM). Avec un prix de 7 990 € et une recharge sur prise domestique en 3 heures, c'est la solution de mobilité urbaine la plus économique. Sa vitesse maximale de 45 km/h la destine exclusivement à la ville.`,
    pointsForts: [
      "Prix imbattable à 7 990 €",
      "Accessible dès 14 ans (permis AM)",
      "Recharge sur prise domestique en 3h",
      "Encombrement minimal pour la ville",
    ],
    pointsFaibles: [
      "Vitesse limitée à 45 km/h",
      "Autonomie de 75 km seulement",
      "Confort très spartiate",
      "Pas de climatisation ni chauffage performant",
    ],
    source: "https://www.citroen.fr/vehicules/citroen-ami.html",
    dateMAJ: "2026-06-22",
  },

  // ─── FIAT 500e ─────────────────────────────────────────────────────
  {
    slug: "fiat-500e",
    modele: "Fiat 500e",
    marque: "Fiat",
    marqueSlug: "fiat",
    prixBase: 30400,
    prixOccasion: 18000,
    autonomieWLTP: 321,
    autonomieReelle: 250,
    batterieKwh: 42,
    conso: 14.7,
    puissanceCh: 118,
    puissanceKw: 87,
    chargeRapideKw: 85,
    tempsChargeRapide: "25 min (20-80 %)",
    tempsChargeAC: "6h15 (0-100 % sur 7,4 kW)",
    coffre: 185,
    poids: 1365,
    longueur: 3632,
    segment: "mini-citadine",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["petite-voiture", "citadine"],
    annee: 2023,
    description: `La Fiat 500e est la version 100 % électrique de l'icône italienne. Avec son design rétro-chic et son gabarit compact, elle excelle en ville. Disponible en version berline et cabriolet, elle offre une expérience de conduite agréable malgré un coffre très limité.`,
    pointsForts: [
      "Design iconique et premium",
      "Excellent rayon de braquage (ville)",
      "Version cabriolet disponible",
      "Bonne qualité perçue à bord",
    ],
    pointsFaibles: [
      "Coffre minuscule (185 L)",
      "Prix élevé pour le segment",
      "Autonomie réelle autour de 250 km",
      "Charge rapide limitée à 85 kW",
    ],
    source: "https://www.fiat.fr/500e",
    dateMAJ: "2026-06-22",
  },

  // ─── DACIA SPRING ─────────────────────────────────────────────────
  {
    slug: "dacia-spring",
    modele: "Dacia Spring",
    marque: "Dacia",
    marqueSlug: "dacia",
    prixBase: 18900,
    prixOccasion: 10000,
    autonomieWLTP: 225,
    autonomieReelle: 170,
    batterieKwh: 26.8,
    conso: 13.9,
    puissanceCh: 65,
    puissanceKw: 48,
    chargeRapideKw: 30,
    tempsChargeRapide: "45 min (20-80 %)",
    tempsChargeAC: "5h (0-100 % sur 7,4 kW)",
    coffre: 308,
    poids: 1073,
    longueur: 3701,
    segment: "mini-citadine",
    origine: "Chine",
    aidesEligible: false,
    note: 6,
    tags: ["pas-cher", "petite-voiture", "citadine"],
    annee: 2024,
    description: `La Dacia Spring est la voiture électrique la moins chère du marché français. Restylée en 2024, elle gagne en modernité mais reste limitée en performances et en autonomie. Son poids plume (1 073 kg) en fait une citadine agile, mais la charge rapide bridée à 30 kW et l'absence de bonus écologique (production en Chine) limitent son intérêt face à la concurrence.`,
    pointsForts: [
      "Prix le plus bas du marché (18 900 €)",
      "Poids plume (1 073 kg)",
      "Faible consommation (13,9 kWh/100 km)",
      "Bon coffre pour le gabarit (308 L)",
    ],
    pointsFaibles: [
      "Charge rapide limitée à 30 kW",
      "Non éligible au bonus (produite en Chine)",
      "Autonomie réelle ~170 km seulement",
      "Finitions basiques, équipement limité",
    ],
    source: "https://www.dacia.fr/vehicules/spring.html",
    dateMAJ: "2026-06-22",
  },

  // ─── TESLA MODEL Y ────────────────────────────────────────────────
  {
    slug: "tesla-model-y",
    modele: "Tesla Model Y",
    marque: "Tesla",
    marqueSlug: "tesla",
    prixBase: 44990,
    prixOccasion: 30000,
    autonomieWLTP: 533,
    autonomieReelle: 420,
    batterieKwh: 75,
    conso: 15.7,
    puissanceCh: 299,
    puissanceKw: 220,
    chargeRapideKw: 250,
    tempsChargeRapide: "25 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 854,
    poids: 1979,
    longueur: 4751,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 9,
    tags: ["SUV", "familiale", "grande-autonomie"],
    annee: 2025,
    description: `Le Tesla Model Y est le SUV électrique le plus vendu au monde. Restylé en 2025 (« Juniper »), il gagne un intérieur revu, un écran passager, et une autonomie en hausse. Sa charge rapide à 250 kW sur le réseau Supercharger et son réseau de recharge propriétaire restent des atouts majeurs.`,
    pointsForts: [
      "SUV électrique le plus vendu au monde",
      "Charge rapide 250 kW (Supercharger)",
      "Coffre très généreux (854 L)",
      "Autopilot de série, mises à jour OTA",
    ],
    pointsFaibles: [
      "Prix élevé (à partir de 44 990 €)",
      "Qualité de finition parfois critiquée",
      "SAV Tesla perfectible en France",
      "Pas de CarPlay / Android Auto",
    ],
    source: "https://www.tesla.com/fr_fr/modely",
    dateMAJ: "2026-06-22",
  },

  // ─── TESLA MODEL 3 ────────────────────────────────────────────────
  {
    slug: "tesla-model-3",
    modele: "Tesla Model 3",
    marque: "Tesla",
    marqueSlug: "tesla",
    prixBase: 39990,
    prixOccasion: 26000,
    autonomieWLTP: 513,
    autonomieReelle: 410,
    batterieKwh: 60,
    conso: 13.5,
    puissanceCh: 283,
    puissanceKw: 208,
    chargeRapideKw: 250,
    tempsChargeRapide: "25 min (10-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 11 kW)",
    coffre: 561,
    poids: 1761,
    longueur: 4720,
    segment: "berline",
    origine: "EU",
    aidesEligible: true,
    note: 9,
    tags: ["berline", "grande-autonomie"],
    annee: 2024,
    description: `La Tesla Model 3 « Highland » (restylée 2024) est la berline électrique de référence. Avec un intérieur entièrement revu, un éclairage ambiant configurable et une autonomie atteignant 513 km WLTP, elle reste la porte d'entrée la plus aboutie dans l'univers Tesla.`,
    pointsForts: [
      "Autonomie de référence (513 km WLTP)",
      "Réseau Supercharger (250 kW)",
      "Faible consommation (13,5 kWh/100)",
      "Mises à jour OTA régulières",
    ],
    pointsFaibles: [
      "Tout passe par l'écran central (pas de commodos)",
      "Pas de CarPlay / Android Auto",
      "SAV Tesla perfectible",
      "Suspension ferme sur mauvaise route",
    ],
    source: "https://www.tesla.com/fr_fr/model3",
    dateMAJ: "2026-06-22",
  },

  // ─── VOLKSWAGEN ID.4 ──────────────────────────────────────────────
  {
    slug: "volkswagen-id4",
    modele: "Volkswagen ID.4",
    marque: "Volkswagen",
    marqueSlug: "volkswagen",
    prixBase: 42990,
    prixOccasion: 28000,
    autonomieWLTP: 572,
    autonomieReelle: 430,
    batterieKwh: 77,
    conso: 15.8,
    puissanceCh: 286,
    puissanceKw: 210,
    chargeRapideKw: 175,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 543,
    poids: 2124,
    longueur: 4584,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "familiale", "grande-autonomie"],
    annee: 2024,
    description: `Le Volkswagen ID.4 est le SUV compact électrique de Volkswagen, basé sur la plateforme MEB. Avec sa batterie de 77 kWh et jusqu'à 572 km d'autonomie WLTP, il offre un habitacle spacieux et une conduite confortable. La version restylée 2024 améliore le système d'infodivertissement et la charge rapide.`,
    pointsForts: [
      "Habitacle spacieux et familial",
      "Grande autonomie (572 km WLTP)",
      "Confort de conduite",
      "Réseau de concessionnaires dense",
    ],
    pointsFaibles: [
      "Logiciel d'infodivertissement perfectible",
      "Poids élevé (2 124 kg)",
      "Design extérieur conservateur",
      "Prix en hausse sur les dernières séries",
    ],
    source: "https://www.volkswagen.fr/fr/modeles/id4.html",
    dateMAJ: "2026-06-22",
  },

  // ─── SKODA ELROQ ──────────────────────────────────────────────────
  {
    slug: "skoda-elroq",
    modele: "Skoda Elroq",
    marque: "Skoda",
    marqueSlug: "skoda",
    prixBase: 33900,
    prixOccasion: null,
    autonomieWLTP: 560,
    autonomieReelle: 420,
    batterieKwh: 77,
    conso: 15.6,
    puissanceCh: 286,
    puissanceKw: 210,
    chargeRapideKw: 175,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 490,
    poids: 2030,
    longueur: 4488,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "familiale", "grande-autonomie"],
    annee: 2025,
    description: `Le Skoda Elroq est le SUV compact électrique de Skoda, cousin technique du Volkswagen ID.4 mais proposé à un tarif plus agressif. Son rapport équipement/prix et son coffre généreux en font une alternative pragmatique dans le segment.`,
    pointsForts: [
      "Rapport qualité-prix excellent",
      "Coffre généreux (490 L)",
      "Grande autonomie (560 km WLTP)",
      "Astuces « Simply Clever » Skoda",
    ],
    pointsFaibles: [
      "Design intérieur moins premium que VW",
      "Image de marque moins valorisante",
      "Réseau Skoda moins dense que VW en France",
    ],
    source: "https://www.skoda.fr/modeles/elroq",
    dateMAJ: "2026-06-22",
  },

  // ─── KIA EV3 ──────────────────────────────────────────────────────
  {
    slug: "kia-ev3",
    modele: "Kia EV3",
    marque: "Kia",
    marqueSlug: "kia",
    prixBase: 35990,
    prixOccasion: null,
    autonomieWLTP: 600,
    autonomieReelle: 460,
    batterieKwh: 81.4,
    conso: 15.2,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 128,
    tempsChargeRapide: "31 min (10-80 %)",
    tempsChargeAC: "6h50 (10-100 % sur 11 kW)",
    coffre: 460,
    poids: 1850,
    longueur: 4300,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 9,
    tags: ["SUV", "grande-autonomie", "familiale"],
    annee: 2025,
    description: `Le Kia EV3 est le SUV compact électrique de Kia, proposé avec une batterie de 81,4 kWh offrant jusqu'à 600 km d'autonomie WLTP. C'est l'un des meilleurs rapports autonomie/prix du marché. La plateforme E-GMP de Hyundai-Kia permet une architecture 800V pour une recharge rapide efficace.`,
    pointsForts: [
      "600 km d'autonomie WLTP",
      "Architecture 800V (charge ultra-rapide)",
      "Garantie 7 ans Kia",
      "Rapport autonomie/prix imbattable",
    ],
    pointsFaibles: [
      "Charge rapide plafonnée à 128 kW (vs 240 kW sur EV6)",
      "Pas de transmission intégrale",
      "Réseau Kia moins dense en France",
    ],
    source: "https://www.kia.com/fr/modeles/ev3.html",
    dateMAJ: "2026-06-22",
  },

  // ─── KIA SOUL EV ──────────────────────────────────────────────────
  {
    slug: "kia-soul-ev",
    modele: "Kia Soul EV",
    marque: "Kia",
    marqueSlug: "kia",
    prixBase: 39490,
    prixOccasion: 22000,
    autonomieWLTP: 452,
    autonomieReelle: 350,
    batterieKwh: 64,
    conso: 15.7,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 77,
    tempsChargeRapide: "45 min (10-80 %)",
    tempsChargeAC: "9h35 (0-100 % sur 7,2 kW)",
    coffre: 315,
    poids: 1682,
    longueur: 4195,
    segment: "crossover",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["crossover"],
    annee: 2023,
    description: `Le Kia Soul EV est un crossover compact au style cubique distinctif. Avec sa batterie de 64 kWh et sa garantie 7 ans, il reste une option fiable bien que techniquement vieillissant face à la nouvelle génération de véhicules électriques.`,
    pointsForts: [
      "Design original et distinctif",
      "Garantie 7 ans Kia",
      "Habitabilité intérieure généreuse",
      "Bon en occasion",
    ],
    pointsFaibles: [
      "Charge rapide lente (77 kW max)",
      "Plateforme vieillissante",
      "Aérodynamique perfectible (forme cubique)",
      "Peu de mises à jour récentes",
    ],
    source: "https://www.kia.com/fr/modeles/soul-ev.html",
    dateMAJ: "2026-06-22",
  },

  // ─── BYD DOLPHIN SURF ─────────────────────────────────────────────
  {
    slug: "byd-dolphin-surf",
    modele: "BYD Dolphin Surf",
    marque: "BYD",
    marqueSlug: "byd",
    prixBase: 25000,
    prixOccasion: null,
    autonomieWLTP: 427,
    autonomieReelle: 340,
    batterieKwh: 60.4,
    conso: 15.5,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 88,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 11 kW)",
    coffre: 440,
    poids: 1620,
    longueur: 4290,
    segment: "compacte",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["pas-cher", "chinoise", "compacte"],
    annee: 2025,
    description: `La BYD Dolphin Surf (anciennement Seal U / Sea Lion 06 en Chine) est la compacte électrique de BYD positionnée face à la Renault Mégane E-Tech et la VW ID.3. Avec sa batterie Blade LFP et un prix agressif, elle illustre l'offensive des constructeurs chinois en Europe.`,
    pointsForts: [
      "Prix agressif pour une compacte",
      "Batterie Blade LFP (sécurité, longévité)",
      "Bonne autonomie (427 km WLTP)",
      "Équipement riche de série",
    ],
    pointsFaibles: [
      "Non éligible au bonus écologique (fabriquée en Chine)",
      "Réseau de distribution BYD encore limité en France",
      "Image de marque encore méconnue",
      "Charge rapide plafonnée à 88 kW",
    ],
    source: "https://www.byd.com/fr",
    dateMAJ: "2026-06-22",
  },

  // ─── BYD DOLPHIN ──────────────────────────────────────────────────
  {
    slug: "byd-dolphin",
    modele: "BYD Dolphin",
    marque: "BYD",
    marqueSlug: "byd",
    prixBase: 29990,
    prixOccasion: 22000,
    autonomieWLTP: 427,
    autonomieReelle: 340,
    batterieKwh: 60.4,
    conso: 15.0,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 88,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 11 kW)",
    coffre: 345,
    poids: 1595,
    longueur: 4290,
    segment: "citadine-compacte",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["citadine", "chinoise"],
    annee: 2024,
    description: `La BYD Dolphin est la citadine-compacte électrique de BYD, positionnée entre la Dacia Spring et la Peugeot e-208. Elle utilise la batterie Blade LFP reconnue pour sa sécurité et sa longévité.`,
    pointsForts: [
      "Batterie Blade LFP fiable",
      "Bonne autonomie pour une citadine",
      "Équipement riche de série",
      "Prix compétitif",
    ],
    pointsFaibles: [
      "Non éligible au bonus (Chine)",
      "Réseau BYD limité en France",
      "Qualité perçue perfectible",
      "Charge rapide limitée à 88 kW",
    ],
    source: "https://www.byd.com/fr",
    dateMAJ: "2026-06-22",
  },

  // ─── BYD SEAL ─────────────────────────────────────────────────────
  {
    slug: "byd-seal",
    modele: "BYD Seal",
    marque: "BYD",
    marqueSlug: "byd",
    prixBase: 41990,
    prixOccasion: null,
    autonomieWLTP: 570,
    autonomieReelle: 440,
    batterieKwh: 82.5,
    conso: 16.3,
    puissanceCh: 313,
    puissanceKw: 230,
    chargeRapideKw: 150,
    tempsChargeRapide: "25 min (10-80 %)",
    tempsChargeAC: "9h (0-100 % sur 11 kW)",
    coffre: 402,
    poids: 2015,
    longueur: 4800,
    segment: "berline",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["berline", "grande-autonomie", "chinoise"],
    annee: 2024,
    description: `La BYD Seal est la berline électrique premium de BYD, rivale directe de la Tesla Model 3. Avec sa technologie Cell-to-Body (batterie intégrée à la structure), sa grande autonomie et ses performances élevées, elle représente le haut de gamme chinois en Europe.`,
    pointsForts: [
      "Technologie Cell-to-Body innovante",
      "570 km d'autonomie WLTP",
      "Charge rapide 150 kW",
      "Performances élevées (313 ch)",
    ],
    pointsFaibles: [
      "Non éligible au bonus (Chine)",
      "Prix comparable à la Tesla Model 3",
      "Réseau BYD limité",
      "Valeur de revente incertaine",
    ],
    source: "https://www.byd.com/fr",
    dateMAJ: "2026-06-22",
  },

  // ─── BYD ATTO 3 ───────────────────────────────────────────────────
  {
    slug: "byd-atto-3",
    modele: "BYD Atto 3",
    marque: "BYD",
    marqueSlug: "byd",
    prixBase: 33990,
    prixOccasion: 22000,
    autonomieWLTP: 420,
    autonomieReelle: 330,
    batterieKwh: 60.5,
    conso: 16.7,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 88,
    tempsChargeRapide: "35 min (10-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 11 kW)",
    coffre: 440,
    poids: 1750,
    longueur: 4455,
    segment: "SUV-compact",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["SUV", "chinoise"],
    annee: 2023,
    description: `Le BYD Atto 3 est le premier SUV de BYD commercialisé en France. Avec un intérieur original et une batterie Blade LFP, il se positionne comme une alternative chinoise aux Kia Niro EV et Hyundai Kona Electric.`,
    pointsForts: [
      "Habitacle original et spacieux",
      "Batterie Blade LFP",
      "Bon coffre (440 L)",
      "Prix compétitif pour un SUV",
    ],
    pointsFaibles: [
      "Non éligible au bonus (Chine)",
      "Charge rapide limitée (88 kW)",
      "Consommation un peu élevée",
      "Qualité de finition inégale",
    ],
    source: "https://www.byd.com/fr",
    dateMAJ: "2026-06-22",
  },

  // ─── MG4 ──────────────────────────────────────────────────────────
  {
    slug: "mg4",
    modele: "MG4",
    marque: "MG",
    marqueSlug: "mg",
    prixBase: 27990,
    prixOccasion: 18000,
    autonomieWLTP: 450,
    autonomieReelle: 350,
    batterieKwh: 64,
    conso: 16.0,
    puissanceCh: 203,
    puissanceKw: 150,
    chargeRapideKw: 135,
    tempsChargeRapide: "26 min (10-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 11 kW)",
    coffre: 363,
    poids: 1655,
    longueur: 4287,
    segment: "compacte",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["pas-cher", "compacte", "chinoise"],
    annee: 2024,
    description: `La MG4 est la compacte électrique best-seller de MG (SAIC Motor). Avec un prix sous 28 000 € et une plateforme dédiée offrant un bon comportement routier, elle a bousculé le segment en Europe. Sa version Trophy offre 435 ch et une transmission intégrale.`,
    pointsForts: [
      "Rapport prix/prestations exceptionnel",
      "Comportement routier dynamique",
      "Large choix de batteries (51/64/77 kWh)",
      "Charge rapide 135 kW",
    ],
    pointsFaibles: [
      "Non éligible au bonus (Chine)",
      "Qualité intérieure perfectible",
      "Réseau SAV MG en développement",
      "Infodivertissement basique",
    ],
    source: "https://www.mgmotor.fr/modele/mg4-electric",
    dateMAJ: "2026-06-22",
  },

  // ─── MG ZS EV ─────────────────────────────────────────────────────
  {
    slug: "mg-zs-ev",
    modele: "MG ZS EV",
    marque: "MG",
    marqueSlug: "mg",
    prixBase: 29990,
    prixOccasion: 17000,
    autonomieWLTP: 440,
    autonomieReelle: 340,
    batterieKwh: 72.6,
    conso: 17.8,
    puissanceCh: 177,
    puissanceKw: 130,
    chargeRapideKw: 92,
    tempsChargeRapide: "35 min (10-80 %)",
    tempsChargeAC: "8h30 (0-100 % sur 11 kW)",
    coffre: 448,
    poids: 1745,
    longueur: 4323,
    segment: "SUV-compact",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["SUV", "chinoise", "pas-cher"],
    annee: 2023,
    description: `Le MG ZS EV est le SUV compact électrique de MG. Avec une grosse batterie de 72,6 kWh et un prix contenu, il offre un bon rapport capacité/prix. Sa consommation un peu élevée est compensée par la taille de la batterie.`,
    pointsForts: [
      "Grosse batterie (72,6 kWh) à prix contenu",
      "Coffre spacieux (448 L)",
      "Bon en SUV familial abordable",
      "Garantie 7 ans",
    ],
    pointsFaibles: [
      "Consommation élevée (17,8 kWh/100 km)",
      "Charge rapide limitée à 92 kW",
      "Plateforme non dédiée à l'électrique",
      "Non éligible au bonus (Chine)",
    ],
    source: "https://www.mgmotor.fr/modele/mg-zs-ev",
    dateMAJ: "2026-06-22",
  },

  // ─── MG S5 EV ─────────────────────────────────────────────────────
  {
    slug: "mg-s5-ev",
    modele: "MG S5 EV",
    marque: "MG",
    marqueSlug: "mg",
    prixBase: 26990,
    prixOccasion: null,
    autonomieWLTP: 400,
    autonomieReelle: 310,
    batterieKwh: 58.2,
    conso: 15.5,
    puissanceCh: 170,
    puissanceKw: 125,
    chargeRapideKw: 120,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "6h (0-100 % sur 11 kW)",
    coffre: 410,
    poids: 1600,
    longueur: 4350,
    segment: "SUV-compact",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["SUV", "chinoise", "pas-cher"],
    annee: 2025,
    description: `Le MG S5 EV est le nouveau SUV compact électrique de MG venant remplacer le ZS EV. Basé sur une plateforme plus moderne, il gagne en efficience et en charge rapide tout en conservant un prix agressif.`,
    pointsForts: [
      "Prix agressif sous 27 000 €",
      "Plateforme plus moderne que le ZS EV",
      "Charge rapide 120 kW",
      "Bon coffre (410 L)",
    ],
    pointsFaibles: [
      "Modèle tout juste lancé, peu de retours",
      "Non éligible au bonus (Chine)",
      "Image MG encore en construction",
    ],
    source: "https://www.mgmotor.fr",
    dateMAJ: "2026-06-22",
  },

  // ─── LEAPMOTOR T03 ────────────────────────────────────────────────
  {
    slug: "leapmotor-t03",
    modele: "Leapmotor T03",
    marque: "Leapmotor",
    marqueSlug: "leapmotor",
    prixBase: 18900,
    prixOccasion: null,
    autonomieWLTP: 265,
    autonomieReelle: 210,
    batterieKwh: 37.3,
    conso: 14.0,
    puissanceCh: 95,
    puissanceKw: 70,
    chargeRapideKw: 48,
    tempsChargeRapide: "36 min (30-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 6,6 kW)",
    coffre: 210,
    poids: 1175,
    longueur: 3620,
    segment: "mini-citadine",
    origine: "Chine",
    aidesEligible: false,
    note: 6,
    tags: ["pas-cher", "petite-voiture", "chinoise", "citadine"],
    annee: 2024,
    description: `La Leapmotor T03 est une micro-citadine électrique chinoise distribuée en Europe via Stellantis. Son prix ultra-compétitif et son gabarit compact en font une rivale directe de la Dacia Spring. Elle est assemblée en Pologne pour la distribution européenne.`,
    pointsForts: [
      "Prix très bas (~18 900 €)",
      "Distribuée via le réseau Stellantis",
      "Compact et agile en ville",
      "Assemblée en Europe (Pologne)",
    ],
    pointsFaibles: [
      "Autonomie limitée (265 km WLTP)",
      "Charge rapide très lente (48 kW)",
      "Finitions basiques",
      "Marque encore inconnue en France",
    ],
    source: "https://www.leapmotor.eu",
    dateMAJ: "2026-06-22",
  },

  // ─── LEAPMOTOR C10 ────────────────────────────────────────────────
  {
    slug: "leapmotor-c10",
    modele: "Leapmotor C10",
    marque: "Leapmotor",
    marqueSlug: "leapmotor",
    prixBase: 36400,
    prixOccasion: null,
    autonomieWLTP: 420,
    autonomieReelle: 330,
    batterieKwh: 69.9,
    conso: 16.5,
    puissanceCh: 231,
    puissanceKw: 170,
    chargeRapideKw: 84.4,
    tempsChargeRapide: "30 min (30-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 425,
    poids: 1890,
    longueur: 4739,
    segment: "SUV",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["SUV", "chinoise", "familiale"],
    annee: 2024,
    description: `Le Leapmotor C10 est un SUV familial chinois distribué en Europe via le partenariat Stellantis-Leapmotor. Avec un habitacle spacieux et un prix contenu pour un SUV de cette taille, il cible les familles cherchant une alternative chinoise aux Tesla Model Y et VW ID.4.`,
    pointsForts: [
      "Habitacle très spacieux",
      "Prix contenu pour un grand SUV",
      "Distribution Stellantis (SAV)",
      "Bon coffre (425 L)",
    ],
    pointsFaibles: [
      "Charge rapide limitée à 84 kW",
      "Marque encore inconnue",
      "Non éligible au bonus (Chine)",
      "Design intérieur quelconque",
    ],
    source: "https://www.leapmotor.eu",
    dateMAJ: "2026-06-22",
  },

  // ─── LEAPMOTOR B10 ────────────────────────────────────────────────
  {
    slug: "leapmotor-b10",
    modele: "Leapmotor B10",
    marque: "Leapmotor",
    marqueSlug: "leapmotor",
    prixBase: 28900,
    prixOccasion: null,
    autonomieWLTP: 400,
    autonomieReelle: 310,
    batterieKwh: 57.3,
    conso: 15.0,
    puissanceCh: 170,
    puissanceKw: 125,
    chargeRapideKw: 80,
    tempsChargeRapide: "30 min (30-80 %)",
    tempsChargeAC: "6h (0-100 % sur 11 kW)",
    coffre: 380,
    poids: 1650,
    longueur: 4380,
    segment: "SUV-compact",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["SUV", "chinoise", "pas-cher"],
    annee: 2025,
    description: `Le Leapmotor B10 est le SUV compact de Leapmotor, positionné entre le T03 et le C10. Il vise à concurrencer la MG4 et le BYD Atto 3 avec un prix agressif et une distribution via Stellantis.`,
    pointsForts: [
      "Prix compétitif sous 29 000 €",
      "Bonne autonomie (400 km WLTP)",
      "Distribution Stellantis",
      "Format SUV compact polyvalent",
    ],
    pointsFaibles: [
      "Modèle très récent, peu de recul",
      "Charge rapide limitée (80 kW)",
      "Non éligible au bonus",
      "Marque encore à prouver",
    ],
    source: "https://www.leapmotor.eu",
    dateMAJ: "2026-06-22",
  },

  // ─── XPENG G6 ─────────────────────────────────────────────────────
  {
    slug: "xpeng-g6",
    modele: "Xpeng G6",
    marque: "Xpeng",
    marqueSlug: "xpeng",
    prixBase: 42990,
    prixOccasion: null,
    autonomieWLTP: 570,
    autonomieReelle: 440,
    batterieKwh: 87.5,
    conso: 17.0,
    puissanceCh: 296,
    puissanceKw: 218,
    chargeRapideKw: 215,
    tempsChargeRapide: "20 min (10-80 %)",
    tempsChargeAC: "8h (0-100 % sur 11 kW)",
    coffre: 571,
    poids: 2065,
    longueur: 4753,
    segment: "SUV",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["SUV", "chinoise", "grande-autonomie"],
    annee: 2024,
    description: `Le Xpeng G6 est un SUV coupé chinois à architecture 800V, offrant une charge ultra-rapide jusqu'à 215 kW. Avec une grande autonomie et des technologies ADAS avancées, il se positionne comme un rival direct du Tesla Model Y.`,
    pointsForts: [
      "Architecture 800V : charge ultra-rapide 215 kW",
      "Grande autonomie (570 km WLTP)",
      "Technologies ADAS avancées (XNGP)",
      "Grand coffre (571 L)",
    ],
    pointsFaibles: [
      "Non éligible au bonus (Chine)",
      "Réseau Xpeng quasi inexistant en France",
      "SAV à construire en Europe",
      "Image de marque inconnue",
    ],
    source: "https://www.xpeng.com",
    dateMAJ: "2026-06-22",
  },

  // ─── XPENG G9 ─────────────────────────────────────────────────────
  {
    slug: "xpeng-g9",
    modele: "Xpeng G9",
    marque: "Xpeng",
    marqueSlug: "xpeng",
    prixBase: 52990,
    prixOccasion: null,
    autonomieWLTP: 570,
    autonomieReelle: 430,
    batterieKwh: 98,
    conso: 18.5,
    puissanceCh: 551,
    puissanceKw: 405,
    chargeRapideKw: 300,
    tempsChargeRapide: "15 min (10-80 %)",
    tempsChargeAC: "10h (0-100 % sur 11 kW)",
    coffre: 660,
    poids: 2320,
    longueur: 4891,
    segment: "SUV-premium",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["SUV", "chinoise", "grande-autonomie", "premium"],
    annee: 2024,
    description: `Le Xpeng G9 est le grand SUV premium de Xpeng, rival du BMW iX et du Mercedes EQE SUV. Son architecture 800V et sa charge à 300 kW en font l'un des véhicules électriques les plus rapides à recharger au monde (10-80 % en ~15 minutes).`,
    pointsForts: [
      "Charge ultra-rapide 300 kW",
      "Architecture 800V",
      "Habitacle très spacieux et premium",
      "Performances élevées (551 ch en bimotor)",
    ],
    pointsFaibles: [
      "Prix élevé (53 000 €)",
      "Poids très élevé (2 320 kg)",
      "Réseau Xpeng inexistant en France",
      "Non éligible au bonus",
    ],
    source: "https://www.xpeng.com",
    dateMAJ: "2026-06-22",
  },

  // ─── ZEEKR 001 ────────────────────────────────────────────────────
  {
    slug: "zeekr-001",
    modele: "Zeekr 001",
    marque: "Zeekr",
    marqueSlug: "zeekr",
    prixBase: 49990,
    prixOccasion: null,
    autonomieWLTP: 620,
    autonomieReelle: 480,
    batterieKwh: 100,
    conso: 18.0,
    puissanceCh: 544,
    puissanceKw: 400,
    chargeRapideKw: 200,
    tempsChargeRapide: "25 min (10-80 %)",
    tempsChargeAC: "10h (0-100 % sur 11 kW)",
    coffre: 587,
    poids: 2310,
    longueur: 4970,
    segment: "shooting-brake",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["grande-autonomie", "chinoise", "premium"],
    annee: 2024,
    description: `Le Zeekr 001 est un shooting brake (break de chasse) électrique premium de Zeekr (filiale de Geely). Avec 620 km d'autonomie WLTP, une batterie de 100 kWh et des performances de supercar (544 ch), il se positionne comme une alternative chinoise haut de gamme aux Porsche Taycan et BMW i4.`,
    pointsForts: [
      "Design shooting brake original",
      "620 km d'autonomie WLTP",
      "Performances exceptionnelles (544 ch)",
      "Charge rapide 200 kW",
    ],
    pointsFaibles: [
      "Non éligible au bonus (Chine)",
      "Réseau Zeekr embryonnaire en Europe",
      "Poids très élevé (2 310 kg)",
      "SAV et pièces à construire",
    ],
    source: "https://www.zeekr.com",
    dateMAJ: "2026-06-22",
  },

  // ─── BMW i4 ────────────────────────────────────────────────────────
  {
    slug: "bmw-i4",
    modele: "BMW i4",
    marque: "BMW",
    marqueSlug: "bmw",
    prixBase: 53550,
    prixOccasion: 38000,
    autonomieWLTP: 590,
    autonomieReelle: 460,
    batterieKwh: 83.9,
    conso: 16.1,
    puissanceCh: 340,
    puissanceKw: 250,
    chargeRapideKw: 205,
    tempsChargeRapide: "31 min (10-80 %)",
    tempsChargeAC: "8h15 (0-100 % sur 11 kW)",
    coffre: 470,
    poids: 2125,
    longueur: 4783,
    segment: "berline-premium",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["berline", "premium", "grande-autonomie"],
    annee: 2024,
    description: `La BMW i4 est la berline électrique premium de BMW, basée sur la plateforme de la Série 4 Gran Coupé. Avec sa grande autonomie et son comportement routier typiquement BMW, elle rivalise avec la Tesla Model 3 et la Mercedes EQE.`,
    pointsForts: [
      "Comportement routier dynamique (ADN BMW)",
      "Grande autonomie (590 km WLTP)",
      "Charge rapide 205 kW",
      "Finition premium",
    ],
    pointsFaibles: [
      "Prix élevé (> 53 000 €)",
      "Plateforme non native EV (partagée avec thermique)",
      "Poids élevé",
      "Tableau de bord controversé (iDrive 8)",
    ],
    source: "https://www.bmw.fr/fr/all-models/bmw-i/i4/overview.html",
    dateMAJ: "2026-06-22",
  },

  // ─── BMW iX1 ──────────────────────────────────────────────────────
  {
    slug: "bmw-ix1",
    modele: "BMW iX1",
    marque: "BMW",
    marqueSlug: "bmw",
    prixBase: 48950,
    prixOccasion: 35000,
    autonomieWLTP: 475,
    autonomieReelle: 370,
    batterieKwh: 64.7,
    conso: 16.3,
    puissanceCh: 313,
    puissanceKw: 230,
    chargeRapideKw: 130,
    tempsChargeRapide: "29 min (10-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 11 kW)",
    coffre: 490,
    poids: 1980,
    longueur: 4500,
    segment: "SUV-compact-premium",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "premium"],
    annee: 2023,
    description: `Le BMW iX1 est le SUV compact électrique d'entrée de gamme de BMW. Avec sa transmission intégrale de série et son coffre généreux, il offre la polyvalence attendue d'un X1 en version 100 % électrique.`,
    pointsForts: [
      "Transmission intégrale de série",
      "Bon coffre (490 L)",
      "Qualité premium BMW",
      "Comportement routier solide",
    ],
    pointsFaibles: [
      "Prix élevé pour le segment",
      "Charge rapide limitée à 130 kW",
      "Autonomie moyenne (475 km WLTP)",
      "Plateforme partagée avec thermique",
    ],
    source: "https://www.bmw.fr/fr/all-models/bmw-i/ix1/overview.html",
    dateMAJ: "2026-06-22",
  },

  // ─── AUDI Q4 e-tron ───────────────────────────────────────────────
  {
    slug: "audi-q4-e-tron",
    modele: "Audi Q4 e-tron",
    marque: "Audi",
    marqueSlug: "audi",
    prixBase: 47700,
    prixOccasion: 32000,
    autonomieWLTP: 562,
    autonomieReelle: 420,
    batterieKwh: 77,
    conso: 16.4,
    puissanceCh: 286,
    puissanceKw: 210,
    chargeRapideKw: 175,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 520,
    poids: 2135,
    longueur: 4588,
    segment: "SUV-compact-premium",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "premium", "grande-autonomie"],
    annee: 2024,
    description: `L'Audi Q4 e-tron est le SUV compact électrique d'Audi, basé sur la plateforme MEB du groupe Volkswagen. Avec une finition haut de gamme, un habitacle spacieux et une grande autonomie, il se positionne comme le premium accessible de la gamme électrique Audi.`,
    pointsForts: [
      "Finition premium Audi",
      "Grande autonomie (562 km WLTP)",
      "Habitacle spacieux et soigné",
      "Affichage tête haute AR en option",
    ],
    pointsFaibles: [
      "Prix élevé (> 47 000 €)",
      "Poids élevé (2 135 kg)",
      "Options très chères",
      "Design conservateur",
    ],
    source: "https://www.audi.fr/fr/web/fr/modeles/q4-e-tron.html",
    dateMAJ: "2026-06-22",
  },

  // ─── MERCEDES EQA ─────────────────────────────────────────────────
  {
    slug: "mercedes-eqa",
    modele: "Mercedes EQA",
    marque: "Mercedes",
    marqueSlug: "mercedes",
    prixBase: 50950,
    prixOccasion: 32000,
    autonomieWLTP: 531,
    autonomieReelle: 400,
    batterieKwh: 70.5,
    conso: 15.7,
    puissanceCh: 190,
    puissanceKw: 140,
    chargeRapideKw: 100,
    tempsChargeRapide: "32 min (10-80 %)",
    tempsChargeAC: "5h45 (10-100 % sur 11 kW)",
    coffre: 340,
    poids: 2040,
    longueur: 4463,
    segment: "SUV-compact-premium",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["SUV", "premium"],
    annee: 2024,
    description: `Le Mercedes EQA est le SUV compact électrique d'entrée de gamme de Mercedes-Benz. Basé sur le GLA, il offre le confort et la finition Mercedes dans un format compact électrique. La version restylée 2024 améliore l'autonomie à 531 km WLTP.`,
    pointsForts: [
      "Confort et finition Mercedes",
      "Bonne autonomie (531 km WLTP restylé)",
      "Système MBUX intuitif",
      "Réseau Mercedes dense en France",
    ],
    pointsFaibles: [
      "Prix élevé (> 50 000 €)",
      "Coffre petit (340 L)",
      "Charge rapide limitée à 100 kW",
      "Plateforme partagée avec thermique",
    ],
    source: "https://www.mercedes-benz.fr/passengercars/models/suv/eqa.html",
    dateMAJ: "2026-06-22",
  },

  // ─── MERCEDES EQB ─────────────────────────────────────────────────
  {
    slug: "mercedes-eqb",
    modele: "Mercedes EQB",
    marque: "Mercedes",
    marqueSlug: "mercedes",
    prixBase: 53950,
    prixOccasion: 35000,
    autonomieWLTP: 535,
    autonomieReelle: 400,
    batterieKwh: 70.5,
    conso: 16.2,
    puissanceCh: 190,
    puissanceKw: 140,
    chargeRapideKw: 100,
    tempsChargeRapide: "32 min (10-80 %)",
    tempsChargeAC: "5h45 (10-100 % sur 11 kW)",
    coffre: 495,
    poids: 2175,
    longueur: 4684,
    segment: "SUV-familial-premium",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["SUV", "premium", "familiale"],
    annee: 2024,
    description: `Le Mercedes EQB est le SUV familial électrique de Mercedes, disponible en configuration 5 ou 7 places. Basé sur le GLB, il offre la polyvalence d'un véhicule familial avec la finition Mercedes, idéal pour les familles recherchant un premium électrique spacieux.`,
    pointsForts: [
      "Disponible en 7 places",
      "Coffre généreux (495 L en 5 places)",
      "Finition et confort Mercedes",
      "Bonne autonomie (535 km WLTP)",
    ],
    pointsFaibles: [
      "Prix très élevé (> 53 000 €)",
      "3e rangée de sièges très étroite",
      "Charge rapide limitée à 100 kW",
      "Poids élevé (2 175 kg)",
    ],
    source: "https://www.mercedes-benz.fr/passengercars/models/suv/eqb.html",
    dateMAJ: "2026-06-22",
  },

  // ─── SKODA ENYAQ ──────────────────────────────────────────────────
  {
    slug: "skoda-enyaq",
    modele: "Skoda Enyaq",
    marque: "Skoda",
    marqueSlug: "skoda",
    prixBase: 42990,
    prixOccasion: 30000,
    autonomieWLTP: 568,
    autonomieReelle: 430,
    batterieKwh: 77,
    conso: 15.9,
    puissanceCh: 286,
    puissanceKw: 210,
    chargeRapideKw: 175,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 585,
    poids: 2164,
    longueur: 4649,
    segment: "SUV-familial",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "familiale", "grande-autonomie"],
    annee: 2024,
    description: `Le Skoda Enyaq est le SUV familial électrique de Skoda, cousin du Volkswagen ID.4. Avec son coffre de 585 litres, le plus grand du segment sur plateforme MEB, et son rapport équipement/prix, c'est l'option pragmatique par excellence pour les familles.`,
    pointsForts: [
      "Coffre de référence (585 L)",
      "Rapport qualité-prix excellent",
      "Habitacle très spacieux",
      "Simply Clever (astuces pratiques Skoda)",
    ],
    pointsFaibles: [
      "Design un peu fade",
      "Image de marque moins premium",
      "Poids élevé (2 164 kg)",
      "Réseau Skoda moins dense en France",
    ],
    source: "https://www.skoda.fr/modeles/enyaq",
    dateMAJ: "2026-06-22",
  },
  // ─── NIO ET5 ──────────────────────────────────────────────────────
  {
    slug: "nio-et5",
    modele: "Nio ET5",
    marque: "Nio",
    marqueSlug: "nio",
    prixBase: 45900,
    prixOccasion: null,
    autonomieWLTP: 560,
    autonomieReelle: 440,
    batterieKwh: 75,
    conso: 15.8,
    puissanceCh: 489,
    puissanceKw: 360,
    chargeRapideKw: 130,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "7h (0-100 % sur 11 kW)",
    coffre: 386,
    poids: 2080,
    longueur: 4790,
    segment: "berline",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["berline", "chinoise", "grande-autonomie"],
    annee: 2024,
    statut: "dispo",
    description: `La Nio ET5 est la berline électrique d'accès de la marque chinoise Nio, positionnée face à la Tesla Model 3 et à la BMW i4. Longue de 4,79 m, elle adopte un profil de coupé quatre portes élégant, avec un coefficient de traînée (Cx) de 0,24 qui contribue à une excellente efficience aérodynamique.

Sous le capot, la Nio ET5 embarque deux moteurs électriques (un à induction à l'avant, un à aimants permanents à l'arrière) développant une puissance combinée de 489 ch (360 kW) et un couple de 700 Nm. Le 0 à 100 km/h est abattu en 4,0 secondes, des performances qui la placent au niveau d'une berline sportive thermique haut de gamme.

La particularité majeure de Nio réside dans sa technologie Battery Swap : en moins de 5 minutes, la batterie peut être échangée dans l'une des stations Nio Power Swap. Ce système élimine la contrainte de la recharge longue et permet de proposer le véhicule sans la batterie (BaaS, Battery as a Service), réduisant le prix d'achat de plusieurs milliers d'euros.

L'ET5 est disponible avec deux tailles de batterie : la Standard Range de 75 kWh (560 km WLTP) et la Long Range de 100 kWh (offrant plus de 700 km WLTP). En charge rapide classique, elle accepte jusqu'à 130 kW en DC, permettant un 10-80 % en environ 30 minutes.

À l'intérieur, l'ET5 propose un habitacle soigné avec un cockpit numérique de 10,2 pouces, un écran central AMOLED de 12,8 pouces et un head-up display AR de 60 pouces projeté sur le pare-brise. Le système d'aide à la conduite Nio Aquila (33 capteurs dont un lidar) est l'un des plus avancés du marché.

Le coffre de 386 litres est correct pour le segment des berlines, et l'habitabilité arrière est généreuse grâce à l'empattement de 2 888 mm. L'intérieur fait la part belle aux matériaux durables (microfibre, cuir végan) et aux finitions soignées.

Nio prévoit une expansion en France avec l'ouverture de Nio Houses (showrooms et espaces communautaires) et de stations Battery Swap. Le constructeur chinois mise sur une expérience client premium, avec un service d'abonnement tout compris incluant batterie, entretien et assistance.

Avec un prix d'entrée à 45 900 € (avec batterie) ou environ 35 000 € en formule BaaS (location de batterie à ~170 €/mois), la Nio ET5 propose un rapport prestations/prix très compétitif face aux berlines premium européennes.`,
    pointsForts: [
      "Technologie Battery Swap (échange en 5 min)",
      "Performances élevées (489 ch, 0-100 en 4,0 s)",
      "Option BaaS réduisant le prix d'achat",
      "Système ADAS Aquila avec lidar (33 capteurs)",
      "Head-up display AR de 60 pouces",
      "Grande autonomie avec batterie 100 kWh (>700 km WLTP)",
    ],
    pointsFaibles: [
      "Non éligible au bonus écologique (Chine)",
      "Réseau Nio encore absent en France",
      "Charge rapide DC limitée à 130 kW",
      "Stations Battery Swap à déployer en France",
    ],
    source: "https://www.nio.com/et5",
    dateMAJ: "2026-06-22",
  },

  // ─── NIO ET7 ──────────────────────────────────────────────────────
  {
    slug: "nio-et7",
    modele: "Nio ET7",
    marque: "Nio",
    marqueSlug: "nio",
    prixBase: 81900,
    prixOccasion: null,
    autonomieWLTP: 580,
    autonomieReelle: 450,
    batterieKwh: 100,
    conso: 18.5,
    puissanceCh: 653,
    puissanceKw: 480,
    chargeRapideKw: 140,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "10h (0-100 % sur 11 kW)",
    coffre: 363,
    poids: 2379,
    longueur: 5101,
    segment: "berline-premium",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["berline", "premium", "chinoise", "grande-autonomie"],
    annee: 2024,
    statut: "dispo",
    description: `La Nio ET7 est la berline amiral du constructeur chinois Nio, positionnée face aux Mercedes EQS, BMW i7 et Tesla Model S. Avec ses 5,10 m de longueur et son design fluide signé Kris Tomasson (ex-BMW), elle incarne l'ambition premium de Nio sur le marché mondial.

La motorisation de l'ET7 impressionne : deux moteurs électriques délivrent 653 ch (480 kW) et 850 Nm de couple, propulsant cette grande berline de 2,4 tonnes de 0 à 100 km/h en seulement 3,8 secondes. La suspension pneumatique adaptative et les amortisseurs à variation continue (CDC) assurent un confort de roulement digne des meilleures berlines allemandes.

Nio propose l'ET7 avec sa batterie de 100 kWh de série, offrant 580 km d'autonomie WLTP. Une version 150 kWh (batterie semi-solide) a été annoncée, promettant plus de 1 000 km WLTP. Comme tous les modèles Nio, l'ET7 est compatible avec le système Battery Swap, permettant un échange de batterie en moins de 5 minutes.

L'intérieur de l'ET7 est un concentré de technologie et de luxe : tableau de bord épuré avec un écran AMOLED de 12,8 pouces, système audio Dolby Atmos 7.1.4 avec 23 haut-parleurs, sièges ventilés et massants, et un head-up display en réalité augmentée. Le système de conduite assistée Nio Aquila Super Sensing embarque 33 capteurs haute performance dont un lidar Innovusion longue portée (500 m).

Le coffre de 363 litres est modeste pour une berline de cette taille, mais l'habitabilité arrière est royale avec un empattement de 3 060 mm. Les passagers arrière disposent de sièges inclinables électriquement et d'un écran de divertissement dédié en option.

La qualité de fabrication est au rendez-vous : matériaux Haptex (cuir végan premium), boiseries Karuun (rotin durable), et assemblage soigné. L'ET7 a obtenu 5 étoiles Euro NCAP avec des scores élevés dans toutes les catégories.

En France, la Nio ET7 s'adressera à une clientèle recherchant une alternative aux berlines allemandes premium, avec l'avantage du Battery Swap et du programme BaaS. En formule BaaS, le prix peut descendre significativement (batterie louée à ~290 €/mois).`,
    pointsForts: [
      "Performances de supercar (653 ch, 0-100 en 3,8 s)",
      "Battery Swap compatible (échange en 5 min)",
      "Intérieur ultra-premium (Dolby Atmos, sièges massants)",
      "Système ADAS lidar longue portée (500 m)",
      "Suspension pneumatique adaptative",
      "5 étoiles Euro NCAP",
    ],
    pointsFaibles: [
      "Prix élevé (81 900 € avec batterie)",
      "Non éligible au bonus (Chine)",
      "Poids très élevé (2 379 kg)",
      "Coffre modeste pour le segment (363 L)",
      "Réseau Nio inexistant en France pour l'instant",
    ],
    source: "https://www.nio.com/et7",
    dateMAJ: "2026-06-22",
  },

  // ─── ALPINE A390 ──────────────────────────────────────────────────
  {
    slug: "alpine-a390",
    modele: "Alpine A390",
    marque: "Alpine",
    marqueSlug: "alpine",
    prixBase: 46000,
    prixOccasion: null,
    autonomieWLTP: 550,
    autonomieReelle: 420,
    batterieKwh: 87,
    conso: 17.5,
    puissanceCh: 340,
    puissanceKw: 250,
    chargeRapideKw: 150,
    tempsChargeRapide: "30 min (15-80 %)",
    tempsChargeAC: "9h (0-100 % sur 11 kW)",
    coffre: 500,
    poids: 1990,
    longueur: 4520,
    segment: "SUV-sportif",
    origine: "FR",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "made-in-france", "grande-autonomie"],
    annee: 2026,
    statut: "a-venir",
    sortiePrevue: "2026",
    description: `L'Alpine A390 est le futur SUV sportif 100 % électrique d'Alpine, attendu pour 2026. Dévoilé sous forme de concept au Mondial de l'Auto de Paris en octobre 2024, il incarne la vision d'Alpine pour un SUV alliant sportivité, technologie et ADN de compétition. Le design extérieur, signé Antony Villain (directeur du design Alpine), reprend les codes de la marque : silhouette sculptée, feux en X caractéristiques et lignes tendues évoquant l'aérodynamique des monoplaces Alpine de Formule 1.

L'A390 sera basé sur la plateforme AmpR Medium (ex-CMF-EV) du groupe Renault, partagée avec le Renault Scénic E-Tech mais optimisée par les ingénieurs d'Alpine pour offrir des performances dynamiques supérieures. La version de base devrait développer environ 340 ch (250 kW), tandis qu'une version haute performance pourrait atteindre 500 ch grâce à une configuration tri-moteur.

La batterie de 87 kWh promet une autonomie d'environ 550 km WLTP, avec une charge rapide jusqu'à 150 kW permettant de récupérer 300 km en 20 minutes. Le châssis sera équipé de suspensions pilotées et d'un différentiel arrière actif pour garantir un comportement routier digne du blason Alpine.

À l'intérieur, le concept A390 préfigure un habitacle futuriste avec un bandeau lumineux traversant le tableau de bord, un volant inspiré de la compétition et des sièges baquets sport. Le système d'infodivertissement devrait reprendre la base openR link (Google intégré) avec une surcouche Alpine spécifique, incluant un mode « piste » avec télémétrie en temps réel.

Avec un prix estimé autour de 46 000 € pour la version d'entrée, l'Alpine A390 se positionnerait entre le Renault Scénic E-Tech et les SUV premium allemands (BMW iX1, Audi Q4 e-tron). La production est prévue à l'usine de Douai (Hauts-de-France), garantissant l'éligibilité au bonus écologique.

L'A390 est un modèle stratégique pour Alpine, qui vise à devenir une marque 100 % électrique et sportive à part entière, au-delà de son héritage de constructeur de voitures de sport. Il représente le segment le plus porteur (SUV) avec la touche dynamique qui fait l'ADN d'Alpine depuis 1955.

Les données techniques présentées ici sont provisoires et basées sur les informations communiquées par Alpine lors de la présentation du concept. Les spécifications définitives seront confirmées à l'approche du lancement commercial, prévu au second semestre 2026.`,
    pointsForts: [
      "ADN sportif Alpine (suspensions pilotées, différentiel actif)",
      "Production française (Douai), éligible au bonus",
      "Plateforme AmpR Medium éprouvée (base Scénic E-Tech)",
      "Design distinctif inspiré de la F1 Alpine",
      "Version haute performance annoncée (~500 ch)",
      "Grande autonomie estimée (~550 km WLTP)",
    ],
    pointsFaibles: [
      "Modèle non encore disponible (sortie prévue 2026)",
      "Données techniques encore provisoires",
      "Prix potentiellement élevé en finition haute",
      "Réseau Alpine limité en France (~40 points de vente)",
    ],
    source: "https://www.alpinecars.fr/concept-cars/a390.html",
    dateMAJ: "2026-06-22",
  },
{
    slug: "hyundai-ioniq-5",
    modele: "Hyundai Ioniq 5",
    marque: "Hyundai",
    marqueSlug: "hyundai",
    prixBase: 47000,
    prixOccasion: null,
    autonomieWLTP: 507,
    autonomieReelle: 420,
    batterieKwh: 77.4,
    conso: 16.8,
    puissanceCh: 325,
    puissanceKw: 239,
    chargeRapideKw: 230,
    tempsChargeRapide: "18 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 527,
    poids: 1985,
    longueur: 4635,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["800V", "charge-ultra-rapide", "SUV", "familial", "V2L"],
    annee: 2024,
    description: `Le Hyundai Ioniq 5 s'est imposé comme l'une des références incontournables du marché des véhicules électriques depuis son lancement. Construit sur la plateforme E-GMP dédiée aux véhicules électriques du groupe Hyundai-Kia, ce SUV compact au design rétrofuturiste a su séduire un public large grâce à ses performances techniques remarquables et son habitabilité surprenante. Son architecture 800 volts, autrefois réservée aux sportives de prestige comme la Porsche Taycan, constitue l'un de ses atouts majeurs et le distingue nettement de la concurrence dans sa gamme de prix.

Le design extérieur du Ioniq 5 ne laisse personne indifférent. Ses lignes anguleuses et pixelisées rendent hommage au Hyundai Pony des années 1970, tout en projetant une vision résolument moderne de l'automobile. Les feux à motifs paramétriques, la silhouette trapézoïdale et les jantes de 20 pouces contribuent à créer une identité visuelle forte et immédiatement reconnaissable. Avec ses 4 635 mm de longueur et un empattement généreux de 3 000 mm, le Ioniq 5 offre un espace intérieur digne d'un véhicule de segment supérieur, un avantage direct de sa plateforme dédiée à plancher plat.

À l'intérieur, l'ambiance est à la fois épurée et technologique. Le double écran de 12,3 pouces intègre l'instrumentation numérique et le système d'infodivertissement, offrant une interface fluide et intuitive. La console centrale coulissante libère un espace de rangement considérable et s'adapte aux besoins du conducteur. Les matériaux recyclés utilisés pour les garnitures de sièges et les panneaux de porte témoignent de l'engagement écologique de Hyundai. Les sièges avant à réglage électrique disposent d'une fonction relaxation permettant de les incliner presque à plat, idéale lors des pauses de recharge.

La motorisation du Ioniq 5 dans sa version à grande batterie de 77,4 kWh développe 325 chevaux en configuration à deux moteurs avec transmission intégrale. Cette puissance permet des accélérations franches avec un 0 à 100 km/h abattu en 5,2 secondes, rendant les dépassements et les insertions sur autoroute parfaitement sereins. La tenue de route est assurée et le confort de suspension bien calibré, même si certains conducteurs pourront trouver la direction légèrement déconnectée à haute vitesse. Le mode de conduite Sport raffermit l'ensemble et offre une expérience plus dynamique.

L'autonomie annoncée de 507 km en cycle WLTP se traduit par environ 420 km en conditions réelles mixtes, un chiffre très honorable pour un SUV de cette taille et de ce poids. La consommation moyenne tourne autour de 16,8 kWh aux 100 km, un résultat remarquable compte tenu du gabarit du véhicule. En conduite exclusivement autoroutière à 130 km/h, l'autonomie descend naturellement aux alentours de 330 km, ce qui reste suffisant pour la plupart des trajets longue distance avec une pause recharge stratégique.

C'est justement sur la recharge que le Ioniq 5 excelle de manière spectaculaire. Grâce à son architecture 800 volts et sa capacité de charge maximale de 230 kW en courant continu, le véhicule peut récupérer de 10 à 80 % de batterie en seulement 18 minutes sur une borne compatible. Cette vitesse de recharge place le Ioniq 5 parmi les véhicules les plus rapides à recharger du marché, rivalisant avec des modèles bien plus onéreux. La fonction Vehicle-to-Load (V2L) permet par ailleurs d'utiliser la batterie comme source d'énergie externe, alimentant des appareils électriques jusqu'à 3,6 kW, un atout pratique pour le camping ou les situations d'urgence.

Le coffre de 527 litres offre un volume de chargement généreux pour un SUV de ce segment, complété par un frunk de 57 litres sous le capot avant. La banquette arrière coulissante et rabattable en configuration 60/40 permet d'adapter l'espace aux besoins de chargement. La modularité intérieure est l'un des points forts du véhicule, facilitant aussi bien les courses quotidiennes que les départs en vacances en famille.

En matière de sécurité et d'aides à la conduite, le Ioniq 5 embarque la suite Highway Driving Assist 2, comprenant le maintien actif dans la voie, le régulateur de vitesse adaptatif avec fonction Stop & Go, et la surveillance des angles morts. Le système de stationnement automatique et la caméra à vision panoramique complètent un arsenal technologique complet. Le véhicule a obtenu la note maximale de cinq étoiles aux tests Euro NCAP, confirmant son excellent niveau de protection.

Le Ioniq 5 se positionne comme un choix rationnel et séduisant dans le segment des SUV électriques compacts, alliant technologie de pointe, habitabilité généreuse et recharge ultra-rapide à un tarif compétitif face aux Tesla Model Y et Volkswagen ID.4.`,
    pointsForts: [
      "Architecture 800V permettant une recharge ultra-rapide de 10 à 80 % en 18 minutes",
      "Habitabilité exceptionnelle grâce à l'empattement long et au plancher plat",
      "Fonction V2L pour alimenter des appareils électriques externes",
      "Design rétrofuturiste distinctif et immédiatement reconnaissable",
      "Coffre généreux de 527 litres complété par un frunk de 57 litres",
    ],
    pointsFaibles: [
      "Poids élevé de près de 2 tonnes pénalisant légèrement la consommation autoroutière",
      "Direction manquant de ressenti à haute vitesse",
      "Qualité perçue de certains plastiques intérieurs en retrait face à la concurrence premium",
      "Absence de toit panoramique sur les finitions d'entrée de gamme",
    ],
    source: "https://www.hyundai.com/fr/modeles/ioniq-5.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "hyundai-ioniq-6",
    modele: "Hyundai Ioniq 6",
    marque: "Hyundai",
    marqueSlug: "hyundai",
    prixBase: 47000,
    prixOccasion: null,
    autonomieWLTP: 614,
    autonomieReelle: 510,
    batterieKwh: 77.4,
    conso: 14.3,
    puissanceCh: 325,
    puissanceKw: 239,
    chargeRapideKw: 233,
    tempsChargeRapide: "18 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 401,
    poids: 1985,
    longueur: 4855,
    segment: "berline",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["berline", "aérodynamique", "800V", "charge-ultra-rapide", "efficience"],
    annee: 2024,
    description: `Le Hyundai Ioniq 6 représente une proposition audacieuse sur le marché des berlines électriques, un segment longtemps dominé par la Tesla Model 3. Avec un coefficient de traînée record de 0,21, cette berline profilée repousse les limites de l'aérodynamisme automobile et en récolte les fruits sous la forme d'une autonomie exceptionnelle pouvant atteindre 614 km en cycle WLTP. Partageant la plateforme E-GMP 800 volts avec le Ioniq 5, elle apporte une alternative radicalement différente en termes de style et d'efficience énergétique.

Le design de l'Ioniq 6 est sans conteste son élément le plus polarisant. Inspirée du concept Prophecy, la berline adopte une silhouette en forme de goutte d'eau qui tranche avec les codes esthétiques traditionnels du segment. Les lignes fluides et arrondies, les poignées de porte affleurantes et la signature lumineuse à plus de 700 LED paramétriques créent une identité visuelle unique. L'arrière en forme de queue de canard intègre un aileron subtil et des feux traversants qui renforcent le caractère futuriste du véhicule. Si certains la trouvent trop atypique, d'autres saluent le courage stylistique de Hyundai dans un marché souvent conservateur.

L'intérieur de l'Ioniq 6 cultive une ambiance cocon propice à la sérénité. Le double écran incurvé de 12,3 pouces, traité antireflet, domine la planche de bord minimaliste. L'éclairage d'ambiance à 64 couleurs permet de personnaliser l'atmosphère selon l'humeur du conducteur, tandis que les matériaux biosourcés et recyclés habillent l'habitacle avec une conscience écologique affirmée. Les sièges avant offrent un excellent maintien latéral et disposent de la ventilation en plus du chauffage, un confort appréciable en toute saison. La position de conduite basse, typique d'une berline, procure une sensation de connexion avec la route que le Ioniq 5, plus haut perché, ne peut offrir.

Le revers de cette silhouette aérodynamique réside dans l'espace arrière. Si la garde au tête reste acceptable grâce à des assises sculptées dans le plancher, l'accès aux places arrière est moins aisé que dans un SUV et le coffre de 401 litres, bien qu'honnête pour une berline, ne rivalise pas avec celui de son cousin Ioniq 5. Le seuil de chargement est également assez haut, ce qui peut compliquer le chargement d'objets lourds.

Sur la route, l'Ioniq 6 brille par son efficience remarquable. La consommation moyenne de 14,3 kWh aux 100 km en fait l'un des véhicules électriques les plus économes du marché, tous segments confondus. En conditions réelles, l'autonomie avoisine les 510 km en usage mixte, et même sur autoroute à 130 km/h, il est possible de parcourir plus de 400 km, un résultat exceptionnel. Cette frugalité se traduit aussi par des coûts de recharge réduits, un argument de poids pour les gros rouleurs.

La recharge bénéficie de la même architecture 800 volts que le Ioniq 5, avec une puissance maximale acceptée de 233 kW en courant continu. Le passage de 10 à 80 % s'effectue en environ 18 minutes, rendant les longs trajets aussi fluides qu'avec un véhicule thermique. La courbe de charge est remarquablement plate, maintenant un débit élevé sur une large plage de pourcentage de batterie, ce qui optimise chaque arrêt aux bornes rapides.

Le comportement routier de l'Ioniq 6 se distingue par un centre de gravité bas qui favorise une tenue de route précise et un confort de roulement exemplaire. La version à deux moteurs développe 325 chevaux et abat le 0 à 100 km/h en 5,1 secondes, offrant des performances sportives sans compromis sur le confort. L'insonorisation est particulièrement soignée, avec un habitacle remarquablement silencieux même à vitesse autoroutière, renforçant le caractère grand-tourisme du véhicule.

En matière de technologies embarquées, l'Ioniq 6 dispose du Highway Driving Assist 2, de la reconnaissance des panneaux de signalisation, de la caméra à vision panoramique et du système de stationnement automatique. La compatibilité Apple CarPlay et Android Auto sans fil est de série, tout comme le chargeur de smartphone à induction. Le système audio Bose à 8 haut-parleurs offre une restitution sonore de qualité.

L'Ioniq 6 se positionne comme la berline électrique de référence pour les conducteurs privilégiant l'efficience et l'autonomie, proposant une alternative crédible et distincte à la Tesla Model 3 avec un caractère résolument européen dans sa conception et son raffinement.`,
    pointsForts: [
      "Coefficient aérodynamique record de 0,21 garantissant une autonomie exceptionnelle de 614 km WLTP",
      "Consommation ultra-basse de 14,3 kWh/100 km, parmi les meilleures du marché",
      "Architecture 800V avec recharge de 10 à 80 % en 18 minutes",
      "Insonorisation remarquable et confort de roulement exemplaire",
      "Design audacieux et identité visuelle unique dans le paysage automobile",
    ],
    pointsFaibles: [
      "Coffre de 401 litres limité par la ligne plongeante du toit avec seuil de chargement haut",
      "Accès aux places arrière moins aisé que dans un SUV en raison de la garde au toit réduite",
      "Design clivant qui ne fait pas l'unanimité auprès du public",
      "Visibilité arrière restreinte par la lunette étroite",
    ],
    source: "https://www.hyundai.com/fr/modeles/ioniq-6.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "hyundai-kona-electric",
    modele: "Hyundai Kona Electric",
    marque: "Hyundai",
    marqueSlug: "hyundai",
    prixBase: 36000,
    prixOccasion: null,
    autonomieWLTP: 490,
    autonomieReelle: 400,
    batterieKwh: 65.4,
    conso: 14.7,
    puissanceCh: 218,
    puissanceKw: 160,
    chargeRapideKw: 102,
    tempsChargeRapide: "41 min (10-80 %)",
    tempsChargeAC: "6h45 (0-100 % sur 11 kW)",
    coffre: 466,
    poids: 1740,
    longueur: 4355,
    segment: "SUV-urbain",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV-urbain", "polyvalent", "compact", "familial", "bon-rapport-qualité-prix"],
    annee: 2024,
    description: `Le Hyundai Kona Electric de deuxième génération incarne la vision de Hyundai pour un SUV électrique compact accessible et polyvalent. Entièrement repensé pour 2024, ce modèle abandonne la plateforme partagée avec la version thermique au profit d'une architecture optimisée pour l'électrique, gagnant en habitabilité, en confort et en modernité technologique. Dans un segment de plus en plus concurrentiel, le Kona Electric se distingue par son équilibre remarquable entre autonomie, prix et praticité quotidienne.

Le design extérieur du nouveau Kona Electric marque une rupture nette avec son prédécesseur. Les lignes sont plus matures, plus horizontales, avec un capot plat et des flancs sculptés qui lui confèrent une présence sur la route bien supérieure à celle de la génération précédente. La face avant adopte le nouveau langage stylistique de Hyundai avec des feux de jour à motifs pixelisés et une calandre pleine intégrant subtilement les capteurs des aides à la conduite. Les jantes aérodynamiques de 17 pouces participent à l'optimisation de la consommation tout en préservant un style dynamique. Avec 4 355 mm de longueur, le Kona Electric a grandi de 15 cm par rapport à l'ancien modèle, ce qui profite directement à l'espace intérieur.

À bord, la transformation est encore plus spectaculaire. Le Kona Electric adopte désormais un double écran de 12,3 pouces intégré dans une dalle unique, reprenant les codes du Ioniq 5 dans un format plus compact. L'interface est réactive et intuitive, compatible Apple CarPlay et Android Auto sans fil. La console centrale flottante libère un espace de rangement sous le tunnel central, et les rangements dans les portières sont dimensionnés pour accueillir des bouteilles d'un litre. Les matériaux utilisés sont de bonne facture pour le segment, avec des inserts en tissu recyclé sur les panneaux de porte et une finition soignée dans l'ensemble.

La batterie de 65,4 kWh alimente un moteur électrique de 218 chevaux entraînant les roues avant. Cette puissance est amplement suffisante pour un usage quotidien et permet des reprises franches en ville comme sur route. Le 0 à 100 km/h est abattu en 7,8 secondes, un temps tout à fait honorable pour un SUV compact à vocation familiale. Le châssis a été retravaillé pour offrir un meilleur compromis entre confort et dynamisme, avec une suspension arrière multibras qui absorbe efficacement les irrégularités de la route tout en conservant une bonne tenue en virage.

L'autonomie de 490 km en cycle WLTP est impressionnante pour un véhicule de cette taille et de ce prix. En conditions réelles, comptez environ 400 km en usage mixte ville-route, et autour de 320 km sur autoroute à 130 km/h. La consommation moyenne de 14,7 kWh aux 100 km témoigne de l'efficience du groupe motopropulseur et de l'aérodynamisme travaillé de la carrosserie. Pour les petits budgets ou les conducteurs urbains, une version à batterie de 48,4 kWh est également disponible, offrant environ 370 km d'autonomie WLTP à un tarif encore plus attractif.

La recharge rapide en courant continu accepte jusqu'à 102 kW, permettant de passer de 10 à 80 % en environ 41 minutes. Ce n'est certes pas aussi rapide que les modèles 800V de la gamme Ioniq, mais cela reste parfaitement adapté aux pauses déjeuner ou café lors des longs trajets. En courant alternatif sur une wallbox de 11 kW, la recharge complète s'effectue en 6 heures et 45 minutes, idéale pour une recharge nocturne à domicile.

Le coffre de 466 litres constitue un excellent volume pour le segment, surpassant même certains concurrents plus grands. La banquette arrière se rabat en configuration 60/40, permettant d'étendre significativement le volume de chargement pour les déménagements ou les voyages. Un petit frunk sous le capot avant offre quelques litres supplémentaires pour ranger les câbles de recharge.

L'équipement de sécurité est complet, avec le freinage automatique d'urgence, le maintien dans la voie, le régulateur adaptatif et la surveillance des angles morts. La caméra de recul avec lignes directrices dynamiques et les capteurs de stationnement avant et arrière facilitent les manœuvres en milieu urbain. Le Kona Electric a décroché cinq étoiles aux tests Euro NCAP, confirmant son niveau de protection élevé.

Le Kona Electric se positionne comme le choix intelligent pour les familles cherchant un SUV électrique compact alliant grande autonomie, polyvalence au quotidien et budget maîtrisé, sans sacrifier le plaisir de conduite ni les technologies modernes.`,
    pointsForts: [
      "Excellent rapport autonomie-prix avec 490 km WLTP pour 36 000 euros",
      "Coffre spacieux de 466 litres adapté à un usage familial",
      "Consommation maîtrisée de 14,7 kWh/100 km",
      "Habitabilité en net progrès grâce à l'empattement allongé de la deuxième génération",
      "Cinq étoiles Euro NCAP et équipement de sécurité complet de série",
    ],
    pointsFaibles: [
      "Recharge rapide limitée à 102 kW, plus lente que les modèles 800V de la gamme Ioniq",
      "Transmission aux roues avant uniquement, pas de version à transmission intégrale",
      "Amortissement un peu ferme sur les routes dégradées avec les jantes de 17 pouces",
    ],
    source: "https://www.hyundai.com/fr/modeles/kona-electric.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "hyundai-inster",
    modele: "Hyundai Inster",
    marque: "Hyundai",
    marqueSlug: "hyundai",
    prixBase: 25000,
    prixOccasion: null,
    autonomieWLTP: 370,
    autonomieReelle: 300,
    batterieKwh: 49,
    conso: 14.6,
    puissanceCh: 115,
    puissanceKw: 85,
    chargeRapideKw: 85,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 11 kW)",
    coffre: 280,
    poids: 1400,
    longueur: 3825,
    segment: "mini-citadine",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["citadine", "abordable", "compact", "urbain", "bonus-écologique"],
    annee: 2024,
    description: `Le Hyundai Inster débarque sur le marché européen avec une ambition claire : démocratiser la voiture électrique en proposant une mini-citadine à la fois abordable, bien équipée et dotée d'une autonomie surprenante pour sa catégorie. Dans un segment dominé par la Dacia Spring d'un côté et les Fiat 500e et Renault 5 de l'autre, l'Inster se positionne comme un compromis idéal entre prix contenu et prestations généreuses. Avec un tarif de base autour de 25 000 euros, éligible au bonus écologique, ce petit gabarit promet de séduire un public large à la recherche d'une mobilité électrique sans compromis excessif.

Le design de l'Inster joue la carte de la sympathie et de la modernité. Ses formes cubiques et ses lignes épurées rappellent les kei cars japonais, ces petites voitures urbaines optimisées pour l'espace. Les feux à LED aux motifs circulaires, les protections de bas de caisse contrastées et les barres de toit de série confèrent au véhicule un look aventurier inattendu pour une citadine. Malgré ses 3 825 mm de longueur compacts, l'Inster parvient à dégager une présence visuelle étonnante grâce à ses proportions bien étudiées, avec un toit haut et des porte-à-faux réduits au minimum.

L'intérieur de l'Inster est une véritable surprise. Hyundai a réussi à intégrer un double écran de 10,25 pouces, une climatisation automatique et un volant multifonction chauffant dans un véhicule de cette catégorie, des équipements habituellement réservés aux segments supérieurs. L'espace à bord est remarquable pour une voiture de moins de 3,9 mètres. Les passagers arrière bénéficient d'une garde au toit généreuse et d'un espace aux genoux acceptable pour des trajets urbains. Les sièges arrière sont rabattables et coulissants, offrant une modularité peu commune dans cette catégorie. Le coffre de 280 litres est correct pour le segment et peut être étendu en rabattant la banquette arrière.

Sous le plancher, la batterie de 49 kWh constitue l'un des atouts majeurs de l'Inster. Cette capacité généreuse pour une mini-citadine lui confère une autonomie WLTP de 370 km, un chiffre qui place le véhicule loin devant la Dacia Spring et ses 230 km, et au niveau de concurrents bien plus onéreux. En conditions réelles, comptez environ 300 km en usage mixte, ce qui rend l'Inster capable de réaliser la majorité des trajets quotidiens sans stress lié à l'autonomie, et même d'envisager des sorties extra-urbaines le week-end sans anxiété.

Le moteur électrique de 115 chevaux procure des performances tout à fait suffisantes pour l'environnement urbain et périurbain. Les accélérations sont vives à basse vitesse, facilitant les insertions dans le trafic et les dépassements en ville. Sur route et autoroute, l'Inster se montre plus limité par son format compact et son poids contenu de 1 400 kg, qui le rendent sensible aux vents latéraux à haute vitesse. La vitesse maximale de 150 km/h est toutefois suffisante pour emprunter ponctuellement le réseau autoroutier.

La recharge rapide en courant continu jusqu'à 85 kW permet de récupérer de 10 à 80 % en environ 30 minutes, un temps très raisonnable pour une citadine. Cette capacité de charge rapide est particulièrement appréciable lors des escapades hors de la ville, où une courte pause café suffit à repartir l'esprit tranquille. En charge lente sur wallbox de 11 kW, une recharge complète nocturne s'effectue en 6 heures et 30 minutes, parfaitement adaptée au rythme domestique.

L'équipement de sécurité de l'Inster est complet pour sa catégorie, comprenant le freinage automatique d'urgence avec détection des piétons et des cyclistes, l'avertisseur de franchissement de ligne, le régulateur de vitesse adaptatif et l'aide au maintien dans la voie. La caméra de recul avec lignes directrices est de série, un équipement presque indispensable en milieu urbain dense.

L'Inster embarque également la fonction Vehicle-to-Load (V2L) héritée des Ioniq 5 et 6, permettant d'alimenter des appareils électriques jusqu'à 3,6 kW directement depuis la prise du véhicule. Cette fonctionnalité, rare dans ce segment de prix, offre une polyvalence supplémentaire pour le camping, les pique-niques ou les situations d'urgence.

Le Hyundai Inster se positionne comme la citadine électrique la plus rationnelle du marché, combinant un prix d'accès contenu, une autonomie généreuse et un équipement complet dans un format urbain facile à vivre au quotidien.`,
    pointsForts: [
      "Autonomie de 370 km WLTP exceptionnelle pour une mini-citadine à ce prix",
      "Prix attractif autour de 25 000 euros, éligible au bonus écologique",
      "Équipement technologique complet avec double écran 10,25 pouces et V2L",
      "Modularité intérieure remarquable avec banquette arrière coulissante",
      "Consommation très contenue de 14,6 kWh/100 km",
    ],
    pointsFaibles: [
      "Gabarit compact sensible aux vents latéraux sur autoroute",
      "Puissance de recharge rapide limitée à 85 kW",
      "Coffre de 280 litres limité pour des usages familiaux chargés",
      "Performances modestes sur voies rapides avec 115 chevaux",
    ],
    source: "https://www.hyundai.com/fr/modeles/inster.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "volvo-ex30",
    modele: "Volvo EX30",
    marque: "Volvo",
    marqueSlug: "volvo",
    prixBase: 36500,
    prixOccasion: null,
    autonomieWLTP: 476,
    autonomieReelle: 390,
    batterieKwh: 69,
    conso: 16.1,
    puissanceCh: 272,
    puissanceKw: 200,
    chargeRapideKw: 153,
    tempsChargeRapide: "26 min (10-80 %)",
    tempsChargeAC: "8h00 (0-100 % sur 11 kW)",
    coffre: 318,
    poids: 1790,
    longueur: 4233,
    segment: "SUV-urbain",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["SUV-urbain", "premium", "compact", "design-scandinave", "performant"],
    annee: 2024,
    description: `Le Volvo EX30 représente l'entrée de gamme la plus accessible de la marque suédoise dans l'univers 100 % électrique, et il ne déçoit pas. Ce SUV urbain compact de 4 233 mm concentre tout le savoir-faire scandinave en matière de design, de sécurité et de durabilité dans un format citadin agile. Malgré son prix d'attaque compétitif de 36 500 euros, l'EX30 ne fait aucun compromis sur la qualité de finition ni sur les performances, offrant une expérience premium dans un gabarit réduit. Il convient toutefois de noter que sa fabrication en Chine le rend inéligible au bonus écologique français, un facteur important dans le calcul du coût total d'acquisition.

Le design extérieur de l'EX30 est un condensé de l'esthétique Volvo contemporaine. Les lignes sont nettes, tendues, avec le fameux marteau de Thor réinterprété en signature lumineuse LED. La silhouette compacte mais musclée dégage une impression de robustesse et de modernité. Les poignées de porte affleurantes, le toit contrasté en option et les jantes aérodynamiques de 19 pouces renforcent le caractère premium du véhicule. Le noir et le blanc dominent les options de couleur, mais Volvo propose également des teintes vives comme le jaune Moss qui affirment le caractère distinctif du modèle.

L'habitacle de l'EX30 constitue une véritable rupture par rapport aux Volvo traditionnelles. Le tableau de bord minimaliste est dépouillé de tout bouton physique superflu, concentrant toutes les commandes sur un unique écran central vertical de 12,3 pouces. Il n'y a pas d'instrumentation derrière le volant : la vitesse et les informations essentielles s'affichent sur l'écran central ou via l'affichage tête haute en option. Ce choix radical divise les utilisateurs, certains appréciant l'épure totale, d'autres regrettant l'absence d'un combiné d'instruments dédié, notamment pour la consultation rapide de la vitesse.

Les matériaux intérieurs méritent une mention spéciale. Volvo a fait le choix de bannir le cuir au profit de matériaux recyclés et d'origine naturelle. Le tissu en laine mélangée, les inserts en lin composite et les plastiques recyclés créent une ambiance chaleureuse et cohérente avec l'engagement environnemental de la marque. La qualité de fabrication est excellente et dépasse clairement ce que propose la concurrence à ce niveau de prix.

Sous le capot, l'EX30 cache un moteur électrique de 272 chevaux en version propulsion arrière, propulsant ce petit SUV de 0 à 100 km/h en seulement 5,3 secondes. Ces performances quasi sportives sont grisantes dans un véhicule de cette taille et apportent un agrément de conduite remarquable en milieu urbain comme sur les routes sinueuses. La version Twin Motor à transmission intégrale développe même 428 chevaux pour un 0 à 100 km/h en 3,6 secondes, des chiffres dignes d'une sportive. Le châssis, bien que calibré pour le confort, offre une tenue de route sûre et prévisible.

La batterie de 69 kWh offre une autonomie WLTP de 476 km, se traduisant par environ 390 km en conditions réelles mixtes. La consommation moyenne de 16,1 kWh aux 100 km est raisonnable pour un SUV, bénéficiant du poids contenu de 1 790 kg. La recharge rapide en courant continu accepte jusqu'à 153 kW, permettant de passer de 10 à 80 % en environ 26 minutes, un temps compétitif pour des pauses rapides sur les longs trajets.

Le coffre de 318 litres est le principal compromis imposé par le gabarit compact. Ce volume, bien qu'honnête pour un véhicule de 4,2 mètres, peut s'avérer juste pour les familles ou les gros chargements. Un frunk de 7 litres sous le capot avant permet tout juste de ranger le câble de recharge. Les places arrière sont correctes pour deux adultes mais étroites pour trois, et l'absence de dossier de banquette rabattable sur certaines versions limite la modularité.

La suite de sécurité de l'EX30 est à la hauteur de la réputation de Volvo, avec un ensemble complet d'aides à la conduite incluant le Pilot Assist, la détection des piétons, des cyclistes et des grands animaux, le freinage automatique aux intersections et le système de surveillance de l'attention du conducteur. Le véhicule a obtenu cinq étoiles Euro NCAP malgré son gabarit compact.

Le Volvo EX30 se positionne comme la porte d'entrée premium vers la mobilité électrique, offrant un concentré de technologie scandinave dans un format urbain séduisant, bien que l'inéligibilité au bonus écologique en raison de sa fabrication chinoise puisse freiner certains acheteurs français.`,
    pointsForts: [
      "Performances remarquables avec 272 ch et un 0-100 km/h en 5,3 secondes",
      "Design scandinave premium et matériaux durables recyclés de haute qualité",
      "Prix d'entrée compétitif de 36 500 euros pour un SUV premium",
      "Suite de sécurité Volvo complète avec cinq étoiles Euro NCAP",
      "Format compact de 4,2 mètres idéal pour la ville",
    ],
    pointsFaibles: [
      "Inéligible au bonus écologique en raison de sa fabrication en Chine",
      "Coffre limité à 318 litres, insuffisant pour un usage familial chargé",
      "Absence de combiné d'instruments derrière le volant, tout passe par l'écran central",
      "Places arrière étroites pour trois passagers adultes",
    ],
    source: "https://www.volvocars.com/fr/voitures/ex30-electrique/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "volvo-ex40",
    modele: "Volvo EX40",
    marque: "Volvo",
    marqueSlug: "volvo",
    prixBase: 48000,
    prixOccasion: null,
    autonomieWLTP: 500,
    autonomieReelle: 410,
    batterieKwh: 82,
    conso: 18.0,
    puissanceCh: 238,
    puissanceKw: 175,
    chargeRapideKw: 150,
    tempsChargeRapide: "34 min (10-80 %)",
    tempsChargeAC: "8h30 (0-100 % sur 11 kW)",
    coffre: 452,
    poids: 2100,
    longueur: 4440,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV-compact", "premium", "sécurité", "familial", "assemblé-en-Europe"],
    annee: 2024,
    description: `Le Volvo EX40, successeur du populaire XC40 Recharge, marque l'aboutissement de la transformation électrique du SUV compact suédois. Assemblé à Gand en Belgique, ce modèle bénéficie de l'éligibilité au bonus écologique français, un avantage compétitif significatif face aux concurrents fabriqués hors d'Europe. Fort d'une batterie de 82 kWh et d'une autonomie de 500 km WLTP, l'EX40 se positionne comme un choix premium et rationnel pour les familles recherchant un SUV électrique spacieux, sûr et bien équipé.

Le design de l'EX40 reprend les lignes reconnaissables du XC40, affinées pour la nouvelle ère électrique. La calandre pleine au motif Shield, encadrée par la signature lumineuse en marteau de Thor à technologie full LED, affirme immédiatement l'identité Volvo. Les proportions équilibrées, les épaules marquées et la ligne de toit légèrement plongeante confèrent au véhicule une allure dynamique et urbaine. Le traitement aérodynamique a été optimisé par rapport au XC40, avec des poignées de porte affleurantes et un soubassement carené qui contribuent à réduire la traînée et améliorer l'autonomie.

L'intérieur de l'EX40 incarne le concept scandinave du bien-être. L'ambiance est lumineuse grâce au toit panoramique de série sur les finitions hautes, et les matériaux choisis mêlent textures naturelles et finitions soignées. Le système d'infodivertissement embarque Google Built-in, intégrant nativement Google Maps, Google Assistant et le Google Play Store, offrant une expérience connectée fluide et régulièrement mise à jour via des updates over-the-air. L'écran central tactile vertical de 9 pouces centralise les commandes, tandis que le combiné d'instruments numérique de 12,3 pouces derrière le volant affiche clairement les informations de conduite et de navigation.

L'espace à bord est l'un des points forts de l'EX40. Les passagers arrière disposent d'une bonne garde au toit et d'un espace aux genoux confortable pour les trajets longs. Le coffre de 452 litres est bien dimensionné pour un SUV compact, avec un seuil de chargement raisonnable et une ouverture large facilitant le chargement. Le plancher du coffre intègre des rangements pour les câbles de recharge, et la banquette arrière se rabat en configuration 60/40 pour augmenter la capacité de chargement lors des voyages.

Le moteur électrique de 238 chevaux entraîne les roues arrière dans la version à moteur unique, offrant un comportement routier équilibré avec une bonne motricité. Le 0 à 100 km/h est accompli en 7,3 secondes, des performances suffisantes pour un usage quotidien sans frustration. La direction est précise et bien dosée, le confort de suspension remarquable grâce à la calibration soignée des amortisseurs. Le poids de 2 100 kg se fait sentir dans les virages serrés, mais le centre de gravité bas de la batterie compense partiellement cette masse, offrant une stabilité rassurante.

L'autonomie de 500 km en cycle WLTP se traduit par environ 410 km en conditions réelles mixtes, un chiffre convaincant pour un SUV compact de ce gabarit. La consommation moyenne de 18 kWh aux 100 km est honnête compte tenu du poids et de la hauteur de caisse du véhicule. Sur autoroute à 130 km/h, l'autonomie descend aux alentours de 330 km, nécessitant un arrêt recharge pour les longs trajets, mais la planification d'itinéraire intégrée à Google Maps calcule automatiquement les arrêts optimaux.

La recharge rapide en courant continu accepte jusqu'à 150 kW, permettant de passer de 10 à 80 % en environ 34 minutes. La courbe de charge est régulière, avec un maintien satisfaisant du débit au-delà de 50 % de batterie. En charge domestique sur wallbox de 11 kW, la recharge complète s'effectue en 8 heures et 30 minutes, parfaitement adaptée à une recharge nocturne.

La sécurité constitue naturellement un pilier fondamental de l'EX40. Le véhicule intègre l'ensemble des technologies Volvo de dernière génération, incluant le freinage automatique d'urgence avec détection de véhicules, piétons, cyclistes et grands animaux, le Pilot Assist combinant régulateur adaptatif et maintien dans la voie, le Cross Traffic Alert avec freinage automatique, et le système de surveillance de l'angle mort avec intervention corrective. La structure renforcée et les multiples airbags assurent une protection maximale en cas de collision.

Le Volvo EX40 se distingue comme le SUV compact électrique premium de référence pour les acheteurs européens, combinant l'excellence sécuritaire de Volvo, l'éligibilité au bonus écologique et un confort scandinave raffiné dans un format familial polyvalent.`,
    pointsForts: [
      "Assemblé en Belgique, éligible au bonus écologique français",
      "Autonomie solide de 500 km WLTP avec une batterie de 82 kWh",
      "Système Google Built-in avec mises à jour OTA et planification d'itinéraire intégrée",
      "Sécurité de référence avec suite complète d'aides à la conduite Volvo",
      "Coffre pratique de 452 litres avec plancher de rangement intégré",
    ],
    pointsFaibles: [
      "Poids élevé de 2 100 kg pénalisant la consommation autoroutière",
      "Recharge rapide limitée à 150 kW, en retrait face aux architectures 800V",
      "Écran central de 9 pouces un peu petit par rapport à la concurrence",
      "Prix de base de 48 000 euros élevé avant déduction du bonus",
    ],
    source: "https://www.volvocars.com/fr/voitures/ex40-electrique/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "volvo-ex90",
    modele: "Volvo EX90",
    marque: "Volvo",
    marqueSlug: "volvo",
    prixBase: 83000,
    prixOccasion: null,
    autonomieWLTP: 580,
    autonomieReelle: 470,
    batterieKwh: 111,
    conso: 20.5,
    puissanceCh: 408,
    puissanceKw: 300,
    chargeRapideKw: 250,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "11h00 (0-100 % sur 11 kW)",
    coffre: 655,
    poids: 2818,
    longueur: 5037,
    segment: "SUV-premium",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["SUV-premium", "luxe", "7-places", "lidar", "sécurité-avancée", "grande-autonomie"],
    annee: 2024,
    description: `Le Volvo EX90 est le vaisseau amiral de la gamme électrique Volvo, un grand SUV premium de plus de cinq mètres qui incarne la vision de la marque suédoise pour l'avenir de la mobilité haut de gamme. Successeur du XC90, il en reprend la vocation familiale sept places tout en intégrant des technologies de pointe inédites dans le segment, notamment un lidar de série fourni par Luminar. Avec sa batterie de 111 kWh, son autonomie de 580 km WLTP et ses 408 chevaux, l'EX90 se positionne en rival direct du BMW iX et du Mercedes EQS SUV, tout en cultivant l'identité scandinave qui fait la renommée de Volvo.

Le design extérieur de l'EX90 marque une évolution subtile mais significative du langage stylistique Volvo. Les lignes sont plus tendues, plus horizontales que celles du XC90, avec un capot long et plat, une ceinture de caisse haute et des montants arrière massifs qui confèrent une impression de solidité et de prestance. La calandre Shield est entièrement pleine, intégrant discrètement le lidar Luminar au niveau du toit, un capteur capable de détecter des objets jusqu'à 250 mètres de distance, y compris dans des conditions de faible luminosité. Les feux en marteau de Thor ont été redessinés et adoptent une technologie full LED avec clignotants séquentiels.

L'habitacle de l'EX90 est un écrin de confort scandinave. Le grand écran tactile central de 14,5 pouces, orienté verticalement, domine une planche de bord épurée aux lignes horizontales apaisantes. Le système Google Built-in offre une connectivité native avec Google Maps, Google Assistant et un accès au Play Store pour les applications. L'écran conducteur de 9 pouces affiche les informations essentielles avec clarté, complété par un affichage tête haute projetant les données de navigation et de vitesse sur le pare-brise.

Les matériaux intérieurs sont sélectionnés avec soin, mêlant boiseries authentiques, textiles en laine recyclée et surfaces douces au toucher. L'option Bowers & Wilkins avec système audio à 25 haut-parleurs offre une expérience sonore de référence, avec une puissance de 1 610 watts créant une immersion musicale exceptionnelle. La modularité à sept places est préservée, avec une troisième rangée de sièges utilisable par des adultes de taille moyenne, un atout précieux pour les grandes familles.

Sur la route, l'EX90 impressionne par son raffinement. La suspension pneumatique adaptive, de série sur l'ensemble de la gamme, absorbe les imperfections de la route avec maestria et permet d'ajuster la hauteur de caisse selon les situations. Les deux moteurs électriques délivrent 408 chevaux et une transmission intégrale permanente, propulsant cette masse de 2 818 kg de 0 à 100 km/h en 5,9 secondes, un temps remarquable pour un véhicule de cette taille. La direction est douce et précise, le freinage puissant et endurant, et l'insonorisation de l'habitacle atteint des niveaux de silence rarement égalés dans l'automobile.

L'autonomie de 580 km en cycle WLTP se traduit par environ 470 km en conditions réelles mixtes, un rayon d'action très confortable pour un grand SUV de ce gabarit. La consommation moyenne de 20,5 kWh aux 100 km est contenue compte tenu du poids et de la surface frontale du véhicule. La batterie de 111 kWh peut également servir de réserve d'énergie bidirectionnelle pour alimenter le domicile, une fonctionnalité Vehicle-to-Home particulièrement intéressante en cas de coupure de courant ou pour optimiser sa consommation d'énergie solaire.

La recharge rapide accepte jusqu'à 250 kW en courant continu, permettant de passer de 10 à 80 % en environ 30 minutes. Cette puissance élevée, combinée à la grande capacité de la batterie, rend les longs trajets autoroutiers parfaitement gérables avec des pauses de recharge raisonnables. Le planificateur d'itinéraire intégré optimise automatiquement les arrêts en fonction du niveau de batterie, de la disponibilité des bornes et des conditions de trafic.

Le lidar Luminar de série constitue la véritable révolution technologique de l'EX90. Ce capteur laser, combiné à cinq radars, huit caméras et seize capteurs ultrasoniques, crée un système de perception de l'environnement d'une précision inégalée. Il pose les bases de la conduite autonome supervisée et améliore significativement le fonctionnement des aides à la conduite actuelles, notamment le freinage automatique d'urgence et le Pilot Assist.

Le Volvo EX90 s'impose comme le grand SUV électrique le plus abouti pour les familles exigeantes, alliant technologie de sécurité révolutionnaire, confort scandinave raffiné et autonomie généreuse dans un format sept places accueillant.`,
    pointsForts: [
      "Lidar Luminar de série offrant une détection d'obstacles jusqu'à 250 mètres",
      "Batterie de 111 kWh avec 580 km d'autonomie WLTP et recharge jusqu'à 250 kW",
      "Configuration sept places conservée avec une troisième rangée utilisable",
      "Suspension pneumatique adaptive de série et insonorisation exceptionnelle",
      "Coffre généreux de 655 litres et fonctionnalité Vehicle-to-Home bidirectionnelle",
      "Système audio Bowers & Wilkins à 25 haut-parleurs en option",
    ],
    pointsFaibles: [
      "Prix élevé de 83 000 euros et inéligible au bonus écologique (fabriqué en Chine)",
      "Poids massif de 2 818 kg impactant la consommation et l'agilité",
      "Encombrement important de 5,03 mètres limitant la maniabilité urbaine",
      "Consommation autoroutière élevée réduisant significativement l'autonomie réelle",
    ],
    source: "https://www.volvocars.com/fr/voitures/ex90-electrique/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "polestar-2",
    modele: "Polestar 2",
    marque: "Polestar",
    marqueSlug: "polestar",
    prixBase: 48000,
    prixOccasion: null,
    autonomieWLTP: 551,
    autonomieReelle: 450,
    batterieKwh: 82,
    conso: 16.5,
    puissanceCh: 299,
    puissanceKw: 220,
    chargeRapideKw: 200,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "8h00 (0-100 % sur 11 kW)",
    coffre: 405,
    poids: 2045,
    longueur: 4606,
    segment: "berline",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["berline", "sportive", "performance", "design-scandinave", "premium"],
    annee: 2024,
    description: `La Polestar 2 occupe une place singulière dans le paysage des berlines électriques européennes. Née de la collaboration entre Volvo et Geely, cette fastback sportive au caractère affirmé a été l'une des premières alternatives crédibles à la Tesla Model 3 lors de son lancement, et la mise à jour substantielle de 2024 renforce considérablement sa compétitivité. Avec son design scandinave acéré, ses performances dynamiques et son châssis réglé par les ingénieurs suédois, la Polestar 2 s'adresse aux conducteurs enthousiastes qui refusent de sacrifier le plaisir de conduite sur l'autel de la transition électrique.

Le design extérieur de la Polestar 2 est immédiatement reconnaissable. La face avant arbore la grille fermée caractéristique de la marque, encadrée par les feux de jour en forme de marteau de Thor hérités de Volvo mais réinterprétés avec un regard plus incisif. Le profil de fastback, avec sa ligne de toit plongeante vers un hayon intégré, confère au véhicule une allure sportive et aérodynamique. L'arrière est traité avec sobriété, les feux traversants à LED complétant une silhouette cohérente et élégante. Le millésime 2024 apporte des modifications subtiles mais bienvenues, avec un bouclier avant redessiné et de nouvelles jantes forgées qui affinent le profil aérodynamique.

L'intérieur de la Polestar 2 reflète l'ADN scandinave de la marque : minimalisme, qualité des matériaux et ergonomie réfléchie. Le système d'infodivertissement repose sur Google Built-in, offrant une intégration native de Google Maps avec planification de la recharge, Google Assistant pour les commandes vocales et un accès au Play Store. L'écran central de 11,15 pouces est réactif et l'interface intuitive après un court temps d'adaptation. Le combiné d'instruments numérique de 12,3 pouces affiche les informations de conduite avec clarté, et les quelques commandes physiques conservées pour la climatisation et le volume audio témoignent d'un pragmatisme bienvenu.

Les sièges sport, disponibles en textile recyclé WeaveTech ou en option Nappa, offrent un excellent maintien latéral sans sacrifier le confort sur les longs trajets. L'espace aux places arrière est correct pour deux adultes, avec une garde au toit un peu juste en raison de la ligne de toit plongeante. Le coffre de 405 litres, accessible par le hayon motorisé, est complété par un frunk de 41 litres sous le capot avant, un volume appréciable pour les câbles ou les petits sacs.

Le millésime 2024 apporte des évolutions mécaniques significatives. La batterie passe à 82 kWh, offrant une autonomie de 551 km en cycle WLTP avec le moteur unique de 299 chevaux en propulsion arrière. En conditions réelles, comptez environ 450 km en usage mixte, un progrès considérable par rapport aux premières versions. La consommation moyenne de 16,5 kWh aux 100 km témoigne de l'efficience du nouveau groupe motopropulseur arrière à aimants permanents, plus efficient que l'ancienne architecture à moteur avant.

La recharge rapide a également été améliorée, avec une puissance maximale portée à 200 kW en courant continu. Le passage de 10 à 80 % s'effectue désormais en environ 28 minutes, un progrès notable qui rend les longs trajets plus fluides. La courbe de charge est bien gérée par le système de gestion thermique de la batterie, maintenant un débit élevé sur une large plage de pourcentage.

Sur la route, la Polestar 2 dévoile son véritable caractère. Le châssis, développé avec l'expertise de la compétition Polestar, offre un équilibre remarquable entre confort et dynamisme. La version Performance intègre les amortisseurs Öhlins à double flux réglables manuellement, permettant au conducteur d'ajuster finement le comportement du châssis selon ses préférences. Les freins Brembo à quatre pistons complètent l'arsenal sportif. La direction est précise et communicative, transmettant les informations de la route avec fidélité, un point qui distingue clairement la Polestar 2 de la Tesla Model 3 aux yeux des puristes.

Le système de freinage régénératif est configurable sur plusieurs niveaux, du roulage libre à la conduite à une pédale, offrant une flexibilité appréciable selon les conditions de circulation. En mode de conduite Performance, la réponse de l'accélérateur est immédiate et les 299 chevaux propulsent la berline de 0 à 100 km/h en 6,2 secondes avec une linéarité séduisante.

La Polestar 2 s'affirme comme la berline électrique des conducteurs exigeants, combinant plaisir de conduite authentique, raffinement scandinave et technologies de pointe dans un ensemble cohérent qui justifie pleinement son positionnement premium face à la concurrence.`,
    pointsForts: [
      "Châssis sportif de référence avec amortisseurs Öhlins et freins Brembo en option Performance",
      "Autonomie de 551 km WLTP et recharge rapide améliorée jusqu'à 200 kW",
      "Système Google Built-in avec planification de recharge intégrée à Google Maps",
      "Direction précise et communicative offrant un vrai plaisir de conduite",
      "Design scandinave distinctif et matériaux durables de haute qualité",
    ],
    pointsFaibles: [
      "Inéligible au bonus écologique en raison de la fabrication en Chine",
      "Garde au toit arrière limitée par la ligne de toit plongeante de type fastback",
      "Poids de 2 045 kg perceptible dans les enchaînements de virages serrés",
      "Réseau de concessionnaires et service après-vente encore limité en France",
    ],
    source: "https://www.polestar.com/fr/polestar-2/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "polestar-3",
    modele: "Polestar 3",
    marque: "Polestar",
    marqueSlug: "polestar",
    prixBase: 86000,
    prixOccasion: null,
    autonomieWLTP: 560,
    autonomieReelle: 450,
    batterieKwh: 111,
    conso: 21.5,
    puissanceCh: 489,
    puissanceKw: 360,
    chargeRapideKw: 250,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "11h00 (0-100 % sur 11 kW)",
    coffre: 484,
    poids: 2584,
    longueur: 4900,
    segment: "SUV-premium",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["SUV-premium", "luxe", "performance", "transmission-intégrale", "lidar-option"],
    annee: 2024,
    description: `Le Polestar 3 marque l'entrée de la marque suédoise dans le segment très disputé des grands SUV électriques premium. Partageant sa plateforme SPA2 avec le Volvo EX90, ce SUV imposant de 4 900 mm se distingue par une approche résolument plus sportive et dynamique que son cousin suédois. Avec 489 chevaux, une batterie de 111 kWh et un design extérieur saisissant, le Polestar 3 ambitionne de rivaliser avec les Porsche Cayenne Electric, BMW iX et Mercedes EQE SUV sur le terrain de l'émotion automobile autant que du luxe technologique.

Le design extérieur du Polestar 3 est spectaculaire. La face avant massive est dominée par la grille SmartZone intégrant les capteurs de sécurité derrière une surface lisse et épurée. Les feux de jour verticaux, baptisés Thor's Hammer Split, constituent une interprétation audacieuse du motif iconique de Volvo, créant une identité visuelle propre à Polestar. Le profil est dynamique, avec une ligne d'épaule prononcée, des passages de roue musclés et un toit légèrement incliné vers l'arrière qui confère au véhicule une attitude athlétique inhabituelle pour un SUV de ce gabarit. L'arrière est traité avec un bandeau lumineux traversant et un diffuseur intégré qui souligne le caractère sportif du modèle.

À l'intérieur, le Polestar 3 propose un environnement luxueux mâtiné de minimalisme scandinave. Le tableau de bord est dominé par un écran central de 14,5 pouces fonctionnant sous Google Built-in, offrant une expérience numérique fluide avec Google Maps, Google Assistant et un accès au Play Store. L'écran conducteur de 9 pouces complète l'interface, et un affichage tête haute de grande taille projette les informations essentielles sur le pare-brise. Les matériaux sont sélectionnés avec exigence : cuir Animal Welfare ou textile MicroTech en option, inserts en aluminium brossé et surfaces douces au toucher composent un habitacle qui respire la qualité.

Les sièges avant à réglage électrique 14 voies offrent un confort exceptionnel, avec ventilation, chauffage et fonction massage. Les passagers arrière disposent d'un espace généreux grâce à l'empattement de 2 985 mm, avec des sièges chauffants et des prises USB-C dédiées. Le système audio Harman Kardon de série offre une restitution de qualité, mais c'est l'option Bowers & Wilkins à 25 haut-parleurs et 1 610 watts qui transforme l'habitacle en véritable salle de concert.

Le groupe motopropulseur du Polestar 3 se compose de deux moteurs électriques développant une puissance combinée de 489 chevaux et un couple généreux de 840 Nm, transmis aux quatre roues via la transmission intégrale permanente. Le 0 à 100 km/h est expédié en 4,7 secondes, des performances qui placent ce SUV de 2 584 kg au niveau de véritables sportives. Le pack Performance optionnel, équipé d'amortisseurs à double valve et de ressorts sport, transforme le comportement routier en affinant la précision du châssis sans compromettre excessivement le confort.

La suspension pneumatique à double chambre est de série, offrant la possibilité d'ajuster la hauteur de caisse sur plusieurs niveaux. En mode sport, le véhicule s'abaisse pour améliorer la stabilité et l'aérodynamisme, tandis que le mode Off-road relève la garde au sol pour franchir des obstacles modérés. Le comportement en virage est étonnamment agile pour un véhicule de ce poids, grâce au torque vectoring électronique qui répartit le couple entre les essieux avant et arrière.

La batterie de 111 kWh offre une autonomie WLTP de 560 km, se traduisant par environ 450 km en conditions réelles mixtes. La consommation moyenne de 21,5 kWh aux 100 km est dans la norme du segment, pénalisée par le poids et la surface frontale importants. La recharge rapide accepte jusqu'à 250 kW en courant continu, permettant de passer de 10 à 80 % en environ 30 minutes, un temps compétitif qui rend les longs voyages parfaitement gérables.

Le coffre de 484 litres est complété par un frunk de 32 litres sous le capot avant. Le hayon motorisé mains libres facilite l'accès au compartiment de chargement, et les dossiers de la banquette arrière se rabattent en configuration 40/20/40, offrant une modularité appréciable.

Le Polestar 3 propose en option le lidar Luminar, créant un système de perception de l'environnement de pointe qui pose les bases de futures fonctions de conduite autonome. Combiné aux radars, caméras et capteurs ultrasoniques, ce dispositif améliore significativement la fiabilité des systèmes de sécurité active.

Le Polestar 3 s'impose comme le grand SUV électrique pour les passionnés d'automobile qui veulent conjuguer performances sportives, luxe scandinave et conscience environnementale dans un véhicule au caractère affirmé et à la personnalité distincte.`,
    pointsForts: [
      "Performances impressionnantes avec 489 ch, 840 Nm et un 0-100 km/h en 4,7 secondes",
      "Suspension pneumatique à double chambre de série avec modes adaptatifs",
      "Recharge rapide jusqu'à 250 kW permettant un 10-80 % en 30 minutes",
      "Lidar Luminar disponible en option pour une sécurité de pointe",
      "Habitacle luxueux avec matériaux premium et système audio Bowers & Wilkins en option",
    ],
    pointsFaibles: [
      "Prix élevé de 86 000 euros, non éligible au bonus écologique (fabrication en Chine)",
      "Poids massif de 2 584 kg impactant la consommation et l'agilité",
      "Coffre de 484 litres en retrait par rapport à certains concurrents du segment",
      "Réseau de service après-vente Polestar encore peu développé en France",
      "Consommation autoroutière élevée réduisant l'autonomie réelle sous les 400 km",
    ],
    source: "https://www.polestar.com/fr/polestar-3/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "polestar-4",
    modele: "Polestar 4",
    marque: "Polestar",
    marqueSlug: "polestar",
    prixBase: 58000,
    prixOccasion: null,
    autonomieWLTP: 590,
    autonomieReelle: 480,
    batterieKwh: 100,
    conso: 18.2,
    puissanceCh: 272,
    puissanceKw: 200,
    chargeRapideKw: 200,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "10h00 (0-100 % sur 11 kW)",
    coffre: 526,
    poids: 2205,
    longueur: 4839,
    segment: "SUV-coupé",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["SUV-coupé", "design-radical", "sans-lunette-arrière", "grande-autonomie", "premium"],
    annee: 2024,
    description: `Le Polestar 4 est sans doute le véhicule électrique le plus audacieux de sa catégorie, et pour cause : il est dépourvu de lunette arrière. Ce choix de design radical, qui supprime la vitre arrière traditionnelle au profit d'un toit plein prolongé jusqu'au hayon, redéfinit les codes esthétiques du segment SUV-coupé et place le Polestar 4 au centre de toutes les conversations automobiles. Au-delà de cette particularité visuelle, ce modèle offre une autonomie généreuse de 590 km WLTP, un habitacle lumineux et spacieux, et un positionnement tarifaire agressif à 58 000 euros qui le place en concurrence directe avec le Tesla Model Y Grande Autonomie et le BMW iX xDrive40.

Le design extérieur du Polestar 4 est une déclaration d'intention. L'absence de lunette arrière crée une ligne de toit d'un seul tenant, parfaitement lisse, qui s'écoule depuis le pare-brise jusqu'à l'extrémité du hayon dans un mouvement continu et fluide. Cette silhouette unique confère au véhicule une allure futuriste et sculptée qui ne ressemble à rien d'autre sur la route. La face avant reprend les codes Polestar avec le bouclier SmartZone et les feux Thor's Hammer Split, tandis que l'arrière, traité comme un volume plein, intègre un bandeau lumineux traversant et un hayon motorisé à ouverture généreuse.

Pour compenser l'absence de lunette arrière, Polestar a intégré une caméra haute définition dans le becquet arrière, dont l'image est retransmise sur un écran de rétrovision intérieur. Ce système, après un temps d'adaptation, offre un champ de vision plus large qu'un rétroviseur classique et élimine les obstructions liées aux passagers arrière ou aux chargements dans le coffre. L'image est nette et bien contrastée, même en conditions de faible luminosité, grâce au capteur haute sensibilité.

L'intérieur du Polestar 4 tire pleinement parti de l'absence de lunette arrière. Le toit panoramique en verre s'étend sur toute la surface supérieure du véhicule, baignant l'habitacle d'une lumière naturelle exceptionnelle et créant une sensation d'espace remarquable. Les passagers arrière bénéficient d'une garde au toit particulièrement généreuse, bien supérieure à celle des SUV-coupés traditionnels, puisque la ligne de toit ne plonge plus vers l'arrière. Les sièges arrière inclinables offrent un confort de premier ordre, transformant la banquette en véritable salon de voyage.

L'interface utilisateur repose sur un écran central de 15,4 pouces sous Google Built-in, le plus grand de la gamme Polestar. L'écran conducteur de 10,2 pouces affiche les informations essentielles, et l'affichage tête haute en option complète l'instrumentation. Les matériaux intérieurs suivent la philosophie durable de la marque, avec des textiles en microfibres recyclées et des inserts en aluminium anodisé noir qui créent une ambiance à la fois moderne et chaleureuse.

Sous le plancher, la batterie de 100 kWh alimente un moteur arrière de 272 chevaux en version propulsion, offrant une autonomie WLTP de 590 km. En conditions réelles, comptez environ 480 km en usage mixte, un rayon d'action qui place le Polestar 4 parmi les véhicules les plus endurants de sa catégorie. La consommation moyenne de 18,2 kWh aux 100 km est maîtrisée grâce à l'aérodynamisme travaillé de la carrosserie, dont le coefficient de traînée de 0,269 est excellent pour un SUV-coupé. Une version à deux moteurs et transmission intégrale développant 544 chevaux est également disponible pour les conducteurs recherchant des performances maximales.

La recharge rapide en courant continu accepte jusqu'à 200 kW, permettant de récupérer de 10 à 80 % en environ 30 minutes. Le préconditionnement thermique de la batterie est activé automatiquement lorsqu'un arrêt de recharge est programmé dans le planificateur d'itinéraire, optimisant la puissance acceptée dès le branchement. La recharge en courant alternatif sur wallbox de 11 kW nécessite environ 10 heures pour une charge complète de 0 à 100 %.

Le coffre de 526 litres est l'un des plus généreux du segment SUV-coupé, bénéficiant directement de l'architecture sans lunette arrière qui libère de l'espace dans la partie supérieure du compartiment de chargement. Le hayon motorisé à ouverture mains libres et le seuil de chargement bas facilitent le quotidien. Un frunk de 15 litres sous le capot avant complète les espaces de rangement.

Le Polestar 4 s'impose comme le choix des non-conformistes du premium électrique, offrant une proposition radicale et cohérente qui transforme une audace esthétique en avantages fonctionnels concrets, dans un ensemble technologiquement abouti et séduisant à conduire.`,
    pointsForts: [
      "Autonomie de 590 km WLTP parmi les meilleures du segment grâce à la batterie de 100 kWh",
      "Habitabilité arrière exceptionnelle grâce à l'absence de lunette arrière et au toit panoramique intégral",
      "Coffre généreux de 526 litres, le plus grand du segment SUV-coupé",
      "Design unique et immédiatement reconnaissable dans le paysage automobile",
      "Caméra arrière haute définition offrant un champ de vision plus large qu'un rétroviseur classique",
    ],
    pointsFaibles: [
      "Absence de lunette arrière nécessitant un temps d'adaptation pour la rétrovision par caméra",
      "Inéligible au bonus écologique en raison de la fabrication en Chine",
      "Recharge rapide limitée à 200 kW, en retrait face aux architectures 800V",
      "Réseau de service après-vente Polestar limité sur le territoire français",
    ],
    source: "https://www.polestar.com/fr/polestar-4/",
    dateMAJ: "2026-06-22",
  },
{
    slug: "skoda-epiq",
    modele: "Skoda Epiq",
    marque: "Skoda",
    marqueSlug: "skoda",
    prixBase: 25000,
    prixOccasion: null,
    autonomieWLTP: 400,
    autonomieReelle: 330,
    batterieKwh: 55,
    conso: 14.5,
    puissanceCh: 170,
    puissanceKw: 125,
    chargeRapideKw: 120,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "5h45 (0-100 % sur 11 kW)",
    coffre: 360,
    poids: 1590,
    longueur: 4100,
    segment: "citadine",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["citadine", "abordable", "a-venir", "famille"],
    annee: 2024,
    statut: "a-venir",
    sortiePrevue: "2026",
    description: `Le Skoda Epiq représente l'offensive la plus ambitieuse du constructeur tchèque sur le segment des citadines électriques abordables. Annoncé pour 2026, ce modèle incarne la volonté du groupe Volkswagen de démocratiser la mobilité zéro émission en proposant un véhicule compact, moderne et accessible à un tarif inférieur à 25 000 euros. Construit sur la plateforme MEB Short, partagée avec d'autres modèles du groupe, le Skoda Epiq promet un rapport qualité-prix particulièrement attractif, fidèle à la philosophie « Simply Clever » de la marque.

Sur le plan du design, le Skoda Epiq adopte un langage stylistique résolument contemporain qui tranche avec les codes habituels de la marque. Sa silhouette de petit SUV urbain, avec ses lignes tendues et son profil surélevé, lui confère une présence visuelle affirmée malgré ses dimensions contenues de 4,10 mètres de longueur. La face avant arbore le nouveau visuel « Tech-Deck » caractéristique de la nouvelle identité Skoda, avec une signature lumineuse distinctive en forme de T. Les passages de roues marqués et la garde au sol légèrement rehaussée renforcent son allure robuste et aventurière, parfaitement dans l'air du temps.

Sous le capot, le Skoda Epiq embarque un moteur électrique de 170 chevaux alimenté par une batterie de 55 kWh. Cette configuration lui permet d'afficher une autonomie WLTP de 400 kilomètres, un chiffre remarquable pour ce segment de prix. En conditions réelles, on peut tabler sur environ 330 kilomètres, ce qui couvre largement les besoins quotidiens et permet même d'envisager des trajets interurbains sans anxiété. La consommation annoncée d'environ 14,5 kWh aux 100 kilomètres témoigne d'un travail d'optimisation aérodynamique et de gestion énergétique particulièrement soigné.

La recharge constitue l'un des atouts majeurs du Skoda Epiq. Compatible avec les bornes rapides jusqu'à 120 kW en courant continu, il peut récupérer de 10 à 80 % de charge en seulement 28 minutes environ. Sur une wallbox domestique de 11 kW en courant alternatif, une charge complète nécessite approximativement 5 heures et 45 minutes. Cette polyvalence en matière de recharge en fait un compagnon idéal aussi bien pour les trajets quotidiens que pour les escapades du week-end.

L'habitacle du Skoda Epiq promet de reprendre les fondamentaux qui ont fait le succès de la marque : un espace intérieur optimisé, des rangements astucieux et une ergonomie soignée. Le coffre de 360 litres se montre généreux pour une citadine et devrait répondre aux besoins d'une petite famille. L'équipement technologique devrait inclure un écran d'infodivertissement de dernière génération, une instrumentation numérique et une suite complète d'aides à la conduite de niveau 2. Les matériaux recyclés devraient occuper une place importante dans la conception de l'habitacle, en accord avec la stratégie de durabilité de Skoda.

En termes de comportement routier, le Skoda Epiq devrait offrir une conduite agile et maniable en milieu urbain grâce à ses dimensions compactes, tout en assurant un confort appréciable sur route grâce à son empattement optimisé. Le poids contenu d'environ 1 590 kilogrammes pour un véhicule électrique de cette catégorie contribue à des prestations dynamiques équilibrées et à une consommation maîtrisée.

Le positionnement tarifaire du Skoda Epiq, autour de 25 000 euros, en fait l'un des véhicules électriques les plus accessibles du marché européen. Éligible au bonus écologique en France, il pourrait voir son prix d'acquisition descendre significativement, rendant l'électrique enfin accessible au plus grand nombre. Face à la concurrence des Citroën ë-C3, Renault 5 E-Tech et autres Volkswagen ID.2, le Skoda Epiq se positionne comme une alternative crédible misant sur l'espace, l'autonomie et l'équipement pour séduire les familles à la recherche d'une première voiture électrique abordable sans compromis.

Le Skoda Epiq s'inscrit dans le plan stratégique de la marque qui prévoit le lancement de plusieurs modèles électriques d'ici la fin de la décennie. Il constitue la pierre angulaire de cette offensive, ciblant le volume de ventes le plus important du marché. Son arrivée en 2026 est attendue avec impatience par les observateurs du marché automobile, qui voient en lui un potentiel best-seller capable de convertir massivement les automobilistes à la mobilité électrique.`,
    pointsForts: [
      "Prix très attractif sous les 25 000 euros, rendant l'électrique accessible au plus grand nombre",
      "Autonomie WLTP de 400 km remarquable pour une citadine à ce tarif",
      "Éligibilité au bonus écologique français réduisant encore le coût d'acquisition",
      "Coffre de 360 litres généreux pour le segment des citadines",
      "Philosophie Simply Clever de Skoda garantissant des rangements astucieux et une habitabilité optimisée",
    ],
    pointsFaibles: [
      "Disponibilité prévue seulement en 2026, obligeant les acheteurs à patienter",
      "Puissance de charge rapide de 120 kW correcte mais inférieure à certains concurrents",
      "Finitions potentiellement basiques pour maintenir un prix plancher compétitif",
    ],
    source: "https://www.skoda-auto.fr/modeles/epiq",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "bmw-ix2",
    modele: "BMW iX2",
    marque: "BMW",
    marqueSlug: "bmw",
    prixBase: 52000,
    prixOccasion: null,
    autonomieWLTP: 449,
    autonomieReelle: 370,
    batterieKwh: 66.5,
    conso: 16.3,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 130,
    tempsChargeRapide: "29 min (10-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 11 kW)",
    coffre: 525,
    poids: 1995,
    longueur: 4554,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: false,
    note: 8,
    tags: ["SUV", "compact", "premium", "coupé"],
    annee: 2024,
    description: `Le BMW iX2 incarne la vision premium du SUV coupé compact électrique selon le constructeur bavarois. Dérivé du X2 de troisième génération, ce modèle 100 % électrique conjugue le dynamisme stylistique caractéristique de BMW avec une motorisation zéro émission performante. Positionné entre l'iX1 et l'iX3, le BMW iX2 s'adresse à une clientèle exigeante qui recherche un véhicule au profil distinctif, alliant sportivité visuelle et conscience environnementale sans renoncer au plaisir de conduite qui fait la réputation de la marque à l'hélice.

Le design du BMW iX2 se distingue par sa ligne de toit plongeante typique des silhouettes coupé, qui lui confère une allure résolument dynamique. Long de 4 554 millimètres, il affiche des proportions équilibrées avec un capot court, un habitacle avancé et un arrière musclé. La calandre fermée spécifique aux modèles électriques BMW est flanquée de phares effilés à technologie LED, tandis que les flancs sculptés par des lignes de tension prononcées renforcent l'impression de mouvement, même à l'arrêt. Les jantes aérodynamiques de série contribuent à optimiser la traînée et donc l'autonomie du véhicule.

Sous le plancher, une batterie lithium-ion de 66,5 kWh alimente un moteur électrique développant 204 chevaux et 250 Nm de couple instantané. Cette configuration propulse le BMW iX2 eDrive20 de 0 à 100 km/h en 7,4 secondes, offrant des accélérations franches et un agrément de conduite typiquement BMW. L'autonomie WLTP annoncée de 449 kilomètres se traduit par environ 370 kilomètres en conditions réelles, un chiffre confortable pour un usage quotidien et les trajets du week-end. La consommation moyenne d'environ 16,3 kWh aux 100 kilomètres reste contenue pour un SUV de ce gabarit.

En matière de recharge, le BMW iX2 accepte jusqu'à 130 kW en courant continu sur les bornes rapides, permettant de passer de 10 à 80 % en approximativement 29 minutes. Sur une wallbox domestique de 11 kW, la charge complète s'effectue en environ 6 heures et 30 minutes, idéal pour une recharge nocturne. Le système de préchauffage de la batterie optimise automatiquement la température avant l'arrivée sur une borne rapide, garantissant des performances de charge optimales quelle que soit la saison.

L'habitacle du BMW iX2 reflète le niveau de qualité attendu d'un véhicule premium. Le BMW Curved Display, composé d'un écran d'instrumentation de 10,25 pouces et d'un écran central de 10,7 pouces, constitue le centre névralgique de l'expérience à bord. Le système iDrive 8.5 offre une interface fluide et réactive, intégrant la navigation avec planification intelligente des arrêts de recharge, Apple CarPlay et Android Auto sans fil, ainsi qu'un assistant vocal évolué. Les sièges sport de série assurent un excellent maintien, tandis que la qualité des matériaux et l'assemblage irréprochable rappellent le savoir-faire munichois. Le coffre de 525 litres se montre particulièrement pratique et généreux malgré la ligne coupé du véhicule.

Le comportement routier constitue le point fort majeur du BMW iX2. La répartition des masses optimisée par la position basse de la batterie, associée à une direction précise et à un châssis finement calibré, procure des sensations de conduite enthousiasmantes. Le centre de gravité abaissé limite efficacement le roulis en virage et confère au véhicule une agilité remarquable pour un SUV. Les différents modes de conduite permettent d'adapter le caractère du véhicule, du mode Efficient privilégiant l'autonomie au mode Sport libérant toute la puissance du moteur électrique.

Face à ses concurrents directs comme le Volvo EX40 ou l'Audi Q4 e-tron Sportback, le BMW iX2 joue la carte de l'émotion et du plaisir de conduite. Son tarif de 52 000 euros le positionne dans le haut du segment, mais l'équipement de série généreux et les prestations dynamiques justifient cet investissement pour les amateurs de la marque. Non éligible au bonus écologique en raison de son prix, il reste néanmoins compétitif face à la concurrence premium et constitue une porte d'entrée séduisante dans l'univers électrique de BMW pour les amateurs de SUV au profil sportif.`,
    pointsForts: [
      "Comportement routier dynamique et précis, fidèle à l'ADN sportif de BMW",
      "Autonomie WLTP de 449 km confortable pour un SUV compact premium",
      "Coffre de 525 litres très pratique malgré la silhouette coupé",
      "Système multimédia iDrive 8.5 parmi les plus aboutis du marché",
      "Design coupé distinctif alliant élégance et sportivité",
    ],
    pointsFaibles: [
      "Prix de 52 000 euros élevé et non éligible au bonus écologique",
      "Puissance de charge rapide limitée à 130 kW, inférieure à certains rivaux",
      "Garde au toit arrière réduite par la ligne coupé pour les grands gabarits",
      "Poids de près de 2 tonnes impactant la consommation sur autoroute",
    ],
    source: "https://www.bmw.fr/fr/all-models/bmw-ix2.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "mercedes-eqe-suv",
    modele: "Mercedes EQE SUV",
    marque: "Mercedes-Benz",
    marqueSlug: "mercedes",
    prixBase: 89000,
    prixOccasion: null,
    autonomieWLTP: 590,
    autonomieReelle: 480,
    batterieKwh: 90.6,
    conso: 16.7,
    puissanceCh: 292,
    puissanceKw: 215,
    chargeRapideKw: 170,
    tempsChargeRapide: "32 min (10-80 %)",
    tempsChargeAC: "9h30 (0-100 % sur 11 kW)",
    coffre: 520,
    poids: 2590,
    longueur: 4863,
    segment: "SUV-premium",
    origine: "EU",
    aidesEligible: false,
    note: 8,
    tags: ["SUV", "premium", "luxe", "grande-autonomie"],
    annee: 2024,
    description: `Le Mercedes-Benz EQE SUV s'impose comme le fer de lance de la gamme électrique premium de l'étoile dans le segment des grands SUV. Positionné entre l'EQC et l'EQS SUV, ce modèle offre un compromis idéal entre luxe, technologie de pointe et performances électriques pour une clientèle fortunée qui refuse tout compromis. Construit sur la plateforme dédiée EVA2, le EQE SUV bénéficie de toute l'expertise de Mercedes-Benz en matière de confort et de raffinement, transposée dans l'ère de la mobilité électrique.

Le design extérieur du Mercedes EQE SUV adopte le langage stylistique fluide et organique propre à la famille EQ. Sa silhouette monolithique, aux surfaces lisses et aux transitions douces, trahit un coefficient de traînée remarquablement bas pour un SUV de cette envergure. Long de 4 863 millimètres, il impose sa présence avec élégance grâce à sa calandre Black Panel caractéristique, ornée de l'étoile Mercedes illuminée en option, et ses feux arrière reliés par un bandeau lumineux continu. Les poignées de portes affleurantes et les jantes aérodynamiques soigneusement profilées participent à l'optimisation aérodynamique générale du véhicule.

La motorisation du EQE SUV 350+ repose sur un moteur électrique de 292 chevaux positionné sur l'essieu arrière, alimenté par une imposante batterie de 90,6 kWh. Cette architecture procure une autonomie WLTP exceptionnelle de 590 kilomètres, se traduisant par environ 480 kilomètres en usage réel. Cette endurance remarquable permet d'envisager sereinement de longs trajets sans multiplication des arrêts de recharge. La consommation maîtrisée d'environ 16,7 kWh aux 100 kilomètres témoigne de l'efficience globale du groupe motopropulseur et du travail aérodynamique accompli par les ingénieurs de Stuttgart.

La recharge s'effectue jusqu'à 170 kW en courant continu, autorisant un passage de 10 à 80 % en environ 32 minutes sur les bornes rapides les plus puissantes. Le véhicule est également compatible avec le réseau Mercedes me Charge, qui intègre automatiquement la planification des arrêts recharge dans la navigation et offre un accès simplifié à un vaste réseau de bornes en Europe. Sur wallbox 11 kW, la charge complète nécessite environ 9 heures et 30 minutes, parfaitement adaptée à une recharge nocturne.

L'intérieur du EQE SUV constitue un véritable salon roulant. L'option phare est sans conteste l'Hyperscreen MBUX, une dalle de verre incurvée de 141 centimètres couvrant toute la largeur du tableau de bord et intégrant trois écrans distincts, dont un écran dédié au passager avant. Le système MBUX de dernière génération embarque un assistant vocal intelligent capable de comprendre le langage naturel, une navigation en réalité augmentée et des mises à jour logicielles à distance. Les sièges multicontours chauffants et ventilés, la suspension pneumatique AIRMATIC de série et l'isolation phonique exceptionnelle créent une bulle de sérénité inégalée dans ce segment. Le coffre de 520 litres offre un volume pratique et suffisant pour les besoins d'une famille exigeante.

Sur la route, le Mercedes EQE SUV brille par son confort de roulement exemplaire. La suspension pneumatique AIRMATIC absorbe les imperfections de la chaussée avec une aisance déconcertante, tandis que la direction douce et progressive inspire confiance en toutes circonstances. Le couple instantané du moteur électrique assure des reprises vigoureuses pour les dépassements, malgré un poids conséquent de 2 590 kilogrammes. Les aides à la conduite de niveau 2+ incluent un système de conduite semi-autonome sur autoroute particulièrement abouti.

Au tarif de 89 000 euros, le Mercedes EQE SUV se positionne clairement dans le haut de gamme et n'est pas éligible au bonus écologique. Il affronte directement le BMW iX xDrive40 et l'Audi Q8 e-tron, face auxquels il fait valoir une autonomie supérieure et un raffinement technologique à la pointe. Pour les acheteurs qui cherchent le summum du confort électrique dans un format SUV spacieux et statutaire, le EQE SUV constitue une proposition difficilement contestable sur le marché européen.`,
    pointsForts: [
      "Autonomie WLTP exceptionnelle de 590 km pour un grand SUV premium",
      "Confort de roulement exemplaire grâce à la suspension pneumatique AIRMATIC de série",
      "Hyperscreen MBUX optionnel offrant une expérience technologique spectaculaire",
      "Isolation phonique et qualité de finition au niveau des standards Mercedes les plus élevés",
      "Système de recharge intelligent intégré avec planification Mercedes me Charge",
    ],
    pointsFaibles: [
      "Tarif de 89 000 euros très élevé, réservé à une clientèle aisée",
      "Poids de 2 590 kg impactant significativement la consommation sur autoroute et les performances dynamiques",
      "Options coûteuses nécessaires pour profiter pleinement du potentiel technologique du véhicule",
      "Puissance de charge rapide de 170 kW correcte mais en retrait face aux meilleurs du segment",
    ],
    source: "https://www.mercedes-benz.fr/passengercars/models/suv/eqe-suv.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "mercedes-eqs-suv",
    modele: "Mercedes EQS SUV",
    marque: "Mercedes-Benz",
    marqueSlug: "mercedes",
    prixBase: 120000,
    prixOccasion: null,
    autonomieWLTP: 660,
    autonomieReelle: 530,
    batterieKwh: 108.4,
    conso: 17.4,
    puissanceCh: 360,
    puissanceKw: 265,
    chargeRapideKw: 200,
    tempsChargeRapide: "31 min (10-80 %)",
    tempsChargeAC: "10h30 (0-100 % sur 11 kW)",
    coffre: 565,
    poids: 2770,
    longueur: 5125,
    segment: "SUV-luxe",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["SUV", "luxe", "grande-autonomie", "7-places", "haut-de-gamme"],
    annee: 2024,
    description: `Le Mercedes-Benz EQS SUV trône au sommet de la hiérarchie des SUV électriques de luxe, incarnant le nec plus ultra de ce que le constructeur de Stuttgart peut offrir en matière de mobilité zéro émission. Ce vaisseau amiral sur roues, long de 5,125 mètres, repousse les limites du raffinement automobile en associant une autonomie record, une technologie de pointe et un confort digne des meilleures limousines. Disponible en configuration cinq ou sept places optionnelle, il s'adresse à une élite automobile pour laquelle l'excellence n'est pas négociable.

Le design du EQS SUV impressionne par ses proportions majestueuses et sa présence visuelle imposante. La silhouette adopte les codes stylistiques de la famille EQ avec des surfaces sculptées et fluides, une calandre Black Panel monumentale intégrant la célèbre étoile et des feux à technologie Digital Light capables de projeter des motifs lumineux sur la route. Le profil élancé dissimule habilement la hauteur du véhicule grâce à une ligne de vitrage basse et continue, tandis que l'arrière massif est souligné par un bandeau lumineux tridimensionnel. Chaque détail trahit une recherche obsessionnelle de l'harmonie esthétique et de l'efficience aérodynamique.

Le groupe motopropulseur du EQS SUV 450+ repose sur un moteur électrique de 360 chevaux couplé à une batterie colossale de 108,4 kWh, la plus grande jamais proposée par Mercedes-Benz. Cette configuration permet d'atteindre une autonomie WLTP phénoménale de 660 kilomètres, soit environ 530 kilomètres en conditions réelles. Ces chiffres placent le EQS SUV parmi les véhicules électriques offrant la plus grande endurance au monde, éliminant de facto l'anxiété d'autonomie même pour les plus longs trajets. La consommation d'environ 17,4 kWh aux 100 kilomètres reste remarquablement contenue compte tenu de la taille et du poids du véhicule.

La recharge rapide jusqu'à 200 kW en courant continu permet de récupérer de 10 à 80 % de capacité en approximativement 31 minutes. Le système de gestion thermique sophistiqué de la batterie maintient des performances de charge optimales en toutes saisons. Sur une wallbox de 11 kW, la charge complète nécessite environ 10 heures et 30 minutes. Le véhicule intègre nativement la fonction Plug & Charge, simplifiant la recharge à la simple connexion du câble, sans badge ni application.

L'habitacle du EQS SUV constitue un sanctuaire technologique sans équivalent. L'Hyperscreen MBUX, de série sur ce modèle, transforme la planche de bord en un mur d'écrans OLED couvrant 141 centimètres de largeur. Le système d'intelligence artificielle embarqué apprend les habitudes du conducteur pour personnaliser proactivement l'expérience à bord. Les sièges Executive multicontours offrent un massage à dix programmes, tandis que le système audio Burmester 4D de 710 watts et 15 haut-parleurs avec résonateurs tactiles crée une immersion sonore absolue. La troisième rangée de sièges optionnelle permet d'accueillir jusqu'à sept passagers, une rareté dans le segment des SUV électriques de luxe. Le coffre de 565 litres en configuration cinq places assure une modularité appréciable.

Le comportement routier du EQS SUV conjugue le confort ouaté d'une limousine avec une stabilité remarquable. La suspension pneumatique AIRMATIC à amortissement adaptatif, couplée à l'essieu arrière directeur optionnel pouvant braquer jusqu'à 10 degrés, confère une maniabilité surprenante à ce géant de près de 2 770 kilogrammes. Le système de conduite semi-autonome de niveau 3 DRIVE PILOT, disponible en option, permet au conducteur de déléguer entièrement la conduite dans certaines conditions sur autoroute, une première mondiale pour un SUV.

Au tarif de 120 000 euros, le Mercedes EQS SUV joue dans la cour des véhicules d'exception. Il affronte le BMW iX M60 et le Range Rover Electric, tout en proposant une autonomie et une sophistication technologique difficilement égalables. Pour les acquéreurs les plus exigeants, le EQS SUV représente l'aboutissement de la vision de Mercedes-Benz pour le futur de l'automobile de luxe : silencieux, puissant, connecté et respectueux de l'environnement.`,
    pointsForts: [
      "Autonomie WLTP record de 660 km, parmi les meilleures au monde pour un SUV",
      "Configuration 7 places optionnelle, rare dans le segment des SUV électriques de luxe",
      "Hyperscreen MBUX de série avec intelligence artificielle embarquée et écrans OLED",
      "Essieu arrière directeur jusqu'à 10 degrés pour une maniabilité exceptionnelle",
      "Système audio Burmester 4D et confort de limousine avec sièges massage Executive",
      "Charge rapide jusqu'à 200 kW et compatibilité Plug & Charge",
    ],
    pointsFaibles: [
      "Tarif de 120 000 euros le réservant à une clientèle très fortunée",
      "Poids colossal de 2 770 kg pénalisant la consommation et la dynamique de conduite",
      "Gabarit imposant de 5,12 m compliquant la manœuvrabilité en ville et le stationnement",
      "Coût d'entretien et d'assurance élevés inhérents au segment ultra-premium",
    ],
    source: "https://www.mercedes-benz.fr/passengercars/models/suv/eqs-suv.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "renault-kangoo-e-tech",
    modele: "Renault Kangoo E-Tech",
    marque: "Renault",
    marqueSlug: "renault",
    prixBase: 38000,
    prixOccasion: null,
    autonomieWLTP: 285,
    autonomieReelle: 230,
    batterieKwh: 45,
    conso: 17.0,
    puissanceCh: 122,
    puissanceKw: 90,
    chargeRapideKw: 80,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "4h30 (0-100 % sur 11 kW)",
    coffre: 775,
    poids: 1840,
    longueur: 4486,
    segment: "utilitaire",
    origine: "FR",
    aidesEligible: true,
    note: 7,
    tags: ["utilitaire", "ludospace", "familial", "pratique", "made-in-france"],
    annee: 2024,
    description: `Le Renault Kangoo E-Tech Electric incarne la transition électrique des véhicules utilitaires et familiaux du constructeur français. Héritier d'une lignée de Kangoo qui a séduit des millions de familles et de professionnels depuis 1997, cette version 100 % électrique conserve toutes les qualités pratiques et la polyvalence qui ont fait la réputation du modèle, tout en y ajoutant les avantages d'une motorisation zéro émission. Fabriqué en France dans l'usine de Maubeuge, le Kangoo E-Tech symbolise l'engagement industriel de Renault dans la mobilité propre sur le territoire national.

Sur le plan esthétique, le Kangoo E-Tech arbore un design fonctionnel modernisé qui a gagné en caractère par rapport à la génération précédente. La face avant adopte le nouveau visuel lumineux de Renault avec une signature en forme de C, tandis que les proportions verticales et le pare-brise panoramique confèrent une excellente visibilité au conducteur. Long de 4 486 millimètres, le Kangoo E-Tech propose des dimensions parfaitement adaptées à l'environnement urbain comme aux trajets périurbains. Les portes coulissantes arrière, véritable marque de fabrique du modèle, facilitent considérablement l'accès aux places arrière dans les espaces de stationnement étroits.

La motorisation électrique du Kangoo E-Tech développe 122 chevaux et 245 Nm de couple, alimentée par une batterie de 45 kWh. Si ces chiffres restent modestes, ils s'avèrent parfaitement adaptés à la vocation utilitaire et familiale du véhicule. L'autonomie WLTP de 285 kilomètres, soit environ 230 kilomètres en conditions réelles, couvre largement les besoins quotidiens des familles et des professionnels effectuant des tournées urbaines ou périurbaines. La consommation d'environ 17 kWh aux 100 kilomètres reflète le gabarit généreux du véhicule et ses qualités aérodynamiques naturellement limitées par sa silhouette haute et carrée.

La recharge du Kangoo E-Tech s'effectue jusqu'à 80 kW en courant continu sur les bornes rapides, permettant de passer de 10 à 80 % en environ 30 minutes. Si cette puissance de charge reste en retrait par rapport aux berlines et SUV électriques récents, elle s'avère suffisante pour les pauses déjeuner ou les arrêts lors des déplacements professionnels. Sur une wallbox domestique de 11 kW, la charge complète ne nécessite que 4 heures et 30 minutes environ, un atout considérable pour une recharge nocturne rapide.

L'habitacle du Kangoo E-Tech exploite magistralement chaque centimètre cube disponible. Le coffre de 775 litres, accessible par un large hayon, engloutit poussettes, courses hebdomadaires et équipements de loisirs avec une facilité déconcertante. La banquette arrière rabattable en 60/40 permet d'augmenter encore le volume de chargement. L'équipement embarqué comprend un écran multimédia OpenR Link de 8 pouces avec navigation intégrée et planification des recharges, Apple CarPlay et Android Auto sans fil, ainsi qu'une instrumentation numérique. Les rangements sont omniprésents dans l'habitacle : vide-poches, bacs sous les sièges et compartiments dans les portières permettent de tout organiser efficacement.

Le comportement routier du Kangoo E-Tech bénéficie de la position basse de la batterie dans le plancher, qui abaisse le centre de gravité et améliore la stabilité par rapport à la version thermique. La conduite se montre souple et prévisible, parfaitement adaptée aux manœuvres urbaines et au confort sur route. Le rayon de braquage contenu facilite les créneaux et les demi-tours dans les rues étroites.

Au tarif de 38 000 euros, le Kangoo E-Tech bénéficie de l'éligibilité au bonus écologique français grâce à sa fabrication hexagonale. Ce coup de pouce financier le rend plus accessible face aux alternatives thermiques et aux concurrents comme le Citroën ë-Berlingo ou le Peugeot e-Rifter. Pour les familles nombreuses cherchant un véhicule électrique spacieux et pratique fabriqué en France, ou les professionnels souhaitant verdir leur flotte sans sacrifier l'espace de chargement, le Kangoo E-Tech constitue un choix rationnel et patriotique.`,
    pointsForts: [
      "Volume de coffre exceptionnel de 775 litres, idéal pour les familles et les professionnels",
      "Portes coulissantes arrière facilitant l'accès dans les espaces restreints",
      "Fabrication française à Maubeuge, éligible au bonus écologique",
      "Charge complète sur wallbox en seulement 4h30, pratique pour la recharge nocturne",
      "Nombreux rangements et modularité de l'habitacle héritée du Kangoo thermique",
    ],
    pointsFaibles: [
      "Autonomie WLTP de 285 km limitée pour les longs trajets",
      "Puissance de charge rapide plafonnée à 80 kW, pénalisant les déplacements longue distance",
      "Consommation de 17 kWh/100 km élevée en raison de l'aérodynamique défavorable",
      "Agrément de conduite basique, orienté utilitaire plutôt que plaisir",
    ],
    source: "https://www.renault.fr/vehicules-electriques/kangoo-e-tech-electric.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "opel-combo-electric",
    modele: "Opel Combo Electric",
    marque: "Opel",
    marqueSlug: "opel",
    prixBase: 37000,
    prixOccasion: null,
    autonomieWLTP: 329,
    autonomieReelle: 265,
    batterieKwh: 50,
    conso: 16.2,
    puissanceCh: 136,
    puissanceKw: 100,
    chargeRapideKw: 100,
    tempsChargeRapide: "26 min (10-80 %)",
    tempsChargeAC: "5h00 (0-100 % sur 11 kW)",
    coffre: 597,
    poids: 1870,
    longueur: 4403,
    segment: "ludospace",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["ludospace", "familial", "pratique", "portes-coulissantes"],
    annee: 2024,
    description: `L'Opel Combo Electric s'affirme comme une solution de mobilité électrique résolument pragmatique pour les familles qui privilégient l'espace et la fonctionnalité sans nécessairement rechercher le prestige. Ce ludospace électrique, cousin technique du Peugeot e-Rifter et du Citroën ë-Berlingo au sein de la galaxie Stellantis, propose un espace à bord généreux dans un gabarit maîtrisé, le tout propulsé par une motorisation zéro émission moderne et efficiente. Le Combo Electric démontre que la transition énergétique peut parfaitement s'accorder avec les besoins concrets des familles nombreuses et des professionnels.

Le design extérieur de l'Opel Combo Electric se distingue de ses cousins par l'identité visuelle propre à la marque au Blitz. La face avant arbore le nouveau visuel Opel Vizor, une bande noire intégrant les optiques et le logo de la marque dans un ensemble cohérent et reconnaissable. La silhouette haute et carrée, longue de 4 403 millimètres, assume pleinement sa vocation utilitaire tout en offrant une allure plus moderne que les générations précédentes. Les portes coulissantes arrière de série, de chaque côté du véhicule, constituent l'un des atouts majeurs du modèle, permettant un accès aisé aux places arrière même dans les espaces de stationnement les plus exigus.

Sous le plancher, une batterie lithium-ion de 50 kWh alimente un moteur électrique de 136 chevaux et 260 Nm de couple. Cette motorisation procure des performances suffisantes pour un usage quotidien, avec des accélérations franches en ville et un bon agrément sur voies rapides. L'autonomie WLTP de 329 kilomètres, estimée à environ 265 kilomètres en conditions réelles, dépasse les besoins quotidiens de la plupart des utilisateurs et permet même d'envisager des trajets interurbains modérés. La consommation d'environ 16,2 kWh aux 100 kilomètres se montre raisonnable pour un véhicule de cette catégorie.

En matière de recharge, l'Opel Combo Electric accepte jusqu'à 100 kW en courant continu, un progrès notable par rapport à la génération précédente. Le passage de 10 à 80 % s'effectue en approximativement 26 minutes sur une borne rapide, un temps comparable aux SUV compacts du marché. Sur une wallbox domestique de 11 kW, la charge complète nécessite environ 5 heures, idéal pour une recharge nocturne. Le chargeur embarqué triphasé de 11 kW est proposé de série, évitant les surcoûts optionnels qui pénalisent certains concurrents.

L'habitacle de l'Opel Combo Electric brille par son sens du pratique. Le coffre de 597 litres en configuration cinq places avale sans difficulté les bagages de toute la famille, et la banquette arrière rabattable permet d'atteindre un volume de chargement bien supérieur. La modularité est au rendez-vous avec des sièges arrière individuels coulissants et inclinables sur certaines versions, permettant de moduler l'espace entre passagers et bagages. L'équipement technologique comprend un écran tactile central de 10 pouces compatible Apple CarPlay et Android Auto, une instrumentation numérique et la suite d'aides à la conduite Opel Intelli-Drive incluant le régulateur de vitesse adaptatif, l'alerte de franchissement de ligne et la reconnaissance des panneaux de signalisation.

Le confort de conduite de l'Opel Combo Electric satisfait pleinement pour un usage familial quotidien. La position de conduite surélevée offre une excellente visibilité sur l'environnement, tandis que l'insonorisation travaillée permet des conversations à bord sans élever la voix. La suspension, calibrée pour absorber les défauts de chaussée avec un véhicule chargé, se montre confortable bien que ferme à vide. Le système de récupération d'énergie au freinage contribue à maximiser l'autonomie en milieu urbain.

À 37 000 euros, l'Opel Combo Electric se positionne de manière compétitive face au Peugeot e-Rifter et au Citroën ë-Berlingo. Éligible au bonus écologique, il devient encore plus attractif pour les familles soucieuses de leur budget. Le Combo Electric prouve qu'il est possible de rouler en électrique au quotidien avec une famille nombreuse, sans sacrifier ni l'espace, ni la praticité, ni le portefeuille. Un choix de raison qui ne manque pas de bon sens.`,
    pointsForts: [
      "Portes coulissantes des deux côtés de série, extrêmement pratiques au quotidien",
      "Autonomie WLTP de 329 km suffisante pour un usage familial et périurbain",
      "Charge rapide jusqu'à 100 kW avec passage 10-80 % en 26 minutes",
      "Éligible au bonus écologique, rendant l'acquisition plus abordable",
      "Chargeur embarqué triphasé 11 kW inclus de série",
    ],
    pointsFaibles: [
      "Design utilitaire assumé pouvant manquer de charme pour certains acheteurs",
      "Performances dynamiques modestes, orientées confort et praticité",
      "Coffre de 597 litres inférieur au Kangoo E-Tech dans le segment",
      "Insonorisation perfectible à haute vitesse sur autoroute",
    ],
    source: "https://www.opel.fr/vehicules/combo-life/combo-electric.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "peugeot-e-rifter",
    modele: "Peugeot e-Rifter",
    marque: "Peugeot",
    marqueSlug: "peugeot",
    prixBase: 38000,
    prixOccasion: null,
    autonomieWLTP: 329,
    autonomieReelle: 265,
    batterieKwh: 50,
    conso: 16.2,
    puissanceCh: 136,
    puissanceKw: 100,
    chargeRapideKw: 100,
    tempsChargeRapide: "26 min (10-80 %)",
    tempsChargeAC: "5h00 (0-100 % sur 11 kW)",
    coffre: 597,
    poids: 1875,
    longueur: 4403,
    segment: "ludospace",
    origine: "FR",
    aidesEligible: true,
    note: 7,
    tags: ["ludospace", "familial", "pratique", "made-in-france", "portes-coulissantes"],
    annee: 2024,
    description: `Le Peugeot e-Rifter représente la vision du ludospace électrique selon le constructeur sochalien, alliant le sens du style propre à la marque au Lion avec la fonctionnalité sans compromis attendue dans cette catégorie de véhicules. Partageant sa base technique avec l'Opel Combo Electric et le Citroën ë-Berlingo au sein du groupe Stellantis, le e-Rifter se distingue par son identité visuelle plus affirmée et son i-Cockpit caractéristique qui apportent une touche de modernité bienvenue dans un segment traditionnellement dominé par le pragmatisme. Fabriqué en France, il bénéficie de l'éligibilité au bonus écologique, un argument de poids face à la concurrence.

Le design du Peugeot e-Rifter tranche avec l'image austère habituellement associée aux ludospaces. La face avant reprend les codes stylistiques de la gamme Peugeot avec les crocs lumineux verticaux caractéristiques, le logo central proéminent et une calandre fermée spécifique à la version électrique. La carrosserie bicolore disponible avec un toit contrastant ajoute une touche de personnalisation appréciable. Les protections latérales robustes et les barres de toit intégrées renforcent le caractère aventurier du modèle, qui mesure 4 403 millimètres de longueur. Les portes coulissantes arrière, indispensables dans ce segment, offrent un accès facilité aux places arrière.

La motorisation du e-Rifter repose sur un moteur électrique de 136 chevaux et 260 Nm de couple, alimenté par une batterie de 50 kWh logée dans le plancher. Cette configuration permet d'atteindre une autonomie WLTP de 329 kilomètres, soit environ 265 kilomètres en conditions réelles de conduite mixte. La puissance délivrée se révèle suffisante pour un usage familial, avec des accélérations correctes en ville et une vitesse de croisière confortable sur autoroute. La consommation maîtrisée d'environ 16,2 kWh aux 100 kilomètres permet d'optimiser chaque kilowattheure embarqué.

La recharge constitue un point fort de cette nouvelle génération de e-Rifter. La compatibilité avec les bornes rapides jusqu'à 100 kW en courant continu permet de récupérer de 10 à 80 % de charge en seulement 26 minutes environ, un progrès considérable par rapport à la version précédente. Sur une wallbox domestique de 11 kW, la charge complète s'effectue en approximativement 5 heures, parfaitement compatible avec une recharge nocturne pendant les heures creuses. Le chargeur embarqué triphasé de 11 kW est inclus de série sur l'ensemble de la gamme.

L'intérieur du e-Rifter se démarque de ses cousins Stellantis par l'adoption du i-Cockpit Peugeot, une signature ergonomique composée d'un petit volant, d'une instrumentation numérique surélevée et d'un écran central tactile de 10 pouces. Cette disposition, plébiscitée par les conducteurs, procure une expérience de conduite plus engageante et moderne que la concurrence directe. Le coffre de 597 litres offre un espace de chargement conséquent, complété par des rangements astucieux répartis dans tout l'habitacle. Les sièges arrière individuels, coulissants et inclinables selon les versions, permettent d'adapter l'espace aux besoins du moment. La banquette se rabat entièrement à plat pour créer un plancher de chargement impressionnant.

Sur la route, le e-Rifter bénéficie du centre de gravité abaissé par la batterie positionnée dans le plancher, ce qui améliore la tenue de route par rapport à l'ancien modèle thermique. La direction assistée électrique se montre légère et facile en manœuvre, tandis que le confort de suspension reste globalement satisfaisant. La suite d'aides à la conduite de niveau 2 comprend le freinage automatique d'urgence, la surveillance d'angle mort et l'aide au maintien dans la voie, assurant une sécurité active complète pour toute la famille.

Au tarif de 38 000 euros, le Peugeot e-Rifter se positionne légèrement au-dessus de l'Opel Combo Electric, mais compense par une présentation intérieure plus valorisante grâce au i-Cockpit et une image de marque plus désirable. Éligible au bonus écologique grâce à sa fabrication française, il constitue un choix pertinent pour les familles qui souhaitent combiner conscience écologique, praticité au quotidien et un minimum de plaisir visuel dans un véhicule capable de tout transporter.`,
    pointsForts: [
      "i-Cockpit Peugeot offrant une expérience de conduite plus moderne et engageante que la concurrence",
      "Fabrication française garantissant l'éligibilité au bonus écologique",
      "Charge rapide jusqu'à 100 kW avec 10-80 % en 26 minutes, un progrès notable",
      "Portes coulissantes et modularité intérieure exemplaires pour les familles",
      "Design plus soigné et désirable que les ludospaces traditionnels",
    ],
    pointsFaibles: [
      "Prix légèrement supérieur à ses cousins techniques Opel Combo et Citroën ë-Berlingo",
      "Autonomie réelle d'environ 265 km limitant les longs trajets sans recharge",
      "Volume de coffre de 597 litres inférieur au Renault Kangoo E-Tech",
      "Performances modestes avec 136 chevaux pour un véhicule de près de 1 875 kg",
    ],
    source: "https://www.peugeot.fr/nos-vehicules/e-rifter.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "hyundai-ioniq-5-n",
    modele: "Hyundai IONIQ 5 N",
    marque: "Hyundai",
    marqueSlug: "hyundai",
    prixBase: 74000,
    prixOccasion: null,
    autonomieWLTP: 448,
    autonomieReelle: 370,
    batterieKwh: 84,
    conso: 20.0,
    puissanceCh: 650,
    puissanceKw: 478,
    chargeRapideKw: 350,
    tempsChargeRapide: "18 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 527,
    poids: 2190,
    longueur: 4715,
    segment: "SUV-performance",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["performance", "SUV", "sportif", "N", "charge-ultra-rapide"],
    annee: 2024,
    description: `Le Hyundai IONIQ 5 N est sans doute le véhicule électrique le plus révolutionnaire de sa génération en matière de plaisir de conduite. Fruit du travail acharné de la division haute performance N de Hyundai, cette version extrême de l'IONIQ 5 redéfinit complètement les codes de la voiture de sport électrique en proposant une expérience sensorielle inédite qui réconcilie les puristes du moteur thermique avec la propulsion zéro émission. Avec 650 chevaux sous le pied droit et une technologie de simulation révolutionnaire, le IONIQ 5 N n'est pas simplement un véhicule électrique rapide : c'est une véritable machine à sensations.

Le design du IONIQ 5 N se distingue immédiatement de la version standard par des attributs sportifs prononcés. Le kit carrosserie élargi intègre des boucliers avant et arrière spécifiques avec des prises d'air fonctionnelles pour le refroidissement de la batterie et des freins. L'aileron arrière imposant génère un appui aérodynamique significatif à haute vitesse, tandis que les jupes latérales abaissées réduisent la garde au sol de 10 millimètres. Les jantes forgées de 21 pouces chaussées de pneus Pirelli P Zero semi-slick et les étriers de frein peints en bleu N Performance complètent la transformation visuelle. Long de 4 715 millimètres, le IONIQ 5 N conserve les proportions rétro-futuristes de l'IONIQ 5 tout en affichant une agressivité contrôlée.

Le groupe motopropulseur du IONIQ 5 N est un chef-d'œuvre d'ingénierie. Deux moteurs électriques développent une puissance combinée de 650 chevaux en mode N Grin Boost, un surplus temporaire de puissance activable manuellement. Le couple monstrueux propulse cette machine de 2 190 kilogrammes de 0 à 100 km/h en seulement 3,4 secondes, des chiffres qui rivalisent avec les supercars thermiques les plus exclusives. La batterie de 84 kWh à architecture 800 volts alimente ce festival de puissance tout en offrant une autonomie WLTP de 448 kilomètres, soit environ 370 kilomètres en conduite réelle.

La recharge ultra-rapide constitue l'un des atouts majeurs du IONIQ 5 N. Grâce à l'architecture 800 volts, il accepte jusqu'à 350 kW en courant continu sur les bornes les plus puissantes, permettant un passage de 10 à 80 % en seulement 18 minutes. Cette capacité élimine pratiquement le temps d'attente lors des longs trajets et rend le IONIQ 5 N aussi pratique au quotidien qu'il est excitant sur circuit.

Mais la véritable révolution du IONIQ 5 N réside dans sa technologie N e-shift, un système de simulation de boîte de vitesses à double embrayage qui reproduit les à-coups, les montées en régime et les rétrogradages d'un moteur thermique. Combiné au système N Active Sound+ qui génère une bande-son synthétique évoluant avec le régime simulé, l'expérience de conduite devient viscéralement engageante. Le mode N Drift permet de répartir le couple entre les essieux pour autoriser des dérives contrôlées, tandis que le différentiel électronique N Torque Distribution vectorise la puissance roue par roue pour une agilité chirurgicale en virage.

L'intérieur du IONIQ 5 N reçoit des sièges baquets sport à réglages électriques offrant un maintien exceptionnel, un volant gainé d'Alcantara avec boutons N personnalisables et une instrumentation numérique spécifique avec modes d'affichage orientés performance. Le coffre de 527 litres préserve la praticité quotidienne, permettant d'utiliser le IONIQ 5 N comme véhicule principal sans compromis.

À 74 000 euros, le Hyundai IONIQ 5 N n'est pas donné, mais il offre un rapport performances-prix sans équivalent face aux Tesla Model 3 Performance, Porsche Taycan GTS ou BMW i4 M50. Son positionnement unique de SUV compact ultra-performant capable de procurer des sensations dignes d'une voiture de sport thermique, tout en restant parfaitement utilisable au quotidien avec son coffre généreux et son autonomie confortable, en fait l'un des véhicules électriques les plus passionnants et aboutis jamais créés.`,
    pointsForts: [
      "Puissance phénoménale de 650 chevaux avec 0-100 km/h en 3,4 secondes",
      "Charge ultra-rapide 350 kW grâce à l'architecture 800 volts, 10-80 % en 18 minutes",
      "Technologie N e-shift simulant une boîte de vitesses pour des sensations uniques",
      "Mode N Drift et vectorisation du couple roue par roue pour une agilité exceptionnelle",
      "Praticité quotidienne préservée avec 527 litres de coffre et 448 km d'autonomie WLTP",
    ],
    pointsFaibles: [
      "Prix de 74 000 euros élevé et non éligible au bonus écologique",
      "Consommation importante d'environ 20 kWh/100 km en conduite dynamique",
      "Poids de 2 190 kg se ressentant dans les enchaînements de virages serrés",
      "Autonomie réelle chutant significativement en usage sportif sur circuit",
    ],
    source: "https://www.hyundai.com/fr/modeles/ioniq5-n.html",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "mg-cyberster",
    modele: "MG Cyberster",
    marque: "MG",
    marqueSlug: "mg",
    prixBase: 45000,
    prixOccasion: null,
    autonomieWLTP: 443,
    autonomieReelle: 360,
    batterieKwh: 77,
    conso: 18.5,
    puissanceCh: 510,
    puissanceKw: 375,
    chargeRapideKw: 140,
    tempsChargeRapide: "33 min (10-80 %)",
    tempsChargeAC: "8h00 (0-100 % sur 11 kW)",
    coffre: 249,
    poids: 1985,
    longueur: 4535,
    segment: "roadster",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["roadster", "sportif", "cabriolet", "design", "plaisir"],
    annee: 2024,
    description: `Le MG Cyberster fait souffler un vent de fraîcheur sur le marché automobile électrique en ressuscitant le concept du roadster dans une version résolument futuriste. Ce cabriolet deux places 100 % électrique renoue avec l'héritage sportif britannique de la marque MG, fondée il y a plus d'un siècle, tout en embrassant pleinement les technologies du XXIe siècle. Dans un paysage automobile électrique dominé par les SUV et les berlines, le Cyberster ose la carte de l'émotion pure et du plaisir de conduire à ciel ouvert, une proposition aussi audacieuse que séduisante.

Le design du MG Cyberster est spectaculaire. Sa silhouette basse et effilée, longue de 4 535 millimètres, évoque les grands roadsters classiques tout en y ajoutant une touche cyberpunk assumée. Le capot plongeant et allongé, les portes en ciseaux spectaculaires, les optiques à LED en forme de larme et les feux arrière en bandeau continu composent un ensemble visuellement saisissant. Le toit souple électrique s'escamote en quelques secondes, dévoilant un habitacle intimiste tourné vers le conducteur. Les proportions parfaitement équilibrées entre l'avant et l'arrière confèrent au Cyberster une allure de concept car roulant qui ne laisse personne indifférent dans la rue.

Sous les lignes affolantes se cache une mécanique tout aussi impressionnante. Dans sa version la plus puissante à transmission intégrale, le MG Cyberster développe 510 chevaux grâce à deux moteurs électriques, un sur chaque essieu. Cette cavalerie catapulte le roadster de 0 à 100 km/h en moins de 3,2 secondes, des performances dignes d'une supercar. La batterie de 77 kWh offre une autonomie WLTP de 443 kilomètres, soit environ 360 kilomètres en conditions réelles, un rayon d'action remarquable pour un roadster qui permet d'envisager de véritables escapades sans se soucier constamment de la prochaine borne de recharge.

La recharge s'effectue jusqu'à 140 kW en courant continu, permettant de passer de 10 à 80 % en environ 33 minutes. Si cette puissance de charge n'atteint pas les sommets de certains concurrents, elle reste parfaitement fonctionnelle pour les haltes lors des road-trips. Sur une wallbox de 11 kW, la charge complète nécessite approximativement 8 heures. La consommation d'environ 18,5 kWh aux 100 kilomètres se montre raisonnable pour un véhicule aussi puissant, témoignant d'un travail aérodynamique efficace malgré la configuration décapotable.

L'habitacle du MG Cyberster enveloppe ses deux occupants dans un cockpit résolument tourné vers le pilote. Trois écrans composent l'instrumentation : un écran central principal et deux écrans latéraux remplaçant les cadrans traditionnels, créant un effet panoramique immersif. La console centrale est orientée vers le conducteur, avec un sélecteur de mode de conduite en forme de joystick qui renforce l'atmosphère futuriste. Les sièges sport baquets, gainés de cuir et d'Alcantara, offrent un maintien excellent. Le coffre de 249 litres, bien que limité, permet d'emporter un bagage de week-end pour deux personnes.

Le comportement routier du MG Cyberster constitue sa raison d'être. Le châssis rigide, la direction précise et le centre de gravité bas procurent des sensations de conduite grisantes, que ce soit sur les routes sinueuses de campagne ou sur les voies rapides. La transmission intégrale assure une motricité infaillible, tandis que les modes de conduite permettent de moduler le caractère du véhicule entre confort et sport extrême. La conduite cheveux au vent, avec le couple instantané des moteurs électriques et le silence troublant rompu uniquement par le sifflement du vent, crée une expérience sensorielle véritablement unique.

À 45 000 euros pour la version d'entrée de gamme, le MG Cyberster propose un rapport prix-prestations spectaculaire dans l'univers des roadsters. Non éligible au bonus écologique en raison de sa fabrication chinoise, il reste néanmoins bien plus accessible qu'un Tesla Roadster ou un Porsche Boxster électrique. Pour les passionnés d'automobile qui rêvent d'un cabriolet électrique alliant performances, autonomie et design spectaculaire, le MG Cyberster constitue une proposition unique sur le marché, une invitation au plaisir de conduire réinventé pour l'ère électrique.`,
    pointsForts: [
      "Design spectaculaire de roadster avec portes en ciseaux, unique sur le marché électrique",
      "Puissance de 510 chevaux et 0-100 km/h en moins de 3,2 secondes",
      "Prix de 45 000 euros très compétitif pour un roadster de cette catégorie de performances",
      "Autonomie WLTP de 443 km remarquable pour un cabriolet permettant de vrais road-trips",
      "Expérience de conduite à ciel ouvert incomparable en propulsion électrique",
    ],
    pointsFaibles: [
      "Coffre de 249 litres très limité, restreignant les capacités de voyage",
      "Non éligible au bonus écologique en raison de la fabrication chinoise",
      "Puissance de charge rapide de 140 kW en retrait face aux concurrents les plus performants",
      "Habitacle strictement deux places limitant la polyvalence au quotidien",
      "Poids de près de 2 tonnes élevé pour un roadster, impactant l'agilité",
    ],
    source: "https://www.mgmotor.fr/modeles/cyberster",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "alpine-a290",
    modele: "Alpine A290",
    marque: "Alpine",
    marqueSlug: "alpine",
    prixBase: 38000,
    prixOccasion: null,
    autonomieWLTP: 380,
    autonomieReelle: 310,
    batterieKwh: 52,
    conso: 14.6,
    puissanceCh: 220,
    puissanceKw: 162,
    chargeRapideKw: 100,
    tempsChargeRapide: "27 min (10-80 %)",
    tempsChargeAC: "5h15 (0-100 % sur 11 kW)",
    coffre: 326,
    poids: 1479,
    longueur: 3990,
    segment: "citadine-sportive",
    origine: "FR",
    aidesEligible: true,
    note: 9,
    tags: ["sportif", "citadine", "alpine", "made-in-france", "léger", "performance"],
    annee: 2024,
    description: `L'Alpine A290 marque l'entrée fracassante de la marque dieppoise dans l'ère de la voiture électrique sportive accessible. Basée sur la plateforme de la Renault 5 E-Tech mais profondément transformée par les ingénieurs d'Alpine, cette citadine sportive concentre l'essence du plaisir de conduite dans un format compact et une motorisation zéro émission. L'A290 représente bien plus qu'une simple Renault 5 rebadgée : c'est une véritable Alpine dans l'âme, héritière de l'esprit de la mythique A110, démocratisée dans un format urbain et électrique qui ouvre la marque à une clientèle nouvelle et passionnée.

Le design de l'Alpine A290 se distingue immédiatement de la Renault 5 par des éléments stylistiques spécifiques et affirmés. La face avant arbore quatre projecteurs ronds distinctifs en clin d'œil à l'héritage compétition d'Alpine, intégrés dans des nids d'abeille inspirés de la calandre de l'A110. Les élargisseurs d'ailes musclés élargissent la voie et renforcent la posture sportive, tandis que les jantes de 19 pouces au design spécifique chaussent des pneumatiques sport dimensionnés. L'arrière reçoit un diffuseur prononcé et une signature lumineuse en forme de X, identité visuelle de la nouvelle génération Alpine. Longue de seulement 3 990 millimètres, l'A290 assume fièrement ses proportions de citadine survoltée, compacte mais résolument agressive.

Sous le capot, le moteur électrique de l'Alpine A290 développe 220 chevaux dans sa version la plus puissante, soit près de 100 chevaux de plus que la Renault 5 standard. La batterie de 52 kWh assure une autonomie WLTP de 380 kilomètres, ce qui se traduit par environ 310 kilomètres en conditions réelles. Le poids contenu de 1 479 kilogrammes, remarquablement léger pour un véhicule électrique, constitue l'atout secret de l'A290. Ce rapport poids-puissance favorable lui confère des accélérations vives et une agilité exceptionnelle qui font toute la différence sur les routes sinueuses.

La recharge du A290 accepte jusqu'à 100 kW en courant continu, permettant un passage de 10 à 80 % en environ 27 minutes. Sur une wallbox domestique de 11 kW, la charge complète s'effectue en approximativement 5 heures et 15 minutes. La consommation d'environ 14,6 kWh aux 100 kilomètres témoigne de l'efficience remarquable de cette citadine sportive, un chiffre rendu possible par son poids plume et son aérodynamique travaillée.

L'habitacle de l'Alpine A290 mêle habilement l'esprit sportif et la technologie moderne. Les sièges baquets Sabelt intégrés, gainés d'un tissu technique spécifique, assurent un maintien sans faille dans les enchaînements de virages. Le volant sport au diamètre réduit intègre un bouton OV (overtake) hérité de la compétition, offrant un surplus de puissance temporaire à l'image du système DRS en Formule 1. L'instrumentation numérique propose des affichages spécifiques Alpine avec télémétrie embarquée, chronomètre de circuit et indicateurs de performance en temps réel. Le coffre de 326 litres préserve une praticité quotidienne acceptable pour les courses et les escapades du week-end.

Le comportement routier constitue le coeur de la proposition de l'Alpine A290. Le châssis a été intégralement retravaillé par rapport à la Renault 5 : ressorts et amortisseurs spécifiques, barres antiroulis renforcées, voie élargie et direction recalibrée pour offrir une précision et un feedback supérieurs. Le train avant directif permet de placer le véhicule avec une exactitude chirurgicale, tandis que l'arrière joueuse autorise de légères glissades contrôlées. Les différents modes de conduite (Normal, Sport et Track) modifient la cartographie moteur, la direction, la récupération d'énergie et la réponse de l'accélérateur pour s'adapter à chaque situation.

Au tarif de 38 000 euros, l'Alpine A290 se positionne comme la voiture de sport électrique la plus accessible du marché. Éligible au bonus écologique grâce à sa fabrication française à Douai, elle devient encore plus attrayante après déduction des aides. Face aux MINI Cooper SE ou Abarth 500e, elle offre des performances et un châssis d'un tout autre calibre. L'A290 prouve brillamment qu'il est possible de conjuguer plaisir de conduite intense, conscience environnementale et budget maîtrisé, ouvrant une nouvelle page passionnante de l'histoire centenaire d'Alpine.`,
    pointsForts: [
      "Poids plume de 1 479 kg offrant un rapport poids-puissance exceptionnel pour une électrique",
      "Châssis intégralement retravaillé par Alpine pour un plaisir de conduite sans concession",
      "Prix de 38 000 euros en faisant la sportive électrique la plus accessible, éligible au bonus écologique",
      "Bouton OV hérité de la compétition pour un surplus de puissance instantané",
      "Consommation de seulement 14,6 kWh/100 km, parmi les plus basses du marché",
      "Design distinctif avec quatre projecteurs ronds et élargisseurs d'ailes marquant l'identité Alpine",
    ],
    pointsFaibles: [
      "Puissance de charge rapide limitée à 100 kW, inférieure aux standards actuels des sportives",
      "Coffre de 326 litres modeste pour un usage familial régulier",
      "Habitabilité arrière restreinte par le gabarit compact de citadine",
    ],
    source: "https://www.alpinecars.fr/a290.html",
    dateMAJ: "2026-06-22",
  },
// ─── PEUGEOT E-308 ─────────────────────────────────────────────
  {
    slug: "peugeot-e-308",
    modele: "Peugeot e-308",
    marque: "Peugeot",
    marqueSlug: "peugeot",
    prixBase: 37000,
    prixOccasion: null,
    autonomieWLTP: 410,
    autonomieReelle: 330,
    batterieKwh: 54,
    conso: 15.2,
    puissanceCh: 156,
    puissanceKw: 115,
    chargeRapideKw: 100,
    tempsChargeRapide: "30 min (20-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 7,4 kW)",
    coffre: 412,
    poids: 1640,
    longueur: 4367,
    segment: "compacte",
    origine: "FR",
    aidesEligible: true,
    note: 8,
    tags: ["compacte", "made-in-france"],
    annee: 2024,
    description: `La Peugeot e-308 représente l'entrée de la marque au lion dans le segment des compactes 100 % électriques. Construite sur la plateforme EMP2 évoluée du groupe Stellantis, elle reprend la silhouette élégante et dynamique de la 308 thermique tout en adoptant une motorisation entièrement électrique. Ce choix de plateforme multi-énergie permet à Peugeot de proposer une compacte électrique à un prix contenu, tout en conservant l'habitabilité et le volume de coffre qui ont fait le succès de la 308 dans sa version essence et diesel.

Sous le capot, la e-308 embarque un moteur électrique de 156 ch (115 kW) alimenté par une batterie de 54 kWh. Ces caractéristiques permettent d'atteindre une autonomie homologuée WLTP de 410 km, soit environ 330 km en conditions réelles de conduite mixte. La consommation moyenne annoncée de 15,2 kWh aux 100 km la place parmi les compactes électriques les plus efficientes du marché, un atout non négligeable pour réduire le coût d'utilisation au quotidien.

En matière de recharge, la Peugeot e-308 accepte la charge rapide en courant continu jusqu'à 100 kW, permettant de récupérer de 20 à 80 % de batterie en environ 30 minutes sur une borne compatible. En courant alternatif, le chargeur embarqué de 7,4 kW permet une recharge complète en 7h30 environ, idéale pour une recharge nocturne à domicile via une wallbox. L'option du chargeur embarqué 11 kW est disponible pour les utilisateurs qui souhaitent accélérer la recharge AC.

L'intérieur de la e-308 bénéficie du célèbre i-Cockpit de Peugeot dans sa dernière évolution. Le petit volant et l'instrumentation numérique en position haute offrent une ergonomie de conduite distinctive et appréciée. L'écran central tactile de 10 pouces intègre le système d'infodivertissement compatible Apple CarPlay et Android Auto sans fil. La qualité des matériaux est soignée, avec des inserts en tissu recyclé et un habillage de planche de bord qui reflète les ambitions premium de la marque.

Le coffre de 412 litres est l'un des plus généreux de la catégorie des compactes électriques, offrant un volume comparable à celui de la version thermique. L'habitabilité arrière est correcte pour deux adultes et un enfant, bien que l'empattement ne soit pas aussi généreux que celui des véhicules conçus sur une plateforme native électrique. La banquette arrière se rabat en 60/40 pour augmenter la capacité de chargement.

En conduite, la e-308 affiche un comportement routier précis et agréable, hérité de la version thermique. Le centre de gravité abaissé par la batterie dans le plancher renforce la stabilité en courbe. Le confort de suspension est bien calibré, filtrant efficacement les irrégularités de la route. La direction, fidèle à l'ADN Peugeot, est vive et communicative.

Côté sécurité et aides à la conduite, la e-308 embarque de série le freinage automatique d'urgence avec détection des piétons et cyclistes, le maintien actif dans la voie, la reconnaissance des panneaux de signalisation et le régulateur de vitesse adaptatif avec Stop & Go. La conduite semi-autonome de niveau 2 est disponible sur les finitions supérieures.

Fabriquée en France à l'usine de Mulhouse, la Peugeot e-308 est éligible au bonus écologique, ce qui permet de réduire significativement son prix d'achat. Avec un tarif de base à 37 000 € avant aides, elle se positionne face à la Renault Mégane E-Tech, la Volkswagen ID.3 et la MG4. Son positionnement mise sur la qualité de finition, le style et l'agrément de conduite typiquement français pour se démarquer dans un segment de plus en plus concurrentiel.

La garantie constructeur couvre 8 ans ou 160 000 km pour la batterie, et 2 ans sans limitation de kilométrage pour le véhicule. Peugeot propose également des offres de leasing social et de location longue durée pour faciliter l'accès à la mobilité électrique.`,
    pointsForts: [
      "Coffre généreux de 412 litres, parmi les meilleurs du segment",
      "i-Cockpit dernière génération avec instrumentation numérique en hauteur",
      "Fabrication française (Mulhouse), éligible au bonus écologique",
      "Consommation contenue de 15,2 kWh/100 km",
      "Comportement routier précis et dynamique hérité de la 308 thermique",
    ],
    pointsFaibles: [
      "Charge rapide limitée à 100 kW (en retrait face à la concurrence)",
      "Chargeur embarqué AC de 7,4 kW de série (11 kW en option)",
      "Plateforme multi-énergie, pas native électrique",
      "Places arrière justes pour trois adultes",
    ],
    source: "https://www.peugeot.fr/nos-vehicules/e-308.html",
    dateMAJ: "2026-06-22",
  },

  // ─── PEUGEOT E-3008 ────────────────────────────────────────────
  {
    slug: "peugeot-e-3008",
    modele: "Peugeot e-3008",
    marque: "Peugeot",
    marqueSlug: "peugeot",
    prixBase: 44800,
    prixOccasion: null,
    autonomieWLTP: 527,
    autonomieReelle: 420,
    batterieKwh: 73,
    conso: 16.7,
    puissanceCh: 213,
    puissanceKw: 157,
    chargeRapideKw: 160,
    tempsChargeRapide: "30 min (20-80 %)",
    tempsChargeAC: "7h (0-100 % sur 11 kW)",
    coffre: 520,
    poids: 2108,
    longueur: 4542,
    segment: "SUV-familial",
    origine: "FR",
    aidesEligible: true,
    note: 9,
    tags: ["SUV", "familiale", "grande-autonomie", "made-in-france"],
    annee: 2024,
    description: `Le Peugeot e-3008 marque un tournant majeur pour la marque au lion : il s'agit du premier véhicule Stellantis construit sur la nouvelle plateforme STLA Medium, conçue nativement pour l'électrique. Ce SUV familial inaugure une nouvelle ère pour Peugeot avec un design spectaculaire, une technologie de pointe et une autonomie de premier plan qui le positionne directement face aux Tesla Model Y, Volkswagen ID.4 et Hyundai Ioniq 5.

Le design extérieur du e-3008 rompt avec les codes de son prédécesseur. La calandre fermée intègre les phares LED à trois griffes caractéristiques de Peugeot dans un ensemble sculptural et futuriste. Le profil est plus aérodynamique, avec un Cx optimisé grâce à des poignées de porte affleurantes et un becquet arrière intégré. La silhouette fastback lui confère une allure de SUV-coupé distincte dans le segment.

Sous le plancher, la batterie de 73 kWh (version de lancement) alimente un moteur électrique de 213 ch (157 kW) sur l'essieu avant. L'autonomie WLTP atteint 527 km, soit environ 420 km en usage réel mixte, un chiffre qui le place parmi les meilleurs de sa catégorie. Peugeot propose également une version à batterie longue autonomie de 98 kWh, capable d'atteindre jusqu'à 700 km WLTP, une première pour un SUV familial européen à ce niveau de prix.

La recharge constitue l'un des points forts du e-3008. Grâce à l'architecture 400 V de la plateforme STLA Medium, la charge rapide DC atteint 160 kW, permettant de passer de 20 à 80 % en environ 30 minutes. Le chargeur embarqué 11 kW de série autorise une recharge complète à domicile en 7 heures sur une wallbox adaptée.

L'intérieur du e-3008 est dominé par le Panoramic i-Cockpit, une évolution spectaculaire du concept signature de Peugeot. Un immense écran incurvé de 21 pouces surplombe la planche de bord, intégrant l'instrumentation, la navigation et l'infodivertissement. Le petit volant reste fidèle à l'identité Peugeot, tandis que les commandes physiques de climatisation sont conservées pour plus d'ergonomie. Les matériaux sont premium : cuir Nappa, tissu Alcantara recyclé et bois reconstitué selon les finitions.

Le coffre de 520 litres est parfaitement adapté à un usage familial, avec un seuil de chargement bas et une ouverture large facilitant le chargement des poussettes et valises. La banquette arrière coulissante permet d'ajuster l'espace entre les passagers et le coffre selon les besoins. L'habitabilité aux places arrière est généreuse, avec une garde au toit et un espace aux genoux en net progrès par rapport à l'ancien 3008.

En matière de conduite, le e-3008 offre un comportement rassurant et confortable. La suspension est bien calibrée pour absorber les imperfections de la route, et le silence de fonctionnement est remarquable. Plusieurs modes de conduite (Eco, Normal, Sport) modifient la réponse de l'accélérateur et la récupération d'énergie au freinage. Le mode Sport libère l'intégralité des 213 ch pour des accélérations franches.

En matière de sécurité, le e-3008 propose de série le freinage automatique d'urgence avec détection des piétons et cyclistes, le maintien actif dans la voie et le régulateur de vitesse adaptatif avec Stop & Go. La conduite semi-autonome de niveau 2 est intégrée dans les finitions GT, combinant le contrôle longitudinal et latéral du véhicule. La caméra 360° et les capteurs à ultrasons facilitent les manœuvres de stationnement.

Fabriqué à Sochaux, le Peugeot e-3008 est éligible au bonus écologique. Avec un prix de départ de 44 800 €, il se positionne comme un SUV électrique familial premium accessible, combinant technologie de pointe, autonomie généreuse et fabrication française. La garantie batterie de 8 ans ou 160 000 km rassure quant à la pérennité de l'investissement. Le e-3008 est proposé en finitions Allure, GT et GT Pack, avec des options de personnalisation extérieure et intérieure variées.`,
    pointsForts: [
      "Plateforme STLA Medium native électrique, autonomie jusqu'à 700 km (version 98 kWh)",
      "Panoramic i-Cockpit avec écran incurvé de 21 pouces",
      "Coffre de 520 L avec banquette arrière coulissante",
      "Charge rapide DC jusqu'à 160 kW",
      "Fabrication française (Sochaux), éligible au bonus écologique",
      "Design spectaculaire et aérodynamique optimisée",
    ],
    pointsFaibles: [
      "Poids élevé (plus de 2 100 kg)",
      "Pas de transmission intégrale au lancement",
      "Options premium qui font vite grimper la facture",
      "Architecture 400 V (pas de 800 V comme certains concurrents)",
    ],
    source: "https://www.peugeot.fr/nos-vehicules/e-3008.html",
    dateMAJ: "2026-06-22",
  },

  // ─── PEUGEOT E-5008 ────────────────────────────────────────────
  {
    slug: "peugeot-e-5008",
    modele: "Peugeot e-5008",
    marque: "Peugeot",
    marqueSlug: "peugeot",
    prixBase: 50000,
    prixOccasion: null,
    autonomieWLTP: 502,
    autonomieReelle: 400,
    batterieKwh: 73,
    conso: 17.1,
    puissanceCh: 213,
    puissanceKw: 157,
    chargeRapideKw: 160,
    tempsChargeRapide: "30 min (20-80 %)",
    tempsChargeAC: "7h (0-100 % sur 11 kW)",
    coffre: 348,
    poids: 2232,
    longueur: 4791,
    segment: "SUV-7-places",
    origine: "FR",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "familiale", "7-places", "grande-autonomie", "made-in-france"],
    annee: 2024,
    description: `Le Peugeot e-5008 est le premier grand SUV électrique 7 places de la marque au lion, et l'un des très rares véhicules électriques à proposer sept vraies places assises sur le marché européen. Construit sur la plateforme STLA Medium, comme le e-3008, il en reprend la technologie mais l'étend dans un format familial XXL de 4,79 mètres de long.

Le design du e-5008 reprend les codes stylistiques inaugurés par le e-3008 : calandre fermée avec les trois griffes LED, profil sculpté et silhouette de SUV haut perché. La longueur accrue de 25 cm par rapport au e-3008 est principalement dédiée au porte-à-faux arrière allongé et à l'empattement étiré, permettant l'installation d'une troisième rangée de sièges.

Le moteur électrique de 213 ch (157 kW) est identique à celui du e-3008, et la batterie de 73 kWh offre une autonomie WLTP de 502 km, soit environ 400 km en conditions réelles. Cette autonomie légèrement inférieure à celle du e-3008 s'explique par le poids supplémentaire du véhicule (2 232 kg). Une version à batterie longue autonomie de 98 kWh sera également proposée pour ceux qui ont besoin de parcourir de plus longues distances.

La recharge du e-5008 bénéficie de la même architecture que le e-3008 : charge rapide DC jusqu'à 160 kW (20 à 80 % en 30 minutes) et chargeur embarqué AC de 11 kW pour la recharge quotidienne. Le planificateur d'itinéraire intégré au système de navigation anticipe les arrêts de recharge nécessaires et préconditionne la batterie pour optimiser la vitesse de charge à l'arrivée à la borne.

L'intérieur du e-5008 est le véritable argument de vente de ce modèle. Le Panoramic i-Cockpit avec son grand écran incurvé de 21 pouces est repris du e-3008, mais l'espace intérieur est considérablement agrandi. La deuxième rangée de sièges offre un confort de niveau routier avec un espace aux genoux généreux et des sièges individuels inclinables et coulissants. La troisième rangée est utilisable par des adolescents ou des adultes de taille moyenne pour des trajets courts, ce qui est remarquable pour un véhicule électrique de ce gabarit.

Le coffre affiche 348 litres en configuration 7 places, ce qui reste modeste mais dans la norme du segment. En rabattant la troisième rangée, le volume grimpe à 748 litres, et en configuration 2 places, il atteint plus de 1 800 litres. La modularité est l'un des atouts majeurs du e-5008, avec des sièges de deuxième rangée rabattables et coulissants individuellement.

Le comportement routier du e-5008 est étonnamment confortable pour un véhicule de ce gabarit. La suspension absorbe bien les irrégularités, et le silence de roulement est excellent grâce à une isolation phonique soignée et à l'absence de moteur thermique. Le mode Eco limite la puissance pour maximiser l'autonomie lors des longs trajets familiaux.

Les aides à la conduite comprennent le freinage automatique d'urgence, le régulateur adaptatif avec Stop & Go, le maintien actif dans la voie et la vision nocturne infrarouge en option. Le système de stationnement automatique avec mémorisation de manœuvres est disponible sur les finitions supérieures, un atout pour un véhicule de ce gabarit.

Fabriqué à Sochaux aux côtés du e-3008, le Peugeot e-5008 est éligible au bonus écologique. À 50 000 €, il se positionne comme l'un des seuls SUV électriques 7 places accessibles sur le marché, loin devant le Tesla Model X ou le Mercedes EQB en termes de rapport prestations/prix. Il constitue une proposition unique pour les familles nombreuses souhaitant passer à l'électrique sans renoncer à la troisième rangée de sièges. La garantie batterie de 8 ans ou 160 000 km apporte la sérénité nécessaire pour un investissement familial de long terme.`,
    pointsForts: [
      "Sept vraies places, l'un des rares SUV électriques 7 places du marché",
      "Plateforme STLA Medium native électrique avec 502 km WLTP",
      "Panoramic i-Cockpit avec écran incurvé de 21 pouces",
      "Modularité intérieure remarquable (348 à 1 800 litres de coffre)",
      "Fabrication française (Sochaux), éligible au bonus écologique",
    ],
    pointsFaibles: [
      "Coffre limité à 348 litres en configuration 7 places",
      "Poids élevé (2 232 kg) impactant la consommation",
      "Troisième rangée contraignante pour les adultes de grande taille",
      "Prix de départ à 50 000 € avant aides",
      "Pas de transmission intégrale au lancement",
    ],
    source: "https://www.peugeot.fr/nos-vehicules/e-5008.html",
    dateMAJ: "2026-06-22",
  },

  // ─── CITROËN Ë-C4 ──────────────────────────────────────────────
  {
    slug: "citroen-e-c4",
    modele: "Citroën ë-C4",
    marque: "Citroën",
    marqueSlug: "citroen",
    prixBase: 36000,
    prixOccasion: 20000,
    autonomieWLTP: 350,
    autonomieReelle: 280,
    batterieKwh: 50,
    conso: 15.3,
    puissanceCh: 136,
    puissanceKw: 100,
    chargeRapideKw: 100,
    tempsChargeRapide: "30 min (20-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 7,4 kW)",
    coffre: 380,
    poids: 1588,
    longueur: 4360,
    segment: "compacte",
    origine: "FR",
    aidesEligible: true,
    note: 7,
    tags: ["compacte", "confort", "made-in-france"],
    annee: 2024,
    description: `La Citroën ë-C4 est la version 100 % électrique de la compacte C4, positionnée au carrefour entre la berline et le crossover grâce à sa silhouette surélevée et son profil de coupé. Produite sur la plateforme ë-CMP du groupe Stellantis, elle incarne la philosophie de confort à la française chère à Citroën, transposée dans l'univers de la mobilité électrique.

Le design de la ë-C4 est l'un de ses atouts majeurs. Avec sa ligne de toit fuyante, ses chevrons chromés proéminents et ses protections latérales Airbump, elle affiche une personnalité forte qui tranche avec le conformisme du segment. La garde au sol rehaussée de 156 mm lui confère une allure de crossover sans en avoir les proportions, séduisant les conducteurs qui souhaitent un véhicule polyvalent sans opter pour un véritable SUV.

Sous le plancher, la batterie de 50 kWh alimente un moteur électrique de 136 ch (100 kW) placé sur l'essieu avant. L'autonomie WLTP de 350 km se traduit par environ 280 km en conditions réelles, un chiffre suffisant pour l'essentiel des trajets quotidiens mais qui peut nécessiter une planification pour les longs parcours autoroutiers. La consommation moyenne de 15,3 kWh aux 100 km est contenue pour le segment.

La recharge rapide en courant continu atteint 100 kW, permettant de récupérer de 20 à 80 % en 30 minutes environ. En AC, le chargeur embarqué de 7,4 kW assure une recharge complète en 7h30. L'option chargeur 11 kW est disponible pour accélérer la recharge domestique. Citroën propose également le service Free2Move Charge pour accéder à un large réseau de bornes publiques.

L'intérieur de la ë-C4 est conçu autour du confort. Les sièges Advanced Comfort à mousse haute densité offrent un moelleux remarquable, souvent comparé à celui d'un canapé. La suspension Progressive Hydraulic Cushions, signature de Citroën, filtre les aspérités de la route avec une efficacité remarquable, offrant un niveau de confort de roulement parmi les meilleurs du segment. L'écran central de 10 pouces est complété par un combiné d'instrumentation numérique clair et lisible.

Le coffre de 380 litres est correct pour la catégorie, bien que légèrement inférieur à celui de la Peugeot e-308 (412 L). L'habitabilité arrière est dans la moyenne, avec un espace aux genoux et une garde au toit acceptables pour deux adultes. La ligne de toit fuyante peut toutefois limiter le dégagement au niveau de la tête pour les passagers les plus grands.

Côté équipement, la ë-C4 offre de série la climatisation automatique bi-zone, le chargeur de smartphone par induction, la caméra de recul et un pack de sécurité incluant le freinage automatique d'urgence et le régulateur de vitesse adaptatif. Les finitions supérieures ajoutent le toit panoramique fixe, la navigation connectée et les sièges chauffants.

Fabriquée en Espagne (Madrid) sous label européen, la Citroën ë-C4 est éligible au bonus écologique. Son positionnement tarifaire à 36 000 € avant aides la rend compétitive, d'autant plus qu'elle se trouve régulièrement en promotion ou en offre de leasing avantageuse. Elle constitue un excellent choix pour les conducteurs privilégiant le confort absolu et un style distinctif, même si son autonomie et sa puissance de charge restent en retrait face aux compactes électriques les plus récentes.`,
    pointsForts: [
      "Confort de référence grâce aux sièges Advanced Comfort et suspension hydraulique",
      "Design distinctif mi-berline mi-crossover",
      "Prix compétitif avec des offres de leasing attractives",
      "Éligible au bonus écologique",
      "Équipement de série généreux",
    ],
    pointsFaibles: [
      "Autonomie limitée à 350 km WLTP (280 km réels)",
      "Puissance modeste de 136 ch",
      "Chargeur embarqué AC de 7,4 kW de série seulement",
      "Habitabilité arrière pénalisée par la ligne de toit fuyante",
    ],
    source: "https://www.citroen.fr/modeles/e-c4.html",
    dateMAJ: "2026-06-22",
  },

  // ─── CITROËN Ë-C4 X ────────────────────────────────────────────
  {
    slug: "citroen-e-c4-x",
    modele: "Citroën ë-C4 X",
    marque: "Citroën",
    marqueSlug: "citroen",
    prixBase: 38000,
    prixOccasion: null,
    autonomieWLTP: 360,
    autonomieReelle: 290,
    batterieKwh: 50,
    conso: 15.0,
    puissanceCh: 136,
    puissanceKw: 100,
    chargeRapideKw: 100,
    tempsChargeRapide: "30 min (20-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 7,4 kW)",
    coffre: 510,
    poids: 1614,
    longueur: 4600,
    segment: "berline-compacte",
    origine: "FR",
    aidesEligible: true,
    note: 7,
    tags: ["berline", "confort", "grand-coffre"],
    annee: 2024,
    description: `La Citroën ë-C4 X est la déclinaison berline de la ë-C4, offrant une malle arrière prononcée qui augmente considérablement le volume de coffre à 510 litres. Ce modèle occupe une niche peu exploitée dans l'univers des voitures électriques : celle de la berline compacte confortable et pratique, à mi-chemin entre une compacte classique et une berline familiale.

Le design de la ë-C4 X reprend la face avant de la ë-C4 avec ses chevrons caractéristiques et sa signature lumineuse distinctive, mais se distingue par sa partie arrière allongée de 24 cm. Le profil fastback avec malle intégrée lui confère une silhouette unique, élégante et aérodynamique. Le coefficient de traînée amélioré par cette forme plus lisse contribue à une autonomie légèrement supérieure à celle de la ë-C4, atteignant 360 km WLTP.

La motorisation est identique à celle de la ë-C4 : un moteur électrique de 136 ch (100 kW) alimenté par une batterie de 50 kWh. La consommation de 15,0 kWh aux 100 km est légèrement inférieure à celle de la ë-C4, grâce à l'aérodynamique plus favorable de la carrosserie berline. En conditions réelles, l'autonomie se situe autour de 290 km, suffisante pour les trajets domicile-travail et les escapades du week-end.

La recharge suit le même schéma que la ë-C4 : charge rapide DC jusqu'à 100 kW et chargeur embarqué AC de 7,4 kW de série (11 kW en option). Le système de pré-conditionnement thermique de la batterie améliore la vitesse de charge lorsque la température extérieure est basse, un avantage appréciable en hiver.

L'intérieur de la ë-C4 X partage l'ADN de confort Citroën avec la ë-C4. Les sièges Advanced Comfort offrent un accueil moelleux, et la suspension Progressive Hydraulic Cushions assure un filtrage remarquable des imperfections de la route. L'ambiance intérieure est apaisante, avec des matériaux doux au toucher et une attention particulière portée à l'insonorisation de l'habitacle.

Le coffre de 510 litres constitue le véritable argument différenciant de la ë-C4 X. Ce volume, digne d'une berline familiale du segment supérieur, permet d'emporter facilement trois grandes valises ou une poussette avec les courses de la semaine. La malle s'ouvre largement, facilitant le chargement d'objets volumineux. C'est l'un des plus grands coffres disponibles dans une compacte électrique.

L'habitabilité aux places arrière bénéficie également de l'empattement allongé, avec un espace aux genoux et une garde au toit supérieurs à ceux de la ë-C4. La ligne de toit, moins plongeante que sur la ë-C4, préserve un meilleur dégagement pour la tête des passagers arrière.

En matière d'aides à la conduite, la ë-C4 X dispose de série du Highway Driver Assist combinant le régulateur de vitesse adaptatif et le centrage dans la voie, du freinage automatique d'urgence et de l'alerte de franchissement involontaire de ligne. La caméra de recul avec guidelines dynamiques facilite les manœuvres.

Éligible au bonus écologique et positionnée à 38 000 € avant aides, la Citroën ë-C4 X s'adresse aux conducteurs qui recherchent avant tout le confort, l'espace et la praticité d'un grand coffre dans un format compact. Elle constitue une alternative originale et pertinente aux berlines compactes électriques plus conventionnelles comme la Peugeot e-308 ou la Volkswagen ID.3.`,
    pointsForts: [
      "Coffre de 510 litres, parmi les plus grands du segment compact électrique",
      "Confort de suspension et de sièges de référence (ADN Citroën)",
      "Aérodynamique optimisée par la forme berline (consommation réduite)",
      "Habitabilité arrière en progrès par rapport à la ë-C4",
      "Éligible au bonus écologique",
    ],
    pointsFaibles: [
      "Puissance modeste de 136 ch (dépassements moins aisés)",
      "Autonomie WLTP de 360 km (limitée pour les longs trajets)",
      "Charge rapide plafonnée à 100 kW",
      "Positionnement de niche, réseau de revente moins établi",
    ],
    source: "https://www.citroen.fr/modeles/e-c4-x.html",
    dateMAJ: "2026-06-22",
  },

  // ─── CITROËN Ë-C3 AIRCROSS ─────────────────────────────────────
  {
    slug: "citroen-e-c3-aircross",
    modele: "Citroën ë-C3 Aircross",
    marque: "Citroën",
    marqueSlug: "citroen",
    prixBase: 27000,
    prixOccasion: null,
    autonomieWLTP: 350,
    autonomieReelle: 280,
    batterieKwh: 44,
    conso: 15.5,
    puissanceCh: 113,
    puissanceKw: 83,
    chargeRapideKw: 100,
    tempsChargeRapide: "26 min (20-80 %)",
    tempsChargeAC: "4h10 (0-100 % sur 11 kW)",
    coffre: 460,
    poids: 1540,
    longueur: 4390,
    segment: "SUV-urbain",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "familiale", "pas-cher", "7-places-option"],
    annee: 2025,
    description: `Le Citroën ë-C3 Aircross est le petit SUV familial électrique de Citroën, construit sur la plateforme Smart Car du groupe Stellantis. Positionné comme le SUV électrique le plus abordable du marché européen, il ambitionne de démocratiser l'accès à la mobilité électrique familiale avec un prix d'entrée à 27 000 € et une configuration en option à 5+2 places.

Le design du ë-C3 Aircross s'inscrit dans la nouvelle identité visuelle de Citroën inaugurée par la ë-C3. Les lignes sont carrées et robustes, avec des protections latérales prononcées et une garde au sol surélevée qui lui donnent un air de baroudeur urbain. La face avant reprend le nouveau logo Citroën et les feux verticaux distinctifs. Malgré ses 4,39 mètres de longueur contenue, le ë-C3 Aircross offre une présence visuelle affirmée sur la route.

Le moteur électrique de 113 ch (83 kW) est associé à une batterie de 44 kWh. L'autonomie WLTP de 350 km (environ 280 km en conditions réelles) est remarquable pour un véhicule de ce prix. La consommation de 15,5 kWh aux 100 km bénéficie d'un poids contenu de 1 540 kg, largement inférieur à celui de la plupart des SUV électriques du marché.

La recharge rapide DC atteint 100 kW, avec une courbe de charge optimisée permettant de récupérer de 20 à 80 % en seulement 26 minutes. Le chargeur embarqué AC de 11 kW de série assure une recharge complète en 4h10 sur une wallbox, un excellent temps pour cette catégorie de prix.

L'intérieur du ë-C3 Aircross est pensé pour la famille. L'habitabilité est remarquable grâce à l'empattement généreux de 2,67 m et à l'architecture optimisée de la plateforme Smart Car. Les places arrière accueillent confortablement trois adultes, et une configuration à 5+2 places avec une troisième rangée escamotable est proposée en option, faisant du ë-C3 Aircross l'un des véhicules les plus compacts à offrir cette possibilité.

Le coffre affiche 460 litres en configuration 5 places, un volume généreux pour le segment. Les sièges de la deuxième rangée sont rabattables et coulissants, permettant d'adapter l'espace aux besoins. La planche de bord est simple et fonctionnelle, avec un écran central de 10,25 pouces intégrant la navigation et la compatibilité Apple CarPlay/Android Auto sans fil.

Citroën a fait le choix du confort avec sa suspension améliorée et ses sièges à mousse épaisse. L'insonorisation est correcte pour un véhicule de ce prix, et le comportement routier est sûr et prévisible. Le rayon de braquage réduit facilite les manœuvres en ville.

En matière d'équipement, le ë-C3 Aircross propose de série le freinage automatique d'urgence, l'aide au maintien dans la voie, le régulateur de vitesse, la climatisation et les vitres électriques avant et arrière. Les finitions supérieures ajoutent le toit ouvrant, les sièges chauffants et le pack de stationnement avec caméra 180°.

Fabriqué en Slovaquie, le ë-C3 Aircross est éligible au bonus écologique. À 27 000 € avant aides, il est le SUV familial électrique le moins cher d'Europe, une proposition unique qui le positionne comme l'outil de démocratisation de la mobilité électrique pour les familles à budget maîtrisé. Il concurrence directement la Dacia Spring en termes de prix, tout en offrant nettement plus d'espace et d'autonomie.`,
    pointsForts: [
      "Prix imbattable pour un SUV électrique familial (27 000 €)",
      "Configuration 5+2 places en option, rare à ce prix",
      "Coffre généreux de 460 litres en configuration 5 places",
      "Recharge rapide 100 kW et chargeur AC 11 kW de série",
      "Poids contenu (1 540 kg) favorisant la consommation",
    ],
    pointsFaibles: [
      "Puissance modeste de 113 ch (reprises limitées sur autoroute)",
      "Finition intérieure basique sur les versions d'entrée de gamme",
      "Autonomie réelle d'environ 280 km (planification nécessaire pour longs trajets)",
    ],
    source: "https://www.citroen.fr/modeles/e-c3-aircross.html",
    dateMAJ: "2026-06-22",
  },

  // ─── VOLKSWAGEN ID.3 ───────────────────────────────────────────
  {
    slug: "volkswagen-id3",
    modele: "Volkswagen ID.3",
    marque: "Volkswagen",
    marqueSlug: "volkswagen",
    prixBase: 38000,
    prixOccasion: 24000,
    autonomieWLTP: 560,
    autonomieReelle: 440,
    batterieKwh: 77,
    conso: 15.9,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 170,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 385,
    poids: 1870,
    longueur: 4261,
    segment: "compacte",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["compacte", "grande-autonomie"],
    annee: 2024,
    description: `La Volkswagen ID.3 est la compacte électrique emblématique du groupe Volkswagen, conçue sur la plateforme MEB (Modularer Elektrobaukasten) dédiée aux véhicules électriques. Lancée en 2020 comme la « Golf de l'ère électrique », elle a bénéficié d'une mise à jour majeure en 2023 qui a corrigé plusieurs défauts de jeunesse et renforcé son attractivité. Elle constitue aujourd'hui l'une des compactes électriques les plus vendues en Europe.

Le design de l'ID.3 a été affiné lors de sa mise à jour. La face avant intègre désormais un bandeau lumineux LED continu, les pare-chocs sont redessinés et la palette de couleurs a été élargie. Le profil compact de 4,26 m reste pratique pour la conduite urbaine, tandis que l'empattement long de 2,77 m (rendu possible par la plateforme native EV) maximise l'espace intérieur.

La version la plus populaire embarque une batterie de 77 kWh (net) associée à un moteur électrique arrière de 204 ch (150 kW). L'autonomie WLTP atteint 560 km, soit environ 440 km en conditions réelles, un chiffre qui place l'ID.3 parmi les compactes électriques les plus endurantes du marché. La version d'entrée de gamme avec batterie de 58 kWh offre 420 km WLTP.

La charge rapide DC culmine à 170 kW sur la version 77 kWh, permettant de récupérer de 10 à 80 % en environ 30 minutes. Cette puissance de charge est significativement supérieure à celle de la plupart des compactes françaises concurrentes (100 kW). Le chargeur embarqué AC de 11 kW est de série.

L'intérieur de l'ID.3 a été considérablement amélioré lors de la mise à jour 2023. Les matériaux de la planche de bord sont plus qualitatifs, les boutons de commande de climatisation sont désormais rétroéclairés, et le système d'infodivertissement a gagné en réactivité. L'écran central de 12 pouces est complété par un combiné d'instrumentation de 5,3 pouces et un affichage tête haute en réalité augmentée en option. L'intégration de ChatGPT dans l'assistant vocal IDA est disponible depuis 2024.

L'espace intérieur est l'un des points forts de l'ID.3. Grâce à la plateforme MEB, l'habitabilité est comparable à celle d'une Golf VIII malgré une longueur extérieure inférieure. Le plancher plat (sans tunnel de transmission) libère un espace généreux aux places arrière. Le coffre de 385 litres est correct, bien que la forme de la malle limite parfois le chargement d'objets volumineux.

Le comportement routier de l'ID.3 est caractérisé par un confort de suspension bien calibré et un rayon de braquage exceptionnellement réduit de 10,2 m, idéal pour la ville. La motricité arrière offre une sensation de conduite agréable et dynamique, sans patinage des roues avant en accélération.

En matière de sécurité, l'ID.3 a obtenu 5 étoiles Euro NCAP et propose de série le freinage automatique d'urgence, le maintien dans la voie, le régulateur adaptatif ACC et la détection de fatigue. Le Travel Assist (conduite semi-autonome niveau 2) est disponible en option.

Fabriquée à Zwickau en Allemagne, l'ID.3 est éligible au bonus écologique en France. À 38 000 € (version 77 kWh), elle offre un rapport autonomie/prix très compétitif et représente une valeur sûre pour les conducteurs souhaitant passer à l'électrique sans compromis sur l'autonomie.`,
    pointsForts: [
      "Grande autonomie de 560 km WLTP (77 kWh), parmi les meilleures du segment",
      "Charge rapide DC jusqu'à 170 kW",
      "Plateforme MEB native électrique, habitabilité maximisée",
      "Rayon de braquage exceptionnel de 10,2 m",
      "Intégration de ChatGPT dans l'assistant vocal IDA",
    ],
    pointsFaibles: [
      "Coffre de 385 litres un peu juste pour une familiale",
      "Qualité perçue intérieure en retrait face aux français (malgré améliorations)",
      "Interface tactile perfectible (boutons capacitifs au volant)",
      "Pas de frunk ni de rangement sous le capot avant",
    ],
    source: "https://www.volkswagen.fr/fr/modeles/id3.html",
    dateMAJ: "2026-06-22",
  },

  // ─── VOLKSWAGEN ID.5 ───────────────────────────────────────────
  {
    slug: "volkswagen-id5",
    modele: "Volkswagen ID.5",
    marque: "Volkswagen",
    marqueSlug: "volkswagen",
    prixBase: 48000,
    prixOccasion: 33000,
    autonomieWLTP: 548,
    autonomieReelle: 430,
    batterieKwh: 77,
    conso: 16.3,
    puissanceCh: 286,
    puissanceKw: 210,
    chargeRapideKw: 175,
    tempsChargeRapide: "29 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 549,
    poids: 2174,
    longueur: 4599,
    segment: "SUV-coupé",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "coupé", "grande-autonomie", "premium"],
    annee: 2024,
    description: `Le Volkswagen ID.5 est la version SUV-coupé de l'ID.4, partageant la même plateforme MEB mais se distinguant par une ligne de toit plongeante qui lui confère une allure sportive et élégante. Positionné en haut de la gamme des SUV électriques Volkswagen, il combine l'habitabilité d'un SUV compact avec le dynamisme esthétique d'un coupé.

Le design de l'ID.5 est sa principale différenciation par rapport à l'ID.4. La ligne de toit descend harmonieusement vers l'arrière, se terminant par un becquet intégré. Cette silhouette coupée améliore le coefficient aérodynamique (Cx de 0,26 contre 0,28 pour l'ID.4), ce qui contribue à une autonomie légèrement supérieure malgré un gabarit comparable. Le bandeau lumineux LED traverse toute la face avant, et les feux arrière 3D renforcent l'identité visuelle.

La motorisation la plus populaire est la version GTX à transmission intégrale, avec deux moteurs développant 286 ch (210 kW) au total. Cette configuration offre des accélérations dynamiques (0 à 100 km/h en 6,3 secondes) tout en conservant la stabilité de la transmission intégrale sur routes mouillées ou enneigées. La version propulsion de 204 ch est également disponible pour ceux qui privilégient l'autonomie.

La batterie de 77 kWh (net) offre une autonomie WLTP de 548 km en version propulsion et environ 515 km en version GTX. En conditions réelles, comptez environ 430 km en conduite mixte. La charge rapide DC culmine à 175 kW, permettant de récupérer de 10 à 80 % en 29 minutes environ. Le pré-conditionnement automatique de la batterie via le planificateur d'itinéraire optimise chaque session de charge.

L'intérieur de l'ID.5 reprend l'agencement épuré de la famille ID, avec le petit écran d'instrumentation de 5,3 pouces, l'écran central de 12 pouces et l'affichage tête haute en réalité augmentée. La mise à jour logicielle 3.5 apportée en 2024 a significativement amélioré la réactivité du système d'infodivertissement et ajouté la compatibilité Plug & Charge pour simplifier la recharge sur les bornes compatibles.

Le coffre de 549 litres est généreux pour un SUV-coupé, la ligne de toit plongeante n'ayant qu'un impact limité sur le volume utile grâce à une conception optimisée de la zone de chargement. L'habitabilité arrière est correcte pour deux adultes, bien que la garde au toit soit réduite par rapport à l'ID.4 pour les passagers de plus de 1,85 m.

Le comportement routier de l'ID.5 GTX est l'un de ses atouts. La transmission intégrale répartit intelligemment le couple entre les essieux, offrant une motricité exemplaire et un comportement neutre en courbe. La suspension adaptative DCC, disponible en option, ajuste la fermeté des amortisseurs en temps réel pour optimiser le compromis confort/dynamisme.

En matière d'équipement de sécurité, l'ID.5 propose le Travel Assist avec changement de voie semi-automatique, le Park Assist Plus avec mémorisation de manœuvre, le freinage autonome d'urgence et la détection d'angle mort. La structure MEB offre une rigidité élevée et une protection optimale de la batterie en cas de choc.

Fabriqué à Zwickau en Allemagne, le Volkswagen ID.5 est éligible au bonus écologique (dans ses versions sous 47 000 €). À partir de 48 000 €, il constitue une alternative premium à l'ID.4 pour les conducteurs sensibles au style et au dynamisme, tout en conservant la polyvalence et l'espace d'un SUV familial.`,
    pointsForts: [
      "Design SUV-coupé élégant avec aérodynamique optimisée (Cx 0,26)",
      "Transmission intégrale GTX dynamique et sûre (286 ch)",
      "Coffre généreux de 549 litres malgré la silhouette coupée",
      "Charge rapide DC jusqu'à 175 kW avec pré-conditionnement batterie",
      "Grande autonomie (548 km WLTP en propulsion)",
    ],
    pointsFaibles: [
      "Prix élevé (à partir de 48 000 €)",
      "Garde au toit arrière réduite par la ligne de toit plongeante",
      "Commandes capacitives au volant peu intuitives",
      "Poids conséquent de 2 174 kg (version GTX)",
    ],
    source: "https://www.volkswagen.fr/fr/modeles/id5.html",
    dateMAJ: "2026-06-22",
  },

  // ─── VOLKSWAGEN ID.7 ───────────────────────────────────────────
  {
    slug: "volkswagen-id7",
    modele: "Volkswagen ID.7",
    marque: "Volkswagen",
    marqueSlug: "volkswagen",
    prixBase: 55000,
    prixOccasion: null,
    autonomieWLTP: 621,
    autonomieReelle: 500,
    batterieKwh: 77,
    conso: 14.1,
    puissanceCh: 286,
    puissanceKw: 210,
    chargeRapideKw: 175,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 532,
    poids: 2150,
    longueur: 4961,
    segment: "berline",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["berline", "grande-autonomie", "premium", "routière"],
    annee: 2024,
    description: `La Volkswagen ID.7 est la grande berline électrique de Volkswagen, conçue pour rivaliser directement avec la Tesla Model S et les berlines premium allemandes comme la BMW i5 et la Mercedes EQE. Construite sur la plateforme MEB évoluée, elle représente le vaisseau amiral de la gamme ID et démontre la capacité de Volkswagen à produire des véhicules électriques haut de gamme.

Le design de l'ID.7 est une rupture avec le langage stylistique rond et futuriste des ID.3 et ID.4. Les lignes sont tendues, fluides et aérodynamiques, avec un Cx record de 0,23 qui en fait l'une des berlines les plus aérodynamiques du marché. La face avant est basse et plongeante, le capot long et les épaules marquées donnent une impression de puissance contenue. La longueur de 4,96 m la place dans le segment des grandes berlines.

L'aérodynamique exceptionnelle de l'ID.7 se traduit par une autonomie remarquable : jusqu'à 621 km WLTP avec la batterie de 77 kWh (net), soit environ 500 km en conditions réelles. Cette autonomie est la meilleure de toute la famille ID et rivalise avec les meilleures berlines électriques du marché, le tout sans recourir à une batterie de capacité extravagante. La consommation de 14,1 kWh aux 100 km est exceptionnellement basse pour un véhicule de cette taille.

La motorisation propose 286 ch (210 kW) dans la version Pro S, avec une transmission arrière. Le 0 à 100 km/h est abattu en 6,5 secondes, des performances suffisantes pour une grande routière. La version ID.7 GTX, à transmission intégrale, sera également proposée pour les conducteurs souhaitant plus de dynamisme et de motricité.

La recharge rapide DC atteint 175 kW, permettant de passer de 10 à 80 % en 28 minutes. Le planificateur d'itinéraire intégré au système de navigation anticipe les arrêts de recharge et préconditionne automatiquement la batterie pour maintenir des temps de charge optimaux même par temps froid.

L'intérieur de l'ID.7 marque un bond qualitatif par rapport aux premiers modèles ID. Les matériaux sont nettement plus soignés, avec du cuir synthétique de qualité, des inserts décoratifs rétroéclairés et une finition d'ensemble qui se rapproche des standards premium. L'écran central de 15 pouces est le plus grand de la gamme ID, et le système d'infodivertissement bénéficie des dernières améliorations logicielles de Volkswagen. La climatisation intelligente « Smart Air » avec capteurs de présence permet de diriger l'air de manière ciblée ou de l'éloigner des occupants.

Le coffre de 532 litres est vaste et parfaitement exploitable, avec un seuil de chargement bas. L'habitabilité arrière est exceptionnelle grâce à l'empattement de 2,97 m et au plancher plat : l'espace aux genoux et la garde au toit sont dignes d'une limousine. Trois adultes prennent place confortablement à l'arrière.

Le comportement routier de l'ID.7 est celui d'une grande routière : confortable, stable et silencieuse à haute vitesse. La suspension adaptative DCC de série ajuste la fermeté en temps réel, et l'isolation phonique est de haut niveau, faisant de l'ID.7 une compagne idéale pour les longs trajets autoroutiers.

À 55 000 €, l'ID.7 n'est pas éligible au bonus écologique en France (prix supérieur au plafond de 47 000 €). Elle se positionne toutefois comme une alternative significativement moins chère que les BMW i5 et Mercedes EQE, tout en offrant une autonomie comparable voire supérieure. C'est la grande routière électrique de la gamme Volkswagen, pensée pour les conducteurs parcourant de longues distances au quotidien.`,
    pointsForts: [
      "Autonomie exceptionnelle de 621 km WLTP grâce à un Cx de 0,23",
      "Consommation record de 14,1 kWh/100 km pour une grande berline",
      "Habitabilité arrière de niveau limousine (empattement 2,97 m)",
      "Coffre vaste de 532 litres avec seuil de chargement bas",
      "Confort de grande routière avec suspension adaptative DCC de série",
      "Prix contenu face aux concurrentes premium (BMW i5, Mercedes EQE)",
    ],
    pointsFaibles: [
      "Non éligible au bonus écologique (prix > 47 000 €)",
      "Pas de version break au lancement",
      "Image de marque généraliste face à BMW/Mercedes/Audi",
      "Poids élevé de 2 150 kg",
    ],
    source: "https://www.volkswagen.fr/fr/modeles/id7.html",
    dateMAJ: "2026-06-22",
  },

  // ─── VOLKSWAGEN ID. BUZZ ───────────────────────────────────────
  {
    slug: "volkswagen-id-buzz",
    modele: "Volkswagen ID. Buzz",
    marque: "Volkswagen",
    marqueSlug: "volkswagen",
    prixBase: 56000,
    prixOccasion: null,
    autonomieWLTP: 423,
    autonomieReelle: 340,
    batterieKwh: 77,
    conso: 21.7,
    puissanceCh: 286,
    puissanceKw: 210,
    chargeRapideKw: 185,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 1121,
    poids: 2469,
    longueur: 4962,
    segment: "van",
    origine: "EU",
    aidesEligible: false,
    note: 8,
    tags: ["van", "familiale", "7-places", "iconique"],
    annee: 2024,
    description: `Le Volkswagen ID. Buzz est la réinterprétation moderne et 100 % électrique du légendaire Combi VW, le van emblématique qui a marqué l'imaginaire collectif depuis les années 1950. Construit sur la plateforme MEB allongée du groupe Volkswagen, l'ID. Buzz combine le charme rétro d'un design iconique avec la technologie de pointe d'un véhicule électrique moderne.

Le design de l'ID. Buzz est immédiatement reconnaissable et résolument unique dans le paysage automobile. La face avant ronde avec ses grands phares circulaires et le logo VW en position centrale rappellent directement le Combi T1 original. La carrosserie bicolore est de série, avec un large choix de combinaisons de couleurs vives. Les dimensions généreuses (4,96 m en version longue) et la silhouette de van lui confèrent une présence sur la route que peu de véhicules électriques peuvent égaler.

La version longue empattement (LWB) est équipée d'une batterie de 77 kWh alimentant un moteur arrière de 286 ch (210 kW). L'autonomie WLTP de 423 km se traduit par environ 340 km en conditions réelles, un chiffre influencé par la surface frontale importante du van et un Cx naturellement plus élevé. La consommation de 21,7 kWh aux 100 km reflète la physique d'un véhicule de ce format.

La recharge rapide DC atteint 185 kW, un excellent chiffre qui permet de récupérer de 10 à 80 % en 30 minutes. Cette puissance de charge compense en partie l'autonomie plus modeste et rend les longs trajets praticables avec des pauses raisonnables. Le chargeur embarqué AC de 11 kW est de série.

L'intérieur de l'ID. Buzz est son territoire de prédilection. L'espace habitable est tout simplement monumental : le plancher plat de la plateforme MEB et l'architecture de van offrent un volume intérieur sans équivalent dans l'univers des véhicules électriques. La version LWB propose 6 ou 7 places, avec une deuxième rangée de sièges individuels coulissants et pivotants (en option) et une troisième rangée pour deux passagers.

Le coffre est pharaonique : 1 121 litres derrière la troisième rangée, extensible à plus de 2 200 litres en rabattant les deuxième et troisième rangées. C'est tout simplement le volume de coffre le plus important disponible dans un véhicule électrique de tourisme.

L'aménagement intérieur est modulable et ludique, avec des rangements astucieux, une table centrale dépliable en option et une ambiance lumineuse personnalisable avec 30 couleurs. Le système d'infodivertissement reprend l'écran de 12,9 pouces de la gamme ID avec les dernières mises à jour logicielles, compatible Apple CarPlay et Android Auto sans fil.

Le comportement routier de l'ID. Buzz est étonnamment bon pour un van. La batterie dans le plancher abaisse le centre de gravité, ce qui limite le roulis en courbe et donne une stabilité inattendue. La direction est légère et le rayon de braquage de 11,1 m est contenu pour un véhicule de cette longueur. Les suspensions sont confortables et filtrent bien les défauts de la route.

L'ID. Buzz est proposé à partir de 56 000 €, un prix qui le rend non éligible au bonus écologique. Il se positionne comme un véhicule de loisirs et familial haut de gamme, concurrent du Mercedes EQV et du Hyundai Staria. Son charme rétro, son habitabilité exceptionnelle et son statut d'icône automobile en font un véhicule profondément attachant et unique sur le marché.`,
    pointsForts: [
      "Design iconique, réinterprétation moderne du Combi VW",
      "Espace intérieur et coffre monumentaux (1 121 L en 7 places)",
      "Modularité exceptionnelle avec sièges pivotants et table centrale",
      "Charge rapide DC jusqu'à 185 kW",
      "Centre de gravité bas malgré la silhouette de van",
      "6 ou 7 places avec configuration modulable",
    ],
    pointsFaibles: [
      "Consommation élevée de 21,7 kWh/100 km (surface frontale)",
      "Autonomie réelle limitée à environ 340 km",
      "Prix élevé (56 000 €), non éligible au bonus écologique",
      "Poids très élevé de 2 469 kg",
      "Gabarit imposant peu adapté aux centres-villes étroits",
    ],
    source: "https://www.volkswagen.fr/fr/modeles/id-buzz.html",
    dateMAJ: "2026-06-22",
  },

  // ─── BMW iX ─────────────────────────────────────────────────────
  {
    slug: "bmw-ix",
    modele: "BMW iX",
    marque: "BMW",
    marqueSlug: "bmw",
    prixBase: 77000,
    prixOccasion: 50000,
    autonomieWLTP: 630,
    autonomieReelle: 500,
    batterieKwh: 105.2,
    conso: 19.4,
    puissanceCh: 326,
    puissanceKw: 240,
    chargeRapideKw: 195,
    tempsChargeRapide: "35 min (10-80 %)",
    tempsChargeAC: "11h (0-100 % sur 11 kW)",
    coffre: 500,
    poids: 2510,
    longueur: 4953,
    segment: "SUV-premium",
    origine: "EU",
    aidesEligible: false,
    note: 8,
    tags: ["SUV", "premium", "grande-autonomie", "luxe"],
    annee: 2024,
    description: `Le BMW iX est le vaisseau amiral électrique de BMW, un grand SUV de luxe qui concentre le meilleur de la technologie et du savoir-faire bavarois. Construit sur une architecture spécifique intégrant une structure en aluminium et fibre de carbone issue du programme BMW i (héritage des i3 et i8), l'iX représente la vision de BMW pour la mobilité électrique haut de gamme.

Le design de l'iX a fait couler beaucoup d'encre lors de sa présentation, notamment en raison de sa calandre imposante et de ses lignes minimalistes. La face avant est dominée par les naseaux BMW surdimensionnés qui intègrent les capteurs de conduite autonome et la technologie de réchauffage de la batterie. Le profil est sculptural, avec des surfaces épurées, des poignées de porte affleurantes et des jantes aérodynamiques de 21 pouces. Malgré sa longueur de 4,95 m, l'iX conserve une allure dynamique.

La version xDrive50 embarque une batterie de 105,2 kWh alimentant deux moteurs électriques (transmission intégrale) développant au total 326 ch (240 kW). L'autonomie WLTP atteint 630 km, soit environ 500 km en conditions réelles, un chiffre remarquable pour un SUV de ce gabarit et de ce poids. Le 0 à 100 km/h est abattu en 6,1 secondes, et la version M60 pousse la puissance à 619 ch pour des performances de sportive.

La recharge rapide DC atteint 195 kW, permettant de récupérer de 10 à 80 % en environ 35 minutes. La courbe de charge est bien gérée, maintenant une puissance élevée sur une large plage de la batterie. Le chargeur embarqué AC de 11 kW permet la recharge nocturne à domicile.

L'intérieur de l'iX est un concentré de luxe et d'innovation. La planche de bord est dominée par l'écran incurvé BMW Curved Display, combinant un écran d'instrumentation de 12,3 pouces et un écran central de 14,9 pouces sous un même verre. Le système iDrive 8 est l'un des plus complets du marché, avec navigation en temps réel, assistant vocal intelligent et intégration 5G. Les matériaux sont d'un raffinement exceptionnel : cuir naturel, cristal Swarovski pour certaines commandes et bois certifié FSC.

Le coffre de 500 litres est dans la norme pour un grand SUV, avec un seuil de chargement bas et un hayon motorisé de série. L'habitabilité arrière est royale, avec un espace aux jambes et une garde au toit généreux. Les sièges arrière sont chauffants de série, et un écran arrière pour le divertissement est disponible en option.

Le confort acoustique de l'iX est exceptionnel. BMW a développé un système d'isolation phonique multicouche et des vitrages feuilletés qui font de l'iX l'un des véhicules les plus silencieux du marché. Le système audio Bowers & Wilkins Diamond Surround en option offre une expérience sonore de référence.

La conduite de l'iX est remarquablement agile pour un véhicule de 2,5 tonnes. La direction est précise et communicative (ADN BMW), la suspension pneumatique adaptative absorbe parfaitement les imperfections, et les quatre roues directrices réduisent le rayon de braquage en manœuvre.

À 77 000 € pour la version xDrive50, le BMW iX n'est pas éligible au bonus écologique. Il se positionne face au Mercedes EQS SUV et au Tesla Model X, offrant un compromis unique entre performances, autonomie, technologie et raffinement premium à la bavaroise.`,
    pointsForts: [
      "Autonomie de 630 km WLTP, parmi les meilleures des SUV électriques",
      "Finition intérieure exceptionnelle avec matériaux nobles",
      "Confort acoustique de référence et suspension pneumatique",
      "Structure légère en aluminium et fibre de carbone",
      "BMW Curved Display et système iDrive 8 très complet",
    ],
    pointsFaibles: [
      "Prix très élevé (à partir de 77 000 €)",
      "Design extérieur controversé (calandre surdimensionnée)",
      "Poids élevé de 2 510 kg",
      "Options onéreuses qui font vite grimper l'addition",
      "Non éligible au bonus écologique",
    ],
    source: "https://www.bmw.fr/fr/all-models/bmw-i/ix/overview.html",
    dateMAJ: "2026-06-22",
  },

  // ─── BMW i5 ─────────────────────────────────────────────────────
  {
    slug: "bmw-i5",
    modele: "BMW i5",
    marque: "BMW",
    marqueSlug: "bmw",
    prixBase: 70000,
    prixOccasion: null,
    autonomieWLTP: 582,
    autonomieReelle: 460,
    batterieKwh: 81.2,
    conso: 15.9,
    puissanceCh: 340,
    puissanceKw: 250,
    chargeRapideKw: 205,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "8h15 (0-100 % sur 11 kW)",
    coffre: 490,
    poids: 2215,
    longueur: 5060,
    segment: "berline-premium",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["berline", "premium", "grande-autonomie", "routière"],
    annee: 2024,
    description: `La BMW i5 est la version 100 % électrique de la légendaire Série 5 de BMW, la berline d'affaires de référence qui a défini le segment des berlines premium depuis des décennies. Construite sur la nouvelle plateforme CLAR flexible (compatible thermique, hybride et électrique), la i5 intègre la motorisation électrique dans un véhicule qui conserve toutes les qualités dynamiques et le raffinement de la Série 5.

Le design de la i5 est quasiment identique à celui de la Série 5 thermique, seuls quelques détails la distinguent : la calandre fermée avec double haricot illuminé, les inserts bleus BMW i et les jantes aérodynamiques spécifiques. Cette approche discrète rassure les conducteurs traditionnels de BMW qui ne souhaitent pas afficher ostensiblement le caractère électrique de leur véhicule. La longueur de 5,06 m la place dans le haut du segment.

La version i5 eDrive40 embarque un moteur électrique arrière de 340 ch (250 kW) alimenté par une batterie de 81,2 kWh. L'autonomie WLTP de 582 km se traduit par environ 460 km en conditions réelles, un chiffre excellent rendu possible par une aérodynamique soignée et une gestion thermique efficace de la batterie. La version i5 M60 xDrive propose quant à elle 601 ch avec transmission intégrale pour des performances de sportive.

La charge rapide DC atteint 205 kW, l'une des meilleures de sa catégorie. Le temps de charge de 10 à 80 % est de 30 minutes environ, et la courbe de charge est réputée stable, maintenant une puissance élevée sur une large plage. Le planificateur d'itinéraire préconditionne automatiquement la batterie avant l'arrivée à une borne rapide.

L'intérieur de la i5 est un manifeste de luxe technologique. Le BMW Curved Display combine un écran d'instrumentation de 12,3 pouces et un écran central de 14,9 pouces. Le système iDrive 8.5 avec BMW Operating System 8.5 intègre l'intelligence artificielle pour personnaliser l'expérience utilisateur. L'assistant vocal BMW Intelligent Personal Assistant comprend le langage naturel et peut contrôler la plupart des fonctions du véhicule.

L'habitabilité de la i5 est exceptionnelle. L'empattement de 2,995 m offre un espace royal aux places arrière, avec des sièges inclinables, chauffants et ventilés en option. Le coffre de 490 litres est légèrement réduit par rapport à la Série 5 thermique en raison de l'emplacement du moteur arrière, mais reste amplement suffisant pour un usage quotidien et de voyage. Le plancher plat améliore le confort des passagers arrière centraux.

Le comportement routier de la i5 est le point fort incontestable du véhicule. BMW a transposé dans la i5 tout son savoir-faire en matière de dynamique de conduite : la direction est précise et progressive, le châssis est parfaitement équilibré, et la suspension adaptative à deux essieux (avec essieu arrière directeur en option) offre un compromis exceptionnel entre confort et agilité. La i5 est tout simplement l'une des berlines électriques les plus plaisantes à conduire.

L'équipement de série est complet : la conduite semi-autonome Highway Assistant (niveau 2+), le stationnement automatique à distance, le système audio Harman Kardon et la sellerie cuir. La version Touring (break) est également disponible, une rareté dans le monde des berlines électriques.

À 70 000 €, la BMW i5 n'est pas éligible au bonus écologique. Elle rivalise directement avec la Mercedes EQE et la Tesla Model S, offrant un dynamisme de conduite supérieur et une finition premium typiquement bavaroise qui la distinguent dans ce segment très concurrentiel.`,
    pointsForts: [
      "Comportement routier de référence, plaisir de conduite BMW intact",
      "Charge rapide DC jusqu'à 205 kW avec courbe stable",
      "Grande autonomie de 582 km WLTP",
      "Finition intérieure luxueuse avec iDrive 8.5",
      "Version Touring (break) disponible, rare en électrique",
      "Conduite semi-autonome Highway Assistant de série",
    ],
    pointsFaibles: [
      "Prix élevé (à partir de 70 000 €), non éligible au bonus",
      "Plateforme partagée avec les versions thermiques (pas native EV)",
      "Poids conséquent de 2 215 kg",
      "Options très onéreuses (facture peut dépasser 100 000 €)",
    ],
    source: "https://www.bmw.fr/fr/all-models/bmw-i/i5/overview.html",
    dateMAJ: "2026-06-22",
  },

  // ─── MERCEDES EQE ───────────────────────────────────────────────
  {
    slug: "mercedes-eqe",
    modele: "Mercedes EQE",
    marque: "Mercedes-Benz",
    marqueSlug: "mercedes",
    prixBase: 67000,
    prixOccasion: 45000,
    autonomieWLTP: 625,
    autonomieReelle: 500,
    batterieKwh: 90.6,
    conso: 16.4,
    puissanceCh: 292,
    puissanceKw: 215,
    chargeRapideKw: 170,
    tempsChargeRapide: "32 min (10-80 %)",
    tempsChargeAC: "11h (0-100 % sur 11 kW)",
    coffre: 430,
    poids: 2355,
    longueur: 4946,
    segment: "berline-premium",
    origine: "EU",
    aidesEligible: false,
    note: 8,
    tags: ["berline", "premium", "grande-autonomie", "luxe"],
    annee: 2024,
    description: `La Mercedes EQE est la berline électrique de luxe du segment E de Mercedes-Benz, positionnée comme l'équivalent électrique de la Classe E. Construite sur la plateforme dédiée EVA2 (Electric Vehicle Architecture), elle est conçue nativement pour la propulsion électrique, ce qui lui confère des proportions et un agencement intérieur optimisés.

Le design de l'EQE est fidèle au langage stylistique de la famille EQ de Mercedes. La silhouette en « arc à une seule arche » (one-bow design) crée une ligne de toit fluide et continue qui descend harmonieusement vers l'arrière. La face avant lisse et fermée, sans calandre traditionnelle, intègre la dalle lumineuse LED caractéristique et l'étoile Mercedes illuminée en option. Le Cx de 0,22 en fait l'une des berlines les plus aérodynamiques jamais produites.

La version EQE 350+ embarque un moteur arrière de 292 ch (215 kW) alimenté par une batterie de 90,6 kWh. L'autonomie WLTP atteint 625 km, soit environ 500 km en conditions réelles, un chiffre qui place l'EQE parmi les berlines électriques les plus endurantes. La consommation de 16,4 kWh aux 100 km est contenue compte tenu du gabarit et du poids du véhicule. La version AMG EQE 53 4MATIC+ pousse la puissance à 687 ch pour des performances de supercar.

La recharge rapide DC culmine à 170 kW, permettant de récupérer de 10 à 80 % en 32 minutes environ. Bien que cette puissance soit correcte, elle reste en retrait face à certaines concurrentes comme la BMW i5 (205 kW) ou l'EQS (200 kW). La fonction Plug & Charge simplifie la recharge sur les bornes compatibles : il suffit de brancher le câble, l'authentification et le paiement sont automatiques.

L'intérieur de l'EQE est un écrin de luxe et de technologie. L'option phare est le Hyperscreen MBUX, un immense bandeau de verre de 141 cm qui s'étend sur toute la largeur de la planche de bord, intégrant trois écrans OLED : l'instrumentation conducteur (12,3 pouces), l'écran central (17,7 pouces) et un écran passager dédié (12,3 pouces). Ce dernier intègre une technologie de filtrage qui empêche le conducteur de voir le contenu vidéo pendant la conduite.

Le système MBUX (Mercedes-Benz User Experience) est l'un des plus avancés du marché automobile. L'assistant vocal « Hey Mercedes » comprend le langage naturel avec une précision remarquable et peut contrôler la quasi-totalité des fonctions du véhicule. La navigation avec réalité augmentée superpose les indications directionnelles sur l'image de la route affichée à l'écran.

L'habitabilité de l'EQE est généreuse à l'avant comme à l'arrière, bien que le plancher légèrement surélevé par la batterie et l'arche de toit descendante limitent légèrement la garde au toit aux places arrière pour les passagers de grande taille. Le coffre de 430 litres est correct mais en retrait face à la BMW i5 (490 L), la forme en hayon étant remplacée par une ouverture de malle classique.

Le confort de roulement de l'EQE est de très haut niveau. La suspension pneumatique Airmatic, disponible en option, offre un filtrage exceptionnel des imperfections routières. Le silence de fonctionnement est remarquable, avec une isolation phonique multicouche et des vitrages feuilletés qui créent une bulle de sérénité. Le système audio Burmester 3D surround est l'un des meilleurs de l'industrie automobile.

À 67 000 €, la Mercedes EQE n'est pas éligible au bonus écologique. Elle rivalise avec la BMW i5 et la Tesla Model S, en se distinguant par son confort de roulement souverain, sa technologie MBUX de pointe et l'aura de prestige de l'étoile Mercedes.`,
    pointsForts: [
      "Autonomie de 625 km WLTP grâce à un Cx exceptionnel de 0,22",
      "Hyperscreen MBUX avec trois écrans OLED (option spectaculaire)",
      "Plateforme native électrique EVA2, architecture optimisée",
      "Confort de roulement et silence de fonctionnement de référence",
      "Système MBUX avec assistant vocal « Hey Mercedes » très abouti",
    ],
    pointsFaibles: [
      "Charge rapide limitée à 170 kW (en retrait face à BMW i5)",
      "Coffre de 430 litres seulement (ouverture de malle classique)",
      "Prix élevé (67 000 €), non éligible au bonus écologique",
      "Garde au toit arrière réduite par la ligne de toit « one-bow »",
      "Options très chères (Hyperscreen à plus de 5 000 €)",
    ],
    source: "https://www.mercedes-benz.fr/passengercars/models/saloon/eqe.html",
    dateMAJ: "2026-06-22",
  },

  // ─── MERCEDES EQS ───────────────────────────────────────────────
  {
    slug: "mercedes-eqs",
    modele: "Mercedes EQS",
    marque: "Mercedes-Benz",
    marqueSlug: "mercedes",
    prixBase: 110000,
    prixOccasion: 65000,
    autonomieWLTP: 770,
    autonomieReelle: 620,
    batterieKwh: 108.4,
    conso: 15.7,
    puissanceCh: 333,
    puissanceKw: 245,
    chargeRapideKw: 200,
    tempsChargeRapide: "31 min (10-80 %)",
    tempsChargeAC: "11h30 (0-100 % sur 11 kW)",
    coffre: 610,
    poids: 2480,
    longueur: 5216,
    segment: "berline-luxe",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["berline", "luxe", "grande-autonomie", "premium", "technologie"],
    annee: 2024,
    description: `La Mercedes EQS est le porte-étendard de la mobilité électrique chez Mercedes-Benz, l'équivalent électrique de la Classe S. Avec ses 770 km d'autonomie WLTP, son Cx record de 0,20 et son intérieur digne d'un salon de première classe, l'EQS repousse les limites de ce qu'une berline électrique de luxe peut offrir. Elle est la voiture la plus aérodynamique au monde en production de série.

Le design de l'EQS est une ode à la pureté aérodynamique. La silhouette « one-bow » (arche unique) élimine toute aspérité, créant une forme qui fend l'air avec une efficacité inégalée. Le Cx de 0,20 est le plus bas jamais atteint par un véhicule de série, résultat de milliers d'heures en soufflerie et de choix radicaux : poignées de porte affleurantes motorisées, soubassement entièrement caréné, jantes aérodynamiques et obturateurs de refroidissement actifs.

La batterie de 108,4 kWh (la plus grande disponible chez Mercedes) alimente un moteur arrière de 333 ch (245 kW) dans la version 450+. L'autonomie WLTP de 770 km se traduit par environ 620 km en conditions réelles, un chiffre qui élimine pratiquement l'anxiété d'autonomie et place l'EQS au sommet de toutes les voitures électriques en matière d'autonomie. La version AMG EQS 53 4MATIC+ développe 658 ch pour des performances de supercar.

La charge rapide DC atteint 200 kW, permettant de récupérer de 10 à 80 % en environ 31 minutes. La gestion thermique sophistiquée de la batterie maintient des temps de charge optimaux quelles que soient les conditions météorologiques. La fonction de pré-conditionnement automatique via le planificateur d'itinéraire est intégrée de série.

L'intérieur de l'EQS est un concentré de raffinement et de technologie. Le Hyperscreen MBUX de série sur les versions supérieures déploie sa dalle de 141 cm de large, mais c'est la qualité des matériaux et l'attention aux détails qui distinguent véritablement l'EQS : cuir Nappa, bois véritable rétroéclairé, aluminium brossé et inserts acoustiques qui participent à l'insonorisation de l'habitacle.

Le système MBUX de l'EQS est le plus avancé de la gamme Mercedes. Il intègre l'intelligence artificielle prédictive qui anticipe les besoins du conducteur en fonction de ses habitudes, propose proactivement des destinations et ajuste automatiquement le confort climatique. Les mises à jour OTA (Over-The-Air) ajoutent régulièrement de nouvelles fonctionnalités.

L'habitabilité de l'EQS est de niveau Classe S. L'empattement de 3,21 m offre un espace aux places arrière digne d'une limousine. Les sièges arrière chauffants, ventilés et massants (en option) sont inclinables électriquement. L'isolation phonique est la meilleure de l'industrie automobile, avec un silence de fonctionnement qui frôle celui d'une chambre anéchoïque.

Le coffre de 610 litres est le plus grand de sa catégorie, avec un hayon motorisé et un seuil de chargement bas. La suspension pneumatique à quatre coins est de série, offrant un confort de roulement inégalé et la capacité d'ajuster la hauteur de caisse selon les besoins.

Le système de conduite autonome DRIVE PILOT de niveau 3 est disponible en option sur l'EQS. Il permet au conducteur de déléguer entièrement la conduite au véhicule dans certaines conditions (autoroute, vitesse inférieure à 60 km/h, embouteillages), faisant de l'EQS le premier véhicule de série homologué pour la conduite autonome de niveau 3 en Europe.

À 110 000 €, l'EQS est un objet de luxe qui ne connaît pas d'équivalent direct. Elle se mesure à la Porsche Taycan et à la Tesla Model S dans un registre de confort et de prestige inégalé. C'est tout simplement la berline électrique la plus aboutie du marché.`,
    pointsForts: [
      "Autonomie record de 770 km WLTP, la meilleure du marché",
      "Cx de 0,20, voiture de série la plus aérodynamique au monde",
      "Intérieur de classe Classe S avec Hyperscreen MBUX",
      "DRIVE PILOT niveau 3 disponible (conduite autonome homologuée)",
      "Confort et silence de roulement au sommet de l'industrie automobile",
      "Coffre de 610 litres avec hayon motorisé",
    ],
    pointsFaibles: [
      "Prix très élevé (à partir de 110 000 €)",
      "Poids conséquent de 2 480 kg",
      "Recharge AC lente (11 kW max, 11h30 pour une batterie complète)",
      "Visibilité arrière limitée par la ligne de toit plongeante",
    ],
    source: "https://www.mercedes-benz.fr/passengercars/models/saloon/eqs.html",
    dateMAJ: "2026-06-22",
  },

  // ─── AUDI Q6 e-tron ─────────────────────────────────────────────
  {
    slug: "audi-q6-e-tron",
    modele: "Audi Q6 e-tron",
    marque: "Audi",
    marqueSlug: "audi",
    prixBase: 65000,
    prixOccasion: null,
    autonomieWLTP: 625,
    autonomieReelle: 500,
    batterieKwh: 100,
    conso: 17.0,
    puissanceCh: 387,
    puissanceKw: 285,
    chargeRapideKw: 270,
    tempsChargeRapide: "21 min (10-80 %)",
    tempsChargeAC: "10h15 (0-100 % sur 11 kW)",
    coffre: 526,
    poids: 2325,
    longueur: 4771,
    segment: "SUV-compact-premium",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["SUV", "premium", "grande-autonomie", "charge-ultra-rapide"],
    annee: 2024,
    description: `L'Audi Q6 e-tron est le premier modèle d'Audi construit sur la nouvelle plateforme PPE (Premium Platform Electric), développée conjointement par Audi et Porsche. Cette plateforme marque un saut technologique majeur pour le groupe Volkswagen, introduisant l'architecture 800 V qui permet une charge ultra-rapide et des performances de premier plan. Le Q6 e-tron est le fer de lance de la nouvelle génération électrique d'Audi.

Le design du Q6 e-tron inaugure le nouveau langage stylistique d'Audi pour la gamme électrique. La calandre Singleframe inversée (plus large en bas qu'en haut) rompt avec la tradition Audi et donne au Q6 une identité forte et immédiatement reconnaissable. Les feux arrière OLED numériques sont une première dans l'industrie : ils peuvent afficher différentes signatures lumineuses et même communiquer avec les véhicules suiveurs. Le profil est musclé et les proportions sont équilibrées, avec un empattement long de 2,899 m.

La motorisation de la version quattro S line develop 387 ch (285 kW) grâce à deux moteurs électriques (transmission intégrale). La batterie de 100 kWh offre une autonomie WLTP de 625 km, soit environ 500 km en conditions réelles. Le 0 à 100 km/h est expédié en 5,9 secondes, et la vitesse maximale est limitée à 210 km/h.

La recharge constitue l'atout majeur du Q6 e-tron. Grâce à l'architecture 800 V de la plateforme PPE, la charge rapide DC atteint 270 kW, la plus élevée de tous les SUV Audi. Le temps de charge de 10 à 80 % est de seulement 21 minutes, un record dans la catégorie. En 10 minutes de charge, le Q6 e-tron récupère jusqu'à 255 km d'autonomie. Cette capacité de recharge transforme l'expérience des longs trajets, réduisant les pauses au minimum.

L'intérieur du Q6 e-tron introduit le nouvel écosystème d'écrans d'Audi. Le conducteur bénéficie du Virtual Cockpit de 11,9 pouces et d'un écran central MMI de 14,5 pouces au toucher réactif. L'innovation majeure est l'écran passager de 10,9 pouces, visible uniquement depuis le siège passager grâce à une technologie de filtrage directionnel. Le système d'infodivertissement est basé sur Android Automotive OS, offrant l'accès au Google Play Store, à Google Maps natif et à l'assistant Google.

La qualité de finition est au niveau attendu pour un Audi premium : les matériaux sont soignés, les assemblages sont précis et l'insonorisation est excellente. L'option de sièges Sport avec fonction massage et ventilation ajoute un niveau de confort supplémentaire pour les longs trajets.

Le coffre de 526 litres est complété par un frunk (coffre avant) de 64 litres, un espace supplémentaire pratique pour les câbles de recharge ou les petits objets. L'habitabilité arrière est généreuse, avec un plancher plat et un espace aux genoux confortable pour deux adultes.

Le comportement routier du Q6 e-tron bénéficie de la suspension pneumatique adaptative de série, qui offre un compromis remarquable entre confort et dynamisme. Le système quattro électrique répartit instantanément le couple entre les essieux, offrant une motricité exemplaire en toutes circonstances.

À 65 000 €, l'Audi Q6 e-tron n'est pas éligible au bonus écologique. Il se positionne face au BMW iX1, au Mercedes EQC et au Porsche Macan Electric, avec l'avantage décisif de la charge ultra-rapide 800 V et d'une autonomie de premier plan. C'est le SUV électrique le plus technologiquement avancé d'Audi.`,
    pointsForts: [
      "Charge ultra-rapide 270 kW grâce à l'architecture 800 V (10-80 % en 21 min)",
      "Plateforme PPE native électrique développée avec Porsche",
      "Feux OLED numériques avec signatures lumineuses personnalisables",
      "Frunk de 64 litres en complément du coffre de 526 L",
      "Système multimédia Android Automotive OS avec Google intégré",
      "Transmission intégrale quattro électrique instantanée",
    ],
    pointsFaibles: [
      "Prix élevé (65 000 €), non éligible au bonus écologique",
      "Poids conséquent de 2 325 kg",
      "Options coûteuses qui font grimper la facture",
      "Consommation réelle sur autoroute pouvant dépasser 22 kWh/100 km",
    ],
    source: "https://www.audi.fr/fr/web/fr/modeles/q6-e-tron.html",
    dateMAJ: "2026-06-22",
  },

  // ─── AUDI Q8 e-tron ─────────────────────────────────────────────
  {
    slug: "audi-q8-e-tron",
    modele: "Audi Q8 e-tron",
    marque: "Audi",
    marqueSlug: "audi",
    prixBase: 74000,
    prixOccasion: 42000,
    autonomieWLTP: 582,
    autonomieReelle: 460,
    batterieKwh: 106,
    conso: 20.1,
    puissanceCh: 408,
    puissanceKw: 300,
    chargeRapideKw: 170,
    tempsChargeRapide: "34 min (10-80 %)",
    tempsChargeAC: "11h (0-100 % sur 11 kW)",
    coffre: 569,
    poids: 2595,
    longueur: 4915,
    segment: "SUV-premium",
    origine: "EU",
    aidesEligible: false,
    note: 7,
    tags: ["SUV", "premium", "grande-autonomie", "luxe"],
    annee: 2024,
    description: `L'Audi Q8 e-tron est l'évolution du premier SUV électrique d'Audi, l'e-tron lancé en 2018, qui a été rebaptisé et significativement mis à jour en 2023. Ce grand SUV de luxe occupe le sommet de la gamme électrique Audi et se mesure au BMW iX, au Mercedes EQE SUV et au Tesla Model X. Il incarne l'expérience accumulée par Audi depuis le début de son offensive électrique.

Le design du Q8 e-tron a été rafraîchi par rapport à l'e-tron original. La face avant intègre une calandre Singleframe plus affirmée, les feux sont redessinés et les pare-chocs sont retravaillés. L'option des rétroviseurs virtuels (caméras remplaçant les miroirs traditionnels) reste disponible et contribue à réduire le coefficient aérodynamique. Le profil est celui d'un grand SUV élégant et imposant de 4,91 m de long.

La version 55 quattro embarque trois moteurs électriques (un à l'avant, deux à l'arrière) développant au total 408 ch (300 kW) avec transmission intégrale permanente. La batterie de 106 kWh (la plus grande de la gamme Audi) offre une autonomie WLTP de 582 km, soit environ 460 km en conditions réelles. Le 0 à 100 km/h est abattu en 5,6 secondes. La version Sportback, avec sa ligne de toit coupée, gagne quelques kilomètres d'autonomie grâce à un Cx amélioré.

La charge rapide DC culmine à 170 kW, un progrès par rapport à l'e-tron original (150 kW) mais en retrait face au Q6 e-tron et sa plateforme PPE 800 V. Le temps de charge de 10 à 80 % est d'environ 34 minutes. Le chargeur embarqué AC de 11 kW (22 kW en option) permet une recharge nocturne complète.

L'intérieur du Q8 e-tron est l'un des plus luxueux de la gamme Audi. La planche de bord à double écran (Virtual Cockpit de 12,3 pouces et écran central MMI de 10,1 pouces) est complétée par un écran de commande de climatisation de 8,6 pouces. Les matériaux sont d'une qualité irréprochable : cuir Valcona, aluminium brossé, bois d'eucalyptus et finitions piano black. L'insonorisation est de très haut niveau, faisant du Q8 e-tron l'un des SUV électriques les plus silencieux.

Le coffre de 569 litres est vaste et bien exploitable, avec un hayon motorisé et un plancher réglable en hauteur. Un frunk de 62 litres sous le capot avant offre un espace supplémentaire pour les câbles de recharge. L'habitabilité arrière est généreuse, avec des sièges spacieux et une garde au toit confortable même pour les grands gabarits.

Le système de suspension pneumatique adaptative est de série. Il ajuste automatiquement la hauteur de caisse en fonction de la vitesse et du terrain, offrant un confort de roulement exceptionnel sur autoroute et une garde au sol augmentée sur routes dégradées. Le système quattro électrique répartit le couple instantanément entre les trois moteurs pour une motricité optimale.

L'équipement de sécurité comprend la conduite semi-autonome adaptive, le freinage autonome d'urgence avec détection des piétons et cyclistes, la surveillance des angles morts et l'avertisseur de trafic transversal arrière. Le système de stationnement automatique avec télécommande depuis le smartphone est disponible en option.

À 74 000 €, l'Audi Q8 e-tron n'est pas éligible au bonus écologique. Bien que sa plateforme MLB evo ne soit pas native électrique, elle a été optimisée au fil des années pour offrir des prestations de haut niveau. Le Q8 e-tron reste un choix pertinent pour les amateurs de grands SUV de luxe, en attendant l'arrivée du futur Q8 e-tron sur plateforme PPE.`,
    pointsForts: [
      "Finition intérieure luxueuse, parmi les meilleures du segment",
      "Grande batterie de 106 kWh pour une autonomie confortable",
      "Suspension pneumatique adaptative de série",
      "Trois moteurs avec transmission intégrale quattro",
      "Frunk de 62 litres et coffre de 569 litres",
    ],
    pointsFaibles: [
      "Plateforme MLB evo non native électrique (partagée avec thermique)",
      "Charge rapide limitée à 170 kW (pas de 800 V)",
      "Consommation élevée de 20,1 kWh/100 km",
      "Poids très élevé de 2 595 kg",
      "Prix élevé (74 000 €), non éligible au bonus",
    ],
    source: "https://www.audi.fr/fr/web/fr/modeles/q8-e-tron.html",
    dateMAJ: "2026-06-22",
  },

  // ─── AUDI e-tron GT ─────────────────────────────────────────────
  {
    slug: "audi-e-tron-gt",
    modele: "Audi e-tron GT",
    marque: "Audi",
    marqueSlug: "audi",
    prixBase: 106000,
    prixOccasion: 65000,
    autonomieWLTP: 495,
    autonomieReelle: 390,
    batterieKwh: 97,
    conso: 19.6,
    puissanceCh: 646,
    puissanceKw: 475,
    chargeRapideKw: 270,
    tempsChargeRapide: "18 min (10-80 %)",
    tempsChargeAC: "10h (0-100 % sur 11 kW)",
    coffre: 405,
    poids: 2340,
    longueur: 4989,
    segment: "berline-sport",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["berline", "sport", "premium", "luxe", "charge-ultra-rapide", "performance"],
    annee: 2024,
    description: `L'Audi e-tron GT est la berline sportive électrique d'Audi, cousine technique de la Porsche Taycan avec laquelle elle partage la plateforme J1 à architecture 800 V. Mise à jour en 2024 avec des améliorations significatives en matière de puissance, d'autonomie et de technologie, l'e-tron GT incarne la quintessence de la performance électrique chez Audi, combinant l'ADN sportif de la marque avec le raffinement attendu d'une grande GT.

Le design de l'e-tron GT est unanimement salué comme l'un des plus réussis de l'industrie automobile contemporaine. La silhouette basse et effilée, le capot plongeant, les hanches larges et la ligne de toit en arc tendu créent une proportion parfaitement équilibrée. Le traitement des surfaces est sculptural, jouant avec la lumière pour souligner les muscles de la carrosserie. Avec seulement 1,41 m de hauteur, l'e-tron GT possède la stature d'une véritable sportive.

La version RS e-tron GT Performance (mise à jour 2024) développe 925 ch en mode overboost, faisant d'elle la voiture de série la plus puissante jamais produite par Audi. La version « standard » RS e-tron GT propose 646 ch (475 kW) avec deux moteurs à aimants permanents et transmission intégrale quattro. Le 0 à 100 km/h est abattu en 3,3 secondes (2,5 secondes pour la Performance), et la vitesse maximale est de 250 km/h.

La batterie de 97 kWh (mise à jour 2024, contre 84 kWh auparavant) offre une autonomie WLTP de 495 km, soit environ 390 km en conditions réelles. L'architecture 800 V permet une charge ultra-rapide DC jusqu'à 270 kW, récupérant de 10 à 80 % en seulement 18 minutes. En 5 minutes de charge, l'e-tron GT peut récupérer plus de 100 km d'autonomie, un chiffre qui rend les longs trajets sportifs parfaitement viables.

L'intérieur de l'e-tron GT est un mélange de sportivité et de raffinement. Le poste de conduite est enveloppant, avec des sièges baquets Sport Plus qui maintiennent parfaitement le corps en conduite dynamique. Le Virtual Cockpit de 12,3 pouces et l'écran central MMI de 10,1 pouces reprennent l'interface Audi avec des graphismes spécifiques à la gamme GT. La qualité des matériaux est exemplaire, avec des options de sellerie en cuir Nappa, Alcantara ou microfibre Dinamica recyclée.

Le châssis de l'e-tron GT est un chef-d'œuvre d'ingénierie. La suspension pneumatique à trois chambres offre une plage de réglage étendue, du confort moelleux au mode Sport ferme pour la conduite sur circuit. L'essieu arrière directeur améliore l'agilité à basse vitesse et la stabilité à haute vitesse. Le différentiel arrière Sport à glissement limité contrôlé répartit le couple entre les roues arrière pour une motricité et un comportement en courbe exceptionnels.

Le coffre de 405 litres (plus un frunk de 85 litres) est correct pour une GT de cette envergure, permettant d'emporter les bagages d'un week-end. La banquette arrière accueille deux adultes confortablement, bien que l'espace à la tête soit limité par la ligne de toit plongeante.

Le système audio Bang & Olufsen Premium de 710 W et 16 haut-parleurs offre une expérience sonore immersive. Un générateur de son extérieur e-sound donne à l'e-tron GT une signature sonore synthétique distinctive et sportive, ajoutant une dimension émotionnelle à l'expérience de conduite.

À 106 000 €, l'Audi e-tron GT est une berline sportive de luxe qui rivalise avec la Porsche Taycan et la Tesla Model S Plaid. Elle se distingue par un design exceptionnel, une qualité de finition irréprochable et une capacité de charge ultra-rapide 800 V qui en fait l'une des GT électriques les plus abouties du marché.`,
    pointsForts: [
      "Charge ultra-rapide 270 kW en architecture 800 V (10-80 % en 18 min)",
      "Design unanimement salué, l'une des plus belles berlines sportives actuelles",
      "Performances de supercar (646 ch, 0-100 en 3,3 s en version RS)",
      "Châssis exceptionnel avec suspension pneumatique et essieu arrière directeur",
      "Qualité de finition Audi de très haut niveau",
    ],
    pointsFaibles: [
      "Prix très élevé (à partir de 106 000 €)",
      "Autonomie réelle limitée à environ 390 km (conduite sportive)",
      "Consommation élevée de 19,6 kWh/100 km",
      "Places arrière exiguës pour les grands gabarits",
    ],
    source: "https://www.audi.fr/fr/web/fr/modeles/e-tron-gt.html",
    dateMAJ: "2026-06-22",
  },

  // ─── KIA EV6 ────────────────────────────────────────────────────
  {
    slug: "kia-ev6",
    modele: "Kia EV6",
    marque: "Kia",
    marqueSlug: "kia",
    prixBase: 47990,
    prixOccasion: 32000,
    autonomieWLTP: 528,
    autonomieReelle: 420,
    batterieKwh: 77.4,
    conso: 16.5,
    puissanceCh: 325,
    puissanceKw: 239,
    chargeRapideKw: 240,
    tempsChargeRapide: "18 min (10-80 %)",
    tempsChargeAC: "7h10 (0-100 % sur 11 kW)",
    coffre: 490,
    poids: 2090,
    longueur: 4695,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 9,
    tags: ["SUV", "charge-ultra-rapide", "grande-autonomie", "familiale"],
    annee: 2024,
    description: `Le Kia EV6 est le crossover électrique phare de Kia, construit sur la plateforme dédiée E-GMP (Electric Global Modular Platform) du groupe Hyundai-Kia. Élu Voiture européenne de l'année 2022, il a contribué à propulser Kia parmi les acteurs majeurs de la mobilité électrique en Europe grâce à son architecture 800 V avant-gardiste, son design spectaculaire et son rapport prestations/prix remarquable.

Le design du EV6 est l'un des plus audacieux du segment. Dessiné par le centre de design de Francfort sous la direction de Karim Habib, il adopte un profil de crossover-coupé avec une ligne de toit très plongeante vers l'arrière, un bandeau lumineux continu à l'avant et une signature arrière en boomerang très distinctive. Les proportions sont tendues et dynamiques, avec un capot court et un habitacle reculé. Le EV6 ne ressemble à aucune autre voiture sur la route, et c'est l'un de ses atouts majeurs.

La version AWD (transmission intégrale) embarque deux moteurs développant au total 325 ch (239 kW), alimentés par une batterie de 77,4 kWh. L'autonomie WLTP atteint 528 km (jusqu'à 573 km en version propulsion), soit environ 420 km en conditions réelles. La version GT, avec ses 585 ch, expédie le 0 à 100 km/h en 3,5 secondes, rivalisant avec les sportives thermiques les plus performantes.

La recharge est le point fort technologique du EV6. L'architecture 800 V de la plateforme E-GMP permet une charge ultra-rapide DC jusqu'à 240 kW, récupérant de 10 à 80 % en seulement 18 minutes. C'est l'un des temps de charge les plus rapides du marché, comparable à celui de la Porsche Taycan qui coûte le double. En 4,5 minutes de charge, le EV6 récupère 100 km d'autonomie. La fonction Vehicle-to-Load (V2L) permet d'utiliser la batterie du EV6 comme source d'énergie externe (prises 220 V) pour alimenter des appareils électriques, un atout unique pour le camping ou les situations d'urgence.

L'intérieur du EV6 est spacieux et moderne. Le plancher plat de la plateforme E-GMP et l'empattement long de 2,90 m libèrent un espace généreux pour cinq passagers. Le double écran incurvé de 12,3 pouces (instrumentation + infodivertissement) est bien intégré dans la planche de bord, et le système de navigation avec planification de recharge est intuitif. Les matériaux sont de bonne qualité, avec des options de sellerie en cuir végan et des inserts recyclés.

Le coffre de 490 litres est complété par un frunk de 52 litres sous le capot avant (version propulsion, 20 litres en version AWD). La banquette arrière est rabattable en 60/40, et le seuil de chargement est bas. L'habitabilité arrière est correcte pour deux adultes, bien que la ligne de toit plongeante limite la garde au toit pour les passagers de plus de 1,85 m.

Le comportement routier du EV6 est dynamique et engageant. La direction est précise, le châssis est bien équilibré et la suspension offre un bon compromis entre confort et tenue de route. Les freins régénératifs sont réglables via des palettes au volant sur six niveaux, permettant de moduler la récupération d'énergie selon les préférences et les conditions de conduite. Le mode i-Pedal permet la conduite à une pédale.

La garantie Kia de 7 ans ou 150 000 km (et 7 ans pour la batterie) est l'une des plus généreuses du marché et constitue un argument de poids face aux concurrents européens.

À 47 990 €, le Kia EV6 est éligible au bonus écologique (fabrication en Corée puis assemblage en Europe pour certaines versions). Il offre un rapport prestations/prix exceptionnel, combinant charge ultra-rapide 800 V, autonomie généreuse, design distinctif et garantie de 7 ans. C'est l'un des meilleurs véhicules électriques du marché, tous segments confondus.`,
    pointsForts: [
      "Charge ultra-rapide 800 V jusqu'à 240 kW (10-80 % en 18 min)",
      "Fonction Vehicle-to-Load (V2L), prise 220 V intégrée",
      "Garantie 7 ans / 150 000 km véhicule et batterie",
      "Design spectaculaire et distinctif, Voiture de l'année 2022",
      "Rapport prestations/prix exceptionnel face à la concurrence premium",
      "Version GT à 585 ch pour les amateurs de performances",
    ],
    pointsFaibles: [
      "Garde au toit arrière réduite par la ligne de toit plongeante",
      "Frunk réduit à 20 litres en version AWD",
      "Consommation sur autoroute pouvant dépasser 22 kWh/100 km",
      "Interface multimédia perfectible (menus parfois complexes)",
    ],
    source: "https://www.kia.com/fr/modeles/ev6.html",
    dateMAJ: "2026-06-22",
  },
{
    slug: "cupra-born",
    modele: "Cupra Born",
    marque: "Cupra",
    marqueSlug: "cupra",
    prixBase: 37000,
    prixOccasion: null,
    autonomieWLTP: 548,
    autonomieReelle: 440,
    batterieKwh: 77,
    conso: 16.8,
    puissanceCh: 231,
    puissanceKw: 170,
    chargeRapideKw: 135,
    tempsChargeRapide: "33 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 385,
    poids: 1820,
    longueur: 4322,
    segment: "compacte",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["compacte", "sportive", "plateforme-MEB", "grande-autonomie"],
    annee: 2024,
    description: `La Cupra Born s'impose comme l'une des compactes électriques les plus séduisantes du marché européen, incarnant parfaitement la philosophie de la marque barcelonaise qui mêle tempérament sportif et conscience environnementale. Construite sur la plateforme modulaire MEB du groupe Volkswagen, elle bénéficie d'une architecture spécifiquement conçue pour l'électrique, garantissant un centre de gravité bas et une répartition optimale des masses.

Le design extérieur de la Born arbore les codes stylistiques caractéristiques de Cupra, avec une face avant acérée dominée par le logo triangulaire en cuivre, des lignes de carrosserie tendues et une silhouette dynamique qui la distingue nettement de sa cousine technique, la Volkswagen ID.3. Les jantes alliage au dessin travaillé et les éléments en cuivre disséminés sur la carrosserie renforcent son caractère premium et sportif. À l'arrière, le bandeau lumineux continu et le diffuseur intégré achèvent de lui conférer une allure résolument moderne.

À bord, l'habitacle reprend les fondamentaux de la plateforme MEB avec un tableau de bord épuré centré autour d'un écran tactile de 12,9 pouces intégrant le système d'infodivertissement maison. Les sièges sport baquets, revêtus de matériaux recyclés dans certaines finitions, offrent un excellent maintien latéral tout en s'inscrivant dans une démarche écoresponsable. L'espace aux places arrière se révèle généreux grâce à l'empattement allongé permis par la plateforme dédiée, et le coffre de 385 litres, bien que modeste pour le segment, reste fonctionnel au quotidien.

Sous le capot, la version équipée de la batterie de 77 kWh délivre 231 chevaux aux roues arrière, permettant un 0 à 100 km/h en 6,6 secondes. Cette motorisation procure des accélérations franches et un agrément de conduite remarquable, renforcé par un châssis rigoureusement calibré qui privilégie le plaisir de conduite sans sacrifier le confort. La direction, précise et bien pondérée, transmet un excellent ressenti, tandis que les suspensions Sport DCC en option permettent de moduler le comportement entre confort et dynamisme.

L'autonomie constitue l'un des atouts majeurs de la Born. Avec 548 km annoncés en cycle WLTP, elle se positionne parmi les meilleures de sa catégorie. En conditions réelles de conduite mixte, comptez environ 440 km, un chiffre très honorable qui permet d'envisager sereinement les longs trajets. La consommation moyenne relevée de 16,8 kWh/100 km témoigne d'une efficience énergétique exemplaire pour une compacte de ce gabarit.

La recharge rapide en courant continu accepte jusqu'à 135 kW, permettant de récupérer de 10 à 80 % de batterie en environ 33 minutes sur une borne compatible. En courant alternatif sur une wallbox domestique de 11 kW, il faut compter environ 7 heures 30 pour une charge complète, ce qui convient parfaitement à une recharge nocturne. L'absence de chargeur embarqué 22 kW constitue toutefois une limitation pour ceux qui disposent d'une installation triphasée plus puissante.

Sur le plan technologique, la Born embarque une suite complète d'aides à la conduite incluant le régulateur de vitesse adaptatif prédictif, l'assistant de maintien dans la voie et le freinage d'urgence autonome. Le système de navigation intègre la planification d'itinéraire avec prise en compte des arrêts de recharge, optimisant ainsi les trajets longue distance.

Positionnée à partir de 37 000 euros, la Cupra Born se situe dans une gamme de prix compétitive pour une compacte électrique offrant cette combinaison de performances, d'autonomie et d'agrément de conduite. Son éligibilité au bonus écologique en France renforce encore son attractivité économique. Elle constitue un choix de premier plan pour les conducteurs recherchant une alternative électrique sans compromis sur le plaisir de conduire, tout en restant dans un budget maîtrisé par rapport à des concurrentes premium comme la BMW i4 ou la Tesla Model 3.`,
    pointsForts: [
      "Autonomie généreuse de 548 km WLTP grâce à la batterie 77 kWh",
      "Comportement routier sportif et châssis dynamique typé Cupra",
      "Consommation très contenue de 16,8 kWh/100 km en usage réel",
      "Éligible au bonus écologique avec fabrication européenne",
      "Design distinctif et finitions premium avec matériaux recyclés",
    ],
    pointsFaibles: [
      "Coffre limité à 385 litres pour une compacte",
      "Chargeur embarqué plafonné à 11 kW en courant alternatif",
      "Charge rapide DC limitée à 135 kW face à certaines concurrentes",
      "Système d'infodivertissement parfois lent à réagir",
    ],
    source: "https://www.automobile-propre.com/voitures/cupra-born/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "cupra-tavascan",
    modele: "Cupra Tavascan",
    marque: "Cupra",
    marqueSlug: "cupra",
    prixBase: 52000,
    prixOccasion: null,
    autonomieWLTP: 568,
    autonomieReelle: 450,
    batterieKwh: 77,
    conso: 17.2,
    puissanceCh: 340,
    puissanceKw: 250,
    chargeRapideKw: 135,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "8h00 (0-100 % sur 11 kW)",
    coffre: 540,
    poids: 2198,
    longueur: 4644,
    segment: "SUV-coupe",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["SUV-coupé", "sportif", "grande-autonomie", "quatre-roues-motrices"],
    annee: 2024,
    description: `Le Cupra Tavascan marque l'entrée ambitieuse de la marque espagnole dans le segment très disputé des SUV coupés électriques premium. Avec ses lignes sculptées et sa silhouette plongeante, ce véhicule affiche une présence routière imposante qui ne laisse personne indifférent. Long de 4 644 mm, il se positionne face à des rivaux établis comme le Tesla Model Y ou le BMW iX3, en misant sur un tempérament résolument sportif qui constitue l'ADN de Cupra.

Le design extérieur du Tavascan puise son inspiration dans le concept-car éponyme présenté en 2019, avec une interprétation fidèle qui a su conserver l'essentiel de l'audace stylistique originelle. La signature lumineuse triangulaire à l'avant, les passages de roue musclés et la chute de pavillon façon coupé créent un ensemble visuellement cohérent et distinctif. Les proportions équilibrées dissimulent habilement le gabarit réel du véhicule, lui conférant une agilité visuelle remarquable pour un SUV de cette taille.

L'habitacle du Tavascan propose un environnement résolument tourné vers la technologie, articulé autour d'un écran central de 15 pouces qui concentre la quasi-totalité des commandes du véhicule. La planche de bord adopte un dessin horizontal épuré, rehaussé par des inserts décoratifs en cuivre brossé qui rappellent l'identité chromatique de la marque. Les sièges avant, sculptés et enveloppants, offrent un confort appréciable sur les longs trajets tout en assurant un maintien latéral suffisant lors de conduite dynamique. Aux places arrière, l'espace disponible reste correct malgré la ligne de toit plongeante, et le coffre de 540 litres constitue un volume très convenable pour un usage familial.

Mécaniquement, la version VZ à transmission intégrale embarque deux moteurs électriques développant une puissance combinée de 340 chevaux et un couple instantané de 545 Nm. Cette configuration permet d'abattre le 0 à 100 km/h en seulement 5,6 secondes, des performances qui justifient pleinement l'appellation sportive revendiquée par Cupra. La motricité intégrale assure par ailleurs une adhérence optimale en toutes circonstances, renforçant la polyvalence du véhicule.

La batterie de 77 kWh utiles offre une autonomie WLTP annoncée de 568 km pour la version propulsion, un chiffre qui place le Tavascan parmi les références de son segment. En conduite réelle mixte, on peut tabler sur environ 450 km, une valeur qui satisfait amplement les besoins quotidiens et autorise des escapades longue distance sans planification excessive des arrêts recharge. La consommation moyenne de 17,2 kWh/100 km reste contenue eu égard au gabarit et aux performances du véhicule.

Côté recharge, le Tavascan accepte jusqu'à 135 kW en courant continu, permettant de passer de 10 à 80 % en 28 minutes environ. En courant alternatif, le chargeur embarqué de 11 kW nécessite approximativement 8 heures pour une charge complète, un temps compatible avec la recharge nocturne à domicile. La planification intelligente des arrêts recharge, intégrée au système de navigation, pré-conditionne la batterie à la température idéale avant l'arrivée à la borne.

Le Tavascan embarque une suite complète d'aides à la conduite de niveau 2, incluant le Travel Assist qui combine le régulateur de vitesse adaptatif et le maintien actif dans la voie, permettant une conduite semi-autonome sur autoroute. Le système audio Sennheiser immersif et la connectivité smartphone sans fil complètent un équipement technologique de haut niveau.

Point d'attention majeur : fabriqué en Chine, le Cupra Tavascan n'est pas éligible au bonus écologique français, ce qui pénalise significativement son positionnement tarifaire à 52 000 euros. Cette absence de subvention le place en compétition directe avec des modèles mieux subventionnés, un handicap commercial non négligeable sur le marché français.`,
    pointsForts: [
      "Performances sportives remarquables avec 340 ch et transmission intégrale",
      "Autonomie de référence dans le segment avec 568 km WLTP",
      "Volume de coffre généreux de 540 litres pour un coupé-SUV",
      "Design audacieux et identité de marque forte",
      "Suite technologique complète avec conduite semi-autonome",
    ],
    pointsFaibles: [
      "Non éligible au bonus écologique car fabriqué en Chine",
      "Prix élevé à 52 000 € sans aide gouvernementale",
      "Poids conséquent de 2 198 kg impactant la maniabilité",
      "Chargeur embarqué AC limité à 11 kW",
    ],
    source: "https://www.automobile-propre.com/voitures/cupra-tavascan/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "smart-1",
    modele: "Smart #1",
    marque: "Smart",
    marqueSlug: "smart",
    prixBase: 34000,
    prixOccasion: null,
    autonomieWLTP: 440,
    autonomieReelle: 350,
    batterieKwh: 66,
    conso: 18.1,
    puissanceCh: 272,
    puissanceKw: 200,
    chargeRapideKw: 150,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "3h30 (0-100 % sur 22 kW)",
    coffre: 313,
    poids: 1875,
    longueur: 4270,
    segment: "SUV-urbain",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["SUV-urbain", "compact", "charge-rapide-150kW", "charge-AC-22kW"],
    annee: 2024,
    description: `La Smart #1 représente la métamorphose radicale de la marque allemande, passée du statut de spécialiste de la micro-citadine à celui de constructeur de SUV électriques premium. Fruit de la coentreprise entre Mercedes-Benz et le chinois Geely, ce véhicule s'inscrit dans une nouvelle ère pour Smart, abandonnant définitivement le moteur thermique et les formats ultra-compacts pour embrasser un positionnement résolument différent.

Avec ses 4 270 mm de longueur, la Smart #1 se situe dans le segment des SUV urbains compacts, un format polyvalent qui séduit une clientèle large. Son design extérieur cultive un style futuriste et arrondis, avec des surfaces lisses et un traitement aérodynamique soigné. Les poignées de portes affleurantes, les optiques LED effilées et la calandre fermée participent à une esthétique épurée qui tranche avec les codes traditionnels du segment. La palette de coloris bi-ton et les jantes au dessin moderne ajoutent une touche de personnalisation bienvenue.

L'intérieur de la Smart #1 surprend par son raffinement et sa générosité en termes d'espace. Le tableau de bord est dominé par un écran central de 12,8 pouces orienté vers le conducteur, couplé à un combiné d'instrumentation numérique de 9,2 pouces. L'ambiance lumineuse intérieure, personnalisable via 64 teintes, crée une atmosphère chaleureuse et moderne. Les matériaux employés, mêlant cuir végan et inserts texturés, témoignent d'une volonté de monter en gamme sans compromettre la démarche environnementale.

La motorisation de la version Premium délivre 272 chevaux aux roues arrière, un chiffre impressionnant qui propulse le véhicule de 0 à 100 km/h en 6,7 secondes. Ce surcroît de puissance confère à la Smart #1 un tempérament joueur et réactif, particulièrement appréciable en milieu urbain où les reprises vives facilitent les insertions et les dépassements. Le châssis, développé sur la plateforme SEA de Geely, offre un compromis satisfaisant entre confort et tenue de route.

La batterie de 66 kWh autorise une autonomie WLTP de 440 km, tandis qu'en conduite réelle, on peut raisonnablement compter sur environ 350 km en usage mixte. La consommation moyenne de 18,1 kWh/100 km se situe dans la norme du segment. Un atout notable de la Smart #1 réside dans son chargeur embarqué de 22 kW en courant alternatif, une caractéristique rare dans cette gamme de prix qui permet de récupérer l'intégralité de la charge en seulement 3 heures 30 sur une borne AC triphasée. En charge rapide DC, la puissance maximale de 150 kW permet de passer de 10 à 80 % en environ 30 minutes.

L'équipement technologique inclut un système audio Beats, la compatibilité Apple CarPlay et Android Auto sans fil, ainsi qu'une suite d'aides à la conduite comprenant le stationnement automatique télécommandé depuis le smartphone. Le toit panoramique fixe, de série sur certaines finitions, inonde l'habitacle de lumière naturelle et amplifie la sensation d'espace.

Le coffre de 313 litres constitue cependant le talon d'Achille de la Smart #1. Ce volume, modeste pour un SUV de cette taille, limite les capacités de chargement lors des vacances familiales. L'absence de frunk (coffre avant) accentue cette contrainte.

Fabriquée en Chine, la Smart #1 ne bénéficie pas du bonus écologique français, ce qui majore sensiblement son coût d'acquisition par rapport à des concurrentes éligibles comme la Peugeot e-2008. Malgré ce handicap tarifaire, elle séduit par son originalité, sa puissance généreuse et son chargeur AC 22 kW qui simplifie considérablement la recharge au quotidien, un argument de poids pour les utilisateurs disposant d'une borne adaptée.`,
    pointsForts: [
      "Chargeur embarqué 22 kW AC permettant une recharge complète en 3h30",
      "Puissance généreuse de 272 ch pour un SUV urbain compact",
      "Design original et intérieur raffiné avec ambiance lumineuse personnalisable",
      "Charge rapide DC jusqu'à 150 kW pour les longs trajets",
    ],
    pointsFaibles: [
      "Volume de coffre limité à 313 litres",
      "Non éligible au bonus écologique (fabrication chinoise)",
      "Consommation réelle supérieure aux meilleurs du segment",
      "Poids élevé de 1 875 kg pour le gabarit",
    ],
    source: "https://www.automobile-propre.com/voitures/smart-1/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "smart-3",
    modele: "Smart #3",
    marque: "Smart",
    marqueSlug: "smart",
    prixBase: 38000,
    prixOccasion: null,
    autonomieWLTP: 455,
    autonomieReelle: 365,
    batterieKwh: 66,
    conso: 17.4,
    puissanceCh: 272,
    puissanceKw: 200,
    chargeRapideKw: 150,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "3h30 (0-100 % sur 22 kW)",
    coffre: 370,
    poids: 1855,
    longueur: 4400,
    segment: "SUV-compact",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["SUV-compact", "coupé", "charge-AC-22kW", "design-moderne"],
    annee: 2024,
    description: `La Smart #3 élargit la gamme de la marque germano-chinoise en proposant un SUV coupé compact aux lignes fluides et athlétiques. Positionnée au-dessus de la Smart #1, elle adopte un format légèrement plus grand avec ses 4 400 mm de longueur, tout en cultivant une silhouette résolument différente grâce à sa ligne de toit fuyante qui lui confère un profil de coupé surélevé particulièrement élégant.

L'esthétique extérieure de la Smart #3 joue la carte de la séduction avec un dessin très travaillé. La face avant reprend les codes de la famille Smart nouvelle génération, avec des optiques affinées reliées par un bandeau lumineux, tandis que le profil latéral se distingue par une ligne d'épaule ascendante et des montants arrière masqués qui créent un effet de toit flottant. L'arrière, traité en fastback avec un becquet intégré et des feux effilés, achève cette composition stylistique réussie qui tranche avec le conformisme ambiant du segment.

L'habitacle de la Smart #3 bénéficie d'une présentation soignée articulée autour d'un écran central de 12,8 pouces à la réactivité convaincante. La planche de bord adopte un dessin horizontal fluide qui participe à la sensation d'espace, complété par un affichage tête haute projeté sur le pare-brise. Les sièges avant, aux formes enveloppantes, proposent un confort de bon niveau sur longue distance, avec des réglages électriques et une ventilation disponibles selon les finitions. L'ambiance intérieure, modulable grâce à un éclairage d'ambiance multicolore et des matériaux premium, offre un cadre plaisant et moderne.

Aux places arrière, l'espace aux genoux se montre correct malgré la ligne de toit plongeante, tandis que la garde au toit reste suffisante pour des passagers de taille moyenne. Le coffre affiche 370 litres, une progression notable par rapport à la Smart #1 qui atténue l'une des critiques formulées à l'encontre de sa petite sœur. La banquette arrière rabattable en configuration 60/40 permet d'augmenter significativement le volume de chargement pour les besoins ponctuels.

Techniquement, la Smart #3 partage sa plateforme SEA et sa motorisation avec la Smart #1. Le moteur arrière de 272 chevaux assure des performances dynamiques avec un 0 à 100 km/h en 5,8 secondes, tandis que la version Brabus à transmission intégrale pousse la puissance à 428 chevaux pour un 0 à 100 km/h en 3,7 secondes, la propulsant dans la catégorie des véhicules électriques performants.

La batterie de 66 kWh confère à la Smart #3 une autonomie WLTP de 455 km, en légère progression par rapport à la #1 grâce à un aérodynamisme optimisé par la silhouette coupé. En usage réel mixte, on peut compter sur environ 365 km, un rayon d'action convenable pour les déplacements quotidiens et les sorties du week-end. Comme sa sœur, la Smart #3 profite du chargeur embarqué triphasé de 22 kW, un avantage compétitif indéniable qui permet de récupérer l'intégralité de la batterie en 3 heures 30 sur une borne adaptée. La charge rapide DC de 150 kW autorise un passage de 10 à 80 % en une demi-heure.

L'équipement de série se montre généreux, avec le stationnement automatique, la caméra 360 degrés, le régulateur de vitesse adaptatif et le système multimédia complet avec navigation connectée. L'application smartphone permet de contrôler à distance la climatisation, le niveau de charge et la localisation du véhicule.

Vendue à partir de 38 000 euros, la Smart #3 souffre comme sa sœur de l'absence de bonus écologique en raison de sa fabrication chinoise. Ce positionnement tarifaire la place en concurrence frontale avec des modèles subventionnés qui deviennent mécaniquement plus accessibles. Néanmoins, son style distinctif, ses performances relevées et surtout son chargeur AC 22 kW constituent des arguments solides pour les acheteurs qui valorisent ces critères techniques au-delà du simple prix catalogue.`,
    pointsForts: [
      "Silhouette coupé-SUV élégante et aérodynamique",
      "Chargeur embarqué 22 kW triphasé pour recharge rapide en AC",
      "Performances dynamiques avec 272 ch et 0 à 100 km/h en 5,8 secondes",
      "Coffre de 370 litres en progression par rapport à la Smart #1",
      "Équipement de série très complet avec caméra 360°",
    ],
    pointsFaibles: [
      "Non éligible au bonus écologique français",
      "Garde au toit arrière pénalisée par la ligne de toit coupé",
      "Tarif élevé sans subvention face aux concurrentes européennes",
    ],
    source: "https://www.automobile-propre.com/voitures/smart-3/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "mini-cooper-se",
    modele: "Mini Cooper SE",
    marque: "Mini",
    marqueSlug: "mini",
    prixBase: 33000,
    prixOccasion: null,
    autonomieWLTP: 402,
    autonomieReelle: 320,
    batterieKwh: 54.2,
    conso: 14.7,
    puissanceCh: 218,
    puissanceKw: 160,
    chargeRapideKw: 95,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "5h15 (0-100 % sur 11 kW)",
    coffre: 200,
    poids: 1535,
    longueur: 3862,
    segment: "citadine",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["citadine", "premium", "go-kart-feeling", "faible-consommation"],
    annee: 2024,
    description: `La Mini Cooper SE nouvelle génération réinvente l'icône automobile britannique pour l'ère électrique, en conservant intégralement l'esprit fun et le fameux « go-kart feeling » qui ont fait la réputation de la marque depuis plus de six décennies. Cette quatrième génération de Mini, entièrement repensée, adopte une motorisation 100 % électrique qui s'accorde naturellement avec le caractère urbain et agile de ce modèle légendaire.

Le design de la nouvelle Cooper SE constitue une évolution majeure par rapport à sa devancière. La face avant arbore un dessin minimaliste avec une calandre octogonale fermée et des projecteurs LED ronds qui conservent l'identité immédiatement reconnaissable de la marque. Le profil latéral se distingue par des surfaces plus lisses et des lignes plus tendues, tandis que l'arrière adopte un traitement inédit avec la disparition du drapeau britannique dans les feux au profit d'un graphisme triangulaire moderne. La compacité du véhicule, avec ses 3 862 mm de longueur, reste un atout majeur en milieu urbain dense.

L'intérieur opère une véritable révolution technologique avec l'introduction d'un écran OLED circulaire de 240 mm de diamètre qui trône au centre de la planche de bord. Cet écran, véritable pièce maîtresse de l'habitacle, concentre l'ensemble des fonctions du véhicule dans une interface graphique élégante avec des modes d'ambiance animés. La disparition quasi totale des boutons physiques au profit de commandes tactiles et vocales confère à l'habitacle une pureté visuelle saisissante. Les matériaux, mêlant textile tricoté en 3D et surfaces texturées, abandonnent le cuir au profit de solutions durables et originales.

Sous le plancher, la batterie de 54,2 kWh alimente un moteur électrique de 218 chevaux et 330 Nm de couple, installé sur le train avant. Les performances sont à la hauteur de l'héritage sportif de Mini : le 0 à 100 km/h est expédié en 6,7 secondes, accompagné d'un son de conduite spécifique développé par Hans Zimmer qui accompagne les accélérations d'une signature sonore immersive et futuriste.

L'autonomie WLTP de 402 km représente un bond spectaculaire par rapport à l'ancienne Cooper SE qui plafonnait à 234 km. En conditions réelles, comptez environ 320 km en usage mixte, un rayon d'action désormais suffisant pour dépasser largement le cadre strictement urbain. La consommation de 14,7 kWh/100 km en cycle mixte place la Cooper SE parmi les voitures électriques les plus efficientes du marché, un atout considérable qui réduit le coût d'usage au quotidien.

La charge rapide en courant continu atteint 95 kW, un chiffre modeste par rapport à la concurrence mais suffisant pour récupérer de 10 à 80 % en environ 30 minutes. Sur une wallbox domestique de 11 kW en courant alternatif, la charge complète nécessite 5 heures 15, un temps très raisonnable pour une recharge nocturne. Le planificateur de trajets intégré identifie automatiquement les bornes compatibles et optimise les temps d'arrêt.

Le coffre de 200 litres constitue la contrainte majeure de la Cooper SE, une limitation inhérente au format citadin du véhicule. Ce volume, réduit par rapport à certaines concurrentes, impose des compromis pour les bagages. Toutefois, la banquette rabattable permet de tripler pratiquement le volume disponible pour les transports occasionnels d'objets encombrants.

Éligible au bonus écologique grâce à sa fabrication européenne, la Mini Cooper SE se positionne à partir de 33 000 euros, un tarif compétitif pour une citadine premium électrique. Elle s'adresse aux conducteurs urbains qui recherchent une voiture à forte personnalité, efficiente et plaisante à conduire, sans sacrifier l'élégance ni la modernité technologique.`,
    pointsForts: [
      "Consommation exemplaire de 14,7 kWh/100 km parmi les meilleures du marché",
      "Plaisir de conduite intact avec le légendaire go-kart feeling",
      "Interface OLED circulaire innovante et design intérieur avant-gardiste",
      "Éligible au bonus écologique avec fabrication européenne",
      "Compacité idéale pour la ville avec 3 862 mm de longueur",
    ],
    pointsFaibles: [
      "Coffre très limité à 200 litres",
      "Charge rapide DC plafonnée à 95 kW",
      "Commandes principalement tactiles peu pratiques en conduite",
    ],
    source: "https://www.automobile-propre.com/voitures/mini-cooper-se/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "mini-countryman-se",
    modele: "Mini Countryman SE",
    marque: "Mini",
    marqueSlug: "mini",
    prixBase: 44000,
    prixOccasion: null,
    autonomieWLTP: 462,
    autonomieReelle: 370,
    batterieKwh: 66.5,
    conso: 16.3,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 130,
    tempsChargeRapide: "29 min (10-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 11 kW)",
    coffre: 460,
    poids: 2000,
    longueur: 4433,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV-compact", "premium", "familial", "bonne-autonomie"],
    annee: 2024,
    description: `Le Mini Countryman SE troisième génération incarne l'ambition de la marque britannique de conquérir le segment des SUV compacts électriques premium, en proposant un véhicule familial qui conserve l'identité ludique et distinctive de Mini tout en offrant un espace et une polyvalence inédits pour la marque. Construit sur la plateforme FAAR de BMW, il bénéficie d'une base technique solide et éprouvée, spécifiquement adaptée aux motorisations électriques.

Le design du nouveau Countryman SE opère une montée en gamme significative. Plus grand que son prédécesseur avec 4 433 mm de longueur, il adopte des proportions plus imposantes tout en conservant les éléments stylistiques iconiques de Mini : la ligne de vitrage caractéristique, les passages de roue prononcés et le traitement bi-ton du toit. La face avant se modernise avec des projecteurs LED aux contours anguleux et une calandre octogonale fermée intégrant des éléments chromés. L'arrière se pare de feux Union Jack tridimensionnels qui assurent une signature nocturne immédiatement identifiable.

À bord, le Countryman SE offre un habitacle spacieux qui rompt avec l'image traditionnellement compacte de Mini. Le tableau de bord est structuré autour d'un écran OLED circulaire de 240 mm, hérité de la Cooper, qui regroupe instrumentation, navigation et divertissement dans une interface fluide et intuitive. Les modes d'expérience (Personal, Green, Go-Kart) modifient non seulement les paramètres de conduite mais aussi l'ambiance visuelle et sonore de l'habitacle, une approche immersive propre à Mini. La console centrale accueille un sélecteur de vitesses rotatif rétroéclairé, tandis que la barre de basculement caractéristique est conservée pour les commandes essentielles.

L'espace aux places arrière progresse considérablement grâce à l'empattement allongé de 2 692 mm, offrant une habitabilité digne d'un SUV compact familial. Le coffre de 460 litres, extensible à 1 450 litres banquette rabattue, constitue un volume pratique pour les vacances et les activités quotidiennes d'une famille. Le seuil de chargement, positionné à bonne hauteur, facilite les opérations de chargement.

Le moteur électrique de 204 chevaux et 250 Nm entraîne les roues avant, proposant des accélérations suffisamment vives pour le profil d'utilisation du véhicule avec un 0 à 100 km/h en 8,6 secondes. La version SE ALL4, équipée de deux moteurs et de la transmission intégrale, pousse la puissance à 313 chevaux pour un 0 à 100 km/h en 5,6 secondes, mais à un tarif significativement supérieur.

La batterie de 66,5 kWh assure une autonomie WLTP de 462 km, un chiffre très compétitif qui permet d'envisager sereinement les trajets du quotidien et les déplacements occasionnels sur autoroute. En conduite réelle, comptez environ 370 km en usage mixte, une valeur rassurante qui élimine l'anxiété d'autonomie. La consommation mesurée de 16,3 kWh/100 km témoigne d'une bonne efficience malgré le gabarit et le poids de 2 000 kg.

La recharge rapide DC accepte jusqu'à 130 kW, permettant de récupérer de 10 à 80 % en environ 29 minutes, un temps très raisonnable pour les pauses autoroutières. En courant alternatif sur wallbox de 11 kW, la charge complète demande 6 heures 30, parfaitement adapté à la recharge nocturne résidentielle.

Éligible au bonus écologique français grâce à sa fabrication européenne à Leipzig, le Mini Countryman SE se positionne à 44 000 euros. Ce tarif, certes élevé, se justifie par le positionnement premium, l'équipement généreux et la qualité de fabrication héritée du partenariat avec BMW. Il constitue une alternative crédible au BMW iX1 et au Volvo EX30 pour les familles recherchant un SUV électrique distinctif et bien équipé.`,
    pointsForts: [
      "Habitabilité et coffre de 460 litres remarquables pour un Mini",
      "Autonomie confortable de 462 km WLTP pour les trajets familiaux",
      "Éligible au bonus écologique avec fabrication à Leipzig",
      "Identité Mini préservée avec modernité technologique",
      "Charge rapide DC efficace à 130 kW",
    ],
    pointsFaibles: [
      "Prix de départ élevé à 44 000 euros pour le segment",
      "Poids de 2 000 kg impactant l'agilité urbaine",
      "Chargeur embarqué AC limité à 11 kW",
      "Version SE de base en propulsion avant uniquement",
    ],
    source: "https://www.automobile-propre.com/voitures/mini-countryman-electrique/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "opel-corsa-electric",
    modele: "Opel Corsa Electric",
    marque: "Opel",
    marqueSlug: "opel",
    prixBase: 34000,
    prixOccasion: null,
    autonomieWLTP: 402,
    autonomieReelle: 330,
    batterieKwh: 54,
    conso: 15.2,
    puissanceCh: 156,
    puissanceKw: 115,
    chargeRapideKw: 100,
    tempsChargeRapide: "27 min (20-80 %)",
    tempsChargeAC: "5h15 (0-100 % sur 11 kW)",
    coffre: 267,
    poids: 1544,
    longueur: 4060,
    segment: "citadine",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["citadine", "polyvalente", "plateforme-e-CMP2", "bonus-écologique"],
    annee: 2024,
    description: `L'Opel Corsa Electric incarne la démocratisation de la mobilité électrique dans le segment des citadines polyvalentes. Quatrième modèle le plus vendu en Europe dans sa catégorie, la Corsa bénéficie avec cette motorisation 100 % électrique d'une mise à jour technique significative basée sur la plateforme e-CMP2 de Stellantis, qui améliore sensiblement l'autonomie et les performances par rapport à la génération précédente.

Le design extérieur de la Corsa Electric se distingue par sa face avant caractéristique baptisée Vizor, un bandeau noir laqué qui relie les deux blocs optiques et intègre le logo Opel central. Cette signature stylistique, devenue emblématique de la marque allemande, confère à la petite citadine une présence visuelle affirmée qui la démarque dans le paysage urbain. Les dimensions contenues de 4 060 mm de longueur en font une alliée précieuse pour la circulation et le stationnement en ville, tout en offrant un gabarit suffisant pour les trajets périurbains.

L'intérieur de la Corsa Electric arbore une présentation moderne sans ostentation. Le poste de conduite s'articule autour de deux écrans : un combiné d'instrumentation numérique de 7 pouces et un écran central tactile de 10 pouces intégrant le système d'infodivertissement compatible Apple CarPlay et Android Auto sans fil. Les commandes de climatisation restent physiques, un choix pragmatique qui facilite leur utilisation en conduite. Les sièges avant, certifiés par l'AGR (Association allemande pour la santé du dos), assurent un confort ergonomique appréciable sur les trajets prolongés, une attention caractéristique de la marque Opel.

Le coffre de 267 litres est identique à celui de la version thermique, un avantage de la plateforme multi-énergie e-CMP2 qui ne sacrifie pas l'espace utilitaire au profit des batteries. Ce volume permet de loger deux valises cabine et les courses quotidiennes sans difficulté, même si les vacances familiales nécessiteront quelques compromis d'organisation.

Sous le plancher, la nouvelle batterie de 54 kWh alimente un moteur électrique de 156 chevaux et 260 Nm, offrant des performances en net progrès par rapport à la version précédente de 136 ch. Le 0 à 100 km/h est abattu en 8,1 secondes, une valeur plus que suffisante pour l'usage urbain et périurbain qui constitue le terrain de prédilection de la Corsa. La conduite se révèle plaisante et sans surprise, avec une direction légère en ville qui se raffermit à vitesse élevée et un comportement routier sain et prévisible.

L'autonomie WLTP de 402 km constitue un progrès considérable qui repositionne la Corsa Electric parmi les citadines électriques les plus endurantes. En conditions réelles, comptez environ 330 km en usage mixte, un rayon d'action qui couvre aisément les besoins hebdomadaires de la majorité des conducteurs. La consommation mesurée de 15,2 kWh/100 km témoigne de l'efficience de la chaîne de traction, optimisée par la dernière génération de moteur électrique Stellantis.

La recharge rapide DC accepte jusqu'à 100 kW, permettant de récupérer de 20 à 80 % en seulement 27 minutes. Sur wallbox domestique de 11 kW, une charge complète nécessite environ 5 heures 15. Le chargeur embarqué de 11 kW en triphasé constitue un équipement de série bienvenu qui optimise la recharge à domicile ou au bureau.

Avec un prix de départ de 34 000 euros et son éligibilité au bonus écologique, l'Opel Corsa Electric se positionne comme l'une des portes d'entrée les plus accessibles vers la mobilité électrique premium en Europe. Sa fabrication européenne et son appartenance au groupe Stellantis garantissent un réseau de distribution dense et un service après-vente rassurant pour les automobilistes qui effectuent leur transition vers l'électrique.`,
    pointsForts: [
      "Autonomie en progression majeure à 402 km WLTP",
      "Éligible au bonus écologique avec production européenne",
      "Sièges certifiés AGR pour le confort ergonomique",
      "Dimensions urbaines idéales avec 4 060 mm de longueur",
      "Consommation contenue de 15,2 kWh/100 km",
    ],
    pointsFaibles: [
      "Coffre de 267 litres limité pour les vacances",
      "Charge rapide DC plafonnée à 100 kW",
      "Puissance de 156 ch modeste sur voie rapide",
      "Habitabilité arrière contrainte sur longs trajets",
    ],
    source: "https://www.automobile-propre.com/voitures/opel-corsa-electric/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "opel-mokka-electric",
    modele: "Opel Mokka Electric",
    marque: "Opel",
    marqueSlug: "opel",
    prixBase: 39000,
    prixOccasion: null,
    autonomieWLTP: 406,
    autonomieReelle: 335,
    batterieKwh: 54,
    conso: 15.6,
    puissanceCh: 156,
    puissanceKw: 115,
    chargeRapideKw: 100,
    tempsChargeRapide: "27 min (20-80 %)",
    tempsChargeAC: "5h15 (0-100 % sur 11 kW)",
    coffre: 310,
    poids: 1623,
    longueur: 4151,
    segment: "SUV-urbain",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["SUV-urbain", "design-audacieux", "Vizor", "bonus-écologique"],
    annee: 2024,
    description: `L'Opel Mokka Electric s'impose comme le fer de lance stylistique de la marque au blitz dans le segment très concurrentiel des SUV urbains électriques. Avec son design extérieur audacieux qui a marqué le renouveau esthétique d'Opel lors de son lancement, le Mokka Electric continue de séduire par sa personnalité visuelle forte, désormais associée à une motorisation électrique actualisée offrant une autonomie nettement améliorée.

Le design du Mokka Electric reste l'un de ses arguments les plus convaincants. La face avant Vizor, inaugurée sur ce modèle avant d'être déclinée sur l'ensemble de la gamme Opel, crée un regard distinctive et technologique. Le capot plongeant, les flancs musclés et le traitement bi-ton du toit confèrent au petit SUV une allure athlétique et premium qui transcende son positionnement tarifaire. Les proportions ramassées, avec ses 4 151 mm de longueur, préservent une maniabilité urbaine tout en assurant une posture de conduite surélevée appréciée de la clientèle du segment.

L'habitacle du Mokka Electric se caractérise par le Pure Panel, une planche de bord entièrement numérique composée de deux écrans de 12 pouces disposés côte à côte derrière une surface vitrée continue. Cette architecture confère au poste de conduite une modernité et une lisibilité excellentes. Le volant à méplat, compact et gainé de cuir, tombe parfaitement en main, tandis que la console centrale accueille les commandes essentielles de climatisation sous forme de touches physiques ergonomiques, un choix de bon sens qui facilite l'utilisation au quotidien.

L'espace intérieur, sans être pléthorique, se révèle bien exploité. Les sièges avant offrent un compromis judicieux entre maintien et confort, sans oublier la certification AGR optionnelle pour les conducteurs soucieux de leur dos. Aux places arrière, l'espace est suffisant pour deux adultes de corpulence moyenne. Le coffre de 310 litres, bien qu'en retrait par rapport à certains concurrents comme le Peugeot e-2008, offre un volume utilisable grâce à une forme régulière et un seuil de chargement raisonnable.

La motorisation électrique du Mokka Electric fait appel au même groupe motopropulseur que la Corsa Electric millésimée : un moteur de 156 chevaux et 260 Nm de couple alimenté par une batterie de 54 kWh. Le 0 à 100 km/h est réalisé en 9 secondes, une valeur en phase avec les attentes du segment. Le comportement routier se montre équilibré et rassurant, avec un centre de gravité abaissé par les batteries qui contribue à une bonne stabilité dans les courbes et un confort de suspension bien calibré pour le tout-venant routier.

L'autonomie WLTP de 406 km marque un progrès décisif par rapport aux 322 km de la version précédente. En conditions de conduite réelle, on peut compter sur environ 335 km en usage mixte, un rayon d'action qui couvre sans difficulté les déplacements de la semaine et les sorties du week-end. La consommation de 15,6 kWh/100 km positionne le Mokka dans la moyenne haute de sa catégorie en matière d'efficience.

La recharge rapide DC à 100 kW permet de récupérer de 20 à 80 % en 27 minutes, tandis que la recharge sur wallbox de 11 kW nécessite environ 5 heures 15 pour une charge intégrale. Ces temps de recharge, sans être exceptionnels, s'avèrent tout à fait compatibles avec les usages quotidiens et les pauses autoroutières.

Proposé à partir de 39 000 euros et éligible au bonus écologique, le Mokka Electric se positionne comme un choix rationnel pour les acheteurs souhaitant un SUV urbain électrique au style distinctif, fabriqué en Europe et bénéficiant du réseau étendu de concessionnaires Opel. Sa principale concurrence vient de son cousin technique, le Peugeot e-2008, avec lequel il partage la plateforme mais pas le caractère stylistique.`,
    pointsForts: [
      "Design extérieur Vizor distinctif et premium",
      "Pure Panel numérique avec double écran 12 pouces",
      "Autonomie améliorée à 406 km WLTP",
      "Éligible au bonus écologique avec fabrication européenne",
    ],
    pointsFaibles: [
      "Coffre de 310 litres en retrait face aux concurrents directs",
      "Charge rapide DC limitée à 100 kW",
      "Prix supérieur de 5 000 € à la Corsa Electric pour prestations similaires",
      "Habitabilité arrière juste pour trois passagers",
    ],
    source: "https://www.automobile-propre.com/voitures/opel-mokka-e/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "opel-astra-electric",
    modele: "Opel Astra Electric",
    marque: "Opel",
    marqueSlug: "opel",
    prixBase: 40000,
    prixOccasion: null,
    autonomieWLTP: 413,
    autonomieReelle: 340,
    batterieKwh: 54,
    conso: 15.4,
    puissanceCh: 156,
    puissanceKw: 115,
    chargeRapideKw: 100,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "5h30 (0-100 % sur 11 kW)",
    coffre: 352,
    poids: 1679,
    longueur: 4374,
    segment: "compacte",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["compacte", "familiale", "fabriquée-en-Allemagne", "polyvalente"],
    annee: 2024,
    description: `L'Opel Astra Electric comble un vide historique dans la gamme du constructeur de Rüsselsheim en proposant pour la première fois une version 100 % électrique de sa compacte emblématique, un modèle qui a accompagné des millions de conducteurs européens depuis sa création en 1991. Cette Astra de sixième génération, produite à l'usine de Rüsselsheim en Allemagne, symbolise l'engagement industriel d'Opel en faveur de la transition énergétique sur le sol européen.

Esthétiquement, l'Astra Electric reprend les lignes affûtées et dynamiques de la version thermique, sans modification de carrosserie majeure. Le face avant Vizor, désormais signature de la marque, s'étend sur toute la largeur du véhicule, encadrant les projecteurs Intelli-Lux LED Pixel dont les 168 éléments adaptatifs constituent l'un des systèmes d'éclairage les plus sophistiqués du segment. Le profil latéral, avec sa ligne de caractère montante et ses proportions équilibrées, véhicule une impression de solidité et de robustesse typiquement germanique.

L'habitacle de l'Astra Electric reprend la philosophie du Pure Panel inauguré par le Mokka, mais dans une déclinaison mieux adaptée au format compacte. Les deux dalles numériques de 10 pouces sont disposées sous une surface vitrée unique qui traverse la planche de bord, créant un effet de continuité technologique élégant. L'ergonomie générale reste un point fort, avec des commandes physiques conservées pour la climatisation et les réglages de volume, une approche pragmatique qui simplifie l'utilisation quotidienne.

L'espace aux places arrière profite de l'empattement de 2 675 mm pour offrir une habitabilité satisfaisante aux passagers adultes. Le coffre de 352 litres, inférieur aux versions thermiques en raison de l'implantation des batteries, reste néanmoins exploitable pour un usage familial courant. La banquette arrière 60/40 s'abaisse pour libérer un volume de chargement étendu lors des besoins ponctuels en espace supplémentaire. Le seuil de chargement est toutefois relevé par rapport aux versions thermiques, un compromis technique lié à la présence du pack batterie sous le plancher.

La chaîne de traction électrique combine un moteur de 156 chevaux et 260 Nm avec une batterie de 54 kWh, l'ensemble reposant sur la plateforme e-CMP2 de Stellantis. Les performances s'avèrent correctes avec un 0 à 100 km/h en 9,2 secondes, un résultat dans la norme pour une compacte familiale électrique. La conduite de l'Astra Electric se distingue par un confort de roulement appréciable, fruit d'un travail d'amortissement soigné qui filtre efficacement les irrégularités de la route. L'insonorisation, poussée sur cette version électrique, contribue à un sentiment de quiétude remarquable à bord.

L'autonomie WLTP de 413 km positionne l'Astra Electric dans une fourchette compétitive pour son segment. En usage réel mixte, comptez sur environ 340 km, une valeur qui satisfait les trajets domicile-travail et les escapades du week-end sans nécessiter de planification minutieuse des recharges. La consommation de 15,4 kWh/100 km reflète une efficience correcte malgré un poids en hausse de 1 679 kg.

La recharge rapide DC à 100 kW autorise un passage de 10 à 80 % en 28 minutes, tandis que la recharge AC sur wallbox de 11 kW demande environ 5 heures 30 pour une charge complète. Le système de navigation Opel intègre un planificateur d'itinéraire intelligent prenant en compte les arrêts de recharge nécessaires.

À 40 000 euros et éligible au bonus écologique, l'Astra Electric cible les conducteurs de compactes traditionnelles prêts à franchir le pas de l'électrique sans bouleverser leurs habitudes. Sa fabrication allemande et son allure sobre et professionnelle en font également un choix pertinent pour les flottes d'entreprise soucieuses d'électrifier leur parc automobile.`,
    pointsForts: [
      "Fabrication allemande à Rüsselsheim garantissant la qualité d'assemblage",
      "Éclairage Intelli-Lux LED Pixel adaptatif de 168 éléments",
      "Confort de roulement et insonorisation soignés",
      "Éligible au bonus écologique français",
      "Ergonomie intérieure bien pensée avec commandes physiques conservées",
    ],
    pointsFaibles: [
      "Coffre de 352 litres réduit par rapport aux versions thermiques",
      "Puissance de 156 ch modeste pour une compacte à 40 000 euros",
      "Charge rapide DC limitée à 100 kW",
      "Seuil de chargement du coffre relevé à cause des batteries",
    ],
    source: "https://www.automobile-propre.com/voitures/opel-astra-electrique-2/",
    dateMAJ: "2026-06-22",
  },
  {
    slug: "ds-3-e-tense",
    modele: "DS 3 E-Tense",
    marque: "DS",
    marqueSlug: "ds",
    prixBase: 40000,
    prixOccasion: null,
    autonomieWLTP: 402,
    autonomieReelle: 320,
    batterieKwh: 54,
    conso: 15.4,
    puissanceCh: 156,
    puissanceKw: 115,
    chargeRapideKw: 100,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "5h15 (0-100 % sur 11 kW)",
    coffre: 350,
    poids: 1550,
    longueur: 4118,
    segment: "SUV-urbain-premium",
    origine: "FR",
    aidesEligible: true,
    note: 7,
    tags: ["premium-français", "SUV-urbain", "fabrication-française", "raffinement"],
    annee: 2024,
    description: `La DS 3 E-Tense porte l'étendard du luxe à la française dans le segment des SUV urbains électriques compacts, affirmant la vocation de DS Automobiles de proposer une alternative nationale aux marques premium allemandes. Avec cette deuxième génération entièrement repensée, DS abandonne le suffixe Crossback et adopte des codes esthétiques plus affirmés qui renforcent son positionnement haut de gamme, tout en intégrant la dernière motorisation électrique de la plateforme Stellantis.

Le design extérieur de la DS 3 E-Tense cultive le raffinement et l'attention aux détails qui caractérisent la marque parisienne. La face avant se distingue par la calandre inversée « DS Wings » chromée, encadrée par les phares DS Matrix LED Vision dont les modules pivotants suivent le tracé de la route. Les flancs sont habillés de la signature guilloché « DS » en relief sur les montants arrière, un motif inspiré de l'horlogerie de luxe qui constitue la griffe visuelle de la marque. À l'arrière, les feux à effet tridimensionnel et le lettrage « DS » en relief complètent cette approche joaillière du design automobile.

L'intérieur de la DS 3 représente l'aboutissement de la philosophie d'artisanat premium de DS. La sellerie en cuir Nappa à surpiqûres « Point Perle », inspirée de la maroquinerie de luxe, habille des sièges aux formes accueillantes et au rembourrage généreux. La planche de bord, structurée autour d'un écran tactile de 10,3 pouces, intègre des commandes de climatisation à affichage numérique enchâssées dans un bloc central aux finitions soignées. Le traitement des matériaux (cuir, alcantara, inserts effet métal guillochés) crée une ambiance opulente qui distingue nettement la DS 3 de ses cousines techniques Peugeot e-2008 et Opel Mokka Electric.

Le coffre de 350 litres offre un volume pratique et bien agencé, avec un plancher réglable en hauteur qui permet d'optimiser l'espace selon les besoins. L'ouverture est suffisamment large pour faciliter le chargement d'objets volumineux, et le seuil est positionné à une hauteur raisonnable.

La motorisation électrique fait appel au moteur de 156 chevaux et 260 Nm de couple alimenté par une batterie de 54 kWh, une configuration partagée avec les autres modèles Stellantis du segment. Le 0 à 100 km/h en 9 secondes ne constitue pas une performance sportive, mais s'avère parfaitement adapté à l'usage urbain et périurbain visé par le véhicule. Le confort de conduite constitue le véritable atout dynamique de la DS 3, avec un filtrage des aspérités de la route remarquable pour le segment, complété par le système de suspension pilotée DS Active Scan qui analyse la route via une caméra pour anticiper les irrégularités du revêtement.

L'autonomie WLTP de 402 km permet d'envisager la majorité des déplacements quotidiens sans recharge intermédiaire. En conditions réelles de conduite mixte, comptez environ 320 km, un chiffre honnête mais légèrement inférieur à certains concurrents directs, en partie en raison de l'aérodynamique moins optimisée de la silhouette SUV urbain. La consommation de 15,4 kWh/100 km se situe dans la norme du segment.

La recharge rapide DC jusqu'à 100 kW autorise un passage de 10 à 80 % en environ 28 minutes. Le chargeur embarqué triphasé de 11 kW permet une recharge complète en 5 heures 15 sur une wallbox adaptée. Le système DS Iris intègre un planificateur d'itinéraire avec gestion intelligente des arrêts recharge.

Fabriquée en France à Poissy, la DS 3 E-Tense bénéficie du bonus écologique et arbore fièrement son origine française. À 40 000 euros, elle se positionne comme le SUV urbain électrique le plus raffiné du catalogue Stellantis, ciblant une clientèle qui place l'élégance, le confort et le savoir-faire français au sommet de ses critères de choix automobile.`,
    pointsForts: [
      "Finitions et matériaux de niveau premium avec sellerie cuir Nappa",
      "Suspension pilotée DS Active Scan pour un confort remarquable",
      "Fabrication française à Poissy, éligible au bonus écologique",
      "Design extérieur raffiné avec détails inspirés de la haute joaillerie",
      "Coffre de 350 litres bien agencé avec plancher réglable",
    ],
    pointsFaibles: [
      "Performances modestes avec 156 ch et 0-100 km/h en 9 secondes",
      "Autonomie réelle de 320 km en retrait face à certains rivaux",
      "Prix de 40 000 € élevé par rapport aux prestations techniques",
      "Charge rapide DC plafonnée à 100 kW",
    ],
    source: "https://www.automobile-propre.com/voitures/ds3-crossback-electrique/",
    dateMAJ: "2026-06-22",
  },
// ─── DS 4 E-TENSE ──────────────────────────────────────────────────
  {
    slug: "ds-4-e-tense",
    modele: "DS 4 E-Tense",
    marque: "DS",
    marqueSlug: "ds",
    prixBase: 45000,
    prixOccasion: null,
    autonomieWLTP: 420,
    autonomieReelle: 330,
    batterieKwh: 54,
    conso: 15.2,
    puissanceCh: 156,
    puissanceKw: 115,
    chargeRapideKw: 100,
    tempsChargeRapide: "30 min (20-80 %)",
    tempsChargeAC: "5h30 (0-100 % sur 11 kW)",
    coffre: 390,
    poids: 1680,
    longueur: 4400,
    segment: "compacte-premium",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["premium", "compacte", "made-in-europe"],
    annee: 2024,
    description: `La DS 4 E-Tense incarne la vision du luxe à la française dans le segment des compactes électriques premium. Issue de la maison DS Automobiles, branche haut de gamme du groupe Stellantis, elle se distingue par un positionnement résolument raffiné qui la place face aux BMW i4 et Audi Q4 e-tron dans une niche encore peu explorée : la compacte électrique de prestige fabriquée en Europe.

Le design extérieur de la DS 4 E-Tense fait la part belle aux codes stylistiques propres à la marque parisienne. La calandre DS Wings, les feux de jour en forme de verticales lumineuses et les poignées de portes affleurantes confèrent à la voiture une allure à la fois élégante et aérodynamique. Les lignes fluides du profil, rehaussées par des jantes alliage spécifiques au modèle électrique, créent une silhouette distinctive qui ne passe pas inaperçue dans le paysage urbain. Avec une longueur de 4 400 mm, la DS 4 E-Tense s'inscrit parfaitement dans le gabarit compact tout en offrant une présence visuelle affirmée.

Sous le capot, la DS 4 E-Tense embarque un moteur électrique de 156 chevaux (115 kW) alimenté par une batterie de 54 kWh. L'autonomie annoncée de 420 km selon le cycle WLTP permet d'envisager sereinement les trajets quotidiens ainsi que les escapades du week-end. En conditions réelles, comptez environ 330 km, une valeur tout à fait honorable pour ce segment. La consommation moyenne se situe autour de 15,2 kWh/100 km, un chiffre qui témoigne du travail d'optimisation aérodynamique et de gestion énergétique réalisé par les ingénieurs.

La recharge constitue un aspect soigneusement travaillé sur ce modèle. En courant continu (DC), la DS 4 E-Tense accepte une puissance maximale de 100 kW, permettant de passer de 20 à 80 % de batterie en environ 30 minutes sur une borne rapide. En courant alternatif (AC), le chargeur embarqué de 11 kW assure une recharge complète en 5 heures et 30 minutes, idéale pour une charge nocturne à domicile ou sur une borne de parking d'entreprise. La compatibilité avec les principaux réseaux de recharge européens garantit une expérience fluide lors des longs trajets.

L'habitacle de la DS 4 E-Tense est sans conteste l'un de ses plus grands atouts. DS Automobiles a fait de l'art de vivre à la française sa signature, et cela se ressent dans chaque détail de la planche de bord. Les matériaux nobles, cuir Nappa et alcantara, les surpiqûres travaillées façon bracelet de montre (point perle et guilloché Clous de Paris), ainsi que l'éclairage d'ambiance personnalisable créent une atmosphère que peu de concurrents peuvent égaler à ce niveau de prix. L'écran tactile central de 10 pouces intègre le système DS Iris System avec navigation connectée, compatibilité Apple CarPlay et Android Auto sans fil, et commandes vocales avancées.

Le confort de conduite bénéficie de la technologie DS Active Scan Suspension, qui analyse la route en temps réel grâce à une caméra frontale pour adapter la fermeté des amortisseurs. Le résultat est un filtrage remarquable des imperfections de la chaussée, renforçant la sensation de voyager dans un cocon. Le silence de fonctionnement du moteur électrique vient parfaire cette ambiance feutrée.

Le coffre de 390 litres offre un volume de chargement raisonnable pour le segment, suffisant pour les bagages d'une famille lors d'un week-end. La banquette arrière, rabattable en 60/40, permet d'étendre cette capacité pour des objets encombrants.

En matière de sécurité et d'aides à la conduite, la DS 4 E-Tense intègre le DS Drive Assist 2.0 avec régulateur de vitesse adaptatif, maintien actif dans la voie, freinage automatique d'urgence avec détection des piétons et des cyclistes, et surveillance des angles morts. La conduite semi-autonome de niveau 2 facilite les trajets autoroutiers.

Éligible au bonus écologique grâce à sa production européenne, la DS 4 E-Tense s'adresse aux conducteurs qui recherchent une alternative française et premium aux modèles allemands. Elle prouve que le luxe électrique n'est pas l'apanage exclusif des constructeurs outre-Rhin et propose une expérience sensorielle unique dans le paysage automobile européen.`,
    pointsForts: [
      "Qualité de finition et matériaux haut de gamme (cuir Nappa, surpiqûres horlogères)",
      "Suspension DS Active Scan pour un confort remarquable",
      "Éligible au bonus écologique (production européenne)",
      "Habitacle raffiné avec ambiance lumineuse personnalisable",
      "Aides à la conduite avancées (DS Drive Assist 2.0)",
    ],
    pointsFaibles: [
      "Puissance modeste (156 ch) pour un positionnement premium",
      "Charge rapide plafonnée à 100 kW",
      "Coffre limité à 390 litres",
      "Réseau DS Automobiles moins étendu que les généralistes",
    ],
    source: "https://www.dsautomobiles.fr/ds-4/ds-4-e-tense.html",
    dateMAJ: "2026-06-22",
  },

  // ─── FORD EXPLORER EV ─────────────────────────────────────────────
  {
    slug: "ford-explorer-ev",
    modele: "Ford Explorer EV",
    marque: "Ford",
    marqueSlug: "ford",
    prixBase: 45000,
    prixOccasion: null,
    autonomieWLTP: 602,
    autonomieReelle: 480,
    batterieKwh: 77,
    conso: 15.8,
    puissanceCh: 286,
    puissanceKw: 210,
    chargeRapideKw: 185,
    tempsChargeRapide: "25 min (10-80 %)",
    tempsChargeAC: "7h45 (0-100 % sur 11 kW)",
    coffre: 536,
    poids: 2088,
    longueur: 4468,
    segment: "SUV-familial",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "familiale", "grande-autonomie", "made-in-europe"],
    annee: 2024,
    description: `Le Ford Explorer EV marque l'entrée fracassante de Ford dans le segment des SUV électriques familiaux en Europe. Construit sur la plateforme MEB du groupe Volkswagen dans l'usine de Cologne en Allemagne, il illustre une alliance industrielle inédite entre deux géants de l'automobile. Cette collaboration technique permet au constructeur américain de proposer un véhicule électrique mature dès son lancement, bénéficiant de l'expertise acquise par Volkswagen avec ses ID.4 et ID.5.

D'un point de vue esthétique, le Ford Explorer EV ne ressemble en rien à son homonyme américain thermique. Le design est résolument européen, avec des lignes tendues, un capot plongeant et une signature lumineuse distinctive composée de feux diurnes en C inversé. La silhouette compacte mais musclée, longue de 4 468 mm, lui confère une présence assurée sur la route sans les excès dimensionnels parfois reprochés aux SUV. Les poignées de portes affleurantes et les jantes aérodynamiques optimisent le Cx pour maximiser l'autonomie.

Sous la carrosserie, la batterie de 77 kWh (capacité nette) alimente un moteur électrique de 286 chevaux (210 kW) positionné sur l'essieu arrière, offrant une propulsion qui ravira les amateurs de conduite dynamique. L'autonomie WLTP atteint l'impressionnant chiffre de 602 km, plaçant le Ford Explorer parmi les SUV électriques les plus endurants du marché. En usage réel, environ 480 km sont accessibles, ce qui élimine pratiquement l'anxiété liée à l'autonomie, même lors de longs trajets autoroutiers.

La recharge rapide en courant continu culmine à 185 kW, permettant de récupérer de 10 à 80 % de batterie en environ 25 minutes sur une borne compatible. C'est l'une des valeurs les plus élevées du segment grâce à l'architecture 400 V optimisée de la plateforme MEB. En courant alternatif, le chargeur embarqué de 11 kW complète une charge totale en 7 heures 45 minutes, parfait pour les recharges nocturnes.

L'intérieur du Ford Explorer EV se démarque nettement de l'univers Volkswagen. Ford a développé son propre système d'infodivertissement SYNC Move, articulé autour d'un grand écran central de 14,6 pouces orientable qui peut coulisser vers le conducteur ou le passager. L'interface est intuitive et supporte Apple CarPlay et Android Auto sans fil. Le combiné d'instrumentation numérique de 5,3 pouces reste minimaliste, mais un affichage tête haute vient compléter l'information conducteur sur les versions supérieures.

Le coffre de 536 litres est l'un des plus généreux du segment, surpassant largement le VW ID.4 avec lequel il partage sa plateforme. La banquette arrière coulissante permet de moduler l'espace entre les passagers et le volume de chargement. L'habitabilité arrière est confortable pour trois adultes grâce à l'empattement allongé et au plancher plat.

Ford a également soigné l'expérience de conduite avec un châssis spécifiquement calibré pour le marché européen. La direction est plus directe et plus communicative que sur les modèles Volkswagen équivalents, et les suspensions offrent un excellent compromis entre confort et dynamisme. Le poids de 2 088 kg est bien maîtrisé grâce à une répartition des masses optimisée par la position basse de la batterie.

En termes de sécurité, le Ford Explorer EV embarque le pack BlueCruise 1.5 avec conduite semi-autonome de niveau 2 sur autoroute, un freinage automatique d'urgence avec détection des piétons et cyclistes, ainsi qu'un système d'évitement des collisions latérales. L'Euro NCAP lui a attribué la note maximale de 5 étoiles.

Éligible au bonus écologique grâce à sa fabrication à Cologne, le Ford Explorer EV se positionne comme une alternative sérieuse et séduisante face au Tesla Model Y et au Hyundai Ioniq 5, avec l'avantage d'un réseau de concessionnaires Ford dense et bien établi à travers toute la France.`,
    pointsForts: [
      "Autonomie exceptionnelle de 602 km WLTP",
      "Recharge rapide à 185 kW (10-80 % en 25 min)",
      "Coffre spacieux de 536 litres avec banquette coulissante",
      "Fabrication européenne (Cologne), éligible au bonus",
      "Écran SYNC Move de 14,6 pouces coulissant et intuitif",
    ],
    pointsFaibles: [
      "Poids élevé de 2 088 kg",
      "Pas de version à transmission intégrale au lancement",
      "Design qui peut dérouter les habitués du Ford Explorer américain",
      "Tarif en hausse par rapport au VW ID.4 malgré la plateforme commune",
    ],
    source: "https://www.ford.fr/voitures-electriques/explorer",
    dateMAJ: "2026-06-22",
  },

  // ─── FORD CAPRI EV ────────────────────────────────────────────────
  {
    slug: "ford-capri-ev",
    modele: "Ford Capri EV",
    marque: "Ford",
    marqueSlug: "ford",
    prixBase: 47000,
    prixOccasion: null,
    autonomieWLTP: 627,
    autonomieReelle: 500,
    batterieKwh: 77,
    conso: 15.0,
    puissanceCh: 286,
    puissanceKw: 210,
    chargeRapideKw: 185,
    tempsChargeRapide: "25 min (10-80 %)",
    tempsChargeAC: "7h45 (0-100 % sur 11 kW)",
    coffre: 572,
    poids: 2060,
    longueur: 4634,
    segment: "SUV-coupe",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "coupe", "grande-autonomie", "made-in-europe"],
    annee: 2024,
    description: `Le Ford Capri EV ressuscite un nom mythique de l'histoire automobile européenne sous une forme résolument moderne. Ce SUV-coupé 100 % électrique, construit lui aussi sur la plateforme MEB à l'usine de Cologne, se positionne comme le pendant sportif et élégant du Ford Explorer EV, tout comme le Volkswagen ID.5 complète la gamme de l'ID.4 chez le constructeur allemand.

La silhouette du Ford Capri EV est immédiatement reconnaissable avec son toit plongeant caractéristique du style coupé, qui évoque subtilement les lignes du Capri original des années 1970 sans tomber dans le passéisme. La face avant reprend les codes lumineux du Ford Explorer avec ses feux diurnes en C, tandis que l'arrière effilé et le bandeau lumineux pleine largeur confèrent au véhicule une personnalité distincte et résolument sportive. Avec ses 4 634 mm de longueur, le Capri EV est sensiblement plus long que l'Explorer, offrant des proportions allongées et dynamiques.

Le groupe motopropulseur reprend l'architecture de l'Explorer avec un moteur de 286 chevaux (210 kW) positionné sur l'essieu arrière. La propulsion, alliée à une répartition des masses soignée grâce à la batterie logée dans le plancher, offre un comportement routier particulièrement engageant. Le Ford Capri EV se montre vif et agile dans les virages, avec une direction précise et un train avant incisif qui justifient pleinement l'héritage sportif de son nom.

L'autonomie est le point fort majeur du Capri EV : avec 627 km WLTP, il se classe parmi les véhicules électriques les plus endurants du marché, toutes catégories confondues. La batterie de 77 kWh bénéficie d'un Cx optimisé grâce au profil aérodynamique du toit coupé, ce qui explique les 25 km supplémentaires par rapport à l'Explorer. En conditions réelles, une autonomie d'environ 500 km est accessible, un chiffre remarquable qui rend les grands trajets confortables même en hiver.

La recharge rapide en courant continu atteint 185 kW, permettant de passer de 10 à 80 % en 25 minutes. Le préconditionnement thermique de la batterie, activé automatiquement lorsque le GPS guide vers une borne rapide, garantit des temps de charge optimaux quelles que soient les conditions météorologiques. En courant alternatif sur borne 11 kW, comptez 7 heures 45 pour une charge complète.

L'intérieur du Capri EV hérite du système SYNC Move avec l'écran coulissant de 14,6 pouces, mais se distingue par une ambiance plus sportive. Les sièges avant offrent un maintien latéral renforcé, et les matériaux recyclés utilisés pour les garnissages témoignent de l'engagement environnemental de Ford. L'espace arrière est légèrement plus contraint que dans l'Explorer en raison du toit plongeant, mais reste acceptable pour deux adultes de taille moyenne.

Le coffre de 572 litres constitue une excellente surprise pour un SUV-coupé. Le hayon large et l'ouverture basse facilitent le chargement, et la modularité de la banquette 60/40 permet d'étendre la capacité pour les objets volumineux. Un frunk (coffre avant) de 63 litres complète l'offre de rangement.

La dotation en aides à la conduite est identique à celle de l'Explorer, avec le système BlueCruise 1.5, le freinage automatique d'urgence et la surveillance des angles morts. Le Ford Capri EV a obtenu 5 étoiles Euro NCAP, confirmant l'excellence de la plateforme MEB en matière de sécurité passive et active.

Fabriqué en Allemagne et éligible au bonus écologique, le Ford Capri EV s'adresse aux conducteurs qui désirent conjuguer style, performance et autonomie dans un format SUV-coupé. Il rivalise directement avec le Tesla Model Y, le Volkswagen ID.5 et le BMW iX1, mais se distingue par une identité visuelle forte et un agrément de conduite soigné qui font honneur à la légende Capri.`,
    pointsForts: [
      "Autonomie remarquable de 627 km WLTP",
      "Design coupé sportif à forte identité",
      "Coffre étonnamment spacieux (572 L) pour un SUV-coupé",
      "Recharge rapide 185 kW avec préconditionnement batterie",
      "Fabrication européenne (Cologne), éligible au bonus",
    ],
    pointsFaibles: [
      "Espace arrière réduit par le toit plongeant",
      "Prix supérieur à l'Explorer (+2 000 €) pour la même base technique",
      "Pas de transmission intégrale au lancement",
      "Garde au sol plus basse que l'Explorer (moins tout-chemin)",
    ],
    source: "https://www.ford.fr/voitures-electriques/capri",
    dateMAJ: "2026-06-22",
  },

  // ─── PORSCHE TAYCAN ───────────────────────────────────────────────
  {
    slug: "porsche-taycan",
    modele: "Porsche Taycan",
    marque: "Porsche",
    marqueSlug: "porsche",
    prixBase: 95000,
    prixOccasion: null,
    autonomieWLTP: 560,
    autonomieReelle: 440,
    batterieKwh: 93.4,
    conso: 19.6,
    puissanceCh: 408,
    puissanceKw: 300,
    chargeRapideKw: 270,
    tempsChargeRapide: "22 min (10-80 %)",
    tempsChargeAC: "9h30 (0-100 % sur 11 kW)",
    coffre: 407,
    poids: 2140,
    longueur: 4963,
    segment: "berline-sport",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["premium", "sportive", "grande-autonomie", "800V"],
    annee: 2024,
    description: `La Porsche Taycan est la berline électrique qui a redéfini les standards de performance et de plaisir de conduite dans le monde des véhicules à batterie. Lancée initialement en 2019 et profondément remaniée en 2024 avec la génération restylée, elle reste la référence incontestée pour tous ceux qui refusent de sacrifier le dynamisme sur l'autel de l'électrification. Produite à Zuffenhausen, berceau historique de Porsche, elle bénéficie d'un savoir-faire artisanal qui se ressent dans chaque aspect du véhicule.

Le design du Taycan allie la sportivité caractéristique de Porsche à une aérodynamique travaillée. Le Cx de 0,22 (parmi les meilleurs du segment) est obtenu grâce à des entrées d'air actives, un soubassement entièrement caréné et un spoiler arrière adaptatif. La longueur de 4 963 mm et la largeur généreuse confèrent à la voiture une stature imposante, tempérée par une ligne de toit basse et fluide qui évoque la 911. Les quatre portes et l'empattement long en font toutefois une vraie berline, capable d'accueillir confortablement quatre adultes.

Le coeur technologique du Taycan repose sur son architecture 800 volts, une première dans l'industrie automobile lors de son lancement. Cette tension élevée permet une recharge ultra-rapide en courant continu jusqu'à 270 kW, ramenant le temps de charge de 10 à 80 % à seulement 22 minutes. La batterie Performance Plus de 93,4 kWh (capacité nette) assure une autonomie de 560 km WLTP dans la version de base, soit environ 440 km en conditions réelles. La gestion thermique sophistiquée maintient les performances de la batterie même lors d'utilisations intensives répétées, un point souvent négligé par la concurrence.

Le moteur de la version d'entrée développe 408 chevaux (300 kW), avec un couple instantané qui propulse les 2 140 kg de la berline de 0 à 100 km/h en 5,4 secondes. Les versions Turbo et Turbo S vont bien au-delà, atteignant respectivement 680 et 952 chevaux. Mais même dans sa version de base, le Taycan offre des sensations de conduite exceptionnelles grâce à sa direction à assistance variable, ses suspensions pneumatiques adaptatives PASM et sa répartition des masses parfaitement équilibrée (49/51 avant/arrière).

L'intérieur du Taycan est un concentré de technologie et de raffinement. Le tableau de bord incurvé accueille un combiné d'instrumentation numérique de 16,8 pouces, un écran central de 10,9 pouces pour l'infodivertissement et, en option, un écran passager de 10,9 pouces. Le système Porsche Communication Management (PCM) est réactif, riche en fonctionnalités et compatible Apple CarPlay sans fil. Les matériaux sont irréprochables : cuirs fins, surfaces en aluminium brossé et finitions au millimètre.

Le coffre de 407 litres (arrière) est complété par un frunk de 84 litres, offrant un volume total de rangement convenable. La banquette arrière 60/40 permet d'étendre la capacité de chargement pour les occasions où la praticité prime sur le nombre de passagers.

En matière de sécurité, le Taycan est équipé de série d'un ensemble complet d'aides à la conduite incluant le régulateur de vitesse adaptatif avec fonction Stop & Go, le maintien de voie actif, le freinage d'urgence avec détection des piétons et la vision nocturne en option. Les freins PSCB (Porsche Surface Coated Brake) à revêtement carbure de tungstène offrent des distances d'arrêt réduites et une résistance à l'usure remarquable.

Non éligible au bonus écologique en raison de son prix, le Porsche Taycan s'adresse à une clientèle exigeante pour laquelle le plaisir de conduite et le prestige de la marque sont des critères déterminants. Il démontre brillamment qu'une voiture électrique peut être passionnante à conduire et reste, à ce jour, la berline sportive électrique de référence.`,
    pointsForts: [
      "Architecture 800V et recharge ultra-rapide à 270 kW",
      "Plaisir de conduite et dynamisme de référence dans le segment",
      "Qualité de fabrication Porsche irréprochable",
      "Autonomie de 560 km WLTP après le restylage 2024",
      "Gestion thermique exemplaire (performances stables sur circuit)",
    ],
    pointsFaibles: [
      "Prix d'entrée de 95 000 € (non éligible au bonus)",
      "Consommation élevée sur autoroute (environ 22 kWh/100 km)",
      "Coffre arrière limité à 407 litres",
      "Options onéreuses qui font grimper la facture",
    ],
    source: "https://www.porsche.com/france/models/taycan/",
    dateMAJ: "2026-06-22",
  },

  // ─── PORSCHE MACAN ELECTRIC ───────────────────────────────────────
  {
    slug: "porsche-macan-electric",
    modele: "Porsche Macan Electric",
    marque: "Porsche",
    marqueSlug: "porsche",
    prixBase: 85000,
    prixOccasion: null,
    autonomieWLTP: 591,
    autonomieReelle: 460,
    batterieKwh: 100,
    conso: 19.2,
    puissanceCh: 408,
    puissanceKw: 300,
    chargeRapideKw: 270,
    tempsChargeRapide: "22 min (10-80 %)",
    tempsChargeAC: "10h (0-100 % sur 11 kW)",
    coffre: 540,
    poids: 2230,
    longueur: 4784,
    segment: "SUV-sport",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["premium", "SUV", "sportive", "grande-autonomie", "800V"],
    annee: 2024,
    description: `Le Porsche Macan Electric représente la transformation complète du SUV le plus vendu de Porsche vers une motorisation 100 % électrique. Basé sur la plateforme Premium Platform Electric (PPE) développée conjointement avec Audi, il succède au Macan thermique avec l'ambition de devenir le SUV sportif électrique de référence. Produit à Leipzig, il bénéficie de tout le savoir-faire de Porsche en matière de dynamisme automobile.

Le design du Macan Electric évolue significativement par rapport à son prédécesseur thermique. Plus long de 59 mm (4 784 mm), plus large et plus bas, il adopte une silhouette résolument sportive avec un capot plongeant, des passages de roues sculptés et un arrière effilé doté d'un bandeau lumineux en trois dimensions. La signature lumineuse à quatre points rappelle celle du Taycan, créant une cohérence visuelle au sein de la gamme électrique Porsche. Les jantes de 20 pouces de série (jusqu'à 22 pouces en option) achèvent de lui conférer une présence visuelle spectaculaire.

L'architecture technique repose sur la plateforme 800 volts PPE, partagée avec l'Audi Q6 e-tron. La batterie de 100 kWh (capacité nette) est la plus généreuse du segment des SUV sportifs, offrant une autonomie WLTP de 591 km. En conditions réelles, environ 460 km sont envisageables, une valeur remarquable qui place le Macan Electric au sommet de sa catégorie. Le moteur de 408 chevaux (300 kW) en version de base entraîne les quatre roues via deux moteurs (un par essieu), avec une transmission intégrale à gestion vectorielle du couple.

La recharge rapide est un atout majeur grâce à l'architecture 800V. La puissance de charge en courant continu culmine à 270 kW, permettant de passer de 10 à 80 % en seulement 22 minutes. Porsche annonce la récupération de 100 km d'autonomie en à peine 5 minutes, un chiffre impressionnant qui réduit considérablement le temps passé aux bornes lors de longs voyages. En courant alternatif sur borne 11 kW, la charge complète nécessite environ 10 heures.

La conduite du Macan Electric est un véritable délice pour les amateurs d'automobiles. La direction est précise et communicative, les suspensions pneumatiques adaptatives PASM (de série) offrent un compromis remarquable entre confort et sportivité, et le centre de gravité abaissé grâce à la batterie dans le plancher procure une agilité surprenante pour un véhicule de plus de 2,2 tonnes. Le système Porsche Torque Vectoring Plus répartit le couple entre les quatre roues de manière intelligente, offrant une motricité exemplaire et un comportement neutre en virage.

L'intérieur du Macan Electric reprend les standards de qualité Porsche avec une planche de bord épurée dominée par un écran incurvé de 12,6 pouces pour l'instrumentation et un écran central de 10,9 pouces. Un affichage tête haute augmenté en réalité augmentée projette les informations de navigation directement sur le pare-brise. Le coffre de 540 litres est complété par un frunk de 84 litres, offrant une capacité totale supérieure à celle du Macan thermique.

Les aides à la conduite incluent le régulateur de vitesse adaptatif, le maintien de voie actif, le freinage d'urgence automatique et un système de stationnement automatisé. Le Porsche Macan Electric a obtenu la note maximale de 5 étoiles aux tests Euro NCAP 2024.

Non éligible au bonus écologique du fait de son tarif premium, le Macan Electric cible une clientèle fortunée et passionnée qui souhaite conjuguer le dynamisme Porsche avec une conscience environnementale. Il s'impose comme le SUV électrique le plus plaisant à conduire du marché, devant le BMW iX et le Mercedes EQE SUV, tout en offrant une autonomie et une vitesse de recharge de premier plan.`,
    pointsForts: [
      "Architecture 800V avec recharge ultra-rapide à 270 kW",
      "Autonomie généreuse de 591 km WLTP (batterie 100 kWh)",
      "Dynamisme de conduite Porsche exceptionnel (Torque Vectoring Plus)",
      "Coffre 540 L + frunk 84 L pour une vraie polyvalence",
      "5 étoiles Euro NCAP et équipement de sécurité complet",
    ],
    pointsFaibles: [
      "Prix élevé de 85 000 € avant options (non éligible au bonus)",
      "Poids conséquent de 2 230 kg",
      "Consommation importante sur autoroute",
      "Options coûteuses qui alourdissent considérablement la facture",
    ],
    source: "https://www.porsche.com/france/models/macan/",
    dateMAJ: "2026-06-22",
  },

  // ─── TOYOTA BZ4X ──────────────────────────────────────────────────
  {
    slug: "toyota-bz4x",
    modele: "Toyota bZ4X",
    marque: "Toyota",
    marqueSlug: "toyota",
    prixBase: 43000,
    prixOccasion: null,
    autonomieWLTP: 513,
    autonomieReelle: 380,
    batterieKwh: 71.4,
    conso: 16.7,
    puissanceCh: 218,
    puissanceKw: 160,
    chargeRapideKw: 150,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "9h30 (0-100 % sur 7,4 kW)",
    coffre: 452,
    poids: 1920,
    longueur: 4690,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["SUV", "familiale", "made-in-europe"],
    annee: 2024,
    description: `Le Toyota bZ4X est le premier SUV 100 % électrique de Toyota, lancé dans le cadre de la stratégie bZ (beyond Zero) du constructeur japonais. Développé conjointement avec Subaru sur la plateforme e-TNGA dédiée aux véhicules électriques, il marque un tournant historique pour un constructeur longtemps réticent à embrasser pleinement la mobilité électrique. Assemblé en Europe pour le marché européen, il se positionne face aux Volkswagen ID.4, Hyundai Ioniq 5 et Nissan Ariya.

Le design du bZ4X est audacieux et polarisant, avec une face avant sans calandre traditionnelle, des phares effilés reliés par un bandeau noir et un capot en position très basse. La silhouette de SUV compact, longue de 4 690 mm, offre un empattement particulièrement long de 2 850 mm qui maximise l'espace intérieur. Les passages de roues prononcés et le traitement plastique noir de la partie inférieure de la carrosserie lui confèrent un air de robustesse qui plaira aux amateurs de véhicules tout-chemin.

La motorisation de base propose deux moteurs électriques développant conjointement 218 chevaux (160 kW) en version à transmission intégrale (AWD), avec un moteur sur chaque essieu. La batterie lithium-ion de 71,4 kWh est garantie pour conserver au moins 90 % de sa capacité après 10 ans ou 240 000 km, un engagement de durabilité remarquable qui témoigne de l'expertise de Toyota en matière de gestion de batteries accumulée depuis 25 ans avec ses modèles hybrides.

L'autonomie WLTP atteint 513 km en version deux roues motrices, un chiffre qui descend à environ 380 km en conditions réelles. Sur autoroute en hiver, comptez plutôt 300 km, un point à prendre en compte pour les longs trajets. La consommation moyenne se situe autour de 16,7 kWh/100 km.

La recharge en courant continu a été améliorée depuis le lancement, avec une puissance maximale portée à 150 kW grâce à des mises à jour logicielles. Le temps de charge de 10 à 80 % est d'environ 30 minutes. En courant alternatif, le chargeur embarqué de 7,4 kW permet une recharge complète en 9 heures 30, un point perfectible dans un segment où le 11 kW est devenu la norme.

L'intérieur du bZ4X se distingue par un poste de conduite original avec un tableau de bord bas et un combiné d'instrumentation situé au-dessus du volant, rappelant l'approche Peugeot du i-Cockpit. L'écran central tactile de 12,3 pouces intègre le système Toyota Smart Connect avec navigation en temps réel, compatibilité Apple CarPlay et Android Auto sans fil, et assistant vocal. La qualité de fabrication est au niveau attendu de Toyota : assemblage impeccable, matériaux durables et ergonomie réfléchie.

Le coffre de 452 litres est suffisant pour un usage familial quotidien, et la banquette arrière rabattable 60/40 offre de la modularité. L'habitabilité arrière est généreuse grâce au long empattement et au plancher plat.

Toyota a équipé le bZ4X d'un ensemble complet d'aides à la conduite regroupées sous l'appellation Toyota Safety Sense 3. Cela inclut le freinage d'urgence avec détection des piétons et cyclistes de jour comme de nuit, le régulateur de vitesse adaptatif avec Stop & Go, le maintien de voie actif et l'alerte de franchissement de ligne. Le système de stationnement automatique Toyota Teammate facilite les manoeuvres en ville.

Éligible au bonus écologique grâce à son assemblage européen, le Toyota bZ4X bénéficie également de la réputation de fiabilité légendaire de Toyota et de son vaste réseau de concessionnaires. Il constitue un choix rassurant pour les conducteurs qui souhaitent passer à l'électrique avec un constructeur de confiance, même si sa fiche technique est un cran en dessous des meilleurs du segment en termes de vitesse de recharge et d'efficience.`,
    pointsForts: [
      "Garantie batterie exceptionnelle (90 % de capacité à 10 ans / 240 000 km)",
      "Fiabilité Toyota et réseau de concessionnaires très dense",
      "Transmission intégrale disponible avec deux moteurs",
      "Éligible au bonus écologique (assemblage européen)",
      "Toyota Safety Sense 3 complet de série",
    ],
    pointsFaibles: [
      "Chargeur embarqué AC limité à 7,4 kW (pas de 11 kW)",
      "Autonomie réelle en retrait sur autoroute et par temps froid",
      "Interface multimédia perfectible face à la concurrence",
      "Design intérieur qui peut diviser (instrumentation haute)",
    ],
    source: "https://www.toyota.fr/new-cars/bz4x",
    dateMAJ: "2026-06-22",
  },

  // ─── HONDA E:NY1 ──────────────────────────────────────────────────
  {
    slug: "honda-e-ny1",
    modele: "Honda e:Ny1",
    marque: "Honda",
    marqueSlug: "honda",
    prixBase: 39000,
    prixOccasion: null,
    autonomieWLTP: 412,
    autonomieReelle: 320,
    batterieKwh: 68.8,
    conso: 18.5,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 78,
    tempsChargeRapide: "45 min (10-80 %)",
    tempsChargeAC: "6h10 (0-100 % sur 11 kW)",
    coffre: 344,
    poids: 1860,
    longueur: 4387,
    segment: "SUV-urbain",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["SUV", "urbain", "chinoise"],
    annee: 2024,
    description: `Le Honda e:Ny1 est le premier SUV électrique de Honda commercialisé en Europe, succédant à la Honda e citadine dont la production a été arrêtée. Basé sur la plateforme e:N développée spécifiquement pour les véhicules électriques, il est fabriqué en Chine et importé en Europe, une stratégie qui le pénalise en termes d'éligibilité aux aides gouvernementales françaises mais qui permet à Honda de proposer un véhicule électrique compétitif en attendant ses futurs modèles produits localement.

Le design du Honda e:Ny1 est sobre et consensuel, avec des lignes épurées qui ne cherchent pas à choquer. La face avant arbore un bandeau lumineux intégré qui relie les phares LED affinés, tandis que la ligne de caisse fluide et le traitement soigné de l'arrière avec des feux en forme de L confèrent au véhicule une élégance discrète. Avec ses 4 387 mm de longueur, il s'inscrit dans le segment des SUV urbains compacts, idéal pour la conduite en ville tout en offrant suffisamment de présence pour les routes départementales et autoroutes.

Sous le capot, le moteur électrique développe 204 chevaux (150 kW) et 310 Nm de couple, entraînant les roues avant. La batterie lithium-ion de 68,8 kWh offre une autonomie WLTP de 412 km, soit environ 320 km en utilisation réelle. C'est un chiffre honnête pour le segment, bien que légèrement en retrait face aux concurrents directs comme le Hyundai Kona Electric ou le Kia Niro EV. La consommation de 18,5 kWh/100 km est supérieure à la moyenne du segment, signe que l'optimisation aérodynamique et la gestion énergétique restent perfectibles.

La recharge constitue le talon d'Achille du Honda e:Ny1. La puissance maximale en courant continu est limitée à 78 kW, un chiffre nettement en dessous de la concurrence qui propose couramment 100 à 150 kW. Le passage de 10 à 80 % nécessite environ 45 minutes, un temps qui alourdit sensiblement la durée des longs trajets avec arrêts recharge. En courant alternatif, le chargeur embarqué de 11 kW offre une charge complète en 6 heures 10 minutes, un point positif pour la recharge quotidienne à domicile.

L'intérieur du e:Ny1 brille par sa qualité de fabrication typiquement Honda. L'assemblage est impeccable, les matériaux sont agréables au toucher et l'ergonomie est intuitive. L'écran central tactile de 15,1 pouces est l'un des plus grands du segment et intègre un système multimédia développé en partenariat avec Google, comprenant Google Maps embarqué, l'assistant vocal Google et le Play Store. La compatibilité Apple CarPlay et Android Auto sans fil est de série. Le combiné d'instrumentation numérique de 10,25 pouces est clair et personnalisable.

Le coffre de 344 litres est le point faible notable du e:Ny1 en termes de praticité. Ce volume est inférieur à la plupart des concurrents du segment et peut s'avérer limitant pour une famille avec enfants. La banquette arrière est rabattable en 60/40 pour accroître la capacité de chargement. En revanche, l'habitabilité aux places arrière est satisfaisante avec un espace aux genoux et à la tête suffisant pour des adultes de taille moyenne.

La conduite du Honda e:Ny1 mise sur le confort plutôt que le dynamisme. La suspension absorbe bien les imperfections de la route, la direction est légère et précise à basse vitesse, et l'insonorisation est soignée. Honda propose trois modes de conduite (Sport, Normal, Eco) et un sélecteur de récupération d'énergie au volant qui permet d'ajuster le freinage régénératif. Le système Honda Sensing de série inclut le freinage automatique d'urgence, le régulateur adaptatif et le maintien de voie.

Non éligible au bonus écologique en raison de sa fabrication en Chine, le Honda e:Ny1 souffre d'un handicap prix sur le marché français. Il reste néanmoins un choix pertinent pour les fidèles de Honda qui apprécient la fiabilité et la qualité de finition de la marque, en attendant la prochaine génération de véhicules électriques Honda développés sur la plateforme dédiée Honda e:Architecture.`,
    pointsForts: [
      "Qualité de fabrication et fiabilité Honda reconnues",
      "Grand écran central de 15,1 pouces avec Google intégré",
      "Confort de conduite et insonorisation soignée",
      "Chargeur embarqué AC de 11 kW pour la recharge quotidienne",
    ],
    pointsFaibles: [
      "Charge rapide DC limitée à 78 kW (lent pour le segment)",
      "Non éligible au bonus écologique (fabrication en Chine)",
      "Coffre modeste de 344 litres",
      "Consommation élevée (18,5 kWh/100 km)",
      "Autonomie réelle en retrait face aux concurrents directs",
    ],
    source: "https://www.honda.fr/cars/e-ny1.html",
    dateMAJ: "2026-06-22",
  },

  // ─── NISSAN LEAF ──────────────────────────────────────────────────
  {
    slug: "nissan-leaf",
    modele: "Nissan Leaf",
    marque: "Nissan",
    marqueSlug: "nissan",
    prixBase: 35000,
    prixOccasion: 16000,
    autonomieWLTP: 385,
    autonomieReelle: 300,
    batterieKwh: 62,
    conso: 17.1,
    puissanceCh: 217,
    puissanceKw: 160,
    chargeRapideKw: 100,
    tempsChargeRapide: "40 min (20-80 %)",
    tempsChargeAC: "11h30 (0-100 % sur 6,6 kW)",
    coffre: 435,
    poids: 1730,
    longueur: 4480,
    segment: "compacte",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["compacte", "occasion", "made-in-europe"],
    annee: 2024,
    description: `La Nissan Leaf est la pionnière des voitures électriques grand public. Lancée en 2010, elle a été la première voiture électrique de grande série au monde et a contribué à démocratiser la mobilité zéro émission auprès de millions de conducteurs. La deuxième génération, commercialisée depuis 2018 et mise à jour en 2024 avec l'adoption du connecteur CCS Combo pour la recharge rapide, reste en vente aux côtés du Nissan Ariya plus moderne.

Le design de la Leaf deuxième génération a adopté des lignes plus conventionnelles que le modèle original, se rapprochant d'une compacte classique avec sa silhouette de berline à hayon. Longue de 4 480 mm, elle se situe dans le format des Volkswagen Golf et Peugeot 308. Les phares effilés à LED, la calandre fermée V-Motion et le profil aérodynamique lui confèrent une apparence moderne sans extravagance, un choix de style rassurant pour les conducteurs traditionnels qui hésitent encore à franchir le pas de l'électrique.

La version e+ embarque une batterie de 62 kWh alimentant un moteur de 217 chevaux (160 kW), offrant une autonomie WLTP de 385 km. En conditions réelles, environ 300 km sont accessibles, un chiffre correct mais qui place la Leaf en retrait face aux derniers arrivants du segment. La consommation de 17,1 kWh/100 km est supérieure à la moyenne du segment, reflet d'une plateforme qui accuse le poids des années malgré des mises à jour régulières.

La mise à jour 2024 a enfin apporté le connecteur CCS Combo pour la recharge rapide en courant continu, remplaçant le port CHAdeMO qui était devenu un handicap majeur en Europe avec la raréfaction des bornes compatibles. La puissance de charge rapide atteint désormais 100 kW, permettant un passage de 20 à 80 % en environ 40 minutes. En courant alternatif, le chargeur embarqué plafonne à 6,6 kW, nécessitant 11 heures 30 pour une charge complète, un point faible notable dans un segment où le 11 kW est devenu standard.

L'intérieur de la Leaf est fonctionnel et bien agencé. L'écran tactile central de 8 pouces intègre le système NissanConnect avec navigation, Apple CarPlay et Android Auto. Le combiné d'instrumentation numérique de 7 pouces affiche les informations de conduite essentielles. La qualité des matériaux est honnête sans être exceptionnelle, avec un assemblage rigoureux à la japonaise. Les sièges zéro gravité de Nissan offrent un confort appréciable lors des longs trajets.

Le coffre de 435 litres est l'un des plus généreux du segment des compactes électriques, surpassant celui de la Renault Mégane E-Tech et de la MG4. La banquette arrière rabattable 60/40 offre une bonne modularité. L'habitabilité arrière est correcte pour deux adultes, plus contrainte pour trois en raison du tunnel central résiduel.

La Leaf propose une fonctionnalité unique : l'e-Pedal, qui permet de conduire presque exclusivement avec la pédale d'accélérateur grâce à un freinage régénératif puissant qui immobilise complètement le véhicule lorsque la pédale est relâchée. Cette caractéristique, plébiscitée par les utilisateurs en ville, rend la conduite urbaine particulièrement reposante.

En matière de sécurité, le Nissan ProPILOT de série combine régulateur de vitesse adaptatif et maintien de voie pour une assistance à la conduite sur autoroute. Le freinage automatique d'urgence, la détection des angles morts et l'alerte de franchissement de ligne complètent la dotation.

La Nissan Leaf est un choix particulièrement pertinent en occasion, où elle représente l'une des meilleures affaires du marché électrique avec des prix à partir de 16 000 euros pour des exemplaires récents. Éligible au bonus écologique grâce à sa fabrication à Sunderland (Royaume-Uni, avec dérogation), elle reste une valeur sûre pour une première voiture électrique, portée par l'immense réseau Nissan et une fiabilité éprouvée par des millions de kilomètres parcourus à travers le monde.`,
    pointsForts: [
      "Pionnière de l'électrique, fiabilité éprouvée sur plus d'une décennie",
      "Excellent rapport qualité/prix en occasion (à partir de 16 000 €)",
      "Coffre généreux de 435 litres",
      "e-Pedal pour conduite à une pédale très appréciée en ville",
      "Passage au CCS Combo en 2024 (fin du CHAdeMO)",
    ],
    pointsFaibles: [
      "Plateforme vieillissante face à la concurrence récente",
      "Chargeur AC limité à 6,6 kW (charge lente à domicile)",
      "Autonomie réelle en retrait (environ 300 km)",
      "Consommation supérieure à la moyenne du segment",
      "Design intérieur daté malgré les mises à jour",
    ],
    source: "https://www.nissan.fr/vehicules/neufs/leaf.html",
    dateMAJ: "2026-06-22",
  },

  // ─── NISSAN ARIYA ─────────────────────────────────────────────────
  {
    slug: "nissan-ariya",
    modele: "Nissan Ariya",
    marque: "Nissan",
    marqueSlug: "nissan",
    prixBase: 41000,
    prixOccasion: null,
    autonomieWLTP: 530,
    autonomieReelle: 410,
    batterieKwh: 87,
    conso: 18.5,
    puissanceCh: 242,
    puissanceKw: 178,
    chargeRapideKw: 130,
    tempsChargeRapide: "30 min (20-80 %)",
    tempsChargeAC: "8h (0-100 % sur 11 kW)",
    coffre: 468,
    poids: 1950,
    longueur: 4595,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "grande-autonomie", "familiale"],
    annee: 2024,
    description: `Le Nissan Ariya est le fer de lance de la gamme électrique Nissan, un SUV compact qui capitalise sur la décennie d'expérience accumulée avec la Leaf pour proposer un véhicule résolument moderne. Construit sur la plateforme CMF-EV de l'Alliance Renault-Nissan-Mitsubishi, il partage sa base technique avec la Renault Mégane E-Tech tout en adoptant une personnalité et un gabarit distincts.

Le design de l'Ariya est l'un des plus réussis du segment. La face avant arbore le bouclier Shield éclairé, une réinterprétation moderne de la calandre V-Motion de Nissan qui crée un motif lumineux saisissant dans l'obscurité. Les lignes fluides et épurées de la carrosserie, la ligne de toit coupée et le traitement aérodynamique soigné confèrent au véhicule une élégance japonaise minimaliste qui se démarque dans un marché souvent dominé par des designs agressifs. Avec ses 4 595 mm de longueur, l'Ariya se positionne entre le segment compact et le familial, offrant un gabarit polyvalent.

La version à grande batterie (87 kWh) et deux roues motrices est la plus pertinente du catalogue. Son moteur de 242 chevaux (178 kW) offre des performances suffisantes pour un usage quotidien et routier, avec un 0 à 100 km/h en 7,5 secondes. L'autonomie WLTP de 530 km est l'une des meilleures du segment, et en conditions réelles, environ 410 km sont accessibles. La version e-4ORCE à transmission intégrale ajoute un moteur arrière pour un total de 306 chevaux, avec une autonomie WLTP réduite à 490 km.

La recharge en courant continu atteint 130 kW, permettant un passage de 20 à 80 % en 30 minutes. La courbe de charge est régulière et bien gérée, sans les chutes brutales observées sur certains concurrents. Le système de préconditionnement thermique de la batterie optimise les temps de charge lorsque le GPS guide vers une borne rapide. En courant alternatif, le chargeur embarqué de 11 kW (22 kW en option) complète une charge totale en 8 heures.

L'intérieur de l'Ariya est un modèle d'épure et de modernité. La planche de bord minimaliste intègre deux écrans de 12,3 pouces (instrumentation et multimédia) reliés par une bande noire continue. Les commandes tactiles haptiques sur la console centrale, rétroéclairées et affleurantes, renforcent l'impression de simplicité technologique. Les matériaux sont de bonne qualité avec des inserts en bois et des tissus recyclés. Le plancher plat et la console centrale coulissante créent un espace intérieur aéré et modulable.

Le coffre de 468 litres est bien dimensionné pour un usage familial, avec un seuil de chargement bas et une ouverture large. L'habitabilité arrière est particulièrement généreuse grâce à l'empattement long de 2 775 mm et à l'absence de tunnel de transmission. Trois adultes peuvent prendre place sans gêne excessive.

Le système de conduite assistée ProPILOT 2.0 offre une assistance semi-autonome sur autoroute avec navigation, permettant de changer de voie automatiquement et de gérer les entrées et sorties d'autoroute. Le freinage automatique d'urgence, la détection des piétons et cyclistes, et le système d'aide au stationnement ProPILOT Park complètent l'arsenal technologique.

Éligible au bonus écologique, le Nissan Ariya représente une alternative crédible et raffinée aux Volkswagen ID.4, Hyundai Ioniq 5 et Ford Explorer EV. Son ambiance intérieure zen, sa grande autonomie et la solidité du réseau Nissan en France en font un choix judicieux pour les familles qui souhaitent passer à l'électrique avec un constructeur éprouvé et une technologie de pointe.`,
    pointsForts: [
      "Grande autonomie de 530 km WLTP (batterie 87 kWh)",
      "Design intérieur minimaliste et moderne avec console coulissante",
      "ProPILOT 2.0 pour la conduite semi-autonome sur autoroute",
      "Habitabilité arrière remarquable (plancher plat, empattement long)",
      "Éligible au bonus écologique",
    ],
    pointsFaibles: [
      "Consommation élevée sur autoroute (environ 22 kWh/100 km)",
      "Poids conséquent de 1 950 kg",
      "Commandes tactiles haptiques pas toujours intuitives",
      "Réseau de recharge Nissan dédié inexistant (dépendance aux réseaux tiers)",
    ],
    source: "https://www.nissan.fr/vehicules/neufs/ariya.html",
    dateMAJ: "2026-06-22",
  },

  // ─── SERES 3 ──────────────────────────────────────────────────────
  {
    slug: "seres-3",
    modele: "Seres 3",
    marque: "Seres",
    marqueSlug: "seres",
    prixBase: 26000,
    prixOccasion: null,
    autonomieWLTP: 329,
    autonomieReelle: 260,
    batterieKwh: 53.6,
    conso: 18.0,
    puissanceCh: 163,
    puissanceKw: 120,
    chargeRapideKw: 60,
    tempsChargeRapide: "50 min (20-80 %)",
    tempsChargeAC: "8h (0-100 % sur 7,4 kW)",
    coffre: 420,
    poids: 1710,
    longueur: 4385,
    segment: "SUV-compact",
    origine: "Chine",
    aidesEligible: false,
    note: 6,
    tags: ["pas-cher", "SUV", "chinoise"],
    annee: 2024,
    description: `Le Seres 3 est un SUV compact électrique chinois qui se distingue avant tout par son positionnement tarifaire agressif. Commercialisé à partir de 26 000 euros, il figure parmi les SUV électriques les moins chers du marché européen et cible les conducteurs qui souhaitent accéder à la mobilité électrique sans se ruiner. Produit par le groupe DFSK (Dongfeng Sokon), le Seres 3 est distribué en France par un réseau de concessionnaires en développement.

Le design du Seres 3 est conventionnel et sans prise de risque. Les lignes douces et arrondies, la calandre fermée avec un discret bandeau chromé et les phares à LED bien dessinés composent une face avant agréable sans être mémorable. Le profil de SUV compact avec ses 4 385 mm de longueur est classique du segment, avec des proportions équilibrées et une garde au sol relevée. L'arrière est traité simplement avec des feux reliés par un bandeau et un pare-chocs en plastique noir. L'ensemble est soigné sans atteindre le niveau de finition des concurrents européens ou coréens.

Sous le capot, le moteur électrique de 163 chevaux (120 kW) assure des performances correctes pour un usage quotidien. L'accélération est linéaire et suffisante en ville comme sur route, même si le Seres 3 ne prétend à aucune sportivité. La batterie de 53,6 kWh offre une autonomie WLTP de 329 km, soit environ 260 km en conditions réelles. C'est un chiffre modeste qui cantonne le véhicule principalement à un usage urbain et périurbain, les longs trajets autoroutiers nécessitant des arrêts de recharge fréquents.

La recharge rapide est le point faible principal du Seres 3, avec une puissance maximale limitée à 60 kW en courant continu. Le passage de 20 à 80 % nécessite environ 50 minutes, un temps considérablement plus long que la concurrence. En courant alternatif, le chargeur embarqué de 7,4 kW permet une charge complète en 8 heures, un chiffre standard mais qui aurait pu être amélioré avec un chargeur de 11 kW.

L'intérieur du Seres 3 surprend positivement pour son niveau de prix. L'écran tactile central de 12,3 pouces est réactif et intègre un système multimédia avec navigation, Apple CarPlay et Android Auto. Le combiné d'instrumentation numérique de 10,25 pouces est clair et lisible. Les matériaux sont corrects : les sièges en simili-cuir sont confortables, les plastiques de la planche de bord sont acceptables même si certains éléments bas révèlent des économies. L'équipement de série est relativement généreux avec caméra de recul, climatisation automatique, capteurs de stationnement et aide au maintien de voie.

Le coffre de 420 litres est bien dimensionné pour le segment et constitue un argument face à des concurrents plus chers mais moins logeable. La banquette arrière se rabat en 60/40 pour étendre la capacité de chargement. L'habitabilité à l'arrière est correcte pour deux adultes, un peu juste pour trois.

La conduite du Seres 3 est orientée confort avec une suspension souple qui filtre bien les petites imperfections mais peut devenir flottante sur route dégradée. La direction manque de remontée d'informations et le freinage régénératif n'est pas très modulable. Les aides à la conduite incluent le freinage d'urgence, l'alerte de franchissement de ligne et l'aide au stationnement, un équipement basique mais fonctionnel.

Non éligible au bonus écologique en raison de sa fabrication en Chine, le Seres 3 voit son avantage prix partiellement neutralisé sur le marché français. Il reste néanmoins une option économique intéressante pour les conducteurs au budget serré qui recherchent un SUV électrique sans prétention, à condition d'accepter ses limitations en matière de recharge rapide et d'autonomie. Le réseau de distribution et le service après-vente en développement constituent un facteur à évaluer attentivement avant l'achat.`,
    pointsForts: [
      "Prix très attractif à partir de 26 000 €",
      "Coffre spacieux de 420 litres pour le segment",
      "Équipement de série relativement complet",
      "Confort de suspension adapté à la ville",
    ],
    pointsFaibles: [
      "Charge rapide très lente (60 kW max)",
      "Autonomie modeste de 329 km WLTP",
      "Non éligible au bonus écologique (fabrication Chine)",
      "Réseau de distribution et SAV encore embryonnaire en France",
      "Consommation élevée (18 kWh/100 km)",
    ],
    source: "https://www.sfrench.sfrench-auto.com/seres3",
    dateMAJ: "2026-06-22",
  },

  // ─── SERES 5 ──────────────────────────────────────────────────────
  {
    slug: "seres-5",
    modele: "Seres 5",
    marque: "Seres",
    marqueSlug: "seres",
    prixBase: 35000,
    prixOccasion: null,
    autonomieWLTP: 450,
    autonomieReelle: 350,
    batterieKwh: 68,
    conso: 17.0,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 80,
    tempsChargeRapide: "45 min (20-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 510,
    poids: 1930,
    longueur: 4703,
    segment: "SUV",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["SUV", "familiale", "chinoise"],
    annee: 2024,
    description: `Le Seres 5 est le grand frère du Seres 3 et représente l'offre premium du constructeur chinois DFSK sur le marché européen. Ce SUV de taille intermédiaire, long de 4 703 mm, monte en gamme par rapport au Seres 3 avec une batterie plus conséquente, un moteur plus puissant et un niveau de finition supérieur, tout en conservant un positionnement tarifaire compétitif face aux SUV électriques européens et coréens.

Le design du Seres 5 gagne en maturité et en présence par rapport au modèle inférieur. La face avant est dominée par une calandre fermée travaillée avec des motifs géométriques, encadrée par des phares LED élancés qui confèrent au véhicule un regard perçant. La silhouette est celle d'un SUV classique aux proportions harmonieuses, avec une ligne de toit légèrement plongeante vers l'arrière et des passages de roues marqués. L'arrière arbore des feux à LED reliés par un bandeau lumineux et un diffuseur intégré dans le bouclier inférieur. L'ensemble dégage une impression de qualité supérieure à son positionnement prix.

Le moteur électrique de 204 chevaux (150 kW) offre des performances satisfaisantes pour un SUV de cette taille. Le 0 à 100 km/h est abattu en 8,5 secondes, un chiffre dans la moyenne du segment. La batterie de 68 kWh assure une autonomie WLTP de 450 km, soit environ 350 km en conditions réelles. C'est une progression significative par rapport au Seres 3 et un chiffre qui rend les trajets plus longs envisageables, même si une pause recharge reste nécessaire au-delà de 300 km d'autoroute.

La recharge en courant continu accepte une puissance maximale de 80 kW, un chiffre qui reste en dessous des standards actuels du segment. Le passage de 20 à 80 % demande environ 45 minutes, un temps acceptable mais pas compétitif face aux 25-30 minutes proposées par les meilleurs concurrents. En courant alternatif, le chargeur embarqué de 11 kW représente une amélioration par rapport au Seres 3 et permet une charge complète en 7 heures 30, compatible avec une recharge nocturne sereine.

L'intérieur du Seres 5 monte clairement en gamme. L'écran central tactile de 15,6 pouces domine la planche de bord avec une définition élevée et une interface fluide. Le combiné d'instrumentation numérique de 12,3 pouces est clair et personnalisable. Les matériaux progressent nettement : les sièges en cuir synthétique sont moelleux et bien sculptés, les garnissages sont soignés et les plastiques de la partie supérieure du tableau de bord sont agréables au toucher. L'ambiance intérieure évoque des modèles bien plus onéreux.

Le coffre de 510 litres est spacieux et représente l'un des points forts du Seres 5. Le seuil de chargement est raisonnable et la forme régulière du volume permet un chargement efficace. La banquette arrière, rabattable en 60/40, offre un plancher quasi plat une fois repliée, facilitant le transport d'objets encombrants. L'habitabilité aux places arrière est généreuse avec un espace aux genoux et à la tête confortable pour trois adultes.

La conduite du Seres 5 privilégie le confort avec une suspension bien calibrée qui absorbe efficacement les défauts de la route. L'insonorisation est correcte et le moteur électrique offre des reprises franches en dépassement. Le freinage régénératif est réglable sur plusieurs niveaux via des palettes au volant, une fonctionnalité appréciable. Les aides à la conduite incluent le régulateur de vitesse adaptatif, le freinage d'urgence avec détection des piétons, le maintien de voie actif et la caméra 360 degrés.

Non éligible au bonus écologique, le Seres 5 reste malgré tout compétitif à 35 000 euros pour un SUV électrique aussi bien équipé et aussi spacieux. Il constitue une alternative intéressante pour les conducteurs pragmatiques qui privilégient l'espace et l'équipement au prestige de la marque, à condition d'accepter la lenteur de la recharge rapide et la jeunesse du réseau de distribution Seres en France.`,
    pointsForts: [
      "Rapport équipement/prix excellent pour un SUV de cette taille",
      "Coffre spacieux de 510 litres avec bonne modularité",
      "Autonomie de 450 km WLTP convenable pour le segment",
      "Grand écran central de 15,6 pouces et finition en progrès",
      "Chargeur AC de 11 kW inclus de série",
    ],
    pointsFaibles: [
      "Charge rapide DC limitée à 80 kW (en dessous du standard actuel)",
      "Non éligible au bonus écologique (fabrication Chine)",
      "Image de marque encore inconnue en France",
      "Poids élevé de 1 930 kg pour un SUV de ce segment",
    ],
    source: "https://www.seres-auto.fr/seres5",
    dateMAJ: "2026-06-22",
  },

  // ─── TESLA MODEL S ────────────────────────────────────────────────
  {
    slug: "tesla-model-s",
    modele: "Tesla Model S",
    marque: "Tesla",
    marqueSlug: "tesla",
    prixBase: 94990,
    prixOccasion: 45000,
    autonomieWLTP: 634,
    autonomieReelle: 510,
    batterieKwh: 100,
    conso: 17.5,
    puissanceCh: 670,
    puissanceKw: 493,
    chargeRapideKw: 250,
    tempsChargeRapide: "25 min (10-80 %)",
    tempsChargeAC: "11h (0-100 % sur 11 kW)",
    coffre: 793,
    poids: 2162,
    longueur: 4979,
    segment: "berline-luxe",
    origine: "US",
    aidesEligible: false,
    note: 9,
    tags: ["premium", "grande-autonomie", "sportive", "occasion"],
    annee: 2024,
    description: `La Tesla Model S est la berline qui a révolutionné l'industrie automobile en démontrant qu'une voiture électrique pouvait être à la fois luxueuse, performante et désirable. Lancée en 2012 et profondément remaniée en 2021 avec l'introduction du volant yoke et d'un nouvel intérieur minimaliste, elle reste le vaisseau amiral de la gamme Tesla et l'une des berlines électriques les plus accomplies au monde. Fabriquée à Fremont en Californie, elle incarne la vision d'Elon Musk d'une automobile électrique sans compromis.

Le design de la Model S a évolué avec subtilité au fil des années. La version actuelle arbore un profil de fastback épuré avec un coefficient de traînée de seulement 0,208, l'un des meilleurs de l'industrie automobile. La face avant sans calandre, les phares LED affinés et le hayon intégré dans les lignes fluides de la carrosserie créent une silhouette intemporelle. Avec ses 4 979 mm de longueur, elle s'inscrit dans le format des grandes berlines premium face aux BMW Série 5 et Mercedes Classe E.

La motorisation de la version Grande Autonomie à double moteur développe 670 chevaux (493 kW), permettant un 0 à 100 km/h en 3,2 secondes. La version Plaid va encore plus loin avec 1 020 chevaux et un 0-100 en 2,1 secondes, des performances dignes de supercars thermiques. La batterie de 100 kWh offre une autonomie WLTP de 634 km en version Grande Autonomie, soit environ 510 km en usage réel. C'est l'une des autonomies les plus élevées du marché, permettant de relier Paris à Lyon sans recharge intermédiaire.

La recharge sur le réseau propriétaire Tesla Supercharger V3 atteint 250 kW, permettant de récupérer de 10 à 80 % en environ 25 minutes. L'avantage du réseau Supercharger est sa fiabilité et sa densité en France, avec plus de 150 stations réparties sur le territoire. La compatibilité CCS permet également d'utiliser les bornes rapides des réseaux tiers (Ionity, TotalEnergies, Fastned). En courant alternatif, le chargeur embarqué de 11 kW permet une charge complète en 11 heures.

L'intérieur de la Model S est dominé par un écran central de 17 pouces orienté à l'horizontale, qui concentre la quasi-totalité des commandes du véhicule. L'absence de tableau de bord traditionnel (un simple écran de 12,3 pouces derrière le volant) et de commodos classiques peut dérouter les conducteurs habitués aux interfaces conventionnelles. Le volant yoke, controversé, est proposé en alternative au volant rond classique depuis 2023. La qualité des matériaux a progressé avec du cuir végan, du bois véritable et des finitions métalliques soignées.

Le coffre total de 793 litres (avant et arrière combinés) est remarquable pour une berline. Le frunk de 150 litres sous le capot avant offre un espace de rangement supplémentaire pratique. La banquette arrière rabattable permet de transformer la Model S en break improvisé. L'habitabilité arrière est correcte avec un espace confortable pour deux adultes, plus contraint pour trois.

Le système Autopilot de série offre un régulateur de vitesse adaptatif et un maintien de voie sur autoroute. L'option Full Self-Driving (FSD), controversée en Europe, ajoute des fonctionnalités de conduite autonome supervisée sur routes urbaines et péri-urbaines, bien que sa disponibilité reste limitée par les réglementations européennes.

Non éligible au bonus écologique en raison de sa fabrication américaine et de son prix, la Tesla Model S représente néanmoins une excellente affaire en occasion avec des exemplaires disponibles à partir de 45 000 euros. Elle reste la berline électrique de référence pour les conducteurs qui exigent l'alliance de la performance, de l'autonomie et de l'accès au réseau de recharge le plus fiable d'Europe. Son système de mises à jour over-the-air garantit que le véhicule continue de s'améliorer même après l'achat.`,
    pointsForts: [
      "Autonomie de référence (634 km WLTP) et performances exceptionnelles (670 ch)",
      "Réseau Supercharger Tesla dense et fiable en France et en Europe",
      "Volume de coffre total de 793 litres (frunk inclus)",
      "Mises à jour logicielles OTA qui améliorent le véhicule en continu",
      "Excellente valeur en occasion à partir de 45 000 €",
    ],
    pointsFaibles: [
      "Prix neuf élevé (94 990 €), non éligible au bonus",
      "Volant yoke controversé (volant rond disponible en option)",
      "Qualité d'assemblage inégale selon les lots de production",
      "Interface 100 % écran tactile peu ergonomique pour certaines commandes courantes",
    ],
    source: "https://www.tesla.com/fr_fr/models",
    dateMAJ: "2026-06-22",
  },

  // ─── KIA NIRO EV ──────────────────────────────────────────────────
  {
    slug: "kia-niro-ev",
    modele: "Kia Niro EV",
    marque: "Kia",
    marqueSlug: "kia",
    prixBase: 39990,
    prixOccasion: null,
    autonomieWLTP: 460,
    autonomieReelle: 370,
    batterieKwh: 64.8,
    conso: 16.2,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 80,
    tempsChargeRapide: "45 min (10-80 %)",
    tempsChargeAC: "6h30 (0-100 % sur 11 kW)",
    coffre: 475,
    poids: 1750,
    longueur: 4420,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "familiale", "made-in-europe"],
    annee: 2024,
    description: `Le Kia Niro EV deuxième génération est un crossover compact entièrement électrique qui incarne la philosophie de Kia : offrir un véhicule polyvalent, bien équipé et doté d'une garantie imbattable. Lancé en 2022, il succède au premier Niro EV qui avait contribué à faire connaître la marque coréenne dans le monde de l'électrique. Assemblé en Corée du Sud mais homologué comme véhicule européen grâce aux accords commerciaux, il est éligible au bonus écologique en France.

Le design du Niro EV deuxième génération rompt avec le style sage de son prédécesseur. La face avant adopte le nouveau langage stylistique Kia avec des phares diurnes en forme de boomerang et un bouclier sculptural qui intègre subtilement le port de recharge. L'élément de design le plus distinctif est le traitement bicolore du montant C, baptisé "Aero Blade", qui crée une rupture visuelle entre la carrosserie et le toit, donnant l'impression d'un toit flottant. Avec ses 4 420 mm de longueur, le Niro EV reste compact et facile à manoeuvrer en ville.

La motorisation repose sur un moteur de 204 chevaux (150 kW) alimenté par une batterie de 64,8 kWh. L'autonomie WLTP de 460 km est généreuse pour la taille de la batterie, signe d'une excellente efficience énergétique avec une consommation de seulement 16,2 kWh/100 km. En conditions réelles, environ 370 km sont accessibles, un chiffre qui couvre confortablement les besoins quotidiens et permet les escapades du week-end sans anxiété.

La recharge en courant continu est limitée à 80 kW, un chiffre en dessous de la moyenne du segment en 2024. Le passage de 10 à 80 % nécessite environ 45 minutes, un temps qui peut paraître long face aux 25-30 minutes des concurrents les plus rapides. C'est le principal compromis technique du Niro EV, probablement lié au choix d'une batterie de moindre capacité qui ne justifie pas une infrastructure de charge plus puissante. En courant alternatif, le chargeur embarqué de 11 kW permet une charge complète en 6 heures 30.

L'intérieur du Niro EV est bien pensé et agréable. Le double écran de 10,25 pouces (instrumentation et multimédia) est intégré dans un bandeau horizontal élégant. Le système Kia Connect offre la navigation en temps réel, les services connectés, Apple CarPlay et Android Auto sans fil. Les matériaux durables sont mis en avant : les sièges intègrent des tissus recyclés à partir de bouteilles plastiques et le cuir est remplacé par du similicuir biosourcé dans les versions hautes. L'ambiance est moderne et soucieuse de l'environnement.

Le coffre de 475 litres est l'un des plus généreux du segment des crossovers compacts électriques. La banquette arrière rabattable en 60/40 libère un plancher presque plat et un volume étendu considérable. L'habitabilité arrière est bonne avec un espace aux genoux suffisant pour des adultes de taille moyenne. Le plancher plat grâce à l'architecture électrique dédiée contribue au confort des passagers.

La dotation en aides à la conduite est complète avec le Highway Driving Assist 2 (HDA 2) qui combine le régulateur de vitesse adaptatif avec le centrage dans la voie et la gestion des changements de voie sur autoroute. Le freinage automatique d'urgence avec détection des piétons, cyclistes et véhicules en intersection, ainsi que l'alerte de trafic arrière lors des marches arrière sont de série.

La garantie Kia de 7 ans ou 150 000 km reste l'argument commercial le plus puissant du Niro EV. Elle couvre l'ensemble du véhicule, y compris la batterie, et offre une tranquillité d'esprit inégalée dans le segment. Éligible au bonus écologique, le Kia Niro EV s'adresse aux familles et aux conducteurs pragmatiques qui recherchent un crossover électrique fiable, spacieux et bien équipé, sans payer le prix d'un modèle premium.`,
    pointsForts: [
      "Garantie 7 ans / 150 000 km (batterie incluse)",
      "Coffre spacieux de 475 litres pour le segment",
      "Excellente efficience énergétique (16,2 kWh/100 km)",
      "Matériaux recyclés et biosourcés dans l'habitacle",
      "Éligible au bonus écologique",
    ],
    pointsFaibles: [
      "Charge rapide DC limitée à 80 kW (45 min pour 10-80 %)",
      "Design clivant avec le montant C bicolore",
      "Pas de transmission intégrale disponible",
      "Places arrière un peu justes pour trois adultes",
    ],
    source: "https://www.kia.com/fr/modeles/niro-ev.html",
    dateMAJ: "2026-06-22",
  },

  // ─── BYD TANG ─────────────────────────────────────────────────────
  {
    slug: "byd-tang",
    modele: "BYD Tang",
    marque: "BYD",
    marqueSlug: "byd",
    prixBase: 70000,
    prixOccasion: null,
    autonomieWLTP: 400,
    autonomieReelle: 310,
    batterieKwh: 108.8,
    conso: 24.0,
    puissanceCh: 517,
    puissanceKw: 380,
    chargeRapideKw: 120,
    tempsChargeRapide: "45 min (20-80 %)",
    tempsChargeAC: "12h (0-100 % sur 11 kW)",
    coffre: 235,
    poids: 2580,
    longueur: 4970,
    segment: "SUV-familial",
    origine: "Chine",
    aidesEligible: false,
    note: 7,
    tags: ["SUV", "familiale", "7-places", "chinoise", "grande-batterie"],
    annee: 2024,
    description: `Le BYD Tang est le vaisseau amiral de la gamme BYD en Europe, un imposant SUV familial 100 % électrique à sept places qui s'attaque au segment premium des grands SUV. Avec ses 4 970 mm de longueur et sa configuration trois rangées de sièges, il se positionne face au Mercedes EQB et au futur Volkswagen ID.Buzz en tant qu'alternative chinoise audacieuse pour les familles nombreuses.

Le design du BYD Tang adopte le langage stylistique "Dragon Face" de la marque, avec une face avant imposante dominée par une large bande chromée reliant les phares à LED Matrix. La silhouette massive mais élégante est caractérisée par des épaules marquées, une ligne de toit qui descend progressivement et un traitement arrière avec un bandeau lumineux traversant toute la largeur. Les jantes de 22 pouces (de série sur certaines finitions) renforcent la présence visuelle de ce mastodonte routier.

La motorisation est impressionnante sur le papier : deux moteurs électriques délivrent une puissance combinée de 517 chevaux (380 kW) et 680 Nm de couple, propulsant les 2 580 kg du véhicule de 0 à 100 km/h en seulement 4,6 secondes. La transmission intégrale de série offre une motricité exemplaire en toutes conditions. La batterie Blade LFP de 108,8 kWh est la plus grosse du catalogue BYD, mais son poids considérable et la masse du véhicule limitent l'autonomie WLTP à 400 km, soit environ 310 km en conditions réelles. Sur autoroute, la consommation peut grimper au-delà de 28 kWh/100 km, réduisant l'autonomie à 250-270 km.

La recharge en courant continu plafonne à 120 kW, un chiffre décevant pour une batterie de cette capacité. Le passage de 20 à 80 % nécessite environ 45 minutes, un temps long qui, combiné à l'autonomie modeste, rend les très longs trajets plus contraignants. Le préconditionnement de la batterie n'est pas aussi sophistiqué que celui des plateformes 800V des concurrents premium. En courant alternatif, la charge complète sur borne 11 kW demande environ 12 heures.

L'intérieur du Tang est richement équipé. Le grand écran central rotatif de 15,6 pouces (qui peut pivoter du format portrait au paysage) est la pièce maîtresse du tableau de bord, intégrant un système multimédia complet avec navigation, Apple CarPlay et Android Auto. Le combiné d'instrumentation numérique de 12,3 pouces et l'affichage tête haute complètent l'information conducteur. Les matériaux sont de bonne facture avec des sièges en cuir Nappa, des inserts en bois et un éclairage d'ambiance multicolore.

La configuration à sept places est le principal argument différenciant du Tang. Les deux premières rangées offrent un confort généreux, tandis que la troisième rangée est réservée à des enfants ou des trajets courts pour des adultes. Le coffre de 235 litres en configuration sept places est toutefois très limité, à peine suffisant pour quelques sacs. En configuration cinq places avec la troisième rangée rabattue, le volume de coffre remonte à plus de 940 litres, ce qui change radicalement la donne en termes de praticité.

Les aides à la conduite incluent le système DiPilot de BYD avec régulateur adaptatif, maintien de voie, freinage d'urgence automatique et surveillance des angles morts. Le système de caméras 360 degrés avec vue transparente du châssis facilite les manoeuvres de ce véhicule imposant.

Non éligible au bonus écologique en raison de sa fabrication en Chine et de son prix élevé de 70 000 euros, le BYD Tang se heurte à une concurrence premium européenne bien établie. Il reste cependant l'une des très rares options sept places entièrement électriques sur le marché, un créneau dans lequel il ne rencontre que très peu de rivaux directs, ce qui en fait un choix pertinent pour les grandes familles qui veulent une mobilité zéro émission.`,
    pointsForts: [
      "Configuration 7 places rare dans le segment électrique",
      "Puissance impressionnante (517 ch) et transmission intégrale de série",
      "Batterie Blade LFP de grande capacité (108,8 kWh)",
      "Équipement très riche avec écran rotatif 15,6 pouces",
      "Coffre modulable (235 L en 7 places, 940+ L en 5 places)",
    ],
    pointsFaibles: [
      "Coffre très réduit en configuration 7 places (235 L)",
      "Autonomie modeste au regard de la capacité batterie (400 km WLTP)",
      "Consommation élevée (24 kWh/100 km en moyenne, 28+ sur autoroute)",
      "Charge rapide limitée à 120 kW pour une si grosse batterie",
      "Non éligible au bonus, prix de 70 000 € en Chine",
    ],
    source: "https://www.byd.com/fr/car/tang",
    dateMAJ: "2026-06-22",
  },

  // ─── FIAT 600e ────────────────────────────────────────────────────
  {
    slug: "fiat-600e",
    modele: "Fiat 600e",
    marque: "Fiat",
    marqueSlug: "fiat",
    prixBase: 36000,
    prixOccasion: null,
    autonomieWLTP: 409,
    autonomieReelle: 320,
    batterieKwh: 54,
    conso: 15.4,
    puissanceCh: 156,
    puissanceKw: 115,
    chargeRapideKw: 100,
    tempsChargeRapide: "27 min (20-80 %)",
    tempsChargeAC: "5h30 (0-100 % sur 11 kW)",
    coffre: 360,
    poids: 1580,
    longueur: 4171,
    segment: "SUV-urbain",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "urbain", "compacte", "made-in-europe"],
    annee: 2024,
    description: `La Fiat 600e est le crossover urbain électrique de Fiat, positionnée au-dessus de la Fiat 500e dans la gamme de la marque italienne. Construite sur la plateforme eCMP2 de Stellantis à l'usine de Tychy en Pologne, elle partage sa base technique avec la Jeep Avenger électrique et l'Alfa Romeo Junior Elettrica, tout en cultivant une identité résolument Fiat avec son style chaleureux et accessible. Son nom fait référence à la Fiat 600 historique des années 1950, un clin d'oeil nostalgique que la marque italienne maîtrise parfaitement.

Le design de la Fiat 600e est rond et sympathique, fidèle à l'ADN de la marque. La face avant arbore un regard expressif avec des phares circulaires intégrés dans un bandeau lumineux, tandis que le logo Fiat trône fièrement au centre de la calandre fermée. Les lignes de carrosserie sont douces et fluides, avec des passages de roues galbe et un traitement arrière compact et épuré. Avec seulement 4 171 mm de longueur, la 600e reste extrêmement maniable en ville tout en offrant un gabarit de petit SUV qui procure une position de conduite surélevée appréciée des conducteurs urbains.

La motorisation est assurée par le moteur électrique Stellantis de 156 chevaux (115 kW), un groupe motopropulseur éprouvé que l'on retrouve dans plusieurs modèles du groupe. Il offre des performances vives en ville avec un couple instantané de 260 Nm, et des reprises suffisantes sur route. La batterie de 54 kWh autorise une autonomie WLTP de 409 km, soit environ 320 km en conditions réelles. C'est un chiffre très correct pour un SUV urbain et largement suffisant pour les trajets quotidiens domicile-travail et les sorties du week-end.

La recharge en courant continu atteint 100 kW, permettant de passer de 20 à 80 % en 27 minutes. La courbe de charge est bien gérée, maintenant un plateau élevé suffisamment longtemps pour des recharges rapides efficaces. En courant alternatif, le chargeur embarqué de 11 kW complète une charge en 5 heures 30, idéal pour la recharge nocturne à domicile ou au bureau.

L'intérieur de la Fiat 600e reprend les codes de la nouvelle génération Fiat. L'écran central tactile de 10,25 pouces intègre le système Uconnect avec navigation, Apple CarPlay et Android Auto sans fil. Le combiné d'instrumentation numérique de 7 pouces est complété par un affichage tête haute en option. L'ambiance est colorée et joyeuse, avec des matériaux recyclés qui rappellent l'engagement environnemental de la marque. Les sièges sont confortables et bien rembourrés, avec des garnissages en tissu recyclé ou en similicuir selon les finitions.

Le coffre de 360 litres est honnête pour le segment des SUV urbains et supérieur à celui de la Fiat 500e (185 L). La banquette arrière est rabattable en 60/40 pour étendre la capacité de chargement. L'habitabilité arrière est correcte pour deux adultes, un peu serrée pour trois. Le plancher plat de la batterie améliore le confort des passagers arrière avec un espace aux pieds sans tunnel central.

En matière de sécurité, la Fiat 600e est bien dotée avec le freinage automatique d'urgence avec détection des piétons et cyclistes, le maintien de voie actif, le régulateur de vitesse adaptatif, les capteurs de stationnement avec caméra de recul et la surveillance des angles morts. Le système de stationnement semi-automatique facilite les créneaux en milieu urbain.

Éligible au bonus écologique grâce à sa fabrication en Europe, la Fiat 600e s'adresse aux conducteurs urbains et périurbains qui recherchent un petit SUV électrique au caractère italien, polyvalent et bien dimensionné pour la vie citadine. Elle rivalise avec la Peugeot e-2008 et l'Opel Mokka Electric au sein même du groupe Stellantis, mais se distingue par son style plus expressif et son positionnement prix légèrement inférieur.`,
    pointsForts: [
      "Design italien chaleureux et gabarit urbain idéal (4 171 mm)",
      "Autonomie de 409 km WLTP sur la plateforme eCMP2 éprouvée",
      "Éligible au bonus écologique (production européenne en Pologne)",
      "Bonne charge rapide 100 kW (27 min pour 20-80 %)",
      "Habitacle joyeux avec matériaux recyclés",
    ],
    pointsFaibles: [
      "Coffre limité à 360 litres",
      "Puissance modeste (156 ch) en version unique",
      "Places arrière un peu justes pour trois adultes",
      "Prix supérieur à certains concurrents mieux dotés techniquement",
    ],
    source: "https://www.fiat.fr/fiat-600e",
    dateMAJ: "2026-06-22",
  },

  // ─── FIAT GRANDE PANDA ────────────────────────────────────────────
  {
    slug: "fiat-grande-panda",
    modele: "Fiat Grande Panda",
    marque: "Fiat",
    marqueSlug: "fiat",
    prixBase: 25000,
    prixOccasion: null,
    autonomieWLTP: 320,
    autonomieReelle: 250,
    batterieKwh: 44,
    conso: 15.5,
    puissanceCh: 113,
    puissanceKw: 83,
    chargeRapideKw: 100,
    tempsChargeRapide: "27 min (20-80 %)",
    tempsChargeAC: "4h30 (0-100 % sur 11 kW)",
    coffre: 361,
    poids: 1410,
    longueur: 3990,
    segment: "citadine",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["pas-cher", "citadine", "petite-voiture", "made-in-europe"],
    annee: 2024,
    description: `La Fiat Grande Panda est la nouvelle citadine électrique de Fiat qui vient compléter la gamme entre la mythique Fiat 500e et la Fiat 600e. Construite sur la plateforme Smart Car de Stellantis (la même que la Citroën ë-C3), elle représente la réponse de Fiat à la vague de citadines électriques abordables lancée par Renault avec la R5 E-Tech et par Citroën avec l'ë-C3. Son nom rend hommage à l'iconique Fiat Panda, l'une des voitures les plus populaires de l'histoire automobile italienne.

Le design de la Grande Panda est un hommage assumé à la Panda originale des années 1980 revisité pour le XXIe siècle. Les lignes sont géométriques et angulaires, avec des surfaces planes et des arêtes franches qui tranchent avec le style arrondi de la 500e et de la 600e. La face avant arbore un regard distinctif avec des phares rectangulaires à LED et un bandeau qui traverse toute la largeur du véhicule. Les flancs sont marqués par des nervures horizontales qui rappellent les stries de la Panda d'antan. Avec ses 3 990 mm de longueur, elle se glisse facilement dans les rues étroites des centres-villes européens tout en offrant un espace intérieur surprenant pour son gabarit.

Le moteur électrique de 113 chevaux (83 kW) est parfaitement calibré pour un usage urbain et périurbain. Les accélérations sont vives en ville grâce au couple instantané de l'électrique, et les performances sont suffisantes sur route pour dépasser en toute confiance. La batterie de 44 kWh offre une autonomie WLTP de 320 km, soit environ 250 km en conditions réelles. C'est un chiffre adapté à l'usage cible du véhicule : navettes quotidiennes, courses en ville et petites escapades sans prétendre aux grands trajets autoroutiers.

La recharge en courant continu atteint 100 kW, une valeur excellente pour le segment des citadines. Le passage de 20 à 80 % ne demande que 27 minutes, un temps parmi les meilleurs de la catégorie qui rend les arrêts recharge ponctuels très courts. En courant alternatif, le chargeur embarqué de 11 kW permet une charge complète en seulement 4 heures 30, une durée idéale pour la recharge nocturne ou pendant la journée de travail.

L'intérieur de la Grande Panda est fonctionnel et coloré, avec une approche résolument pratique. L'écran central tactile de 10,25 pouces intègre le système Uconnect avec navigation, Apple CarPlay et Android Auto. Le combiné d'instrumentation numérique est compact mais lisible. L'originalité réside dans les nombreux espaces de rangement astucieusement répartis dans l'habitacle, incluant une tablette rabattable devant le passager avant inspirée des tables d'avion. Les matériaux sont simples mais bien choisis, avec des plastiques recyclés et des tissus colorés.

Le coffre de 361 litres est remarquable pour une citadine de moins de 4 mètres, surpassant la Renault 5 E-Tech (326 L) et la Peugeot e-208 (309 L). La banquette arrière rabattable en 60/40 offre une modularité appréciable. L'habitabilité arrière est étonnamment correcte grâce à la forme optimisée de l'habitacle et au plancher plat, avec suffisamment de place pour deux adultes de taille moyenne.

La Grande Panda est bien dotée en aides à la conduite pour son segment : freinage automatique d'urgence avec détection des piétons, maintien de voie, régulateur de vitesse avec limiteur, capteurs de stationnement arrière et caméra de recul. L'ensemble est fonctionnel et non intrusif.

Éligible au bonus écologique grâce à sa production européenne, la Fiat Grande Panda se positionne comme l'une des citadines électriques les plus accessibles du marché avec un prix de départ à 25 000 euros avant aides. Elle cible les primo-accédants à l'électrique et les conducteurs urbains qui souhaitent un véhicule pratique, abordable et au caractère attachant. Son design distinctif et son nom chargé d'histoire lui confèrent une identité forte qui la distingue de la Citroën ë-C3 avec laquelle elle partage pourtant sa base technique.`,
    pointsForts: [
      "Prix attractif à 25 000 €, éligible au bonus écologique",
      "Coffre étonnamment spacieux (361 L) pour une citadine de 3,99 m",
      "Design rétro-moderne distinctif inspiré de la Panda originale",
      "Charge rapide 100 kW efficace (27 min 20-80 %)",
      "Recharge AC complète en seulement 4h30 sur 11 kW",
    ],
    pointsFaibles: [
      "Autonomie limitée à 320 km WLTP (250 km réels)",
      "Puissance modeste de 113 ch (pas une sportive)",
      "Équipement technologique basique sur les versions d'entrée",
      "Suspension ferme sur mauvaise route",
    ],
    source: "https://www.fiat.fr/grande-panda",
    dateMAJ: "2026-06-22",
  },

  // ─── ZEEKR X ──────────────────────────────────────────────────────
  {
    slug: "zeekr-x",
    modele: "Zeekr X",
    marque: "Zeekr",
    marqueSlug: "zeekr",
    prixBase: 42000,
    prixOccasion: null,
    autonomieWLTP: 440,
    autonomieReelle: 350,
    batterieKwh: 66,
    conso: 17.0,
    puissanceCh: 272,
    puissanceKw: 200,
    chargeRapideKw: 150,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "7h (0-100 % sur 11 kW)",
    coffre: 362,
    poids: 1825,
    longueur: 4432,
    segment: "SUV-compact",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["SUV", "compacte", "chinoise", "premium"],
    annee: 2024,
    description: `Le Zeekr X est le modèle d'entrée de la marque premium Zeekr, filiale haut de gamme du groupe chinois Geely (qui possède également Volvo, Polestar et Lotus). Ce SUV compact électrique ambitieux se positionne sur le segment premium face aux BMW iX1, Volvo EX30 et Tesla Model Y, avec la prétention de proposer un niveau d'équipement et de technologie supérieur à un prix compétitif. Lancé en Europe en 2024, il symbolise la montée en gamme des constructeurs chinois qui ne se contentent plus de concurrencer par le prix mais visent désormais le prestige.

Le design du Zeekr X est l'oeuvre du studio de design de Gothenburg, en Suède, dirigé par Stefan Sielaff, ancien responsable du design chez Bentley. Cette filiation se ressent dans les lignes tendues et le traitement soigné des surfaces. La face avant est dominée par des phares effilés à LED Matrix reliés par un bandeau lumineux, surmontant un bouclier sculptural aux entrées d'air fonctionnelles. La silhouette compact (4 432 mm de longueur) adopte un profil de crossover musclé avec un toit légèrement plongeant et des passages de roues prononcés. L'arrière arbore des feux en forme de flèche et un becquet intégré qui accentuent le dynamisme visuel.

La motorisation du Zeekr X en version propulsion arrière développe 272 chevaux (200 kW) et 343 Nm de couple, des valeurs qui placent ce SUV compact dans le haut du segment en matière de performances. Le 0 à 100 km/h est abattu en 5,8 secondes, une valeur sportive qui surpasse la plupart des concurrents directs. La version à transmission intégrale (double moteur) pousse la puissance à 428 chevaux pour un 0-100 en 3,7 secondes, un chiffre de hot hatch survitaminé.

La batterie de 66 kWh (technologie NMC de CATL) offre une autonomie WLTP de 440 km, soit environ 350 km en conditions réelles. La consommation de 17 kWh/100 km est correcte pour le gabarit et les performances du véhicule. La recharge en courant continu culmine à 150 kW grâce à l'architecture 400V, permettant un passage de 10 à 80 % en 28 minutes. La courbe de charge est bien gérée avec un plateau maintenu longtemps. En courant alternatif, le chargeur embarqué de 11 kW assure une charge complète en 7 heures.

L'intérieur du Zeekr X est un véritable écrin technologique. L'écran central AMOLED de 14,6 pouces est l'un des plus beaux du segment, avec des couleurs vibrantes, un contraste infini et une réactivité digne d'une tablette haut de gamme. Le système d'infodivertissement est basé sur un processeur Qualcomm Snapdragon 8295, le plus puissant du marché automobile, assurant une fluidité irréprochable. L'instrumentation numérique de 8,8 pouces, le toit panoramique en verre électrochrome et le système audio Harman Kardon 13 haut-parleurs sont de série sur toutes les finitions, un niveau d'équipement inédit à ce prix.

Les matériaux intérieurs surprennent par leur qualité. Le cuir Nappa, les inserts en aluminium brossé et le pavillon en microfibre alcantara créent une ambiance premium qui rivalise avec des véhicules deux fois plus chers. Les sièges avant sont ventilés, chauffants et massants, des fonctionnalités rarement proposées sous 50 000 euros.

Le coffre de 362 litres est le point faible du Zeekr X en termes de praticité. Ce volume, inférieur à celui de la plupart des SUV compacts du segment, peut s'avérer limitant pour une famille. La banquette arrière rabattable en 60/40 compense partiellement cette lacune. L'habitabilité arrière est correcte avec un empattement de 2 750 mm.

En matière de sécurité et d'aides à la conduite, le Zeekr X embarque 12 radars ultrasons, 5 radars millimetriques et 7 caméras haute définition. Le système de conduite assistée Zeekr Pilot offre un régulateur adaptatif, le maintien de voie actif, le freinage d'urgence avec détection des piétons et cyclistes, le stationnement automatique et l'alerte de trafic arrière.

Non éligible au bonus écologique en raison de sa fabrication en Chine, le Zeekr X doit convaincre par ses qualités intrinsèques plutôt que par un prix subventionné. Il y parvient brillamment grâce à un niveau d'équipement, de performances et de finition qui surclassent la concurrence à tarif équivalent. C'est le véhicule qui illustre le mieux la capacité des constructeurs chinois premium à rivaliser avec les marques européennes établies.`,
    pointsForts: [
      "Niveau d'équipement exceptionnel de série (toit électrochrome, sièges massants)",
      "Performances sportives (272 ch, 0-100 en 5,8 s en propulsion)",
      "Écran AMOLED 14,6 pouces avec processeur Snapdragon 8295",
      "Qualité de finition premium (cuir Nappa, alcantara)",
      "Charge rapide efficace à 150 kW",
    ],
    pointsFaibles: [
      "Non éligible au bonus écologique (fabrication Chine)",
      "Coffre limité à 362 litres pour un SUV compact",
      "Réseau de distribution Zeekr embryonnaire en France",
      "Image de marque encore inconnue du grand public",
      "SAV et valeur résiduelle incertains (marque récente en Europe)",
    ],
    source: "https://www.zeekr.com/eu/zeekr-x",
    dateMAJ: "2026-06-22",
  },
  // ─── FERRARI LUCE ──────────────────────────────────────────────────
  {
    slug: "ferrari-luce",
    modele: "Ferrari Luce",
    marque: "Ferrari",
    marqueSlug: "ferrari",
    prixBase: 550000,
    prixOccasion: null,
    autonomieWLTP: 530,
    autonomieReelle: 450,
    batterieKwh: 122,
    conso: 22.1,
    puissanceCh: 1050,
    puissanceKw: 772,
    chargeRapideKw: 350,
    tempsChargeRapide: "20 min (10-80 %)",
    tempsChargeAC: "6h15 (0-100 % sur 22 kW)",
    coffre: 597,
    poids: 2260,
    longueur: 5027,
    segment: "berline",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["grande-autonomie", "premium", "sportive"],
    annee: 2026,
    description: `La Ferrari Luce est un événement historique : le tout premier véhicule 100 % électrique de Maranello. Présentée le 25 mai 2026 sous le nom de code interne F222, la Luce (« lumière » en italien) incarne la vision de Ferrari pour l'électrification, sans compromis sur les performances, l'émotion de conduite et l'exclusivité qui définissent la marque au cheval cabré.

Le design extérieur, fruit de la collaboration entre le Centro Stile Ferrari et LoveFrom, le studio créatif fondé par Jony Ive (ex-Chief Design Officer d'Apple) et Marc Newson, rompt avec les codes traditionnels des GT Ferrari. Longue de 5,03 mètres, la Luce adopte un profil fluide et aérodynamique (Cx de 0,25) avec des aérodynamiques actifs à l'avant et à l'arrière pour maximiser l'appui à haute vitesse.

Sous cette carrosserie sculpturale se cache une architecture technique inédite. Quatre moteurs électriques à aimants permanents développent une puissance combinée de 1 050 ch (772 kW) et 990 Nm de couple. Les moteurs arrière concentrent 831 ch tandis que les deux moteurs avant apportent 282 ch, le tout piloté par une transmission intégrale intelligente. Le 0 à 100 km/h est expédié en 2,5 secondes, et la vitesse maximale dépasse les 310 km/h.

La batterie de 122 kWh (117 kWh utiles) est l'une des plus avancées du marché automobile, avec une densité énergétique record de 195 Wh/kg. L'architecture 800V permet une charge ultra-rapide jusqu'à 350 kW en courant continu : un arrêt de 20 minutes suffit pour récupérer de 10 à 80 % de charge. L'autonomie WLTP atteint 530 km, soit environ 450 km en conditions réelles, suffisant pour relier Paris à Lyon sans s'arrêter.

L'un des brevets les plus remarquables est le système « Torque Shift Engagement » : via les palettes au volant, le conducteur peut simuler des changements de rapport, recréant une sensation d'accélération progressive plutôt que la poussée linéaire typique des VE. Un accéléromètre capte les vibrations des essieux électriques (comme un micro de guitare électrique) pour générer une signature sonore authentique, et non synthétique.

L'intérieur refuse délibérément la tendance du tout-écran. Les commandes sont physiques : boutons, molettes et contacteurs en verre et aluminium anodisé. L'instrumentation combine deux dalles OLED superposées avec des aiguilles mécaniques prises en sandwich entre elles, un tour de force technique qui résume la philosophie Ferrari : la technologie au service de l'émotion, jamais l'inverse. Le système audio à 21 haut-parleurs délivre 3 000 W.

La Luce est aussi le tout premier modèle Ferrari à 5 places, avec un coffre de 597 litres, soit 124 litres de plus que le Purosangue. C'est une GT de voyage, capable d'emmener quatre adultes et leurs bagages sur de longs trajets avec un confort digne du segment ultra-premium.

À 550 000 € (prix de base en Europe), la Ferrari Luce se positionne bien au-dessus de la concurrence directe (Porsche Taycan Turbo GT à ~200 000 €, Rolls-Royce Spectre à ~400 000 €). Le prix se justifie par l'exclusivité de la marque, les 60+ brevets développés pour ce modèle et un niveau de personnalisation typiquement Ferrari. Les premières livraisons sont prévues au T4 2026 en Italie et au T1 2027 pour la France.`,
    pointsForts: [
      "Performances exceptionnelles (1 050 ch, 0-100 en 2,5 s, 310+ km/h)",
      "Charge ultra-rapide 350 kW : 10 à 80 % en 20 minutes",
      "Autonomie confortable de 530 km WLTP (450 km réels)",
      "Design signé LoveFrom (Jony Ive), plus de 60 brevets inédits",
      "Système Torque Shift Engagement simulant les changements de rapport",
      "Intérieur sans écrans géants, commandes physiques en verre et aluminium",
      "Coffre généreux de 597 litres, premier Ferrari 5 places",
      "Signature sonore authentique captée par accéléromètre (non synthétique)",
    ],
    pointsFaibles: [
      "Prix extrêmement élevé : 550 000 €, 2 à 5× plus cher que ses rivaux directs",
      "Poids de 2 260 kg, le plus lourd véhicule Ferrari de l'histoire",
      "Non éligible au bonus écologique (prix > 47 000 €)",
      "Consommation élevée de 22,1 kWh/100 km en cycle mixte",
      "Coût d'entretien et d'assurance Ferrari (réseau de concessionnaires restreint)",
      "Délais de livraison longs et disponibilité limitée (allocation sur liste d'attente)",
    ],
    source: "https://www.ferrari.com/en-EN/auto/ferrari-luce",
    dateMAJ: "2026-05-28",
    statut: "a-venir",
    sortiePrevue: "2026-2027",
  },

  // ─── PEUGEOT e-2008 ─────────────────────────────────────────────
  {
    slug: "peugeot-e-2008",
    modele: "Peugeot e-2008",
    marque: "Peugeot",
    marqueSlug: "peugeot",
    prixBase: 37400,
    prixOccasion: 22000,
    autonomieWLTP: 406,
    autonomieReelle: 310,
    batterieKwh: 54,
    conso: 15.8,
    puissanceCh: 156,
    puissanceKw: 115,
    chargeRapideKw: 100,
    tempsChargeRapide: "30 min (20-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 7,4 kW)",
    coffre: 434,
    poids: 1610,
    longueur: 4300,
    segment: "SUV-urbain",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["SUV", "compact", "bonus-ecologique"],
    annee: 2024,
    description: `Le Peugeot e-2008 est la version 100 % électrique du SUV urbain compact de Peugeot. Restylé en 2024 avec le nouveau design de la marque, il bénéficie du i-Cockpit avec un combiné d'instrumentation numérique compact et un écran central de 10 pouces. Équipé d'un moteur de 156 ch et d'une batterie de 54 kWh, il offre jusqu'à 406 km d'autonomie WLTP. La charge rapide 100 kW permet de passer de 20 à 80 % en 30 minutes. Son coffre de 434 litres et son gabarit compact (4,30 m) en font un SUV polyvalent pour la ville et les trajets périurbains. Il partage sa plateforme e-CMP avec les Opel Mokka Electric et DS 3 E-Tense.`,
    pointsForts: [
      "Design restylé séduisant avec le nouveau langage Peugeot",
      "Autonomie correcte de 406 km WLTP pour un SUV compact",
      "Coffre généreux de 434 litres",
      "i-Cockpit ergonomique et intérieur soigné",
      "Éligible au bonus écologique",
    ],
    pointsFaibles: [
      "Charge rapide limitée à 100 kW",
      "Prix plus élevé que les concurrents chinois",
      "Autonomie réelle autour de 310 km en conditions mixtes",
      "Pas de version à grosse batterie disponible",
    ],
    source: "https://www.peugeot.fr/nos-vehicules/suv-peugeot-2008/electrique.html",
    dateMAJ: "2026-06-22",
  },

  // ─── TESLA MODEL X ──────────────────────────────────────────────
  {
    slug: "tesla-model-x",
    modele: "Tesla Model X",
    marque: "Tesla",
    marqueSlug: "tesla",
    prixBase: 99990,
    prixOccasion: 55000,
    autonomieWLTP: 576,
    autonomieReelle: 470,
    batterieKwh: 100,
    conso: 18.9,
    puissanceCh: 670,
    puissanceKw: 493,
    chargeRapideKw: 250,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "11h (0-100 % sur 11 kW)",
    coffre: 2614,
    poids: 2352,
    longueur: 5057,
    segment: "SUV-premium",
    origine: "US",
    aidesEligible: false,
    note: 8,
    tags: ["grande-autonomie", "premium", "7-places", "performance"],
    annee: 2024,
    description: `Le Tesla Model X est le grand SUV premium de Tesla, reconnaissable à ses portes arrière Falcon Wing. Disponible en version Long Range (670 ch) et Plaid (1 020 ch), il combine des performances exceptionnelles avec une autonomie généreuse de 576 km WLTP. Son intérieur propose un écran de 17 pouces, une configuration jusqu'à 7 places et un coffre total de 2 614 litres. La charge sur Supercharger V3 à 250 kW permet de récupérer 10 à 80 % en 30 minutes. Malgré son gabarit imposant (5,05 m), il reste agile grâce à sa transmission intégrale Dual Motor et son centre de gravité bas.`,
    pointsForts: [
      "Autonomie exceptionnelle de 576 km WLTP",
      "Performances redoutables (670 ch, 0-100 en 3,8 s)",
      "Réseau Supercharger dense et fiable",
      "Configuration 6 ou 7 places avec grand coffre",
      "Portes Falcon Wing pratiques en stationnement serré",
    ],
    pointsFaibles: [
      "Prix très élevé : à partir de 99 990 €",
      "Non éligible au bonus écologique",
      "Poids de 2 352 kg pénalisant la consommation",
      "Qualité de finition inégale selon les lots de production",
      "Portes Falcon Wing fragiles et coûteuses en réparation",
    ],
    source: "https://www.tesla.com/fr_fr/modelx",
    dateMAJ: "2026-06-22",
  },

  // ─── JEEP AVENGER ELECTRIC ──────────────────────────────────────
  {
    slug: "jeep-avenger-electric",
    modele: "Jeep Avenger Electric",
    marque: "Jeep",
    marqueSlug: "jeep",
    prixBase: 37500,
    prixOccasion: null,
    autonomieWLTP: 400,
    autonomieReelle: 310,
    batterieKwh: 54,
    conso: 15.5,
    puissanceCh: 156,
    puissanceKw: 115,
    chargeRapideKw: 100,
    tempsChargeRapide: "24 min (20-80 %)",
    tempsChargeAC: "7h (0-100 % sur 11 kW)",
    coffre: 380,
    poids: 1595,
    longueur: 4084,
    segment: "SUV-urbain",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["SUV", "compact", "bonus-ecologique"],
    annee: 2024,
    description: `Le Jeep Avenger Electric est le premier SUV 100 % électrique de Jeep, élu Voiture européenne de l'année 2023. Construit sur la plateforme e-CMP de Stellantis, il adopte un style baroudeur typiquement Jeep avec une garde au sol rehaussée et des protections de carrosserie. Son moteur de 156 ch et sa batterie de 54 kWh offrent 400 km d'autonomie WLTP. Compact (4,08 m), il se faufile facilement en ville tout en proposant un look aventurier. La charge rapide à 100 kW permet de récupérer 20 à 80 % en 24 minutes. L'intérieur propose un écran central de 10,25 pouces et de nombreux rangements.`,
    pointsForts: [
      "Design baroudeur séduisant et identité Jeep forte",
      "Gabarit compact idéal pour la ville (4,08 m)",
      "Charge rapide efficace (24 min pour 20-80 %)",
      "Éligible au bonus écologique",
      "Garde au sol rehaussée par rapport aux concurrents",
    ],
    pointsFaibles: [
      "Coffre limité à 380 litres",
      "Pas de transmission intégrale malgré le badge Jeep",
      "Autonomie réelle autour de 310 km",
      "Charge rapide plafonnée à 100 kW",
    ],
    source: "https://www.jeep.fr/nouvelle-jeep-avenger/electrique",
    dateMAJ: "2026-06-22",
  },

  // ─── KIA EV9 ────────────────────────────────────────────────────
  {
    slug: "kia-ev9",
    modele: "Kia EV9",
    marque: "Kia",
    marqueSlug: "kia",
    prixBase: 73990,
    prixOccasion: null,
    autonomieWLTP: 541,
    autonomieReelle: 430,
    batterieKwh: 99.8,
    conso: 20.6,
    puissanceCh: 204,
    puissanceKw: 150,
    chargeRapideKw: 240,
    tempsChargeRapide: "24 min (10-80 %)",
    tempsChargeAC: "7h10 (10-100 % sur 11 kW)",
    coffre: 828,
    poids: 2614,
    longueur: 5015,
    segment: "SUV-7-places",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["grande-autonomie", "7-places", "premium", "800V"],
    annee: 2024,
    description: `Le Kia EV9 est le grand SUV familial électrique de Kia, long de 5,01 m et proposant une configuration 6 ou 7 places. Construit sur la plateforme E-GMP en architecture 800V, il accepte une charge ultra-rapide jusqu'à 240 kW, passant de 10 à 80 % en seulement 24 minutes. Sa batterie de 99,8 kWh offre jusqu'à 541 km d'autonomie WLTP. Disponible en propulsion ou transmission intégrale (jusqu'à 385 ch en version GT-Line AWD), il combine espace familial généreux, coffre de 828 litres et technologie embarquée avancée. Son design anguleux et futuriste en fait l'un des SUV électriques les plus distinctifs du marché.`,
    pointsForts: [
      "Architecture 800V : charge ultra-rapide 10-80 % en 24 min",
      "Espace intérieur exceptionnel avec 6 ou 7 places",
      "Coffre immense de 828 litres",
      "Autonomie généreuse de 541 km WLTP",
      "Design audacieux et premium",
    ],
    pointsFaibles: [
      "Prix élevé à partir de 73 990 €",
      "Non éligible au bonus écologique",
      "Poids de 2 614 kg pénalisant l'efficience",
      "Consommation élevée de 20,6 kWh/100 km",
      "Gabarit imposant peu adapté à la ville",
    ],
    source: "https://www.kia.com/fr/modeles/ev9/decouvrir/",
    dateMAJ: "2026-06-22",
  },

  // ─── BYD SEAL U ─────────────────────────────────────────────────
  {
    slug: "byd-seal-u",
    modele: "BYD Seal U",
    marque: "BYD",
    marqueSlug: "byd",
    prixBase: 37500,
    prixOccasion: null,
    autonomieWLTP: 500,
    autonomieReelle: 390,
    batterieKwh: 87,
    conso: 18.2,
    puissanceCh: 218,
    puissanceKw: 160,
    chargeRapideKw: 140,
    tempsChargeRapide: "34 min (10-80 %)",
    tempsChargeAC: "9h (0-100 % sur 11 kW)",
    coffre: 425,
    poids: 2090,
    longueur: 4785,
    segment: "SUV-familial",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["grande-autonomie", "SUV", "rapport-qualite-prix"],
    annee: 2024,
    description: `Le BYD Seal U est le SUV familial électrique de BYD, positionné sur le segment des SUV compacts premium. Long de 4,78 m, il offre un habitacle spacieux pour 5 passagers et un coffre de 425 litres. Équipé de la batterie Blade LFP de 87 kWh, il propose jusqu'à 500 km d'autonomie WLTP. Son moteur de 218 ch assure des performances correctes avec un 0-100 km/h en 8,1 secondes. L'intérieur se distingue par un écran central rotatif de 15,6 pouces et un équipement de série généreux incluant sièges chauffants/ventilés, pompe à chaleur et système audio 8 haut-parleurs.`,
    pointsForts: [
      "Autonomie généreuse de 500 km WLTP",
      "Prix agressif face aux concurrents européens",
      "Batterie Blade LFP robuste et sûre",
      "Équipement de série très complet",
      "Écran rotatif 15,6 pouces impressionnant",
    ],
    pointsFaibles: [
      "Non éligible au bonus écologique (fabrication Chine)",
      "Charge rapide limitée à 140 kW",
      "Réseau de concessionnaires BYD encore limité en France",
      "Coffre un peu juste pour le gabarit (425 L)",
      "Valeur de revente encore incertaine",
    ],
    source: "https://www.byd.com/fr/voitures-electriques/seal-u",
    dateMAJ: "2026-06-22",
  },

  // ─── BYD HAN ────────────────────────────────────────────────────
  {
    slug: "byd-han",
    modele: "BYD Han",
    marque: "BYD",
    marqueSlug: "byd",
    prixBase: 46990,
    prixOccasion: null,
    autonomieWLTP: 521,
    autonomieReelle: 410,
    batterieKwh: 85.4,
    conso: 17.8,
    puissanceCh: 517,
    puissanceKw: 380,
    chargeRapideKw: 120,
    tempsChargeRapide: "35 min (10-80 %)",
    tempsChargeAC: "9h30 (0-100 % sur 11 kW)",
    coffre: 410,
    poids: 2200,
    longueur: 4995,
    segment: "berline-premium",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["grande-autonomie", "premium", "performance", "berline"],
    annee: 2024,
    description: `La BYD Han est la berline premium de BYD, longue de près de 5 mètres. En version AWD Performance, elle embarque deux moteurs pour une puissance combinée de 517 ch et un 0-100 km/h en 3,9 secondes. Sa batterie Blade LFP de 85,4 kWh offre 521 km d'autonomie WLTP. L'intérieur premium propose un écran rotatif de 15,6 pouces, des sièges Nappa ventilés et un système audio Dynaudio 12 haut-parleurs. Son design élégant signé Wolfgang Egger (ex-Alfa Romeo, Audi) et son équipement pléthorique de série en font une alternative crédible aux berlines premium européennes à un prix nettement inférieur.`,
    pointsForts: [
      "Performances exceptionnelles (517 ch, 0-100 en 3,9 s)",
      "Autonomie de 521 km WLTP",
      "Équipement de série très haut de gamme",
      "Prix compétitif face aux berlines premium européennes",
      "Batterie Blade LFP, sécurité et durabilité",
    ],
    pointsFaibles: [
      "Charge rapide limitée à 120 kW, en retrait face à la concurrence",
      "Non éligible au bonus écologique",
      "Réseau après-vente BYD encore restreint",
      "Poids élevé de 2 200 kg",
      "Image de marque encore en construction en France",
    ],
    source: "https://www.byd.com/fr/voitures-electriques/han",
    dateMAJ: "2026-06-22",
  },

  // ─── LEXUS RZ 450e ──────────────────────────────────────────────
  {
    slug: "lexus-rz-450e",
    modele: "Lexus RZ 450e",
    marque: "Lexus",
    marqueSlug: "lexus",
    prixBase: 61000,
    prixOccasion: 42000,
    autonomieWLTP: 480,
    autonomieReelle: 370,
    batterieKwh: 71.4,
    conso: 16.8,
    puissanceCh: 313,
    puissanceKw: 230,
    chargeRapideKw: 150,
    tempsChargeRapide: "30 min (10-80 %)",
    tempsChargeAC: "9h30 (0-100 % sur 6,6 kW)",
    coffre: 522,
    poids: 2100,
    longueur: 4805,
    segment: "SUV-premium",
    origine: "EU",
    aidesEligible: false,
    note: 7,
    tags: ["premium", "SUV", "confort"],
    annee: 2024,
    description: `Le Lexus RZ 450e est le premier véhicule 100 % électrique dédié de Lexus. Construit sur la plateforme e-TNGA, ce SUV de 4,80 m propose une transmission intégrale avec deux moteurs (150 kW avant + 80 kW arrière) pour 313 ch. Sa batterie de 71,4 kWh offre jusqu'à 480 km d'autonomie WLTP. L'intérieur typiquement Lexus mise sur le confort et la qualité perçue avec des matériaux haut de gamme, un écran de 14 pouces et un système de direction steer-by-wire disponible en option. La finition et l'insonorisation sont au niveau attendu pour un véhicule premium japonais. Restylé en 2026, il gagne en puissance et en autonomie.`,
    pointsForts: [
      "Qualité de fabrication et finition exemplaires",
      "Confort de conduite et insonorisation remarquables",
      "Transmission intégrale de série",
      "Fiabilité et réseau Lexus reconnus",
      "Direction steer-by-wire innovante en option",
    ],
    pointsFaibles: [
      "Autonomie réelle en retrait (370 km)",
      "Charge rapide limitée à 150 kW",
      "Prix élevé pour la capacité de batterie proposée",
      "Non éligible au bonus écologique",
      "Interface multimédia moins intuitive que la concurrence",
    ],
    source: "https://www.lexus.fr/modeles/rz",
    dateMAJ: "2026-06-22",
  },

  // ─── ABARTH 600e ────────────────────────────────────────────────
  {
    slug: "abarth-600e",
    modele: "Abarth 600e",
    marque: "Abarth",
    marqueSlug: "abarth",
    prixBase: 42950,
    prixOccasion: null,
    autonomieWLTP: 334,
    autonomieReelle: 260,
    batterieKwh: 54,
    conso: 16.7,
    puissanceCh: 240,
    puissanceKw: 176,
    chargeRapideKw: 100,
    tempsChargeRapide: "27 min (10-80 %)",
    tempsChargeAC: "5h15 (0-100 % sur 11 kW)",
    coffre: 360,
    poids: 1635,
    longueur: 4171,
    segment: "citadine-sportive",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["sportive", "compact", "fun"],
    annee: 2024,
    description: `L'Abarth 600e est la déclinaison sportive électrique de la Fiat 600e. Disponible en version Turismo (240 ch) et Scorpionissima (280 ch), elle reprend la plateforme e-CMP de Stellantis avec une mise au point chassis spécifique Abarth. Le différentiel à glissement limité Torsen, les freins monoblocs de 380 mm et les pneus Michelin Pilot Sport EV assurent un comportement dynamique affûté. L'Abarth 600e revendique un 0-100 km/h en 5,9 secondes en version Scorpionissima. Un générateur de son Abarth Sound Generator reproduit une signature acoustique sportive. L'intérieur adopte des sièges sport Sabelt et des finitions spécifiques au scorpion.`,
    pointsForts: [
      "Comportement dynamique affûté (Torsen, Michelin Pilot Sport EV)",
      "Performances enthousiasmantes (240-280 ch, 0-100 en 5,9 s)",
      "Design compact et sportif distinctif",
      "Freinage performant (disques 380 mm monoblocs)",
      "Éligible au bonus écologique",
    ],
    pointsFaibles: [
      "Autonomie limitée à 334 km WLTP (260 km réels)",
      "Prix élevé pour une citadine (42 950 €)",
      "Charge rapide plafonnée à 100 kW",
      "Coffre réduit de 360 litres",
      "Son artificiel pas au goût de tous",
    ],
    source: "https://www.abarth.com/fr/600e",
    dateMAJ: "2026-06-22",
  },

  // ─── MAZDA MX-30 ────────────────────────────────────────────────
  {
    slug: "mazda-mx-30",
    modele: "Mazda MX-30",
    marque: "Mazda",
    marqueSlug: "mazda",
    prixBase: 33800,
    prixOccasion: 18000,
    autonomieWLTP: 200,
    autonomieReelle: 160,
    batterieKwh: 35.5,
    conso: 19,
    puissanceCh: 145,
    puissanceKw: 107,
    chargeRapideKw: 50,
    tempsChargeRapide: "36 min (20-80 %)",
    tempsChargeAC: "6h (0-100 % sur 6,6 kW)",
    coffre: 366,
    poids: 1720,
    longueur: 4395,
    segment: "crossover",
    origine: "EU",
    aidesEligible: true,
    note: 6,
    tags: ["compact", "design", "original"],
    annee: 2023,
    description: `Le Mazda MX-30 est le premier véhicule 100 % électrique de Mazda. Son design distinctif avec portes arrière antagonistes (« freestyle doors ») et son intérieur utilisant du liège recyclé en font un modèle atypique. Mazda a fait le choix controversé d'une petite batterie de 35,5 kWh pour limiter le poids et l'empreinte écologique de fabrication, offrant une autonomie de 200 km WLTP. Son moteur de 145 ch et son châssis typiquement Mazda (direction précise, amortissement soigné) procurent un plaisir de conduite supérieur à la moyenne du segment. Idéal pour un usage urbain quotidien, il convient moins aux longs trajets.`,
    pointsForts: [
      "Qualité de fabrication et matériaux nobles (liège, tissu recyclé)",
      "Plaisir de conduite, châssis et direction Mazda",
      "Design original avec portes freestyle",
      "Poids contenu grâce à la petite batterie",
      "Éligible au bonus écologique",
    ],
    pointsFaibles: [
      "Autonomie très limitée : 200 km WLTP (160 km réels)",
      "Charge rapide plafonnée à 50 kW seulement",
      "Portes arrière antagonistes peu pratiques au quotidien",
      "Prix élevé pour l'autonomie proposée",
      "Coffre réduit (366 L) à cause des portes spéciales",
    ],
    source: "https://www.mazda.fr/modeles/mx-30/",
    dateMAJ: "2026-06-22",
  },

  // ─── CITROËN ë-C5 AIRCROSS ─────────────────────────────────────
  {
    slug: "citroen-e-c5-aircross",
    modele: "Citroën ë-C5 Aircross",
    marque: "Citroën",
    marqueSlug: "citroen",
    prixBase: 39200,
    prixOccasion: null,
    autonomieWLTP: 520,
    autonomieReelle: 400,
    batterieKwh: 73,
    conso: 15.8,
    puissanceCh: 210,
    puissanceKw: 154,
    chargeRapideKw: 160,
    tempsChargeRapide: "27 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 580,
    poids: 1870,
    longueur: 4650,
    segment: "SUV-familial",
    origine: "FR",
    aidesEligible: true,
    note: 8,
    tags: ["grande-autonomie", "SUV", "confort", "familial", "made-in-france"],
    annee: 2025,
    description: `Le Citroën ë-C5 Aircross est le nouveau SUV familial électrique de Citroën, lancé en 2025. Construit sur la plateforme STLA Medium de Stellantis, il marque un saut technologique majeur par rapport à l'ancien C5 Aircross. Son moteur de 210 ch est alimenté par une batterie de 73 kWh offrant 520 km d'autonomie WLTP, parmi les meilleures du segment. La recharge rapide à 160 kW permet de récupérer 10 à 80 % en 27 minutes. Long de 4,65 m, il offre un habitacle spacieux avec les suspensions Advanced Comfort de Citroën et un coffre généreux de 580 litres. Son design reprend les codes du concept Oli avec une face avant moderne.`,
    pointsForts: [
      "Autonomie de pointe de 520 km WLTP",
      "Confort de suspension Advanced Comfort remarquable",
      "Coffre spacieux de 580 litres",
      "Charge rapide 160 kW efficace (27 min 10-80 %)",
      "Éligible au bonus écologique, fabriqué en France",
    ],
    pointsFaibles: [
      "Design clivant, en rupture avec le C5 Aircross précédent",
      "Prix en hausse par rapport à la version thermique",
      "Poids de 1 870 kg",
      "Pas encore de version à transmission intégrale",
    ],
    source: "https://www.citroen.fr/modeles/c5-aircross.html",
    dateMAJ: "2026-06-22",
    statut: "a-venir",
    sortiePrevue: "2025",
  },

  // ─── HYUNDAI IONIQ 9 ───────────────────────────────────────────
  {
    slug: "hyundai-ioniq-9",
    modele: "Hyundai IONIQ 9",
    marque: "Hyundai",
    marqueSlug: "hyundai",
    prixBase: 75000,
    prixOccasion: null,
    autonomieWLTP: 620,
    autonomieReelle: 490,
    batterieKwh: 110.3,
    conso: 19.4,
    puissanceCh: 218,
    puissanceKw: 160,
    chargeRapideKw: 350,
    tempsChargeRapide: "24 min (10-80 %)",
    tempsChargeAC: "9h (10-100 % sur 11 kW)",
    coffre: 620,
    poids: 2665,
    longueur: 5060,
    segment: "SUV-7-places",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["grande-autonomie", "7-places", "premium", "800V"],
    annee: 2025,
    description: `Le Hyundai IONIQ 9 est le vaisseau amiral de la gamme électrique Hyundai. Ce grand SUV de 5,06 m propose 6 ou 7 places dans un habitacle ultra-spacieux avec un empattement de 3,13 m. Construit sur la plateforme E-GMP en architecture 800V, il accepte une charge ultra-rapide jusqu'à 350 kW. Sa batterie de 110,3 kWh offre jusqu'à 620 km d'autonomie WLTP. Disponible en propulsion (218 ch) ou transmission intégrale (jusqu'à 325 ch), il se positionne comme une alternative au Kia EV9 avec un positionnement plus premium. Le design « Aerosthetic » combine aérodynamisme poussé et lignes musclées.`,
    pointsForts: [
      "Architecture 800V : charge 350 kW (10-80 % en 24 min)",
      "Autonomie exceptionnelle de 620 km WLTP",
      "Espace intérieur immense, 6 ou 7 places",
      "Batterie de 110,3 kWh, la plus grosse du segment",
      "Design premium et technologie de pointe",
    ],
    pointsFaibles: [
      "Prix estimé élevé (75 000 € et plus)",
      "Non éligible au bonus écologique",
      "Poids massif de 2 665 kg",
      "Consommation importante (19,4 kWh/100 km)",
      "Gabarit difficile en ville et en parking",
    ],
    source: "https://www.hyundai.com/fr/modeles/ioniq9.html",
    dateMAJ: "2026-06-22",
    statut: "a-venir",
    sortiePrevue: "2025",
  },

  // ─── VOLKSWAGEN ID.2 ───────────────────────────────────────────
  {
    slug: "volkswagen-id2",
    modele: "Volkswagen ID.2",
    marque: "Volkswagen",
    marqueSlug: "volkswagen",
    prixBase: 25000,
    prixOccasion: null,
    autonomieWLTP: 450,
    autonomieReelle: 350,
    batterieKwh: 56,
    conso: 14.2,
    puissanceCh: 226,
    puissanceKw: 166,
    chargeRapideKw: 175,
    tempsChargeRapide: "20 min (10-80 %)",
    tempsChargeAC: "5h30 (0-100 % sur 11 kW)",
    coffre: 490,
    poids: 1500,
    longueur: 4050,
    segment: "citadine-compacte",
    origine: "EU",
    aidesEligible: true,
    note: 8,
    tags: ["pas-cher", "citadine", "bonus-ecologique"],
    annee: 2026,
    description: `La Volkswagen ID.2 est la citadine électrique tant attendue de Volkswagen, annoncée à un prix cible inférieur à 25 000 €. Construite sur la nouvelle plateforme MEB Small Entry, elle promet 450 km d'autonomie WLTP avec une batterie de 56 kWh et un moteur de 226 ch. Sa charge rapide à 175 kW permettra de récupérer 10 à 80 % en seulement 20 minutes. Avec un coffre de 490 litres et une longueur de 4,05 m, l'ID.2 vise directement la Renault 5 E-Tech et la Citroën ë-C3. Son design inspiré du concept ID.2all mêle rondeurs néo-rétro et modernité.`,
    pointsForts: [
      "Prix cible agressif sous 25 000 €",
      "Autonomie généreuse de 450 km WLTP pour une citadine",
      "Charge rapide 175 kW : 10 à 80 % en 20 min",
      "Coffre spacieux de 490 litres",
      "Puissance généreuse de 226 ch",
    ],
    pointsFaibles: [
      "Pas encore commercialisée, spécifications préliminaires",
      "Prix final pourrait être supérieur à l'objectif annoncé",
      "Concurrence déjà installée (Renault 5, Citroën ë-C3)",
      "Date de lancement repoussée plusieurs fois",
    ],
    source: "https://www.volkswagen.fr/fr/modeles/id2.html",
    dateMAJ: "2026-06-22",
    statut: "a-venir",
    sortiePrevue: "2026",
  },

  // ─── SUZUKI eVITARA ─────────────────────────────────────────────
  {
    slug: "suzuki-evitara",
    modele: "Suzuki eVitara",
    marque: "Suzuki",
    marqueSlug: "suzuki",
    prixBase: 35000,
    prixOccasion: null,
    autonomieWLTP: 400,
    autonomieReelle: 310,
    batterieKwh: 61,
    conso: 16.5,
    puissanceCh: 174,
    puissanceKw: 128,
    chargeRapideKw: 150,
    tempsChargeRapide: "28 min (10-80 %)",
    tempsChargeAC: "8h (0-100 % sur 7,4 kW)",
    coffre: 410,
    poids: 1710,
    longueur: 4275,
    segment: "SUV-compact",
    origine: "EU",
    aidesEligible: true,
    note: 7,
    tags: ["SUV", "compact", "4x4", "bonus-ecologique"],
    annee: 2025,
    description: `Le Suzuki eVitara est le premier véhicule 100 % électrique de Suzuki, développé en partenariat avec Toyota sur la plateforme 27PL. Ce SUV compact de 4,27 m adopte la batterie LFP (lithium fer phosphate) de 61 kWh pour une autonomie de 400 km WLTP. Disponible en propulsion (174 ch) et en transmission intégrale AllGrip-e (184 ch avec deux moteurs), il propose un vrai mode 4x4, une rareté dans le segment. La charge rapide à 150 kW permet de récupérer 10 à 80 % en 28 minutes. Assemblé dans l'usine Suzuki de Gujarat en Inde, il vise le segment des SUV compacts accessibles face aux Kia EV3, Skoda Elroq et Hyundai Kona Electric.`,
    pointsForts: [
      "Version 4x4 AllGrip-e, rare dans le segment électrique",
      "Batterie LFP robuste et durable",
      "Prix compétitif pour un SUV compact",
      "Charge rapide correcte à 150 kW",
      "Éligible au bonus écologique",
    ],
    pointsFaibles: [
      "Marque peu connue dans l'électrique",
      "Autonomie réelle estimée autour de 310 km",
      "Coffre de 410 L un peu juste",
      "Réseau après-vente Suzuki moins dense que les généralistes",
      "Fabrication en Inde, perception qualité à confirmer",
    ],
    source: "https://www.suzuki.fr/automobile/evitara",
    dateMAJ: "2026-06-22",
    statut: "a-venir",
    sortiePrevue: "2025",
  },

  // ─── MERCEDES EQB ───────────────────────────────────────────────
  // (déjà dans la base, skip)

  // ─── RENAULT SCENIC E-TECH (variante longue autonomie) ─────────
  // (déjà dans la base sous Renault Scénic E-Tech, skip)

  // ─── JAGUAR I-PACE ──────────────────────────────────────────────
  {
    slug: "jaguar-i-pace",
    modele: "Jaguar I-Pace",
    marque: "Jaguar",
    marqueSlug: "jaguar",
    prixBase: 79990,
    prixOccasion: 32000,
    autonomieWLTP: 470,
    autonomieReelle: 360,
    batterieKwh: 90,
    conso: 22.0,
    puissanceCh: 400,
    puissanceKw: 294,
    chargeRapideKw: 104,
    tempsChargeRapide: "42 min (10-80 %)",
    tempsChargeAC: "12h45 (0-100 % sur 7,4 kW)",
    coffre: 656,
    poids: 2208,
    longueur: 4682,
    segment: "SUV-premium",
    origine: "EU",
    aidesEligible: false,
    note: 7,
    tags: ["premium", "SUV", "performance"],
    annee: 2023,
    description: `Le Jaguar I-Pace a été le premier SUV 100 % électrique d'un constructeur premium européen lors de son lancement en 2018, remportant les titres de Voiture européenne de l'année, Voiture mondiale de l'année et Voiture verte mondiale de l'année. Son design signé Ian Callum reste saisissant avec un profil de coupé surélevé. Ses deux moteurs développent 400 ch et 696 Nm pour un 0-100 km/h en 4,8 secondes. La batterie de 90 kWh offre 470 km WLTP. Bien que techniquement dépassé par la concurrence récente (charge rapide limitée à 104 kW), le I-Pace reste un choix convaincant, surtout en occasion où les prix ont fortement baissé.`,
    pointsForts: [
      "Design intemporel et distinctif",
      "Performances dynamiques (400 ch, 0-100 en 4,8 s)",
      "Coffre généreux de 656 litres",
      "Excellent comportement routier, châssis Jaguar",
      "Prix en occasion très attractifs (à partir de 32 000 €)",
    ],
    pointsFaibles: [
      "Charge rapide très lente (104 kW max), technologie 2018",
      "Consommation élevée de 22 kWh/100 km",
      "Système multimédia Pivi Pro perfectible",
      "Production arrêtée, plus disponible en neuf",
      "Autonomie réelle limitée à 360 km en hiver",
    ],
    source: "https://www.jaguar.fr/jaguar-range/i-pace/index.html",
    dateMAJ: "2026-06-22",
  },

  // ─── BMW iX3 ────────────────────────────────────────────────────
  {
    slug: "bmw-ix3",
    modele: "BMW iX3",
    marque: "BMW",
    marqueSlug: "bmw",
    prixBase: 69950,
    prixOccasion: 32000,
    autonomieWLTP: 460,
    autonomieReelle: 360,
    batterieKwh: 80,
    conso: 18.5,
    puissanceCh: 286,
    puissanceKw: 210,
    chargeRapideKw: 150,
    tempsChargeRapide: "32 min (10-80 %)",
    tempsChargeAC: "7h30 (0-100 % sur 11 kW)",
    coffre: 510,
    poids: 2185,
    longueur: 4734,
    segment: "SUV-compact-premium",
    origine: "EU",
    aidesEligible: false,
    note: 7,
    tags: ["premium", "SUV", "confort"],
    annee: 2024,
    description: `Le BMW iX3 est le SUV compact électrique de BMW, basé sur le X3 mais avec une motorisation 100 % électrique. Son moteur arrière de 286 ch et 400 Nm offre des performances dynamiques avec un 0-100 km/h en 6,8 secondes. La batterie de 80 kWh permet 460 km d'autonomie WLTP. La charge rapide à 150 kW récupère 10 à 80 % en 32 minutes. L'intérieur BMW est soigné avec le système iDrive 8, un écran incurvé de 12,3 + 14,9 pouces et un niveau de finition premium. Le coffre de 510 litres et l'espace arrière généreux en font un SUV familial convaincant. Disponible à des prix attractifs en occasion.`,
    pointsForts: [
      "Comportement routier dynamique, ADN BMW préservé",
      "Système iDrive 8 intuitif et complet",
      "Coffre pratique de 510 litres",
      "Finition et qualité perçue premium",
      "Prix attractifs en occasion (à partir de 32 000 €)",
    ],
    pointsFaibles: [
      "Propulsion uniquement, pas de transmission intégrale",
      "Charge rapide limitée à 150 kW",
      "Prix élevé en neuf (69 950 €)",
      "Non éligible au bonus écologique",
      "Design extérieur conservateur pour un VE",
    ],
    source: "https://www.bmw.fr/fr/models/bmw-ix3.html",
    dateMAJ: "2026-06-22",
  },

  // ─── MERCEDES EQC ──────────────────────────────────────────────
  // (Production arrêtée, skip)

  // ─── PORSCHE TAYCAN CROSS TURISMO ──────────────────────────────
  {
    slug: "porsche-taycan-cross-turismo",
    modele: "Porsche Taycan Cross Turismo",
    marque: "Porsche",
    marqueSlug: "porsche",
    prixBase: 99540,
    prixOccasion: 62000,
    autonomieWLTP: 490,
    autonomieReelle: 380,
    batterieKwh: 93.4,
    conso: 21.4,
    puissanceCh: 408,
    puissanceKw: 300,
    chargeRapideKw: 270,
    tempsChargeRapide: "22 min (5-80 %)",
    tempsChargeAC: "9h15 (0-100 % sur 11 kW)",
    coffre: 446,
    poids: 2320,
    longueur: 4974,
    segment: "shooting-brake",
    origine: "EU",
    aidesEligible: false,
    note: 9,
    tags: ["premium", "sportive", "break", "800V"],
    annee: 2024,
    description: `Le Porsche Taycan Cross Turismo est la version break surélevée du Taycan, combinant le plaisir de conduite Porsche avec une polyvalence accrue. Son architecture 800V permet une charge ultra-rapide à 270 kW, de 5 à 80 % en seulement 22 minutes. La batterie Performance Plus de 93,4 kWh offre 490 km d'autonomie WLTP. Le moteur de 408 ch (jusqu'à 761 ch en Turbo S) procure des performances de supercar avec un châssis de référence. Le toit surélevé de 20 mm et la garde au sol rehaussée améliorent l'habitabilité arrière et le coffre par rapport à la berline Taycan. Un shooting brake unique sur le marché électrique.`,
    pointsForts: [
      "Architecture 800V : charge 270 kW, 5-80 % en 22 min",
      "Plaisir de conduite incomparable, châssis Porsche",
      "Format break pratique et élégant",
      "Garde au sol rehaussée et mode Gravel disponible",
      "Autonomie correcte de 490 km WLTP",
    ],
    pointsFaibles: [
      "Prix très élevé (à partir de 99 540 €)",
      "Non éligible au bonus écologique",
      "Consommation élevée (21,4 kWh/100 km)",
      "Poids de 2 320 kg",
      "Coffre limité à 446 L malgré le format break",
    ],
    source: "https://www.porsche.com/france/models/taycan/taycan-cross-turismo/",
    dateMAJ: "2026-06-22",
  },

  // ─── BYD ATTO 2 ─────────────────────────────────────────────────
  {
    slug: "byd-atto-2",
    modele: "BYD Atto 2",
    marque: "BYD",
    marqueSlug: "byd",
    prixBase: 24990,
    prixOccasion: null,
    autonomieWLTP: 312,
    autonomieReelle: 240,
    batterieKwh: 45,
    conso: 16,
    puissanceCh: 176,
    puissanceKw: 130,
    chargeRapideKw: 65,
    tempsChargeRapide: "35 min (10-80 %)",
    tempsChargeAC: "4h30 (0-100 % sur 11 kW)",
    coffre: 400,
    poids: 1570,
    longueur: 4310,
    segment: "SUV-urbain",
    origine: "Chine",
    aidesEligible: false,
    note: 8,
    tags: ["pas-cher", "SUV", "citadine", "rapport-qualite-prix"],
    annee: 2025,
    description: `Le BYD Atto 2 est le SUV urbain d'entrée de gamme de BYD, lancé en France début 2025 à un prix choc de 24 990 €. Positionné face aux Peugeot e-2008, Jeep Avenger Electric et Renault 4 E-Tech, il adopte un format compact (4,31 m) idéal pour la ville tout en proposant un coffre de 400 litres et un habitacle spacieux pour 5 passagers. Son moteur de 176 ch (130 kW) et 290 Nm assure des performances vives avec un 0-100 km/h en 7,9 secondes. La batterie Blade LFP de 45 kWh offre 312 km d'autonomie WLTP. L'équipement de série est généreux : écran central rotatif de 12,8 pouces, instrumentation numérique de 10,25 pouces, caméra 360°, sièges chauffants, pompe à chaleur et système de conduite assistée. Le rapport équipement/prix est difficile à égaler sur le marché français.`,
    pointsForts: [
      "Prix imbattable de 24 990 €, le SUV électrique le moins cher",
      "Équipement de série pléthorique (caméra 360°, pompe à chaleur, sièges chauffants)",
      "Batterie Blade LFP robuste et sûre",
      "Gabarit compact (4,31 m) adapté à la ville",
      "Performances correctes (176 ch, 0-100 en 7,9 s)",
    ],
    pointsFaibles: [
      "Charge rapide très lente à 65 kW seulement",
      "Autonomie limitée à 312 km WLTP (240 km réels)",
      "Non éligible au bonus écologique (fabrication Chine)",
      "Réseau de concessionnaires BYD encore restreint en France",
      "Valeur de revente incertaine, marque récente en France",
    ],
    source: "https://www.byd.com/fr/voitures-electriques/atto-2",
    dateMAJ: "2026-06-22",
  },
];

// Helpers
export function getModeleBySlug(slug: string): Modele | undefined {
  return modeles.find((m) => m.slug === slug);
}

export function getModelesByMarque(marqueSlug: string): Modele[] {
  return modeles.filter((m) => m.marqueSlug === marqueSlug);
}

export function getModelesByTag(tag: string): Modele[] {
  return modeles.filter((m) => m.tags.includes(tag));
}

export function getAlternatives(modele: Modele, count = 4): Modele[] {
  return modeles
    .filter((m) => m.slug !== modele.slug && m.segment === modele.segment)
    .sort((a, b) => Math.abs(a.prixBase - modele.prixBase) - Math.abs(b.prixBase - modele.prixBase))
    .slice(0, count);
}
