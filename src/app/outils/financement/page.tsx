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
                  {m.modele}, {new Intl.NumberFormat("fr-FR", {
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
          <h2>Guide complet du financement d&apos;une voiture électrique en France en 2026</h2>
          <p>
            L&apos;achat d&apos;une voiture électrique représente un investissement significatif, avec des prix neufs allant de 18 900 euros pour une citadine comme la Leapmotor T03 a plus de 90 000 euros pour un SUV premium comme le Tesla Model X. Face a cette dépense, le choix du mode de financement devient une décision stratégique qui peut faire varier le coût total de plusieurs milliers d&apos;euros. Ce guide vous accompagne pas a pas dans votre réflexion, en comparant les quatre grandes formules disponibles sur le marché français : achat comptant, crédit auto, LOA et LLD.
          </p>
          <p>
            Le marché français du financement automobile a considérablement évolué en 2025-2026. Les taux d&apos;intérêt, après la hausse de 2023-2024, se stabilisent autour de 4,5 a 5,5 % pour un crédit auto classique. Parallelement, de nombreuses banques et organismes de crédit ont lancé des offres specialement concues pour les véhicules électriques, avec des taux préférentiels pouvant descendre a 2,5 % : ce sont les fameux <strong>prêts verts</strong>. Cette tendance reflète la volonte des établissements financiers de soutenir la transition énergétique, encouragee par la réglementation européenne sur la finance durable.
          </p>

          <h2>L&apos;arbre de décision : quelle formule pour votre profil ?</h2>
          <p>
            Avant de plonger dans les détails de chaque formule, posez-vous ces quatre questions fondamentales qui orienteront naturellement votre choix :
          </p>
          <ul>
            <li><strong>Disposez-vous de la trésorerie nécessaire ?</strong> Si vous avez les fonds, l&apos;achat comptant est mathematiquement le moins coûteux. Mais immobiliser 25 000 a 40 000 euros a un coût d&apos;opportunité : cet argent pourrait être place et générer des rendements.</li>
            <li><strong>Souhaitez-vous être propriétaire du véhicule ?</strong> Si oui, orientez-vous vers l&apos;achat comptant ou le crédit. Si non, la LOA ou la LLD vous permettent de changer régulièrement de véhicule sans vous soucier de la revente.</li>
            <li><strong>Combien de kilomètres parcourez-vous par an ?</strong> Les contrats de location (LOA/LLD) fixent un forfait kilometrique. Au-dela, chaque kilomètre supplémentaire est facture entre 5 et 15 centimes. Les gros rouleurs (plus de 20 000 km/an) ont donc intérêt a devenir propriétaires.</li>
            <li><strong>Quelle est votre sensibilite au risque de décote ?</strong> Les véhicules électriques decotent actuellement plus vite que les thermiques (environ 48 % sur 4 ans contre 40 % pour un thermique). En LOA ou LLD, ce risque est transféré au loueur.</li>
          </ul>

          <h2>Achat comptant : la formule la plus économique en valeur absolue</h2>
          <p>
            L&apos;achat au comptant reste la solution la moins coûteuse sur le papier : vous payez le prix du véhicule en une seule fois, sans aucun intérêt ni frais de dossier. Vous êtes immédiatement propriétaire et libre de revendre le véhicule quand vous le souhaitez, sans pénalité. C&apos;est aussi la formule la plus simple administrativement : pas de mensualités a suivre, pas de contrat a gérer, pas de conditions sur le kilométrage ou l&apos;état du véhicule.
          </p>
          <p>
            <strong>Scénario concret :</strong> Prenons l&apos;exemple d&apos;une Renault 5 E-Tech a 25 000 euros. Après déduction du bonus écologique de 4 000 euros, vous débourserez 21 000 euros en une seule fois. Sur 4 ans, avec une décote estimée a 48 %, la valeur résiduelle sera d&apos;environ 13 000 euros. Votre coût net de possession (hors recharge, assurance et entretien) sera donc de 8 000 euros sur 4 ans, soit 167 euros par mois. C&apos;est le scénario le plus favorable.
          </p>
          <p>
            Cependant, l&apos;achat comptant a un coût d&apos;opportunité souvent négligé. Si vous placez ces 21 000 euros sur un livret d&apos;épargne a 3 % net, vous generez 630 euros de rendement annuel, soit 2 520 euros sur 4 ans. En intégrant ce manque a gagner, l&apos;écart avec un crédit a taux bas se réduit considérablement. C&apos;est pourquoi certains experts financiers recommandent le crédit même quand on dispose de la trésorerie, a condition de trouver un taux inférieur au rendement de son epargne.
          </p>

          <h2>Crédit auto : devenir propriétaire a crédit, une stratégie parfois gagnante</h2>
          <p>
            Le crédit auto, ou prêt affecté, est le mode de financement le plus répandu en France. Vous empruntez le montant nécessaire (prix du véhicule moins votre apport et les aides) et remboursez des mensualités fixés sur une durée de 24 a 72 mois. Vous êtes propriétaire du véhicule des la signature, même si celui-ci sert de garantie au pret.
          </p>
          <p>
            En 2026, les taux moyens constatés pour un crédit auto classique se situent entre 4,5 % et 5,9 % TAEG selon la durée et l&apos;organisme preteur. Mais les <strong>prêts verts</strong>, réservés aux véhicules a faibles émissions, offrent des taux nettement plus avantageux :
          </p>
          <ul>
            <li><strong>Crédit Agricole - Pret Vert Auto :</strong> a partir de 2,9 % TAEG sur 48 mois</li>
            <li><strong>BNP Paribas - Crédit Auto Électrique :</strong> a partir de 3,2 % TAEG</li>
            <li><strong>Caisse d&apos;Épargne - Pret Transition Energetique :</strong> a partir de 3,0 % TAEG</li>
            <li><strong>Cetelem - Crédit Mobilite Verte :</strong> a partir de 3,5 % TAEG</li>
            <li><strong>Boursorama - Pret Personnel (sans affectation) :</strong> a partir de 2,5 % TAEG, utilisable pour un VE</li>
          </ul>
          <p>
            <strong>Scénario concret :</strong> Pour une Peugeot e-308 a 37 000 euros, avec un apport de 5 000 euros et un bonus de 4 000 euros, vous empruntez 28 000 euros. A un taux vert de 3,0 % sur 48 mois, vos mensualités seront de 620 euros et le coût total du crédit s&apos;elevera a 29 760 euros, soit 1 760 euros d&apos;intérêts. Sur la même période, le véhicule vaudra encore environ 19 240 euros (décote de 48 %). Votre coût net de possession : 37 000 - 4 000 + 1 760 - 19 240 = 15 520 euros sur 4 ans, soit 323 euros par mois.
          </p>

          <h3>Les pieges a éviter avec le crédit auto</h3>
          <p>
            Mefiez-vous des credits a <strong>mensualités majorées en fin de contrat</strong> (crédit ballon ou crédit avec valeur résiduelle garantie). Ces formules hybrides entre crédit et LOA proposent des mensualités réduites mais imposent un gros versement final si vous souhaitez conserver le véhicule. Vérifiez aussi les <strong>frais de remboursement anticipe</strong> : la loi les plafonné a 1 % du capital restant du (ou 0,5 % si le crédit restant est inférieur a 12 mois), mais certains contrats prévoient des indemnites supplémentaires.
          </p>

          <h2>LOA (Location avec Option d&apos;Achat) : la flexibilite a un prix</h2>
          <p>
            La LOA, parfois appelee leasing, est devenue le mode de financement préféré des Francais pour les véhicules neufs. Le principe : vous versez un premier loyer majore (généralement entre 10 % et 30 % du prix du véhicule), puis des mensualités fixés pendant 24 a 60 mois. En fin de contrat, vous avez trois options :
          </p>
          <ul>
            <li><strong>Restituer le véhicule</strong> sans rien devoir (hors éventuels frais de remise en état ou kilomètres excédentaires)</li>
            <li><strong>Lever l&apos;option d&apos;achat</strong> au prix residuel fixé au depart du contrat, et devenir propriétaire</li>
            <li><strong>Enchainer sur un nouveau contrat</strong> avec un véhicule plus récent</li>
          </ul>
          <p>
            L&apos;avantage principal de la LOA pour les véhicules électriques est la <strong>protection contre le risque de décote</strong>. La technologie des batteries évolué rapidement, et un véhicule acheté aujourd&apos;hui pourrait être nettement surpasse dans 3 ou 4 ans par de nouveaux modèles offrant plus d&apos;autonomie et une charge plus rapide. Avec la LOA, ce risque est porte par le loueur, pas par vous.
          </p>
          <p>
            <strong>Scénario concret :</strong> Pour un Hyundai Ioniq 5 a 45 000 euros, une LOA typique sur 48 mois avec 15 000 km/an pourrait se présenter ainsi : premier loyer de 6 000 euros, puis 47 mensualités de 450 euros, option d&apos;achat finale de 18 000 euros. Cout total si vous restituez : 6 000 + (47 x 450) = 27 150 euros. Cout total si vous levez l&apos;option : 45 150 euros.
          </p>

          <h3>Les points de vigilance en LOA</h3>
          <p>
            Le contrat de LOA fixé un <strong>forfait kilometrique annuel</strong> (souvent 10 000, 15 000 ou 20 000 km/an). Chaque kilomètre excédentaire est facture a la restitution, généralement entre 8 et 15 centimes. Sur un contrat de 4 ans, une sous-estimation de 5 000 km/an peut engendrer un surcoût de 4 000 a 12 000 euros a la restitution. Estimez soigneusement votre kilométrage réel avant de signer.
          </p>
          <p>
            Attention également aux <strong>frais de remise en état</strong>. Lors de la restitution, le véhicule est inspecte selon une grille d&apos;usure. Les rayures dépassant 5 cm, les impacts sur le pare-brise, les sièges taches ou déchirés, les jantes endommagées : tout écart par rapport a l&apos;usure normale est facture. Prevoyez un budget de remise en état de 500 a 1 500 euros en fin de contrat pour éviter les mauvaises surprises.
          </p>

          <h2>LLD (Location Longue Duree) : la tranquillite d&apos;esprit maximale</h2>
          <p>
            La LLD fonctionne comme la LOA, mais <strong>sans option d&apos;achat</strong> : vous restituez systematiquement le véhicule en fin de contrat. En contrepartie, les loyers sont généralement légèrement inférieurs, et surtout, les contrats de LLD incluent fréquemment des services additionnels : entretien, assistance 24h/24, pneumatiques, voire assurance.
          </p>
          <p>
            La LLD est historiquement le mode de financement préféré des entreprises, car les loyers sont entièrement deductibles du résultat fiscal (dans la limite de plafonds qui ont été revus a la hausse pour les véhicules électriques : 30 000 euros d&apos;amortissement déductible pour un VE contre 18 300 euros pour un véhicule émettant moins de 20 g/km de CO2). Pour les particuliers, la LLD séduit ceux qui veulent une <strong>dépense mensuelle fixe et prévisible</strong>, sans aucune surprise.
          </p>
          <p>
            <strong>Scénario concret pour une entreprise :</strong> Un Tesla Model 3 en LLD sur 36 mois / 20 000 km/an, tout compris (entretien, assistance, pneumatiques), coute environ 650 euros HT par mois. Pour l&apos;entreprise, ce loyer est intégralement déductible. En ajoutant l&apos;exonération de TVS (taxe sur les véhicules de société) dont bénéficient les véhicules électriques et l&apos;amortissement fiscal majore, le coût réel après avantage fiscal est significativement réduit.
          </p>

          <h2>Tableau comparatif synthétique des 4 formules</h2>
          <p>
            Pour faciliter votre décision, voici un récapitulatif des avantages et inconvenients de chaque formule, adaptée au contexte des véhicules électriques en 2026 :
          </p>
          <ul>
            <li><strong>Comptant :</strong> Cout total le plus bas. Aucune mensualite. Pas de contrainte de kilométrage. Mais trésorerie immobilisée et risque de décote porte par vous.</li>
            <li><strong>Crédit auto :</strong> Vous êtes propriétaire. Possibilite de prêt vert a taux réduit. Revente libre. Mais coût des intérêts et risque de décote porte par vous.</li>
            <li><strong>LOA :</strong> Mensualites maîtrisées. Possibilite de changer de véhicule régulièrement. Protection contre la décote. Mais coût total souvent supérieur et contraintes kilometriques.</li>
            <li><strong>LLD :</strong> Tout compris, budget previsible. Ideal pour les entreprises (avantages fiscaux). Mais aucune possibilité de devenir propriétaire et contraintes kilometriques.</li>
          </ul>

          <h2>Implications fiscales spécifiques aux véhicules électriques</h2>
          <p>
            Le choix du financement a des implications fiscales non négligeables, particulièrement pour les professionnels et les entreprises. Voici les principaux avantages fiscaux lies aux VE en France en 2026 :
          </p>
          <ul>
            <li><strong>Exonération de la taxe sur les véhicules de société (TVS)</strong> pour les véhicules électriques dont les émissions sont inférieures a 20 g/km de CO2. Cela représente une économie de 1 000 a 5 000 euros par an selon le véhicule.</li>
            <li><strong>Amortissement fiscal majore</strong> : le plafond d&apos;amortissement est de 30 000 euros pour un VE, contre 18 300 euros pour un véhicule thermique peu emetteur. Sur 5 ans, cela peut représenter un avantage fiscal de 2 000 a 4 000 euros (selon le taux d&apos;IS).</li>
            <li><strong>Avantage en nature réduit</strong> pour les salariés disposant d&apos;un véhicule de fonction électrique : la valeur de l&apos;avantage en nature est réduite de 50 % (dans la limite de 1 800 euros par an), et la prise en charge de la recharge par l&apos;employeur est exonérée d&apos;impôt sur le revenu et de cotisations sociales.</li>
            <li><strong>Recuperation de la TVA sur l&apos;électricité</strong> : contrairement au carburant (TVA récupérable a 80 % pour le gazole, 0 % pour l&apos;essence), l&apos;électricité utilisée pour la recharge bénéficie d&apos;une TVA intégralement récupérable pour les professionnels.</li>
          </ul>

          <h2>Le leasing social : une option pour les ménages modestes</h2>
          <p>
            Depuis 2024, le gouvernement français a mis en place le <strong>leasing social</strong>, un dispositif permettant aux ménages les plus modestes de louer une voiture électrique neuve a partir de 100 euros par mois. Ce dispositif, reconduit en 2025 et 2026, s&apos;adresse aux foyers dont le revenu fiscal de référence par part est inférieur a 15 400 euros.
          </p>
          <p>
            Les véhicules proposés dans le cadre du leasing social sont assemblés en Europe et respectent un score environnemental minimum. En 2026, les modèles éligibles incluent notamment la Renault 5 E-Tech, la Citroen e-C3, la Fiat 500e et la Peugeot e-208. Les contrats sont conclus en LOA sur 36 mois avec un forfait de 12 000 km/an. L&apos;operation est encadrée par l&apos;État, avec des lots attribues aux constructeurs participants.
          </p>

          <h2>Conseils pratiques pour négocier votre financement</h2>
          <p>
            Quel que soit le mode de financement choisi, quelques stratégies vous permettront d&apos;optimiser votre budget :
          </p>
          <ul>
            <li><strong>Comparez toujours au moins 3 offres</strong> provenant de sources différentes : le concessionnaire, votre banque principale, et un courtier en ligne. Les écarts de taux peuvent atteindre 2 points de pourcentage.</li>
            <li><strong>Negociez le prix du véhicule avant de parler financement</strong>. Les concessionnaires recuperent souvent une partie de la remise accordée sur le véhicule via une marge sur le financement.</li>
            <li><strong>Privilégiez un apport de 20 a 30 %</strong> pour obtenir les meilleurs taux et réduire le coût total du financement.</li>
            <li><strong>Integrez le bonus écologique et la prime a la conversion</strong> dans votre plan de financement : ces aides reduisent directement le montant a financer.</li>
            <li><strong>Si vous hésitez entre LOA et crédit</strong>, comparez sur la base d&apos;un coût total identique (memes durée, kilométrage et apport). Le crédit est généralement moins cher si vous gardez le véhicule, la LOA si vous le restituez.</li>
          </ul>

          <h2>Hypotheses du calculateur</h2>
          <p>
            Notre calculateur utilisé des valeurs calibrées sur le marché français 2026 :
            TAEG crédit de 4,9 % (taux moyen constate pour un crédit auto standard), décote VE de 48 % sur 4 ans
            (les véhicules électriques decotent encore plus vite que les thermiques en raison de l&apos;évolution rapide de la technologie),
            bonus écologique de 4 000 euros (barème standard 2026), apport de 10 % du prix du véhicule,
            12 000 km/an (moyenne française) et une durée de 48 mois.
          </p>
          <p>
            Le <strong>coût net réel</strong> intégré l&apos;ensemble des dépenses sur la période choisie : acquisition
            (ou location), recharge (basée sur une consommation moyenne et un tarif électricité heures creuses),
            assurance (forfait annuel moyen pour un VE), entretien (réduit par rapport a un thermique), et déduit la valeur de revente pour
            les formules ou vous êtes propriétaire (comptant et crédit). Cela permet une
            comparaison équitable entre les 4 options sur une base identique.
          </p>
          <p>
            <strong>Remarque importante :</strong> Ces calculs sont des estimations destinées a orienter votre reflexion. Les chiffres réels dependront de nombreux facteurs : votre profil d&apos;assure, votre consommation électrique réelle, les conditions du marché de l&apos;occasion au moment de la revente, et les éventuelles évolutions réglementaires. Nous vous recommandons de solliciter des devis personnalises auprès de plusieurs établissements financiers avant de vous engager.
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
            <li>Banque de France : Taux effectifs moyens des crédits auto, T1 2026</li>
            <li>Ministère de la Transition écologique : Barème du bonus écologique 2026</li>
            <li>Argus : Valeurs résiduelles et décotes des véhicules électriques, barème 2026</li>
            <li>ASP (Agence de Services et de Paiement) : Conditions d&apos;attribution du bonus et de la prime à la conversion</li>
            <li>Fédération Bancaire Française : Statistiques des crédits auto et LOA, 2025</li>
            <li>Données constructeurs : Grilles tarifaires LOA/LLD officielles</li>
          </ul>
        </div>
      </article>
    </>
  );
}