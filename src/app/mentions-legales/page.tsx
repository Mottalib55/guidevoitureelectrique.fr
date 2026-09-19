import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import LastUpdated from "@/components/LastUpdated";

export const metadata: Metadata = {
  title: "Mentions légales du Guide Voiture Électrique : éditeur",
  description:
    "Mentions légales du site Guide Voiture Électrique : éditeur, hébergeur, politique de confidentialité, cookies et conditions générales d'utilisation du site.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "Mentions légales", href: "/mentions-legales/" },
        ]}
      />

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
          Mentions légales
        </h1>

        <div className="prose">

          <p>
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la
            confiance dans l&apos;économie numérique (LCEN), les présentes mentions
            légales sont portées à la connaissance des utilisateurs et visiteurs du
            site guidevoitureelectrique.fr.
          </p>

          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>guidevoitureelectrique.fr</strong> est édité par :
          </p>
          <ul>
            <li><strong>Responsable de la publication</strong> : Mottalib Radif</li>
            <li>
              <strong>Adresse e-mail</strong> :{" "}
              <a href="mailto:contact@guidevoitureelectrique.fr">
                contact@guidevoitureelectrique.fr
              </a>
            </li>
            <li>
              <strong>Site web</strong> :{" "}
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
            Le site est hébergé par :<br />
            <strong>OVH SAS</strong><br />
            2 rue Kellermann<br />
            59100 Roubaix, France<br />
            Site web :{" "}
            <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer">
              https://www.ovhcloud.com
            </a>
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

          <h2>4. Données personnelles et cookies</h2>
          <p>
            Le traitement des données personnelles, les cookies et les sous-traitants sont
            décrits dans la{" "}
            <Link href="/politique-confidentialite/">politique de confidentialité</Link>.
          </p>

          <h2>5. Limitation de responsabilité</h2>
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
            &laquo; en l&apos;état &raquo; sans garantie d&apos;aucune sorte,
            expresse ou implicite.
          </p>

          <h2>6. Conditions d&apos;utilisation</h2>
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

          <h2>7. Liens hypertextes</h2>
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

          <h2>8. Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français.
            En cas de litige, une solution amiable sera recherchée
            préalablement à toute action judiciaire. À défaut, les tribunaux
            français seront seuls compétents. La nullité éventuelle d&apos;une
            clause n&apos;affectera pas les dispositions restantes.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, vous
            pouvez nous contacter à :{" "}
            <a href="mailto:contact@guidevoitureelectrique.fr">
              contact@guidevoitureelectrique.fr
            </a>
          </p>

        </div>
      </article>
    </>
  );
}
