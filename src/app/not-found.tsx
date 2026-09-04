import type { Metadata } from 'next'
import Link from 'next/link'
import { NAV_ITEMS } from '@/config/nav'

// A soft 404 that is indexable competes with real routes (SEO-D13).
export const metadata: Metadata = {
  title: 'Not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="max-w-2xl">
      <p className="text-faint font-mono text-eyebrow uppercase">404</p>
      <h2 className="text-primary mt-1 font-display text-h1">
        Nothing in the chronicle is filed here
      </h2>
      <p className="text-muted mt-3 text-lead">
        The page you asked for does not exist. It may have been a character, an event or an era
        under a different name.
      </p>
      <nav aria-label="Sections" className="mt-8">
        <ul className="flex list-none flex-wrap gap-2 p-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="border-subtle hover:border-strong text-primary duration-fast ease-standard inline-flex min-h-11 items-center rounded-control border px-3 font-mono text-meta transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
