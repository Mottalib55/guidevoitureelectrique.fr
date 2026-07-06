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

        {/* Contenu redactionnel étendu */}
        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Analyse approfondie du marché des voitures électriques chinoises en France en 2026</h2>
          <p>
            Le marché automobile français vit une transformation sans précédent. Après des décennies de domination incontestée par les constructeurs européens, japonais et américains, l&apos;arrivée massive des constructeurs chinois de véhicules électriques redistribue les cartes. En 2026, les marques chinoises représentent environ <strong>12 % des immatriculations de véhicules électriques en France</strong> et <strong>25 % a l&apos;échelle européenne</strong>. Ce phénomène, loin d&apos;être passager, s&apos;inscrit dans une stratégie industrielle de long terme portée par des investissements colossaux et une maîtrise technologique croissante.
          </p>
          <p>
            Ce dossier propose une analyse journalistique approfondie de chaque constructeur chinois present sur le marché français, examine les enjeux réglementaires et commerciaux, et vous aide a déterminer si un véhicule chinois constitue un choix pertinent pour vous en 2026.
          </p>

          <h2>BYD : le géant qui defie Tesla</h2>
          <p>
            <strong>Build Your Dreams</strong>, c&apos;est le nom complet de BYD, fondé en 1995 a Shenzhen par Wang Chuanfu, un chimiste devenu industriel. Initialement fabricant de batteries rechargeables pour téléphones portables, BYD est devenu en 2024 le <strong>premier constructeur mondial de véhicules électriques</strong> en volume de ventes, dépassant Tesla pour la première fois sur les ventes de véhicules 100 % électriques.
          </p>
          <p>
            L&apos;avantage stratégique de BYD est son <strong>intégration verticale</strong> unique dans l&apos;industrie. L&apos;entreprise fabrique elle-même ses cellules de batterie, ses moteurs électriques, ses semi-conducteurs de puissance et même les systèmes electroniques embarques. Cette maîtrise de l&apos;ensemble de la chaine de valeur lui permet de maîtriser les coûts et d&apos;innover plus rapidement que ses concurrents qui dependent de fournisseurs externes.
          </p>
          <p>
            La technologie phare de BYD est la <strong>batterie Blade</strong>, une architecture LFP (lithium-fer-phosphate) qui se distingue par une sécurité exceptionnelle. Lors du test de pénétration par clou (un clou en acier traverse la cellule), la batterie Blade ne s&apos;enflamme pas et ne dégage aucune fumee, contrairement aux batteries NMC (nickel-manganese-cobalt) traditionnelles. Cette technologie LFP offre également une durée de vie supérieure (plus de 3 000 cycles, soit potentiellement 1 million de kilomètres), une meilleure résistance aux températures extrêmes, et un coût de fabrication inférieur.
          </p>
          <p>
            En France, BYD propose en 2026 plusieurs modèles couvrant du segment B au segment D : le <strong>BYD Dolphin</strong> (citadine, a partir de 27 990 euros), le <strong>BYD Atto 3</strong> (SUV compact, a partir de 33 990 euros), le <strong>BYD Seal</strong> (berline sportive, a partir de 42 990 euros), et le <strong>BYD Tang</strong> (grand SUV, a partir de 69 990 euros). La marque a également lancé la <strong>BYD Seagull</strong> sous le nom BYD Dolphin Mini en Europe, une micro-citadine a un prix extrêmement compétitif.
          </p>
          <p>
            Le principal obstacle pour BYD en France reste le <strong>bonus écologique</strong>. Les modèles actuellement importés de Chine ne bénéficient pas du bonus de 4 000 euros, ce qui renchérit leur prix réel face aux concurrents européens éligibles. BYD répond a ce défi en construisant deux usines en Europe : une en <strong>Hongrie</strong> (ouverture prévue fin 2026) et une en <strong>Turquie</strong> (2027). Ces usines permettront aux véhicules BYD d&apos;obtenir le score environnemental nécessaire pour l&apos;éligibilité au bonus.
          </p>

          <h2>MG (SAIC Motor) : le plus implante en France</h2>
          <p>
            MG est un cas fascinant de résurrection de marque. Fondée en 1924 a Oxford, en Angleterre, la marque mythique des roadsters britanniques a connu de multiples propriétaires avant d&apos;être rachetée en 2007 par le groupe chinois <strong>SAIC Motor</strong>, le plus grand constructeur automobile chinois par le chiffre d&apos;affaires. Sous la direction de SAIC, MG est devenue une marque résolument électrique, capitalisant sur son heritage britannique pour séduire les acheteurs européens.
          </p>
          <p>
            MG dispose du <strong>réseau de distribution le plus développé</strong> parmi les constructeurs chinois en France, avec plus de 130 points de vente et après-vente couvrant l&apos;ensemble du territoire. C&apos;est un avantage considérable en termes de confiance des acheteurs et de praticité du service après-vente.
          </p>
          <p>
            Le produit phare de MG en France est la <strong>MG4</strong>, une compacte électrique lancée en 2022 qui a immédiatement bouscule le segment par son rapport prestations/prix imbattable. A partir de 27 990 euros (version Standard 51 kWh, 350 km d&apos;autonomie WLTP), la MG4 offre un chassis dynamique et bien équilibré, un espace intérieur généreux, et une garantie de 7 ans. La version Extended Range (64 kWh, 450 km WLTP) reste sous les 33 000 euros, un tarif difficilement égalable par la concurrence européenne.
          </p>
          <p>
            En 2026, la gamme MG s&apos;est élargie avec la <strong>MG3 Hybrid+</strong> (hybride, pas 100 % électrique), le <strong>MG ZS EV</strong> (SUV compact électrique), le <strong>MG Marvel R</strong> (SUV familial), et le <strong>MG Cyberster</strong> (roadster électrique sportif, un clin d&apos;oeil aux racines de la marque). MG explore également l&apos;assemblage en Europe pour contourner les droits de douane supplémentaires imposes par l&apos;UE et retrouver l&apos;éligibilité au bonus écologique français.
          </p>

          <h2>Leapmotor : le pari Stellantis</h2>
          <p>
            Leapmotor est un constructeur fondé en 2015 a Hangzhou, dans la province du Zhejiang. Ce qui distingue Leapmotor de ses concurrents chinois en Europe, c&apos;est sa <strong>joint-venture avec Stellantis</strong> (maison mere de Peugeot, Citroen, Fiat, Opel). Stellantis a pris une participation de 21 % dans Leapmotor et a créé la coentreprise <strong>Leapmotor International</strong>, détenue a 51 % par Stellantis, pour distribuer les véhicules Leapmotor en dehors de la Chine.
          </p>
          <p>
            Cette alliance stratégique offre a Leapmotor des avantages considérables : l&apos;accès au réseau de distribution de Stellantis (le plus vaste d&apos;Europe), l&apos;utilisation des usines Stellantis en Europe pour l&apos;assemblage local, et la credibilite d&apos;un partenaire europeen etabli. Le <strong>Leapmotor T03</strong>, une micro-citadine électrique a partir de 18 900 euros, est deja assemblé dans l&apos;usine Stellantis de Tychy, en Pologne, ce qui le rend <strong>éligible au bonus écologique</strong> français.
          </p>
          <p>
            Le <strong>Leapmotor C10</strong>, un SUV familial a partir de 36 400 euros, est l&apos;autre modèle phare de la marque. Plus spacieux qu&apos;un Peugeot e-2008 et moins cher, il propose une batterie de 69 kWh et une autonomie réelle d&apos;environ 340 km. L&apos;assemblage europeen du C10 est prévu pour 2026, ce qui devrait le rendre éligible au bonus écologique.
          </p>

          <h2>Xpeng : la technologie au service de la conduite</h2>
          <p>
            Fonde en 2014 a Guangzhou par He Xiaopeng (un ancien cadre d&apos;Alibaba), Xpeng se positionne comme le <strong>Tesla chinois</strong> : un constructeur technologique dont l&apos;obsession est la conduite autonome et la connectivite. Son système de conduite autonome <strong>XNGP</strong> est considéré par de nombreux experts comme le plus avance du marché, surpassant même l&apos;Autopilot de Tesla en termes de capacites en milieu urbain.
          </p>
          <p>
            En France, Xpeng propose le <strong>G6</strong>, un SUV coupe électrique positionne face au Tesla Model Y. A partir de 42 990 euros, le G6 offre une architecture 800V permettant une charge de 10 a 80 % en seulement 20 minutes, une autonomie WLTP de 570 km (version Grande Autonomie), et un équipement technologique de premier plan : écran central de 14,96 pouces, système audio de 18 haut-parleurs, et une suite ADAS complète.
          </p>
          <p>
            La presence de Xpeng en France reste cependant limitée. La marque dispose de quelques showrooms dans les grandes villes (Paris, Lyon, Marseille) et d&apos;un réseau de service après-vente en construction. L&apos;absence d&apos;éligibilité au bonus écologique (les véhicules sont importés de Chine) et un prix positionne en face de concurrents européens bien établis rendent la conquete du marché français plus difficile.
          </p>

          <h2>Zeekr : le premium selon Geely</h2>
          <p>
            Zeekr est la marque premium électrique du groupe <strong>Geely</strong>, le conglomerat chinois qui possede également Volvo Cars, Polestar et Lotus. Lancee en 2021, Zeekr vise directement le segment premium occupe par Tesla, BMW et Mercedes.
          </p>
          <p>
            Le <strong>Zeekr 001</strong>, une grande berline shooting brake a l&apos;allure spectaculaire, est le vaisseau amiral de la marque. Avec une batterie de 100 kWh, une autonomie dépassant 600 km WLTP, et une architecture 800V permettant une charge ultra-rapide (de 10 a 80 % en moins de 25 minutes), le 001 se positionne comme une alternative sérieuse au Tesla Model S et a la Porsche Taycan, a un prix nettement inférieur (a partir de 55 000 euros).
          </p>
          <p>
            Le <strong>Zeekr X</strong>, un SUV compact plus accessible (a partir de 42 990 euros), cible le segment du Volvo EX30 et du BMW iX1. La qualite de fabrication et de materiaux est saluee par la presse spécialisée, beneficiant clairement de l&apos;expertise de Geely dans le premium via Volvo.
          </p>
          <p>
            Zeekr partage avec Xpeng le défi de construire un réseau de distribution et de service en France. La marque s&apos;appuie sur des showrooms dans les principales métropoles et développe progressivement un réseau d&apos;ateliers agréés.
          </p>

          <h2>La question des droits de douane européens</h2>
          <p>
            Depuis octobre 2024, l&apos;Union européenne a impose des <strong>droits de douane supplémentaires</strong> sur les véhicules électriques importés de Chine, en plus des droits existants de 10 %. Ces surtaxes, qui resultent d&apos;une enquête anti-subventions, varient selon les constructeurs :
          </p>
          <ul>
            <li><strong>BYD :</strong> +17,0 % (total : 27,0 %)</li>
            <li><strong>Geely (Zeekr, Polestar fabriqué en Chine) :</strong> +19,3 % (total : 29,3 %)</li>
            <li><strong>SAIC (MG) :</strong> +36,3 % (total : 46,3 %)</li>
            <li><strong>Autres constructeurs (Xpeng, Nio...) :</strong> +20,7 % (total : 30,7 %)</li>
            <li><strong>Tesla (usine de Shanghai exportant vers l&apos;Europe) :</strong> +7,8 % (total : 17,8 %)</li>
          </ul>
          <p>
            Ces droits de douane ont un impact significatif sur les prix. Pour un véhicule de 30 000 euros en sortie d&apos;usine, la surtaxe SAIC de 36,3 % représente environ 10 890 euros, ce qui explique pourquoi MG a deja répercuté partiellement ces hausses sur ses tarifs en France. BYD, avec une surtaxe plus modeste de 17 %, est moins impactee.
          </p>
          <p>
            La réponse stratégique des constructeurs chinois est l&apos;ouverture d&apos;usines en Europe pour produire localement et échapper aux droits de douane. Cette vague d&apos;investissements industriels, si elle se concrétise, pourrait transformer le paysage automobile europeen dans les années a venir.
          </p>

          <h2>Sécurité : les résultats Euro NCAP des véhicules chinois</h2>
          <p>
            La sécurité est naturellement une préoccupation majeure des acheteurs. Les véhicules chinois se sont remarquablement bien comportes aux tests Euro NCAP, l&apos;organisme indépendant de référence pour la sécurité automobile en Europe :
          </p>
          <ul>
            <li><strong>BYD Atto 3 :</strong> 5 étoiles Euro NCAP (2023) : protection adultes 91 %, enfants 89 %, piétons 69 %, aide a la conduite 73 %</li>
            <li><strong>BYD Seal :</strong> 5 étoiles Euro NCAP (2023) : protection adultes 91 %, enfants 89 %, piétons 74 %, aide a la conduite 77 %</li>
            <li><strong>MG4 :</strong> 4 étoiles Euro NCAP (2022) : note pénalisée par l&apos;absence de certaines aides a la conduite dans la version de base</li>
            <li><strong>Xpeng G9 :</strong> 5 étoiles Euro NCAP (2023) : parmi les meilleurs résultats de l&apos;année</li>
            <li><strong>Leapmotor T03 :</strong> 3 étoiles Euro NCAP (2023) : note cohérente avec le positionnement entry-level du véhicule</li>
            <li><strong>Zeekr 001 :</strong> 5 étoiles Euro NCAP (2023) : scores excellents dans toutes les catégories</li>
          </ul>
          <p>
            Ces résultats démontrent que les véhicules chinois sont désormais au niveau des meilleurs standards européens en matière de sécurité passive et active. La préoccupation historique sur la &quot;qualite chinoise&quot; n&apos;a plus de fondement objectif pour les modèles distribués officiellement en Europe.
          </p>

          <h2>La question de la revente : un point de vigilance</h2>
          <p>
            La valeur de revente est probablement le point le plus délicat des véhicules chinois en France. Plusieurs facteurs jouent en leur défaveur sur le marché de l&apos;occasion :
          </p>
          <ul>
            <li><strong>Notoriete limitée :</strong> les marques chinoises sont encore peu connues du grand public. Un acheteur d&apos;occasion préférera souvent une Renault ou une Volkswagen dont il connait la marque.</li>
            <li><strong>Reseau SAV en construction :</strong> l&apos;acheteur d&apos;occasion se préoccupe de la facilité d&apos;entretien. Un réseau de réparation dense est rassurant.</li>
            <li><strong>Incertitude sur la pérennité de la marque :</strong> certains acheteurs craignent que les marques chinoises se retirent du marché français, rendant le SAV problematique.</li>
            <li><strong>Evolution rapide des modèles :</strong> les constructeurs chinois mettent a jour leurs modèles très fréquemment (parfois tous les 12 mois), ce qui peut accélérer l&apos;obsolescence perçue.</li>
          </ul>
          <p>
            Nous recommandons de prendre en compte une <strong>décote majorée de 5 a 10 points</strong> par rapport aux marques établies lorsque vous evaluez le coût total de possession d&apos;un véhicule chinois. Par exemple, si un VE europeen décote de 48 % sur 4 ans, prévoyez 53 a 58 % pour un équivalent chinois. Cette prudence pourrait s&apos;avérer conservative si les marques chinoises s&apos;installent durablement, mais elle protège votre investissement en cas de scénario defavorable.
          </p>

          <h2>Faut-il acheter une voiture électrique chinoise ? Notre analyse</h2>
          <p>
            En conclusion de cette analyse, voici notre grille de décision pour 2026 :
          </p>
          <ul>
            <li><strong>Achetez chinois si :</strong> vous cherchez le meilleur rapport équipement/prix, vous êtes prêt a supporter une décote potentiellement plus forte, vous n&apos;avez pas besoin du bonus écologique (ou le modèle est éligible), et vous êtes a l&apos;aise avec un réseau SAV en construction.</li>
            <li><strong>Privilégiez les marques avec le meilleur réseau en France :</strong> MG (plus de 130 points de vente), Leapmotor (via Stellantis), puis BYD (réseau en expansion rapide).</li>
            <li><strong>Privilégiez les modèles assemblés en Europe :</strong> Leapmotor T03 (Pologne), et bientôt les BYD d&apos;usines hongroise et turque. Ces modèles bénéficient du bonus écologique et échappent aux surtaxes douanières.</li>
            <li><strong>En premium, comparez soigneusement :</strong> le Zeekr 001 et le Xpeng G6 offrent des prestations remarquables, mais face a un Tesla Model 3 Highland (assemblée a Berlin, éligible au bonus) ou un Hyundai Ioniq 5 (excellent réseau SAV), l&apos;avantage financier est moins évident une fois les aides prises en compte.</li>
          </ul>
          <p>
            Le marché évolué très rapidement. Les decisions d&apos;implantation industrielle en cours (usines BYD, potentielle usine MG, extension Leapmotor) pourraient transformer l&apos;equation d&apos;ici 2027-2028, en rendant les véhicules chinois éligibles au bonus et en renforçant les réseaux de distribution et de service.
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