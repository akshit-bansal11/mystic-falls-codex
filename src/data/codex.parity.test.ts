import { describe, expect, it } from 'vitest'
import { CAUSAL_MAP } from '@/data/causal-map'
import { FAMILY_TREES } from '@/data/family-trees'
import { GROUPS } from '@/data/groups'
import { PEOPLE } from '@/data/people'
import { WATCH_ORDER } from '@/data/watch-order'

/**
 * Mechanical parity for the data modules (TEST-24).
 *
 * Every id in the content is a cross-reference that renders as a link. A
 * dangling one is not a type error - every id is a string - so it would ship as
 * a dead link or a silently dropped entry. These assertions fail on the
 * difference rather than relying on someone re-reading 110 biographies.
 */
const personIds = new Set(PEOPLE.map((person) => person.id))
const nodeIds = new Set(CAUSAL_MAP.map((node) => node.id))

describe('causal map references', () => {
  it('points every consequence at a node that exists', () => {
    const dangling = CAUSAL_MAP.flatMap((node) =>
      node.leadsTo
        .filter((link) => !nodeIds.has(link.node))
        .map((link) => `${node.id} -> ${link.node}`)
    )

    expect(dangling).toEqual([])
  })

  it('points every involved person at a person that exists', () => {
    const dangling = CAUSAL_MAP.flatMap((node) =>
      node.peopleInvolved.filter((id) => !personIds.has(id)).map((id) => `${node.id} -> ${id}`)
    )

    expect(dangling).toEqual([])
  })
})

describe('person references', () => {
  it('resolves every connection to either a person or a causal-map node', () => {
    const dangling = PEOPLE.flatMap((person) =>
      person.connections
        .filter((connection) => !personIds.has(connection.id) && !nodeIds.has(connection.id))
        .map((connection) => `${person.id} -> ${connection.id}`)
    )

    expect(dangling).toEqual([])
  })
})

describe('family tree references', () => {
  it('points every member at a person that exists', () => {
    const dangling = FAMILY_TREES.flatMap((family) =>
      family.members
        .filter((m) => !personIds.has(m.person))
        .map((m) => `${family.id} -> ${m.person}`)
    )

    expect(dangling).toEqual([])
  })

  it('joins every link between two members of the same tree', () => {
    const dangling = FAMILY_TREES.flatMap((family) => {
      const members = new Set(family.members.map((m) => m.person))
      return family.links
        .filter((link) => !members.has(link.from) || !members.has(link.to))
        .map((link) => `${family.id}: ${link.from} -> ${link.to}`)
    })

    expect(dangling).toEqual([])
  })
})

describe('faction references', () => {
  it('points every roster entry at a person that exists', () => {
    const dangling = GROUPS.flatMap((group) =>
      group.roster.flatMap((section) =>
        section.people.filter((id) => !personIds.has(id)).map((id) => `${group.id} -> ${id}`)
      )
    )

    expect(dangling).toEqual([])
  })
})

describe('identifier uniqueness', () => {
  it('gives every person a distinct id', () => {
    expect(personIds.size).toBe(PEOPLE.length)
  })

  it('gives every causal-map node a distinct id', () => {
    expect(nodeIds.size).toBe(CAUSAL_MAP.length)
  })

  it('gives every faction a distinct slug', () => {
    expect(new Set(GROUPS.map((group) => group.id)).size).toBe(GROUPS.length)
  })
})

/**
 * The interleaved watch-order steps used to hold a three-row stub reading
 * "... alternating ...", which renders fine and tells nobody what to watch.
 * The real schedule is 122 rows across three steps, and the way it breaks is a
 * dropped or repeated episode - invisible by eye, and not a type error, since
 * every episode is a string. These assertions fail on the difference.
 */
const SEASON_LENGTH = 22

const PAIRED_STEPS: { step: string; seasons: Record<'TVD' | 'TO', number> }[] = [
  { step: '03', seasons: { TVD: 5, TO: 1 } },
  { step: '04', seasons: { TVD: 6, TO: 2 } },
  { step: '05', seasons: { TVD: 7, TO: 3 } },
]

describe('watch order pairings', () => {
  it.each(PAIRED_STEPS)('covers both seasons of step $step in order', ({ step, seasons }) => {
    const found = WATCH_ORDER.steps.find((candidate) => candidate.step === step)
    const expected = Array.from({ length: SEASON_LENGTH }, (_, index) => index + 1)

    for (const show of ['TVD', 'TO'] as const) {
      const watched = (found?.pairing ?? [])
        .filter((sitting) => sitting.show === show)
        .flatMap((sitting) => sitting.episodes.split(',').map((episode) => episode.trim()))
        .map((episode) => `${show} ${episode}`)

      // Season and episode are asserted together: a 6x04 among season 5 rows
      // would otherwise pass a bare episode-number check.
      expect(watched).toEqual(
        expected.map((n) => `${show} ${seasons[show]}×${String(n).padStart(2, '0')}`)
      )
    }
  })

  it('leaves the straight-through steps unpaired', () => {
    const paired = new Set(PAIRED_STEPS.map((entry) => entry.step))
    const strays = WATCH_ORDER.steps
      .filter((step) => !paired.has(step.step) && step.pairing.length > 0)
      .map((step) => step.step)

    expect(strays).toEqual([])
  })
})
