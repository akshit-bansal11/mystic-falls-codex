import type { Metadata } from 'next'
import { PeopleDirectory } from '@/components/codex/people-directory'
import { CATEGORIES } from '@/data/categories'
import { PEOPLE } from '@/data/people'
import type { PersonSummary } from '@/types/codex/person'

export const metadata: Metadata = {
  title: 'People',
  description:
    'One hundred and ten biographies from The Vampire Diaries, The Originals and Legacies, searchable and grouped by strand.',
  alternates: { canonical: '/people' },
}

export default function PeoplePage() {
  const summaries: PersonSummary[] = PEOPLE.map(
    ({ id, name, alsoKnownAs, kind, lived, category, oneLine }) => ({
      id,
      name,
      alsoKnownAs,
      kind,
      lived,
      category,
      oneLine,
    })
  )

  return (
    <>
      <h2 className="font-display text-h1 text-primary">People</h2>
      <p className="text-muted mt-2 mb-8 max-w-2xl text-lead">
        Every named figure the chronicle turns on, from the first immortals to the last class at the
        Salvatore School.
      </p>
      <PeopleDirectory people={summaries} categories={CATEGORIES} />
    </>
  )
}
