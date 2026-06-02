"use client";

import { useState } from "react";
import Link from "next/link";
import { modeles } from "@/data/modeles";
import FinancementVE from "@/components/FinancementVE";
import Breadcrumb from "@/components/Breadcrumb";
import AuteurBio from "@/components/AuteurBio";

export default function PageFinancement() {
  const [selectedSlug, setSelectedSlug] = useState(modeles[0].slug);
  const selected = modeles.find((m) => m.slug === selectedSlug) || modeles[0];

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Outils", href: "/outils/financement/" },
          { name: "Calculateur de financement", href: "/outils/financement/" },
        ]}
      />

      <article className="section" style={{ paddingTop: 24, paddingBottom: 64 }}>
        <header style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 38px)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Calculateur de financement voiture électrique
          </h1>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 640, lineHeight: 1.5 }}>
            Sélectionnez votre modèle et comparez instantanément comptant, crédit, LOA et LLD.
            Tous les calculs utilisent les données du marché français 2026.
          </p>
        </header>

        {/* Sélecteur de modèle */}
        <div style={{ marginBottom: 24 }}>
          <label
            style={{
              display: "block",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--muted)",
              marginBottom: 8,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Choisir un modèle
          </label>
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            style={{
              width: "100%",
              maxWidth: 480,
              padding: "12px 16px",
              borderRadius: 12,
              border: "1.5px solid var(--line)",
              background: "var(--field)",
              color: "var(--ink)",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            {modeles
              .sort((a, b) => a.modele.localeCompare(b.modele))
              .map((m) => (
                <option key={m.slug} value={m.slug}>
                  {m.modele} — {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "EUR",
                    maximumFractionDigits: 0,
                  }).format(m.prixBase)}
                </option>
              ))}
          </select>
        </div>

        {/* Calculateur */}
        <FinancementVE
          key={selected.slug}
          modele={selected.modele}
          prixBase={selected.prixBase}
        />

        {/* Contenu rédactionnel */}
        <div className="prose" style={{ marginTop: 48 }}>
          <h2>Guide complet du financement d&apos;une voiture electrique en France en 2026</h2>
          <p>
            L&apos;achat d&apos;une voiture electrique represente un investissement significatif, avec des prix neufs allant de 18 900 euros pour une citadine comme la Leapmotor T03 a plus de 90 000 euros pour un SUV premium comme le Tesla Model X. Face a cette depense, le choix du mode de financement devient une decision strategique qui peut faire varier le cout total de plusieurs milliers d&apos;euros. Ce guide vous accompagne pas a pas dans votre reflexion, en comparant les quatre grandes formules disponibles sur le marche francais : achat comptant, credit auto, LOA et LLD.
          </p>
          <p>
            Le marche francais du financement automobile a considerablement evolue en 2025-2026. Les taux d&apos;interet, apres la hausse de 2023-2024, se stabilisent autour de 4,5 a 5,5 % pour un credit auto classique. Parallelement, de nombreuses banques et organismes de credit ont lance des offres specialement concues pour les vehicules electriques, avec des taux preferentiels pouvant descendre a 2,5 % : ce sont les fameux <strong>prets verts</strong>. Cette tendance reflete la volonte des etablissements financiers de soutenir la transition energetique, encouragee par la reglementation europeenne sur la finance durable.
          </p>

          <h2>L&apos;arbre de decision : quelle formule pour votre profil ?</h2>
          <p>
            Avant de plonger dans les details de chaque formule, posez-vous ces quatre questions fondamentales qui orienteront naturellement votre choix :
          </p>
          <ul>
            <li><strong>Disposez-vous de la tresorerie necessaire ?</strong> Si vous avez les fonds, l&apos;achat comptant est mathematiquement le moins couteux. Mais immobiliser 25 000 a 40 000 euros a un cout d&apos;opportunite : cet argent pourrait etre place et generer des rendements.</li>
            <li><strong>Souhaitez-vous etre proprietaire du vehicule ?</strong> Si oui, orientez-vous vers l&apos;achat comptant ou le credit. Si non, la LOA ou la LLD vous permettent de changer regulierement de vehicule sans vous soucier de la revente.</li>
            <li><strong>Combien de kilometres parcourez-vous par an ?</strong> Les contrats de location (LOA/LLD) fixent un forfait kilometrique. Au-dela, chaque kilometre supplementaire est facture entre 5 et 15 centimes. Les gros rouleurs (plus de 20 000 km/an) ont donc interet a devenir proprietaires.</li>
            <li><strong>Quelle est votre sensibilite au risque de decote ?</strong> Les vehicules electriques decotent actuellement plus vite que les thermiques (environ 48 % sur 4 ans contre 40 % pour un thermique). En LOA ou LLD, ce risque est transfere au loueur.</li>
          </ul>

          <h2>Achat comptant : la formule la plus economique en valeur absolue</h2>
          <p>
            L&apos;achat au comptant reste la solution la moins couteuse sur le papier : vous payez le prix du vehicule en une seule fois, sans aucun interet ni frais de dossier. Vous etes immediatement proprietaire et libre de revendre le vehicule quand vous le souhaitez, sans penalite. C&apos;est aussi la formule la plus simple administrativement : pas de mensualites a suivre, pas de contrat a gerer, pas de conditions sur le kilometrage ou l&apos;etat du vehicule.
          </p>
          <p>
            <strong>Scenario concret :</strong> Prenons l&apos;exemple d&apos;une Renault 5 E-Tech a 25 000 euros. Apres deduction du bonus ecologique de 4 000 euros, vous debourserez 21 000 euros en une seule fois. Sur 4 ans, avec une decote estimee a 48 %, la valeur residuelle sera d&apos;environ 13 000 euros. Votre cout net de possession (hors recharge, assurance et entretien) sera donc de 8 000 euros sur 4 ans, soit 167 euros par mois. C&apos;est le scenario le plus favorable.
          </p>
          <p>
            Cependant, l&apos;achat comptant a un cout d&apos;opportunite souvent neglige. Si vous placez ces 21 000 euros sur un livret d&apos;epargne a 3 % net, vous generez 630 euros de rendement annuel, soit 2 520 euros sur 4 ans. En integrant ce manque a gagner, l&apos;ecart avec un credit a taux bas se reduit considerablement. C&apos;est pourquoi certains experts financiers recommandent le credit meme quand on dispose de la tresorerie, a condition de trouver un taux inferieur au rendement de son epargne.
          </p>

          <h2>Credit auto : devenir proprietaire a credit, une strategie parfois gagnante</h2>
          <p>
            Le credit auto, ou pret affecte, est le mode de financement le plus repandu en France. Vous empruntez le montant necessaire (prix du vehicule moins votre apport et les aides) et remboursez des mensualites fixes sur une duree de 24 a 72 mois. Vous etes proprietaire du vehicule des la signature, meme si celui-ci sert de garantie au pret.
          </p>
          <p>
            En 2026, les taux moyens constates pour un credit auto classique se situent entre 4,5 % et 5,9 % TAEG selon la duree et l&apos;organisme preteur. Mais les <strong>prets verts</strong>, reserves aux vehicules a faibles emissions, offrent des taux nettement plus avantageux :
          </p>
          <ul>
            <li><strong>Credit Agricole - Pret Vert Auto :</strong> a partir de 2,9 % TAEG sur 48 mois</li>
            <li><strong>BNP Paribas - Credit Auto Electrique :</strong> a partir de 3,2 % TAEG</li>
            <li><strong>Caisse d&apos;Epargne - Pret Transition Energetique :</strong> a partir de 3,0 % TAEG</li>
            <li><strong>Cetelem - Credit Mobilite Verte :</strong> a partir de 3,5 % TAEG</li>
            <li><strong>Boursorama - Pret Personnel (sans affectation) :</strong> a partir de 2,5 % TAEG, utilisable pour un VE</li>
          </ul>
          <p>
            <strong>Scenario concret :</strong> Pour une Peugeot e-308 a 37 000 euros, avec un apport de 5 000 euros et un bonus de 4 000 euros, vous empruntez 28 000 euros. A un taux vert de 3,0 % sur 48 mois, vos mensualites seront de 620 euros et le cout total du credit s&apos;elevera a 29 760 euros, soit 1 760 euros d&apos;interets. Sur la meme periode, le vehicule vaudra encore environ 19 240 euros (decote de 48 %). Votre cout net de possession : 37 000 - 4 000 + 1 760 - 19 240 = 15 520 euros sur 4 ans, soit 323 euros par mois.
          </p>

          <h3>Les pieges a eviter avec le credit auto</h3>
          <p>
            Mefiez-vous des credits a <strong>mensualites majorees en fin de contrat</strong> (credit ballon ou credit avec valeur residuelle garantie). Ces formules hybrides entre credit et LOA proposent des mensualites reduites mais imposent un gros versement final si vous souhaitez conserver le vehicule. Verifiez aussi les <strong>frais de remboursement anticipe</strong> : la loi les plafonne a 1 % du capital restant du (ou 0,5 % si le credit restant est inferieur a 12 mois), mais certains contrats prevoient des indemnites supplementaires.
          </p>

          <h2>LOA (Location avec Option d&apos;Achat) : la flexibilite a un prix</h2>
          <p>
            La LOA, parfois appelee leasing, est devenue le mode de financement prefere des Francais pour les vehicules neufs. Le principe : vous versez un premier loyer majore (generalement entre 10 % et 30 % du prix du vehicule), puis des mensualites fixes pendant 24 a 60 mois. En fin de contrat, vous avez trois options :
          </p>
          <ul>
            <li><strong>Restituer le vehicule</strong> sans rien devoir (hors eventuels frais de remise en etat ou kilometres excedentaires)</li>
            <li><strong>Lever l&apos;option d&apos;achat</strong> au prix residuel fixe au depart du contrat, et devenir proprietaire</li>
            <li><strong>Enchainer sur un nouveau contrat</strong> avec un vehicule plus recent</li>
          </ul>
          <p>
            L&apos;avantage principal de la LOA pour les vehicules electriques est la <strong>protection contre le risque de decote</strong>. La technologie des batteries evolue rapidement, et un vehicule achete aujourd&apos;hui pourrait etre nettement surpasse dans 3 ou 4 ans par de nouveaux modeles offrant plus d&apos;autonomie et une charge plus rapide. Avec la LOA, ce risque est porte par le loueur, pas par vous.
          </p>
          <p>
            <strong>Scenario concret :</strong> Pour un Hyundai Ioniq 5 a 45 000 euros, une LOA typique sur 48 mois avec 15 000 km/an pourrait se presenter ainsi : premier loyer de 6 000 euros, puis 47 mensualites de 450 euros, option d&apos;achat finale de 18 000 euros. Cout total si vous restituez : 6 000 + (47 x 450) = 27 150 euros. Cout total si vous levez l&apos;option : 45 150 euros.
          </p>

          <h3>Les points de vigilance en LOA</h3>
          <p>
            Le contrat de LOA fixe un <strong>forfait kilometrique annuel</strong> (souvent 10 000, 15 000 ou 20 000 km/an). Chaque kilometre excedentaire est facture a la restitution, generalement entre 8 et 15 centimes. Sur un contrat de 4 ans, une sous-estimation de 5 000 km/an peut engendrer un surcout de 4 000 a 12 000 euros a la restitution. Estimez soigneusement votre kilometrage reel avant de signer.
          </p>
          <p>
            Attention egalement aux <strong>frais de remise en etat</strong>. Lors de la restitution, le vehicule est inspecte selon une grille d&apos;usure. Les rayures depassant 5 cm, les impacts sur le pare-brise, les sieges taches ou dechires, les jantes endommagees : tout ecart par rapport a l&apos;usure normale est facture. Prevoyez un budget de remise en etat de 500 a 1 500 euros en fin de contrat pour eviter les mauvaises surprises.
          </p>

          <h2>LLD (Location Longue Duree) : la tranquillite d&apos;esprit maximale</h2>
          <p>
            La LLD fonctionne comme la LOA, mais <strong>sans option d&apos;achat</strong> : vous restituez systematiquement le vehicule en fin de contrat. En contrepartie, les loyers sont generalement legerement inferieurs, et surtout, les contrats de LLD incluent frequemment des services additionnels : entretien, assistance 24h/24, pneumatiques, voire assurance.
          </p>
          <p>
            La LLD est historiquement le mode de financement prefere des entreprises, car les loyers sont entierement deductibles du resultat fiscal (dans la limite de plafonds qui ont ete revus a la hausse pour les vehicules electriques : 30 000 euros d&apos;amortissement deductible pour un VE contre 18 300 euros pour un vehicule emettant moins de 20 g/km de CO2). Pour les particuliers, la LLD seduit ceux qui veulent une <strong>depense mensuelle fixe et previsible</strong>, sans aucune surprise.
          </p>
          <p>
            <strong>Scenario concret pour une entreprise :</strong> Un Tesla Model 3 en LLD sur 36 mois / 20 000 km/an, tout compris (entretien, assistance, pneumatiques), coute environ 650 euros HT par mois. Pour l&apos;entreprise, ce loyer est integralement deductible. En ajoutant l&apos;exoneration de TVS (taxe sur les vehicules de societe) dont beneficient les vehicules electriques et l&apos;amortissement fiscal majore, le cout reel apres avantage fiscal est significativement reduit.
          </p>

          <h2>Tableau comparatif synthetique des 4 formules</h2>
          <p>
            Pour faciliter votre decision, voici un recapitulatif des avantages et inconvenients de chaque formule, adaptee au contexte des vehicules electriques en 2026 :
          </p>
          <ul>
            <li><strong>Comptant :</strong> Cout total le plus bas. Aucune mensualite. Pas de contrainte de kilometrage. Mais tresorerie immobilisee et risque de decote porte par vous.</li>
            <li><strong>Credit auto :</strong> Vous etes proprietaire. Possibilite de pret vert a taux reduit. Revente libre. Mais cout des interets et risque de decote porte par vous.</li>
            <li><strong>LOA :</strong> Mensualites maitrisees. Possibilite de changer de vehicule regulierement. Protection contre la decote. Mais cout total souvent superieur et contraintes kilometriques.</li>
            <li><strong>LLD :</strong> Tout compris, budget previsible. Ideal pour les entreprises (avantages fiscaux). Mais aucune possibilite de devenir proprietaire et contraintes kilometriques.</li>
          </ul>

          <h2>Implications fiscales specifiques aux vehicules electriques</h2>
          <p>
            Le choix du financement a des implications fiscales non negligeables, particulierement pour les professionnels et les entreprises. Voici les principaux avantages fiscaux lies aux VE en France en 2026 :
          </p>
          <ul>
            <li><strong>Exoneration de la taxe sur les vehicules de societe (TVS)</strong> pour les vehicules electriques dont les emissions sont inferieures a 20 g/km de CO2. Cela represente une economie de 1 000 a 5 000 euros par an selon le vehicule.</li>
            <li><strong>Amortissement fiscal majore</strong> : le plafond d&apos;amortissement est de 30 000 euros pour un VE, contre 18 300 euros pour un vehicule thermique peu emetteur. Sur 5 ans, cela peut representer un avantage fiscal de 2 000 a 4 000 euros (selon le taux d&apos;IS).</li>
            <li><strong>Avantage en nature reduit</strong> pour les salaries disposant d&apos;un vehicule de fonction electrique : la valeur de l&apos;avantage en nature est reduite de 50 % (dans la limite de 1 800 euros par an), et la prise en charge de la recharge par l&apos;employeur est exoneree d&apos;impot sur le revenu et de cotisations sociales.</li>
            <li><strong>Recuperation de la TVA sur l&apos;electricite</strong> : contrairement au carburant (TVA recuperable a 80 % pour le gazole, 0 % pour l&apos;essence), l&apos;electricite utilisee pour la recharge beneficie d&apos;une TVA integralement recuperable pour les professionnels.</li>
          </ul>

          <h2>Le leasing social : une option pour les menages modestes</h2>
          <p>
            Depuis 2024, le gouvernement francais a mis en place le <strong>leasing social</strong>, un dispositif permettant aux menages les plus modestes de louer une voiture electrique neuve a partir de 100 euros par mois. Ce dispositif, reconduit en 2025 et 2026, s&apos;adresse aux foyers dont le revenu fiscal de reference par part est inferieur a 15 400 euros.
          </p>
          <p>
            Les vehicules proposes dans le cadre du leasing social sont assembles en Europe et respectent un score environnemental minimum. En 2026, les modeles eligibles incluent notamment la Renault 5 E-Tech, la Citroen e-C3, la Fiat 500e et la Peugeot e-208. Les contrats sont conclus en LOA sur 36 mois avec un forfait de 12 000 km/an. L&apos;operation est encadree par l&apos;Etat, avec des lots attribues aux constructeurs participants.
          </p>

          <h2>Conseils pratiques pour negocier votre financement</h2>
          <p>
            Quel que soit le mode de financement choisi, quelques strategies vous permettront d&apos;optimiser votre budget :
          </p>
          <ul>
            <li><strong>Comparez toujours au moins 3 offres</strong> provenant de sources differentes : le concessionnaire, votre banque principale, et un courtier en ligne. Les ecarts de taux peuvent atteindre 2 points de pourcentage.</li>
            <li><strong>Negociez le prix du vehicule avant de parler financement</strong>. Les concessionnaires recuperent souvent une partie de la remise accordee sur le vehicule via une marge sur le financement.</li>
            <li><strong>Privilegiez un apport de 20 a 30 %</strong> pour obtenir les meilleurs taux et reduire le cout total du financement.</li>
            <li><strong>Integrez le bonus ecologique et la prime a la conversion</strong> dans votre plan de financement : ces aides reduisent directement le montant a financer.</li>
            <li><strong>Si vous hesitez entre LOA et credit</strong>, comparez sur la base d&apos;un cout total identique (memes duree, kilometrage et apport). Le credit est generalement moins cher si vous gardez le vehicule, la LOA si vous le restituez.</li>
          </ul>

          <h2>Hypotheses du calculateur</h2>
          <p>
            Notre calculateur utilise des valeurs calibrees sur le marche francais 2026 :
            TAEG credit de 4,9 % (taux moyen constate pour un credit auto standard), decote VE de 48 % sur 4 ans
            (les vehicules electriques decotent encore plus vite que les thermiques en raison de l&apos;evolution rapide de la technologie),
            bonus ecologique de 4 000 euros (bareme standard 2026), apport de 10 % du prix du vehicule,
            12 000 km/an (moyenne francaise) et une duree de 48 mois.
          </p>
          <p>
            Le <strong>cout net reel</strong> integre l&apos;ensemble des depenses sur la periode choisie : acquisition
            (ou location), recharge (basee sur une consommation moyenne et un tarif electricite heures creuses),
            assurance (forfait annuel moyen pour un VE), entretien (reduit par rapport a un thermique), et deduit la valeur de revente pour
            les formules ou vous etes proprietaire (comptant et credit). Cela permet une
            comparaison equitable entre les 4 options sur une base identique.
          </p>
          <p>
            <strong>Remarque importante :</strong> Ces calculs sont des estimations destinees a orienter votre reflexion. Les chiffres reels dependront de nombreux facteurs : votre profil d&apos;assure, votre consommation electrique reelle, les conditions du marche de l&apos;occasion au moment de la revente, et les eventuelles evolutions reglementaires. Nous vous recommandons de solliciter des devis personnalises aupres de plusieurs etablissements financiers avant de vous engager.
          </p>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
          <Link href="/acheter/loa-leasing/" className="btn-primary">
            En savoir plus sur la LOA/LLD
          </Link>
          <Link href="/acheter/aides-et-bonus/" className="btn-secondary">
            Vérifier les aides disponibles
          </Link>
        </div>

        <AuteurBio />
        <div style={{ marginTop: 48, padding: "24px 28px", border: "1.5px solid var(--line)", borderRadius: 16, background: "var(--paper)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12, color: "var(--ink)" }}>Sources et références</h3>
          <ul style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>Banque de France — Taux effectifs moyens des crédits auto, T1 2026</li>
            <li>Ministère de la Transition écologique — Barème du bonus écologique 2026</li>
            <li>Argus — Valeurs résiduelles et décotes des véhicules électriques, barème 2026</li>
            <li>ASP (Agence de Services et de Paiement) — Conditions d&apos;attribution du bonus et de la prime à la conversion</li>
            <li>Fédération Bancaire Française — Statistiques des crédits auto et LOA, 2025</li>
            <li>Données constructeurs — Grilles tarifaires LOA/LLD officielles</li>
          </ul>
        </div>
      </article>
    </>
  );
}
