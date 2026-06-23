import Link from "next/link";
import type { Metadata } from "next";
import { marquesChinoises } from "@/data/marques";
import { modeles } from "@/data/modeles";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import CarteModele from "@/components/CarteModele";
import AuteurBio from "@/components/AuteurBio";

export const metadata: Metadata = buildMetadata({
  title: "Voitures électriques chinoises 2026 : guide complet",
  description:
    "BYD, MG, Leapmotor, Xpeng, Zeekr : tous les modèles chinois vendus en France. Comparatif prix, autonomie, qualité, éligibilité bonus et fiabilité réelle.",
  path: "/marques/voitures-chinoises/",
});

export default function PageMarquesChinoises() {
  const modelesChinois = modeles.filter((m) => m.origine === "Chine");

  const euro = (n: number) =>
    new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Marques", href: "/marques/voitures-chinoises/" },
          { name: "Voitures chinoises", href: "/marques/voitures-chinoises/" },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        <header style={{ marginBottom: 32 }}>
          <p
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--faint)",
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            {marquesChinoises.length} marques · {modelesChinois.length} modèles
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 42px)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Voitures électriques chinoises en France
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 700, lineHeight: 1.5 }}>
            Guide complet des constructeurs chinois de véhicules électriques disponibles
            sur le marché français : BYD, MG, Leapmotor, Xpeng, Zeekr. Prix, qualité,
            fiabilité et éligibilité au bonus écologique.
          </p>
        </header>

        {/* Contenu rédactionnel */}
        <div className="prose">
          <h2>L&apos;offensive chinoise sur le marché électrique européen</h2>
          <p>
            Les constructeurs chinois ont profondément transformé le paysage de la voiture
            électrique en Europe. En quelques années, des marques comme BYD, MG (SAIC Motor),
            Leapmotor, Xpeng et Zeekr (Geely) se sont imposées avec des véhicules offrant
            un rapport prestations/prix souvent imbattable. En 2024, les marques chinoises
            représentaient environ 20 % des immatriculations de véhicules électriques en Europe.
          </p>
          <p>
            Cette montée en puissance s&apos;explique par plusieurs facteurs : une avance
            technologique sur les batteries (BYD maîtrise l&apos;intégralité de la chaîne de
            valeur, de la cellule à la voiture), des coûts de production inférieurs, et une
            volonté politique chinoise de dominer l&apos;industrie automobile mondiale. La Chine
            représente aujourd&apos;hui plus de 60 % de la production mondiale de véhicules
            électriques.
          </p>

          <h2>Le bonus écologique : le frein principal</h2>
          <p>
            Le principal obstacle pour les acheteurs français est l&apos;éligibilité au bonus
            écologique. La France a mis en place un score environnemental qui prend en compte
            l&apos;empreinte carbone de fabrication du véhicule. Les modèles fabriqués en Chine
            sont pénalisés par le mix énergétique chinois (fortement carboné) et le transport
            maritime. En conséquence, la quasi-totalité des véhicules chinois importés ne sont
            pas éligibles au bonus de 4 000 €, ce qui renchérit leur prix effectif par rapport
            aux alternatives européennes éligibles.
          </p>
          <p>
            Certains constructeurs contournent cet obstacle en assemblant leurs véhicules en
            Europe. Leapmotor, via sa joint-venture avec Stellantis, assemble le T03 en Pologne.
            BYD a annoncé une usine en Hongrie et une en Turquie. MG (SAIC) envisage une
            production en Europe. Ces stratégies pourraient changer la donne dans les prochaines
            années.
          </p>

          <h2>Qualité et fiabilité : où en est-on ?</h2>
          <p>
            La qualité des voitures chinoises a considérablement progressé. Les batteries Blade
            de BYD (technologie LFP, lithium-fer-phosphate) sont reconnues pour leur sécurité
            exceptionnelle : elles résistent au test de pénétration par clou sans s&apos;enflammer,
            contrairement aux batteries NMC traditionnelles. La technologie LFP offre également
            une durée de vie supérieure (plus de 3 000 cycles de charge complets).
          </p>
          <p>
            Côté technologies embarquées, les constructeurs chinois sont souvent en avance :
            écrans larges, systèmes ADAS avancés (le XNGP de Xpeng rivalise avec l&apos;Autopilot
            de Tesla), connectivité 5G, mises à jour OTA. Le design intérieur et extérieur
            s&apos;est aussi considérablement amélioré, notamment chez Zeekr et Xpeng.
          </p>
          <p>
            Le point faible reste le réseau de distribution et de SAV. MG dispose du réseau le
            plus développé en France (plus de 120 points de vente). BYD déploie progressivement
            son réseau. Leapmotor s&apos;appuie sur le réseau Stellantis. Xpeng et Zeekr sont
            encore en phase d&apos;implantation initiale avec quelques showrooms dans les grandes
            villes.
          </p>

          <h2>Quel modèle chinois choisir ?</h2>
          <p>
            Le choix dépend de votre budget et de vos besoins. Pour une citadine urbaine à prix
            mini, la Leapmotor T03 (~18 900 €) est imbattable. Pour une compacte polyvalente, la
            MG4 (~27 990 €) offre le meilleur rapport qualité-prix du segment. Pour un SUV
            familial, le BYD Atto 3 (~33 990 €) ou le Leapmotor C10 (~36 400 €) sont des
            alternatives crédibles aux modèles européens. En premium, le Xpeng G6 et le Zeekr 001
            rivalisent avec Tesla sur les performances et la charge rapide.
          </p>
        </div>

        {/* Marques */}
        <section style={{ marginTop: 48 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 20,
            }}
          >
            Les marques chinoises présentes en France
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {marquesChinoises.map((m) => (
              <Link
                key={m.slug}
                href={`/marques/${m.slug}/`}
                className="carte-modele"
                style={{ padding: 20 }}
              >
                <h3 className="carte-modele-nom" style={{ marginBottom: 4, fontSize: 18 }}>
                  {m.nom}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.4 }}>
                  {m.pays} · Fondé en {m.anneeCreation}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Tableau comparatif */}
        <section style={{ marginTop: 48 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            Tous les modèles chinois comparés
          </h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Modèle</th>
                  <th>Marque</th>
                  <th>Prix</th>
                  <th>Autonomie réelle</th>
                  <th>Charge rapide</th>
                  <th>Bonus</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {modelesChinois
                  .sort((a, b) => a.prixBase - b.prixBase)
                  .map((m) => (
                    <tr key={m.slug}>
                      <td><Link href={`/modeles/${m.slug}/`}>{m.modele}</Link></td>
                      <td><Link href={`/marques/${m.marqueSlug}/`}>{m.marque}</Link></td>
                      <td>{euro(m.prixBase)}</td>
                      <td>{m.autonomieReelle} km</td>
                      <td>{m.chargeRapideKw} kW</td>
                      <td>{m.aidesEligible ? "Oui" : "Non"}</td>
                      <td><strong>{m.note}/10</strong></td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Cartes modèles */}
        <section style={{ marginTop: 40 }}>
          <div className="grid-modeles">
            {modelesChinois
              .sort((a, b) => a.prixBase - b.prixBase)
              .map((m) => (
                <CarteModele key={m.slug} modele={m} />
              ))}
          </div>
        </section>

        {/* Contenu redactionnel etendu */}
        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Analyse approfondie du marche des voitures electriques chinoises en France en 2026</h2>
          <p>
            Le marche automobile francais vit une transformation sans precedent. Apres des decennies de domination incontestee par les constructeurs europeens, japonais et americains, l&apos;arrivee massive des constructeurs chinois de vehicules electriques redistribue les cartes. En 2026, les marques chinoises representent environ <strong>12 % des immatriculations de vehicules electriques en France</strong> et <strong>25 % a l&apos;echelle europeenne</strong>. Ce phenomene, loin d&apos;etre passager, s&apos;inscrit dans une strategie industrielle de long terme portee par des investissements colossaux et une maitrise technologique croissante.
          </p>
          <p>
            Ce dossier propose une analyse journalistique approfondie de chaque constructeur chinois present sur le marche francais, examine les enjeux reglementaires et commerciaux, et vous aide a determiner si un vehicule chinois constitue un choix pertinent pour vous en 2026.
          </p>

          <h2>BYD : le geant qui defie Tesla</h2>
          <p>
            <strong>Build Your Dreams</strong>, c&apos;est le nom complet de BYD, fonde en 1995 a Shenzhen par Wang Chuanfu, un chimiste devenu industriel. Initialement fabricant de batteries rechargeables pour telephones portables, BYD est devenu en 2024 le <strong>premier constructeur mondial de vehicules electriques</strong> en volume de ventes, depassant Tesla pour la premiere fois sur les ventes de vehicules 100 % electriques.
          </p>
          <p>
            L&apos;avantage strategique de BYD est son <strong>integration verticale</strong> unique dans l&apos;industrie. L&apos;entreprise fabrique elle-meme ses cellules de batterie, ses moteurs electriques, ses semi-conducteurs de puissance et meme les systemes electroniques embarques. Cette maitrise de l&apos;ensemble de la chaine de valeur lui permet de maitriser les couts et d&apos;innover plus rapidement que ses concurrents qui dependent de fournisseurs externes.
          </p>
          <p>
            La technologie phare de BYD est la <strong>batterie Blade</strong>, une architecture LFP (lithium-fer-phosphate) qui se distingue par une securite exceptionnelle. Lors du test de penetration par clou (un clou en acier traverse la cellule), la batterie Blade ne s&apos;enflamme pas et ne degage aucune fumee, contrairement aux batteries NMC (nickel-manganese-cobalt) traditionnelles. Cette technologie LFP offre egalement une duree de vie superieure (plus de 3 000 cycles, soit potentiellement 1 million de kilometres), une meilleure resistance aux temperatures extremes, et un cout de fabrication inferieur.
          </p>
          <p>
            En France, BYD propose en 2026 plusieurs modeles couvrant du segment B au segment D : le <strong>BYD Dolphin</strong> (citadine, a partir de 27 990 euros), le <strong>BYD Atto 3</strong> (SUV compact, a partir de 33 990 euros), le <strong>BYD Seal</strong> (berline sportive, a partir de 42 990 euros), et le <strong>BYD Tang</strong> (grand SUV, a partir de 69 990 euros). La marque a egalement lance la <strong>BYD Seagull</strong> sous le nom BYD Dolphin Mini en Europe, une micro-citadine a un prix extremement competitif.
          </p>
          <p>
            Le principal obstacle pour BYD en France reste le <strong>bonus ecologique</strong>. Les modeles actuellement importes de Chine ne beneficient pas du bonus de 4 000 euros, ce qui rencherit leur prix reel face aux concurrents europeens eligibles. BYD repond a ce defi en construisant deux usines en Europe : une en <strong>Hongrie</strong> (ouverture prevue fin 2026) et une en <strong>Turquie</strong> (2027). Ces usines permettront aux vehicules BYD d&apos;obtenir le score environnemental necessaire pour l&apos;eligibilite au bonus.
          </p>

          <h2>MG (SAIC Motor) : le plus implante en France</h2>
          <p>
            MG est un cas fascinant de resurrection de marque. Fondee en 1924 a Oxford, en Angleterre, la marque mythique des roadsters britanniques a connu de multiples proprietaires avant d&apos;etre rachetee en 2007 par le groupe chinois <strong>SAIC Motor</strong>, le plus grand constructeur automobile chinois par le chiffre d&apos;affaires. Sous la direction de SAIC, MG est devenue une marque resolument electrique, capitalisant sur son heritage britannique pour seduire les acheteurs europeens.
          </p>
          <p>
            MG dispose du <strong>reseau de distribution le plus developpe</strong> parmi les constructeurs chinois en France, avec plus de 130 points de vente et apres-vente couvrant l&apos;ensemble du territoire. C&apos;est un avantage considerable en termes de confiance des acheteurs et de praticite du service apres-vente.
          </p>
          <p>
            Le produit phare de MG en France est la <strong>MG4</strong>, une compacte electrique lancee en 2022 qui a immediatement bouscule le segment par son rapport prestations/prix imbattable. A partir de 27 990 euros (version Standard 51 kWh, 350 km d&apos;autonomie WLTP), la MG4 offre un chassis dynamique et bien equilibre, un espace interieur genereux, et une garantie de 7 ans. La version Extended Range (64 kWh, 450 km WLTP) reste sous les 33 000 euros, un tarif difficilement egalable par la concurrence europeenne.
          </p>
          <p>
            En 2026, la gamme MG s&apos;est elargie avec la <strong>MG3 Hybrid+</strong> (hybride, pas 100 % electrique), le <strong>MG ZS EV</strong> (SUV compact electrique), le <strong>MG Marvel R</strong> (SUV familial), et le <strong>MG Cyberster</strong> (roadster electrique sportif, un clin d&apos;oeil aux racines de la marque). MG explore egalement l&apos;assemblage en Europe pour contourner les droits de douane supplementaires imposes par l&apos;UE et retrouver l&apos;eligibilite au bonus ecologique francais.
          </p>

          <h2>Leapmotor : le pari Stellantis</h2>
          <p>
            Leapmotor est un constructeur fonde en 2015 a Hangzhou, dans la province du Zhejiang. Ce qui distingue Leapmotor de ses concurrents chinois en Europe, c&apos;est sa <strong>joint-venture avec Stellantis</strong> (maison mere de Peugeot, Citroen, Fiat, Opel). Stellantis a pris une participation de 21 % dans Leapmotor et a cree la coentreprise <strong>Leapmotor International</strong>, detenue a 51 % par Stellantis, pour distribuer les vehicules Leapmotor en dehors de la Chine.
          </p>
          <p>
            Cette alliance strategique offre a Leapmotor des avantages considerables : l&apos;acces au reseau de distribution de Stellantis (le plus vaste d&apos;Europe), l&apos;utilisation des usines Stellantis en Europe pour l&apos;assemblage local, et la credibilite d&apos;un partenaire europeen etabli. Le <strong>Leapmotor T03</strong>, une micro-citadine electrique a partir de 18 900 euros, est deja assemble dans l&apos;usine Stellantis de Tychy, en Pologne, ce qui le rend <strong>eligible au bonus ecologique</strong> francais.
          </p>
          <p>
            Le <strong>Leapmotor C10</strong>, un SUV familial a partir de 36 400 euros, est l&apos;autre modele phare de la marque. Plus spacieux qu&apos;un Peugeot e-2008 et moins cher, il propose une batterie de 69 kWh et une autonomie reelle d&apos;environ 340 km. L&apos;assemblage europeen du C10 est prevu pour 2026, ce qui devrait le rendre eligible au bonus ecologique.
          </p>

          <h2>Xpeng : la technologie au service de la conduite</h2>
          <p>
            Fonde en 2014 a Guangzhou par He Xiaopeng (un ancien cadre d&apos;Alibaba), Xpeng se positionne comme le <strong>Tesla chinois</strong> : un constructeur technologique dont l&apos;obsession est la conduite autonome et la connectivite. Son systeme de conduite autonome <strong>XNGP</strong> est considere par de nombreux experts comme le plus avance du marche, surpassant meme l&apos;Autopilot de Tesla en termes de capacites en milieu urbain.
          </p>
          <p>
            En France, Xpeng propose le <strong>G6</strong>, un SUV coupe electrique positionne face au Tesla Model Y. A partir de 42 990 euros, le G6 offre une architecture 800V permettant une charge de 10 a 80 % en seulement 20 minutes, une autonomie WLTP de 570 km (version Grande Autonomie), et un equipement technologique de premier plan : ecran central de 14,96 pouces, systeme audio de 18 haut-parleurs, et une suite ADAS complete.
          </p>
          <p>
            La presence de Xpeng en France reste cependant limitee. La marque dispose de quelques showrooms dans les grandes villes (Paris, Lyon, Marseille) et d&apos;un reseau de service apres-vente en construction. L&apos;absence d&apos;eligibilite au bonus ecologique (les vehicules sont importes de Chine) et un prix positionne en face de concurrents europeens bien etablis rendent la conquete du marche francais plus difficile.
          </p>

          <h2>Zeekr : le premium selon Geely</h2>
          <p>
            Zeekr est la marque premium electrique du groupe <strong>Geely</strong>, le conglomerat chinois qui possede egalement Volvo Cars, Polestar et Lotus. Lancee en 2021, Zeekr vise directement le segment premium occupe par Tesla, BMW et Mercedes.
          </p>
          <p>
            Le <strong>Zeekr 001</strong>, une grande berline shooting brake a l&apos;allure spectaculaire, est le vaisseau amiral de la marque. Avec une batterie de 100 kWh, une autonomie depassant 600 km WLTP, et une architecture 800V permettant une charge ultra-rapide (de 10 a 80 % en moins de 25 minutes), le 001 se positionne comme une alternative serieuse au Tesla Model S et a la Porsche Taycan, a un prix nettement inferieur (a partir de 55 000 euros).
          </p>
          <p>
            Le <strong>Zeekr X</strong>, un SUV compact plus accessible (a partir de 42 990 euros), cible le segment du Volvo EX30 et du BMW iX1. La qualite de fabrication et de materiaux est saluee par la presse specialisee, beneficiant clairement de l&apos;expertise de Geely dans le premium via Volvo.
          </p>
          <p>
            Zeekr partage avec Xpeng le defi de construire un reseau de distribution et de service en France. La marque s&apos;appuie sur des showrooms dans les principales metropoles et developpe progressivement un reseau d&apos;ateliers agrees.
          </p>

          <h2>La question des droits de douane europeens</h2>
          <p>
            Depuis octobre 2024, l&apos;Union europeenne a impose des <strong>droits de douane supplementaires</strong> sur les vehicules electriques importes de Chine, en plus des droits existants de 10 %. Ces surtaxes, qui resultent d&apos;une enquete anti-subventions, varient selon les constructeurs :
          </p>
          <ul>
            <li><strong>BYD :</strong> +17,0 % (total : 27,0 %)</li>
            <li><strong>Geely (Zeekr, Polestar fabrique en Chine) :</strong> +19,3 % (total : 29,3 %)</li>
            <li><strong>SAIC (MG) :</strong> +36,3 % (total : 46,3 %)</li>
            <li><strong>Autres constructeurs (Xpeng, Nio...) :</strong> +20,7 % (total : 30,7 %)</li>
            <li><strong>Tesla (usine de Shanghai exportant vers l&apos;Europe) :</strong> +7,8 % (total : 17,8 %)</li>
          </ul>
          <p>
            Ces droits de douane ont un impact significatif sur les prix. Pour un vehicule de 30 000 euros en sortie d&apos;usine, la surtaxe SAIC de 36,3 % represente environ 10 890 euros, ce qui explique pourquoi MG a deja repercute partiellement ces hausses sur ses tarifs en France. BYD, avec une surtaxe plus modeste de 17 %, est moins impactee.
          </p>
          <p>
            La reponse strategique des constructeurs chinois est l&apos;ouverture d&apos;usines en Europe pour produire localement et echapper aux droits de douane. Cette vague d&apos;investissements industriels, si elle se concretise, pourrait transformer le paysage automobile europeen dans les annees a venir.
          </p>

          <h2>Securite : les resultats Euro NCAP des vehicules chinois</h2>
          <p>
            La securite est naturellement une preoccupation majeure des acheteurs. Les vehicules chinois se sont remarquablement bien comportes aux tests Euro NCAP, l&apos;organisme independant de reference pour la securite automobile en Europe :
          </p>
          <ul>
            <li><strong>BYD Atto 3 :</strong> 5 etoiles Euro NCAP (2023) : protection adultes 91 %, enfants 89 %, pietons 69 %, aide a la conduite 73 %</li>
            <li><strong>BYD Seal :</strong> 5 etoiles Euro NCAP (2023) : protection adultes 91 %, enfants 89 %, pietons 74 %, aide a la conduite 77 %</li>
            <li><strong>MG4 :</strong> 4 etoiles Euro NCAP (2022) : note penalisee par l&apos;absence de certaines aides a la conduite dans la version de base</li>
            <li><strong>Xpeng G9 :</strong> 5 etoiles Euro NCAP (2023) : parmi les meilleurs resultats de l&apos;annee</li>
            <li><strong>Leapmotor T03 :</strong> 3 etoiles Euro NCAP (2023) : note coherente avec le positionnement entry-level du vehicule</li>
            <li><strong>Zeekr 001 :</strong> 5 etoiles Euro NCAP (2023) : scores excellents dans toutes les categories</li>
          </ul>
          <p>
            Ces resultats demontrent que les vehicules chinois sont desormais au niveau des meilleurs standards europeens en matiere de securite passive et active. La preoccupation historique sur la &quot;qualite chinoise&quot; n&apos;a plus de fondement objectif pour les modeles distribues officiellement en Europe.
          </p>

          <h2>La question de la revente : un point de vigilance</h2>
          <p>
            La valeur de revente est probablement le point le plus delicat des vehicules chinois en France. Plusieurs facteurs jouent en leur defaveur sur le marche de l&apos;occasion :
          </p>
          <ul>
            <li><strong>Notoriete limitee :</strong> les marques chinoises sont encore peu connues du grand public. Un acheteur d&apos;occasion preferera souvent une Renault ou une Volkswagen dont il connait la marque.</li>
            <li><strong>Reseau SAV en construction :</strong> l&apos;acheteur d&apos;occasion se preoccupe de la facilite d&apos;entretien. Un reseau de reparation dense est rassurant.</li>
            <li><strong>Incertitude sur la perennite de la marque :</strong> certains acheteurs craignent que les marques chinoises se retirent du marche francais, rendant le SAV problematique.</li>
            <li><strong>Evolution rapide des modeles :</strong> les constructeurs chinois mettent a jour leurs modeles tres frequemment (parfois tous les 12 mois), ce qui peut accelerer l&apos;obsolescence percue.</li>
          </ul>
          <p>
            Nous recommandons de prendre en compte une <strong>decote majoree de 5 a 10 points</strong> par rapport aux marques etablies lorsque vous evaluez le cout total de possession d&apos;un vehicule chinois. Par exemple, si un VE europeen decote de 48 % sur 4 ans, prevoyez 53 a 58 % pour un equivalent chinois. Cette prudence pourrait s&apos;averer conservative si les marques chinoises s&apos;installent durablement, mais elle protege votre investissement en cas de scenario defavorable.
          </p>

          <h2>Faut-il acheter une voiture electrique chinoise ? Notre analyse</h2>
          <p>
            En conclusion de cette analyse, voici notre grille de decision pour 2026 :
          </p>
          <ul>
            <li><strong>Achetez chinois si :</strong> vous cherchez le meilleur rapport equipement/prix, vous etes pret a supporter une decote potentiellement plus forte, vous n&apos;avez pas besoin du bonus ecologique (ou le modele est eligible), et vous etes a l&apos;aise avec un reseau SAV en construction.</li>
            <li><strong>Privilegiez les marques avec le meilleur reseau en France :</strong> MG (plus de 130 points de vente), Leapmotor (via Stellantis), puis BYD (reseau en expansion rapide).</li>
            <li><strong>Privilegiez les modeles assembles en Europe :</strong> Leapmotor T03 (Pologne), et bientot les BYD d&apos;usines hongroise et turque. Ces modeles beneficient du bonus ecologique et echappent aux surtaxes douanieres.</li>
            <li><strong>En premium, comparez soigneusement :</strong> le Zeekr 001 et le Xpeng G6 offrent des prestations remarquables, mais face a un Tesla Model 3 Highland (assemblee a Berlin, eligible au bonus) ou un Hyundai Ioniq 5 (excellent reseau SAV), l&apos;avantage financier est moins evident une fois les aides prises en compte.</li>
          </ul>
          <p>
            Le marche evolue tres rapidement. Les decisions d&apos;implantation industrielle en cours (usines BYD, potentielle usine MG, extension Leapmotor) pourraient transformer l&apos;equation d&apos;ici 2027-2028, en rendant les vehicules chinois eligibles au bonus et en renforcant les reseaux de distribution et de service.
          </p>
        </div>

        <AuteurBio />

        {/* Sources */}
        <div className="bloc-sources">
          <h3>Sources</h3>
          <ul>
            {marquesChinoises.map((m) => (
              <li key={m.slug}>
                <a href={m.siteOfficiel} target="_blank" rel="noopener noreferrer">
                  Site officiel {m.nom}
                </a>
              </li>
            ))}
            <li>
              <a href="https://www.avere-france.org" target="_blank" rel="noopener noreferrer">
                Avere-France : immatriculations VE
              </a>
            </li>
            <li>
              <a href="https://www.service-public.fr/particuliers/vosdroits/F34014" target="_blank" rel="noopener noreferrer">
                Bonus écologique : service-public.fr
              </a>
            </li>
          </ul>
          <p className="date-maj">Dernière mise à jour : mai 2025</p>
        </div>
      </article>
    </>
  );
}
