import Link from 'next/link'
import { SITE_URL } from '@/config/site'

export interface Crumb {
  href: string
  label: string
}

interface BreadcrumbsProps {
  /** Ancestors only; the current page is supplied separately as plain text. */
  trail: Crumb[]
  current: string
}

/**
 * Visible breadcrumbs plus matching BreadcrumbList data (SEO-14). The structured
 * data describes the trail actually rendered below it, never a different one
 * (SEO-13).
 */
export function Breadcrumbs({ trail, current }: BreadcrumbsProps) {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      ...trail.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.label,
        item: `${SITE_URL}${crumb.href}`,
      })),
      {
        '@type': 'ListItem',
        position: trail.length + 1,
        name: current,
      },
    ],
  }

  return (
    <>
      {/* React renders a string child of a non-executable script verbatim, so
          the JSON-LD needs no dangerouslySetInnerHTML and therefore no security
          suppression, which CI-06 would not allow. */}
      <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="text-faint flex list-none flex-wrap items-center gap-2 p-0 font-mono text-meta">
          {trail.map((crumb) => (
            <li key={crumb.href} className="flex items-center gap-2">
              <Link href={crumb.href} className="hover:text-primary transition-colors">
                {crumb.label}
              </Link>
              <span aria-hidden="true">/</span>
            </li>
          ))}
          <li aria-current="page" className="text-muted">
            {current}
          </li>
        </ol>
      </nav>
    </>
  )
}
