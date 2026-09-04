import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionIndex } from '@/components/layout/section-index'
import { GROUPS } from '@/data/groups'
import { PERSON_BY_ID } from '@/lib/codex/person-index'

export const metadata: Metadata = {
  title: 'Factions',
  description:
    'Nineteen covens, councils, packs and orders, with every roster labelled by relationship rather than listed flat.',
  alternates: { canonical: '/groups' },
}

export default function GroupsPage() {
  return (
    <>
      <h2 className="text-primary font-display text-h1">Factions</h2>
      <p className="text-muted mt-2 mb-10 max-w-2xl text-lead">
        Nineteen groups. Rosters are labelled by relationship, not membership: the people a faction
        hunted are not the people who belonged to it.
      </p>

      <SectionIndex
        label="Factions on this page"
        items={GROUPS.map((group) => ({ href: `#${group.id}`, label: group.name }))}
      />

      <div className="space-y-12">
        {GROUPS.map((group) => (
          <article key={group.id} id={group.id} className="border-subtle scroll-mt-8 border-t pt-6">
            <h3 className="text-primary font-display text-h2">{group.name}</h3>
            <p className="text-faint font-mono text-meta">{group.era}</p>
            <p className="text-primary mt-3 max-w-3xl text-body">{group.description}</p>

            {group.points.length > 0 ? (
              <ul className="mt-4 max-w-3xl space-y-2">
                {group.points.map((point) => (
                  <li
                    key={point.slice(0, 48)}
                    className="text-muted border-subtle border-l-2 pl-4 text-body"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}

            {group.roster.map((section) => (
              <div key={section.label} className="mt-5">
                <p className="text-faint font-mono text-eyebrow uppercase">{section.label}</p>
                <ul className="mt-2 flex list-none flex-wrap gap-2 p-0">
                  {section.people.map((personId) => {
                    const person = PERSON_BY_ID.get(personId)
                    if (!person) return null
                    return (
                      <li key={personId}>
                        <Link
                          href={`/people/${personId}`}
                          className="border-subtle hover:border-strong text-primary duration-fast ease-standard inline-flex min-h-11 items-center rounded-control border px-3 text-meta transition-colors"
                        >
                          {person.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </div>
    </>
  )
}
