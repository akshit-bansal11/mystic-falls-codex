export interface SectionLink {
  href: string
  label: string
}

interface SectionIndexProps {
  items: SectionLink[]
  /** Names the region for screen readers, since a page can hold several navs. */
  label: string
}

/**
 * Jump links for a page that is one long scroll.
 *
 * These pages run to nineteen factions or a hundred dated events, so without an
 * index the only way to reach the end is to scroll it. The links are ordinary
 * in-body anchors, so they are also the crawl path to each section.
 */
export function SectionIndex({ items, label }: SectionIndexProps) {
  return (
    <nav aria-label={label} className="border-subtle mb-10 border-y py-4">
      <ul className="flex list-none flex-wrap gap-x-2 gap-y-1 p-0">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-muted hover:text-primary hover:border-strong border-subtle duration-fast ease-standard inline-flex min-h-11 items-center rounded-control border px-3 font-mono text-meta transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
