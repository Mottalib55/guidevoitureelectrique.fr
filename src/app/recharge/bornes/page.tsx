import type { Metadata } from "next";
import Link from "next/link";
import { villes } from "@/data/villes";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

export const metadata: Metadata = buildMetadata({
  title: "Bornes de recharge par ville : carte de France 2026",
  description:
    "Localisez les bornes de recharge dans " +
    villes.length +
    " villes de France : nombre de bornes, réseaux disponibles, tarifs et puissances. Trouvez la borne la plus proche.",
  path: "/recharge/bornes/",
});

export default function BornesIndexPage() {
  const regions = [...new Set(villes.map((v) => v.region))].sort();

  return (
    <>
      <Breadcrumb items={[{ name: "Recharge", href: "/recharge/" }, { name: "Bornes", href: "/recharge/bornes/" }]} />
      <section className="section" style={{ paddingTop: 48, paddingBottom: 48 }}>
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
        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Guide pratique de la recharge publique en France en 2026</h2>
          <p>
            La France a franchi un cap historique en matiere d&apos;infrastructure de recharge. Avec plus de <strong>150 000 points de charge publics</strong> deployes sur l&apos;ensemble du territoire en 2026, le pays depasse largement l&apos;objectif de 100 000 bornes fixe par le gouvernement pour fin 2025. Le maillage couvre desormais les autoroutes, les villes, les zones periurbaines et, de plus en plus, les zones rurales. Ce guide pratique vous explique tout ce que vous devez savoir pour recharger sereinement partout en France.
          </p>

          <h2>L&apos;etat du reseau de recharge public francais</h2>
          <p>
            Le deploiement des bornes de recharge en France a connu une acceleration spectaculaire depuis 2022. En trois ans, le nombre de points de charge publics a triple. Cette croissance est portee par plusieurs facteurs : les obligations reglementaires pour les parkings publics et les immeubles neufs, les subventions du programme ADVENIR, les investissements massifs des operateurs prives, et la demande croissante liee a l&apos;augmentation du parc de vehicules electriques (plus de 2 millions de vehicules electriques et hybrides rechargeables en circulation en France en 2026).
          </p>
          <p>
            La repartition geographique n&apos;est cependant pas uniforme. L&apos;Ile-de-France, la region Auvergne-Rhone-Alpes et l&apos;Occitanie concentrent le plus grand nombre de bornes. Les zones rurales et certaines regions comme le Centre-Val de Loire ou la Bourgogne-Franche-Comte sont encore sous-equipees, bien que la situation s&apos;ameliore rapidement grace aux programmes de deploiement portes par les syndicats d&apos;energie locaux.
          </p>

          <h3>Les differents types de bornes</h3>
          <p>
            Il est essentiel de comprendre les differents types de bornes pour planifier correctement vos recharges :
          </p>
          <ul>
            <li><strong>Bornes AC lentes (3,7 a 7,4 kW) :</strong> Ce sont les bornes les plus basiques, souvent installees sur la voirie en ville ou dans les petits parkings publics. Elles delivrent du courant alternatif monophase et rechargent completement un vehicule en 6 a 12 heures. Adaptees au stationnement de longue duree (nuit, journee de travail).</li>
            <li><strong>Bornes AC accelerees (11 a 22 kW) :</strong> Plus puissantes, elles utilisent le courant triphase et permettent une recharge complete en 2 a 5 heures. On les trouve dans les parkings de supermarches, les centres commerciaux, les parkings relais et les zones d&apos;activite. C&apos;est le type de borne le plus repandu en France.</li>
            <li><strong>Bornes DC rapides (50 kW) :</strong> Elles delivrent du courant continu directement dans la batterie, contournant le chargeur embarque du vehicule. Une recharge de 20 a 80 % prend environ 40 a 60 minutes. On les trouve principalement en peripherie des villes et dans les stations-service.</li>
            <li><strong>Bornes DC ultra-rapides (150 a 350 kW) :</strong> Les bornes haut de gamme, essentiellement presentes sur les aires d&apos;autoroute et les hubs de recharge. Elles permettent de recuperer 200 km d&apos;autonomie en 15 a 20 minutes. Tous les vehicules ne peuvent pas profiter de la puissance maximale : cela depend du chargeur embarque DC du vehicule.</li>
          </ul>

          <h3>Les connecteurs : CCS, Type 2 et CHAdeMO</h3>
          <p>
            En Europe, deux standards de connecteurs dominent :
          </p>
          <ul>
            <li><strong>Type 2 (Mennekes) :</strong> Le connecteur standard europeen pour la recharge en courant alternatif (AC). Tous les vehicules electriques vendus en Europe en sont equipes. C&apos;est le connecteur que vous utiliserez pour les bornes de 3,7 a 22 kW.</li>
            <li><strong>CCS Combo 2 (Combined Charging System) :</strong> Le connecteur standard europeen pour la recharge rapide en courant continu (DC). Il combine le connecteur Type 2 avec deux broches DC supplementaires. Tous les vehicules electriques recents en sont equipes, et toutes les bornes rapides installees depuis 2019 utilisent ce standard.</li>
            <li><strong>CHAdeMO :</strong> Un ancien standard japonais en voie de disparition en Europe. Seuls les Nissan Leaf et quelques anciens modeles l&apos;utilisent encore. Les nouvelles bornes ne l&apos;integrent plus systematiquement.</li>
          </ul>
          <p>
            En pratique, si votre vehicule est equipe d&apos;une prise CCS Combo 2 (ce qui est le cas de tous les modeles vendus depuis 2020), vous pouvez vous connecter a n&apos;importe quelle borne publique en France. La question de la compatibilite des connecteurs est quasiment resolue.
          </p>

          <h2>Les principaux operateurs de recharge en France</h2>
          <p>
            Le marche de la recharge publique en France est anime par une multitude d&apos;operateurs, des grands groupes energetiques aux start-ups specialisees. Voici les principaux acteurs a connaitre :
          </p>

          <h3>TotalEnergies</h3>
          <p>
            Le geant petrolier francais s&apos;est massivement positionne sur la recharge electrique, deployant son reseau <strong>TotalEnergies Charge</strong> sur les stations-service du groupe ainsi que dans des hubs de recharge dedies. TotalEnergies opere plus de 30 000 points de charge en France et vise 150 000 en Europe d&apos;ici 2030. Les bornes rapides TotalEnergies (50 a 300 kW) sont presentes sur de nombreuses aires d&apos;autoroute. Tarifs : 0,40 a 0,55 euros/kWh selon la puissance, avec des reductions pour les detenteurs de la carte Total Recharge.
          </p>

          <h3>Ionity</h3>
          <p>
            Consortium europeen fonde par BMW, Ford, Hyundai, Mercedes et Volkswagen, <strong>Ionity</strong> opere un reseau de bornes ultra-rapides (350 kW) sur les autoroutes europeennes. En France, Ionity compte environ 100 stations reparties sur les grands axes. Les bornes Ionity offrent une puissance maximale de 350 kW, permettant aux vehicules compatibles (Porsche Taycan, Hyundai Ioniq 5, Kia EV6) de recharger a une vitesse exceptionnelle. Tarifs : 0,39 euros/kWh avec l&apos;abonnement Ionity Passport (12,99 euros/mois), 0,79 euros/kWh sans abonnement.
          </p>

          <h3>Tesla Superchargers</h3>
          <p>
            Le reseau <strong>Supercharger</strong> de Tesla est progressivement ouvert aux vehicules d&apos;autres marques depuis 2023. En France, la majorite des stations Supercharger sont desormais accessibles a tous les vehicules equipes de CCS Combo 2, via l&apos;application Tesla. Le reseau compte environ 180 stations et plus de 2 000 bornes en France, avec des puissances allant de 72 a 250 kW. Tarifs pour les non-Tesla : 0,48 a 0,55 euros/kWh. Les proprietaires de Tesla beneficient de tarifs preferentiels (0,36 a 0,44 euros/kWh).
          </p>

          <h3>Fastned</h3>
          <p>
            Operateur neerlandais en croissance rapide, <strong>Fastned</strong> deploie des stations de recharge rapide reconnaissables a leur toiture jaune avec panneaux solaires. Les stations Fastned, situees le long des autoroutes et en peripherie des villes, offrent des bornes de 150 a 300 kW. Tarifs : 0,59 euros/kWh (standard), 0,45 euros/kWh (abonnement Gold Member a 12,99 euros/mois). Fastned se distingue par la fiabilite de ses bornes (taux de disponibilite superieur a 98 %) et ses stations toujours eclairees et securisees.
          </p>

          <h3>Reseaux publics locaux</h3>
          <p>
            De nombreuses collectivites locales operent leurs propres reseaux de bornes via les syndicats d&apos;energie departementaux. Ces reseaux, souvent sous les marques <strong>SDE</strong>, <strong>SDEV</strong>, <strong>SYDELA</strong> ou <strong>REV</strong>, couvrent principalement les zones periurbaines et rurales avec des bornes AC de 7 a 22 kW. Les tarifs sont generalement tres competitifs (0,20 a 0,30 euros/kWh), parfois meme gratuits dans certaines communes. L&apos;acces se fait souvent via un badge de roaming (Chargemap, Freshmile).
          </p>

          <h3>Reseaux de supermarches</h3>
          <p>
            Les grandes enseignes de distribution ont massivement investi dans la recharge. <strong>Lidl</strong> equipe progressivement tous ses magasins de bornes rapides (50 kW et plus). <strong>Leclerc</strong> propose des bornes gratuites sur de nombreux parkings (generalement 22 kW AC). <strong>Carrefour</strong>, <strong>Auchan</strong> et <strong>Intermarche</strong> deploient egalement des stations, souvent en partenariat avec des operateurs specialises. La recharge chez les supermarches est ideale pour les achats hebdomadaires : 30 a 45 minutes de courses suffisent pour recuperer une charge significative.
          </p>

          <h2>Comment trouver une borne : les applications indispensables</h2>
          <p>
            Plusieurs applications et services vous permettent de localiser les bornes de recharge, de verifier leur disponibilite en temps reel, et de payer la recharge :
          </p>
          <ul>
            <li><strong>Chargemap :</strong> L&apos;application francaise de reference, creee en 2011. Base de donnees collaborative de plus de 700 000 bornes en Europe, avec des avis d&apos;utilisateurs, des photos, et la disponibilite en temps reel pour de nombreux reseaux. Le badge Chargemap Pass donne acces a la majorite des reseaux en France et en Europe.</li>
            <li><strong>ABRP (A Better Route Planner) :</strong> L&apos;application de planification d&apos;itineraire la plus performante pour les vehicules electriques. Elle calcule automatiquement les arrets de recharge necessaires pour un trajet donne, en tenant compte de la consommation reelle du vehicule, de la meteo, du relief et des tarifs. Indispensable pour les longs trajets.</li>
            <li><strong>Application constructeur :</strong> Tesla, Renault, Peugeot, BMW et la plupart des constructeurs integrent un planificateur de trajet avec bornes de recharge dans leur systeme de navigation embarque. Ces systemes prechauffent automatiquement la batterie avant l&apos;arrivee a la borne pour optimiser la vitesse de charge.</li>
            <li><strong>Google Maps et Apple Plans :</strong> Les deux navigateurs les plus utilises integrent desormais les bornes de recharge avec des filtres par puissance et par reseau. La disponibilite en temps reel est encore inegale mais s&apos;ameliore continuellement.</li>
            <li><strong>PlugShare :</strong> Application internationale avec une communaute active. Particulierement utile pour les voyages a l&apos;etranger.</li>
          </ul>

          <h2>Cartes et badges de recharge : quel systeme choisir ?</h2>
          <p>
            En France, trois systemes de paiement coexistent pour la recharge publique :
          </p>

          <h3>Le paiement par badge (RFID)</h3>
          <p>
            La methode la plus repandue et la plus pratique. Vous obtenez un badge physique (carte ou porte-cles) associe a un compte client, et vous le presentez sur le lecteur de la borne pour demarrer la recharge. La facturation est automatique et la facture est envoyee par email. Les principaux badges multi-reseaux :
          </p>
          <ul>
            <li><strong>Chargemap Pass :</strong> Acces a plus de 600 000 bornes en Europe. Pas d&apos;abonnement, badge a 19,90 euros (achat unique). Tarification transparente affichee dans l&apos;application avant la recharge. C&apos;est le badge le plus polyvalent en France.</li>
            <li><strong>Shell Recharge :</strong> Acces a un large reseau, facturation mensuelle. Integration avec la carte Shell pour centraliser les depenses energetiques (carburant + electricite).</li>
            <li><strong>Electroverse (Octopus Energy) :</strong> Tarifs souvent inferieurs a la moyenne grace au modele economique d&apos;Octopus. Facturation mensuelle avec un releve detaille.</li>
            <li><strong>Badge constructeur :</strong> Mercedes me Charge, BMW Charging, Kia Charge, Hyundai Bluelink... Chaque constructeur propose son badge avec des tarifs negocies sur certains reseaux.</li>
          </ul>

          <h3>Le paiement par carte bancaire</h3>
          <p>
            Depuis le 13 avril 2024, la reglementation europeenne impose a toutes les bornes de recharge rapide (plus de 50 kW) nouvellement installees de proposer un <strong>terminal de paiement par carte bancaire</strong> (TPE). Cette obligation sera etendue a toutes les bornes rapides existantes d&apos;ici 2027. Le paiement par carte bancaire est generalement plus cher que le paiement par badge (le tarif ad hoc sans abonnement est majore), mais il offre l&apos;avantage de ne necessiter aucune inscription prealable.
          </p>

          <h3>Le paiement par application mobile</h3>
          <p>
            Chaque operateur propose sa propre application permettant de demarrer et payer la recharge via un QR code sur la borne. Cette methode ne necessite pas de badge physique mais implique de creer un compte sur chaque plateforme. En pratique, la multiplication des applications rend cette methode fastidieuse pour les recharges ponctuelles sur des reseaux que vous ne connaissez pas.
          </p>

          <h2>Les tarifs de la recharge publique : comprendre la facturation</h2>
          <p>
            La tarification de la recharge publique est un sujet complexe, avec plusieurs modes de facturation qui coexistent :
          </p>
          <ul>
            <li><strong>Facturation au kWh :</strong> La methode la plus transparente et la plus repandue. Vous payez un prix fixe par kilowattheure consomme. Permet de comparer facilement les couts entre reseaux.</li>
            <li><strong>Facturation au temps :</strong> Certains reseaux facturent a la minute (par exemple, 0,10 euros/minute). Ce mode est desavantageux pour les vehicules qui chargent lentement et avantage les vehicules capables de charger rapidement.</li>
            <li><strong>Facturation mixte :</strong> Combinaison d&apos;un tarif au kWh et d&apos;un cout a la minute (par exemple, 0,30 euros/kWh + 0,05 euros/minute). Ce mode incite les conducteurs a liberer la borne rapidement apres la charge.</li>
            <li><strong>Frais de session :</strong> Certains reseaux ajoutent un montant fixe par session de recharge (1 a 2 euros), independamment de la quantite d&apos;energie chargee. Penalisant pour les petites recharges d&apos;appoint.</li>
            <li><strong>Penalite de stationnement :</strong> De plus en plus de reseaux appliquent une penalite si le vehicule reste branche apres la fin de la charge (par exemple, 0,15 euros/minute au-dela de 10 minutes apres la fin de la charge). Cette mesure vise a encourager la rotation et eviter que des vehicules charges bloquent l&apos;acces aux bornes.</li>
          </ul>

          <h2>L&apos;etiquette de la recharge publique : les regles de bonne conduite</h2>
          <p>
            Avec l&apos;augmentation du nombre de vehicules electriques, l&apos;acces aux bornes publiques peut parfois etre tendu, surtout sur les aires d&apos;autoroute pendant les periodes de vacances. Quelques regles de savoir-vivre s&apos;imposent :
          </p>
          <ul>
            <li><strong>Ne chargez que si vous en avez besoin :</strong> Ne monopolisez pas une borne rapide si votre batterie est a 80 % et que vous pouvez atteindre votre destination ou une borne plus loin.</li>
            <li><strong>Liberez la borne des que la charge est terminee :</strong> La charge de 80 a 100 % est beaucoup plus lente que de 10 a 80 %. Deplacez votre vehicule des que vous atteignez 80 %, surtout si d&apos;autres conducteurs attendent.</li>
            <li><strong>Ne stationnez jamais sur un emplacement de recharge sans brancher votre vehicule :</strong> C&apos;est interdit par le Code de la route depuis 2023 et passible d&apos;une amende de 135 euros.</li>
            <li><strong>Rangez le cable correctement apres utilisation :</strong> Rebranchez le cable sur son support et ne le laissez pas trainer au sol.</li>
            <li><strong>Signalez les bornes en panne :</strong> Utilisez l&apos;application de l&apos;operateur ou Chargemap pour signaler un dysfonctionnement. Cela aide la communaute et accelere les reparations.</li>
            <li><strong>Soyez patient et courtois :</strong> En cas d&apos;attente, ne harcelez pas le conducteur en train de charger. Installez l&apos;application ABRP pour anticiper les stations surchargees et choisir des alternatives.</li>
          </ul>

          <h2>Les longs trajets en electrique : comment planifier</h2>
          <p>
            Voyager sur de longues distances en voiture electrique en 2026 est devenu parfaitement viable, a condition de planifier un minimum. Voici la methode recommandee :
          </p>
          <ul>
            <li><strong>Avant le depart :</strong> Utilisez ABRP ou le planificateur de votre vehicule pour calculer l&apos;itineraire avec les arrets de recharge. Prevoyez une marge de securite de 10 a 15 % sur l&apos;autonomie annoncee.</li>
            <li><strong>Pendant le trajet :</strong> Arretez-vous pour recharger lorsque la batterie descend a 10-15 %. Chargez jusqu&apos;a 80 % maximum (au-dela, la vitesse de charge chute significativement). Profitez de la pause pour vous restaurer ou vous degourdir les jambes.</li>
            <li><strong>En cas de borne occupee ou en panne :</strong> Ayez toujours une station alternative a proximite. Les applications affichent la disponibilite en temps reel pour les principaux reseaux.</li>
            <li><strong>Les jours de grand depart :</strong> Partez tot le matin, quand les aires de recharge sont moins frequentees. Evitez les samedis de juillet et aout sur l&apos;axe Paris-Lyon-Marseille, ou l&apos;attente aux bornes peut depasser 30 minutes.</li>
          </ul>
          <p>
            En pratique, un trajet Paris-Lyon (460 km) necessite un seul arret de recharge de 25 a 35 minutes pour la plupart des vehicules electriques modernes. Un trajet Paris-Marseille (780 km) necessite deux arrets. Le temps total est donc allonge de 50 a 70 minutes par rapport a un vehicule thermique, ce qui reste tout a fait acceptable pour la majorite des conducteurs.
          </p>

          <h2>Les projets de deploiement futurs</h2>
          <p>
            Le deploiement des bornes de recharge va s&apos;intensifier dans les annees a venir, porte par plusieurs dynamiques :
          </p>
          <ul>
            <li><strong>Obligation d&apos;equipement des parkings :</strong> La loi LOM impose que tous les parkings de plus de 20 places (centres commerciaux, immeubles de bureaux, ensembles residentiels) soient pre-equipes pour la recharge. Les nouveaux parkings doivent integrer des bornes operationnelles des la livraison.</li>
            <li><strong>Deploiement autoroute accelere :</strong> Le plan gouvernemental prevoit une borne rapide tous les 50 km sur les autoroutes et nationales d&apos;ici 2028. Les societes d&apos;autoroute (VINCI, Sanef, APRR) investissent massivement pour equiper toutes leurs aires de service.</li>
            <li><strong>Recharge en voirie urbaine :</strong> Les villes deploient des bornes integrees au mobilier urbain (lampadaires, bornes de trottoir) pour les residents n&apos;ayant pas de garage. Paris vise 10 000 bornes en voirie d&apos;ici 2030, Lyon 5 000, Marseille 3 000.</li>
            <li><strong>Hubs de recharge :</strong> Un nouveau concept emerge : les stations de recharge dediees, equivalents electriques des stations-service, avec 10 a 50 bornes rapides, un espace d&apos;attente confortable, un cafe, et parfois des services additionnels (lavage, coworking). Electra, Bump, Power Dot et les grands petroliers investissent dans ce format.</li>
            <li><strong>Recharge bidirectionnelle (V2G) :</strong> La prochaine revolution. Les vehicules electriques pourront restituer de l&apos;electricite au reseau pendant les pointes de consommation, et se recharger a moindre cout pendant les periodes creuses. Les premiers pilotes V2G sont en cours en France avec EDF et Enedis.</li>
          </ul>
          <p>
            L&apos;objectif national est d&apos;atteindre <strong>400 000 points de charge publics d&apos;ici 2030</strong>, soit un triplement du parc actuel. Combine a la generalisation de la recharge a domicile et au travail, ce deploiement devrait definitivement lever l&apos;obstacle de l&apos;autonomie et de l&apos;angoisse de la panne seche electrique.
          </p>
          <p>
            Utilisez notre annuaire ci-dessus pour explorer le reseau de recharge de votre ville et decouvrir les bornes disponibles pres de chez vous. Chaque fiche ville detaille les emplacements, les reseaux, les puissances disponibles et les tarifs pratiques.
          </p>

          <AuteurBio />

          <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
            <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
              <li>GIREVE : Fichier consolidé des infrastructures de recharge (open data), mise à jour trimestrielle 2026</li>
              <li>data.gouv.fr : Jeu de données « Fichier consolidé des Bornes de Recharge pour Véhicules Électriques »</li>
              <li>Avere-France : Carte interactive des bornes de recharge et statistiques par département</li>
              <li>Chargemap : Base de données collaborative : emplacements, avis utilisateurs et disponibilité temps réel</li>
              <li>Règlement européen AFIR (2023/1804) : Obligations de déploiement des bornes et paiement par carte bancaire</li>
              <li>TotalEnergies, Ionity, Tesla, Fastned, Electra : Conditions tarifaires et cartes du réseau, 2026</li>
              <li>Loi LOM (Loi d&apos;Orientation des Mobilités) : Obligations d&apos;équipement des parkings en bornes de recharge</li>
              <li>Sociétés d&apos;autoroutes (VINCI, Sanef, APRR) : Plans de déploiement IRVE sur le réseau autoroutier</li>
              <li>Syndicats d&apos;énergie départementaux : Données de déploiement des réseaux publics locaux</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
