"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";
import { safeParseNumber } from "@/lib/parseNumericInput";

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
            <input type="text" inputMode="decimal" value={kmAn} onChange={(e) => setKmAn(safeParseNumber(e.target.value, kmAn))} step={1000} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Durée (années)</label>
            <input type="text" inputMode="decimal" value={duree} onChange={(e) => setDuree(safeParseNumber(e.target.value, duree))} min={1} max={10} style={inputStyle} />
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
              <div><label style={labelStyle}>Prix neuf</label><input type="text" inputMode="decimal" value={prixElec} onChange={(e) => setPrixElec(safeParseNumber(e.target.value, prixElec))} step={1000} style={inputStyle} /></div>
              <div><label style={labelStyle}>Bonus</label><input type="text" inputMode="decimal" value={bonusElec} onChange={(e) => setBonusElec(safeParseNumber(e.target.value, bonusElec))} step={500} style={inputStyle} /></div>
              <div><label style={labelStyle}>Conso (kWh/100)</label><input type="text" inputMode="decimal" value={consoElec} onChange={(e) => setConsoElec(safeParseNumber(e.target.value, consoElec))} step={0.5} style={inputStyle} /></div>
              <div><label style={labelStyle}>€/kWh</label><input type="text" inputMode="decimal" value={prixKwh} onChange={(e) => setPrixKwh(safeParseNumber(e.target.value, prixKwh))} step={0.01} style={inputStyle} /></div>
              <div><label style={labelStyle}>Assurance / an</label><input type="text" inputMode="decimal" value={assurElec} onChange={(e) => setAssurElec(safeParseNumber(e.target.value, assurElec))} step={50} style={inputStyle} /></div>
              <div><label style={labelStyle}>Entretien / an</label><input type="text" inputMode="decimal" value={entretienElec} onChange={(e) => setEntretienElec(safeParseNumber(e.target.value, entretienElec))} step={50} style={inputStyle} /></div>
              <div style={{ gridColumn: "1 / -1" }}><label style={labelStyle}>Décote sur {duree} ans (%)</label><input type="text" inputMode="decimal" value={decoteElec} onChange={(e) => setDecoteElec(safeParseNumber(e.target.value, decoteElec))} step={1} style={inputStyle} /></div>
            </div>
          </div>

          {/* Thermique */}
          <div style={{ border: "1.5px solid var(--line)", borderRadius: 18, padding: 20 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--muted)", marginBottom: 16 }}>
              Thermique
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div><label style={labelStyle}>Prix neuf</label><input type="text" inputMode="decimal" value={prixTherm} onChange={(e) => setPrixTherm(safeParseNumber(e.target.value, prixTherm))} step={1000} style={inputStyle} /></div>
              <div><label style={labelStyle}>—</label><input type="text" value="Pas de bonus" disabled style={{ ...inputStyle, color: "var(--faint)", background: "var(--wash)" }} /></div>
              <div><label style={labelStyle}>Conso (L/100)</label><input type="text" inputMode="decimal" value={consoTherm} onChange={(e) => setConsoTherm(safeParseNumber(e.target.value, consoTherm))} step={0.5} style={inputStyle} /></div>
              <div><label style={labelStyle}>€/litre</label><input type="text" inputMode="decimal" value={prixLitre} onChange={(e) => setPrixLitre(safeParseNumber(e.target.value, prixLitre))} step={0.05} style={inputStyle} /></div>
              <div><label style={labelStyle}>Assurance / an</label><input type="text" inputMode="decimal" value={assurTherm} onChange={(e) => setAssurTherm(safeParseNumber(e.target.value, assurTherm))} step={50} style={inputStyle} /></div>
              <div><label style={labelStyle}>Entretien / an</label><input type="text" inputMode="decimal" value={entretienTherm} onChange={(e) => setEntretienTherm(safeParseNumber(e.target.value, entretienTherm))} step={50} style={inputStyle} /></div>
              <div style={{ gridColumn: "1 / -1" }}><label style={labelStyle}>Décote sur {duree} ans (%)</label><input type="text" inputMode="decimal" value={decoteTherm} onChange={(e) => setDecoteTherm(safeParseNumber(e.target.value, decoteTherm))} step={1} style={inputStyle} /></div>
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
                  <td>{(calc.elec.coutKm * 100).toFixed(1).replace('.', ',')} ct/km</td>
                  <td>{(calc.therm.coutKm * 100).toFixed(1).replace('.', ',')} ct/km</td>
                  <td>{((calc.therm.coutKm - calc.elec.coutKm) * 100).toFixed(1).replace('.', ',')} ct/km</td>
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
          <h2>Voiture électrique vs thermique : le grand duel du coût total de possession en 2026</h2>
          <p>
            Le débat entre voiture électrique et voiture thermique se cristallise souvent autour du prix d&apos;achat. &quot;C&apos;est trop cher&quot;, entend-on fréquemment. Mais ce raisonnement est incomplet et parfois trompeur. Le prix d&apos;achat ne représente qu&apos;une fraction du coût total de possession (TCO, Total Cost of Ownership), qui englobe l&apos;ensemble des dépenses sur toute la durée de vie du véhicule : acquisition, énergie, entretien, assurance, décote et même les éventuels avantages fiscaux. Notre comparateur ci-dessus vous permet de visualiser ces coûts en détail, mais ce guide approfondi va démystifier chaque poste de dépense et combattre les idées reçues avec des données concrètes.
          </p>

          <h2>Mythe n°1 : &quot;L&apos;électrique coute beaucoup plus cher a l&apos;achat&quot;</h2>
          <p>
            <strong>Verdict : De moins en moins vrai.</strong> En 2020, l&apos;écart de prix entre un VE et son équivalent thermique était en moyenne de 10 000 a 15 000 euros. En 2026, cet écart s&apos;est considérablement réduit grâce a la baisse du coût des batteries (qui est passé de 150 euros/kWh en 2020 a environ 100 euros/kWh en 2026), a l&apos;arrivée de modèles d&apos;entrée de gamme abordables, et aux aides a l&apos;achat.
          </p>
          <p>
            Prenons des exemples concrets de paires comparables en 2026 :
          </p>
          <ul>
            <li><strong>Citroen C3 thermique (17 400 euros) vs Citroen e-C3 (23 300 euros) :</strong> écart de 5 900 euros avant bonus. Après bonus écologique de 4 000 euros : écart de seulement <strong>1 900 euros</strong>.</li>
            <li><strong>Renault Clio TCe (19 500 euros) vs Renault 5 E-Tech (25 000 euros) :</strong> écart de 5 500 euros avant bonus. Après bonus : <strong>1 500 euros d&apos;écart</strong>.</li>
            <li><strong>Peugeot 308 PureTech (28 500 euros) vs Peugeot e-308 (37 000 euros) :</strong> écart de 8 500 euros. Après bonus : <strong>4 500 euros</strong>. L&apos;écart reste significatif dans les segments supérieurs.</li>
            <li><strong>Volkswagen Golf 1.5 TSI (30 000 euros) vs Volkswagen ID.3 (35 000 euros) :</strong> écart de 5 000 euros. Après bonus : <strong>1 000 euros</strong>.</li>
          </ul>
          <p>
            Le point de bascule est clair : dans les segments des citadines et compactes, l&apos;écart de prix après aides est devenu marginal. Il sera comblé par les économies d&apos;usage des la première ou deuxième année.
          </p>

          <h2>Mythe n°2 : &quot;L&apos;électricité coute presque autant que l&apos;essence&quot;</h2>
          <p>
            <strong>Verdict : Complètement faux.</strong> C&apos;est peut-être le mythe le plus tenace et le plus facilement réfutable par les chiffres. Comparons le coût énergétique au kilomètre en 2026 :
          </p>
          <ul>
            <li><strong>Voiture thermique essence :</strong> 7 L/100 km x 1,75 euro/L = <strong>12,25 centimes/km</strong></li>
            <li><strong>Voiture thermique diesel :</strong> 5,5 L/100 km x 1,65 euro/L = <strong>9,08 centimes/km</strong></li>
            <li><strong>Voiture électrique (recharge domicile HC) :</strong> 15 kWh/100 km x 0,21 euro/kWh = <strong>3,15 centimes/km</strong></li>
            <li><strong>Voiture électrique (mix domicile + bornes) :</strong> 15 kWh/100 km x 0,25 euro/kWh = <strong>3,75 centimes/km</strong></li>
            <li><strong>Voiture électrique (100 % bornes publiques) :</strong> 15 kWh/100 km x 0,40 euro/kWh = <strong>6,00 centimes/km</strong></li>
          </ul>
          <p>
            Même dans le pire scénario (recharge exclusive sur bornes publiques), l&apos;électrique reste <strong>deux fois moins cher</strong> que l&apos;essence au kilomètre. Et dans le meilleur cas (recharge a domicile en heures creuses), c&apos;est <strong>quatre fois moins cher</strong>.
          </p>
          <p>
            Sur 15 000 km/an, cela représente une économie de <strong>1 200 a 1 400 euros par an</strong> par rapport a l&apos;essence. Sur 5 ans, c&apos;est 6 000 a 7 000 euros d&apos;économie rien que sur l&apos;énergie. De quoi largement compenser le surplix d&apos;achat initial.
          </p>

          <h2>Mythe n°3 : &quot;L&apos;entretien d&apos;un VE coute aussi cher qu&apos;un thermique&quot;</h2>
          <p>
            <strong>Verdict : Totalement faux.</strong> Le moteur électrique est un concentré de simplicité mécanique : il comporte environ 20 pièces mobiles, contre plus de 2 000 pour un moteur thermique. Pas de vidange d&apos;huile, pas de filtre a huile, pas de courroie de distribution, pas de bougies d&apos;allumage, pas d&apos;embrayage, pas de pot d&apos;échappement, pas de turbo, pas de vanne EGR. La boite de vitesses est absente ou réduite a un simple reducteur mono-rapport.
          </p>
          <p>
            Voici une comparaison détaillée des coûts d&apos;entretien annuels moyens constatés en France en 2026 :
          </p>
          <ul>
            <li><strong>Voiture essence :</strong> 600 a 900 euros/an (vidange, filtres, courroie, bougies, freins, échappement)</li>
            <li><strong>Voiture diesel :</strong> 700 a 1 100 euros/an (idem + AdBlue, filtre a particules, injecteurs)</li>
            <li><strong>Voiture électrique :</strong> 200 a 350 euros/an (pneus, freins, liquide de refroidissement, vérification batterie)</li>
          </ul>
          <p>
            Les freins d&apos;un véhicule électrique s&apos;usent beaucoup moins vite grâce au <strong>freinage régénératif</strong> : le moteur électrique ralentit le véhicule en récupérant l&apos;énergie cinétique, sollicitant rarement les plaquettes de frein. De nombreux conducteurs de VE rapportent ne pas avoir changé leurs plaquettes après 100 000 km.
          </p>
          <p>
            <strong>Économie sur 5 ans :</strong> en moyenne 400 a 550 euros/an, soit <strong>2 000 a 2 750 euros sur 5 ans</strong>. C&apos;est un poste d&apos;économie souvent sous-estimé qui contribue significativement a l&apos;avantage du TCO électrique.
          </p>

          <h2>Mythe n°4 : &quot;L&apos;assurance d&apos;un VE est plus chère&quot;</h2>
          <p>
            <strong>Verdict : Partiellement vrai, mais en évolution rapide.</strong> Historiquement, l&apos;assurance des véhicules électriques était plus coûteuse en raison du coût élevé de réparation des batteries en cas de sinistre. En 2026, la situation s&apos;est largement normalisée :
          </p>
          <ul>
            <li>De nombreux assureurs offrent des <strong>réductions de 5 a 15 %</strong> pour les véhicules électriques (Maif, MACIF, Matmut, Groupama).</li>
            <li>Le profil de risque des conducteurs de VE est statistiquement plus favorable : conduite plus calme, moins de sinistres corporels.</li>
            <li>Les coûts de réparation des batteries ont baissé avec la généralisation des <strong>batteries modulaires</strong> qui permettent de remplacer un module endommagé plutôt que la batterie entière.</li>
          </ul>
          <p>
            En moyenne en 2026, l&apos;assurance tous risques d&apos;un VE de segment B (type Renault 5 E-Tech) revient a environ <strong>600 a 750 euros/an</strong>, contre 650 a 800 euros pour un équivalent thermique. L&apos;écart, quand il existe, est minime et tend a se résorber chaque année.
          </p>

          <h2>Mythe n°5 : &quot;Les VE decotent trop vite, on perd tout a la revente&quot;</h2>
          <p>
            <strong>Verdict : En partie vrai, mais le marché se stabilise.</strong> C&apos;est le point le plus complexe du débat TCO. Les véhicules électriques ont effectivement connu une décote plus rapide que les thermiques entre 2022 et 2024, principalement a cause de la baisse des prix du neuf (effet Tesla) et de l&apos;évolution rapide de la technologie (un VE de 2022 offre moins d&apos;autonomie qu&apos;un modèle 2025 au même prix).
          </p>
          <p>
            En 2026, la décote moyenne d&apos;un VE sur 4 ans est estimée a <strong>45 a 50 %</strong>, contre 35 a 40 % pour un thermique équivalent. Concrètement :
          </p>
          <ul>
            <li>Un VE acheté 30 000 euros vaudra environ 15 000 a 16 500 euros après 4 ans</li>
            <li>Un thermique acheté 25 000 euros vaudra environ 15 000 a 16 250 euros après 4 ans</li>
          </ul>
          <p>
            Cependant, plusieurs facteurs pourraient ralentir la décote des VE dans les années a venir : la stabilisation des prix du neuf, l&apos;interdiction progressive des véhicules thermiques dans certaines ZFE (zones a faibles émissions), et l&apos;augmentation de la demande en VE d&apos;occasion portée par les acheteurs qui ne peuvent pas accéder au neuf.
          </p>

          <h2>Mythe n°6 : &quot;La batterie est a remplacer après quelques années&quot;</h2>
          <p>
            <strong>Verdict : Faux.</strong> Les batteries modernes des VE sont garanties <strong>8 ans ou 160 000 km</strong> (voire 10 ans pour certains constructeurs comme Kia et Hyundai) avec un seuil minimal de 70 % de la capacité d&apos;origine. Les données de terrain montrent que la dégradation réelle est bien inférieure aux craintes :
          </p>
          <ul>
            <li>Après 100 000 km, la capacité résiduelle est typiquement de 90 a 95 %.</li>
            <li>Après 200 000 km, elle se situe entre 82 et 90 %.</li>
            <li>Les batteries LFP (lithium-fer-phosphate), utilisées par BYD et Tesla (gamme Standard), supportent plus de 3 000 cycles de charge complets, soit l&apos;équivalent de plus de 1 000 000 km théoriques.</li>
          </ul>
          <p>
            Le remplacement d&apos;une batterie est un événement extrêmement rare qui ne survient pratiquement jamais pendant la durée de possession normale d&apos;un véhicule (5 a 8 ans). Ce coût hypothétique ne doit donc pas être intégré dans le calcul du TCO standard.
          </p>

          <h2>L&apos;impact environnemental : au-dela du TCO financier</h2>
          <p>
            Si le TCO financier est un argument rationnel et mesurable, l&apos;impact environnemental mérite également d&apos;être mentionné dans cette comparaison. Sur l&apos;ensemble de son cycle de vie (fabrication, utilisation, recyclage), un véhicule électrique émet en France environ <strong>2 a 3 fois moins de CO2</strong> qu&apos;un véhicule thermique équivalent. Cet avantage est particulièrement marqué en France grâce au mix électrique fortement décarboné (plus de 90 % d&apos;électricité bas carbone grâce au nucléaire et aux renouvelables).
          </p>
          <p>
            Concrètement, sur 15 000 km/an en France :
          </p>
          <ul>
            <li><strong>Voiture essence :</strong> environ 2 600 kg de CO2/an (usage seul, hors fabrication)</li>
            <li><strong>Voiture diesel :</strong> environ 2 200 kg de CO2/an</li>
            <li><strong>Voiture électrique :</strong> environ 300 a 400 kg de CO2/an (usage seul, électricité française)</li>
          </ul>
          <p>
            La fabrication de la batterie génère un &quot;surplus&quot; d&apos;émissions initial (environ 5 a 8 tonnes de CO2 pour une batterie de 60 kWh), mais ce surplus est &quot;rembourse&quot; en 2 a 3 ans d&apos;utilisation en France. Au-dela, chaque kilomètre parcouru en électrique génère un benefice climatique net par rapport au thermique.
          </p>

          <h2>Synthèse du TCO sur 1 a 10 ans : quand l&apos;électrique devient rentable</h2>
          <p>
            En combinant tous les postes de dépenses, voici le moment ou le TCO de l&apos;électrique passé en dessous de celui du thermique, pour un véhicule de segment B (type Renault 5 vs Renault Clio) avec 15 000 km/an :
          </p>
          <ul>
            <li><strong>Annee 1 :</strong> Le thermique reste moins cher en TCO cumulé (écart d&apos;achat encore prépondérant).</li>
            <li><strong>Annee 2 :</strong> L&apos;écart se resserre. Les économies d&apos;énergie et d&apos;entretien commencent a compenser le surprix initial.</li>
            <li><strong>Annee 3 :</strong> <strong>Point d&apos;équilibré</strong> pour la plupart des configurations. Le TCO électrique rattrape le thermique.</li>
            <li><strong>Annee 4 :</strong> L&apos;électrique est moins cher de 1 500 a 2 500 euros en TCO cumulé.</li>
            <li><strong>Annee 5 :</strong> Avantage électrique de 3 000 a 5 000 euros.</li>
            <li><strong>Annees 6 a 10 :</strong> L&apos;avantage s&apos;accentue chaque année. A 10 ans, l&apos;économie totale peut dépasser 10 000 euros.</li>
          </ul>
          <p>
            Ces chiffres varient selon le modèle, le kilométrage, le mode de recharge et l&apos;évolution des prix de l&apos;énergie. Notre comparateur ci-dessus vous permet de personnaliser tous ces paramètres pour obtenir un résultat adapté a votre situation exacte.
          </p>

          <h2>Cas particuliers : quand le thermique reste compétitif</h2>
          <p>
            Par honnêteté intellectuelle, il faut reconnaître que le VE n&apos;est pas la solution optimale dans tous les cas de figure. Le thermique peut rester plus pertinent :
          </p>
          <ul>
            <li><strong>Si vous parcourez moins de 5 000 km/an :</strong> les économies d&apos;usage ne compensent pas le surprix d&apos;achat avant 7-8 ans. Dans ce cas, un véhicule d&apos;occasion thermique reste le choix le plus économique.</li>
            <li><strong>Si vous n&apos;avez aucune solution de recharge a domicile ou au travail :</strong> la dépendance aux bornes publiques réduit significativement l&apos;avantage économique et ajoute des contraintes d&apos;organisation.</li>
            <li><strong>Si vous achetez en occasion a budget très serré (moins de 8 000 euros) :</strong> le marché de l&apos;occasion électrique dans cette gamme de prix reste limité (Renault Zoe ancienne génération, Nissan Leaf 24 kWh).</li>
            <li><strong>Si vous tractez régulièrement des charges lourdes :</strong> bien que des VE comme le Tesla Model X ou le Mercedes EQE SUV puissent tracter jusqu&apos;a 2 500 kg, la perte d&apos;autonomie en tractant est considérable (40 a 50 %).</li>
          </ul>
          <p>
            Dans tous les autres cas, et particulièrement pour un achat neuf avec recharge a domicile et un kilométrage annuel de 10 000 km ou plus, le véhicule électrique est désormais <strong>le choix le plus rationnel economiquement</strong> en France en 2026.
          </p>

          <h2>Méthodologie de notre comparateur</h2>
          <p>
            Notre outil de comparaison TCO calcule les coûts réels sur la durée que vous définissez, en intégrant tous les postes de dépense. Les valeurs par défaut sont calibrées sur les moyennes du marché français 2026, mais chaque paramètre est modifiable pour correspondre a votre situation :
          </p>
          <ul>
            <li><strong>Prix d&apos;achat :</strong> prix catalogue du véhicule neuf (hors options).</li>
            <li><strong>Bonus écologique :</strong> 4 000 euros par défaut (barème standard 2026). Modifiable selon votre éligibilité et vos revenus.</li>
            <li><strong>Consommation électrique :</strong> 15 kWh/100 km par défaut (moyenne du marché). Ajustez selon le véhicule considéré.</li>
            <li><strong>Prix de l&apos;électricité :</strong> 0,20 euro/kWh par défaut (tarif mixte domicile HC + bornes publiques). Ajustez selon vos habitudes de recharge.</li>
            <li><strong>Prix du carburant :</strong> 1,75 euro/L par défaut (prix moyen de l&apos;essence en France en 2026).</li>
            <li><strong>Assurance :</strong> forfaits annuels basés sur les moyennes constatées pour chaque type de véhicule.</li>
            <li><strong>Entretien :</strong> coûts annuels moyens incluant les révisions, les pneumatiques, et les réparations courantes.</li>
            <li><strong>Decote :</strong> pourcentage de perte de valeur sur la durée choisie, base sur les données du marché de l&apos;occasion.</li>
          </ul>
          <p>
            Nous vous encourageons a ajuster ces paramètres avec vos propres données (devis d&apos;assurance, tarif électricité réel, consommation constatée) pour obtenir la comparaison la plus fidèle possible a votre situation personnelle.
          </p>
        </div>

        <AuteurBio />
        <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
          <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>UFC-Que Choisir : Étude comparative du coût total de possession VE vs thermique, 2025</li>
            <li>ADEME : Analyse du cycle de vie comparée véhicules électriques et thermiques, 2024</li>
            <li>Argus : Données de décote et valeurs résiduelles par type de motorisation, 2026</li>
            <li>EDF : Tarifs d&apos;électricité résidentiels et professionnels, 2026</li>
            <li>Ministère de la Transition écologique : Prix moyens des carburants en France</li>
            <li>Données constructeurs : Consommation WLTP, coûts d&apos;entretien prévisionnels</li>
          </ul>
        </div>
      </article>
    </>
  );
}