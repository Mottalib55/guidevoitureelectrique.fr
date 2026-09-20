"use client";

import { useState } from "react";
import FaqSection from "@/components/FaqSection";
import { faqParPage } from "@/data/faq-pages";
import Link from "next/link";
import { modeles, type Modele } from "@/data/modeles";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";
import LastUpdated from "@/components/LastUpdated";
import { dec } from "@/lib/format";

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);

export default function ComparateurModeles() {
  const [slugs, setSlugs] = useState<string[]>(["renault-5-e-tech", "citroen-e-c3", ""]);

  const handleChange = (index: number, value: string) => {
    const newSlugs = [...slugs];
    newSlugs[index] = value;
    setSlugs(newSlugs);
  };

  const selected: (Modele | null)[] = slugs.map(
    (s) => modeles.find((m) => m.slug === s) || null
  );

  const selectStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1.5px solid var(--line)",
    background: "var(--field)",
    color: "var(--ink)",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    cursor: "pointer",
  } as const;

  const specs: { label: string; render: (m: Modele) => string }[] = [
    { label: "Marque", render: (m) => m.marque },
    { label: "Prix neuf", render: (m) => euro(m.prixBase) },
    { label: "Prix occasion", render: (m) => m.prixOccasion ? `dès ${euro(m.prixOccasion)}` : "—" },
    { label: "Autonomie WLTP", render: (m) => `${m.autonomieWLTP} km` },
    { label: "Autonomie réelle", render: (m) => `${m.autonomieReelle} km` },
    { label: "Batterie", render: (m) => `${dec(m.batterieKwh)} kWh` },
    { label: "Consommation", render: (m) => `${dec(m.conso)} kWh/100 km` },
    { label: "Puissance", render: (m) => `${m.puissanceCh} ch (${dec(m.puissanceKw)} kW)` },
    { label: "Charge rapide", render: (m) => `${dec(m.chargeRapideKw)} kW` },
    { label: "Temps charge rapide", render: (m) => m.tempsChargeRapide },
    { label: "Charge AC", render: (m) => m.tempsChargeAC },
    { label: "Coffre", render: (m) => `${m.coffre} L` },
    { label: "Poids", render: (m) => `${m.poids} kg` },
    { label: "Longueur", render: (m) => `${(m.longueur / 1000).toFixed(2).replace('.', ',')} m` },
    { label: "Segment", render: (m) => m.segment },
    { label: "Origine", render: (m) => m.origine },
    { label: "Bonus écologique", render: (m) => m.aidesEligible ? "Éligible" : "Non éligible" },
    { label: "Recharge / an (12 000 km)", render: (m) => euro(Math.round((12000 / 100) * m.conso * 0.2)) },
    { label: "Note", render: (m) => `${m.note}/10` },
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Outils", href: "/outils/financement/" },
          { name: "Comparateur modèles", href: "/outils/comparateur-modeles/" },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        <header style={{ marginBottom: 32 }}>
          <LastUpdated />
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Comparateur de modèles électriques
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 640, lineHeight: 1.5 }}>
            Mettez jusqu&apos;à 3 modèles côte à côte : prix, autonomie, recharge, coût
            d&apos;usage et note.
          </p>
        </header>

        {/* Sélecteurs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32, maxWidth: 920 }}>
          {slugs.map((slug, i) => (
            <div key={i}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--faint)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Modèle {i + 1}
              </label>
              <select value={slug} onChange={(e) => handleChange(i, e.target.value)} style={selectStyle}>
                <option value="">— Choisir —</option>
                {[...modeles].sort((a, b) => a.modele.localeCompare(b.modele)).map((m) => (
                  <option key={m.slug} value={m.slug}>{m.modele}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {/* Tableau comparatif */}
        {selected.some((s) => s !== null) && (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Caractéristique</th>
                  {selected.map((m, i) =>
                    m ? (
                      <th key={i}>
                        <Link href={`/modeles/${m.slug}/`} style={{ color: "var(--accent-deep)", textDecoration: "none" }}>
                          {m.modele}
                        </Link>
                      </th>
                    ) : (
                      <th key={i} style={{ color: "var(--faint)" }}>—</th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {specs.map((spec) => (
                  <tr key={spec.label}>
                    <td style={{ fontWeight: 600 }}>{spec.label}</td>
                    {selected.map((m, i) => (
                      <td key={i}>{m ? spec.render(m) : "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
          <Link href="/outils/financement/" className="btn-primary">
            Calculer le financement
          </Link>
          <Link href="/outils/simulateur-cout-recharge/" className="btn-secondary">
            Simuler le coût de recharge
          </Link>
        </div>

        {/* Contenu redactionnel */}
        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Comment lire et comprendre les spécifications d&apos;une voiture électrique</h2>
          <p>
            Les fiches techniques des véhicules électriques regorgent de données chiffrées qui peuvent sembler obscures pour les non-inities. Pourtant, comprendre chaque spécification est essentiel pour faire un choix eclaire. Ce guide decode pour vous chaque ligne de notre tableau comparatif et vous explique pourquoi certains chiffres comptent plus que d&apos;autres selon votre usage.
          </p>
          <p>
            Contrairement aux voitures thermiques ou les critères de choix se résument souvent à la puissance, la consommation et le prix, les véhicules électriques introduisent de nouvelles métriques (capacité de batterie, vitesse de charge, autonomie WLTP vs réelle) qui nécessitent un apprentissage. Prenons le temps de les décrypter un par un.
          </p>

          <h2>La capacité de la batterie (kWh) : le &quot;réservoir&quot; électrique</h2>
          <p>
            La capacité de la batterie, exprimée en <strong>kilowattheures (kWh)</strong>, est l&apos;équivalent du volume du réservoir d&apos;une voiture thermique. Plus la batterie est grande, plus le véhicule peut stocker d&apos;énergie et donc parcourir de kilomètres. Les batteries des VE vendus en France en 2026 varient de 27 kWh (Dacia Spring) a plus de 100 kWh (Mercedes EQS, BMW iX).
          </p>
          <p>
            Mais attention : une batterie plus grande ne signifie pas forcement une meilleure voiture. Elle implique un véhicule plus lourd (environ 6 a 7 kg par kWh supplémentaire), plus cher a l&apos;achat, et plus long à recharger complètement. L&apos;idéal est une batterie dimensionnée pour votre usage réel. Pour un usage urbain et periurbain (moins de 100 km/jour), une batterie de 40 a 52 kWh suffit amplement. Pour des longs trajets réguliers, visez plutôt 60 a 80 kWh.
          </p>
          <p>
            Il faut aussi distinguer la <strong>capacité brute</strong> (totale de la batterie) de la <strong>capacité nette</strong> (effectivement utilisable). Les constructeurs réservent généralement 5 a 10 % de la capacité totale comme &quot;tampon&quot; pour protéger la batterie et prolonger sa durée de vie. C&apos;est la capacité nette qui determine l&apos;autonomie réelle.
          </p>

          <h2>Autonomie WLTP vs autonomie réelle : pourquoi l&apos;écart ?</h2>
          <p>
            Le <strong>cycle WLTP</strong> (Worldwide Harmonized Light Vehicle Test Procédure) est le protocole standardise utilise en Europe pour mesurer l&apos;autonomie des véhicules électriques. Il a remplace le cycle NEDC, juge trop optimiste, en 2018. Le cycle WLTP est plus représentatif de la conduite réelle, mais il reste un test de laboratoire effectue dans des conditions contrôlées : température de 23°C, sans climatisation ni chauffage, sur un banc a rouleaux.
          </p>
          <p>
            En pratique, l&apos;autonomie réelle est généralement <strong>inférieure de 15 a 25 %</strong> a l&apos;autonomie WLTP. Cet écart s&apos;explique par plusieurs facteurs :
          </p>
          <ul>
            <li><strong>La température :</strong> en hiver (0 a 5°C), l&apos;autonomie chute de 20 a 35 % par rapport au test WLTP. En ete très chaud, la climatisation réduit l&apos;autonomie de 10 a 15 %.</li>
            <li><strong>La vitesse :</strong> le cycle WLTP inclut une phase autoroutiere a 131 km/h maximum, mais la vitesse moyenne du test est d&apos;environ 46 km/h. Sur autoroute a 130 km/h constants, la consommation peut doubler par rapport à la ville.</li>
            <li><strong>Le style de conduite :</strong> accélérations vives, freinage tardif, vitesse élevée augmentent la consommation de 15 a 30 %.</li>
            <li><strong>Le chargement :</strong> le test WLTP est effectue avec une charge de 100 kg. Un véhicule charge de 4 passagers et de bagages consommera davantage.</li>
            <li><strong>Le relief :</strong> les parcours montagneux augmentent significativement la consommation. La récupération en descente ne compense que partiellement l&apos;énergie dépensée en montée.</li>
          </ul>
          <p>
            Notre comparateur affiche les deux valeurs : l&apos;autonomie WLTP officielle (pour la comparaison standardisée) et notre estimation d&apos;autonomie réelle (basée sur des tests indépendants et des retours d&apos;utilisateurs). C&apos;est l&apos;autonomie réelle qui doit guider votre choix.
          </p>

          <h2>La consommation (kWh/100 km) : l&apos;indicateur d&apos;efficacité</h2>
          <p>
            La consommation électrique, exprimée en <strong>kWh/100 km</strong>, est l&apos;équivalent électrique des L/100 km pour les thermiques. C&apos;est probablement la spécification la plus importante pour évaluer un véhicule électrique, car elle determine à la fois l&apos;autonomie réelle et le coût d&apos;usage.
          </p>
          <p>
            Les véhicules les plus efficients du marche consomment entre 12 et 14 kWh/100 km (Tesla Model 3, Hyundai Ioniq 6, Fiat 500e). Les SUV et les véhicules lourds peuvent atteindre 20 a 25 kWh/100 km (Mercedes EQS SUV, BMW iX xDrive50). La moyenne du marche se situe autour de 16 kWh/100 km en 2026.
          </p>
          <p>
            <strong>Pourquoi c&apos;est crucial :</strong> sur 15 000 km/an avec une recharge à domicile a 0,21 euro/kWh, la différence entre un véhicule consommant 13 kWh/100 km et un autre a 20 kWh/100 km represente un écart de <strong>220 euros par an</strong>. Sur 5 ans, c&apos;est plus de 1 100 euros d&apos;économie en faveur du véhicule le plus efficient.
          </p>

          <h2>La charge rapide : puissance maximale et courbe de charge</h2>
          <p>
            La <strong>puissance de charge rapide</strong> (exprimée en kW) est le critère déterminant pour les longs trajets. Elle indique la vitesse maximale a laquelle le véhicule peut se recharger sur une borne DC (courant continu). Les valeurs varient énormément : de 30 kW (Dacia Spring) a 350 kW (Porsche Taycan, Hyundai Ioniq 5 avec batterie 800V).
          </p>
          <p>
            Mais la puissance maximale ne raconte pas toute l&apos;histoire. Ce qui compte vraiment, c&apos;est la <strong>courbe de charge</strong> : comment la puissance evolue au fil de la recharge. Un véhicule qui accepte 200 kW en pointe mais chute a 50 kW des que la batterie atteint 30 % sera moins rapide à recharger qu&apos;un véhicule qui maintient 150 kW constants jusqu&apos;a 80 %. C&apos;est pourquoi nous indiquons le <strong>temps de charge de 10 a 80 %</strong>, qui est le meilleur indicateur de la performance de charge en conditions réelles.
          </p>
          <p>
            Les véhicules équipes d&apos;une <strong>architecture 800 V</strong> (Hyundai Ioniq 5/6, Kia EV6, Porsche Taycan, Audi e-tron GT) se distinguent par des temps de charge exceptionnels : 18 a 25 minutes pour passer de 10 a 80 %. Les véhicules en 400 V (la majorité du marche) mettent généralement 25 a 40 minutes. C&apos;est un critère à considérer si vous faites régulièrement des trajets dépassant l&apos;autonomie du véhicule.
          </p>

          <h2>La charge AC : un critère pour le quotidien</h2>
          <p>
            La <strong>charge en courant alternatif (AC)</strong> est celle que vous utilisez au quotidien : à domicile sur votre wallbox ou sur les bornes publiques AC. La puissance maximale du chargeur embarque varie de 7 kW (la plupart des véhicules d&apos;entrée de gamme) a 22 kW (Renault Megane E-Tech, Tesla Model 3 Highland, MG4).
          </p>
          <p>
            Un chargeur embarque de 22 kW permet une recharge complete en 3 a 4 heures sur une wallbox triphasé 22 kW, contre 7 a 10 heures avec un chargeur de 7 kW. En pratique, si vous rechargez la nuit à domicile, 7 kW suffit largement (8 heures de nuit permettent de récupérer environ 50 kWh, soit 300+ km d&apos;autonomie). Le 22 kW est surtout avantageux pour les recharges d&apos;appoint en journée sur bornes publiques AC.
          </p>

          <h2>Puissance et couple : comprendre les performances électriques</h2>
          <p>
            La puissance d&apos;un moteur électrique est exprimée en <strong>kW</strong> (kilowatts) et en <strong>ch</strong> (chevaux). 1 kW équivaut a environ 1,36 ch. Mais comparer la puissance d&apos;un moteur électrique a celle d&apos;un thermique n&apos;est pas tout a fait pertinent, car le moteur électrique a un avantage fondamental : il delivre son <strong>couple maximal instantanément</strong>, des 0 tour/minute.
          </p>
          <p>
            C&apos;est pourquoi une voiture électrique de 150 ch semble aussi dynamique qu&apos;une thermique de 200 ch dans les accélérations a basse vitesse. Le 0 a 100 km/h d&apos;un VE est généralement très flatteur par rapport à sa puissance nominale. En revanche, les reprises a haute vitesse (80 a 130 km/h) sont moins impressionnantes car la puissance du moteur électrique décroît naturellement a haute vitesse.
          </p>

          <h2>Le poids : l&apos;ennemi silencieux de l&apos;efficacité</h2>
          <p>
            Les véhicules électriques sont significativement plus lourds que leurs équivalents thermiques : une batterie de 60 kWh pese environ 400 kg. Ce surpoids a des conséquences directes sur la consommation (plus le véhicule est lourd, plus il consomme d&apos;énergie, surtout en ville avec les accélérations et freinages fréquents), sur le confort de conduite (un centre de gravite plus bas ameliore la tenue de route mais les suspensions doivent gérer une masse supérieure), et sur l&apos;usure des pneumatiques (les pneus de VE s&apos;usent 20 a 30 % plus vite que ceux d&apos;un thermique).
          </p>
          <p>
            Le poids est aussi un critère réglementaire. Depuis 2025, les véhicules de plus de 1 800 kg sont soumis a un <strong>malus au poids</strong> en France (10 euros par kg supplémentaire au-delà du seuil). Ce malus concerne principalement les SUV électriques lourds (Tesla Model X, Mercedes EQS SUV, BMW iX). Les véhicules 100 % électriques bénéficient cependant d&apos;un abattement de 200 kg sur le seuil.
          </p>

          <h2>Le coffre : un critère souvent sous-estime</h2>
          <p>
            Le volume de coffre des VE merite une attention particulière. Certains véhicules électriques, conçus sur des plateformes dédiées, offrent un <strong>espace intérieur généreux</strong> grâce à l&apos;absence de tunnel de transmission et au plancher plat (la batterie est logée sous le plancher). D&apos;autres, derives de plateformes thermiques, peuvent souffrir d&apos;un coffre réduit car la batterie empiete sur l&apos;espace de chargement.
          </p>
          <p>
            Un bonus pour les véhicules électriques : le <strong>frunk</strong> (front trunk), un coffre avant présent sur certains modèles (Tesla Model Y : 117 L, Hyundai Ioniq 5 : 57 L, Kia EV6 : 52 L). Cet espace supplémentaire est idéal pour les câbles de recharge, les petits bagages ou les courses.
          </p>

          <h2>Le segment et les dimensions : trouver la bonne taille</h2>
          <p>
            Le marche français des VE couvre désormais tous les segments, de la micro-citadine au grand SUV. Voici les grandes catégories et leurs usages typiques :
          </p>
          <ul>
            <li><strong>Citadines (moins de 4,00 m) :</strong> Renault 5, Fiat 500e, Peugeot e-208, Dacia Spring. Idéales pour la ville et le periurbain. Batterie 27-52 kWh, autonomie réelle 150-300 km.</li>
            <li><strong>Compactes (4,00 a 4,50 m) :</strong> MG4, Citroen e-C4, Volkswagen ID.3, Peugeot e-308. Le compromis polyvalent : ville, route, trajets familiaux. Batterie 50-77 kWh, autonomie réelle 300-450 km.</li>
            <li><strong>Berlines (4,50 a 5,00 m) :</strong> Tesla Model 3, Hyundai Ioniq 6, BMW i4, Peugeot e-3008. Confort et autonomie pour les gros rouleurs. Batterie 60-82 kWh, autonomie réelle 400-530 km.</li>
            <li><strong>SUV compacts (4,30 a 4,70 m) :</strong> Hyundai Ioniq 5, Kia EV6, Volkswagen ID.4, Renault Scenic E-Tech. Polyvalence, garde au sol, espace familial. Batterie 58-84 kWh.</li>
            <li><strong>Grands SUV (plus de 4,70 m) :</strong> Tesla Model Y, Mercedes EQE SUV, BMW iX, Audi Q8 e-tron. Espace maximal, équipement premium. Batterie 75-110 kWh.</li>
          </ul>

          <h2>L&apos;éligibilité au bonus écologique : un critère financier majeur</h2>
          <p>
            Le <strong>bonus écologique</strong> est une aide de l&apos;État français qui réduit directement le prix d&apos;achat d&apos;un véhicule électrique neuf. En 2026, le bonus s&apos;eleve a <strong>4 000 euros</strong> pour les véhicules de moins de 47 000 euros, et peut atteindre <strong>7 000 euros</strong> pour les menages les plus modestes (revenu fiscal de référence par part inférieur a 15 400 euros).
          </p>
          <p>
            Mais depuis 2024, l&apos;éligibilité au bonus est conditionnée a un <strong>score environnemental</strong> qui prend en compte l&apos;empreinte carbone de fabrication du véhicule. Ce score penalise les véhicules fabriques dans des pays au mix énergétique fortement carbone (comme la Chine). En conséquence, de nombreux modèles chinois importes (BYD Atto 3, MG4 version standard, Xpeng G6) ne sont pas éligibles au bonus, ce qui renchérit leur prix réel de 4 000 a 7 000 euros par rapport aux véhicules éligibles.
          </p>
          <p>
            Certains constructeurs chinois ont réagi en assemblant leurs véhicules en Europe. Le Leapmotor T03, assemble en Pologne par Stellantis, est éligible au bonus. BYD a ouvert des usines en Hongrie et en Turquie. MG envisage une production en Europe. Cette stratégie devrait progressivement élargir le nombre de modèles chinois éligibles au bonus.
          </p>

          <h2>Le coût de recharge annuel : la surprise du calcul</h2>
          <p>
            Notre comparateur integre une estimation du coût de recharge annuel base sur 12 000 km/an et un tarif moyen de 0,20 euro/kWh (recharge mixte domicile + bornes publiques). Ce chiffre est révélateur de l&apos;écart d&apos;efficacité entre les modèles.
          </p>
          <p>
            Prenons deux véhicules du même segment : la Tesla Model 3 (14 kWh/100 km) et le Volkswagen ID.4 (18 kWh/100 km). Sur 12 000 km/an, la différence de consommation represente (4 kWh x 120) = 480 kWh, soit <strong>96 euros de différence annuelle</strong>. Sur 5 ans, cela fait 480 euros. Ce n&apos;est pas énorme, mais combine aux différences de prix d&apos;achat et de decote, cela peut influencer le choix final.
          </p>

          <h2>La note globale : notre méthodologie</h2>
          <p>
            Notre note sur 10 attribuée à chaque véhicule est le résultat d&apos;une évaluation multicritères pondérée, prenant en compte :
          </p>
          <ul>
            <li><strong>Rapport qualité-prix (25 %)</strong> : prix d&apos;achat après aides rapporté aux prestations offertes</li>
            <li><strong>Autonomie et efficacité (20 %)</strong> : autonomie réelle et consommation aux 100 km</li>
            <li><strong>Performance de charge (15 %)</strong> : temps de charge rapide 10-80 % et puissance AC</li>
            <li><strong>Habitabilité et coffre (15 %)</strong> : espace aux places arrière, volume de coffre, modularité</li>
            <li><strong>Équipement et technologie (15 %)</strong> : système d&apos;info-divertissement, aides à la conduite, connectivité</li>
            <li><strong>Agrément de conduite (10 %)</strong> : confort, dynamisme, insonorisation, qualité de roulement</li>
          </ul>
          <p>
            Cette notation est mise à jour régulièrement pour refléter les évolutions du marche et les retours d&apos;expérience des utilisateurs. Un véhicule note 8/10 ou plus est considere comme un excellent choix dans sa catégorie. En dessous de 6/10, des compromis importants sont à anticiper.
          </p>

          <h2>Conseils pour utiliser efficacement le comparateur</h2>
          <p>
            Pour tirer le meilleur parti de notre outil de comparaison, nous vous recommandons la démarche suivante :
          </p>
          <ul>
            <li><strong>Définissez votre budget maximal</strong> (après déduction du bonus écologique et des aides éventuelles) et filtrez les modèles en conséquence.</li>
            <li><strong>Identifiez votre besoin en autonomie</strong> : calculez votre trajet quotidien moyen et ajoutez une marge de sécurité de 30 %. Ce sera votre autonomie réelle minimale.</li>
            <li><strong>Comparez des véhicules du même segment</strong> : comparer une citadine et un SUV n&apos;a pas de sens. Restez dans la même catégorie de taille et d&apos;usage.</li>
            <li><strong>Regardez le coût total, pas seulement le prix d&apos;achat</strong> : un véhicule plus cher mais plus efficient peut revenir moins cher sur 5 ans grâce aux économies de recharge.</li>
            <li><strong>Placez 3 véhicules cote a cote</strong> dans notre comparateur pour visualiser clairement les différences sur chaque critère.</li>
          </ul>
          <p>
            En combinant ce comparateur avec nos outils de simulation de financement et de coût de recharge, vous disposerez de toutes les informations nécessaires pour faire un choix parfaitement eclaire.
          </p>
        </div>

        <AuteurBio />
        <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
          <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>UTAC / WLTP : Protocole de mesure d&apos;autonomie et de consommation normalisée</li>
            <li>Automobile Propre : Tests d&apos;autonomie réelle en conditions standardisées, 2024-2026</li>
            <li>Euro NCAP : Résultats de sécurité par modèle</li>
            <li>Bjørn Nyland : Tests indépendants de recharge rapide et courbes de charge</li>
            <li>Données constructeurs : Fiches techniques officielles et prix catalogue</li>
          </ul>
        </div>
      </article>
      <FaqSection items={faqParPage["/outils/comparateur-modeles/"]} />
    </>
  );
}
