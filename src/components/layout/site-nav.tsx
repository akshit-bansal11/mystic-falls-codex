'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/config/nav'

/**
 * Section navigation.
 *
 * These are eight separate documents, so they are links, not tabs. The original
 * marked them up as `role="tablist"` with `aria-selected` on bare anchors, which
 * is invalid ARIA and promises arrow-key movement between panels that eight
 * separate pages cannot deliver. `aria-current="page"` is the correct signal.
 */
export function SiteNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Codex sections" className="border-subtle border-b">
      <ul className="mx-auto flex max-w-6xl list-none flex-wrap gap-x-1 gap-y-0 px-4">
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'inline-flex min-h-11 items-center px-3 font-mono text-meta tracking-wide',
                  'border-b-2 transition-colors duration-fast ease-standard',
                  isActive
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted hover:text-primary',
                ].join(' ')}
              >
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.short}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
