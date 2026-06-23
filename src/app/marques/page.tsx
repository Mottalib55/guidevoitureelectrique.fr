import type { Metadata } from "next";
import Link from "next/link";
import { marques } from "@/data/marques";
import { modeles } from "@/data/modeles";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

export const metadata: Metadata = buildMetadata({
  title: "Marques de voitures électriques : toutes les fiches",
  description:
    marques.length +
    " marques de voitures électriques en France : Renault, Tesla, BYD, Peugeot, Kia... Fiches constructeurs, modèles disponibles et origine.",
  path: "/marques/",
});

export default function MarquesIndexPage() {
  const marquesAvecCount = marques.map((m) => ({
    ...m,
    nbModeles: modeles.filter((mod) => mod.marqueSlug === m.slug).length,
  }));

  const origines = ["FR", "EU", "Chine", "US"] as const;
  const labels: Record<string, string> = {
    FR: "Marques françaises",
    EU: "Marques européennes",
    Chine: "Marques chinoises",
    US: "Marques américaines",
  };

  return (
    <>
      <Breadcrumb items={[{ name: "Marques", href: "/marques/" }]} />
      <section className="section" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <h1 className="section-title">
          Toutes les marques électriques ({marques.length})
        </h1>
        <p className="section-sub">
          {marques.length} constructeurs référencés avec leurs modèles
          électriques disponibles en France.
        </p>

        {origines.map((origine) => {
          const group = marquesAvecCount.filter((m) => m.origine === origine);
          if (group.length === 0) return null;
          return (
            <div key={origine} style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 22, marginBottom: 16 }}>
                {labels[origine]} ({group.length})
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 16,
                }}
              >
                {group.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/marques/${m.slug}/`}
                    className="carte-modele"
                    style={{ padding: 20 }}
                  >
                    <h3
                      className="carte-modele-nom"
                      style={{ marginBottom: 4, fontSize: 18 }}
                    >
                      {m.nom}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--muted)",
                        margin: 0,
                      }}
                    >
                      {m.pays}, {m.nbModeles} modèle
                      {m.nbModeles > 1 ? "s" : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── CONTENU ÉDITORIAL ────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="prose">
          <h2>Panorama des marques de voitures électriques en France en 2026</h2>

          <p>
            Le paysage des constructeurs automobiles électriques en France a radicalement evolue en l&apos;espace de quelques années. Si Tesla a longtemps domine le marché en tant que constructeur spécialise, l&apos;offensive des marques traditionnelles et l&apos;arrivee massive des constructeurs chinois ont profondement transforme l&apos;ecosysteme. En 2026, l&apos;acheteur français a le choix entre des dizaines de marques proposant des véhicules électriques, chacune avec son positionnement, ses forces et sa vision de la mobilité de demain. Ce panorama vous aide a comprendre qui sont les principaux acteurs, leur stratégie électrique et ce que vous pouvez attendre de chaque constructeur.
          </p>

          <h2>Les marques françaises : un savoir-faire reinvente</h2>

          <h3>Renault : le pionnier qui se reinvente</h3>
          <p>
            Renault a ete le premier constructeur generaliste a parier massivement sur l&apos;électrique avec le lancement de la Zoe en 2012. Plus de dix ans plus tard, cette experience accumulee porte ses fruits. La gamme E-Tech de Renault est l&apos;une des plus completes du marché français, avec la Renault 5 E-Tech (citadine neo-retro), la Renault 4 E-Tech (crossover compact), le Megane E-Tech (compacte), le Scenic E-Tech (SUV familial) et la Twingo E-Tech (micro-citadine urbaine). Renault mise sur le design emotionnel, la plateforme AmpR (anciennement CMF-EV) et une stratégie de prix agressive pour conserver sa position de leader sur le marché français.
          </p>
          <p>
            La filiale Mobilize développe par ailleurs des services de mobilité partagee et des solutions de recharge, renforçant l&apos;ecosysteme Renault autour du véhicule électrique. L&apos;usine de Douai (ElectriCity) est devenue l&apos;un des plus grands sites de production de véhicules électriques en Europe, avec une capacité de plus de 400 000 véhicules par an.
          </p>

          <h3>Peugeot : l&apos;élégance électrique</h3>
          <p>
            Peugeot a adopte une stratégie d&apos;électrification rapide de sa gamme existante, proposant une version électrique de la quasi-totalite de ses modeles. La e-208, meilleure vente électrique en France en 2024, la e-308, le e-2008 et le e-3008 couvrent les segments les plus populaires. Le i-cockpit, signature ergonomique de Peugeot, se decline avec bonheur dans les versions électriques, avec un affichage configurable et une position de conduite distincte. Le e-3008, avec sa batterie de 98 kWh et son autonomie depassant 700 km WLTP, a marque un tournant en 2025 en proposant l&apos;une des plus grandes autonomies du marché dans un SUV compact premium.
          </p>

          <h3>Citroen : la democratisation de l&apos;électrique</h3>
          <p>
            Citroen a choisi le positionnement de la mobilité accessible et inclusive. La e-C3, lancee a moins de 24 000 euros (avant bonus), est l&apos;un des véhicules électriques les plus abordables du marché tout en offrant une autonomie et un espace interieur très compétitifs pour le segment. La philosophie Citroën (confort, simplicité, accessibilité) se traduit par des véhicules électriques pensés pour le plus grand nombre, sans concession sur le confort de suspension (grace au système Advanced Comfort) ni sur la praticite quotidienne.
          </p>

          <h3>Dacia : l&apos;électrique au prix plancher</h3>
          <p>
            Dacia, la marque du groupe Renault positionnee sur le segment low-cost, propose la Spring, la voiture électrique la moins chere du marché français. Avec un prix plancher autour de 17 000 euros, la Spring rend la mobilité électrique accessible au plus grand nombre. Ses limitations en termes d&apos;autonomie (environ 230 km WLTP) et de performances sont compensees par un cout de possession imbattable, ce qui en fait un choix pertinent pour un usage urbain et periurbain quotidien.
          </p>

          <h2>Les marques européennes : l&apos;offensive électrique continentale</h2>

          <h3>Volkswagen et le groupe VAG</h3>
          <p>
            Le groupe Volkswagen a engage l&apos;une des plus importantes transformations industrielles de son histoire pour basculer vers l&apos;électrique. La gamme ID. (ID.3, ID.4, ID.5, ID.7) couvre les principaux segments du marché. Audi (Q4 e-tron, Q8 e-tron, e-tron GT), Skoda (Enyaq, Elroq) et Cupra (Born, Tavascan) completent l&apos;offre du groupe avec des positionnements complementaires. Le point fort du groupe VAG : la plateforme MEB, mature et efficiente, qui offre un bon compromis entre performances, autonomie et prix. Le point d&apos;amelioration : le système d&apos;info-divertissement, qui a fait l&apos;objet de critiques a ses debuts mais s&apos;est considérablement ameliore avec les mises a jour recentes.
          </p>

          <h3>BMW, Mercedes et le premium allemand</h3>
          <p>
            BMW et Mercedes ont adopte des stratégies differentes dans leur transition électrique. BMW mise sur la polyvalence de ses plateformes, permettant de produire des versions thermiques, hybrides et électriques sur les memes lignes d&apos;assemblage (iX1, iX3, i4, i5, i7, iX). Mercedes privilegiee une approche plus segmentee avec des modèles dedies (EQA, EQB, EQC, EQE, EQS) et une attention particuliere portee au luxe et a la technologie embarquee. L&apos;EQS, avec son autonomie de plus de 700 km et son interieur futuriste, reste la reference du segment premium électrique.
          </p>

          <h3>Hyundai et Kia : l&apos;excellence coreenne</h3>
          <p>
            Le groupe Hyundai-Kia est probablement le constructeur qui a le mieux reussi sa transition électrique parmi les grands generalistes. La plateforme E-GMP, puis son évolution E-GMP 2.0, offre des performances de recharge parmi les meilleures du marché (charge de 10 a 80 % en 18 minutes sur les meilleurs modeles). Le Hyundai Ioniq 5, le Ioniq 6, le Kia EV6 et le Kia EV3 sont reconnus pour leur design distinctif, leur technologie avancee et leur rapport qualité-prix équilibre. L&apos;architecture 800V, democratisee par le groupe coreen, permet des vitesses de recharge supérieures a celles de la plupart des concurrents européens.
          </p>

          <h3>Volvo et Polestar : l&apos;électrique scandinave</h3>
          <p>
            Volvo s&apos;est engage a ne vendre que des véhicules électriques d&apos;ici 2030. La gamme actuelle (EX30, EX40, EX90) allie la sécurité proverbiale de Volvo a un design scandinave epure et a des motorisations exclusivement électriques. Polestar, la marque sportive de Volvo, propose des véhicules au positionnement premium-sportif (Polestar 2, Polestar 3, Polestar 4) avec un accent sur la performance et le design.
          </p>

          <h2>Les marques chinoises : la nouvelle donne du marché européen</h2>

          <h3>BYD : le geant mondial</h3>
          <p>
            BYD (Build Your Dreams) est devenu en 2023 le premier constructeur mondial de véhicules électriques en volume, depassant Tesla. Son offensive sur le marché européen s&apos;est accéléree en 2024-2025 avec le déploiement d&apos;un réseau de concessions et l&apos;arrivee de modèles adaptes aux gouts européens. La gamme BYD en France comprend la Dolphin (citadine polyvalente), la Dolphin Surf (SUV compact), l&apos;Atto 3 (SUV familial), la Seal (berline sportive) et le Tang (grand SUV). BYD se distingue par sa maitrise complete de la chaine de valeur, de la cellule de batterie (Blade Battery LFP) au véhicule fini, ce qui lui confere un avantage de cout significatif.
          </p>
          <p>
            La question de l&apos;eligibilite au bonus écologique est cruciale pour les modèles BYD. Certains véhicules assembles en Europe (ou en cours de localisation de la production) pourront bénéficier du bonus, tandis que ceux importes directement de Chine risquent d&apos;en etre exclus en raison du score environnemental. C&apos;est un parametre a verifier systematiquement avant l&apos;achat.
          </p>

          <h3>MG : le retour de la marque britannique, version chinoise</h3>
          <p>
            MG, marque britannique historique rachetee par le groupe chinois SAIC Motor, est l&apos;un des succes les plus remarquables du marché électrique français. La MG4, compacte électrique au rapport qualité-prix exceptionnel, s&apos;est imposee dans le top 10 des ventes électriques en France. La gamme s&apos;est enrichie avec le MG ZS EV (SUV compact), le MG Marvel R (SUV haut de gamme) et le MG Cyberster (roadster sportif). MG bénéficie d&apos;un réseau de distribution déjà bien implante en France et de tarifs defiant toute concurrence dans chaque segment.
          </p>

          <h3>Leapmotor : l&apos;alliance avec Stellantis</h3>
          <p>
            Leapmotor est un cas particulier parmi les constructeurs chinois : la marque a conclu un partenariat stratégique avec Stellantis (groupe Peugeot-Citroen-Fiat) pour sa distribution en Europe. Ce partenariat lui permet de s&apos;appuyer sur le réseau de concessions Stellantis pour la vente et le service apres-vente, levant l&apos;une des principales inquietudes liees aux marques chinoises. La T03, micro-citadine urbaine, et le C10, SUV familial, sont les premiers modèles distribues en France via ce partenariat.
          </p>

          <h3>Xpeng : la technologie avant tout</h3>
          <p>
            Xpeng se positionne comme le concurrent chinois le plus technologique, avec un accent sur les systèmes d&apos;aide a la conduite avances et l&apos;experience utilisateur numerique. La P7 (berline sportive) et le G6 (SUV coupe) impressionnent par leur niveau de technologie embarquee et leurs performances dynamiques. La marque reste en phase de déploiement en France, avec un réseau de distribution encore limite mais en croissance.
          </p>

          <h2>Les marques americaines : au-dela de Tesla</h2>

          <h3>Tesla : le precurseur incontournable</h3>
          <p>
            Tesla reste une reference incontournable du marché électrique. La Model 3 et le Model Y figurent parmi les véhicules électriques les plus vendus en France et en Europe. Les forces de Tesla sont connues : un réseau de Superchargers fiable et etendu, des mises a jour logicielles frequentes qui ameliorent le véhicule apres l&apos;achat, des performances de recharge rapide excellentes et une intégration verticale poussee. Le modèle de vente directe (sans concessions) et l&apos;absence de negociation sur les prix peuvent derouter certains acheteurs habitues au circuit traditionnel, mais simplifient le processus d&apos;achat.
          </p>
          <p>
            Les critiques recurrentes concernent la qualité de finition (en amelioration constante, notamment sur les modèles produits a l&apos;usine de Berlin), l&apos;absence de certains équipements traditionnels (tableau de bord derriere le volant, commodos physiques) et le SAV parfois decrie. Malgre ces reserves, Tesla reste le constructeur qui a le plus fait pour democratiser la voiture électrique dans le monde.
          </p>

          <h2>Comment choisir entre les marques ?</h2>
          <p>
            Le choix d&apos;une marque de voiture électrique ne se resume pas au comparatif des specifications techniques. Plusieurs facteurs complementaires meritent d&apos;etre pris en compte :
          </p>
          <ul>
            <li><strong>Le réseau de distribution et le SAV :</strong> une marque avec un réseau de concessions dense vous garantit un service de proximite pour l&apos;entretien et les reparations. C&apos;est un avantage des marques etablies (Renault, Peugeot, Volkswagen) par rapport aux nouveaux entrants.</li>
            <li><strong>La garantie :</strong> comparez les durees et les conditions de garantie, notamment celle de la batterie (généralement 8 ans / 160 000 km, mais avec des conditions variables).</li>
            <li><strong>L&apos;eligibilite aux aides :</strong> le bonus écologique et le score environnemental excluent certains modèles importes de pays a forte empreinte carbone de fabrication. Verifiez l&apos;eligibilite avant de vous engager.</li>
            <li><strong>La valeur de revente :</strong> les marques etablies et reconnues conservent généralement une meilleure valeur residuelle. Tesla et les marques premium européennes affichent les meilleures decotes.</li>
            <li><strong>Les mises a jour logicielles :</strong> certaines marques (Tesla, BMW, Mercedes) proposent des mises a jour OTA regulieres qui ameliorent le véhicule dans le temps. D&apos;autres ne proposent que des mises a jour ponctuelles en concession.</li>
          </ul>
          <p>
            Explorez nos fiches constructeurs pour decouvrir en detail la gamme, l&apos;histoire et la stratégie électrique de chaque marque. Chaque fiche présente l&apos;ensemble des modèles disponibles en France avec leurs specifications, leurs prix et leur eligibilite aux aides.
          </p>

          <AuteurBio />

          <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
            <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
              <li>Renault Group : Communiqués de presse et stratégie « Renaulution », plan électrique 2025-2030</li>
              <li>Stellantis : Plan stratégique « Dare Forward 2030 », électrification des marques Peugeot, Citroën, DS</li>
              <li>Volkswagen Group : Rapport annuel 2025, stratégie plateforme MEB et SSP</li>
              <li>Hyundai Motor Group : Feuille de route électrique E-GMP et architecture 800V</li>
              <li>BYD : Rapports financiers et volumes de ventes mondiaux, données CPCA (China Passenger Car Association)</li>
              <li>SAIC Motor / MG : Historique de la marque et stratégie de déploiement européen</li>
              <li>Tesla : Rapports trimestriels (10-Q SEC filings) et données de production, 2024-2026</li>
              <li>ACEA : Statistiques d&apos;immatriculations par constructeur en Europe, 2025-2026</li>
              <li>Données constructeurs : Sites officiels, configurateurs et dossiers de presse</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
