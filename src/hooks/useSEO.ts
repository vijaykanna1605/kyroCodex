import { useEffect } from "react";
import { site } from "@/data/site";

/**
 * Lightweight per-page SEO: sets document title and meta description.
 */
export function useSEO(title: string, description?: string) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
    document.title = fullTitle;

    const desc = description ?? site.description;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;
    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = desc;
  }, [title, description]);
}
