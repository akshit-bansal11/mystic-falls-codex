import { describe, expect, it } from 'vitest'
import { buildMapEdges, buildMapLayout, wrapLabel } from '@/lib/codex/map-layout'
import type { CausalNode } from '@/types/codex/causal-node'
import type { Era, EraNum } from '@/types/codex/era'

function buildNode(overrides: Partial<CausalNode> & { id: string }): CausalNode {
  return {
    title: 'A node',
    era: 'I',
    dated: 'c. 100 BC',
    category: 'origin',
    summary: '',
    facts: [],
    peopleInvolved: [],
    leadsTo: [],
    row: 0,
    col: 0,
    ...overrides,
  }
}

function buildEra(num: EraNum): Era {
  return { num, name: `Era ${num}`, when: 'sometime' }
}

describe('buildMapLayout', () => {
  it('places a node at its column pitch from the origin', () => {
    const nodes = [buildNode({ id: 'a', col: 2 })]

    const { nodes: placed } = buildMapLayout(nodes, [buildEra('I')])

    // originX 88 + col 2 * colPitch 214
    expect(placed[0].x).toBe(516)
  })

  it('offsets a node below its band header by the row pitch', () => {
    const nodes = [buildNode({ id: 'a', row: 2 })]

    const { nodes: placed } = buildMapLayout(nodes, [buildEra('I')])

    // band top 0 + bandHeader 68 + row 2 * rowPitch 110
    expect(placed[0].y).toBe(288)
  })

  it('sizes an era band from the number of rows it contains', () => {
    const nodes = [buildNode({ id: 'a', row: 0 }), buildNode({ id: 'b', row: 1 })]

    const { bands } = buildMapLayout(nodes, [buildEra('I')])

    // bandHeader 68 + 2 rows * rowPitch 110 + bandPadding 30
    expect(bands[0].height).toBe(318)
  })

  it('stacks the second era band below the height of the first', () => {
    const nodes = [
      buildNode({ id: 'a', era: 'I', row: 0 }),
      buildNode({ id: 'b', era: 'II', row: 0 }),
    ]

    const { bands } = buildMapLayout(nodes, [buildEra('I'), buildEra('II')])

    // first band is 68 + 1 * 110 + 30 = 208
    expect(bands[1].top).toBe(208)
  })

  it('gives an era with no nodes a single-row band rather than a zero-height one', () => {
    const nodes = [buildNode({ id: 'a', era: 'II' })]

    const { bands } = buildMapLayout(nodes, [buildEra('I'), buildEra('II')])

    expect(bands[0].rowCount).toBe(1)
  })
})

describe('buildMapEdges', () => {
  it('draws one edge between two nodes that link to each other', () => {
    const nodes = [
      buildNode({ id: 'a', col: 0, leadsTo: [{ node: 'b', relation: 'causes' }] }),
      buildNode({ id: 'b', col: 2, leadsTo: [{ node: 'a', relation: 'caused by' }] }),
    ]
    const { nodes: placed } = buildMapLayout(nodes, [buildEra('I')])

    const edges = buildMapEdges(placed)

    expect(edges).toHaveLength(1)
  })

  it('ignores a link pointing at a node that is not on the map', () => {
    const nodes = [buildNode({ id: 'a', leadsTo: [{ node: 'ghost', relation: 'causes' }] })]
    const { nodes: placed } = buildMapLayout(nodes, [buildEra('I')])

    const edges = buildMapEdges(placed)

    expect(edges).toHaveLength(0)
  })

  it('carries the relation from the source node onto the edge', () => {
    const nodes = [
      buildNode({ id: 'a', col: 0, leadsTo: [{ node: 'b', relation: 'sets in motion' }] }),
      buildNode({ id: 'b', col: 3 }),
    ]
    const { nodes: placed } = buildMapLayout(nodes, [buildEra('I')])

    const edges = buildMapEdges(placed)

    expect(edges[0].relation).toBe('sets in motion')
  })

  it('starts the path at the edge of the source box rather than its centre', () => {
    const nodes = [
      buildNode({ id: 'a', col: 0, leadsTo: [{ node: 'b', relation: 'causes' }] }),
      buildNode({ id: 'b', col: 2 }),
    ]
    const { nodes: placed } = buildMapLayout(nodes, [buildEra('I')])

    const edges = buildMapEdges(placed)

    // centre 88 + 98 = 186; the anchor sits half a box plus 5 to the right
    expect(edges[0].path.startsWith('M289 ')).toBe(true)
  })

  it('bows the path vertically when the nodes are further apart down than across', () => {
    const nodes = [
      buildNode({ id: 'a', row: 0, col: 0, leadsTo: [{ node: 'b', relation: 'causes' }] }),
      buildNode({ id: 'b', row: 3, col: 0 }),
    ]
    const { nodes: placed } = buildMapLayout(nodes, [buildEra('I')])

    const edges = buildMapEdges(placed)

    expect(edges[0].path.startsWith('M186 145 C 186 ')).toBe(true)
  })

  it('bows the path horizontally when the nodes are further apart across than down', () => {
    const nodes = [
      buildNode({ id: 'a', row: 0, col: 0, leadsTo: [{ node: 'b', relation: 'causes' }] }),
      buildNode({ id: 'b', row: 0, col: 4 }),
    ]
    const { nodes: placed } = buildMapLayout(nodes, [buildEra('I')])

    const edges = buildMapEdges(placed)

    // anchors at x 289 and x 939; k = max(28, 650 * 0.42) = 273
    expect(edges[0].path).toBe('M289 104 C 562 104, 666 104, 939 104')
  })

  it('falls back to the vertical bow when two nodes share a position', () => {
    const nodes = [
      buildNode({ id: 'a', row: 0, col: 0, leadsTo: [{ node: 'b', relation: 'causes' }] }),
      buildNode({ id: 'b', row: 0, col: 0 }),
    ]
    const { nodes: placed } = buildMapLayout(nodes, [buildEra('I')])

    const edges = buildMapEdges(placed)

    // both anchors collapse to the centre, and dy >= dx is 0 >= 0, so the
    // vertical branch is taken with the minimum bow of 28
    expect(edges[0].path).toBe('M186 104 C 186 132, 186 76, 186 104')
  })
})

describe('wrapLabel', () => {
  it('leaves a label that fits on one line unwrapped', () => {
    const lines = wrapLabel('Silas & Qetsiyah', 26, 2)

    expect(lines).toEqual(['Silas & Qetsiyah'])
  })

  it('breaks a long label onto a second line at a word boundary', () => {
    const lines = wrapLabel('The hybrid curse is broken at last', 26, 2)

    // 'The hybrid curse is broken' is exactly 26 characters, so it fits
    expect(lines).toEqual(['The hybrid curse is broken', 'at last'])
  })

  it('folds overflow back onto the last line rather than dropping words', () => {
    const lines = wrapLabel('one two three four five six seven eight nine ten', 10, 2)

    expect(lines).toEqual(['one two', 'three four five six seven eight nine ten'])
  })

  it('never returns more lines than it was allowed', () => {
    const lines = wrapLabel('alpha bravo charlie delta echo foxtrot golf hotel', 8, 2)

    expect(lines).toHaveLength(2)
  })
})
