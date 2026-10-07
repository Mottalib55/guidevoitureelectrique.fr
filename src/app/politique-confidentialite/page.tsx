import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Confidentialité du Guide Voiture Électrique : sans cookie",
  description:
    "Le Guide Voiture Électrique ne dépose aucun cookie et ne garde rien de vos simulations de recharge ou d'aides ; seule la stabilité est suivie, sans cookie.",
  alternates: { canonical: "/politique-confidentialite/" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Politique de confidentialité", href: "/politique-confidentialite/" }]} />
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
          Politique de confidentialité
        </h1>
        <div className="prose">
          <h2>1. En bref</h2>
          <p>
            Le Guide Voiture Électrique compare des modèles, estime un coût de recharge, calcule
            les aides à l&apos;achat et met en regard électrique et thermique, sans vous demander
            qui vous êtes. Le site ne dépose aucun cookie et son éditeur, Radif Partners,
            n&apos;enregistre aucune donnée personnelle sur ses visiteurs. Cette page le détaille
            au regard du RGPD (règlement UE 2016/679) et de la loi Informatique et Libertés du
            6 janvier 1978.
          </p>
          <p>
            Contact :{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">
              contact@guidevoitureelectrique.fr
            </a>
          </p>

          <h2>2. Vos simulations restent dans votre navigateur</h2>
          <p>
            Kilométrage annuel, prix du kWh, puissance de la borne, revenu fiscal de référence
            pour les aides, apport et durée d&apos;un financement : ces valeurs sont calculées
            sur votre appareil, par le navigateur. Elles ne sont envoyées à aucun serveur, ne
            sont gardées ni en cookie ni en stockage local, et s&apos;effacent dès que la page
            est fermée ou rechargée.
          </p>

          <h2>3. Cookies</h2>
          <p>
            Aucun cookie n&apos;est déposé par le site, qu&apos;il soit technique, de mesure
            d&apos;audience ou publicitaire. Le site n&apos;affiche aucune publicité et
            n&apos;emploie aucun outil de statistiques marketing. C&apos;est pourquoi il n&apos;y
            a pas de bandeau cookies : rien n&apos;est à accepter.
          </p>

          <h2>4. Stabilité du site : Microsoft Clarity, sans cookie</h2>
          <p>
            Pour détecter un comparateur qui se bloque, une page lente ou un bouton qui ne
            répond pas, le site utilise Microsoft Clarity en mode sans cookie (aucun
            <code> _clck</code>, <code>_clsk</code>, <code>MUID</code> ni <code>CLID</code>).
            Clarity reçoit uniquement des signaux techniques anonymes : erreurs, temps de
            chargement, clics restés sans effet, défilement, taille d&apos;écran. Chaque page vue
            a son propre identifiant éphémère ; les visites ne sont donc jamais reliées entre
            elles. Le contenu des pages et les valeurs saisies sont masqués par le code du site
            avant d&apos;être transmis.
          </p>
          <ul>
            <li><strong>Prestataire responsable</strong> : Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irlande.</li>
            <li><strong>Finalité</strong> : vérifier que les pages et les outils fonctionnent et se chargent vite.</li>
            <li><strong>Base légale</strong> : intérêt légitime de l&apos;éditeur (article 6-1 f du RGPD).</li>
            <li><strong>Durée</strong> : 30 jours pour les enregistrements, 13 mois au plus pour les statistiques agrégées.</li>
            <li><strong>Opposition</strong> : bloquer le domaine clarity.ms (navigateur ou bloqueur de contenu) ou écrire à l&apos;adresse de contact ; tous les outils restent utilisables.</li>
          </ul>

          <h2>5. Hébergeur</h2>
          <p>
            OVH SAS, 2 rue Kellermann, 59100 Roubaix, France. Ses serveurs tiennent des journaux
            techniques (adresse IP, page demandée, date) pour la sécurité ; l&apos;éditeur ne les
            consulte pas à des fins de suivi.
          </p>

          <h2>6. Messages envoyés à l&apos;éditeur</h2>
          <p>
            Si vous écrivez à l&apos;adresse de contact, votre e-mail sert seulement à vous
            répondre ; il est supprimé au plus tard trois ans après le dernier échange et
            n&apos;est communiqué à aucun tiers.
          </p>

          <h2>7. Vos droits</h2>
          <p>
            Accès, rectification, effacement, limitation, opposition (articles 15 à 21 du RGPD) :
            ces droits s&apos;exercent par e-mail à{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">
              contact@guidevoitureelectrique.fr
            </a>
            , avec une réponse sous un mois. Comme aucune donnée de navigation n&apos;est
            rattachée à votre personne, ils visent surtout les messages échangés. Vous pouvez
            aussi saisir la CNIL, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07,{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
              www.cnil.fr
            </a>
            .
          </p>

        </div>
      </article>
    </>
  );
}
