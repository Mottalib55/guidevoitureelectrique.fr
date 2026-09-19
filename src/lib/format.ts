// Nombre affiché à la française (« 77,4 kWh » et non « 77.4 kWh », RECETTE §4) : jamais
// `{m.batterieKwh}` brut ni `toFixed()` pour un nombre montré à l'écran.
export function dec(value: number, digits = 2): string {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: digits }).format(value);
}
