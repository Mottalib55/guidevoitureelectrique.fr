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
          <h2>Éditeur du site</h2>
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

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par :<br />
            Vercel Inc.<br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723, États-Unis<br />
            Site web :{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              https://vercel.com
            </a>
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu du site guidevoitureelectrique.fr
            (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
            est la propriété exclusive de l&apos;éditeur ou de ses partenaires
            et est protégé par les lois françaises et internationales relatives
            à la propriété intellectuelle.
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

          <h2>Données personnelles et confidentialité</h2>
          <p>
            Le site guidevoitureelectrique.fr s&apos;engage à respecter la
            confidentialité des données personnelles de ses utilisateurs,
            conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978
            modifiée.
          </p>

          <h3>Données collectées</h3>
          <p>
            Le site peut collecter les données suivantes dans le cadre de son
            fonctionnement :
          </p>
          <ul>
            <li>
              <strong>Données de navigation</strong> : adresse IP, type de
              navigateur, pages visitées, durée de la visite, via des outils
              d&apos;analyse de fréquentation anonymisés.
            </li>
            <li>
              <strong>Données de contact</strong> : adresse e-mail, si vous
              nous contactez volontairement par courrier électronique.
            </li>
          </ul>

          <h3>Finalité du traitement</h3>
          <p>Les données collectées sont utilisées pour :</p>
          <ul>
            <li>Améliorer le contenu et l&apos;ergonomie du site</li>
            <li>Répondre à vos demandes de contact</li>
            <li>
              Produire des statistiques anonymes de fréquentation
            </li>
          </ul>

          <h3>Durée de conservation</h3>
          <p>
            Les données de navigation sont conservées pendant une durée maximale
            de 13 mois. Les données de contact sont conservées pendant la durée
            nécessaire au traitement de votre demande, puis supprimées.
          </p>

          <h3>Vos droits</h3>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant
            vos données personnelles :
          </p>
          <ul>
            <li>Droit d&apos;accès : obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
            <li>Droit de rectification : demander la correction de données inexactes</li>
            <li>Droit à l&apos;effacement : demander la suppression de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité de vos données</li>
            <li>Droit d&apos;opposition au traitement de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse :{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">
              contact@guidevoitureelectrique.fr
            </a>
          </p>
          <p>
            Vous disposez également du droit de déposer une réclamation auprès
            de la CNIL (Commission Nationale de l&apos;Informatique et des
            Libertés) :{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
              www.cnil.fr
            </a>
          </p>

          <h2>Cookies</h2>
          <p>
            Le site guidevoitureelectrique.fr peut utiliser des cookies
            techniques nécessaires au bon fonctionnement du site. Ces cookies ne
            collectent aucune donnée personnelle et ne nécessitent pas votre
            consentement préalable.
          </p>
          <p>
            Si des cookies d&apos;analyse ou de mesure d&apos;audience sont mis
            en place, ils seront configurés pour respecter les recommandations
            de la CNIL en matière d&apos;exemption de consentement (durée de vie
            limitée, anonymisation des données, finalité strictement limitée à
            la mesure d&apos;audience).
          </p>
          <p>
            Vous pouvez à tout moment configurer votre navigateur pour refuser
            les cookies. Veuillez noter que le refus de certains cookies peut
            affecter votre expérience de navigation sur le site.
          </p>

          <h2>Limitation de responsabilité</h2>
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
            l&apos;impossibilité d&apos;y accéder.
          </p>

          <h2>Liens hypertextes</h2>
          <p>
            Le site guidevoitureelectrique.fr peut contenir des liens
            hypertextes vers d&apos;autres sites internet. L&apos;éditeur
            n&apos;exerce aucun contrôle sur le contenu de ces sites tiers et
            décline toute responsabilité quant à leur contenu ou aux éventuels
            dommages résultant de leur utilisation.
          </p>
          <p>
            La mise en place de liens hypertextes vers le site
            guidevoitureelectrique.fr est autorisée sans accord préalable, sous
            réserve de ne pas utiliser la technique du framing ou toute autre
            technique visant à masquer l&apos;identité et l&apos;origine du
            contenu.
          </p>

          <h2>Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français.
            En cas de litige, les tribunaux français seront seuls compétents.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, vous
            pouvez nous contacter à :{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">
              contact@guidevoitureelectrique.fr
            </a>
          </p>

          <p style={{ marginTop: 48, fontSize: 13, color: "var(--faint)" }}>
            Dernière mise à jour : juin 2025
          </p>
        </div>
      </article>
    </>
  );
}
