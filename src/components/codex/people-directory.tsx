'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { StrandDot } from '@/components/codex/strand-dot'
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
                  : 'border-default text-muted hover:text-primary',
              ].join(' ')}
            >
              <StrandDot strand={category.key} className="mr-2" />
              {category.name}
            </button>
          ))}
        </fieldset>
      </div>

      <p role="status" aria-live="polite" className="text-faint mb-6 font-mono text-meta">
        {visible.length} of {people.length} people
      </p>

      {visible.length === 0 ? (
        <div className="bg-raised rounded-card px-4 py-10 text-center">
          <p className="text-primary text-body">
            No one matches {query ? `"${query.trim()}"` : 'that'}
            {strand ? ' in this strand' : ''}.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery('')
              setStrand(null)
            }}
            className="border-default text-primary hover:border-strong duration-fast ease-standard mt-4 min-h-11 rounded-control border px-4 font-mono text-meta transition-colors"
          >
            Show all 110 people
          </button>
        </div>
      ) : (
        <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((person) => (
            <li key={person.id}>
              <Link
                href={`/people/${person.id}`}
                className="bg-surface border-subtle hover:border-strong duration-fast ease-standard block h-full rounded-card border p-4 transition-colors"
              >
                <span className="text-faint flex items-center gap-2 text-eyebrow uppercase">
                  <StrandDot strand={person.category} />
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
