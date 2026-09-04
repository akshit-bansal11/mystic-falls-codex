import type { FamilyLink, FamilyMember } from '@/types/codex/family'

/** Box and pitch for a family tree, in SVG user units. */
export const TREE = {
  boxWidth: 152,
  boxHeight: 54,
  colPitch: 172,
  rowPitch: 104,
  labelGutter: 96,
  padding: 12,
} as const

export interface PlacedMember extends FamilyMember {
  x: number
  y: number
  centreX: number
  centreY: number
}

export function placeMember(member: FamilyMember): PlacedMember {
  const x = TREE.labelGutter + member.col * TREE.colPitch
  const y = TREE.padding + member.row * TREE.rowPitch
  return {
    ...member,
    x,
    y,
    centreX: x + TREE.boxWidth / 2,
    centreY: y + TREE.boxHeight / 2,
  }
}

export function treeSize(members: FamilyMember[], rowCount: number) {
  const maxCol = members.reduce((max, m) => Math.max(max, m.col), 0)
  return {
    width: TREE.labelGutter + maxCol * TREE.colPitch + TREE.boxWidth + TREE.padding,
    height: TREE.padding * 2 + Math.max(rowCount, 1) * TREE.rowPitch,
  }
}

/**
 * An orthogonal path between two boxes: out of the source, along a mid-line,
 * then into the target. Straight segments read as a family chart; a curve reads
 * as a flow diagram.
 */
export function linkPath(from: PlacedMember, to: PlacedMember): string {
  if (from.row === to.row) {
    const y = from.centreY
    const [left, right] = from.centreX <= to.centreX ? [from, to] : [to, from]
    return `M ${left.x + TREE.boxWidth} ${y} H ${right.x}`
  }
  const [upper, lower] = from.centreY <= to.centreY ? [from, to] : [to, from]
  const startY = upper.y + TREE.boxHeight
  const endY = lower.y
  const midY = startY + (endY - startY) / 2
  return `M ${upper.centreX} ${startY} V ${midY} H ${lower.centreX} V ${endY}`
}

export const LINK_STYLE: Record<FamilyLink['type'], { dash?: string; label: string }> = {
  blood: { label: 'descended from' },
  marry: { dash: '1 0', label: 'married to' },
  sire: { dash: '5 4', label: 'sired by' },
}
