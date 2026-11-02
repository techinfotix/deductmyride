import JsonLd from "@/components/JsonLd";

export type BreadcrumbItem = { name: string; item: string };

/** Renders a BreadcrumbList JSON-LD block. The trail must match the real
 *  navigation hierarchy (Home > section > page); do not invent levels
 *  for pages that have no index (e.g. there is no /blog listing page,
 *  so articles link straight from Home). */
export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: it.item,
        })),
      }}
    />
  );
}
