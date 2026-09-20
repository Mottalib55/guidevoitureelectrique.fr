import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import { faqParPage } from "@/data/faq-pages";
import SourcesOfficielles from '@/components/SourcesOfficielles';
import Link from "next/link";
import { pagesGuides } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = buildMetadata({
  title: "Guides voiture électrique : tout comprendre en 2026",
  description:
    "Autonomie réelle, recharge, batterie, entretien, aides : " +
    pagesGuides.length +
    " guides détaillés pour tout comprendre sur la voiture électrique avant de l'acheter en 2026.",
  path: "/guides/",
});

export default function GuidesIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Guides", href: "/guides/" }]} />
      <section className="section" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <LastUpdated />
        <h1 className="section-title">
          Guides voiture électrique ({pagesGuides.length})
        </h1>
        <p className="section-sub">
          Tout comprendre sur la voiture électrique : fonctionnement, autonomie,
          recharge, batterie et entretien.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 16,
          }}
        >
          {pagesGuides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}/`}
              className="carte-modele"
              style={{ padding: 20 }}
            >
              <h3
                className="carte-modele-nom"
                style={{ marginBottom: 6, fontSize: 17 }}
              >
                {g.titre}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {g.metaDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── CONTENU ÉDITORIAL ────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="prose">
          <h2>Pourquoi s&apos;informer avant de passer à la voiture électrique ?</h2>

          <p>
            La voiture électrique représente un changement de paradigme dans notre rapport a l&apos;automobile. Contrairement a l&apos;achat d&apos;un véhicule thermique classique, ou les reperes sont bien établis depuis des décennies, le passage a l&apos;électrique implique de maîtriser de nouveaux concepts : types de batteries, puissances de recharge, autonomie réelle versus normalisée, dégradation de la batterie, recharge bidirectionnelle, et bien d&apos;autres. Nos guides ont ete conçus pour vous accompagner pas a pas dans cette transition, en vous fournissant des informations fiables, actualisées et adaptées au contexte français.
          </p>
          <p>
            Un acheteur bien informe fera systématiquement un meilleur choix. Il saura évaluer ses besoins réels en autonomie plutôt que de surpayer pour des kilomètres qu&apos;il n&apos;utilisera jamais. Il comprendra les différences entre les technologies de batterie et saura lesquelles privilégier selon son usage. Il connaîtra les subtilités des aides financières et pourra maximiser les avantages auxquels il a droit. En somme, la connaissance est le meilleur investissement que vous puissiez faire avant d&apos;investir dans un véhicule électrique.
          </p>

          <h2>Ce que couvrent nos guides : un parcours d&apos;apprentissage complet</h2>

          <h3>Comprendre le fonctionnement d&apos;une voiture électrique</h3>
          <p>
            Nos guides fondamentaux vous expliquent le fonctionnement d&apos;un véhicule électrique dans ses moindres détails. Le moteur électrique, le système de gestion de batterie (BMS), le freinage regeneratif, le convertisseur de puissance, la pompe a chaleur : chaque composant est decortique de manière accessible, sans jargon technique inutile. Comprendre comment votre voiture fonctionne vous permettra non seulement de mieux l&apos;utiliser au quotidien, mais aussi de mieux évaluer les spécifications techniques lors de votre achat.
          </p>
          <p>
            Le freinage regeneratif, par exemple, est un concept fondamental qui merite d&apos;être bien compris. Ce système permet de récupérer de l&apos;énergie lors des décélérations et des freinages, la convertissant en électricité pour recharger partiellement la batterie. En conduite urbaine, il peut augmenter l&apos;autonomie de 15 a 25 %. Certains modèles permettent même de conduire avec une seule pédale (one-pedal driving), en modulant la force de récupération de manière suffisante pour arrêter complètement le véhicule sans toucher la pédale de frein. C&apos;est un confort de conduite que beaucoup d&apos;utilisateurs trouvent addictif une fois adopte.
          </p>

          <h3>Maîtriser l&apos;autonomie réelle</h3>
          <p>
            L&apos;autonomie est le sujet qui suscite le plus d&apos;interrogations chez les futurs propriétaires de voitures électriques, et c&apos;est aussi celui ou les malentendus sont les plus fréquents. Nos guides dedies a l&apos;autonomie vous aident à distinguer entre l&apos;autonomie WLTP (la norme européenne de mesure) et l&apos;autonomie réelle que vous obtiendrez au quotidien. Ils vous expliquent les facteurs qui influencent cette autonomie : température extérieure, vitesse de croisière, utilisation du chauffage ou de la climatisation, style de conduite, topographie du parcours, pression des pneumatiques.
          </p>
          <p>
            En hiver, par exemple, l&apos;autonomie peut diminuer de 20 a 35 % par rapport aux conditions optimales. Ce phénomène est lie à la physique et à la chimie des batteries lithium-ion, dont les performances se dégradent par temps froid. Cependant, les constructeurs ont considérablement ameliore la gestion thermique des batteries ces dernières années. Les systèmes de preconditionnement permettent de chauffer la batterie avant le départ (pendant qu&apos;elle est encore branchée), minimisant la perte d&apos;autonomie. Les pompes a chaleur, désormais présentés sur la majorité des modèles, réduisent de moitié la consommation énergétique du chauffage habitacle par rapport aux résistances électriques classiques.
          </p>
          <p>
            Nos guides vous proposent également des tableaux d&apos;autonomie réelle par modèle, bases sur des tests indépendants et des retours d&apos;utilisateurs, en distinguant les conditions urbaines, mixtes et autoroutieres. Ces données, bien plus parlantes que les chiffres WLTP, vous aideront a choisir un modèle adapte à vos besoins réels.
          </p>

          <h3>Tout comprendre à la recharge</h3>
          <p>
            La recharge est le deuxième grand sujet d&apos;inquiétude pour les futurs electromobilistes, et nos guides y consacrent une attention toute particulière. Nous couvrons l&apos;ensemble du spectre, de la recharge domestique à la recharge ultra-rapide en passant par les bornes de destination et la recharge au travail.
          </p>
          <p>
            Nous vous expliquons les différences entre les types de courant (AC et DC), les niveaux de puissance (de 2,3 kW sur prise domestique a 350 kW sur borne ultra-rapide), les types de connecteurs (Type 2, CCS Combo, CHAdeMO), et l&apos;impact de chaque mode de recharge sur la durée de vie de la batterie. Vous apprendrez pourquoi la recharge quotidienne a puissance modérée est préférable pour la santé de la batterie, et dans quelles circonstances la recharge rapide peut être utilisée sans inquiétude.
          </p>
          <p>
            Nos guides abordent aussi les aspects pratiques : comment planifier un long trajet avec les arrêts de recharge optimaux, quelles applications utiliser pour localiser les bornes et vérifier leur disponibilité en temps réel, comment comparer les tarifs des différents opérateurs, et comment tirer le meilleur parti des abonnements de recharge multi-réseaux.
          </p>

          <h3>La batterie : technologie, entretien et durée de vie</h3>
          <p>
            La batterie est le coeur et le composant le plus coûteux d&apos;une voiture électrique. Nos guides vous aident a comprendre les différentes chimies utilisées (NMC, LFP, NCA), leurs avantages et inconvénients respectifs, et comment leur choix influence les caractéristiques du véhicule (autonomie, poids, vitesse de charge, longévité, comportement en température extreme).
          </p>
          <p>
            Vous apprendrez les bonnes pratiques pour maximiser la durée de vie de votre batterie : maintenir le niveau de charge entre 20 et 80 % au quotidien, éviter les sessions de recharge rapide a répétition sauf en voyage, preconditionner la batterie avant une recharge rapide, et stationner a l&apos;ombre par temps de canicule. Nous abordons également la question de la dégradation dans le temps, avec des courbes réelles issues de flottes de véhicules a fort kilométrage, pour vous démontrer que les batteries modernes tiennent largement leur promesse de durabilité.
          </p>
          <p>
            Enfin, nous explorons les perspectives technologiques : batteries a l&apos;état solide, batteries sodium-ion, recyclage et seconde vie des batteries, autant de sujets qui dessinent l&apos;avenir de la mobilité électrique.
          </p>

          <h3>Entretien et coût de possession</h3>
          <p>
            Contrairement a une idée reçue tenace, une voiture électrique nécessité un entretien, certes moindre qu&apos;un véhicule thermique, mais néanmoins réel. Nos guides détaillent les opérations de maintenance a prévoir : vérification du système de freinage (les plaquettes s&apos;usent moins grâce au freinage regeneratif mais doivent être controles), remplacement du liquide de refroidissement de la batterie, changement du filtre d&apos;habitacle, rotation et remplacement des pneumatiques (qui s&apos;usent un peu plus vite en raison du couple plus eleve), et mise à jour logicielle du véhicule.
          </p>
          <p>
            Nous vous proposons également des analyses détaillées du coût total de possession (TCO) pour les modèles les plus populaires, intégrant le prix d&apos;achat, les aides, le coût de l&apos;énergie, l&apos;entretien, l&apos;assurance et la decote. Ces analyses vous permettront de comparer objectivement le coût réel d&apos;un véhicule électrique avec celui d&apos;un véhicule thermique équivalent sur des durées de 3, 5 et 7 ans.
          </p>

          <h2>Un parcours de lecture suggere pour les débutants</h2>
          <p>
            Si vous découvrez la voiture électrique, nous vous recommandons de suivre ce parcours de lecture progressif pour construire vos connaissances de manière structurée :
          </p>
          <ol>
            <li><strong>Commencez par les fondamentaux :</strong> lisez notre guide sur le fonctionnement d&apos;une voiture électrique pour acquérir les bases techniques indispensables.</li>
            <li><strong>Abordez la question de l&apos;autonomie :</strong> notre guide sur l&apos;autonomie réelle vous aidera à dépasser les idées reçues et à évaluer vos besoins.</li>
            <li><strong>Explorez la recharge :</strong> découvrez les différentes solutions de recharge et identifiez celle qui correspond à votre situation.</li>
            <li><strong>Approfondissez la batterie :</strong> comprendre les technologies de batterie vous donnera un avantage décisif lors de votre achat.</li>
            <li><strong>Analysez le budget :</strong> consultez nos guides financiers pour une vision complete des coûts et des aides.</li>
            <li><strong>Passez a l&apos;action :</strong> utilisez nos outils de comparaison et notre calculateur de financement pour faire votre choix.</li>
          </ol>

          <h2>Des guides mis a jour régulièrement</h2>
          <p>
            Le secteur de la voiture électrique evolue a une vitesse considérable. Les réglementations changent, les technologies progressent, les prix évoluent et de nouveaux modèles arrivent chaque mois sur le marché. C&apos;est pourquoi nous mettons a jour nos guides régulièrement pour refléter les dernières informations disponibles. Chaque article est date et indique la dernière mise à jour, afin que vous sachiez que les informations que vous lisez sont actuelles.
          </p>
          <p>
            Nos contenus sont rediges avec rigueur et objectivité. Nous nous appuyons sur des sources officielles (données constructeurs, publications de l&apos;Avere-France, réglementations européennes), des tests indépendants et les retours d&apos;expérience de milliers d&apos;utilisateurs pour vous fournir des informations fiables et vérifiées. Notre objectif est de vous donner toutes les clés pour comprendre la mobilité électrique et faire un choix qui correspond parfaitement à vos besoins, votre budget et votre mode de vie.
          </p>

          <h2>Au-delà de la théorie : des outils pratiques</h2>
          <p>
            Nos guides sont complémentaires aux outils interactifs que nous mettons à votre disposition sur ce site. Le calculateur de financement vous permet de simuler et comparer les différentes formules d&apos;achat (comptant, crédit, LOA, LLD) pour n&apos;importe quel modèle de notre base de données. Le comparateur de modèles vous permet de mettre cote a cote les spécifications de plusieurs véhicules pour identifier les différences significatives. Les fiches modèles détaillées regroupent toutes les informations essentielles en un seul endroit : prix, autonomie, puissance de recharge, dimensions, équipements de série, et bien plus.
          </p>
          <p>
            Ensemble, nos guides et nos outils forment un écosystème complet d&apos;aide à la décision, conçu pour que chaque visiteur puisse trouver la voiture électrique idéale en toute confiance. N&apos;hésitez pas à explorer l&apos;ensemble de nos ressources et à utiliser nos calculateurs pour affiner votre projet. La mobilité électrique est une aventure passionnante, et nous sommes la pour vous y accompagner à chaque étape.
          </p>

          <AuteurBio />

          <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
            <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
              <li>ADEME : Guide pratique « La voiture électrique au quotidien », édition 2025</li>
              <li>Automobile Propre : Tests d&apos;autonomie réelle en conditions hivernales et estivales, 2024-2026</li>
              <li>WLTP Facts : Méthodologie du cycle WLTP et écarts avec la conduite réelle</li>
              <li>Transport &amp; Environment : Rapport « From dirty oil to clean batteries », 2024</li>
              <li>Battery University : Cycle de vie et dégradation des batteries lithium-ion NMC et LFP</li>
              <li>Avere-France : Guide de la recharge : wallbox, bornes publiques et droit à la prise</li>
              <li>CGDD (Commissariat général au développement durable) : Chiffres clés du transport, édition 2025</li>
              <li>ACEA (Association des constructeurs européens) : Statistiques d&apos;immatriculations EV en Europe, 2025-2026</li>
              <li>Données constructeurs : Manuels d&apos;utilisation et fiches techniques Renault, Peugeot, Tesla, Hyundai, Volkswagen</li>
            </ul>
          </div>
        </div>
      </section>
      <SourcesOfficielles />
      <FaqSection items={faqParPage["/guides/"]} />
    </>
  );
}
