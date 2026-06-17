import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions légales — Guide Voiture Électrique",
  description:
    "Mentions légales, politique de confidentialité et conditions d'utilisation du site Guide Voiture Électrique.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Mentions légales", href: "/mentions-legales/" },
        ]}
      />

      <article className="section" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 32,
            letterSpacing: "-0.02em",
            marginBottom: 32,
          }}
        >
          Mentions légales
        </h1>

        <div className="prose">
          <p><em>Dernière mise à jour : juin 2026</em></p>

          <p>
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la
            confiance dans l&apos;économie numérique (LCEN), les présentes mentions
            légales sont portées à la connaissance des utilisateurs et visiteurs du
            site guidevoitureelectrique.fr.
          </p>

          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>guidevoitureelectrique.fr</strong> est édité par :
          </p>
          <ul>
            <li><strong>Responsable de la publication</strong> : Mottalib Radif</li>
            <li>
              <strong>Adresse e-mail</strong> :{" "}
              <a href="mailto:contact@guidevoitureelectrique.fr">
                contact@guidevoitureelectrique.fr
              </a>
            </li>
            <li>
              <strong>Site web</strong> :{" "}
              <a href="https://guidevoitureelectrique.fr">
                https://guidevoitureelectrique.fr
              </a>
            </li>
          </ul>
          <p>
            L&apos;éditeur assume la responsabilité éditoriale de l&apos;ensemble des
            contenus publiés sur le site. Les informations relatives aux véhicules
            électriques (prix, autonomies, caractéristiques techniques, aides
            financières) sont fournies à titre indicatif et sont susceptibles
            d&apos;évoluer sans préavis.
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723, États-Unis<br />
            Site web :{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              https://vercel.com
            </a>
          </p>
          <p>
            Vercel est une plateforme cloud de déploiement statique et serverless.
            L&apos;infrastructure repose sur un réseau edge mondial qui sert les pages
            depuis le serveur le plus proche de chaque visiteur. Le protocole HTTPS est
            utilisé pour chiffrer toutes les données en transit. En tant
            qu&apos;hébergeur technique, Vercel n&apos;exerce aucun contrôle éditorial
            sur le contenu du site.
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu du site guidevoitureelectrique.fr
            (textes, images, graphismes, logo, icônes, sons, logiciels, algorithmes
            de calcul, éléments de mise en page) est la propriété exclusive de
            l&apos;éditeur ou de ses partenaires et est protégé par les lois
            françaises et internationales relatives à la propriété intellectuelle,
            conformément aux articles L.111-1 et suivants du Code de la Propriété
            Intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite sans l&apos;autorisation
            écrite préalable de l&apos;éditeur.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l&apos;un quelconque
            des éléments qu&apos;il contient sera considérée comme constitutive
            d&apos;une contrefaçon et poursuivie conformément aux dispositions
            des articles L.335-2 et suivants du Code de la Propriété
            Intellectuelle.
          </p>
          <p>
            Les utilisateurs sont autorisés à consulter le site pour un usage
            strictement personnel et non commercial. Les citations brèves à des fins
            informatives sont autorisées sous réserve de mention de la source.
          </p>

          <h2>4. Données personnelles et confidentialité</h2>
          <p>
            Le site guidevoitureelectrique.fr s&apos;engage à respecter la
            confidentialité des données personnelles de ses utilisateurs,
            conformément au Règlement Général sur la Protection des Données
            (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés
            du 6 janvier 1978 modifiée.
          </p>

          <h3>4.1 Responsable du traitement</h3>
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

          <h3>4.2 Données collectées</h3>
          <p>
            Le site peut collecter les données suivantes dans le cadre de son
            fonctionnement :
          </p>
          <ul>
            <li>
              <strong>Données de navigation</strong> : adresse IP (anonymisée), type de
              navigateur, pages visitées, durée de la visite, via des outils
              d&apos;analyse de fréquentation anonymisés.
            </li>
            <li>
              <strong>Données de contact</strong> : adresse e-mail, si vous
              nous contactez volontairement par courrier électronique.
            </li>
          </ul>
          <p>
            Le site ne collecte ni ne traite les catégories de données suivantes :
            données financières, numéros d&apos;identification, données de santé,
            données biométriques ou données relatives aux opinions politiques ou
            religieuses.
          </p>

          <h3>4.3 Finalité du traitement</h3>
          <p>Les données collectées sont utilisées pour :</p>
          <ul>
            <li>Améliorer le contenu et l&apos;ergonomie du site</li>
            <li>Répondre à vos demandes de contact</li>
            <li>Produire des statistiques anonymes de fréquentation</li>
            <li>Assurer la sécurité et la disponibilité du site</li>
          </ul>

          <h3>4.4 Base légale du traitement</h3>
          <p>
            Le traitement des données repose sur les bases légales suivantes au titre
            de l&apos;article 6 du RGPD :
          </p>
          <ul>
            <li>
              <strong>Intérêt légitime</strong> (Art. 6(1)(f)) — pour l&apos;analyse
              anonyme de la fréquentation et les fichiers journaux du serveur.
            </li>
            <li>
              <strong>Consentement</strong> (Art. 6(1)(a)) — pour les cookies
              d&apos;analyse, le cas échéant.
            </li>
          </ul>

          <h3>4.5 Durée de conservation</h3>
          <p>
            Les données de navigation sont conservées pendant une durée maximale
            de 13 mois, conformément aux recommandations de la CNIL. Les données
            de contact sont conservées pendant la durée nécessaire au traitement
            de votre demande, puis supprimées dans un délai maximum de 3 ans à
            compter du dernier contact. Les fichiers journaux du serveur sont
            automatiquement supprimés après 30 jours.
          </p>

          <h3>4.6 Vos droits RGPD</h3>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant
            vos données personnelles :
          </p>
          <ul>
            <li><strong>Droit d&apos;accès</strong> (Art. 15) : obtenir la confirmation que vos données sont traitées et en obtenir une copie.</li>
            <li><strong>Droit de rectification</strong> (Art. 16) : demander la correction de données inexactes ou incomplètes.</li>
            <li><strong>Droit à l&apos;effacement</strong> (Art. 17) : demander la suppression de vos données (&laquo; droit à l&apos;oubli &raquo;).</li>
            <li><strong>Droit à la limitation du traitement</strong> (Art. 18) : restreindre le traitement dans certains cas.</li>
            <li><strong>Droit à la portabilité</strong> (Art. 20) : recevoir vos données dans un format structuré et lisible par machine.</li>
            <li><strong>Droit d&apos;opposition</strong> (Art. 21) : vous opposer au traitement de vos données pour des motifs légitimes.</li>
            <li><strong>Droit de retirer votre consentement</strong> (Art. 7) : retirer votre consentement à tout moment.</li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse :{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">
              contact@guidevoitureelectrique.fr
            </a>.
            Nous nous engageons à répondre dans un délai de 30 jours.
          </p>
          <p>
            Vous disposez également du droit de déposer une réclamation auprès
            de la CNIL (Commission Nationale de l&apos;Informatique et des
            Libertés) :{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
              www.cnil.fr
            </a>
          </p>

          <h3>4.7 Transfert de données hors UE</h3>
          <p>
            Notre hébergeur (Vercel) est basé aux États-Unis. Les transferts de
            données vers ce prestataire sont encadrés par les clauses contractuelles
            types de l&apos;UE, garantissant un niveau de protection conforme au RGPD.
          </p>

          <h2>5. Cookies et stockage local</h2>
          <p>
            Le site guidevoitureelectrique.fr peut utiliser des cookies
            techniques nécessaires au bon fonctionnement du site. Ces cookies ne
            collectent aucune donnée personnelle et ne nécessitent pas votre
            consentement préalable conformément à la directive ePrivacy
            (2009/136/CE).
          </p>
          <p>
            Si des cookies d&apos;analyse ou de mesure d&apos;audience sont mis
            en place, ils seront configurés pour respecter les recommandations
            de la CNIL en matière d&apos;exemption de consentement (durée de vie
            limitée à 13 mois, anonymisation des données, finalité strictement
            limitée à la mesure d&apos;audience).
          </p>
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

          <h2>6. Sous-traitants</h2>
          <p>
            Les sous-traitants suivants peuvent traiter des données pour notre compte :
          </p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong> — Hébergement du site (États-Unis, clauses
              contractuelles types UE)
            </li>
          </ul>
          <p>
            Ces sous-traitants sont liés par des obligations contractuelles de
            protection des données conformes aux exigences du RGPD.
          </p>

          <h2>7. Limitation de responsabilité</h2>
          <p>
            Les informations publiées sur le site
            guidevoitureelectrique.fr sont fournies à titre indicatif et ne
            sauraient se substituer aux informations officielles des
            constructeurs automobiles, des organismes publics ou des
            professionnels du secteur.
          </p>
          <p>
            L&apos;éditeur s&apos;efforce de fournir des informations aussi
            précises et à jour que possible. Toutefois, il ne saurait être tenu
            responsable des erreurs, omissions ou résultats qui pourraient être
            obtenus par un mauvais usage de ces informations.
          </p>
          <p>
            Les prix, autonomies, caractéristiques techniques et disponibilité
            des aides financières mentionnés sur le site sont susceptibles
            d&apos;évoluer sans préavis. Nous vous recommandons de vérifier ces
            informations auprès des sources officielles avant toute décision
            d&apos;achat.
          </p>
          <p>
            L&apos;éditeur ne saurait être tenu responsable des dommages
            directs ou indirects résultant de l&apos;utilisation du site ou de
            l&apos;impossibilité d&apos;y accéder. Le site est fourni
            &laquo; en l&apos;état &raquo; sans garantie d&apos;aucune sorte,
            expresse ou implicite.
          </p>

          <h2>8. Conditions d&apos;utilisation</h2>
          <p>
            L&apos;accès au site guidevoitureelectrique.fr est gratuit et ouvert à tout
            utilisateur disposant d&apos;un accès Internet. L&apos;utilisation du site
            implique l&apos;acceptation pleine et entière des présentes mentions légales.
            L&apos;utilisateur s&apos;engage à utiliser le site conformément à sa
            destination (information sur les véhicules électriques) et aux
            réglementations en vigueur.
          </p>
          <p>
            L&apos;éditeur se réserve le droit de modifier, suspendre ou interrompre
            tout ou partie du site à tout moment, sans préavis et sans indemnisation.
            L&apos;éditeur s&apos;efforce d&apos;assurer la disponibilité du site
            mais ne garantit pas un accès ininterrompu.
          </p>

          <h2>9. Liens hypertextes</h2>
          <p>
            Le site guidevoitureelectrique.fr peut contenir des liens
            hypertextes vers d&apos;autres sites internet. L&apos;éditeur
            n&apos;exerce aucun contrôle sur le contenu de ces sites tiers et
            décline toute responsabilité quant à leur contenu, leurs pratiques
            de confidentialité ou aux éventuels dommages résultant de leur
            utilisation.
          </p>
          <p>
            La mise en place de liens hypertextes vers le site
            guidevoitureelectrique.fr est autorisée sans accord préalable, sous
            réserve de ne pas utiliser la technique du framing ou toute autre
            technique visant à masquer l&apos;identité et l&apos;origine du
            contenu.
          </p>

          <h2>10. Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français.
            En cas de litige, une solution amiable sera recherchée
            préalablement à toute action judiciaire. À défaut, les tribunaux
            français seront seuls compétents. La nullité éventuelle d&apos;une
            clause n&apos;affectera pas les dispositions restantes.
          </p>

          <h2>11. Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, vous
            pouvez nous contacter à :{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">
              contact@guidevoitureelectrique.fr
            </a>
          </p>

          <p style={{ marginTop: 48, fontSize: 13, color: "var(--faint)" }}>
            Dernière mise à jour : juin 2026
          </p>
        </div>
      </article>
    </>
  );
}
