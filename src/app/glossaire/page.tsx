import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorByline from "@/components/AuthorByline";
import { buildMetadata } from "@/lib/seo";
import { definedTermSetJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Glossaire voiture électrique : 30+ termes expliqués",
  description:
    "Glossaire complet de la voiture électrique : bonus écologique, kWh, WLTP, ZFE, borne de recharge, prime à la conversion et plus. Tous les termes expliqués simplement.",
  path: "/glossaire/",
});

const glossaire = [
  { term: "Véhicule électrique (VE)", description: "Automobile propulsée exclusivement par un ou plusieurs moteurs électriques alimentés par une batterie rechargeable. Aucune émission de CO2 à l'usage." },
  { term: "Bonus écologique", description: "Aide financière de l'État français accordée lors de l'achat ou de la location d'un véhicule neuf à faibles émissions. En 2026, il peut atteindre 4 000 euros pour un VE neuf sous conditions de revenus et de score environnemental." },
  { term: "Prime à la conversion", description: "Aide complémentaire au bonus écologique versée en contrepartie de la mise au rebut d'un ancien véhicule polluant (Crit'Air 3 ou plus). Elle peut atteindre 5 000 euros et est cumulable avec le bonus." },
  { term: "Borne de recharge", description: "Point de charge pour véhicules électriques, installé sur la voie publique, dans un parking ou à domicile (wallbox). Les bornes se distinguent par leur puissance : lente (3-7 kW), accélérée (11-22 kW) ou rapide (50-350 kW)." },
  { term: "Autonomie", description: "Distance maximale qu'un véhicule électrique peut parcourir avec une charge complète de batterie. L'autonomie varie selon les conditions de conduite, la température et le style de conduite." },
  { term: "kWh (kilowattheure)", description: "Unité de mesure de l'énergie stockée dans une batterie. Plus la capacité en kWh est élevée, plus l'autonomie potentielle est grande. Également utilisé pour mesurer la consommation (kWh/100 km)." },
  { term: "Batterie lithium-ion", description: "Technologie de batterie rechargeable la plus répandue dans les véhicules électriques. Elle offre une densité énergétique élevée et une durée de vie de plusieurs centaines de milliers de kilomètres." },
  { term: "Hybride rechargeable (PHEV)", description: "Véhicule combinant un moteur thermique et un moteur électrique avec une batterie rechargeable sur secteur. Permet de rouler en mode 100 % électrique sur de courtes distances (30 à 80 km), puis bascule en mode hybride." },
  { term: "WLTP", description: "Worldwide Harmonized Light Vehicles Test Procedure. Protocole de test standardisé utilisé en Europe pour mesurer la consommation et l'autonomie des véhicules. Plus réaliste que l'ancien cycle NEDC, mais l'autonomie réelle reste souvent inférieure de 10 à 20 %." },
  { term: "Crit'Air", description: "Système de vignettes classant les véhicules selon leur niveau d'émissions polluantes. Les véhicules électriques reçoivent la vignette Crit'Air 0 (la meilleure), garantissant un accès illimité aux zones à faibles émissions." },
  { term: "ZFE (Zone à Faibles Émissions)", description: "Périmètre urbain dans lequel la circulation est restreinte aux véhicules les moins polluants. En 2026, 43 agglomérations françaises de plus de 150 000 habitants appliquent des restrictions basées sur les vignettes Crit'Air." },
  { term: "Malus écologique", description: "Taxe appliquée à l'achat d'un véhicule neuf émettant du CO2, proportionnelle au niveau d'émissions. Les véhicules 100 % électriques en sont totalement exonérés." },
  { term: "Wallbox", description: "Borne de recharge murale installée à domicile ou en entreprise, délivrant une puissance de 7 à 22 kW. Plus rapide et plus sécurisée qu'une prise domestique standard, elle bénéficie d'un crédit d'impôt de 300 euros." },
  { term: "Charge rapide (DC)", description: "Recharge en courant continu à haute puissance (50 à 350 kW) permettant de récupérer 80 % de la batterie en 20 à 40 minutes. Principalement disponible sur les aires d'autoroute et les stations dédiées." },
  { term: "Charge AC (courant alternatif)", description: "Recharge en courant alternatif, la forme standard de recharge à domicile ou sur bornes publiques de faible puissance (3 à 22 kW). Le convertisseur embarqué dans le véhicule transforme le courant alternatif en courant continu." },
  { term: "Connecteur Type 2", description: "Standard européen de connecteur pour la recharge en courant alternatif. Équipe la quasi-totalité des bornes et véhicules électriques vendus en Europe." },
  { term: "Connecteur CCS (Combined Charging System)", description: "Standard européen de connecteur pour la recharge rapide en courant continu. Combine le connecteur Type 2 avec deux broches supplémentaires pour le courant continu haute puissance." },
  { term: "LOA (Location avec Option d'Achat)", description: "Formule de financement par location avec possibilité de racheter le véhicule en fin de contrat à un prix fixé à l'avance (valeur résiduelle). Aussi appelée leasing." },
  { term: "LLD (Location Longue Durée)", description: "Formule de location sans option d'achat, avec restitution obligatoire du véhicule en fin de contrat. Souvent assortie de services inclus (entretien, assistance)." },
  { term: "TCO (Total Cost of Ownership)", description: "Coût total de possession d'un véhicule sur une période donnée, incluant achat, énergie, entretien, assurance, décote et avantages fiscaux. Critère essentiel pour comparer électrique et thermique." },
  { term: "Freinage régénératif", description: "Système permettant de récupérer l'énergie cinétique lors des décélérations et freinages pour recharger la batterie. Augmente l'autonomie de 10 à 20 % en conduite urbaine et réduit l'usure des freins." },
  { term: "Batterie LFP (Lithium Fer Phosphate)", description: "Technologie de batterie plus durable et moins coûteuse que les batteries NMC. Supporte plus de 3 000 cycles de charge et tolère mieux les charges complètes. Utilisée par BYD, Tesla (gamme Standard) et de nombreux constructeurs chinois." },
  { term: "Batterie NMC (Nickel Manganèse Cobalt)", description: "Technologie de batterie offrant une densité énergétique élevée, privilégiée pour les véhicules nécessitant une grande autonomie. Plus sensible aux charges répétées à 100 % que les batteries LFP." },
  { term: "V2H (Vehicle-to-Home)", description: "Technologie permettant d'utiliser la batterie d'un véhicule électrique pour alimenter un domicile en électricité. Utile en cas de coupure de courant ou pour optimiser l'autoconsommation solaire." },
  { term: "V2G (Vehicle-to-Grid)", description: "Technologie permettant de réinjecter l'électricité stockée dans la batterie du véhicule vers le réseau électrique. Permet de participer à l'équilibrage du réseau et potentiellement de générer des revenus." },
  { term: "Leasing social", description: "Dispositif gouvernemental permettant aux ménages modestes de louer une voiture électrique neuve à partir de 100 euros par mois. Réservé aux foyers dont le revenu fiscal de référence par part est inférieur à 15 400 euros." },
  { term: "Score environnemental", description: "Indice attribué par l'ADEME évaluant l'empreinte carbone globale d'un véhicule, incluant la fabrication et le transport. Conditionne l'éligibilité au bonus écologique depuis 2024." },
  { term: "Droit à la prise", description: "Disposition légale permettant à tout copropriétaire ou locataire de faire installer une borne de recharge sur sa place de parking en copropriété, même sans l'accord de l'assemblée générale." },
  { term: "Puissance de charge (kW)", description: "Débit d'énergie lors de la recharge, exprimé en kilowatts. Plus la puissance est élevée, plus la recharge est rapide. Dépend à la fois de la borne et de la capacité d'acceptation du véhicule." },
  { term: "Autonomie réelle", description: "Distance effectivement parcourue dans des conditions réelles de conduite, par opposition à l'autonomie WLTP mesurée en laboratoire. Généralement inférieure de 10 à 25 % à l'autonomie WLTP, selon la température, la vitesse et le dénivelé." },
  { term: "Pompe à chaleur", description: "Système de chauffage et climatisation utilisant un cycle thermodynamique pour chauffer l'habitacle de manière plus efficace qu'une résistance électrique. Réduit la perte d'autonomie en hiver de 15 à 25 %." },
  { term: "Gigafactory", description: "Usine de production de batteries à très grande échelle. ACC (Stellantis-TotalEnergies-Mercedes) en France, CATL et BYD en Chine sont parmi les principaux acteurs mondiaux." },
  { term: "Préconditionnement", description: "Fonction permettant de chauffer ou refroidir la batterie et l'habitacle avant le départ, pendant que le véhicule est encore branché. Améliore l'autonomie et le confort sans puiser dans la batterie." },
  { term: "CAFE (Corporate Average Fuel Economy)", description: "Normes européennes imposant aux constructeurs automobiles une moyenne d'émissions de CO2 sur l'ensemble de leurs ventes. Le non-respect entraîne de lourdes amendes, incitant les constructeurs à augmenter la part de véhicules électriques dans leur gamme." },
  { term: "Programme ADVENIR", description: "Dispositif national de financement pour l'installation de bornes de recharge en copropriété, en entreprise et sur la voie publique. Prend en charge jusqu'à 50 % du coût d'installation." },
];

const jsonLd = definedTermSetJsonLd(glossaire);

export default function GlossairePage() {
  return (
    <>
      <Breadcrumb
        items={[{ name: "Glossaire", href: "/glossaire/" }]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="section" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <header style={{ marginBottom: 40 }}>
          <AuthorByline date="Juin 2026" />
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 38px)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Glossaire de la voiture électrique
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 640, lineHeight: 1.5 }}>
            {glossaire.length} termes essentiels pour comprendre la mobilité électrique,
            les aides à l&apos;achat, la recharge et les technologies de batterie.
          </p>
        </header>

        <div style={{ maxWidth: 780 }}>
          {glossaire.map((item) => (
            <div
              key={item.term}
              id={item.term.toLowerCase().replace(/[^a-zàâéèêëïôùûüç0-9]+/g, "-").replace(/-+$/, "")}
              style={{
                borderBottom: "1px solid var(--line)",
                padding: "20px 0",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 18,
                  marginBottom: 6,
                  color: "var(--ink)",
                }}
              >
                {item.term}
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
