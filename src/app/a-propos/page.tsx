import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorByline from "@/components/AuthorByline";
import { buildMetadata } from "@/lib/seo";
import { articleJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "À propos — Guide Voiture Électrique | Mottalib Radif",
  description:
    "Découvrez l'équipe derrière Guide Voiture Électrique : notre mission, notre expertise et notre engagement pour vous aider à choisir la meilleure voiture électrique.",
  path: "/a-propos/",
});

const jsonLd = articleJsonLd({
  title: "À propos — Guide Voiture Électrique",
  description: "Découvrez l'équipe derrière Guide Voiture Électrique : notre mission, notre expertise et notre engagement.",
  path: "/a-propos/",
  datePublished: "2026-05-28",
});

export default function AProposPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "À propos", href: "/a-propos/" },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="section" style={{ paddingTop: 48, paddingBottom: 80 }}>
        {/* ── Author Card ──────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
            padding: "32px 36px",
            border: "1.5px solid var(--line)",
            borderRadius: 20,
            background: "var(--wash)",
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          <Image
            src="/team/mottalib-radif.jpg"
            alt="Mottalib Radif, fondateur de Guide Voiture Électrique"
            width={120}
            height={120}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid var(--accent)",
            }}
          />
          <div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 28,
                letterSpacing: "-0.02em",
                marginBottom: 4,
              }}
            >
              Mottalib Radif
            </h1>
            <p
              style={{
                fontSize: 16,
                color: "var(--accent-deep)",
                fontWeight: 700,
                marginBottom: 4,
              }}
            >
              Passionné d&apos;automobile et expert en mobilité électrique
            </p>
            <p
              style={{
                fontSize: 14,
                color: "var(--muted)",
                fontWeight: 500,
              }}
            >
              MBA INSEAD &middot; Spécialisé dans l&apos;analyse du marché des véhicules électriques
            </p>
          </div>
        </div>

        {/* ── Content ──────────────────────────────────────────── */}
        <AuthorByline date="Mai 2026" />
        <div className="prose">
          <h2>Notre mission</h2>
          <p>
            Guide Voiture Électrique est né d&apos;un constat simple : le marché
            de la voiture électrique en France évolue à une vitesse fulgurante, mais
            l&apos;information accessible au grand public reste souvent fragmentée,
            biaisée par les intérêts commerciaux ou tout simplement difficile à
            comprendre. Notre mission est de combler ce fossé en proposant un
            guide indépendant, rigoureux et accessible qui aide chaque Français à
            faire le meilleur choix possible lorsqu&apos;il envisage de passer à la
            mobilité électrique.
          </p>
          <p>
            Que vous soyez un automobiliste curieux qui se pose ses premières
            questions sur l&apos;autonomie et la recharge, un conducteur convaincu
            qui hésite entre deux modèles, ou un professionnel qui souhaite
            électrifier sa flotte, notre objectif est le même : vous fournir des
            données fiables, des analyses détaillées et des outils pratiques pour
            éclairer votre décision.
          </p>

          <h2>Qui sommes-nous ?</h2>
          <p>
            Guide Voiture Électrique a été fondé par <strong>Mottalib Radif</strong>,
            diplômé d&apos;un MBA de l&apos;<strong>INSEAD</strong> et ingénieur de
            formation. Fort d&apos;une double compétence technique et stratégique,
            Mottalib a travaillé pendant plus de dix ans dans les secteurs de la
            technologie et de l&apos;énergie avant de se consacrer pleinement à la
            transition vers la mobilité électrique. Sa conviction profonde : la
            voiture électrique n&apos;est pas seulement une alternative, mais bien
            l&apos;avenir de la mobilité individuelle en Europe et au-delà.
          </p>
          <p>
            Son parcours multiculturel — ayant vécu et travaillé en France, en
            Asie et au Moyen-Orient — lui confère une vision globale du marché
            automobile qui enrichit chaque analyse publiée sur le site. Il suit
            de près les innovations des constructeurs européens, asiatiques et
            américains pour offrir une perspective complète et nuancée.
          </p>

          <h2>Notre approche éditoriale</h2>
          <p>
            Chaque article, fiche technique et comparatif publié sur Guide Voiture
            Électrique repose sur une méthodologie rigoureuse en trois piliers :
          </p>
          <ul>
            <li>
              <strong>Données constructeurs vérifiées</strong> : nous collectons
              les spécifications officielles auprès des constructeurs et les
              recoupons avec les homologations WLTP, les bases de données du
              ministère de la Transition écologique et les rapports de
              l&apos;ADEME.
            </li>
            <li>
              <strong>Tests indépendants et retours terrain</strong> : nous
              analysons les essais réalisés par les organismes de test reconnus
              (Euro NCAP, Automobile Propre, les associations de consommateurs)
              et intégrons les retours d&apos;expérience des propriétaires via
              les forums et communautés spécialisées.
            </li>
            <li>
              <strong>Calculs et simulateurs transparents</strong> : nos outils
              de calcul (coût total de possession, financement LOA/LLD,
              simulation de recharge) utilisent des formules ouvertes dont les
              hypothèses sont systématiquement expliquées, afin que vous puissiez
              ajuster les paramètres à votre situation personnelle.
            </li>
          </ul>

          <h2>Ce que vous trouverez sur notre site</h2>

          <h3>Fiches techniques détaillées</h3>
          <p>
            Chaque modèle de voiture électrique commercialisé en France dispose
            d&apos;une fiche technique complète : prix catalogue, autonomie WLTP
            et autonomie réelle estimée, puissance de recharge AC et DC, capacité
            de la batterie, dimensions, volume du coffre, score Euro NCAP,
            garantie constructeur et disponibilité des aides à l&apos;achat. Nous
            mettons à jour ces fiches régulièrement pour refléter les évolutions
            tarifaires et les nouvelles versions.
          </p>

          <h3>Comparatifs objectifs</h3>
          <p>
            Nos comparatifs confrontent les modèles les plus recherchés sur des
            critères concrets : rapport prix/autonomie, coût au kilomètre,
            confort de recharge sur autoroute, espace intérieur, technologies
            embarquées et coût total de possession sur 4 ans. Nous n&apos;avons
            aucun partenariat commercial avec les constructeurs, ce qui garantit
            notre totale indépendance dans l&apos;évaluation.
          </p>

          <h3>Guides pratiques</h3>
          <p>
            Nos guides couvrent l&apos;ensemble du parcours d&apos;achat et
            d&apos;utilisation d&apos;un véhicule électrique : comprendre les
            différents types de motorisation, décrypter les normes de recharge
            (Type 2, CCS, CHAdeMO), installer une borne à domicile, optimiser
            ses trajets longue distance, bénéficier du bonus écologique et de la
            prime à la conversion, négocier un contrat de leasing avantageux, et
            bien plus encore.
          </p>

          <h3>Outils de calcul interactifs</h3>
          <p>
            Notre simulateur de financement permet de comparer en quelques clics
            le coût d&apos;un achat comptant, d&apos;une LOA et d&apos;une LLD en
            intégrant le bonus écologique, les frais d&apos;assurance et le coût
            de la recharge. Notre calculateur de coût de recharge estime votre
            dépense mensuelle en fonction de votre kilométrage, du prix de
            l&apos;électricité à domicile et des tarifs des bornes publiques.
          </p>

          <h3>Actualités et tendances du marché</h3>
          <p>
            Nous suivons de près l&apos;actualité du marché de la voiture
            électrique en France et en Europe : nouvelles réglementations (fin
            des moteurs thermiques en 2035, zones à faibles émissions),
            évolution des prix des batteries, déploiement de
            l&apos;infrastructure de recharge rapide, et arrivée de nouveaux
            acteurs sur le marché français.
          </p>

          <h2>Notre engagement pour la transition énergétique</h2>
          <p>
            La mobilité électrique est un pilier essentiel de la transition
            énergétique. En France, le secteur des transports représente environ
            31 % des émissions de gaz à effet de serre. Passer à la voiture
            électrique, surtout dans un pays où l&apos;électricité est
            massivement décarbonée grâce au nucléaire et aux énergies
            renouvelables, constitue un levier majeur de réduction de notre
            empreinte carbone.
          </p>
          <p>
            Nous croyons que l&apos;information de qualité est la clé de cette
            transition. Trop de Français hésitent encore à franchir le pas par
            manque de repères fiables sur l&apos;autonomie réelle, le coût de la
            recharge ou la durée de vie des batteries. En répondant à ces
            questions de manière transparente et documentée, nous espérons
            contribuer à accélérer l&apos;adoption de la voiture électrique en
            France.
          </p>
          <p>
            L&apos;infrastructure de recharge en France connaît une croissance
            remarquable. Le pays compte désormais plus de 150 000 points de
            charge ouverts au public, avec un objectif gouvernemental de
            400 000 bornes à l&apos;horizon 2030. Le réseau de recharge rapide
            sur autoroute, porté par des opérateurs comme Ionity, TotalEnergies,
            Fastned et Tesla Supercharger, rend désormais les trajets longue
            distance en véhicule électrique aussi fluides qu&apos;en thermique
            pour la grande majorité des itinéraires. Cette densification rapide
            du maillage territorial est un facteur déterminant dans la
            confiance des automobilistes français envers la mobilité électrique.
          </p>
          <p>
            Sur le plan technologique, l&apos;évolution des batteries constitue
            le moteur principal de la démocratisation du véhicule électrique.
            Les cellules LFP (lithium fer phosphate) offrent désormais une
            durée de vie supérieure à 3 000 cycles tout en réduisant la
            dépendance aux matériaux critiques comme le cobalt et le nickel.
            Les batteries sodium-ion, attendues en production de masse dans les
            prochaines années, promettent de faire baisser encore les coûts
            tout en améliorant la recyclabilité. Ces avancées techniques se
            traduisent concrètement pour le consommateur par des prix en baisse,
            des autonomies en hausse et des temps de recharge toujours plus
            courts.
          </p>

          <h2>Indépendance et transparence</h2>
          <p>
            Guide Voiture Électrique est un média indépendant. Nous ne sommes
            affiliés à aucun constructeur, concessionnaire ou réseau de bornes de
            recharge. Lorsque nous recommandons un modèle ou un service, c&apos;est
            uniquement sur la base de nos analyses et des retours utilisateurs.
            Si nous intégrons un jour des liens d&apos;affiliation ou des
            partenariats, ils seront toujours clairement identifiés et
            n&apos;influenceront jamais le contenu éditorial.
          </p>
          <p>
            Nous nous engageons également à la transparence sur nos sources de
            données. Chaque article cite ses références, que ce soient les sites
            officiels des constructeurs, les publications du ministère, les
            rapports de l&apos;Avere-France ou les études de cabinets
            spécialisés. Vous pouvez ainsi vérifier par vous-même les
            informations que nous présentons.
          </p>

          <h2>Notre vision pour 2026 et au-delà</h2>
          <p>
            L&apos;année 2026 marque un tournant pour le marché de la voiture
            électrique en France. Les modèles à moins de 25 000 euros se
            multiplient, les batteries LFP et sodium-ion promettent de réduire
            encore les coûts, et le réseau de recharge rapide continue de
            s&apos;étendre à travers le territoire. Dans ce contexte en pleine
            ébullition, notre ambition est de rester la référence francophone
            pour l&apos;information indépendante sur la mobilité électrique.
          </p>
          <p>
            Nous prévoyons d&apos;enrichir le site avec de nouvelles
            fonctionnalités : un planificateur d&apos;itinéraire électrique, un
            comparateur de tarifs de recharge en temps réel, et des guides
            spécifiques par profil d&apos;utilisateur (citadin, périurbain,
            grand rouleur, famille nombreuse). Notre objectif est de vous
            accompagner à chaque étape de votre transition vers la mobilité
            électrique.
          </p>

          <h2>Nous contacter</h2>
          <p>
            Vous avez une question, une suggestion ou vous souhaitez signaler une
            erreur dans nos données ? N&apos;hésitez pas à nous écrire à{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">
              contact@guidevoitureelectrique.fr
            </a>
            . Nous lisons chaque message et nous nous efforçons de répondre dans
            les meilleurs délais.
          </p>
          <p>
            Vous pouvez également nous contacter si vous êtes journaliste,
            chercheur ou professionnel du secteur et que vous souhaitez utiliser
            nos données ou collaborer sur un projet éditorial. Nous sommes
            toujours ouverts aux échanges constructifs qui servent la cause de la
            mobilité électrique.
          </p>

          <h2>Remerciements</h2>
          <p>
            Nous tenons à remercier la communauté des passionnés de voiture
            électrique en France, dont les retours d&apos;expérience enrichissent
            constamment nos analyses. Merci également aux organismes publics
            (ADEME, Avere-France, ministère de la Transition écologique) qui
            mettent à disposition des données ouvertes essentielles à notre
            travail. Enfin, merci à vous, lecteurs, de nous faire confiance pour
            vous accompagner dans votre passage à la mobilité électrique.
          </p>
        </div>

        {/* ── Contact Card ─────────────────────────────────────── */}
        <div
          style={{
            marginTop: 48,
            padding: "28px 32px",
            border: "1.5px solid var(--accent)",
            borderRadius: 18,
            background:
              "linear-gradient(135deg, rgba(0,192,116,0.06), rgba(0,192,116,0.02))",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 20,
              marginBottom: 8,
            }}
          >
            Une question ? Contactez-nous
          </h3>
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 16 }}>
            Nous sommes à votre écoute pour toute question sur la voiture
            électrique.
          </p>
          <a
            href="mailto:contact@guidevoitureelectrique.fr"
            className="btn-primary"
          >
            contact@guidevoitureelectrique.fr
          </a>
        </div>
      </article>
    </>
  );
}
