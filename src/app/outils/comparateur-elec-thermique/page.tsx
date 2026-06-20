"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

export default function ComparateurElecThermique() {
  // Électrique
  const [prixElec, setPrixElec] = useState(25000);
  const [bonusElec, setBonusElec] = useState(4000);
  const [consoElec, setConsoElec] = useState(15); // kWh/100km
  const [prixKwh, setPrixKwh] = useState(0.2);
  const [assurElec, setAssurElec] = useState(650);
  const [entretienElec, setEntretienElec] = useState(250);
  const [decoteElec, setDecoteElec] = useState(48);

  // Thermique
  const [prixTherm, setPrixTherm] = useState(22000);
  const [consoTherm, setConsoTherm] = useState(7); // L/100km
  const [prixLitre, setPrixLitre] = useState(1.75);
  const [assurTherm, setAssurTherm] = useState(750);
  const [entretienTherm, setEntretienTherm] = useState(600);
  const [decoteTherm, setDecoteTherm] = useState(40);

  // Commun
  const [kmAn, setKmAn] = useState(12000);
  const [duree, setDuree] = useState(5);

  const calc = useMemo(() => {
    const kmTotal = kmAn * duree;

    // Électrique
    const achatElec = prixElec - bonusElec;
    const energieElec = (kmTotal / 100) * consoElec * prixKwh;
    const assurTotalElec = assurElec * duree;
    const entretienTotalElec = entretienElec * duree;
    const reventeElec = prixElec * (1 - decoteElec / 100);
    const tcoElec = achatElec + energieElec + assurTotalElec + entretienTotalElec - reventeElec;
    const coutKmElec = tcoElec / kmTotal;

    // Thermique
    const achatTherm = prixTherm;
    const energieTherm = (kmTotal / 100) * consoTherm * prixLitre;
    const assurTotalTherm = assurTherm * duree;
    const entretienTotalTherm = entretienTherm * duree;
    const reventeTherm = prixTherm * (1 - decoteTherm / 100);
    const tcoTherm = achatTherm + energieTherm + assurTotalTherm + entretienTotalTherm - reventeTherm;
    const coutKmTherm = tcoTherm / kmTotal;

    const economie = tcoTherm - tcoElec;

    return {
      elec: { achat: achatElec, energie: energieElec, assur: assurTotalElec, entretien: entretienTotalElec, revente: reventeElec, tco: tcoElec, coutKm: coutKmElec },
      therm: { achat: achatTherm, energie: energieTherm, assur: assurTotalTherm, entretien: entretienTotalTherm, revente: reventeTherm, tco: tcoTherm, coutKm: coutKmTherm },
      economie,
      kmTotal,
    };
  }, [prixElec, bonusElec, consoElec, prixKwh, assurElec, entretienElec, decoteElec, prixTherm, consoTherm, prixLitre, assurTherm, entretienTherm, decoteTherm, kmAn, duree]);

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 10,
    border: "1.5px solid var(--line)",
    background: "var(--field)",
    color: "var(--ink)",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
  } as const;

  const labelStyle = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    color: "var(--faint)",
    marginBottom: 4,
  } as const;

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Outils", href: "/outils/financement/" },
          { name: "Élec vs thermique", href: "/outils/comparateur-elec-thermique/" },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        <header style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Comparateur électrique vs thermique
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 640, lineHeight: 1.5 }}>
            Comparez le coût total de possession (TCO) sur {duree} ans : achat, énergie,
            entretien, assurance et décote.
          </p>
        </header>

        {/* Paramètres communs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 400, marginBottom: 24 }}>
          <div>
            <label style={labelStyle}>Km / an</label>
            <input type="text" inputMode="decimal" value={kmAn} onChange={(e) => setKmAn(Number(e.target.value))} step={1000} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Durée (années)</label>
            <input type="text" inputMode="decimal" value={duree} onChange={(e) => setDuree(Number(e.target.value))} min={1} max={10} style={inputStyle} />
          </div>
        </div>

        {/* Colonnes élec / thermique */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 920 }}>
          {/* Électrique */}
          <div style={{ border: "1.5px solid var(--accent)", borderRadius: 18, padding: 20 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--accent-deep)", marginBottom: 16 }}>
              Électrique
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div><label style={labelStyle}>Prix neuf</label><input type="text" inputMode="decimal" value={prixElec} onChange={(e) => setPrixElec(Number(e.target.value))} step={1000} style={inputStyle} /></div>
              <div><label style={labelStyle}>Bonus</label><input type="text" inputMode="decimal" value={bonusElec} onChange={(e) => setBonusElec(Number(e.target.value))} step={500} style={inputStyle} /></div>
              <div><label style={labelStyle}>Conso (kWh/100)</label><input type="text" inputMode="decimal" value={consoElec} onChange={(e) => setConsoElec(Number(e.target.value))} step={0.5} style={inputStyle} /></div>
              <div><label style={labelStyle}>€/kWh</label><input type="text" inputMode="decimal" value={prixKwh} onChange={(e) => setPrixKwh(Number(e.target.value))} step={0.01} style={inputStyle} /></div>
              <div><label style={labelStyle}>Assurance / an</label><input type="text" inputMode="decimal" value={assurElec} onChange={(e) => setAssurElec(Number(e.target.value))} step={50} style={inputStyle} /></div>
              <div><label style={labelStyle}>Entretien / an</label><input type="text" inputMode="decimal" value={entretienElec} onChange={(e) => setEntretienElec(Number(e.target.value))} step={50} style={inputStyle} /></div>
              <div style={{ gridColumn: "1 / -1" }}><label style={labelStyle}>Décote sur {duree} ans (%)</label><input type="text" inputMode="decimal" value={decoteElec} onChange={(e) => setDecoteElec(Number(e.target.value))} step={1} style={inputStyle} /></div>
            </div>
          </div>

          {/* Thermique */}
          <div style={{ border: "1.5px solid var(--line)", borderRadius: 18, padding: 20 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--muted)", marginBottom: 16 }}>
              Thermique
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div><label style={labelStyle}>Prix neuf</label><input type="text" inputMode="decimal" value={prixTherm} onChange={(e) => setPrixTherm(Number(e.target.value))} step={1000} style={inputStyle} /></div>
              <div><label style={labelStyle}>—</label><input type="text" value="Pas de bonus" disabled style={{ ...inputStyle, color: "var(--faint)", background: "var(--wash)" }} /></div>
              <div><label style={labelStyle}>Conso (L/100)</label><input type="text" inputMode="decimal" value={consoTherm} onChange={(e) => setConsoTherm(Number(e.target.value))} step={0.5} style={inputStyle} /></div>
              <div><label style={labelStyle}>€/litre</label><input type="text" inputMode="decimal" value={prixLitre} onChange={(e) => setPrixLitre(Number(e.target.value))} step={0.05} style={inputStyle} /></div>
              <div><label style={labelStyle}>Assurance / an</label><input type="text" inputMode="decimal" value={assurTherm} onChange={(e) => setAssurTherm(Number(e.target.value))} step={50} style={inputStyle} /></div>
              <div><label style={labelStyle}>Entretien / an</label><input type="text" inputMode="decimal" value={entretienTherm} onChange={(e) => setEntretienTherm(Number(e.target.value))} step={50} style={inputStyle} /></div>
              <div style={{ gridColumn: "1 / -1" }}><label style={labelStyle}>Décote sur {duree} ans (%)</label><input type="text" inputMode="decimal" value={decoteTherm} onChange={(e) => setDecoteTherm(Number(e.target.value))} step={1} style={inputStyle} /></div>
            </div>
          </div>
        </div>

        {/* Résultats */}
        <div style={{ marginTop: 32 }}>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Poste</th>
                  <th>Électrique</th>
                  <th>Thermique</th>
                  <th>Différence</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Achat (après aides)</td><td>{euro(calc.elec.achat)}</td><td>{euro(calc.therm.achat)}</td><td>{euro(calc.elec.achat - calc.therm.achat)}</td></tr>
                <tr><td>Énergie ({duree} ans)</td><td>{euro(calc.elec.energie)}</td><td>{euro(calc.therm.energie)}</td><td style={{ color: "var(--accent-deep)" }}>{euro(calc.elec.energie - calc.therm.energie)}</td></tr>
                <tr><td>Assurance ({duree} ans)</td><td>{euro(calc.elec.assur)}</td><td>{euro(calc.therm.assur)}</td><td>{euro(calc.elec.assur - calc.therm.assur)}</td></tr>
                <tr><td>Entretien ({duree} ans)</td><td>{euro(calc.elec.entretien)}</td><td>{euro(calc.therm.entretien)}</td><td style={{ color: "var(--accent-deep)" }}>{euro(calc.elec.entretien - calc.therm.entretien)}</td></tr>
                <tr><td>Valeur de revente</td><td>-{euro(calc.elec.revente)}</td><td>-{euro(calc.therm.revente)}</td><td>{euro(calc.therm.revente - calc.elec.revente)}</td></tr>
                <tr style={{ fontWeight: 800 }}>
                  <td>TCO total</td>
                  <td style={{ color: "var(--accent-deep)" }}>{euro(calc.elec.tco)}</td>
                  <td>{euro(calc.therm.tco)}</td>
                  <td style={{ color: calc.economie > 0 ? "var(--accent-deep)" : "var(--warn)" }}>
                    {calc.economie > 0 ? `${euro(calc.economie)} d'économie` : `${euro(-calc.economie)} de surcoût`}
                  </td>
                </tr>
                <tr>
                  <td>Coût au km</td>
                  <td>{(calc.elec.coutKm * 100).toFixed(1)} ct/km</td>
                  <td>{(calc.therm.coutKm * 100).toFixed(1)} ct/km</td>
                  <td>{((calc.therm.coutKm - calc.elec.coutKm) * 100).toFixed(1)} ct/km</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
          <Link href="/outils/financement/" className="btn-primary">
            Calculer mon financement
          </Link>
          <Link href="/outils/simulateur-cout-recharge/" className="btn-secondary">
            Simuler le coût de recharge
          </Link>
        </div>

        {/* Contenu redactionnel */}
        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Voiture electrique vs thermique : le grand duel du cout total de possession en 2026</h2>
          <p>
            Le debat entre voiture electrique et voiture thermique se cristallise souvent autour du prix d&apos;achat. &quot;C&apos;est trop cher&quot;, entend-on frequemment. Mais ce raisonnement est incomplet et parfois trompeur. Le prix d&apos;achat ne represente qu&apos;une fraction du cout total de possession (TCO — Total Cost of Ownership), qui englobe l&apos;ensemble des depenses sur toute la duree de vie du vehicule : acquisition, energie, entretien, assurance, decote et meme les eventuels avantages fiscaux. Notre comparateur ci-dessus vous permet de visualiser ces couts en detail, mais ce guide approfondi va demystifier chaque poste de depense et combattre les idees recues avec des donnees concretes.
          </p>

          <h2>Mythe n°1 : &quot;L&apos;electrique coute beaucoup plus cher a l&apos;achat&quot;</h2>
          <p>
            <strong>Verdict : De moins en moins vrai.</strong> En 2020, l&apos;ecart de prix entre un VE et son equivalent thermique etait en moyenne de 10 000 a 15 000 euros. En 2026, cet ecart s&apos;est considerablement reduit grace a la baisse du cout des batteries (qui est passe de 150 euros/kWh en 2020 a environ 100 euros/kWh en 2026), a l&apos;arrivee de modeles d&apos;entree de gamme abordables, et aux aides a l&apos;achat.
          </p>
          <p>
            Prenons des exemples concrets de paires comparables en 2026 :
          </p>
          <ul>
            <li><strong>Citroen C3 thermique (17 400 euros) vs Citroen e-C3 (23 300 euros) :</strong> ecart de 5 900 euros avant bonus. Apres bonus ecologique de 4 000 euros : ecart de seulement <strong>1 900 euros</strong>.</li>
            <li><strong>Renault Clio TCe (19 500 euros) vs Renault 5 E-Tech (25 000 euros) :</strong> ecart de 5 500 euros avant bonus. Apres bonus : <strong>1 500 euros d&apos;ecart</strong>.</li>
            <li><strong>Peugeot 308 PureTech (28 500 euros) vs Peugeot e-308 (37 000 euros) :</strong> ecart de 8 500 euros. Apres bonus : <strong>4 500 euros</strong>. L&apos;ecart reste significatif dans les segments superieurs.</li>
            <li><strong>Volkswagen Golf 1.5 TSI (30 000 euros) vs Volkswagen ID.3 (35 000 euros) :</strong> ecart de 5 000 euros. Apres bonus : <strong>1 000 euros</strong>.</li>
          </ul>
          <p>
            Le point de bascule est clair : dans les segments des citadines et compactes, l&apos;ecart de prix apres aides est devenu marginal. Il sera comble par les economies d&apos;usage des la premiere ou deuxieme annee.
          </p>

          <h2>Mythe n°2 : &quot;L&apos;electricite coute presque autant que l&apos;essence&quot;</h2>
          <p>
            <strong>Verdict : Completement faux.</strong> C&apos;est peut-etre le mythe le plus tenace et le plus facilement refutable par les chiffres. Comparons le cout energetique au kilometre en 2026 :
          </p>
          <ul>
            <li><strong>Voiture thermique essence :</strong> 7 L/100 km x 1,75 euro/L = <strong>12,25 centimes/km</strong></li>
            <li><strong>Voiture thermique diesel :</strong> 5,5 L/100 km x 1,65 euro/L = <strong>9,08 centimes/km</strong></li>
            <li><strong>Voiture electrique (recharge domicile HC) :</strong> 15 kWh/100 km x 0,21 euro/kWh = <strong>3,15 centimes/km</strong></li>
            <li><strong>Voiture electrique (mix domicile + bornes) :</strong> 15 kWh/100 km x 0,25 euro/kWh = <strong>3,75 centimes/km</strong></li>
            <li><strong>Voiture electrique (100 % bornes publiques) :</strong> 15 kWh/100 km x 0,40 euro/kWh = <strong>6,00 centimes/km</strong></li>
          </ul>
          <p>
            Meme dans le pire scenario (recharge exclusive sur bornes publiques), l&apos;electrique reste <strong>deux fois moins cher</strong> que l&apos;essence au kilometre. Et dans le meilleur cas (recharge a domicile en heures creuses), c&apos;est <strong>quatre fois moins cher</strong>.
          </p>
          <p>
            Sur 15 000 km/an, cela represente une economie de <strong>1 200 a 1 400 euros par an</strong> par rapport a l&apos;essence. Sur 5 ans, c&apos;est 6 000 a 7 000 euros d&apos;economie rien que sur l&apos;energie. De quoi largement compenser le surplix d&apos;achat initial.
          </p>

          <h2>Mythe n°3 : &quot;L&apos;entretien d&apos;un VE coute aussi cher qu&apos;un thermique&quot;</h2>
          <p>
            <strong>Verdict : Totalement faux.</strong> Le moteur electrique est un concentre de simplicite mecanique : il comporte environ 20 pieces mobiles, contre plus de 2 000 pour un moteur thermique. Pas de vidange d&apos;huile, pas de filtre a huile, pas de courroie de distribution, pas de bougies d&apos;allumage, pas d&apos;embrayage, pas de pot d&apos;echappement, pas de turbo, pas de vanne EGR. La boite de vitesses est absente ou reduite a un simple reducteur mono-rapport.
          </p>
          <p>
            Voici une comparaison detaillee des couts d&apos;entretien annuels moyens constates en France en 2026 :
          </p>
          <ul>
            <li><strong>Voiture essence :</strong> 600 a 900 euros/an (vidange, filtres, courroie, bougies, freins, echappement)</li>
            <li><strong>Voiture diesel :</strong> 700 a 1 100 euros/an (idem + AdBlue, filtre a particules, injecteurs)</li>
            <li><strong>Voiture electrique :</strong> 200 a 350 euros/an (pneus, freins, liquide de refroidissement, verification batterie)</li>
          </ul>
          <p>
            Les freins d&apos;un vehicule electrique s&apos;usent beaucoup moins vite grace au <strong>freinage regeneratif</strong> : le moteur electrique ralentit le vehicule en recuperant l&apos;energie cinetique, sollicitant rarement les plaquettes de frein. De nombreux conducteurs de VE rapportent ne pas avoir change leurs plaquettes apres 100 000 km.
          </p>
          <p>
            <strong>Economie sur 5 ans :</strong> en moyenne 400 a 550 euros/an, soit <strong>2 000 a 2 750 euros sur 5 ans</strong>. C&apos;est un poste d&apos;economie souvent sous-estime qui contribue significativement a l&apos;avantage du TCO electrique.
          </p>

          <h2>Mythe n°4 : &quot;L&apos;assurance d&apos;un VE est plus chere&quot;</h2>
          <p>
            <strong>Verdict : Partiellement vrai, mais en evolution rapide.</strong> Historiquement, l&apos;assurance des vehicules electriques etait plus couteuse en raison du cout eleve de reparation des batteries en cas de sinistre. En 2026, la situation s&apos;est largement normalisee :
          </p>
          <ul>
            <li>De nombreux assureurs offrent des <strong>reductions de 5 a 15 %</strong> pour les vehicules electriques (Maif, MACIF, Matmut, Groupama).</li>
            <li>Le profil de risque des conducteurs de VE est statistiquement plus favorable : conduite plus calme, moins de sinistres corporels.</li>
            <li>Les couts de reparation des batteries ont baisse avec la generalisation des <strong>batteries modulaires</strong> qui permettent de remplacer un module endommage plutot que la batterie entiere.</li>
          </ul>
          <p>
            En moyenne en 2026, l&apos;assurance tous risques d&apos;un VE de segment B (type Renault 5 E-Tech) revient a environ <strong>600 a 750 euros/an</strong>, contre 650 a 800 euros pour un equivalent thermique. L&apos;ecart, quand il existe, est minime et tend a se resorber chaque annee.
          </p>

          <h2>Mythe n°5 : &quot;Les VE decotent trop vite, on perd tout a la revente&quot;</h2>
          <p>
            <strong>Verdict : En partie vrai, mais le marche se stabilise.</strong> C&apos;est le point le plus complexe du debat TCO. Les vehicules electriques ont effectivement connu une decote plus rapide que les thermiques entre 2022 et 2024, principalement a cause de la baisse des prix du neuf (effet Tesla) et de l&apos;evolution rapide de la technologie (un VE de 2022 offre moins d&apos;autonomie qu&apos;un modele 2025 au meme prix).
          </p>
          <p>
            En 2026, la decote moyenne d&apos;un VE sur 4 ans est estimee a <strong>45 a 50 %</strong>, contre 35 a 40 % pour un thermique equivalent. Concretement :
          </p>
          <ul>
            <li>Un VE achete 30 000 euros vaudra environ 15 000 a 16 500 euros apres 4 ans</li>
            <li>Un thermique achete 25 000 euros vaudra environ 15 000 a 16 250 euros apres 4 ans</li>
          </ul>
          <p>
            Cependant, plusieurs facteurs pourraient ralentir la decote des VE dans les annees a venir : la stabilisation des prix du neuf, l&apos;interdiction progressive des vehicules thermiques dans certaines ZFE (zones a faibles emissions), et l&apos;augmentation de la demande en VE d&apos;occasion portee par les acheteurs qui ne peuvent pas acceder au neuf.
          </p>

          <h2>Mythe n°6 : &quot;La batterie est a remplacer apres quelques annees&quot;</h2>
          <p>
            <strong>Verdict : Faux.</strong> Les batteries modernes des VE sont garanties <strong>8 ans ou 160 000 km</strong> (voire 10 ans pour certains constructeurs comme Kia et Hyundai) avec un seuil minimal de 70 % de la capacite d&apos;origine. Les donnees de terrain montrent que la degradation reelle est bien inferieure aux craintes :
          </p>
          <ul>
            <li>Apres 100 000 km, la capacite residuelle est typiquement de 90 a 95 %.</li>
            <li>Apres 200 000 km, elle se situe entre 82 et 90 %.</li>
            <li>Les batteries LFP (lithium-fer-phosphate), utilisees par BYD et Tesla (gamme Standard), supportent plus de 3 000 cycles de charge complets, soit l&apos;equivalent de plus de 1 000 000 km theoriques.</li>
          </ul>
          <p>
            Le remplacement d&apos;une batterie est un evenement extremement rare qui ne survient pratiquement jamais pendant la duree de possession normale d&apos;un vehicule (5 a 8 ans). Ce cout hypothetique ne doit donc pas etre integre dans le calcul du TCO standard.
          </p>

          <h2>L&apos;impact environnemental : au-dela du TCO financier</h2>
          <p>
            Si le TCO financier est un argument rationnel et mesurable, l&apos;impact environnemental merite egalement d&apos;etre mentionne dans cette comparaison. Sur l&apos;ensemble de son cycle de vie (fabrication, utilisation, recyclage), un vehicule electrique emet en France environ <strong>2 a 3 fois moins de CO2</strong> qu&apos;un vehicule thermique equivalent. Cet avantage est particulierement marque en France grace au mix electrique fortement decarbone (plus de 90 % d&apos;electricite bas carbone grace au nucleaire et aux renouvelables).
          </p>
          <p>
            Concretement, sur 15 000 km/an en France :
          </p>
          <ul>
            <li><strong>Voiture essence :</strong> environ 2 600 kg de CO2/an (usage seul, hors fabrication)</li>
            <li><strong>Voiture diesel :</strong> environ 2 200 kg de CO2/an</li>
            <li><strong>Voiture electrique :</strong> environ 300 a 400 kg de CO2/an (usage seul, electricite francaise)</li>
          </ul>
          <p>
            La fabrication de la batterie genere un &quot;surplus&quot; d&apos;emissions initial (environ 5 a 8 tonnes de CO2 pour une batterie de 60 kWh), mais ce surplus est &quot;rembourse&quot; en 2 a 3 ans d&apos;utilisation en France. Au-dela, chaque kilometre parcouru en electrique genere un benefice climatique net par rapport au thermique.
          </p>

          <h2>Synthese du TCO sur 1 a 10 ans : quand l&apos;electrique devient rentable</h2>
          <p>
            En combinant tous les postes de depenses, voici le moment ou le TCO de l&apos;electrique passe en dessous de celui du thermique, pour un vehicule de segment B (type Renault 5 vs Renault Clio) avec 15 000 km/an :
          </p>
          <ul>
            <li><strong>Annee 1 :</strong> Le thermique reste moins cher en TCO cumule (ecart d&apos;achat encore preponderant).</li>
            <li><strong>Annee 2 :</strong> L&apos;ecart se resserre. Les economies d&apos;energie et d&apos;entretien commencent a compenser le surprix initial.</li>
            <li><strong>Annee 3 :</strong> <strong>Point d&apos;equilibre</strong> pour la plupart des configurations. Le TCO electrique rattrape le thermique.</li>
            <li><strong>Annee 4 :</strong> L&apos;electrique est moins cher de 1 500 a 2 500 euros en TCO cumule.</li>
            <li><strong>Annee 5 :</strong> Avantage electrique de 3 000 a 5 000 euros.</li>
            <li><strong>Annees 6 a 10 :</strong> L&apos;avantage s&apos;accentue chaque annee. A 10 ans, l&apos;economie totale peut depasser 10 000 euros.</li>
          </ul>
          <p>
            Ces chiffres varient selon le modele, le kilometrage, le mode de recharge et l&apos;evolution des prix de l&apos;energie. Notre comparateur ci-dessus vous permet de personnaliser tous ces parametres pour obtenir un resultat adapte a votre situation exacte.
          </p>

          <h2>Cas particuliers : quand le thermique reste competitif</h2>
          <p>
            Par honnetete intellectuelle, il faut reconnaitre que le VE n&apos;est pas la solution optimale dans tous les cas de figure. Le thermique peut rester plus pertinent :
          </p>
          <ul>
            <li><strong>Si vous parcourez moins de 5 000 km/an :</strong> les economies d&apos;usage ne compensent pas le surprix d&apos;achat avant 7-8 ans. Dans ce cas, un vehicule d&apos;occasion thermique reste le choix le plus economique.</li>
            <li><strong>Si vous n&apos;avez aucune solution de recharge a domicile ou au travail :</strong> la dependance aux bornes publiques reduit significativement l&apos;avantage economique et ajoute des contraintes d&apos;organisation.</li>
            <li><strong>Si vous achetez en occasion a budget tres serre (moins de 8 000 euros) :</strong> le marche de l&apos;occasion electrique dans cette gamme de prix reste limite (Renault Zoe ancienne generation, Nissan Leaf 24 kWh).</li>
            <li><strong>Si vous tractez regulierement des charges lourdes :</strong> bien que des VE comme le Tesla Model X ou le Mercedes EQE SUV puissent tracter jusqu&apos;a 2 500 kg, la perte d&apos;autonomie en tractant est considerable (40 a 50 %).</li>
          </ul>
          <p>
            Dans tous les autres cas, et particulierement pour un achat neuf avec recharge a domicile et un kilometrage annuel de 10 000 km ou plus, le vehicule electrique est desormais <strong>le choix le plus rationnel economiquement</strong> en France en 2026.
          </p>

          <h2>Methodologie de notre comparateur</h2>
          <p>
            Notre outil de comparaison TCO calcule les couts reels sur la duree que vous definissez, en integrant tous les postes de depense. Les valeurs par defaut sont calibrees sur les moyennes du marche francais 2026, mais chaque parametre est modifiable pour correspondre a votre situation :
          </p>
          <ul>
            <li><strong>Prix d&apos;achat :</strong> prix catalogue du vehicule neuf (hors options).</li>
            <li><strong>Bonus ecologique :</strong> 4 000 euros par defaut (bareme standard 2026). Modifiable selon votre eligibilite et vos revenus.</li>
            <li><strong>Consommation electrique :</strong> 15 kWh/100 km par defaut (moyenne du marche). Ajustez selon le vehicule considere.</li>
            <li><strong>Prix de l&apos;electricite :</strong> 0,20 euro/kWh par defaut (tarif mixte domicile HC + bornes publiques). Ajustez selon vos habitudes de recharge.</li>
            <li><strong>Prix du carburant :</strong> 1,75 euro/L par defaut (prix moyen de l&apos;essence en France en 2026).</li>
            <li><strong>Assurance :</strong> forfaits annuels bases sur les moyennes constatees pour chaque type de vehicule.</li>
            <li><strong>Entretien :</strong> couts annuels moyens incluant les revisions, les pneumatiques, et les reparations courantes.</li>
            <li><strong>Decote :</strong> pourcentage de perte de valeur sur la duree choisie, base sur les donnees du marche de l&apos;occasion.</li>
          </ul>
          <p>
            Nous vous encourageons a ajuster ces parametres avec vos propres donnees (devis d&apos;assurance, tarif electricite reel, consommation constatee) pour obtenir la comparaison la plus fidele possible a votre situation personnelle.
          </p>
        </div>

        <AuteurBio />
        <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
          <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>UFC-Que Choisir — Étude comparative du coût total de possession VE vs thermique, 2025</li>
            <li>ADEME — Analyse du cycle de vie comparée véhicules électriques et thermiques, 2024</li>
            <li>Argus — Données de décote et valeurs résiduelles par type de motorisation, 2026</li>
            <li>EDF — Tarifs d&apos;électricité résidentiels et professionnels, 2026</li>
            <li>Ministère de la Transition écologique — Prix moyens des carburants en France</li>
            <li>Données constructeurs — Consommation WLTP, coûts d&apos;entretien prévisionnels</li>
          </ul>
        </div>
      </article>
    </>
  );
}
