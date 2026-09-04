import { describe, expect, it } from 'vitest'
import { linkPath, placeMember, treeSize } from '@/lib/codex/family-layout'
import type { FamilyMember } from '@/types/codex/family'

function buildMember(overrides: Partial<FamilyMember> & { person: string }): FamilyMember {
  return { row: 0, col: 0, ...overrides }
}

describe('placeMember', () => {
  it('offsets a member from the label gutter by its column pitch', () => {
    const member = buildMember({ person: 'klaus', col: 2 })

    const placed = placeMember(member)

    // labelGutter 96 + col 2 * colPitch 172
    expect(placed.x).toBe(440)
  })

  it('offsets a member from the top padding by its row pitch', () => {
    const member = buildMember({ person: 'klaus', row: 3 })

    const placed = placeMember(member)

    // padding 12 + row 3 * rowPitch 104
    expect(placed.y).toBe(324)
  })

  it('reports the box centre rather than its corner', () => {
    const member = buildMember({ person: 'klaus' })

    const placed = placeMember(member)

    // x 96 + boxWidth 152 / 2
    expect(placed.centreX).toBe(172)
  })
})

describe('treeSize', () => {
  it('widens the canvas to fit the rightmost column', () => {
    const members = [buildMember({ person: 'a', col: 0 }), buildMember({ person: 'b', col: 3 })]

    const size = treeSize(members, 1)

    // labelGutter 96 + 3 * 172 + boxWidth 152 + padding 12
    expect(size.width).toBe(776)
  })

  it('gives a tree with no rows a single row of height rather than none', () => {
    const size = treeSize([buildMember({ person: 'a' })], 0)

    // padding 12 * 2 + 1 row * rowPitch 104
    expect(size.height).toBe(128)
  })
})

describe('linkPath', () => {
  it('draws a flat horizontal run between two members on the same row', () => {
    const from = placeMember(buildMember({ person: 'a', col: 0 }))
    const to = placeMember(buildMember({ person: 'b', col: 1 }))

    const path = linkPath(from, to)

    expect(path).toBe('M 248 39 H 268')
  })

  it('draws the horizontal run left to right regardless of argument order', () => {
    const left = placeMember(buildMember({ person: 'a', col: 0 }))
    const right = placeMember(buildMember({ person: 'b', col: 1 }))

    const path = linkPath(right, left)

    expect(path).toBe('M 248 39 H 268')
  })

  it('steps down through a mid-line when the members are on different rows', () => {
    const parent = placeMember(buildMember({ person: 'a', row: 0, col: 0 }))
    const child = placeMember(buildMember({ person: 'b', row: 1, col: 1 }))

    const path = linkPath(parent, child)

    expect(path).toBe('M 172 66 V 91 H 344 V 116')
  })
})
