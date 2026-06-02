import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { villes, getVilleBySlug } from "@/data/villes";
import { faqJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

export function generateStaticParams() {
  return villes.map((v) => ({ slug: v.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) return {};
  return buildMetadata({
    title: `Bornes de recharge ${ville.nom} : carte et tarifs 2026`,
    description: ville.metaDescription,
    path: `/recharge/bornes/${ville.slug}/`,
  });
}

function getFaqs(ville: NonNullable<ReturnType<typeof getVilleBySlug>>) {
  const ratio = (ville.nombreBornes / ville.population * 10000).toFixed(1);
  return [
    {
      question: `Où recharger sa voiture électrique à ${ville.nom} ?`,
      answer: `${ville.nom} dispose de ${ville.nombreBornes} bornes de recharge publiques réparties sur l'ensemble de la ville. Vous trouverez des bornes dans les parkings publics, les centres commerciaux, les gares et les stations-service. Utilisez l'application Chargemap ou ABRP pour localiser les bornes disponibles en temps réel.`,
    },
    {
      question: `Combien de bornes de recharge y a-t-il à ${ville.nom} ?`,
      answer: `${ville.nom} compte environ ${ville.nombreBornes} points de recharge publics, soit un ratio de ${ratio} bornes pour 10 000 habitants. Ce réseau est en constante expansion grâce aux investissements des opérateurs nationaux et locaux.`,
    },
    {
      question: `La recharge est-elle gratuite à ${ville.nom} ?`,
      answer: `Certaines bornes à ${ville.nom} offrent la recharge gratuite, notamment dans les centres commerciaux et certains parkings municipaux. Cependant, la majorité des bornes rapides et semi-rapides sont payantes, avec des tarifs variant de 0,25 à 0,70 €/kWh selon l'opérateur et la puissance.`,
    },
    {
      question: `Quelle est la borne la plus rapide à ${ville.nom} ?`,
      answer: `Les bornes les plus rapides à ${ville.nom} atteignent 150 à 350 kW (réseaux Ionity, TotalEnergies ou Tesla Supercharger selon la disponibilité). Ces bornes ultra-rapides permettent de récupérer 80 % de charge en 20 à 30 minutes sur les véhicules compatibles.`,
    },
  ];
}

export default async function PageVille({ params }: Props) {
  const { slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) notFound();

  const faqs = getFaqs(ville);
  const ratio = (ville.nombreBornes / ville.population * 10000).toFixed(1);

  const renderContenu = (contenu: string) => {
    const blocks = contenu.split("\n\n");
    return blocks.map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith("<")) {
        return (
          <div
            key={i}
            dangerouslySetInnerHTML={{ __html: trimmed }}
          />
        );
      }
      return <p key={i}>{trimmed}</p>;
    });
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqs)),
        }}
      />

      <Breadcrumb
        items={[
          { name: "Recharge", href: "/recharge/borne-de-recharge/" },
          { name: "Bornes par ville", href: "/recharge/bornes/paris/" },
          { name: ville.nom, href: `/recharge/bornes/${ville.slug}/` },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        {/* ─── EN-TÊTE ─────────────────────────────────────────── */}
        <header style={{ marginBottom: 32 }}>
          <p
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--faint)",
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            Bornes de recharge — {ville.region}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(26px, 3.5vw, 40px)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Bornes de recharge à {ville.nom} — Guide complet
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--muted)",
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Trouvez les bornes de recharge pour voiture électrique à {ville.nom} ({ville.departement}).
            {" "}{ville.nombreBornes} bornes disponibles pour {ville.population.toLocaleString("fr-FR")} habitants.
          </p>
        </header>

        {/* ─── STATS VILLE ─────────────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 16,
            }}
          >
            Chiffres clés — {ville.nom}
          </h2>
          <div className="encadre-verdict">
            <div className="encadre-verdict-grid">
              <div className="encadre-verdict-item">
                <div className="encadre-verdict-val">
                  {ville.population.toLocaleString("fr-FR")}
                </div>
                <div className="encadre-verdict-lbl">Habitants</div>
              </div>
              <div className="encadre-verdict-item">
                <div className="encadre-verdict-val">{ville.nombreBornes}</div>
                <div className="encadre-verdict-lbl">Bornes publiques</div>
              </div>
              <div className="encadre-verdict-item">
                <div className="encadre-verdict-val">{ratio}</div>
                <div className="encadre-verdict-lbl">Bornes / 10 000 hab.</div>
              </div>
              <div className="encadre-verdict-item">
                <div className="encadre-verdict-val">{ville.region}</div>
                <div className="encadre-verdict-lbl">Région</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTENU RÉDACTIONNEL ────────────────────────────── */}
        <div className="prose">{renderContenu(ville.contenu)}</div>

        {/* ─── GUIDE RECHARGE VILLE ───────────────────────────── */}
        <div className="prose" style={{ marginTop: 32 }}>
          <h2>Recharger sa voiture électrique à {ville.nom} : le guide pratique</h2>
          <p>
            Avec {ville.nombreBornes} bornes de recharge publiques pour une population
            de {ville.population.toLocaleString("fr-FR")} habitants, {ville.nom} affiche
            un ratio de {ratio} bornes pour 10 000 habitants.{" "}
            {parseFloat(ratio) >= 15
              ? `Ce ratio est nettement supérieur à la moyenne nationale de 10,5 bornes pour 10 000 habitants, ce qui fait de ${ville.nom} l'une des villes les mieux équipées de la région ${ville.region}.`
              : parseFloat(ratio) >= 10
              ? `Ce ratio est conforme à l'objectif national fixé par le gouvernement et place ${ville.nom} dans la bonne moyenne des agglomérations de la région ${ville.region}.`
              : parseFloat(ratio) >= 6
              ? `Ce ratio est légèrement en dessous de la moyenne nationale de 10,5 bornes pour 10 000 habitants, mais le déploiement s'accélère dans toute la région ${ville.region} avec l'arrivée de nouveaux opérateurs.`
              : `Ce ratio est encore en développement, mais la dynamique est positive : la région ${ville.region} bénéficie d'investissements importants pour rattraper la moyenne nationale de 10,5 bornes pour 10 000 habitants.`}
          </p>

          <h3>Où trouver des bornes de recharge à {ville.nom} ?</h3>
          <p>
            Les bornes de recharge à {ville.nom} se répartissent principalement dans les
            parkings publics (centres-villes, gares), les centres commerciaux, les hôtels
            et les stations-service reconverties. Les opérateurs nationaux comme
            TotalEnergies, Izivia (groupe EDF), Ionity et Electra couvrent progressivement
            l&apos;ensemble du département {ville.departement}. Pour les localiser en temps
            réel, les applications Chargemap, PlugShare et A Better Route Planner (ABRP)
            indiquent la disponibilité, la puissance et les tarifs de chaque borne.
          </p>
          <p>
            Les bornes publiques se déclinent en plusieurs niveaux de puissance : les bornes
            lentes (3,7 à 7,4 kW) pour le stationnement longue durée, les bornes accélérées
            (11 à 22 kW) pour les arrêts de 1 à 3 heures, et les bornes rapides à
            ultra-rapides (50 à 350 kW) pour les recharges express de 20 à 45 minutes. Le
            choix de la borne dépend de votre véhicule et de la durée de votre arrêt.
          </p>

          <h3>Tarifs de recharge à {ville.nom} et dans le {ville.departement}</h3>
          <p>
            Les tarifs de recharge publique à {ville.nom} varient selon l&apos;opérateur et
            la puissance de la borne. En moyenne, comptez entre 0,25 et 0,35 €/kWh sur les
            bornes accélérées (22 kW), et entre 0,45 et 0,70 €/kWh sur les bornes rapides
            DC (50 kW et plus). Certains réseaux proposent des abonnements mensuels
            réduisant le coût au kWh : Ionity Passport (5,99 €/mois) fait passer le tarif
            de 0,69 à 0,39 €/kWh, tandis que le Pass Electra permet de recharger à
            0,36 €/kWh sur leurs bornes ultra-rapides.
          </p>
          <p>
            La recharge à domicile reste l&apos;option la plus économique : entre 0,15 et
            0,21 €/kWh en heures creuses selon votre contrat EDF ou fournisseur alternatif.
            Pour un véhicule consommant 16 kWh/100 km et parcourant 12 000 km/an, le budget
            recharge annuel à domicile s&apos;établit entre 290 et 400 €, contre 650 à
            1 000 € en recharge publique uniquement.
          </p>

          <h3>Installer une borne à domicile à {ville.nom}</h3>
          <p>
            {ville.population >= 100000
              ? `Dans une grande agglomération comme ${ville.nom}, de nombreux habitants vivent en copropriété. La loi (décret IRVE) garantit un « droit à la prise » permettant à tout copropriétaire ou locataire de faire installer une borne à ses frais, même sans vote en assemblée générale. L'installateur doit être certifié IRVE (Installation de Recharge pour Véhicule Électrique).`
              : `À ${ville.nom}, l'installation d'une borne à domicile est souvent plus simple qu'en grande métropole : les maisons individuelles avec garage ou place de parking privative permettent une installation directe. Pour les copropriétés, le « droit à la prise » garantit la possibilité d'installer une borne individuelle.`}
          </p>
          <p>
            Le coût d&apos;installation d&apos;une wallbox à {ville.nom} varie entre 1 200
            et 2 500 € (fourniture + pose), selon la puissance (7,4 ou 11 kW) et la
            complexité du raccordement. Ce montant est allégé par un crédit d&apos;impôt de
            300 € (75 % du coût, plafonné) et par l&apos;aide ADVENIR en copropriété
            (jusqu&apos;à 960 € par point de charge). En résidence individuelle, le retour
            sur investissement est généralement atteint en 2 à 3 ans grâce aux économies de
            carburant.
          </p>

          <h3>Préparer un long trajet depuis {ville.nom}</h3>
          <p>
            Partir en long trajet depuis {ville.nom} est devenu simple grâce à la
            densification du réseau autoroutier. La France compte plus de 150 000 points de
            charge publics, dont plus de 12 000 bornes rapides le long des grands axes.
            Avant le départ, programmez votre itinéraire sur A Better Route Planner (ABRP)
            en renseignant votre modèle de véhicule : l&apos;application calcule les arrêts
            de recharge optimaux en tenant compte de votre autonomie réelle, de la
            topographie et des conditions météo.
          </p>
          <p>
            Quelques conseils pour optimiser vos trajets : chargez à 80 % avant le départ
            (la charge de 80 à 100 % est beaucoup plus lente), privilégiez les arrêts de 20
            à 25 minutes sur des bornes rapides plutôt qu&apos;une longue charge unique, et
            préchauffez la batterie si votre véhicule le permet (fonction disponible sur
            Tesla, Hyundai, Kia, BMW et d&apos;autres). En hiver, prévoyez 20 à 30 %
            d&apos;autonomie en moins en raison du chauffage de l&apos;habitacle et du
            ralentissement de la chimie des batteries.
          </p>

          <h3>L&apos;avenir de la recharge à {ville.nom}</h3>
          <p>
            La dynamique de déploiement des bornes de recharge dans le {ville.departement}
            s&apos;inscrit dans l&apos;objectif national de 400 000 points de charge publics
            d&apos;ici 2030. Les prochaines années verront l&apos;arrivée de bornes
            ultra-rapides (350 kW) sur les axes principaux, le développement de la recharge
            bidirectionnelle (V2G) permettant de réinjecter l&apos;énergie de la voiture
            dans le réseau électrique, et l&apos;installation progressive de la recharge par
            induction sur certains parkings. La région {ville.region} accompagne cette
            transition avec des aides spécifiques pour les particuliers et les entreprises
            souhaitant s&apos;équiper.
          </p>
        </div>

        {/* ─── FAQ ─────────────────────────────────────────────── */}
        <section className="faq-section">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 24,
              marginBottom: 8,
            }}
          >
            Questions fréquentes — Recharge à {ville.nom}
          </h2>
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <h3 className="faq-question">{f.question}</h3>
              <p className="faq-answer">{f.answer}</p>
            </div>
          ))}
        </section>

        {/* ─── CTA ─────────────────────────────────────────────── */}
        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
          <Link href="/outils/simulateur-cout-recharge/" className="btn-primary">
            Simuler mon coût de recharge
          </Link>
          <Link href="/recharge/borne-de-recharge/" className="btn-secondary">
            Guide complet recharge
          </Link>
          <Link href="/recharge/borne-a-domicile/" className="btn-secondary">
            Installer une borne à domicile
          </Link>
        </div>

        <AuteurBio />

        {/* ─── SOURCES ─────────────────────────────────────────── */}
        <div className="bloc-sources">
          <h3>Sources & références</h3>
          <ul>
            <li>
              <a
                href="https://www.data.gouv.fr/fr/datasets/fichier-consolide-des-bornes-de-recharge-pour-vehicules-electriques/"
                target="_blank"
                rel="noopener noreferrer"
              >
                data.gouv.fr — Données IRVE consolidées
              </a>
            </li>
            <li>
              <a
                href="https://www.avere-france.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Avere-France — Baromètre des bornes
              </a>
            </li>
          </ul>
          <p className="date-maj">
            Dernière mise à jour :{" "}
            {new Date(ville.dateMAJ).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
            })}
          </p>
        </div>
      </article>
    </>
  );
}
