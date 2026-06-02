import type { Metadata } from "next";
import { modeles } from "@/data/modeles";
import { buildMetadata } from "@/lib/seo";
import ModelesFiltres from "@/components/ModelesFiltres";
import AuteurBio from "@/components/AuteurBio";

export const metadata: Metadata = buildMetadata({
  title: "Voitures électriques 2026 : tous les modèles en France",
  description:
    modeles.length +
    " modèles de voitures électriques : prix, autonomie réelle, recharge rapide, bonus écologique. Fiches techniques et comparatif gratuit.",
  path: "/modèles/",
});

export default function ModèlesIndexPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <h1 className="section-title">
          Tous les modèles électriques ({modeles.length})
        </h1>
        <p className="section-sub">
          Fiches complètes avec prix, autonomie réelle, recharge et calculateur
          de financement intégré.
        </p>

        <ModelesFiltres modeles={modeles} />
      </section>

      {/* ─── CONTENU ÉDITORIAL ────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="prose">
          <h2>Panorama complet des modèles de voitures électriques en France en 2026</h2>

          <p>
            Le marché des voitures électriques en France a atteint un niveau de maturité et de diversité sans précédent. Avec plus de 120 modèles disponibles a la vente, les acheteurs ont desormais un choix comparable a celui du marché thermique traditionnel. Mais cette abondance peut aussi generer de la confusion. Comment naviguer dans cet ocean de modèles ? Quels sont les criteres qui distinguent reellement les véhicules les uns des autres ? Comment interpreter une fiche technique électrique ? Ce guide vous donne les cles pour comprendre le paysage des modèles électriques et identifier ceux qui meritent votre attention.
          </p>

          <h2>Comprendre les segments du marché électrique</h2>

          <h3>Les citadines électriques : le segment roi en France</h3>
          <p>
            Le segment des citadines électriques (segment B) est le plus populaire en France, représentant environ 35 % des ventes de véhicules électriques. Ce sont des véhicules compacts, d&apos;une longueur généralement comprise entre 3,80 et 4,10 metres, equipes de batteries de 40 a 55 kWh offrant une autonomie de 250 a 400 km WLTP. Leur consommation moderee (14 a 17 kWh/100 km) en fait les véhicules les plus économiques a l&apos;usage, avec un cout de recharge a domicile d&apos;environ 2 a 3 euros pour 100 km.
          </p>
          <p>
            Les citadines électriques sont parfaitement adaptees a l&apos;usage quotidien de la grande majorite des automobilistes français. Leur gabarit facilite le stationnement en ville, leur rayon de braquage est généralement reduit, et leur poids contenu (par rapport aux SUV électriques) contribue a une conduite agile et plaisante. C&apos;est dans ce segment que la concurrence est la plus feroce en 2026, avec des modèles comme la Renault 5 E-Tech, la Peugeot e-208, la Citroen e-C3, la MG4, la BYD Dolphin, la Volkswagen ID.3 ou la Fiat 500e qui se livrent une bataille acharnee pour seduire les acheteurs.
          </p>

          <h3>Les compactes électriques : polyvalence et espace</h3>
          <p>
            Le segment des compactes (segment C) regroupe des véhicules de 4,20 a 4,50 metres, offrant un meilleur compromis entre habitabilite et encombrement que les citadines. Les batteries sont généralement plus genereuques (60 a 80 kWh), offrant des autonomies de 350 a 500 km WLTP. Ce segment est ideal pour les conducteurs qui ont besoin d&apos;espace au quotidien (famille avec un ou deux enfants, coffre pour les courses et les loisirs) sans vouloir s&apos;encombrer d&apos;un SUV.
          </p>
          <p>
            Les modèles phares de ce segment incluent la Renault Megane E-Tech, la Peugeot e-308, la Tesla Model 3, la Hyundai Ioniq 6 (qui fait egalement office de berline aerodynamique), la Cupra Born et la Volkswagen ID.3 dans sa version haut de gamme. La Tesla Model 3, régulièrement mise a jour, reste une reference en termes de performances de recharge et d&apos;ecosysteme connecte, tandis que les alternatives européennes misent sur la qualité perçue de l&apos;habitacle et le confort de conduite.
          </p>

          <h3>Les SUV et crossovers électriques : le segment en pleine explosion</h3>
          <p>
            Les SUV et crossovers représentent le segment le plus dynamique du marché électrique en termes de nouveaux lancements. Des dizaines de modèles sont disponibles, des SUV urbains compacts (Peugeot e-2008, Hyundai Kona Electric, Volvo EX30) aux grands SUV familiaux (Tesla Model Y, Peugeot e-3008, BMW iX, Kia EV9). Les batteries de ces véhicules vont de 60 a 120 kWh, offrant des autonomies de 350 a 700 km WLTP.
          </p>
          <p>
            Le choix d&apos;un SUV électrique doit etre murement reflechi, car ces véhicules sont généralement plus lourds et moins efficients que les berlines et compactes. Un SUV électrique typique consomme 18 a 24 kWh/100 km, contre 14 a 17 kWh/100 km pour une citadine. Cette surconsommation se traduit par un cout de recharge plus eleve et, a capacité de batterie egale, une autonomie moindre. Si l&apos;espace et la position de conduite sureleve sont importants pour vous, le SUV électrique est un excellent choix. Si votre priorite est l&apos;efficience et le cout de possession, une compacte ou une berline sera plus avantageuse.
          </p>

          <h3>Les berlines premium électriques : performance et luxe</h3>
          <p>
            Le segment des berlines électriques premium regroupe des véhicules de prestige comme la Tesla Model S, la Mercedes EQS, la BMW i5, la Porsche Taycan et la Audi e-tron GT. Ces modèles combinent des performances elevees (accélération, vitesse de pointe, tenue de route), une autonomie genereuse (500 a 770 km WLTP), une recharge rapide performante et un niveau de luxe et de technologie au sommet. Les prix debutent autour de 50 000 euros pour la Tesla Model S d&apos;occasion et depassent 150 000 euros pour les configurations les plus haut de gamme.
          </p>
          <p>
            Ce segment est celui ou l&apos;électrique prend le plus d&apos;avance sur le thermique en termes d&apos;experience de conduite. Le silence de fonctionnement, le couple instantane et la douceur de la transmission creent une experience de luxe que meme les meilleures berlines thermiques ne peuvent egaler. La Mercedes EQS, avec son habitacle inspire de l&apos;aviation et son Hyperscreen, redefinit les standards du segment. La Porsche Taycan, avec son chassis et ses performances dynamiques, prouve que sport et électrique sont parfaitement compatibles.
          </p>

          <h3>Les micro-citadines et sans permis : la mobilité ultra-urbaine</h3>
          <p>
            A l&apos;autre extremite du spectre, les micro-citadines et véhicules sans permis électriques repondent a un besoin de mobilité urbaine minimaliste et économique. La Citroen Ami, la Mobilize Duo, la Fiat Topolino et les quadricycles Aixam électriques offrent une alternative pratique et économique aux deux-roues et aux transports en commun pour les deplacements urbains courts. Avec des prix debutant a moins de 8 000 euros et des couts de possession quasi negligeables, ces véhicules représentent l&apos;acces le plus democratique a la mobilité électrique individuelle.
          </p>

          <h2>Comment lire une fiche technique de voiture électrique</h2>

          <h3>La capacité de la batterie : brute vs nette</h3>
          <p>
            La capacité de la batterie est exprimee en kilowattheures (kWh). Attention a distinguer la capacité brute (totale) de la capacité nette (utilisable). Les constructeurs reservent généralement 5 a 10 % de la capacité totale comme tampon de sécurité pour proteger la batterie (eviter la decharge profonde et la surcharge). C&apos;est la capacité nette qui determine l&apos;autonomie reelle du véhicule. Par exemple, une batterie de 60 kWh brut peut offrir 57 kWh net, ce qui modifie les calculs d&apos;autonomie de 5 a 10 %.
          </p>

          <h3>La puissance du moteur : kW et chevaux</h3>
          <p>
            La puissance d&apos;un moteur électrique est exprimee en kilowatts (kW), convertible en chevaux (1 kW = 1,36 ch). Les véhicules électriques proposent généralement une puissance comprise entre 44 kW (60 ch) pour les modèles d&apos;entree de gamme et plus de 500 kW (680 ch) pour les sportives haut de gamme. Mais la puissance pure est moins determinante pour la sensation de conduite que dans un véhicule thermique. Ce qui fait la difference, c&apos;est le couple, disponible instantanement des le demarrage, qui offre des accélérations vives meme avec des puissances modestes.
          </p>

          <h3>Les types de motorisation : traction, propulsion et intégrale</h3>
          <p>
            Les voitures électriques sont disponibles en trois configurations de motricite. La traction (moteur sur l&apos;essieu avant) est la plus courante et la plus efficiente énergétiquement. La propulsion (moteur sur l&apos;essieu arriere), popularisee par Tesla et BMW, offre un comportement routier plus dynamique et un meilleur grip en accélération. La transmission intégrale (deux moteurs, un sur chaque essieu) maximise la motricite et les performances, mais au detriment de l&apos;efficience et donc de l&apos;autonomie (perte de 10 a 15 % par rapport a la version a moteur unique).
          </p>

          <h3>L&apos;architecture électrique : 400V vs 800V</h3>
          <p>
            L&apos;architecture électrique du véhicule influence directement la vitesse de recharge. Les véhicules a architecture 400V (la majorite du marche) acceptent généralement des puissances de recharge de 50 a 170 kW. Les véhicules a architecture 800V (Hyundai Ioniq 5/6, Kia EV6/EV9, Porsche Taycan, certains BYD) peuvent accepter des puissances de 200 a 350 kW, reduisant considérablement les temps de recharge. Une architecture 800V permet de passer de 10 a 80 % en 15 a 20 minutes sur une borne compatible, contre 25 a 40 minutes pour un véhicule 400V.
          </p>
          <p>
            Si vous effectuez régulièrement de longs trajets et que la vitesse de recharge est un critere prioritaire, un véhicule a architecture 800V constitue un avantage concret. Pour un usage principalement urbain avec recharge a domicile, la difference est negligeable.
          </p>

          <h2>Les tendances modèles pour 2026-2027</h2>

          <h3>La montee en gamme des modèles accessibles</h3>
          <p>
            L&apos;une des tendances les plus marquantes de 2026 est l&apos;amelioration significative des modèles d&apos;entree et de milieu de gamme. Les citadines électriques offrent desormais des niveaux d&apos;équipement, d&apos;autonomie et de finition qui auraient ete considéres comme premium il y a seulement deux ou trois ans. Cette montee en gamme est rendue possible par la baisse des couts des composants (batteries, électronique de puissance, systèmes d&apos;info-divertissement) et par l&apos;intensification de la concurrence qui pousse chaque constructeur a en offrir davantage.
          </p>

          <h3>L&apos;électrification des segments manquants</h3>
          <p>
            Quelques segments restaient jusqu&apos;ici peu couverts par l&apos;offre électrique : les breaks, les monospaces, les sportives accessibles et les utilitaires derives VP. En 2026, ces lacunes se comblent progressivement. Les breaks électriques (Peugeot e-308 SW, Volkswagen ID.7 Tourer) apportent enfin une alternative aux familles qui privilegient le format berline allongee. Les sportives électriques accessibles (MG Cyberster, Alpine A290) reconcilie plaisir de conduite et mobilité propre.
          </p>

          <h3>Les mises a jour mi-vie et les nouvelles générations</h3>
          <p>
            Plusieurs modèles populaires recoivent des mises a jour significatives en 2026 : nouvelle Tesla Model Y avec interieur renove, Volkswagen ID.3 restylisee avec interface amelioree, Hyundai Ioniq 5 de deuxieme génération avec autonomie accrue. Ces mises a jour portent généralement sur trois axes : amelioration de l&apos;autonomie (grace a des batteries plus denses ou une meilleure efficience), modernisation du système d&apos;info-divertissement, et ajout de fonctionnalites de confort et d&apos;aide a la conduite.
          </p>

          <h2>Comment utiliser nos fiches modèles</h2>
          <p>
            Chaque modèle reference sur notre site dispose d&apos;une fiche detaillee comprenant :
          </p>
          <ul>
            <li><strong>Les specifications techniques completes :</strong> dimensions, poids, capacité batterie (brute et nette), puissance moteur, couple, performances (0-100 km/h, vitesse max), autonomie WLTP et estimee reelle.</li>
            <li><strong>Les informations de recharge :</strong> puissance maximale AC et DC, temps de charge 10-80 %, km récupéres en 10 minutes de charge rapide, type de connecteur.</li>
            <li><strong>Le prix et les aides :</strong> prix catalogue, eligibilite au bonus écologique, prix apres bonus, estimation des loyers LOA/LLD.</li>
            <li><strong>Le calculateur de financement intégre :</strong> simulez votre financement (comptant, credit, LOA, LLD) directement sur la fiche du modèle qui vous intéresse.</li>
            <li><strong>Notre analyse :</strong> points forts, points faibles, profil d&apos;acheteur recommande et verdict.</li>
          </ul>
          <p>
            Parcourez nos fiches, comparez les modèles qui vous intéressent et utilisez nos outils de financement pour concretiser votre projet. Le véhicule électrique qui vous correspond est probablement parmi ceux que nous avons references. Et si vous hesitez entre deux modeles, nos comparatifs detailles sont la pour vous aider a trancher.
          </p>

          <AuteurBio />

          <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
            <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
              <li>UTAC / WLTP — Protocole de mesure d&apos;autonomie et de consommation selon le cycle WLTP</li>
              <li>Automobile Propre — Base de données des fiches techniques de véhicules électriques, 2024-2026</li>
              <li>ADAC — Tests de consommation réelle et d&apos;autonomie en conditions standardisées</li>
              <li>Bjørn Nyland — Tests indépendants de recharge rapide et courbes de charge par modèle</li>
              <li>Avere-France — Top des ventes de véhicules électriques par modèle, données mensuelles 2025-2026</li>
              <li>BloombergNEF — Évolution des coûts de batteries et impact sur les prix des véhicules, 2025-2026</li>
              <li>Euro NCAP — Résultats de sécurité par modèle, protocole de test 2023-2025</li>
              <li>Green NCAP — Évaluations d&apos;efficience énergétique et d&apos;empreinte carbone par véhicule</li>
              <li>Données constructeurs — Fiches techniques officielles, prix catalogue et configurateurs (Renault, Peugeot, Citroën, Tesla, BYD, Hyundai-Kia, Volkswagen, BMW, Mercedes)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
