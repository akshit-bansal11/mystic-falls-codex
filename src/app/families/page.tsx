import type { Metadata } from 'next'
import { FAMILY_TREES } from '@/data/family-trees'
import { LINK_STYLE, linkPath, placeMember, TREE, treeSize } from '@/lib/codex/family-layout'
import { PERSON_BY_ID } from '@/lib/codex/person-index'

export const metadata: Metadata = {
  title: 'Families',
  description:
    'Eleven family trees and sirelines: the Mikaelsons, the doppelgangers, the Salvatores, the Bennett witches, the Gemini coven and more.',
  alternates: { canonical: '/families' },
}

export default function FamiliesPage() {
  return (
    <>
      <h2 className="text-primary font-display text-h1">Families</h2>
      <p className="text-muted mt-2 mb-10 max-w-2xl text-lead">
        Eleven trees. Solid lines are blood, level lines are marriages, dashed lines are sirelines:
        the vampire equivalent of descent.
      </p>

      <div className="space-y-16">
        {FAMILY_TREES.map((family) => {
          const placed = family.members.map(placeMember)
          const byPerson = new Map(placed.map((member) => [member.person, member]))
          const { width, height } = treeSize(family.members, family.rows.length)
          const titleId = `tree-${family.id}-title`

          return (
            <article key={family.id} id={family.id} className="scroll-mt-8">
              <h3 className="text-primary font-display text-h2">{family.name}</h3>
              <p className="text-muted mt-1 mb-4 max-w-3xl text-body">{family.blurb}</p>

              {/* The chart scrolls inside its own box so the page never scrolls
                  horizontally at 320px (UI-16). */}
              <div className="bg-sunk rounded-surface border-subtle overflow-x-auto border p-2">
                <svg
                  viewBox={`0 0 ${width} ${height}`}
                  width={width}
                  height={height}
                  aria-labelledby={titleId}
                  className="block h-auto max-w-none"
                >
                  <title id={titleId}>{family.name} family tree</title>

                  {/* Generation bands. The labels name each generation, so they
                      stay in the accessibility tree rather than being hidden. */}
                  <g>
                    {family.rows.map((row) => (
                      <text
                        key={row.row}
                        x={TREE.padding}
                        y={TREE.padding + row.row * TREE.rowPitch + TREE.boxHeight / 2 + 4}
                        className="fill-[var(--text-faint)] font-mono text-[11px]"
                      >
                        {row.label}
                      </text>
                    ))}
                  </g>

                  {/* Relationship lines are decoration: the relationships are
                      also stated in the list below the chart. */}
                  <g fill="none">
                    {family.links.map((link) => {
                      const from = byPerson.get(link.from)
                      const to = byPerson.get(link.to)
                      if (!from || !to) return null
                      return (
                        <path
                          key={`${link.from}-${link.to}-${link.type}`}
                          d={linkPath(from, to)}
                          stroke="var(--border-default)"
                          strokeWidth={1.5}
                          strokeDasharray={LINK_STYLE[link.type].dash}
                        />
                      )
                    })}
                  </g>

                  {placed.map((member) => {
                    const person = PERSON_BY_ID.get(member.person)
                    if (!person) return null

                    return (
                      <a
                        key={member.person}
                        href={`/people/${member.person}`}
                        className="[&:focus-visible_rect]:stroke-[var(--border-strong)] [&:hover_rect]:stroke-[var(--border-strong)]"
                      >
                        <rect
                          x={member.x}
                          y={member.y}
                          width={TREE.boxWidth}
                          height={TREE.boxHeight}
                          rx={6}
                          fill="var(--bg-surface)"
                          stroke="var(--border-default)"
                          strokeWidth={1.5}
                        />
                        <text
                          x={member.x + 10}
                          y={member.y + 22}
                          className="fill-[var(--text-primary)] text-[13px]"
                        >
                          {person.name}
                        </text>
                        <text
                          x={member.x + 10}
                          y={member.y + 39}
                          className="fill-[var(--text-faint)] font-mono text-[10px]"
                        >
                          {person.kind}
                        </text>
                      </a>
                    )
                  })}
                </svg>
              </div>

              <details className="mt-3">
                <summary className="text-muted hover:text-primary min-h-11 cursor-pointer font-mono text-meta">
                  {family.links.length} relationships, as text
                </summary>
                <ul className="mt-2 space-y-1">
                  {family.links.map((link) => {
                    const from = PERSON_BY_ID.get(link.from)
                    const to = PERSON_BY_ID.get(link.to)
                    if (!from || !to) return null
                    return (
                      <li
                        key={`${link.from}-${link.to}-${link.type}-text`}
                        className="text-muted text-meta"
                      >
                        {from.name}{' '}
                        <span className="text-faint font-mono">{LINK_STYLE[link.type].label}</span>{' '}
                        {to.name}
                      </li>
                    )
                  })}
                </ul>
              </details>
            </article>
          )
        })}
      </div>
    </>
  )
}
