import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import { faqParPage } from "@/data/faq-pages";
import Link from "next/link";
import { villes } from "@/data/villes";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = buildMetadata({
  title: "Bornes de recharge par ville : carte de France 2026",
  description:
    "Localisez les bornes de recharge dans " +
    villes.length +
    " villes de France : nombre de bornes, réseaux disponibles, tarifs et puissances. Trouvez la borne la plus proche.",
  path: "/recharge/bornes/",
});

export default function BornesIndexPage() {
  const regions = [...new Set(villes.map((v) => v.region))].sort();

  return (
    <>
      <Breadcrumb items={[{ name: "Recharge", href: "/recharge/" }, { name: "Bornes", href: "/recharge/bornes/" }]} />
      <section className="section" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <LastUpdated />
        <h1 className="section-title">
          Bornes de recharge par ville ({villes.length})
        </h1>
        <p className="section-sub">
          Trouvez les bornes de recharge pour voiture électrique près de chez
          vous. Emplacements, réseaux disponibles et tarifs.
        </p>

        {regions.map((region) => {
          const regionVilles = villes
            .filter((v) => v.region === region)
            .sort((a, b) => b.nombreBornes - a.nombreBornes);
          return (
            <div key={region} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 20, marginBottom: 12 }}>
                {region} ({regionVilles.length})
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: 10,
                }}
              >
                {regionVilles.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/recharge/bornes/${v.slug}/`}
                    className="carte-modele"
                    style={{ padding: 14 }}
                  >
                    <h3
                      className="carte-modele-nom"
                      style={{ marginBottom: 2, fontSize: 15 }}
                    >
                      {v.nom}
                    </h3>
                    <p
                      style={{
                        fontSize: 12,
                        color: "var(--muted)",
                        margin: 0,
                      }}
                    >
                      {v.nombreBornes} bornes
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {/* Contenu redactionnel */}
        <div className="prose" style={{ marginTop: 48, marginInline: "auto" }}>
          <h2>Guide pratique de la recharge publique en France en 2026</h2>
          <p>
            La France a franchi un cap historique en matière d&apos;infrastructure de recharge. Avec plus de <strong>150 000 points de charge publics</strong> déployés sur l&apos;ensemble du territoire en 2026, le pays depasse largement l&apos;objectif de 100 000 bornes fixe par le gouvernement pour fin 2025. Le maillage couvre désormais les autoroutes, les villes, les zones periurbaines et, de plus en plus, les zones rurales. Ce guide pratique vous explique tout ce que vous devez savoir pour recharger sereinement partout en France.
          </p>

          <h2>L&apos;état du réseau de recharge public français</h2>
          <p>Le déploiement des bornes de recharge en France a connu une accélération spectaculaire depuis 2022. En trois ans, le nombre de points de charge publics a triple. Cette croissance est portée par plusieurs facteurs : les obligations réglementaires pour les parkings publics et les immeubles neufs, les subventions du programme ADVENIR, les investissements massifs des opérateurs prives, et la demande croissante liée a l&apos;augmentation du parc de véhicules électriques (plus de 2 millions de véhicules électriques et hybrides rechargeables en circulation en France en 2026). La répartition géographique n&apos;est cependant pas uniforme. L&apos;Île-de-France, la région Auvergne-Rhone-Alpes et l&apos;Occitanie concentrent le plus grand nombre de bornes. Les zones rurales et certaines régions comme le Centre-Val de Loire ou la Bourgogne-Franche-Comte sont encore sous-equipees, bien que la situation s&apos;ameliore rapidement grâce aux programmes de déploiement portes par les syndicats d&apos;énergie locaux.</p>

          <h3>Les différents types de bornes</h3>
          <p>
            Il est essentiel de comprendre les différents types de bornes pour planifier correctement vos recharges :
          </p>
          <ul>
            <li><strong>Bornes AC lentes (3,7 a 7,4 kW) :</strong> Ce sont les bornes les plus basiques, souvent installées sur la voirie en ville ou dans les petits parkings publics. Elles délivrent du courant alternatif monophase et rechargent complètement un véhicule en 6 a 12 heures. Adaptées au stationnement de longue durée (nuit, journée de travail).</li>
            <li><strong>Bornes AC accélérées (11 a 22 kW) :</strong> Plus puissantes, elles utilisent le courant triphasé et permettent une recharge complete en 2 a 5 heures. On les trouve dans les parkings de supermarchés, les centres commerciaux, les parkings relais et les zones d&apos;activité. C&apos;est le type de borne le plus répandu en France.</li>
            <li><strong>Bornes DC rapides (50 kW) :</strong> Elles délivrent du courant continu directement dans la batterie, contournant le chargeur embarque du véhicule. Une recharge de 20 a 80 % prend environ 40 a 60 minutes. On les trouve principalement en périphérie des villes et dans les stations-service.</li>
            <li><strong>Bornes DC ultra-rapides (150 a 350 kW) :</strong> Les bornes haut de gamme, essentiellement presentes sur les aires d&apos;autoroute et les hubs de recharge. Elles permettent de récupérer 200 km d&apos;autonomie en 15 a 20 minutes. Tous les véhicules ne peuvent pas profiter de la puissance maximale : cela dépend du chargeur embarque DC du véhicule.</li>
          </ul>

          <h3>Les connecteurs : CCS, Type 2 et CHAdeMO</h3>
          <p>
            En Europe, deux standards de connecteurs dominent :
          </p>
          <ul>
            <li><strong>Type 2 (Mennekes) :</strong> Le connecteur standard européen pour la recharge en courant alternatif (AC). Tous les véhicules électriques vendus en Europe en sont équipés. C&apos;est le connecteur que vous utiliserez pour les bornes de 3,7 a 22 kW.</li>
            <li><strong>CCS Combo 2 (Combined Charging System) :</strong> Le connecteur standard européen pour la recharge rapide en courant continu (DC). Il combine le connecteur Type 2 avec deux broches DC supplémentaires. Tous les véhicules électriques récents en sont équipés, et toutes les bornes rapides installées depuis 2019 utilisent ce standard.</li>
            <li><strong>CHAdeMO :</strong> Un ancien standard japonais en voie de disparition en Europe. Seuls les Nissan Leaf et quelques anciens modèles l&apos;utilisent encore. Les nouvelles bornes ne l&apos;intègrent plus systématiquement.</li>
          </ul>
          <p>
            En pratique, si votre véhicule est équipé d&apos;une prise CCS Combo 2 (ce qui est le cas de tous les modèles vendus depuis 2020), vous pouvez vous connecter a n&apos;importe quelle borne publique en France. La question de la compatibilité des connecteurs est quasiment résolue.
          </p>

          <h2>Les principaux opérateurs de recharge en France</h2>
          <p>
            Le marche de la recharge publique en France est anime par une multitude d&apos;opérateurs, des grands groupes énergétiques aux start-ups spécialisées. Voici les principaux acteurs a connaître :
          </p>

          <h3>TotalEnergies</h3>
          <p>
            Le géant pétrolier français s&apos;est massivement positionne sur la recharge électrique, déployant son réseau <strong>TotalEnergies Charge</strong> sur les stations-service du groupe ainsi que dans des hubs de recharge dedies. TotalEnergies opere plus de 30 000 points de charge en France et vise 150 000 en Europe d&apos;ici 2030. Les bornes rapides TotalEnergies (50 a 300 kW) sont presentes sur de nombreuses aires d&apos;autoroute. Tarifs : 0,40 a 0,55 euros/kWh selon la puissance, avec des réductions pour les détenteurs de la carte Total Recharge.
          </p>

          <h3>Ionity</h3>
          <p>
            Consortium européen fonde par BMW, Ford, Hyundai, Mercedes et Volkswagen, <strong>Ionity</strong> opere un réseau de bornes ultra-rapides (350 kW) sur les autoroutes européennes. En France, Ionity compte environ 100 stations reparties sur les grands axes. Les bornes Ionity offrent une puissance maximale de 350 kW, permettant aux véhicules compatibles (Porsche Taycan, Hyundai Ioniq 5, Kia EV6) de recharger a une vitesse exceptionnelle. Tarifs : 0,39 euros/kWh avec l&apos;abonnement Ionity Passport (12,99 euros/mois), 0,79 euros/kWh sans abonnement.
          </p>

          <h3>Tesla Superchargers</h3>
          <p>
            Le réseau <strong>Supercharger</strong> de Tesla est progressivement ouvert aux véhicules d&apos;autres marques depuis 2023. En France, la majorité des stations Supercharger sont désormais accessibles à tous les véhicules équipés de CCS Combo 2, via l&apos;application Tesla. Le réseau compte environ 180 stations et plus de 2 000 bornes en France, avec des puissances allant de 72 a 250 kW. Tarifs pour les non-Tesla : 0,48 a 0,55 euros/kWh. Les propriétaires de Tesla bénéficient de tarifs préférentiels (0,36 a 0,44 euros/kWh).
          </p>

          <h3>Fastned</h3>
          <p>
            Opérateur néerlandais en croissance rapide, <strong>Fastned</strong> déploie des stations de recharge rapide reconnaissables à leur toiture jaune avec panneaux solaires. Les stations Fastned, situées le long des autoroutes et en périphérie des villes, offrent des bornes de 150 a 300 kW. Tarifs : 0,59 euros/kWh (standard), 0,45 euros/kWh (abonnement Gold Member a 12,99 euros/mois). Fastned se distingue par la fiabilité de ses bornes (taux de disponibilité supérieur a 98 %) et ses stations toujours éclairées et sécurisées.
          </p>

          <h3>Réseaux publics locaux</h3>
          <p>
            De nombreuses collectivités locales opèrent leurs propres réseaux de bornes via les syndicats d&apos;énergie départementaux. Ces réseaux, souvent sous les marques <strong>SDE</strong>, <strong>SDEV</strong>, <strong>SYDELA</strong> ou <strong>REV</strong>, couvrent principalement les zones periurbaines et rurales avec des bornes AC de 7 a 22 kW. Les tarifs sont généralement très compétitifs (0,20 a 0,30 euros/kWh), parfois même gratuits dans certaines communes. L&apos;accès se fait souvent via un badge de roaming (Chargemap, Freshmile).
          </p>

          <h3>Réseaux de supermarchés</h3>
          <p>
            Les grandes enseignes de distribution ont massivement investi dans la recharge. <strong>Lidl</strong> équipe progressivement tous ses magasins de bornes rapides (50 kW et plus). <strong>Leclerc</strong> propose des bornes gratuites sur de nombreux parkings (généralement 22 kW AC). <strong>Carrefour</strong>, <strong>Auchan</strong> et <strong>Intermarche</strong> déploient également des stations, souvent en partenariat avec des opérateurs specialises. La recharge chez les supermarchés est idéale pour les achats hebdomadaires : 30 a 45 minutes de courses suffisent pour récupérer une charge significative.
          </p>

          <h2>Comment trouver une borne : les applications indispensables</h2>
          <p>
            Plusieurs applications et services vous permettent de localiser les bornes de recharge, de vérifier leur disponibilité en temps réel, et de payer la recharge :
          </p>
          <ul>
            <li><strong>Chargemap :</strong> L&apos;application française de référence, créée en 2011. Base de données collaborative de plus de 700 000 bornes en Europe, avec des avis d&apos;utilisateurs, des photos, et la disponibilité en temps réel pour de nombreux réseaux. Le badge Chargemap Pass donne accès à la majorité des réseaux en France et en Europe.</li>
            <li><strong>ABRP (A Better Route Planner) :</strong> L&apos;application de planification d&apos;itinéraire la plus performante pour les véhicules électriques. Elle calcule automatiquement les arrêts de recharge nécessaires pour un trajet donne, en tenant compte de la consommation réelle du véhicule, de la météo, du relief et des tarifs. Indispensable pour les longs trajets.</li>
            <li><strong>Application constructeur :</strong> Tesla, Renault, Peugeot, BMW et la plupart des constructeurs intègrent un planificateur de trajet avec bornes de recharge dans leur système de navigation embarque. Ces systèmes prechauffent automatiquement la batterie avant l&apos;arrivée à la borne pour optimiser la vitesse de charge.</li>
            <li><strong>Google Maps et Apple Plans :</strong> Les deux navigateurs les plus utilises intègrent désormais les bornes de recharge avec des filtres par puissance et par réseau. La disponibilité en temps réel est encore inegale mais s&apos;ameliore continuellement.</li>
            <li><strong>PlugShare :</strong> Application internationale avec une communauté active. Particulièrement utile pour les voyages a l&apos;étranger.</li>
          </ul>

          <h2>Cartes et badges de recharge : quel système choisir ?</h2>
          <p>
            En France, trois systèmes de paiement coexistent pour la recharge publique :
          </p>

          <h3>Le paiement par badge (RFID)</h3>
          <p>
            La méthode la plus répandue et la plus pratique. Vous obtenez un badge physique (carte ou porte-cles) associe a un compte client, et vous le présentez sur le lecteur de la borne pour démarrer la recharge. La facturation est automatique et la facture est envoyée par email. Les principaux badges multi-reseaux :
          </p>
          <ul>
            <li><strong>Chargemap Pass :</strong> Accès a plus de 600 000 bornes en Europe. Pas d&apos;abonnement, badge a 19,90 euros (achat unique). Tarification transparente affichée dans l&apos;application avant la recharge. C&apos;est le badge le plus polyvalent en France.</li>
            <li><strong>Shell Recharge :</strong> Accès a un large réseau, facturation mensuelle. Intégration avec la carte Shell pour centraliser les depenses énergétiques (carburant + électricité).</li>
            <li><strong>Electroverse (Octopus Energy) :</strong> Tarifs souvent inférieurs à la moyenne grâce au modèle économique d&apos;Octopus. Facturation mensuelle avec un releve détaillé.</li>
            <li><strong>Badge constructeur :</strong> Mercedes me Charge, BMW Charging, Kia Charge, Hyundai Bluelink... Chaque constructeur propose son badge avec des tarifs negocies sur certains réseaux.</li>
          </ul>

          <h3>Le paiement par carte bancaire</h3>
          <p>
            Depuis le 13 avril 2024, la réglementation européenne impose a toutes les bornes de recharge rapide (plus de 50 kW) nouvellement installées de proposer un <strong>terminal de paiement par carte bancaire</strong> (TPE). Cette obligation sera étendue a toutes les bornes rapides existantes d&apos;ici 2027. Le paiement par carte bancaire est généralement plus cher que le paiement par badge (le tarif ad hoc sans abonnement est majore), mais il offre l&apos;avantage de ne nécessiter aucune inscription préalable.
          </p>

          <h3>Le paiement par application mobile</h3>
          <p>
            Chaque opérateur propose sa propre application permettant de démarrer et payer la recharge via un QR code sur la borne. Cette méthode ne nécessite pas de badge physique mais implique de créer un compte sur chaque plateforme. En pratique, la multiplication des applications rend cette méthode fastidieuse pour les recharges ponctuelles sur des réseaux que vous ne connaissez pas.
          </p>

          <h2>Les tarifs de la recharge publique : comprendre la facturation</h2>
          <p>
            La tarification de la recharge publique est un sujet complexe, avec plusieurs modes de facturation qui coexistent :
          </p>
          <ul>
            <li><strong>Facturation au kWh :</strong> La méthode la plus transparente et la plus répandue. Vous payez un prix fixe par kilowattheure consomme. Permet de comparer facilement les coûts entre réseaux.</li>
            <li><strong>Facturation au temps :</strong> Certains réseaux facturent à la minute (par exemple, 0,10 euros/minute). Ce mode est désavantageux pour les véhicules qui chargent lentement et avantage les véhicules capables de charger rapidement.</li>
            <li><strong>Facturation mixte :</strong> Combinaison d&apos;un tarif au kWh et d&apos;un coût à la minute (par exemple, 0,30 euros/kWh + 0,05 euros/minute). Ce mode incite les conducteurs à libérer la borne rapidement après la charge.</li>
            <li><strong>Frais de session :</strong> Certains réseaux ajoutent un montant fixe par session de recharge (1 a 2 euros), indépendamment de la quantité d&apos;énergie chargée. Pénalisant pour les petites recharges d&apos;appoint.</li>
            <li><strong>Pénalité de stationnement :</strong> De plus en plus de réseaux appliquent une pénalité si le véhicule reste branche après la fin de la charge (par exemple, 0,15 euros/minute au-delà de 10 minutes après la fin de la charge). Cette mesure vise à encourager la rotation et éviter que des véhicules charges bloquent l&apos;accès aux bornes.</li>
          </ul>

          <h2>L&apos;étiquette de la recharge publique : les règles de bonne conduite</h2>
          <p>
            Avec l&apos;augmentation du nombre de véhicules électriques, l&apos;accès aux bornes publiques peut parfois être tendu, surtout sur les aires d&apos;autoroute pendant les périodes de vacances. Quelques règles de savoir-vivre s&apos;imposent :
          </p>
          <ul>
            <li><strong>Ne chargez que si vous en avez besoin :</strong> Ne monopolisez pas une borne rapide si votre batterie est a 80 % et que vous pouvez atteindre votre destination ou une borne plus loin.</li>
            <li><strong>Libérez la borne des que la charge est terminée :</strong> La charge de 80 a 100 % est beaucoup plus lente que de 10 a 80 %. Déplacez votre véhicule des que vous atteignez 80 %, surtout si d&apos;autres conducteurs attendent.</li>
            <li><strong>Ne stationnez jamais sur un emplacement de recharge sans brancher votre véhicule :</strong> C&apos;est interdit par le Code de la route depuis 2023 et passible d&apos;une amende de 135 euros.</li>
            <li><strong>Rangez le câble correctement après utilisation :</strong> Rebranchez le câble sur son support et ne le laissez pas traîner au sol.</li>
            <li><strong>Signalez les bornes en panne :</strong> Utilisez l&apos;application de l&apos;opérateur ou Chargemap pour signaler un dysfonctionnement. Cela aide la communauté et accelere les réparations.</li>
            <li><strong>Soyez patient et courtois :</strong> En cas d&apos;attente, ne harcelez pas le conducteur en train de charger. Installez l&apos;application ABRP pour anticiper les stations surchargées et choisir des alternatives.</li>
          </ul>

          <h2>Les longs trajets en électrique : comment planifier</h2>
          <p>
            Voyager sur de longues distances en voiture électrique en 2026 est devenu parfaitement viable, a condition de planifier un minimum. Voici la méthode recommandée :
          </p>
          <ul>
            <li><strong>Avant le départ :</strong> Utilisez ABRP ou le planificateur de votre véhicule pour calculer l&apos;itinéraire avec les arrêts de recharge. Prévoyez une marge de sécurité de 10 a 15 % sur l&apos;autonomie annoncée.</li>
            <li><strong>Pendant le trajet :</strong> Arrêtez-vous pour recharger lorsque la batterie descend a 10-15 %. Chargez jusqu&apos;a 80 % maximum (au-delà, la vitesse de charge chute significativement). Profitez de la pause pour vous restaurer ou vous dégourdir les jambes.</li>
            <li><strong>En cas de borne occupée ou en panne :</strong> Ayez toujours une station alternative a proximité. Les applications affichent la disponibilité en temps réel pour les principaux réseaux.</li>
            <li><strong>Les jours de grand départ :</strong> Partez tôt le matin, quand les aires de recharge sont moins fréquentées. Évitez les samedis de juillet et août sur l&apos;axe Paris-Lyon-Marseille, ou l&apos;attente aux bornes peut dépasser 30 minutes.</li>
          </ul>
          <p>
            En pratique, un trajet Paris-Lyon (460 km) nécessite un seul arrêt de recharge de 25 a 35 minutes pour la plupart des véhicules électriques modernes. Un trajet Paris-Marseille (780 km) nécessite deux arrêts. Le temps total est donc allonge de 50 a 70 minutes par rapport à un véhicule thermique, ce qui reste tout a fait acceptable pour la majorité des conducteurs.
          </p>

          <h2>Les projets de déploiement futurs</h2>
          <p>
            Le déploiement des bornes de recharge va s&apos;intensifier dans les années a venir, porte par plusieurs dynamiques :
          </p>
          <ul>
            <li><strong>Obligation d&apos;équipement des parkings :</strong> La loi LOM impose que tous les parkings de plus de 20 places (centres commerciaux, immeubles de bureaux, ensembles résidentiels) soient pré-équipes pour la recharge. Les nouveaux parkings doivent intégrer des bornes opérationnelles des la livraison.</li>
            <li><strong>Déploiement autoroute accelere :</strong> Le plan gouvernemental prévoit une borne rapide tous les 50 km sur les autoroutes et nationales d&apos;ici 2028. Les sociétés d&apos;autoroute (VINCI, Sanef, APRR) investissent massivement pour équiper toutes leurs aires de service.</li>
            <li><strong>Recharge en voirie urbaine :</strong> Les villes déploient des bornes intégrées au mobilier urbain (lampadaires, bornes de trottoir) pour les résidents n&apos;ayant pas de garage. Paris vise 10 000 bornes en voirie d&apos;ici 2030, Lyon 5 000, Marseille 3 000.</li>
            <li><strong>Hubs de recharge :</strong> Un nouveau concept emerge : les stations de recharge dédiées, équivalents électriques des stations-service, avec 10 a 50 bornes rapides, un espace d&apos;attente confortable, un cafe, et parfois des services additionnels (lavage, coworking). Electra, Bump, Power Dot et les grands pétroliers investissent dans ce format.</li>
            <li><strong>Recharge bidirectionnelle (V2G) :</strong> La prochaine révolution. Les véhicules électriques pourront restituer de l&apos;électricité au réseau pendant les pointes de consommation, et se recharger a moindre coût pendant les périodes creuses. Les premiers pilotes V2G sont en cours en France avec EDF et Enedis.</li>
          </ul>
          <p>
            L&apos;objectif national est d&apos;atteindre <strong>400 000 points de charge publics d&apos;ici 2030</strong>, soit un triplement du parc actuel. Combine à la généralisation de la recharge à domicile et au travail, ce déploiement devrait définitivement lever l&apos;obstacle de l&apos;autonomie et de l&apos;angoisse de la panne seche électrique.
          </p>
          <p>
            Utilisez notre annuaire ci-dessus pour explorer le réseau de recharge de votre ville et découvrir les bornes disponibles près de chez vous. Chaque fiche ville détaille les emplacements, les réseaux, les puissances disponibles et les tarifs pratiques.
          </p>

          <AuteurBio />

          <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
            <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
              <li>GIREVE : Fichier consolidé des infrastructures de recharge (open data), mise à jour trimestrielle 2026</li>
              <li>data.gouv.fr : Jeu de données « Fichier consolidé des Bornes de Recharge pour Véhicules Électriques »</li>
              <li>Avere-France : Carte interactive des bornes de recharge et statistiques par département</li>
              <li>Chargemap : Base de données collaborative : emplacements, avis utilisateurs et disponibilité temps réel</li>
              <li>Règlement européen AFIR (2023/1804) : Obligations de déploiement des bornes et paiement par carte bancaire</li>
              <li>TotalEnergies, Ionity, Tesla, Fastned, Electra : Conditions tarifaires et cartes du réseau, 2026</li>
              <li>Loi LOM (Loi d&apos;Orientation des Mobilités) : Obligations d&apos;équipement des parkings en bornes de recharge</li>
              <li>Sociétés d&apos;autoroutes (VINCI, Sanef, APRR) : Plans de déploiement IRVE sur le réseau autoroutier</li>
              <li>Syndicats d&apos;énergie départementaux : Données de déploiement des réseaux publics locaux</li>
            </ul>
          </div>
        </div>
      </section>
      <FaqSection items={faqParPage["/recharge/bornes/"]} />
    </>
  );
}
