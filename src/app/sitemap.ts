import type { MetadataRoute } from "next";
import { modeles } from "@/data/modeles";
import { marques } from "@/data/marques";
import { pagesRecharge } from "@/data/recharge";
import { pagesGuides } from "@/data/guides";
import { comparatifs } from "@/data/comparatifs";
import { pagesAcheter } from "@/data/acheter";
import { categories } from "@/data/categories";
import { villes } from "@/data/villes";

export const dynamic = "force-static";

const BASE = "https://guidevoitureelectrique.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdate = "2026-05-28";

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: lastUpdate, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/modeles/`, lastModified: lastUpdate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/marques/`, lastModified: lastUpdate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/comparatifs/`, lastModified: lastUpdate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/guides/`, lastModified: lastUpdate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/acheter/`, lastModified: lastUpdate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/recharge/`, lastModified: lastUpdate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/categories/`, lastModified: lastUpdate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/recharge/bornes/`, lastModified: lastUpdate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/outils/financement/`, lastModified: lastUpdate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/outils/comparateur-elec-thermique/`, lastModified: lastUpdate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/outils/simulateur-cout-recharge/`, lastModified: lastUpdate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/outils/simulateur-aides/`, lastModified: lastUpdate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/outils/comparateur-modeles/`, lastModified: lastUpdate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/marques/voitures-chinoises/`, lastModified: lastUpdate, changeFrequency: "weekly", priority: 0.7 },
  ];

  const modelePages: MetadataRoute.Sitemap = modeles.map((m) => ({
    url: `${BASE}/modeles/${m.slug}/`,
    lastModified: m.dateMAJ,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const marquePages: MetadataRoute.Sitemap = marques.map((m) => ({
    url: `${BASE}/marques/${m.slug}/`,
    lastModified: m.dateMAJ,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const rechargePages: MetadataRoute.Sitemap = pagesRecharge.map((p) => ({
    url: `${BASE}/recharge/${p.slug}/`,
    lastModified: lastUpdate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guidesPages: MetadataRoute.Sitemap = pagesGuides.map((p) => ({
    url: `${BASE}/guides/${p.slug}/`,
    lastModified: lastUpdate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const comparatifPages: MetadataRoute.Sitemap = comparatifs.map((c) => ({
    url: `${BASE}/comparatifs/${c.slug}/`,
    lastModified: lastUpdate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const acheterPages: MetadataRoute.Sitemap = pagesAcheter.map((p) => ({
    url: `${BASE}/acheter/${p.slug}/`,
    lastModified: lastUpdate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoriePages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${BASE}/categories/${c.slug}/`,
    lastModified: lastUpdate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const villePages: MetadataRoute.Sitemap = villes.map((v) => ({
    url: `${BASE}/recharge/bornes/${v.slug}/`,
    lastModified: v.dateMAJ,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...modelePages,
    ...marquePages,
    ...rechargePages,
    ...guidesPages,
    ...comparatifPages,
    ...acheterPages,
    ...categoriePages,
    ...villePages,
  ];
}
