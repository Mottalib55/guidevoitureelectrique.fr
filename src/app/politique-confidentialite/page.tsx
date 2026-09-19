import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Politique de confidentialité du Guide Voiture Électrique",
  description:
    "Données collectées par guidevoitureelectrique.fr, cookies de mesure d'audience (Google Analytics, Clarity), sous-traitants, durée de conservation et vos droits RGPD.",
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
          <h2>1. Principes</h2>
          <p>
            Le site guidevoitureelectrique.fr s&apos;engage à respecter la
            confidentialité des données personnelles de ses utilisateurs,
            conformément au Règlement Général sur la Protection des Données
            (RGPD, Règlement UE 2016/679) et à la loi Informatique et Libertés
            du 6 janvier 1978 modifiée.
          </p>

          <h3>1.1 Responsable du traitement</h3>
          <p>
            Le responsable du traitement des données est Mottalib Radif, joignable à
            l&apos;adresse{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">
              contact@guidevoitureelectrique.fr
            </a>.
            Compte tenu de la nature du site et de l&apos;absence de traitement à
            grande échelle de données sensibles, la désignation d&apos;un Délégué à
            la Protection des Données (DPO) n&apos;est pas légalement requise au titre
            de l&apos;article 37 du RGPD.
          </p>

          <h3>1.2 Données collectées</h3>
          <p>
            Le site peut collecter les données suivantes dans le cadre de son
            fonctionnement :
          </p>
          <ul>
            <li>
              <strong>Données de navigation</strong> : adresse IP (anonymisée), type de
              navigateur, pages visitées, durée de la visite, via des outils
              d&apos;analyse de fréquentation anonymisés.
            </li>
            <li>
              <strong>Données de contact</strong> : adresse e-mail, si vous
              nous contactez volontairement par courrier électronique.
            </li>
          </ul>
          <p>
            Le site ne collecte ni ne traite les catégories de données suivantes :
            données financières, numéros d&apos;identification, données de santé,
            données biométriques ou données relatives aux opinions politiques ou
            religieuses.
          </p>

          <h3>1.3 Finalité du traitement</h3>
          <p>Les données collectées sont utilisées pour :</p>
          <ul>
            <li>Améliorer le contenu et l&apos;ergonomie du site</li>
            <li>Répondre à vos demandes de contact</li>
            <li>Produire des statistiques anonymes de fréquentation</li>
            <li>Assurer la sécurité et la disponibilité du site</li>
          </ul>

          <h3>1.4 Base légale du traitement</h3>
          <p>
            Le traitement des données repose sur les bases légales suivantes au titre
            de l&apos;article 6 du RGPD :
          </p>
          <ul>
            <li>
              <strong>Intérêt légitime</strong> (Art. 6(1)(f)) : pour l&apos;analyse
              anonyme de la fréquentation et les fichiers journaux du serveur.
            </li>
            <li>
              <strong>Consentement</strong> (Art. 6(1)(a)) : pour les cookies
              d&apos;analyse, le cas échéant.
            </li>
          </ul>

          <h3>1.5 Durée de conservation</h3>
          <p>
            Les données de navigation sont conservées pendant une durée maximale
            de 13 mois, conformément aux recommandations de la CNIL. Les données
            de contact sont conservées pendant la durée nécessaire au traitement
            de votre demande, puis supprimées dans un délai maximum de 3 ans à
            compter du dernier contact. Les fichiers journaux du serveur sont
            automatiquement supprimés après 30 jours.
          </p>

          <h3>1.6 Vos droits RGPD</h3>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant
            vos données personnelles :
          </p>
          <ul>
            <li><strong>Droit d&apos;accès</strong> (Art. 15) : obtenir la confirmation que vos données sont traitées et en obtenir une copie.</li>
            <li><strong>Droit de rectification</strong> (Art. 16) : demander la correction de données inexactes ou incomplètes.</li>
            <li><strong>Droit à l&apos;effacement</strong> (Art. 17) : demander la suppression de vos données (&laquo; droit à l&apos;oubli &raquo;).</li>
            <li><strong>Droit à la limitation du traitement</strong> (Art. 18) : restreindre le traitement dans certains cas.</li>
            <li><strong>Droit à la portabilité</strong> (Art. 20) : recevoir vos données dans un format structuré et lisible par machine.</li>
            <li><strong>Droit d&apos;opposition</strong> (Art. 21) : vous opposer au traitement de vos données pour des motifs légitimes.</li>
            <li><strong>Droit de retirer votre consentement</strong> (Art. 7) : retirer votre consentement à tout moment.</li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse :{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">
              contact@guidevoitureelectrique.fr
            </a>.
            Nous nous engageons à répondre dans un délai de 30 jours.
          </p>
          <p>
            Vous disposez également du droit de déposer une réclamation auprès
            de la CNIL (Commission Nationale de l&apos;Informatique et des
            Libertés) :{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
              www.cnil.fr
            </a>
          </p>

          <h3>1.7 Transfert de données hors UE</h3>
          <p>
            Le site est hébergé en France par OVH. Les outils de mesure d&apos;audience
            (Google Analytics, Microsoft Clarity) sont fournis par des sociétés dont les
            groupes sont établis aux États-Unis ; leurs transferts de données sont encadrés
            par les clauses contractuelles types de la Commission européenne et le cadre
            de protection des données UE–États-Unis.
          </p>
          <h2>2. Cookies et stockage local</h2>
          <p>
            Le site guidevoitureelectrique.fr peut utiliser des cookies
            techniques nécessaires au bon fonctionnement du site. Ces cookies ne
            collectent aucune donnée personnelle et ne nécessitent pas votre
            consentement préalable conformément à la directive ePrivacy
            (2009/136/CE).
          </p>
          <p>
            Le site utilise deux outils de mesure d&apos;audience qui déposent des cookies :
          </p>
          <ul>
            <li>
              <strong>Google Analytics 4</strong> (Google Ireland Ltd) : statistiques de
              fréquentation (cookies <code>_ga</code>, <code>_ga_*</code>, durée de vie
              maximale de 13 mois).
            </li>
            <li>
              <strong>Microsoft Clarity</strong> (Microsoft Ireland Operations Ltd) : analyse
              de l&apos;ergonomie des pages (cookies <code>_clck</code>, <code>_clsk</code>).
            </li>
          </ul>
          <p>
            Les préférences utilisateur (thème clair/sombre) sont stockées dans
            le localStorage du navigateur, qui n&apos;est pas un cookie et
            n&apos;est jamais transmis à nos serveurs. Vous pouvez effacer les
            données localStorage à tout moment via les paramètres de votre
            navigateur.
          </p>
          <p>
            Vous pouvez à tout moment configurer votre navigateur pour refuser
            les cookies. Veuillez noter que le refus de certains cookies peut
            affecter votre expérience de navigation sur le site.
          </p>

          <h2>3. Sous-traitants</h2>
          <p>
            Les sous-traitants suivants peuvent traiter des données pour notre compte :
          </p>
          <ul>
            <li><strong>OVH SAS</strong> (2 rue Kellermann, 59100 Roubaix, France) : hébergement du site.</li>
            <li><strong>Google Ireland Ltd</strong> : mesure d&apos;audience (Google Analytics 4).</li>
            <li><strong>Microsoft Ireland Operations Ltd</strong> : analyse d&apos;ergonomie (Microsoft Clarity).</li>
          </ul>
          <p>
            Ces sous-traitants sont liés par des obligations contractuelles de
            protection des données conformes aux exigences du RGPD.
          </p>

        </div>
      </article>
    </>
  );
}
