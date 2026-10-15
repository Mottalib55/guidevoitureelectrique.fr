import data from "./page-dates.json";

// Date réelle de dernière modification d'une page (scripts/page-dates.mjs, RECETTE §8.4).
const { routes, patterns } = data as unknown as { routes: Record<string, string>; patterns: [string, string][] };
const RES = patterns.map(([re, d]) => [new RegExp(re), d] as const);
const NEWEST = [...Object.values(routes), ...patterns.map((p) => p[1])].sort().at(-1) ?? "";

export function pageDate(pathname: string | null): string {
  const p = (pathname || "/").replace(/\/?$/, "/");
  return routes[p] ?? RES.find(([re]) => re.test(p))?.[1] ?? NEWEST;
}

// Date écrite en toutes lettres (« 7 octobre 2026 », « 1er octobre 2026 »), jamais 2026-10-07 :
// l'ISO reste dans l'attribut datetime (RECETTE §8.4).
export function dateLongue(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  const s = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(d);
  return s.replace(/^1 /, "1er ");
}
