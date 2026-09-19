import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Méthodologie du Guide Voiture Électrique : données et sources",
  description:
    "D'où viennent les prix, autonomies et aides affichés sur guidevoitureelectrique.fr, comment nous calculons l'autonomie réelle et le coût de recharge, et nos limites.",
  alternates: { canonical: "/methodologie/" },
};

export default function MethodologiePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Méthodologie", href: "/methodologie/" }]} />
      <article className="section section-narrow" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <LastUpdated />
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 32,
            letterSpacing: "-0.02em",
            marginBottom: 32,
          }}
        >
          Méthodologie : d&apos;où viennent nos chiffres
        </h1>
        <div className="prose">
          <p>
            Cette page explique d&apos;où viennent les prix, autonomies et montants d&apos;aides
            affichés sur le site, comment nos outils les calculent et ce qu&apos;ils ne couvrent
            pas. Elle sert de charte éditoriale au site.
          </p>

          <h2>Fiches modèles</h2>
          <ul>
            <li><strong>Prix</strong> : tarifs publics des constructeurs en France, hors options et hors remises.</li>
            <li><strong>Autonomie WLTP, batterie, puissance de recharge</strong> : fiches techniques officielles des constructeurs.</li>
            <li><strong>Autonomie réelle</strong> : estimation à partir de l&apos;autonomie WLTP, corrigée selon l&apos;usage (ville, autoroute, hiver) ; elle varie avec la température, la vitesse et le style de conduite.</li>
          </ul>

          <h2>Aides à l&apos;achat</h2>
          <p>
            Les montants et conditions du bonus écologique, de la prime à la conversion et des aides
            locales suivent les textes officiels publiés sur{" "}
            <a href="https://www.service-public.fr" rel="noopener">Service-Public.fr</a>. Leur
            attribution dépend de l&apos;administration : nos simulateurs donnent une estimation.
          </p>

          <h2>Recharge</h2>
          <p>
            Le simulateur de coût de recharge multiplie la consommation du modèle par le prix du kWh
            (tarif réglementé à domicile, prix affichés par les réseaux de bornes). La carte des bornes
            s&apos;appuie sur les données ouvertes des infrastructures de recharge.
          </p>

          <h2>Mises à jour</h2>
          <ul>
            <li>Les barèmes d&apos;aides sont revus à chaque changement réglementaire.</li>
            <li>Les prix et fiches techniques sont revus à chaque nouvelle version d&apos;un modèle.</li>
            <li>Chaque page affiche en haut et en bas la date de sa dernière modification réelle.</li>
          </ul>

          <h2>Limites</h2>
          <p>
            Les chiffres du site sont indicatifs et non contractuels. Le prix final dépend du
            concessionnaire, des options et des remises ; le montant des aides, de la décision de
            l&apos;administration. Vérifiez toujours auprès du vendeur avant d&apos;acheter.
          </p>

          <h2>Signaler une erreur</h2>
          <p>
            Un prix ou une autonomie vous semble faux ? Écrivez à{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">contact@guidevoitureelectrique.fr</a>{" "}
            en indiquant la page et la source. Nous corrigeons la page, dont la date de mise à jour
            change alors.
          </p>

          <h2>Indépendance</h2>
          <p>
            Les comparatifs appliquent les mêmes critères à tous les modèles : prix, autonomie,
            recharge, équipement. Voir aussi <Link href="/a-propos/">qui sommes-nous</Link>.
          </p>
        </div>
      </article>
    </>
  );
}
