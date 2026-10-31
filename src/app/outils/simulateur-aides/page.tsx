"use client";

import { useState, useMemo, useRef } from "react";
import FaqSection from "@/components/FaqSection";
import { faqParPage } from "@/data/faq-pages";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";
import { safeParseNumber } from "@/lib/parseNumericInput";
import BarreResultat from "@/components/BarreResultat";
import {
  COUP_DE_POUCE,
  LEASING_SOCIAL,
  PRIME_CONVERSION,
  CREDIT_IMPOT_BORNE,
  categorieCoupDePouce,
  decileCoupDePouce,
  aideLeasingSocial,
  eur,
  type CategorieMenage,
} from "@/data/aides-2026";

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

const LIBELLE_CATEGORIE: Record<CategorieMenage, string> = {
  precarite: "Ménage modeste en précarité énergétique",
  modeste: "Ménage modeste",
  autre: "Autre ménage",
};

export default function SimulateurAides() {
  // Les champs gardent le texte saisi : un champ vidé reste vide (on ne revient pas à la
  // valeur précédente, qui collait le dernier chiffre devant la nouvelle saisie).
  const [prixTxt, setPrixTxt] = useState("25000");
  const [rfrTxt, setRfrTxt] = useState("30000"); // revenu fiscal de référence
  const [partsTxt, setPartsTxt] = useState("1");
  const [eligible, setEligible] = useState(true); // score environnemental >= 60
  const [trajet, setTrajet] = useState(true); // condition de trajet du leasing social
  const [europe, setEurope] = useState(true); // véhicule et batterie produits en Europe
  const resultat = useRef<HTMLDivElement>(null);

  const prixVehicule = safeParseNumber(prixTxt, 0);
  const rfr = safeParseNumber(rfrTxt, 0);
  const nbParts = Math.max(1, safeParseNumber(partsTxt, 1));

  const calc = useMemo(() => {
    const rfrParPart = rfr / nbParts;
    const vehiculeOk = eligible && prixVehicule > 0 && prixVehicule <= COUP_DE_POUCE.prixMaxTTC;
    const coupDePouce = vehiculeOk;
    const categorie = categorieCoupDePouce(rfrParPart);
    const decile = decileCoupDePouce(rfrParPart);
    const leasingSocial =
      eligible && trajet && prixVehicule > 0 &&
      prixVehicule <= LEASING_SOCIAL.prixMaxTTC && rfrParPart <= LEASING_SOCIAL.rfrParPartMax;
    const aideLeasing = leasingSocial ? aideLeasingSocial(prixVehicule, europe) : 0;
    return { rfrParPart, coupDePouce, categorie, decile, leasingSocial, aideLeasing };
  }, [prixVehicule, rfr, nbParts, eligible, trajet, europe]);

  const inputStyle = {
    width: "100%",
    padding: "11px 13px",
    borderRadius: 12,
    border: "1.5px solid var(--line)",
    background: "var(--field)",
    color: "var(--ink)",
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "inherit",
  } as const;

  const labelStyle = {
    display: "block",
    fontSize: 12,
    fontWeight: 700,
    color: "var(--muted)",
    marginBottom: 6,
  } as const;

  const caseStyle = { display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontWeight: 600, fontSize: 14, color: "var(--ink)" } as const;
  const ligne = { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 } as const;
  const valeur = (ok: boolean) => ({ color: ok ? "var(--accent-deep)" : "var(--faint)", textAlign: "right" as const });

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Outils", href: "/outils/financement/" },
          { name: "Simulateur d'aides", href: "/outils/simulateur-aides/" },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "-0.02em", marginBottom: 8 }}>
            Simulateur d&apos;aides voiture électrique
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 640, lineHeight: 1.5 }}>
            Vérifiez à quelles aides vous avez droit en 2026 : prime « coup de pouce » CEE
            (qui remplace le bonus écologique) et leasing social.
          </p>
        </header>

        <div className="simu-2col" style={{ maxWidth: 920 }}>
          {/* Formulaire */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <label htmlFor="sa-prix" style={labelStyle}>Prix du véhicule (TTC)</label>
                <input id="sa-prix" type="text" inputMode="decimal" value={prixTxt} onChange={(e) => setPrixTxt(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="sa-rfr" style={labelStyle}>Revenu fiscal de référence</label>
                <input id="sa-rfr" type="text" inputMode="decimal" value={rfrTxt} onChange={(e) => setRfrTxt(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="sa-parts" style={labelStyle}>Nombre de parts fiscales</label>
                <input id="sa-parts" type="text" inputMode="decimal" value={partsTxt} onChange={(e) => setPartsTxt(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label htmlFor="sa-rfrpart" style={labelStyle}>RFR par part</label>
                <input id="sa-rfrpart" type="text" value={euro(calc.rfrParPart)} disabled style={{ ...inputStyle, background: "var(--wash)", color: "var(--faint)" }} />
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <label style={caseStyle}>
                <input type="checkbox" checked={eligible} onChange={(e) => setEligible(e.target.checked)} style={{ width: 18, height: 18 }} />
                Voiture neuve 100 % électrique, score environnemental de {COUP_DE_POUCE.scoreEnvironnementalMin} points ou plus
              </label>
            </div>
            <div style={{ marginTop: 12 }}>
              <label style={caseStyle}>
                <input type="checkbox" checked={trajet} onChange={(e) => setTrajet(e.target.checked)} style={{ width: 18, height: 18 }} />
                Plus de {LEASING_SOCIAL.distanceDomicileTravailMinKm} km de trajet domicile-travail, ou plus de {LEASING_SOCIAL.kmProAnMin.toLocaleString("fr-FR")} km par an pour le travail
              </label>
            </div>
            <div style={{ marginTop: 12 }}>
              <label style={caseStyle}>
                <input type="checkbox" checked={europe} onChange={(e) => setEurope(e.target.checked)} style={{ width: 18, height: 18 }} />
                Véhicule et batterie produits en Europe (EEE)
              </label>
            </div>
          </div>

          {/* Résultats */}
          <div ref={resultat} data-resultat aria-live="polite">
            <div className="encadre-verdict">
              <h2 style={{ fontSize: 20 }}>Vos aides en 2026</h2>
              <div className="encadre-verdict-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                <div className="encadre-verdict-item">
                  <div className="encadre-verdict-val">{calc.coupDePouce ? "Éligible" : "Non éligible"}</div>
                  <div className="encadre-verdict-lbl">Prime coup de pouce CEE</div>
                </div>
                <div className="encadre-verdict-item">
                  <div className="encadre-verdict-val">{calc.leasingSocial ? "Éligible" : "Non éligible"}</div>
                  <div className="encadre-verdict-lbl">Leasing social 2026</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20, padding: 20, border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--wash)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, marginBottom: 12 }}>
                Détail des aides
              </h3>
              <div style={{ display: "grid", gap: 12, fontSize: 14, fontWeight: 500 }}>
                <div style={ligne}>
                  <span>Catégorie de ménage (décile {calc.decile})</span>
                  <strong style={valeur(true)}>{LIBELLE_CATEGORIE[calc.categorie]}</strong>
                </div>
                <div style={ligne}>
                  <span>Prime coup de pouce CEE</span>
                  <strong style={valeur(calc.coupDePouce)}>
                    {calc.coupDePouce ? "Montant selon l'offre du fournisseur" : prixVehicule > COUP_DE_POUCE.prixMaxTTC ? `Prix au-dessus de ${euro(COUP_DE_POUCE.prixMaxTTC)}` : "Non éligible"}
                  </strong>
                </div>
                <div style={ligne}>
                  <span>Leasing social (loyer de {euro(LEASING_SOCIAL.loyerMaxMois)} par mois au plus)</span>
                  <strong style={valeur(calc.leasingSocial)}>
                    {calc.leasingSocial ? `Aide de l'État jusqu'à ${euro(calc.aideLeasing)}` : "Non éligible"}
                  </strong>
                </div>
                <div style={ligne}>
                  <span>Prime à la conversion</span>
                  <strong style={valeur(false)}>Supprimée le {PRIME_CONVERSION.supprimeeLe}</strong>
                </div>
                <div style={ligne}>
                  <span>Crédit d&apos;impôt borne de recharge</span>
                  <strong style={valeur(false)}>Fin pour les dépenses payées après le {CREDIT_IMPOT_BORNE.finDepenses}</strong>
                </div>
              </div>
            </div>

            <p style={{ fontSize: 12, color: "var(--faint)", marginTop: 12, lineHeight: 1.5 }}>
              Le montant de la prime coup de pouce n&apos;est pas fixé par la réglementation : il
              dépend de l&apos;entreprise signataire qui la verse et de votre catégorie de ménage.
              Comparez les offres avant de signer. Le leasing social exige aussi une voiture de moins
              de {LEASING_SOCIAL.masseMaxKg.toLocaleString("fr-FR")} kg et un contrat d&apos;au moins {LEASING_SOCIAL.dureeMinAns} ans ;
              l&apos;aide de l&apos;État est déduite du premier loyer. Sources :{" "}
              <a href={COUP_DE_POUCE.source} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-deep)" }}>
                service-public.gouv.fr (prime coup de pouce)
              </a>{" "}et{" "}
              <a href={LEASING_SOCIAL.source} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-deep)" }}>
                service-public.gouv.fr (leasing social)
              </a>.
            </p>
            <BarreResultat cible={resultat} label="Prime coup de pouce CEE" valeur={calc.coupDePouce ? "Éligible" : "Non éligible"} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
          <Link href="/outils/financement/" className="btn-primary">
            Calculer mon financement
          </Link>
          <Link href="/acheter/aides-et-bonus/" className="btn-secondary">
            Guide complet des aides
          </Link>
        </div>

        {/* Contenu redactionnel */}
        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Les aides pour une voiture électrique en 2026 : ce qui existe encore</h2>
          <p>
            Le paysage des aides a beaucoup changé en deux ans. Le bonus écologique versé par l&apos;État a disparu le 30 juin 2025 : depuis le {COUP_DE_POUCE.depuis}, il est remplacé par la <strong>prime « coup de pouce Véhicules particuliers électriques »</strong>, financée par les certificats d&apos;économies d&apos;énergie (CEE). La prime à la conversion, elle, a été supprimée le {PRIME_CONVERSION.supprimeeLe} ({PRIME_CONVERSION.decret}). Le leasing social a rouvert le {LEASING_SOCIAL.ouverture} avec de nouvelles règles, et le crédit d&apos;impôt pour l&apos;installation d&apos;une borne ne concerne plus que les dépenses payées jusqu&apos;au {CREDIT_IMPOT_BORNE.finDepenses}. Le simulateur ci-dessus applique ces règles ; ce guide les détaille.
          </p>

          <h2>Étape 1 : la prime coup de pouce CEE, qui remplace le bonus</h2>
          <p>
            La prime s&apos;adresse aux particuliers domiciliés en France qui achètent ou louent une voiture particulière neuve 100 % électrique. Le véhicule doit coûter au plus <strong>{eur(COUP_DE_POUCE.prixMaxTTC)} TTC</strong> (batterie comprise), peser moins de {COUP_DE_POUCE.masseMaxKg.toLocaleString("fr-FR")} kg en ordre de marche et obtenir un <strong>score environnemental d&apos;au moins {COUP_DE_POUCE.scoreEnvironnementalMin} points</strong>. En cas d&apos;achat, il faut le garder au moins {COUP_DE_POUCE.dureeConservationAns} ans ; en location, le contrat doit durer au moins {COUP_DE_POUCE.dureeConservationAns} ans.
          </p>
          <h3>Un montant qui n&apos;est pas fixé par l&apos;État</h3>
          <p>
            Contrairement à l&apos;ancien bonus, la prime n&apos;a pas de montant réglementaire. L&apos;achat génère un volume de certificats d&apos;économies d&apos;énergie dont la valeur dépend du marché et de la politique commerciale de l&apos;entreprise qui verse l&apos;aide. Ce volume est multiplié par une bonification plus forte pour les ménages modestes, pour les « gros rouleurs » des déciles 6 à 8 et pour les voitures produites en Europe. Deux offres peuvent donc différer sensiblement pour la même voiture : comparez les propositions des entreprises signataires de la charte, dont la liste est publiée par le ministère de la Transition écologique.
          </p>
          <h3>Votre catégorie de ménage</h3>
          <p>
            La bonification dépend du revenu fiscal de référence par part. Jusqu&apos;à {eur(COUP_DE_POUCE.plafondPrecarite)} par part (déciles 1 à 3), le ménage est considéré comme modeste en situation de précarité énergétique ; jusqu&apos;à {eur(COUP_DE_POUCE.plafondModeste)} (déciles 4 et 5), comme modeste ; au-delà, il relève des autres ménages. Pour un devis accepté en 2026, ce sont les revenus de 2024 qui comptent, ou ceux de 2025 s&apos;ils sont disponibles. Le simulateur indique votre décile et votre catégorie.
          </p>
          <h3>Comment l&apos;obtenir</h3>
          <p>
            Adressez-vous à une entreprise signataire, ou demandez au concessionnaire s&apos;il en est partenaire, avant de signer le bon de commande : la prime doit être engagée avant l&apos;achat. Le dossier comprend une pièce d&apos;identité, l&apos;avis d&apos;imposition, le devis ou le bon de commande et une attestation sur l&apos;honneur. L&apos;achat ou la location doit être engagé au plus tard le {COUP_DE_POUCE.dateLimiteEngagement}.
          </p>

          <h2>Étape 2 : le leasing social 2026</h2>
          <p>
            Le leasing social permet de louer une voiture électrique neuve pour un loyer de <strong>{eur(LEASING_SOCIAL.loyerMaxMois)} par mois au plus</strong>, hors assurance et options, sans apport. Chaque professionnel doit proposer au moins un modèle à {eur(LEASING_SOCIAL.loyerModeleMinMois)} par mois ou moins (hors outre-mer). Les contrats se signent depuis le {LEASING_SOCIAL.ouverture} et durent au moins {LEASING_SOCIAL.dureeMinAns} ans, avec au minimum {LEASING_SOCIAL.kmInclusAnMin.toLocaleString("fr-FR")} km par an inclus.
          </p>
          <h3>Conditions d&apos;éligibilité</h3>
          <ul>
            <li>Être majeur et domicilié en France, avec un revenu fiscal de référence par part d&apos;au plus <strong>{eur(LEASING_SOCIAL.rfrParPartMax)}</strong> (revenus de 2024 pour un premier loyer en 2026).</li>
            <li>Faire plus de {LEASING_SOCIAL.distanceDomicileTravailMinKm} km entre domicile et travail avec son véhicule personnel, ou plus de {LEASING_SOCIAL.kmProAnMin.toLocaleString("fr-FR")} km par an pour son activité professionnelle.</li>
            <li>Choisir une voiture neuve 100 % électrique de la liste officielle : score environnemental d&apos;au moins {COUP_DE_POUCE.scoreEnvironnementalMin} points, prix d&apos;au plus {eur(LEASING_SOCIAL.prixMaxTTC)} TTC hors options, moins de {LEASING_SOCIAL.masseMaxKg.toLocaleString("fr-FR")} kg.</li>
          </ul>
          <h3>L&apos;aide de l&apos;État</h3>
          <p>
            L&apos;aide vaut {Math.round(LEASING_SOCIAL.aideTaux * 100)} % du coût d&apos;achat hors options, dans la limite de {eur(LEASING_SOCIAL.aidePlafond)}, ou de {eur(LEASING_SOCIAL.aidePlafondEurope)} si la voiture et sa batterie sont produites en Europe ; {eur(LEASING_SOCIAL.primeMoteurEurope)} s&apos;ajoutent si le moteur l&apos;est aussi. Le professionnel l&apos;avance et la déduit du premier loyer, qui tombe à 0 €. On n&apos;en bénéficie qu&apos;une fois.
          </p>

          <h2>Étape 3 : les aides qui n&apos;existent plus</h2>
          <ul>
            <li><strong>Bonus écologique :</strong> remplacé par la prime coup de pouce depuis le {COUP_DE_POUCE.depuis}. Les montants fixes de 4 000 ou 7 000 € que l&apos;on lit encore ne s&apos;appliquent plus.</li>
            <li><strong>Prime à la conversion :</strong> supprimée le {PRIME_CONVERSION.supprimeeLe} pour l&apos;achat d&apos;une voiture. Mettre au rebut un ancien véhicule n&apos;ouvre plus d&apos;aide nationale ; seule subsiste la prime au rétrofit (transformation d&apos;un véhicule thermique en électrique).</li>
            <li><strong>Crédit d&apos;impôt borne de recharge :</strong> {Math.round(CREDIT_IMPOT_BORNE.taux * 100)} % des dépenses, au plus {eur(CREDIT_IMPOT_BORNE.plafond)} par système, pour une borne pilotable payée au plus tard le {CREDIT_IMPOT_BORNE.finDepenses}. Il est supprimé pour les dépenses payées depuis le 1er janvier 2026.</li>
          </ul>

          <h2>Étape 4 : les aides locales</h2>
          <p>
            Régions, départements et métropoles proposent parfois leurs propres aides, souvent réservées aux ménages modestes ou aux habitants d&apos;une zone à faibles émissions. Leurs montants et conditions changent fréquemment et certaines sont fermées faute de budget : consultez le site de votre région et de votre métropole au moment de l&apos;achat. Ces aides ne sont pas comptées par le simulateur.
          </p>

          <h2>Étape 5 : la borne de recharge à domicile</h2>
          <p>
            Le crédit d&apos;impôt ne couvre plus les dépenses payées en 2026. En copropriété, le programme ADVENIR finance une partie de certaines installations : vérifiez ses conditions en vigueur avant les travaux, auprès d&apos;un installateur qualifié IRVE.
          </p>

          <h2>Démarches : dans quel ordre ?</h2>
          <ul>
            <li>Vérifiez votre revenu fiscal de référence par part sur votre dernier avis d&apos;imposition et votre catégorie dans le simulateur.</li>
            <li>Vérifiez que le modèle figure sur la liste des voitures ayant un score environnemental suffisant (et sur celle du leasing social si vous visez cette formule).</li>
            <li>Pour un achat, comparez les offres de prime coup de pouce <strong>avant</strong> de signer le bon de commande.</li>
            <li>Pour le leasing social, adressez-vous à un professionnel de l&apos;automobile participant : il vérifie l&apos;éligibilité et monte le dossier.</li>
            <li>Conservez la facture, le contrat, l&apos;avis d&apos;imposition et la carte grise.</li>
          </ul>
        </div>

        <AuteurBio />
        <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
          <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>Service-Public.gouv.fr, fiche F39188 : prime « coup de pouce Véhicules particuliers électriques » (vérifiée le 9 octobre 2026)</li>
            <li>Service-Public.gouv.fr, fiche F39280 : location sociale de voitures électriques, leasing social 2026 (vérifiée le 31 juillet 2026)</li>
            <li>Economie.gouv.fr : « Qu&apos;est-ce que la prime à la conversion ? » ({PRIME_CONVERSION.decret})</li>
            <li>Service-Public.gouv.fr, fiche F35578 : crédit d&apos;impôt pour l&apos;installation d&apos;une borne de recharge (vérifiée le 15 avril 2026)</li>
          </ul>
        </div>
      </article>
      <FaqSection items={faqParPage["/outils/simulateur-aides/"]} />
    </>
  );
}