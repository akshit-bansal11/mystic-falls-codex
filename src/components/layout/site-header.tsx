import { SiteNav } from '@/components/layout/site-nav'
import { ThemeToggle } from '@/components/layout/theme-toggle'

export function SiteHeader() {
  return (
    <header className="bg-surface">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4 px-4 py-6">
        <div>
          <h1 className="font-display text-h1 text-primary">
            The Mystic Falls <em className="text-accent not-italic">Codex</em>
          </h1>
          <p className="text-muted mt-1 text-meta">
            Two thousand years of one story, Silas to the Salvatore School.
          </p>
        </div>
        <ThemeToggle />
      </div>
      <SiteNav />
    </header>
  )
}
