import { MetadataRoute } from "next";
import { programs } from "@/data/programs";
import { trainers } from "@/data/trainers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prospira-fitness.example.com";
  const currentDate = new Date().toISOString();

  const coreRoutes = [
    "",
    "/about",
    "/programs",
    "/trainers",
    "/membership",
    "/schedule",
    "/contact",
    "/faq",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const programRoutes = programs.map((p) => ({
    url: `${baseUrl}/programs/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const trainerRoutes = trainers.map((t) => ({
    url: `${baseUrl}/trainers/${t.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...programRoutes, ...trainerRoutes];
}
