import type { Metadata } from "next";
import Link from "next/link";
import { pagesRecharge } from "@/data/recharge";
import { villes } from "@/data/villes";
import AuteurBio from "@/components/AuteurBio";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Recharge voiture électrique : bornes, coûts et temps",
  description:
    "Recharge VE : wallbox, bornes publiques, tarifs au kWh, temps de charge par modele. " +
    pagesRecharge.length +
    " guides + carte des bornes dans " +
    villes.length +
    " villes de France.",
  path: "/recharge/",
});

export default function RechargeIndexPage() {
  const topVilles = villes
    .sort((a, b) => b.nombreBornes - a.nombreBornes)
    .slice(0, 12);

  return (
    <>
      <section className="section" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <h1 className="section-title">Recharge voiture électrique</h1>
        <p className="section-sub">
          Guides complets sur la recharge et annuaire des bornes dans{" "}
          {villes.length} villes de France.
        </p>

        {/* Articles recharge */}
        <h2 style={{ fontSize: 22, marginBottom: 16, marginTop: 32 }}>
          Guides recharge ({pagesRecharge.length})
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 16,
          }}
        >
          {pagesRecharge.map((p) => (
            <Link
              key={p.slug}
              href={`/recharge/${p.slug}/`}
              className="carte-modele"
              style={{ padding: 20 }}
            >
              <h3
                className="carte-modele-nom"
                style={{ marginBottom: 6, fontSize: 17 }}
              >
                {p.titre}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {p.metaDescription}
              </p>
            </Link>
          ))}
        </div>

        {/* Bornes par ville */}
        <h2 style={{ fontSize: 22, marginBottom: 16, marginTop: 48 }}>
          Bornes par ville (top {topVilles.length})
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 12,
          }}
        >
          {topVilles.map((v) => (
            <Link
              key={v.slug}
              href={`/recharge/bornes/${v.slug}/`}
              className="carte-modele"
              style={{ padding: 16 }}
            >
              <h3
                className="carte-modele-nom"
                style={{ marginBottom: 4, fontSize: 16 }}
              >
                {v.nom}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  margin: 0,
                }}
              >
                {v.nombreBornes} bornes — {v.region}
              </p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link href="/recharge/bornes/" className="btn-secondary">
            Voir les {villes.length} villes
          </Link>
        </div>
      </section>

      {/* ─── CONTENU ÉDITORIAL ────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="prose">
          <h2>Tout comprendre a la recharge de voiture électrique en France en 2026</h2>

          <p>
            La recharge est au véhicule électrique ce que la pompe a essence est au véhicule thermique, mais avec une difference fondamentale : la majorite des recharges se font a domicile, pendant que vous dormez. Cette réalité transforme radicalement le rapport a l&apos;automobile. Plus besoin de detours par la station-service, plus d&apos;attente devant une pompe : vous partez chaque matin avec un plein. Pourtant, la recharge reste le sujet qui genere le plus d&apos;interrogations chez les futurs proprietaires de véhicules électriques. Ce guide complet vous explique tout ce que vous devez savoir pour recharger en toute serenite, que ce soit chez vous, au travail ou sur la route.
          </p>

          <h2>La recharge a domicile : la solution numero un</h2>

          <h3>La prise domestique : un depannage, pas une solution</h3>
          <p>
            Techniquement, toute voiture électrique peut etre rechargee sur une prise domestique standard (230V, 10A ou 16A). Cependant, cette solution ne devrait etre envisagee qu&apos;en depannage ou pour des véhicules a petite batterie (moins de 30 kWh). La puissance delivree est limitee a 2,3 kW (prise 10A) ou 3,7 kW (prise 16A renforcee), ce qui signifie qu&apos;une recharge complete peut prendre 15 a 25 heures pour une batterie de 50-60 kWh. De plus, une utilisation prolongee d&apos;une prise domestique pour la recharge peut entrainer une surchauffe du circuit électrique si l&apos;installation n&apos;est pas en parfait état.
          </p>

          <h3>La borne murale (wallbox) : le standard recommande</h3>
          <p>
            L&apos;installation d&apos;une borne murale, communement appelee wallbox, est la solution recommandee pour la recharge a domicile. Disponibles en puissances de 7,4 kW (monophase) ou 11 kW et 22 kW (triphase), ces bornes permettent de recharger completement la majorite des batteries en 4 a 8 heures, soit une nuit. Une wallbox de 7,4 kW suffit pour la plupart des usages quotidiens : en heures creuses (environ 8 heures de nuit), elle restaure entre 250 et 300 km d&apos;autonomie, bien au-dela du besoin quotidien moyen.
          </p>
          <p>
            Le cout d&apos;une wallbox varie entre 500 et 1 500 euros pour le materiel, auxquels s&apos;ajoutent 300 a 800 euros d&apos;installation par un electricien agree IRVE (Infrastructure de Recharge pour Véhicules Électriques). Apres le credit d&apos;impot de 300 euros et la TVA reduite a 5,5 % pour les logements de plus de 2 ans, l&apos;investissement total se situe généralement entre 800 et 1 800 euros. C&apos;est un investissement rapidement amorti par les économies d&apos;énergie realisees par rapport au carburant fossile.
          </p>
          <p>
            Conseil important : faites verifier votre installation électrique avant l&apos;installation de la wallbox. Un tableau électrique aux normes, un disjoncteur differentiel 30 mA dedie et un cablage adequat sont indispensables. L&apos;installateur IRVE procede a ces verifications et peut vous conseiller sur d&apos;eventuelles mises a niveau necessaires.
          </p>

          <h3>La recharge en copropriete : le droit a la prise</h3>
          <p>
            Si vous vivez en appartement avec une place de parking en copropriete, le droit a la prise (article L353-12 du Code de l&apos;énergie) vous permet de faire installer une borne de recharge sur votre place a vos frais, sans que la copropriete puisse s&apos;y opposer sans motif serieux et legitime. La procedure est encadree : vous devez informer le syndic par lettre recommandee avec accuse de reception, en joignant un descriptif detaille des travaux et un schema d&apos;installation. Le syndic dispose de 3 mois pour inscrire la demande a l&apos;ordre du jour de l&apos;assemblee générale, mais son opposition ne peut se fonder que sur des motifs techniques serieux (impossibilite physique, risque pour la sécurité de l&apos;immeuble).
          </p>
          <p>
            De plus en plus de coproprietes optent pour une solution collective : l&apos;installation d&apos;une infrastructure de recharge partagee, financee en partie par le programme Advenir qui subventionne jusqu&apos;a 50 % des couts. Cette approche mutualisee est souvent plus économique et plus esthetique qu&apos;une multiplication de bornes individuelles, et elle valorise le patrimoine immobilier de l&apos;ensemble de la copropriete.
          </p>

          <h2>La recharge publique : un réseau en pleine expansion</h2>

          <h3>État du réseau en France en 2026</h3>
          <p>
            Le réseau de bornes publiques français a connu une croissance spectaculaire au cours des dernières années. Fin 2026, la France compte plus de 180 000 points de charge accessibles au public, repartis sur l&apos;ensemble du territoire national. Ce chiffre place la France au deuxieme rang européen en termes de densité de bornes pour 100 km de routes, derriere les Pays-Bas. L&apos;objectif gouvernemental de 400 000 bornes d&apos;ici 2030 parait desormais a portee de main.
          </p>
          <p>
            La repartition geographique des bornes s&apos;est considérablement amelioree. Si les zones urbaines denses etaient logiquement les premières equipees, les territoires ruraux rattrapent progressivement leur retard grace aux programmes d&apos;investissement des syndicats d&apos;énergie departementaux et aux obligations reglementaires imposees aux grandes surfaces et aux parkings publics. Les autoroutes et voies rapides sont desormais quasi intégralement couvertes, avec des stations de recharge rapide sur la quasi-totalite des aires de service.
          </p>

          <h3>Les differents types de bornes publiques</h3>
          <p>
            Les bornes publiques se repartissent en trois grandes categories selon leur puissance :
          </p>
          <ul>
            <li><strong>Bornes de recharge normale (AC 3,7 a 22 kW) :</strong> les plus repandues, elles sont adaptees aux stationnements de longue duree (parkings, centres commerciaux, hotels). Comptez 2 a 8 heures pour une charge complete selon la puissance. Tarif moyen : 0,30 a 0,45 euros par kWh.</li>
            <li><strong>Bornes de recharge accéléree (AC 22 kW ou DC 50 kW) :</strong> une solution intermediaire permettant de récupérer environ 100 km d&apos;autonomie en 30 a 45 minutes. On les trouve souvent sur les parkings de supermarches ou les stations de recharge urbaines.</li>
            <li><strong>Bornes de recharge rapide et ultra-rapide (DC 100 a 350 kW) :</strong> situees principalement le long des axes routiers et sur les hubs de recharge, elles permettent de récupérer 200 a 300 km d&apos;autonomie en 15 a 25 minutes. Tarif moyen : 0,39 a 0,69 euros par kWh.</li>
          </ul>

          <h3>Les operateurs et réseaux de recharge</h3>
          <p>
            Le paysage des operateurs de recharge en France est de plus en plus structure. Voici les principaux acteurs et leurs caracteristiques :
          </p>
          <ul>
            <li><strong>TotalEnergies :</strong> le plus grand réseau multi-énergies en France, déploie massivement des bornes de 50 a 300 kW sur ses stations-service, avec des tarifs compétitifs pour les abonnes.</li>
            <li><strong>Ionity :</strong> le réseau premium des constructeurs européens (BMW, Mercedes, Volkswagen, Ford, Hyundai), propose des stations ultra-rapides de 350 kW le long des autoroutes européennes. Tarifs eleves a l&apos;usage ponctuel, mais très compétitifs avec l&apos;abonnement Ionity Passport.</li>
            <li><strong>Electra :</strong> la startup française qui monte en puissance, déploie des hubs de recharge urbains et periurbains avec des bornes de 150 a 400 kW. Points forts : fiabilité elevee et interface utilisateur soignee.</li>
            <li><strong>Tesla Supercharger :</strong> le réseau le plus fiable du marché, desormais ouvert a toutes les marques de véhicules électriques. Plus de 1 200 bornes en France avec des puissances de 150 a 250 kW.</li>
            <li><strong>Fastned :</strong> operateur neerlandais en expansion en France, stations reconnaissables a leur toit jaune, bornes de 300 kW avec alimentation 100 % énergies renouvelables.</li>
          </ul>

          <h3>Cartes de recharge et abonnements : comment s&apos;y retrouver</h3>
          <p>
            L&apos;un des aspects les plus deroutants de la recharge publique pour les debutants est la multiplicite des cartes et abonnements de recharge. Chaque operateur propose sa propre application et son propre système de paiement, mais des cartes d&apos;itinerance (ou roaming) permettent d&apos;acceder a plusieurs réseaux avec un seul badge. Les plus populaires en France sont Chargemap Pass, Freshmile, Shell Recharge, et les cartes constructeurs (Renault Mobilize, Peugeot Free2Move).
          </p>
          <p>
            Notre recommandation : equipez-vous d&apos;une carte d&apos;itinerance principale couvrant le maximum de bornes, et completez avec l&apos;application Chargemap qui repertorie la quasi-totalite des bornes publiques en France avec les tarifs, la disponibilité en temps reel et les avis des utilisateurs. En voyage, privilegiez les réseaux dont vous etes membre pour bénéficier des meilleurs tarifs.
          </p>

          <h2>La recharge en voyage : planifier ses longs trajets</h2>

          <h3>La planification d&apos;itineraire : un reflexe a prendre</h3>
          <p>
            Les longs trajets en voiture électrique nécessitént un minimum de planification, du moins lors de vos premières experiences. Les applications de navigation intégrees aux véhicules (comme celles de Tesla, BMW ou Mercedes) calculent automatiquement les arrets de recharge necessaires et vous dirigent vers les bornes les plus adaptees. Des applications tierces comme A Better Route Planner (ABRP), Chargemap ou Electromaps offrent des fonctionnalites similaires et permettent de simuler votre trajet a l&apos;avance.
          </p>
          <p>
            La stratégie optimale pour un long trajet consiste a recharger frequemment et brievement plutot que rarement et longuement. Arriver a une borne avec 10-15 % de batterie et repartir a 60-70 % est généralement plus efficace que d&apos;attendre la charge a 100 %, car la vitesse de recharge ralentit considérablement au-dessus de 80 %. Sur un trajet Paris-Lyon (460 km), par exemple, un seul arret de 20-25 minutes sur une borne rapide suffit avec la plupart des véhicules recents disposant de 400 km d&apos;autonomie ou plus.
          </p>

          <h3>Les temps de recharge : ce qui les influence</h3>
          <p>
            Le temps de recharge depend de nombreux facteurs : la puissance de la borne, la puissance maximale acceptee par le véhicule (le facteur limitant), la temperature de la batterie, le niveau de charge initial, et l&apos;état de sante de la batterie. Un véhicule capable d&apos;accepter 150 kW de puissance ne rechargera a cette puissance maximale que pendant une fraction de la session, généralement entre 10 et 50 % de la capacité de la batterie. Au-dessus, la puissance diminue progressivement pour preserver la sante de la batterie.
          </p>
          <p>
            La temperature est un facteur souvent sous-estime. Par temps froid (en dessous de 5 degres), la batterie doit etre prechauffee pour accepter la recharge rapide a pleine puissance. Les véhicules modernes sont equipes de systèmes de preconditionnement qui chauffent la batterie automatiquement lorsque vous programmez un arret de recharge rapide dans le GPS. Ce mecanisme est crucial pour obtenir les meilleurs temps de recharge en hiver.
          </p>

          <h2>Combien coute la recharge en 2026 ?</h2>

          <h3>Comparatif des couts par mode de recharge</h3>
          <p>
            Le cout de la recharge varie considérablement selon le lieu et la methode. Voici un panorama des couts moyens pour 100 km parcourus (base : consommation de 17 kWh/100 km) :
          </p>
          <ul>
            <li><strong>Recharge a domicile (heures creuses) :</strong> environ 2,50 euros pour 100 km (tarif EDF heures creuses a 0,15 euros/kWh).</li>
            <li><strong>Recharge a domicile (heures pleines) :</strong> environ 4,25 euros pour 100 km (tarif EDF heures pleines a 0,25 euros/kWh).</li>
            <li><strong>Borne publique AC (7-22 kW) :</strong> environ 5,50 euros pour 100 km (tarif moyen 0,35 euros/kWh).</li>
            <li><strong>Borne rapide DC (50-150 kW) :</strong> environ 7,50 euros pour 100 km (tarif moyen 0,45 euros/kWh).</li>
            <li><strong>Borne ultra-rapide DC (150-350 kW) :</strong> environ 9,50 euros pour 100 km (tarif moyen 0,55 euros/kWh).</li>
            <li><strong>Essence SP95 (reference) :</strong> environ 11 euros pour 100 km (7 L/100 km a 1,60 euros/L).</li>
          </ul>
          <p>
            Meme dans le scenario le plus couteux (recharge ultra-rapide), le cout énergétique d&apos;un véhicule électrique reste inférieur a celui de l&apos;essence. Et pour les 80 % de recharges effectuees a domicile, l&apos;économie est considérable : un facteur 4 par rapport au carburant fossile.
          </p>

          <h2>Les tendances de la recharge en 2026 et au-dela</h2>

          <h3>Le Plug &amp; Charge : brancher suffit</h3>
          <p>
            La technologie Plug &amp; Charge (norme ISO 15118) simplifie radicalement l&apos;experience de recharge publique. Plus besoin de badge, de carte bancaire ou d&apos;application : il suffit de brancher le cable et la borne identifie automatiquement le véhicule, authentifie le paiement et lance la recharge. Cette technologie est déjà supportee par de nombreux véhicules (Tesla, BMW, Mercedes, Ford) et se generalise sur les réseaux de recharge les plus recents.
          </p>

          <h3>La recharge bidirectionnelle (V2H et V2G)</h3>
          <p>
            La recharge bidirectionnelle représente une révolution dans la maniere dont nous concevons la batterie d&apos;un véhicule électrique. Le V2H (Vehicle-to-Home) permet d&apos;utiliser la batterie de votre voiture pour alimenter votre domicile en cas de coupure de courant ou pour optimiser votre autoconsommation solaire. Le V2G (Vehicle-to-Grid) va plus loin en permettant de revendre l&apos;électricité stockee dans votre batterie au réseau, generant un revenu complementaire.
          </p>
          <p>
            En 2026, plusieurs modèles commercialises en France supportent la recharge bidirectionnelle, et les premiers programmes pilotes de V2G sont en cours avec des fournisseurs d&apos;électricité français. C&apos;est une fonctionnalite a considérer serieusement si vous disposez de panneaux solaires ou si vous souhaitez maximiser la valeur économique de votre batterie.
          </p>

          <h3>La recharge solaire : vers l&apos;autonomie énergétique</h3>
          <p>
            Coupler une installation photovoltaique avec une borne de recharge intelligente permet de recharger sa voiture a cout quasi nul grace a l&apos;énergie solaire. En France, une installation de 6 kWc produit en moyenne 7 000 a 8 000 kWh par an, largement suffisant pour couvrir les besoins de recharge annuels d&apos;un véhicule électrique parcourant 15 000 km (environ 2 500 kWh). Les bornes intelligentes peuvent etre programmees pour maximiser l&apos;utilisation de la production solaire, rechargeant le véhicule lorsque le soleil brille et minimisant le recours au réseau.
          </p>
          <p>
            Nos guides detailles sur la recharge couvrent chacun de ces sujets en profondeur. Que vous soyez un futur acheteur cherchant a comprendre les bases ou un proprietaire experimente souhaitant optimiser son experience de recharge, vous trouverez dans nos articles toutes les informations pratiques et a jour pour recharger efficacement votre voiture électrique en France.
          </p>

          <AuteurBio />

          <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
            <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
              <li>GIREVE — Tableau de bord des infrastructures de recharge ouvertes au public, T1 2026</li>
              <li>Avere-France — Baromètre de la recharge publique, données mensuelles 2025-2026</li>
              <li>Enedis — Guide technique raccordement IRVE et normes d&apos;installation</li>
              <li>Programme ADVENIR — Conditions de subvention pour bornes en copropriété et entreprise, 2026</li>
              <li>Code de l&apos;énergie, art. L353-12 — Droit à la prise en copropriété</li>
              <li>EDF — Grille tarifaire réglementée (tarif bleu) heures pleines / heures creuses, 2026</li>
              <li>Ionity, TotalEnergies, Electra, Tesla, Fastned — Grilles tarifaires publiques et conditions d&apos;abonnement</li>
              <li>Norme ISO 15118 — Spécification technique Plug &amp; Charge pour la recharge automatisée</li>
              <li>ADEME — Guide pratique « Installer une borne de recharge chez soi », édition 2025</li>
              <li>RTE — Perspectives V2G et flexibilité du réseau électrique, rapport 2025</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
