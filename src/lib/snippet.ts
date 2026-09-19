/**
 * Longueurs des extraits (RECETTE-SITE.md §11) : titre 50–60 caractères, description 150–160.
 * Les gabarits donnent un début fixe et une liste de fins, la meilleure d'abord ; la première
 * qui tombe dans l'intervalle est retenue. `buildMetadata` refuse ensuite tout extrait hors
 * intervalle : le build échoue plutôt que de publier une page mal calibrée.
 */
export const TITLE_RANGE: [number, number] = [50, 60];
export const DESC_RANGE: [number, number] = [150, 160];

export function fit(start: string, endings: string[], [min, max]: [number, number], what: string): string {
  const hit = endings.map((e) => start + e).find((c) => c.length >= min && c.length <= max);
  if (hit) return hit;
  const msg = `${what} hors ${min}–${max} caractères : « ${start}${endings[0]} » (${(start + endings[0]).length})`;
  if (process.env.SNIPPET_REPORT) { console.warn(`SNIPPET ${msg}`); return start + endings[0]; }
  throw new Error(msg);
}

export function assertSnippet(title: string, description: string, path: string): void {
  const [tMin, tMax] = TITLE_RANGE;
  const [dMin, dMax] = DESC_RANGE;
  const errors: string[] = [];
  if (title.length < tMin || title.length > tMax) errors.push(`titre ${title.length} « ${title} »`);
  if (description.length < dMin || description.length > dMax) errors.push(`description ${description.length} « ${description} »`);
  if (!errors.length) return;
  const msg = `${path} : ${errors.join(" ; ")}`;
  // SNIPPET_REPORT=1 : liste toutes les pages hors intervalle sans arrêter le build (audit).
  if (process.env.SNIPPET_REPORT) console.warn(`SNIPPET ${msg}`);
  else throw new Error(msg);
}
