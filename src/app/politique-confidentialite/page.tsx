import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Confidentialité du Guide Voiture Électrique : Google Analytics",
  description:
    "Le Guide Voiture Électrique mesure son audience avec Google Analytics (cookies de 13 mois au plus, sans publicité) et ne garde rien de vos simulations de recharge ou d'aides.",
  alternates: { canonical: "/politique-confidentialite/" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Politique de confidentialité", href: "/politique-confidentialite/" }]} />
      <article className="section section-narrow" style={{ paddingTop: 24, paddingBottom: 80 }}>
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
            qui vous êtes. Le site mesure son audience avec Google Analytics, qui dépose des cookies, et son éditeur, Radif Partners, ne garde aucune de vos saisies. Cette page le détaille
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
            sur votre appareil, par le navigateur. Elles ne sont envoyées à aucun serveur, ne sont enregistrées nulle part, même sur votre appareil, et s&apos;effacent dès que la page
            est fermée ou rechargée.
          </p>

          <h2>3. Mesure d&apos;audience avec Google Analytics (cookies)</h2>
          <p>
            Le site utilise Google Analytics 4 pour compter ses visites et savoir quelles pages
            servent : pages vues, page de provenance, durée de la visite, type d&apos;appareil et
            de navigateur, pays et ville approximatifs. Google Analytics dépose pour cela deux
            cookies sur votre terminal : <code>_ga</code>, qui distingue les visiteurs par un
            identifiant aléatoire, et <code>_ga_7VRNV419X2</code>, qui garde l&apos;état de la visite.
            Leur durée de vie est réglée à 13 mois au plus (390 jours) et n&apos;est pas prolongée
            à chaque visite ; Google prévoit 2 ans par défaut.
          </p>
          <p>
            L&apos;adresse IP est anonymisée : Google Analytics 4 ne l&apos;enregistre ni ne la
            conserve, il s&apos;en sert seulement au moment de la collecte pour déduire un pays et
            une ville approximatifs. L&apos;adresse de page transmise est privée de ses paramètres.
            Le site n&apos;affiche pas de publicité : le stockage publicitaire, les données
            publicitaires, la personnalisation des annonces et les signaux Google sont désactivés,
            et les données de mesure ne sont partagées avec aucun annonceur.
          </p>
          <table>
            <thead><tr><th>Nom</th><th>Fournisseur</th><th>Finalité</th><th>Durée</th></tr></thead>
            <tbody>
              <tr><td><code>_ga</code></td><td>Google Analytics</td><td>Distinguer les visiteurs par un identifiant aléatoire</td><td>13 mois au plus (390 jours)</td></tr>
              <tr><td><code>_ga_7VRNV419X2</code></td><td>Google Analytics</td><td>Garder l&apos;état de la visite en cours</td><td>13 mois au plus (390 jours)</td></tr>
            </tbody>
          </table>
          <ul>
            <li><strong>Fournisseur</strong> : Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande, sous-traitant au sens de l&apos;article 28 du RGPD.</li>
            <li><strong>Finalité</strong> : mesure d&apos;audience.</li>
            <li><strong>Base légale</strong> : intérêt légitime de l&apos;éditeur (article 6-1 f du RGPD).</li>
            <li><strong>Transfert</strong> : les données peuvent être transférées à Google LLC, aux États-Unis, dans le cadre du EU–U.S. Data Privacy Framework et des clauses contractuelles types de la Commission européenne.</li>
            <li><strong>Conservation chez Google</strong> : 14 mois pour les données liées aux visites et aux identifiants, puis suppression ; seuls restent des totaux anonymes.</li>
            <li><strong>Opposition</strong> : bloquer ou supprimer les cookies dans les réglages du navigateur, ou installer le <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">module de désactivation de Google Analytics</a> ; le site fonctionne alors de la même façon.</li>
          </ul>
          <p>Ce sont les seuls cookies du site : ni cookie publicitaire, ni cookie de réseau social.</p>

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
            , avec une réponse sous un mois. Comme les données de Google Analytics ne sont rattachées à aucun nom, ils visent surtout les messages échangés. Vous pouvez
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
