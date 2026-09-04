import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PEOPLE } from '@/data/people'
import { CATEGORY_BY_KEY, CATEGORY_TEXT_CLASS } from '@/lib/codex/category-index'
import { NODE_BY_ID } from '@/lib/codex/node-index'
import { PERSON_BY_ID } from '@/lib/codex/person-index'

interface PersonPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return PEOPLE.map((person) => ({ slug: person.id }))
}

export async function generateMetadata({ params }: PersonPageProps): Promise<Metadata> {
  const { slug } = await params
  const person = PERSON_BY_ID.get(slug)
  if (!person) return {}

  return {
    title: person.name,
    description: person.oneLine,
  }
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { slug } = await params
  const person = PERSON_BY_ID.get(slug)
  if (!person) notFound()

  const category = CATEGORY_BY_KEY.get(person.category)
  const strandClass = CATEGORY_TEXT_CLASS[person.category]

  return (
    <article className="max-w-3xl">
      <p className={`text-eyebrow uppercase ${strandClass}`}>{category?.name}</p>
      <h2 className="text-primary mt-1 font-display text-display">{person.name}</h2>
      {person.alsoKnownAs ? (
        <p className="text-muted mt-1 font-body text-lead italic">{person.alsoKnownAs}</p>
      ) : null}

      <dl className="border-subtle text-meta mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-y py-4">
        <dt className="text-faint font-mono">Lived</dt>
        <dd className="text-primary">{person.lived}</dd>
        <dt className="text-faint font-mono">Kind</dt>
        <dd className="text-primary">{person.kind}</dd>
        <dt className="text-faint font-mono">House</dt>
        <dd className="text-primary">{person.house}</dd>
        <dt className="text-faint font-mono">Appears</dt>
        <dd className="text-primary">{person.appearsIn}</dd>
      </dl>

      <div className="mt-8 space-y-4">
        {person.biography.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="text-primary text-body">
            {paragraph}
          </p>
        ))}
      </div>

      {person.facts.length > 0 ? (
        <section className="mt-10">
          <h3 className="text-primary font-display text-h3">Details</h3>
          <ul className="mt-3 space-y-2">
            {person.facts.map((fact) => (
              <li
                key={fact.slice(0, 48)}
                className="text-muted border-subtle border-l-2 pl-4 text-body"
              >
                {fact}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {person.connections.length > 0 ? (
        <section className="mt-10">
          <h3 className="text-primary font-display text-h3">Connections</h3>
          <ul className="mt-3 grid list-none grid-cols-1 gap-2 p-0 sm:grid-cols-2">
            {person.connections.map((connection) => {
              // A connection targets a person or a causal-map node; resolve in
              // that order, matching the original.
              const target = PERSON_BY_ID.get(connection.id)
              const node = target ? null : NODE_BY_ID.get(connection.id)
              if (!target && !node) return null

              const href = target ? `/people/${target.id}` : `/node/${connection.id}`
              const label = target ? target.name : (node?.title ?? '')

              return (
                <li key={`${connection.id}-${connection.relation}`}>
                  <Link
                    href={href}
                    className="border-subtle hover:border-strong duration-fast ease-standard flex min-h-11 flex-col justify-center rounded-control border px-3 py-2 transition-colors"
                  >
                    <span className="text-faint font-mono text-eyebrow uppercase">
                      {connection.relation}
                    </span>
                    <span className="text-primary text-meta">{label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      ) : null}

      <p className="mt-12">
        <Link href="/people" className="text-accent hover:text-accent-hover font-mono text-meta">
          &larr; All people
        </Link>
      </p>
    </article>
  )
}
