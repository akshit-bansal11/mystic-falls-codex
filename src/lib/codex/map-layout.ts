import { CAUSAL_MAP } from '@/data/causal-map'
import { ERAS } from '@/data/eras'
import type { CausalNode } from '@/types/codex/causal-node'
import type { Era, EraNum } from '@/types/codex/era'

/**
 * Grid geometry, carried over from the original build unchanged so the map
 * keeps its proportions. Five columns, and each era gets a band tall enough for
 * its own row count.
 */
export const MAP = {
  nodeWidth: 196,
  nodeHeight: 72,
  colPitch: 214,
  originX: 88,
  rowPitch: 110,
  bandHeader: 68,
  bandPadding: 30,
  columns: 5,
} as const

export const CANVAS_WIDTH = MAP.originX + (MAP.columns - 1) * MAP.colPitch + MAP.nodeWidth + 44

export interface EraBand {
  era: Era
  top: number
  height: number
  rowCount: number
}

export interface PlacedNode extends CausalNode {
  x: number
  y: number
  centreX: number
  centreY: number
}

interface MapLayout {
  bands: EraBand[]
  nodes: PlacedNode[]
  canvasHeight: number
}

/**
 * Bands each era to fit its tallest row, then places every node inside its
 * band. Pure, so the geometry is checkable without a browser.
 */
export function buildMapLayout(nodes: CausalNode[] = CAUSAL_MAP, eras: Era[] = ERAS): MapLayout {
  const bands: EraBand[] = []
  const topByEra = new Map<EraNum, number>()
  let canvasHeight = 0

  for (const era of eras) {
    const inEra = nodes.filter((node) => node.era === era.num)
    const rowCount = inEra.reduce((max, node) => Math.max(max, node.row + 1), 1)
    const height = MAP.bandHeader + rowCount * MAP.rowPitch + MAP.bandPadding
    bands.push({ era, top: canvasHeight, height, rowCount })
    topByEra.set(era.num, canvasHeight)
    canvasHeight += height
  }

  const placed = nodes.map((node) => {
    const x = MAP.originX + node.col * MAP.colPitch
    const y = (topByEra.get(node.era) ?? 0) + MAP.bandHeader + node.row * MAP.rowPitch
    return {
      ...node,
      x,
      y,
      centreX: x + MAP.nodeWidth / 2,
      centreY: y + MAP.nodeHeight / 2,
    }
  })

  return { bands, nodes: placed, canvasHeight }
}

/** Where an edge should meet a node's box, given the direction it comes from. */
function anchor(node: PlacedNode, towardX: number, towardY: number) {
  const dx = towardX - node.centreX
  const dy = towardY - node.centreY
  if (dx === 0 && dy === 0) return { x: node.centreX, y: node.centreY }
  const halfWidth = MAP.nodeWidth / 2 + 5
  const halfHeight = MAP.nodeHeight / 2 + 5
  const scale = Math.min(
    dx === 0 ? Number.POSITIVE_INFINITY : halfWidth / Math.abs(dx),
    dy === 0 ? Number.POSITIVE_INFINITY : halfHeight / Math.abs(dy)
  )
  return { x: node.centreX + dx * scale, y: node.centreY + dy * scale }
}

export interface MapEdge {
  from: string
  to: string
  relation: string
  path: string
}

/**
 * One cubic per causal link, bowing along the dominant axis. Reciprocal pairs
 * are drawn once.
 */
export function buildMapEdges(placed: PlacedNode[]): MapEdge[] {
  const byId = new Map(placed.map((node) => [node.id, node]))
  const edges: MapEdge[] = []
  const seen = new Set<string>()

  for (const source of placed) {
    for (const link of source.leadsTo) {
      const target = byId.get(link.node)
      if (!target) continue
      if (seen.has(`${link.node}->${source.id}`)) continue
      seen.add(`${source.id}->${link.node}`)

      const start = anchor(source, target.centreX, target.centreY)
      const end = anchor(target, source.centreX, source.centreY)
      const dx = end.x - start.x
      const dy = end.y - start.y

      const path =
        Math.abs(dy) >= Math.abs(dx)
          ? (() => {
              const k = Math.max(28, Math.abs(dy) * 0.42) * Math.sign(dy || 1)
              return `M${start.x} ${start.y} C ${start.x} ${start.y + k}, ${end.x} ${end.y - k}, ${end.x} ${end.y}`
            })()
          : (() => {
              const k = Math.max(28, Math.abs(dx) * 0.42) * Math.sign(dx || 1)
              return `M${start.x} ${start.y} C ${start.x + k} ${start.y}, ${end.x - k} ${end.y}, ${end.x} ${end.y}`
            })()

      edges.push({ from: source.id, to: link.node, relation: link.relation, path })
    }
  }

  return edges
}

/**
 * Greedy word wrap for a node label.
 *
 * The original wrapped titles onto two lines rather than truncating, so a node
 * showed its whole name. Overflow past the last line is folded back onto it, so
 * nothing is silently dropped without the caller seeing it.
 */
export function wrapLabel(text: string, maxChars: number, maxLines: number): string[] {
  const lines: string[] = []
  let current = ''

  for (const word of text.split(' ')) {
    const candidate = current ? `${current} ${word}` : word
    if (candidate.length > maxChars && current) {
      lines.push(current)
      current = word
    } else {
      current = candidate
    }
  }
  if (current) lines.push(current)

  if (lines.length > maxLines) {
    const folded = lines.slice(maxLines - 1).join(' ')
    lines.length = maxLines - 1
    lines.push(folded)
  }
  return lines
}
