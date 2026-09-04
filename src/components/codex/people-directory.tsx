'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { CATEGORY_TEXT_CLASS } from '@/lib/codex/category-index'
import type { Category, CategoryKey } from '@/types/codex/category'
import type { PersonSummary } from '@/types/codex/person'

interface PeopleDirectoryProps {
  people: PersonSummary[]
  categories: Category[]
}

const matches = (person: PersonSummary, query: string) => {
  const q = query.trim().toLowerCase()
  if (!q) return true
  return (
    person.name.toLowerCase().includes(q) ||
    person.alsoKnownAs.toLowerCase().includes(q) ||
    person.kind.toLowerCase().includes(q) ||
    person.oneLine.toLowerCase().includes(q)
  )
}

export function PeopleDirectory({ people, categories }: PeopleDirectoryProps) {
  const [query, setQuery] = useState('')
  const [strand, setStrand] = useState<CategoryKey | null>(null)

  // Derived from query and strand, so it is computed rather than stored (FE-08).
  const visible = useMemo(
    () => people.filter((p) => (!strand || p.category === strand) && matches(p, query)),
    [people, query, strand]
  )

  return (
    <div>
      <div className="border-subtle mb-8 flex flex-wrap items-end gap-4 border-b pb-6">
        <label className="flex flex-col gap-1">
          <span className="text-eyebrow text-faint uppercase">Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Name, kind, or description"
            className="border-default bg-surface text-primary placeholder:text-faint duration-fast ease-standard min-h-11 w-72 max-w-full rounded-control border px-3 font-body text-body transition-colors"
          />
        </label>

        <fieldset className="flex flex-wrap items-center gap-2">
          <legend className="text-eyebrow text-faint mb-1 uppercase">Strand</legend>
          <button
            type="button"
            onClick={() => setStrand(null)}
            aria-pressed={strand === null}
            className={[
              'min-h-11 rounded-control border px-3 font-mono text-meta transition-colors duration-fast ease-standard',
              strand === null
                ? 'border-strong text-primary bg-raised'
                : 'border-default text-muted hover:text-primary',
            ].join(' ')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setStrand(strand === category.key ? null : category.key)}
              aria-pressed={strand === category.key}
              className={[
                'min-h-11 rounded-control border px-3 font-mono text-meta transition-colors duration-fast ease-standard',
                strand === category.key
                  ? 'border-strong bg-raised'
                  : 'border-default hover:border-strong',
                CATEGORY_TEXT_CLASS[category.key],
              ].join(' ')}
            >
              {category.name}
            </button>
          ))}
        </fieldset>
      </div>

      <p role="status" aria-live="polite" className="text-faint mb-6 font-mono text-meta">
        {visible.length} of {people.length} people
      </p>

      {visible.length === 0 ? (
        <p className="text-muted bg-raised rounded-card px-4 py-8 text-center text-body">
          No one here matches that. Try a shorter search, or clear the strand filter.
        </p>
      ) : (
        <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((person) => (
            <li key={person.id}>
              <Link
                href={`/people/${person.id}`}
                className="bg-surface border-subtle hover:border-strong duration-fast ease-standard block h-full rounded-card border p-4 transition-colors"
              >
                <span className={`text-eyebrow uppercase ${CATEGORY_TEXT_CLASS[person.category]}`}>
                  {person.kind}
                </span>
                <span className="text-primary mt-1 block font-display text-h3">{person.name}</span>
                <span className="text-faint block font-mono text-meta">{person.lived}</span>
                <span className="text-muted mt-2 block text-meta">{person.oneLine}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
