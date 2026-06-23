import type { Metadata } from "next";
import Link from "next/link";
import { pagesAcheter } from "@/data/acheter";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

export const metadata: Metadata = buildMetadata({
  title: "Acheter une voiture électrique en 2026 : nos guides",
  description:
    "Guide d'achat voiture électrique : bonus écologique, LOA/LLD, assurance, occasion, financement. " +
    pagesAcheter.length +
    " conseils concrets pour acheter au meilleur prix.",
  path: "/acheter/",
});

export default function AcheterIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Acheter", href: "/acheter/" }]} />
      <section className="section" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <h1 className="section-title">
          Acheter une voiture électrique ({pagesAcheter.length} guides)
        </h1>
        <p className="section-sub">
          Guides complets pour réussir votre achat : financement, aides,
          assurance, occasion et bonnes pratiques.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 16,
          }}
        >
          {pagesAcheter.map((p) => (
            <Link
              key={p.slug}
              href={`/acheter/${p.slug}/`}
              className="carte-modele"
              style={{ padding: 20 }}
            >
              <h3
                className="carte-modele-nom"
                style={{ marginBottom: 6, fontSize: 17 }}
              >
                {p.titre}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {p.metaDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── CONTENU ÉDITORIAL ────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="prose">
          <h2>Acheter une voiture électrique en 2026 : le parcours de l&apos;acheteur</h2>

          <p>
            L&apos;achat d&apos;une voiture électrique est un projet qui merite une preparation methodique. Si la technologie est aujourd&apos;hui mature et les modèles nombreux, les parametres a prendre en compte different sensiblement de ceux d&apos;un achat automobile classique. Entre le choix du modele, les formules de financement, les aides de l&apos;État, les options de recharge et les subtilites du marché de l&apos;occasion électrique, chaque étape de votre parcours d&apos;achat merite une attention particuliere. Nos guides sont la pour vous accompagner a chaque moment de cette demarche.
          </p>

          <h2>État du marché en France : un moment propice pour acheter</h2>

          <h3>Une offre de modèles au plus haut historique</h3>
          <p>
            Le marché français de la voiture électrique n&apos;a jamais ete aussi riche qu&apos;en 2026. Plus de 120 modèles sont desormais disponibles a la vente, couvrant l&apos;intégralite du spectre automobile : des micro-citadines sans permis aux SUV familiaux sept places, en passant par les berlines compactes, les breaks, les monospaces électriques et meme les utilitaires transformes en véhicules particuliers. Cette diversité signifie que, quel que soit votre profil, vos besoins ou votre budget, il existe un véhicule électrique fait pour vous.
          </p>
          <p>
            Les constructeurs français sont particulièrement actifs dans cette transition. Renault, avec sa gamme E-Tech comprenant la R5 et la R4, Peugeot avec les e-208, e-308 et e-3008, Citroen avec la e-C3 et la e-C4, et Dacia avec la Spring proposent des véhicules concus pour le marché européen et adaptes aux attentes des automobilistes français. En parallele, les constructeurs chinois (BYD, MG, Leapmotor, Xpeng) enrichissent l&apos;offre avec des véhicules souvent très compétitifs en termes de rapport qualité-prix, contribuant a une saine pression concurrentielle qui bénéficie au consommateur.
          </p>

          <h3>Des prix en baisse constante</h3>
          <p>
            L&apos;un des freins historiques a l&apos;adoption de la voiture électrique (le prix d&apos;achat élevé) s&apos;estompe progressivement. La baisse du cout des batteries (qui représentent 30 a 40 % du prix du véhicule) se repercute sur les tarifs. Entre 2022 et 2026, le prix moyen d&apos;une voiture électrique neuve en France a diminue d&apos;environ 18 %, passant de 38 000 euros a environ 31 000 euros. Et ce prix moyen masque la réalité des modèles d&apos;entree de gamme : plusieurs véhicules neufs sont desormais accessibles sous la barre des 20 000 euros apres bonus écologique.
          </p>
          <p>
            Cette tendance a la baisse devrait se poursuivre dans les années a venir, portee par les économies d&apos;echelle des gigafactories européennes, l&apos;adoption de chimies de batteries moins couteuses (LFP, sodium-ion) et l&apos;intensification de la concurrence. Les analystes prevoient que la parite de prix entre véhicules électriques et thermiques sera atteinte d&apos;ici 2027-2028 pour la plupart des segments.
          </p>

          <h2>Les questions cles a se poser avant d&apos;acheter</h2>

          <h3>Quel est mon usage quotidien reel ?</h3>
          <p>
            Avant de vous plonger dans les catalogues, prenez le temps d&apos;analyser vos habitudes de deplacement. Notez pendant une semaine vos distances quotidiennes, les types de trajets (urbain, periurbain, autoroute), la frequence de vos longs trajets et le nombre de passagers habituels. Cette analyse vous evitera deux ecueils courants : acheter un véhicule a trop grande autonomie (et donc plus cher) pour un usage principalement urbain, ou a l&apos;inverse choisir un modèle dont l&apos;autonomie serait insuffisante pour vos deplacements reguliers.
          </p>
          <p>
            Les statistiques montrent que 85 % des automobilistes français parcourent moins de 80 km par jour. Pour ces usages, une voiture électrique de 250 a 300 km d&apos;autonomie WLTP est largement suffisante, avec une recharge seulement tous les deux a trois jours en utilisation normale. Si vous effectuez régulièrement des trajets de plus de 200 km en une journee, orientez-vous vers des modèles offrant 400 km et plus, avec une capacité de recharge rapide elevee (100 kW minimum).
          </p>

          <h3>Ou vais-je recharger ?</h3>
          <p>
            La question de la recharge est determinante dans le choix de votre véhicule. Si vous avez la possibilite d&apos;installer une borne a domicile (maison individuelle ou parking de copropriete), vous bénéficierez du confort ultime : brancher votre voiture en rentrant le soir et la retrouver chargee le matin. La recharge nocturne en heures creuses est aussi la solution la plus économique, avec un cout de 2 a 3 euros pour 100 km.
          </p>
          <p>
            Si la recharge a domicile n&apos;est pas possible, evaluez les alternatives : borne au travail, bornes publiques de proximite, stations de supermarche (de plus en plus nombreuses et souvent gratuites ou a bas cout). Certaines habitudes de recharge s&apos;averent très compatibles avec le quotidien : par exemple, recharger pendant vos courses hebdomadaires sur la borne du supermarche suffit largement pour de nombreux conducteurs a faible kilometrage.
          </p>

          <h3>Neuf ou occasion : que choisir ?</h3>
          <p>
            Le marché de l&apos;occasion électrique s&apos;est considérablement structure depuis 2024. On trouve desormais de très bonnes affaires sur des modèles de 2 a 4 ans, avec des batteries en excellent état et des prix 30 a 50 % inférieurs au neuf. Les Renault Zoe, Peugeot e-208, Tesla Model 3, Hyundai Kona Electric et Volkswagen ID.3 constituent les meilleures opportunites sur le marché de la seconde main.
          </p>
          <p>
            L&apos;achat d&apos;occasion nécessité toutefois quelques precautions specifiques. La verification de l&apos;état de sante de la batterie (SoH, State of Health) est indispensable. La plupart des constructeurs proposent un diagnostic batterie officiel, et des outils tiers comme les dongles OBD permettent egalement d&apos;obtenir cette information. Un SoH supérieur a 85 % apres 50 000 a 80 000 km est tout a fait normal et ne doit pas vous inquieter. En dessous de 75 %, negociez le prix en consequence.
          </p>
          <p>
            Attention egalement a la transferabilite de la garantie batterie : verifiez qu&apos;elle est bien attachee au véhicule et non au premier proprietaire. Enfin, renseignez-vous sur la disponibilité des mises a jour logicielles pour le modèle envisage, car elles peuvent significativement ameliorer les performances et l&apos;autonomie.
          </p>

          <h2>Financement : quelle formule choisir ?</h2>

          <h3>Achat comptant</h3>
          <p>
            L&apos;achat comptant reste la formule la plus simple et, sur le long terme, souvent la moins couteuse. Vous etes proprietaire du véhicule immediatement, sans contrainte de kilometrage ni de duree. C&apos;est aussi la formule qui vous permet de revendre votre véhicule a tout moment. L&apos;inconvenient principal est l&apos;immobilisation d&apos;un capital important, meme si les aides de l&apos;État viennent reduire la facture.
          </p>

          <h3>Credit auto classique</h3>
          <p>
            Le credit automobile permet d&apos;etaler le paiement sur 24 a 72 mois, tout en devenant immediatement proprietaire du véhicule. Les taux d&apos;interet pour les véhicules électriques sont souvent plus avantageux que pour les thermiques, certaines banques et concessionnaires proposant des offres dediees. Le bonus écologique vient reduire le montant a financer. Comparez les offres de votre banque avec celles des captives des constructeurs : les ecarts peuvent etre significatifs.
          </p>

          <h3>LOA (Location avec Option d&apos;Achat)</h3>
          <p>
            La LOA est la formule de financement la plus populaire pour les voitures électriques en France. Elle vous permet de disposer d&apos;un véhicule contre un loyer mensuel, avec la possibilite de l&apos;acheter en fin de contrat (en payant la valeur residuelle) ou de le rendre et d&apos;en prendre un nouveau. Le bonus écologique vient généralement reduire le premier loyer ou l&apos;apport initial. La LOA est particulièrement adaptee a la voiture électrique car elle vous protege contre le risque de depreciation lie aux évolutions technologiques rapides des batteries.
          </p>

          <h3>LLD (Location Longue Duree)</h3>
          <p>
            La LLD est similaire a la LOA mais sans option d&apos;achat en fin de contrat. Vous louez le véhicule pour une duree et un kilometrage determines, puis vous le rendez. C&apos;est la formule preferee des professionnels et des conducteurs qui souhaitent un budget automobile parfaitement maitrise (le loyer peut inclure entretien, assurance et assistance). Pour les véhicules électriques, la LLD offre l&apos;avantage de ne pas s&apos;engager sur la valeur future du véhicule, un parametre encore incertain sur certains modèles recents.
          </p>

          <h2>Maximiser les aides a l&apos;achat en 2026</h2>

          <h3>Le bonus écologique : mode d&apos;emploi</h3>
          <p>
            Le bonus écologique reste la principale aide a l&apos;achat d&apos;un véhicule électrique en France. En 2026, il peut atteindre 4 000 euros pour les menages dont le revenu fiscal de reference est inférieur a un certain seuil, et 2 000 euros pour les autres menages. Deux conditions essentielles : le véhicule doit couter moins de 47 000 euros TTC et son score environnemental (qui prend en compte l&apos;empreinte carbone de fabrication) doit etre suffisant, ce qui exclut de fait les modèles fabriques en Chine n&apos;ayant pas obtenu cette certification.
          </p>
          <p>
            La demande de bonus se fait directement en ligne sur le site du ministere de la Transition écologique, ou par l&apos;intermediaire du concessionnaire qui peut avancer le montant. La procedure est relativement simple mais nécessité de rassembler plusieurs documents : justificatif de domicile, avis d&apos;imposition, certificat d&apos;immatriculation du véhicule. Pensez a verifier votre eligibilite avant de signer votre bon de commande.
          </p>

          <h3>La prime a la conversion</h3>
          <p>
            Cumulable avec le bonus écologique, la prime a la conversion recompense la mise au rebut d&apos;un ancien véhicule polluant. Pour un véhicule Crit&apos;Air 3, 4 ou 5 mis a la casse, vous pouvez obtenir jusqu&apos;a 5 000 euros supplementaires, sous conditions de revenus. Le véhicule mis au rebut doit etre en votre possession depuis au moins un an et etre en état de rouler (il ne s&apos;agit pas de se debarrasser d&apos;une epave). Au total, un menage modeste peut cumuler jusqu&apos;a 9 000 euros d&apos;aides nationales, auxquelles viennent s&apos;ajouter les eventuelles primes regionales.
          </p>

          <h3>Les aides locales : un complement non negligeable</h3>
          <p>
            De nombreuses collectivites territoriales proposent des aides complementaires pour l&apos;achat de véhicules électriques. La region Ile-de-France, par exemple, offre une aide pouvant atteindre 6 000 euros sous conditions de ressources. La Metropole de Lyon, la Region Occitanie, le Departement des Bouches-du-Rhone et de nombreuses autres collectivites ont egalement mis en place des dispositifs. Ces aides sont souvent meconnues : prenez le temps de vous renseigner aupres de votre mairie, votre departement et votre region avant de finaliser votre achat.
          </p>

          <h2>L&apos;assurance d&apos;une voiture électrique</h2>
          <p>
            L&apos;assurance automobile pour un véhicule électrique présente quelques spécificités par rapport aux véhicules thermiques. La bonne nouvelle, c&apos;est que les primes d&apos;assurance sont généralement 5 a 15 % moins elevees pour les voitures électriques. Plusieurs facteurs l&apos;expliquent : profil de conducteur statistiquement plus prudent, moindre sinistralite, encouragement des assureurs a la mobilité verte. De nombreux assureurs proposent desormais des formules dediees aux véhicules électriques, incluant des garanties specifiques comme la couverture de la batterie, l&apos;assistance en cas de panne seche électrique, ou le remboursement des frais de remorquage jusqu&apos;a une borne de recharge.
          </p>
          <p>
            Un point d&apos;attention : assurez-vous que votre contrat couvre adequatement la batterie, qui représente le composant le plus couteux du véhicule. En cas de sinistre majeur endommageant la batterie, le cout de remplacement peut depasser la valeur residuelle du véhicule. Certains contrats en tous risques incluent automatiquement cette couverture ; d&apos;autres la proposent en option. Comparez attentivement les offres et n&apos;hesitez pas a utiliser un comparateur spécialise.
          </p>

          <h2>L&apos;achat en concession vs en ligne</h2>
          <p>
            La vente de voitures électriques a accélére la transformation des modes de distribution automobile. Tesla a popularise la vente directe en ligne, sans concession physique traditionnelle. D&apos;autres constructeurs comme Polestar, Aiways ou Smart suivent ce modele. Les constructeurs traditionnels adoptent quant a eux des approches hybrides, combinant configuration en ligne et livraison en concession.
          </p>
          <p>
            Quelle que soit la methode d&apos;achat, nous vous recommandons systematiquement un essai routier avant de vous engager. La conduite électrique est une experience unique, et les differences de comportement, de bruit, de reponse de l&apos;accélérateur et de freinage regeneratif entre les modèles sont significatives. Un essai de 30 minutes dans des conditions variees (ville, route, autoroute si possible) vous en apprendra plus que des heures de lecture de fiches techniques.
          </p>
          <p>
            Nos guides d&apos;achat detailles couvrent chacun de ces sujets en profondeur, avec des exemples concrets, des calculs detailles et des recommandations personnalisees selon votre profil. Parcourez-les pour vous preparer au mieux a votre prochain achat de voiture électrique.
          </p>

          <AuteurBio />

          <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
            <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
              <li>Ministère de la Transition écologique : Conditions et barème du bonus écologique 2026</li>
              <li>Service-Public.fr : Prime à la conversion : conditions d&apos;éligibilité et montants, mise à jour 2026</li>
              <li>Région Île-de-France : Dispositif d&apos;aide à l&apos;achat de véhicules propres 2026</li>
              <li>Avere-France : Guide du financement d&apos;un véhicule électrique : LOA, LLD, crédit</li>
              <li>Fédération Française de l&apos;Assurance : Étude comparative des primes d&apos;assurance VE vs thermique, 2025</li>
              <li>Argus : Cotes et valeurs résiduelles des véhicules électriques d&apos;occasion, baromètre 2026</li>
              <li>UFC-Que Choisir : Comparatif des coûts totaux de possession VE vs thermique sur 5 ans, 2025</li>
              <li>BloombergNEF : Battery Price Survey 2025 : évolution du coût des cellules lithium-ion</li>
              <li>Données constructeurs : Grilles tarifaires et configurateurs officiels Renault, Peugeot, Citroën, Tesla, Dacia</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
