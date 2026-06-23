import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

export const metadata: Metadata = buildMetadata({
  title: "Voiture électrique par catégorie : trouvez la vôtre",
  description:
    "Explorez " +
    categories.length +
    " catégories de voitures électriques : pas chère, chinoise, sans permis, grande autonomie, familiale, SUV. Trouvez le modèle adapté.",
  path: "/categories/",
});

export default function CategoriesIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Catégories", href: "/categories/" }]} />
      <section className="section" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <h1 className="section-title">
          Explorer par catégorie ({categories.length})
        </h1>
        <p className="section-sub">
          Trouvez la voiture électrique adaptée à votre usage et votre budget.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}/`}
              className="carte-modele"
              style={{ padding: 24 }}
            >
              <h3
                className="carte-modele-nom"
                style={{ marginBottom: 8, fontSize: 18 }}
              >
                {c.titre}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── CONTENU ÉDITORIAL ────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="prose">
          <h2>Choisir la bonne categorie de voiture électrique : le guide par profil</h2>

          <p>
            Trouver la voiture électrique ideale commence par identifier la categorie qui correspond a votre mode de vie, vos besoins quotidiens et votre budget. Contrairement au marché thermique ou les segments sont bien etablis et familiers, le marché électrique présente des spécificités propres qui peuvent modifier la hierarchie traditionnelle des choix. Une citadine électrique, par exemple, offre souvent plus d&apos;espace interieur qu&apos;une citadine thermique grace a l&apos;absence de tunnel de transmission. Un SUV électrique peut s&apos;averer plus économique a l&apos;usage qu&apos;une berline thermique compact. Ce guide vous aide a naviguer entre les categories et a trouver celle qui vous correspond le mieux.
          </p>

          <h2>Les voitures électriques pas cheres : la mobilité électrique accessible</h2>

          <h3>Pour qui ?</h3>
          <p>
            La categorie des voitures électriques pas cheres (moins de 25 000 euros, bonus deduit) s&apos;adresse aux conducteurs qui souhaitent acceder a la mobilité électrique sans grever leur budget. C&apos;est le segment qui connait la plus forte croissance en 2026, porte par l&apos;arrivee de modèles concurrentiels des constructeurs français et chinois. Les acheteurs typiques sont les urbains et periurbains, les menages avec un budget automobile modere, les jeunes conducteurs ou les familles cherchant un deuxieme véhicule pour les trajets quotidiens.
          </p>

          <h3>Ce qu&apos;il faut savoir</h3>
          <p>
            Les voitures électriques d&apos;entree de gamme offrent généralement une autonomie de 200 a 320 km WLTP, suffisante pour une utilisation quotidienne mais pouvant nécessitér des arrets de recharge plus frequents sur les longs trajets. La vitesse de recharge rapide est souvent limitee (30 a 80 kW), ce qui allonge les temps d&apos;arret en voyage. En revanche, leur faible consommation énergétique (13 a 16 kWh/100 km) garantit un cout de recharge minimal au quotidien.
          </p>
          <p>
            Les modèles stars de cette categorie en 2026 sont la Dacia Spring (la moins chere du marche), la Citroen e-C3 (meilleur compromis habitabilite/prix), la Leapmotor T03 (micro-citadine ludique), la Fiat 500e (design italien emblematique) et la Renault Twingo E-Tech (citadine urbaine par excellence). Chacun de ces modèles représente une interpretation differente de la mobilité électrique accessible, et merite d&apos;etre evalue en fonction de vos criteres prioritaires.
          </p>

          <h2>Les voitures électriques chinoises : le rapport qualité-prix reinvente</h2>

          <h3>Pour qui ?</h3>
          <p>
            Les véhicules électriques de constructeurs chinois s&apos;adressent aux acheteurs pragmatiques, prets a sortir des sentiers battus des marques traditionnelles pour bénéficier d&apos;un équipement supérieur a prix équivalent ou d&apos;un prix inférieur a équipement équivalent. Ce segment seduit les early adopters technophiles, les conducteurs sensibles au rapport qualité-prix et ceux qui evaluent un véhicule sur ses merites propres plutot que sur la reputation de la marque.
          </p>

          <h3>Les avantages et les points de vigilance</h3>
          <p>
            Les constructeurs chinois comme BYD, MG, Leapmotor ou Xpeng proposent souvent des véhicules genereusement equipes (ecrans grands formats, systèmes d&apos;aide a la conduite avances, sellerie de qualité) a des prix 15 a 25 % inférieurs a ceux des constructeurs européens pour des specifications comparables. La qualité de fabrication s&apos;est considérablement amelioree et rivalise desormais avec les standards européens sur les modèles recents.
          </p>
          <p>
            Les points de vigilance concernent principalement le réseau de service apres-vente (encore en phase de déploiement pour certaines marques), l&apos;eligibilite au bonus écologique (variable selon les modèles et leur lieu de fabrication), et la valeur de revente (encore difficile a estimer pour des marques recemment arrivees sur le marché français). Nos fiches detaillees par marque chinoise abordent chacun de ces aspects pour vous permettre d&apos;acheter en toute connaissance de cause.
          </p>

          <h2>Les voitures électriques sans permis : la mobilité des 14 ans et plus</h2>

          <h3>Pour qui ?</h3>
          <p>
            Les voiturettes électriques sans permis (quadricycles legers L6e) s&apos;adressent a plusieurs publics : les adolescents des 14 ans (avec le permis AM), les personnes agees souhaitant conserver leur mobilité sans les contraintes du permis B, les conducteurs ayant perdu leur permis, et les urbains cherchant une alternative compacte et économique pour les courts deplacements. Ce segment connait une croissance soutenue, portee par l&apos;électrification naturelle de véhicules dont les faibles performances se pretent parfaitement a la motorisation électrique.
          </p>

          <h3>Les spécificités a connaitre</h3>
          <p>
            Les voitures sans permis électriques sont limitees par la réglementation a 45 km/h et a une puissance de 6 kW. Leur autonomie, généralement comprise entre 50 et 150 km, est adaptee a un usage urbain et periurbain. Les modèles les plus populaires en 2026 sont la Citroen Ami (la plus abordable), la Mobilize Duo (design moderne), la Fiat Topolino (version decouverte) et l&apos;Aixam e-City (confort et équipement). Les couts de possession sont particulièrement bas : pas d&apos;assurance auto obligatoire (une simple assurance responsabilite civile suffit), pas de controle technique, et un cout de recharge quasi negligeable.
          </p>

          <h2>Les voitures électriques grande autonomie : plus de 500 km sans recharger</h2>

          <h3>Pour qui ?</h3>
          <p>
            La categorie grande autonomie (plus de 500 km WLTP) s&apos;adresse aux conducteurs qui parcourent régulièrement de longues distances, qui n&apos;ont pas acces a la recharge a domicile et doivent espacer les sessions de recharge, ou qui souhaitent simplement eliminer toute anxiete liee a l&apos;autonomie. C&apos;est aussi le segment privilegie des représentants commerciaux, des VTC et de tous les professionnels de la route.
          </p>

          <h3>Les modèles et la technologie</h3>
          <p>
            En 2026, une dizaine de modèles franchissent la barre des 500 km d&apos;autonomie WLTP. Les champions du segment incluent le Peugeot e-3008 (jusqu&apos;a 700 km), la Tesla Model S (680 km), la Mercedes EQS (770 km), le BMW iX (630 km) et la Hyundai Ioniq 6 (614 km). Ces chiffres impressionnants sont rendus possibles par des batteries de grande capacité (de 82 a 120 kWh) et une excellente efficience aerodynamique.
          </p>
          <p>
            L&apos;autonomie reelle de ces modèles en conditions mixtes se situe généralement entre 400 et 600 km, ce qui reste très confortable pour la quasi-totalite des usages. Sur autoroute a 130 km/h, comptez une réduction de 25 a 35 % par rapport au chiffre WLTP. Meme dans ces conditions, un trajet de 350 a 450 km est realisable sans arret de recharge, rendant la grande majorite des liaisons interurbaines françaises possibles en un seul tenant.
          </p>

          <h2>Les petites voitures électriques : citadines et compactes</h2>

          <h3>Pour qui ?</h3>
          <p>
            Les citadines et compactes électriques sont le segment le plus populaire en France, et pour cause : elles correspondent parfaitement au profil de conduite de la majorite des automobilistes français : trajets domicile-travail courts, stationnement en ville, deplacements periurbains reguliers. Leur encombrement reduit facilite le stationnement, leur consommation moderee minimise le cout d&apos;utilisation, et leur agilite en ville est un plaisir quotidien.
          </p>

          <h3>Le dynamisme du segment en 2026</h3>
          <p>
            C&apos;est dans le segment des petites voitures électriques que la concurrence est la plus vive en 2026. La Renault 5 E-Tech a provoque une véritable révolution en combinant un design neo-retro seduisant, une plateforme performante et un prix compétitif. Elle affronte la Peugeot e-208, reference du segment depuis plusieurs années, ainsi que de nouveaux entrants comme la MG4 (plus spacieuse, plus accessible) ou la BYD Dolphin (équipement genereux). La Volkswagen ID.3, la Opel Corsa Electric et la Mini Cooper SE completent une offre particulièrement riche.
          </p>
          <p>
            Le choix dans ce segment est une question de priorites : design (Renault 5, Fiat 500e, Mini), rapport qualité-prix (MG4, BYD Dolphin), performances de recharge (Hyundai Ioniq 5 pour ceux qui considérent le segment des compactes hautes), ou habitabilite (Volkswagen ID.3, Citroen e-C4). Nos comparatifs detailles vous aident a trancher entre ces modèles qui se valent souvent sur le papier mais offrent des experiences de conduite et de possession bien differentes.
          </p>

          <h2>Les voitures électriques familiales : SUV et monospaces</h2>

          <h3>Pour qui ?</h3>
          <p>
            Les véhicules électriques familiaux (principalement des SUV et crossover) s&apos;adressent aux familles ayant besoin d&apos;espace, de polyvalence et de confort. Le segment des SUV électriques est le plus dynamique du marché en termes de nouveaux modeles, car il combine la tendance forte du SUV avec la transition électrique. Les acheteurs recherchent un volume de coffre genereux (minimum 500 litres), un espace arriere confortable pour les enfants, des équipements de sécurité et de confort avances, et une autonomie suffisante pour les deplacements en vacances.
          </p>

          <h3>Les options en 2026</h3>
          <p>
            Le Tesla Model Y reste la reference du segment en termes de ventes, grace a son autonomie, son réseau de recharge et sa polyvalence. Le Peugeot e-3008, lance en 2024, s&apos;impose comme une alternative premium avec une autonomie record et un interieur soigne. Le Kia EV6, le Hyundai Ioniq 5, le Volkswagen ID.4, le Skoda Enyaq et le BMW iX1 offrent des alternatives solides avec des profils differencies. Pour les familles nombreuses, le Mercedes EQB et le Kia EV9 proposent une configuration a 7 places.
          </p>
          <p>
            Le choix d&apos;un SUV électrique familial doit intégrer la question de la capacité de remorquage, souvent inférieure a celle des équivalents thermiques en raison de l&apos;impact sur l&apos;autonomie. Certains modèles (Tesla Model X, Kia EV6) offrent neanmoins des capacités de remorquage honorables (jusqu&apos;a 2 500 kg).
          </p>

          <h2>Comment choisir la bonne categorie : un arbre de decision</h2>
          <p>
            Pour vous aider a identifier la categorie qui correspond a votre profil, voici un guide de decision simple :
          </p>
          <ul>
            <li><strong>Votre budget est inférieur a 25 000 euros ?</strong> Orientez-vous vers les voitures électriques pas cheres ou d&apos;occasion recente.</li>
            <li><strong>Vous roulez principalement en ville ?</strong> Les petites voitures et les sans permis sont vos meilleures options.</li>
            <li><strong>Vous avez une famille avec enfants ?</strong> Privilegiez les SUV familiaux et les compactes spacieuses.</li>
            <li><strong>Vous faites régulièrement de longs trajets ?</strong> Visez la categorie grande autonomie.</li>
            <li><strong>Vous cherchez le meilleur rapport qualité-prix ?</strong> Explorez les marques chinoises en verifiant l&apos;eligibilite au bonus.</li>
            <li><strong>Vous n&apos;avez pas le permis B ?</strong> Les voitures sans permis électriques sont faites pour vous.</li>
          </ul>
          <p>
            Chaque categorie sur notre site propose une selection de modèles adaptes avec des fiches techniques detaillees, des comparatifs et des outils de financement pour vous accompagner jusqu&apos;a l&apos;achat. Explorez la categorie qui vous correspond et decouvrez les véhicules qui peuvent transformer votre quotidien.
          </p>

          <AuteurBio />

          <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
            <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
              <li>AAA Data : Segmentation et parts de marché des véhicules électriques par catégorie, France 2025-2026</li>
              <li>CCFA (Comité des Constructeurs Français d&apos;Automobiles) : Immatriculations par segment, bilan annuel 2025</li>
              <li>Ministère de la Transition écologique : Réglementation des quadricycles légers électriques (L6e)</li>
              <li>Automobile Propre : Tests et classements des voitures électriques par catégorie, 2024-2026</li>
              <li>Euro NCAP : Résultats de sécurité des véhicules électriques par segment, 2024-2025</li>
              <li>JATO Dynamics : Analyse des prix et positionnements des VE par segment en Europe, 2025</li>
              <li>Données constructeurs : Fiches techniques et tarifs officiels par modèle et finition</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
