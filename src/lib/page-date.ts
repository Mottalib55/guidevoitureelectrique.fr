import data from "./page-dates.json";

// Date réelle de dernière modification d'une page (scripts/page-dates.mjs, RECETTE §8.4).
const { routes, patterns } = data as unknown as { routes: Record<string, string>; patterns: [string, string][] };
const RES = patterns.map(([re, d]) => [new RegExp(re), d] as const);
const NEWEST = [...Object.values(routes), ...patterns.map((p) => p[1])].sort().at(-1) ?? "";

export function pageDate(pathname: string | null): string {
  const p = (pathname || "/").replace(/\/?$/, "/");
  return routes[p] ?? RES.find(([re]) => re.test(p))?.[1] ?? NEWEST;
}
