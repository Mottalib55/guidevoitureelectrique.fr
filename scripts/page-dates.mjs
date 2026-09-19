/**
 * page-dates.mjs — date réelle de dernière modification de chaque page (RECETTE §8.4).
 *
 * Lancé avant `next build` (prebuild). La date est celle du dernier commit qui a touché les
 * sources de la page : page.tsx pour une page fixe ; pour une route dynamique, son page.tsx et
 * le fichier de données qui la nourrit (src/data/*.ts). Jamais inventée ; le déploiement clone
 * tout l'historique (`fetch-depth: 0`). Écrit src/lib/page-dates.json :
 *   { routes: { "/route/": "AAAA-MM-JJ" }, patterns: [["^/modeles/[^/]+/$", "AAAA-MM-JJ"], …] }
 */
import { execFileSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const git = (...a) => execFileSync("git", a, { cwd: root, encoding: "utf8", maxBuffer: 1 << 28 });
// Clone superficiel (CI par défaut) : sans l'historique, toutes les pages prendraient la date du
// dernier commit. On le récupère ici plutôt que d'exiger `fetch-depth: 0` dans le workflow.
if (git("rev-parse", "--is-shallow-repository").trim() === "true") {
  try { git("fetch", "--unshallow", "--quiet"); } catch { console.warn("page-dates: historique git incomplet"); }
}
const last = new Map();
let date = "";
for (const line of git("log", "--format=@%cs", "--name-only").split("\n")) {
  if (line.startsWith("@")) date = line.slice(1);
  else if (line && !last.has(line)) last.set(line, date);
}
const newest = git("log", "-1", "--format=%cs").trim();
const today = new Date().toISOString().slice(0, 10);
// Un fichier modifié mais pas encore commité (build local) prend la date du jour.
const dirty = new Set(git("status", "--porcelain").split("\n").filter(Boolean).map((l) => l.slice(3).replace(/^"|"$/g, "")));
const dateOf = (...files) => files.reduce((best, f) => {
  const d = dirty.has(f) ? today : last.get(f) || "";
  return d > best ? d : best;
}, "") || newest;

// Données de chaque route dynamique
const DATA = {
  "/modeles/[slug]/": "src/data/modeles.ts",
  "/marques/[slug]/": "src/data/marques.ts",
  "/comparatifs/[slug]/": "src/data/comparatifs.ts",
  "/guides/[slug]/": "src/data/guides.ts",
  "/acheter/[slug]/": "src/data/acheter.ts",
  "/categories/[slug]/": "src/data/categories.ts",
  "/recharge/[slug]/": "src/data/recharge.ts",
  "/recharge/bornes/[slug]/": "src/data/villes.ts",
};

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : [relative(root, p).split(sep).join("/")];
});

const routes = {}, patterns = [];
for (const f of walk(join(root, "src/app"))) {
  if (!f.endsWith("/page.tsx") && f !== "src/app/page.tsx") continue;
  const route = f.replace("src/app", "").replace(/page\.tsx$/, "");
  if (route.includes("[")) {
    const re = "^" + route.replace(/\[[^\]]+\]/g, "[^/]+") + "$";
    patterns.push([re, dateOf(f, DATA[route] || "")]);
  } else routes[route] = dateOf(f);
}
writeFileSync(join(root, "src/lib/page-dates.json"), JSON.stringify({ routes, patterns }) + "\n");
console.log(`page-dates: ${Object.keys(routes).length} page(s) fixe(s), ${patterns.length} route(s) dynamique(s)`);
