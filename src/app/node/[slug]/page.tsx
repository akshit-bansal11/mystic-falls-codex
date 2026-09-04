import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { StrandDot } from '@/components/codex/strand-dot'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { CAUSAL_MAP } from '@/data/causal-map'
import { CATEGORY_BY_KEY } from '@/lib/codex/category-index'
import { ERA_BY_NUM } from '@/lib/codex/era-index'
import { NODE_BY_ID } from '@/lib/codex/node-index'
import { PERSON_BY_ID } from '@/lib/codex/person-index'

interface NodePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return CAUSAL_MAP.map((node) => ({ slug: node.id }))
}

export async function generateMetadata({ params }: NodePageProps): Promise<Metadata> {
  const { slug } = await params
  const node = NODE_BY_ID.get(slug)
  if (!node) return {}
  return {
    title: node.title,
    description: node.summary.slice(0, 160),
    alternates: { canonical: `/node/${node.id}` },
    openGraph: {
      title: node.title,
      description: node.summary.slice(0, 160),
      url: `/node/${node.id}`,
    },
  }
}

export default async function NodePage({ params }: NodePageProps) {
  const { slug } = await params
  const node = NODE_BY_ID.get(slug)
  if (!node) notFound()

  const category = CATEGORY_BY_KEY.get(node.category)
  const era = ERA_BY_NUM.get(node.era)

  // What this event caused, and what caused it: the second direction is not
  // stored, so it is derived by scanning for links that point here.
  const causes = CAUSAL_MAP.filter((other) =>
    other.leadsTo.some((link) => link.node === node.id)
  ).map((other) => ({
    node: other,
    relation: other.leadsTo.find((link) => link.node === node.id)?.relation ?? '',
  }))

  return (
    <article className="max-w-3xl">
      <Breadcrumbs trail={[{ href: '/', label: 'The Map' }]} current={node.title} />
      <p className="text-faint flex items-center gap-2 font-mono text-eyebrow uppercase">
        <StrandDot strand={node.category} />
        {category?.name} &middot; Era {node.era}
        {era ? `, ${era.name}` : ''}
      </p>
      <h2 className="text-primary mt-1 font-display text-display">{node.title}</h2>
      <p className="text-faint mt-1 font-mono text-meta">{node.dated}</p>

      <p className="text-primary mt-6 font-body text-lead">{node.summary}</p>

      {node.facts.length > 0 ? (
        <section className="mt-10">
          <h3 className="text-primary font-display text-h3">Details</h3>
          <ul className="mt-3 space-y-2">
            {node.facts.map((fact) => (
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

      {node.peopleInvolved.length > 0 ? (
        <section className="mt-10">
          <h3 className="text-primary font-display text-h3">Who is involved</h3>
          <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
            {node.peopleInvolved.map((personId) => {
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
        </section>
      ) : null}

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <section>
          <h3 className="text-primary font-display text-h3">What led here</h3>
          {causes.length === 0 ? (
            <p className="text-faint mt-3 text-meta">
              Nothing in the chronicle precedes this. It is where a strand begins.
            </p>
          ) : (
            <ul className="mt-3 list-none space-y-2 p-0">
              {causes.map(({ node: cause, relation }) => (
                <li key={cause.id}>
                  <Link
                    href={`/node/${cause.id}`}
                    className="border-subtle hover:border-strong duration-fast ease-standard block rounded-control border px-3 py-2 transition-colors"
                  >
                    <span className="text-faint block font-mono text-eyebrow uppercase">
                      {relation}
                    </span>
                    <span className="text-primary text-meta">{cause.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h3 className="text-primary font-display text-h3">What it caused</h3>
          {node.leadsTo.length === 0 ? (
            <p className="text-faint mt-3 text-meta">
              Nothing downstream. This is where the strand ends.
            </p>
          ) : (
            <ul className="mt-3 list-none space-y-2 p-0">
              {node.leadsTo.map((link) => {
                const target = NODE_BY_ID.get(link.node)
                if (!target) return null
                return (
                  <li key={link.node}>
                    <Link
                      href={`/node/${link.node}`}
                      className="border-subtle hover:border-strong duration-fast ease-standard block rounded-control border px-3 py-2 transition-colors"
                    >
                      <span className="text-faint block font-mono text-eyebrow uppercase">
                        {link.relation}
                      </span>
                      <span className="text-primary text-meta">{target.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </div>

      <p className="mt-12">
        <Link href="/" className="text-accent hover:text-accent-hover font-mono text-meta">
          &larr; Back to the map
        </Link>
      </p>
    </article>
  )
}
