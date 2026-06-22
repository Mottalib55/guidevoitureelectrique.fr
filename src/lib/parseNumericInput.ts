/**
 * Safely parse a numeric input string into a number.
 * Handles French-style commas as decimal separators,
 * strips leading zeros, and returns a fallback for invalid values.
 */
export function safeParseNumber(raw: string, fallback: number): number {
  if (typeof raw !== "string" || raw.trim() === "") return fallback;

  // Replace French comma with period for decimals
  const cleaned = raw.replace(/,/g, ".").replace(/\s/g, "");
  const n = parseFloat(cleaned);

  if (Number.isNaN(n) || !Number.isFinite(n)) return fallback;
  return n;
}
