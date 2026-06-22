/**
 * SEO Snippet Audit Script
 *
 * Checks that all page titles are 50-60 characters
 * and meta descriptions are 150-160 characters.
 *
 * Run with: npx tsx scripts/audit-seo-snippets.ts
 */

import { comparatifs } from "../src/data/comparatifs";
import { pagesGuides } from "../src/data/guides";
import { pagesAcheter } from "../src/data/acheter";
import { pagesRecharge } from "../src/data/recharge";
import { categories } from "../src/data/categories";
import { modeles } from "../src/data/modeles";
import { marques } from "../src/data/marques";
import { villes } from "../src/data/villes";

interface Snippet {
  path: string;
  title: string;
  description: string;
}

const snippets: Snippet[] = [];

// ── Static pages ──
snippets.push({
  path: "/",
  title: "Voiture électrique 2026 : comparatif, prix et autonomie",
  description:
    "Comparez les voitures électriques 2026 : prix, autonomie réelle, recharge rapide, bonus écologique. Fiches détaillées, simulateurs LOA/LLD et guides d'achat.",
});

// ── Comparatifs ──
for (const c of comparatifs) {
  snippets.push({
    path: `/comparatifs/${c.slug}/`,
    title: c.titre,
    description: c.metaDescription,
  });
}

// ── Guides ──
for (const g of pagesGuides) {
  snippets.push({
    path: `/guides/${g.slug}/`,
    title: g.titre,
    description: g.metaDescription,
  });
}

// ── Acheter ──
for (const a of pagesAcheter) {
  snippets.push({
    path: `/acheter/${a.slug}/`,
    title: a.titre,
    description: a.metaDescription,
  });
}

// ── Recharge ──
for (const r of pagesRecharge) {
  snippets.push({
    path: `/recharge/${r.slug}/`,
    title: r.titre,
    description: r.metaDescription,
  });
}

// ── Categories ──
for (const c of categories) {
  snippets.push({
    path: `/categories/${c.slug}/`,
    title: c.titre,
    description: c.metaDescription,
  });
}

// ── Modeles (title generated from data) ──
for (const m of modeles) {
  const title = `${m.marque} ${m.modele} : prix, autonomie, fiche complète`;
  const desc = `Fiche détaillée ${m.marque} ${m.modele} ${m.annee} : prix à partir de ${m.prixBase.toLocaleString("fr-FR")} €, autonomie réelle ${m.autonomieReelle} km, recharge rapide ${m.chargeRapideKw} kW. Avis, points forts et comparatif.`;
  snippets.push({ path: `/modeles/${m.slug}/`, title, description: desc });
}

// ── Marques ──
for (const m of marques) {
  const title = `${m.nom} électrique : modèles, prix et avis`;
  const desc = m.description;
  snippets.push({ path: `/marques/${m.slug}/`, title, description: desc });
}

// ── Villes (bornes) ──
for (const v of villes) {
  const title = `Bornes de recharge à ${v.nom} : carte et tarifs`;
  const desc = v.metaDescription;
  snippets.push({ path: `/recharge/bornes/${v.slug}/`, title, description: desc });
}

// ── Audit ──
const TITLE_MIN = 50;
const TITLE_MAX = 60;
const DESC_MIN = 150;
const DESC_MAX = 160;

let issues = 0;

console.log("=== SEO Snippet Audit ===\n");

for (const s of snippets) {
  const tLen = s.title.length;
  const dLen = s.description.length;
  const titleOk = tLen >= TITLE_MIN && tLen <= TITLE_MAX;
  const descOk = dLen >= DESC_MIN && dLen <= DESC_MAX;

  if (!titleOk || !descOk) {
    issues++;
    console.log(`\x1b[33m${s.path}\x1b[0m`);
    if (!titleOk) {
      const status = tLen < TITLE_MIN ? "TOO SHORT" : "TOO LONG";
      console.log(
        `  Title (${tLen} chars, ${status}): ${s.title}`
      );
    }
    if (!descOk) {
      const status = dLen < DESC_MIN ? "TOO SHORT" : "TOO LONG";
      console.log(
        `  Description (${dLen} chars, ${status}): ${s.description.slice(0, 80)}...`
      );
    }
    console.log();
  }
}

console.log(`\nTotal pages audited: ${snippets.length}`);
console.log(`Pages with issues: ${issues}`);
console.log(`Pages OK: ${snippets.length - issues}`);

if (issues > 0) {
  console.log(`\n\x1b[33mTarget: titles ${TITLE_MIN}-${TITLE_MAX} chars, descriptions ${DESC_MIN}-${DESC_MAX} chars\x1b[0m`);
}
